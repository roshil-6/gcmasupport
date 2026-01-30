'use client'

import { useState } from 'react'

interface NursingRegistrationFormProps {
  initialCountry?: string
}

export default function NursingRegistrationForm({
  initialCountry,
}: NursingRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/submissions/nurses-applications', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setSubmitMessage(
        'Thank you. Your Global Nursing Registration application has been received. Our team will review your details and contact you.'
      )
      form.reset()
    } catch (error) {
      console.error(error)
      setErrorMessage('There was a problem submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-semibold text-gold-metallic mb-2">
        Global Nursing Registration Form
      </h3>
      <p className="text-sm md:text-base text-gray-300 mb-6">
        Please complete this single application form for any of the listed countries. Our team
        will review your profile and guide you on eligibility, documentation, and next steps.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gold-metallic mb-1">
              Full Name *
            </label>
            <input
              name="fullName"
              type="text"
              required
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-semibold text-gold-metallic mb-1">
              Contact Number *
            </label>
            <input
              name="contactNumber"
              type="tel"
              required
              className="form-input"
              placeholder="Include country code if possible"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gold-metallic mb-1">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="Enter a valid email address"
            />
          </div>

          {/* Country of Interest */}
          <div>
            <label className="block text-sm font-semibold text-gold-metallic mb-1">
              Country of Interest *
            </label>
            <select
              name="countryOfInterest"
              required
              defaultValue={initialCountry || ''}
              className="form-input"
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
          </div>
        </div>

        {/* Nursing Qualification */}
        <div>
          <label className="block text-sm font-semibold text-gold-metallic mb-1">
            Nursing Qualification *
          </label>
          <input
            name="nursingQualification"
            type="text"
            required
            className="form-input"
            placeholder="e.g., BSc Nursing, GNM, MSc Nursing"
          />
        </div>

        {/* Years of Experience & English Test */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gold-metallic mb-1">
              Years of Experience *
            </label>
            <input
              name="yearsOfExperience"
              type="number"
              min={0}
              required
              className="form-input"
              placeholder="Total years of clinical experience"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gold-metallic mb-1">
              English Test (optional)
            </label>
            <input
              name="englishTest"
              type="text"
              className="form-input"
              placeholder="IELTS / OET / PTE with scores, if available"
            />
          </div>
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-sm font-semibold text-gold-metallic mb-1">
            CV Upload (PDF / DOC, optional)
          </label>
          <input name="cv" type="file" accept=".pdf,.doc,.docx" className="form-input" />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold text-gold-metallic mb-1">Notes</label>
          <textarea
            name="notes"
            rows={4}
            className="form-input"
            placeholder="Share any additional details about your goals, preferred timelines, or questions."
          />
        </div>

        {/* Submit */}
        <div className="pt-2 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold px-8 py-3 text-base md:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Nursing Application'}
          </button>
        </div>

        {/* Messages */}
        {submitMessage && (
          <div className="mt-3 text-sm text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3 text-center">
            {submitMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-3 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  )
}

