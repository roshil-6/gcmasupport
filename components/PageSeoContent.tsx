import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo-jsonld'

export type PageSeoLink = {
  href: string
  label: string
}

export type PageSeoBreadcrumb = {
  name: string
  path: string
}

export type PageSeoContentProps = {
  heading: string
  headingLevel?: 'h1' | 'h2'
  paragraphs: string[]
  links?: PageSeoLink[]
  className?: string
  breadcrumbs?: PageSeoBreadcrumb[]
  pagePath?: string
  webPageTitle?: string
  webPageDescription?: string
}

export default function PageSeoContent({
  heading,
  headingLevel = 'h2',
  paragraphs,
  links,
  className = '',
  breadcrumbs,
  pagePath,
  webPageTitle,
  webPageDescription,
}: PageSeoContentProps) {
  const HeadingTag = headingLevel
  const jsonLdGraph: Record<string, unknown>[] = []

  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonLdGraph.push(breadcrumbJsonLd(breadcrumbs))
  }
  if (pagePath && webPageTitle && webPageDescription) {
    jsonLdGraph.push(
      webPageJsonLd({
        path: pagePath,
        title: webPageTitle,
        description: webPageDescription,
      })
    )
  }

  return (
    <>
      {jsonLdGraph.length > 0 ? <JsonLd data={jsonLdGraph} /> : null}
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav
          aria-label="Breadcrumb"
          className={`relative z-10 px-4 pt-6 ${className ? '' : ''}`}
        >
          <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-1 text-sm text-white/75">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <li key={crumb.path} className="flex items-center gap-1">
                  {index > 0 ? (
                    <span className="text-gold-metallic/50" aria-hidden="true">
                      /
                    </span>
                  ) : null}
                  {isLast ? (
                    <span className="text-gold-metallic/90" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.path}
                      className="text-gold-metallic hover:text-gold-bright transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      ) : null}
    <section
      aria-labelledby="page-seo-content"
      className={`relative z-10 px-4 py-10 md:py-12 ${className}`}
    >
      <div className="max-w-4xl mx-auto glass-card dark-container rounded-2xl p-8 md:p-10 space-y-4">
        <HeadingTag id="page-seo-content" className="text-2xl md:text-3xl font-bold text-gold-metallic">
          {heading}
        </HeadingTag>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="page-intro text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
        {links && links.length > 0 ? (
          <nav aria-label="Related pages" className="flex flex-wrap gap-3 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gold-metallic hover:text-gold-bright font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
    </>
  )
}
