import { NextRequest, NextResponse } from 'next/server'
import {
  getSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
  SubmissionType,
  isSubmissionType,
} from '@/lib/submissions'
import { getSql } from '@/lib/db'
import { cookies } from 'next/headers'

// Simple authentication check
async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('admin-auth')
  const adminPassword = process.env.ADMIN_PASSWORD?.trim() ?? ''
  if (!adminPassword) return false
  return authToken?.value === adminPassword
}

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const raw = searchParams.get('type')
    if (raw !== null && raw !== '' && !isSubmissionType(raw)) {
      return NextResponse.json(
        { error: 'Invalid submission type', submissions: [] },
        { status: 400 }
      )
    }
    const type: SubmissionType | undefined =
      raw && isSubmissionType(raw) ? raw : undefined

    const submissions = await getSubmissions(type)
    const storageBackend = getSql() ? 'postgres' : 'local_json'
    return NextResponse.json({ submissions, storageBackend })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { type, id, status } = body

    if (!type || !id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!isSubmissionType(type)) {
      return NextResponse.json({ error: 'Invalid submission type' }, { status: 400 })
    }

    const success = await updateSubmissionStatus(type, id, status)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error('Error updating submission:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') as SubmissionType
    const id = searchParams.get('id')

    if (!type || !id) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    if (!isSubmissionType(type)) {
      return NextResponse.json({ error: 'Invalid submission type' }, { status: 400 })
    }

    const success = await deleteSubmission(type, id)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error('Error deleting submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}
