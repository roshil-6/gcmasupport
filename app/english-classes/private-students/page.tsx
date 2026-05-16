'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'
import EnglishClassInquiryForm from '@/components/EnglishClassInquiryForm'

export default function EnglishClassesPrivateStudentsPage() {
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
              src="/english-classes/private-students/banner.jpg"
              alt="English Classes for Private School Students"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/60 via-[#333333]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-[#f9f2e7]/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                      English Speaking Classes
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold">
                      For Private School Students
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
                <h2 className="text-3xl font-bold text-gold-metallic mb-6">Why Advanced English Skills Matter for Private School Students</h2>
                <p className="text-lg text-slate-100 mb-4 leading-relaxed">
                  Private school students often have higher academic expectations and international opportunities. Advanced English proficiency is essential for excelling in competitive examinations, pursuing higher education abroad, and succeeding in global career paths.
                </p>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  Our specialized English speaking classes for private school students focus on advanced communication skills, academic English, and preparation for international standardized tests. We help students develop the fluency and confidence needed for academic excellence and global opportunities.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  With experienced instructors and a curriculum designed for advanced learners, we provide the extra edge that private school students need to stand out in competitive environments and achieve their academic and career goals.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/english-classes/private-students/significance.jpg"
                  alt="English Classes Significance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ShowcaseCard
              imageSrc="/english-classes/private-students/feature1.jpg"
              imageAlt="Advanced Curriculum"
              eyebrow="Private Students"
              title="Advanced Curriculum"
              description="Challenging content designed for high-achieving students, including academic writing and presentation skills."
              ctaHref="/?apply=student#break-the-silence"
              ctaLabel="Apply as Student"
            />
            <ShowcaseCard
              imageSrc="/english-classes/private-students/feature2.jpg"
              imageAlt="Test Preparation"
              eyebrow="Private Students"
              title="Test Preparation"
              description="Preparation for international English tests like IELTS, TOEFL, and Cambridge exams for higher education abroad."
              ctaHref="/?apply=student#break-the-silence"
              ctaLabel="Apply as Student"
            />
            <ShowcaseCard
              imageSrc="/english-classes/private-students/feature3.jpg"
              imageAlt="Global Communication"
              eyebrow="Private Students"
              title="Global Communication"
              description="Develop skills for effective communication in international academic and professional settings."
              ctaHref="/?apply=student#break-the-silence"
              ctaLabel="Apply as Student"
            />
          </div>

          {/* Inquiry + CTA */}
          <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <EnglishClassInquiryForm
              apiEndpoint="/api/submissions/english-private-students"
              headline="Request a call back — Private school English"
              subline="We will reach out with class details and timing. Separate from Break the Silence student signup."
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
