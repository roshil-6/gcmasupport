import { nurseCountryMetadata } from '@/lib/seo-nurse-countries'

export const metadata = nurseCountryMetadata('germany')

export default function NursesGermanyLayout({ children }: { children: React.ReactNode }) {
  return children
}
