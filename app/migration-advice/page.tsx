'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function MigrationAdvicePage() {
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

      {/* Header Section */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/migration-advice/banner.jpg"
              alt="Migration Advice"
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
                      Migration Advice
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold drop-shadow-lg">
                      Your pathway to a new beginning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Skilled Migration */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skilled Migration
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto font-medium">
                Build your future in countries that value your skills and expertise
              </p>
            </div>

            {/* Skilled Migration Explanation */}
            <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">What is Skilled Migration?</h3>
                  <p className="text-lg text-white mb-4 leading-relaxed font-medium">
                    Skilled migration is a pathway that allows individuals with specific professional qualifications, work experience, and skills to migrate to countries that need their expertise. This program is designed to fill skill shortages in various sectors and contribute to the economic growth of the destination country.
                  </p>
                  <p className="text-base text-white leading-relaxed mb-4 font-medium">
                    Countries like Australia and Canada have well-established skilled migration programs that offer permanent residency opportunities to qualified professionals. These programs assess candidates based on factors such as age, education, work experience, language proficiency, and occupation demand.
                  </p>
                  <p className="text-base text-white leading-relaxed font-medium">
                    Our expert team provides comprehensive guidance throughout the skilled migration process, from initial assessment to visa application and settlement support. We help you understand eligibility requirements, prepare necessary documentation, and maximize your points score for successful migration.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/migration-advice/skilled-migration.jpg"
                    alt="Skilled Migration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Country Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Australia Card */}
              <Link href="/migration-advice/skilled-migration/australia" className="group">
                <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl hover:border-gold-metallic transition-all">
                  <div className="relative w-full h-64">
                    <Image
                      src="/migration-advice/australia.jpg"
                      alt="Skilled Migration to Australia"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    <div className="absolute top-4 right-4">
                      <div className="relative w-16 h-12">
                        <Image
                          src="/nursing/flags/au.png"
                          alt="Australia Flag"
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-2xl">Australia</h3>
                      <p className="text-sm text-white font-medium">Skilled Migration Program</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white mb-4 font-medium">
                      Australia offers excellent opportunities for skilled professionals through its points-based migration system.
                    </p>
                    <div className="flex items-center text-gold-metallic font-semibold">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Canada Card */}
              <Link href="/migration-advice/skilled-migration/canada" className="group">
                <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl hover:border-gold-metallic transition-all">
                  <div className="relative w-full h-64">
                    <Image
                      src="/migration-advice/canada.jpg"
                      alt="Skilled Migration to Canada"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    <div className="absolute top-4 right-4">
                      <div className="relative w-16 h-12">
                        <Image
                          src="/nursing/flags/ca.png"
                          alt="Canada Flag"
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-2xl">Canada</h3>
                      <p className="text-sm text-white font-medium">Express Entry System</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white mb-4 font-medium">
                      Canada's Express Entry system provides a fast-track pathway for skilled workers to obtain permanent residency.
                    </p>
                    <div className="flex items-center text-gold-metallic font-semibold">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Section 2: Permanent Residency */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Permanent Residency
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto font-medium">
                Secure your future with permanent residency status
              </p>
            </div>

            {/* Permanent Residency Explanation */}
            <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-2 md:order-1">
                  <Image
                    src="/migration-advice/permanent-residency.jpg"
                    alt="Permanent Residency"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-white mb-6">Understanding Permanent Residency</h3>
                  <p className="text-lg text-white mb-4 leading-relaxed font-medium">
                    Permanent Residency (PR) grants you the right to live, work, and study in a country indefinitely, with most of the rights and privileges of a citizen. It's a significant milestone in your migration journey that opens doors to long-term stability, career growth, and family security.
                  </p>
                  <p className="text-base text-white leading-relaxed mb-4 font-medium">
                    Permanent residency status typically allows you to access healthcare, education, and social services, sponsor family members, and eventually apply for citizenship. Different countries have different pathways to PR, including skilled migration, family sponsorship, business investment, and humanitarian programs.
                  </p>
                  <p className="text-base text-white leading-relaxed mb-6 font-medium">
                    Our migration advisors help you understand the various PR pathways available, assess your eligibility, and guide you through the application process. We provide comprehensive support from initial consultation to visa grant and post-arrival settlement assistance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Multiple pathways: Skilled migration, family sponsorship, business investment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Access to healthcare, education, and social services</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Pathway to citizenship after meeting residency requirements</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-white font-medium">Right to sponsor family members for permanent residency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Start Your Migration Journey?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Contact our migration experts today to discuss your options and get personalized guidance for your migration pathway.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
