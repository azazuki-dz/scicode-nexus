'use client'

import { useEffect, useRef, useState } from 'react'

interface MathDisplayProps {
  latex: string
  displayMode?: boolean
  className?: string
}

export function MathDisplay({ latex, displayMode = false, className = '' }: MathDisplayProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    import('katex').then(mod => {
      if (cancelled) return
      const el = containerRef.current
      if (el) {
        try {
          el.innerHTML = mod.renderToString(latex, { displayMode, throwOnError: false })
          setError(false)
        } catch {
          el.textContent = latex
          setError(true)
        }
      }
    }).catch(() => {
      if (!cancelled && containerRef.current) {
        containerRef.current.textContent = latex
        setError(true)
      }
    })

    return () => { cancelled = true }
  }, [latex, displayMode])

  return (
    <span
      ref={containerRef}
      className={`inline-block ${displayMode ? 'katex-display-block' : ''} ${error ? 'font-mono text-slate-400' : ''} ${className}`}
    />
  )
}