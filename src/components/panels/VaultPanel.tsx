'use client'

import { useMemo } from 'react'
import { ROADMAPS_DATA, CHEATSHEETS_DATA, EXTERNAL_RESOURCES_DATA } from '@/data/resources'
import { MathDisplay } from '@/components/MathDisplay'

interface RoadmapStep {
  stage: string
  title: string
  topics: string[]
  timeEst: string
}

interface Roadmap {
  id: string
  title: string
  titleTh: string
  badge: string
  description: string
  steps: RoadmapStep[]
}

interface CheatsheetSheet {
  category: string
  items: Array<{ name: string; formula: string; note: string }>
}

interface ExternalResource {
  url: string
  tag: string
  title: string
  description: string
}

export function VaultPanel() {
  const roadmaps = useMemo(() => ROADMAPS_DATA as Roadmap[], [])
  const cheatsheets = useMemo(() => CHEATSHEETS_DATA as CheatsheetSheet[], [])
  const external = useMemo(() => EXTERNAL_RESOURCES_DATA as ExternalResource[], [])

  return (
    <section className="tab-panel">
      <div className="flex flex-col gap-6">
        {/* Roadmaps */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
            <h2 className="text-lg font-black text-slate-100">แผนการเรียน (Learning Roadmaps)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roadmaps.map(rm => (
              <div key={rm.id} className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {rm.badge}
                  </span>
                  <span className="text-xs text-slate-400">{rm.title}</span>
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">{rm.titleTh}</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">{rm.description}</p>

                <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700/60 pl-6">
                  {rm.steps.map((step, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-900"></div>
                      <div className="text-xs font-bold text-cyan-300">{step.stage}: {step.title} <span className="text-[11px] text-slate-500 font-normal">({step.timeEst})</span></div>
                      <div className="text-xs text-slate-400 mt-1">{step.topics.join(' • ')}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cheatsheets */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <h2 className="text-lg font-black text-slate-100">สรุปสูตรยอดฮิต (Cheatsheets)</h2>
          </div>
          <div className="flex flex-col gap-5">
            {cheatsheets.map(sheet => (
              <div key={sheet.category} className="glass-panel p-5 rounded-2xl border border-slate-800">
                <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{sheet.category}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sheet.items.map((item, i) => (
                    <div key={`${sheet.category}-${i}`} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="text-xs text-slate-400 font-medium mb-1">{item.name}</div>
                      <div className="text-sm text-cyan-300 py-1"><MathDisplay latex={item.formula} /></div>
                      <div className="text-[11px] text-slate-500 mt-1">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External resources */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <h2 className="text-lg font-black text-slate-100">แหล่งเรียนรู้ออนไลน์คัดสรร</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {external.map(res => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {res.tag}
                    </span>
                    <span className="text-slate-500 group-hover:text-cyan-400 transition-colors text-xs">↗ เปิดเว็บ</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-white mb-1.5">{res.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}