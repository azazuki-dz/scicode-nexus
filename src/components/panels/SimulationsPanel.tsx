'use client'

import { useRef, useState } from 'react'
import { useProjectileSimulation, usePendulumSimulation, ProjectileHud, PendulumHud } from '@/components/useSimulations'

export function SimulationsPanel() {
  const [activeSim, setActiveSim] = useState<'projectile' | 'pendulum'>('projectile')

  return (
    <section className="tab-panel">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-100">ห้องทดลองฟิสิกส์จำลองแบบเรียลไทม์ (Live Physics Lab)</h2>
            <p className="text-xs text-slate-400">สัมผัสกฎฟิสิกส์ผ่านภาพจำลอง 60FPS ปรับค่าตัวแปรแล้วดูผลการเคลื่อนที่ได้ทันที</p>
          </div>
          <div className="flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveSim('projectile')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeSim === 'projectile' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              การเคลื่อนที่แบบโพรเจกไทล์
            </button>
            <button
              onClick={() => setActiveSim('pendulum')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeSim === 'pendulum' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              การแกว่งลูกตุ้มนาฬิกา
            </button>
          </div>
        </div>

        {activeSim === 'projectile' && <ProjectileView />}
        {activeSim === 'pendulum' && <PendulumView />}
      </div>
    </section>
  )
}

function ProjectileView() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hudRef = useRef<(h: ProjectileHud) => void>(() => {})
  const [hud, setHud] = useState<ProjectileHud>({ time: '0.00 s', distance: '0.00 m', height: '0.00 m', velocity: '0.00 m/s' })
  const [params, setParams] = useState({ v0: 35, angle: 45, gravity: 9.8 })

  hudRef.current = h => setHud(h)

  const sim = useProjectileSimulation(canvasRef, hudRef)

  const launch = () => {
    sim.setParams(params.v0, params.angle, params.gravity, false)
    sim.start()
  }

  return (
    <div className="sim-view-card grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 glass-panel p-4 rounded-3xl border border-slate-800 flex flex-col">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Projectile Motion Viewport</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">60 FPS • Physics Engine</span>
        </div>

        <canvas ref={canvasRef} className="w-full rounded-xl bg-slate-950/60 border border-slate-800/60" style={{ height: '360px' }} />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          {[
            { label: 'เวลา (t)', value: hud.time },
            { label: 'ระยะทาง (R)', value: hud.distance },
            { label: 'ความสูง (h)', value: hud.height },
            { label: 'ความเร็ว (v)', value: hud.velocity },
          ].map(s => (
            <div key={s.label} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-500 uppercase">{s.label}</div>
              <div className="text-sm font-mono font-bold text-cyan-300">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="glass-panel p-4 rounded-2xl border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">ควบคุมพารามิเตอร์</div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-slate-300">ความเร็วต้น (v₀)</label>
              <span className="text-xs font-mono text-cyan-300">{params.v0} m/s</span>
            </div>
            <input type="range" min={5} max={80} step={0.5} value={params.v0}
              onChange={e => setParams(p => ({ ...p, v0: parseFloat(e.target.value) }))}
              className="glass-range w-full rounded-lg appearance-none cursor-pointer" />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-slate-300">มุมยิง (θ)</label>
              <span className="text-xs font-mono text-cyan-300">{params.angle}°</span>
            </div>
            <input type="range" min={0} max={90} step={1} value={params.angle}
              onChange={e => setParams(p => ({ ...p, angle: parseFloat(e.target.value) }))}
              className="glass-range w-full rounded-lg appearance-none cursor-pointer" />
          </div>

          <div className="mb-4">
            <label className="text-xs text-slate-300 block mb-1.5">ความโน้มถ่วง (g)</label>
            <select value={params.gravity}
              onChange={e => setParams(p => ({ ...p, gravity: parseFloat(e.target.value) }))}
              className="glass-input w-full rounded-lg px-2.5 py-1.5 text-xs">
              <option value={1.62}>ดวงจันทร์ (1.62 m/s²)</option>
              <option value={3.71}>ดาวอังคาร (3.71 m/s²)</option>
              <option value={9.8}>โลก (9.8 m/s²)</option>
              <option value={24.79}>ดาวพฤหัสบดี (24.79 m/s²)</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={launch} className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20">
              🚀 ยิง!
            </button>
            <button onClick={() => sim.pause()} className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold">⏯ หยุดชั่วคราว</button>
            <button onClick={() => sim.reset()} className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold">↺ รีเซ็ต</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PendulumView() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hudRef = useRef<(h: PendulumHud) => void>(() => {})
  const [params, setParams] = useState({ length: 2.0, gravity: 9.8, damping: 0.002 })
  const [hud, setHud] = useState<PendulumHud>({ period: '—', angle: '—' })

  hudRef.current = h => setHud(h)
  const sim = usePendulumSimulation(canvasRef, hudRef)

  const applyParams = (p: typeof params) => {
    setParams(p)
    sim.setParams(p.length, p.gravity, p.damping)
  }

  return (
    <div className="sim-view-card grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 glass-panel p-4 rounded-3xl border border-slate-800 flex flex-col">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Pendulum Viewport</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">60 FPS • Simple Harmonic Motion</span>
        </div>

        <canvas ref={canvasRef} className="w-full rounded-xl bg-slate-950/60 border border-slate-800/60" style={{ height: '360px' }} />

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 uppercase">คาบการแกว่ง (T)</div>
            <div className="text-sm font-mono font-bold text-purple-300">{hud.period}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-500 uppercase">มุมปัจจุบัน (θ)</div>
            <div className="text-sm font-mono font-bold text-purple-300">{hud.angle}</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="glass-panel p-4 rounded-2xl border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">ควบคุมพารามิเตอร์</div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-slate-300">ความยาวเชือก (L)</label>
              <span className="text-xs font-mono text-purple-300">{params.length} m</span>
            </div>
            <input type="range" min={0.5} max={5} step={0.1} value={params.length}
              onChange={e => applyParams({ ...params, length: parseFloat(e.target.value) })}
              className="glass-range w-full rounded-lg appearance-none cursor-pointer" />
          </div>

          <div className="mb-4">
            <label className="text-xs text-slate-300 block mb-1.5">ความโน้มถ่วง (g)</label>
            <select value={params.gravity}
              onChange={e => applyParams({ ...params, gravity: parseFloat(e.target.value) })}
              className="glass-input w-full rounded-lg px-2.5 py-2 text-xs">
              <option value={1.62}>ดวงจันทร์ (1.62 m/s²)</option>
              <option value={9.8}>โลก (9.8 m/s²)</option>
              <option value={24.79}>ดาวพฤหัสบดี (24.79 m/s²)</option>
            </select>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-slate-300">แรงหน่วง (damping)</label>
              <span className="text-xs font-mono text-purple-300">{params.damping}</span>
            </div>
            <input type="range" min={0} max={0.02} step={0.001} value={params.damping}
              onChange={e => applyParams({ ...params, damping: parseFloat(e.target.value) })}
              className="glass-range w-full rounded-lg appearance-none cursor-pointer" />
          </div>

          <button onClick={() => sim.reset(40)} className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-purple-500/20">
            ↺ รีเซ็ตมุม (40°)
          </button>
        </div>
      </div>
    </div>
  )
}