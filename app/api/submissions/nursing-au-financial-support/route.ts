import { NextRequest, NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/submissions'
import { responseFromSubmissionSaveError } from '@/lib/submission-api-errors'
import { formDataToSubmissionData } from '@/lib/form-data-submission'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data = await formDataToSubmissionData(formData, 'nursing-au-financial-support')

    data.country = 'Australia'
    data.program = 'financial-support'

    const submission = await saveSubmission('nursing-au-financial-support', data)

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      id: submission.id,
    })
  } catch (error) {
    return responseFromSubmissionSaveError(error, 'Failed to submit application')
  }
}
