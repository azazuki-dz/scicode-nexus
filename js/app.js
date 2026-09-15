/**
 * SciCode Nexus - Main Application Controller
 * Seamlessly connects calculators, interactive visualizers, coding lab, and knowledge vault.
 */

import { FORMULA_CATEGORIES, FORMULAS_DATA } from './data/formulas.js';
import { LESSONS_DATA } from './data/lessons.js';
import { ROADMAPS_DATA, CHEATSHEETS_DATA, EXTERNAL_RESOURCES_DATA } from './data/resources.js';
import { FormulaSolver } from './engine/solver.js';
import { ProjectileSimulation, PendulumSimulation } from './engine/visualizer.js';
import { CodeRunner } from './engine/codeRunner.js';
import { CommandPalette } from './ui/commandPalette.js';
import { CurriculumViewer } from './ui/curriculumViewer.js';
import { ALL_CURRICULUM_DATA } from './data/curriculum/curriculumRegistry.js';
import { showToast } from './ui/toast.js';

class SciCodeNexusApp {
  constructor() {
    this.currentTab = 'launcher';
    this.currentCategory = 'all';
    this.solver = new FormulaSolver();
    this.codeRunner = null;
    this.projectileSim = null;
    this.pendulumSim = null;
    this.currentLesson = LESSONS_DATA[0];
    this.commandPalette = null;
    this.curriculumViewer = null;
    this.revealObserver = null;
    this.splashAnimId = null;

    this.init();
  }

  init() {
    this.initNexusSplash();
    this.initTheme();
    this.initTabs();
    this.initFormulasSection();
    this.initSimulationsSection();
    this.initCodeLabSection();
    this.initVaultSection();
    this.initCurriculumSection();
    this.initCommandPalette();
    this.initGlobalEvents();
    this.initLauncher();

    // Start on the Nexus Home Hub instead of a specific tab
    this.switchTab('launcher');

    // Render initial formula
    this.renderFormulaDetail();

    // Reveal-on-scroll animations for launcher & static sections
    this.observeReveals();
    setTimeout(() => this.observeReveals(), 150);
  }

  // ==================== THEME MANAGEMENT ====================
  initTheme() {
    const savedTheme = localStorage.getItem('scicode_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('scicode_theme', next);
        showToast(`สลับเป็น ${next === 'dark' ? 'Dark Mode' : 'Light Mode'} เรียบร้อย`, 'info', 1500);
      });
    }
  }

  // ==================== TAB NAVIGATION ====================
  initTabs() {
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Update nav buttons
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const active = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('bg-indigo-600', active);
      btn.classList.toggle('text-white', active);
      btn.classList.toggle('shadow-lg', active);
      btn.classList.toggle('shadow-indigo-500/30', active);
      btn.classList.toggle('text-slate-400', !active);
      btn.classList.toggle('hover:text-slate-200', !active);
    });

    // Update tab content panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
      const isTarget = panel.id === `tab-panel-${tabId}`;
      panel.classList.toggle('hidden', !isTarget);
      if (isTarget) {
        panel.classList.add('animate-fade-in');
      }
    });

    // Handle tab-specific activations
    if (tabId === 'simulations') {
      setTimeout(() => {
        if (this.projectileSim) this.projectileSim.resize();
        if (this.pendulumSim) this.pendulumSim.resize();
      }, 50);
    }

    // Smooth-scroll back to top whenever the view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==================== FORMULAS & SOLVER MODULE ====================
  initFormulasSection() {
    this.renderCategoryChips();
    this.renderFormulasList();

    // Search input for formulas
    const searchInput = document.getElementById('formula-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.renderFormulasList(e.target.value.trim().toLowerCase());
      });
    }

    // Solve Button
    const solveBtn = document.getElementById('formula-solve-btn');
    if (solveBtn) {
      solveBtn.addEventListener('click', () => this.executeCalculation());
    }

    // Copy LaTeX Button
    const copyLatexBtn = document.getElementById('copy-latex-btn');
    if (copyLatexBtn) {
      copyLatexBtn.addEventListener('click', () => {
        const latex = this.solver.currentFormula.latex;
        navigator.clipboard.writeText(latex);
        showToast('คัดลอกรหัส LaTeX ลงคลิปบอร์ดแล้ว', 'success');
      });
    }
  }

  getCategoryColor(catId) {
    const map = {
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
      finance: 'bg-lime-500/20 text-lime-300 border-lime-500/30'
    };
    return map[catId] || 'bg-slate-800 text-slate-300 border-slate-700';
  }

  renderCategoryChips() {
    const container = document.getElementById('formula-categories');
    if (!container) return;

    const countFor = (catId) => catId === 'all'
      ? FORMULAS_DATA.length
      : FORMULAS_DATA.filter(f => f.category === catId).length;

    container.innerHTML = FORMULA_CATEGORIES.map(cat => {
      const count = countFor(cat.id);
      const isActive = this.currentCategory === cat.id;
      return `
        <button data-cat="${cat.id}" class="category-chip flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
          isActive
            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
            : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200 hover:border-slate-600'
        }">
          <span>${cat.nameTh}</span>
          <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
            isActive ? 'bg-white/20 text-indigo-100' : 'bg-slate-900/70 text-slate-500'
          }">${count}</span>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.category-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentCategory = btn.getAttribute('data-cat');
        this.renderCategoryChips();
        this.renderFormulasList();
      });
    });
  }

  renderFormulasList(searchQuery = '') {
    this.renderFormulaListItems(searchQuery);
  }

  renderFormulaListItems(searchQuery = '') {
    const listContainer = document.getElementById('formula-items-list');
    if (!listContainer) return;

    let filtered = FORMULAS_DATA;
    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(f => f.category === this.currentCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(f =>
        f.name.toLowerCase().includes(searchQuery) ||
        f.nameTh.toLowerCase().includes(searchQuery) ||
        f.description.toLowerCase().includes(searchQuery) ||
        f.categoryTh.toLowerCase().includes(searchQuery)
      );
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = '<div class="p-5 text-center text-slate-500 text-sm glass-panel border border-slate-800 rounded-2xl">ไม่พบสูตรที่ตรงกับเงื่อนไข</div>';
      return;
    }

    // Group formulas by category so the list reads like a directory
    const groups = {};
    filtered.forEach(f => {
      if (!groups[f.category]) groups[f.category] = [];
      groups[f.category].push(f);
    });

    listContainer.innerHTML = FORMULA_CATEGORIES.filter(c => c.id !== 'all' && groups[c.id]).map(cat => `
      <div class="formula-group mb-3">
        <div class="flex items-center gap-2 px-1 pb-2 pt-1">
          <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">${cat.nameTh}</span>
          <span class="text-[10px] font-mono text-slate-600">${groups[cat.id].length}</span>
          <div class="flex-1 h-px bg-slate-800/80"></div>
        </div>
        <div class="space-y-2">
          ${groups[cat.id].map((f, i) => this.renderFormulaCard(f, i)).join('')}
        </div>
      </div>
    `).join('');

    // Render KaTeX for previews
    listContainer.querySelectorAll('.formula-katex-preview').forEach(el => {
      const latex = el.getAttribute('data-latex');
      this.solver.renderKaTeX(el, latex, false);
    });

    // Card click events
    listContainer.querySelectorAll('.formula-item-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        this.solver.setFormula(id);
        this.renderFormulasList(document.getElementById('formula-search-input')?.value || '');
        this.renderFormulaDetail();
      });
    });
  }

  renderFormulaCard(formula, idx = 0) {
    const isSelected = this.solver.currentFormula.id === formula.id;
    const stagger = Math.min(idx * 18, 240);
    return `
      <div data-id="${formula.id}" style="animation-delay:${stagger}ms" class="formula-item-card group p-3 rounded-xl border transition-all cursor-pointer ${
        isSelected
          ? 'bg-indigo-950/40 border-indigo-500/80 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/40'
          : 'bg-slate-900/60 border-slate-800 hover:border-slate-600/70 hover:bg-slate-800/40'
      }">
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div class="text-sm font-bold text-slate-100 leading-snug">${formula.nameTh}</div>
          <span class="text-xs text-slate-400 font-mono whitespace-nowrap mt-0.5 group-hover:text-cyan-400 transition-colors">${formula.name}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/70 whitespace-nowrap">${formula.categoryTh}</span>
          ${formula.grade ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-500/30 whitespace-nowrap">${formula.grade}</span>` : ''}
          <div class="formula-katex-preview text-xs text-cyan-300/90 font-mono overflow-hidden flex-1" data-latex="${formula.latex}"></div>
        </div>
      </div>
    `;
  }

  renderFormulaDetail() {
    const f = this.solver.currentFormula;
    if (!f) return;

    // Header info
    document.getElementById('detail-formula-title').textContent = f.nameTh;
    document.getElementById('detail-formula-subtitle').textContent = f.name;
    document.getElementById('detail-formula-desc').textContent = f.description;
    const catBadge = document.getElementById('detail-formula-category');
    if (catBadge) {
      catBadge.textContent = f.categoryTh;
      catBadge.className = `text-xs font-semibold px-2.5 py-1 rounded-full border ${this.getCategoryColor(f.category)}`;
    }
    const gradeBadge = document.getElementById('detail-formula-grade');
    if (gradeBadge) {
      if (f.grade) {
        gradeBadge.textContent = `ระดับชั้น ${f.grade}`;
        gradeBadge.classList.remove('hidden');
      } else {
        gradeBadge.classList.add('hidden');
      }
    }

    // Main LaTeX display
    const formulaDisplayElem = document.getElementById('detail-formula-katex');
    this.solver.renderKaTeX(formulaDisplayElem, f.latex, true);

    // Render "Solve for target" buttons
    const targetSelectContainer = document.getElementById('detail-target-select');
    if (targetSelectContainer) {
      targetSelectContainer.innerHTML = f.solveTargets.map(tgt => {
        const vInfo = f.variables.find(v => v.id === tgt);
        const symbol = vInfo ? vInfo.symbol : tgt;
        const name = vInfo ? vInfo.nameTh : 'คำตอบ';
        const isSelected = this.solver.currentTarget === tgt;
        return `
          <button data-target="${tgt}" class="target-btn px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
            isSelected 
              ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20' 
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
          }">
            หาค่า ${symbol} (${name})
          </button>
        `;
      }).join('');

      targetSelectContainer.querySelectorAll('.target-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.solver.setTarget(btn.getAttribute('data-target'));
          this.renderFormulaDetail();
        });
      });
    }

    // Render Variable Inputs
    const inputsContainer = document.getElementById('detail-variables-inputs');
    if (inputsContainer) {
      inputsContainer.innerHTML = f.variables.map(v => {
        const isTarget = this.solver.currentTarget === v.id;
        const currentVal = this.solver.inputs[v.id] !== undefined ? this.solver.inputs[v.id] : v.defaultValue;
        return `
          <div class="variable-input-row p-3 rounded-xl border ${
            isTarget 
              ? 'bg-cyan-950/20 border-cyan-500/40 opacity-75' 
              : 'bg-slate-800/50 border-slate-700/60'
          }">
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <span class="font-mono text-cyan-400 font-bold">${v.symbol}</span>
                <span>• ${v.nameTh}</span>
              </label>
              <span class="text-xs text-slate-400 font-mono">${v.unit || 'ไม่มีหน่วย'}</span>
            </div>
            ${
              isTarget 
                ? `<div class="text-xs text-cyan-400 italic py-1.5 flex items-center gap-1">
                     <span>🎯 ตัวแปรเป้าหมายที่ต้องการคำนวณ</span>
                   </div>`
                : `<div class="flex items-center gap-3">
                     <input type="number" step="${v.step || 0.1}" data-var="${v.id}" value="${currentVal}"
                       class="var-input-number w-28 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-sm font-mono text-slate-100 focus:outline-none focus:border-indigo-500" />
                     <input type="range" min="${v.min}" max="${v.max}" step="${v.step || 0.1}" data-var="${v.id}" value="${currentVal}"
                       class="var-input-range flex-1 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                   </div>`
            }
          </div>
        `;
      }).join('');

      // Bind input events
      inputsContainer.querySelectorAll('.var-input-number').forEach(input => {
        input.addEventListener('input', (e) => {
          const varId = e.target.getAttribute('data-var');
          this.solver.updateInput(varId, e.target.value);
          // Sync range slider
          const slider = inputsContainer.querySelector(`.var-input-range[data-var="${varId}"]`);
          if (slider) slider.value = e.target.value;
          this.executeCalculation(false);
        });
      });

      inputsContainer.querySelectorAll('.var-input-range').forEach(range => {
        range.addEventListener('input', (e) => {
          const varId = e.target.getAttribute('data-var');
          this.solver.updateInput(varId, e.target.value);
          // Sync number input
          const numInput = inputsContainer.querySelector(`.var-input-number[data-var="${varId}"]`);
          if (numInput) numInput.value = e.target.value;
          this.executeCalculation(false);
        });
      });
    }

    // Auto-calculate on initial render
    this.executeCalculation(false);
  }

  executeCalculation(showNotification = true) {
    const res = this.solver.solve();
    const resultBox = document.getElementById('formula-result-display');
    const stepsContainer = document.getElementById('formula-steps-container');

    if (!res.success) {
      if (resultBox) {
        resultBox.innerHTML = `<span class="text-rose-400 text-sm font-medium">⚠️ ${res.error}</span>`;
      }
      return;
    }

    const { result, secondaryResult, resultDisplay, unit, steps } = res.data;

    // Display Result
    if (resultBox) {
      let displayText = resultDisplay || `${typeof result === 'number' ? result.toFixed(4) : result} ${unit}`;
      resultBox.innerHTML = `
        <div class="text-2xl font-bold font-mono text-cyan-300 flex items-baseline gap-2">
          <span>${displayText}</span>
        </div>
      `;
    }

    // Display Step-by-Step Derivation
    if (stepsContainer && steps) {
      stepsContainer.innerHTML = steps.map((step, idx) => `
        <div class="step-card p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex gap-3.5">
          <div class="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            ${idx + 1}
          </div>
          <div class="flex-1">
            <div class="text-xs font-semibold text-slate-300 mb-1">${step.title}</div>
            <div class="step-katex text-sm text-cyan-200 py-1" data-latex="${step.latex}"></div>
            <div class="text-xs text-slate-400 mt-1">${step.explanation}</div>
          </div>
        </div>
      `).join('');

      // Render KaTeX for each step
      stepsContainer.querySelectorAll('.step-katex').forEach(el => {
        const latex = el.getAttribute('data-latex');
        this.solver.renderKaTeX(el, latex, false);
      });
    }

    if (showNotification) {
      showToast('คำนวณสูตรและขั้นตอนเสร็จสิ้น', 'success', 1500);
    }
  }

  // ==================== SIMULATIONS MODULE ====================
  initSimulationsSection() {
    // Projectile HUD elements
    const projHud = {
      time: document.getElementById('proj-hud-time'),
      distance: document.getElementById('proj-hud-range'),
      height: document.getElementById('proj-hud-height'),
      velocity: document.getElementById('proj-hud-velocity')
    };
    this.projectileSim = new ProjectileSimulation('projectile-canvas', projHud);

    // Projectile Controls
    const v0Slider = document.getElementById('proj-v0-slider');
    const angleSlider = document.getElementById('proj-angle-slider');
    const gravitySelect = document.getElementById('proj-gravity-select');
    const dragToggle = document.getElementById('proj-drag-toggle');

    const updateProjParams = () => {
      if (this.projectileSim) {
        this.projectileSim.setParams(
          v0Slider?.value || 35,
          angleSlider?.value || 45,
          gravitySelect?.value || 9.8,
          dragToggle?.checked || false
        );
      }
      document.getElementById('proj-v0-val').textContent = `${v0Slider?.value} m/s`;
      document.getElementById('proj-angle-val').textContent = `${angleSlider?.value}°`;
    };

    if (v0Slider) v0Slider.addEventListener('input', updateProjParams);
    if (angleSlider) angleSlider.addEventListener('input', updateProjParams);
    if (gravitySelect) gravitySelect.addEventListener('change', updateProjParams);
    if (dragToggle) dragToggle.addEventListener('change', updateProjParams);

    // Action buttons
    document.getElementById('proj-launch-btn')?.addEventListener('click', () => {
      this.projectileSim.start();
    });
    document.getElementById('proj-pause-btn')?.addEventListener('click', () => {
      this.projectileSim.pause();
    });
    document.getElementById('proj-reset-btn')?.addEventListener('click', () => {
      this.projectileSim.reset();
    });

    // Pendulum Simulation
    const pendHud = {
      period: document.getElementById('pend-hud-period'),
      angle: document.getElementById('pend-hud-angle')
    };
    this.pendulumSim = new PendulumSimulation('pendulum-canvas', pendHud);

    const pendLenSlider = document.getElementById('pend-len-slider');
    const pendGravSelect = document.getElementById('pend-gravity-select');
    const pendDampSlider = document.getElementById('pend-damping-slider');

    const updatePendParams = () => {
      if (this.pendulumSim) {
        this.pendulumSim.setParams(
          pendLenSlider?.value || 2.0,
          pendGravSelect?.value || 9.8,
          pendDampSlider?.value || 0.002
        );
      }
      document.getElementById('pend-len-val').textContent = `${pendLenSlider?.value} m`;
    };

    if (pendLenSlider) pendLenSlider.addEventListener('input', updatePendParams);
    if (pendGravSelect) pendGravSelect.addEventListener('change', updatePendParams);
    if (pendDampSlider) pendDampSlider.addEventListener('input', updatePendParams);

    document.getElementById('pend-reset-btn')?.addEventListener('click', () => {
      this.pendulumSim.reset(40);
    });

    // Sim Sub-tabs toggle
    const simTabBtns = document.querySelectorAll('.sim-subtab-btn');
    simTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const simId = btn.getAttribute('data-sim');
        document.querySelectorAll('.sim-subtab-btn').forEach(b => {
          b.classList.toggle('bg-slate-700', b === btn);
          b.classList.toggle('text-white', b === btn);
        });
        document.querySelectorAll('.sim-view-card').forEach(view => {
          view.classList.toggle('hidden', view.id !== `sim-view-${simId}`);
        });
        if (simId === 'projectile' && this.projectileSim) this.projectileSim.resize();
        if (simId === 'pendulum' && this.pendulumSim) this.pendulumSim.resize();
      });
    });
  }

  // ==================== INTERACTIVE CODE LAB MODULE ====================
  initCodeLabSection() {
    const consoleOutput = document.getElementById('code-terminal-output');
    this.codeRunner = new CodeRunner(consoleOutput);

    this.renderLessonsList();
    this.loadLesson(LESSONS_DATA[0].id);

    // Code Run Button
    document.getElementById('code-run-btn')?.addEventListener('click', () => {
      const editor = document.getElementById('code-editor');
      if (editor && this.codeRunner) {
        this.codeRunner.runCode(editor.value);
      }
    });

    // Check Solution / Test Cases Button
    document.getElementById('code-test-btn')?.addEventListener('click', () => {
      const editor = document.getElementById('code-editor');
      if (editor && this.codeRunner && this.currentLesson) {
        const testRes = this.codeRunner.runLessonTests(editor.value, this.currentLesson);
        if (testRes.allPassed) {
          showToast('ยอดเยี่ยม! คุณผ่านการทดสอบทุกข้อ 🎉', 'success', 3500);
        } else {
          showToast(`ผ่าน ${testRes.passCount}/${testRes.total} ข้อ ตรวจสอบผลลัพธ์ใน Terminal`, 'warning', 3000);
        }
      }
    });

    // Reset Code Button
    document.getElementById('code-reset-btn')?.addEventListener('click', () => {
      const editor = document.getElementById('code-editor');
      if (editor && this.currentLesson) {
        editor.value = this.currentLesson.starterCode;
        this.codeRunner.clearConsole();
        showToast('รีเซ็ตโค้ดเป็นค่าเริ่มต้นแล้ว', 'info');
      }
    });

    // Reveal Solution Button
    document.getElementById('code-solution-btn')?.addEventListener('click', () => {
      const editor = document.getElementById('code-editor');
      if (editor && this.currentLesson) {
        if (confirm('คุณต้องการดูโค้ดเฉลยหรือไม่? โค้ดในหน้าจอจะถูกแทนที่ด้วยเฉลย')) {
          editor.value = this.currentLesson.solutionCode;
          showToast('แสดงโค้ดเฉลยแล้ว', 'info');
        }
      }
    });
  }

  renderLessonsList() {
    const container = document.getElementById('lessons-list-container');
    if (!container) return;

    container.innerHTML = LESSONS_DATA.map(lesson => {
      const isSelected = this.currentLesson?.id === lesson.id;
      return `
        <div data-id="${lesson.id}" class="lesson-card-item p-3.5 rounded-xl border transition-all cursor-pointer ${
          isSelected 
            ? 'bg-amber-950/30 border-amber-500/70 shadow-md shadow-amber-500/10' 
            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
        }">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
              ${lesson.difficulty}
            </span>
            <span class="text-xs text-slate-400">${lesson.category}</span>
          </div>
          <div class="text-sm font-semibold text-slate-200 line-clamp-1">${lesson.title}</div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.lesson-card-item').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        this.loadLesson(id);
      });
    });
  }

  loadLesson(lessonId) {
    const lesson = LESSONS_DATA.find(l => l.id === lessonId);
    if (!lesson) return;
    this.currentLesson = lesson;

    this.renderLessonsList();

    // Set Header
    document.getElementById('lesson-title-display').textContent = lesson.title;
    document.getElementById('lesson-desc-display').textContent = lesson.description;

    // Render Math Formula with KaTeX
    const mathFormulaElem = document.getElementById('lesson-formula-display');
    this.solver.renderKaTeX(mathFormulaElem, lesson.mathFormula, false);

    // Render Instructions
    const instList = document.getElementById('lesson-instructions-list');
    if (instList) {
      instList.innerHTML = lesson.instructions.map(inst => `
        <li class="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
          <span class="text-indigo-400 font-bold">›</span>
          <span>${inst}</span>
        </li>
      `).join('');
    }

    // Set Code Editor
    const editor = document.getElementById('code-editor');
    if (editor) {
      editor.value = lesson.starterCode;
    }

    if (this.codeRunner) {
      this.codeRunner.clearConsole();
    }
  }

  // ==================== KNOWLEDGE VAULT MODULE ====================
  initVaultSection() {
    this.renderRoadmaps();
    this.renderCheatsheets();
    this.renderExternalResources();
  }

  renderRoadmaps() {
    const container = document.getElementById('vault-roadmaps-container');
    if (!container) return;

    container.innerHTML = ROADMAPS_DATA.map(rm => `
      <div class="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            ${rm.badge}
          </span>
          <span class="text-xs text-slate-400">${rm.title}</span>
        </div>
        <h3 class="text-base font-bold text-slate-100 mb-2">${rm.titleTh}</h3>
        <p class="text-xs text-slate-400 mb-4 leading-relaxed">${rm.description}</p>
        
        <div class="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700/60 pl-6">
          ${rm.steps.map(step => `
            <div class="relative group">
              <div class="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-900"></div>
              <div class="text-xs font-bold text-cyan-300">${step.stage}: ${step.title} <span class="text-[11px] text-slate-500 font-normal">(${step.timeEst})</span></div>
              <div class="text-xs text-slate-400 mt-1">
                ${step.topics.join(' • ')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  renderCheatsheets() {
    const container = document.getElementById('vault-cheatsheet-container');
    if (!container) return;

    container.innerHTML = CHEATSHEETS_DATA.map(sheet => `
      <div class="glass-panel p-5 rounded-2xl border border-slate-800">
        <h3 class="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>${sheet.category}</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${sheet.items.map(item => `
            <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
              <div class="text-xs text-slate-400 font-medium mb-1">${item.name}</div>
              <div class="sheet-katex text-sm text-cyan-300 py-1" data-latex="${item.formula}"></div>
              <div class="text-[11px] text-slate-500 mt-1">${item.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.sheet-katex').forEach(el => {
      const latex = el.getAttribute('data-latex');
      this.solver.renderKaTeX(el, latex, false);
    });
  }

  renderExternalResources() {
    const container = document.getElementById('vault-resources-container');
    if (!container) return;

    container.innerHTML = EXTERNAL_RESOURCES_DATA.map(res => `
      <a href="${res.url}" target="_blank" rel="noopener noreferrer" 
         class="glass-panel p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
              ${res.tag}
            </span>
            <span class="text-slate-500 group-hover:text-cyan-400 transition-colors text-xs">↗ เปิดเว็บ</span>
          </div>
          <h4 class="text-sm font-bold text-slate-200 group-hover:text-white mb-1.5">${res.title}</h4>
          <p class="text-xs text-slate-400 leading-relaxed">${res.description}</p>
        </div>
      </a>
    `).join('');
  }

  // ==================== CURRICULUM MODULE (M.1 - M.6) ====================
  initCurriculumSection() {
    this.curriculumViewer = new CurriculumViewer('curriculum-topic-list', 'curriculum-detail-panel');
  }

  // ==================== COMMAND PALETTE ====================
  initCommandPalette() {
    this.commandPalette = new CommandPalette((tab, id) => {
      this.switchTab(tab);
      if (tab === 'formulas' && id) {
        this.solver.setFormula(id);
        this.renderFormulasList();
        this.renderFormulaDetail();
      } else if (tab === 'lab' && id) {
        this.loadLesson(id);
      } else if (tab === 'curriculum' && id && this.curriculumViewer) {
        const found = ALL_CURRICULUM_DATA.find(t => t.id === id);
        if (found) {
          this.curriculumViewer.activeTopic = found;
          this.curriculumViewer.renderTopicList();
          this.curriculumViewer.renderTopicDetail(found);
        }
      }
    });

    document.getElementById('cmd-palette-trigger-btn')?.addEventListener('click', () => {
      this.commandPalette.open();
    });
  }

  initGlobalEvents() {
    // Home button (desktop header) -> back to launcher hub
    document.getElementById('home-btn')?.addEventListener('click', () => {
      this.switchTab('launcher');
    });

    // Clicking the brand logo also returns home
    document.getElementById('brand-home')?.addEventListener('click', () => {
      this.switchTab('launcher');
    });
  }

  initLauncher() {
    const setStat = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val);
    };
    setStat('lstat-formulas', FORMULAS_DATA.length);
    setStat('lstat-sims', 2);
    setStat('lstat-lessons', LESSONS_DATA.length);
    setStat('lstat-topics', ALL_CURRICULUM_DATA.length);

    // Launch cards -> jump to the corresponding tab
    document.querySelectorAll('[data-launch]').forEach(card => {
      card.addEventListener('click', () => {
        const tab = card.getAttribute('data-launch');
        this.switchTab(tab);
        const title = card.querySelector('.launch-title')?.textContent || tab;
        showToast(`เข้าใช้งาน: ${title}`, 'info', 1200);
      });
    });

    // Spotlight glow follows the cursor across the grid
    document.querySelectorAll('.launch-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    });
  }

  // Particle-network entrance animation shown once on load
  initNexusSplash() {
    const splash = document.getElementById('nexus-splash');
    if (!splash) return;
    const canvas = document.getElementById('nexus-splash-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const bar = document.getElementById('nexus-progress-bar');
    const pctLabel = document.getElementById('nexus-progress-text');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let nodes = [];
    let drawRaf = null;
    let width = 0;
    let height = 0;
    let finished = false;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = splash.clientWidth;
      height = splash.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const count = reduced ? 0 : Math.max(40, Math.min(110, Math.round((width * height) / 22000)));
      nodes = [];
      const hues = [190, 205, 222, 240, 160];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.8 + Math.random() * 1.6,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          hue: hues[Math.floor(Math.random() * hues.length)]
        });
      }
    };

    const stepParticles = () => {
      const linkDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const d = Math.sqrt(d2);
            ctx.strokeStyle = `hsla(${a.hue}, 90%, 70%, ${(1 - d / linkDist) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = width + 20;
        else if (a.x > width + 20) a.x = -20;
        if (a.y < -20) a.y = height + 20;
        else if (a.y > height + 20) a.y = -20;

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${a.hue}, 95%, 75%, 0.85)`;
        ctx.shadowColor = `hsla(${a.hue}, 95%, 70%, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      if (!finished) drawRaf = requestAnimationFrame(stepParticles);
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      if (drawRaf) cancelAnimationFrame(drawRaf);
      if (this.splashAnimId) cancelAnimationFrame(this.splashAnimId);
      splash.classList.add('done');
      document.body.style.overflow = '';
      setTimeout(() => splash.remove(), 750);
    };

    resize();
    spawn();
    document.body.style.overflow = 'hidden';

    if (reduced) {
      finish();
      return;
    }

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.shadowBlur = 0;
      }
      stepParticles();
    };
    animate();

    // Load progress meter (eased), then reveal the app
    let progress = 0;
    const duration = 2100;
    const startT = performance.now();
    const tickProgress = (now) => {
      const p = Math.min(1, (now - startT) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      progress = Math.round(eased * 100);
      if (bar) bar.style.width = `${progress}%`;
      if (pctLabel) pctLabel.textContent = `${progress}%`;
      if (p < 1) {
        this.splashAnimId = requestAnimationFrame(tickProgress);
      } else {
        finish();
      }
    };
    this.splashAnimId = requestAnimationFrame(tickProgress);

    splash.addEventListener('click', finish);

    let resizing = false;
    window.addEventListener('resize', () => {
      if (resizing) return;
      resizing = true;
      setTimeout(() => {
        resizing = false;
        resize();
        spawn();
      }, 150);
    });
  }

  setupRevealObserver() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
      return;
    }
    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }

  // (Re)attach reveal observers to any .reveal elements not yet visible
  observeReveals() {
    if (!this.revealObserver) this.setupRevealObserver();
    document.querySelectorAll('.reveal:not(.in-view)').forEach(el => {
      if (this.revealObserver) this.revealObserver.observe(el);
      else el.classList.add('in-view');
    });
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.scicodeApp = new SciCodeNexusApp();
});
