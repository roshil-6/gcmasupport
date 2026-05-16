'use client'

import { motion, useReducedMotion } from 'framer-motion'

/** Soft glows — gold-forward so they read on cream / white */
const BLOBS: { x: number; y: number; size: number; duration: number; delay: number }[] = [
  { x: 8, y: 10, size: 64, duration: 5.2, delay: 0 },
  { x: 84, y: 6, size: 54, duration: 4.6, delay: 0.4 },
  { x: 20, y: 32, size: 44, duration: 5.8, delay: 0.2 },
  { x: 74, y: 38, size: 72, duration: 4.2, delay: 0.6 },
  { x: 48, y: 16, size: 48, duration: 5.4, delay: 0.1 },
  { x: 94, y: 24, size: 38, duration: 4.8, delay: 0.8 },
  { x: 6, y: 58, size: 50, duration: 5, delay: 0.3 },
  { x: 56, y: 64, size: 58, duration: 4.4, delay: 0.5 },
  { x: 90, y: 70, size: 42, duration: 5.6, delay: 0.15 },
  { x: 30, y: 78, size: 52, duration: 4.5, delay: 0.7 },
  { x: 64, y: 86, size: 40, duration: 5.1, delay: 0.25 },
  { x: 40, y: 50, size: 46, duration: 4.9, delay: 0.35 },
  { x: 14, y: 20, size: 34, duration: 5.3, delay: 0.55 },
  { x: 52, y: 44, size: 62, duration: 4.3, delay: 0.45 },
  { x: 72, y: 12, size: 36, duration: 4.7, delay: 0.2 },
  { x: 32, y: 92, size: 56, duration: 5.5, delay: 0.5 },
]

/** Tiny sharp glints — visible “golden dust” */
const SPECKS: { x: number; y: number; duration: number; delay: number }[] = [
  { x: 12, y: 18, duration: 2.8, delay: 0 },
  { x: 44, y: 8, duration: 3.2, delay: 0.3 },
  { x: 78, y: 22, duration: 2.5, delay: 0.6 },
  { x: 24, y: 48, duration: 3.4, delay: 0.15 },
  { x: 91, y: 44, duration: 2.9, delay: 0.45 },
  { x: 56, y: 30, duration: 3.1, delay: 0.2 },
  { x: 8, y: 72, duration: 2.7, delay: 0.55 },
  { x: 68, y: 58, duration: 3.3, delay: 0.1 },
  { x: 38, y: 66, duration: 2.6, delay: 0.4 },
  { x: 86, y: 80, duration: 3, delay: 0.25 },
  { x: 18, y: 88, duration: 2.95, delay: 0.5 },
  { x: 62, y: 14, duration: 3.15, delay: 0.35 },
  { x: 48, y: 76, duration: 2.85, delay: 0.08 },
  { x: 96, y: 56, duration: 3.05, delay: 0.65 },
  { x: 28, y: 36, duration: 2.75, delay: 0.22 },
  { x: 74, y: 92, duration: 3.25, delay: 0.38 },
  { x: 52, y: 52, duration: 2.65, delay: 0.5 },
  { x: 6, y: 42, duration: 3.35, delay: 0.12 },
  { x: 34, y: 12, duration: 2.55, delay: 0.28 },
  { x: 58, y: 96, duration: 3.45, delay: 0.42 },
]

const blobGradient =
  'radial-gradient(circle, rgba(255,236,160,0.95) 0%, rgba(212,175,55,0.55) 32%, rgba(184,134,11,0.28) 52%, rgba(201,169,97,0.12) 68%, transparent 78%)'

export default function HeroMobileParticles() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {BLOBS.map((p, i) => (
        <motion.div
          key={`b-${i}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: blobGradient,
            filter: 'blur(6px)',
          }}
          initial={false}
          animate={
            reduceMotion
              ? { opacity: 0.72 }
              : {
                  opacity: [0.55, 0.92, 0.55],
                  scale: [1, 1.12, 1],
                  y: [0, -6, 0],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: p.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                }
          }
        />
      ))}
      {SPECKS.map((s, i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.95), 0 0 4px rgba(255, 255, 255, 0.9)',
          }}
          initial={false}
          animate={
            reduceMotion
              ? { opacity: 0.85, scale: 1 }
              : {
                  opacity: [0.45, 1, 0.45],
                  scale: [0.85, 1.15, 0.85],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: s.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: s.delay,
                }
          }
        />
      ))}
    </div>
  )
}
