import { NextRequest, NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/submissions'
import { responseFromSubmissionSaveError } from '@/lib/submission-api-errors'
import { formDataToSubmissionData } from '@/lib/form-data-submission'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data = await formDataToSubmissionData(formData, 'immigration-fraud')

    const submission = await saveSubmission('immigration-fraud', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Complaint submitted successfully',
      id: submission.id 
    })
  } catch (error) {
    return responseFromSubmissionSaveError(error, 'Failed to submit complaint')
  }
}
