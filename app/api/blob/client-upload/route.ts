import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { BLOB_ALLOWED_CONTENT_TYPES, BLOB_MAX_BYTES } from '@/lib/allowed-uploads'

export const runtime = 'nodejs'

export async function POST(request: Request): Promise<NextResponse> {
  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim()
  if (!token) {
    return NextResponse.json({ error: 'Blob storage is not configured.' }, { status: 503 })
  }

  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith('submissions/')) {
          throw new Error('Invalid upload path')
        }
        return {
          allowedContentTypes: BLOB_ALLOWED_CONTENT_TYPES,
          maximumSizeInBytes: BLOB_MAX_BYTES,
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {
        /* Optional: log or notify */
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Upload token failed'
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}
