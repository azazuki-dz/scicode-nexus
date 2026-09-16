'use client'

import { useEffect, useRef, useState } from 'react'
import { FORMULAS_DATA } from '@/data/formulas'
import { LESSONS_DATA } from '@/data/lessons'
import { ALL_CURRICULUM_DATA } from '@/data/curriculum/curriculumRegistry'
import { useToast } from '@/components/ToastProvider'

type LauncherTab = 'formulas' | 'simulations' | 'lab' | 'vault' | 'curriculum' | 'launcher'

const FEATURES: Array<{
  tab: LauncherTab
  icon: React.ReactNode
  title: string
  desc: string
  gradient: string
}> = [
  {
    tab: 'formulas',
    gradient: 'from-indigo-600 to-cyan-500',
    title: 'สูตร & ตัวคำนวณ',
    desc: 'คำนวณสูตรฟิสิกส์ เคมี ชีวะ คณิตศาสตร์ และการเงิน แบบหลายตัวแปร พร้อมขั้นตอนเฉลยละเอียดทีละขั้น',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  },
  {
    tab: 'simulations',
    gradient: 'from-cyan-500 to-emerald-500',
    title: 'การจำลองฟิสิกส์ (Live)',
    desc: 'ลองยิงโพรเจกไทล์บนดาวแต่ละดวง และทดลองลูกตุ้มแบบตอบสนองทันที 60 FPS',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    tab: 'lab',
    gradient: 'from-amber-500 to-rose-500',
    title: 'ห้องแล็บโค้ด (Math-to-Code)',
    desc: 'แปลงคณิตศาสตร์ให้เป็นโค้ด JavaScript ทีละบทเรียน พร้อมตรวจคำตอบอัตโนมัติในเทอร์มินัลจำลอง',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    tab: 'vault',
    gradient: 'from-purple-600 to-fuchsia-500',
    title: 'คลังความรู้ & Roadmap',
    desc: 'เส้นทางการเรียนรู้ สรุปสูตรยอดฮิตแยกวิชา และแหล่งเรียนรู้ออนไลน์ระดับโลกคัดสรรมาให้',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
  {
    tab: 'curriculum',
    gradient: 'from-emerald-500 to-lime-500',
    title: 'หลักสูตร ม.1–ม.6',
    desc: 'สรุปเนื้อหาเข้มข้นตามกลุ่มสาระวิชา พร้อมเทคนิคพิชิตข้อสอบ O-NET / TGAT / A-Level',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
  },
]

const STATS_DEFS = [
  { id: 'formulas', label: 'สูตรคำนวณ', value: () => FORMULAS_DATA.length },
  { id: 'sims', label: 'ห้องจำลอง', value: () => 2 },
  { id: 'lessons', label: 'บทเรียนโค้ด', value: () => LESSONS_DATA.length },
  { id: 'topics', label: 'หัวข้อหลักสูตร', value: () => ALL_CURRICULUM_DATA.length },
]

const MARQUEE_ITEMS = ['ฟิสิกส์', 'เคมี', 'ชีววิทยา', 'คณิตศาสตร์', 'แคลคูลัส', 'สถิติ', 'เศรษฐศาสตร์', 'การเงิน', 'เทคโนโลยี', 'อวกาศ', 'สุขภาพ', 'โค้ดดิ้ง']

export function LauncherPanel({ onLaunch }: { onLaunch: (tab: LauncherTab) => void }) {
  const { showToast } = useToast()
  const [stats, setStats] = useState<Record<string, number>>({ formulas: 0, sims: 0, lessons: 0, topics: 0 })
  const launchCardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const targets: Record<string, number> = {}
    STATS_DEFS.forEach(def => { targets[def.id] = def.value() })

    // Count-up animation
    const duration = 1000
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      const current: Record<string, number> = {}
      STATS_DEFS.forEach(def => { current[def.id] = Math.round(targets[def.id] * eased) })
      setStats(current)
      if (t < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Spotlight glow follows cursor on launch cards
  useEffect(() => {
    const cards = launchCardRefs.current
    const handlers: Array<() => void> = []
    cards.forEach(card => {
      if (!card) return
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
        card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
      }
      card.addEventListener('mousemove', onMove)
      handlers.push(() => card.removeEventListener('mousemove', onMove))
    })
    return () => handlers.forEach(h => h())
  }, [])

  const handleLaunch = (tab: LauncherTab, title: string) => {
    onLaunch(tab)
    showToast(`เข้าใช้งาน: ${title}`, 'info', 1200)
  }

  return (
    <section className="tab-panel astra-page">
      <div className="astra-grain" aria-hidden="true" />

      {/* ===== ASTRA HERO ===== */}
      <div className="astra-hero reveal-words">
        <div className="astra-hero-glow" style={{ ['--depth' as string]: '0.22' }} />

        <div className="astra-orb-stage">
          <div className="astra-orb">
            <span className="orb-sheen"></span>
            <span className="orb-core">ΣN</span>
          </div>
          <span className="orb-ring r1"></span>
          <span className="orb-ring r2"></span>
          <span className="orb-ring r3"></span>
          <span className="orb-halo"></span>
          <span className="sonar s1"></span>
          <span className="sonar s2"></span>
        </div>

        <div className="astra-copy">
          <span className="astra-kicker">SCICODE · NEXUS</span>
          <h1 className="astra-title">
            <span className="astroword">เชื่อม</span>
            <span className="astroword">ทุกศาสตร์</span>
            <span className="astroword astra-accent">ถึงกัน</span>
            <span className="astroword">ในที่เดียว</span>
          </h1>
          <p className="astra-sub">
            ฟิสิกส์ · เคมี · ชีวะ · คณิตศาสตร์ · ข้อมูล · โค้ดดิ้ง — คำนวณสูตรทีละขั้น
            จำลองฟิสิกส์ตอบสนองจริง และเรียนรู้หลักสูตร ม.1–ม.6 ได้ทุกที่ทุกเวลา
          </p>
          <div className="astra-cta">
            <button onClick={() => handleLaunch('formulas', 'สูตร & ตัวคำนวณ')} className="astra-btn primary">
              เริ่มใช้สูตรคำนวณ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M21 12H3" /></svg>
            </button>
            <button onClick={() => handleLaunch('simulations', 'การจำลองฟิสิกส์')} className="astra-btn ghost">ดูการจำลองฟิสิกส์</button>
          </div>
        </div>

        <div className="astra-stats">
          {STATS_DEFS.map(def => (
            <div key={def.id} className="launcher-stat">
              <div className="num">{stats[def.id] ?? 0}</div>
              <div className="lab">{def.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CAPABILITY MARQUEE ===== */}
      <div className="astra-marquee" aria-hidden="true">
        <div className="astra-marquee-track">
          {[0, 1].map(dup => (
            <span key={dup}>
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={`${dup}-${i}`}>
                  <span>{item}</span><i>·</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ===== FEATURE GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {FEATURES.map((feature, idx) => (
          <div
            key={feature.tab}
            ref={el => { launchCardRefs.current[idx] = el }}
            onClick={() => handleLaunch(feature.tab, feature.title)}
            className="launch-card glass-panel border border-slate-800 reveal cursor-pointer"
          >
            <div className={`launch-card-icon bg-gradient-to-br ${feature.gradient} text-white`}>
              {feature.icon}
            </div>
            <h3 className="launch-title text-base font-bold text-slate-100 mb-1.5">{feature.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">{feature.desc}</p>
            <span className="launch-go">เข้าใช้งาน <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M21 12H3" /></svg></span>
          </div>
        ))}

        {/* Tip Card */}
        <div className="launch-card glass-panel border border-slate-800/60 reveal">
          <div className="launch-card-icon bg-gradient-to-br from-slate-600 to-slate-500 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <h3 className="launch-title text-base font-bold text-slate-100 mb-1.5">เคล็ดลับการใช้งาน</h3>
          <ul className="text-xs text-slate-400 space-y-2 leading-relaxed">
            <li>⌨ กด <span className="font-mono text-cyan-300 font-bold">Ctrl + K</span> เพื่อค้นหาทั่วทั้งเว็บได้ทันที</li>
            <li>⌂ ปุ่มมุมขวาบน กลับไปหน้าแรกเพื่อสลับโหมดได้ตลอดเวลา</li>
            <li>🌙 ปุ่มมุมขวาบน สลับโหมดมืด / สว่าง ให้เข้าตา</li>
          </ul>
        </div>
      </div>
    </section>
  )
}