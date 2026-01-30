import HexagonBackground from '@/components/HexagonBackground'
import GlobalNursingRegistrationSection from '@/components/GlobalNursingRegistrationSection'
import Link from 'next/link'

export default function NursingRegistrationPage() {
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
          <span className="text-xs md:text-sm text-gray-300">
            Global Nursing Registration
          </span>
        </div>
      </nav>

      <GlobalNursingRegistrationSection />
    </main>
  )
}

