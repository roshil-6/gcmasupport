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
  const [searchTerm, setSearchTerm] = useState<string>('')

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

  const filteredModules = SYLLABUS_DATA.filter((module) => {
    const matchesFilter = activeFilter === 'all' || module.difficulty === activeFilter
    const matchesSearch =
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.learningObjectives.some((obj) => obj.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <main className="relative min-h-screen pb-16">
      <HexagonBackground />

      <style dangerouslySetInnerHTML={{ __html: `
        /* theme-aware description overlays */
        .nclex-intro-text { color: #2c251b; }
        body.theme-dark .nclex-intro-text { color: rgba(255, 255, 255, 0.85); }

        .nclex-subtitle { color: rgba(44, 37, 27, 0.8); }
        body.theme-dark .nclex-subtitle { color: rgba(255, 255, 255, 0.75); }

        /* Top badge prefix for the modules header */
        .nclex-curriculum-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #c9a961;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        /* Premium Segmented filter bar layout */
        .nclex-filter-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .nclex-filter-wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .nclex-filter-bar {
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 169, 97, 0.25);
          box-shadow: 0 4px 20px rgba(42, 36, 29, 0.04);
          padding: 0.3rem;
          border-radius: 100px;
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        body.theme-dark .nclex-filter-bar {
          background-color: rgba(10, 36, 24, 0.65);
          border-color: rgba(201, 169, 97, 0.2);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
        }

        .nclex-filter-item {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.55rem 1.1rem;
          border-radius: 100px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          color: #5c4720;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
        }
        body.theme-dark .nclex-filter-item {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .nclex-filter-item.active {
          background: linear-gradient(135deg, #ffd54f, #c9a961);
          color: #1a1200 !important;
          box-shadow: 0 4px 12px rgba(201, 169, 97, 0.35);
        }
        body.theme-dark .nclex-filter-item.active {
          background: linear-gradient(135deg, #ffe082, #d4af37);
          color: #05140b !important;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .nclex-filter-item.inactive:hover {
          background-color: rgba(201, 169, 97, 0.12);
          color: #b8860b;
        }
        body.theme-dark .nclex-filter-item.inactive:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .dot-foundation { background-color: #10b981; box-shadow: 0 0 6px rgba(16, 185, 129, 0.6); }
        .dot-intermediate { background-color: #06b6d4; box-shadow: 0 0 6px rgba(6, 182, 212, 0.6); }
        .dot-advanced { background-color: #f59e0b; box-shadow: 0 0 6px rgba(245, 158, 11, 0.6); }
        .dot-exam { background-color: #8b5cf6; box-shadow: 0 0 6px rgba(139, 92, 246, 0.6); }

        /* Search input bar styling */
        .nclex-search-wrapper input {
          border: 1px solid rgba(201, 169, 97, 0.25);
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(42, 36, 29, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 100px;
          color: #2c251b;
        }
        .nclex-search-wrapper input:focus {
          border-color: #c9a961;
          box-shadow: 0 4px 20px rgba(201, 169, 97, 0.25);
          background-color: #ffffff;
        }
        body.theme-dark .nclex-search-wrapper input {
          border-color: rgba(201, 169, 97, 0.15);
          background-color: rgba(10, 36, 24, 0.65);
          color: #ffffff;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
        }
        body.theme-dark .nclex-search-wrapper input:focus {
          border-color: #ffe082;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15);
          background-color: rgba(10, 36, 24, 0.85);
        }

        /* expand / collapse controls links styling */
        .nclex-control-btn { 
          color: #6e531d; 
          transition: all 0.2s ease; 
          position: relative;
        }
        .nclex-control-btn::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -1px;
          left: 0;
          background-color: #b8860b;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nclex-control-btn:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .nclex-control-btn:hover { color: #b8860b; }
        body.theme-dark .nclex-control-btn { color: #c9a961; }
        body.theme-dark .nclex-control-btn::after { background-color: #ffd54f; }
        body.theme-dark .nclex-control-btn:hover { color: #ffd54f; }

        /* Premium Cards Design */
        .nclex-module-card {
          position: relative;
          background-color: rgba(255, 255, 255, 0.75) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 169, 97, 0.22) !important;
          box-shadow: 0 4px 20px rgba(42, 36, 29, 0.03);
          border-radius: 20px;
          overflow: hidden;
          padding-left: 6px; /* Offset for left accent bar */
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .nclex-module-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 169, 97, 0.5) !important;
          box-shadow: 0 16px 40px rgba(201, 169, 97, 0.15);
        }
        body.theme-dark .nclex-module-card {
          background-color: rgba(12, 34, 23, 0.45) !important;
          border-color: rgba(201, 169, 97, 0.15) !important;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
        }
        body.theme-dark .nclex-module-card:hover {
          border-color: rgba(201, 169, 97, 0.4) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
        }

        /* Open State Cards Highlight styling */
        .nclex-module-card.open {
          border-color: #c9a961 !important;
          box-shadow: 0 20px 45px rgba(201, 169, 97, 0.18);
          background-color: #ffffff !important;
        }
        body.theme-dark .nclex-module-card.open {
          background-color: rgba(10, 36, 24, 0.85) !important;
          border-color: #ffd54f !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        /* Colored Left Accent Bars */
        .nclex-card-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          transition: all 0.3s ease;
        }
        .accent-foundation { background: linear-gradient(to bottom, #10b981, #059669); }
        .accent-intermediate { background: linear-gradient(to bottom, #06b6d4, #0891b2); }
        .accent-advanced { background: linear-gradient(to bottom, #f59e0b, #d97706); }
        .accent-exam { background: linear-gradient(to bottom, #8b5cf6, #7c3aed); }

        /* Watch-face inspired Number emblem */
        .nclex-num-emblem {
          background: linear-gradient(135deg, #ffd97d, #c9a961);
          color: #35063e;
          border: 2px solid rgba(201, 169, 97, 0.4);
          box-shadow: 0 4px 10px rgba(201, 169, 97, 0.15);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        body.theme-dark .nclex-num-emblem {
          background: linear-gradient(135deg, #ffd97d, #d4af37);
          color: #0b2f1f;
          border-color: rgba(212, 175, 55, 0.35);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .nclex-module-card:hover .nclex-num-emblem {
          transform: scale(1.06);
          box-shadow: 0 6px 15px rgba(201, 169, 97, 0.3);
        }
        body.theme-dark .nclex-module-card:hover .nclex-num-emblem {
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.45);
        }

        .nclex-card-title {
          font-family: var(--font-display), Georgia, serif;
          color: #2c251b !important;
          transition: color 0.3s ease;
        }
        body.theme-dark .nclex-card-title {
          color: #ffffff !important;
        }

        /* Metadata Pill Badges */
        .nclex-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: #605244;
          background-color: rgba(201, 169, 97, 0.08);
          border: 1px solid rgba(201, 169, 97, 0.15);
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          transition: all 0.3s ease;
        }
        body.theme-dark .nclex-meta-item {
          color: rgba(255, 255, 255, 0.85);
          background-color: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
        }
        .nclex-module-card:hover .nclex-meta-item {
          border-color: rgba(201, 169, 97, 0.3);
          background-color: rgba(201, 169, 97, 0.12);
        }
        body.theme-dark .nclex-module-card:hover .nclex-meta-item {
          border-color: rgba(255, 255, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.08);
        }

        /* Capsule badges for difficulty labels */
        .nclex-badge-foundation {
          background-color: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #065f46 !important;
        }
        body.theme-dark .nclex-badge-foundation {
          background-color: rgba(16, 185, 129, 0.18);
          border-color: rgba(16, 185, 129, 0.3);
          color: #a7f3d0 !important;
        }

        .nclex-badge-intermediate {
          background-color: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          color: #0e7490 !important;
        }
        body.theme-dark .nclex-badge-intermediate {
          background-color: rgba(6, 182, 212, 0.18);
          border-color: rgba(6, 182, 212, 0.3);
          color: #cffafe !important;
        }

        .nclex-badge-advanced {
          background-color: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #b45309 !important;
        }
        body.theme-dark .nclex-badge-advanced {
          background-color: rgba(245, 158, 11, 0.18);
          border-color: rgba(245, 158, 11, 0.3);
          color: #fef3c7 !important;
        }

        .nclex-badge-exam {
          background-color: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #6d28d9 !important;
        }
        body.theme-dark .nclex-badge-exam {
          background-color: rgba(139, 92, 246, 0.18);
          border-color: rgba(139, 92, 246, 0.3);
          color: #ede9fe !important;
        }

        /* Chevron Circle */
        .arrow-circle {
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          border: 1px solid rgba(201, 169, 97, 0.25);
          background-color: rgba(255, 255, 255, 0.8);
        }
        body.theme-dark .arrow-circle {
          border-color: rgba(255, 255, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.04);
        }
        .nclex-module-card:hover .arrow-circle {
          border-color: rgba(201, 169, 97, 0.5);
          background-color: rgba(201, 169, 97, 0.08);
          transform: scale(1.05);
        }
        body.theme-dark .nclex-module-card:hover .arrow-circle {
          border-color: rgba(255, 255, 255, 0.3);
          background-color: rgba(255, 255, 255, 0.08);
        }
        .nclex-module-card.open .arrow-circle {
          background-color: #c9a961;
          border-color: #c9a961;
        }
        body.theme-dark .nclex-module-card.open .arrow-circle {
          background-color: #ffd54f;
          border-color: #ffd54f;
        }
        .arrow-icon {
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          color: #c9a961;
        }
        body.theme-dark .arrow-icon {
          color: #ffd54f;
        }
        .nclex-module-card.open .arrow-icon {
          transform: rotate(180deg);
          color: #ffffff;
        }
        body.theme-dark .nclex-module-card.open .arrow-icon {
          color: #0a2418;
        }

        /* Inner Section Containers */
        .nclex-section-box {
          background-color: rgba(255, 255, 255, 0.45);
          border: 1px solid rgba(201, 169, 97, 0.18);
          box-shadow: inset 0 2px 8px rgba(201, 169, 97, 0.02);
          transition: all 0.3s ease;
        }
        body.theme-dark .nclex-section-box {
          background-color: rgba(255, 255, 255, 0.015);
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .nclex-module-card:hover .nclex-section-box {
          border-color: rgba(201, 169, 97, 0.28);
        }
        body.theme-dark .nclex-module-card:hover .nclex-section-box {
          border-color: rgba(255, 255, 255, 0.1);
        }

        /* Learning Objectives Details */
        .nclex-obj-item {
          color: #3d3429 !important;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        body.theme-dark .nclex-obj-item {
          color: rgba(255, 255, 255, 0.92) !important;
        }
        .nclex-obj-item:hover {
          transform: translateX(3px);
          color: #1a1200 !important;
        }
        body.theme-dark .nclex-obj-item:hover {
          color: #ffffff !important;
        }

        /* Check Circle Indicator */
        .nclex-check-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.15rem;
          height: 1.15rem;
          border-radius: 50%;
          background-color: rgba(16, 185, 129, 0.12);
          color: #10b981;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .nclex-obj-item:hover .nclex-check-circle {
          background-color: #10b981;
          color: #ffffff;
          transform: scale(1.1);
        }

        /* Lesson Decisions items styling */
        .nclex-decision-item {
          background-color: rgba(201, 169, 97, 0.04);
          border-left: 3.5px solid #c9a961;
          color: #5c4314 !important;
          transition: all 0.3s ease;
        }
        body.theme-dark .nclex-decision-item {
          background-color: rgba(255, 255, 255, 0.025);
          border-left-color: #ffd54f;
          color: rgba(255, 255, 255, 0.85) !important;
        }
        .nclex-decision-item:hover {
          background-color: rgba(201, 169, 97, 0.08);
          border-left-width: 5px;
          transform: translateX(2.5px);
        }
        body.theme-dark .nclex-decision-item:hover {
          background-color: rgba(255, 255, 255, 0.045);
        }

        /* NCLEX Question Type Tag badges */
        .nclex-qtype-badge {
          background-color: #ffffff;
          border: 1px solid rgba(201, 169, 97, 0.25);
          color: #5c4314 !important;
          font-weight: 600;
          box-shadow: 0 2px 6px rgba(42, 36, 29, 0.02);
          transition: all 0.25s ease;
        }
        body.theme-dark .nclex-qtype-badge {
          background-color: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9) !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }
        .nclex-qtype-badge:hover {
          border-color: #c9a961;
          color: #1a1200 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(201, 169, 97, 0.15);
        }
        body.theme-dark .nclex-qtype-badge:hover {
          border-color: #ffd54f;
          color: #ffffff !important;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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

        {/* Detailed Intro Section */}
        <section className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="glass-card dark-container rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gold-metallic/30">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic">
                NCLEX-RN: The Global Nursing Benchmark
              </h2>
              <p className="nclex-intro-text text-base leading-relaxed">
                The National Council Licensure Examination for Registered Nurses (NCLEX-RN) is the comprehensive testing benchmark used by regulatory boards in the <strong>United States, Canada, and Australia</strong> to certify that candidates possess the clinical competence and critical reasoning needed to practice safely as entry-level nurses.
              </p>
              <p className="nclex-intro-text text-base leading-relaxed">
                GCMA supports overseas qualified nurses by offering structured guidance and curriculum resources, helping you align your training with these stringent regulatory assessments.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-metallic/15 mt-6">
              <span className="text-xs uppercase tracking-wider text-gold-metallic font-semibold block">
                Primary Destinations Covered
              </span>
              <span className="text-sm text-gold-metallic/80 block mt-1">
                United States (NCSBN) · Canada (Regulatory Bodies) · Australia (AHPRA / NMBA)
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card dark-container rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gold-metallic/30">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gold-metallic">
                Next Generation NCLEX (NGN) Model
              </h2>
              <p className="nclex-intro-text text-base leading-relaxed">
                The updated Next Generation NCLEX (NGN) exam system centers heavily around the <strong>NCSBN Clinical Judgment Measurement Model (NCJMM)</strong>. This framework is designed to measure your cognitive ability to make safe, expert decisions during complex patient care.
              </p>
              <p className="nclex-intro-text text-base leading-relaxed">
                Rather than simple recall questions, candidates are presented with unfolding case studies and interactive item types (bowtie, trend, matrix grids) that assess your ability to recognize cues, prioritize hypotheses, and take clinical action.
              </p>
            </div>
            <div className="pt-4 border-t border-gold-metallic/15 mt-6">
              <span className="text-xs uppercase tracking-wider text-gold-metallic font-semibold block">
                Core Cognitive Operations Tested
              </span>
              <span className="text-sm text-gold-metallic/80 block mt-1">
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
              <span className="text-[10px] md:text-xs text-gold-metallic/80 uppercase tracking-wider font-semibold block mt-1">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Core Syllabus Areas */}
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
              tagline="Supervision & Legal Scope"
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
            <span className="nclex-curriculum-badge">Curriculum Modules</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d] dark:text-gold-metallic">
              Explore the 15 Modules
            </h2>
            <p className="nclex-subtitle text-sm md:text-base mt-2 font-medium">
              Select difficulty tiers to filter the modules or search objectives to view comprehensive plans, clinical decisions, and NGN testing rules.
            </p>
          </div>

          {/* Filters, Search & Controls Board */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-4 border-b border-gold-metallic/25 pb-6">
            <div className="nclex-filter-wrapper flex-1">
              {/* Segmented Control Bar (Filters) */}
              <div className="nclex-filter-bar">
                {[
                  { id: 'all', label: 'All Modules', dot: null },
                  { id: 'foundation', label: 'Foundation', dot: 'dot-foundation' },
                  { id: 'intermediate', label: 'Intermediate', dot: 'dot-intermediate' },
                  { id: 'advanced', label: 'Advanced', dot: 'dot-advanced' },
                  { id: 'exam', label: 'Exam Prep', dot: 'dot-exam' },
                ].map((filter) => {
                  const isActive = activeFilter === filter.id
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`nclex-filter-item ${isActive ? 'active' : 'inactive'}`}
                    >
                      {filter.dot && <span className={`w-2 h-2 rounded-full ${filter.dot}`} />}
                      {filter.label}
                    </button>
                  )
                })}
              </div>

              {/* Keyword Search Input */}
              <div className="nclex-search-wrapper relative w-full sm:max-w-xs">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gold-metallic/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search objectives..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 outline-none text-sm font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Expand/Collapse All */}
            <div className="flex items-center gap-3 self-end lg:self-auto font-medium">
              <button onClick={expandAll} className="nclex-control-btn text-xs font-semibold uppercase tracking-wider">
                Expand All
              </button>
              <span className="text-gold-metallic/30 text-xs">|</span>
              <button onClick={collapseAll} className="nclex-control-btn text-xs font-semibold uppercase tracking-wider">
                Collapse All
              </button>
            </div>
          </div>

          {/* Modules Accordions */}
          <div className="space-y-4">
            {filteredModules.length > 0 ? (
              filteredModules.map((module) => {
                const isOpen = !!expandedModules[module.id]

                return (
                  <div
                    key={module.id}
                    className={`nclex-module-card rounded-2xl border ${
                      isOpen ? 'open' : ''
                    }`}
                  >
                    {/* Left Colored Accent Indicator */}
                    <div className={`nclex-card-accent accent-${module.difficulty}`} />

                    {/* Header */}
                    <div
                      onClick={() => toggleModule(module.id)}
                      className="flex items-center gap-4 p-5 cursor-pointer user-select-none hover:bg-gold-metallic/5 transition-colors relative z-10"
                    >
                      {/* Module Number Block (Emblem) */}
                      <div className="nclex-num-emblem w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-base flex-shrink-0">
                        {module.id < 10 ? `0${module.id}` : module.id}
                      </div>

                      {/* Title & Metadata row */}
                      <div className="flex-1 min-w-0">
                        <h3 className="nclex-card-title text-xl font-bold leading-snug mb-1">
                          {module.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-1">
                          <span className="nclex-meta-item">
                            <svg className="w-3.5 h-3.5 text-gold-metallic" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {module.weeks}
                          </span>
                          <span className="nclex-meta-item">
                            <svg className="w-3.5 h-3.5 text-gold-metallic" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            {module.priority}
                          </span>
                          <span className="nclex-meta-item">
                            <svg className="w-3.5 h-3.5 text-gold-metallic" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                            {module.weight}
                          </span>
                        </div>
                      </div>

                      {/* Right: Badge + Chevron Circle */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider nclex-badge-${module.difficulty}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            module.difficulty === 'foundation' ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' :
                            module.difficulty === 'intermediate' ? 'bg-cyan-500 shadow-[0_0_4px_#06b6d4]' :
                            module.difficulty === 'advanced' ? 'bg-amber-500 shadow-[0_0_4px_#f59e0b]' :
                            'bg-purple-500 shadow-[0_0_4px_#8b5cf6]'
                          }`} />
                          {module.difficultyLabel}
                        </span>
                        <div className="arrow-circle w-8 h-8 rounded-full flex items-center justify-center">
                          <svg
                            className="arrow-icon w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Body details container */}
                    <div
                      className={`relative z-10 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      <div className="border-t border-gold-metallic/15 p-5 md:p-6 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Left: Objectives */}
                          <div className="nclex-section-box rounded-xl p-4 md:p-5">
                            <h4 className="text-xs md:text-sm font-bold text-gold-metallic uppercase tracking-wider mb-4 flex items-center gap-2">
                              <span className="w-1.5 h-3 bg-emerald-500 rounded-full" />
                              Learning Objectives
                            </h4>
                            <ul className="space-y-3">
                              {module.learningObjectives.map((obj, i) => (
                                <li key={i} className="nclex-obj-item text-xs md:text-sm leading-relaxed flex items-start gap-2.5">
                                  <span className="nclex-check-circle">
                                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4.5}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  </span>
                                  <span>{obj}</span>
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
                                <div key={i} className="nclex-decision-item flex items-start gap-2.5 p-3 rounded-lg text-xs md:text-sm leading-relaxed font-medium">
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
                                className="nclex-qtype-badge text-xs px-3 py-1.5 rounded-lg border inline-flex items-center gap-1.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-gold-metallic/80" />
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center p-8 bg-white/70 dark:bg-black/25 border border-gold-metallic/30 rounded-2xl">
                <p className="text-gold-metallic font-semibold text-base">
                  No modules match your current filter or keyword. Try resetting your query.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Inquiry Form at the bottom */}
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
