'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { LESSONS_DATA } from '@/data/lessons'
import { MathDisplay } from '@/components/MathDisplay'
import { useToast } from '@/components/ToastProvider'
import { ThreePreviewHost } from '@/components/three/ThreePreviewHost'
import type { SceneProbe } from '@/components/three/ThreeLabPreview'

interface Lesson {
  id: string
  title: string
  category: string
  difficulty: string
  badgeColor: string
  description: string
  mathFormula: string
  instructions: string[]
  starterCode: string
  solutionCode: string
  type?: 'console' | '3d'
  validate: (target: any) => Array<{ name: string; passed: boolean; output: string; expected: string }>
}

type LogType = 'log' | 'warn' | 'error' | 'info' | 'test-pass' | 'test-fail'

interface LogEntry {
  type: LogType
  text: string
}

const LOG_COLOR: Record<LogType, string> = {
  'test-pass': 'text-emerald-400 font-semibold',
  'test-fail': 'text-rose-400 font-semibold',
  error: 'text-rose-400',
  warn: 'text-amber-400',
  info: 'text-slate-400',
  log: 'text-cyan-300',
}

const LOG_ICON: Record<LogType, string> = {
  'test-pass': '✓',
  'test-fail': '✗',
  error: '✕',
  warn: '!',
  info: 'i',
  log: '>',
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function CodeLabPanel() {
  const { showToast } = useToast()
  const [lessons] = useState<Lesson[]>(LESSONS_DATA as Lesson[])
  const [currentLesson, setCurrentLesson] = useState<Lesson>(LESSONS_DATA[0] as Lesson)
  const [code, setCode] = useState((LESSONS_DATA[0] as Lesson).starterCode)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [runKey, setRunKey] = useState(0)
  const [lastProbe, setLastProbe] = useState<SceneProbe | null>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const appendLog = useCallback((type: LogType, ...args: any[]) => {
    const formatted = args.map(a => {
      if (typeof a === 'object') {
        try { return JSON.stringify(a, null, 2) } catch { return String(a) }
      }
      return String(a)
    }).join(' ')
    setLogs(prev => [...prev, { type, text: formatted }])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [logs])

  const loadLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson)
    setCode(lesson.starterCode)
    setLogs([{ type: 'info', text: '// Terminal Output Ready...' }])
    setLastProbe(null)
    setRunKey(0)
  }

  const runCode = () => {
    setLogs([])
    if (currentLesson.type === '3d') {
      setRunKey(k => k + 1)
      return
    }
    const fakeConsole = {
      log: (...args: any[]) => appendLog('log', ...args),
      warn: (...args: any[]) => appendLog('warn', ...args),
      error: (...args: any[]) => appendLog('error', ...args),
      info: (...args: any[]) => appendLog('info', ...args),
    }
    try {
      const runFn = new Function('console', `"use strict";\n${code}`)
      const startTime = performance.now()
      const returnedVal = runFn(fakeConsole)
      const duration = (performance.now() - startTime).toFixed(2)
      if (returnedVal !== undefined) {
        appendLog('log', `Return value: ${JSON.stringify(returnedVal)}`)
      }
      appendLog('info', `Executed successfully in ${duration}ms`)
    } catch (err: any) {
      appendLog('error', `${err.name}: ${err.message}`)
    }
  }

  const runTests = () => {
    setLogs([])
    appendLog('info', `Running test suite for: ${currentLesson.title}...`)
    if (currentLesson.type === '3d') {
      if (!lastProbe) {
        appendLog('warn', 'กด ▶ รันโค้ดก่อนเพื่อสร้างฉาก 3 มิติ แล้วค่อยกดตรวจคำตอบ')
        return
      }
      const results = currentLesson.validate(lastProbe)
      let passCount = 0
      results.forEach(test => {
        if (test.passed) {
          passCount++
          appendLog('test-pass', `PASS: ${test.name}`)
        } else {
          appendLog('test-fail', `FAIL: ${test.name} (พบ: ${test.output}, ต้องการ: ${test.expected})`)
        }
      })
      appendLog(passCount === results.length ? 'test-pass' : 'warn',
        passCount === results.length
          ? `🎉 ยินดีด้วย! ผ่านการทดสอบทั้งหมด ${passCount}/${results.length} ข้อ`
          : `ผ่าน ${passCount}/${results.length} ข้อ ลองเพิ่ม/จัดวางวัตถุในฉากอีกครั้ง`)
      return
    }
    try {
      const evalWrapper = new Function(`
        "use strict";
        ${code}
        const fns = {};
        try { if (typeof calculateRange === 'function') fns.fn = calculateRange; } catch(e){}
        try { if (typeof solveQuadratic === 'function') fns.fn = solveQuadratic; } catch(e){}
        try { if (typeof simulateDropTime === 'function') fns.fn = simulateDropTime; } catch(e){}
        try { if (typeof dotProduct === 'function') fns.fn = dotProduct; } catch(e){}
        try { if (typeof heronsArea === 'function') fns.fn = heronsArea; } catch(e){}
        try { if (typeof parseMolarMass === 'function') fns.fn = parseMolarMass; } catch(e){}
        return fns.fn;
      `)
      const userFn = evalWrapper()
      if (!userFn || typeof userFn !== 'function') {
        throw new Error('ไม่พบฟังก์ชันที่ระบุในคำสั่ง กรุณาตรวจสอบชื่อฟังก์ชัน')
      }
      const results = currentLesson.validate(userFn)
      let passCount = 0
      results.forEach(test => {
        if (test.passed) {
          passCount++
          appendLog('test-pass', `PASS: ${test.name}`)
        } else {
          appendLog('test-fail', `FAIL: ${test.name} (Output: ${test.output}, Expected: ${test.expected})`)
        }
      })
      if (passCount === results.length) {
        appendLog('test-pass', `🎉 ยินดีด้วย! ผ่านการทดสอบทั้งหมด ${passCount}/${results.length} ข้อ`)
      } else {
        appendLog('warn', `ผ่าน ${passCount}/${results.length} ข้อ ลองตรวจสอบตรรกะและสูตรอีกครั้ง`)
      }
    } catch (err: any) {
      appendLog('error', `ข้อผิดพลาด: ${err.message}`)
    }
  }

  const resetCode = () => {
    setCode(currentLesson.starterCode)
    setLogs([{ type: 'info', text: '// Terminal Output Ready...' }])
    showToast('รีเซ็ตโค้ดเป็นค่าเริ่มต้นแล้ว', 'info')
  }

  const revealSolution = () => {
    if (confirm('คุณต้องการดูโค้ดเฉลยหรือไม่? โค้ดในหน้าจอจะถูกแทนที่ด้วยเฉลย')) {
      setCode(currentLesson.solutionCode)
      showToast('แสดงโค้ดเฉลยแล้ว', 'info')
    }
  }

  return (
    <section className="tab-panel">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lessons List */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="glass-panel p-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">บทเรียนทั้งหมด</div>
            <div id="lessons-list-container" className="space-y-2">
              {lessons.map(lesson => {
                const isSelected = currentLesson.id === lesson.id
                return (
                  <div
                    key={lesson.id}
                    onClick={() => loadLesson(lesson)}
                    className={`lesson-card-item p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/30 border-amber-500/70 shadow-md shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                        {lesson.difficulty}
                      </span>
                      <span className="text-xs text-slate-400">{lesson.category}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-200 line-clamp-1">{lesson.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main workspace */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Lesson header */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <h2 className="text-lg lg:text-xl font-black text-slate-100 mb-1.5">{currentLesson.title}</h2>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">{currentLesson.description}</p>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 mb-4 flex items-center gap-3">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">สูตรทางคณิตศาสตร์</span>
              <div className="text-lg text-cyan-300 font-mono"><MathDisplay latex={currentLesson.mathFormula} /></div>
            </div>

            {currentLesson.type === '3d' && (
              <div className="rounded-2xl border border-slate-800 overflow-hidden mb-4">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono text-slate-400">3D Preview — ลากเมาส์หมุนมุมมองได้</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">{lastProbe ? `วัตถุในฉาก: ${lastProbe.objectCount} ชิ้น` : 'กด ▶ รันโค้ดเพื่อสร้างฉาก'}</span>
                </div>
                <div className="w-full h-[340px] bg-slate-950">
                  {runKey > 0 && (
                    <ThreePreviewHost
                      code={code}
                      runKey={runKey}
                      onLog={(type, ...args) => appendLog(type as LogType, ...args)}
                      onProbe={setLastProbe}
                    />
                  )}
                </div>
              </div>
            )}

            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">วิธีทำ</div>
            <ul className="space-y-1.5 mb-4">
              {currentLesson.instructions.map((inst, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                  <span className="text-indigo-400 font-bold">›</span>
                  <span>{inst}</span>
                </li>
              ))}
            </ul>

            {/* Code Editor */}
            <div className="rounded-2xl border border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-[11px] font-mono text-slate-500 ml-2">index.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={resetCode} className="text-[11px] font-semibold text-slate-400 hover:text-slate-200 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700">↺ รีเซ็ต</button>
                  <button onClick={revealSolution} className="text-[11px] font-semibold text-slate-400 hover:text-slate-200 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700">👁 เฉลย</button>
                </div>
              </div>
              <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                spellCheck={false}
                className="w-full bg-[#0d1117] text-cyan-100 font-mono text-xs leading-relaxed p-4 outline-none resize-y min-h-[260px]"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button onClick={runCode} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold">▶ รันโค้ด</button>
              <button onClick={runTests} className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold">✓ ตรวจคำตอบ</button>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border-b border-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Terminal Output</span>
            </div>
            <div ref={terminalRef} className="bg-[#0d1117] p-4 h-52 overflow-y-auto font-mono text-xs space-y-0.5">
              {logs.length === 0 ? (
                <div className="text-slate-500 font-mono text-xs">// Terminal Output Ready...</div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className={`flex items-start gap-1 py-0.5 leading-relaxed ${LOG_COLOR[log.type]}`}>
                    <span className="opacity-60 select-none shrink-0">{LOG_ICON[log.type]}</span>
                    <pre className="whitespace-pre-wrap break-all flex-1">{escapeHtml(log.text)}</pre>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}