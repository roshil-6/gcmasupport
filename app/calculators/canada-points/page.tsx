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
  ieltsBandToCLB,
  provincialNominationPoints,
  secondOfficialLanguageTotal,
  siblingPoints,
  skillTransferabilityPoints,
  spouseCanadianWorkPoints,
  spouseEducationPoints,
  spouseFirstLanguagePointsPerAbility,
} from '@/lib/crs-express-entry'

const CLB_OPTIONS = ['', '4', '5', '6', '7', '8', '9', '10'] as const

function parseClb(v: string): number {
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : 0
}

export default function CanadaPointsCalculatorPage() {
  const [age, setAge] = useState('')
  const [education, setEducation] = useState<EducationKey | ''>('')
  const [workExperience, setWorkExperience] = useState<ForeignWorkKey>('')
  const [ieltsReading, setIeltsReading] = useState('')
  const [ieltsWriting, setIeltsWriting] = useState('')
  const [ieltsListening, setIeltsListening] = useState('')
  const [ieltsSpeaking, setIeltsSpeaking] = useState('')
  const [secondReading, setSecondReading] = useState('')
  const [secondWriting, setSecondWriting] = useState('')
  const [secondListening, setSecondListening] = useState('')
  const [secondSpeaking, setSecondSpeaking] = useState('')
  const [maritalStatus, setMaritalStatus] = useState<'single' | 'married'>('single')
  const [spouseEducation, setSpouseEducation] = useState<EducationKey | ''>('')
  const [spouseClb, setSpouseClb] = useState('')
  const [spouseCanadianWork, setSpouseCanadianWork] = useState<CanadianWorkKey>('')
  const [provincialNomination, setProvincialNomination] = useState(false)
  const [canadianEducation, setCanadianEducation] = useState<CanadianEducationKey>('')
  const [canadianWorkExperience, setCanadianWorkExperience] = useState<CanadianWorkKey>('')
  const [siblingInCanada, setSiblingInCanada] = useState(false)
  const [frenchNclc7, setFrenchNclc7] = useState(false)
  const [result, setResult] = useState<number | null>(null)

  const calculatePoints = () => {
    const withSpouse = maritalStatus === 'married'
    const ageNum = parseInt(age, 10) || 0

    let points = 0
    points += agePoints(ageNum, withSpouse)
    points += educationCorePoints(education, withSpouse)
    points += canadianWorkCorePoints(canadianWorkExperience, withSpouse)

    const clbR = ieltsBandToCLB('reading', ieltsReading)
    const clbW = ieltsBandToCLB('writing', ieltsWriting)
    const clbL = ieltsBandToCLB('listening', ieltsListening)
    const clbS = ieltsBandToCLB('speaking', ieltsSpeaking)

    points += firstOfficialLanguagePointsPerAbility(clbR, withSpouse)
    points += firstOfficialLanguagePointsPerAbility(clbW, withSpouse)
    points += firstOfficialLanguagePointsPerAbility(clbL, withSpouse)
    points += firstOfficialLanguagePointsPerAbility(clbS, withSpouse)

    const secTuple: [number, number, number, number] = [
      parseClb(secondReading),
      parseClb(secondWriting),
      parseClb(secondListening),
      parseClb(secondSpeaking),
    ]
    points += secondOfficialLanguageTotal(secTuple, withSpouse)

    if (withSpouse) {
      points += spouseEducationPoints(spouseEducation)
      const sc = parseClb(spouseClb)
      points +=
        spouseFirstLanguagePointsPerAbility(sc) * 4
      points += spouseCanadianWorkPoints(spouseCanadianWork)
    }

    points += skillTransferabilityPoints({
      education,
      foreignWork: workExperience,
      canadianWork: canadianWorkExperience,
      firstLangCLB: [clbR, clbW, clbL, clbS],
    })

    points += canadianAdditionalEducationPoints(canadianEducation)
    points += provincialNominationPoints(provincialNomination)
    points += siblingPoints(siblingInCanada)

    const frenchScenario = frenchAdditionalPointsFromEnglishClbs(frenchNclc7, [clbR, clbW, clbL, clbS])
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
              Canada CRS Points Calculator
            </h1>
            <p className="text-lg text-[#0f0c14]">
              Estimate your Comprehensive Ranking System (CRS) score for Express Entry using published IRCC criteria.
            </p>
            <p className="text-sm text-[#0f0c14]/85 mt-3 max-w-2xl mx-auto">
              This tool is not affiliated with IRCC. CRS job offer points were removed as of March 25, 2025. Use the
              official CRS tool on{' '}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html"
                className="text-gold-metallic underline hover:text-gold-bright"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canada.ca
              </a>{' '}
              for a formal score. IELTS scores should be from the General Training test.
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

              <div>
                <label className="block text-gold-metallic font-semibold mb-4">
                  First official language — IELTS General Training (0–9 per skill)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-2">Reading</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="9"
                      value={ieltsReading}
                      onChange={(e) => setIeltsReading(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 – 9.0"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Writing</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="9"
                      value={ieltsWriting}
                      onChange={(e) => setIeltsWriting(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 – 9.0"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Listening</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="9"
                      value={ieltsListening}
                      onChange={(e) => setIeltsListening(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 – 9.0"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Speaking</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      max="9"
                      value={ieltsSpeaking}
                      onChange={(e) => setIeltsSpeaking(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 – 9.0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gold-metallic font-semibold mb-2">
                  Second official language (optional) — CLB per skill
                </label>
                <p className="text-white/60 text-sm mb-3">Leave blank if you are not claiming a second language.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    [secondReading, setSecondReading, 'Reading CLB'],
                    [secondWriting, setSecondWriting, 'Writing CLB'],
                    [secondListening, setSecondListening, 'Listening CLB'],
                    [secondSpeaking, setSecondSpeaking, 'Speaking CLB'],
                  ].map(([val, setVal, label]) => (
                    <div key={label as string}>
                      <label className="block text-white text-sm mb-2">{label as string}</label>
                      <select
                        value={val as string}
                        onChange={(e) => (setVal as (v: string) => void)(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      >
                        <option value="">—</option>
                        {CLB_OPTIONS.filter((o) => o !== '').map((o) => (
                          <option key={o} value={o}>
                            CLB {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
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
                      <option value="">Select level</option>
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
                        value={spouseClb}
                        onChange={(e) => setSpouseClb(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#333333]/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      >
                        <option value="">—</option>
                        {CLB_OPTIONS.filter((o) => o !== '').map((o) => (
                          <option key={o} value={o}>
                            CLB {o}
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
                      French: NCLC 7+ in all four skills — awards 25 or 50 based on your first official language (English)
                      CLBs above
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={calculatePoints}
                className="w-full bg-gold-metallic hover:bg-gold-bright text-black font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Calculate CRS points
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
