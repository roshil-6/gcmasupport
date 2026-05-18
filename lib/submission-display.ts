/**
 * Labels and formatting for submission `data` in the admin dashboard.
 * Keeps records readable whether stored in Postgres or local JSON files.
 */

import { isLegacyFileMetadataOnly, isStoredFileValue } from '@/lib/upload-file-value'

/** Field keys shown first (logical order), then any remaining keys A–Z */
const DATA_KEY_PRIORITY: string[] = [
  'program',
  'country',
  'fullName',
  'email',
  'contactNumber',
  'organizationIdentificationNumber',
  'countryOfInterest',
  'nursingQualification',
  'yearsOfExperience',
  'englishTest',
  'whyConsider',
  'name',
  'mailAddress',
  'age',
  'qualification',
  'occupation',
  'experience',
  'relationshipStatus',
  'q1RegisteredNurseOrNursingCommunity',
  'q2RequiresFinancialSupportForMigration',
  'q3SalaryBelowEligibilityThreshold',
  'q4UnderstandsGenuineNeedOnly',
  'appliedThroughOtherAgencies',
  'understandsNursingBoardRegistrationProcess',
  'nursingId',
  'cv',
  'evidence',
  'medicalCertificate',
  'notes',
]

export const SUBMISSION_FIELD_LABELS: Record<string, string> = {
  fullName: 'Full name',
  contactNumber: 'Contact number',
  email: 'Email',
  countryOfInterest: 'Country of interest',
  nursingQualification: 'Nursing qualification',
  yearsOfExperience: 'Years of experience',
  englishTest: 'English test',
  notes: 'Notes',
  organizationIdentificationNumber: 'Organisation identification number',
  whyConsider: 'Why consider you (fully funded)',
  appliedThroughOtherAgencies: 'Applied through other agencies',
  understandsNursingBoardRegistrationProcess: 'Understands nursing board registration process',
  q1RegisteredNurseOrNursingCommunity: 'Registered nurse or nursing community member',
  q2RequiresFinancialSupportForMigration: 'Requires financial support for migration',
  q3SalaryBelowEligibilityThreshold: 'Salary below eligibility threshold',
  q4UnderstandsGenuineNeedOnly: 'Understands genuine-need / anti-misuse policy',
  country: 'Country',
  program: 'Program',
  nursingId: 'Nursing ID upload',
  cv: 'CV upload',
  name: 'Name',
  mailAddress: 'Email address',
  age: 'Age',
  qualification: 'Qualification',
  occupation: 'Occupation',
  experience: 'Experience',
  relationshipStatus: 'Relationship status',
  evidence: 'Evidence upload',
  medicalCertificate: 'Medical certificate upload',
}

export function getSubmissionFieldLabel(key: string): string {
  if (SUBMISSION_FIELD_LABELS[key]) return SUBMISSION_FIELD_LABELS[key]
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim()
}

function formatBytes(n: number): string {
  if (!Number.isFinite(n) || n < 0) return '—'
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / (1024 * 1024)).toFixed(1)} MB`
}

/** Pretty-print values stored in submission JSON (including file metadata). */
export function formatSubmissionValueForAdmin(value: unknown): string {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (typeof value === 'number' || typeof value === 'bigint') return String(value)
  if (typeof value === 'string') {
    const t = value.trim()
    return t.length ? t : '—'
  }
  if (Array.isArray(value)) return JSON.stringify(value, null, 2)
  if (typeof value === 'object') {
    const o = value as Record<string, unknown>
    if (isStoredFileValue(value)) {
      const size = formatBytes(value.size)
      if (value.storage === 'vercel-blob') {
        return `${value.filename} · ${size} · ${value.contentType || '—'} · Vercel Blob (use Open link below)`
      }
      return `${value.filename} · ${size} · ${value.contentType || '—'} · local file (use Download link below)`
    }
    if (isLegacyFileMetadataOnly(value)) {
      const size = typeof o.size === 'number' ? formatBytes(o.size) : '—'
      const mime = typeof o.type === 'string' ? o.type : '—'
      return `${String(o.filename)} · ${size} · ${mime} · legacy row (file bytes were not stored)`
    }
    return JSON.stringify(value, null, 2)
  }
  return String(value)
}

export function orderedSubmissionDataEntries(data: Record<string, any>): [string, any][] {
  const keys = Object.keys(data)
  const seen = new Set<string>()
  const ordered: string[] = []
  for (const k of DATA_KEY_PRIORITY) {
    if (keys.includes(k)) {
      ordered.push(k)
      seen.add(k)
    }
  }
  for (const k of keys.sort((a, b) => a.localeCompare(b))) {
    if (!seen.has(k)) ordered.push(k)
  }
  return ordered.map((k) => [k, data[k]])
}
