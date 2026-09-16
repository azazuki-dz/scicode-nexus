'use client'

import { useEffect, useMemo, useState } from 'react'
import { FORMULA_CATEGORIES, FORMULAS_DATA } from '@/data/formulas'
import { getCategoryColor, getCategoryEmoji, formatNumber } from '@/components/categoryUtils'
import { MathDisplay } from '@/components/MathDisplay'
import { useToast } from '@/components/ToastProvider'

interface FormulaVariable {
  id: string
  symbol: string
  name: string
  nameTh: string
  unit?: string
  defaultValue?: number
  min?: number
  max?: number
  step?: number
}

interface Formula {
  id: string
  name: string
  nameTh: string
  category: string
  categoryTh: string
  icon?: string
  grade?: string
  latex: string
  description: string
  variables: FormulaVariable[]
  solveTargets: string[]
  calculate: (inputs: Record<string, number>, target: string) => {
    result: number
    secondaryResult?: Record<string, number>
    resultDisplay?: string
    unit?: string
    showError?: string
    steps?: Array<{ title: string; latex: string; explanation: string }>
  }
}

interface SolveResult {
  showError?: string
  result?: number
  resultDisplay?: string
  unit?: string
  steps?: Array<{ title: string; latex: string; explanation: string }>
}

export function FormulasPanel() {
  const { showToast } = useToast()
  const [currentFormula, setCurrentFormula] = useState<Formula>(FORMULAS_DATA[0] as Formula)
  const [currentTarget, setCurrentTarget] = useState<string>((FORMULAS_DATA[0] as Formula).solveTargets[0])
  const [inputs, setInputs] = useState<Record<string, number>>({})
  const [result, setResult] = useState<SolveResult | null>(null)
  const [currentCategory, setCurrentCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Initialize inputs when formula changes
  useEffect(() => {
    const init: Record<string, number> = {}
    currentFormula.variables.forEach(v => { init[v.id] = v.defaultValue ?? 0 })
    setInputs(init)
    setCurrentTarget(currentFormula.solveTargets[0])
    setResult(null)
  }, [currentFormula])

  const filtered = useMemo(() => {
    let list = FORMULAS_DATA as Formula[]
    if (currentCategory !== 'all') {
      list = list.filter(f => f.category === currentCategory)
    }
    const q = searchQuery.toLowerCase().trim()
    if (q) {
      list = list.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.nameTh.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.categoryTh.toLowerCase().includes(q)
      )
    }
    return list
  }, [currentCategory, searchQuery])

  const groups = useMemo(() => {
    const g: Record<string, Formula[]> = {}
    filtered.forEach(f => {
      if (!g[f.category]) g[f.category] = []
      g[f.category].push(f)
    })
    return g
  }, [filtered])

  const selectFormula = (id: string) => {
    const found = FORMULAS_DATA.find(f => f.id === id) as Formula | undefined
    if (found) setCurrentFormula(found)
  }

  const setTarget = (targetVarId: string) => {
    setCurrentTarget(targetVarId)
  }

  const updateInput = (varId: string, value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value
    if (!isNaN(num)) {
      setInputs(prev => ({ ...prev, [varId]: num }))
    }
  }

  const executeCalculation = () => {
    try {
      const data = currentFormula.calculate(inputs, currentTarget)
      setResult(data as SolveResult)
    } catch (err: any) {
      setResult({ showError: err?.message || String(err) })
    }
  }

  const copyLatex = async () => {
    try {
      await navigator.clipboard.writeText(currentFormula.latex)
      showToast('คัดลอกรหัส LaTeX ลงคลิปบอร์ดแล้ว', 'success')
    } catch {
      showToast('คัดลอกไม่สำเร็จ', 'error')
    }
  }

  const targetInfo = currentFormula.variables.find(v => v.id === currentTarget)

  if (!targetInfo) return null

  return (
    <section className="tab-panel">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left: Search & Directory */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="glass-panel p-4 rounded-2xl border border-slate-800">
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ค้นหาชื่อสูตร หรือคำอธิบาย..."
                className="glass-input w-full rounded-xl pl-9 pr-4 py-2 text-xs"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {FORMULA_CATEGORIES.map(cat => {
                const count = cat.id === 'all'
                  ? FORMULAS_DATA.length
                  : FORMULAS_DATA.filter(f => f.category === cat.id).length
                const isActive = currentCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCurrentCategory(cat.id)}
                    className={`category-chip flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                      isActive
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
                        : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-sm leading-none">{getCategoryEmoji(cat.id)}</span>
                    <span>{cat.nameTh}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-indigo-100' : 'bg-slate-900/70 text-slate-500'}`}>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="p-5 text-center text-slate-500 text-sm glass-panel border border-slate-800 rounded-2xl">ไม่พบสูตรที่ตรงกับเงื่อนไข</div>
            ) : (
              Object.entries(groups).map(([catId, list]) => {
                const cat = FORMULA_CATEGORIES.find(c => c.id === catId)
                return (
                  <div key={catId} className="formula-group mb-3">
                    <div className="flex items-center gap-2 px-1 pb-2 pt-1">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{cat?.nameTh}</span>
                      <span className="text-[10px] font-mono text-slate-600">{list.length}</span>
                      <div className="flex-1 h-px bg-slate-800/80"></div>
                    </div>
                    <div className="space-y-2">
                      {list.map((f, i) => {
                        const isSelected = currentFormula.id === f.id
return (
                          <div
                            key={f.id}
                            onClick={() => selectFormula(f.id)}
                            style={{ animationDelay: `${Math.min(i * 18, 240)}ms` }}
                            className={`formula-item-card group p-3 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-indigo-950/40 border-indigo-500/80 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/40'
                                : 'bg-slate-900/60 border-slate-800 hover:border-slate-600/70 hover:bg-slate-800/40'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="text-sm shrink-0 leading-none mt-px" aria-hidden="true">{getCategoryEmoji(f.category)}</span>
                                <div className="text-sm font-bold text-slate-100 leading-snug truncate">{f.nameTh}</div>
                              </div>
                              <span className="text-[11px] text-slate-500 font-mono whitespace-nowrap mt-0.5 group-hover:text-cyan-400 transition-colors">{f.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/70 whitespace-nowrap">{f.categoryTh}</span>
                              {f.grade ? <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-500/30 whitespace-nowrap">{f.grade}</span> : null}
                              <div className="text-xs text-cyan-300/90 font-mono overflow-hidden flex-1">
                                <MathDisplay latex={f.latex} className="!text-xs !text-cyan-300/90 overflow-hidden" />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* Right: Interactive Workspace */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Formula Header */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryColor(currentFormula.category)}`}>
                  {currentFormula.categoryTh}
                </span>
                {currentFormula.grade ? (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-500/30">
                    ระดับชั้น {currentFormula.grade}
                  </span>
                ) : null}
                <span className="text-xs text-slate-400 font-mono">{currentFormula.name}</span>
              </div>
              <button onClick={copyLatex} className="btn-interactive flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <span>Copy LaTeX</span>
              </button>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-slate-100 mb-2">{currentFormula.nameTh}</h2>
            <p className="text-xs lg:text-sm text-slate-400 leading-relaxed mb-5">{currentFormula.description}</p>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 shadow-inner flex flex-col items-center justify-center min-h-[110px]">
              <MathDisplay latex={currentFormula.latex} displayMode className="text-xl sm:text-2xl lg:text-3xl text-cyan-300" />
            </div>
          </div>

          {/* Variables & Target */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <div className="mb-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                เลือกตัวแปรที่ต้องการคำนวณ (Solve for Variable):
              </div>
              <div className="flex flex-wrap gap-2">
                {currentFormula.solveTargets.map(tgt => {
                  const vInfo = currentFormula.variables.find(v => v.id === tgt)
                  const symbol = vInfo ? vInfo.symbol : tgt
                  const name = vInfo ? vInfo.nameTh : 'คำตอบ'
                  const isSelected = currentTarget === tgt
                  return (
                    <button
                      key={tgt}
                      onClick={() => setTarget(tgt)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      หาค่า {symbol} ({name})
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              กำหนดค่าตัวแปร (Adjust Parameters):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {currentFormula.variables.map(v => {
                const isTarget = currentTarget === v.id
                const currentVal = inputs[v.id] !== undefined ? inputs[v.id] : v.defaultValue
                return (
                  <div key={v.id} className={`p-3 rounded-xl border ${isTarget ? 'bg-cyan-950/20 border-cyan-500/40 opacity-75' : 'bg-slate-800/50 border-slate-700/60'}`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                        <span className="font-mono text-cyan-400 font-bold">{v.symbol}</span>
                        <span>• {v.nameTh}</span>
                      </label>
                      <span className="text-xs text-slate-400 font-mono">{v.unit || 'ไม่มีหน่วย'}</span>
                    </div>
                    {isTarget ? (
                      <div className="text-xs text-cyan-400 italic py-1.5 flex items-center gap-1">🎯 ตัวแปรเป้าหมายที่ต้องการคำนวณ</div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          step={v.step || 0.1}
                          value={currentVal}
                          onChange={e => updateInput(v.id, e.target.value)}
                          className="glass-input w-28 rounded-lg px-2.5 py-1 text-sm font-mono"
                        />
                        <input
                          type="range"
                          min={v.min ?? -1e6}
                          max={v.max ?? 1e6}
                          step={v.step || 0.1}
                          value={currentVal}
                          onChange={e => updateInput(v.id, e.target.value)}
                          className="glass-range flex-1 h-1.5 rounded-lg appearance-none cursor-pointer" style={{ ['--fill' as string]: `${Math.min(100, Math.max(0, (((currentVal ?? 0) - (v.min ?? -1e6)) / ((v.max ?? 1e6) - (v.min ?? -1e6))) * 100))}%` }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Result Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-cyan-950/30 to-slate-900 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">ผลลัพธ์การคำนวณสุทธิ (Computed Result):</div>
                {result?.showError ? (
                  <div className="text-rose-400 text-sm font-medium">⚠️ {result.showError}</div>
                ) : result ? (
                  <div className="text-2xl font-bold font-mono text-cyan-300 flex items-baseline gap-2">
                    <span>{result.resultDisplay || `${typeof result.result === 'number' ? formatNumber(result.result) : result.result} ${result.unit || ''}`}</span>
                  </div>
                ) : (
                  <div className="text-sm text-slate-500">—</div>
                )}
              </div>
              <button onClick={executeCalculation} className="btn-interactive px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/30 hover:shadow-cyan-500/40">
                คำนวณและแสดงขั้นตอน
              </button>
            </div>
          </div>

          {/* Step-by-Step Derivation */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
                ขั้นตอนการแทนค่าและแก้สมการอย่างละเอียด (Step-by-Step Derivation)
              </h3>
            </div>
            <div className="space-y-3">
              {result?.steps ? (
                result.steps.map((step, idx) => (
                  <div key={idx} className="step-card p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm shadow-indigo-500/10">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-slate-300 mb-1">{step.title}</div>
                      <div className="text-sm text-cyan-200 py-1"><MathDisplay latex={step.latex} /></div>
                      <div className="text-xs text-slate-400 mt-1">{step.explanation}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-500">กดปุ่ม "คำนวณและแสดงขั้นตอน" เพื่อดูการแทนค่าและขั้นตอนการแก้สมการ</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}