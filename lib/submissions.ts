import fs from 'fs'
import path from 'path'
import type { SubmissionType } from './submission-types'
import { SUBMISSION_TYPES } from './submission-types'
import { ensureSubmissionsSchema, getSql } from './db'
import { MissingDatabaseUrlError } from './submission-api-errors'

export type { SubmissionType }
export {
  SUBMISSION_TYPES,
  SUBMISSION_TYPE_LABELS,
  getSubmissionTypeLabel,
  isSubmissionType,
} from './submission-types'

const DATA_DIR = path.join(process.cwd(), 'data')

// Ensure data directory exists (local / file-only mode)
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  } catch {
    /* Vercel etc.: read-only FS; DATABASE_URL mode skips files */
  }
}

export interface Submission {
  id: string
  type: SubmissionType
  data: Record<string, any>
  submittedAt: string
  status?: 'pending' | 'reviewed' | 'resolved'
}

const getFilePath = (type: SubmissionType) => {
  return path.join(DATA_DIR, `${type}.json`)
}

/** File name is canonical for admin filters (embedded `type` may be missing or wrong on legacy rows). */
function normalizeSubmissionsFromFile(
  fileType: SubmissionType,
  rawList: unknown
): Submission[] {
  if (!Array.isArray(rawList)) {
    return []
  }
  return rawList.map((item) => {
    const s = item as Submission
    return {
      ...s,
      type: fileType,
    }
  })
}

const sortBySubmittedDesc = (a: Submission, b: Submission) =>
  new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()

function mapDbRow(r: Record<string, unknown>): Submission {
  const id = String(r.id ?? '')
  const type = String(r.type ?? '') as SubmissionType
  const rawData = r.data
  const data =
    rawData && typeof rawData === 'object' && !Array.isArray(rawData)
      ? (rawData as Record<string, any>)
      : {}
  const st = r.submitted_at
  const submittedAt =
    st instanceof Date ? st.toISOString() : String(st ?? new Date().toISOString())
  const statusRaw = r.status
  const status =
    statusRaw === 'pending' || statusRaw === 'reviewed' || statusRaw === 'resolved'
      ? statusRaw
      : 'pending'
  return {
    id,
    type,
    data,
    submittedAt,
    status,
  }
}

function saveSubmissionToFile(submission: Submission): void {
  const filePath = getFilePath(submission.type)
  let submissions: Submission[] = []

  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      submissions = JSON.parse(fileContent)
    } catch (error) {
      console.error('Error reading submissions file:', error)
      submissions = []
    }
  }

  submissions.push(submission)
  fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8')
}

export async function saveSubmission(
  type: SubmissionType,
  data: Record<string, any>
): Promise<Submission> {
  const submission: Submission = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    data,
    submittedAt: new Date().toISOString(),
    status: 'pending',
  }

  const db = getSql()
  if (!db) {
    if (process.env.VERCEL === '1') {
      throw new MissingDatabaseUrlError()
    }
    saveSubmissionToFile(submission)
    return submission
  }

  try {
    await ensureSubmissionsSchema(db)
    await db`
      INSERT INTO submissions (id, type, data, submitted_at, status)
      VALUES (
        ${submission.id},
        ${submission.type},
        ${db.json(submission.data)},
        ${submission.submittedAt},
        ${submission.status ?? 'pending'}
      )
    `
  } catch (err) {
    console.error('Postgres saveSubmission error:', err)
    throw err
  }
  return submission
}

export async function getSubmissions(type?: SubmissionType): Promise<Submission[]> {
  const db = getSql()
  if (db) {
    await ensureSubmissionsSchema(db)
    const rows = type
      ? await db`
          SELECT id, type, data, submitted_at, status
          FROM submissions
          WHERE type = ${type}
          ORDER BY submitted_at DESC
        `
      : await db`
          SELECT id, type, data, submitted_at, status
          FROM submissions
          ORDER BY submitted_at DESC
        `
    return rows.map((r) => mapDbRow(r as Record<string, unknown>))
  }

  if (type) {
    const filePath = getFilePath(type)
    if (!fs.existsSync(filePath)) {
      return []
    }
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const parsed = JSON.parse(fileContent)
      return normalizeSubmissionsFromFile(type, parsed).sort(sortBySubmittedDesc)
    } catch (error) {
      console.error('Error reading submissions file:', error)
      return []
    }
  }

  const allSubmissions: Submission[] = []
  SUBMISSION_TYPES.forEach((t) => {
    const filePath = getFilePath(t)
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const parsed = JSON.parse(fileContent)
        allSubmissions.push(...normalizeSubmissionsFromFile(t, parsed))
      } catch (error) {
        console.error(`Error reading ${t} submissions:`, error)
      }
    }
  })
  return allSubmissions.sort(sortBySubmittedDesc)
}

export async function updateSubmissionStatus(
  type: SubmissionType,
  id: string,
  status: 'pending' | 'reviewed' | 'resolved'
): Promise<boolean> {
  const db = getSql()
  if (db) {
    await ensureSubmissionsSchema(db)
    const rows = await db`
      UPDATE submissions
      SET status = ${status}
      WHERE id = ${id} AND type = ${type}
      RETURNING id
    `
    return rows.length > 0
  }

  const filePath = getFilePath(type)
  if (!fs.existsSync(filePath)) {
    return false
  }
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const submissions: Submission[] = JSON.parse(fileContent)
    const submission = submissions.find((s) => s.id === id)
    if (submission) {
      submission.status = status
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8')
      return true
    }
    return false
  } catch (error) {
    console.error('Error updating submission:', error)
    return false
  }
}

export async function deleteSubmission(
  type: SubmissionType,
  id: string
): Promise<boolean> {
  const db = getSql()
  if (db) {
    await ensureSubmissionsSchema(db)
    const rows = await db`
      DELETE FROM submissions
      WHERE id = ${id} AND type = ${type}
      RETURNING id
    `
    return rows.length > 0
  }

  const filePath = getFilePath(type)
  if (!fs.existsSync(filePath)) {
    return false
  }
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const submissions: Submission[] = JSON.parse(fileContent)
    const filtered = submissions.filter((s) => s.id !== id)
    fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Error deleting submission:', error)
    return false
  }
}
