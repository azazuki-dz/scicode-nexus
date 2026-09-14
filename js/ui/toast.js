/**
 * SciCode Nexus - Lightweight Toast Notification System
 */

export function showToast(message, type = 'info', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-500/90 text-white border-emerald-400/50' :
             type === 'error' ? 'bg-rose-500/90 text-white border-rose-400/50' :
             type === 'warning' ? 'bg-amber-500/90 text-slate-900 border-amber-400/50' :
             'bg-slate-800/95 text-slate-100 border-slate-700';

  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border text-sm font-medium transition-all duration-300 transform translate-y-3 opacity-0 ${bg}`;
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  // Trigger animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-3', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
