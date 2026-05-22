import { getSiteUrl, SITE_NAME } from '@/lib/seo'

export type BreadcrumbItem = {
  name: string
  path: string
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}) {
  const siteUrl = getSiteUrl()
  const url = `${siteUrl}${path}`

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'en',
    publisher: { '@id': `${siteUrl}/#organization` },
  }
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[],
  pagePath: string
) {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    url: `${siteUrl}${pagePath}`,
    isPartOf: { '@id': `${siteUrl}/#website` },
    publisher: { name: SITE_NAME },
  }
}
