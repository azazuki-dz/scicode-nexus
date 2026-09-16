'use client'

import { useEffect, useRef, useState } from 'react'
import { FORMULAS_DATA } from '@/data/formulas'
import { LESSONS_DATA } from '@/data/lessons'
import { ROADMAPS_DATA, CHEATSHEETS_DATA } from '@/data/resources'
import { CURRICULUM_SUBJECTS } from '@/data/curriculum/curriculumRegistry'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchItem {
  type: 'formula' | 'lesson' | 'roadmap' | 'cheatsheet' | 'curriculum'
  title: string
  subtitle: string
  action: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  const buildItems = (): SearchItem[] => {
    const q = query.toLowerCase().trim()
    const items: SearchItem[] = []

    if (!q) return items

    // Formulas
    FORMULAS_DATA.forEach(f => {
      if (f.nameTh.toLowerCase().includes(q) || f.name.toLowerCase().includes(q) || f.latex.toLowerCase().includes(q)) {
        items.push({
          type: 'formula',
          title: f.nameTh,
          subtitle: `สูตร · ${f.categoryTh}`,
          action: () => {
            // Navigate to formulas tab and select this formula
            console.log('Go to formula:', f.id)
          }
        })
      }
    })

    // Lessons
    LESSONS_DATA.forEach(l => {
      if (l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)) {
        items.push({
          type: 'lesson',
          title: l.title,
          subtitle: `บทเรียน · ${l.category}`,
          action: () => console.log('Go to lesson:', l.id)
        })
      }
    })

    // Roadmaps
    ROADMAPS_DATA.forEach(r => {
      if (r.titleTh.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) {
        items.push({
          type: 'roadmap',
          title: r.titleTh,
          subtitle: `Roadmap · ${r.badge}`,
          action: () => console.log('Go to roadmap:', r.id)
        })
      }
    })

    // Cheatsheets
    CHEATSHEETS_DATA.forEach(c => {
      if (c.category.toLowerCase().includes(q)) {
        items.push({
          type: 'cheatsheet',
          title: c.category,
          subtitle: 'Cheatsheet',
          action: () => console.log('Go to cheatsheet:', c.category)
        })
      }
    })

    // Curriculum
    CURRICULUM_SUBJECTS.forEach(s => {
      if (s.name.toLowerCase().includes(q)) {
        items.push({
          type: 'curriculum',
          title: s.name,
          subtitle: 'หลักสูตร',
          action: () => console.log('Go to curriculum:', s.id)
        })
      }
    })

    return items.slice(0, 8)
  }

  const items = buildItems()

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(i => Math.min(i + 1, items.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(i => Math.max(i - 1, 0))
      } else if (e.key === 'Enter' && items[selectedIndex]) {
        e.preventDefault()
        items[selectedIndex].action()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, items, selectedIndex, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative glass-panel w-full max-w-2xl mx-4 rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">⌘</kbd>
            <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">K</kbd>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="ค้นหาสูตร บทเรียน Roadmap Cheatsheet หลักสูตร..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 text-base font-medium"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
        <div ref={itemsRef} className="max-h-96 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              {query ? 'ไม่พบผลลัพธ์' : 'พิมพ์เพื่อค้นหา...'}
            </div>
          ) : (
            items.map((item, i) => (
              <button
                key={`${item.type}-${item.title}-${i}`}
                onClick={() => { item.action(); onClose(); }}
                className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 ${
                  i === selectedIndex ? 'bg-indigo-500/20' : 'hover:bg-slate-800/50'
                }`}
              >
                <span className="text-sm font-mono text-slate-500 w-6 text-center">
                  {item.type === 'formula' && '📐'}
                  {item.type === 'lesson' && '📖'}
                  {item.type === 'roadmap' && '🗺️'}
                  {item.type === 'cheatsheet' && '📋'}
                  {item.type === 'curriculum' && '🎓'}
                </span>
                <div>
                  <div className="text-sm font-medium text-slate-100">{item.title}</div>
                  <div className="text-[11px] text-slate-500">{item.subtitle}</div>
                </div>
              </button>
            ))
          )}
        </div>
        <div className="px-4 py-2 border-t border-slate-800 text-[11px] text-slate-500 text-center">
          ↑↓ เลือก · Enter เปิด · Esc ปิด
        </div>
      </div>
    </div>
  )
}