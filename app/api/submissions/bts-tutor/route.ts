import { NextRequest, NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/submissions'
import { responseFromSubmissionSaveError } from '@/lib/submission-api-errors'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data: Record<string, any> = {}

    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    const submission = await saveSubmission('bts-tutor', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      id: submission.id 
    })
  } catch (error) {
    return responseFromSubmissionSaveError(error, 'Failed to submit application')
  }
}
