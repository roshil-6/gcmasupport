'use client'

import { useState } from 'react'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

export default function CanadaPointsCalculatorPage() {
  const [age, setAge] = useState('')
  const [education, setEducation] = useState('')
  const [workExperience, setWorkExperience] = useState('')
  const [ieltsReading, setIeltsReading] = useState('')
  const [ieltsWriting, setIeltsWriting] = useState('')
  const [ieltsListening, setIeltsListening] = useState('')
  const [ieltsSpeaking, setIeltsSpeaking] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('single')
  const [provincialNomination, setProvincialNomination] = useState(false)
  const [jobOffer, setJobOffer] = useState(false)
  const [canadianEducation, setCanadianEducation] = useState(false)
  const [canadianWorkExperience, setCanadianWorkExperience] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const getCLBLevel = (score: string): number => {
    const scoreNum = parseFloat(score) || 0
    if (scoreNum >= 8.5) return 10
    if (scoreNum >= 8.0) return 9
    if (scoreNum >= 7.5) return 8
    if (scoreNum >= 7.0) return 7
    if (scoreNum >= 6.5) return 6
    if (scoreNum >= 6.0) return 5
    if (scoreNum >= 5.5) return 4
    return 0
  }

  const getLanguagePoints = (clbLevel: number, skill: string): number => {
    const points: { [key: number]: { [key: string]: number } } = {
      4: { reading: 0, writing: 0, listening: 0, speaking: 0 },
      5: { reading: 1, writing: 1, listening: 1, speaking: 1 },
      6: { reading: 3, writing: 3, listening: 3, speaking: 3 },
      7: { reading: 5, writing: 5, listening: 5, speaking: 5 },
      8: { reading: 6, writing: 6, listening: 6, speaking: 6 },
      9: { reading: 6, writing: 6, listening: 6, speaking: 6 },
      10: { reading: 6, writing: 6, listening: 6, speaking: 6 }
    }
    return points[clbLevel]?.[skill] || 0
  }

  const calculatePoints = () => {
    let points = 0

    // Age points
    const ageNum = parseInt(age) || 0
    if (ageNum >= 18 && ageNum <= 35) {
      points += 110
    } else if (ageNum === 36) {
      points += 105
    } else if (ageNum === 37) {
      points += 99
    } else if (ageNum === 38) {
      points += 94
    } else if (ageNum === 39) {
      points += 88
    } else if (ageNum === 40) {
      points += 83
    } else if (ageNum === 41) {
      points += 77
    } else if (ageNum === 42) {
      points += 72
    } else if (ageNum === 43) {
      points += 66
    } else if (ageNum === 44) {
      points += 61
    }

    // Education points
    const educationPoints: { [key: string]: number } = {
      'high-school': 30,
      'one-year-diploma': 90,
      'two-year-diploma': 98,
      'bachelors': 120,
      'two-degrees': 128,
      'masters': 135,
      'phd': 150
    }
    points += educationPoints[education] || 0

    // Work experience points
    const workPoints: { [key: string]: number } = {
      '1-year': 40,
      '2-years': 53,
      '3-years': 64,
      '4-years': 72,
      '5-years': 80
    }
    points += workPoints[workExperience] || 0

    // Language points (IELTS)
    const readingCLB = getCLBLevel(ieltsReading)
    const writingCLB = getCLBLevel(ieltsWriting)
    const listeningCLB = getCLBLevel(ieltsListening)
    const speakingCLB = getCLBLevel(ieltsSpeaking)

    points += getLanguagePoints(readingCLB, 'reading')
    points += getLanguagePoints(writingCLB, 'writing')
    points += getLanguagePoints(listeningCLB, 'listening')
    points += getLanguagePoints(speakingCLB, 'speaking')

    // Additional factors
    if (provincialNomination) points += 600
    if (jobOffer) points += 200
    if (canadianEducation) points += 30
    if (canadianWorkExperience === '1-year') points += 40
    if (canadianWorkExperience === '2-years') points += 53
    if (canadianWorkExperience === '3-years') points += 64

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
            <p className="text-lg text-white">
              Calculate your Comprehensive Ranking System (CRS) score for Express Entry
            </p>
          </div>

          <div className="rounded-2xl border border-gold-metallic/40 bg-black/70 backdrop-blur-sm shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              {/* Age */}
              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                  placeholder="Enter your age"
                  min="18"
                  max="100"
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Education Level</label>
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School Diploma</option>
                  <option value="one-year-diploma">One-year post-secondary program</option>
                  <option value="two-year-diploma">Two-year post-secondary program</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="two-degrees">Two or more degrees/diplomas</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              {/* Work Experience */}
              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Foreign Work Experience</label>
                <select
                  value={workExperience}
                  onChange={(e) => setWorkExperience(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                >
                  <option value="">Select work experience</option>
                  <option value="1-year">1 year</option>
                  <option value="2-years">2 years</option>
                  <option value="3-years">3 years</option>
                  <option value="4-years">4 years</option>
                  <option value="5-years">5+ years</option>
                </select>
              </div>

              {/* IELTS Scores */}
              <div>
                <label className="block text-gold-metallic font-semibold mb-4">IELTS Scores (Enter band scores 0-9)</label>
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
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 - 9.0"
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
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 - 9.0"
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
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 - 9.0"
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
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                      placeholder="0.0 - 9.0"
                    />
                  </div>
                </div>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-gold-metallic font-semibold mb-2">Marital Status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                >
                  <option value="single">Single</option>
                  <option value="married">Married/Common-law</option>
                </select>
              </div>

              {/* Additional Factors */}
              <div className="space-y-4 pt-4 border-t border-gold-metallic/20">
                <h3 className="text-xl font-bold text-gold-metallic">Additional Factors</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provincialNomination}
                      onChange={(e) => setProvincialNomination(e.target.checked)}
                      className="w-5 h-5 rounded border-gold-metallic/40 bg-black/50 text-gold-metallic focus:ring-gold-metallic"
                    />
                    <span>Provincial Nomination (600 points)</span>
                  </label>
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={jobOffer}
                      onChange={(e) => setJobOffer(e.target.checked)}
                      className="w-5 h-5 rounded border-gold-metallic/40 bg-black/50 text-gold-metallic focus:ring-gold-metallic"
                    />
                    <span>Valid Job Offer (200 points)</span>
                  </label>
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={canadianEducation}
                      onChange={(e) => setCanadianEducation(e.target.checked)}
                      className="w-5 h-5 rounded border-gold-metallic/40 bg-black/50 text-gold-metallic focus:ring-gold-metallic"
                    />
                    <span>Canadian Education (30 points)</span>
                  </label>
                  <div>
                    <label className="block text-gold-metallic font-semibold mb-2">Canadian Work Experience</label>
                    <select
                      value={canadianWorkExperience}
                      onChange={(e) => setCanadianWorkExperience(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gold-metallic/40 text-white focus:outline-none focus:border-gold-metallic"
                    >
                      <option value="">No Canadian work experience</option>
                      <option value="1-year">1 year</option>
                      <option value="2-years">2 years</option>
                      <option value="3-years">3 years</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={calculatePoints}
                className="w-full bg-gold-metallic hover:bg-gold-bright text-black font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Calculate CRS Points
              </button>

              {result !== null && (
                <div className="mt-6 p-6 rounded-lg bg-gold-metallic/10 border border-gold-metallic/40 text-center">
                  <p className="text-gold-metallic font-semibold mb-2">Your CRS Score</p>
                  <p className="text-4xl font-bold text-white">{result} points</p>
                  <p className="text-sm text-gray-300 mt-4">
                    {result >= 470 ? 'Excellent! You have a strong chance of receiving an ITA.' : 
                     result >= 400 ? 'Good score! Consider improving language skills or gaining more experience.' :
                     'Consider improving your profile to increase your CRS score.'}
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
