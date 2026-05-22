'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import ExplanationPanel, { ExplanationBox } from './ExplanationPanel'
import { SUBMISSION_FILE_ACCEPT, SUBMISSION_FILE_ACCEPT_HINT } from '@/lib/allowed-uploads'
import { prepareSubmissionFormData } from '@/lib/prepare-submission-form-data'
import { thankYouSearchPath } from '@/lib/thank-you-path'

// API endpoint for form submission
const API_ENDPOINT = '/api/submissions/immigration-fraud'

export default function ImmigrationFraudSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    agencyName: '',
    agencyLocation: '',
    description: '',
    evidence: null as File | null,
  })
  const [showForm, setShowForm] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-reveal')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, evidence: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('agencyName', formData.agencyName)
      formDataToSend.append('agencyLocation', formData.agencyLocation)
      formDataToSend.append('description', formData.description)
      if (formData.evidence) {
        formDataToSend.append('evidence', formData.evidence)
      }

      const body = await prepareSubmissionFormData(formDataToSend, 'immigration-fraud')

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        body,
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setFormData({
          fullName: '',
          contactNumber: '',
          agencyName: '',
          agencyLocation: '',
          description: '',
          evidence: null,
        })
        router.push(thankYouSearchPath('immigration-fraud'))
      } else {
        throw new Error(data.error || 'Submission failed. Please try again.')
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="immigration-fraud"
      ref={sectionRef}
      className="min-h-screen py-12 md:py-16 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold-metallic">
            Immigration Fraud Complaint Portal
          </h1>
          <p className="page-intro mx-auto text-lg max-w-2xl">
            A secure platform for victims of fraudulent immigration agencies to
            submit verified complaints. Your information is protected and will
            be used solely for legal and investigative purposes.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-8">
          <div 
            className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-gold-metallic/60 transition-all duration-300"
            onClick={() => setShowExplanation(!showExplanation)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setShowExplanation(!showExplanation)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Click to view details about Legal Protection & Justice"
          >
            <div className="relative h-64 overflow-hidden md:h-96">
              <img
                src="/about/immigration-fraud.jpg"
                alt="Legal Protection & Justice - Immigration Fraud Complaint"
                className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/50">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 backdrop-blur-sm">
                    <svg className="w-12 h-12 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gold-metallic">Legal Protection & Justice</h3>
                    <ExplanationPanel
                      title="Legal Protection & Justice"
                      content="This section is for people who have been cheated or misled by immigration or visa agencies. It provides a safe and confidential way to submit complaints. All information is protected and used only for legal review, investigation, and public protection. Submitting a complaint also helps prevent others from falling victim to similar scams."
                      onToggle={setShowExplanation}
                    />
                  </div>
                  <p className="text-white">Secure complaint submission for immigration fraud victims</p>
                </div>
              </div>
            </div>
          </div>
          {/* Explanation box appears here when clicked */}
          {showExplanation && (
            <ExplanationBox
              title="Legal Protection & Justice"
              content="This section is for people who have been cheated or misled by immigration or visa agencies. It provides a safe and confidential way to submit complaints. All information is protected and used only for legal review, investigation, and public protection. Submitting a complaint also helps prevent others from falling victim to similar scams."
              onClose={() => setShowExplanation(false)}
            />
          )}
        </div>

        {!showForm ? (
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <p className="text-white mb-6 text-lg">
              Report fraudulent immigration agencies and help protect others from scams.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="btn-gold"
            >
              File a Complaint
            </button>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gold-metallic">Complaint Form</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gold-metallic hover:text-gold-bright transition-colors"
              >
                ← Back
              </button>
            </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
                <p className="text-red-400 font-semibold text-center">
                  {submitError}
                </p>
              </div>
            )}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gold-metallic mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your full legal name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gold-metallic mb-2"
              >
                Contact Number *
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your contact number"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="agencyName"
                className="block text-sm font-medium text-gold-metallic mb-2"
              >
                Name of Immigration Agency *
              </label>
              <input
                type="text"
                id="agencyName"
                name="agencyName"
                required
                value={formData.agencyName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter the name of the fraudulent agency"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="agencyLocation"
                className="block text-sm font-medium text-gold-metallic mb-2"
              >
                Location of Agency *
              </label>
              <input
                type="text"
                id="agencyLocation"
                name="agencyLocation"
                required
                value={formData.agencyLocation}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter the location/address of the agency"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gold-metallic mb-2"
              >
                Description of the Scam *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                className="form-input resize-none"
                placeholder="Provide a detailed description of the fraudulent activity, including dates, amounts, and any relevant information"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="evidence"
                className="block text-sm font-medium text-gold-metallic mb-2"
              >
                Proof / Evidence Upload
              </label>
              <input
                type="file"
                id="evidence"
                name="evidence"
                accept={SUBMISSION_FILE_ACCEPT}
                onChange={handleFileChange}
                className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gold-metallic file:text-black hover:file:bg-gold-bright"
                disabled={isSubmitting}
              />
              <p className="text-xs text-gray-400 mt-2">{SUBMISSION_FILE_ACCEPT_HINT}</p>
            </div>

            <div className="bg-[#333333]/30 border border-gold-metallic/30 rounded-lg p-4 text-sm text-white">
              <p className="font-semibold text-gold-metallic mb-2">Disclaimer:</p>
              <p>
                By submitting this complaint, you confirm that all information
                provided is accurate and truthful. False or misleading
                information may result in legal consequences. Your personal
                information will be kept confidential and used only for
                investigation and legal purposes.
              </p>
            </div>

            <button type="submit" className="btn-gold w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
            </button>
          </form>
          </div>
        )}
      </div>
    </section>
  )
}
