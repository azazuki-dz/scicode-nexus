'use client'

import { useEffect, useMemo, useState } from 'react'
import { CURRICULUM_GRADES, CURRICULUM_SUBJECTS, queryCurriculum, ALL_CURRICULUM_DATA } from '@/data/curriculum/curriculumRegistry'
import { getSubjectColor } from '@/components/categoryUtils'
import { MathDisplay } from '@/components/MathDisplay'

interface CurriculumTopic {
  id: string
  grade: string
  gradeLabel: string
  subject: string
  subjectLabel: string
  chapter: string
  title: string
  summary: string
  keyConcepts: string[]
  formulas?: Array<{ name: string; latex: string }>
  workedExample?: {
    problem: string
    steps: Array<{ step: number; text: string; latex?: string }>
    answer: string
  }
  examHacks?: string[]
}

const PAGE_SIZE = 5

export function CurriculumPanel() {
  const [selectedGrade, setSelectedGrade] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTopic, setActiveTopic] = useState<CurriculumTopic>(ALL_CURRICULUM_DATA[0] as CurriculumTopic)

  const allTopics = useMemo(
    () => queryCurriculum(selectedGrade, selectedSubject, searchQuery) as CurriculumTopic[],
    [selectedGrade, selectedSubject, searchQuery]
  )

  const pageCount = Math.max(1, Math.ceil(allTopics.length / PAGE_SIZE))
  const safePage = Math.min(currentPage, pageCount)
  const start = (safePage - 1) * PAGE_SIZE
  const topics = allTopics.slice(start, start + PAGE_SIZE)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedGrade, selectedSubject, searchQuery])

  const selectTopic = (topic: CurriculumTopic) => {
    setActiveTopic(topic)
  }

  const resultCountText = allTopics.length > 0
    ? `แสดง ${start + 1}-${Math.min(safePage * PAGE_SIZE, allTopics.length)} จาก ${allTopics.length} รายการ`
    : ''

  const windowStart = Math.max(1, safePage - 2)
  const windowEnd = Math.min(pageCount, safePage + 2)

  return (
    <section className="tab-panel">
      <div className="flex flex-col gap-4">
        {/* Header + Filters */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div>
              <h2 className="text-xl font-black text-slate-100">หลักสูตร ม.1 – ม.6 (ทุกกลุ่มสาระ)</h2>
              <p className="text-xs text-slate-400">เจาะลึกบทเรียนทุกรายวิชาตามหลักสูตรแกนกลาง พร้อมเทคนิคพิชิตข้อสอบ</p>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ค้นหาหัวข้อ หรือ คำอธิบาย..."
                className="w-64 bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>

          {/* Grade chips */}
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">ระดับชั้น</div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {CURRICULUM_GRADES.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGrade(g.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedGrade === g.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Subject chips */}
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">กลุ่มสาระ</div>
          <div className="flex flex-wrap gap-1.5">
            {CURRICULUM_SUBJECTS.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSubject(s.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedSubject === s.id
                    ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Topic list */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs text-slate-500">{resultCountText}</div>
            {topics.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm glass-panel border border-slate-800 rounded-2xl">
                ไม่พบบทเรียนที่ตรงกับเงื่อนไขการค้นหา
              </div>
            ) : (
              <div id="curriculum-topic-list" className="flex flex-col gap-2.5">
                {topics.map(topic => {
                  const isSelected = activeTopic.id === topic.id
                  return (
                    <div
                      key={topic.id}
                      onClick={() => selectTopic(topic)}
                      className={`curriculum-card-item p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-950/40 border-indigo-500/80 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/40'
                          : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                            {topic.gradeLabel}
                          </span>
                          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getSubjectColor(topic.subject)}`}>
                            {topic.subjectLabel}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 truncate max-w-[130px] font-mono">{topic.chapter}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-100 mb-1.5 leading-snug line-clamp-1">{topic.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{topic.summary}</p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
                        <span className="flex items-center gap-1"><span className="text-cyan-400">✓</span> มีตัวอย่างโจทย์ & เทคนิคสอบ</span>
                        <span className="text-indigo-400 font-semibold transition-transform">เปิดอ่าน ›</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                <button
                  disabled={safePage <= 1}
                  onClick={() => setCurrentPage(safePage - 1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${safePage <= 1 ? 'opacity-40 cursor-not-allowed' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300'}`}
                >
                  ‹
                </button>
                {Array.from({ length: windowEnd - windowStart + 1 }, (_, i) => windowStart + i).map(p => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      p === safePage
                        ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                {windowEnd < pageCount && <span className="px-1 text-slate-600 text-xs">…</span>}
                {windowEnd < pageCount && (
                  <button onClick={() => setCurrentPage(pageCount)} className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all border bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300">
                    {pageCount}
                  </button>
                )}
                <button
                  disabled={safePage >= pageCount}
                  onClick={() => setCurrentPage(safePage + 1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${safePage >= pageCount ? 'opacity-40 cursor-not-allowed' : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300'}`}
                >
                  ›
                </button>
              </div>
            )}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <CurriculumDetail topic={activeTopic} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CurriculumDetail({ topic }: { topic: CurriculumTopic }) {
  return (
    <div id="curriculum-detail-panel" className="glass-panel p-6 rounded-3xl border border-slate-800">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">{topic.gradeLabel}</span>
        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getSubjectColor(topic.subject)}`}>{topic.subjectLabel}</span>
        <span className="text-[11px] text-slate-400 font-mono">{topic.chapter}</span>
      </div>

      <h2 className="text-lg lg:text-xl font-black text-slate-100 mb-2">{topic.title}</h2>
      <p className="text-xs text-slate-400 leading-relaxed mb-5">{topic.summary}</p>

      {/* Key Concepts */}
      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">แนวคิดหลัก</div>
      <ul className="space-y-1.5 mb-5">
        {topic.keyConcepts.map((kc, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
            <span>{kc}</span>
          </li>
        ))}
      </ul>

      {/* Formulas */}
      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">สูตรที่เกี่ยวข้อง</div>
      <div className="space-y-2 mb-5">
        {!topic.formulas || topic.formulas.length === 0 ? (
          <div className="text-xs text-slate-500 italic">บทเรียนนี้เน้นการวิเคราะห์เชิงแนวคิดและหลักการ</div>
        ) : (
          topic.formulas.map((f, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-semibold text-slate-400 mb-1.5">{f.name}</div>
              <div className="text-sm text-cyan-300 py-1 font-mono"><MathDisplay latex={f.latex} /></div>
            </div>
          ))
        )}
      </div>

      {/* Worked Example */}
      {topic.workedExample && (
        <>
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">ตัวอย่างโจทย์และเฉลย</div>
          <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 mb-4">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5">โจทย์ตัวอย่าง (Problem Statement):</div>
            <div className="text-sm font-semibold text-slate-100 leading-relaxed">{topic.workedExample.problem}</div>
          </div>

          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">ขั้นตอนวิธีทำทีละสเต็ป (Step-by-Step Solution):</div>
          <div className="space-y-3 mb-4">
            {topic.workedExample.steps.map((s, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-300 leading-relaxed">{s.text}</div>
                  {s.latex ? <div className="text-sm text-cyan-300 pt-1.5 font-mono"><MathDisplay latex={s.latex} /></div> : null}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400">คำตอบสุทธิ (Final Answer):</span>
            <span className="text-xs font-mono font-bold text-slate-100">{topic.workedExample.answer}</span>
          </div>
        </>
      )}

      {/* Exam Hacks */}
      {topic.examHacks && topic.examHacks.length > 0 && (
        <>
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 mt-5">เทคนิคพิชิตข้อสอบ</div>
          <div className="space-y-2">
            {topic.examHacks.map((hack, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0">🎯</span>
                <span>{hack}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}