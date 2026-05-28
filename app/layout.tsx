import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import FloatingActions from '@/components/FloatingActions'
import HexagonBackground from '@/components/HexagonBackground'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  buildPageMetadata,
  getSiteUrl,
  organizationJsonLd,
} from '@/lib/seo'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fontDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  verification: {
    google: 'xt1N8fjtwtrOGlq3ZgJLsjz872dVCyUvnI0bYlbV4RE',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  ...buildPageMetadata({
    title: `${SITE_NAME} | Justice, Protection & Empowerment`,
    description: SITE_DESCRIPTION,
    path: '/',
    keywords: [
      'GCMA',
      'migration awareness',
      'immigration fraud reporting',
      'humanitarian aid',
      'study abroad counseling',
      'nursing registration abroad',
      'skilled migration advice',
      'social welfare programs',
    ],
  }),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = organizationJsonLd()

  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className={`${fontSans.className} antialiased theme-light`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HexagonBackground />
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}
