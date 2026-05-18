import 'server-only'

import { put } from '@vercel/blob'
import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'
import type { StoredFileValue } from '@/lib/upload-file-value'

export type { StoredFileValue }

export class FileUploadNotConfiguredError extends Error {
  constructor() {
    super(
      'File uploads on Vercel require BLOB_READ_WRITE_TOKEN. In the Vercel dashboard: Storage → Create Blob Store, connect it to this project, then redeploy. Locally, files are saved under data/uploads/ without this token.'
    )
    this.name = 'FileUploadNotConfiguredError'
  }
}

function sanitizeFilename(name: string): string {
  const base = name.replace(/\\/g, '/').split('/').pop() || 'file'
  const safe = base.replace(/[^a-zA-Z0-9._-]/g, '_')
  return safe.slice(0, 180) || 'file'
}

function uploadsRootAbsolute(): string {
  return path.join(process.cwd(), 'data', 'uploads')
}

function isInsideDir(filePath: string, dir: string): boolean {
  const resolvedFile = path.resolve(filePath)
  const resolvedDir = path.resolve(dir)
  return resolvedFile === resolvedDir || resolvedFile.startsWith(resolvedDir + path.sep)
}

export function resolveSafeUploadFile(rel: string): string | null {
  const normalized = rel.replace(/\\/g, '/').replace(/^\/+/, '')
  if (!normalized.startsWith('data/uploads/')) return null
  if (normalized.includes('..')) return null
  const abs = path.join(process.cwd(), ...normalized.split('/'))
  if (!isInsideDir(abs, uploadsRootAbsolute())) return null
  return abs
}

export async function storeUpload(
  file: File,
  ctx: { submissionType: string; fieldName: string }
): Promise<StoredFileValue> {
  const filename = file.name || 'upload'
  const contentType = file.type || 'application/octet-stream'
  const buf = Buffer.from(await file.arrayBuffer())
  const size = buf.length

  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim()
  if (token) {
    const pathname = `submissions/${ctx.submissionType}/${ctx.fieldName}/${Date.now()}-${sanitizeFilename(filename)}`
    const blob = await put(pathname, buf, {
      access: 'public',
      token,
      contentType: contentType || undefined,
      multipart: size >= 4 * 1024 * 1024,
    })
    return {
      filename,
      size,
      contentType,
      storage: 'vercel-blob',
      url: blob.url,
      pathname: blob.pathname,
    }
  }

  if (process.env.VERCEL === '1') {
    throw new FileUploadNotConfiguredError()
  }

  const relPieces = ['data', 'uploads', ctx.submissionType]
  const absDir = path.join(process.cwd(), ...relPieces)
  await fs.mkdir(absDir, { recursive: true })
  const unique = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}-${sanitizeFilename(filename)}`
  const absPath = path.join(absDir, unique)
  await fs.writeFile(absPath, buf)
  const localRelativePath = [...relPieces, unique].join('/')
  return {
    filename,
    size,
    contentType,
    storage: 'local',
    localRelativePath,
  }
}
