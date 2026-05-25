'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import { SUBMISSION_FILE_ACCEPT, SUBMISSION_FILE_ACCEPT_HINT } from '@/lib/allowed-uploads'
import { prepareSubmissionFormData } from '@/lib/prepare-submission-form-data'
import { thankYouSearchPath } from '@/lib/thank-you-path'
import { useScrollInvalidFieldIntoView } from '@/lib/use-scroll-invalid-into-view'

export default function CharitySupportPage() {
  const [activeForm, setActiveForm] = useState<'medical' | 'education' | null>(null)

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
              Charity Support Programs
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium">
              Supporting communities through verified assistance and empowerment programs
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
            {/* Ethical assurance — honest guidance, no inflated claims */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gold-metallic mb-1">Ethical</p>
              <p className="text-white font-medium text-base">Honest guidance</p>
            </div>

            {/* Counseling Sessions */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gold-metallic mb-1">25K+</p>
              <p className="text-white font-medium text-base">Counseling Sessions</p>
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

          {/* Dark Band Section - "Still Confused?" */}
          <div className="bg-gradient-to-br from-white/90 via-white/80 to-[#f9f2e7]/70 rounded-2xl p-8 md:p-12 border border-gold-metallic/40 shadow-xl mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d] mb-4">
                  Still Confused?
                </h2>
                <p className="text-lg text-[#2a241d] mb-6 leading-relaxed">
                  Connect with us to learn more about our charity support programs. 
                  Our experts are here to guide you through the application process 
                  and answer any questions you may have.
                </p>
                <Link href="/contact" className="inline-block bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg">
                  We are Here
                </Link>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-gold-metallic/20">
                <Image
                  src="/charity-support/banner.jpg"
                  alt="Connect with us"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#6e531d]/20 border border-[#6e531d]/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-[#6e531d] text-2xl font-bold">?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charity Options Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Healthcare Support Card */}
            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-xl">
              <div className="relative w-full h-64">
                <Image
                  src="/charity-support/healthcare.jpg"
                  alt="Healthcare Support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#6e531d]/10 flex items-center justify-center border-2 border-[#6e531d]/30">
                    <svg className="w-6 h-6 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#6e531d]">
                    Healthcare Support
                  </h2>
                </div>
                <div className="mb-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6e531d]/10 flex items-center justify-center border border-[#6e531d]/30 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-base text-[#2a241d] leading-relaxed">
                      Our Healthcare Support program assists financially vulnerable individuals and families 
                      facing medical emergencies. We ensure support reaches those who genuinely need it through 
                      verified medical professionals and recognized healthcare institutions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6e531d]/10 flex items-center justify-center border border-[#6e531d]/30 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-base text-[#2a241d] leading-relaxed">
                      Our program focuses on providing dignified, transparent, and compassionate assistance 
                      while maintaining accountability. We work closely with doctors and hospitals to verify 
                      cases and coordinate appropriate medical interventions.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6e531d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#6e531d]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#4a4238]">Verified referrals from licensed doctors and recognized hospitals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6e531d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#6e531d]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#4a4238]">Financial assistance for surgeries, treatments, and medical procedures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6e531d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#6e531d]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#4a4238]">Transparent review process with clear communication</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveForm(activeForm === 'medical' ? null : 'medical')}
                  className="w-full py-3 px-6 bg-gold-metallic text-black font-semibold rounded-lg hover:bg-gold-bright transition-colors"
                >
                  {activeForm === 'medical' ? 'Close Application Form' : 'Apply for Healthcare Support'}
                </button>
                {activeForm === 'medical' && (
                  <div className="mt-6 pt-6 border-t border-gold-metallic/30">
                    <MedicalForm onClose={() => setActiveForm(null)} />
                  </div>
                )}
              </div>
            </div>

            {/* Education Empowerment Card */}
            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-xl">
              <div className="relative w-full h-64">
                <Image
                  src="/charity-support/education.jpg"
                  alt="Education Empowerment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#6e531d]/10 flex items-center justify-center border-2 border-[#6e531d]/30">
                    <svg className="w-6 h-6 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#6e531d]">
                    Education Empowerment
                  </h2>
                </div>
                <div className="mb-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6e531d]/10 flex items-center justify-center border border-[#6e531d]/30 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M4.635 9.528l5.838 3.22M17.365 9.528l-5.838 3.22" />
                      </svg>
                    </div>
                    <p className="text-base text-[#2a241d] leading-relaxed">
                      Our Education Empowerment initiative supports girl students who face financial 
                      barriers in pursuing their educational dreams. We believe education is the most 
                      powerful tool for social transformation and gender equality.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6e531d]/10 flex items-center justify-center border border-[#6e531d]/30 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-base text-[#2a241d] leading-relaxed">
                      Through comprehensive support including financial assistance, educational resources, 
                      and mentorship, we help students overcome obstacles and achieve their academic goals 
                      at all education levels.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6e531d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#6e531d]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#4a4238]">Comprehensive support from primary to graduate level</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6e531d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#6e531d]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#4a4238]">Financial assistance for tuition, books, and educational materials</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6e531d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#6e531d]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#4a4238]">Scholarship opportunities and merit-based support</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveForm(activeForm === 'education' ? null : 'education')}
                  className="w-full py-3 px-6 bg-gold-metallic text-black font-semibold rounded-lg hover:bg-gold-bright transition-colors"
                >
                  {activeForm === 'education' ? 'Close Application Form' : 'Apply for Educational Support'}
                </button>
                {activeForm === 'education' && (
                  <div className="mt-6 pt-6 border-t border-gold-metallic/30">
                    <EducationForm onClose={() => setActiveForm(null)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Medical Form Component
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left">
      {submitError && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
          <p className="text-red-500 font-semibold text-center">{submitError}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Applicant Name *
        </label>
        <input
          type="text"
          name="applicantName"
          required
          value={formData.applicantName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter applicant's full name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Contact Number *
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter contact number"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Referring Doctor's Name *
        </label>
        <input
          type="text"
          name="doctorName"
          required
          value={formData.doctorName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter referring doctor's name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Referring Hospital Name *
        </label>
        <input
          type="text"
          name="hospitalName"
          required
          value={formData.hospitalName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter hospital name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Medical Case Description *
        </label>
        <textarea
          name="caseDescription"
          required
          value={formData.caseDescription}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic resize-none disabled:opacity-60"
          placeholder="Describe the medical condition and required assistance"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Medical Certificate (Optional)
        </label>
        <input
          type="file"
          name="medicalCertificate"
          accept={SUBMISSION_FILE_ACCEPT}
          onChange={handleFileChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gold-metallic file:text-black hover:file:bg-gold-bright"
          disabled={isSubmitting}
        />
        {formData.medicalCertificate && (
          <p className="text-xs text-[#4a4238] mt-2">
            Selected: {formData.medicalCertificate.name}
          </p>
        )}
        <p className="text-xs text-[#4a4238] mt-2">{SUBMISSION_FILE_ACCEPT_HINT}</p>
      </div>

      <div className="flex gap-3">
        <button type="submit" className="flex-1 py-3 px-6 bg-gold-metallic text-black font-semibold rounded-lg hover:bg-gold-bright transition-colors disabled:opacity-50" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 px-6 border-2 border-gold-metallic text-[#6e531d] font-semibold rounded-lg hover:bg-gold-metallic/10 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

// Education Form Component
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left">
      {submitError && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
          <p className="text-red-500 font-semibold text-center">{submitError}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Student Name *
        </label>
        <input
          type="text"
          name="studentName"
          required
          value={formData.studentName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter student's full name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Contact Number *
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter contact number"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Current Education Level *
        </label>
        <select
          name="educationLevel"
          required
          value={formData.educationLevel}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a961' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem'
          }}
          disabled={isSubmitting}
        >
          <option value="" className="bg-white text-[#2a241d]">Select education level</option>
          <option value="primary" className="bg-white text-[#2a241d]">Primary School</option>
          <option value="secondary" className="bg-white text-[#2a241d]">Secondary School</option>
          <option value="higher-secondary" className="bg-white text-[#2a241d]">Higher Secondary</option>
          <option value="undergraduate" className="bg-white text-[#2a241d]">Undergraduate</option>
          <option value="graduate" className="bg-white text-[#2a241d]">Graduate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          School / College Name *
        </label>
        <input
          type="text"
          name="schoolName"
          required
          value={formData.schoolName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic disabled:opacity-60"
          placeholder="Enter school or college name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#2a241d] mb-2">
          Support Requirement Description *
        </label>
        <textarea
          name="supportRequirement"
          required
          value={formData.supportRequirement}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/35 bg-[#f9f2e7]/30 text-[#2a241d] placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-metallic resize-none disabled:opacity-60"
          placeholder="Describe the type of educational support needed"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex gap-3">
        <button type="submit" className="flex-1 py-3 px-6 bg-gold-metallic text-black font-semibold rounded-lg hover:bg-gold-bright transition-colors disabled:opacity-50" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 px-6 border-2 border-gold-metallic text-[#6e531d] font-semibold rounded-lg hover:bg-gold-metallic/10 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
