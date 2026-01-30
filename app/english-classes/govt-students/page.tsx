'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function EnglishClassesGovtStudentsPage() {
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
              src="/english-classes/govt-students/banner.jpg"
              alt="English Classes for Government School Students"
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
                      For Government School Students
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
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/english-classes/govt-students/significance.jpg"
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
                <Image src="/english-classes/govt-students/feature1.jpg" alt="Interactive Learning" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Interactive Learning</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Engaging activities and group discussions that make learning English fun and effective for students.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/english-classes/govt-students/feature2.jpg" alt="Curriculum Alignment" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Curriculum Alignment</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Classes aligned with government school curriculum to help students excel in their regular studies.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/english-classes/govt-students/feature3.jpg" alt="Confidence Building" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Confidence Building</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Focus on building speaking confidence through practice sessions and personalized feedback.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Start Your English Learning Journey</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Enroll in our English speaking classes designed specifically for government school students. Contact us to learn more about our programs.
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
