'use client'

import { useEffect, useRef } from 'react'

export default function HeroMobileParticles({ className = 'z-[2]' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = canvas.width = canvas.clientWidth || window.innerWidth
    let height = canvas.height = canvas.clientHeight || window.innerHeight

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.clientWidth || window.innerWidth
      height = canvas.height = canvas.clientHeight || window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse coordinates & state (repels particles)
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 120, // Repulsion radius
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      }
    }

    const handleTouchEnd = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    // Spawn a burst of sparkles on click/tap
    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      createBurst(clickX, clickY)
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        const clickX = e.touches[0].clientX - rect.left
        const clickY = e.touches[0].clientY - rect.top
        createBurst(clickX, clickY)
      }
    }

    // Attach listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('click', handleMouseClick)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('touchcancel', handleTouchEnd)

    interface Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      vx: number
      vy: number
      alpha: number
      maxAlpha: number
      fadeSpeed: number
      glowRadius: number
      color: string
      type: 'speck' | 'blob' | 'burst'
      speed: number
    }

    const particles: Particle[] = []
    
    // Choose particle counts dynamically (fewer on mobile for speed)
    const isMobile = window.innerWidth < 768
    const numSpecks = isMobile ? 35 : 85
    const numBlobs = isMobile ? 8 : 22

    const randomRange = (min: number, max: number) => Math.random() * (max - min) + min

    // Create a burst of fast particles on click/tap
    const createBurst = (cx: number, cy: number) => {
      const numBurstParticles = isMobile ? 12 : 24
      for (let i = 0; i < numBurstParticles; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = randomRange(1.8, 4.5)
        particles.push({
          x: cx,
          y: cy,
          baseX: cx + Math.cos(angle) * randomRange(40, 120),
          baseY: cy + Math.sin(angle) * randomRange(40, 120),
          size: randomRange(1.5, 3.8),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1.0,
          maxAlpha: 1.0,
          fadeSpeed: -randomRange(0.015, 0.035), // Negative means fading out completely
          glowRadius: randomRange(8, 22),
          color: '#ffffff', // Brilliant white-gold burst sparkles
          type: 'burst',
          speed: 0.1
        })
      }
    }

    // Specks: Tiny bright glowing golden dust particles
    for (let i = 0; i < numSpecks; i++) {
      const px = Math.random() * width
      const py = Math.random() * height
      particles.push({
        x: px,
        y: py,
        baseX: px,
        baseY: py,
        size: randomRange(1.2, 3.2),
        vx: 0,
        vy: 0,
        alpha: randomRange(0.4, 0.95),
        maxAlpha: randomRange(0.8, 1.0),
        fadeSpeed: randomRange(0.005, 0.015),
        glowRadius: randomRange(5, 12),
        color: '#ffdf85',
        type: 'speck',
        speed: randomRange(0.06, 0.18)
      })
    }

    // Blobs: Large ambient glowing gold spheres
    for (let i = 0; i < numBlobs; i++) {
      const px = Math.random() * width
      const py = Math.random() * height
      particles.push({
        x: px,
        y: py,
        baseX: px,
        baseY: py,
        size: randomRange(40, 110),
        vx: 0,
        vy: 0,
        alpha: randomRange(0.04, 0.18),
        maxAlpha: randomRange(0.12, 0.28),
        fadeSpeed: randomRange(0.002, 0.008),
        glowRadius: 0,
        color: '#ffd97d',
        type: 'blob',
        speed: randomRange(0.03, 0.1)
      })
    }

    // Canvas Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Loop backwards to allow safe removal of dead burst particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // 1. Check if temporary burst particle has faded out
        if (p.type === 'burst' && p.alpha <= 0.02) {
          particles.splice(i, 1)
          continue
        }

        // 2. Physics & forces
        if (p.type === 'burst') {
          // Burst particles travel outward and decelerate
          p.x += p.vx
          p.y += p.vy
          p.vx *= 0.95
          p.vy *= 0.95
          p.alpha += p.fadeSpeed // Fades out
        } else {
          // Standard specks and blobs
          const time = Date.now() * 0.001
          p.baseX += Math.sin(time + p.size) * p.speed * 0.15
          p.baseY += Math.cos(time + p.size) * p.speed * 0.15

          // Interactive repulsion force from cursor/touch
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            const angle = Math.atan2(dy, dx)
            const accel = p.type === 'speck' ? 1.6 : 0.45
            p.vx -= Math.cos(angle) * force * accel
            p.vy -= Math.sin(angle) * force * accel
          }

          // Return force to original coordinates
          const springStrength = p.type === 'speck' ? 0.025 : 0.008
          p.vx += (p.baseX - p.x) * springStrength
          p.vy += (p.baseY - p.y) * springStrength

          // Damping
          const damping = p.type === 'speck' ? 0.93 : 0.95
          p.vx *= damping
          p.vy *= damping

          // Update position
          p.x += p.vx
          p.y += p.vy

          // Standard glowing pulse
          p.alpha += p.fadeSpeed
          if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
            p.fadeSpeed = -p.fadeSpeed
          }
          p.alpha = Math.max(0.02, Math.min(p.alpha, p.maxAlpha))
        }

        // 3. Draw particle
        if (p.type === 'speck' || p.type === 'burst') {
          ctx.save()
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          
          ctx.shadowBlur = p.glowRadius
          ctx.shadowColor = '#d4af37'
          // Burst sparkles are brilliant white, standard specks are gold
          ctx.fillStyle = p.type === 'burst' 
            ? `rgba(255, 255, 255, ${p.alpha})`
            : `rgba(255, 240, 150, ${p.alpha})`
          ctx.fill()
          ctx.restore()
        } else {
          ctx.save()
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
          grad.addColorStop(0, `rgba(255, 225, 140, ${p.alpha})`)
          grad.addColorStop(0.3, `rgba(212, 175, 55, ${p.alpha * 0.5})`)
          grad.addColorStop(0.7, `rgba(184, 134, 11, ${p.alpha * 0.12})`)
          grad.addColorStop(1, 'transparent')

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
          ctx.restore()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup listeners
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('click', handleMouseClick)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
