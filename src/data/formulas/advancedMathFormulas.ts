// @ts-nocheck

/**
 * Calculus & Advanced Math Formulas (เนเธเธฅเธเธนเธฅเธฑเธช + เน€เธงเธเน€เธ•เธญเธฃเน/เน€เธกเธ—เธฃเธดเธเธเน/เธเธณเธเธงเธเน€เธเธดเธเธเนเธญเธ) - เธก.4 - เธก.6
 */

export const CALCULUS_FORMULAS = [
  {
    id: 'power_derivative',
    name: 'Power Rule (Derivative)',
    nameTh: 'เธญเธเธธเธเธฑเธเธเนเธเธญเธเธเธฑเธเธเนเธเธฑเธเธขเธเธเธณเธฅเธฑเธ',
    category: 'calculus',
    categoryTh: 'เนเธเธฅเธเธนเธฅเธฑเธช',
    icon: 'trending-up',
    grade: 'เธก.6',
    latex: '\\frac{d}{dx} a x^n = a \\cdot n \\cdot x^{n-1}',
    description: 'เธญเธเธธเธเธฑเธเธเนเธเธญเธ axโฟ = (aยทn)ยทxโฟโปยน เน€เธเนเธ d/dx เธเธญเธ 3xยฒ เธเธทเธญ 6x เน€เธกเธทเนเธญเนเธชเนเธเนเธฒ x เธเธฐเนเธ”เนเธเธงเธฒเธกเธเธฑเธเธเธญเธเน€เธชเนเธเธชเธฑเธกเธเธฑเธช เธ“ เธเธธเธ”เธเธฑเนเธ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน (a)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Exponent', nameTh: 'เน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ (n)', unit: '', defaultValue: 2, min: -100, max: 100, step: 1 },
      { id: 'x0', symbol: 'x', name: 'Evaluate At x', nameTh: 'เธเนเธฒ x เธ—เธตเนเธ•เนเธญเธเธเธฒเธฃ', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, n, x0 } = inputs;
      const diffCoef = a * n;
      const diffExp = n - 1;
      const result = diffCoef * Math.pow(x0, diffExp);
      const steps = [
        { title: 'เธเธเธขเธเธเธณเธฅเธฑเธ', latex: `\\frac{d}{dx} (${a}x^{${n}}) = (${a} \\cdot ${n}) x^{${n - 1}}`, explanation: 'เธ”เธถเธเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธเธฅเธเธกเธฒเธเธนเธ“ เนเธฅเธฐเธฅเธ”เน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธเธฅเธ 1' },
        { title: 'เธเธฑเธเธเนเธเธฑเธเธญเธเธธเธเธฑเธเธเน', latex: `f'(x) = ${diffCoef} x^{${diffExp}}`, explanation: `เธญเธเธธเธเธฑเธเธเนเธเธญเธเธเธฑเธเธเนเธเธฑเธเธเธทเธญ ${diffCoef}x^${diffExp}` },
        { title: 'เนเธ—เธเธเนเธฒ x', latex: `f'(${x0}) = ${diffCoef} \\times ${x0}^${diffExp} = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธเธฑเธเธเธญเธเธเธฃเธฒเธเธ—เธตเน x = ${x0} เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, resultDisplay: `f'(${x0}) = ${result.toFixed(4)}`, unit: '', steps };
    }
  },

  {
    id: 'power_integral',
    name: 'Power Rule (Integral)',
    nameTh: 'เธเธฃเธดเธเธฑเธเธเนเธเธญเธเธเธฑเธเธเนเธเธฑเธเธขเธเธเธณเธฅเธฑเธ',
    category: 'calculus',
    categoryTh: 'เนเธเธฅเธเธนเธฅเธฑเธช',
    icon: 'sigma',
    grade: 'เธก.6',
    latex: '\\int a x^n \\, dx = \\frac{a}{n+1} x^{n+1} + C',
    description: 'เธญเธดเธเธ—เธดเธเธฃเธฑเธฅเธเธญเธ axโฟ (n โ  -1) = (a/(n+1))ยทxโฟโบยน + C เน€เธเนเธ โซ3xยฒ dx = xยณ + C เนเธเนเธซเธฒเธเธทเนเธเธ—เธตเนเนเธ•เนเธเธฃเธฒเธ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน (a)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Exponent', nameTh: 'เน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ (n)', unit: '', defaultValue: 2, min: -100, max: 100, step: 1 },
      { id: 'from', symbol: 'b', name: 'Lower Bound', nameTh: 'เธเธญเธเธฅเนเธฒเธ (a)', unit: '', defaultValue: 0, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'to', symbol: 'a', name: 'Upper Bound', nameTh: 'เธเธญเธเธเธ (b)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, n, from, to } = inputs;
      if (n === -1) throw new Error('n = -1 เธเธฐเนเธ”เนเธเธธเธ”เธฃเธนเธเนเธเธ โซ aยทxโปยน dx = aยทln|x| + C (เนเธชเนเธเธญเธเน€เธเธ•เน€เธเธทเนเธญเธซเธฒเธเธทเนเธเธ—เธตเน)');
      const coef = a / (n + 1);
      const exp = n + 1;
      const F = (x) => coef * Math.pow(x, exp);
      const result = F(to) - F(from);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธฃเธดเธเธฑเธเธเน', latex: `\\int ${a}x^{${n}} \\, dx = \\frac{${a}}{${n + 1}} x^{${n + 1}} + C`, explanation: 'เธเธงเธเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ 1 เนเธฅเนเธงเธซเธฒเธฃเธ”เนเธงเธขเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธเนเธซเธกเน' },
        { title: 'เธเธฑเธเธเนเธเธฑเธเธเธฃเธดเธเธฑเธเธเน', latex: `F(x) = ${coef} x^{${exp}}`, explanation: 'เธญเธดเธเธ—เธดเธเธฃเธฑเธฅเนเธกเนเธเธณเธเธฑเธ”เน€เธเธ•เธเธญเธเธเธฑเธเธเนเธเธฑเธ' },
        { title: 'เธซเธฒเธเธทเนเธเธ—เธตเนเนเธเธเนเธงเธ', latex: `\\int_${from}^{${to}} ${a}x^{${n}} dx = F(${to}) - F(${from}) = ${F(to).toFixed(4)} - ${F(from).toFixed(4)}`, explanation: 'เนเธ—เธเธเนเธฒเธเธญเธเน€เธเธ•เธเธเนเธฅเธฐเธฅเนเธฒเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `= ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเนเธ•เนเธเธฃเธฒเธเนเธเธเนเธงเธ ${from} เธ–เธถเธ ${to} เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'avg_rate_of_change',
    name: 'Average Rate of Change',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเน€เธเธฅเธตเนเธข',
    category: 'calculus',
    categoryTh: 'เนเธเธฅเธเธนเธฅเธฑเธช',
    icon: 'activity',
    grade: 'เธก.4-6',
    latex: '\\frac{\\Delta f}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}',
    description: 'เธเธงเธฒเธกเธเธฑเธเน€เธเธฅเธตเนเธขเธเธญเธเธเธฑเธเธเนเธเธฑเธเธฃเธฐเธซเธงเนเธฒเธเธเธธเธ”เธชเธญเธเธเธธเธ” เนเธเนเธซเธฒเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ เน€เธเนเธ เธเธงเธฒเธกเน€เธฃเนเธงเน€เธเธฅเธตเนเธขเธเธฒเธเธเธฃเธฒเธเธฃเธฐเธขเธฐเธ—เธฒเธ',
    variables: [
      { id: 'result', symbol: 'ROC', name: 'Rate of Change', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ', unit: '', defaultValue: 4, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'fb', symbol: 'f(b)', name: 'Function at b', nameTh: 'เธเนเธฒเธเธฑเธเธเนเธเธฑเธเธ—เธตเน b', unit: '', defaultValue: 15, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'fa', symbol: 'f(a)', name: 'Function at a', nameTh: 'เธเนเธฒเธเธฑเธเธเนเธเธฑเธเธ—เธตเน a', unit: '', defaultValue: 3, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Point b', nameTh: 'เธเธธเธ” b', unit: '', defaultValue: 4, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Point a', nameTh: 'เธเธธเธ” a', unit: '', defaultValue: 1, min: -1e15, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { fb, fa, b, a } = inputs;
      if (b === a) throw new Error('เธเธธเธ” a เนเธฅเธฐ b เธ•เนเธญเธเธ•เนเธฒเธเธเธฑเธ');
      const result = (fb - fa) / (b - a);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเน€เธเธฅเธตเนเธข', latex: 'ROC = \\frac{f(b) - f(a)}{b - a}', explanation: 'เธเธฅเธ•เนเธฒเธเธเธฑเธเธเนเธเธฑเธเธซเธฒเธฃเธเธฅเธ•เนเธฒเธเธเธธเธ”' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `ROC = \\frac{${fb} - ${fa}}{${b} - ${a}}`, explanation: 'เธเธณเธเธงเธ“เธเธฅเธ•เนเธฒเธ numerator / denominator' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `ROC = ${result.toFixed(4)}`, explanation: `เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเน€เธเธฅเธตเนเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  }
];

export const ADVANCED_MATH_FORMULAS = [
  {
    id: 'vector_magnitude',
    name: 'Vector Magnitude',
    nameTh: 'เธเธเธฒเธ”เธเธญเธเน€เธงเธเน€เธ•เธญเธฃเน',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'navigation',
    grade: 'เธก.4-5',
    latex: '|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}',
    description: 'เธเธเธฒเธ” (เธเธงเธฒเธกเธขเธฒเธง) เธเธญเธเน€เธงเธเน€เธ•เธญเธฃเนเนเธเธเธฃเธดเธ เธนเธกเธด 3 เธกเธดเธ•เธด เนเธ”เนเธเธฒเธเธฃเธฒเธเธ—เธตเนเธชเธญเธเธเธญเธเธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธเธญเธเธเนเธเธฃเธฐเธเธญเธ เธซเธฒเธเนเธเธ—เธขเนเน€เธเนเธ 2 เธกเธดเธ•เธด เนเธซเนเนเธชเน z = 0',
    variables: [
      { id: 'x', symbol: 'x', name: 'Component x', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ x', unit: '', defaultValue: 3, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'y', symbol: 'y', name: 'Component y', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ y', unit: '', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'z', symbol: 'z', name: 'Component z', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ z (2D เนเธชเน 0)', unit: '', defaultValue: 0, min: -1e12, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x, y, z } = inputs;
      const result = Math.sqrt(x * x + y * y + z * z);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธเธฒเธ”เน€เธงเธเน€เธ•เธญเธฃเน', latex: '|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}', explanation: `เธญเธเธเนเธเธฃเธฐเธเธญเธ (${x}, ${y}, ${z})` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `|\\vec{v}| = \\sqrt{${x}^2 + ${y}^2 + ${z}^2} = \\sqrt{${x * x + y * y + z * z}}`, explanation: 'เธขเธเธเธณเธฅเธฑเธเธชเธญเธเนเธฅเนเธงเธฃเธงเธกเธเธฑเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `|\\vec{v}| = ${result.toFixed(4)}`, explanation: `เธเธเธฒเธ”เน€เธงเธเน€เธ•เธญเธฃเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'dot_product',
    name: 'Dot Product (Scalar Product)',
    nameTh: 'เธเธฅเธเธนเธ“เธ”เธญเธ• (Dot Product)',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'sigma',
    grade: 'เธก.4-5',
    latex: '\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y',
    description: 'เธเธฅเธเธนเธ“เน€เธเธดเธเธชเน€เธเธฅเธฒเธฃเนเธเธญเธเน€เธงเธเน€เธ•เธญเธฃเน 2 เธกเธดเธ•เธด = เธเธฅเธฃเธงเธกเธเธญเธเธเธฅเธเธนเธ“เธญเธเธเนเธเธฃเธฐเธเธญเธเธ•เธฒเธกเนเธเธ เนเธเนเธ•เธฃเธงเธเธกเธธเธกเธเธฒเธ (เนเธ”เน 0) เนเธฅเธฐเธซเธฒเธเธเธฒเธ”',
    variables: [
      { id: 'ax', symbol: 'a_x', name: 'a.x', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ x เธเธญเธ a', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'ay', symbol: 'a_y', name: 'a.y', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ y เธเธญเธ a', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'bx', symbol: 'b_x', name: 'b.x', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ x เธเธญเธ b', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'by', symbol: 'b_y', name: 'b.y', nameTh: 'เธญเธเธเนเธเธฃเธฐเธเธญเธ y เธเธญเธ b', unit: '', defaultValue: -2, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { ax, ay, bx, by } = inputs;
      const result = ax * bx + ay * by;
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธฅเธเธนเธ“เธ”เธญเธ•', latex: '\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y', explanation: 'เธเธนเธ“เธญเธเธเนเธเธฃเธฐเธเธญเธเธ•เธฒเธกเนเธเธเนเธฅเนเธงเธเธงเธเธเธฑเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `\\vec{a} \\cdot \\vec{b} = (${ax} \\times ${bx}) + (${ay} \\times ${by}) = ${ax * bx} + ${ay * by}`, explanation: 'เธเธณเธเธงเธ“เนเธ•เนเธฅเธฐเธเธเธเน' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\vec{a} \\cdot \\vec{b} = ${result.toFixed(4)}`, explanation: result === 0 ? 'เธเธฅเธเธนเธ“เน€เธเนเธ 0 โ’ เน€เธงเธเน€เธ•เธญเธฃเนเธ•เธฑเนเธเธเธฒเธเธเธฑเธ' : `เธเธฅเธเธนเธ“เธ”เธญเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'distance_points',
    name: 'Distance Between Two Points',
    nameTh: 'เธฃเธฐเธขเธฐเธ—เธฒเธเธฃเธฐเธซเธงเนเธฒเธเธเธธเธ” 2 เธเธธเธ”',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'navigation',
    grade: 'เธก.4',
    latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}',
    description: 'เธฃเธฐเธขเธฐเธ—เธฒเธเธฃเธฐเธซเธงเนเธฒเธเธเธธเธ” (xโ,yโ) เนเธฅเธฐ (xโ,yโ) เนเธเธเธดเธเธฑเธ”เธเธฒเธ เนเธเนเนเธเน€เธฃเธเธฒเธเธ“เธดเธ•เธงเธดเน€เธเธฃเธฒเธฐเธซเน',
    variables: [
      { id: 'x1', symbol: 'x_1', name: 'Point 1 x', nameTh: 'x เธเธญเธเธเธธเธ”เนเธฃเธ', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y1', symbol: 'y_1', name: 'Point 1 y', nameTh: 'y เธเธญเธเธเธธเธ”เนเธฃเธ', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'x2', symbol: 'x_2', name: 'Point 2 x', nameTh: 'x เธเธญเธเธเธธเธ”เธ—เธตเนเธชเธญเธ', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y2', symbol: 'y_2', name: 'Point 2 y', nameTh: 'y เธเธญเธเธเธธเธ”เธ—เธตเนเธชเธญเธ', unit: '', defaultValue: 6, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x1, y1, x2, y2 } = inputs;
      const dx = x2 - x1, dy = y2 - y1;
      const result = Math.sqrt(dx * dx + dy * dy);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธฃเธฐเธขเธฐเธ—เธฒเธ', latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}', explanation: 'เธซเธฒเธเธฅเธ•เนเธฒเธเธเธดเธเธฑเธ”เธ•เธฒเธกเนเธเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `d = \\sqrt{(${x2}-${x1})^2 + (${y2}-${y1})^2} = \\sqrt{${dx}^2 + ${dy}^2}`, explanation: `เธเธฅเธ•เนเธฒเธ x = ${dx}, y = ${dy}` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `d = ${result.toFixed(4)}`, explanation: `เธฃเธฐเธขเธฐเธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'midpoint',
    name: 'Midpoint of Segment',
    nameTh: 'เธเธธเธ”เธเธถเนเธเธเธฅเธฒเธ',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'triangle',
    grade: 'เธก.4',
    latex: 'M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)',
    description: 'เธเธธเธ”เธเธถเนเธเธเธฅเธฒเธเธเธญเธเธชเนเธงเธเธเธญเธเน€เธชเนเธเธ•เธฃเธเธฃเธฐเธซเธงเนเธฒเธเธเธธเธ”เธชเธญเธเธเธธเธ” เธเธทเธญเธเนเธฒเน€เธเธฅเธตเนเธขเธเธญเธเธเธดเธเธฑเธ”เธ•เธฒเธกเนเธเธ',
    variables: [
      { id: 'x1', symbol: 'x_1', name: 'Point 1 x', nameTh: 'x เธเธญเธเธเธธเธ”เนเธฃเธ', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y1', symbol: 'y_1', name: 'Point 1 y', nameTh: 'y เธเธญเธเธเธธเธ”เนเธฃเธ', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'x2', symbol: 'x_2', name: 'Point 2 x', nameTh: 'x เธเธญเธเธเธธเธ”เธ—เธตเนเธชเธญเธ', unit: '', defaultValue: 8, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y2', symbol: 'y_2', name: 'Point 2 y', nameTh: 'y เธเธญเธเธเธธเธ”เธ—เธตเนเธชเธญเธ', unit: '', defaultValue: 10, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x1, y1, x2, y2 } = inputs;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธธเธ”เธเธถเนเธเธเธฅเธฒเธ', latex: 'M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)', explanation: 'เน€เธเธฅเธตเนเธขเธเธดเธเธฑเธ”เธ•เธฒเธกเนเธเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `M = \\left(\\frac{${x1}+${x2}}{2},\\ \\frac{${y1}+${y2}}{2}\\right) = (${mx}, ${my})`, explanation: 'เธเธณเธเธงเธ“เนเธ•เนเธฅเธฐเนเธเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `M = (${mx.toFixed(4)},\\ ${my.toFixed(4)})`, explanation: `เธเธธเธ”เธเธถเนเธเธเธฅเธฒเธเธเธทเธญ (${mx.toFixed(4)}, ${my.toFixed(4)})` }
      ];
      return { result: mx, resultDisplay: `(${mx.toFixed(4)}, ${my.toFixed(4)})`, unit: '', steps };
    }
  },

  {
    id: 'slope',
    name: 'Slope of a Line',
    nameTh: 'เธเธงเธฒเธกเธเธฑเธเธเธญเธเน€เธชเนเธเธ•เธฃเธ',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'trending-up',
    grade: 'เธก.4',
    latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
    description: 'เธเธงเธฒเธกเธเธฑเธ (m) เธเธทเธญเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ y เธ•เนเธญ x เธฃเธฐเธซเธงเนเธฒเธเธเธธเธ”เธชเธญเธเธเธธเธ” เน€เธเนเธเธเธงเธเน€เธกเธทเนเธญเธเธฑเธเธเธถเนเธ เธฅเธเน€เธกเธทเนเธญเธเธฑเธเธฅเธ เธจเธนเธเธขเนเน€เธกเธทเนเธญเธฃเธฒเธ',
    variables: [
      { id: 'x1', symbol: 'x_1', name: 'Point 1 x', nameTh: 'x เธเธญเธเธเธธเธ”เนเธฃเธ', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y1', symbol: 'y_1', name: 'Point 1 y', nameTh: 'y เธเธญเธเธเธธเธ”เนเธฃเธ', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'x2', symbol: 'x_2', name: 'Point 2 x', nameTh: 'x เธเธญเธเธเธธเธ”เธ—เธตเนเธชเธญเธ', unit: '', defaultValue: 5, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y2', symbol: 'y_2', name: 'Point 2 y', nameTh: 'y เธเธญเธเธเธธเธ”เธ—เธตเนเธชเธญเธ', unit: '', defaultValue: 11, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x1, y1, x2, y2 } = inputs;
      if (x2 === x1) throw new Error('เน€เธชเนเธเธ•เธฃเธเนเธเนเธเธงเธ”เธดเนเธ (x เน€เธ—เนเธฒเธเธฑเธ) เนเธกเนเธกเธตเธเธงเธฒเธกเธเธฑเธ');
      const result = (y2 - y1) / (x2 - x1);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธเธฑเธ', latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', explanation: 'เธเธฅเธ•เนเธฒเธ y เธซเธฒเธฃเธเธฅเธ•เนเธฒเธ x' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `m = \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${y2 - y1}}{${x2 - x1}}`, explanation: 'เธเธณเธเธงเธ“เธเธฅเธ•เนเธฒเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'matrix_det',
    name: 'Determinant of 2x2 Matrix',
    nameTh: 'เธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เนเธเธญเธเน€เธกเธ—เธฃเธดเธเธเน (เธเธเธฒเธ” 2ร—2)',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'grid',
    grade: 'เธก.5',
    latex: '\\det(A) = ad - bc',
    description: 'เธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เนเธเธญเธเน€เธกเธ—เธฃเธดเธเธเน [[a,b],[c,d]] = ad โ’ bc เนเธเนเธ•เธฃเธงเธเธชเธญเธเธงเนเธฒเธกเธตเธ•เธฑเธงเธเธเธเธฑเธ (โ  0) เนเธฅเธฐเนเธเนเธฃเธฐเธเธเธชเธกเธเธฒเธฃ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Entry a', nameTh: 'a (เนเธ–เธง1 เธเธญเธฅเธฑเธกเธเน1)', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Entry b', nameTh: 'b (เนเธ–เธง1 เธเธญเธฅเธฑเธกเธเน2)', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Entry c', nameTh: 'c (เนเธ–เธง2 เธเธญเธฅเธฑเธกเธเน1)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'd', symbol: 'd', name: 'Entry d', nameTh: 'd (เนเธ–เธง2 เธเธญเธฅเธฑเธกเธเน2)', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, b, c, d } = inputs;
      const result = a * d - b * c;
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เน', latex: '\\det(A) = ad - bc', explanation: 'เน€เธชเนเธเธ—เนเธขเธเธซเธฅเธฑเธเธฅเธเน€เธชเนเธเธ—เนเธขเธเธฃเธญเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `\\det(A) = (${a} \\times ${d}) - (${b} \\times ${c}) = ${a * d} - ${b * c}`, explanation: 'เธเธณเธเธงเธ“เธเธฅเธเธนเธ“เธ—เนเธขเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\det(A) = ${result.toFixed(4)}`, explanation: result === 0 ? 'เธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เนเน€เธเนเธ 0 โ’ เน€เธกเธ—เธฃเธดเธเธเนเน€เธญเธเธเธฒเธ เนเธกเนเธกเธตเธ•เธฑเธงเธเธเธเธฑเธ' : `เธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'matrix_inverse',
    name: 'Inverse of 2x2 Matrix',
    nameTh: 'เธ•เธฑเธงเธเธเธเธฑเธเธเธญเธเน€เธกเธ—เธฃเธดเธเธเน (เธเธเธฒเธ” 2ร—2)',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'grid',
    grade: 'เธก.5',
    latex: 'A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
    description: 'เธ•เธฑเธงเธเธเธเธฑเธเธเธญเธเน€เธกเธ—เธฃเธดเธเธเน 2ร—2 เธซเธฒเนเธ”เนเนเธ”เธขเธชเธฅเธฑเธเธ—เนเธขเธเธซเธฅเธฑเธ เนเธชเนเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเธฅเธเธ—เธตเนเธ—เนเธขเธเธฃเธญเธ เนเธฅเนเธงเธซเธฒเธฃเธ”เนเธงเธขเธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เน (เธ•เนเธญเธ โ  0)',
    variables: [
      { id: 'a', symbol: 'a', name: 'Entry a', nameTh: 'a', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Entry b', nameTh: 'b', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Entry c', nameTh: 'c', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'd', symbol: 'd', name: 'Entry d', nameTh: 'd', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, b, c, d } = inputs;
      const det = a * d - b * c;
      if (det === 0) throw new Error('เธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เนเน€เธเนเธ 0 โ’ เน€เธกเธ—เธฃเธดเธเธเนเนเธกเนเธกเธตเธ•เธฑเธงเธเธเธเธฑเธ');
      const inv = [
        [d / det, -b / det],
        [-c / det, a / det]
      ];
      const steps = [
        { title: 'เธเธณเธเธงเธ“เธ”เธตเน€เธ—เธญเธฃเนเธกเธดเนเธเธเธ•เน', latex: `\\det(A) = ${a}(${d}) - ${b}(${c}) = ${det.toFixed(4)}`, explanation: 'ad โ’ bc เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0' },
        { title: 'เธชเธนเธ•เธฃเธ•เธฑเธงเธเธเธเธฑเธ', latex: 'A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}', explanation: `เธเธนเธ“ 1/${det.toFixed(4)} เธเธฑเธเน€เธกเธ—เธฃเธดเธเธเนเธชเธฅเธฑเธเธ—เนเธขเธ` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A^{-1} = \\begin{pmatrix} ${inv[0][0].toFixed(4)} & ${inv[0][1].toFixed(4)} \\\\ ${inv[1][0].toFixed(4)} & ${inv[1][1].toFixed(4)} \\end{pmatrix}`, explanation: `เธ—เธธเธเธเนเธญเธเธเธนเธ“เธ”เนเธงเธข 1/${det.toFixed(4)}` }
      ];
      return { result: det, resultDisplay: `[[${inv[0][0].toFixed(3)}, ${inv[0][1].toFixed(3)}], [${inv[1][0].toFixed(3)}, ${inv[1][1].toFixed(3)}]]`, unit: '', steps };
    }
  },

  {
    id: 'complex_modulus',
    name: 'Modulus of Complex Number',
    nameTh: 'เธเนเธฒเธชเธฑเธกเธเธนเธฃเธ“เนเธเธญเธเธเธณเธเธงเธเน€เธเธดเธเธเนเธญเธ',
    category: 'advanced',
    categoryTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน',
    icon: 'hash',
    grade: 'เธก.5',
    latex: '|a + bi| = \\sqrt{a^2 + b^2}',
    description: 'เธเธเธฒเธ”เธเธญเธเธเธณเธเธงเธเน€เธเธดเธเธเนเธญเธ a + bi เนเธ”เนเธเธฒเธเธฃเธฒเธเธ—เธตเนเธชเธญเธเธเธญเธเธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธเธชเนเธงเธเธเธฃเธดเธเนเธฅเธฐเธชเนเธงเธเธเธดเธเธ•เธ เธฒเธ เน€เธเนเธ |3 + 4i| = 5',
    variables: [
      { id: 'a', symbol: 'a', name: 'Real Part', nameTh: 'เธชเนเธงเธเธเธฃเธดเธ (a)', unit: '', defaultValue: 3, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Imaginary Part', nameTh: 'เธชเนเธงเธเธเธดเธเธ•เธ เธฒเธ (b)', unit: '', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, b } = inputs;
      const result = Math.sqrt(a * a + b * b);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเนเธฒเธชเธฑเธกเธเธนเธฃเธ“เน', latex: '|a + bi| = \\sqrt{a^2 + b^2}', explanation: `เธเธณเธเธงเธเน€เธเธดเธเธเนเธญเธ ${a} + ${b}i` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `|z| = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a + b * b}}`, explanation: 'เธขเธเธเธณเธฅเธฑเธเธชเธญเธเนเธฅเนเธงเธฃเธงเธกเธเธฑเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `|z| = ${result.toFixed(4)}`, explanation: `เธเธเธฒเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  }
];