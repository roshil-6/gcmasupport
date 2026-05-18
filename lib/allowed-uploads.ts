/**
 * Shared rules for Vercel Blob client uploads + HTML file inputs.
 */

/** Max per file for token generation (adjust if your Blob plan differs). */
export const BLOB_MAX_BYTES = 100 * 1024 * 1024 // 100 MB

export const BLOB_ALLOWED_CONTENT_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif',
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'video/3gpp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

/** Use on `<input type="file" accept={SUBMISSION_FILE_ACCEPT} />` */
export const SUBMISSION_FILE_ACCEPT = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif',
  'video/mp4',
  'video/webm',
  'video/quicktime',
  '.pdf',
  '.doc',
  '.docx',
].join(',')

export const SUBMISSION_FILE_ACCEPT_HINT =
  'PDF, Word, images (JPEG, PNG, GIF, WebP, HEIC), or video (MP4, WebM, MOV). Large files upload directly to secure storage. Max 100 MB per file.'
