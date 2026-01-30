'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-[#f9f2e7]/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f1b2d]">
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
          <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-12">
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
            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/english-classes/private-students/feature1.jpg" alt="Advanced Curriculum" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Advanced Curriculum</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Challenging content designed for high-achieving students, including academic writing and presentation skills.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/english-classes/private-students/feature2.jpg" alt="Test Preparation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Test Preparation</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Preparation for international English tests like IELTS, TOEFL, and Cambridge exams for higher education abroad.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/english-classes/private-students/feature3.jpg" alt="Global Communication" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Global Communication</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Develop skills for effective communication in international academic and professional settings.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Excel in English Communication</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Join our advanced English speaking classes designed for private school students. Contact us to learn more about our programs.
            </p>
            <Link
              href="/?apply=student#break-the-silence"
              className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Apply as Student
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
