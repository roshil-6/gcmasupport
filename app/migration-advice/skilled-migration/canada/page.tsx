'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function CanadaSkilledMigrationPage() {
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
              src="/migration-advice/canada-banner.jpg"
              alt="Skilled Migration to Canada"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-black/70 backdrop-blur-sm/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="relative w-16 h-12 shrink-0">
                    <Image src="/nursing/flags/ca.png" alt="Canada Flag" fill className="object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gold-metallic">
                      Skilled Migration to Canada
                    </h1>
                    <p className="text-lg md:text-xl text-gold-bright font-semibold">
                      Express Entry to the Great White North
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
                <h2 className="text-3xl font-bold text-white mb-6">Canada's Express Entry System</h2>
                <p className="text-lg text-white mb-4 leading-relaxed font-medium">
                  Canada's Express Entry system is one of the fastest and most efficient pathways to permanent residency for skilled workers. This points-based system manages applications for three federal economic immigration programs: Federal Skilled Worker Program, Federal Skilled Trades Program, and Canadian Experience Class.
                </p>
                <p className="text-base text-white leading-relaxed mb-4 font-medium">
                  The Express Entry system uses the Comprehensive Ranking System (CRS) to score candidates based on factors such as age, education, work experience, language proficiency in English and/or French, and adaptability factors. Candidates with the highest scores receive Invitations to Apply (ITAs) for permanent residency.
                </p>
                <p className="text-base text-white leading-relaxed font-medium">
                  Canada is known for its welcoming immigration policies, strong economy, excellent healthcare and education systems, and high quality of life. With a diverse, multicultural society and numerous opportunities for professional growth, Canada remains a top destination for skilled migrants worldwide.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/migration-advice/canada-overview.jpg"
                  alt="Canada Overview"
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
                <Image src="/migration-advice/canada-feature1.jpg" alt="Express Entry" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                    <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gold-metallic">Fast Processing</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Express Entry typically processes applications within 6 months, making it one of the fastest immigration pathways.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/migration-advice/canada-feature2.jpg" alt="CRS Points" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-metallic/20 flex items-center justify-center border-2 border-gold-metallic/50">
                    <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gold-metallic">CRS Points System</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Comprehensive Ranking System evaluates candidates fairly based on skills, experience, and adaptability factors.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/migration-advice/canada-feature3.jpg" alt="Provincial Nomination" fill className="object-cover" />
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
                  <h3 className="text-xl font-bold text-gold-metallic">Provincial Nomination</h3>
                </div>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Provincial Nominee Programs (PNP) offer additional pathways and bonus points for candidates willing to settle in specific provinces.
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
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Express Entry Programs</h4>
                  <p className="text-white font-medium">Three main programs: Federal Skilled Worker (FSW), Federal Skilled Trades (FST), and Canadian Experience Class (CEC). Each has specific eligibility requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Language Testing</h4>
                  <p className="text-white font-medium">IELTS (General Training) or CELPIP for English, and TEF for French. Higher language scores significantly increase your CRS points.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Educational Credential Assessment (ECA)</h4>
                  <p className="text-white font-medium">Foreign education credentials must be assessed by designated organizations like WES, ICAS, or CES to verify their Canadian equivalency.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Provincial Nominee Programs (PNP)</h4>
                  <p className="text-white font-medium">Many provinces have their own nomination programs that can provide 600 additional CRS points, significantly improving your chances of receiving an ITA.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/20 flex items-center justify-center border border-gold-metallic/50 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-metallic mb-2">Job Bank Registration</h4>
                  <p className="text-white font-medium">While not mandatory, registering with Job Bank can help you connect with Canadian employers and potentially receive a job offer, which adds valuable CRS points.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Migrate to Canada?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Our expert migration advisors can help you navigate Canada's Express Entry system. Contact us for a comprehensive CRS assessment and personalized guidance.
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
