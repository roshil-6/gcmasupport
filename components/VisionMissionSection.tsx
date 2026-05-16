'use client'

import { useEffect, useRef } from 'react'

export default function VisionMissionSection() {
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gold-metallic mb-12 text-center">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="glass-card dark-container rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/about/mission.jpg"
                alt="Mission - Empowering Migrants and Human Rights"
                className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/45">
                <h3 className="text-2xl md:text-3xl font-bold text-gold-metallic text-center px-4 drop-shadow-lg">
                  Mission
                </h3>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-white text-lg leading-relaxed">
                Empowering migrants, promoting migration awareness, and advocating for human
                rights to build a more inclusive and compassionate world.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-card dark-container rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/about/vision.jpg"
                alt="Vision - Global Leadership and Migration Awareness"
                className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/45">
                <h3 className="text-2xl md:text-3xl font-bold text-gold-metallic text-center px-4 drop-shadow-lg">
                  Vision
                </h3>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-white text-lg leading-relaxed">
                To be a leading global organization in migration awareness, support, and advocacy
                — fostering understanding, respect, and dignity for all migrants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
