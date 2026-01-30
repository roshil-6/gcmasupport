'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function TravelPage() {
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
              src="/travel/banner.jpg"
              alt="Travel Services"
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
                      Travel Services
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold">
                      Your trusted travel partner for seamless journeys
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1f1b2d] mb-6">Why Professional Travel Services Matter</h2>
                <p className="text-lg text-[#1f1b2d] mb-4 leading-relaxed font-medium">
                  Traveling should be an enriching experience, not a stressful ordeal. Professional travel services ensure that every aspect of your journey is carefully planned and executed, from flight bookings to accommodation and itinerary planning.
                </p>
                <p className="text-base text-[#1f1b2d] leading-relaxed font-medium">
                  Our comprehensive travel services cover everything you need for a smooth and memorable trip. We handle the complexities of travel planning so you can focus on enjoying your adventure. With years of experience and a network of trusted partners worldwide, we make travel accessible and hassle-free.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/travel/significance.jpg"
                  alt="Travel Services Significance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Travel Intention Cards */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Select Your Travel Intention</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Visit Card */}
              <Link href="/visit-visa" className="group">
                <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl hover:border-gold-metallic transition-all h-full">
                  <div className="relative w-full h-64">
                    <Image src="/travel/visit-intention.jpg" alt="Visit" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-3xl font-bold text-slate-100 mb-2 drop-shadow-2xl">Visit</h3>
                      <p className="text-sm text-slate-100 font-semibold drop-shadow-2xl">Explore new destinations and create lasting memories</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#1f1b2d] mb-4 font-medium">
                      Planning a vacation, family visit, or business trip? Our visit visa services help you navigate the application process smoothly.
                    </p>
                    <div className="flex items-center text-gold-metallic font-semibold">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Job Search Card */}
              <Link href="/travel/uae-job-search" className="group">
                <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl hover:border-gold-metallic transition-all h-full">
                  <div className="relative w-full h-64">
                    <Image src="/travel/job-search-intention.jpg" alt="Job Search" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-3xl font-bold text-slate-100 mb-2 drop-shadow-2xl">Job Search</h3>
                      <p className="text-sm text-slate-100 font-semibold drop-shadow-2xl">Dubai Job Seekers Package</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#1f1b2d] mb-4 font-medium">
                      Looking to relocate to Dubai for work? Our comprehensive job seekers package provides end-to-end support from visa to job placement.
                    </p>
                    <div className="flex items-center text-gold-metallic font-semibold">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/travel/feature1.jpg" alt="Flight Bookings" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Flight Bookings</h3>
                <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                  Get the best deals on flights to your destination. We compare prices and find optimal routes for your travel needs.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/travel/feature2.jpg" alt="Hotel Reservations" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Hotel Reservations</h3>
                <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                  Secure comfortable accommodations that match your preferences and budget, from luxury hotels to budget-friendly options.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl">
              <div className="relative w-full h-48">
                <Image src="/travel/feature3.jpg" alt="Travel Itineraries" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-metallic mb-3">Travel Itineraries</h3>
                <p className="text-[#1f1b2d] text-sm leading-relaxed font-medium">
                  Customized travel plans tailored to your interests, ensuring you make the most of your time at your destination.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Plan Your Next Adventure</h3>
            <p className="text-[#1f1b2d] mb-6 max-w-2xl mx-auto font-medium">
              Let our travel experts help you plan the perfect trip. Contact us today to discuss your travel needs.
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
