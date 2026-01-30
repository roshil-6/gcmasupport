'use client'

import Image from 'next/image'

export type WhoCanApplyItem = {
  title: string
  detail: string
}

export default function WhoCanApplyBox({
  country,
  imageSrc = '/nursing/photos/1559757148-5c350d0d3c56.jpg',
  items,
}: {
  country: string
  imageSrc?: string
  items: WhoCanApplyItem[]
}) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic">Who can apply?</h2>
          <p className="text-sm md:text-base text-[#1f1b2d]">
            Eligibility guidance for {country}. Submit your profile and we’ll contact you with the next steps.
          </p>
        </div>
        <span className="inline-flex w-fit rounded-full bg-[#f9f2e7] border border-gold-metallic/50 px-4 py-2 text-sm font-semibold text-[#1f1b2d] shadow-sm">
          {country}
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Inline image card (not a full-width boxed section) */}
        <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl">
          <div className="relative h-56 md:h-72">
            <Image src={imageSrc} alt={`Who can apply - ${country}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
          </div>
          <div className="p-5">
            <p className="text-sm text-[#1f1b2d]">
              Quick check: meet the basics below, then apply with your CV and documents.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gold-metallic/35 bg-[#f9f2e7] shadow-xl p-5">
              <h3 className="text-base md:text-lg font-extrabold text-[#1f1b2d] mb-1">{it.title}</h3>
              <p className="text-sm md:text-base text-[#1f1b2d] leading-relaxed">{it.detail}</p>
            </div>
          ))}

          <div className="sm:col-span-2 rounded-2xl border border-gold-metallic/35 bg-[#f9f2e7] shadow-xl p-5">
            <p className="text-xs md:text-sm text-[#1f1b2d]">
              Note: Requirements vary by regulator and pathway. Submitting this form does not guarantee registration
              or employment; it allows our admin team to review your profile and contact you with guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

