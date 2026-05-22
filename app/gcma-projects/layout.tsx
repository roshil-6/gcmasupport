import PageSeoContent from '@/components/PageSeoContent'
import { seoContent } from '@/lib/seo-content'
import { seoPages } from '@/lib/seo-pages'

export const metadata = seoPages.gcmaProjects

export default function GCMAProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageSeoContent {...seoContent.gcmaProjects} />
    </>
  )
}
