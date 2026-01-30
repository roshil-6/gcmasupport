'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesGermanyPage() {
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
          <span className="text-xs md:text-sm text-gray-300">Germany</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Germany"
              subtitle="A strong European pathway with long-term stability"
              flagSrc="/nursing/flags/de.png"
              bannerSrc="/nursing/photos/germany-banner.jpg"
            />
          </div>

          {/* Why Germany Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Germany?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/germany-why1.jpg" alt="European Healthcare" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">European Healthcare</h3>
                  <p className="text-sm text-[#1f1b2d]">Work in top European facilities</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/germany-why2.jpg" alt="Private Hospitals" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Private Hospitals</h3>
                  <p className="text-sm text-[#1f1b2d]">Roles in private hospitals and clinics</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/germany-why3.jpg" alt="Long-term Stability" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Long-term Stability</h3>
                  <p className="text-sm text-[#1f1b2d]">Strong demand and job security</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/germany-why4.jpg" alt="Social Protection" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Social Protection</h3>
                  <p className="text-sm text-[#1f1b2d]">Comprehensive benefits system</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/nursing/photos/germany-registration.jpg"
                  alt="Regional Authorities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-[#1f1b2d] mb-4">
                  Regional State Health Authorities (Landesbehörden)
                </p>
                <p className="text-base text-[#1f1b2d]">
                  Germany recognizes international nurses through regional state health authorities. 
                  Long-term career opportunities with strong demand and stability. EU standards alignment.
                </p>
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Germany"
            imageSrc="/nursing/photos/germany-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing education with transcripts and clinical training evidence.',
              },
              {
                title: 'Recognition Process',
                detail: 'Willing to complete qualification recognition with the relevant state authority.',
              },
              {
                title: 'Language Requirement',
                detail: 'German language proficiency is usually required (often B1/B2 depending on pathway).',
              },
              {
                title: 'Clinical Experience',
                detail: 'Recent experience preferred; elder care and hospital experience are highly valued.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, registration proof, and verified employment letters.',
              },
              {
                title: 'Professional Conduct',
                detail: 'Ability to provide good standing / conduct certificates where applicable.',
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
                  src="/nursing/photos/germany-career1.jpg"
                  alt="Hospitals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Hospitals
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/germany-career2.jpg"
                  alt="Rehabilitation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Rehabilitation
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/germany-career3.jpg"
                  alt="Elder Care"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Elder Care
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Germany" />
        </div>
      </section>
    </main>
  )
}
