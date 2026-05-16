'use client'

import { useState } from 'react'

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
  const [fullName, setFullName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
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
        setSuccess(true)
        setFullName('')
        setContactNumber('')
        setEmail('')
        setMessage('')
        setTimeout(() => setSuccess(false), 4000)
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
    'w-full rounded-lg border border-gold-metallic/35 bg-white/10 px-4 py-2.5 text-slate-100 placeholder:text-slate-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60'

  return (
    <div className="rounded-2xl border border-gold-metallic/35 bg-[#333333]/75 p-6 shadow-xl backdrop-blur-sm md:p-8">
      <h3 className="mb-1 text-xl font-bold text-gold-metallic md:text-2xl">{headline}</h3>
      {subline ? <p className="mb-6 text-sm text-slate-200 md:text-base">{subline}</p> : null}

      {success ? (
        <p className="mb-4 rounded-lg border border-gold-metallic/50 bg-gold-metallic/15 py-3 text-center font-semibold text-gold-metallic">
          Thank you — we will contact you soon.
        </p>
      ) : null}
      {error ? (
        <p className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 py-3 text-center text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gold-metallic/90">Full name *</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
            disabled={isSubmitting || success}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gold-metallic/90">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className={inputClass}
            placeholder="Contact number"
            disabled={isSubmitting || success}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gold-metallic/90">Email (optional)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="Email address"
            disabled={isSubmitting || success}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gold-metallic/90">Message (optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Class level, preferred timing, or questions"
            disabled={isSubmitting || success}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || success}
          className="w-full rounded-lg bg-gold-metallic py-3 font-semibold text-black transition hover:bg-gold-bright disabled:opacity-50"
        >
          {isSubmitting ? 'Sending…' : 'Send inquiry'}
        </button>
      </form>
    </div>
  )
}
