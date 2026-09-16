// @ts-nocheck

/**
 * Algebra Formulas (เธเธตเธเธเธ“เธดเธ•) - เธก.1 - เธก.6
 * เธญเธฑเธ•เธฃเธฒเธชเนเธงเธ เธฃเนเธญเธขเธฅเธฐ เธชเธฑเธ”เธชเนเธงเธ เธชเธกเธเธฒเธฃเน€เธเธดเธเน€เธชเนเธ เธฅเธญเธเธฒเธฃเธดเธ—เธถเธก
 */

export const ALGEBRA_FORMULAS = [
  {
    id: 'percent_of',
    name: 'Percent of a Number',
    nameTh: 'เธซเธฒเน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธญเธเธเธณเธเธงเธ',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'percent',
    grade: 'เธก.1-2',
    latex: '\\text{เธเธฅเธฅเธฑเธเธเน} = \\frac{\\text{เธเธณเธเธงเธ} \\times p}{100}',
    description: 'เธซเธฒเธฃเนเธญเธขเธฅเธฐ p เธเธญเธเธเธณเธเธงเธเธ—เธตเนเธเธณเธซเธเธ” เน€เธเนเธ 20% เธเธญเธ 500 = 100 (เนเธเนเนเธเน€เธฃเธทเนเธญเธ เธฃเนเธญเธขเธฅเธฐ เธเธณเนเธฃ เธเธฒเธ”เธ—เธธเธ เธ เธฒเธฉเธต)',
    variables: [
      { id: 'result', symbol: 'R', name: 'Result', nameTh: 'เธเธฅเธฅเธฑเธเธเน (เธเนเธฒ p%)', unit: '', defaultValue: 100, min: -1e15, max: 1e15, step: 1 },
      { id: 'value', symbol: 'A', name: 'Base Value', nameTh: 'เธเธณเธเธงเธเธ—เธฑเนเธเธซเธกเธ”', unit: '', defaultValue: 500, min: -1e15, max: 1e15, step: 1 },
      { id: 'p', symbol: 'p\\%', name: 'Percent', nameTh: 'เธฃเนเธญเธขเธฅเธฐ (p)', unit: '%', defaultValue: 20, min: -1e6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['result', 'p', 'value'],
    calculate: (inputs, target = 'result') => {
      let { result, value, p } = inputs;
      let steps = [];
      let unit = '';

      if (target === 'result') {
        result = (value * p) / 100;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธฃเนเธญเธขเธฅเธฐ', latex: 'R = \\frac{A \\cdot p}{100}', explanation: 'เธเธณเธเธงเธเธเธนเธ“เธ”เนเธงเธขเธฃเนเธญเธขเธฅเธฐ เธซเธฒเธฃ 100' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `R = \\frac{${value} \\times ${p}}{100}`, explanation: `A = ${value}, p = ${p}%` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R = ${result.toFixed(4)}`, explanation: `${p}% เธเธญเธ ${value} เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'p') {
        if (value === 0) throw new Error('เธเธณเธเธงเธเธ—เธฑเนเธเธซเธกเธ” (A) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        p = (result * 100) / value;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒเธฃเนเธญเธขเธฅเธฐ', latex: 'p = \\frac{R \\cdot 100}{A}', explanation: 'เธเธฅเธฑเธเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `p = ${p.toFixed(4)}\\%`, explanation: `เธเธดเธ”เน€เธเนเธ ${p.toFixed(4)} เน€เธเธญเธฃเนเน€เธเนเธเธ•เน` }
        ];
      } else if (target === 'value') {
        if (p === 0) throw new Error('เธฃเนเธญเธขเธฅเธฐ (p) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        value = (result * 100) / p;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธ—เธฑเนเธเธซเธกเธ”', latex: 'A = \\frac{R \\cdot 100}{p}', explanation: 'เธเธฅเธฑเธเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${value.toFixed(4)}`, explanation: `เธเธณเธเธงเธเธ—เธฑเนเธเธซเธกเธ”เน€เธ—เนเธฒเธเธฑเธ ${value.toFixed(4)}` }
        ];
      }

      return { result, unit, steps };
    }
  },

  {
    id: 'percent_change',
    name: 'Percent Change',
    nameTh: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'trending-up',
    grade: 'เธก.2-3',
    latex: '\\frac{New - Old}{Old} \\times 100\\%',
    description: 'เธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเธเธดเธ”เน€เธเนเธเธฃเนเธญเธขเธฅเธฐ เน€เธเนเธ เธฃเธฒเธเธฒเธเธฒเธ 80 เน€เธเธดเนเธกเน€เธเนเธ 100 เน€เธเธดเนเธกเธเธถเนเธ 25% เนเธเนเนเธเธเธฒเธฃเธงเธดเน€เธเธฃเธฒเธฐเธซเนเธเธณเนเธฃ-เธเธฒเธ”เธ—เธธเธ เธเธฒเธฃเน€เธ•เธดเธเนเธ•',
    variables: [
      { id: 'pct', symbol: '\\Delta\\%', name: 'Percent Change', nameTh: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ', unit: '%', defaultValue: 25, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'newVal', symbol: 'N', name: 'New Value', nameTh: 'เธเนเธฒเนเธซเธกเน', unit: '', defaultValue: 100, min: -1e15, max: 1e15, step: 1 },
      { id: 'oldVal', symbol: 'O', name: 'Old Value', nameTh: 'เธเนเธฒเน€เธ”เธดเธก', unit: '', defaultValue: 80, min: -1e15, max: 1e15, step: 1 }
    ],
    solveTargets: ['pct', 'newVal', 'oldVal'],
    calculate: (inputs, target = 'pct') => {
      let { pct, newVal, oldVal } = inputs;
      let steps = [];

      if (target === 'pct') {
        if (oldVal === 0) throw new Error('เธเนเธฒเน€เธ”เธดเธก (O) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        pct = ((newVal - oldVal) / oldVal) * 100;
        steps = [
          { title: 'เธชเธนเธ•เธฃเน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ', latex: '\\Delta\\% = \\frac{N - O}{O} \\times 100', explanation: 'เธเธฅเธ•เนเธฒเธเธซเธฒเธฃเธ”เนเธงเธขเธเนเธฒเน€เธ”เธดเธก เธเธนเธ“ 100' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\Delta\\% = \\frac{${newVal} - ${oldVal}}{${oldVal}} \\times 100`, explanation: 'เธเธณเธเธงเธ“เธเธฅเธ•เนเธฒเธเธเนเธญเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta\\% = ${pct.toFixed(4)}\\%`, explanation: pct >= 0 ? `เน€เธเธดเนเธกเธเธถเนเธ ${pct.toFixed(2)}%` : `เธฅเธ”เธฅเธ ${Math.abs(pct).toFixed(2)}%` }
        ];
      } else if (target === 'newVal') {
        newVal = oldVal * (1 + pct / 100);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒเนเธซเธกเน', latex: 'N = O \\left(1 + \\frac{p}{100}\\right)', explanation: 'เธเนเธฒเน€เธ”เธดเธกเธเธนเธ“เธ”เนเธงเธขเธ•เธฑเธงเธเธฃเธฐเธเธญเธเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${newVal.toFixed(4)}`, explanation: `เธเนเธฒเนเธซเธกเนเน€เธ—เนเธฒเธเธฑเธ ${newVal.toFixed(4)}` }
        ];
      } else if (target === 'oldVal') {
        if (pct === -100) throw new Error('เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ -100%');
        oldVal = newVal / (1 + pct / 100);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒเน€เธ”เธดเธก', latex: 'O = \\frac{N}{1 + \\frac{p}{100}}', explanation: 'เธเธฅเธฑเธเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `O = ${oldVal.toFixed(4)}`, explanation: `เธเนเธฒเน€เธ”เธดเธกเน€เธ—เนเธฒเธเธฑเธ ${oldVal.toFixed(4)}` }
        ];
      }

      return { result: target === 'pct' ? pct : target === 'newVal' ? newVal : oldVal, unit: target === 'pct' ? '%' : '', steps };
    }
  },

  {
    id: 'proportion',
    name: 'Proportion (Cross Multiplication)',
    nameTh: 'เธชเธฑเธ”เธชเนเธงเธ (เนเธเธงเนเธเธนเธ“)',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'divide',
    grade: 'เธก.1-2',
    latex: '\\frac{a}{b} = \\frac{c}{d} \\quad \\Rightarrow \\quad a \\cdot d = b \\cdot c',
    description: 'เน€เธกเธทเนเธญเธญเธฑเธ•เธฃเธฒเธชเนเธงเธเน€เธ—เนเธฒเธเธฑเธ เธเธฅเธเธนเธ“เนเธเธงเนเน€เธ—เนเธฒเธเธฑเธ เนเธเนเนเธเนเธชเธฑเธ”เธชเนเธงเธ เน€เธเนเธ เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธเธฒเธฃเธเธชเธก เธเธฒเธฃเธขเนเธญ-เธเธขเธฒเธข',
    variables: [
      { id: 'a', symbol: 'a', name: 'Numerator 1', nameTh: 'เธ•เธฑเธงเน€เธจเธฉ 1 (a)', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Denominator 1', nameTh: 'เธ•เธฑเธงเธชเนเธงเธ 1 (b)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Numerator 2', nameTh: 'เธ•เธฑเธงเน€เธจเธฉ 2 (c)', unit: '', defaultValue: 8, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'd', symbol: 'd', name: 'Denominator 2', nameTh: 'เธ•เธฑเธงเธชเนเธงเธ 2 (d)', unit: '', defaultValue: 12, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['a', 'b', 'c', 'd'],
    calculate: (inputs, target = 'a') => {
      let { a, b, c, d } = inputs;
      let steps = [];
      const cross = [
        { t: 'a', expr: (b * c) / d, need: ['b', 'c', 'd'], guard: () => d === 0 ? 'เธ•เธฑเธงเธชเนเธงเธ d เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0' : null },
        { t: 'b', expr: (a * d) / c, need: ['a', 'c', 'd'], guard: () => c === 0 ? 'เธ•เธฑเธงเธชเนเธงเธ c เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0' : null },
        { t: 'c', expr: (a * d) / b, need: ['a', 'b', 'd'], guard: () => b === 0 ? 'เธ•เธฑเธงเธชเนเธงเธ b เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0' : null },
        { t: 'd', expr: (b * c) / a, need: ['a', 'b', 'c'], guard: () => a === 0 ? 'เธ•เธฑเธงเน€เธจเธฉ a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0' : null }
      ];
      const row = cross.find(r => r.t === target);
      if (!row) throw new Error('เธ•เธฑเธงเนเธเธฃเน€เธเนเธฒเธซเธกเธฒเธขเนเธกเนเธ–เธนเธเธ•เนเธญเธ');
      const err = row.guard();
      if (err) throw new Error(err);
      const result = row.expr;
      steps = [
        { title: 'เธซเธฅเธฑเธเธเธฒเธฃเนเธเธงเนเธเธนเธ“', latex: 'a \\cdot d = b \\cdot c', explanation: 'เธเธฅเธเธนเธ“เนเธเธงเนเธเธญเธเธชเธฑเธ”เธชเนเธงเธเน€เธ—เนเธฒเธเธฑเธเน€เธชเธกเธญ' },
        { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒ ' + target, latex: `${target} = ${cross.filter(r => r.t !== target).map(r => r.t).join(' , ')}`, explanation: 'เธขเนเธฒเธขเธ•เธฑเธงเธเธฃเธฐเธเธญเธเธ—เธตเนเน€เธซเธฅเธทเธญเนเธเธญเธตเธเธเนเธฒเธเธซเธเธถเนเธ' },
        { title: 'เนเธ—เธเธเนเธฒเนเธฅเธฐเธเธณเธเธงเธ“', latex: `${target} = ${result.toFixed(4)}`, explanation: `เธเนเธฒเธเธญเธ ${target} เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'linear_equation',
    name: 'Linear Equation (ax + b = c)',
    nameTh: 'เธชเธกเธเธฒเธฃเน€เธเธดเธเน€เธชเนเธเธ•เธฑเธงเนเธเธฃเน€เธ”เธตเธขเธง',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'minus',
    grade: 'เธก.1-2',
    latex: 'a x + b = c \\quad \\Rightarrow \\quad x = \\frac{c - b}{a}',
    description: 'เธเธฒเธฃเนเธเนเธชเธกเธเธฒเธฃเน€เธเธดเธเน€เธชเนเธเธ•เธฑเธงเนเธเธฃเน€เธ”เธตเธขเธง เนเธเนเธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃเน€เธเธทเนเธญเธซเธฒเธเนเธฒ x เน€เธเนเธ 2x + 3 = 15 เนเธฅเนเธง x = 6',
    variables: [
      { id: 'x', symbol: 'x', name: 'Solution x', nameTh: 'เธเธณเธ•เธญเธ (x)', unit: '', defaultValue: 6, min: -1e9, max: 1e9, step: 0.01 },
      { id: 'a', symbol: 'a', name: 'Coefficient a', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน (a)', unit: '', defaultValue: 2, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Constant b', nameTh: 'เธเนเธฒเธเธเธ—เธตเน (b)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Right Side c', nameTh: 'เธเธฑเนเธเธเธงเธฒ (c)', unit: '', defaultValue: 15, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['x', 'a', 'b'],
    calculate: (inputs, target = 'x') => {
      let { x, a, b, c } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'x') {
        if (a === 0) throw new Error('เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน (a) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (c - b) / a;
        steps = [
          { title: 'เธขเนเธฒเธข b เนเธเธเธฑเนเธเธเธงเธฒ', latex: `a x = ${c} - (${b}) = ${(c - b).toFixed(4)}`, explanation: 'เธเนเธฒเธเธเธ—เธตเนเธขเนเธฒเธขเธเนเธฒเธเน€เธเธฅเธตเนเธขเธเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธข' },
          { title: 'เธซเธฒเธฃเธ”เนเธงเธข a', latex: `x = \\frac{${(c - b).toFixed(4)}}{${a}}`, explanation: 'เธเธณเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน a เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `x = ${result.toFixed(4)}`, explanation: `เธเธณเธ•เธญเธเธเธญเธเธชเธกเธเธฒเธฃเธเธทเธญ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (x === 0) throw new Error('เธเนเธฒ x เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (c - b) / x;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒ a', latex: 'a = \\frac{c - b}{x}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a = ${result.toFixed(4)}`, explanation: `เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน a เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'b') {
        result = c - a * x;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒ b', latex: 'b = c - a \\cdot x', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `b = ${result.toFixed(4)}`, explanation: `เธเนเธฒเธเธเธ—เธตเน b เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'logarithm',
    name: 'Logarithm (log_b x = y)',
    nameTh: 'เธฅเธญเธเธฒเธฃเธดเธ—เธถเธก (log_b x = y)',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'log-in',
    grade: 'เธก.4-5',
    latex: '\\log_b(x) = y \\quad \\Leftrightarrow \\quad b^y = x',
    description: 'เธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเธเธทเธญเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ เน€เธเนเธ logโ8 = 3 เน€เธเธฃเธฒเธฐ 2ยณ = 8 เน€เธเธตเธขเธ log เธเธฒเธ 10 = log(x) เนเธฅเธฐเธเธฒเธ e = ln(x)',
    variables: [
      { id: 'y', symbol: 'y', name: 'Logarithm Value', nameTh: 'เธเนเธฒเธฅเธญเธเธฒเธฃเธดเธ—เธถเธก (y)', unit: '', defaultValue: 3, min: -1e6, max: 1e6, step: 0.01 },
      { id: 'b', symbol: 'b', name: 'Base', nameTh: 'เธเธฒเธ (b)', unit: '', defaultValue: 2, min: 0.0000001, max: 1e6, step: 0.1 },
      { id: 'x', symbol: 'x', name: 'Argument', nameTh: 'เธเธณเธเธงเธ (x)', unit: '', defaultValue: 8, min: 1e-15, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['y', 'x', 'b'],
    calculate: (inputs, target = 'y') => {
      let { y, b, x } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'y') {
        if (x <= 0 || b <= 0 || b === 1) throw new Error('เธ•เนเธญเธเธกเธต x > 0, b > 0 เนเธฅเธฐ b โ  1');
        result = Math.log(x) / Math.log(b);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธฅเธญเธเธฒเธฃเธดเธ—เธถเธก', latex: 'y = \\log_b(x)', explanation: `log เธเธฒเธ ${b} เธเธญเธ ${x}` },
          { title: 'เนเธ—เธเธเนเธฒเนเธฅเธฐเธเธณเธเธงเธ“', latex: `y = \\frac{\\ln(${x})}{\\ln(${b})} = ${result.toFixed(4)}`, explanation: 'เนเธเนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธเธฒเธเธฅเธญเธเธฒเธฃเธดเธ—เธถเธก (เธซเธฃเธทเธญเธเธณเธฅเธญเธเน€เธเนเธ log เธเธฒเธเธชเธดเธ/เธเธฒเธเธเธฃเธฃเธกเธเธฒเธ•เธด)' }
        ];
      } else if (target === 'x') {
        result = Math.pow(b, y);
        steps = [
          { title: 'เนเธเธฅเธเน€เธเนเธเน€เธฅเธเธขเธเธเธณเธฅเธฑเธ', latex: `x = b^y = ${b}^{${y}}`, explanation: 'เธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเธเธทเธญเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `x = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธ x เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'b') {
        if (y === 0) throw new Error('เธเนเธฒ y เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.pow(x, 1 / y);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฒเธ', latex: `b = x^{1/y}`, explanation: 'เธ–เธญเธ”เธฃเธฒเธเธญเธฑเธเธ”เธฑเธ y' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `b = ${result.toFixed(4)}`, explanation: `เธเธฒเธ b เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'quadratic_formula',
    name: 'Quadratic Formula',
    nameTh: 'เธชเธนเธ•เธฃเธชเธกเธเธฒเธฃเธเธณเธฅเธฑเธเธชเธญเธ',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'function',
    grade: 'เธก.4',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description: 'เธซเธฒเธฃเธฒเธเธเธญเธเธชเธกเธเธฒเธฃ axยฒ + bx + c = 0 เธเธฃเนเธญเธกเธเนเธฒ discriminant bยฒ โ’ 4ac เธเธญเธเธเธณเธเธงเธเธฃเธฒเธเนเธ—เนเธเธฃเธดเธ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient a', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน a', unit: '', defaultValue: 2, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Coefficient b', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน b', unit: '', defaultValue: 5, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Constant c', nameTh: 'เธเนเธฒเธเธเธ—เธตเน c', unit: '', defaultValue: -3, min: -1e6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['x', 'D'],
    calculate: (inputs, target = 'x') => {
      const { a, b, c } = inputs;
      if (a === 0) throw new Error('a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 (เนเธกเนเนเธเนเธชเธกเธเธฒเธฃเธเธณเธฅเธฑเธเธชเธญเธ)');
      const Dv = b * b - 4 * a * c;

      if (target === 'D') {
        return {
          result: Dv,
          unit: '',
          steps: [
            { title: 'เธเธณเธเธงเธ“ discriminant', latex: `\\Delta = b^2 - 4ac = ${b}^2 - 4 \\times ${a} \\times ${c}`, explanation: `เนเธ—เธเธเนเธฒ a = ${a}, b = ${b}, c = ${c}` },
            { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta = ${Dv}`, explanation: Dv > 0 ? 'เธฃเธฒเธเนเธ—เนเธเธฃเธดเธ 2 เธเนเธฒเธ•เนเธฒเธเธเธฑเธ' : Dv === 0 ? 'เธฃเธฒเธเธเธฃเธดเธเธเนเธณ 1 เธเนเธฒ' : 'เนเธกเนเธกเธตเธฃเธฒเธเนเธ—เนเธเธฃเธดเธ' }
          ]
        };
      }

      if (Dv < 0) throw new Error('discriminant เธ•เธดเธ”เธฅเธ โ’ เธชเธกเธเธฒเธฃเธเธตเนเนเธกเนเธกเธตเธฃเธฒเธเนเธ—เนเธเธฃเธดเธ');
      const sq = Math.sqrt(Dv);
      const r1 = (-b + sq) / (2 * a);
      const r2 = (-b - sq) / (2 * a);
      return {
        result: r1,
        unit: '',
        steps: [
          { title: 'เธชเธนเธ•เธฃเธฃเธฒเธ', latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', explanation: `a = ${a}, b = ${b}, c = ${c}` },
          { title: 'เธเธณเธเธงเธ“ discriminant', latex: `\\Delta = b^2 - 4ac = ${b}^2 - 4 \\times ${a} \\times ${c} = ${Dv}`, explanation: Dv > 0 ? 'เธฃเธฒเธเนเธ—เนเธเธฃเธดเธ 2 เธเนเธฒ' : 'เธฃเธฒเธเธเนเธณ 1 เธเนเธฒ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `x = \\frac{-(${b}) \\pm \\sqrt{${Dv}}}{2 \\times ${a}}`, explanation: 'เนเธ—เธเธเนเธฒเธฅเธเนเธเธชเธนเธ•เธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `x = ${r1.toFixed(4)} \\ \\text{เธซเธฃเธทเธญ} \\ x = ${r2.toFixed(4)}`, explanation: `เธฃเธฒเธเธ—เธฑเนเธเธชเธญเธเธเธทเธญ ${r1.toFixed(4)} เนเธฅเธฐ ${r2.toFixed(4)}` }
        ]
      };
    }
  },

  {
    id: 'exponent_value',
    name: 'Exponent Value',
    nameTh: 'เธซเธฒเธเนเธฒเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'power',
    grade: 'เธก.3',
    latex: 'b^n = v',
    description: 'เธซเธฒเธเนเธฒ n เธ—เธตเนเธ—เธณเนเธซเน bโฟ = v เน€เธเนเธ 3โฟ = 27 เนเธ”เน n = 3 (เธชเธณเธซเธฃเธฑเธเธเนเธฒเธฅเธเธ•เธฑเธงเธเธญเธ”เธตเน€เธ—เนเธฒเธเธฑเนเธ)',
    variables: [
      { id: 'b', symbol: 'b', name: 'Base', nameTh: 'เธเธฒเธ', unit: '', defaultValue: 3, min: 1.0000001, max: 1e6, step: 0.1 },
      { id: 'v', symbol: 'v', name: 'Value', nameTh: 'เธเนเธฒ v', unit: '', defaultValue: 27, min: 1e-12, max: 1e24, step: 1 }
    ],
    solveTargets: ['n'],
    calculate: (inputs) => {
      const { b, v } = inputs;
      if (b <= 0) throw new Error('เธเธฒเธ b เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
      if (v <= 0) throw new Error('เธเนเธฒ v เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
      const exact = Math.log(v) / Math.log(b);
      const n = Math.round(exact);
      if (Math.abs(n - exact) > 1e-9) throw new Error('เธเนเธฒ v เนเธกเนเนเธเนเน€เธฅเธเธขเธเธเธณเธฅเธฑเธเธเธญเธ”เธตเธเธญเธเธเธฒเธเธเธตเน (เธเธฅเธฅเธฑเธเธเนเนเธกเนเธฅเธเธ•เธฑเธง)');
      const result = n;
      return {
        result,
        unit: '',
        steps: [
          { title: 'เธชเธกเธเธฒเธฃ', latex: `${b}^{n} = ${v}`, explanation: 'เธ•เนเธญเธเธเธฒเธฃเธซเธฒเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ n' },
          { title: 'เนเธเน log เนเธเนเธชเธกเธเธฒเธฃ', latex: `n = \\frac{\\log ${v}}{\\log ${b}} = ${exact.toFixed(6)}`, explanation: 'เน€เธเธฅเธตเนเธขเธเน€เธเนเธ log เน€เธเธทเนเธญเนเธขเธ n เธญเธญเธเธกเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `${b}^{${n}} = ${Math.pow(b, n).toFixed(4)}`, explanation: `เน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ n เน€เธ—เนเธฒเธเธฑเธ ${n}` }
        ]
      };
    }
  }
];