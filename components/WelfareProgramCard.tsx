'use client'

import type { ReactNode } from 'react'
import ExplanationPanel, { ExplanationBox } from './ExplanationPanel'

type WelfareProgramCardProps = {
  id: string
  imageSrc: string
  imageAlt: string
  eyebrow: string
  headline: string
  title: string
  description: string
  highlights: string[]
  explanation: {
    title: string
    content: string
  }
  showExplanation: boolean
  onToggleExplanation: (open: boolean) => void
  applyLabel: string
  closeLabel: string
  isFormOpen: boolean
  onApplyToggle: () => void
  icon: ReactNode
  form: ReactNode
}

export default function WelfareProgramCard({
  id,
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  title,
  description,
  highlights,
  explanation,
  showExplanation,
  onToggleExplanation,
  applyLabel,
  closeLabel,
  isFormOpen,
  onApplyToggle,
  icon,
  form,
}: WelfareProgramCardProps) {
  return (
    <article
      id={id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gold-metallic/35 bg-white shadow-xl transition-colors hover:border-gold-metallic/65 scroll-mt-20"
    >
      <div
        className="relative h-52 md:h-56 cursor-pointer overflow-hidden"
        onClick={() => onToggleExplanation(!showExplanation)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onToggleExplanation(!showExplanation)
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View details about ${headline}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* -bottom-px + taller image: removes hairline gap where light page bg showed under overlay */}
        <div className="pointer-events-none absolute -bottom-px left-0 right-0 top-0 bg-gradient-to-t from-[#333333]/95 via-[#333333]/45 to-[#333333]/10" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-metallic/85 keep-gold-text">
              {eyebrow}
            </p>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white md:text-2xl keep-light-text">{headline}</h3>
              <ExplanationPanel
                title={explanation.title}
                content={explanation.content}
                onToggle={onToggleExplanation}
              />
            </div>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-metallic/50 bg-gold-metallic/15">
            {icon}
          </div>
        </div>
      </div>

      {showExplanation ? (
        <div className="border-b border-gold-metallic/20 bg-white px-6 pt-4">
          <ExplanationBox
            title={explanation.title}
            content={explanation.content}
            onClose={() => onToggleExplanation(false)}
          />
        </div>
      ) : null}

      <div className="flex flex-col border-t border-gold-metallic/20 bg-white p-5 sm:p-6 md:p-8">
        <h4 className="mb-3 text-xl font-semibold text-[#6e531d] md:text-2xl">{title}</h4>
        <p className="text-[#4a4238] mb-5 text-sm leading-relaxed md:text-base">{description}</p>

        <ul className="mb-6 space-y-2.5">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-metallic/20">
                <svg
                  className="h-3.5 w-3.5 text-[#6e531d]"
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
              <span className="text-[#4a4238] text-sm leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onApplyToggle}
          className={`mt-6 w-full min-h-[3rem] rounded-lg px-4 py-3 text-base font-semibold transition-all sm:min-h-0 sm:py-3 ${
            isFormOpen
              ? 'border border-gold-metallic/50 bg-transparent text-gold-metallic hover:border-gold-metallic hover:text-gold-bright'
              : 'bg-gold-metallic text-black shadow-lg hover:bg-gold-bright'
          }`}
        >
          {isFormOpen ? closeLabel : applyLabel}
        </button>

        {isFormOpen ? (
          <div className="mt-5 border-t border-gold-metallic/30 pt-5 sm:mt-6 sm:pt-6">
            <div className="welfare-card-form rounded-xl border border-gold-metallic/30 bg-[#f9f2e7]/30 p-4 sm:p-5 shadow-sm">
              {form}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  )
}
