'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/60 via-[#333333]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-white/95 border border-gold-metallic/40 px-6 py-5 shadow-xl">
                  <div className="relative w-16 h-12 shrink-0">
                    <Image src="/nursing/flags/au.png" alt="Australia Flag" fill className="object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#6e531d]">
                      Skilled Migration to Australia
                    </h1>
                    <p className="text-lg md:text-xl text-[#8a7340] font-semibold">
                      Build your future in the Land Down Under
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-white shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#6e531d] mb-6">Australia's Skilled Migration Program</h2>
                <p className="text-lg text-[#4a4238] mb-4 leading-relaxed">
                  Australia offers one of the world's most comprehensive skilled migration programs, designed to attract talented professionals who can contribute to the country's economy and society. The program is points-based and provides multiple pathways to permanent residency.
                </p>
                <p className="text-base text-[#4a4238] leading-relaxed mb-4">
                  Australia's skilled migration system evaluates candidates based on factors including age, English language proficiency, work experience, education qualifications, and occupation demand. The country regularly updates its skilled occupation lists to reflect current labor market needs.
                </p>
                <p className="text-base text-[#4a4238] leading-relaxed">
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
            <ShowcaseCard
              imageSrc="/migration-advice/australia-feature1.jpg"
              imageAlt="Points System"
              eyebrow="Australia Skilled Migration"
              title="Points-Based System"
              description="Transparent points system evaluating age, skills, experience, and language proficiency for fair assessment."
              ctaHref="/contact"
              theme="light"
            />
            <ShowcaseCard
              imageSrc="/migration-advice/australia-feature2.jpg"
              imageAlt="Multiple Pathways"
              eyebrow="Australia Skilled Migration"
              title="Multiple Pathways"
              description="Various visa subclasses including 189, 190, and 491 to suit different circumstances and state nominations."
              ctaHref="/contact"
              theme="light"
            />
            <ShowcaseCard
              imageSrc="/migration-advice/australia-feature3.jpg"
              imageAlt="Quality of Life"
              eyebrow="Australia Skilled Migration"
              title="Quality of Life"
              description="World-class healthcare, education, and social services ensuring a high standard of living for you and your family."
              ctaHref="/contact"
              theme="light"
            />
          </div>

          {/* Detailed Information Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-white shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-[#6e531d] mb-6">Key Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/10 flex items-center justify-center border border-gold-metallic/30 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#8a7340] mb-2">Skilled Occupation Lists</h4>
                  <p className="text-[#4a4238] leading-relaxed">Australia maintains Medium and Long-term Strategic Skills List (MLTSSL) and Short-term Skilled Occupation List (STSOL) that are regularly updated based on labor market needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/10 flex items-center justify-center border border-gold-metallic/30 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#8a7340] mb-2">Skills Assessment</h4>
                  <p className="text-[#4a4238] leading-relaxed">Most occupations require a positive skills assessment from the relevant assessing authority before you can apply for a visa. This ensures your qualifications and experience meet Australian standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/10 flex items-center justify-center border border-gold-metallic/30 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#8a7340] mb-2">English Language Requirements</h4>
                  <p className="text-[#4a4238] leading-relaxed">Competent English is typically required, with higher scores providing additional points. IELTS, PTE, TOEFL, and Cambridge English tests are accepted.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-metallic/10 flex items-center justify-center border border-gold-metallic/30 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#6e531d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#8a7340] mb-2">State Nomination</h4>
                  <p className="text-[#4a4238] leading-relaxed">Many states and territories offer nomination programs (190 and 491 visas) that can provide additional points and priority processing for candidates willing to live and work in specific regions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Migrate to Australia?</h3>
            <p className="mb-6 max-w-2xl mx-auto text-[#0f0c14]">
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

