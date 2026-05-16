'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'

const visaProcessSteps = [
  {
    number: '01',
    imageSrc: '/visit-visa/process-initial-assessment.jpg',
    imageAlt: 'Visa eligibility and initial assessment consultation',
    title: 'Initial Assessment',
    description:
      'We review your travel purpose, destination, and profile to determine the best visa type and requirements for your situation.',
  },
  {
    number: '02',
    imageSrc: '/visit-visa/process-document-preparation.jpg',
    imageAlt: 'Visa document preparation and organization',
    title: 'Document Preparation',
    description:
      'Our team helps gather and organize all required documents including passport, photos, financial proof, and supporting letters.',
  },
  {
    number: '03',
    imageSrc: '/visit-visa/process-application-submission.jpg',
    imageAlt: 'Visa application submission and form completion',
    title: 'Application Submission',
    description:
      'We complete and submit your visa application, ensuring all forms are accurately filled and deadlines are met.',
  },
  {
    number: '04',
    imageSrc: '/visit-visa/process-follow-up-approval.jpg',
    imageAlt: 'Visa follow-up and approval guidance',
    title: 'Follow-up & Approval',
    description:
      'We track your application status, respond to any queries from the embassy, and guide you through the approval process.',
  },
]

const essentialDocuments = [
  'Valid passport with at least 6 months validity',
  'Completed visa application form',
  'Recent passport-sized photographs',
  'Proof of financial means (bank statements)',
  'Travel itinerary and flight reservations',
  'Hotel booking confirmations or accommodation proof',
]

const supportingDocuments = [
  'Employment letter or business registration',
  'Income tax returns (if applicable)',
  'Travel insurance coverage',
  'Invitation letter (for family/business visits)',
  'Previous travel history and visas',
  'Cover letter explaining travel purpose',
]

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/60 via-[#333333]/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl bg-[#f9f2e7]/95 border border-gold-metallic/55 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black">
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
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#333333]/70 backdrop-blur-sm shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-6">Why Visit Visa Matters</h2>
                <p className="text-lg text-white mb-4 leading-relaxed">
                  A visit visa opens doors to new experiences, family reunions, business opportunities, and cultural exploration. Whether you're planning a vacation, visiting loved ones, or exploring business prospects abroad, having the right visa is crucial.
                </p>
                <p className="text-base text-white leading-relaxed">
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
            <ShowcaseCard
              imageSrc="/visit-visa/feature1.jpg"
              imageAlt="Tourist Visas"
              eyebrow="Visit Visa Service"
              title="Tourist Visas"
              description="Explore new destinations, experience different cultures, and create lasting memories with our tourist visa assistance."
              ctaHref="/contact"
              ctaLabel="Apply Now"
            />

            <ShowcaseCard
              imageSrc="/visit-visa/feature2.jpg"
              imageAlt="Family Visits"
              eyebrow="Visit Visa Service"
              title="Family Visits"
              description="Reunite with family members abroad. We help you navigate family visit visa requirements efficiently."
              ctaHref="/contact"
              ctaLabel="Apply Now"
            />

            <ShowcaseCard
              imageSrc="/visit-visa/feature3.jpg"
              imageAlt="Business Visits"
              eyebrow="Visit Visa Service"
              title="Business Visits"
              description="Expand your business network internationally. Get assistance with business visit visa applications."
              ctaHref="/contact"
              ctaLabel="Apply Now"
            />
          </div>

          {/* Visa Application Process - Step-by-Step Format (Different Format) */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
                Our Visa Application Process
              </h2>
              <p className="page-intro mx-auto text-lg max-w-3xl">
                We guide you through every step to ensure a smooth and successful visa application
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visaProcessSteps.map((step) => (
                <article
                  key={step.title}
                  className="overflow-hidden rounded-xl border border-gold-metallic/40 bg-[#333333]/70 shadow-xl backdrop-blur-sm"
                >
                  <div className="relative h-36 w-full">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/75 via-[#333333]/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-metallic">
                        <span className="text-lg font-bold text-black">{step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gold-metallic">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist - List Format (Different Format) */}
          <div className="mb-12">
            <div className="bg-[#333333]/70 backdrop-blur-sm border border-gold-metallic/40 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gold-metallic mb-6">Required Documents Checklist</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-gold-metallic/20 bg-[#333333]/40">
                  <div className="relative h-36 w-full">
                    <Image
                      src="/visit-visa/checklist-essential-documents.jpg"
                      alt="Essential visa application documents"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 via-[#333333]/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-4 text-xl font-semibold text-white">Essential Documents</h3>
                    <ul className="space-y-3">
                      {essentialDocuments.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="overflow-hidden rounded-xl border border-gold-metallic/20 bg-[#333333]/40">
                  <div className="relative h-36 w-full">
                    <Image
                      src="/visit-visa/checklist-supporting-documents.jpg"
                      alt="Supporting visa application documents"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 via-[#333333]/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-4 text-xl font-semibold text-white">Supporting Documents</h3>
                    <ul className="space-y-3">
                      {supportingDocuments.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gold-metallic/20">
                <p className="text-white text-sm leading-relaxed">
                  <strong className="text-gold-metallic">Note:</strong> Document requirements vary by destination country and visa type. Our consultants provide a personalized checklist based on your specific situation and travel purpose. We ensure all documents meet embassy standards and are submitted in the correct format.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-2 max-w-2xl mx-auto text-[#0f0c14]">
              Contact our visa experts today to discuss your visit visa requirements and get personalized guidance.
            </p>
            <p className="mb-6 max-w-2xl mx-auto text-sm leading-relaxed text-[#0f0c14]/85">
              We offer free consultations to assess your eligibility and provide detailed information about the application process, required documents, and processing times for your destination.
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
