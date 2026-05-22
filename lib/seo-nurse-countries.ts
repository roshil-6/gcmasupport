import { buildPageMetadata } from '@/lib/seo'

const nurseCountryMeta: Record<
  string,
  { title: string; description: string; ogImagePath: string }
> = {
  australia: {
    title: 'Nursing in Australia — Registration and Career Guidance',
    description:
      'Overview of nursing careers in Australia, including AHPRA and NMBA registration context, workplace settings, and GCMA support for internationally qualified nurses exploring lawful pathways.',
    ogImagePath: '/nursing/photos/australia-banner.jpg',
  },
  canada: {
    title: 'Nursing in Canada — Registration and Career Guidance',
    description:
      'Information for internationally educated nurses considering Canada, including licensing overview, language requirements, and GCMA guidance for registration planning.',
    ogImagePath: '/nursing/photos/canada-banner.jpg',
  },
  denmark: {
    title: 'Nursing in Denmark — Registration and Career Guidance',
    description:
      'Country-specific nursing guidance for Denmark, covering registration frameworks, work settings, and how GCMA can help you prepare applications and documentation.',
    ogImagePath: '/nursing/photos/denmark-banner.jpg',
  },
  germany: {
    title: 'Nursing in Germany — Registration and Career Guidance',
    description:
      'Guidance for nurses exploring Germany, including recognition of qualifications, language expectations, and practical steps before applying to employers or regulators.',
    ogImagePath: '/nursing/photos/germany-banner.jpg',
  },
  malta: {
    title: 'Nursing in Malta — Registration and Career Guidance',
    description:
      'Learn about nursing opportunities in Malta, EU-context registration considerations, and GCMA support for internationally qualified nurses.',
    ogImagePath: '/nursing/photos/malta-banner.jpg',
  },
  'new-zealand': {
    title: 'Nursing in New Zealand — Registration and Career Guidance',
    description:
      'Overview of nursing pathways in New Zealand, including registration requirements context and GCMA assistance for overseas-qualified nurses.',
    ogImagePath: '/nursing/photos/cards/new-zealand.jpg',
  },
  uae: {
    title: 'Nursing in the UAE — Registration and Career Guidance',
    description:
      'Information on nursing employment and licensing context in the United Arab Emirates, with GCMA support for documentation and career planning.',
    ogImagePath: '/nursing/photos/uae-banner.jpg',
  },
  'united-kingdom': {
    title: 'Nursing in the United Kingdom — Registration and Career Guidance',
    description:
      'Guidance for nurses considering the UK, including NMC registration context, care settings, and GCMA support for internationally educated applicants.',
    ogImagePath: '/nursing/photos/cards/united-kingdom.jpg',
  },
  usa: {
    title: 'Nursing in the United States — Registration and Career Guidance',
    description:
      'Overview of nursing licensure pathways in the United States for internationally educated nurses, with realistic eligibility and documentation planning from GCMA.',
    ogImagePath: '/nursing/photos/usa-banner.jpg',
  },
}

export function nurseCountryMetadata(slug: keyof typeof nurseCountryMeta) {
  const entry = nurseCountryMeta[slug]
  if (!entry) {
    throw new Error(`Unknown nurse country slug: ${slug}`)
  }
  return buildPageMetadata({
    title: entry.title,
    description: entry.description,
    path: `/nurses/${slug}`,
    ogImagePath: entry.ogImagePath,
    keywords: [
      `nursing in ${slug.replace(/-/g, ' ')}`,
      'overseas nurse registration',
      'international nursing careers',
      'GCMA nursing guidance',
    ],
  })
}
