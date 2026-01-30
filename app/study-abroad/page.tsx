'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

const studyCountries = [
  {
    name: 'Australia',
    description: 'Top-ranked universities with world-class education',
    features: ['Work while studying', 'Post-study work visa', 'PR pathway'],
    image: '/study-abroad/australia.jpg'
  },
  {
    name: 'Germany',
    description: 'Fully funded programs available. Fly to Germany via Dubai',
    features: ['100% Funded Programs', 'Low tuition fees', 'Strong job market'],
    image: '/study-abroad/germany.jpg'
  },
  {
    name: 'Denmark',
    description: 'Engineers top choice. Spouse & kid visa friendly',
    features: ['Engineering programs', 'Family-friendly', 'High quality of life'],
    image: '/study-abroad/denmark.jpg'
  },
  {
    name: 'Sweden',
    description: 'Management programs. Spouse & kid visa friendly',
    features: ['Business programs', 'Family-friendly', 'Innovation hub'],
    image: '/study-abroad/sweden.jpg'
  },
  {
    name: 'France',
    description: 'Paris - Perfect destination for fashion lovers',
    features: ['Fashion & design', 'Rich culture', 'EU opportunities'],
    image: '/study-abroad/france.jpg'
  },
  {
    name: 'Malta',
    description: 'Ideal for nursing. Up to 70% tuition fee refund',
    features: ['Nursing programs', 'Tuition refund', 'English speaking'],
    image: '/study-abroad/malta.jpg'
  },
  {
    name: 'Latvia',
    description: 'Easy entry to Schengen Zone. Lowest tuition fee',
    features: ['Affordable fees', 'Schengen access', 'EU gateway'],
    image: '/study-abroad/latvia.jpg'
  }
]

export default function StudyAbroadPage() {
  const [showConsultationForm, setShowConsultationForm] = useState(false)

  return (
    <main className="relative min-h-screen">
      <HexagonBackground />
      
      {/* Navigation back to home */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Header Section with Call-to-Action */}
      <section className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-metallic mb-4">
              Study Abroad Programs
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto font-medium">
              "We promise not to make your Study Abroad Dream a Financial Burden."
            </p>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
              Affordable Study Options—No Debt, No Stress
            </p>
            
            {/* Large Call-to-Action Button */}
            <Link href="/contact" className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold text-lg px-8 py-4 rounded-lg gap-3 mx-auto transition-all shadow-lg hover:shadow-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Talk to our Experts to know more</span>
            </Link>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {/* Years of Practice */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gold-metallic/20 border-2 border-gold-metallic/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold-metallic">10+</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold-metallic rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>
              <p className="text-white font-medium text-base">Years of Experience</p>
            </div>

            {/* Students Helped */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gold-metallic mb-1">5K+</p>
              <p className="text-white font-medium text-base">Students Helped</p>
            </div>

            {/* Success Rate */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center relative">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div className="absolute -top-2 -right-2 bg-gold-metallic text-black text-xs font-bold px-2 py-1 rounded">
                  100%
                </div>
              </div>
              <p className="text-white font-medium text-base">Success Rate</p>
            </div>

            {/* Trusted Worldwide */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center relative">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <svg className="absolute top-0 right-0 w-8 h-8 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white font-medium text-base">Trusted</p>
              <p className="text-white font-medium text-base">Worldwide</p>
            </div>
          </div>

          {/* Why Study Abroad Section */}
          <div className="bg-black/80 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
                Why do you want to study abroad?
              </h2>
              <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
                Is it to study, work, or gain PR through studying abroad? Our guidance is based on your intentions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gold-metallic/10 border border-gold-metallic/30 rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/study-abroad/to-study.jpg"
                      alt="To Study"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 mx-auto mb-4">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic mb-2 text-center">To Study</h3>
                    <p className="text-white text-sm text-center">World-class education at top-ranked universities</p>
                  </div>
                </div>
                <div className="bg-gold-metallic/10 border border-gold-metallic/30 rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/study-abroad/to-work.jpg"
                      alt="To Work"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 mx-auto mb-4">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic mb-2 text-center">To Work</h3>
                    <p className="text-white text-sm text-center">Work opportunities while studying and after graduation</p>
                  </div>
                </div>
                <div className="bg-gold-metallic/10 border border-gold-metallic/30 rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/study-abroad/to-gain-pr.jpg"
                      alt="To Gain PR"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 mx-auto mb-4">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic mb-2 text-center">To Gain PR</h3>
                    <p className="text-white text-sm text-center">Permanent residency pathways through education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Study Free Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
              Study Free With Full Scholarship
            </h2>
            <p className="text-xl text-white mb-6">
              100% Funded for Top Performers
            </p>
            <button
              onClick={() => setShowConsultationForm(!showConsultationForm)}
              className="bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Apply Now
            </button>
          </div>

          {/* Country Cards Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Study in Top World Ranking Universities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyCountries.map((country, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
                  <div className="relative w-full h-48">
                    <Image
                      src={country.image}
                      alt={`Study in ${country.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <p className="text-sm font-bold text-slate-100 mb-1 drop-shadow-2xl">Study in {country.name}</p>
                      <h3 className="text-2xl font-extrabold text-slate-100 drop-shadow-2xl">{country.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-black/80">
                    <p className="text-white text-base mb-4 font-semibold leading-relaxed">{country.description}</p>
                    <ul className="space-y-2 mb-4">
                      {country.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-gold-bright mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-white font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2 px-4 bg-gold-metallic/30 hover:bg-gold-metallic/40 text-white font-bold rounded-lg transition-colors border border-gold-metallic/60 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Form Section */}
          {showConsultationForm && (
            <div className="bg-black/80 rounded-2xl p-8 md:p-12 mb-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
                  Free Consultation
                </h2>
                <ConsultationForm onClose={() => setShowConsultationForm(false)} />
              </div>
            </div>
          )}

          {/* Still Confused Section */}
          <div className="bg-black/80 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still Confused?
                </h2>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Connect with us to learn more about our study abroad programs. 
                  Our experts are here to guide you through the application process 
                  and answer any questions you may have.
                </p>
                <Link href="/contact" className="inline-block bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-6 py-3 rounded-lg transition-all">
                  We are Here
                </Link>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/study-abroad/banner.jpg"
                  alt="Connect with us"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Consultation Form Component
const CONSULTATION_API_ENDPOINT = '/api/submissions/study-abroad-consultation'

function ConsultationForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    preferredCountry: '',
    comment: '',
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)
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
      formDataToSend.append('name', formData.name)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('preferredCountry', formData.preferredCountry)
      formDataToSend.append('comment', formData.comment)
      
      const response = await fetch(CONSULTATION_API_ENDPOINT, {
        method: 'POST',
        body: formDataToSend
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          preferredCountry: '',
          comment: '',
        })
        
        setTimeout(() => {
          setSubmitSuccess(false)
          onClose()
        }, 3000)
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitSuccess && (
        <div className="bg-gold-metallic/20 border border-gold-metallic/50 rounded-lg p-4 mb-4">
          <p className="text-gold-metallic font-semibold text-center">
            ✓ Consultation request submitted successfully! We'll contact you soon.
          </p>
        </div>
      )}
      {submitError && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
          <p className="text-red-500 font-semibold text-center">{submitError}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic"
          placeholder="Enter your full name"
          disabled={isSubmitting || submitSuccess}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Contact Number *
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic"
          placeholder="Enter your contact number"
          disabled={isSubmitting || submitSuccess}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic"
          placeholder="Enter your email address"
          disabled={isSubmitting || submitSuccess}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Preferred Country *
        </label>
        <select
          name="preferredCountry"
          required
          value={formData.preferredCountry}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-metallic appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a961' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem'
          }}
          disabled={isSubmitting || submitSuccess}
        >
          <option value="" className="bg-black/80 text-slate-100">Select preferred country</option>
          <option value="australia" className="bg-black/80 text-slate-100">Australia</option>
          <option value="germany" className="bg-black/80 text-slate-100">Germany</option>
          <option value="denmark" className="bg-black/80 text-slate-100">Denmark</option>
          <option value="sweden" className="bg-black/80 text-slate-100">Sweden</option>
          <option value="france" className="bg-black/80 text-slate-100">France</option>
          <option value="malta" className="bg-black/80 text-slate-100">Malta</option>
          <option value="latvia" className="bg-black/80 text-slate-100">Latvia</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Comment / Questions
        </label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic resize-none"
          placeholder="Tell us about your study abroad goals and any questions you have"
          disabled={isSubmitting || submitSuccess}
        />
      </div>

      <div className="flex gap-3">
        <button type="submit" className="flex-1 py-3 px-6 bg-gold-metallic text-black font-semibold rounded-lg hover:bg-gold-bright transition-colors disabled:opacity-50" disabled={isSubmitting || submitSuccess}>
          {isSubmitting ? 'Submitting...' : submitSuccess ? 'Submitted ✓' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 px-6 border-2 border-gold-metallic text-gold-metallic font-semibold rounded-lg hover:bg-gold-metallic/10 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
