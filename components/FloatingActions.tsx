'use client'

import { usePathname } from 'next/navigation'
import ContactFloatButton from '@/components/ContactFloatButton'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'

export default function FloatingActions() {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <div className="pointer-events-auto">
        <ContactFloatButton />
      </div>
      <div className="pointer-events-auto">
        <WhatsAppFloatButton />
      </div>
    </div>
  )
}
