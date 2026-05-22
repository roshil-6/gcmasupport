'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ExplanationPanel, { ExplanationBox } from './ExplanationPanel'

type CoreServiceId = 1 | 2 | 3

type CoreService = {
  id: CoreServiceId
  imageSrc: string
  imageAlt: string
  title: string
  summary: string
  explanationTitle: string
  explanationContent: string
  features: string[]
  supportHeading: string
  supportText: string
  ctaLabel: string
  ctaHref: string
  ariaLabel: string
}

const coreServices: CoreService[] = [
  {
    id: 1,
    imageSrc: '/home/core-inquiry.jpg',
    imageAlt: 'Visa and passport guidance for genuine migration pathways',
    title: 'Inquiry – Genuine Migration Pathway',
    summary:
      'Help users understand ethical, lawful, and genuine migration options without false promises.',
    explanationTitle: 'Inquiry – Genuine Migration Pathway',
    explanationContent:
      'This service helps users understand ethical, lawful, and genuine migration options without false promises. We provide accurate information about legal migration pathways, requirements, and processes, ensuring transparency and preventing exploitation.',
    features: [
      'Pathway review based on your profile, destination, and eligibility',
      'Clear explanation of lawful routes, timelines, and documentation',
      'Warnings about unrealistic promises and unethical recruitment practices',
    ],
    supportHeading: 'How GCMA supports',
    supportText:
      'We answer migration questions with transparent guidance, practical next steps, and referrals to trusted services when specialist help is needed.',
    ctaLabel: 'Learn More',
    ctaHref: '/migration-advice',
    ariaLabel: 'Click to view details about Inquiry – Genuine Migration Pathway',
  },
  {
    id: 2,
    imageSrc: '/home/core-scam-report.jpg',
    imageAlt: 'Cyber security and fraud prevention for migration reporting',
    title: 'Report a Migration Scam',
    summary: 'Secure platform to report immigration fraud or unethical practices.',
    explanationTitle: 'Report a Migration Scam or Unethical Activity',
    explanationContent:
      'Secure platform to report immigration fraud or unethical practices. Information is confidential and used only for legal and investigative purposes. Your report helps protect others and contributes to holding fraudulent actors accountable.',
    features: [
      'Confidential reporting for fraud, overcharging, and document misuse',
      'Structured intake so key facts are captured clearly and safely',
      'Awareness support that helps others avoid similar exploitation',
    ],
    supportHeading: 'How GCMA supports',
    supportText:
      'We document concerns responsibly, guide you through what to report, and connect reports to awareness and accountability efforts that protect migrants.',
    ctaLabel: 'Report Now',
    ctaHref: '/services#immigration-fraud',
    ariaLabel: 'Click to view details about Report a Migration Scam',
  },
  {
    id: 3,
    imageSrc: '/home/core-legal.jpg',
    imageAlt: 'Legal advisory and responsible migration guidance',
    title: 'Chat with Our Legal Advisory',
    summary: 'Communicate with legal advisors for guidance, clarity, and responsible support.',
    explanationTitle: 'Chat with Our Legal Advisory',
    explanationContent:
      'Allow users to communicate with legal advisors for guidance, clarity, and responsible support. Our legal team provides accurate information, helps clarify migration-related questions, and offers guidance on legal pathways and rights.',
    features: [
      'Clarification on rights, documents, and lawful next steps',
      'Responsible guidance before you sign agreements or pay fees',
      'Support for families and workers facing urgent migration questions',
    ],
    supportHeading: 'How GCMA supports',
    supportText:
      'Our advisory team helps you ask the right questions, understand legal boundaries, and move forward with informed decisions instead of pressure.',
    ctaLabel: 'Start Chat',
    ctaHref: '/contact',
    ariaLabel: 'Click to view details about Chat with Our Legal Advisory',
  },
]

const serviceCardColors = [
  'border-[#e0d0aa] bg-[linear-gradient(180deg,#fffdf8_0%,#f8f0df_100%)]',
  'border-[#cadbb7] bg-[linear-gradient(180deg,#fbfff7_0%,#edf5e3_100%)]',
  'border-[#d9c7e5] bg-[linear-gradient(180deg,#fffaff_0%,#f2e8f8_100%)]',
]

function ServiceIcon({ serviceId }: { serviceId: CoreServiceId }) {
  if (serviceId === 1) {
    return (
      <svg className="h-6 w-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }

  if (serviceId === 2) {
    return (
      <svg className="h-6 w-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  }

  return (
    <svg className="h-6 w-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

export default function CoreServicesSection() {
  const [activeService, setActiveService] = useState<CoreServiceId | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const toggleService = (serviceId: CoreServiceId) => {
    setActiveService((current) => (current === serviceId ? null : serviceId))
  }

  const setServiceVisible = (serviceId: CoreServiceId, isVisible: boolean) => {
    setActiveService(isVisible ? serviceId : null)
  }

  useEffect(() => {
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

  return (
    <section id="core-services" ref={sectionRef} className="relative z-10 px-3 py-10 sm:px-4 sm:py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gold-metallic sm:mb-12 sm:text-4xl md:text-5xl">Core Services</h2>

        <div className="grid items-start gap-5 sm:gap-8 md:grid-cols-3">
          {coreServices.map((service) => (
            <article
              key={service.id}
              className={`flex w-full flex-col self-start rounded-2xl border p-5 shadow-[0_14px_34px_rgba(122,90,30,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_40px_rgba(122,90,30,0.12)] hover:border-gold-metallic/60 sm:p-8 ${serviceCardColors[(service.id - 1) % serviceCardColors.length]}`}
              onClick={() => toggleService(service.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  toggleService(service.id)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={service.ariaLabel}
            >
              <div className="relative mb-6 h-48 overflow-hidden rounded-xl">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-px left-0 right-0 top-0 bg-[#333333]/50" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-metallic/50 bg-gold-metallic/20 backdrop-blur-md">
                  <ServiceIcon serviceId={service.id} />
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <h3 className="text-xl font-bold text-[#2a241d] md:text-2xl">{service.title}</h3>
                <ExplanationPanel
                  title={service.explanationTitle}
                  content={service.explanationContent}
                  isVisible={activeService === service.id}
                  onToggle={(isVisible) => setServiceVisible(service.id, isVisible)}
                />
              </div>

              <p className="text-sm leading-relaxed text-[#343434] md:text-base">{service.summary}</p>

              <div className="mt-5 space-y-5 border-t border-gold-metallic/20 pt-5">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/85">
                    Key features
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm leading-relaxed text-[#343434]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/85">
                    {service.supportHeading}
                  </p>
                  <p className="text-sm leading-relaxed text-[#343434]">{service.supportText}</p>
                </div>
              </div>

              {activeService === service.id ? (
                <ExplanationBox
                  title={service.explanationTitle}
                  content={service.explanationContent}
                  onClose={() => setServiceVisible(service.id, false)}
                />
              ) : null}

              <Link
                href={service.ctaHref}
                className="btn-gold-outline mt-6 block w-full text-center"
                onClick={(event) => event.stopPropagation()}
              >
                {service.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
