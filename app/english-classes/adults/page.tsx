'use client'

import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'
import EnglishClassInquiryForm from '@/components/EnglishClassInquiryForm'
import { useState } from 'react'

type ProgramTrack = {
  title: string
  href: string
  audience: string
  description: string
  highlights: string[]
  imageSrc: string
  imageAlt: string
}

const pteTracks: ProgramTrack[] = [
  {
    title: 'PTE Core',
    href: '/contact',
    audience: 'Migration & PR',
    description: 'Computer-based English testing with faster turnaround for migration-focused applicants.',
    highlights: [
      'Score planning for visa and residency pathways',
      'Speaking and writing practice for everyday workplace English',
    ],
    imageSrc: '/english-classes/adults/tracks/pte-core.jpg',
    imageAlt: 'PTE Core preparation session',
  },
  {
    title: 'PTE Academics',
    href: '/contact',
    audience: 'Study Abroad',
    description: 'Academic English preparation for university admissions and higher-education applications.',
    highlights: [
      'Academic listening and reading module coaching',
      'Structured mock tests with score-improvement feedback',
    ],
    imageSrc: '/english-classes/adults/tracks/pte-academics.jpg',
    imageAlt: 'PTE Academics classroom preparation',
  },
]

const ieltsTracks: ProgramTrack[] = [
  {
    title: 'IELTS General',
    href: '/contact',
    audience: 'Migration & Work',
    description: 'Preparation across all four IELTS modules for migration, employment, and settlement goals.',
    highlights: [
      'Task-focused speaking and writing practice',
      'Listening and reading drills for real-world contexts',
    ],
    imageSrc: '/english-classes/adults/tracks/ielts-general.jpg',
    imageAlt: 'IELTS General speaking practice',
  },
  {
    title: 'IELTS Academics',
    href: '/contact',
    audience: 'Higher Education',
    description: 'Academic pathway coaching for students applying to universities and professional programs abroad.',
    highlights: [
      'Academic essay and report writing support',
      'Reading strategies for complex academic passages',
    ],
    imageSrc: '/english-classes/adults/tracks/ielts-academics.jpg',
    imageAlt: 'IELTS Academics study session',
  },
]

function ProgramTrackLink({
  title,
  href,
  audience,
  description,
  highlights,
  imageSrc,
  imageAlt,
}: ProgramTrack) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gold-metallic/35 bg-[#333333]/80 shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold-metallic/70 hover:shadow-xl"
    >
      <div className="relative h-36" style={{ position: 'relative' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/85 via-[#333333]/35 to-[#333333]/10" />
        <span className="absolute right-3 top-3 rounded-full border border-gold-metallic/35 bg-[#333333]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-metallic">
          {audience}
        </span>
        <h3 className="absolute bottom-3 left-3 right-3 text-xl font-bold text-white drop-shadow-lg">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-slate-200">{description}</p>

        <ul className="mt-4 space-y-2.5">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-metallic/20">
                <svg className="h-2.5 w-2.5 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-slate-100">{highlight}</span>
            </li>
          ))}
        </ul>

        <span className="mt-auto block w-full rounded-lg bg-gold-metallic px-4 py-3 text-center text-sm font-semibold text-black transition-colors group-hover:bg-gold-bright">
          Enroll for this track
        </span>
      </div>
    </Link>
  )
}

function ProgramTrackPanel({
  title,
  subtitle,
  tracks,
}: {
  title: string
  subtitle: string
  tracks: ProgramTrack[]
}) {
  return (
    <div className="rounded-2xl border border-gold-metallic/40 bg-[#333333]/75 p-5 shadow-xl md:p-6">
      <div className="mb-5 border-b border-gold-metallic/20 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-metallic/85">{title}</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">{subtitle}</p>
      </div>
      <div className="grid items-stretch gap-4 sm:grid-cols-2">
        {tracks.map((track) => (
          <ProgramTrackLink key={track.title} {...track} />
        ))}
      </div>
    </div>
  )
}

export default function EnglishAcademyPage() {
  const [expandedPTE, setExpandedPTE] = useState(false)
  const [expandedIELTS, setExpandedIELTS] = useState(false)

  return (
    <main className="relative min-h-screen">
      <HexagonBackground />

      <nav className="relative z-20 px-4 pt-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center text-gold-metallic transition-colors hover:text-gold-bright"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mb-12 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative mb-8 h-[300px] w-full overflow-hidden rounded-3xl shadow-2xl md:h-[400px]"
            style={{ position: 'relative' }}
          >
            <Image
              src="/english-classes/adults/significance.jpg"
              alt="English Academy classroom training"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333]/70 via-[#333333]/35 to-[#333333]/10" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-8 md:px-12">
                <div className="inline-flex items-center gap-4 rounded-2xl border border-gold-metallic/55 bg-[#f9f2e7]/95 px-6 py-5 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold text-black md:text-5xl">English Academy</h1>
                    <p className="text-lg font-semibold text-gold-metallic md:text-xl">
                      Professional English Training & Certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-2xl border border-gold-metallic/40 bg-[#333333]/70 p-8 shadow-xl backdrop-blur-sm md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gold-metallic">Why Choose English Academy?</h2>
                <p className="mb-4 text-lg leading-relaxed text-slate-100">
                  Master English for professional success, academic excellence, and global opportunities.
                  Our programs cover spoken English, PTE, IELTS, and OET with coaching aligned to your goal.
                </p>
                <ul className="space-y-3">
                  {[
                    'Qualified instructors with exam-focused coaching',
                    'Flexible tracks for migration, study abroad, and healthcare registration',
                    'Structured practice for speaking confidence and test readiness',
                  ].map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-metallic/20">
                        <svg
                          className="h-3.5 w-3.5 text-gold-metallic"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-slate-200 md:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative h-64 overflow-hidden rounded-xl md:h-80"
                style={{ position: 'relative' }}
              >
                <Image
                  src="/english-classes/adults/feature2.jpg"
                  alt="Students learning English in a classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-metallic/85">
                Programs
              </p>
              <h2 className="text-3xl font-bold text-gold-metallic md:text-4xl">Enroll To</h2>
              <p className="page-intro mx-auto mt-4 max-w-2xl">
                Choose a spoken English pathway or open the exam track that matches your migration, study, or
                healthcare registration goal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid items-start gap-6 md:grid-cols-2">
                <ShowcaseCard
                  imageSrc="/english-classes/adults/feature1.jpg"
                  imageAlt="Spoken English classes"
                  eyebrow="English Academy"
                  title="Spoken English"
                  description="Build conversational fluency for daily communication, interviews, and professional interactions."
                  highlights={[
                    'Confidence-focused speaking practice',
                    'Workplace and interview communication support',
                    'Flexible schedules for working adults',
                  ]}
                  ctaHref="/contact"
                  ctaLabel="Enroll Now"
                />

                <ShowcaseCard
                  imageSrc="/english-classes/adults/pte.jpg"
                  imageAlt="PTE preparation"
                  eyebrow="English Academy"
                  title="PTE"
                  description="Pearson Test of English with computer-based testing and fast turnaround for migration and study pathways."
                  highlights={[
                    'PTE Core for migration-focused applicants',
                    'PTE Academics for university admissions',
                    'Mock tests with score-focused feedback',
                  ]}
                  ctaLabel={expandedPTE ? 'Hide PTE Tracks' : 'View PTE Tracks'}
                  ctaOnClick={() => setExpandedPTE((open) => !open)}
                />
              </div>

              {expandedPTE ? (
                <ProgramTrackPanel
                  title="Choose your PTE pathway"
                  subtitle="Select the PTE track that matches your migration, residency, or university admission goal."
                  tracks={pteTracks}
                />
              ) : null}

              <div className="grid items-start gap-6 md:grid-cols-2">
                <ShowcaseCard
                  imageSrc="/english-classes/adults/ielts.jpg"
                  imageAlt="IELTS preparation"
                  eyebrow="English Academy"
                  title="IELTS"
                  description="International English Language Testing System preparation for global study, migration, and professional recognition."
                  highlights={[
                    'IELTS General for migration and work pathways',
                    'IELTS Academics for higher education applications',
                    'Writing, speaking, listening, and reading modules',
                  ]}
                  ctaLabel={expandedIELTS ? 'Hide IELTS Tracks' : 'View IELTS Tracks'}
                  ctaOnClick={() => setExpandedIELTS((open) => !open)}
                />

                <ShowcaseCard
                  imageSrc="/english-classes/adults/oet.jpg"
                  imageAlt="OET preparation"
                  eyebrow="English Academy"
                  title="OET"
                  description="Occupational English Test coaching for nurses, doctors, and allied healthcare professionals."
                  highlights={[
                    'Role-play and case-note writing practice',
                    'Healthcare communication scenarios',
                    'Registration-focused preparation support',
                  ]}
                  ctaHref="/contact"
                  ctaLabel="Enroll Now"
                />
              </div>

              {expandedIELTS ? (
                <ProgramTrackPanel
                  title="Choose your IELTS pathway"
                  subtitle="Pick the IELTS module focus that fits your migration, work, or higher-education application."
                  tracks={ieltsTracks}
                />
              ) : null}
            </div>
          </div>

          <div className="grid gap-8 rounded-2xl border border-gold-metallic/30 bg-gold-metallic/10 p-8 md:grid-cols-2 md:items-stretch">
            <EnglishClassInquiryForm
              apiEndpoint="/api/submissions/english-academy"
              headline="English Academy — request info"
              subline="PTE, IELTS, OET, and other adult tracks. Tell us your goal and we will follow up."
            />
            <div className="flex flex-col justify-center text-center">
              <h3 className="mb-4 text-2xl font-bold text-gold-metallic">Prefer to email or visit?</h3>
              <p className="mx-auto mb-6 max-w-md text-[#0f0c14]">
                Use the contact page for full details or visit us — we will match you to the right batch and exam track.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold-metallic px-8 py-4 font-semibold text-black shadow-lg transition-all hover:bg-gold-bright hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
