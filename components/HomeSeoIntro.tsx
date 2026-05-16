'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

const serviceLinks = [
  { href: '/services', label: 'Immigration fraud reporting' },
  { href: '/study-abroad', label: 'Study abroad guidance' },
  { href: '/nursing-registration', label: 'Nursing registration abroad' },
  { href: '/migration-advice', label: 'Migration advice' },
  { href: '/charity-support', label: 'Charity and humanitarian aid' },
  { href: '/contact', label: 'Contact GCMA' },
  { href: '/travel', label: 'Travel planning' },
  { href: '/visit-visa', label: 'Visit visa guidance' },
  { href: '/tutors', label: 'Volunteer tutors' },
]

const gcmaSupportPoints = [
  {
    title: 'Awareness first',
    text: 'We explain lawful routes, documents, and risks so families can decide with confidence.',
  },
  {
    title: 'Community protection',
    text: 'Reports and education help migrants spot unethical agents and unsafe offers early.',
  },
  {
    title: 'Ongoing welfare support',
    text: 'From travel planning to charity assistance, GCMA stays focused on people, not profit.',
  },
]

const gcmaFeatures = [
  'Ethical migration guidance without false promises',
  'Confidential reporting for immigration fraud and scams',
  'Study abroad, nursing, and skilled migration pathways',
  'Humanitarian aid, English learning, and volunteer support',
]

function MobileSection({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <aside className={className}>
      <div className="hidden lg:block">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/85">{title}</p>
        {children}
      </div>

      <details className="rounded-xl border border-gold-metallic/20 bg-gold-metallic/5 p-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/85 [&::-webkit-details-marker]:hidden">
          <span>{title}</span>
          <span aria-hidden="true" className="text-sm text-gold-metallic/70">
            +
          </span>
        </summary>
        <div className="mt-4">{children}</div>
      </details>
    </aside>
  )
}

export default function HomeSeoIntro() {
  return (
    <section aria-labelledby="gcma-home-intro" className="relative z-10 px-3 py-5 sm:px-4 sm:py-6 md:py-8">
      <div className="glass-card mx-auto max-w-7xl overflow-hidden rounded-2xl">
        <div className="relative h-40 overflow-hidden sm:h-48 md:h-60">
          <img
            src="/home/seo-intro.jpg"
            alt="Community members and volunteers supporting migration awareness and social welfare"
            className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-px left-0 right-0 top-0 bg-gradient-to-t from-[#333333]/55 via-[#333333]/15 to-transparent" />
        </div>

        <div className="grid gap-5 p-4 sm:gap-6 sm:p-5 md:p-6 lg:grid-cols-3 lg:items-stretch lg:gap-0 lg:divide-x lg:divide-gold-metallic/20">
          <MobileSection title="What we focus on" className="order-2 lg:order-1 lg:pr-6">
            <div className="flex flex-col gap-4">
              {gcmaSupportPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gold-metallic/25 bg-gold-metallic/10 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-gold-metallic">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </MobileSection>

          <div className="order-1 space-y-4 lg:order-2 lg:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-metallic/85">
              Community welfare and migration awareness
            </p>

            <div className="space-y-3">
              <h1
                id="gcma-home-intro"
                className="text-[1.65rem] font-bold leading-snug text-gold-metallic sm:text-2xl md:text-3xl"
              >
                Global Council for Migration Awareness and Social Welfare (GCMA)
              </h1>
              <div className="h-px w-16 bg-gradient-to-r from-gold-metallic/80 to-transparent" />
            </div>

            <div className="space-y-3">
              <p className="page-intro text-sm leading-relaxed sm:text-base">
                GCMA helps students, nurses, families, and skilled professionals with migration awareness,
                immigration fraud reporting, humanitarian support, and ethical guidance for life abroad.
              </p>
              <p className="page-intro text-sm leading-relaxed sm:text-base">
                Explore study abroad counseling, nursing registration, skilled migration advice, visit visa
                planning, English classes, Break the Silence, travel support, and charity assistance.
              </p>
            </div>
          </div>

          <MobileSection title="How GCMA supports migrants" className="order-3 lg:pl-6">
            <ul className="space-y-2.5">
              {gcmaFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </MobileSection>
        </div>

        <div className="border-t border-gold-metallic/20 px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 md:px-6 md:pb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/80 sm:mb-4">
            Explore services
          </p>
          <nav
            aria-label="Primary service areas"
            className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-3 xl:gap-4"
          >
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-gold-outline flex min-h-11 w-full items-center justify-center px-3 py-2.5 text-center text-xs sm:px-4 sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
