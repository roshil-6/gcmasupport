'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import HeroMobileParticles from '@/components/HeroMobileParticles'

const heroImageCandidates = [
  '/logo_statue.png',
  '/home/belief-statement.jpg',
  '/hero-background.jpeg',
]

type PrimaryNavLink = { href: string; label: string; compactLabel?: string }

const primaryLinks: PrimaryNavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gcma-projects', label: 'GCMA Projects', compactLabel: 'Projects' },
  { href: '/calculators/pr-calculator', label: 'PR Calculator', compactLabel: 'PR calc' },
  {
    href: '/calculators/canada-points',
    label: 'Canada Points Calculator',
    compactLabel: 'Canada points',
  },
  { href: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  { href: '/charity-support', label: 'Charity Support' },
  { href: '/services#immigration-fraud', label: 'Report Immigration Fraud' },
  { href: '/study-abroad', label: 'Study Abroad Advice' },
  { href: '/migration-advice', label: 'Migration Advice' },
  { href: '/visit-visa', label: 'Visit Visa' },
  { href: '/travel', label: 'Travel' },
  { href: '/english-classes/govt-students', label: 'English Speaking Classes - Govt School Students' },
  { href: '/english-classes/private-students', label: 'English Speaking Classes - Private School Students' },
  { href: '/english-classes/adults', label: 'English Academy' },
  { href: '/tutors', label: 'Serve society with GCMA - Tutors' },
]

const nursingLinks = [
  { href: '/nurses/australia', label: 'Australia' },
  { href: '/nurses/canada', label: 'Canada' },
  { href: '/nurses/new-zealand', label: 'New Zealand' },
  { href: '/nurses/germany', label: 'Germany' },
  { href: '/nurses/malta', label: 'Malta' },
  { href: '/nurses/denmark', label: 'Denmark' },
  { href: '/nurses/united-kingdom', label: 'United Kingdom' },
  { href: '/nurses/uae', label: 'UAE' },
  { href: '/nurses/usa', label: 'USA' },
]

const navLinkClass =
  'shrink-0 whitespace-nowrap rounded-md px-1.5 py-1.5 text-xs font-semibold text-gold-rich transition-colors hover:text-gold hover:underline hover:decoration-gold-rich/90 hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-rich/50 sm:px-2 sm:py-1.5 sm:text-sm lg:px-2.5 lg:py-2 lg:text-base'

const mobileNavLinkClass =
  'block rounded-lg border border-gold-rich/30 px-4 py-3 text-sm font-semibold text-gold-rich transition-colors hover:bg-gold-rich/10'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const [showNursingMenu, setShowNursingMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileNursingOpen, setMobileNursingOpen] = useState(false)

  const heroImage = heroImageCandidates[heroImageIndex]
  const hasHeroImage = heroImageIndex < heroImageCandidates.length

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobileNursingOpen(false)
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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <section
      ref={heroRef}
      className="relative z-10 min-h-[100dvh] overflow-hidden md:overflow-visible hero-background md:h-screen md:min-h-screen"
    >
      {/* Desktop: pure white band behind nav */}
      <div
        className="hero-header-luxe absolute inset-x-0 top-0 z-20 hidden h-[5.75rem] md:block"
        aria-hidden
      />
      <div className="hero-header-luxe absolute left-0 right-0 top-0 z-40 px-3 py-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-sm font-bold text-gold-rich" onClick={closeMobileMenu}>
            GCMA
          </Link>
          <button
            type="button"
            className="rounded-lg border border-gold-rich/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-rich"
            aria-expanded={mobileMenuOpen}
            aria-controls="hero-mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div
          id="hero-mobile-menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#f9f2e7] px-4 pb-8 pt-16 md:hidden"
        >
          <nav aria-label="Mobile primary navigation" className="space-y-2">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className={`${mobileNavLinkClass} w-full text-left`}
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              Services
            </button>
            {mobileServicesOpen ? (
              <div className="space-y-2 pl-3">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <button
              type="button"
              className={`${mobileNavLinkClass} w-full text-left`}
              aria-expanded={mobileNursingOpen}
              onClick={() => setMobileNursingOpen((open) => !open)}
            >
              Global nursing registration
            </button>
            {mobileNursingOpen ? (
              <div className="space-y-2 pl-3">
                {nursingLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </nav>
        </div>
      ) : null}

      <nav className="absolute left-0 right-0 top-6 z-30 hidden px-4 md:block">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex min-w-0 items-center justify-start gap-x-1 sm:gap-x-2">
            <div className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="mx-auto flex w-max flex-nowrap items-center justify-start gap-x-1 sm:gap-x-2">
                {primaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={navLinkClass}>
                    {link.compactLabel ? (
                      <>
                        <span className="xl:hidden">{link.compactLabel}</span>
                        <span className="hidden xl:inline">{link.label}</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className={`${navLinkClass} flex items-center gap-1`}
                aria-expanded={showServicesMenu}
              >
                Services
                <svg
                  className={`h-3.5 w-3.5 shrink-0 transition-transform sm:h-4 sm:w-4 ${showServicesMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showServicesMenu ? (
                <div className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-[min(18rem,calc(100vw-2rem))] overflow-y-auto rounded-lg border border-gold-metallic/50 bg-white shadow-xl sm:w-72">
                  <div className="py-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setShowServicesMenu(false)}
                        className="block px-4 py-2 text-sm font-medium text-gold-rich transition-colors hover:bg-gold-rich/10 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setShowNursingMenu(!showNursingMenu)}
                className={`${navLinkClass} flex items-center gap-1`}
                aria-label="Global nursing registration"
                aria-expanded={showNursingMenu}
              >
                <span className="hidden lg:inline">Global nursing registration</span>
                <span className="lg:hidden">Nursing</span>
                <svg
                  className={`h-3.5 w-3.5 shrink-0 transition-transform sm:h-4 sm:w-4 ${showNursingMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showNursingMenu ? (
                <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-gold-metallic/50 bg-white shadow-xl lg:left-0 lg:right-auto">
                  <div className="py-2">
                    {nursingLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setShowNursingMenu(false)}
                        className="block px-4 py-2 text-sm font-medium text-gold-rich transition-colors hover:bg-gold-rich/10 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>

      {(showServicesMenu || showNursingMenu) && (
        <div
          className="fixed inset-0 z-[25] hidden md:block"
          onClick={() => {
            setShowServicesMenu(false)
            setShowNursingMenu(false)
          }}
        />
      )}

      {hasHeroImage ? (
        <>
          {/* Desktop: start image below floating nav (nav is absolute top-6 + pill height) so it does not cover the hero focal point */}
          <div className="absolute inset-x-0 bottom-0 top-[5.75rem] z-0 hidden md:block">
            <div className="hero-ledge-feather" aria-hidden />
            <img
              src={heroImage}
              alt="GCMA Hero"
              className="relative z-0 h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => {
                setHeroImageIndex((current) => current + 1)
              }}
            />
            <div className="absolute bottom-5 left-1/2 z-20 w-[min(100%,20rem)] -translate-x-1/2 px-4">
              <Link href="/services#immigration-fraud" className="btn-gold btn-gold-lighter block w-full px-8 py-4 text-center text-lg">
                Report scam
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#f9f2e7] md:hidden">
            <HeroMobileParticles />
            <div className="h-14 shrink-0" aria-hidden="true" />

            <div className="relative z-10 flex flex-1 flex-col px-4 pb-28 pt-4">
              <div className="mx-auto flex w-full max-w-md justify-center">
                <img
                  src={heroImageCandidates[0]}
                  alt="GCMA emblem"
                  className="max-h-[38vh] w-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={(event) => {
                    const target = event.currentTarget
                    if (target.dataset.fallbackApplied === 'true') {
                      target.classList.add('hidden')
                      return
                    }
                    target.dataset.fallbackApplied = 'true'
                    target.src = heroImageCandidates[1] ?? heroImageCandidates[2]
                  }}
                />
              </div>

              <div className="mx-auto mt-6 w-full max-w-md space-y-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/85">
                  Migration awareness and social welfare
                </p>
                <h1 className="hero-main-title text-[1.75rem] font-bold leading-tight sm:text-3xl">
                  Global Council for Migration Awareness and Social Welfare
                </h1>
                <p className="hero-subtitle-color text-sm font-semibold sm:text-base">GCMA</p>
                <p className="text-sm italic leading-relaxed text-[#35063e]/90">
                  Human rights are not optional. If you can smile while another suffers, you have forgotten what
                  compassion means.
                </p>
                <p className="text-sm leading-relaxed text-[#35063e]/90">
                  Justice, protection, and ethical guidance for students, nurses, families, and skilled professionals
                  planning life abroad.
                </p>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-gold-metallic/20 bg-[#f9f2e7]/95 px-4 pb-3 pt-7 backdrop-blur">
              <Link
                href="/services#immigration-fraud"
                className="btn-gold btn-gold-lighter block w-full px-6 py-3 text-center text-base"
                onClick={closeMobileMenu}
              >
                Report scam
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex min-h-screen items-center justify-center px-4">
          <Link href="/services" className="btn-gold px-8 py-4 text-lg">
            Get Started
          </Link>
        </div>
      )}
    </section>
  )
}
