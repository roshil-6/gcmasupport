'use client'

import HexagonBackground from '@/components/HexagonBackground'
import AswasabhavanVisitPhoto from '@/components/AswasabhavanVisitPhoto'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function GCMAProjectsPage() {
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
    <main className="relative min-h-screen">
      <HexagonBackground />

      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors text-sm md:text-base"
          >
            Back to Home
          </Link>
          <span className="text-xs md:text-sm text-white">GCMA Projects</span>
        </div>
      </nav>

      {/* Hero Section - GCMA Projects */}
      <section
        ref={sectionRef}
        className="py-8 md:py-12 px-4 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-metallic drop-shadow-md">
              GCMA Projects
            </h1>
            <p className="text-white mt-3 text-lg font-medium">
              Empowering communities through humanitarian initiatives
            </p>
            <p className="text-black mt-2 text-base font-medium">
              Our flagship shelter and rehabilitation initiative
            </p>
          </div>

          {/* Featured project story — layout inspired by charity event posts (image, headline, body) */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-gold-metallic/35 bg-white shadow-xl">
            <p className="bg-[#f9f2e7] px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#35063e] md:px-6">
              Featured story
            </p>
            <div className="flex justify-center bg-[#ece8df] px-4 pt-4 md:px-8 md:pt-6">
              <AswasabhavanVisitPhoto />
            </div>
            <article className="space-y-4 px-5 py-8 text-[#333333] md:px-10 md:py-10 md:text-lg leading-relaxed">
              <h2 className="text-xl font-bold text-[#35063e] md:text-2xl leading-snug">
                Project: Aswasabhavan Visit – Charity &amp; Social Service Initiative
              </h2>
              <p>
                A team of 6 members had the privilege of visiting Aswasabhavan, Fort Kochi, after receiving prior
                approval from Sister Fabiola, lovingly known as the &ldquo;Mother Teresa of Kochi.&rdquo; Originally
                from Italy, Sister Fabiola has dedicated her life to caring for poor and needy children in Kerala with
                unconditional love and compassion.
              </p>
              <p>
                During our visit, we met nearly 75 children living there happily and peacefully. Speaking with some of
                them, we were truly delighted to know that they are studying in some of the best schools in the city.
                While a few children are supported by sponsors, many are still waiting for helping hands and support.
              </p>
              <p>
                What touched our hearts the most was the beautiful bond among the children. They treated one another
                like siblings, and the sisters there were truly like mothers to them. Despite the difficult situations
                many of these children have faced — some abandoned due to financial struggles, some separated from
                parents for safety reasons through court intervention, and many with painful life stories — every
                child carried a smile filled with hope and happiness.
              </p>
              <p>
                Not once did we hear complaints about what they lacked. Instead, we witnessed gratitude, innocence,
                love, and incredible strength.
              </p>
              <p>
                This visit reminded us that true happiness does not come from wealth, but from love, care, and a sense
                of belonging.
              </p>
              <p className="font-medium text-[#35063e]">
                We extend our heartfelt respect and appreciation to Sister Fabiola and the entire team at Aswasabhavan
                for their selfless dedication to humanity.
              </p>
            </article>
          </div>

          {/* Video Player */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-gold-metallic/30 shadow-xl">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-video"
              poster="/logo_statue.png"
            >
              <source src="/Aswasabhavan.MOV" type="video/quicktime" />
              <source src="/Aswasabhavan.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description Cards */}
          <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl p-6 md:p-8">
            <p className="text-[#4a4238] text-lg leading-relaxed mb-6 text-center">
              Aswasabhavan is our flagship shelter and rehabilitation initiative. This project provides safe accommodation, medical care, and emotional support to vulnerable individuals who need assistance. The facility serves as a beacon of hope, offering comprehensive care and helping residents rebuild their lives with dignity.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gold-metallic/10 rounded-xl p-6 border border-gold-metallic/30">
                <h4 className="text-xl font-semibold text-[#6e531d] mb-3">Project Goals</h4>
                <ul className="space-y-2 text-[#0f0c14]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6e531d] mt-1 font-bold">✓</span>
                    <span>Provide safe and secure shelter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6e531d] mt-1 font-bold">✓</span>
                    <span>Offer medical and psychological support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6e531d] mt-1 font-bold">✓</span>
                    <span>Facilitate rehabilitation and reintegration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6e531d] mt-1 font-bold">✓</span>
                    <span>Ensure dignity and human rights protection</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gold-metallic/10 rounded-xl p-6 border border-gold-metallic/30">
                <h4 className="text-xl font-semibold text-[#6e531d] mb-3">Impact</h4>
                <p className="mb-4 text-[#0f0c14]">
                  Through Aswasabhavan, we have touched hundreds of lives, providing hope and a pathway to dignity. Our dedicated team works tirelessly to ensure every resident receives personalized care and support.
                </p>
                <p className="text-[#0f0c14]">
                  The project stands as a testament to our commitment to humanitarian service and social welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 md:py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl p-8 md:p-12">
            <div className="space-y-6 text-[#4a4238] leading-relaxed font-normal">
              <h2 className="text-2xl md:text-3xl font-bold text-[#6e531d] text-center mb-6">
                GCMA Projects & Initiatives
              </h2>
              <p className="text-lg text-center">
                The Global Council for Migration Awareness and Social Welfare (GCMA) spearheads various humanitarian projects aimed at empowering communities, protecting migrants, and providing essential social welfare services. Our projects are designed to create sustainable impact and foster dignity for all individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d] mb-12 text-center">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1: Migration Awareness */}
            <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/projects/migration-awareness.jpg"
                  alt="Migration Awareness Program"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#6e531d] mb-3">Migration Awareness</h4>
                <p className="text-[#4a4238] text-sm leading-relaxed">
                  Comprehensive education programs to help migrants understand legal pathways, avoid fraud, and make informed decisions about their journey.
                </p>
              </div>
            </div>

            {/* Program 2: Nursing Career Support */}
            <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/projects/nursing-career.jpg"
                  alt="Nursing Career Support"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#6e531d] mb-3">Nursing Career Support</h4>
                <p className="text-[#4a4238] text-sm leading-relaxed">
                  Specialized guidance for nurses seeking global registration and employment opportunities in Australia, Canada, UK, Germany, and more.
                </p>
              </div>
            </div>

            {/* Program 3: English Education */}
            <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/projects/english-education.jpg"
                  alt="English Education Program"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#6e531d] mb-3">English Education</h4>
                <p className="text-[#4a4238] text-sm leading-relaxed">
                  Free and subsidized English speaking classes for government school students, private school students, and adults preparing for migration.
                </p>
              </div>
            </div>

            {/* Program 4: Charity Support */}
            <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/projects/charity-support.jpg"
                  alt="Charity Support Program"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#6e531d] mb-3">Charity Support</h4>
                <p className="text-[#4a4238] text-sm leading-relaxed">
                  Direct assistance to vulnerable individuals and families through food programs, healthcare support, and emergency relief initiatives.
                </p>
              </div>
            </div>

            {/* Program 5: Student Guidance */}
            <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/projects/student-guidance.jpg"
                  alt="Student Guidance Program"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#6e531d] mb-3">Student Guidance</h4>
                <p className="text-[#4a4238] text-sm leading-relaxed">
                  Ethical counseling for students planning to study abroad, including university selection, scholarship information, and fraud prevention.
                </p>
              </div>
            </div>

            {/* Program 6: Community Outreach */}
            <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden hover:border-gold-metallic/60 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/projects/community-outreach.jpg"
                  alt="Community Outreach Program"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#6e531d] mb-3">Community Outreach</h4>
                <p className="text-[#4a4238] text-sm leading-relaxed">
                  Building stronger communities through volunteer programs, skill development workshops, and social welfare initiatives at the grassroots level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - GCMA Overall Vision */}
      <section className="py-12 md:py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gold-metallic/40 shadow-xl rounded-2xl overflow-hidden">
            {/* Vision Header */}
            <div className="bg-gradient-to-r from-gold-metallic/20 to-gold-metallic/5 p-6 md:p-8 border-b border-gold-metallic/20">
              <h3 className="text-2xl md:text-3xl font-bold text-[#6e531d] text-center">
                Vision of GCMA
              </h3>
              <p className="text-[#4a4238] text-center mt-2 text-base">
                Our commitment to a better world
              </p>
            </div>

            {/* Vision Content */}
            <div className="p-6 md:p-8">
              <p className="text-[#4a4238] text-lg text-center leading-relaxed mb-8 max-w-4xl mx-auto">
                To create a world where migration is safe, informed, and dignified for everyone. We envision a global community where human rights are protected, social welfare is prioritized, and every individual has access to ethical guidance and support for their journey abroad.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Global Reach */}
                <div className="bg-gold-metallic/10 rounded-xl overflow-hidden border border-gold-metallic/20">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="/projects/vision-global-reach.jpg"
                      alt="Global Reach"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-[#6e531d] mb-2">Global Reach</h4>
                    <p className="text-sm leading-relaxed text-[#0f0c14]/85">Supporting migrants across continents with localized expertise</p>
                  </div>
                </div>

                {/* Human Rights */}
                <div className="bg-gold-metallic/10 rounded-xl overflow-hidden border border-gold-metallic/20">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="/projects/vision-human-rights.jpg"
                      alt="Human Rights"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-[#6e531d] mb-2">Human Rights</h4>
                    <p className="text-sm leading-relaxed text-[#0f0c14]/85">Championing dignity and protection for all individuals</p>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-gold-metallic/10 rounded-xl overflow-hidden border border-gold-metallic/20">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src="/projects/vision-education.jpg"
                      alt="Education"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 to-transparent" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-[#6e531d] mb-2">Education</h4>
                    <p className="text-sm leading-relaxed text-[#0f0c14]/85">Empowering through knowledge and awareness programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#6e531d] mb-4">
            Join Our Mission
          </h3>
          <p className="text-[#4a4238] text-lg mb-8">
            Together, we can build a more compassionate world. Your support helps us continue our vital work in migration awareness and social welfare.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-metallic text-black px-8 py-4 rounded-full font-semibold hover:bg-gold-bright transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  )
}
