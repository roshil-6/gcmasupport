'use client'

import { useEffect, useRef, useState } from 'react'
import NursingRegistrationForm from './NursingRegistrationForm'

type CountryKey =
  | 'australia'
  | 'canada'
  | 'new-zealand'
  | 'germany'
  | 'malta'
  | 'denmark'
  | 'united-kingdom'
  | 'uae'
  | 'usa'

interface CountryContent {
  id: string
  name: string
  authority: string
  description: string
  opportunities: string
  image: string
}

const COUNTRIES: Record<CountryKey, CountryContent> = {
  australia: {
    id: 'nursing-australia',
    name: 'Australia',
    image: '/nursing/photos/cards/australia.jpg',
    authority: 'Australian Health Practitioner Regulation Agency (AHPRA) and Nursing and Midwifery Board of Australia (NMBA)',
    description:
      'Australia offers a structured pathway for internationally qualified nurses, with a strong emphasis on patient safety, clinical competence, and ethical practice.',
    opportunities:
      'Opportunities include hospital roles, community nursing, aged care, and specialist practice settings, with clear progression routes and competitive remuneration.',
  },
  canada: {
    id: 'nursing-canada',
    name: 'Canada',
    image: '/nursing/photos/cards/canada.jpg',
    authority: 'Provincial Nursing Regulatory Bodies (e.g., CNO, BCCNM, NSCN)',
    description:
      'Canada welcomes internationally educated nurses through province-specific assessment and registration pathways designed to maintain high standards of care.',
    opportunities:
      'Registered nurses can build careers in public hospitals, community health, long-term care, and rural health initiatives, often with pathways to permanent residency.',
  },
  'new-zealand': {
    id: 'nursing-newzealand',
    name: 'New Zealand',
    image: '/nursing/photos/cards/new-zealand.jpg',
    authority: 'Nursing Council of New Zealand (NCNZ)',
    description:
      'New Zealand provides a transparent registration process for overseas nurses, combining competency assessment with a strong focus on person-centred care.',
    opportunities:
      'Nurses can work across public and private hospitals, primary care, and community health, with a supportive environment for professional growth and work–life balance.',
  },
  germany: {
    id: 'nursing-germany',
    name: 'Germany',
    image: '/nursing/photos/cards/germany.jpg',
    authority: 'Regional State Health Authorities (Landesbehörden) responsible for professional recognition',
    description:
      'Germany recognises qualified international nurses through a formal credential recognition and adaptation process, aligned with EU quality and safety standards.',
    opportunities:
      'Career options range from acute care hospitals to rehabilitation centres and elder care, with strong demand for skilled professionals and long-term stability.',
  },
  malta: {
    id: 'nursing-malta',
    name: 'Malta',
    image: '/nursing/photos/cards/malta.jpg',
    authority: 'Council for Nurses and Midwives within the Maltese health regulatory framework',
    description:
      'Malta offers a gateway to European nursing practice, with English widely used in clinical settings and a clear registration framework for overseas nurses.',
    opportunities:
      'Nurses can work in state hospitals, primary care, and private clinics, often as part of diverse international teams in a safe and welcoming environment.',
  },
  denmark: {
    id: 'nursing-denmark',
    name: 'Denmark',
    image: '/nursing/photos/cards/denmark.jpg',
    authority: 'Danish Patient Safety Authority (Styrelsen for Patientsikkerhed)',
    description:
      'Denmark provides a structured recognition route for foreign-trained nurses, including language preparation and professional adaptation to Danish healthcare standards.',
    opportunities:
      'Registered nurses can pursue roles in hospitals, municipal care, and community services, with a strong culture of teamwork, respect, and professional development.',
  },
  'united-kingdom': {
    id: 'nursing-uk',
    name: 'United Kingdom',
    image: '/nursing/photos/cards/united-kingdom.jpg',
    authority: 'Nursing and Midwifery Council (NMC)',
    description:
      'The United Kingdom offers a well-defined pathway for international nurses, combining credential verification, English language requirements, and competence assessments.',
    opportunities:
      'Nurses can build careers within the NHS and independent sector across acute, community, mental health, and specialist services, with structured progression and training.',
  },
  uae: {
    id: 'nursing-uae',
    name: 'UAE',
    image: '/nursing/photos/cards/uae.jpg',
    authority: 'Health Authorities such as DHA, DOH, and MOHAP (depending on the Emirate)',
    description:
      'The UAE attracts international nurses through modern healthcare facilities, clear licensing exams, and region-specific registration requirements.',
    opportunities:
      'Opportunities include tertiary hospitals, specialised centres, and private healthcare networks, with tax-free salaries and exposure to multicultural clinical practice.',
  },
  usa: {
    id: 'nursing-usa',
    name: 'USA',
    image: '/nursing/photos/cards/usa.jpg',
    authority: 'State Boards of Nursing and credentialing agencies (e.g., CGFNS) for foreign-trained nurses',
    description:
      'The United States offers diverse and highly regulated pathways for international nurses, with a focus on licensing exams, credential evaluation, and state-specific standards.',
    opportunities:
      'Nurses can progress into roles in major hospitals, specialist units, community health, research, and leadership, often alongside long-term immigration opportunities.',
  },
}

export default function GlobalNursingRegistrationSection() {
  const [activeCountry, setActiveCountry] = useState<CountryKey>('australia')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate section when it enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-reveal')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // On initial load, check URL hash and activate matching country
    if (typeof window === 'undefined') return

    const hash = window.location.hash.replace('#', '')
    const hashToCountryKey: Partial<Record<string, CountryKey>> = {
      'nursing-australia': 'australia',
      'nursing-canada': 'canada',
      'nursing-newzealand': 'new-zealand',
      'nursing-germany': 'germany',
      'nursing-malta': 'malta',
      'nursing-denmark': 'denmark',
      'nursing-uk': 'united-kingdom',
      'nursing-uae': 'uae',
      'nursing-usa': 'usa',
    }

    const key = hashToCountryKey[hash]
    if (key) {
      setActiveCountry(key)
    }
  }, [])

  const activeDetails = COUNTRIES[activeCountry]

  const handleCountrySelect = (key: CountryKey) => {
    setActiveCountry(key)

    // Redirect to dedicated country page
    if (typeof window !== 'undefined') {
      const countryToPath: Record<CountryKey, string> = {
        australia: '/nurses/australia',
        canada: '/nurses/canada',
        'new-zealand': '/nurses/new-zealand',
        germany: '/nurses/germany',
        malta: '/nurses/malta',
        denmark: '/nurses/denmark',
        'united-kingdom': '/nurses/united-kingdom',
        uae: '/nurses/uae',
        usa: '/nurses/usa',
      }
      const path = countryToPath[key]
      if (path) {
        window.location.href = path
      }
    }
  }

  return (
    <section
      id="global-nursing-registration"
      ref={sectionRef}
      className="min-h-screen py-12 md:py-16 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
        {/* Title & Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
            Global Nursing Registration
          </h2>
          <p className="text-base md:text-lg text-white">
            Internationally qualified nurses play a vital role in modern healthcare systems worldwide.
            Through this unified application, GCMA helps you explore safe, ethical pathways to register
            as a nurse in leading countries, aligning your qualifications with each country&apos;s
            regulatory standards while keeping your career goals and wellbeing at the centre.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Country list and details */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gold-metallic mb-4">
                Country-wise Nursing Pathways
              </h3>
              <p className="text-sm md:text-base text-white mb-4">
                Select a country to view a brief overview of its registration authority, expectations
                from internationally educated nurses, and the types of roles commonly available.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {(
                  Object.entries(COUNTRIES) as [CountryKey, CountryContent][]
                ).map(([key, country]) => (
                  <button
                    key={country.id}
                    type="button"
                    id={country.id}
                    onClick={() => handleCountrySelect(key)}
                    className={`text-xs sm:text-sm px-3 py-2 rounded-lg border transition-all ${activeCountry === key
                      ? 'bg-gold-metallic text-black border-gold-metallic'
                      : 'border-gold-metallic/40 text-gold-metallic hover:border-gold-metallic hover:bg-gold-metallic/10'
                      }`}
                  >
                    {country.name}
                  </button>
                ))}
              </div>

              <div className="bg-[#333333]/30 rounded-xl overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={activeDetails.image}
                  alt={`${activeDetails.name} Nursing`}
                  className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                />
                <div className="absolute -bottom-px left-0 right-0 top-0 bg-gradient-to-t from-[#333333]/85 to-transparent" />
                  <h4 className="absolute bottom-4 left-4 text-2xl font-bold text-gold-metallic">
                    {activeDetails.name}
                  </h4>
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-xs uppercase tracking-wide text-gold-metallic/80 mb-2">
                    Registration Authority
                  </p>
                  <p className="text-sm md:text-base text-white mb-4">
                    {activeDetails.authority}
                  </p>

                  <p className="text-xs uppercase tracking-wide text-gold-metallic/80 mb-2">
                    Overview
                  </p>
                  <p className="text-sm md:text-base text-white mb-4">
                    {activeDetails.description}
                  </p>

                  <p className="text-xs uppercase tracking-wide text-gold-metallic/80 mb-2">
                    Career Opportunities
                  </p>
                  <p className="text-sm md:text-base text-white">
                    {activeDetails.opportunities}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Nursing Registration Form (shared across all countries) */}
          <NursingRegistrationForm initialCountry={activeDetails.name} />
        </div>
      </div>
    </section>
  )
}

