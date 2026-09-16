'use client'

import { useState, useEffect, useCallback } from 'react'
import { ThemeProvider, useTheme } from './ThemeProvider'
import { ToastProvider } from './ToastProvider'
import { SplashScreen } from './SplashScreen'
import { CommandPalette } from './CommandPalette'
import { LauncherPanel } from './panels/LauncherPanel'
import { FormulasPanel } from './panels/FormulasPanel'
import { SimulationsPanel } from './panels/SimulationsPanel'
import { CodeLabPanel } from './panels/CodeLabPanel'
import { VaultPanel } from './panels/VaultPanel'
import { CurriculumPanel } from './panels/CurriculumPanel'

const TABS = [
  { id: 'launcher', label: 'หน้าแรก', icon: '🏠' },
  { id: 'formulas', label: 'สูตรคำนวณ', icon: '📐' },
  { id: 'simulations', label: 'จำลองฟิสิกส์', icon: '⚙️' },
  { id: 'lab', label: 'ห้องแล็บโค้ด', icon: '💻' },
  { id: 'vault', label: 'คลังความรู้', icon: '📚' },
  { id: 'curriculum', label: 'หลักสูตร ม.1-6', icon: '🎓' },
] as const

type TabId = typeof TABS[number]['id']

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabId>('launcher')
  const [splashDone, setSplashDone] = useState(false)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setCmdPaletteOpen(true)
    }
    if (e.key === 'Escape') {
      setCmdPaletteOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const renderTabPanel = (tabId: TabId) => {
    switch (tabId) {
      case 'launcher': return <LauncherPanel onLaunch={setActiveTab} />
      case 'formulas': return <FormulasPanel />
      case 'simulations': return <SimulationsPanel />
      case 'lab': return <CodeLabPanel />
      case 'vault': return <VaultPanel />
      case 'curriculum': return <CurriculumPanel />
    }
  }

  return (
    <>
      <div className="fixed top-4 right-4 z-40 flex items-center gap-3">
        <button
          id="theme-toggle-btn"
          onClick={toggleTheme}
          className="glass-panel p-2 rounded-xl"
          aria-label={`สลับโหมด${theme === 'dark' ? 'สว่าง' : 'มืด'}`}
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
        <button
          id="brand-home"
          onClick={() => setActiveTab('launcher')}
          className="glass-panel p-2 rounded-xl"
          aria-label="หน้าแรก"
        >
          <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12" /></svg>
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 glass-panel border-t border-slate-700/50" style={{ backdropFilter: 'blur(16px)' }}>
        <div className="flex items-center justify-around px-2 py-1.5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab-btn flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="pb-20 pt-4 px-4">
        {renderTabPanel(activeTab)}
      </main>

      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
    </>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  )
}