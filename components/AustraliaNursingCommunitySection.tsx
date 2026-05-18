'use client'

import { useCallback, useEffect, useId, useState, type FormEvent, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { FormField, FormGrid } from '@/components/FormSheet'
import { SUBMISSION_FILE_ACCEPT, SUBMISSION_FILE_ACCEPT_HINT } from '@/lib/allowed-uploads'
import { prepareSubmissionFormData } from '@/lib/prepare-submission-form-data'
import { thankYouSearchPath } from '@/lib/thank-you-path'

function YesNoRadios({
  name,
  label,
  required,
  index,
}: {
  name: string
  label: string
  required?: boolean
  index?: number
}) {
  return (
    <fieldset className="m-0 min-w-0 rounded-xl border border-white/[0.09] bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-5">
      <legend className="w-full px-0 text-left [&>span]:flex [&>span]:items-start [&>span]:gap-3">
        <span>
          {index != null ? (
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-metallic/12 text-xs font-bold tabular-nums text-gold-metallic ring-1 ring-gold-metallic/20"
              aria-hidden
            >
              {index}
            </span>
          ) : null}
          <span className="min-w-0 text-[0.9375rem] font-medium leading-snug text-white/92">
            {label}
            {required ? <span className="text-amber-200/95"> *</span> : null}
          </span>
        </span>
      </legend>
      <div
        className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-2 border-t border-white/[0.06] pt-4"
        role="presentation"
      >
        <label className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/88 transition-colors hover:bg-white/[0.06]">
          <input
            type="radio"
            name={name}
            value="yes"
            required={required}
            className="h-4 w-4 shrink-0 accent-gold-metallic"
            suppressHydrationWarning
          />
          Yes
        </label>
        <label className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/88 transition-colors hover:bg-white/[0.06]">
          <input
            type="radio"
            name={name}
            value="no"
            required={required}
            className="h-4 w-4 shrink-0 accent-gold-metallic"
            suppressHydrationWarning
          />
          No
        </label>
      </div>
    </fieldset>
  )
}

function ApplicationModal({
  open,
  title,
  onClose,
  children,
  size = 'default',
}: {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  size?: 'default' | 'wide'
}) {
  const titleId = useId()
  const maxW = size === 'wide' ? 'max-w-2xl' : 'max-w-xl'
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        className={`form-sheet dark-container glass-card rounded-2xl shadow-2xl w-full ${maxW} max-h-[min(90vh,900px)] min-h-0 flex flex-col overflow-hidden border border-gold-metallic/30`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex-1 min-h-0 p-6 md:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gold-metallic hover:text-gold-bright text-2xl leading-none w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
          <header className="pr-10 pb-5">
            <h3 id={titleId} className="text-xl md:text-2xl font-semibold tracking-tight text-gold-metallic">
              {title}
            </h3>
            <div
              className="mt-4 h-px w-full bg-gradient-to-r from-gold-metallic/45 via-gold-metallic/12 to-transparent"
              aria-hidden
            />
          </header>
          {children}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

function FinancialSupportModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reset = useCallback(() => {
    setError(null)
  }, [])

  useEffect(() => {
    if (!open) {
      reset()
    }
  }, [open, reset])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const body = await prepareSubmissionFormData(formData, 'nursing-au-financial-support')
      const response = await fetch('/api/submissions/nursing-au-financial-support', {
        method: 'POST',
        body,
      })
      if (!response.ok) throw new Error('submit failed')
      form.reset()
      onClose()
      router.push(thankYouSearchPath('nursing-au-financial-support'))
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ApplicationModal
      open={open}
      onClose={onClose}
      title="Apply for financial support — Nursing community"
      size="wide"
    >
      <form onSubmit={handleSubmit} className="-mt-1 flex flex-col gap-8">
          <p className="rounded-xl border border-gold-metallic/20 bg-gold-metallic/[0.06] px-4 py-3 text-sm leading-relaxed text-white/88">
            For nurses and nursing community members seeking support linked to migration-related assistance
            (Australia).
          </p>

          <section className="space-y-4">
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-metallic/90">
              Your details
            </h4>
            <FormGrid>
              <FormField label="Full name" htmlFor="fs-fullName" required>
                <input
                  id="fs-fullName"
                  name="fullName"
                  required
                  className="form-input"
                  autoComplete="name"
                  suppressHydrationWarning
                />
              </FormField>
              <FormField label="Email" htmlFor="fs-email" required>
                <input
                  id="fs-email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  autoComplete="email"
                  suppressHydrationWarning
                />
              </FormField>
            </FormGrid>
            <FormField label="Contact number" htmlFor="fs-phone" required>
              <input
                id="fs-phone"
                name="contactNumber"
                type="tel"
                required
                className="form-input"
                suppressHydrationWarning
              />
            </FormField>

            <FormField
              label="Identification number of the organisation you have applied through"
              htmlFor="fs-orgId"
              required
            >
              <input
                id="fs-orgId"
                name="organizationIdentificationNumber"
                required
                className="form-input"
                suppressHydrationWarning
              />
            </FormField>
          </section>

          <section className="space-y-4 rounded-2xl border border-gold-metallic/18 bg-gradient-to-b from-gold-metallic/[0.07] to-transparent p-5 sm:p-6">
            <div className="space-y-1">
              <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-metallic">
                Eligibility
              </h4>
              <p className="text-xs text-white/55">Please answer each question with Yes or No.</p>
            </div>
            <div className="space-y-4">
              <YesNoRadios
                index={1}
                name="q1RegisteredNurseOrNursingCommunity"
                required
                label="Are you a registered nurse or a member of the nursing community?"
              />
              <YesNoRadios
                index={2}
                name="q2RequiresFinancialSupportForMigration"
                required
                label="Do you require financial support for migration-related assistance?"
              />
              <YesNoRadios
                index={3}
                name="q3SalaryBelowEligibilityThreshold"
                required
                label="Is your current salary below the basic income threshold required for financial eligibility?"
              />
              <YesNoRadios
                index={4}
                name="q4UnderstandsGenuineNeedOnly"
                required
                label="Do you understand that this support is intended only for individuals in genuine need, and that any misuse of this welfare initiative is strictly discouraged?"
              />
            </div>
          </section>

          {error ? <div className="form-feedback form-feedback-error">{error}</div> : null}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-gold-metallic/10 disabled:cursor-not-allowed disabled:opacity-60 sm:mx-auto sm:w-auto sm:min-w-[min(100%,280px)]"
            >
              {isSubmitting ? 'Submitting…' : 'Submit application'}
            </button>
            <p className="text-center text-[0.7rem] text-white/45">All required fields must be completed.</p>
          </div>
        </form>
    </ApplicationModal>
  )
}

function FullyFundedModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reset = useCallback(() => {
    setError(null)
  }, [])

  useEffect(() => {
    if (!open) reset()
  }, [open, reset])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const body = await prepareSubmissionFormData(formData, 'nursing-au-fully-funded')
      const response = await fetch('/api/submissions/nursing-au-fully-funded', {
        method: 'POST',
        body,
      })
      if (!response.ok) throw new Error('submit failed')
      form.reset()
      onClose()
      router.push(thankYouSearchPath('nursing-au-fully-funded'))
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ApplicationModal
      open={open}
      onClose={onClose}
      title="Apply for fully funded program — Nursing community"
      size="wide"
    >
        <form onSubmit={handleSubmit} className="-mt-1 flex flex-col gap-8" encType="multipart/form-data">
          <p className="rounded-xl border border-gold-metallic/20 bg-gold-metallic/[0.06] px-4 py-3 text-sm leading-relaxed text-white/88">
            Australia — fully funded nursing pathway. Complete your details, declarations, and upload your nursing ID.
          </p>

          <section className="space-y-4">
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-metallic/90">
              Your details
            </h4>
            <FormGrid>
              <FormField label="Full name" htmlFor="ff-fullName" required>
                <input
                  id="ff-fullName"
                  name="fullName"
                  required
                  className="form-input"
                  autoComplete="name"
                  suppressHydrationWarning
                />
              </FormField>
              <FormField label="Email" htmlFor="ff-email" required>
                <input
                  id="ff-email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  autoComplete="email"
                  suppressHydrationWarning
                />
              </FormField>
            </FormGrid>
            <FormField label="Contact number" htmlFor="ff-phone" required>
              <input
                id="ff-phone"
                name="contactNumber"
                type="tel"
                required
                className="form-input"
                suppressHydrationWarning
              />
            </FormField>

            <FormField
              label="In a few words, why should we consider you for the fully funded program?"
              htmlFor="ff-why"
              required
            >
              <textarea
                id="ff-why"
                name="whyConsider"
                required
                rows={4}
                className="form-input form-textarea"
                placeholder="Brief answer"
                suppressHydrationWarning
              />
            </FormField>
          </section>

          <section className="space-y-4 rounded-2xl border border-gold-metallic/18 bg-gradient-to-b from-gold-metallic/[0.07] to-transparent p-5 sm:p-6">
            <div className="space-y-1">
              <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-metallic">
                Declarations
              </h4>
              <p className="text-xs text-white/55">Please answer each question with Yes or No.</p>
            </div>
            <div className="space-y-4">
              <YesNoRadios
                index={1}
                name="appliedThroughOtherAgencies"
                required
                label="Have you applied through any other agencies or third parties previously?"
              />
              <YesNoRadios
                index={2}
                name="understandsNursingBoardRegistrationProcess"
                required
                label="Do you fully understand the process for completing registration with the Nursing Board?"
              />
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-metallic/90">
              Supporting documents
            </h4>
            <FormField label="Upload nursing ID" htmlFor="ff-nursingId" required hint={SUBMISSION_FILE_ACCEPT_HINT}>
              <input
                id="ff-nursingId"
                name="nursingId"
                type="file"
                required
                accept={SUBMISSION_FILE_ACCEPT}
                className="form-input form-file"
                suppressHydrationWarning
              />
            </FormField>

            <FormField
              label="Identification number of the organisation you have applied through"
              htmlFor="ff-orgId"
              required
            >
              <input
                id="ff-orgId"
                name="organizationIdentificationNumber"
                required
                className="form-input"
                suppressHydrationWarning
              />
            </FormField>
          </section>

          {error ? <div className="form-feedback form-feedback-error">{error}</div> : null}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-gold-metallic/10 disabled:cursor-not-allowed disabled:opacity-60 sm:mx-auto sm:w-auto sm:min-w-[min(100%,280px)]"
            >
              {isSubmitting ? 'Submitting…' : 'Submit application'}
            </button>
            <p className="text-center text-[0.7rem] text-white/45">All required fields must be completed.</p>
          </div>
        </form>
    </ApplicationModal>
  )
}

export default function AustraliaNursingCommunitySection() {
  const [financialOpen, setFinancialOpen] = useState(false)
  const [fundedOpen, setFundedOpen] = useState(false)

  return (
    <>
      <section
        id="nursing-community-australia"
        className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-6 md:p-8 mb-12 scroll-mt-24"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic mb-2">
          Nursing community — Australia
        </h2>
        <p className="text-base text-[#0f0c14]/90 mb-6 max-w-3xl">
          Choose a program below. Financial support uses a short yes / no eligibility check. The fully funded pathway asks
          for a short statement, declarations, nursing ID, and organisation reference.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFinancialOpen(true)}
            className="rounded-xl border-2 border-gold-metallic/60 bg-white px-5 py-5 text-left shadow-sm transition-colors hover:border-gold-metallic hover:bg-[#fffdfb] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-metallic focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f2e7]"
          >
            <span className="block text-base md:text-lg font-semibold text-[#0f0c14]">
              Apply for financial support — Nursing community
            </span>
            <span className="block text-sm text-[#0f0c14]/80 mt-2">
              Eligibility questions (yes / no) for migration-related assistance.
            </span>
          </button>
          <button
            type="button"
            onClick={() => setFundedOpen(true)}
            className="rounded-xl border-2 border-gold-metallic/60 bg-white px-5 py-5 text-left shadow-sm transition-colors hover:border-gold-metallic hover:bg-[#fffdfb] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-metallic focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f2e7]"
          >
            <span className="block text-base md:text-lg font-semibold text-[#0f0c14]">
              Apply for fully funded program — Nursing community
            </span>
            <span className="block text-sm text-[#0f0c14]/80 mt-2">
              Statement, yes / no declarations, nursing ID upload, organisation ID.
            </span>
          </button>
        </div>
      </section>

      <FinancialSupportModal open={financialOpen} onClose={() => setFinancialOpen(false)} />
      <FullyFundedModal open={fundedOpen} onClose={() => setFundedOpen(false)} />
    </>
  )
}
