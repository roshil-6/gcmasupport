import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import { buildPageMetadata } from '@/lib/seo'
import {
  getSubmissionTypeLabel,
  isSubmissionType,
  type SubmissionType,
} from '@/lib/submission-types'

export const metadata = buildPageMetadata({
  title: 'Thank you',
  description:
    'Your submission was received. Our team will review your information and get back to you when appropriate.',
  path: '/thank-you',
  noIndex: true,
})

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const raw = searchParams.type
  const typeParam =
    typeof raw === 'string' ? raw : Array.isArray(raw) && raw[0] ? raw[0] : undefined

  const contextLabel =
    typeParam && isSubmissionType(typeParam)
      ? getSubmissionTypeLabel(typeParam as SubmissionType)
      : null

  return (
    <main className="relative min-h-screen">
      <HexagonBackground />

      <nav className="relative z-20 pt-6 px-4">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gold-metallic transition-colors hover:text-gold-bright md:text-base"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 pb-20 pt-10 md:pt-16">
        <div className="glass-card w-full max-w-lg rounded-2xl border border-gold-metallic/35 bg-[#1a1520]/85 p-8 text-center shadow-2xl backdrop-blur-md md:p-10">
          <div
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-metallic/20 text-2xl text-gold-metallic ring-2 ring-gold-metallic/40"
            aria-hidden
          >
            ✓
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gold-metallic md:text-3xl">
            Thank you
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            We have received your submission safely. If a response is needed, our team will contact you using the
            details you provided.
          </p>
          {contextLabel ? (
            <p className="mt-4 rounded-lg border border-gold-metallic/25 bg-gold-metallic/10 px-4 py-3 text-sm text-gold-metallic/95">
              <span className="text-white/70">Form: </span>
              {contextLabel}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="btn-gold inline-flex justify-center px-6 py-3 text-center text-sm font-semibold no-underline"
            >
              Return home
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center rounded-lg border-2 border-gold-metallic/50 px-6 py-3 text-center text-sm font-semibold text-gold-metallic transition-colors hover:bg-gold-metallic/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
