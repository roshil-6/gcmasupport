import postgres from 'postgres'

let sql: ReturnType<typeof postgres> | null = null

function clientOptions(url: string): NonNullable<Parameters<typeof postgres>[1]> {
  const onVercel = process.env.VERCEL === '1'
  const looksLikeRailway =
    url.includes('rlwy.net') ||
    url.includes('railway.app') ||
    url.includes('proxy.rlwy')

  return {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 20,
    /** Serverless + pooled proxies (e.g. Railway): avoids prepared-statement errors */
    ...(onVercel ? { prepare: false as const } : {}),
    /** Railway public hostnames expect TLS */
    ...(looksLikeRailway ? { ssl: 'require' as const } : {}),
  }
}

/** Returns a Postgres client when `DATABASE_URL` is set (e.g. Vercel + Railway). */
export function getSql(): ReturnType<typeof postgres> | null {
  const url = process.env.DATABASE_URL?.trim()
  if (!url) return null
  if (!sql) {
    sql = postgres(url, clientOptions(url))
  }
  return sql
}

let schemaReady: Promise<void> | null = null

export function ensureSubmissionsSchema(db: NonNullable<ReturnType<typeof getSql>>): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await db`
        CREATE TABLE IF NOT EXISTS submissions (
          id text PRIMARY KEY,
          type text NOT NULL,
          data jsonb NOT NULL DEFAULT '{}'::jsonb,
          submitted_at timestamptz NOT NULL,
          status text
        )
      `
      await db`CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions (type)`
      await db`CREATE INDEX IF NOT EXISTS idx_submissions_submitted_at ON submissions (submitted_at DESC)`
    })()
  }
  return schemaReady
}
