// @ts-nocheck

/**
 * Statistics & Probability Formulas (เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ) - เธก.3 - เธก.6
 */

export const STATISTICS_FORMULAS = [
  {
    id: 'mean',
    name: 'Mean (Average)',
    nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธฅเธเธเธ“เธดเธ•',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'hash',
    grade: 'เธก.3-5',
    latex: '\\bar{x} = \\frac{\\sum x_i}{n}',
    description: 'เธเนเธฒเน€เธเธฅเธตเนเธข = เธเธฅเธฃเธงเธกเธเธญเธเธเนเธญเธกเธนเธฅเธซเธฒเธฃเธ”เนเธงเธขเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ เนเธเนเธเธฑเธเธเนเธญเธกเธนเธฅเธ—เธฑเนเธเธซเธกเธ”เนเธเธเน€เธเธดเธเธเธฃเธดเธกเธฒเธ“',
    variables: [
      { id: 'mean', symbol: '\\bar{x}', name: 'Mean', nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธข', unit: '', defaultValue: 12, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'sum', symbol: '\\sum x_i', name: 'Sum of Data', nameTh: 'เธเธฅเธฃเธงเธกเธเนเธญเธกเธนเธฅ', unit: '', defaultValue: 120, min: -1e18, max: 1e18, step: 1 },
      { id: 'n', symbol: 'n', name: 'Count', nameTh: 'เธเธณเธเธงเธเธเนเธญเธกเธนเธฅ', unit: 'เธเธดเนเธ', defaultValue: 10, min: 1, max: 10000000, step: 1 }
    ],
    solveTargets: ['mean', 'sum', 'n'],
    calculate: (inputs, target = 'mean') => {
      let { mean, sum, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'mean') {
        result = sum / n;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเนเธฒเน€เธเธฅเธตเนเธข', latex: '\\bar{x} = \\frac{\\sum x_i}{n}', explanation: 'เธเธฅเธฃเธงเธกเธซเธฒเธฃเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\bar{x} = \\frac{${sum}}{${n}}`, explanation: `เธเธฅเธฃเธงเธก = ${sum}, เธเธณเธเธงเธ = ${n}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\bar{x} = ${result.toFixed(4)}`, explanation: `เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'sum') {
        result = mean * n;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเธฃเธงเธก', latex: '\\sum x_i = \\bar{x} \\cdot n', explanation: 'เธเนเธฒเน€เธเธฅเธตเนเธขเธเธนเธ“เธเธณเธเธงเธเธเนเธญเธกเธนเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sum x_i = ${result.toFixed(4)}`, explanation: `เธเธฅเธฃเธงเธกเธเนเธญเธกเธนเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (mean === 0) throw new Error('เธเนเธฒเน€เธเธฅเธตเนเธข (mean) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = sum / mean;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ', latex: 'n = \\frac{\\sum x_i}{\\bar{x}}', explanation: 'เธเธฅเธฃเธงเธกเธซเธฒเธฃเธเนเธฒเน€เธเธฅเธตเนเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธเธเนเธญเธกเธนเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'standard_deviation',
    name: 'Standard Deviation',
    nameTh: 'เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธ',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'activity',
    grade: 'เธก.4-6',
    latex: '\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}',
    description: 'เธงเธฑเธ”เธเธฒเธฃเธเธฃเธฐเธเธฒเธขเธเธญเธเธเนเธญเธกเธนเธฅเธฃเธญเธเธเนเธฒเน€เธเธฅเธตเนเธข เธซเธฒเธฃเธฒเธเธ—เธตเนเธชเธญเธเธเธญเธเธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธ เธ–เนเธฒเธเนเธญเธกเธนเธฅเธเธฃเธฐเธเธฒเธขเธกเธฒเธ ฯ เธเธฐเธกเธฒเธ',
    variables: [
      { id: 'sd', symbol: '\\sigma', name: 'Standard Deviation', nameTh: 'เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธ', unit: '', defaultValue: 2.915, min: 0, max: 1e15, step: 0.01 },
      { id: 'sumSqDev', symbol: '\\sum (x_i-\\bar{x})^2', name: 'Sum of Squared Deviations', nameTh: 'เธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธเธเธงเธฒเธกเน€เธเธตเนเธขเธเน€เธเธ', unit: '', defaultValue: 85, min: 0, max: 1e18, step: 1 },
      { id: 'n', symbol: 'n', name: 'Count', nameTh: 'เธเธณเธเธงเธเธเนเธญเธกเธนเธฅ', unit: 'เธเธดเนเธ', defaultValue: 10, min: 1, max: 10000000, step: 1 }
    ],
    solveTargets: ['sd', 'sumSqDev', 'n'],
    calculate: (inputs, target = 'sd') => {
      let { sd, sumSqDev, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'sd') {
        if (n === 0) throw new Error('เธเธณเธเธงเธเธเนเธญเธกเธนเธฅเธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = Math.sqrt(sumSqDev / n);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธ', latex: '\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}', explanation: 'เธฃเธฒเธเธ—เธตเนเธชเธญเธเธเธญเธเธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\sigma = \\sqrt{\\frac{${sumSqDev}}{${n}}}`, explanation: `เธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธเธเธงเธฒเธกเน€เธเธตเนเธขเธเน€เธเธ = ${sumSqDev}, n = ${n}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sigma = ${result.toFixed(4)}`, explanation: `เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'sumSqDev') {
        result = sd * sd * n;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธ', latex: '\\sum (x_i - \\bar{x})^2 = \\sigma^2 \\cdot n', explanation: 'ฯยฒ (เธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธ) เธเธนเธ“เธเธณเธเธงเธเธเนเธญเธกเธนเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sum (x_i - \\bar{x})^2 = ${result.toFixed(4)}`, explanation: `เธเธฅเธฃเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (sd === 0) throw new Error('เธเนเธฒ ฯ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = sumSqDev / (sd * sd);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ', latex: 'n = \\frac{\\sum (x_i - \\bar{x})^2}{\\sigma^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธเธเนเธญเธกเธนเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'z_score',
    name: 'Z-Score (Standard Score)',
    nameTh: 'เธเธฐเนเธเธเธกเธฒเธ•เธฃเธเธฒเธ Z (Z-Score)',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'target',
    grade: 'เธก.5-6',
    latex: 'z = \\frac{x - \\bar{x}}{\\sigma}',
    description: 'เธเธญเธเธงเนเธฒเธเนเธญเธกเธนเธฅเธญเธขเธนเนเธซเนเธฒเธเธเธฒเธเธเนเธฒเน€เธเธฅเธตเนเธขเธเธตเนเน€เธ—เนเธฒเธเธญเธเธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธ เน€เธเนเธเธฅเธเน€เธกเธทเนเธญเธ•เนเธณเธเธงเนเธฒเธเนเธฒเน€เธเธฅเธตเนเธข',
    variables: [
      { id: 'z', symbol: 'z', name: 'Z-Score', nameTh: 'เธเนเธฒ Z', unit: '', defaultValue: 1.372, min: -10, max: 10, step: 0.01 },
      { id: 'x', symbol: 'x', name: 'Raw Score', nameTh: 'เธเธฐเนเธเธเธ”เธดเธ (x)', unit: '', defaultValue: 85, min: -1e15, max: 1e15, step: 1 },
      { id: 'mu', symbol: '\\bar{x}', name: 'Mean', nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธข', unit: '', defaultValue: 70, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'sigma', symbol: '\\sigma', name: 'Std Deviation', nameTh: 'เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธ', unit: '', defaultValue: 5, min: 0.0001, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['z', 'x', 'sigma'],
    calculate: (inputs, target = 'z') => {
      let { z, x, mu, sigma } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'z') {
        result = (x - mu) / sigma;
        steps = [
          { title: 'เธชเธนเธ•เธฃ Z-Score', latex: 'z = \\frac{x - \\bar{x}}{\\sigma}', explanation: 'เธเธฅเธ•เนเธฒเธเธเธฐเนเธเธเธเธฒเธเธเนเธฒเน€เธเธฅเธตเนเธขเธซเธฒเธฃ ฯ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `z = \\frac{${x} - ${mu}}{${sigma}}`, explanation: `x = ${x}, เธเนเธฒเน€เธเธฅเธตเนเธข = ${mu}, ฯ = ${sigma}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `z = ${result.toFixed(4)}`, explanation: result >= 0 ? `เธชเธนเธเธเธงเนเธฒเธเนเธฒเน€เธเธฅเธตเนเธข ${result.toFixed(2)} เน€เธ—เนเธฒเธเธญเธ ฯ` : `เธ•เนเธณเธเธงเนเธฒเธเนเธฒเน€เธเธฅเธตเนเธข ${Math.abs(result).toFixed(2)} เน€เธ—เนเธฒเธเธญเธ ฯ` }
        ];
      } else if (target === 'x') {
        result = mu + z * sigma;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฐเนเธเธเธ”เธดเธ', latex: 'x = \\bar{x} + z \\cdot \\sigma', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `x = ${result.toFixed(4)}`, explanation: `เธเธฐเนเธเธเธ”เธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'sigma') {
        if (z === 0) throw new Error('เธเนเธฒ z เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (x - mu) / z;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธ', latex: '\\sigma = \\frac{x - \\bar{x}}{z}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sigma = ${result.toFixed(4)}`, explanation: `เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'permutation',
    name: 'Permutation (nPr)',
    nameTh: 'เธเธฒเธฃเน€เธฃเธตเธขเธเธชเธฑเธเน€เธเธฅเธตเนเธขเธ (nPr)',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'list-ordered',
    grade: 'เธก.5',
    latex: '{}_n P_r = \\frac{n!}{(n-r)!}',
    description: 'เธเธณเธเธงเธเธงเธดเธเธตเน€เธฃเธตเธขเธเธชเธดเนเธเธเธญเธ r เธชเธดเนเธเธเธฒเธเธ—เธฑเนเธเธซเธกเธ” n เธชเธดเนเธ เนเธ”เธขเธเธณเธเธถเธเธ–เธถเธเธฅเธณเธ”เธฑเธ เน€เธเนเธ nPr เนเธเนเนเธเน€เธฃเธทเนเธญเธเธเธณเธเธงเธเธงเธดเธเธตเธเธฑเธ”เน€เธฃเธตเธขเธ',
    variables: [
      { id: 'n', symbol: 'n', name: 'Total Items', nameTh: 'เธเธญเธเธ—เธฑเนเธเธซเธกเธ” (n)', unit: 'เธเธดเนเธ', defaultValue: 10, min: 1, max: 170, step: 1 },
      { id: 'r', symbol: 'r', name: 'Arranged Items', nameTh: 'เน€เธฅเธทเธญเธเธกเธฒเน€เธฃเธตเธขเธ (r)', unit: 'เธเธดเนเธ', defaultValue: 3, min: 0, max: 170, step: 1 },
      { id: 'result', symbol: '{}_n P_r', name: 'Permutations', nameTh: 'เธเธณเธเธงเธเธงเธดเธเธต', unit: 'เธงเธดเธเธต', defaultValue: 720, min: 1, max: 1e308, step: 1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n, r } = inputs;
      if (!Number.isInteger(n) || !Number.isInteger(r)) throw new Error('n เนเธฅเธฐ r เธ•เนเธญเธเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธก');
      if (r > n) throw new Error('r เธ•เนเธญเธเนเธกเนเน€เธเธดเธ n');
      if (n > 170) throw new Error('n เธกเธฒเธเน€เธเธดเธเนเธ (เธชเธนเธเธชเธธเธ” 170)');

      const fact = (k) => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; };
      const result = fact(n) / fact(n - r);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเน€เธฃเธตเธขเธเธชเธฑเธเน€เธเธฅเธตเนเธขเธ', latex: '{}_n P_r = \\frac{n!}{(n-r)!}', explanation: `n = ${n}, r = ${r}` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `{}_n P_r = \\frac{${n}!}{(${n} - ${r})!} = \\frac{${fact(n)}}{${fact(n - r)}}`, explanation: 'เธเธณเธเธงเธ“เนเธเธเธ—เธญเน€เธฃเธตเธขเธฅ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `{}_n P_r = ${result}`, explanation: `เธกเธตเธ—เธฑเนเธเธซเธกเธ” ${result} เธงเธดเธเธต` }
      ];
      return { result, unit: 'เธงเธดเธเธต', steps };
    }
  },

  {
    id: 'combination',
    name: 'Combination (nCr)',
    nameTh: 'เธเธฒเธฃเธเธฑเธ”เธซเธกเธนเน (nCr)',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'list-ordered',
    grade: 'เธก.5',
    latex: '{}_n C_r = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}',
    description: 'เธเธณเธเธงเธเธงเธดเธเธตเน€เธฅเธทเธญเธเธเธญเธ r เธชเธดเนเธเธเธฒเธเธ—เธฑเนเธเธซเธกเธ” n เธชเธดเนเธ เนเธ”เธขเนเธกเนเธเธณเธเธถเธเธ–เธถเธเธฅเธณเธ”เธฑเธ เน€เธเนเธ เน€เธฅเธทเธญเธเธเธฃเธฃเธกเธเธฒเธฃ เน€เธฅเธทเธญเธเน€เธชเธทเนเธญ',
    variables: [
      { id: 'n', symbol: 'n', name: 'Total Items', nameTh: 'เธเธญเธเธ—เธฑเนเธเธซเธกเธ” (n)', unit: 'เธเธดเนเธ', defaultValue: 10, min: 1, max: 170, step: 1 },
      { id: 'r', symbol: 'r', name: 'Chosen Items', nameTh: 'เน€เธฅเธทเธญเธเธกเธฒ (r)', unit: 'เธเธดเนเธ', defaultValue: 3, min: 0, max: 170, step: 1 },
      { id: 'result', symbol: '{}_n C_r', name: 'Combinations', nameTh: 'เธเธณเธเธงเธเธงเธดเธเธต', unit: 'เธงเธดเธเธต', defaultValue: 120, min: 1, max: 1e308, step: 1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n, r } = inputs;
      if (!Number.isInteger(n) || !Number.isInteger(r)) throw new Error('n เนเธฅเธฐ r เธ•เนเธญเธเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธก');
      if (r > n) throw new Error('r เธ•เนเธญเธเนเธกเนเน€เธเธดเธ n');
      if (n > 170) throw new Error('n เธกเธฒเธเน€เธเธดเธเนเธ (เธชเธนเธเธชเธธเธ” 170)');

      const fact = (k) => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; };
      const result = fact(n) / (fact(r) * fact(n - r));
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเธเธฑเธ”เธซเธกเธนเน', latex: '{}_n C_r = \\frac{n!}{r!(n-r)!}', explanation: `n = ${n}, r = ${r}` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `{}_n C_r = \\frac{${n}!}{${r}!(${n} - ${r})!}`, explanation: 'เธเธณเธเธงเธ“เนเธเธเธ—เธญเน€เธฃเธตเธขเธฅ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `{}_n C_r = ${result}`, explanation: `เธกเธตเธ—เธฑเนเธเธซเธกเธ” ${result} เธงเธดเธเธต` }
      ];
      return { result, unit: 'เธงเธดเธเธต', steps };
    }
  },

  {
    id: 'probability',
    name: 'Simple Probability',
    nameTh: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ (P = เธเธฅเธ—เธตเนเธชเธเนเธ/เธเธฅเธ—เธฑเนเธเธซเธกเธ”)',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'percent',
    grade: 'เธก.3-5',
    latex: 'P(E) = \\frac{n(E)}{n(S)}',
    description: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเธเธญเธเน€เธซเธ•เธธเธเธฒเธฃเธ“เน = เธเธณเธเธงเธเธเธฅเธฅเธฑเธเธเนเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธซเธฒเธฃเธ”เนเธงเธขเธเธณเธเธงเธเธเธฅเธฅเธฑเธเธเนเธ—เธฑเนเธเธซเธกเธ” (เธเนเธฒเธญเธขเธนเนเธฃเธฐเธซเธงเนเธฒเธ 0 เธ–เธถเธ 1)',
    variables: [
      { id: 'P', symbol: 'P(E)', name: 'Probability', nameTh: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ', unit: '', defaultValue: 0.5, min: 0, max: 1, step: 0.01 },
      { id: 'favor', symbol: 'n(E)', name: 'Favorable Outcomes', nameTh: 'เธเธฅเธฅเธฑเธเธเนเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ', unit: 'เธเธฃเธ“เธต', defaultValue: 3, min: 0, max: 1e15, step: 1 },
      { id: 'total', symbol: 'n(S)', name: 'Total Outcomes', nameTh: 'เธเธฅเธฅเธฑเธเธเนเธ—เธฑเนเธเธซเธกเธ”', unit: 'เธเธฃเธ“เธต', defaultValue: 6, min: 1, max: 1e15, step: 1 }
    ],
    solveTargets: ['P', 'favor', 'total'],
    calculate: (inputs, target = 'P') => {
      let { P, favor, total } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = favor / total;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ', latex: 'P(E) = \\frac{n(E)}{n(S)}', explanation: 'เธเธฅเธฅเธฑเธเธเนเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเธซเธฒเธฃเธเธฅเธฅเธฑเธเธเนเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `P(E) = \\frac{${favor}}{${total}}`, explanation: `n(E) = ${favor}, n(S) = ${total}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P(E) = ${result.toFixed(4)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเน€เธ—เนเธฒเธเธฑเธ ${(result * 100).toFixed(2)}%` }
        ];
      } else if (target === 'favor') {
        result = P * total;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเธฅเธฑเธเธเนเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ', latex: 'n(E) = P \\cdot n(S)', explanation: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเธเธนเธ“เธเธฅเธฅเธฑเธเธเนเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n(E) = ${result.toFixed(4)}`, explanation: `เธกเธต ${result.toFixed(4)} เธเธฃเธ“เธตเธ—เธตเนเธ•เธฃเธเน€เธเธทเนเธญเธเนเธ` }
        ];
      } else if (target === 'total') {
        if (P === 0) throw new Error('เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = favor / P;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเธฅเธฑเธเธเนเธ—เธฑเนเธเธซเธกเธ”', latex: 'n(S) = \\frac{n(E)}{P}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n(S) = ${result.toFixed(4)}`, explanation: `เธกเธตเธ—เธฑเนเธเธซเธกเธ” ${result.toFixed(4)} เธเธฃเธ“เธต` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'chi_square',
    name: 'Chi-Square (single cell)',
    nameTh: 'เนเธเธชเนเธเธงเธฃเน (ฯยฒ = ฮฃ(Oโ’E)ยฒ/E)',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'sigma',
    grade: 'เธก.6',
    latex: '\\chi^2 = \\sum \\frac{(O - E)^2}{E}',
    description: 'เธ•เธฃเธงเธเธชเธญเธเธเธงเธฒเธกเนเธ•เธเธ•เนเธฒเธเธฃเธฐเธซเธงเนเธฒเธเธเนเธฒเธ—เธตเนเธชเธฑเธเน€เธเธ• (O) เนเธฅเธฐเธเนเธฒเธเธฒเธ”เธซเธงเธฑเธ (E) เนเธเนเนเธเธเธตเธงเธงเธดเธ—เธขเธฒ (เธ—เธ”เธชเธญเธเธเธฅเธ—เธฒเธเธเธฑเธเธเธธเธเธฃเธฃเธก) เนเธฅเธฐเธชเธ–เธดเธ•เธด',
    variables: [
      { id: 'chi2', symbol: '\\chi^2', name: 'Chi-Square', nameTh: 'เธเนเธฒเนเธเธชเนเธเธงเธฃเน', unit: '', defaultValue: 0.5, min: 0, max: 1e9, step: 0.01 },
      { id: 'observed', symbol: 'O', name: 'Observed Value', nameTh: 'เธเนเธฒเธ—เธตเนเธชเธฑเธเน€เธเธ• (O)', unit: '', defaultValue: 60, min: 0, max: 1e15, step: 1 },
      { id: 'expected', symbol: 'E', name: 'Expected Value', nameTh: 'เธเนเธฒเธเธฒเธ”เธซเธงเธฑเธ (E)', unit: '', defaultValue: 55, min: 0.0000001, max: 1e15, step: 1 }
    ],
    solveTargets: ['chi2', 'observed', 'expected'],
    calculate: (inputs, target = 'chi2') => {
      let { chi2, observed, expected } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'chi2') {
        result = Math.pow(observed - expected, 2) / expected;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธเธชเนเธเธงเธฃเน', latex: '\\chi^2 = \\frac{(O - E)^2}{E}', explanation: 'เธเธฅเธ•เนเธฒเธเธเธณเธฅเธฑเธเธชเธญเธเธซเธฒเธฃเธเนเธฒเธเธฒเธ”เธซเธงเธฑเธ (เธฃเธงเธกเธ—เธธเธเธเธฅเธฒเธชเธเนเธญเธกเธนเธฅ)' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\chi^2 = \\frac{(${observed} - ${expected})^2}{${expected}}`, explanation: `O = ${observed}, E = ${expected}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\chi^2 = ${result.toFixed(4)}`, explanation: `เธเนเธฒเนเธเธชเนเธเธงเธฃเนเธเธญเธเธเนเธญเธกเธนเธฅเธเธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'observed') {
        result = expected + Math.sqrt(chi2 * expected);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒ O', latex: 'O = E \\pm \\sqrt{\\chi^2 \\cdot E}', explanation: 'เธ–เธญเธ”เธฃเธฒเธเธ—เธฑเนเธเธชเธญเธเธเนเธฒเธ (เน€เธฅเธทเธญเธเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเธ•เธฒเธกเธเนเธญเธกเธนเธฅ)' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `O = ${result.toFixed(4)}`, explanation: `เธเนเธฒเธ—เธตเนเธชเธฑเธเน€เธเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'expected') {
        if (chi2 === 1) throw new Error('ฯยฒ = 1 เธ—เธณเนเธซเนเธชเธกเธเธฒเธฃเธกเธตเธเธฅเน€เธเธฅเธขเธเธดเน€เธจเธฉ เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เธซเธฒ E เนเธ”เนเธ•เธฃเธเน');
        const a = chi2;
        const b = -2 * observed - chi2;
        const c = observed * observed;
        const nom1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        const nom2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        result = nom2 > 0 ? nom2 : nom1;
        if (result <= 0) throw new Error('เนเธกเนเธเธเธเนเธฒ E เธ—เธตเนเน€เธเนเธเธเธงเธ');
        steps = [
          { title: 'เนเธเนเธชเธกเธเธฒเธฃเธซเธฒเธเนเธฒ E', latex: '\\chi^2 E = (O - E)^2', explanation: 'เธเธฃเธฐเธเธฒเธขเนเธฅเธฐเธเธฑเธ”เธฃเธนเธเน€เธเนเธเธชเธกเธเธฒเธฃเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธ E' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toFixed(4)}`, explanation: `เธเนเธฒเธเธฒเธ”เธซเธงเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'binomial_probability',
    name: 'Binomial Probability',
    nameTh: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเนเธเธเธ—เธงเธดเธเธฒเธก',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'percent',
    grade: 'เธก.5-6',
    latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}',
    description: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเธ—เธตเนเธเธฐเน€เธเธดเธ”เธเธงเธฒเธกเธชเธณเน€เธฃเนเธ k เธเธฃเธฑเนเธเธเธฒเธเธเธฒเธฃเธ—เธ”เธฅเธญเธ n เธเธฃเธฑเนเธ เนเธ•เนเธฅเธฐเธเธฃเธฑเนเธเธกเธตเนเธญเธเธฒเธชเธชเธณเน€เธฃเนเธ p (เน€เธเนเธ เธ—เธญเธขเน€เธซเธฃเธตเธขเธ)',
    variables: [
      { id: 'n', symbol: 'n', name: 'Number of Trials', nameTh: 'เธเธณเธเธงเธเธเธฒเธฃเธ—เธ”เธฅเธญเธ (n)', unit: 'เธเธฃเธฑเนเธ', defaultValue: 10, min: 1, max: 170, step: 1 },
      { id: 'k', symbol: 'k', name: 'Successes', nameTh: 'เธเธณเธเธงเธเธเธฃเธฑเนเธเธ—เธตเนเธชเธณเน€เธฃเนเธ (k)', unit: 'เธเธฃเธฑเนเธ', defaultValue: 6, min: 0, max: 170, step: 1 },
      { id: 'p', symbol: 'p', name: 'Success Probability', nameTh: 'เนเธญเธเธฒเธชเธชเธณเน€เธฃเนเธเธ•เนเธญเธเธฃเธฑเนเธ (p)', unit: '', defaultValue: 0.5, min: 0.0000001, max: 0.9999999, step: 0.01 },
      { id: 'result', symbol: 'P', name: 'Probability', nameTh: 'เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ', unit: '', defaultValue: 0.2051, min: 0, max: 1, step: 0.0001 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n, k, p } = inputs;
      if (!Number.isInteger(n) || !Number.isInteger(k)) throw new Error('n เนเธฅเธฐ k เธ•เนเธญเธเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธก');
      if (k > n) throw new Error('k เธ•เนเธญเธเนเธกเนเน€เธเธดเธ n');
      if (n > 170) throw new Error('n เธกเธฒเธเน€เธเธดเธเนเธ (เธชเธนเธเธชเธธเธ” 170)');

      const fact = (v) => { let f = 1; for (let i = 2; i <= v; i++) f *= i; return f; };
      const comb = fact(n) / (fact(k) * fact(n - k));
      const result = comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธ—เธงเธดเธเธฒเธก', latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}', explanation: `n = ${n}, k = ${k}, p = ${p}` },
        { title: 'เธเธณเธเธงเธ“เธเนเธฒเธเธฑเธ”เธซเธกเธนเน', latex: `\\binom{${n}}{${k}} = ${comb}`, explanation: 'เธเธณเธเธงเธเธงเธดเธเธตเน€เธฅเธทเธญเธ k เธเธฃเธฑเนเธเธเธฒเธ n เธเธฃเธฑเนเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `P = ${comb} \\times ${p}^${k} \\times (1 - ${p})^{${n - k}}`, explanation: 'เธเธนเธ“เนเธญเธเธฒเธชเธชเธณเน€เธฃเนเธเนเธฅเธฐเธฅเนเธกเน€เธซเธฅเธง' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(6)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเน€เธ—เนเธฒเธเธฑเธ ${(result * 100).toFixed(2)}%` }
      ];
      return { result, resultDisplay: `${(result * 100).toFixed(2)}%`, unit: '', steps };
    }
  }
];