'use client'

import Image from 'next/image'
import Link from 'next/link'

export type ShowcaseCardProps = {
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  title: string
  tagline?: string
  description?: string
  highlights?: string[]
  footnote?: string
  ctaLabel?: string
  ctaHref?: string
  ctaOnClick?: () => void
  className?: string
  href?: string
  imageFit?: 'cover' | 'contain'
}

function CardBody({
  tagline,
  description,
  highlights,
  footnote,
  ctaLabel,
  ctaHref,
  ctaOnClick,
}: Pick<
  ShowcaseCardProps,
  'tagline' | 'description' | 'highlights' | 'footnote' | 'ctaLabel' | 'ctaHref' | 'ctaOnClick'
>) {
  return (
    <div className="p-6 bg-[#333333]">
      {tagline ? (
        <p className="text-gold-metallic text-sm mb-3 font-semibold leading-relaxed">{tagline}</p>
      ) : null}
      {description ? (
        <p className="text-white text-base mb-4 leading-relaxed font-normal">{description}</p>
      ) : null}
      {highlights && highlights.length > 0 ? (
        <div className="mb-4">
          <p className="text-white text-sm mb-3 font-medium text-gold-metallic/80">Key Highlights:</p>
          <ul className="space-y-2.5">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold-metallic mt-0.5 flex-shrink-0"
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
                <span className="text-sm text-white font-medium leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {footnote ? (
        <div className="mb-5 pt-4 border-t border-gold-metallic/20">
          <p className="text-xs text-white/70 leading-relaxed">{footnote}</p>
        </div>
      ) : null}
      {ctaHref ? (
        <Link
          href={ctaHref}
          className="block w-full py-3 px-4 bg-gold-metallic hover:bg-gold-bright text-black font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-center"
        >
          {ctaLabel ?? 'Learn More'}
        </Link>
      ) : ctaOnClick ? (
        <button
          type="button"
          onClick={ctaOnClick}
          className="w-full rounded-lg border border-gold-metallic/50 bg-gold-metallic/15 px-4 py-3 font-semibold text-gold-metallic transition-all duration-200 hover:border-gold-metallic hover:bg-gold-metallic/25"
        >
          {ctaLabel ?? 'Learn More'}
        </button>
      ) : null}
    </div>
  )
}

export default function ShowcaseCard({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  tagline,
  description,
  highlights,
  footnote,
  ctaLabel,
  ctaHref,
  ctaOnClick,
  className = '',
  href,
  imageFit = 'cover',
}: ShowcaseCardProps) {
  const isFlagImage = imageFit === 'contain'

  const card = (
    <div
      className={`rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#333333] shadow-xl ${href ? 'hover:border-gold-metallic transition-all' : ''} ${className}`}
    >
      <div className="relative isolate h-48 w-full overflow-hidden" style={{ position: 'relative' }}>
        {isFlagImage ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            loading="lazy"
            className="object-cover object-center scale-[1.03]"
          />
        )}
        {isFlagImage ? (
          <>
            <div
              className="pointer-events-none absolute -bottom-px left-0 right-0 top-0 z-[1] bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              {eyebrow ? (
                <p className="mb-1 text-sm font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {eyebrow}
                </p>
              ) : null}
              <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                {title}
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="absolute -bottom-px left-0 right-0 top-0 bg-gradient-to-t from-[#333333]/95 via-[#333333]/70 to-[#333333]/35" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              {eyebrow ? (
                <p className="text-sm font-bold text-white mb-1 drop-shadow-2xl">{eyebrow}</p>
              ) : null}
              <h3 className="text-2xl font-extrabold text-white drop-shadow-2xl">{title}</h3>
            </div>
          </>
        )}
      </div>
      <CardBody
        tagline={tagline}
        description={description}
        highlights={highlights}
        footnote={footnote}
        ctaLabel={ctaLabel}
        ctaHref={href ? undefined : ctaHref}
        ctaOnClick={href ? undefined : ctaOnClick}
      />
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block">
        {card}
      </Link>
    )
  }

  return card
}
