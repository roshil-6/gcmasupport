'use client'

import { useEffect, useRef } from 'react'

interface Hexagon {
  baseX: number
  baseY: number
  size: number
  opacity: number
  rotation: number
  phase: number
}

interface Spark {
  x: number
  y: number
  size: number
  opacity: number
  drift: number
}

export default function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: -1000, y: -1000 })
  const hexagonsRef = useRef<Hexagon[]>([])
  const sparksRef = useRef<Spark[]>([])
  const isMobileRef = useRef(false)
  const isLightThemeRef = useRef(true)
  const reduceMotionRef = useRef(false)
  const isVisibleRef = useRef(true)
  const isScrollingRef = useRef(false)
  const frameRef = useRef(0)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef(0)

  useEffect(() => {
    const updateTheme = () => {
      isLightThemeRef.current = document.body.classList.contains('theme-light')
    }
    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    isMobileRef.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let pointerThrottle: ReturnType<typeof setTimeout> | null = null

    const initializeField = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const hexCount = isMobileRef.current ? 18 : 34
      const sparkCount = isMobileRef.current ? 24 : 48
      const baseSize = isMobileRef.current ? 18 : 24
      const sizeRange = isMobileRef.current ? 20 : 32
      const cols = Math.ceil(Math.sqrt(hexCount * (width / height)))
      const rows = Math.ceil(hexCount / cols)
      const cellWidth = width / cols
      const cellHeight = height / rows

      hexagonsRef.current = Array.from({ length: hexCount }, (_, index) => {
        const col = index % cols
        const row = Math.floor(index / cols)
        const baseX = col * cellWidth + cellWidth / 2
        const baseY = row * cellHeight + cellHeight / 2
        const offsetX = (Math.random() - 0.5) * cellWidth * 0.45
        const offsetY = (Math.random() - 0.5) * cellHeight * 0.45

        return {
          baseX: baseX + offsetX,
          baseY: baseY + offsetY,
          size: baseSize + Math.random() * sizeRange,
          opacity: 0.06 + Math.random() * 0.12,
          rotation: Math.random() * Math.PI * 2,
          phase: Math.random() * Math.PI * 2,
        }
      })

      sparksRef.current = Array.from({ length: sparkCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.2,
        opacity: 0.12 + Math.random() * 0.28,
        drift: Math.random() * Math.PI * 2,
      }))
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      initializeField()
    }

    const drawHexagon = (
      x: number,
      y: number,
      size: number,
      opacity: number,
      rotation: number
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()

      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 3) * i
        const hx = size * Math.cos(angle)
        const hy = size * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }

      ctx.closePath()
      const isLight = isLightThemeRef.current
      const strokeOpacity = isLight ? Math.min(1, opacity * 2.4) : opacity
      const strokeRgb = isLight ? '164, 119, 35' : '201, 169, 97'
      ctx.strokeStyle = `rgba(${strokeRgb}, ${strokeOpacity})`
      ctx.lineWidth = isLight ? 1.2 : 1
      ctx.stroke()
      ctx.restore()
    }

    const drawSpark = (x: number, y: number, size: number, opacity: number) => {
      const isLight = isLightThemeRef.current
      const fillRgb = isLight ? '184, 134, 45' : '212, 175, 55'
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${fillRgb}, ${opacity})`
      ctx.fill()
    }

    const render = (timestamp: number) => {
      animationFrameRef.current = window.requestAnimationFrame(render)

      if (!isVisibleRef.current) return

      const minFrameGap = reduceMotionRef.current
        ? 0
        : isMobileRef.current
          ? 48
          : 32

      if (minFrameGap > 0 && timestamp - lastFrameTimeRef.current < minFrameGap) {
        return
      }
      lastFrameTimeRef.current = timestamp

      const width = window.innerWidth
      const height = window.innerHeight
      ctx.clearRect(0, 0, width, height)

      frameRef.current += 1
      const time = frameRef.current * 0.06
      const mouseX = mousePosRef.current.x
      const mouseY = mousePosRef.current.y
      const maxDistance = isMobileRef.current ? 240 : 320
      const maxDistanceSq = maxDistance * maxDistance
      const parallaxIntensity = isMobileRef.current ? 18 : 28
      const repulsionStrength = isMobileRef.current ? 26 : 36
      const animateFloat = !reduceMotionRef.current && !isScrollingRef.current && !isMobileRef.current

      hexagonsRef.current.forEach((hex, index) => {
        const dx = mouseX - hex.baseX
        const dy = mouseY - hex.baseY
        const distanceSq = dx * dx + dy * dy

        let offsetX = 0
        let offsetY = 0
        let glowOpacity = hex.opacity

        if (!isMobileRef.current && distanceSq < maxDistanceSq && distanceSq > 0) {
          const distance = Math.sqrt(distanceSq)
          const influence = 1 - distance / maxDistance
          const repulsionFactor = Math.min(1, repulsionStrength / distance)
          offsetX = -(dx / distance) * parallaxIntensity * influence * repulsionFactor
          offsetY = -(dy / distance) * parallaxIntensity * influence * repulsionFactor

          if (distance < 140) {
            glowOpacity = hex.opacity + (1 - distance / 140) * 0.22
          }
        }

        const floatX = animateFloat ? Math.sin(time * 0.45 + hex.phase + index * 0.35) * 3.5 : 0
        const floatY = animateFloat ? Math.cos(time * 0.5 + hex.phase + index * 0.28) * 3.5 : 0
        const rotation = animateFloat ? hex.rotation + time * 0.03 : hex.rotation

        drawHexagon(
          hex.baseX + offsetX + floatX,
          hex.baseY + offsetY + floatY,
          hex.size,
          glowOpacity,
          rotation
        )
      })

      sparksRef.current.forEach((spark, index) => {
        const dx = mouseX - spark.x
        const dy = mouseY - spark.y
        const distanceSq = dx * dx + dy * dy
        let x = spark.x
        let y = spark.y
        let opacity = spark.opacity

        if (!isMobileRef.current && distanceSq < maxDistanceSq && distanceSq > 0) {
          const distance = Math.sqrt(distanceSq)
          const influence = 1 - distance / maxDistance
          const push = influence * 0.35
          x -= (dx / distance) * push * 18
          y -= (dy / distance) * push * 18
          opacity = Math.min(0.85, spark.opacity + influence * 0.35)
        }

        if (animateFloat) {
          x += Math.cos(time * 0.8 + spark.drift + index) * 0.8
          y += Math.sin(time * 0.7 + spark.drift + index) * 0.8
        }

        drawSpark(x, y, spark.size, opacity)
      })
    }

    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible'
    }

    const handlePointerEvent = (x: number, y: number) => {
      if (pointerThrottle) return
      mousePosRef.current = { x, y }
      pointerThrottle = setTimeout(() => {
        pointerThrottle = null
      }, 24)
    }

    const handleScroll = () => {
      isScrollingRef.current = true
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 90)
    }

    resizeCanvas()

    if (!reduceMotionRef.current) {
      animationFrameRef.current = window.requestAnimationFrame(render)
    } else {
      render(performance.now())
    }

    const onResize = () => resizeCanvas()
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      handlePointerEvent(event.clientX, event.clientY)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
      if (pointerThrottle) clearTimeout(pointerThrottle)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  )
}
