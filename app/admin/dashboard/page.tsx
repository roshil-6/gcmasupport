'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  SUBMISSION_TYPES,
  SUBMISSION_TYPE_LABELS,
  getSubmissionTypeLabel,
} from '@/lib/submission-types'
import {
  formatSubmissionValueForAdmin,
  getSubmissionFieldLabel,
  orderedSubmissionDataEntries,
} from '@/lib/submission-display'
import { isStoredFileValue } from '@/lib/upload-file-value'

interface Submission {
  id: string
  type: string
  data: Record<string, any>
  submittedAt: string
  status?: 'pending' | 'reviewed' | 'resolved'
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [error, setError] = useState('')
  const router = useRouter()

  const loadSubmissions = useCallback(
    async (signal?: AbortSignal) => {
      setIsLoading(true)
      setError('')
      try {
        const url =
          selectedType === 'all'
            ? '/api/admin/submissions'
            : `/api/admin/submissions?type=${encodeURIComponent(selectedType)}`

        const response = await fetch(url, signal ? { signal } : undefined)

        if (response.status === 401) {
          if (!signal?.aborted) router.push('/admin/login')
          return
        }

        const data = await response.json()
        if (signal?.aborted) return

        if (!response.ok) {
          setSubmissions([])
          setError(data.error || 'Failed to load submissions')
          return
        }

        if (data.submissions) {
          setSubmissions(data.submissions)
        } else {
          setSubmissions([])
          setError(data.error || 'Failed to load submissions')
        }
      } catch (err: unknown) {
        if (
          signal?.aborted ||
          (err instanceof DOMException && err.name === 'AbortError')
        ) {
          return
        }
        setSubmissions([])
        setError('Failed to load submissions')
      } finally {
        if (!signal?.aborted) {
          setIsLoading(false)
        }
      }
    },
    [selectedType, router]
  )

  useEffect(() => {
    const ac = new AbortController()
    loadSubmissions(ac.signal)
    return () => ac.abort()
  }, [loadSubmissions])

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/admin/login')
  }

  const updateStatus = async (type: string, id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, id, status }),
      })

      if (response.ok) {
        await loadSubmissions()
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const deleteSubmission = async (type: string, id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return
    }

    try {
      const response = await fetch(
        `/api/admin/submissions?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`,
        { method: 'DELETE' }
      )

      if (response.ok) {
        await loadSubmissions()
      }
    } catch (error) {
      console.error('Error deleting submission:', error)
    }
  }

  const formatType = (type: string) => getSubmissionTypeLabel(type)

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-700 border-green-300'
      case 'reviewed':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      default:
        return 'bg-yellow-100 text-yellow-700 border-yellow-300'
    }
  }

  return (
    <div className="min-h-screen bg-[#f9f6ef] py-8 px-4">
      {/* Back to Home Link */}
      <div className="max-w-7xl mx-auto mb-4">
        <Link 
          href="/" 
          className="text-sm text-[#35063e] hover:text-gold-metallic transition-colors inline-block"
        >
          ← back to home
        </Link>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 rounded-2xl border border-[#35063e]/20 bg-white p-6 shadow-md">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gold-metallic mb-2">
                Admin Dashboard
              </h1>
              <p className="text-[#35063e]/70">
                View and manage form submissions
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border-2 border-gold-metallic text-gold-metallic rounded-lg hover:bg-gold-metallic hover:text-black transition-colors font-semibold"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[min(280px,100%)_1fr]">
          {/* Sidebar — all submission types (matches site forms) */}
          <div className="h-fit overflow-hidden rounded-xl border-2 border-[#35063e] shadow-md lg:sticky lg:top-6">
            <div className="bg-[#2563eb] px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
              All Submissions
            </div>
            <ul className="max-h-[70vh] divide-y divide-[#35063e]/15 overflow-y-auto bg-[#f9f6ef] lg:max-h-[calc(100vh-8rem)]">
              <li>
                <button
                  type="button"
                  onClick={() => setSelectedType('all')}
                  className={`w-full px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    selectedType === 'all'
                      ? 'bg-gold-metallic/25 text-[#35063e]'
                      : 'text-[#35063e] hover:bg-white/80'
                  }`}
                >
                  All types
                </button>
              </li>
              {SUBMISSION_TYPES.map((type) => (
                <li key={type}>
                  <button
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`w-full px-4 py-3 text-left text-sm font-semibold leading-snug transition-colors ${
                      selectedType === type
                        ? 'bg-gold-metallic/25 text-[#35063e]'
                        : 'text-[#35063e] hover:bg-white/80'
                    }`}
                  >
                    {SUBMISSION_TYPE_LABELS[type]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <div className="mb-4 lg:hidden">
              <label className="mb-2 block text-sm font-medium text-gold-metallic">Filter by type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-[#f3efe6] border border-[#35063e]/25 rounded-lg text-[#35063e] cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all"
              >
                <option value="all">All types</option>
                {SUBMISSION_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {SUBMISSION_TYPE_LABELS[type]}
                  </option>
                ))}
              </select>
            </div>

            {/* Submissions List */}
        {isLoading ? (
          <div className="rounded-2xl border border-[#35063e]/20 bg-white p-12 text-center shadow-md">
            <p className="font-medium text-[#35063e]">Loading submissions...</p>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-[#35063e]/20 bg-white p-12 text-center shadow-md">
            <p className="text-red-700">{error}</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="rounded-2xl border border-[#35063e]/20 bg-white p-12 text-center shadow-md">
            <p className="text-[#35063e]/80">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={`${submission.type}:${submission.id}`}
                className="rounded-2xl border border-[#35063e]/25 bg-white p-6 shadow-md transition-colors hover:border-[#35063e]/40"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-[#35063e]">
                        {formatType(submission.type)}
                      </h3>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusColor(
                          submission.status
                        )}`}
                      >
                        {submission.status || 'pending'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#35063e]/85">
                      Submitted:{' '}
                      <span className="text-[#1a1a1a]">
                        {new Date(submission.submittedAt).toLocaleString()}
                      </span>
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <select
                      value={submission.status || 'pending'}
                      onChange={(e) =>
                        updateStatus(submission.type, submission.id, e.target.value)
                      }
                      className="cursor-pointer rounded-lg border border-[#35063e]/30 bg-[#f8f5ef] px-3 py-2 text-sm font-medium text-[#35063e] focus:border-gold-metallic focus:outline-none focus:ring-2 focus:ring-gold-metallic/40"
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="resolved">Resolved</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => deleteSubmission(submission.type, submission.id)}
                      className="rounded-lg border-2 border-[#35063e]/40 px-4 py-2 text-sm font-semibold text-[#35063e] transition-colors hover:border-gold-metallic hover:bg-gold-metallic/15"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-[#35063e]/15 bg-[#f8f5ef] p-5">
                  <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                    {orderedSubmissionDataEntries(submission.data).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col gap-1.5 border-b border-[#35063e]/10 pb-4 last:border-b-0 sm:border-b-0 sm:pb-0"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wide text-[#35063e]">
                          {getSubmissionFieldLabel(key)}
                        </p>
                        {isStoredFileValue(value) ? (
                          <div className="flex flex-col gap-2">
                            {value.storage === 'vercel-blob' ? (
                              <a
                                href={value.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-semibold text-blue-800 underline decoration-blue-800/60 break-all hover:text-blue-950"
                              >
                                Open {value.filename}
                              </a>
                            ) : (
                              <a
                                href={`/api/admin/submission-file?rel=${encodeURIComponent(value.localRelativePath ?? '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-semibold text-blue-800 underline decoration-blue-800/60 break-all hover:text-blue-950"
                              >
                                Download {value.filename}
                              </a>
                            )}
                            <p className="text-sm leading-relaxed text-[#1a1a1a] break-words whitespace-pre-wrap font-mono">
                              {formatSubmissionValueForAdmin(value)}
                            </p>
                          </div>
                        ) : (
                          <p className="text-base leading-relaxed text-[#1a1a1a] break-words whitespace-pre-wrap font-mono text-sm">
                            {formatSubmissionValueForAdmin(value)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  )
}
