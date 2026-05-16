import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/seo'

const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/study-abroad',
  '/travel',
  '/travel/uae-job-search',
  '/visit-visa',
  '/tutors',
  '/charity-support',
  '/migration-advice',
  '/migration-advice/skilled-migration/australia',
  '/migration-advice/skilled-migration/canada',
  '/nursing-registration',
  '/nurses',
  '/nurses/australia',
  '/nurses/canada',
  '/nurses/denmark',
  '/nurses/germany',
  '/nurses/malta',
  '/nurses/new-zealand',
  '/nurses/uae',
  '/nurses/united-kingdom',
  '/nurses/usa',
  '/english-classes/adults',
  '/english-classes/govt-students',
  '/english-classes/private-students',
  '/break-the-silence/student-tutor',
  '/calculators/canada-points',
  '/calculators/pr-calculator',
  '/gcma-projects',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length <= 2 ? 0.8 : 0.6,
  }))
}
