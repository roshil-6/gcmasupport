'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function VisitVisaPage() {
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
              src="/visit-visa/banner.jpg"
              alt="Visit Visa Services"
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
                      Visit Visa Services
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold">
                      Your gateway to exploring the world
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
                <h2 className="text-3xl font-bold text-gold-metallic mb-6">Why Visit Visa Matters</h2>
                <p className="text-lg text-slate-100 mb-4 leading-relaxed">
                  A visit visa opens doors to new experiences, family reunions, business opportunities, and cultural exploration. Whether you're planning a vacation, visiting loved ones, or exploring business prospects abroad, having the right visa is crucial.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Our expert team guides you through the entire visa application process, ensuring all documentation is accurate and complete. We understand that visa applications can be complex and time-consuming, which is why we're here to simplify the process and maximize your chances of approval.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/visit-visa/significance.jpg"
                  alt="Visit Visa Significance"
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
                <Image src="/visit-visa/feature1.jpg" alt="Tourist Visas" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Tourist Visas</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Explore new destinations, experience different cultures, and create lasting memories with our tourist visa assistance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/visit-visa/feature2.jpg" alt="Family Visits" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Family Visits</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Reunite with family members abroad. We help you navigate family visit visa requirements efficiently.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/visit-visa/feature3.jpg" alt="Business Visits" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Business Visits</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Expand your business network internationally. Get assistance with business visit visa applications.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Start Your Journey?</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Contact our visa experts today to discuss your visit visa requirements and get personalized guidance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
