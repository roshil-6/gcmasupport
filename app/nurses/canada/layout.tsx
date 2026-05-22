import { nurseCountryMetadata } from '@/lib/seo-nurse-countries'

export const metadata = nurseCountryMetadata('canada')

export default function NursesCanadaLayout({ children }: { children: React.ReactNode }) {
  return children
}
