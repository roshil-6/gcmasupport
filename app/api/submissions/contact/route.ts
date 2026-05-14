import { NextRequest, NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/submissions'
import { responseFromSubmissionSaveError } from '@/lib/submission-api-errors'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const submission = await saveSubmission('contact', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: submission.id 
    })
  } catch (error) {
    return responseFromSubmissionSaveError(error, 'Failed to submit contact form')
  }
}
