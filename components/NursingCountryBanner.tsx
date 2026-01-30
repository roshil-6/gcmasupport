'use client'

import Image from 'next/image'

export default function NursingCountryBanner({
  country,
  subtitle,
  flagSrc,
  bannerSrc,
}: {
  country: string
  subtitle: string
  flagSrc: string
  bannerSrc: string
}) {
  return (
    <div className="relative w-full h-[260px] md:h-[340px] rounded-3xl overflow-hidden shadow-2xl">
      <Image src={bannerSrc} alt={`Nursing banner - ${country}`} fill className="object-cover" priority />
      {/* Keep image visible: use lighter overlays (no heavy darkening) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="w-full px-5 md:px-10 pb-6 md:pb-0 max-w-7xl mx-auto">
          {/* Simple light label (no glassy effect) */}
          <div className="inline-flex items-center gap-4 rounded-2xl bg-[#f9f2e7]/95 border border-gold-metallic/55 px-5 py-4 shadow-xl">
            <div className="relative w-14 h-10 md:w-16 md:h-12 shrink-0">
              <Image src={flagSrc} alt={`${country} flag`} fill className="object-contain" />
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1b2d]">
                Nursing in {country}
              </h1>
              <p className="text-sm md:text-lg text-gold-metallic font-semibold">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

