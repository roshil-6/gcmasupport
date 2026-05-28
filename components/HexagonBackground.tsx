'use client'

import { useEffect } from 'react'

export default function HexagonBackground() {
  useEffect(() => {
    // ── Pure vanilla JS ─────────────────────────────────────────────────────
    // Create and append canvas directly – bypasses ALL React / portal issues.
    const canvas = document.createElement('canvas')
    Object.assign(canvas.style, {
      position:      'fixed',
      top:           '0',
      left:          '0',
      width:         '100vw',
      height:        '100vh',
      zIndex:        '1',   // sits above body bg, below all page content (main is z-index: 2)
      pointerEvents: 'none',
      background:    'transparent',
      display:       'block',
    })
    canvas.setAttribute('aria-hidden', 'true')
    // Insert BEFORE React's root so all page content paints on top of canvas
    document.body.insertBefore(canvas, document.body.firstChild)

    const ctx = canvas.getContext('2d', { alpha: true })!

    // ── State ────────────────────────────────────────────────────────────────
    const R       = 28          // hex circumradius (center → vertex)
    const hexW    = Math.sqrt(3) * R  // pointy-top: width between parallel sides
    const hexH    = 1.5 * R          // row spacing (center-to-center vertically)

    let mouse  = { x: -9999, y: -9999 }
    let cells: Array<{ x: number; y: number; cur: number; tgt: number }> = []
    let rafId  = 0
    let alive  = true

    // ── Build grid ───────────────────────────────────────────────────────────
    const buildGrid = () => {
      const cols = Math.ceil(window.innerWidth  / hexW) + 3
      const rows = Math.ceil(window.innerHeight / hexH) + 3
      const light = document.body.classList.contains('theme-light')
      const base  = light ? 0.12 : 0.08
      cells = []
      for (let r = -1; r <= rows; r++) {
        const y    = r * hexH
        const xOff = (r % 2 + 2) % 2 === 1 ? hexW / 2 : 0
        for (let c = -1; c <= cols; c++) {
          const x = c * hexW + xOff
          cells.push({ x, y, cur: base, tgt: base })
        }
      }
    }

    // ── Resize ───────────────────────────────────────────────────────────────
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      const W   = innerWidth
      const H   = innerHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGrid()
      schedule()
    }

    // ── Draw one hexagon ─────────────────────────────────────────────────────
    const drawHex = (x: number, y: number, opacity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a  = (Math.PI / 3) * i
        const px = x + R * Math.cos(a)
        const py = y + R * Math.sin(a)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()

      const light = document.body.classList.contains('theme-light')
      // Gold on light bg, bright gold on dark bg
      const [r, g, b] = light ? [180, 120, 0] : [212, 175, 55]
      ctx.strokeStyle = `rgba(${r},${g},${b},${opacity})`
      ctx.lineWidth   = light
        ? 1.8 + (opacity - 0.40) * 3
        : 1.4 + (opacity - 0.25) * 3
      ctx.stroke()
    }

    // ── Render loop ──────────────────────────────────────────────────────────
    const render = () => {
      rafId = 0
      if (!alive) return

      ctx.clearRect(0, 0, innerWidth, innerHeight)

      const light   = document.body.classList.contains('theme-light')
      const base    = light ? 0.12 : 0.08
      const peak    = light ? 0.42 : 0.48
      const maxD    = 220
      const maxDSq  = maxD * maxD
      let   dirty   = false

      cells.forEach(cell => {
        const dx  = mouse.x - cell.x
        const dy  = mouse.y - cell.y
        const dSq = dx * dx + dy * dy
        const tgt = dSq < maxDSq
          ? base + (peak - base) * Math.pow(1 - Math.sqrt(dSq) / maxD, 1.5)
          : base

        const diff = tgt - cell.cur
        if (Math.abs(diff) > 0.001) { cell.cur += diff * 0.12; dirty = true }
        else cell.cur = tgt

        drawHex(cell.x, cell.y, cell.cur)
      })

      if (dirty || mouse.x !== -9999) schedule()
    }

    const schedule = () => { if (!rafId && alive) rafId = requestAnimationFrame(render) }

    // ── Event listeners ───────────────────────────────────────────────────────
    const onMove  = (e: PointerEvent) => { mouse = { x: e.clientX, y: e.clientY }; schedule() }
    const onLeave = ()                 => { mouse = { x: -9999, y: -9999 };        schedule() }
    const onVis   = ()                 => { if (document.visibilityState === 'visible') schedule() }
    const onResize = ()                => resize()

    window.addEventListener('resize',       onResize)
    window.addEventListener('pointermove',  onMove,   { passive: true })
    window.addEventListener('pointerdown',  onMove,   { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVis)

    resize() // initial setup + first frame

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      alive = false
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('resize',        onResize)
      window.removeEventListener('pointermove',   onMove)
      window.removeEventListener('pointerdown',   onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
    }
  }, [])

  return null // Canvas lives entirely in the DOM, not in React's vdom
}
