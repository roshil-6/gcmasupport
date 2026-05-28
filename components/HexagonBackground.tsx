'use client'

import { useEffect, useRef } from 'react'

interface HexCell {
  x: number
  y: number
  currentOpacity: number
  targetOpacity: number
}

export default function HexagonBackground({ className = "fixed inset-0", zIndex = 9999 }: { className?: string; zIndex?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: -1000, y: -1000 })
  const gridCellsRef = useRef<HexCell[]>([])
  const isMobileRef = useRef(false)
  const isLightThemeRef = useRef(true)
  const reduceMotionRef = useRef(false)
  const isVisibleRef = useRef(true)
  const animationFrameRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef(0)
  const isAnimatingRef = useRef(false)

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

    let loggedFirstRender = false

    isMobileRef.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const R = 32 // Hexagon radius
    const w = Math.sqrt(3) * R // Horizontal spacing
    const h_dist = 1.5 * R // Vertical spacing

    const initializeField = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      const cols = Math.ceil(width / w) + 1
      const rows = Math.ceil(height / h_dist) + 1
      
      const cells: HexCell[] = []
      const isLight = isLightThemeRef.current
      const baseOpacity = isLight ? 0.15 : 0.12
      
      for (let r = -1; r <= rows; r++) {
        const y = r * h_dist
        const xOffset = r % 2 === 1 ? w / 2 : 0
        for (let c = -1; c <= cols; c++) {
          const x = c * w + xOffset
          cells.push({
            x,
            y,
            currentOpacity: baseOpacity,
            targetOpacity: baseOpacity,
          })
        }
      }
      
      gridCellsRef.current = cells
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
      console.log(`[HexagonBackground] Canvas sized to ${width}x${height} (DPR ${dpr}), cells: ${gridCellsRef.current.length}`)
      wakeUp()
    }

    const drawHexagon = (x: number, y: number, opacity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 3) * i
        const hx = x + R * Math.cos(angle)
        const hy = y + R * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()

      const isLight = isLightThemeRef.current
      const strokeRgb = isLight ? '184, 134, 11' : '212, 175, 55' // Goldenrod / Gold
      ctx.strokeStyle = `rgba(${strokeRgb}, ${opacity})`
      
      // Slightly thicker lines for active/glowing hexagons
      const baseOpacity = isLight ? 0.15 : 0.12
      if (opacity > baseOpacity + 0.01) {
        ctx.lineWidth = isLight 
          ? 1.75 + (opacity - baseOpacity) * 3.0 
          : 1.25 + (opacity - baseOpacity) * 3.5
      } else {
        ctx.lineWidth = isLight ? 1.5 : 1.25
      }

      ctx.stroke()
    }

    const render = (timestamp: number) => {
      animationFrameRef.current = null

      if (!isVisibleRef.current) {
        isAnimatingRef.current = false
        return
      }

      if (!loggedFirstRender) {
        console.log(`[HexagonBackground] Rendering first frame with ${gridCellsRef.current.length} cells`)
        loggedFirstRender = true
      }

      const minFrameGap = reduceMotionRef.current ? 0 : 24 // throttle to ~40fps for perfect smoothness/battery
      if (minFrameGap > 0 && timestamp - lastFrameTimeRef.current < minFrameGap) {
        animationFrameRef.current = window.requestAnimationFrame(render)
        return
      }
      lastFrameTimeRef.current = timestamp

      const width = window.innerWidth
      const height = window.innerHeight
      ctx.clearRect(0, 0, width, height)

      // DEBUG: Render a red rectangle in the top-left to check visibility
      ctx.fillStyle = 'rgba(255, 0, 0, 0.4)'
      ctx.fillRect(20, 20, 150, 150)
      ctx.font = '16px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText('Canvas Active', 30, 100)

      const mouseX = mousePosRef.current.x
      const mouseY = mousePosRef.current.y
      const maxDistance = isMobileRef.current ? 120 : 180
      const maxDistanceSq = maxDistance * maxDistance
      
      const isLight = isLightThemeRef.current
      const baseOpacity = isLight ? 0.15 : 0.12
      const maxGlowOpacity = isLight ? 0.45 : 0.55

      let needsMoreFrames = false

      gridCellsRef.current.forEach((cell) => {
        const dx = mouseX - cell.x
        const dy = mouseY - cell.y
        const distSq = dx * dx + dy * dy

        let targetOpacity = baseOpacity
        if (distSq < maxDistanceSq) {
          const dist = Math.sqrt(distSq)
          const influence = 1.0 - dist / maxDistance
          targetOpacity = baseOpacity + (maxGlowOpacity - baseOpacity) * Math.pow(influence, 1.5)
        }

        // LERP opacity
        const diff = targetOpacity - cell.currentOpacity
        if (Math.abs(diff) > 0.001) {
          cell.currentOpacity += diff * 0.08
          needsMoreFrames = true
        } else {
          cell.currentOpacity = targetOpacity
        }

        drawHexagon(cell.x, cell.y, cell.currentOpacity)
      })

      if (needsMoreFrames || mousePosRef.current.x !== -1000) {
        isAnimatingRef.current = true
        animationFrameRef.current = window.requestAnimationFrame(render)
      } else {
        isAnimatingRef.current = false
      }
    }

    const wakeUp = () => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true
        animationFrameRef.current = window.requestAnimationFrame(render)
      }
    }

    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible'
      if (isVisibleRef.current) wakeUp()
    }

    const handlePointerEvent = (x: number, y: number) => {
      mousePosRef.current = { x, y }
      wakeUp()
    }

    const handlePointerLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 }
      wakeUp()
    }

    resizeCanvas()

    const onResize = () => resizeCanvas()
    const onPointerMove = (event: PointerEvent) => {
      handlePointerEvent(event.clientX, event.clientY)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'transparent',
        zIndex,
      }}
      aria-hidden="true"
    />
  )
}
