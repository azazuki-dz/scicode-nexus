'use client'

import { useEffect, useRef, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

const COLORS = ['#818cf8', '#22d3ee', '#a5f3fc', '#c4b5fd', '#f9a8d4']

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<'particles' | 'reveal' | 'done'>('particles')
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<Array<{x: number, y: number, vx: number, vy: number, radius: number, alpha: number, baseColor: string, glowColor: string}>>([])
  const glowSpritesRef = useRef<Record<string, HTMLCanvasElement>>({})

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Pre-render glow sprites
    const createGlowSprite = (radius: number, color: string) => {
      const sprite = document.createElement('canvas')
      sprite.width = radius * 2
      sprite.height = radius * 2
      const sctx = sprite.getContext('2d')!
      const grad = sctx.createRadialGradient(radius, radius, 0, radius, radius, radius)
      grad.addColorStop(0, color)
      grad.addColorStop(1, 'transparent')
      sctx.fillStyle = grad
      sctx.beginPath()
      sctx.arc(radius, radius, radius, 0, Math.PI * 2)
      sctx.fill()
      return sprite
    }

    COLORS.forEach(c => {
      glowSpritesRef.current[c] = createGlowSprite(32, c + '40')
    })

    // Initialize particles
    const nodeCount = Math.floor(Math.random() * 50) + 40
    particlesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.4 + 0.15,
      baseColor: COLORS[Math.floor(Math.random() * COLORS.length)],
      glowColor: COLORS[Math.floor(Math.random() * COLORS.length)]
    }))

    const startTime = performance.now()
    let revealStarted = false

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000

      if (elapsed > 2.5 && !revealStarted) {
        revealStarted = true
        setPhase('reveal')
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const maxDist = 140
      const maxDistSq = maxDist * maxDist

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const distSq = dx * dx + dy * dy
          if (distSq < maxDistSq) {
            const opacity = (1 - distSq / maxDistSq) * 0.08
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw particles with glow sprites
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const sprite = glowSpritesRef.current[p.glowColor]
        if (sprite) {
          ctx.globalAlpha = p.alpha * 0.6
          ctx.drawImage(sprite, p.x - 16, p.y - 16)
        }
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.baseColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1

      if (phase !== 'done') {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'reveal') {
      const timer = setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  if (phase === 'done') return null

  return (
    <div id="nexus-splash" className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="reveal-words text-center" style={{ opacity: phase === 'reveal' ? 1 : 0, transform: phase === 'reveal' ? 'none' : 'translateY(20px)', transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="astra-kicker">SCICODE · NEXUS</div>
          <h1 className="astra-title">
            <span className="astroword">เชื่อม</span>
            <span className="astroword">ทุกศาสตร์</span>
            <span className="astroword astra-accent">ถึงกัน</span>
            <span className="astroword">ในที่เดียว</span>
          </h1>
        </div>
      </div>
    </div>
  )
}