'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import ShowcaseCard from '@/components/ShowcaseCard'
import { thankYouSearchPath } from '@/lib/thank-you-path'
import { useScrollInvalidFieldIntoView } from '@/lib/use-scroll-invalid-into-view'

const HexagonBackground = dynamic(() => import('@/components/HexagonBackground'), {
  ssr: false,
})

const studyCountries = [
  {
    name: 'Australia',
    tagline: 'World-class education with recognized post-study opportunities',
    description: 'Study at globally ranked institutions with pathways to professional development',
    features: [
      'Part-time work rights during studies',
      'Post-study work visa options available',
      'Pathways to skilled migration programs'
    ],
    image: '/study-abroad/flags/australia.png',
    altTagline: 'Excellence in education with international recognition'
  },
  {
    name: 'Germany',
    tagline: 'Affordable excellence with strong career prospects',
    description: 'Access quality education with low or no tuition fees at public universities',
    features: [
      'Public universities with minimal tuition fees',
      'Strong demand for skilled professionals',
      'EU residence permit pathways for graduates'
    ],
    image: '/study-abroad/flags/germany.png',
    altTagline: 'Quality education without financial burden'
  },
  {
    name: 'Denmark',
    tagline: 'Engineering excellence in a family-friendly environment',
    description: 'Ideal destination for technical programs with spouse and dependent visa options',
    features: [
      'Family visa options for spouses and children',
      'Strong engineering and technical programs',
      'High standard of living and work-life balance'
    ],
    image: '/study-abroad/flags/denmark.png',
    altTagline: 'Technical education with family support'
  },
  {
    name: 'Sweden',
    tagline: 'Innovation-focused education in a progressive society',
    description: 'Business and management programs in one of Europe\'s most innovative economies',
    features: [
      'Family-friendly visa policies',
      'Strong business and management programs',
      'Innovation-driven economy with career opportunities'
    ],
    image: '/study-abroad/flags/sweden.png',
    altTagline: 'Business excellence in a progressive environment'
  },
  {
    name: 'France',
    tagline: 'Cultural richness meets academic excellence',
    description: 'Study in Paris and across France with access to European opportunities',
    features: [
      'Renowned programs in arts, fashion, and design',
      'Rich cultural and historical heritage',
      'Access to broader European Union opportunities'
    ],
    image: '/study-abroad/flags/france.png',
    altTagline: 'Academic excellence in the heart of Europe'
  },
  {
    name: 'Malta',
    tagline: 'English-speaking gateway with healthcare focus',
    description: 'Ideal for healthcare professionals with potential tuition support programs',
    features: [
      'English as the primary language of instruction',
      'Strong healthcare and nursing programs',
      'Potential tuition refund schemes for eligible students'
    ],
    image: '/study-abroad/flags/malta.png',
    altTagline: 'Healthcare education in an English-speaking EU country'
  },
  {
    name: 'Latvia',
    tagline: 'Affordable European education with Schengen access',
    description: 'Cost-effective study option with access to the broader European region',
    features: [
      'Competitive tuition fees',
      'Schengen visa access for travel',
      'Gateway to European Union opportunities'
    ],
    image: '/study-abroad/flags/latvia.png',
    altTagline: 'European education at accessible costs'
  }
]

const studyAbroadProcessSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'We begin with a detailed consultation to understand your academic background, career goals, and study preferences. Our experts assess your profile and recommend the best-fit countries and programs.',
    image: '/study-abroad/consultation.jpg',
  },
  {
    step: '02',
    title: 'Program Selection',
    description:
      'Based on your profile, we help you identify suitable universities and programs. We provide detailed information about course structures, admission requirements, and career prospects for each option.',
    image: '/study-abroad/program-selection.jpg',
  },
  {
    step: '03',
    title: 'Application Preparation',
    description:
      'Our team assists with document preparation, including transcripts, recommendation letters, and personal statements. We ensure all requirements are met and applications are submitted on time.',
    image: '/study-abroad/application-prep.jpg',
  },
  {
    step: '04',
    title: 'Visa & Documentation',
    description:
      'We guide you through the visa application process, helping with documentation, financial proof, and interview preparation. Our support continues until your visa is approved.',
    image: '/study-abroad/visa-docs.jpg',
  },
  {
    step: '05',
    title: 'Pre-Departure Support',
    description:
      "Before you leave, we provide orientation sessions, accommodation assistance, and travel arrangements. We ensure you're fully prepared for your new academic journey abroad.",
    image: '/study-abroad/pre-departure.jpg',
  },
  {
    step: '06',
    title: 'Ongoing Assistance',
    description:
      "Even after you arrive, we maintain contact to help with any challenges. From academic support to cultural integration, we're here to ensure your success throughout your studies.",
    image: '/study-abroad/ongoing-support.jpg',
  },
]

const studyAbroadServiceBenefits = [
  {
    title: 'Personalized Guidance',
    description:
      "Every student receives customized advice based on their unique profile, goals, and preferences. We don't believe in one-size-fits-all solutions.",
    image: '/study-abroad/personalized-guidance.jpg',
  },
  {
    title: 'Scholarship Assistance',
    description:
      'We help identify and apply for scholarships, grants, and funding opportunities to make your education affordable and accessible.',
    image: '/study-abroad/scholarship.jpg',
  },
  {
    title: 'University Partnerships',
    description:
      'Our established relationships with universities worldwide give you access to exclusive programs and streamlined admission processes.',
    image: '/study-abroad/partnerships.jpg',
  },
  {
    title: 'Multi-Country Options',
    description:
      'We offer programs across 7+ countries, allowing you to explore the best fit for your academic and career aspirations.',
    image: '/study-abroad/multi-country-options.jpg',
  },
  {
    title: 'Document Support',
    description:
      'From transcript evaluation to visa documentation, we handle all paperwork to ensure accuracy and timely submission.',
    image: '/study-abroad/document-support.jpg',
  },
  {
    title: 'Career Counseling',
    description:
      'Our career advisors help you choose programs that align with your professional goals and provide insights into job markets abroad.',
    image: '/study-abroad/career-counseling.jpg',
  },
  {
    title: 'Accommodation Help',
    description:
      'We assist with finding suitable housing options, from university dormitories to private accommodations in your destination country.',
    image: '/study-abroad/accommodation-help.jpg',
  },
  {
    title: 'Travel Arrangements',
    description:
      'We help coordinate flights, airport transfers, and initial orientation to ensure a smooth transition to your new academic environment.',
    image: '/study-abroad/travel-arrangements.jpg',
  },
  {
    title: '24/7 Support',
    description:
      'Our support team is available to answer questions and provide assistance whenever you need help, even after you arrive at your destination.',
    image: '/study-abroad/support-247.jpg',
  },
]

export default function StudyAbroadPage() {
  const [showConsultationForm, setShowConsultationForm] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const whyStudyCards = [
    {
      title: 'To Study',
      image: '/study-abroad/to-study-new.jpg',
      description: 'World-class education at top-ranked universities',
    },
    {
      title: 'To Work',
      image: '/study-abroad/to-work-new.jpg',
      description: 'Work opportunities while studying and after graduation',
    },
    {
      title: 'To Gain PR',
      image: '/study-abroad/to-gain-pr-new.jpg',
      description: 'Permanent residency pathways through education',
    },
  ]

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

      {/* Header Section - Premium Design */}
      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Banner Card */}
          <div className="relative rounded-3xl overflow-hidden border border-gold-metallic/40 shadow-2xl mb-12 dark-container">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/study-abroad/classroom-banner.jpg"
                alt="Classroom background"
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-[#333333]/80" />
              {/* Gold accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-metallic/10 via-transparent to-gold-metallic/10" />
            </div>
            <div className="relative px-8 md:px-16 py-12 md:py-16 z-10">
              <div className="max-w-4xl mx-auto text-center">
                {/* Main Title */}
                <div className="mb-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold-metallic mb-4 tracking-tight drop-shadow-lg">
                    Study Abroad Programs
                  </h1>
                  <div className="w-24 h-1 bg-gold-metallic mx-auto rounded-full"></div>
                </div>

                {/* Professional Subtitle */}
                <div className="mb-8 space-y-4">
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                    Transform your academic aspirations into global opportunities through world-class education pathways
                  </p>
                  <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-2xl mx-auto">
                    Access quality education across premier destinations with comprehensive guidance and financial planning support
                  </p>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold text-base px-8 py-3.5 rounded-lg gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Schedule Consultation</span>
                  </Link>
                  <Link
                    href="#countries"
                    className="inline-flex items-center border-2 border-gold-metallic/50 hover:border-gold-metallic text-gold-metallic hover:text-gold-bright font-semibold text-base px-8 py-3.5 rounded-lg gap-2 transition-all backdrop-blur-sm bg-[#333333]/30"
                  >
                    <span>Explore Programs</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {/* Ethical assurance — honest guidance, no inflated claims */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gold-metallic mb-1">Ethical</p>
              <p className="text-black font-medium text-base">Honest guidance</p>
            </div>

            {/* Students Helped */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gold-metallic mb-1">5K+</p>
              <p className="text-black font-medium text-base">Students Helped</p>
            </div>

            {/* Success Rate */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center relative">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div className="absolute -top-2 -right-2 bg-gold-metallic text-black text-xs font-bold px-2 py-1 rounded">
                  100%
                </div>
              </div>
              <p className="text-black font-medium text-base">Success Rate</p>
            </div>

            {/* Trusted Worldwide */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center relative">
                <svg className="w-16 h-16 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <svg className="absolute top-0 right-0 w-8 h-8 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-black font-medium text-base">Trusted</p>
              <p className="text-black font-medium text-base">Worldwide</p>
            </div>
          </div>

          {/* Why Study Abroad Section */}
          <div className="bg-[#333333]/80 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
                Why do you want to study abroad?
              </h2>
              <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
                Is it to study, work, or gain PR through studying abroad? Our guidance is based on your intentions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {whyStudyCards.map((card) => (
                  <ShowcaseCard
                    key={card.title}
                    imageSrc={card.image}
                    imageAlt={card.title}
                    eyebrow="Study Abroad Goals"
                    title={card.title}
                    description={card.description}
                    ctaHref="/contact"
                    ctaLabel="Get Guidance"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* How It Works - Process Timeline Section (Different Format) */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
                How We Help You Study Abroad
              </h2>
              <p className="page-intro mx-auto text-lg max-w-3xl">
                Our comprehensive process ensures you receive personalized guidance at every step of your study abroad journey
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-metallic/30" style={{ top: '0', bottom: '0' }} />

              <div className="space-y-12">
                {studyAbroadProcessSteps.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-metallic rounded-full border-4 border-[#333333] z-10" />

                    {/* Content Card */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-[#333333]/70 backdrop-blur-sm border border-gold-metallic/40 rounded-2xl overflow-hidden shadow-xl">
                        <div className="relative h-40 md:h-48">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-[#333333]/30 to-transparent" />
                        </div>
                        <div className={`p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <span className="text-gold-metallic font-bold text-sm mb-2 block">STEP {item.step}</span>
                          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-white text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section - Feature Grid Format (Different Format) */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
                Why Choose Our Study Abroad Services?
              </h2>
              <p className="page-intro mx-auto text-lg max-w-3xl">
                We provide comprehensive support that goes beyond just application processing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyAbroadServiceBenefits.map((benefit, index) => (
                <ShowcaseCard
                  key={index}
                  imageSrc={benefit.image}
                  imageAlt={benefit.title}
                  eyebrow="Service Benefit"
                  title={benefit.title}
                  description={benefit.description}
                  ctaHref="/contact"
                  ctaLabel="Learn More"
                />
              ))}
            </div>
          </div>

          {/* Scholarship & Funding Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#333333]/80 via-[#333333]/70 to-[#333333]/60 rounded-2xl p-8 md:p-12 border border-gold-metallic/40 backdrop-blur-sm shadow-xl">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-3">
                    Scholarship & Funding Opportunities
                  </h2>
                  <div className="w-20 h-0.5 bg-gold-metallic mx-auto rounded-full"></div>
                </div>
                <p className="text-xl text-white mb-4 font-light max-w-3xl mx-auto">
                  Merit-based scholarships and financial aid programs for exceptional candidates
                </p>
                <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Outstanding academic achievers may qualify for comprehensive scholarship programs covering tuition fees, living expenses, and additional academic support. Our dedicated scholarship advisors assist in identifying eligible funding opportunities and guide you through the application process to maximize your chances of securing financial assistance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setShowConsultationForm(!showConsultationForm)}
                    className="bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Explore Scholarships
                  </button>
                  <Link
                    href="/contact"
                    className="border-2 border-gold-metallic/50 hover:border-gold-metallic text-gold-metallic hover:text-gold-bright font-semibold px-8 py-3.5 rounded-lg transition-all backdrop-blur-sm bg-[#333333]/30"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Country Cards Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Study in Top World Ranking Universities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyCountries.map((country, index) => (
                <ShowcaseCard
                  key={index}
                  imageSrc={country.image}
                  imageAlt={`${country.name} flag`}
                  imageFit="contain"
                  eyebrow={`Study in ${country.name}`}
                  title={country.name}
                  tagline={country.tagline}
                  description={country.description}
                  highlights={country.features}
                  footnote={`Our team provides comprehensive support including university selection, application assistance, visa guidance, and pre-departure orientation for ${country.name}.`}
                  ctaHref="/contact"
                  ctaLabel="Learn More"
                />
              ))}
            </div>
          </div>

          {/* Consultation Form Section */}
          {showConsultationForm && (
            <div className="bg-[#333333]/80 rounded-2xl p-8 md:p-12 mb-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
                  Free Consultation
                </h2>
                <ConsultationForm onClose={() => setShowConsultationForm(false)} />
              </div>
            </div>
          )}

          {/* FAQ Section - Accordion Format (Different Format) */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic mb-4">
                Frequently Asked Questions
              </h2>
              <p className="page-intro mx-auto text-lg max-w-3xl">
                Find answers to common questions about studying abroad
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: 'What are the eligibility requirements for studying abroad?',
                  answer: 'Eligibility varies by country and program, but generally includes: completed secondary education or equivalent, proof of English proficiency (IELTS/PTE/TOEFL), financial documentation, and academic transcripts. Some programs may require specific prerequisites or work experience. Our consultants will assess your profile and guide you on meeting all requirements.'
                },
                {
                  question: 'How long does the application process take?',
                  answer: 'The timeline typically ranges from 3-6 months, depending on the country and university. This includes document preparation (2-4 weeks), university application processing (4-8 weeks), visa application (4-12 weeks), and pre-departure arrangements. We recommend starting the process 6-9 months before your intended start date to allow for any delays.'
                },
                {
                  question: 'Can I work while studying abroad?',
                  answer: 'Yes, most countries allow international students to work part-time during studies. Australia permits up to 40 hours per fortnight during semesters, Germany allows 120 full days or 240 half days per year, and other EU countries have similar provisions. Post-study work rights vary by country, with some offering pathways to permanent residency after graduation.'
                },
                {
                  question: 'What are the costs involved in studying abroad?',
                  answer: 'Costs include tuition fees (varies by country and program), living expenses (accommodation, food, transport), health insurance, visa fees, and initial setup costs. Germany offers low or no tuition fees at public universities, while countries like Australia and Canada have higher fees but offer excellent post-study opportunities. We help you identify scholarship opportunities and create a financial plan.'
                },
                {
                  question: 'Do I need to know the local language?',
                  answer: 'For English-taught programs, you typically only need English proficiency. However, learning the local language can enhance your experience and job prospects. Countries like Malta, Australia, and parts of Canada are English-speaking. Germany, France, and other EU countries offer many English programs, though local language skills are beneficial for daily life and employment.'
                },
                {
                  question: 'Can my family accompany me while studying?',
                  answer: 'Many countries allow students to bring spouses and dependent children. Denmark, Sweden, and Germany are particularly family-friendly, offering dependent visas with work rights for spouses. Requirements vary, including proof of relationship, financial capacity, and health insurance. We provide detailed guidance on family visa applications for each country.'
                },
                {
                  question: 'What happens if my visa application is rejected?',
                  answer: 'While we work to minimize rejection risks through thorough preparation, if a visa is denied, we help you understand the reasons, address any issues, and reapply with stronger documentation. We also explore alternative countries or programs that might be more suitable for your profile.'
                },
                {
                  question: 'How do I choose the right country and program?',
                  answer: 'Our consultants conduct a comprehensive assessment considering your academic background, career goals, budget, language preferences, and long-term plans (work, PR, etc.). We provide detailed comparisons of programs, costs, job markets, and quality of life to help you make an informed decision that aligns with your aspirations.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-[#333333]/70 backdrop-blur-sm border border-gold-metallic/40 rounded-xl overflow-hidden shadow-lg">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#333333]/50 transition-colors"
                  >
                    <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gold-metallic flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gold-metallic/20">
                        <p className="text-white leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <section className="mb-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic mb-4">
              Ethical Study Abroad Counseling
            </h2>
            <p className="page-intro mx-auto text-base leading-relaxed">
              GCMA study abroad support covers university shortlisting, application review, visa
              documentation, scholarship planning, and pre-departure guidance for students targeting
              Australia, Germany, Denmark, Sweden, France, Malta, and Latvia.
            </p>
          </section>

          {/* Still Confused Section */}
          <div className="bg-[#333333]/70 backdrop-blur-sm border border-gold-metallic/40 rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still Confused?
                </h2>
                <p className="text-lg text-white mb-4 leading-relaxed font-medium">
                  Connect with us to learn more about our study abroad programs.
                  Our experts are here to guide you through the application process
                  and answer any questions you may have.
                </p>
                <p className="text-white mb-6 leading-relaxed">
                  We understand that studying abroad is a significant decision. That's why we offer free consultations to discuss your options, answer your questions, and help you make an informed choice about your future.
                </p>
                <Link href="/contact" className="inline-block bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                  We are Here
                </Link>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/study-abroad/consultation.jpg"
                  alt="Students consulting with a study abroad advisor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/40 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gold-metallic rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black text-2xl font-bold">?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Consultation Form Component
const CONSULTATION_API_ENDPOINT = '/api/submissions/study-abroad-consultation'

function ConsultationForm({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  useScrollInvalidFieldIntoView(formRef)
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    preferredCountry: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('preferredCountry', formData.preferredCountry)
      formDataToSend.append('comment', formData.comment)

      const response = await fetch(CONSULTATION_API_ENDPOINT, {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          preferredCountry: '',
          comment: '',
        })
        onClose()
        router.push(thankYouSearchPath('study-abroad-consultation'))
      } else {
        throw new Error(data.error || 'Submission failed. Please try again.')
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {submitError && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
          <p className="text-red-500 font-semibold text-center">{submitError}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic"
          placeholder="Enter your full name"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Contact Number *
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic"
          placeholder="Enter your contact number"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic"
          placeholder="Enter your email address"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Preferred Country *
        </label>
        <select
          name="preferredCountry"
          required
          value={formData.preferredCountry}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-metallic appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a961' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem'
          }}
          disabled={isSubmitting}
        >
          <option value="" className="bg-[#333333]/80 text-slate-100">Select preferred country</option>
          <option value="australia" className="bg-[#333333]/80 text-slate-100">Australia</option>
          <option value="germany" className="bg-[#333333]/80 text-slate-100">Germany</option>
          <option value="denmark" className="bg-[#333333]/80 text-slate-100">Denmark</option>
          <option value="sweden" className="bg-[#333333]/80 text-slate-100">Sweden</option>
          <option value="france" className="bg-[#333333]/80 text-slate-100">France</option>
          <option value="malta" className="bg-[#333333]/80 text-slate-100">Malta</option>
          <option value="latvia" className="bg-[#333333]/80 text-slate-100">Latvia</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Comment / Questions
        </label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gold-metallic/30 bg-white/10 backdrop-blur-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic resize-none"
          placeholder="Tell us about your study abroad goals and any questions you have"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex gap-3">
        <button type="submit" className="flex-1 py-3 px-6 bg-gold-metallic text-black font-semibold rounded-lg hover:bg-gold-bright transition-colors disabled:opacity-50" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 py-3 px-6 border-2 border-gold-metallic text-gold-metallic font-semibold rounded-lg hover:bg-gold-metallic/10 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
