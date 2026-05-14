import { NextResponse } from 'next/server'

/** Thrown when the app runs on Vercel but `DATABASE_URL` is missing (filesystem writes are not allowed). */
export class MissingDatabaseUrlError extends Error {
  constructor() {
    super(
      'This site cannot save form data yet. In Vercel open your project → Settings → Environment Variables: add DATABASE_URL (exactly this name) with your Railway Postgres “public” connection string, save, then redeploy the latest deployment.'
    )
    this.name = 'MissingDatabaseUrlError'
  }
}

export function responseFromSubmissionSaveError(
  error: unknown,
  fallbackMessage: string
): NextResponse {
  if (error instanceof MissingDatabaseUrlError) {
    return NextResponse.json({ success: false, message: error.message }, { status: 503 })
  }
  console.error('Submission save error:', error)
  return NextResponse.json(
    { success: false, message: fallbackMessage },
    { status: 500 }
  )
}
