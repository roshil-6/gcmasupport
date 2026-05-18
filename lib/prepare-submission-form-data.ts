import { upload } from '@vercel/blob/client'
import type { SubmissionType } from '@/lib/submission-types'

export const BLOB_CLIENT_UPLOAD_PATH = '/api/blob/client-upload'

/**
 * In production (or when NEXT_PUBLIC_BLOB_CLIENT_UPLOAD=1), upload files from the
 * browser straight to Vercel Blob so videos/large images are not limited by the
 * ~4.5 MB Vercel Function request body cap. In development, keep multipart File
 * upload so local API routes receive files as before.
 */
export function shouldUseClientBlobUpload(): boolean {
  if (process.env.NEXT_PUBLIC_BLOB_CLIENT_UPLOAD === '0') return false
  if (process.env.NEXT_PUBLIC_BLOB_CLIENT_UPLOAD === '1') return true
  return process.env.NODE_ENV === 'production'
}

function sanitizeFilename(name: string): string {
  const base = name.replace(/\\/g, '/').split('/').pop() || 'file'
  return base.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120) || 'file'
}

export async function prepareSubmissionFormData(
  formData: FormData,
  submissionType: SubmissionType
): Promise<FormData> {
  if (!shouldUseClientBlobUpload()) {
    return formData
  }

  const out = new FormData()
  for (const [key, value] of formData.entries()) {
    if (value instanceof File && value.size > 0) {
      const pathname = `submissions/${submissionType}/${key}/${Date.now()}-${sanitizeFilename(value.name)}`
      const blob = await upload(pathname, value, {
        access: 'public',
        handleUploadUrl: BLOB_CLIENT_UPLOAD_PATH,
        multipart: value.size >= 4 * 1024 * 1024,
      })
      out.append(
        key,
        JSON.stringify({
          filename: value.name,
          size: value.size,
          contentType: value.type || 'application/octet-stream',
          storage: 'vercel-blob',
          url: blob.url,
          pathname: blob.pathname,
        })
      )
    } else if (!(value instanceof File)) {
      out.append(key, value)
    }
  }
  return out
}
