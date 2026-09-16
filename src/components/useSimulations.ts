'use client'

import { useEffect, useRef } from 'react'

export interface ProjectileHud {
  time: string
  distance: string
  height: string
  velocity: string
}

export interface PendulumHud {
  period: string
  angle: string
}

/**
 * Port of js/engine/visualizer.js -> React canvas hooks.
 * ProjectileSimulation: ballistic cannon animation.
 */
export function useProjectileSimulation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  hudRef: { current: (h: ProjectileHud) => void }
) {
  const stateRef = useRef({
    canvas: null as HTMLCanvasElement | null,
    ctx: null as CanvasRenderingContext2D | null,
    v0: 35,
    angleDeg: 45,
    g: 9.8,
    airResistance: false,
    k: 0.005,
    isRunning: false,
    isPaused: false,
    t: 0,
    dt: 0.02,
    scale: 4.5,
    originX: 60,
    originY: 310,
    ball: { x: 0, y: 0, vx: 0, vy: 0 },
    trajectory: [] as Array<{ x: number; y: number }>,
    animationFrameId: null as number | null,
    maxHeight: 0,
    totalRange: 0,
  })

  const init = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const s = stateRef.current
    s.canvas = canvas
    s.ctx = canvas.getContext('2d')
    resize()
    draw()
  }

  const resize = () => {
    const s = stateRef.current
    if (!s.canvas || !s.ctx) return
    const rect = s.canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    s.canvas.width = (rect.width || 600) * dpr
    s.canvas.height = 360 * dpr
    s.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    s.originX = 60
    s.originY = 310
    draw()
  }

  const setParams = (v0: string | number, angleDeg: string | number, g: string | number, airResistance: boolean) => {
    const s = stateRef.current
    s.v0 = Math.max(1, parseFloat(String(v0)))
    s.angleDeg = parseFloat(String(angleDeg))
    s.g = Math.max(0.1, parseFloat(String(g)))
    s.airResistance = airResistance

    const rad = (s.angleDeg * Math.PI) / 180
    s.maxHeight = (Math.pow(s.v0 * Math.sin(rad), 2)) / (2 * s.g)
    s.totalRange = (Math.pow(s.v0, 2) * Math.sin(2 * rad)) / s.g

    const maxDimension = Math.max(s.totalRange * 1.2, s.maxHeight * 1.5, 30)
    const width = s.canvas ? s.canvas.width / (window.devicePixelRatio || 1) : 600
    s.scale = (width - 120) / maxDimension

    if (!s.isRunning) reset()
  }

  const start = () => {
    const s = stateRef.current
    reset()
    s.isRunning = true
    s.isPaused = false
    const rad = (s.angleDeg * Math.PI) / 180
    s.ball = { x: 0, y: 0, vx: s.v0 * Math.cos(rad), vy: s.v0 * Math.sin(rad) }
    s.trajectory = [{ x: 0, y: 0 }]
    loop()
  }

  const pause = () => {
    const s = stateRef.current
    s.isPaused = !s.isPaused
    if (!s.isPaused && s.isRunning) loop()
  }

  const stopAll = () => {
    const s = stateRef.current
    s.isRunning = false
    if (s.animationFrameId) cancelAnimationFrame(s.animationFrameId)
  }

  const reset = () => {
    const s = stateRef.current
    s.isRunning = false
    s.isPaused = false
    if (s.animationFrameId) cancelAnimationFrame(s.animationFrameId)
    s.t = 0
    s.ball = { x: 0, y: 0, vx: 0, vy: 0 }
    s.trajectory = []
    hudRef.current({ time: '0.00 s', distance: '0.00 m', height: '0.00 m', velocity: '0.00 m/s' })
    draw()
  }

  const update = () => {
    const s = stateRef.current
    if (!s.isRunning || s.isPaused) return
    for (let i = 0; i < 2; i++) {
      const step = s.dt / 2
      s.t += step
      let ax = 0
      let ay = -s.g
      if (s.airResistance) {
        const speed = Math.sqrt(s.ball.vx * s.ball.vx + s.ball.vy * s.ball.vy)
        if (speed > 0.001) {
          const drag = s.k * speed * speed
          ax -= drag * (s.ball.vx / speed)
          ay -= drag * (s.ball.vy / speed)
        }
      }
      s.ball.vx += ax * step
      s.ball.vy += ay * step
      s.ball.x += s.ball.vx * step
      s.ball.y += s.ball.vy * step
      if (s.ball.y <= 0 && s.t > 0.05) {
        s.ball.y = 0
        s.isRunning = false
        break
      }
    }
    s.trajectory.push({ x: s.ball.x, y: s.ball.y })
    const speed = Math.sqrt(s.ball.vx * s.ball.vx + s.ball.vy * s.ball.vy)
    hudRef.current({
      time: `${s.t.toFixed(2)} s`,
      distance: `${s.ball.x.toFixed(2)} m`,
      height: `${Math.max(0, s.ball.y).toFixed(2)} m`,
      velocity: `${speed.toFixed(2)} m/s`,
    })
  }

  const draw = () => {
    const s = stateRef.current
    if (!s.canvas || !s.ctx) return
    const ctx = s.ctx
    const w = s.canvas.width / (window.devicePixelRatio || 1)
    const h = 360
    ctx.clearRect(0, 0, w, h)

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
    ctx.lineWidth = 1
    for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
    for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }

    ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)'
    ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(0, s.originY); ctx.lineTo(w, s.originY); ctx.stroke()

    ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)'
    ctx.lineWidth = 1
    for (let x = 10; x < w; x += 15) { ctx.beginPath(); ctx.moveTo(x, s.originY); ctx.lineTo(x - 10, s.originY + 12); ctx.stroke() }

    const rad = (s.angleDeg * Math.PI) / 180
    const cannonLen = 30
    ctx.save()
    ctx.translate(s.originX, s.originY)
    ctx.strokeStyle = '#06b6d4'
    ctx.lineWidth = 6
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(cannonLen * Math.cos(rad), -cannonLen * Math.sin(rad)); ctx.stroke()
    ctx.fillStyle = '#6366f1'
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill()
    ctx.restore()

    if (!s.airResistance && s.totalRange > 0) {
      ctx.save()
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)'
      ctx.setLineDash([4, 4])
      ctx.lineWidth = 2
      ctx.beginPath()
      const numSteps = 50
      for (let i = 0; i <= numSteps; i++) {
        const simX = (s.totalRange * i) / numSteps
        const simY = simX * Math.tan(rad) - (s.g * simX * simX) / (2 * Math.pow(s.v0 * Math.cos(rad), 2))
        const px = s.originX + simX * s.scale
        const py = s.originY - Math.max(0, simY) * s.scale
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.restore()
    }

    if (s.trajectory.length > 1) {
      ctx.save()
      ctx.strokeStyle = '#06b6d4'
      ctx.shadowColor = 'rgba(6, 182, 212, 0.6)'
      ctx.shadowBlur = 10
      ctx.lineWidth = 3
      ctx.beginPath()
      for (let i = 0; i < s.trajectory.length; i++) {
        const pt = s.trajectory[i]
        const px = s.originX + pt.x * s.scale
        const py = s.originY - pt.y * s.scale
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.restore()
    }

    const currentPx = s.originX + s.ball.x * s.scale
    const currentPy = s.originY - s.ball.y * s.scale
    ctx.save()
    ctx.fillStyle = '#f43f5e'
    ctx.shadowColor = '#f43f5e'
    ctx.shadowBlur = 14
    ctx.beginPath(); ctx.arc(currentPx, currentPy, 7, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = '#ffffff'
    ctx.beginPath(); ctx.arc(currentPx - 2, currentPy - 2, 2.5, 0, Math.PI * 2); ctx.fill()
    ctx.restore()
  }

  const loop = () => {
    const s = stateRef.current
    if (!s.isRunning || s.isPaused) return
    update()
    draw()
    if (s.isRunning) {
      s.animationFrameId = requestAnimationFrame(() => loop())
    }
  }

  useEffect(() => {
    init()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      stopAll()
    }
  }, [])

  return { resize, setParams, start, pause, reset }
}

/**
 * Pendulum harmonic oscillation simulation.
 */
export function usePendulumSimulation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  hudRef: { current: (h: PendulumHud) => void }
) {
  const stateRef = useRef({
    canvas: null as HTMLCanvasElement | null,
    ctx: null as CanvasRenderingContext2D | null,
    length: 2.0,
    gravity: 9.8,
    damping: 0.002,
    theta: (35 * Math.PI) / 180,
    omega: 0,
    alpha: 0,
    originX: 300,
    originY: 40,
    scale: 110,
    isRunning: true,
    animId: null as number | null,
  })

  const init = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const s = stateRef.current
    s.canvas = canvas
    s.ctx = canvas.getContext('2d')
    resize()
    reset(40)
    loop()
  }

  const resize = () => {
    const s = stateRef.current
    if (!s.canvas || !s.ctx) return
    const rect = s.canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    s.canvas.width = (rect.width || 600) * dpr
    s.canvas.height = 360 * dpr
    s.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    s.originX = (rect.width || 600) / 2
    s.originY = 40
  }

  const setParams = (length: string | number, gravity: string | number, damping: string | number) => {
    const s = stateRef.current
    s.length = parseFloat(String(length))
    s.gravity = parseFloat(String(gravity))
    s.damping = parseFloat(String(damping))
  }

  const reset = (angleDegrees = 40) => {
    const s = stateRef.current
    s.theta = (angleDegrees * Math.PI) / 180
    s.omega = 0
    s.alpha = 0
  }

  const update = () => {
    const s = stateRef.current
    const dt = 0.016
    s.alpha = -(s.gravity / s.length) * Math.sin(s.theta) - s.damping * s.omega
    s.omega += s.alpha * dt
    s.theta += s.omega * dt
    const period = 2 * Math.PI * Math.sqrt(s.length / s.gravity)
    hudRef.current({
      period: `${period.toFixed(2)} s`,
      angle: `${((s.theta * 180) / Math.PI).toFixed(1)}°`,
    })
  }

  const draw = () => {
    const s = stateRef.current
    if (!s.canvas || !s.ctx) return
    const ctx = s.ctx
    const w = s.canvas.width / (window.devicePixelRatio || 1)
    const h = 360
    ctx.clearRect(0, 0, w, h)

    const bobX = s.originX + s.length * s.scale * Math.sin(s.theta)
    const bobY = s.originY + s.length * s.scale * Math.cos(s.theta)

    ctx.fillStyle = '#64748b'
    ctx.fillRect(s.originX - 30, s.originY - 8, 60, 8)
    ctx.fillStyle = '#3b82f6'
    ctx.beginPath(); ctx.arc(s.originX, s.originY, 6, 0, Math.PI * 2); ctx.fill()

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.lineWidth = 2.5
    ctx.beginPath(); ctx.moveTo(s.originX, s.originY); ctx.lineTo(bobX, bobY); ctx.stroke()

    ctx.save()
    ctx.fillStyle = '#a855f7'
    ctx.shadowColor = '#a855f7'
    ctx.shadowBlur = 18
    ctx.beginPath(); ctx.arc(bobX, bobY, 18, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = '#ffffff'
    ctx.beginPath(); ctx.arc(bobX - 4, bobY - 4, 5, 0, Math.PI * 2); ctx.fill()
    ctx.restore()
  }

  const loop = () => {
    const s = stateRef.current
    if (!s.isRunning || !s.canvas) return
    if (!document.body.contains(s.canvas)) { s.isRunning = false; return }
    update()
    draw()
    s.animId = requestAnimationFrame(() => loop())
  }

  useEffect(() => {
    init()
    const s = stateRef.current
    return () => {
      s.isRunning = false
      if (s.animId) cancelAnimationFrame(s.animId)
    }
  }, [])

  return { resize, setParams, reset }
}