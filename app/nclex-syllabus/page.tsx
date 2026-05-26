'use client'

import { useState } from 'react'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'

interface LessonDecision {
  icon: string
  text: string
}

interface SyllabusModule {
  id: number
  title: string
  weeks: string
  priority: string
  weight: string
  difficulty: 'foundation' | 'intermediate' | 'advanced' | 'exam'
  difficultyLabel: string
  learningObjectives: string[]
  lessonDecisions: LessonDecision[]
  nclexQuestionTypes: string[]
  gradientClass: string
}

const SYLLABUS_DATA: SyllabusModule[] = [
  {
    id: 1,
    title: 'Management of Care',
    weeks: '3 Weeks',
    priority: 'High Priority',
    weight: '17–19% NCLEX Weight',
    difficulty: 'intermediate',
    difficultyLabel: 'Intermediate',
    learningObjectives: [
      'Apply principles of delegation, supervision & assignment',
      'Understand legal, ethical & advocacy responsibilities',
      'Prioritize care using SBAR & QSEN frameworks',
      'Utilize resources: referrals, case management, continuity of care',
      'Coordinate interdisciplinary team communication',
    ],
    lessonDecisions: [
      { icon: '⚖️', text: 'Begin with delegation rules (RN vs LPN vs UAP scope) before advancing to legal topics' },
      { icon: '📋', text: 'Use priority-setting case scenarios (ABC, Maslow, Safety first)' },
      { icon: '🤝', text: 'Include weekly team communication role-play exercises' },
    ],
    nclexQuestionTypes: ['Case Study', 'SATA', 'Prioritization', 'Drag & Drop', 'Extended Reasoning'],
    gradientClass: 'from-green-900 to-green-700',
  },
  {
    id: 2,
    title: 'Fundamentals & Procedures',
    weeks: '2 Weeks',
    priority: 'Core Foundation',
    weight: 'Basic Care & Comfort',
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    learningObjectives: [
      'Master sterile technique, infection control & standard precautions',
      'Demonstrate competency in vital signs & head-to-toe assessment',
      'Understand wound care, urinary catheterization & IV management',
      'Apply safety principles: fall prevention, restraints, positioning',
      'Review nutrition, hydration & elimination concepts',
    ],
    lessonDecisions: [
      { icon: '🏗️', text: 'Teach this module first as the foundation for all clinical modules that follow' },
      { icon: '🎥', text: 'Use skills lab simulations and skills checklists for procedural competency' },
      { icon: '📝', text: 'Quiz on infection control chains before advancing to system modules' },
    ],
    nclexQuestionTypes: ['Multiple Choice', 'SATA', 'Image/Hotspot', 'Ordered Response'],
    gradientClass: 'from-emerald-800 to-emerald-600',
  },
  {
    id: 3,
    title: 'Maternity & Pediatrics',
    weeks: '3 Weeks',
    priority: 'High Yield',
    weight: 'Health Promotion Focus',
    difficulty: 'intermediate',
    difficultyLabel: 'Intermediate',
    learningObjectives: [
      'Understand antepartum, intrapartum & postpartum nursing care',
      'Identify normal vs. high-risk pregnancy complications',
      'Apply developmental milestones across pediatric age groups',
      'Recognize pediatric emergencies: febrile seizures, epiglottitis, RSV',
      'Understand immunization schedules & growth monitoring',
    ],
    lessonDecisions: [
      { icon: '👶', text: 'Split into two sub-lessons: Maternity Week 1–2, Pediatrics Week 3' },
      { icon: '⚠️', text: 'Emphasize "when to call the provider" decision trees for OB complications' },
      { icon: '📊', text: 'Incorporate growth chart interpretation and APGAR scoring practice' },
    ],
    nclexQuestionTypes: ['SATA', 'Table/Matrix', 'Trend Identification', 'Extended Reasoning'],
    gradientClass: 'from-green-700 to-green-500',
  },
  {
    id: 4,
    title: 'Respiratory System & Care',
    weeks: '2 Weeks',
    priority: 'Critical Priority',
    weight: 'Physiological Adaptation',
    difficulty: 'advanced',
    difficultyLabel: 'Advanced',
    learningObjectives: [
      'Interpret ABG values and identify acid-base imbalances',
      'Manage COPD, asthma, pneumonia, pneumothorax, PE',
      'Understand oxygen therapy, ventilator management & suctioning',
      'Recognize and respond to respiratory failure signs',
      'Apply chest physiotherapy and positioning interventions',
    ],
    lessonDecisions: [
      { icon: '🫁', text: 'Lead with ABG interpretation — it is the #1 tested respiratory skill' },
      { icon: '🚨', text: 'Use "respiratory distress hierarchy" to teach nurse intervention priority' },
      { icon: '💊', text: 'Tie bronchodilator and steroid pharmacology concepts here, not pharmacology module' },
    ],
    nclexQuestionTypes: ['ABG Interpretation', 'SATA', 'Trend Identification', 'Cloze/Fill-in'],
    gradientClass: 'from-emerald-950 to-green-700',
  },
  {
    id: 5,
    title: 'Cardiovascular System & Care',
    weeks: '3 Weeks',
    priority: 'High Yield',
    weight: 'Physiological Integrity',
    difficulty: 'advanced',
    difficultyLabel: 'Advanced',
    learningObjectives: [
      'Recognize dysrhythmias on ECG strips and identify nursing actions',
      'Manage heart failure, MI, hypertensive crisis & angina',
      'Understand hemodynamic monitoring & cardiac output',
      'Implement post-cardiac catheterization & post-op cardiac care',
      'Apply cardiovascular pharmacology: antihypertensives, anticoagulants, diuretics',
    ],
    lessonDecisions: [
      { icon: '❤️', text: 'Dedicate full Week 1 to ECG rhythm interpretation with daily strip practice' },
      { icon: '🔄', text: 'Use the "Pump-Rate-Rhythm-Volume" framework for all CV assessments' },
      { icon: '💉', text: 'Integrate high-alert cardiac medications (digoxin, heparin) with safety checklists' },
    ],
    nclexQuestionTypes: ['ECG Strip Analysis', 'SATA', 'Matrix', 'Case Study', 'Prioritization'],
    gradientClass: 'from-yellow-700 to-yellow-800',
  },
  {
    id: 6,
    title: 'Neurology',
    weeks: '2 Weeks',
    priority: 'Complex Concepts',
    weight: 'Physiological Adaptation',
    difficulty: 'advanced',
    difficultyLabel: 'Advanced',
    learningObjectives: [
      'Perform neurological assessments: GCS, cranial nerves, pupils',
      'Manage CVA, TIA, increased ICP, seizure disorders',
      'Understand spinal cord injuries and autonomic dysreflexia',
      'Care for patients with MS, Parkinson\'s, Guillain-Barré, myasthenia gravis',
      'Recognize signs of herniation and neuro emergencies',
    ],
    lessonDecisions: [
      { icon: '🧠', text: 'Teach FAST stroke criteria early and reinforce throughout clinical simulations' },
      { icon: '📉', text: 'Use deterioration-pattern scenarios: "What changed? What do you do next?"' },
      { icon: '🛏️', text: 'Include positioning & ICP management as high-priority nursing decisions' },
    ],
    nclexQuestionTypes: ['NGN Case Study', 'SATA', 'Trend Analysis', 'Ordered Response'],
    gradientClass: 'from-lime-800 to-lime-600',
  },
  {
    id: 7,
    title: 'EENT, Renal & Reproductive Systems',
    weeks: '2 Weeks',
    priority: 'Moderate Weight',
    weight: 'Reduction of Risk',
    difficulty: 'intermediate',
    difficultyLabel: 'Intermediate',
    learningObjectives: [
      'Manage CKD, AKI, dialysis (hemodialysis & peritoneal) & fluid balance',
      'Interpret urinalysis, BUN, creatinine & electrolyte results',
      'Address eye/ear disorders: glaucoma, cataracts, otitis, Menière\'s',
      'Provide reproductive health care: STIs, contraception, menopause',
      'Recognize prostate, cervical & ovarian cancer screening needs',
    ],
    lessonDecisions: [
      { icon: '🫘', text: 'Prioritize renal content — it carries the most NCLEX weight in this module' },
      { icon: '💧', text: 'Use fluid & electrolyte decision maps linking renal function to imbalances' },
      { icon: '🔬', text: 'Teach lab interpretation (BUN, creatinine, GFR) as clinical decision triggers' },
    ],
    nclexQuestionTypes: ['Lab Interpretation', 'SATA', 'Multiple Choice', 'Drop-Down'],
    gradientClass: 'from-green-800 to-green-600',
  },
  {
    id: 8,
    title: 'Gastrointestinal System & Care',
    weeks: '2 Weeks',
    priority: 'Moderate Priority',
    weight: 'Physiological Integrity',
    difficulty: 'intermediate',
    difficultyLabel: 'Intermediate',
    learningObjectives: [
      'Assess and manage peptic ulcer disease, GERD, IBD, IBS',
      'Understand hepatitis, cirrhosis, liver failure & portal hypertension',
      'Manage colostomy/ileostomy care and bowel obstruction',
      'Recognize signs of GI bleeding: hematemesis, melena, hematochezia',
      'Provide pre- and post-op care for GI surgeries',
    ],
    lessonDecisions: [
      { icon: '🩸', text: 'Teach upper vs. lower GI bleed differentiation first — high-stakes emergency recognition' },
      { icon: '🍽️', text: 'Incorporate dietary restriction tables for liver disease and ostomy patients' },
      { icon: '🏥', text: 'Use post-op GI scenario practice for "first action" NCLEX decision-making' },
    ],
    nclexQuestionTypes: ['SATA', 'Multiple Choice', 'Case Study', 'Image/Exhibit'],
    gradientClass: 'from-amber-700 to-amber-900',
  },
  {
    id: 9,
    title: 'Endocrine System & Care',
    weeks: '2 Weeks',
    priority: 'High Yield',
    weight: 'Physiological Adaptation',
    difficulty: 'advanced',
    difficultyLabel: 'Advanced',
    learningObjectives: [
      'Distinguish Type 1 vs. Type 2 diabetes management and complications',
      'Identify and treat DKA, HHS, hypoglycemia & Somogyi effect',
      'Manage thyroid disorders: hypothyroidism, hyperthyroidism, thyroid storm',
      'Understand adrenal disorders: Cushing\'s, Addison\'s, pheochromocytoma',
      'Teach insulin administration and blood glucose monitoring protocols',
    ],
    lessonDecisions: [
      { icon: '💉', text: 'Lead with diabetes — it accounts for 40–50% of endocrine NCLEX questions' },
      { icon: '⚡', text: 'Teach DKA vs. HHS comparison table as a core clinical differentiation tool' },
      { icon: '🔄', text: 'Use hormone action → imbalance → nursing response flow for each gland' },
    ],
    nclexQuestionTypes: ['SATA', 'Lab Values', 'Drop-Down Cloze', 'Table/Matrix'],
    gradientClass: 'from-green-900 to-emerald-700',
  },
  {
    id: 10,
    title: 'Musculoskeletal & Integumentary',
    weeks: '2 Weeks',
    priority: 'Moderate Priority',
    weight: 'Basic Care & Comfort',
    difficulty: 'intermediate',
    difficultyLabel: 'Intermediate',
    learningObjectives: [
      'Manage fractures, traction, casts & orthopedic surgical care (hip/knee replacement)',
      'Recognize compartment syndrome, fat embolism & osteomyelitis',
      'Provide wound assessment, staging of pressure injuries & dressing changes',
      'Understand burns: rule of nines, fluid resuscitation, infection risk',
      'Apply skin assessment across diverse skin tones (NCLEX equity emphasis)',
    ],
    lessonDecisions: [
      { icon: '🦴', text: 'Cover compartment syndrome & neurovascular checks as an early safety priority' },
      { icon: '🔥', text: 'Dedicate time to burns fluid calculation — commonly tested numerically' },
      { icon: '🩹', text: 'Use pressure injury staging visual aids with diverse skin-tone wound photos' },
    ],
    nclexQuestionTypes: ['Calculation', 'Image/Hotspot', 'SATA', 'Prioritization'],
    gradientClass: 'from-yellow-600 to-amber-700',
  },
  {
    id: 11,
    title: 'Hematology, Oncology & Immunology',
    weeks: '2 Weeks',
    priority: 'High Complexity',
    weight: 'Physiological Adaptation',
    difficulty: 'advanced',
    difficultyLabel: 'Advanced',
    learningObjectives: [
      'Recognize and manage anemia types, sickle cell crisis, leukemia & lymphoma',
      'Understand blood transfusion protocols and transfusion reactions',
      'Manage neutropenia, thrombocytopenia and bleeding precautions',
      'Understand oncology treatment: chemotherapy, radiation, immunotherapy',
      'Provide care for HIV/AIDS and immunocompromised patients',
    ],
    lessonDecisions: [
      { icon: '🩸', text: 'Teach transfusion reaction management as a standalone clinical emergency drill' },
      { icon: '🧬', text: 'Connect CBC interpretation to neutropenic precautions and infection risk' },
      { icon: '💊', text: 'Cover chemotherapy side effects and patient education as high-yield content' },
    ],
    nclexQuestionTypes: ['SATA', 'Lab Interpretation', 'Drop-Down', 'NGN Case Study'],
    gradientClass: 'from-green-700 to-green-900',
  },
  {
    id: 12,
    title: 'Mental Health Nursing',
    weeks: '2 Weeks',
    priority: 'High Yield',
    weight: 'Psychosocial Integrity',
    difficulty: 'intermediate',
    difficultyLabel: 'Intermediate',
    learningObjectives: [
      'Apply therapeutic communication techniques across psychiatric settings',
      'Understand DSM-5 diagnoses: schizophrenia, bipolar, MDD, anxiety disorders',
      'Manage psychiatric emergencies: suicidal ideation, aggression, elopement',
      'Understand legal and ethical psychiatric concepts: involuntary hold, competency',
      'Administer and monitor psychiatric medications safely',
    ],
    lessonDecisions: [
      { icon: '💬', text: 'Lead with therapeutic communication — tested in every mental health NCLEX scenario' },
      { icon: '🚨', text: 'Use safety risk assessment scenarios for suicidal/homicidal ideation as required drills' },
      { icon: '⚖️', text: 'Teach patient rights & least-restrictive interventions with real-case ethical dilemmas' },
    ],
    nclexQuestionTypes: ['SATA', 'Scenario-Based', 'Therapeutic Comms', 'Priority Decision'],
    gradientClass: 'from-emerald-950 to-green-900',
  },
  {
    id: 13,
    title: 'Pharmacology Concepts',
    weeks: '3 Weeks',
    priority: 'Critical Priority',
    weight: 'Pharmacological Therapies',
    difficulty: 'advanced',
    difficultyLabel: 'Advanced',
    learningObjectives: [
      'Master pharmacokinetics & pharmacodynamics principles',
      'Identify drug classifications, mechanisms, uses & adverse effects',
      'Perform safe medication calculations (IV drips, weight-based dosing)',
      'Recognize and report high-alert medication risks (anticoagulants, insulin, opioids)',
      'Apply the "6 Rights" + 3 checks in every medication scenario',
    ],
    lessonDecisions: [
      { icon: '💊', text: 'Organize by drug class, not by system — creates stronger pattern recognition' },
      { icon: '🧮', text: 'Dedicate Week 1 exclusively to dosage calculations with timed practice tests' },
      { icon: '🚫', text: 'Teach contraindications and antidotes as standalone high-priority decision clusters' },
    ],
    nclexQuestionTypes: ['Calculation', 'SATA', 'Drop-Down', 'Table/Matrix', 'Multiple Choice'],
    gradientClass: 'from-yellow-650 to-yellow-800',
  },
  {
    id: 14,
    title: 'Pharmacology Flashcards',
    weeks: 'Ongoing',
    priority: 'Daily Review',
    weight: 'Active Recall Tool',
    difficulty: 'foundation',
    difficultyLabel: 'Foundation',
    learningObjectives: [
      'Memorize top 200 NCLEX medications by class and action',
      'Recall antidotes, reversal agents & antidote pairings rapidly',
      'Recognize drug prefixes/suffixes (-olol, -pril, -statin, -mycin)',
      'Apply spaced repetition to retain pharmacology long-term',
      'Self-test on adverse effects, patient education & contraindications',
    ],
    lessonDecisions: [
      { icon: '🔁', text: 'Run as a parallel ongoing activity alongside all other modules (not isolated)' },
      { icon: '📱', text: 'Use spaced repetition software (Anki/Quizlet) with pre-built NCLEX drug decks' },
      { icon: '🧠', text: 'Group cards by prefix/suffix pattern to build recognition, not just memorization' },
    ],
    nclexQuestionTypes: ['Spaced Repetition', 'Active Recall', 'Pattern Recognition', 'Daily Review Sets'],
    gradientClass: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 15,
    title: 'Special NCLEX Exam Practice',
    weeks: '2 Weeks',
    priority: 'Exam Readiness',
    weight: 'Full NGN Simulation',
    difficulty: 'exam',
    difficultyLabel: 'Exam Prep',
    learningObjectives: [
      'Complete full-length timed NCLEX-RN practice exams (NGN format)',
      'Master all new NGN item types: bow-tie, trend, enhanced hotspot',
      'Perform thorough review of missed questions with rationale analysis',
      'Develop test-taking strategies: elimination, keyword recognition, priority',
      'Build exam stamina and reduce test anxiety through repeated simulation',
    ],
    lessonDecisions: [
      { icon: '🎯', text: 'Schedule minimum 3 full timed practice exams in final 2 weeks — no exceptions' },
      { icon: '📊', text: 'Track performance by domain to identify and target weak area remediation' },
      { icon: '🧘', text: 'Include test anxiety management: timing strategy, breathing, pacing techniques' },
    ],
    nclexQuestionTypes: ['Bow-Tie', 'Trend', 'Enhanced Hotspot', 'Case Study 6-Part', 'Cloze', 'Matrix/Grid', 'SATA'],
    gradientClass: 'from-green-700 to-lime-700',
  },
]

export default function NclexSyllabusPage() {
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({})
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const toggleModule = (id: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const expandAll = () => {
    const nextState: Record<number, boolean> = {}
    SYLLABUS_DATA.forEach((module) => {
      nextState[module.id] = true
    })
    setExpandedModules(nextState)
  }

  const collapseAll = () => {
    setExpandedModules({})
  }

  const filteredModules = activeFilter === 'all'
    ? SYLLABUS_DATA
    : SYLLABUS_DATA.filter((m) => m.difficulty === activeFilter)

  return (
    <main className="relative min-h-screen pb-16">
      <HexagonBackground />

      <style dangerouslySetInnerHTML={{ __html: `
        /* local styles for nclex page */
        .nclex-badge-foundation { background: rgba(34, 168, 90, 0.08); color: #16a34a; border: 1px solid rgba(34, 168, 90, 0.2); }
        .nclex-badge-intermediate { background: rgba(26, 107, 58, 0.12); color: #047857; border: 1px solid rgba(26, 107, 58, 0.25); }
        .nclex-badge-advanced { background: rgba(212, 160, 23, 0.1); color: #d97706; border: 1px solid rgba(212, 160, 23, 0.2); }
        .nclex-badge-exam { background: rgba(139, 92, 246, 0.08); color: #7c3aed; border: 1px solid rgba(139, 92, 246, 0.2); }

        body.theme-dark .nclex-badge-foundation { background: rgba(34, 168, 90, 0.18); color: #86efac; border-color: rgba(34, 168, 90, 0.3); }
        body.theme-dark .nclex-badge-intermediate { background: rgba(26, 107, 58, 0.22); color: #6ee7a0; border-color: rgba(26, 107, 58, 0.35); }
        body.theme-dark .nclex-badge-advanced { background: rgba(212, 160, 23, 0.18); color: #f59e0b; border-color: rgba(212, 160, 23, 0.3); }
        body.theme-dark .nclex-badge-exam { background: rgba(139, 92, 246, 0.18); color: #c084fc; border-color: rgba(139, 92, 246, 0.3); }

        .dot-foundation { background-color: #22c55e; }
        .dot-intermediate { background-color: #10b981; }
        .dot-advanced { background-color: #f59e0b; }
        .dot-exam { background-color: #8b5cf6; }

        .nclex-section-box {
          background: rgba(0, 0, 0, 0.015);
          border: 1px solid rgba(53, 6, 62, 0.06);
        }
        body.theme-dark .nclex-section-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .nclex-decision-item {
          background: rgba(212, 160, 23, 0.05);
          border: 1px solid rgba(212, 160, 23, 0.18);
          color: #78350f;
        }
        body.theme-dark .nclex-decision-item {
          background: rgba(212, 160, 23, 0.08);
          border: 1px solid rgba(212, 160, 23, 0.25);
          color: #fde68a;
        }

        .nclex-module-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .nclex-module-card:hover {
          transform: translateY(-2px);
          border-color: rgba(201, 169, 97, 0.6) !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }
        body.theme-dark .nclex-module-card:hover {
          border-color: rgba(201, 169, 97, 0.5) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
      `}} />

      {/* Nav */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors text-sm md:text-base font-semibold"
          >
            Back to Home
          </Link>
          <span className="text-xs md:text-sm text-gold-metallic font-semibold uppercase tracking-wider">
            NCLEX-RN Syllabus
          </span>
        </div>
      </nav>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 mt-8 md:mt-12">
        {/* Header Block */}
        <header className="text-center mb-10 pb-8 border-b border-gold-metallic/20 relative">
          <div className="inline-block bg-gradient-to-r from-emerald-900 to-green-800 text-gold font-semibold text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-gold-metallic/35 mb-4 shadow-sm">
            Official Study Program
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gold-metallic drop-shadow-sm mb-4">
            NCLEX-RN <span className="text-white body.theme-light:text-[#0f0c14] transition-colors">Master Syllabus</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base mb-8">
            Comprehensive study framework, diagnostic priorities, and clinical decision trees aligned with the Next Generation NCLEX (NGN) guidelines.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-6">
            {[
              { num: '15', label: 'Modules' },
              { num: '3', label: 'Difficulty Tiers' },
              { num: 'NGN', label: 'NCLEX Format' },
              { num: 'Pass', label: 'Focused Goal' },
            ].map((stat, i) => (
              <div key={i} className="glass-card dark-container rounded-xl p-3 text-center border border-gold-metallic/20">
                <span className="block text-2xl md:text-3xl font-bold text-gold-metallic">{stat.num}</span>
                <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-emerald-500 to-gold-metallic rounded-full" />
        </header>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Legend and Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Categories', dot: null },
              { id: 'foundation', label: 'Foundation', dot: 'dot-foundation' },
              { id: 'intermediate', label: 'Intermediate', dot: 'dot-intermediate' },
              { id: 'advanced', label: 'Advanced', dot: 'dot-advanced' },
              { id: 'exam', label: 'Exam Prep', dot: 'dot-exam' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all border ${
                  activeFilter === filter.id
                    ? 'bg-gold-metallic/20 border-gold-metallic text-gold-bright font-semibold'
                    : 'bg-transparent border-gold-metallic/25 hover:border-gold-metallic/50 text-white/70 hover:text-white'
                }`}
              >
                {filter.dot && <span className={`w-2 h-2 rounded-full ${filter.dot}`} />}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Expand/Collapse All */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={expandAll}
              className="text-xs font-semibold text-gold-metallic hover:text-gold-bright transition-colors hover:underline"
            >
              Expand All
            </button>
            <span className="text-white/30 text-xs">|</span>
            <button
              onClick={collapseAll}
              className="text-xs font-semibold text-gold-metallic hover:text-gold-bright transition-colors hover:underline"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Modules Accordions */}
        <div className="space-y-4">
          {filteredModules.map((module) => {
            const isOpen = !!expandedModules[module.id]

            return (
              <div
                key={module.id}
                className="glass-card dark-container rounded-2xl overflow-hidden nclex-module-card border border-gold-metallic/30"
              >
                {/* Header */}
                <div
                  onClick={() => toggleModule(module.id)}
                  className="flex items-center gap-4 p-5 cursor-pointer user-select-none hover:bg-gold-metallic/5 transition-colors"
                >
                  {/* Module Number Block */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-sm flex-shrink-0 bg-gradient-to-br ${module.gradientClass}`}>
                    {module.id < 10 ? `0${module.id}` : module.id}
                  </div>

                  {/* Title & Tags */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-1.5 pr-2">
                      {module.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block bg-green-500/10 border border-green-500/25 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {module.weeks}
                      </span>
                      <span className="inline-block bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {module.priority}
                      </span>
                      <span className="inline-block bg-teal-500/10 border border-teal-500/25 text-teal-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {module.weight}
                      </span>
                    </div>
                  </div>

                  {/* Right: Badge + Chevron */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider nclex-badge-${module.difficulty}`}>
                      {module.difficultyLabel}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gold-metallic transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Body details */}
                {isOpen && (
                  <div className="border-t border-gold-metallic/15 p-5 md:p-6 space-y-6 animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left: Objectives */}
                      <div className="nclex-section-box rounded-xl p-4 md:p-5">
                        <h4 className="text-xs md:text-sm font-bold text-gold-metallic uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-emerald-500 rounded-full" />
                          Learning Objectives
                        </h4>
                        <ul className="space-y-3">
                          {module.learningObjectives.map((obj, i) => (
                            <li key={i} className="text-xs md:text-sm text-white/90 leading-relaxed pl-4 relative">
                              <span className="absolute left-0 text-emerald-500 font-bold font-sans">›</span>
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Decisions */}
                      <div className="nclex-section-box rounded-xl p-4 md:p-5">
                        <h4 className="text-xs md:text-sm font-bold text-gold-metallic uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-3 bg-amber-500 rounded-full" />
                          Lesson Decisions
                        </h4>
                        <div className="space-y-3">
                          {module.lessonDecisions.map((decision, i) => (
                            <div key={i} className="nclex-decision-item flex items-start gap-2.5 p-3 rounded-lg text-xs md:text-sm leading-relaxed">
                              <span className="text-sm mt-0.5 flex-shrink-0">{decision.icon}</span>
                              <span>{decision.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom: NCLEX types */}
                    <div className="nclex-section-box rounded-xl p-4 md:p-5">
                      <h4 className="text-xs md:text-sm font-bold text-gold-metallic uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-purple-500 rounded-full" />
                        {module.difficulty === 'exam' ? 'Study Methods' : 'NCLEX Question Types'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.nclexQuestionTypes.map((type, i) => (
                          <span
                            key={i}
                            className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-3 py-1 rounded-md"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer info text */}
        <footer className="text-center mt-12 pt-8 border-t border-gold-metallic/20 text-xs md:text-sm text-white/50 space-y-2">
          <p>
            NCLEX-RN Master Syllabus &nbsp;·&nbsp; <strong className="text-gold-metallic">Next Generation NCLEX (NGN) Aligned</strong> &nbsp;·&nbsp; All modules mapped to NCSBN Test Plan
          </p>
          <p className="italic text-gold-metallic/80">
            Study consistently · Practice daily · You've got this 🩺
          </p>
        </footer>
      </div>
    </main>
  )
}
