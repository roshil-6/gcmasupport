'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HexagonBackground from '@/components/HexagonBackground'
import { thankYouSearchPath } from '@/lib/thank-you-path'

export default function StudentTutorPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    learningGoals: '',
    roleType: 'student-tutor',
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
      formDataToSend.append('name', formData.name)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('learningGoals', formData.learningGoals)
      formDataToSend.append('roleType', formData.roleType)
      
      const response = await fetch('/api/submissions/bts-student', {
        method: 'POST',
        body: formDataToSend
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setFormData({
          name: '',
          contactNumber: '',
          learningGoals: '',
          roleType: 'student-tutor',
        })
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
    <main className="relative min-h-screen">
      <HexagonBackground />
      
      {/* Navigation back to home */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/#break-the-silence" 
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors"
          >
            ← Back to Break the Silence
          </Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/home/break-silence-tutor.jpg"
              alt="Be a Child Tutor"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/60 via-[#333333]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl px-6 py-5">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gold-metallic drop-shadow-2xl">
                      Be a Child Tutor
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold drop-shadow-lg">
                      Make a Difference Through Social Service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Significance Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Significance of Social Service for Young People</h2>
                <p className="text-lg text-black mb-4 leading-relaxed font-medium">
                  Participating in social service programs as a young person is one of the most transformative experiences you can have. It's not just about teaching—it's about building character, developing empathy, and creating positive change in your community.
                </p>
                <p className="text-base text-black leading-relaxed mb-4 font-medium">
                  As a student tutor, you have the unique opportunity to help younger children learn English while developing your own leadership skills, communication abilities, and sense of responsibility. This experience shapes you into a more compassionate, confident, and socially aware individual.
                </p>
                <p className="text-base text-black leading-relaxed font-medium">
                  Teaching others reinforces your own learning, builds your confidence, and gives you valuable experience that will benefit you in your academic and professional journey. Most importantly, you become part of a movement that empowers others through education.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/break-the-silence/student-tutor-significance.jpg"
                  alt="Social Service Significance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Importance Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg p-6">
                <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 mb-4">
                  <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Personal Growth</h3>
                <p className="text-black text-sm leading-relaxed font-medium">
                  Develop leadership skills, confidence, and empathy through teaching and mentoring younger students.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg p-6">
                <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 mb-4">
                  <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Community Impact</h3>
                <p className="text-black text-sm leading-relaxed font-medium">
                  Make a meaningful difference in your community by helping children improve their English communication skills.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg p-6">
                <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50 mb-4">
                  <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Skill Development</h3>
                <p className="text-black text-sm leading-relaxed font-medium">
                  Enhance your own English skills, teaching abilities, and gain valuable experience for your future career.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Student Tutor Application Form</h2>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {submitError && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
                  <p className="text-red-500 font-semibold text-center">
                    {submitError}
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  I Am a *
                </label>
                <select
                  name="roleType"
                  required
                  value={formData.roleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                  disabled={isSubmitting}
                >
                  <option value="student">Student</option>
                  <option value="student-tutor">Student Tutor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                  placeholder="Enter your contact number"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Learning Goals / Why You Want to Be a Tutor *
                </label>
                <textarea
                  name="learningGoals"
                  required
                  value={formData.learningGoals}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic resize-none"
                  placeholder="Describe your learning goals, why you want to be a student tutor, and what you hope to achieve through this social service program"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex gap-3">
                <button 
                  type="submit" 
                  className="flex-1 bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
