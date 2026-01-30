'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function AustraliaSkilledMigrationPage() {
  return (
    <main className="relative min-h-screen">
      <HexagonBackground />
      
      {/* Navigation back to home */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/migration-advice" 
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors"
          >
            ← Back to Migration Advice
          </Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/migration-advice/australia-banner.jpg"
              alt="Skilled Migration to Australia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-black/70 backdrop-blur-sm/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="relative w-16 h-12 shrink-0">
                    <Image src="/nursing/flags/au.png" alt="Australia Flag" fill className="object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gold-metallic">
                      Skilled Migration to Australia
                    </h1>
                    <p className="text-lg md:text-xl text-gold-bright font-semibold">
                      Build your future in the Land Down Under
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Australia's Skilled Migration Program</h2>
                <p className="text-lg text-white mb-4 leading-relaxed font-medium">
                  Australia offers one of the world's most comprehensive skilled migration programs, designed to attract talented professionals who can contribute to the country's economy and society. The program is points-based and provides multiple pathways to permanent residency.
                </p>
                <p className="text-base text-white leading-relaxed mb-4 font-medium">
                  Australia's skilled migration system evaluates candidates based on factors including age, English language proficiency, work experience, education qualifications, and occupation demand. The country regularly updates its skilled occupation lists to reflect current labor market needs.
                </p>
                <p className="text-base text-white leading-relaxed font-medium">
                  With a strong economy, excellent quality of life, world-class healthcare and education systems, and diverse cultural opportunities, Australia remains a top destination for skilled migrants seeking permanent residency and a better future for their families.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/migration-advice/australia-overview.jpg"
                  alt="Australia Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features with Symbols */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/migration-advice/australia-feature1.jpg" alt="Points System" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                    <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gold-metallic">Points-Based System</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Transparent points system evaluating age, skills, experience, and language proficiency for fair assessment.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/migration-advice/australia-feature2.jpg" alt="Multiple Pathways" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                    <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gold-metallic">Multiple Pathways</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Various visa subclasses including 189, 190, and 491 to suit different circumstances and state nominations.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/migration-advice/australia-feature3.jpg" alt="Quality of Life" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                    <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gold-metallic">Quality of Life</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  World-class healthcare, education, and social services ensuring a high standard of living for you and your family.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Information Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Key Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Skilled Occupation Lists</h4>
                  <p className="text-white font-medium">Australia maintains Medium and Long-term Strategic Skills List (MLTSSL) and Short-term Skilled Occupation List (STSOL) that are regularly updated based on labor market needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Skills Assessment</h4>
                  <p className="text-white font-medium">Most occupations require a positive skills assessment from the relevant assessing authority before you can apply for a visa. This ensures your qualifications and experience meet Australian standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">English Language Requirements</h4>
                  <p className="text-white font-medium">Competent English is typically required, with higher scores providing additional points. IELTS, PTE, TOEFL, and Cambridge English tests are accepted.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">State Nomination</h4>
                  <p className="text-white font-medium">Many states and territories offer nomination programs (190 and 491 visas) that can provide additional points and priority processing for candidates willing to live and work in specific regions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Migrate to Australia?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Our expert migration advisors can help you navigate Australia's skilled migration program. Contact us for a comprehensive assessment and personalized guidance.
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
