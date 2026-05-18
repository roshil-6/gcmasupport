'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import WelfareProgramCard from './WelfareProgramCard'
import { SUBMISSION_FILE_ACCEPT, SUBMISSION_FILE_ACCEPT_HINT } from '@/lib/allowed-uploads'
import { prepareSubmissionFormData } from '@/lib/prepare-submission-form-data'
import { thankYouSearchPath } from '@/lib/thank-you-path'
import { useScrollInvalidFieldIntoView } from '@/lib/use-scroll-invalid-into-view'

export default function HumanitarianAidSection() {
  const [activeCard, setActiveCard] = useState<'medical' | 'education' | null>(
    null
  )
  const [showMedicalExplanation, setShowMedicalExplanation] = useState(false)
  const [showEducationExplanation, setShowEducationExplanation] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section
      id="social-support"
      ref={sectionRef}
      className="min-h-screen py-10 sm:py-12 md:py-16 px-3 sm:px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold-metallic">
            Humanitarian Aid & Welfare Programs
          </h2>
          <p className="page-intro mx-auto text-lg max-w-2xl">
            Supporting communities through verified medical assistance and
            educational empowerment programs.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <WelfareProgramCard
            id="medical-assistance"
            imageSrc="/home/healthcare-support.jpg"
            imageAlt="Medical assistance for financially vulnerable patients"
            eyebrow="Humanitarian Aid"
            headline="Healthcare Support"
            title="Medical Assistance for the Underprivileged"
            description="Support financially vulnerable patients through verified hospital referrals. We connect those in need with appropriate medical care and financial assistance."
            highlights={[
              'Verified referrals from licensed doctors and recognized hospitals',
              'Financial assistance for treatment, surgery, and emergency care',
              'Transparent review with dignity-first communication',
            ]}
            explanation={{
              title: 'Healthcare Support',
              content:
                'This program supports financially vulnerable patients who need medical assistance. Applications are reviewed using verified doctor and hospital referrals to ensure responsible and fair support. The focus is on dignity, transparency, and genuine care.',
            }}
            showExplanation={showMedicalExplanation}
            onToggleExplanation={setShowMedicalExplanation}
            applyLabel="Apply for Medical Assistance"
            closeLabel="Close Form"
            isFormOpen={activeCard === 'medical'}
            onApplyToggle={() => setActiveCard(activeCard === 'medical' ? null : 'medical')}
            icon={
              <svg className="h-6 w-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            form={<MedicalForm onClose={() => setActiveCard(null)} />}
          />

          <WelfareProgramCard
            id="education-support"
            imageSrc="/home/education-support.jpg"
            imageAlt="Educational support for girl students"
            eyebrow="Social Welfare"
            headline="Education Empowerment"
            title="Educational Support for Girl Students"
            description="Promote education and empowerment for girls through social welfare initiatives. Supporting the next generation of leaders and change-makers."
            highlights={[
              'Support for school fees, supplies, and continuing education',
              'Applications reviewed with family context and need in mind',
              'Focus on long-term empowerment through learning access',
            ]}
            explanation={{
              title: 'Education Empowerment',
              content:
                "This initiative supports girl students who require educational assistance to continue their studies. Applications help us understand the student's background and needs so support can be provided responsibly and meaningfully. The goal is empowerment through education.",
            }}
            showExplanation={showEducationExplanation}
            onToggleExplanation={setShowEducationExplanation}
            applyLabel="Apply for Educational Support"
            closeLabel="Close Form"
            isFormOpen={activeCard === 'education'}
            onApplyToggle={() => setActiveCard(activeCard === 'education' ? null : 'education')}
            icon={
              <svg className="h-6 w-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            form={<EducationForm onClose={() => setActiveCard(null)} />}
          />
        </div>
      </div>
    </section>
  )
}

// API endpoint for Medical Form
const MEDICAL_API_ENDPOINT = '/api/submissions/medical-assistance'

function MedicalForm({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  useScrollInvalidFieldIntoView(formRef)
  const [formData, setFormData] = useState({
    applicantName: '',
    contactNumber: '',
    doctorName: '',
    hospitalName: '',
    caseDescription: '',
    medicalCertificate: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, medicalCertificate: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('applicantName', formData.applicantName)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('doctorName', formData.doctorName)
      formDataToSend.append('hospitalName', formData.hospitalName)
      formDataToSend.append('caseDescription', formData.caseDescription)
      if (formData.medicalCertificate) {
        formDataToSend.append('medicalCertificate', formData.medicalCertificate)
      }

      const body = await prepareSubmissionFormData(formDataToSend, 'medical-assistance')

      const response = await fetch(MEDICAL_API_ENDPOINT, {
        method: 'POST',
        body,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormData({
          applicantName: '',
          contactNumber: '',
          doctorName: '',
          hospitalName: '',
          caseDescription: '',
          medicalCertificate: null,
        })
        router.push(thankYouSearchPath('medical-assistance'))
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
    <form ref={formRef} onSubmit={handleSubmit} className="form-sheet">
      {submitError && (
        <div className="rounded-lg border border-red-400/50 bg-red-950/40 p-4">
          <p className="text-center text-sm font-semibold text-red-200">{submitError}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Applicant Name *
        </label>
        <input
          type="text"
          name="applicantName"
          required
          value={formData.applicantName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter applicant's full name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Contact Number *
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter contact number"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Referring Doctor's Name *
        </label>
        <input
          type="text"
          name="doctorName"
          required
          value={formData.doctorName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter referring doctor's name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Referring Hospital Name *
        </label>
        <input
          type="text"
          name="hospitalName"
          required
          value={formData.hospitalName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter hospital name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Medical Case Description *
        </label>
        <textarea
          name="caseDescription"
          required
          value={formData.caseDescription}
          onChange={handleInputChange}
          rows={4}
          className="form-input resize-none"
          placeholder="Describe the medical condition and required assistance"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Medical Certificate (Optional)
        </label>
        <input
          type="file"
          name="medicalCertificate"
          accept={SUBMISSION_FILE_ACCEPT}
          onChange={handleFileChange}
          className="form-input file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gold-metallic file:text-black hover:file:bg-gold-bright"
          disabled={isSubmitting}
        />
        {formData.medicalCertificate && (
          <p className="text-xs text-white/60 mt-2">
            Selected: {formData.medicalCertificate.name}
          </p>
        )}
        <p className="text-xs text-white/55 mt-2">{SUBMISSION_FILE_ACCEPT_HINT}</p>
      </div>

      <div className="form-actions-row">
        <button
          type="submit"
          className="btn-gold"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        <button type="button" onClick={onClose} className="btn-gold-outline">
          Cancel
        </button>
      </div>
    </form>
  )
}

// API endpoint for Education Form
const EDUCATION_API_ENDPOINT = '/api/submissions/education-support'

function EducationForm({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  useScrollInvalidFieldIntoView(formRef)
  const [formData, setFormData] = useState({
    studentName: '',
    contactNumber: '',
    educationLevel: '',
    schoolName: '',
    supportRequirement: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('studentName', formData.studentName)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('educationLevel', formData.educationLevel)
      formDataToSend.append('schoolName', formData.schoolName)
      formDataToSend.append('supportRequirement', formData.supportRequirement)

      const body = await prepareSubmissionFormData(formDataToSend, 'education-support')

      const response = await fetch(EDUCATION_API_ENDPOINT, {
        method: 'POST',
        body,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormData({
          studentName: '',
          contactNumber: '',
          educationLevel: '',
          schoolName: '',
          supportRequirement: '',
        })
        router.push(thankYouSearchPath('education-support'))
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
    <form ref={formRef} onSubmit={handleSubmit} className="form-sheet">
      {submitError && (
        <div className="rounded-lg border border-red-400/50 bg-red-950/40 p-4">
          <p className="text-center text-sm font-semibold text-red-200">{submitError}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Student Name *
        </label>
        <input
          type="text"
          name="studentName"
          required
          value={formData.studentName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter student's full name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Contact Number *
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter contact number"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Current Education Level *
        </label>
        <select
          name="educationLevel"
          required
          value={formData.educationLevel}
          onChange={handleInputChange}
          className="form-input appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a961' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem'
          }}
          disabled={isSubmitting}
        >
          <option value="">Select education level</option>
          <option value="primary">Primary School</option>
          <option value="secondary">Secondary School</option>
          <option value="higher-secondary">Higher Secondary</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          School / College Name *
        </label>
        <input
          type="text"
          name="schoolName"
          required
          value={formData.schoolName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter school or college name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gold-metallic mb-2.5">
          Support Requirement Description *
        </label>
        <textarea
          name="supportRequirement"
          required
          value={formData.supportRequirement}
          onChange={handleInputChange}
          rows={4}
          className="form-input resize-none"
          placeholder="Describe the type of educational support needed"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-actions-row">
        <button type="submit" className="btn-gold" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        <button type="button" onClick={onClose} className="btn-gold-outline">
          Cancel
        </button>
      </div>
    </form>
  )
}
