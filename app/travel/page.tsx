'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'

const planningServices = [
  {
    imageSrc: '/travel/service-destination-research.jpg',
    imageAlt: 'Destination research and travel recommendations',
    title: 'Destination Research & Recommendations',
    desc: 'We research and recommend destinations based on your interests, budget, and travel preferences, providing detailed insights about each location.',
  },
  {
    imageSrc: '/travel/service-custom-itinerary.jpg',
    imageAlt: 'Custom travel itinerary planning',
    title: 'Custom Itinerary Creation',
    desc: 'Our travel planners create personalized day-by-day itineraries that maximize your time and align with your interests and budget.',
  },
  {
    imageSrc: '/travel/service-budget-planning.jpg',
    imageAlt: 'Travel budget planning and cost estimation',
    title: 'Budget Planning & Cost Estimation',
    desc: 'We provide detailed cost breakdowns including flights, accommodation, meals, activities, and local transportation to help you plan effectively.',
  },
  {
    imageSrc: '/travel/service-travel-insurance.jpg',
    imageAlt: 'Travel insurance guidance and coverage options',
    title: 'Travel Insurance Guidance',
    desc: 'We help you understand travel insurance options and select coverage that protects you during your journey, including medical emergencies and trip cancellations.',
  },
]

const bookingServices = [
  {
    imageSrc: '/travel/service-flight-booking.jpg',
    imageAlt: 'Flight booking and travel management',
    title: 'Flight Booking & Management',
    desc: 'We search multiple airlines to find the best fares, handle seat selection, manage changes, and assist with frequent flyer program enrollment.',
  },
  {
    imageSrc: '/travel/service-accommodation.jpg',
    imageAlt: 'Hotel and accommodation reservations',
    title: 'Accommodation Reservations',
    desc: 'From luxury hotels to budget-friendly hostels and vacation rentals, we book accommodations that match your preferences and location requirements.',
  },
  {
    imageSrc: '/travel/service-transportation.jpg',
    imageAlt: 'Transportation arrangements for travel',
    title: 'Transportation Arrangements',
    desc: 'We arrange airport transfers, car rentals, train tickets, and local transportation passes to ensure seamless movement during your trip.',
  },
  {
    imageSrc: '/travel/service-activities.jpg',
    imageAlt: 'Activity and experience bookings',
    title: 'Activity & Experience Bookings',
    desc: 'We book tours, attractions, restaurant reservations, and unique experiences that enhance your travel adventure and create lasting memories.',
  },
]

const whyChooseFeatures = [
  {
    imageSrc: '/travel/why-global-network.jpg',
    imageAlt: 'Global travel network and partnerships',
    title: 'Global Network',
    description: 'Our partnerships with travel providers worldwide ensure you get the best rates and exclusive deals across destinations.',
  },
  {
    imageSrc: '/travel/why-expert-consultants.jpg',
    imageAlt: 'Expert travel consultants',
    title: 'Expert Travel Consultants',
    description: 'Our experienced team has traveled extensively and provides first-hand insights and recommendations for your destinations.',
  },
  {
    imageSrc: '/travel/why-best-price.jpg',
    imageAlt: 'Best price travel deals',
    title: 'Best Price Guarantee',
    description: 'We compare prices across multiple platforms and negotiate with partners to secure the best deals for your travel needs.',
  },
  {
    imageSrc: '/travel/why-support-247.jpg',
    imageAlt: '24/7 travel support',
    title: '24/7 Support',
    description: 'Our support team is available around the clock to assist with emergencies, changes, or questions during your travels.',
  },
  {
    imageSrc: '/travel/why-digital-itinerary.jpg',
    imageAlt: 'Digital travel itinerary on mobile',
    title: 'Digital Itinerary',
    description: 'Receive a comprehensive digital itinerary with all bookings, confirmations, and important information accessible on any device.',
  },
  {
    imageSrc: '/travel/why-personalized-service.jpg',
    imageAlt: 'Personalized travel service',
    title: 'Personalized Service',
    description: 'Every trip is customized to your preferences, ensuring a unique travel experience that matches your style and interests.',
  },
]

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/60 via-[#333333]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-[#f9f2e7]/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black">
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
                <h2 className="text-3xl font-bold text-black mb-6">Why Professional Travel Services Matter</h2>
                <p className="text-lg text-black mb-4 leading-relaxed font-medium">
                  Traveling should be an enriching experience, not a stressful ordeal. Professional travel services ensure that every aspect of your journey is carefully planned and executed, from flight bookings to accommodation and itinerary planning.
                </p>
                <p className="text-base text-black leading-relaxed font-medium">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d] text-center mb-8">Select Your Travel Intention</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ShowcaseCard
                imageSrc="/travel/visit-intention.jpg"
                imageAlt="Visit"
                eyebrow="Travel Intention"
                title="Visit"
                tagline="Explore new destinations and create lasting memories"
                description="Planning a vacation, family visit, or business trip? Our visit visa services help you navigate the application process smoothly."
                ctaHref="/visit-visa"
                ctaLabel="Learn More"
              />

              <ShowcaseCard
                imageSrc="/travel/job-search-intention.jpg"
                imageAlt="Job Search"
                eyebrow="Travel Intention"
                title="Job Search"
                tagline="Dubai Job Seekers Package"
                description="Looking to relocate to Dubai for work? Our comprehensive job seekers package provides end-to-end support from visa to job placement."
                ctaHref="/travel/uae-job-search"
                ctaLabel="Learn More"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ShowcaseCard
              imageSrc="/travel/feature1.jpg"
              imageAlt="Flight Bookings"
              eyebrow="Travel Service"
              title="Flight Bookings"
              description="Get the best deals on flights to your destination. We compare prices and find optimal routes for your travel needs."
              ctaHref="/contact"
              ctaLabel="Plan with Us"
            />
            <ShowcaseCard
              imageSrc="/travel/feature2.jpg"
              imageAlt="Hotel Reservations"
              eyebrow="Travel Service"
              title="Hotel Reservations"
              description="Secure comfortable accommodations that match your preferences and budget, from luxury hotels to budget-friendly options."
              ctaHref="/contact"
              ctaLabel="Plan with Us"
            />
            <ShowcaseCard
              imageSrc="/travel/feature3.jpg"
              imageAlt="Travel Itineraries"
              eyebrow="Travel Service"
              title="Travel Itineraries"
              description="Customized travel plans tailored to your interests, ensuring you make the most of your time at your destination."
              ctaHref="/contact"
              ctaLabel="Plan with Us"
            />
          </div>

          {/* Comprehensive Services List - Numbered Format (Different Format) */}
          <div className="mb-12">
            <div className="bg-white border border-gold-metallic/40 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-[#6e531d] mb-6 text-center">Our Comprehensive Travel Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#2a241d] mb-4">Travel Planning Services</h3>
                  <ol className="space-y-4">
                    {planningServices.map((service, idx) => (
                      <li
                        key={service.title}
                        className="flex gap-4 rounded-xl border border-[#8a7340]/25 bg-[#f9f2e7]/20 p-4 shadow-sm"
                      >
                        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-28 border border-gold-metallic/20">
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex min-w-0 flex-1 gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-metallic text-sm font-bold text-black">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="mb-1 font-semibold text-[#2a241d]">{service.title}</h4>
                            <p className="text-sm leading-relaxed text-[#4a4238]">{service.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2a241d] mb-4">Booking & Reservation Services</h3>
                  <ol className="space-y-4">
                    {bookingServices.map((service, idx) => (
                      <li
                        key={service.title}
                        className="flex gap-4 rounded-xl border border-[#8a7340]/25 bg-[#f9f2e7]/20 p-4 shadow-sm"
                      >
                        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-28 border border-gold-metallic/20">
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex min-w-0 flex-1 gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-metallic text-sm font-bold text-black">
                            {idx + 5}
                          </span>
                          <div>
                            <h4 className="mb-1 font-semibold text-[#2a241d]">{service.title}</h4>
                            <p className="text-sm leading-relaxed text-[#4a4238]">{service.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Feature Grid (Different Format) */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d] mb-4">Why Choose Our Travel Services?</h2>
              <p className="page-intro mx-auto text-lg max-w-3xl text-[#6d5a3a]">
                We go beyond booking to provide comprehensive travel support
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whyChooseFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="overflow-hidden rounded-xl border border-gold-metallic/40 bg-white shadow-xl transition-all hover:border-gold-metallic"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-white/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-lg font-bold text-[#6e531d]">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-[#4a4238]">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Plan Your Next Adventure</h3>
            <p className="text-black mb-2 max-w-2xl mx-auto font-medium">
              Let our travel experts help you plan the perfect trip. Contact us today to discuss your travel needs.
            </p>
            <p className="text-black/80 text-sm mb-6 max-w-2xl mx-auto">
              Whether you're planning a family vacation, business trip, or solo adventure, we provide end-to-end travel services that take the stress out of planning and ensure you have an unforgettable experience.
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
