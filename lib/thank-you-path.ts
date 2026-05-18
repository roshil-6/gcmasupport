import type { SubmissionType } from '@/lib/submission-types'

/** Canonical success page after a form POST (noIndex; not linked from main nav). */
export const SUBMISSION_SUCCESS_PATH = '/submission-success'

/** Path for submission success with optional `type` for contextual copy (same slugs as admin / `SubmissionType`). */
export function thankYouSearchPath(type: SubmissionType | string): string {
  return `${SUBMISSION_SUCCESS_PATH}?type=${encodeURIComponent(String(type))}`
}

/** Derive thank-you path from a submissions API URL (e.g. `/api/submissions/contact`). */
export function thankYouPathFromSubmissionsApi(apiUrl: string): string | null {
  const m = String(apiUrl).trim().match(/\/api\/submissions\/([^/?#]+)/)
  if (!m?.[1]) return null
  return thankYouSearchPath(m[1])
}
