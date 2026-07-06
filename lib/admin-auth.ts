/**
 * Normalizes admin password from env or login form: trim and strip one pair of
 * outer quotes (common when pasting into Vercel or .env).
 */
export function normalizeAdminPassword(raw: string | undefined | null): string {
  if (raw == null) return ''
  let s = String(raw).trim()
  if (
    (s.startsWith('"') && s.endsWith('"') && s.length >= 2) ||
    (s.startsWith("'") && s.endsWith("'") && s.length >= 2)
  ) {
    s = s.slice(1, -1).trim()
  }
  return s
}

export function getConfiguredAdminPassword(): string {
  return normalizeAdminPassword(process.env.ADMIN_PASSWORD || 'senorateam000')
}
