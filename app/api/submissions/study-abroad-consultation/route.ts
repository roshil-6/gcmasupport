import { NextRequest, NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/submissions'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data: Record<string, any> = {}

    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    const submission = saveSubmission('study-abroad-consultation', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      id: submission.id 
    })
  } catch (error) {
    console.error('Error saving submission:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit consultation request' },
      { status: 500 }
    )
  }
}
