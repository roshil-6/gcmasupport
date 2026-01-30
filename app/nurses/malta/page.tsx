'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesMaltaPage() {
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
          <span className="text-xs md:text-sm text-gray-300">Malta</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Malta"
              subtitle="A gateway to European practice with strong demand"
              flagSrc="/nursing/flags/mt.png"
              bannerSrc="/nursing/photos/malta-banner.jpg"
            />
          </div>

          {/* Why Malta Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Malta?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/malta-why1.jpg" alt="European Gateway" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">European Gateway</h3>
                  <p className="text-sm text-[#1f1b2d]">Access to European healthcare</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/malta-why2.jpg" alt="English Language" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">English Language</h3>
                  <p className="text-sm text-[#1f1b2d]">Widely used in clinical settings</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/malta-why3.jpg" alt="International Teams" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">International Teams</h3>
                  <p className="text-sm text-[#1f1b2d]">Multicultural work environment</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/malta-why4.jpg" alt="Growing Sector" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Growing Sector</h3>
                  <p className="text-sm text-[#1f1b2d]">Rapidly expanding opportunities</p>
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
                  Council for Nurses and Midwives (Malta)
                </p>
                <p className="text-base text-[#1f1b2d]">
                  Malta offers a gateway to European nursing practice with English widely used in clinical settings. 
                  Supportive environment for international teams. Clear registration framework.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/malta-registration.jpg"
                  alt="Maltese Registration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Malta"
            imageSrc="/nursing/photos/malta-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Diploma / Degree in Nursing with verified transcripts and clinical practice proof.',
              },
              {
                title: 'Registration & Good Standing',
                detail: 'Ability to provide license verification and good standing where applicable.',
              },
              {
                title: 'English Communication',
                detail: 'Good English communication is important for clinical practice and documentation.',
              },
              {
                title: 'Experience Preferred',
                detail: 'Recent experience in hospitals/clinics is preferred; references strengthen your profile.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, employment letters, identity and professional documents.',
              },
              {
                title: 'Regulatory Compliance',
                detail: 'Willing to meet Council requirements for registration and professional standards.',
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
                  src="/nursing/photos/malta-career1.jpg"
                  alt="State Hospitals"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    State Hospitals
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/malta-career2.jpg"
                  alt="Health Centres"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Health Centres
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/malta-career3.jpg"
                  alt="Private Clinics"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Private Clinics
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Malta" />
        </div>
      </section>
    </main>
  )
}
