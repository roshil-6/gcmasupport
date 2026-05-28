import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import HomeSeoIntro from '@/components/HomeSeoIntro'
import JsonLd from '@/components/JsonLd'
import Link from 'next/link'
import CoreServicesSection from '@/components/CoreServicesSection'
import { webPageJsonLd } from '@/lib/seo-jsonld'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/seo'

import HexagonBackground from '@/components/HexagonBackground'
const StudyAbroadSection = dynamic(() => import('@/components/StudyAbroadSection'))
const BeliefStatementSection = dynamic(() => import('@/components/BeliefStatementSection'))
const WeListenSection = dynamic(() => import('@/components/WeListenSection'))
const HumanitarianAidSection = dynamic(() => import('@/components/HumanitarianAidSection'))
const BreakTheSilenceSection = dynamic(() => import('@/components/BreakTheSilenceSection'))

export default function Home() {
  const homeWebPage = webPageJsonLd({
    path: '/',
    title: `${SITE_NAME} | Justice, Protection & Empowerment`,
    description: SITE_DESCRIPTION,
  })

  return (
    <main className="relative min-h-screen">
      <JsonLd data={homeWebPage} />
      <HexagonBackground />
      <Hero />
      <HomeSeoIntro />
      <CoreServicesSection />
      <StudyAbroadSection />
      <BeliefStatementSection />
      <WeListenSection />
      <HumanitarianAidSection />
      <BreakTheSilenceSection />

      {/* Footer with Legal Disclosure */}
      <footer className="relative z-10 py-12 px-4 border-t border-gold-metallic/20">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="glass-card rounded-lg p-6 max-w-3xl mx-auto space-y-3 text-left">
            <p className="text-gold-metallic font-semibold">Legal Disclosure</p>
            <p className="text-sm text-white leading-relaxed">
              GCMA authorizes the National Human Rights and Humanitarian Federation (NHRF) to report migration-related scams and fraudulent practices as a community welfare venture.
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              GCMA publishes migration awareness resources for study abroad applicants, overseas nurses,
              skilled workers, and families seeking lawful visa, travel, and settlement pathways.
            </p>
          </div>
          <nav aria-label="Site map" className="mt-6 text-sm">
            <p className="text-gold-metallic/80 font-semibold mb-3">Explore</p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-white/80">
              <li><Link href="/about" className="hover:text-gold-metallic">About</Link></li>
              <li><Link href="/services" className="hover:text-gold-metallic">Services</Link></li>
              <li><Link href="/study-abroad" className="hover:text-gold-metallic">Study abroad</Link></li>
              <li><Link href="/nursing-registration" className="hover:text-gold-metallic">Nursing registration</Link></li>
              <li><Link href="/migration-advice" className="hover:text-gold-metallic">Migration advice</Link></li>
              <li><Link href="/charity-support" className="hover:text-gold-metallic">Charity support</Link></li>
              <li><Link href="/contact" className="hover:text-gold-metallic">Contact</Link></li>
            </ul>
          </nav>
          <p className="text-gray-400 mt-6">
            © {new Date().getFullYear()} Global Council for Migration Awareness and Social Welfare (GCMA)
          </p>

          {/* Admin Login Link - Subtle and unobtrusive */}
          <div className="mt-8 pt-4 border-t border-gold-metallic/10">
            <Link
              href="/admin/login"
              className="text-xs text-gray-600 hover:text-gold-metallic/70 transition-colors inline-block"
            >
              admin login
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
