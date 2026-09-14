/**
 * SciCode Nexus - Formula Solver Engine
 * Manages formula state, input updates, recalculation, and KaTeX rendering.
 */

import { FORMULAS_DATA } from '../data/formulas.js';

export class FormulaSolver {
  constructor() {
    this.currentFormula = FORMULAS_DATA[0];
    this.currentTarget = this.currentFormula.solveTargets[0];
    this.inputs = {};
    this.initializeInputs();
  }

  setFormula(formulaId) {
    const found = FORMULAS_DATA.find(f => f.id === formulaId);
    if (found) {
      this.currentFormula = found;
      this.currentTarget = found.solveTargets[0];
      this.initializeInputs();
    }
  }

  setTarget(targetVarId) {
    if (this.currentFormula.solveTargets.includes(targetVarId)) {
      this.currentTarget = targetVarId;
    }
  }

  initializeInputs() {
    this.inputs = {};
    this.currentFormula.variables.forEach(v => {
      this.inputs[v.id] = v.defaultValue;
    });
  }

  updateInput(varId, value) {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      this.inputs[varId] = num;
    }
  }

  solve() {
    try {
      const solution = this.currentFormula.calculate(this.inputs, this.currentTarget);
      return {
        success: true,
        data: solution
      };
    } catch (err) {
      return {
        success: false,
        error: err.message
      };
    }
  }

  renderKaTeX(element, latexString, displayMode = false) {
    if (window.katex && element) {
      try {
        window.katex.render(latexString, element, {
          displayMode: displayMode,
          throwOnError: false
        });
      } catch (e) {
        element.textContent = latexString;
      }
    } else if (element) {
      element.textContent = latexString;
    }
  }
}
