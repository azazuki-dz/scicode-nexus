'use client'

import dynamic from 'next/dynamic'
import type { SceneProbe } from './ThreeLabPreview'

const ThreeLabPreview = dynamic(() => import('./ThreeLabPreview').then(m => m.ThreeLabPreview), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-xs text-slate-500 font-mono">
      กำลังเตรียม WebGL context...
    </div>
  ),
})

interface ThreePreviewHostProps {
  code: string
  runKey: number
  onLog: (type: string, ...args: any[]) => void
  onProbe: (probe: SceneProbe) => void
}

export function ThreePreviewHost(props: ThreePreviewHostProps) {
  return <ThreeLabPreview {...props} />
}