'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HexagonBackground from '@/components/HexagonBackground'
import GetInTouchSection from '@/components/GetInTouchSection'
import Link from 'next/link'
import { FormActions, FormField, FormGrid, FormSheet } from '@/components/FormSheet'
import { thankYouSearchPath } from '@/lib/thank-you-path'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    mailAddress: '',
    age: '',
    qualification: '',
    occupation: '',
    experience: '',
    relationshipStatus: 'Single'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submissions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json().catch(() => ({}))
        if (data && data.success === false) {
          setSubmitMessage(data.message || 'There was an error submitting your form. Please try again.')
          return
        }
        setFormData({
          name: '',
          contactNumber: '',
          mailAddress: '',
          age: '',
          qualification: '',
          occupation: '',
          experience: '',
          relationshipStatus: 'Single'
        })
        router.push(thankYouSearchPath('contact'))
        return
      }
      let detail = 'There was an error submitting your form. Please try again.'
      try {
        const data = await response.json()
        if (data && typeof data.message === 'string' && data.message.trim()) {
          detail = data.message
        }
      } catch {
        /* ignore */
      }
      setSubmitMessage(detail)
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen">
      {/* Golden Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-metallic/20 via-gold-metallic/15 to-gold-metallic/10 z-0"></div>
      <HexagonBackground />

      {/* Simple back to home nav */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-gold-metallic hover:text-gold-bright text-sm md:text-base transition-colors"
          >
            Back to Home
          </Link>
          <span className="text-xs md:text-sm text-white">
            Contact Us
          </span>
        </div>
      </nav>

      {/* Dedicated Get In Touch section */}
      <GetInTouchSection />

      {/* Contact Form Section */}
      <section id="get-in-touch-form" className="py-12 md:py-16 px-4 relative z-10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <FormSheet title="Contact Form" description="Share your details and our team will get back to you.">
            <form onSubmit={handleSubmit} className="form-sheet">
              <div className="form-grid form-grid-two">
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-gold-metallic font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contactNumber" className="block text-gold-metallic font-semibold mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your contact number"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="mailAddress" className="block text-gold-metallic font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="mailAddress"
                    name="mailAddress"
                    value={formData.mailAddress}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-gold-metallic font-semibold mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    max="120"
                    className="form-input w-full"
                    placeholder="Enter your age"
                  />
                </div>

                {/* Qualification */}
                <div>
                  <label htmlFor="qualification" className="block text-gold-metallic font-semibold mb-2">
                    Qualification *
                  </label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your qualification"
                  />
                </div>

                {/* Occupation */}
                <div>
                  <label htmlFor="occupation" className="block text-gold-metallic font-semibold mb-2">
                    Occupation *
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Enter your occupation"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-gold-metallic font-semibold mb-2">
                    Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-input w-full"
                    placeholder="Describe your experience"
                  />
                </div>

                {/* Relationship Status */}
                <div>
                  <label htmlFor="relationshipStatus" className="block text-gold-metallic font-semibold mb-2">
                    Relationship Status *
                  </label>
                  <select
                    id="relationshipStatus"
                    name="relationshipStatus"
                    value={formData.relationshipStatus}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <FormActions>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </FormActions>

              {submitMessage ? (
                <div
                  className={`form-feedback ${
                    submitMessage.includes('successfully')
                      ? 'form-feedback-success'
                      : 'form-feedback-error'
                  }`}
                >
                  {submitMessage}
                </div>
              ) : null}
            </form>
          </FormSheet>
        </div>
      </section>
    </main>
  )
}

