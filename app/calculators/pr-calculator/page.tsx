'use client'

import { useState } from 'react'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import type { CanadianEducationKey, CanadianWorkKey, EducationKey, ForeignWorkKey } from '@/lib/crs-express-entry'
import {
  agePoints,
  canadianAdditionalEducationPoints,
  canadianWorkCorePoints,
  educationCorePoints,
  firstOfficialLanguagePointsPerAbility,
  frenchAdditionalPointsFromEnglishClbs,
  frenchAdditionalPointsValue,
  provincialNominationPoints,
  secondOfficialLanguageTotal,
  siblingPoints,
  skillTransferabilityPoints,
  spouseCanadianWorkPoints,
  spouseEducationPoints,
  spouseFirstLanguagePointsPerAbility,
} from '@/lib/crs-express-entry'

const CLB_SCORE_KEYS = ['clb-4', 'clb-5', 'clb-6', 'clb-7', 'clb-8', 'clb-9', 'clb-10'] as const

function clbKeyToLevel(key: string): number {
  if (!key) return 0
  const n = parseInt(key.replace(/^clb-/, ''), 10)
  return Number.isFinite(n) ? n : 0
}

const SECOND_CLB_OPTIONS = ['', '4', '5', '6', '7', '8', '9', '10'] as const

function parseSecondClb(v: string): number {
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : 0
}

export default function PRCalculatorPage() {
  const [age, setAge] = useState('')
  const [education, setEducation] = useState<EducationKey | ''>('')
  const [workExperience, setWorkExperience] = useState<ForeignWorkKey>('')
  const [firstClbKey, setFirstClbKey] = useState('')
  const [secondClbUniform, setSecondClbUniform] = useState('')
  const [maritalStatus, setMaritalStatus] = useState<'single' | 'married'>('single')
  const [spouseEducation, setSpouseEducation] = useState<EducationKey | ''>('')
  const [spouseClbKey, setSpouseClbKey] = useState('')
  const [spouseCanadianWork, setSpouseCanadianWork] = useState<CanadianWorkKey>('')
  const [provincialNomination, setProvincialNomination] = useState(false)
  const [canadianEducation, setCanadianEducation] = useState<CanadianEducationKey>('')
  const [canadianWorkExperience, setCanadianWorkExperience] = useState<CanadianWorkKey>('')
  const [siblingInCanada, setSiblingInCanada] = useState(false)
  const [frenchNclc7, setFrenchNclc7] = useState(false)
  const [result, setResult] = useState<number | null>(null)

  const calculatePRPoints = () => {
    const withSpouse = maritalStatus === 'married'
    const ageNum = parseInt(age, 10) || 0
    const c = clbKeyToLevel(firstClbKey)
    const firstTuple: [number, number, number, number] = [c, c, c, c]

    let points = 0
    points += agePoints(ageNum, withSpouse)
    points += educationCorePoints(education, withSpouse)
    points += canadianWorkCorePoints(canadianWorkExperience, withSpouse)

    const perSkill = firstOfficialLanguagePointsPerAbility(c, withSpouse)
    points += perSkill * 4

    const s = parseSecondClb(secondClbUniform)
    points += secondOfficialLanguageTotal([s, s, s, s], withSpouse)

    if (withSpouse) {
      points += spouseEducationPoints(spouseEducation)
      const sc = clbKeyToLevel(spouseClbKey)
      points += spouseFirstLanguagePointsPerAbility(sc) * 4
      points += spouseCanadianWorkPoints(spouseCanadianWork)
    }

    points += skillTransferabilityPoints({
      education,
      foreignWork: workExperience,
      canadianWork: canadianWorkExperience,
      firstLangCLB: firstTuple,
    })

    points += canadianAdditionalEducationPoints(canadianEducation)
    points += provincialNominationPoints(provincialNomination)
    points += siblingPoints(siblingInCanada)

    const frenchScenario = frenchAdditionalPointsFromEnglishClbs(frenchNclc7, firstTuple)
    points += frenchAdditionalPointsValue(frenchScenario)

    setResult(points)
  }

  return (
    <main className="relative min-h-screen">
      <HexagonBackground />

      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gold-metallic mb-4">
              PR points calculator
            </h1>
            <p className="text-lg text-white">
              Estimate your Express Entry Comprehensive Ranking System (CRS) score from IRCC&apos;s published tables.
            </p>
            <p className="text-sm text-white/70 mt-3 max-w-2xl mx-auto">
              Not affiliated with IRCC. CRS job offer points ended March 25, 2025. For binding results, use the official
              CRS questionnaire on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html"
                className="text-gold-metallic underline hover:text-gold-bright"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canada.ca
              </a>
              . First official language assumes the same CLB in all four skills (use the Canada IELTS calculator for
              per-skill scores).
            </p>
          </div>

          <div className="rounded-2xl border border-gold-metallic/40 bg-[#333333]/70 backdrop-blur-sm shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                  placeholder="Enter your age"
                  min="18"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Education level</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value as EducationKey | '')}
                  className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                >
                  <option value="">Select education level</option>
                  <option value="high-school">Secondary diploma (high school)</option>
                  <option value="one-year-diploma">One-year post-secondary program</option>
                  <option value="two-year-diploma">Two-year post-secondary program</option>
                  <option value="bachelors">
                    Bachelor&apos;s degree or three-or-more-year post-secondary program
                  </option>
                  <option value="two-degrees">
                    Two or more certificates/diplomas (one program of three+ years)
                  </option>
                  <option value="masters">
                    Master&apos;s, or listed professional degree (licensed profession)
                  </option>
                  <option value="phd">Doctoral (Ph.D.)</option>
                </select>
              </div>

              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Foreign skilled work experience</label>
                <select
                  value={workExperience}
                  onChange={(e) => setWorkExperience(e.target.value as ForeignWorkKey)}
                  className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                >
                  <option value="">None or less than one year</option>
                  <option value="1-year">1 year</option>
                  <option value="2-years">2 years</option>
                  <option value="3-years">3 years</option>
                  <option value="4-years">4 years</option>
                  <option value="5-years">5 years or more</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold-metallic font-semibold mb-2">
                    First official language — CLB (all four skills)
                  </label>
                  <select
                    value={firstClbKey}
                    onChange={(e) => setFirstClbKey(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                  >
                    <option value="">Select CLB level</option>
                    {CLB_SCORE_KEYS.map((k) => (
                      <option key={k} value={k}>
                        CLB {k.replace('clb-', '')}
                        {k === 'clb-10' ? '+' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gold-metallic font-semibold mb-2">
                    Second official language — CLB (all four skills, optional)
                  </label>
                  <select
                    value={secondClbUniform}
                    onChange={(e) => setSecondClbUniform(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                  >
                    <option value="">Not claiming</option>
                    {SECOND_CLB_OPTIONS.filter((o) => o !== '').map((o) => (
                      <option key={o} value={o}>
                        CLB {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Marital status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value as 'single' | 'married')}
                  className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                >
                  <option value="single">Single / no spouse or partner on the application</option>
                  <option value="married">Spouse or common-law partner is accompanying (not a Canadian citizen or PR)</option>
                </select>
              </div>

              {maritalStatus === 'married' && (
                <>
                  <div>
                    <label className="block text-gold-metallic font-semibold mb-2">Spouse — education</label>
                    <select
                      value={spouseEducation}
                      onChange={(e) => setSpouseEducation(e.target.value as EducationKey | '')}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                    >
                      <option value="">Select spouse education</option>
                      <option value="high-school">Secondary diploma</option>
                      <option value="one-year-diploma">One-year program</option>
                      <option value="two-year-diploma">Two-year program</option>
                      <option value="bachelors">Bachelor&apos;s or three+ year program</option>
                      <option value="two-degrees">Two or more credentials (one three+ years)</option>
                      <option value="masters">Master&apos;s or listed professional degree</option>
                      <option value="phd">Doctoral (Ph.D.)</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gold-metallic font-semibold mb-2">
                        Spouse — first official language (same CLB all skills)
                      </label>
                      <select
                        value={spouseClbKey}
                        onChange={(e) => setSpouseClbKey(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      >
                        <option value="">—</option>
                        {CLB_SCORE_KEYS.map((k) => (
                          <option key={k} value={k}>
                            CLB {k.replace('clb-', '')}
                            {k === 'clb-10' ? '+' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gold-metallic font-semibold mb-2">
                        Spouse — Canadian work experience
                      </label>
                      <select
                        value={spouseCanadianWork}
                        onChange={(e) => setSpouseCanadianWork(e.target.value as CanadianWorkKey)}
                        className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      >
                        <option value="">None or less than one year</option>
                        <option value="1-year">1 year</option>
                        <option value="2-years">2 years</option>
                        <option value="3-years">3 years</option>
                        <option value="4-years">4 years</option>
                        <option value="5-years">5 years or more</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-4 pt-4 border-t border-gold-metallic/20">
                <h3 className="text-xl font-bold text-gold-metallic">Additional points</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provincialNomination}
                      onChange={(e) => setProvincialNomination(e.target.checked)}
                      className="w-5 h-5 rounded border-gold-metallic/40 bg-[#333333]/50 text-gold-metallic focus:ring-gold-metallic"
                    />
                    <span>Provincial or territorial nomination (600 points)</span>
                  </label>
                  <div>
                    <label className="block text-gold-metallic font-semibold mb-2">Canadian post-secondary education</label>
                    <select
                      value={canadianEducation}
                      onChange={(e) => setCanadianEducation(e.target.value as CanadianEducationKey)}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                    >
                      <option value="">None</option>
                      <option value="1-2-years">Credential of one or two years (15 points)</option>
                      <option value="3-plus-years">Credential of three years or longer (30 points)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gold-metallic font-semibold mb-2">Canadian work experience</label>
                    <select
                      value={canadianWorkExperience}
                      onChange={(e) => setCanadianWorkExperience(e.target.value as CanadianWorkKey)}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                    >
                      <option value="">None or less than one year</option>
                      <option value="1-year">1 year</option>
                      <option value="2-years">2 years</option>
                      <option value="3-years">3 years</option>
                      <option value="4-years">4 years</option>
                      <option value="5-years">5 years or more</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={siblingInCanada}
                      onChange={(e) => setSiblingInCanada(e.target.checked)}
                      className="w-5 h-5 rounded border-gold-metallic/40 bg-[#333333]/50 text-gold-metallic focus:ring-gold-metallic"
                    />
                    <span>Brother or sister in Canada (citizen or PR, 18+) — 15 points</span>
                  </label>
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={frenchNclc7}
                      onChange={(e) => setFrenchNclc7(e.target.checked)}
                      className="w-5 h-5 rounded border-gold-metallic/40 bg-[#333333]/50 text-gold-metallic focus:ring-gold-metallic"
                    />
                    <span>
                      French: NCLC 7+ in all four skills — 25 or 50 points depending on first-language CLBs above
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={calculatePRPoints}
                className="w-full bg-gold-metallic hover:bg-gold-bright text-black font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Calculate PR points
              </button>

              {result !== null && (
                <div className="mt-6 p-6 rounded-lg bg-gold-metallic/10 border border-gold-metallic/40 text-center">
                  <p className="text-gold-metallic font-semibold mb-2">Estimated CRS score</p>
                  <p className="text-4xl font-bold text-[#0f0c14]">{result} points</p>
                  <p className="mt-4 text-sm text-[#0f0c14]/85">
                    {result >= 470
                      ? 'Strong score range for many draws — confirm with the official CRS tool.'
                      : result >= 400
                        ? 'Competitive in some scenarios — language, work, or nomination may still help.'
                        : 'Explore improving language, education, Canadian experience, or a nomination.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
