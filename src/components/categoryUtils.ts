export const CATEGORY_COLORS: Record<string, string> = {
  physics: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  chemistry: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  biology: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  mechanics: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  energy: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  thermodynamics: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  waves: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  electricity: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  algebra: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  calculus: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  geometry: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  trigonometry: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  sequences: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  statistics: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  advanced: 'bg-pink-600/20 text-pink-300 border-pink-600/30',
  earth: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
  economics: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  health: 'bg-red-500/20 text-red-300 border-red-500/30',
  tech: 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30',
  finance: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
}

export const CATEGORY_EMOJI: Record<string, string> = {
  all: '📚', mechanics: '⚙', physics: '⚛', waves: '〰', electricity: '⚡',
  chemistry: '🧪', biology: '🧬', earth: '🌍', algebra: '📐', calculus: '∫',
  geometry: '△', trigonometry: '📐', sequences: '⋯', statistics: '📊',
  advanced: '⊗', economics: '📈', health: '❤', tech: '💻', finance: '💰',
  energy: '🔋', thermodynamics: '🌡',
}

export const CURRICULUM_SUBJECT_COLORS: Record<string, string> = {
  math: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  science: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  earth: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  tech: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  thai: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  english: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  social: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  history: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  economics: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  health: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  arts: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  career: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
}

export function getCategoryColor(catId: string): string {
  return CATEGORY_COLORS[catId] || 'bg-slate-800 text-slate-300 border-slate-700'
}

export function getCategoryEmoji(catId: string): string {
  return CATEGORY_EMOJI[catId] || '📘'
}

export function getSubjectColor(subject: string): string {
  return CURRICULUM_SUBJECT_COLORS[subject] || 'bg-lime-500/20 text-lime-300 border-lime-500/30'
}

export function formatNumber(value: number, precision = 4): string {
  return `${typeof value === 'number' ? value.toFixed(precision) : value}`
}