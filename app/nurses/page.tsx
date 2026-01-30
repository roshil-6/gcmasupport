import { redirect } from 'next/navigation'

export default function NursesOverviewPage() {
  // No overview page required — go directly to a country page.
  redirect('/nurses/australia')
}

