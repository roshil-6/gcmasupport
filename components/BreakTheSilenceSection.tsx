'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { scrollIntoViewSafe } from '@/lib/scroll'
import { prepareSubmissionFormData } from '@/lib/prepare-submission-form-data'
import { thankYouSearchPath } from '@/lib/thank-you-path'
import { useScrollInvalidFieldIntoView } from '@/lib/use-scroll-invalid-into-view'
import ExplanationPanel, { ExplanationBox } from './ExplanationPanel'

export default function BreakTheSilenceSection() {
  const searchParams = useSearchParams()
  const [selectedOption, setSelectedOption] = useState<'student' | 'tutor' | null>(
    null
  )
  const [studentFormRole, setStudentFormRole] = useState<'student' | 'student-tutor'>('student')
  const [showExplanation, setShowExplanation] = useState(false)
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

  useEffect(() => {
    const applyType = searchParams.get('apply')
    if (applyType === 'student-tutor') {
      setStudentFormRole('student-tutor')
      setSelectedOption('student')
    } else if (applyType === 'student') {
      setStudentFormRole('student')
      setSelectedOption('student')
    } else if (applyType === 'tutor') {
      setSelectedOption('tutor')
    } else {
      return
    }

    let attempts = 0
    const maxAttempts = 24

    const scrollToSection = () => {
      const target = sectionRef.current ?? document.getElementById('break-the-silence')
      if (!target) {
        return false
      }

      scrollIntoViewSafe(target)
      return true
    }

    const timer = window.setInterval(() => {
      if (scrollToSection() || attempts >= maxAttempts) {
        window.clearInterval(timer)
      }
      attempts += 1
    }, 100)

    return () => window.clearInterval(timer)
  }, [searchParams])

  return (
    <section
      id="break-the-silence"
      ref={sectionRef}
      className="min-h-screen py-12 md:py-16 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold-metallic">
            Break the Silence
          </h2>
          <p className="page-intro mx-auto text-lg max-w-2xl">
            A social initiative focused on improving English communication skills
            through subsided, volunteer-based teaching. Empowering individuals through
            language and confidence.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-8">
          <div
            className="glass-card dark-container rounded-2xl overflow-hidden cursor-pointer hover:border-gold-metallic/60 transition-all duration-300"
            onClick={() => setShowExplanation(!showExplanation)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setShowExplanation(!showExplanation)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Click to view details about Communication & Confidence"
          >
            <div className="relative h-64 overflow-hidden md:h-80">
              <img
                src="/home/break-silence-main.jpg"
                alt="Break the Silence - English Communication and Learning"
                className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/70">
                <div className="text-center p-8 relative w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 backdrop-blur-sm">
                    <svg className="w-12 h-12 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gold-metallic">Communication & Confidence</h3>
                    <ExplanationPanel
                      title="Communication & Confidence"
                      content="This free social initiative helps individuals improve their English communication skills in a supportive environment. Teaching is provided by volunteers as a social service. The focus is on confidence-building, expression, and personal growth."
                      onToggle={setShowExplanation}
                    />
                  </div>
                  <p className="text-white">Free English language learning through volunteer mentorship</p>
                </div>
              </div>
            </div>
          </div>
          {/* Explanation box appears here when clicked */}
          {showExplanation && (
            <ExplanationBox
              title="Communication & Confidence"
              content="This free social initiative helps individuals improve their English communication skills in a supportive environment. Teaching is provided by volunteers as a social service. The focus is on confidence-building, expression, and personal growth."
              onClose={() => setShowExplanation(false)}
            />
          )}
        </div>

        <div className="glass-card dark-container rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <button
              onClick={() => {
                setStudentFormRole('student')
                setSelectedOption('student')
              }}
              className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedOption === 'student'
                ? 'border-gold-metallic bg-gold-metallic/10'
                : 'border-gold-metallic/30 hover:border-gold-metallic/60'
                }`}
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/home/break-silence-student.jpg"
                  alt="I Am a Student - English Learning"
                  className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-px left-0 right-0 top-0 bg-[#333333]/40"></div>
              </div>
              <div className="p-6 bg-[#333333]/75">
                <h3 className="text-2xl font-bold text-gold-metallic mb-2">
                  I Am a Student
                </h3>
                <p className="text-on-dark text-sm leading-relaxed">
                  Apply to improve your English speaking skills through our
                  volunteer-based program.
                </p>
              </div>
            </button>

            <button
              onClick={() => setSelectedOption('tutor')}
              className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedOption === 'tutor'
                ? 'border-gold-metallic bg-gold-metallic/10'
                : 'border-gold-metallic/30 hover:border-gold-metallic/60'
                }`}
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/home/break-silence-tutor.jpg"
                  alt="I Am a Tutor - Volunteer Teaching"
                  className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-px left-0 right-0 top-0 bg-[#333333]/40"></div>
              </div>
              <div className="p-6 bg-[#333333]/75">
                <h3 className="text-2xl font-bold text-gold-metallic mb-2">
                  I Am a Tutor
                </h3>
                <p className="text-on-dark text-sm leading-relaxed">
                  Volunteer to teach English as a social service. Teaching is
                  completely free.
                </p>
              </div>
            </button>
          </div>

          {/* Be a Child Tutor - Always Visible */}
          <div className="mb-8 text-center">
            <Link
              href="/?apply=student-tutor#break-the-silence"
              scroll={false}
              onClick={() => {
                setStudentFormRole('student-tutor')
                setSelectedOption('student')
                window.requestAnimationFrame(() => {
                  const el = sectionRef.current ?? document.getElementById('break-the-silence')
                  if (el) scrollIntoViewSafe(el)
                })
              }}
              className="inline-flex items-center gap-2 text-gold-metallic hover:text-gold-bright font-semibold transition-colors text-lg border-2 border-gold-metallic/40 hover:border-gold-metallic rounded-lg px-6 py-3 bg-[#333333]/80 hover:bg-[#333333]/90"
            >
              <span>Be a Child Tutor</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {selectedOption === 'student' && (
            <div>
              <StudentForm
                initialRoleType={studentFormRole}
                onClose={() => setSelectedOption(null)}
              />
            </div>
          )}

          {selectedOption === 'tutor' && (
            <TutorForm onClose={() => setSelectedOption(null)} />
          )}
        </div>
      </div>
    </section>
  )
}

// API endpoint for BTS Student Form
const BTS_STUDENT_API_ENDPOINT = '/api/submissions/bts-student'

function StudentForm({
  onClose,
  initialRoleType = 'student',
}: {
  onClose: () => void
  initialRoleType?: 'student' | 'student-tutor'
}) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  useScrollInvalidFieldIntoView(formRef)
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    learningGoals: '',
    roleType: initialRoleType,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    setFormData((prev) =>
      prev.roleType === initialRoleType ? prev : { ...prev, roleType: initialRoleType }
    )
  }, [initialRoleType])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      formDataToSend.append('name', formData.name)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('learningGoals', formData.learningGoals)
      formDataToSend.append('roleType', formData.roleType)

      const body = await prepareSubmissionFormData(formDataToSend, 'bts-student')

      const response = await fetch(BTS_STUDENT_API_ENDPOINT, {
        method: 'POST',
        body,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormData({
          name: '',
          contactNumber: '',
          learningGoals: '',
          roleType: initialRoleType,
        })
        onClose()
        router.push(thankYouSearchPath('bts-student'))
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
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gold-metallic mb-4">
        Student Application Form
      </h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            I Am a *
          </label>
          <select
            name="roleType"
            required
            value={formData.roleType}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                roleType: e.target.value as 'student' | 'student-tutor',
              }))
            }
            className="form-input"
            disabled={isSubmitting}
          >
            <option value="student">Student</option>
            <option value="student-tutor">Student Tutor</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
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
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Learning Goals *
          </label>
          <textarea
            name="learningGoals"
            required
            value={formData.learningGoals}
            onChange={handleInputChange}
            rows={4}
            className="form-input resize-none"
            placeholder="Describe your learning goals and what you hope to achieve"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-3">
          <button type="submit" className="btn-gold flex-1" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-gold-outline flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

// API endpoint for BTS Tutor Form
const BTS_TUTOR_API_ENDPOINT = '/api/submissions/bts-tutor'

function TutorForm({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  useScrollInvalidFieldIntoView(formRef)
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    areaOfExpertise: '',
    availability: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      formDataToSend.append('name', formData.name)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('areaOfExpertise', formData.areaOfExpertise)
      formDataToSend.append('availability', formData.availability)

      const body = await prepareSubmissionFormData(formDataToSend, 'bts-tutor')

      const response = await fetch(BTS_TUTOR_API_ENDPOINT, {
        method: 'POST',
        body,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormData({
          name: '',
          contactNumber: '',
          areaOfExpertise: '',
          availability: '',
        })
        onClose()
        router.push(thankYouSearchPath('bts-tutor'))
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
    <div className="mt-6">
      <div className="bg-gold-metallic/10 border border-gold-metallic/30 rounded-lg p-4 mb-6">
        <p className="text-gold-metallic font-semibold text-center">
          ⚠️ Important: Teaching is carried out as a voluntary social service, with our educators contributing their time and knowledge without compensation to support community development.
        </p>
      </div>

      <h3 className="text-xl font-bold text-gold-metallic mb-4">
        Tutor Application Form
      </h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
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
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Area of Expertise *
          </label>
          <input
            type="text"
            name="areaOfExpertise"
            required
            value={formData.areaOfExpertise}
            onChange={handleInputChange}
            className="form-input"
            placeholder="e.g., Business English, Conversational English, Academic Writing"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gold-metallic mb-2">
            Availability *
          </label>
          <textarea
            name="availability"
            required
            value={formData.availability}
            onChange={handleInputChange}
            rows={3}
            className="form-input resize-none"
            placeholder="Describe your availability (e.g., Weekdays 6-8 PM, Weekends)"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-3">
          <button type="submit" className="btn-gold flex-1" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-gold-outline flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
