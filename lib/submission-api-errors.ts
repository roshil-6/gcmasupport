import { NextResponse } from 'next/server'
import { FileUploadNotConfiguredError } from '@/lib/upload-storage'

/** Thrown when the app runs on Vercel but `DATABASE_URL` is missing (filesystem writes are not allowed). */
export class MissingDatabaseUrlError extends Error {
  constructor() {
    super(
      'This site cannot save form data yet. In Vercel open your project → Settings → Environment Variables: add DATABASE_URL (exactly this name) with your Railway Postgres “public” connection string, save, then redeploy the latest deployment.'
    )
    this.name = 'MissingDatabaseUrlError'
  }
}

function userSafeMessageFromUnknownError(error: unknown): {
  status: number
  message: string
} | null {
  if (!(error && typeof error === 'object')) return null
  const err = error as Error & { code?: string; name?: string }
  const name = err.name ?? ''
  const msg = typeof err.message === 'string' ? err.message : ''
  const code = typeof err.code === 'string' ? err.code : ''

  if (name === 'PostgresError' || code.startsWith('P') || msg.toLowerCase().includes('postgres')) {
    return {
      status: 503,
      message:
        'The form could not be saved to the database. Check that DATABASE_URL on Vercel matches your Railway Postgres public URL, the database is running, and redeploy after changing env vars.',
    }
  }

  if (
    msg.includes('ECONNREFUSED') ||
    msg.includes('ETIMEDOUT') ||
    msg.includes('connect') && msg.includes('timeout') ||
    msg.includes('getaddrinfo')
  ) {
    return {
      status: 503,
      message:
        'Could not connect to the database. Confirm Railway Postgres is running, use the public connection URL in DATABASE_URL, and redeploy.',
    }
  }

  return null
}

export function responseFromSubmissionSaveError(
  error: unknown,
  fallbackMessage: string
): NextResponse {
  if (error instanceof MissingDatabaseUrlError) {
    return NextResponse.json({ success: false, message: error.message }, { status: 503 })
  }

  if (error instanceof FileUploadNotConfiguredError) {
    return NextResponse.json({ success: false, message: error.message }, { status: 503 })
  }

  const safe = userSafeMessageFromUnknownError(error)
  if (safe) {
    console.error('Submission save error:', error)
    return NextResponse.json(
      { success: false, message: safe.message },
      { status: safe.status }
    )
  }

  console.error('Submission save error:', error)
  return NextResponse.json(
    { success: false, message: fallbackMessage },
    { status: 500 }
  )
}
