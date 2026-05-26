'use client'

import { useState } from 'react'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'

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
      { icon: '🎥', text: 'Use skills lab simulations and skills checklists for procedural competence' },
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
    gradientClass: 'from-yellow-650 to-amber-800',
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
    gradientClass: 'from-yellow-600 to-yellow-800',
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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-8 md:mt-12 space-y-12">
        {/* Banner Section */}
        <div>
          <NursingCountryBanner
            country="NCLEX-RN Syllabus"
            subtitle="Next Generation Study Plan for International Nurse Registration"
            flagSrc="/nursing/flags/us.png"
            bannerSrc="/nursing/photos/usa-banner.jpg"
          />
        </div>

        {/* Detailed Intro Section (Proper Page Feeling) */}
        <section className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Benchmark */}
          <div className="glass-card dark-container rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gold-metallic/30">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic">
                NCLEX-RN: The Global Nursing Benchmark
              </h2>
              <p className="text-base leading-relaxed text-white/90">
                The National Council Licensure Examination for Registered Nurses (NCLEX-RN) is the comprehensive testing benchmark used by regulatory boards in the <strong>United States, Canada, and Australia</strong> to certify that candidates possess the clinical competence and critical reasoning needed to practice safely as entry-level nurses.
              </p>
              <p className="text-base leading-relaxed text-white/90">
                GCMA supports overseas qualified nurses by offering structured guidance and curriculum resources, helping you align your training with these stringent regulatory assessments.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-metallic/15 mt-6">
              <span className="text-xs uppercase tracking-wider text-gold-metallic font-semibold block">
                Primary Destinations Covered
              </span>
              <span className="text-sm text-white/70 block mt-1">
                United States (NCSBN) · Canada (Regulatory Bodies) · Australia (AHPRA / NMBA)
              </span>
            </div>
          </div>

          {/* Card 2: NGN standard */}
          <div className="glass-card dark-container rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gold-metallic/30">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic">
                Next Generation NCLEX (NGN) Model
              </h2>
              <p className="text-base leading-relaxed text-white/90">
                The updated Next Generation NCLEX (NGN) exam system centers heavily around the <strong>NCSBN Clinical Judgment Measurement Model (NCJMM)</strong>. This framework is designed to measure your cognitive ability to make safe, expert decisions during complex patient care.
              </p>
              <p className="text-base leading-relaxed text-white/90">
                Rather than simple recall questions, candidates are presented with unfolding case studies and interactive item types (bowtie, trend, matrix grids) that assess your ability to recognize cues, prioritize hypotheses, and take clinical action.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-metallic/15 mt-6">
              <span className="text-xs uppercase tracking-wider text-gold-metallic font-semibold block">
                Core Cognitive Operations Tested
              </span>
              <span className="text-sm text-white/70 block mt-1">
                Recognize Cues · Analyze Cues · Prioritize Hypotheses · Take Action · Evaluate Outcomes
              </span>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { num: '15', label: 'Structured Modules' },
            { num: '3', label: 'Difficulty Tiers' },
            { num: 'NGN', label: 'Clinical Model Aligned' },
            { num: 'Pass', label: 'Focused Registration' },
          ].map((stat, i) => (
            <div key={i} className="glass-card dark-container rounded-xl p-4 text-center border border-gold-metallic/20">
              <span className="block text-3xl md:text-4xl font-bold text-gold-metallic">{stat.num}</span>
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider font-semibold block mt-1">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Core Syllabus Areas (Showcase Cards with Images!) */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
            Curriculum Core Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShowcaseCard
              imageSrc="/nursing/photos/australia-career2.jpg"
              imageAlt="Care Management"
              eyebrow="Syllabus Pillar 1"
              title="Management of Care"
              tagline="Supervision & Legal Frameworks"
              description="Learn delegation rules (RN vs LPN vs UAP), nursing advocacy, patient rights, legal liability, and priority frameworks (Maslow, ABCs) for nursing boards."
              theme="dark"
            />
            <ShowcaseCard
              imageSrc="/nursing/photos/germany-why4.jpg"
              imageAlt="Basic Procedures"
              eyebrow="Syllabus Pillar 2"
              title="Basic Care & Safety"
              tagline="Fundamentals & Procedures"
              description="Infection control standards, sterile techniques, vital signs analysis, catheterization, wound care, and health promotion timelines across age groups."
              theme="dark"
            />
            <ShowcaseCard
              imageSrc="/nursing/photos/australia-why3.jpg"
              imageAlt="Physiological Adaptation"
              eyebrow="Syllabus Pillar 3"
              title="Clinical Systems"
              tagline="Physiological Adaptation"
              description="Interpret complex ECG strips, manage heart failure, respiratory crisis, neurological CVA response, electrolyte balances, and advanced post-op procedures."
              theme="dark"
            />
            <ShowcaseCard
              imageSrc="/nursing/photos/newzealand-registration.jpg"
              imageAlt="NGN & Pharmacology"
              eyebrow="Syllabus Pillar 4"
              title="NGN & Pharmacology"
              tagline="Medication Safety & Practice"
              description="Master safe calculations, high-alert drug reversal protocols, suffix patterns, and practice full simulations of folding NGN case studies and bowtie queries."
              theme="dark"
            />
          </div>
        </section>

        {/* Interactive Syllabus Accordions Section */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic">
              Explore the 15 Modules
            </h2>
            <p className="text-sm md:text-base text-white/80 mt-2">
              Select difficulty tiers to filter the modules or toggle individual tabs to view comprehensive learning objectives, lesson decisions, and NGN question types.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
            {/* Legend and Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Modules', dot: null },
                { id: 'foundation', label: 'Foundation', dot: 'dot-foundation' },
                { id: 'intermediate', label: 'Intermediate', dot: 'dot-intermediate' },
                { id: 'advanced', label: 'Advanced', dot: 'dot-advanced' },
                { id: 'exam', label: 'Exam Prep', dot: 'dot-exam' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all border ${
                    activeFilter === filter.id
                      ? 'bg-gold-metallic/20 border-gold-metallic text-gold-bright'
                      : 'bg-transparent border-gold-metallic/25 hover:border-gold-metallic/50 text-white/70 hover:text-white'
                  }`}
                >
                  {filter.dot && <span className={`w-2.5 h-2.5 rounded-full ${filter.dot}`} />}
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Expand/Collapse All */}
            <div className="flex items-center gap-2 self-end sm:self-auto font-medium">
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
        </section>

        {/* Inquiry Form at the bottom (Proper Page Feeling) */}
        <section className="pt-8">
          <NursingRegistrationForm initialCountry="USA" />
        </section>

        {/* Footer info text */}
        <footer className="text-center pt-8 border-t border-gold-metallic/20 text-xs md:text-sm text-white/50 space-y-2">
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
