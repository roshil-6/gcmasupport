'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import { useState } from 'react'

export default function EnglishAcademyPage() {
  const [expandedPTE, setExpandedPTE] = useState(false)
  const [expandedIELTS, setExpandedIELTS] = useState(false)

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

      {/* Banner Section */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/english-classes/adults/banner.jpg"
              alt="English Academy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gold-metallic drop-shadow-2xl">
                      English Academy
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold drop-shadow-lg">
                      Professional English Training & Certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Significance Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gold-metallic mb-6 text-center">Why Choose English Academy?</h2>
            <p className="text-lg text-white mb-4 leading-relaxed text-center max-w-3xl mx-auto">
              Master English for professional success, academic excellence, and global opportunities. Our comprehensive programs cover spoken English, test preparation (PTE, IELTS, OET), and specialized training tailored to your goals.
            </p>
          </div>

          {/* Enrollment Options - Cards */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Enroll To
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Spoken English Card */}
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative w-full h-64">
                  <Image 
                    src="/english-classes/adults/spoken-english.jpg" 
                    alt="Spoken English" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-2xl">Spoken English</h3>
                      <p className="text-white text-sm mb-4">Master conversational English for daily communication and professional interactions</p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-6 py-3 rounded-lg transition-all shadow-lg"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* PTE Card */}
              <div>
                <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow mb-4">
                  <div className="relative w-full h-64">
                    <Image 
                      src="/english-classes/adults/pte.jpg" 
                      alt="PTE" 
                      fill 
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="w-full">
                        <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-2xl">PTE</h3>
                        <p className="text-white text-sm mb-4">Pearson Test of English - Fast results, computer-based testing</p>
                        <button
                          onClick={() => setExpandedPTE(!expandedPTE)}
                          className="w-full bg-gold-metallic/20 hover:bg-gold-metallic/30 text-gold-metallic font-semibold px-6 py-3 rounded-lg transition-all border border-gold-metallic/40"
                        >
                          {expandedPTE ? 'Hide Options' : 'View Options'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {expandedPTE && (
                  <div className="grid md:grid-cols-2 gap-4 animate-fadeIn">
                    <Link
                      href="/contact"
                      className="block relative h-40 rounded-xl overflow-hidden group border border-gold-metallic/40"
                    >
                      <Image 
                        src="/english-classes/adults/pte-core.jpg" 
                        alt="PTE Core" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                        <h4 className="text-lg font-bold text-white">PTE Core</h4>
                      </div>
                    </Link>
                    <Link
                      href="/contact"
                      className="block relative h-40 rounded-xl overflow-hidden group border border-gold-metallic/40"
                    >
                      <Image 
                        src="/english-classes/adults/pte-academics.jpg" 
                        alt="PTE Academics" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                        <h4 className="text-lg font-bold text-white">PTE Academics</h4>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* IELTS Card */}
              <div>
                <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow mb-4">
                  <div className="relative w-full h-64">
                    <Image 
                      src="/english-classes/adults/ielts.jpg" 
                      alt="IELTS" 
                      fill 
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="w-full">
                        <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-2xl">IELTS</h3>
                        <p className="text-white text-sm mb-4">International English Language Testing System - Recognized worldwide</p>
                        <button
                          onClick={() => setExpandedIELTS(!expandedIELTS)}
                          className="w-full bg-gold-metallic/20 hover:bg-gold-metallic/30 text-gold-metallic font-semibold px-6 py-3 rounded-lg transition-all border border-gold-metallic/40"
                        >
                          {expandedIELTS ? 'Hide Options' : 'View Options'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {expandedIELTS && (
                  <div className="grid md:grid-cols-2 gap-4 animate-fadeIn">
                    <Link
                      href="/contact"
                      className="block relative h-40 rounded-xl overflow-hidden group border border-gold-metallic/40"
                    >
                      <Image 
                        src="/english-classes/adults/ielts-general.jpg" 
                        alt="IELTS General" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                        <h4 className="text-lg font-bold text-white">IELTS General</h4>
                      </div>
                    </Link>
                    <Link
                      href="/contact"
                      className="block relative h-40 rounded-xl overflow-hidden group border border-gold-metallic/40"
                    >
                      <Image 
                        src="/english-classes/adults/ielts-academics.jpg" 
                        alt="IELTS Academics" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                        <h4 className="text-lg font-bold text-white">IELTS Academics</h4>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* OET Card */}
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative w-full h-64">
                  <Image 
                    src="/english-classes/adults/oet.jpg" 
                    alt="OET" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-2xl">OET</h3>
                      <p className="text-white text-sm mb-4">Occupational English Test - For healthcare professionals</p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-6 py-3 rounded-lg transition-all shadow-lg"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Start Your English Journey?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Contact us to learn more about our programs, schedules, and enrollment options. Our expert instructors are here to help you achieve your English language goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
