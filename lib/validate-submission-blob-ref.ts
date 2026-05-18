import type { StoredFileValue } from '@/lib/upload-file-value'

function isTrustedVercelBlobUrl(urlStr: string): boolean {
  try {
    const u = new URL(urlStr)
    if (u.protocol !== 'https:') return false
    return (
      u.hostname.endsWith('.public.blob.vercel-storage.com') ||
      u.hostname.endsWith('.blob.vercel-storage.com')
    )
  } catch {
    return false
  }
}

/**
 * Parse a FormData string field that holds a client-side Blob upload result.
 * Rejects forged URLs (must be Vercel Blob host).
 */
export function parseClientUploadedBlobRef(raw: string): StoredFileValue | null {
  const t = raw.trim()
  if (!t.startsWith('{')) return null
  try {
    const o = JSON.parse(t) as Partial<StoredFileValue>
    if (o.storage !== 'vercel-blob' || typeof o.url !== 'string') return null
    if (!isTrustedVercelBlobUrl(o.url)) return null
    if (typeof o.filename !== 'string' || typeof o.size !== 'number') return null
    return {
      filename: o.filename,
      size: o.size,
      contentType:
        typeof o.contentType === 'string' && o.contentType
          ? o.contentType
          : 'application/octet-stream',
      storage: 'vercel-blob',
      url: o.url,
      pathname: typeof o.pathname === 'string' ? o.pathname : undefined,
    }
  } catch {
    return null
  }
}
