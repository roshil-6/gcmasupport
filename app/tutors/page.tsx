'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function TutorsPage() {
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
              src="/tutors/banner.jpg"
              alt="Serve Society with GCMA - Tutors"
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
                      Serve Society with GCMA
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold">
                      Become a Tutor and Make a Difference
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
                <h2 className="text-3xl font-bold text-gold-metallic mb-6">Why Join GCMA as a Tutor</h2>
                <p className="text-lg text-slate-100 mb-4 leading-relaxed">
                  Teaching is one of the most rewarding ways to serve society and make a lasting impact on people's lives. As a GCMA tutor, you become part of a mission to empower individuals through education, helping them achieve their dreams and improve their futures.
                </p>
                <p className="text-base text-slate-200 leading-relaxed mb-4">
                  Our tutor program offers you the opportunity to share your knowledge and expertise while contributing to social welfare. Whether you're teaching English, academic subjects, or professional skills, you'll be making a meaningful difference in the lives of students from diverse backgrounds.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Join a community of dedicated educators who are committed to creating positive change. As a GCMA tutor, you'll receive support, training, and the satisfaction of knowing that your teaching is transforming lives and building a better society.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/tutors/significance.jpg"
                  alt="Tutors Significance"
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
                <Image src="/tutors/feature1.jpg" alt="Make an Impact" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Make an Impact</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Help students achieve their educational goals and create positive change in their communities.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/tutors/feature2.jpg" alt="Professional Development" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Professional Development</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Receive training, support, and opportunities to grow as an educator while serving the community.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/tutors/feature3.jpg" alt="Flexible Teaching" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Flexible Teaching</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Teach according to your schedule and availability, with options for online or in-person classes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Join Our Mission</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Become a GCMA tutor and help us serve society through education. Contact us to learn more about joining our tutor program.
            </p>
            <Link
              href="/?apply=tutor#break-the-silence"
              className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Apply as Tutor
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
