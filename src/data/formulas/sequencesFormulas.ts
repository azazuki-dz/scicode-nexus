// @ts-nocheck

/**
 * Sequences & Series Formulas (เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก) - เธก.5
 */

export const SEQUENCES_FORMULAS = [
  {
    id: 'arithmetic_term',
    name: 'Arithmetic Sequence (nth term)',
    nameTh: 'เธฅเธณเธ”เธฑเธเน€เธฅเธเธเธ“เธดเธ• (เธเธเธเนเธ—เธตเน n)',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'list',
    grade: 'เธก.5',
    latex: 'a_n = a_1 + (n-1)d',
    description: 'เธเธเธเนเธ—เธตเน n เธเธญเธเธฅเธณเธ”เธฑเธเน€เธฅเธเธเธ“เธดเธ• เธเธณเธเธงเธ“เธเธฒเธเธเธเธเนเนเธฃเธเธเธงเธเธฃเนเธญเธขเธฅเธฐเธเธฅเธ•เนเธฒเธเธฃเนเธงเธก (d) เธ–เธถเธ n-1 เธเธฃเธฑเนเธ',
    variables: [
      { id: 'an', symbol: 'a_n', name: 'nth Term', nameTh: 'เธเธเธเนเธ—เธตเน n (aโ)', unit: '', defaultValue: 23, min: -1e15, max: 1e15, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'เธเธเธเนเนเธฃเธ (aโ)', unit: '', defaultValue: 3, min: -1e15, max: 1e15, step: 1 },
      { id: 'n', symbol: 'n', name: 'Term Number', nameTh: 'เธฅเธณเธ”เธฑเธเธ—เธตเน (n)', unit: '', defaultValue: 6, min: 1, max: 1000000, step: 1 },
      { id: 'd', symbol: 'd', name: 'Common Difference', nameTh: 'เธเธฅเธ•เนเธฒเธเธฃเนเธงเธก (d)', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 1 }
    ],
    solveTargets: ['an', 'n', 'd', 'a1'],
    calculate: (inputs, target = 'an') => {
      let { an, a1, n, d } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'an') {
        result = a1 + (n - 1) * d;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธเนเธ—เธตเน n', latex: 'a_n = a_1 + (n-1)d', explanation: `aโ = ${a1}, d = ${d}, n = ${n}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `a_n = ${a1} + (${n} - 1) \\times ${d} = ${a1} + ${(n - 1) * d}`, explanation: 'เธเธงเธเธเธฅเธ•เนเธฒเธเธฃเนเธงเธก n-1 เธเธฃเธฑเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a_n = ${result.toFixed(4)}`, explanation: `เธเธเธเนเธ—เธตเน ${n} เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (d === 0) throw new Error('เธเธฅเธ•เนเธฒเธเธฃเนเธงเธก (d) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (an - a1) / d + 1;
        if (result <= 0 || !Number.isInteger(result)) throw new Error('เธเนเธญเธกเธนเธฅเธเธตเนเนเธกเนเนเธซเนเธเนเธฒ n เธ—เธตเนเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธ');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ n', latex: 'n = \\frac{a_n - a_1}{d} + 1', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(0)}`, explanation: `เน€เธเนเธเธเธเธเนเธ—เธตเน ${result.toFixed(0)}` }
        ];
      } else if (target === 'd') {
        if (n === 1) throw new Error('เธ•เนเธญเธเธกเธตเธเธเธเนเธญเธขเนเธฒเธเธเนเธญเธข 2 เธเธเธเน (n > 1)');
        result = (an - a1) / (n - 1);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเธ•เนเธฒเธเธฃเนเธงเธก', latex: 'd = \\frac{a_n - a_1}{n-1}', explanation: 'เธเธฅเธ•เนเธฒเธเธเธญเธเธเธเธเนเธซเธฒเธฃเธเธณเธเธงเธเธเธฑเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `d = ${result.toFixed(4)}`, explanation: `เธเธฅเธ•เนเธฒเธเธฃเนเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a1') {
        result = an - (n - 1) * d;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธเธเนเนเธฃเธ', latex: 'a_1 = a_n - (n-1)d', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a_1 = ${result.toFixed(4)}`, explanation: `เธเธเธเนเนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'arithmetic_sum',
    name: 'Arithmetic Series (Sum)',
    nameTh: 'เธญเธเธธเธเธฃเธกเน€เธฅเธเธเธ“เธดเธ• (เธเธฅเธเธงเธ)',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'list',
    grade: 'เธก.5',
    latex: 'S_n = \\frac{n}{2}(a_1 + a_n)',
    description: 'เธเธฅเธเธงเธ n เธเธเธเนเนเธฃเธเธเธญเธเธฅเธณเธ”เธฑเธเน€เธฅเธเธเธ“เธดเธ• = เธเธณเธเธงเธเธเธเธเนเธเธนเธ“เธเนเธฒเน€เธเธฅเธตเนเธขเธเธญเธเธเธเธเนเนเธฃเธเนเธฅเธฐเธเธเธเนเธชเธธเธ”เธ—เนเธฒเธข',
    variables: [
      { id: 'Sn', symbol: 'S_n', name: 'Sum', nameTh: 'เธเธฅเธเธงเธ n เธเธเธเน (Sโ)', unit: '', defaultValue: 78, min: -1e15, max: 1e15, step: 1 },
      { id: 'n', symbol: 'n', name: 'Number of Terms', nameTh: 'เธเธณเธเธงเธเธเธเธเน (n)', unit: '', defaultValue: 6, min: 1, max: 1000000, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'เธเธเธเนเนเธฃเธ (aโ)', unit: '', defaultValue: 3, min: -1e15, max: 1e15, step: 1 },
      { id: 'an', symbol: 'a_n', name: 'Last Term', nameTh: 'เธเธเธเนเธชเธธเธ”เธ—เนเธฒเธข (aโ)', unit: '', defaultValue: 23, min: -1e15, max: 1e15, step: 1 }
    ],
    solveTargets: ['Sn', 'n'],
    calculate: (inputs, target = 'Sn') => {
      let { Sn, n, a1, an } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Sn') {
        result = (n / 2) * (a1 + an);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธเธงเธ', latex: 'S_n = \\frac{n}{2}(a_1 + a_n)', explanation: 'เธเธณเธเธงเธเธเธเธเนเธเธนเธ“เธเนเธฒเน€เธเธฅเธตเนเธขเธเธญเธเธเธเธเนเนเธฃเธเนเธฅเธฐเธชเธธเธ”เธ—เนเธฒเธข' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `S_n = \\frac{${n}}{2} \\times (${a1} + ${an})`, explanation: `n = ${n}, aโ = ${a1}, aโ = ${an}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `S_n = ${result.toFixed(4)}`, explanation: `เธเธฅเธเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (a1 + an === 0) throw new Error('aโ + aโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (2 * Sn) / (a1 + an);
        if (result <= 0 || !Number.isInteger(result)) throw new Error('เธเนเธญเธกเธนเธฅเธเธตเนเนเธกเนเนเธซเนเธเนเธฒ n เธ—เธตเนเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธ');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ n', latex: 'n = \\frac{2S_n}{a_1 + a_n}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(0)}`, explanation: `เธเธณเธเธงเธเธเธเธเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_term',
    name: 'Geometric Sequence (nth term)',
    nameTh: 'เธฅเธณเธ”เธฑเธเน€เธฃเธเธฒเธเธ“เธดเธ• (เธเธเธเนเธ—เธตเน n)',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'list',
    grade: 'เธก.5',
    latex: 'a_n = a_1 \\cdot r^{n-1}',
    description: 'เธเธเธเนเธ—เธตเน n เธเธญเธเธฅเธณเธ”เธฑเธเน€เธฃเธเธฒเธเธ“เธดเธ• เธเธณเธเธงเธ“เธเธฒเธเธเธเธเนเนเธฃเธเธเธนเธ“เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธก (r) เธขเธเธเธณเธฅเธฑเธ n-1',
    variables: [
      { id: 'an', symbol: 'a_n', name: 'nth Term', nameTh: 'เธเธเธเนเธ—เธตเน n (aโ)', unit: '', defaultValue: 324, min: -1e300, max: 1e300, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'เธเธเธเนเนเธฃเธ (aโ)', unit: '', defaultValue: 4, min: -1e300, max: 1e300, step: 1 },
      { id: 'r', symbol: 'r', name: 'Common Ratio', nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธก (r)', unit: '', defaultValue: 3, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Term Number', nameTh: 'เธฅเธณเธ”เธฑเธเธ—เธตเน (n)', unit: '', defaultValue: 5, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['an', 'n', 'r'],
    calculate: (inputs, target = 'an') => {
      let { an, a1, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'an') {
        result = a1 * Math.pow(r, n - 1);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธเนเธ—เธตเน n', latex: 'a_n = a_1 \\cdot r^{n-1}', explanation: `aโ = ${a1}, r = ${r}, n = ${n}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a_n = ${result.toFixed(4)}`, explanation: `เธเธเธเนเธ—เธตเน ${n} เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (a1 === 0 || Math.abs(r) <= 0) throw new Error('aโ เนเธฅเธฐ r เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        if ((an / a1) < 0) throw new Error('aโ/aโ เน€เธเนเธเธฅเธ เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒเธเนเธฒ n เธ”เนเธงเธขเธฅเธญเธเธฒเธฃเธดเธ—เธถเธก');
        result = Math.log(Math.abs(an / a1)) / Math.log(Math.abs(r)) + 1;
        const nRounded = Math.round(result);
        if (Math.abs(result - nRounded) > 1e-9) throw new Error('เธเนเธญเธกเธนเธฅเธเธตเนเนเธกเนเนเธซเนเธเนเธฒ n เธ—เธตเนเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธ');
        result = nRounded;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ n', latex: 'n = \\frac{\\log(a_n / a_1)}{\\log(r)} + 1', explanation: 'เนเธเนเธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเนเธเนเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result}`, explanation: `เน€เธเนเธเธเธเธเนเธ—เธตเน ${result}` }
        ];
      } else if (target === 'r') {
        if (a1 === 0) throw new Error('เธเธเธเนเนเธฃเธ (aโ) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const base = an / a1;
        result = (n - 1) % 2 === 1 ? -Math.pow(Math.abs(base), 1 / (n - 1)) : Math.pow(base, 1 / (n - 1));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธก', latex: 'r = \\sqrt[n-1]{\\frac{a_n}{a_1}}', explanation: 'เธ–เธญเธ”เธฃเธฒเธเธญเธฑเธเธ”เธฑเธ n-1' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_sum',
    name: 'Geometric Series (Finite Sum)',
    nameTh: 'เธญเธเธธเธเธฃเธกเน€เธฃเธเธฒเธเธ“เธดเธ• (เธเธฅเธเธงเธเธเธณเธเธฑเธ”)',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'list',
    grade: 'เธก.5',
    latex: 'S_n = \\frac{a_1(1 - r^n)}{1 - r}',
    description: 'เธเธฅเธเธงเธ n เธเธเธเนเนเธฃเธเธเธญเธเธฅเธณเธ”เธฑเธเน€เธฃเธเธฒเธเธ“เธดเธ• เน€เธกเธทเนเธญ r โ  1 เน€เธเนเธ 4 + 12 + 36 + ... 5 เธเธเธเน',
    variables: [
      { id: 'Sn', symbol: 'S_n', name: 'Sum', nameTh: 'เธเธฅเธเธงเธ n เธเธเธเน (Sโ)', unit: '', defaultValue: 484, min: -1e300, max: 1e300, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'เธเธเธเนเนเธฃเธ (aโ)', unit: '', defaultValue: 4, min: -1e300, max: 1e300, step: 1 },
      { id: 'r', symbol: 'r', name: 'Common Ratio', nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธก (r)', unit: '', defaultValue: 3, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Number of Terms', nameTh: 'เธเธณเธเธงเธเธเธเธเน (n)', unit: '', defaultValue: 5, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['Sn', 'n'],
    calculate: (inputs, target = 'Sn') => {
      let { Sn, a1, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Sn') {
        if (r === 1) throw new Error('เน€เธกเธทเนเธญ r = 1 เนเธซเนเนเธเนเธชเธนเธ•เธฃ Sn = nยทaโ เนเธ—เธ');
        result = (a1 * (1 - Math.pow(r, n))) / (1 - r);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธเธงเธเธญเธเธธเธเธฃเธกเน€เธฃเธเธฒเธเธ“เธดเธ•', latex: 'S_n = \\frac{a_1(1 - r^n)}{1 - r}', explanation: `aโ = ${a1}, r = ${r}, n = ${n}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `S_n = \\frac{${a1}(1 - ${r}^${n})}{1 - ${r}}`, explanation: `เธเธณเธเธงเธ“ ${r}^${n} = ${Math.pow(r, n).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `S_n = ${result.toFixed(4)}`, explanation: `เธเธฅเธเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (a1 === 0 || r === 1 || r === 0) throw new Error('เธ•เนเธญเธเธกเธต aโ โ  0 เนเธฅเธฐ r โ  0, 1');
        const lhs = 1 - (Sn * (1 - r)) / a1;
        if (lhs <= 0 || r < 0) throw new Error('เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธเธณเธเธงเธ“เธซเธฒ n เธเธฒเธเธเนเธญเธกเธนเธฅเธเธตเนเนเธ”เน (เธ•เธฃเธงเธเธชเธญเธเธเนเธฒเธญเธตเธเธเธฃเธฑเนเธ)');
        result = Math.log(lhs) / Math.log(r);
        if (!Number.isInteger(result)) throw new Error('เธเนเธญเธกเธนเธฅเธเธตเนเนเธกเนเนเธซเนเธเนเธฒ n เธ—เธตเนเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธ');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ n', latex: 'r^n = 1 - \\frac{S_n(1-r)}{a_1}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเนเธงเนเธเนเธฅเธญเธเธฒเธฃเธดเธ—เธถเธก' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(0)}`, explanation: `เธเธณเธเธงเธเธเธเธเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_infinite_sum',
    name: 'Geometric Series (Infinite Sum)',
    nameTh: 'เธญเธเธธเธเธฃเธกเน€เธฃเธเธฒเธเธ“เธดเธ•เธญเธเธฑเธเธ•เน (|r| < 1)',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'infinity',
    grade: 'เธก.5',
    latex: 'S_\\infty = \\frac{a_1}{1 - r}',
    description: 'เธเธฅเธเธงเธเธเธญเธเธญเธเธธเธเธฃเธกเน€เธฃเธเธฒเธเธ“เธดเธ•เธ—เธตเนเธกเธตเธเธเธเนเนเธกเนเธฃเธนเนเธเธ เน€เธกเธทเนเธญเธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธกเธญเธขเธนเนเนเธเธเนเธงเธ -1 < r < 1 เน€เธ—เนเธฒเธเธฑเนเธเธ—เธตเนเธเธฐเน€เธเนเธฒเธชเธนเนเธเนเธฒเธเธณเธเธฑเธ”',
    variables: [
      { id: 'S', symbol: 'S_\\infty', name: 'Infinite Sum', nameTh: 'เธเธฅเธเธงเธเธญเธเธฑเธเธ•เน', unit: '', defaultValue: 12, min: 0, max: 1e15, step: 0.1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'เธเธเธเนเนเธฃเธ (aโ)', unit: '', defaultValue: 4, min: -1e15, max: 1e15, step: 1 },
      { id: 'r', symbol: 'r', name: 'Common Ratio', nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธก (r)', unit: '', defaultValue: 0.6667, min: -0.9999, max: 0.9999, step: 0.01 }
    ],
    solveTargets: ['S', 'a1', 'r'],
    calculate: (inputs, target = 'S') => {
      let { S, a1, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'S') {
        if (Math.abs(r) >= 1) throw new Error('เธญเธเธธเธเธฃเธกเธฅเธนเนเธญเธญเธ: เธ•เนเธญเธเธกเธต |r| < 1');
        result = a1 / (1 - r);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธญเธเธธเธเธฃเธกเน€เธฃเธเธฒเธเธ“เธดเธ•เธญเธเธฑเธเธ•เน', latex: 'S_\\infty = \\frac{a_1}{1 - r}', explanation: `เนเธเนเนเธ”เนเน€เธกเธทเนเธญ |r| = |${r}| < 1` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `S_\\infty = ${result.toFixed(4)}`, explanation: `เธเธฅเธเธงเธเธญเธเธฑเธเธ•เนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a1') {
        result = S * (1 - r);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธเธเนเนเธฃเธ', latex: 'a_1 = S_\\infty (1 - r)', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a_1 = ${result.toFixed(4)}`, explanation: `เธเธเธเนเนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'r') {
        if (S === 0) throw new Error('เธเธฅเธเธงเธ S เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = 1 - a1 / S;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธก', latex: 'r = 1 - \\frac{a_1}{S_\\infty}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเนเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'factorial',
    name: 'Factorial (n!)',
    nameTh: 'เนเธเธเธ—เธญเน€เธฃเธตเธขเธฅ (n!)',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'hash',
    grade: 'เธก.5',
    latex: 'n! = n \\times (n-1) \\times (n-2) \\times \\ldots \\times 1',
    description: 'เนเธเธเธ—เธญเน€เธฃเธตเธขเธฅเธเธทเธญเธเธฅเธเธนเธ“เธเธญเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธเธ•เธฑเนเธเนเธ•เน 1 เธ–เธถเธ n (เธเธดเธขเธฒเธก 0! = 1) เนเธเนเนเธเน€เธฃเธทเนเธญเธเธเธฒเธฃเน€เธฃเธตเธขเธเธชเธฑเธเน€เธเธฅเธตเนเธขเธเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    variables: [
      { id: 'n', symbol: 'n', name: 'Number', nameTh: 'เธเนเธฒ n', unit: '', defaultValue: 5, min: 0, max: 170, step: 1 },
      { id: 'result', symbol: 'n!', name: 'Factorial', nameTh: 'เธเธฅเนเธเธเธ—เธญเน€เธฃเธตเธขเธฅ', unit: '', defaultValue: 120, min: 1, max: 1e308, step: 1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n } = inputs;
      if (!Number.isInteger(n) || n < 0) throw new Error('n เธ•เนเธญเธเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธเธซเธฃเธทเธญ 0');
      if (n > 170) throw new Error('n เธกเธฒเธเน€เธเธดเธเนเธ (เธชเธนเธเธชเธธเธ” 170)');
      const terms = [];
      let result = 1;
      for (let i = 2; i <= n; i++) { result *= i; terms.push(i); }
      const steps = [
        { title: 'เธเธดเธขเธฒเธกเนเธเธเธ—เธญเน€เธฃเธตเธขเธฅ', latex: n === 0 ? '0! = 1' : `${n}! = ${terms.join(' \\times ')}`, explanation: 'เธเธนเธ“เธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธเน€เธฃเธตเธขเธเธเธฒเธเธกเธฒเธเนเธเธเนเธญเธข' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `${n}! = ${result}`.length < 100 ? `${n}! = ${result}` : `${n}! \\approx ${result.toExponential(4)}`, explanation: `เนเธเธเธ—เธญเน€เธฃเธตเธขเธฅเธเธญเธ ${n} เน€เธ—เนเธฒเธเธฑเธ ${n > 100 ? result.toExponential(4) : result}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'sum_naturals',
    name: 'Sum of First n Naturals',
    nameTh: 'เธเธฅเธเธงเธเธเธณเธเธงเธเธเธฑเธ n เธ•เธฑเธงเนเธฃเธ',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'list',
    grade: 'เธก.4',
    latex: 'S = \\frac{n(n+1)}{2}',
    description: 'เธเธฅเธเธงเธ 1 + 2 + 3 + ... + n = n(n+1)/2 เน€เธเนเธ n = 5 เนเธ”เน 1+2+3+4+5 = 15',
    variables: [
      { id: 'n', symbol: 'n', name: 'Term Count', nameTh: 'เธเธณเธเธงเธเธเธเธเน (n)', unit: '', defaultValue: 5, min: 1, max: 1e9, step: 1 },
      { id: 'S', symbol: 'S', name: 'Sum', nameTh: 'เธเธฅเธเธงเธ', unit: '', defaultValue: 15, min: 1, max: 1e18, step: 1 }
    ],
    solveTargets: ['S', 'n'],
    calculate: (inputs, target = 'S') => {
      const { n, S } = inputs;
      let result, steps;
      if (target === 'S') {
        result = (n * (n + 1)) / 2;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'S = \\frac{n(n+1)}{2}', explanation: `n = ${n}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `S = \\frac{${n} \\times ${n + 1}}{2}`, explanation: 'เนเธ—เธเธเธณเธเธงเธเธเธเธเนเธฅเธเนเธเธชเธนเธ•เธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `S = ${result}`, explanation: `เธเธฅเธเธงเธ 1 เธ–เธถเธ ${n} เน€เธ—เนเธฒเธเธฑเธ ${result}` }
        ];
      } else {
        const cand = (Math.sqrt(8 * S + 1) - 1) / 2;
        const nVal = Math.round(cand);
        if (Math.abs(nVal - cand) > 1e-9 || nVal < 1) throw new Error('S เธ•เนเธญเธเน€เธเนเธเธเธฅเธเธงเธเธเธณเธเธงเธเธเธฑเธเธฅเธเธ•เธฑเธง (เน€เธเนเธ 15, 21, 28 ...)');
        result = nVal;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ n', latex: 'n = \\frac{\\sqrt{8S + 1} - 1}{2}', explanation: `S = ${S}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${nVal}`, explanation: `เธ•เนเธญเธเธกเธตเธ—เธฑเนเธเธซเธกเธ” ${nVal} เธเธเธเน เธเธถเธเธเธฐเธฃเธงเธกเนเธ”เน ${S}` }
        ];
      }
      return { result, unit: '', steps };
    }
  },

  {
    id: 'sum_squares',
    name: 'Sum of Squared Naturals',
    nameTh: 'เธเธฅเธเธงเธเธเธณเธฅเธฑเธเธชเธญเธ n เธ•เธฑเธงเนเธฃเธ',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'square',
    grade: 'เธก.5',
    latex: 'S = \\frac{n(n+1)(2n+1)}{6}',
    description: 'เธเธฅเธเธงเธ 1ยฒ + 2ยฒ + ... + nยฒ = n(n+1)(2n+1)/6 เน€เธเนเธ n = 5 เนเธ”เน 1+4+9+16+25 = 55',
    variables: [
      { id: 'n', symbol: 'n', name: 'Term Count', nameTh: 'เธเธณเธเธงเธเธเธเธเน (n)', unit: '', defaultValue: 5, min: 1, max: 1e5, step: 1 }
    ],
    solveTargets: ['S'],
    calculate: (inputs) => {
      const { n } = inputs;
      const result = (n * (n + 1) * (2 * n + 1)) / 6;
      const steps = [
        { title: 'เธชเธนเธ•เธฃ', latex: 'S = \\frac{n(n+1)(2n+1)}{6}', explanation: `n = ${n}` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `S = \\frac{${n} \\times ${n + 1} \\times ${2 * n + 1}}{6}`, explanation: 'เนเธ—เธเธเธณเธเธงเธเธเธเธเน' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `S = ${result}`, explanation: `เธเธฅเธเธงเธเธเธณเธฅเธฑเธเธชเธญเธ 1ยฒ เธ–เธถเธ ${n}ยฒ เน€เธ—เนเธฒเธเธฑเธ ${result}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_mean',
    name: 'Geometric Mean',
    nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธฃเธเธฒเธเธ“เธดเธ•',
    category: 'sequences',
    categoryTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก',
    icon: 'percent',
    grade: 'เธก.5',
    latex: 'g = \\sqrt{ab}',
    description: 'เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธฃเธเธฒเธเธ“เธดเธ•เธเธญเธเธชเธญเธเธเธณเธเธงเธ = โ(ab) เน€เธเนเธ โ(4ร—9) = 6 เนเธเนเธซเธฒเธเธเธเนเธเธฅเธฒเธเธเธญเธเธฅเธณเธ”เธฑเธเน€เธฃเธเธฒเธเธ“เธดเธ•',
    variables: [
      { id: 'a', symbol: 'a', name: 'Value a', nameTh: 'เธเธณเธเธงเธ a', unit: '', defaultValue: 4, min: 0.0001, max: 1e12, step: 1 },
      { id: 'b', symbol: 'b', name: 'Value b', nameTh: 'เธเธณเธเธงเธ b', unit: '', defaultValue: 9, min: 0.0001, max: 1e12, step: 1 },
      { id: 'g', symbol: 'g', name: 'Geometric Mean', nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธฃเธเธฒเธเธ“เธดเธ•', unit: '', defaultValue: 6, min: 0.0001, max: 1e12, step: 1 }
    ],
    solveTargets: ['g', 'a', 'b'],
    calculate: (inputs, target = 'g') => {
      const { a, b, g } = inputs;
      let result, steps;
      if (target === 'g') {
        result = Math.sqrt(a * b);
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'g = \\sqrt{ab}', explanation: `a = ${a}, b = ${b}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `g = \\sqrt{${a} \\times ${b}} = \\sqrt{${a * b}}`, explanation: 'เธเธนเธ“เนเธฅเนเธงเน€เธเธดเธ”เธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `g = ${result.toFixed(4)}`, explanation: `เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธฃเธเธฒเธเธ“เธดเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (b === 0) throw new Error('b เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (g * g) / b;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ a', latex: 'a = \\frac{g^2}{b}', explanation: `g = ${g}, b = ${b}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a = \\frac{${g}^2}{${b}} = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธ a เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else {
        if (a === 0) throw new Error('a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (g * g) / a;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ b', latex: 'b = \\frac{g^2}{a}', explanation: `g = ${g}, a = ${a}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `b = \\frac{${g}^2}{${a}} = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธ b เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: '', steps };
    }
  }
];