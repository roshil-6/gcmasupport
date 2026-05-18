import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs/promises'
import path from 'path'
import { resolveSafeUploadFile } from '@/lib/upload-storage'

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('admin-auth')
  const adminPassword = process.env.ADMIN_PASSWORD?.trim() ?? ''
  if (!adminPassword) return false
  return authToken?.value === adminPassword
}

function guessContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  const map: Record<string, string> = {
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.doc': 'application/msword',
    '.docx':
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  }
  return map[ext] ?? 'application/octet-stream'
}

/** Authenticated download for files stored under data/uploads/ (local dev). */
export async function GET(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rel = request.nextUrl.searchParams.get('rel')
  if (!rel?.trim()) {
    return NextResponse.json({ error: 'Missing rel' }, { status: 400 })
  }

  const abs = resolveSafeUploadFile(rel)
  if (!abs) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
  }

  try {
    const buf = await fs.readFile(abs)
    const filename = path.basename(abs)
    const type = guessContentType(abs)
    return new NextResponse(buf, {
      headers: {
        'Content-Type': type,
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
}
