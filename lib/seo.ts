import type { Metadata } from 'next'

export const SITE_NAME = 'GCMA & Social Welfare'
export const SITE_SHORT_NAME = 'GCMA'
export const SITE_DESCRIPTION =
  'Global Council for Migration Awareness and Social Welfare (GCMA) provides immigration fraud reporting, humanitarian aid, nursing registration abroad, study abroad counseling, skilled migration advice, visit visa guidance, English classes, and community welfare programs for students, nurses, and families worldwide.'

/** Default social preview image (must exist under /public). */
export const DEFAULT_OG_IMAGE_PATH = '/home/gcma-hero-brand.png'

const DEFAULT_SITE_URL = 'http://localhost:3030'

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!configured) return DEFAULT_SITE_URL
  return configured.replace(/\/$/, '')
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
  ogImagePath?: string
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl()
  const canonical = `${siteUrl}${path}`
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`
  const ogImageUrl = `${siteUrl}${ogImagePath.startsWith('/') ? ogImagePath : `/${ogImagePath}`}`

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — migration awareness and social welfare`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'NGO'],
        '@id': `${siteUrl}/#organization`,
        name: SITE_NAME,
        alternateName: 'Global Council for Migration Awareness and Social Welfare',
        url: siteUrl,
        description: SITE_DESCRIPTION,
        areaServed: 'Worldwide',
        knowsAbout: [
          'Immigration fraud reporting',
          'Humanitarian aid',
          'Nursing registration abroad',
          'Study abroad counseling',
          'Skilled migration advice',
          'English language training',
          'Visit visa guidance',
          'Travel planning support',
          'Volunteer tutoring',
          'Charity and education assistance',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'GCMA Public Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Immigration fraud reporting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Study abroad counseling' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nursing registration guidance' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Humanitarian aid support' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en',
      },
    ],
  }
}
