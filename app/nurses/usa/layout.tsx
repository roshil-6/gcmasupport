import { nurseCountryMetadata } from '@/lib/seo-nurse-countries'

export const metadata = nurseCountryMetadata('usa')

export default function NursesUsaLayout({ children }: { children: React.ReactNode }) {
  return children
}
