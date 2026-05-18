'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import AustraliaNursingCommunitySection from '@/components/AustraliaNursingCommunitySection'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesAustraliaPage() {
  return (
    <main className="relative min-h-screen">
      <HexagonBackground />

      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors text-sm md:text-base"
          >
            Back to Home
          </Link>
          <span className="text-xs md:text-sm text-white">Australia</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Australia"
              subtitle="Your Pathway to a Global Nursing Career in Australia"
              flagSrc="/nursing/flags/au.png"
              bannerSrc="/nursing/photos/australia-banner.jpg"
            />
          </div>

          <AustraliaNursingCommunitySection />

          {/* Why Australia Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Australia?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/australia-why1.jpg" imageAlt="High Salary" eyebrow="Why Australia" title="High Salary" description="Competitive pay with strong support systems." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/australia-why2.jpg" imageAlt="Work-Life Balance" eyebrow="Why Australia" title="Work-Life Balance" description="Outstanding balance and quality of life." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/australia-why3.jpg" imageAlt="Career Growth" eyebrow="Why Australia" title="Career Growth" description="Professional development opportunities." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/australia-why4.jpg" imageAlt="Global Recognition" eyebrow="Why Australia" title="Global Recognition" description="World-class healthcare system." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  Australian Health Practitioner Regulation Agency (AHPRA) and Nursing and Midwifery Board of Australia (NMBA)
                </p>
                <p className="text-base text-black">
                  Australia offers structured pathways for internationally qualified nurses through AHPRA and NMBA.
                  Focus on patient safety, evidence-based practice, and professional accountability.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/australia-registration.jpg"
                  alt="AHPRA Registration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Australia"
            imageSrc="/nursing/photos/australia-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Diploma / BSc Nursing (or equivalent) from a recognised institution.',
              },
              {
                title: 'Valid Registration',
                detail: 'Current nursing registration/license in your home country with good standing (if applicable).',
              },
              {
                title: 'Clinical Experience',
                detail: 'Recent clinical experience is preferred; roles may require specialty exposure (ICU/ER/Aged Care).',
              },
              {
                title: 'English Requirement',
                detail: 'IELTS / OET / PTE (as required by AHPRA/NMBA pathway and category).',
              },
              {
                title: 'Documentation Ready',
                detail: 'Passport, CV, transcripts, registration proof, employment letters, and identity documents.',
              },
              {
                title: 'Regulator Pathway',
                detail: 'Willing to complete AHPRA/NMBA steps and comply with professional standards.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/australia-career1.jpg" imageAlt="Hospitals" eyebrow="Career Opportunity" title="Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/australia-career2.jpg" imageAlt="Community Health" eyebrow="Career Opportunity" title="Community Health" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/australia-career3.jpg" imageAlt="Aged Care" eyebrow="Career Opportunity" title="Aged Care" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Australia" />
        </div>
      </section>
    </main>
  )
}
