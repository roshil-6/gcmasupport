'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function UAEJobSearchPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="relative min-h-screen">
      <HexagonBackground />
      
      {/* Navigation back to home */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/travel" 
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors"
          >
            ← Back to Travel
          </Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/travel/uae-banner.jpg"
              alt="Dubai Job Seekers Package"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl px-6 py-5">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gold-metallic drop-shadow-2xl">
                      Dubai Job Seekers Package
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold drop-shadow-lg">
                      Land in Dubai with Confidence, Not Confusion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1f1b2d] mb-6">Relocate with Ease</h2>
                <p className="text-lg text-[#1f1b2d] mb-4 leading-relaxed font-medium">
                  Relocate with ease through our Job Seekers Package — a game-changer for international professionals looking to tap into the booming UAE market.
                </p>
                <p className="text-base text-[#1f1b2d] leading-relaxed font-medium">
                  From visa to victory — we'll walk with you every step of the way.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/travel/uae-overview.jpg"
                  alt="Dubai Job Seekers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg">
                <div className="relative w-full h-48">
                  <Image src="/travel/uae-feature1.jpg" alt="Visa & Flight Assistance" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic">Visa & Flight Assistance</h3>
                  </div>
                  <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                    Complete support for visa processing and flight bookings to get you to Dubai smoothly.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg">
                <div className="relative w-full h-48">
                  <Image src="/travel/uae-feature2.jpg" alt="CV Enhancement" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic">CV Enhancement + Job Application Guidance</h3>
                  </div>
                  <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                    Professional CV optimization and strategic job application support tailored for the UAE market.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg">
                <div className="relative w-full h-48">
                  <Image src="/travel/uae-feature3.jpg" alt="Interview Class" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic">90-Minute Interview & Confidence Class</h3>
                  </div>
                  <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                    Comprehensive interview preparation and confidence-building sessions to ace your job interviews.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg">
                <div className="relative w-full h-48">
                  <Image src="/travel/uae-feature4.jpg" alt="Food & Accommodation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic">Food & Accommodation Support (Short-term)</h3>
                  </div>
                  <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                    Temporary accommodation and food assistance to help you settle in during your initial days in Dubai.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg">
                <div className="relative w-full h-48">
                  <Image src="/travel/uae-feature5.jpg" alt="Metro Card & Orientation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic">Metro Card + City Orientation</h3>
                  </div>
                  <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                    Get your metro card and comprehensive city orientation to navigate Dubai like a local.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-white shadow-lg">
                <div className="relative w-full h-48">
                  <Image src="/travel/uae-feature6.jpg" alt="On-Ground Support" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                      <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gold-metallic">On-Ground Support Team</h3>
                  </div>
                  <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                    Dedicated support team available in Dubai to assist you with any challenges during your job search.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Start Your Dubai Journey?</h3>
              <p className="text-[#1f1b2d] mb-6 max-w-2xl mx-auto font-medium">
                Apply now and let us help you land in Dubai with confidence. Our comprehensive package ensures you have everything you need for a successful job search.
              </p>
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                {showForm ? 'Close Application Form' : 'Apply Now'}
              </button>
            </div>

            {/* Application Form */}
            {showForm && (
              <div className="mt-8 pt-8 border-t border-gold-metallic/30">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[#1f1b2d] mb-6 text-center">Application Form</h3>
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault()
                    // Handle form submission
                    alert('Application submitted! We will contact you soon.')
                    setShowForm(false)
                  }}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1f1b2d] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-[#1f1b2d] focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1f1b2d] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-[#1f1b2d] focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#1f1b2d] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-[#1f1b2d] focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="profession" className="block text-sm font-semibold text-[#1f1b2d] mb-2">
                        Profession/Field *
                      </label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-[#1f1b2d] focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1f1b2d] mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-[#1f1b2d] focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
