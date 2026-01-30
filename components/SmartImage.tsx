'use client'

import Image, { type ImageProps } from 'next/image'
import { useMemo, useState } from 'react'

function toSvgDataUri(label: string) {
  const safe = (label || 'Image').slice(0, 60)
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b0f16"/>
      <stop offset="100%" stop-color="#121a2a"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#f5d56a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect x="48" y="48" width="1104" height="704" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(212,175,55,0.35)" stroke-width="3"/>
  <g fill="url(#gold)" opacity="0.9">
    <circle cx="600" cy="310" r="88"/>
    <rect x="562" y="222" width="76" height="176" rx="12"/>
    <rect x="512" y="272" width="176" height="76" rx="12"/>
  </g>
  <text x="600" y="520" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" fill="#ffffff" opacity="0.95">
    Image unavailable
  </text>
  <text x="600" y="580" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#d4af37" opacity="0.95">
    ${safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
  </text>
</svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function isRemoteSrc(src: unknown): src is string {
  return typeof src === 'string' && /^https?:\/\//i.test(src)
}

type SmartImageProps = ImageProps & {
  fallbackText?: string
}

export default function SmartImage(props: SmartImageProps) {
  const { src, alt, fallbackText, onError, ...rest } = props
  const fallbackSrc = useMemo(() => toSvgDataUri(fallbackText ?? alt ?? 'Image'), [alt, fallbackText])
  const [currentSrc, setCurrentSrc] = useState<ImageProps['src']>(src)

  return (
    <Image
      {...rest}
      alt={alt}
      src={currentSrc}
      // If the optimizer can't fetch (common in some networks), let the browser fetch directly.
      unoptimized={isRemoteSrc(currentSrc)}
      onError={(e) => {
        onError?.(e)
        // Avoid infinite loop if fallback also fails for some reason.
        if (typeof currentSrc === 'string' && currentSrc.startsWith('data:image/svg+xml')) return
        setCurrentSrc(fallbackSrc)
      }}
    />
  )
}

