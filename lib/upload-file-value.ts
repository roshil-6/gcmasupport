/**
 * Client-safe helpers for values produced by `storeUpload` (no Node APIs).
 */

export type StoredFileValue = {
  filename: string
  size: number
  contentType: string
  storage: 'vercel-blob' | 'local'
  url?: string
  pathname?: string
  localRelativePath?: string
}

export function isStoredFileValue(v: unknown): v is StoredFileValue {
  if (!v || typeof v !== 'object') return false
  const o = v as Record<string, unknown>
  if (typeof o.filename !== 'string') return false
  if (o.storage === 'vercel-blob' && typeof o.url === 'string') return true
  if (o.storage === 'local' && typeof o.localRelativePath === 'string') return true
  return false
}

/** Legacy row: only filename/size/type, no `storage` field */
export function isLegacyFileMetadataOnly(v: unknown): boolean {
  if (!v || typeof v !== 'object') return false
  const o = v as Record<string, unknown>
  if ('storage' in o) return false
  return typeof o.filename === 'string' && ('size' in o || 'type' in o)
}
