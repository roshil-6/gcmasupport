'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormActions, FormField, FormGrid, FormSheet } from '@/components/FormSheet'
import { SUBMISSION_FILE_ACCEPT } from '@/lib/allowed-uploads'
import { prepareSubmissionFormData } from '@/lib/prepare-submission-form-data'
import { thankYouSearchPath } from '@/lib/thank-you-path'

interface NursingRegistrationFormProps {
  initialCountry?: string
}

export default function NursingRegistrationForm({
  initialCountry,
}: NursingRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const body = await prepareSubmissionFormData(formData, 'nurses-applications')

      const response = await fetch('/api/submissions/nurses-applications', {
        method: 'POST',
        body,
      })

      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error('Failed to submit application')
      }

      form.reset()
      router.push(thankYouSearchPath('nurses-applications'))
    } catch (error) {
      console.error(error)
      setErrorMessage('There was a problem submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormSheet
      title="Global Nursing Registration Form"
      description="Please complete this single application form for any of the listed countries. Our team will review your profile and guide you on eligibility, documentation, and next steps."
    >
      <form onSubmit={handleSubmit} className="form-sheet" encType="multipart/form-data">
        <FormGrid>
          <FormField label="Full Name" htmlFor="fullName" required>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="form-input"
              placeholder="Enter your full name"
              suppressHydrationWarning
            />
          </FormField>

          <FormField label="Contact Number" htmlFor="contactNumber" required>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              required
              className="form-input"
              placeholder="Include country code if possible"
              suppressHydrationWarning
            />
          </FormField>

          <FormField label="Email" htmlFor="email" required>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="Enter a valid email address"
              suppressHydrationWarning
            />
          </FormField>

          <FormField label="Country of Interest" htmlFor="countryOfInterest" required>
            <select
              id="countryOfInterest"
              name="countryOfInterest"
              required
              defaultValue={initialCountry || ''}
              className="form-input"
              suppressHydrationWarning
            >
              {!initialCountry && (
                <option value="" disabled>
                  Select country
                </option>
              )}
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Germany">Germany</option>
              <option value="Malta">Malta</option>
              <option value="Denmark">Denmark</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
            </select>
          </FormField>
        </FormGrid>

        <FormField label="Nursing Qualification" htmlFor="nursingQualification" required>
          <input
            id="nursingQualification"
            name="nursingQualification"
            type="text"
            required
            className="form-input"
            placeholder="e.g., BSc Nursing, GNM, MSc Nursing"
            suppressHydrationWarning
          />
        </FormField>

        <FormGrid>
          <FormField label="Years of Experience" htmlFor="yearsOfExperience" required>
            <input
              id="yearsOfExperience"
              name="yearsOfExperience"
              type="number"
              min={0}
              required
              className="form-input"
              placeholder="Total years of clinical experience"
              suppressHydrationWarning
            />
          </FormField>

          <FormField label="English Test" htmlFor="englishTest" hint="Optional">
            <input
              id="englishTest"
              name="englishTest"
              type="text"
              className="form-input"
              placeholder="IELTS / OET / PTE with scores, if available"
              suppressHydrationWarning
            />
          </FormField>
        </FormGrid>

        <FormField label="CV Upload" htmlFor="cv" hint="PDF, Word, images, or video (optional)">
          <input
            id="cv"
            name="cv"
            type="file"
            accept={SUBMISSION_FILE_ACCEPT}
            className="form-input form-file"
            suppressHydrationWarning
          />
        </FormField>

        <FormField label="Notes" htmlFor="notes">
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className="form-input form-textarea"
            placeholder="Share any additional details about your goals, preferred timelines, or questions."
            suppressHydrationWarning
          />
        </FormField>

        <FormActions>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold px-8 py-3 text-base md:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Nursing Application'}
          </button>
        </FormActions>

        {errorMessage ? <div className="form-feedback form-feedback-error">{errorMessage}</div> : null}
      </form>
    </FormSheet>
  )
}
