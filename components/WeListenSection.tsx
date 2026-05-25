'use client'

import { useEffect, useRef } from 'react'

export default function WeListenSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="mb-8 glass-card dark-container rounded-2xl overflow-hidden">
          <div className="relative h-64 overflow-hidden md:h-96">
            <img
              src="/home/we-listen.jpg"
              alt="We Listen. We Care. - Empathy and Support"
              className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80"
                aria-hidden
              />
              <div className="relative z-10 px-4 text-center">
                <h2 className="mb-4 text-4xl font-bold keep-gold-text md:text-5xl [text-shadow:0_2px_14px_rgba(0,0,0,0.85)]">
                  We Listen. We Care.
                </h2>
                <p className="text-2xl font-medium leading-snug keep-light-text md:text-3xl [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
                  Let's Build a Brighter Future for Migrants — Together!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
            Let us build a better future together—where the dream of migration begins with knowledge, not fear. At GCMA, we believe every journey deserves clarity, honesty, and trust. By promoting awareness and standing firmly against scams and fraudulent practices, we help individuals take their first steps toward migration with confidence. Together, we create pathways rooted in truth, safety, and responsibility, ensuring that hope is guided by information and aspirations are protected from deception.
          </p>
        </div>
      </div>
    </section>
  )
}
