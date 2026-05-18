import type { SubmissionType } from '@/lib/submission-types'

/** Path for `/thank-you` with submission type query (used after successful form POST). */
export function thankYouSearchPath(type: SubmissionType | string): string {
  return `/thank-you?type=${encodeURIComponent(String(type))}`
}

/** Derive thank-you path from a submissions API URL (e.g. `/api/submissions/contact`). */
export function thankYouPathFromSubmissionsApi(apiUrl: string): string | null {
  const m = String(apiUrl).trim().match(/\/api\/submissions\/([^/?#]+)/)
  if (!m?.[1]) return null
  return thankYouSearchPath(m[1])
}
