'use client'

import { useEffect, useRef } from 'react'

export default function BeliefStatementSection() {
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
              src="/home/belief-statement.jpg"
              alt="Migration as a Force for Good - Cultural Diversity"
              className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/50">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic keep-gold-text text-center px-4 drop-shadow-lg">
                Our Core Philosophy
              </h2>
            </div>
          </div>
        </div>

        <div className="glass-card dark-container rounded-2xl p-8 md:p-12">
          <div className="space-y-6 text-gold-metallic leading-relaxed">
            <p>
              GCMA believes that meaningful social change begins with access, awareness, and participation. We are committed to creating affordable learning opportunities for government school students to develop English communication skills, empowering them to express their talents with confidence.
            </p>
            <p>
              <span className="text-gold-metallic font-semibold">GCMA provides platforms for both adults and children to actively practice social service</span> by participating in community programs that promote awareness, human ethics, dignity, and fundamental rights. <span className="text-gold-metallic font-semibold">By encouraging involvement in charitable initiatives and awareness-driven activities, we nurture responsible citizens and cultivate a culture of compassion, inclusion, and social responsibility.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
