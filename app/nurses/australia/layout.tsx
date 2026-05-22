import { nurseCountryMetadata } from '@/lib/seo-nurse-countries'

export const metadata = nurseCountryMetadata('australia')

export default function NursesAustraliaLayout({ children }: { children: React.ReactNode }) {
  return children
}
