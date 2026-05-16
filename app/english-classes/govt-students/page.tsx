'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'
import EnglishClassInquiryForm from '@/components/EnglishClassInquiryForm'
import { useState } from 'react'

export default function EnglishClassesGovtStudentsPage() {
  const [heroSrc, setHeroSrc] = useState('/english-classes/govt-students/hero-banner.jpg')

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
          <div
            className="relative mb-8 h-[300px] w-full overflow-hidden rounded-3xl shadow-2xl md:h-[400px]"
            style={{ position: 'relative' }}
          >
            <img
              src={heroSrc}
              alt="Government school students learning English in a classroom"
              className="absolute inset-0 z-0 h-full w-full object-cover object-center"
              onError={() => setHeroSrc('/english-classes/govt-students/banner.jpg')}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/75 via-[#333333]/40 to-[#333333]/10" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-[#f9f2e7]/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                      English Speaking Classes
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold">
                      For Government School Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Significance Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#333333]/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-6">Why English Proficiency Matters for Government School Students</h2>
                <p className="text-lg text-slate-100 mb-4 leading-relaxed">
                  English proficiency is a critical skill that opens doors to higher education, better career opportunities, and global communication. For government school students, mastering English can be a game-changer in their academic and professional journey.
                </p>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  Our specialized English speaking classes are designed specifically for government school students, addressing their unique learning needs and challenges. We provide a supportive learning environment that builds confidence and fluency in spoken English.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  With qualified instructors and a curriculum tailored to government school syllabi, we help students improve their communication skills, excel in examinations, and prepare for future opportunities in higher education and employment.
                </p>
              </div>
              <div
                className="relative h-64 overflow-hidden rounded-xl md:h-80"
                style={{ position: 'relative' }}
              >
                <Image
                  src="/english-classes/govt-students/significance.jpg"
                  alt="English Classes Significance"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ShowcaseCard
              imageSrc="/english-classes/govt-students/feature1.jpg"
              imageAlt="Interactive Learning"
              eyebrow="Govt Students"
              title="Interactive Learning"
              description="Engaging activities and group discussions that make learning English fun and effective for students."
              ctaHref="/?apply=student#break-the-silence"
              ctaLabel="Apply as Student"
            />
            <ShowcaseCard
              imageSrc="/english-classes/govt-students/feature2.jpg"
              imageAlt="Curriculum Alignment"
              eyebrow="Govt Students"
              title="Curriculum Alignment"
              description="Classes aligned with government school curriculum to help students excel in their regular studies."
              ctaHref="/?apply=student#break-the-silence"
              ctaLabel="Apply as Student"
            />
            <ShowcaseCard
              imageSrc="/english-classes/govt-students/feature3.jpg"
              imageAlt="Confidence Building"
              eyebrow="Govt Students"
              title="Confidence Building"
              description="Focus on building speaking confidence through practice sessions and personalized feedback."
              ctaHref="/?apply=student#break-the-silence"
              ctaLabel="Apply as Student"
            />
          </div>

          {/* Inquiry + CTA */}
          <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <EnglishClassInquiryForm
              apiEndpoint="/api/submissions/english-govt-students"
              headline="Request a call back — Govt school English"
              subline="We will reach out with class details and timing. This is separate from Break the Silence student signup below."
            />
            <div className="flex flex-col justify-center text-center rounded-2xl border border-gold-metallic/30 bg-gold-metallic/10 p-8">
              <h3 className="text-2xl font-bold text-gold-metallic mb-4">Break the Silence — student signup</h3>
              <p className="mb-6 max-w-xl mx-auto text-[#0f0c14]">
                For the volunteer student pairing program, apply on the home page.
              </p>
              <Link
                href="/?apply=student#break-the-silence"
                className="inline-flex items-center justify-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Apply as Student
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
