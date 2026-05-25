'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'

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
          <div
            className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8"
            style={{ position: 'relative' }}
          >
            <Image
              src="/tutors/banner.jpg"
              alt="Serve Society with GCMA - Tutors"
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
          <div className="rounded-2xl border border-gold-metallic/40 bg-white shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#6e531d] mb-6">Why Join GCMA as a Tutor</h2>
                <p className="text-lg text-[#4a4238] mb-4 leading-relaxed">
                  Teaching is one of the most rewarding ways to serve society and make a lasting impact on people's lives. As a GCMA tutor, you become part of a mission to empower individuals through education, helping them achieve their dreams and improve their futures.
                </p>
                <p className="text-base text-[#4a4238] leading-relaxed mb-4">
                  Our tutor program offers you the opportunity to share your knowledge and expertise while contributing to social welfare. Whether you're teaching English, academic subjects, or professional skills, you'll be making a meaningful difference in the lives of students from diverse backgrounds.
                </p>
                <p className="text-base text-[#4a4238] leading-relaxed">
                  Join a community of dedicated educators who are committed to creating positive change. As a GCMA tutor, you'll receive support, training, and the satisfaction of knowing that your teaching is transforming lives and building a better society.
                </p>
              </div>
              <div
                className="relative h-64 md:h-80 rounded-xl overflow-hidden"
                style={{ position: 'relative' }}
              >
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
            <ShowcaseCard
              imageSrc="/tutors/feature1.jpg"
              imageAlt="Make an Impact"
              eyebrow="Tutor Benefit"
              title="Make an Impact"
              description="Help students achieve their educational goals and create positive change in their communities."
              ctaHref="/?apply=tutor#break-the-silence"
              ctaLabel="Apply as Tutor"
              theme="light"
            />
            <ShowcaseCard
              imageSrc="/tutors/feature2.jpg"
              imageAlt="Professional Development"
              eyebrow="Tutor Benefit"
              title="Professional Development"
              description="Receive training, support, and opportunities to grow as an educator while serving the community."
              ctaHref="/?apply=tutor#break-the-silence"
              ctaLabel="Apply as Tutor"
              theme="light"
            />
            <ShowcaseCard
              imageSrc="/tutors/feature3.jpg"
              imageAlt="Flexible Teaching"
              eyebrow="Tutor Benefit"
              title="Flexible Teaching"
              description="Teach according to your schedule and availability, with options for online or in-person classes."
              ctaHref="/?apply=tutor#break-the-silence"
              ctaLabel="Apply as Tutor"
              theme="light"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Join Our Mission</h3>
            <p className="mb-6 max-w-2xl mx-auto text-[#0f0c14]">
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
