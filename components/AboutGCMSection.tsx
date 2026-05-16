'use client'

import { useEffect, useRef } from 'react'

export default function AboutGCMSection() {
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
      id="about"
      ref={sectionRef}
      className="py-12 md:py-16 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="mb-8 glass-card rounded-2xl overflow-hidden">
          <div className="relative h-64 overflow-hidden md:h-96">
            <img
              src="/about/about-gcm.jpg"
              alt="About GCMA - Humanitarian Organization"
              className="absolute left-0 right-0 top-0 h-[calc(100%+3px)] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-px left-0 right-0 top-0 flex items-center justify-center bg-[#333333]/50">
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center px-4 drop-shadow-lg">
                About GCMA
              </h2>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="space-y-6 text-white leading-relaxed font-normal">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gold-metallic mb-4">Who We Are</h3>
              <p className="text-lg">
                The Global Council for Migration Awareness and Social Welfare (GCMA) is a humanitarian and welfare-focused body dedicated to supporting individuals who aspire to migrate by ensuring they are informed, aware, and protected from scams, fraud, and exploitation during the migration process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#333333]/30 rounded-xl p-6 border border-gold-metallic/30">
                <h4 className="text-xl font-semibold text-gold-metallic mb-3">Our Authority</h4>
                <p className="text-white">
                  GCMA authorizes the National Human Rights and Humanitarian Federation (NHRF) to report migration-related scams and fraudulent practices as a community welfare venture. This initiative aims to prevent individuals from falling prey to unethical agents, false promises, and illegal migration pathways while promoting transparency and responsible practices.
                </p>
              </div>
              <div className="bg-[#333333]/30 rounded-xl p-6 border border-gold-metallic/30">
                <h4 className="text-xl font-semibold text-gold-metallic mb-3">Our Principles</h4>
                <p className="text-white">
                  Our work is grounded in the principles of dignity, fairness, accountability, and public awareness. We focus on education, guidance, and advocacy to help people pursue safe, legal, and informed migration pathways, recognizing migration as a legitimate aspiration and a potential force for positive social and economic development.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-metallic/10 to-gold-metallic/5 rounded-xl p-6 border border-gold-metallic/30">
              <h4 className="text-xl font-semibold text-gold-metallic mb-3">Our Impact</h4>
              <p className="text-white mb-4">
                Through our comprehensive programs, we have helped thousands of individuals navigate the complexities of migration, provided educational support to underprivileged students, and offered medical assistance to those in need. Our commitment extends beyond services—we build communities, foster understanding, and create pathways for positive change.
              </p>
              <ul className="space-y-2 text-white">
                <li className="flex items-start gap-2">
                  <span className="text-gold-metallic mt-1">✓</span>
                  <span>Migration awareness and scam prevention initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-metallic mt-1">✓</span>
                  <span>Educational empowerment programs for students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-metallic mt-1">✓</span>
                  <span>Medical assistance for financially vulnerable patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-metallic mt-1">✓</span>
                  <span>English language training and communication skills development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
