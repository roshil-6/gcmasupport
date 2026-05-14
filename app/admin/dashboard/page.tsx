'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  SUBMISSION_TYPES,
  SUBMISSION_TYPE_LABELS,
  getSubmissionTypeLabel,
} from '@/lib/submission-types'

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
        <div className="mb-6 bg-white/75 backdrop-blur-md border border-[#35063e]/15 rounded-2xl p-6 shadow-lg">
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
          <div className="bg-white/75 backdrop-blur-md border border-[#35063e]/15 rounded-2xl p-12 text-center shadow-lg">
            <p className="text-gold-metallic">Loading submissions...</p>
          </div>
        ) : error ? (
          <div className="bg-white/75 backdrop-blur-md border border-[#35063e]/15 rounded-2xl p-12 text-center shadow-lg">
            <p className="text-red-600">{error}</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white/75 backdrop-blur-md border border-[#35063e]/15 rounded-2xl p-12 text-center shadow-lg">
            <p className="text-[#35063e]/70">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={`${submission.type}:${submission.id}`}
                className="bg-white/75 backdrop-blur-md border border-[#35063e]/15 rounded-2xl p-6 hover:border-gold-metallic/60 transition-all shadow-lg"
              >
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gold-metallic">
                        {formatType(submission.type)}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          submission.status
                        )}`}
                      >
                        {submission.status || 'pending'}
                      </span>
                    </div>
                    <p className="text-sm text-[#35063e]/60">
                      Submitted: {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={submission.status || 'pending'}
                      onChange={(e) =>
                        updateStatus(submission.type, submission.id, e.target.value)
                      }
                      className="px-3 py-2 bg-[#f3efe6] border border-[#35063e]/25 rounded-lg text-[#35063e] cursor-pointer text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:border-transparent transition-all"
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="resolved">Resolved</option>
                    </select>
                    <button
                      onClick={() => deleteSubmission(submission.type, submission.id)}
                      className="px-4 py-2 border-2 border-gold-metallic text-gold-metallic rounded-lg hover:bg-gold-metallic hover:text-black transition-colors font-semibold text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Submission Data */}
                <div className="bg-[#f3efe6]/50 rounded-lg p-4 mt-4 border border-[#35063e]/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(submission.data).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-gold-metallic/80 uppercase mb-1 font-semibold">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-[#35063e] break-words">
                          {typeof value === 'object' && value !== null
                            ? JSON.stringify(value)
                            : String(value)}
                        </p>
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
