import { nurseCountryMetadata } from '@/lib/seo-nurse-countries'

export const metadata = nurseCountryMetadata('denmark')

export default function NursesDenmarkLayout({ children }: { children: React.ReactNode }) {
  return children
}
