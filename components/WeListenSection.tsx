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
        <div className="mb-8 glass-card rounded-2xl overflow-hidden">
          <div className="relative h-64 overflow-hidden md:h-96">
            <img
              src="/home/we-listen.jpg"
              alt="We Listen. We Care. - Empathy and Support"
              className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/50">
              <div className="text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gold-metallic mb-4 drop-shadow-lg">
                  We Listen. We Care.
                </h2>
                <p className="text-2xl md:text-3xl text-white font-light drop-shadow-md">
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
