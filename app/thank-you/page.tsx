import { redirect } from 'next/navigation'
import { thankYouSearchPath, SUBMISSION_SUCCESS_PATH } from '@/lib/thank-you-path'

/** Legacy URL; all traffic goes to the dedicated submission success page. */
export default function ThankYouLegacyRedirect({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const raw = searchParams.type
  const typeParam =
    typeof raw === 'string' ? raw : Array.isArray(raw) && raw[0] ? raw[0] : undefined
  if (typeParam) {
    redirect(thankYouSearchPath(typeParam))
  }
  redirect(SUBMISSION_SUCCESS_PATH)
}
