'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { thankYouPathFromSubmissionsApi, SUBMISSION_SUCCESS_PATH } from '@/lib/thank-you-path'

type EnglishClassInquiryFormProps = {
  apiEndpoint: string
  headline: string
  subline?: string
}

export default function EnglishClassInquiryForm({
  apiEndpoint,
  headline,
  subline,
}: EnglishClassInquiryFormProps) {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('fullName', fullName)
      fd.append('contactNumber', contactNumber)
      fd.append('email', email)
      fd.append('message', message)
      const res = await fetch(apiEndpoint, { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok && data.success) {
        setFullName('')
        setContactNumber('')
        setEmail('')
        setMessage('')
        router.push(thankYouPathFromSubmissionsApi(apiEndpoint) ?? SUBMISSION_SUCCESS_PATH)
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 px-4 py-2.5 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60'

  return (
    <div className="rounded-2xl border border-gold-metallic/35 bg-white p-6 shadow-xl md:p-8">
      <h3 className="mb-1 text-xl font-bold text-[#6e531d] md:text-2xl">{headline}</h3>
      {subline ? <p className="mb-6 text-sm text-[#4a4238] md:text-base">{subline}</p> : null}

      {error ? (
        <p className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 py-3 text-center text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#2a241d]">Full name *</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#2a241d]">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className={inputClass}
            placeholder="Contact number"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#2a241d]">Email (optional)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="Email address"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#2a241d]">Message (optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Class level, preferred timing, or questions"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-gold-metallic py-3 font-semibold text-black transition hover:bg-gold-bright disabled:opacity-50"
        >
          {isSubmitting ? 'Sending…' : 'Send inquiry'}
        </button>
      </form>
    </div>
  )
}
