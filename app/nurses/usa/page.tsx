'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesUSAPage() {
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
          <span className="text-xs md:text-sm text-gray-300">USA</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="USA"
              subtitle="Major hospitals, research pathways, and leadership roles"
              flagSrc="/nursing/flags/us.png"
              bannerSrc="/nursing/photos/usa-banner.jpg"
            />
          </div>

          {/* Why USA Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in USA?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/usa-why1.jpg" alt="Major Hospitals" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Major Hospitals</h3>
                  <p className="text-sm text-[#1f1b2d]">Top-tier medical facilities</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/usa-why2.jpg" alt="Research Opportunities" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Research Opportunities</h3>
                  <p className="text-sm text-[#1f1b2d]">Cutting-edge medical research</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/usa-why3.jpg" alt="Leadership Roles" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Leadership Roles</h3>
                  <p className="text-sm text-[#1f1b2d]">Advanced practice opportunities</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/usa-why4.jpg" alt="Immigration Pathways" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Immigration Pathways</h3>
                  <p className="text-sm text-[#1f1b2d]">Long-term career options</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-[#1f1b2d] mb-4">
                  State Boards of Nursing and CGFNS International
                </p>
                <p className="text-base text-[#1f1b2d]">
                  The USA offers diverse pathways through State Boards of Nursing and CGFNS. 
                  Wide-ranging opportunities in major hospitals, research, and leadership roles.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/usa-registration.jpg"
                  alt="US State Boards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="USA"
            imageSrc="/nursing/photos/usa-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing education (Diploma / Degree) with transcripts and clinical records.',
              },
              {
                title: 'Credential Evaluation',
                detail: 'Prepared for credential evaluation through CGFNS/accepted agencies (state dependent).',
              },
              {
                title: 'Licensing Exam',
                detail: 'Prepared to write NCLEX-RN (and meet state board licensing requirements).',
              },
              {
                title: 'English Requirement',
                detail: 'English test may be required depending on pathway and state board rules.',
              },
              {
                title: 'Experience Preferred',
                detail: 'Clinical experience strengthens eligibility; specialty roles may require proven exposure.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, registration verification, and employment letters.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/usa-career1.jpg"
                  alt="Major Hospitals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Major Hospitals
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/usa-career2.jpg"
                  alt="Research Institutions"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Research Institutions
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/usa-career3.jpg"
                  alt="Community Health"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Community Health
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <NursingRegistrationForm initialCountry="USA" />
        </div>
      </section>
    </main>
  )
}
