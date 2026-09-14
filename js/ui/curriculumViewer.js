/**
 * SciCode Nexus - Curriculum Viewer UI
 * Handles grade filtering (ม.1 - ม.6), subject filtering, search,
 * and renders deep-dive lessons with KaTeX math, worked examples, and exam hacks.
 */

import { CURRICULUM_GRADES, CURRICULUM_SUBJECTS, queryCurriculum, ALL_CURRICULUM_DATA } from '../data/curriculum/curriculumRegistry.js';

export class CurriculumViewer {
  constructor(containerId, detailContainerId) {
    this.container = document.getElementById(containerId);
    this.detailContainer = document.getElementById(detailContainerId);
    this.selectedGrade = 'all';
    this.selectedSubject = 'all';
    this.searchQuery = '';
    this.activeTopic = ALL_CURRICULUM_DATA[0];
    this.pageSize = 5;
    this.currentPage = 1;

    this.init();
  }

  init() {
    this.renderFilters();
    this.renderTopicList();
    this.renderTopicDetail(this.activeTopic);

    // Search input listener
    const searchInput = document.getElementById('curriculum-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.currentPage = 1;
        this.renderTopicList();
      });
    }
  }

  getFilteredTopics() {
    return queryCurriculum(this.selectedGrade, this.selectedSubject, this.searchQuery);
  }

  renderResultCount(total) {
    const el = document.getElementById('curriculum-result-count');
    if (el) {
      const start = total === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
      const end = Math.min(this.currentPage * this.pageSize, total);
      el.textContent = total > 0 ? `แสดง ${start}-${end} จาก ${total} รายการ` : '';
    }
  }

  renderPagination(total) {
    const container = document.getElementById('curriculum-pagination');
    if (!container) return;

    const pageCount = Math.max(1, Math.ceil(total / this.pageSize));
    if (this.currentPage > pageCount) this.currentPage = pageCount;

    if (pageCount <= 1) {
      container.innerHTML = '';
      return;
    }

    const pageBtn = (page, label, disabled = false, active = false) => `
      <button data-page="${page}" class="curriculum-page-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
        disabled
          ? 'opacity-40 cursor-not-allowed'
          : active
            ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-cyan-500/60 hover:text-cyan-300'
      }">${label}</button>
    `;

    let pages = [];
    // Prev button
    const hasPrev = this.currentPage > 1;
    pages.push(pageBtn(this.currentPage - 1, '‹', !hasPrev));

    // Page numbers (windowed so it stays compact with many pages)
    const windowStart = Math.max(1, this.currentPage - 2);
    const windowEnd = Math.min(pageCount, this.currentPage + 2);
    for (let p = windowStart; p <= windowEnd; p++) {
      pages.push(pageBtn(p, String(p), false, p === this.currentPage));
    }
    if (windowEnd < pageCount) {
      pages.push(`<span class="px-1 text-slate-600 text-xs">…</span>`);
      pages.push(pageBtn(pageCount, String(pageCount), false, pageCount === this.currentPage));
    }

    // Next button
    const hasNext = this.currentPage < pageCount;
    pages.push(pageBtn(this.currentPage + 1, '›', !hasNext));

    container.innerHTML = pages.join('');

    container.querySelectorAll('.curriculum-page-btn').forEach(btn => {
      const page = parseInt(btn.getAttribute('data-page'), 10);
      const disabled = btn.classList.contains('cursor-not-allowed');
      btn.addEventListener('click', () => {
        if (disabled || page === this.currentPage) return;
        this.currentPage = page;
        this.renderTopicList();
        document.querySelector('#curriculum-topic-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  renderFilters() {
    // Render Grade Chips
    const gradeContainer = document.getElementById('curriculum-grade-filter');
    if (gradeContainer) {
      gradeContainer.innerHTML = CURRICULUM_GRADES.map(g => `
        <button data-grade="${g.id}" class="grade-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
          this.selectedGrade === g.id
            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
            : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
        }">
          ${g.label}
        </button>
      `).join('');

      gradeContainer.querySelectorAll('.grade-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.selectedGrade = btn.getAttribute('data-grade');
          this.currentPage = 1;
          this.renderFilters();
          this.renderTopicList();
        });
      });
    }

    // Render Subject Chips
    const subjectContainer = document.getElementById('curriculum-subject-filter');
    if (subjectContainer) {
      subjectContainer.innerHTML = CURRICULUM_SUBJECTS.map(s => `
        <button data-subject="${s.id}" class="subject-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
          this.selectedSubject === s.id
            ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
            : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
        }">
          ${s.name}
        </button>
      `).join('');

      subjectContainer.querySelectorAll('.subject-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.selectedSubject = btn.getAttribute('data-subject');
          this.currentPage = 1;
          this.renderFilters();
          this.renderTopicList();
        });
      });
    }
  }

  renderTopicList() {
    const listContainer = document.getElementById('curriculum-topic-list');
    if (!listContainer) return;

    const allTopics = this.getFilteredTopics();
    this.renderResultCount(allTopics.length);

    const pageCount = Math.max(1, Math.ceil(allTopics.length / this.pageSize));
    if (this.currentPage > pageCount) this.currentPage = pageCount;

    const start = (this.currentPage - 1) * this.pageSize;
    const topics = allTopics.slice(start, start + this.pageSize);

    if (topics.length === 0) {
      listContainer.innerHTML = `
        <div class="p-8 text-center text-slate-500 text-sm glass-panel border border-slate-800 rounded-2xl">
          ไม่พบบทเรียนที่ตรงกับเงื่อนไขการค้นหา
        </div>
      `;
      this.renderPagination(0);
      return;
    }

    listContainer.innerHTML = topics.map(topic => {
      const isSelected = this.activeTopic?.id === topic.id;
      const badgeColor = topic.subject === 'math' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                         topic.subject === 'science' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                         topic.subject === 'earth' ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' :
                         topic.subject === 'tech' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                         topic.subject === 'thai' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' :
                         topic.subject === 'english' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                         topic.subject === 'social' ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' :
                         topic.subject === 'history' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                         topic.subject === 'economics' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' :
                         topic.subject === 'health' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                         topic.subject === 'arts' ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30' :
                         'bg-lime-500/20 text-lime-300 border-lime-500/30';

      return `
        <div data-id="${topic.id}" class="curriculum-card-item p-4 rounded-2xl border transition-all cursor-pointer ${
          isSelected
            ? 'bg-indigo-950/40 border-indigo-500/80 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/40'
            : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
        }">
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-1.5">
              <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                ${topic.gradeLabel}
              </span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full border ${badgeColor}">
                ${topic.subjectLabel}
              </span>
            </div>
            <span class="text-[11px] text-slate-400 truncate max-w-[130px] font-mono">${topic.chapter}</span>
          </div>

          <h3 class="text-sm font-bold text-slate-100 mb-1.5 leading-snug line-clamp-1">
            ${topic.title}
          </h3>
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            ${topic.summary}
          </p>

          <div class="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
            <span class="flex items-center gap-1">
              <span class="text-cyan-400">✓</span> มีตัวอย่างโจทย์ & เทคนิคสอบ
            </span>
            <span class="text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">เปิดอ่าน ›</span>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listener
    listContainer.querySelectorAll('.curriculum-card-item').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const found = ALL_CURRICULUM_DATA.find(t => t.id === id);
        if (found) {
          this.activeTopic = found;
          this.renderTopicList();
          this.renderTopicDetail(found);
          // Scroll to detail on mobile
          if (window.innerWidth < 1024) {
            document.getElementById('curriculum-detail-panel')?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    this.renderPagination(allTopics.length);
  }

  renderTopicDetail(topic) {
    if (!topic) return;

    // Header Info
    document.getElementById('curriculum-detail-grade').textContent = topic.gradeLabel;
    document.getElementById('curriculum-detail-subject').textContent = topic.subjectLabel;
    document.getElementById('curriculum-detail-chapter').textContent = topic.chapter;
    document.getElementById('curriculum-detail-title').textContent = topic.title;
    document.getElementById('curriculum-detail-summary').textContent = topic.summary;

    // Key Concepts
    const conceptsContainer = document.getElementById('curriculum-detail-concepts');
    if (conceptsContainer) {
      conceptsContainer.innerHTML = topic.keyConcepts.map(kc => `
        <li class="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
          <span>${kc}</span>
        </li>
      `).join('');
    }

    // Formulas
    const formulasContainer = document.getElementById('curriculum-detail-formulas');
    if (formulasContainer) {
      if (!topic.formulas || topic.formulas.length === 0) {
        formulasContainer.innerHTML = '<div class="text-xs text-slate-500 italic">บทเรียนนี้เน้นการวิเคราะห์เชิงแนวคิดและหลักการ</div>';
      } else {
        formulasContainer.innerHTML = topic.formulas.map(f => `
          <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div class="text-xs font-semibold text-slate-400 mb-1.5">${f.name}</div>
            <div class="curriculum-katex text-sm text-cyan-300 py-1 font-mono" data-latex="${f.latex}"></div>
          </div>
        `).join('');
      }
    }

    // Worked Example & Step-by-Step Solution
    const exampleContainer = document.getElementById('curriculum-detail-example');
    if (exampleContainer && topic.workedExample) {
      const ex = topic.workedExample;
      exampleContainer.innerHTML = `
        <div class="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 mb-4">
          <div class="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5">โจทย์ตัวอย่าง (Problem Statement):</div>
          <div class="text-sm font-semibold text-slate-100 leading-relaxed">${ex.problem}</div>
        </div>

        <div class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">ขั้นตอนวิธีทำทีละสเต็ป (Step-by-Step Solution):</div>
        <div class="space-y-3 mb-4">
          ${ex.steps.map(s => `
            <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex gap-3 items-start">
              <div class="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ${s.step}
              </div>
              <div class="flex-1">
                <div class="text-xs text-slate-300 leading-relaxed">${s.text}</div>
                ${s.latex ? `<div class="curriculum-katex text-sm text-cyan-300 pt-1.5 font-mono" data-latex="${s.latex}"></div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-between">
          <span class="text-xs font-bold text-emerald-400">คำตอบสุทธิ (Final Answer):</span>
          <span class="text-xs font-mono font-bold text-slate-100">${ex.answer}</span>
        </div>
      `;
    }

    // Exam Hacks & Pitfalls
    const hacksContainer = document.getElementById('curriculum-detail-hacks');
    if (hacksContainer && topic.examHacks) {
      hacksContainer.innerHTML = topic.examHacks.map(hack => `
        <div class="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
          <span class="text-amber-400 font-bold shrink-0">🎯</span>
          <span>${hack}</span>
        </div>
      `).join('');
    }

    // Render all KaTeX in detail
    if (window.katex) {
      this.detailContainer.querySelectorAll('.curriculum-katex').forEach(el => {
        const latex = el.getAttribute('data-latex');
        try {
          window.katex.render(latex, el, { displayMode: false, throwOnError: false });
        } catch (e) {
          el.textContent = latex;
        }
      });
    }
  }
}
