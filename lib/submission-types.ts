export type SubmissionType =
  | 'immigration-fraud'
  | 'medical-assistance'
  | 'education-support'
  | 'english-govt-students'
  | 'english-private-students'
  | 'english-academy'
  | 'bts-student'
  | 'bts-tutor'
  | 'contact'
  | 'nurses-applications'
  | 'nursing-au-financial-support'
  | 'nursing-au-fully-funded'
  | 'study-abroad-consultation'

/** Single source of truth for admin filters and JSON file names */
export const SUBMISSION_TYPES: SubmissionType[] = [
  'immigration-fraud',
  'medical-assistance',
  'education-support',
  'english-govt-students',
  'english-private-students',
  'english-academy',
  'bts-student',
  'bts-tutor',
  'contact',
  'nurses-applications',
  'nursing-au-financial-support',
  'nursing-au-fully-funded',
  'study-abroad-consultation',
]

/** Human-readable labels for admin dashboard */
export const SUBMISSION_TYPE_LABELS: Record<SubmissionType, string> = {
  'immigration-fraud': 'Report a scam (Immigration fraud)',
  'medical-assistance': 'Medical assistance',
  'education-support': 'Charity — Girl student education support',
  'english-govt-students': 'English classes — Government school students',
  'english-private-students': 'English classes — Private school students',
  'english-academy': 'English Academy (adults / exam prep)',
  'bts-student': 'Break the Silence — Student',
  'bts-tutor': 'Break the Silence — Tutor (child tutor)',
  contact: 'Contact',
  'nurses-applications': 'Nurses applications',
  'nursing-au-financial-support': 'Australia — Nursing financial support',
  'nursing-au-fully-funded': 'Australia — Nursing fully funded program',
  'study-abroad-consultation': 'Study abroad consultation',
}

export function isSubmissionType(value: string): value is SubmissionType {
  return (SUBMISSION_TYPES as readonly string[]).includes(value)
}

export function getSubmissionTypeLabel(type: string): string {
  if (type in SUBMISSION_TYPE_LABELS) {
    return SUBMISSION_TYPE_LABELS[type as SubmissionType]
  }
  return type
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
