'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import HeroMobileParticles from '@/components/HeroMobileParticles'
import HexagonBackground from '@/components/HexagonBackground'

const desktopHeroImageCandidates = [
  '/home/gcma-hero-white.png',
  '/home/gcma-hero-poster-first-green.png',
  '/home/gcma-hero-poster-first.jpg',
  '/home/gcma-hero-banner.jpg?v=3',
  '/home/gcma-hero-poster.jpg?v=2',
  '/logo_statue.png',
  '/home/belief-statement.jpg',
  '/hero-background.jpeg',
]

const mobileHeroImageCandidates = [
  '/home/gcma-hero-white.png',
  '/home/gcma-hero-poster-first-green.png',
  '/home/gcma-hero-poster-first.jpg',
  '/home/gcma-hero-banner.jpg?v=3',
  '/home/gcma-hero-green-statue-cropped.jpg?v=10',
  '/logo_statue.png',
  '/home/gcma-hero-latest.png',
  '/hero-background.jpeg',
  '/home/belief-statement.jpg',
]

type PrimaryNavLink = { href: string; label: string; compactLabel?: string }

const primaryLinks: PrimaryNavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gcma-projects', label: 'GCMA Projects', compactLabel: 'Projects' },
  { href: '/nclex-syllabus', label: 'NCLEX-RN Syllabus', compactLabel: 'NCLEX' },
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
  'shrink-0 whitespace-nowrap rounded-md px-1.5 py-1.5 text-xs font-semibold text-gold transition-colors hover:text-gold-metallic hover:underline hover:decoration-gold-metallic/90 hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50 sm:px-2 sm:py-1.5 sm:text-sm lg:px-2.5 lg:py-2 lg:text-base'

const mobileNavLinkClass =
  'block rounded-lg border border-gold-rich/30 px-4 py-3 text-sm font-semibold text-gold-rich transition-colors hover:bg-gold-rich/10'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const nursingRef = useRef<HTMLDivElement>(null)
  const [desktopHeroImageIndex, setDesktopHeroImageIndex] = useState(0)
  const [mobileHeroImageIndex, setMobileHeroImageIndex] = useState(0)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const [showNursingMenu, setShowNursingMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileNursingOpen, setMobileNursingOpen] = useState(false)

  const toggleServicesMenu = () => {
    setShowServicesMenu((prev) => !prev)
    setShowNursingMenu(false)
  }

  const toggleNursingMenu = () => {
    setShowNursingMenu((prev) => !prev)
    setShowServicesMenu(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setShowServicesMenu(false)
      }
      if (nursingRef.current && !nursingRef.current.contains(event.target as Node)) {
        setShowNursingMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const desktopHeroImage = desktopHeroImageCandidates[desktopHeroImageIndex]
  const mobileHeroImage = mobileHeroImageCandidates[mobileHeroImageIndex]
  const hasDesktopHeroImage = desktopHeroImageIndex < desktopHeroImageCandidates.length
  const hasMobileHeroImage = mobileHeroImageIndex < mobileHeroImageCandidates.length
  const hasHeroImage = hasDesktopHeroImage || hasMobileHeroImage

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
      className="relative z-10 min-h-[100dvh] overflow-x-hidden md:overflow-visible hero-background md:h-screen md:min-h-screen"
    >

      <div 
        className={`absolute left-0 right-0 top-0 z-[60] w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen 
            ? 'bg-transparent border-b border-black/10' 
            : 'mobile-nav-header backdrop-blur-md'
        }`}
      >
        <Link 
          href="/" 
          className={`text-base font-bold tracking-widest transition-colors ${mobileMenuOpen ? 'text-black' : 'mobile-nav-logo'}`}
          onClick={closeMobileMenu}
        >
          GCMA
        </Link>
        <button
          type="button"
          className={`rounded-lg border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
            mobileMenuOpen 
              ? 'border-black/30 text-black hover:bg-black/5' 
              : 'mobile-nav-btn'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-controls="hero-mobile-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div
          id="hero-mobile-menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#f9f2e7] px-6 pb-8 pt-20 md:hidden transition-all duration-300 ease-out"
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

      <nav className="absolute left-1/2 top-5 z-30 hidden w-full max-w-7xl -translate-x-1/2 px-6 md:block transition-all duration-600 ease-out">
        <div className="mx-auto w-full max-w-none">
          <div className="flex items-center justify-center gap-x-6 lg:gap-x-8 xl:gap-x-12">
            <div className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max flex-nowrap items-center justify-center gap-x-3 lg:gap-x-5">
                {primaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={navLinkClass}>
                    {link.compactLabel ? (
                      <>
                        <span className="text-inherit xl:hidden">{link.compactLabel}</span>
                        <span className="hidden text-inherit xl:inline">{link.label}</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-x-3 lg:gap-x-5">
            <div ref={servicesRef} className="relative shrink-0">
              <button
                type="button"
                onClick={toggleServicesMenu}
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

            <div ref={nursingRef} className="relative shrink-0">
              <button
                type="button"
                onClick={toggleNursingMenu}
                className={`${navLinkClass} flex items-center gap-1`}
                aria-label="Global nursing registration"
                aria-expanded={showNursingMenu}
              >
                <span className="hidden text-inherit lg:inline">Global nursing registration</span>
                <span className="text-inherit lg:hidden">Nursing</span>
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
        </div>
      </nav>



      {hasHeroImage ? (
        <>
          {/* Desktop: hero image covering full viewport and blended with theme backgrounds */}
          <div className="absolute inset-0 z-0 hidden overflow-hidden md:block">
            <div className="absolute inset-0 bg-[#f9f6ef]" aria-hidden />
            <img
              src={desktopHeroImage}
              alt="GCMA Hero"
              className="absolute left-0 top-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => {
                setDesktopHeroImageIndex((current) => current + 1)
              }}
            />



            {/* Desktop Hero Text Content (overlay - visually hidden but preserved for SEO and screen readers) */}
            <div className="sr-only pointer-events-none" aria-hidden="false">
              <div className="w-full max-w-2xl xl:max-w-3xl text-center hero-desktop-text-wrapper">
                <div className="space-y-4">
                  <h2 className="text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest font-display text-gold-bright hero-text-title">
                    GCMA
                  </h2>
                  
                  {/* Elegant horizontal gold line */}
                  <div className="flex items-center justify-center py-2">
                    <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#ffd97d]/85 to-transparent" />
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg font-bold tracking-[0.25em] font-sans text-gold-metallic uppercase leading-relaxed max-w-xl mx-auto hero-text-sub">
                    Global Council for Migration Awareness and Social Welfare
                  </p>
                  
                  {/* Elegant horizontal gold line */}
                  <div className="flex items-center justify-center py-2">
                    <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-[#ffd97d]/85 to-transparent" />
                  </div>
                </div>

                <div className="mt-8 max-w-3xl mx-auto">
                  <p className="text-xl sm:text-2xl lg:text-3xl italic font-display text-gold/95 leading-relaxed hero-text-quote">
                    &ldquo;Human rights are a duty, not a choice. If you can smile while the world cries, you&rsquo;ve forgotten your humanity.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 z-20 w-[min(100%,20rem)] -translate-x-1/2 px-4">
              <Link
                href="/services#immigration-fraud"
                className="btn-gold btn-gold-lighter block w-full px-8 py-4 text-center text-lg"
              >
                Report scam
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col md:hidden">
          {/* Top section: Full-width GCMA banner, clears fixed nav */}
            <div className="relative bg-[#f9f6ef]" style={{ paddingTop: '60px' }}>
              <img
                src={mobileHeroImage}
                alt="GCMA hero poster"
                className="w-full block"
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '220px' }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onError={() => {
                  setMobileHeroImageIndex((current) => current + 1)
                }}
              />
            </div>

            {/* Bottom section: Theme-aware background and text colors */}
            <div className="px-6 pb-6 pt-6 mobile-hero-text-container">
              <div className="mx-auto max-w-md space-y-4 text-center">
                <h1 className="text-4xl font-extrabold tracking-widest mobile-hero-title">
                  GCMA
                </h1>
                <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mobile-hero-subtitle">
                  Global Council for Migration Awareness & Social Welfare
                </p>
                <p className="text-base sm:text-lg italic leading-relaxed mobile-hero-quote">
                  &ldquo;Human rights are a duty, not a choice. If you can smile while the world cries, you&rsquo;ve forgotten your humanity.&rdquo;
                </p>
                <p className="text-sm sm:text-base leading-relaxed mobile-hero-desc">
                  Justice, protection, and ethical guidance for students, nurses, families, and skilled professionals
                  planning life abroad.
                </p>
                
                <div className="pt-4">
                  <Link
                    href="/services#immigration-fraud"
                    className="btn-gold block w-full px-6 py-3 text-center text-base font-bold"
                    onClick={closeMobileMenu}
                  >
                    Report scam
                  </Link>
                </div>
              </div>
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
