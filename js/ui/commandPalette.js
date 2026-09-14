/**
 * SciCode Nexus - Command Palette (Ctrl+K / Cmd+K)
 * Quick fuzzy search across formulas, simulations, code lessons, and resources.
 */

import { FORMULAS_DATA } from '../data/formulas.js';
import { LESSONS_DATA } from '../data/lessons.js';
import { ALL_CURRICULUM_DATA } from '../data/curriculum/curriculumRegistry.js';

export class CommandPalette {
  constructor(onSelectCallback) {
    this.isOpen = false;
    this.onSelect = onSelectCallback;
    this.modal = document.getElementById('command-palette-modal');
    this.input = document.getElementById('command-palette-input');
    this.resultsList = document.getElementById('command-palette-results');
    this.initListeners();
  }

  initListeners() {
    // Global hotkey Ctrl+K / Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener('input', (e) => {
        this.renderResults(e.target.value.trim().toLowerCase());
      });
    }
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  open() {
    if (!this.modal) return;
    this.isOpen = true;
    this.modal.classList.remove('hidden');
    this.modal.classList.add('flex');
    if (this.input) {
      this.input.value = '';
      this.input.focus();
    }
    this.renderResults('');
  }

  close() {
    if (!this.modal) return;
    this.isOpen = false;
    this.modal.classList.add('hidden');
    this.modal.classList.remove('flex');
  }

  renderResults(query) {
    if (!this.resultsList) return;

    // Collect all items
    const items = [];

    // Formulas
    FORMULAS_DATA.forEach(f => {
      items.push({
        type: 'formula',
        typeLabel: 'สูตร',
        typeBadge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        title: f.nameTh,
        subtitle: `${f.name} (${f.latex})`,
        id: f.id,
        tab: 'formulas'
      });
    });

    // Simulations
    items.push({
      type: 'sim',
      typeLabel: 'จำลองฟิสิกส์',
      typeBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      title: 'การเคลื่อนที่แบบโพรเจกไทล์ (Projectile Motion)',
      subtitle: 'ปรับมุม ความเร็ว แรงโน้มถ่วง และดูวิถีลูกกระสุน 60FPS',
      id: 'projectile',
      tab: 'simulations'
    });
    items.push({
      type: 'sim',
      typeLabel: 'จำลองฟิสิกส์',
      typeBadge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      title: 'การแกว่งของลูกตุ้มนาฬิกา (Harmonic Pendulum)',
      subtitle: 'ศึกษาคาบการแกว่งและแอมพลิจูดแบบอินเทอร์แอคทีฟ',
      id: 'pendulum',
      tab: 'simulations'
    });

    // Lessons
    LESSONS_DATA.forEach(l => {
      items.push({
        type: 'lesson',
        typeLabel: 'ฝึกเขียนโค้ด',
        typeBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        title: l.title,
        subtitle: `${l.category} • ${l.difficulty}`,
        id: l.id,
        tab: 'lab'
      });
    });

    // Curriculum Topics (M.1 - M.6)
    ALL_CURRICULUM_DATA.forEach(c => {
      items.push({
        type: 'curriculum',
        typeLabel: `${c.gradeLabel} ${c.subjectLabel}`,
        typeBadge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        title: c.title,
        subtitle: `${c.chapter} • ${c.summary.substring(0, 70)}...`,
        id: c.id,
        tab: 'curriculum'
      });
    });

    // Filter items
    const filtered = query ? items.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.subtitle.toLowerCase().includes(query) ||
      item.typeLabel.toLowerCase().includes(query)
    ) : items;

    if (filtered.length === 0) {
      this.resultsList.innerHTML = `<div class="p-6 text-center text-slate-500 text-sm">ไม่พบผลลัพธ์ที่ตรงกับ "${query}"</div>`;
      return;
    }

    this.resultsList.innerHTML = filtered.map(item => `
      <div data-tab="${item.tab}" data-id="${item.id}" class="command-result-item flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-colors border border-transparent hover:border-slate-700/60 group">
        <div class="flex items-center gap-3">
          <span class="text-xs px-2 py-0.5 rounded-full border font-semibold ${item.typeBadge}">${item.typeLabel}</span>
          <div>
            <div class="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">${item.title}</div>
            <div class="text-xs text-slate-400 truncate max-w-md">${item.subtitle}</div>
          </div>
        </div>
        <span class="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">เลือก ↵</span>
      </div>
    `).join('');

    // Attach click handlers
    this.resultsList.querySelectorAll('.command-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const tab = el.getAttribute('data-tab');
        const id = el.getAttribute('data-id');
        this.close();
        if (this.onSelect) this.onSelect(tab, id);
      });
    });
  }
}
