'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesDenmarkPage() {
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
          <span className="text-xs md:text-sm text-gray-300">Denmark</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Denmark"
              subtitle="High quality of life and a patient-safety focused system"
              flagSrc="/nursing/flags/dk.png"
              bannerSrc="/nursing/photos/denmark-banner.jpg"
            />
          </div>

          {/* Why Denmark Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Denmark?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/denmark-why1.jpg" alt="Work-Life Balance" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Work-Life Balance</h3>
                  <p className="text-sm text-[#1f1b2d]">High quality of life focus</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/denmark-why2.jpg" alt="Collaboration" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Collaboration</h3>
                  <p className="text-sm text-[#1f1b2d]">Strong teamwork culture</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/denmark-why3.jpg" alt="Professional Development" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Professional Development</h3>
                  <p className="text-sm text-[#1f1b2d]">Structured training programs</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-md">
                <div className="relative w-full h-52">
                  <Image src="/nursing/photos/denmark-why4.jpg" alt="Quality Healthcare" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-[#1f1b2d] mb-2">Quality Healthcare</h3>
                  <p className="text-sm text-[#1f1b2d]">World-class medical system</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/nursing/photos/denmark-registration.jpg"
                  alt="Patient Safety Authority"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-[#1f1b2d] mb-4">
                  Danish Patient Safety Authority (Styrelsen for Patientsikkerhed)
                </p>
                <p className="text-base text-[#1f1b2d]">
                  Denmark provides structured recognition routes with focus on collaboration, respect, 
                  and strong communication. High quality of life and work-life balance.
                </p>
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Denmark"
            imageSrc="/nursing/photos/denmark-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing education with transcripts and clinical training records.',
              },
              {
                title: 'Authorization Route',
                detail: 'Prepared to complete the Danish authorization/recognition process if required.',
              },
              {
                title: 'Language Requirement',
                detail: 'Danish language proficiency is commonly required for patient communication and work.',
              },
              {
                title: 'Experience Preferred',
                detail: 'Recent clinical experience improves eligibility and placement options.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, employment letters, and professional registration proof.',
              },
              {
                title: 'Workplace Culture',
                detail: 'Comfortable with team-based care, documentation standards, and patient safety focus.',
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
                  src="/nursing/photos/denmark-career1.jpg"
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
                  src="/nursing/photos/denmark-career2.jpg"
                  alt="Municipal Care"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Municipal Care
                  </h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/nursing/photos/denmark-career3.jpg"
                  alt="Community Services"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 shadow-lg bg-white/85 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-metallic/60">
                    Community Services
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Denmark" />
        </div>
      </section>
    </main>
  )
}
