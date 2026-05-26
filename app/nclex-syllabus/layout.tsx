import PageSeoContent from '@/components/PageSeoContent'
import { seoContent } from '@/lib/seo-content'
import { seoPages } from '@/lib/seo-pages'

export const metadata = seoPages.nclexSyllabus

export default function NclexSyllabusLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageSeoContent {...seoContent.nclexSyllabus} />
    </>
  )
}
