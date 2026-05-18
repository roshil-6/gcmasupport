import { storeUpload } from '@/lib/upload-storage'
import type { SubmissionType } from '@/lib/submission-types'
import { parseClientUploadedBlobRef } from '@/lib/validate-submission-blob-ref'

/**
 * Build the submission `data` object from multipart form data, persisting files
 * to Vercel Blob (BLOB_READ_WRITE_TOKEN) or to data/uploads/ locally.
 */
export async function formDataToSubmissionData(
  formData: FormData,
  submissionType: SubmissionType
): Promise<Record<string, any>> {
  const data: Record<string, any> = {}

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      if (value.size === 0 && (!value.name || value.name === '')) {
        continue
      }
      if (value.size === 0) {
        continue
      }
      data[key] = await storeUpload(value, {
        submissionType,
        fieldName: key,
      })
    } else if (typeof value === 'string') {
      const blobRef = parseClientUploadedBlobRef(value)
      data[key] = blobRef ?? value
    } else {
      data[key] = value
    }
  }

  return data
}
