// @ts-nocheck

/**
 * Geometry Formulas (เน€เธฃเธเธฒเธเธ“เธดเธ•) - เธก.1 - เธก.6
 * เธเธทเนเธเธ—เธตเน เธเธฃเธดเธกเธฅ เธงเธเธเธฅเธก เธเธฃเธดเธกเธฒเธ•เธฃ เธเธทเนเธเธ—เธตเนเธเธดเธง
 */

export const GEOMETRY_FORMULAS = [
  {
    id: 'area_triangle',
    name: 'Area of Triangle',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธฃเธนเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธก',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'triangle',
    grade: 'เธก.1-3',
    latex: 'A = \\frac{1}{2} \\cdot b \\cdot h',
    description: 'เธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเน€เธ—เนเธฒเธเธฑเธเธเธฃเธถเนเธเธซเธเธถเนเธเธเธญเธเธเธฒเธเธเธนเธ“เธเธงเธฒเธกเธชเธนเธ (เธเธงเธฒเธกเธชเธนเธเธ•เนเธญเธเธ•เธฑเนเธเธเธฒเธเธเธฑเธเธเธฒเธ)',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเน', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 30, min: 0, max: 1e12, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Base', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 12, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['A', 'b', 'h'],
    calculate: (inputs, target = 'A') => {
      let { A, b, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'A') {
        result = 0.5 * b * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธก', latex: 'A = \\frac{1}{2} b h', explanation: 'เธเธฃเธถเนเธเธซเธเธถเนเธเธเธญเธเธเธฒเธเธเธนเธ“เธเธงเธฒเธกเธชเธนเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `A = 0.5 \\times ${b} \\times ${h}`, explanation: `เธเธฒเธ = ${b}, เธชเธนเธ = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'b') {
        if (h === 0) throw new Error('เธเธงเธฒเธกเธชเธนเธ (h) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (2 * A) / h;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฒเธ', latex: 'b = \\frac{2A}{h}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `b = ${result.toFixed(4)}`, explanation: `เธเธฒเธเธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'h') {
        if (b === 0) throw new Error('เธเธฒเธ (b) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (2 * A) / b;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'h = \\frac{2A}{b}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'area_circle',
    name: 'Area of Circle',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธงเธเธเธฅเธก',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'circle',
    grade: 'เธก.2-3',
    latex: 'A = \\pi r^2',
    description: 'เธเธทเนเธเธ—เธตเนเธงเธเธเธฅเธกเน€เธ—เนเธฒเธเธฑเธ ฯ€ เธเธนเธ“เธฃเธฑเธจเธกเธตเธขเธเธเธณเธฅเธฑเธเธชเธญเธ เนเธ”เธข ฯ€ โ 3.14159',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธงเธเธเธฅเธก', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 78.5398, min: 0, max: 1e12, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธต', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['A', 'r'],
    calculate: (inputs, target = 'A') => {
      let { A, r } = inputs;
      let steps = [];
      let result = 0;
      const PI = Math.PI;

      if (target === 'A') {
        result = PI * Math.pow(r, 2);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเธงเธเธเธฅเธก', latex: 'A = \\pi r^2', explanation: 'ฯ€ โ 3.14159' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `A = \\pi \\times ${r}^2 = \\pi \\times ${(r * r).toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธต r = ${r}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'r') {
        result = Math.sqrt(A / PI);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'r = \\sqrt{\\frac{A}{\\pi}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเนเธงเธ–เธญเธ”เธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'circumference',
    name: 'Circumference of Circle',
    nameTh: 'เน€เธชเนเธเธฃเธญเธเธงเธเธเธญเธเธงเธเธเธฅเธก',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'circle',
    grade: 'เธก.2-3',
    latex: 'C = 2 \\pi r',
    description: 'เธเธงเธฒเธกเธขเธฒเธงเธฃเธญเธเธงเธเธเธฅเธกเน€เธ—เนเธฒเธเธฑเธ 2ฯ€r เธซเธฃเธทเธญ ฯ€d (d = เน€เธชเนเธเธเนเธฒเธเธจเธนเธเธขเนเธเธฅเธฒเธ)',
    variables: [
      { id: 'C', symbol: 'C', name: 'Circumference', nameTh: 'เน€เธชเนเธเธฃเธญเธเธงเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 31.4159, min: 0, max: 1e12, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธต', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['C', 'r'],
    calculate: (inputs, target = 'C') => {
      let { C, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'C') {
        result = 2 * Math.PI * r;
        steps = [
          { title: 'เธชเธนเธ•เธฃเน€เธชเนเธเธฃเธญเธเธงเธ', latex: 'C = 2 \\pi r', explanation: 'ฯ€ โ 3.14159' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toFixed(4)}`, explanation: `เน€เธชเนเธเธฃเธญเธเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'r') {
        result = C / (2 * Math.PI);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'r = \\frac{C}{2\\pi}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'area_trapezoid',
    name: 'Area of Trapezoid',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธฃเธนเธเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธเธฒเธเธซเธกเธน',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'layers',
    grade: 'เธก.1-3',
    latex: 'A = \\frac{(a + b)}{2} \\cdot h',
    description: 'เธเธทเนเธเธ—เธตเนเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธเธฒเธเธซเธกเธนเน€เธ—เนเธฒเธเธฑเธเธเธฃเธถเนเธเธซเธเธถเนเธเธเธญเธเธเธฅเธเธงเธเธ”เนเธฒเธเธเธนเนเธเธเธฒเธเธเธนเธ“เธเธงเธฒเธกเธชเธนเธ',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเน', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 40, min: 0, max: 1e12, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Parallel Side a', nameTh: 'เธ”เนเธฒเธเธเธนเนเธเธเธฒเธ a', unit: 'เธซเธเนเธงเธข', defaultValue: 10, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Parallel Side b', nameTh: 'เธ”เนเธฒเธเธเธนเนเธเธเธฒเธ b', unit: 'เธซเธเนเธงเธข', defaultValue: 6, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['A', 'h'],
    calculate: (inputs, target = 'A') => {
      let { A, a, b, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'A') {
        result = ((a + b) / 2) * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเธเธฒเธเธซเธกเธน', latex: 'A = \\frac{a + b}{2} \\cdot h', explanation: 'เน€เธเธฅเธตเนเธขเธ”เนเธฒเธเธเธนเนเธเธเธฒเธ เธเธนเธ“เธเธงเธฒเธกเธชเธนเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `A = \\frac{${a} + ${b}}{2} \\times ${h}`, explanation: `a = ${a}, b = ${b}, h = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'h') {
        if (a + b === 0) throw new Error('เธเธฅเธฃเธงเธกเธ”เนเธฒเธเธเธนเนเธเธเธฒเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (2 * A) / (a + b);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'h = \\frac{2A}{a + b}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'sector_area',
    name: 'Area of Circle Sector',
    nameTh: 'เธเธทเนเธเธ—เธตเนเน€เธเธเน€เธ•เธญเธฃเนเธงเธเธเธฅเธก',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'pie-chart',
    grade: 'เธก.3',
    latex: 'A = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2',
    description: 'เธเธทเนเธเธ—เธตเนเน€เธเธเน€เธ•เธญเธฃเน (เธเธฒเธขเธงเธเธเธฅเธกเธเธดเนเธ) เธเธณเธเธงเธ“เธเธฒเธเธชเธฑเธ”เธชเนเธงเธเธเธญเธเธกเธธเธกเธจเธนเธเธขเนเธเธฅเธฒเธ ฮธ เน€เธ—เธตเธขเธเธเธฑเธ 360ยฐ',
    variables: [
      { id: 'A', symbol: 'A', name: 'Sector Area', nameTh: 'เธเธทเนเธเธ—เธตเนเน€เธเธเน€เธ•เธญเธฃเน', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 32.7249, min: 0, max: 1e12, step: 0.1 },
      { id: 'theta', symbol: '\\theta', name: 'Central Angle', nameTh: 'เธกเธธเธกเธจเธนเธเธขเนเธเธฅเธฒเธ', unit: 'ยฐ', defaultValue: 150, min: 0.0001, max: 360, step: 1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธต', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['A', 'theta'],
    calculate: (inputs, target = 'A') => {
      let { A, theta, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'A') {
        result = (theta / 360) * Math.PI * r * r;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเน€เธเธเน€เธ•เธญเธฃเน', latex: 'A = \\frac{\\theta}{360} \\cdot \\pi r^2', explanation: 'เธชเธฑเธ”เธชเนเธงเธเธกเธธเธกเน€เธ—เธตเธขเธเธเธฑเธเธงเธเธเธฅเธกเน€เธ•เนเธกเธงเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `A = \\frac{${theta}}{360} \\times \\pi \\times ${r}^2`, explanation: `ฮธ = ${theta}ยฐ, r = ${r}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธเธเน€เธ•เธญเธฃเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'theta') {
        if (r === 0) throw new Error('เธฃเธฑเธจเธกเธต (r) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (A / (Math.PI * r * r)) * 360;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธกเธจเธนเธเธขเนเธเธฅเธฒเธ', latex: '\\theta = \\frac{A}{\\pi r^2} \\cdot 360', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธกเธจเธนเธเธขเนเธเธฅเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_box',
    name: 'Volume of Rectangular Prism',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธกเธธเธกเธเธฒเธ',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'box',
    grade: 'เธก.1-3',
    latex: 'V = l \\cdot w \\cdot h',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธเธญเธเธเธฅเนเธญเธเธ—เธฃเธเธชเธตเนเน€เธซเธฅเธตเนเธขเธก = เธเธงเนเธฒเธ ร— เธขเธฒเธง ร— เธชเธนเธ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'เธฅเธ.เธซเธเนเธงเธข', defaultValue: 60, min: 0, max: 1e15, step: 0.1 },
      { id: 'l', symbol: 'l', name: 'Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธง', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'w', symbol: 'w', name: 'Width', nameTh: 'เธเธงเธฒเธกเธเธงเนเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 3, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['V', 'h'],
    calculate: (inputs, target = 'V') => {
      let { V, l, w, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = l * w * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธชเธตเนเน€เธซเธฅเธตเนเธขเธก', latex: 'V = l \\cdot w \\cdot h', explanation: 'เธเธงเนเธฒเธ ร— เธขเธฒเธง ร— เธชเธนเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `V = ${l} \\times ${w} \\times ${h}`, explanation: 'เธเธนเธ“เธ—เธฑเนเธเธชเธฒเธกเธ”เนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'h') {
        if (l * w === 0) throw new Error('เธเธงเธฒเธกเธขเธฒเธงร—เธเธงเธฒเธกเธเธงเนเธฒเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = V / (l * w);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'h = \\frac{V}{l \\cdot w}', explanation: 'เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฒเธฃเธ”เนเธงเธขเธเธทเนเธเธ—เธตเนเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_cylinder',
    name: 'Volume of Cylinder',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธฐเธเธญเธ',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'disc',
    grade: 'เธก.1-3',
    latex: 'V = \\pi r^2 h',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธฐเธเธญเธ = เธเธทเนเธเธ—เธตเนเธเธฒเธเธงเธเธเธฅเธก (ฯ€rยฒ) ร— เธเธงเธฒเธกเธชเธนเธ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'เธฅเธ.เธซเธเนเธงเธข', defaultValue: 157.0796, min: 0, max: 1e15, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธตเธเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'h', 'r'],
    calculate: (inputs, target = 'V') => {
      let { V, r, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = Math.PI * r * r * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธฐเธเธญเธ', latex: 'V = \\pi r^2 h', explanation: 'เธเธทเนเธเธ—เธตเนเธเธฒเธเธงเธเธเธฅเธกเธเธนเธ“เธเธงเธฒเธกเธชเธนเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `V = \\pi \\times ${r}^2 \\times ${h}`, explanation: `r = ${r}, h = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'h') {
        if (r === 0) throw new Error('เธฃเธฑเธจเธกเธต (r) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = V / (Math.PI * r * r);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'h = \\frac{V}{\\pi r^2}', explanation: 'เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฒเธฃเธเธทเนเธเธ—เธตเนเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'r') {
        if (h === 0) throw new Error('เธเธงเธฒเธกเธชเธนเธ (h) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt(V / (Math.PI * h));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'r = \\sqrt{\\frac{V}{\\pi h}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเนเธงเธ–เธญเธ”เธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_cone',
    name: 'Volume of Cone',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธงเธข',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'triangle',
    grade: 'เธก.2-3',
    latex: 'V = \\frac{1}{3} \\pi r^2 h',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธงเธขเน€เธ—เนเธฒเธเธฑเธเธซเธเธถเนเธเนเธเธชเธฒเธกเธเธญเธเธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธฐเธเธญเธเธ—เธตเนเธกเธตเธเธฒเธเนเธฅเธฐเธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'เธฅเธ.เธซเธเนเธงเธข', defaultValue: 104.7198, min: 0, max: 1e15, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธตเธเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'h', 'r'],
    calculate: (inputs, target = 'V') => {
      let { V, r, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = (1 / 3) * Math.PI * r * r * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธงเธข', latex: 'V = \\frac{1}{3} \\pi r^2 h', explanation: 'เธซเธเธถเนเธเนเธเธชเธฒเธกเธเธญเธเธ—เธฃเธเธเธฃเธฐเธเธญเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `V = \\frac{1}{3} \\times \\pi \\times ${r}^2 \\times ${h}`, explanation: `r = ${r}, h = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'h') {
        if (r === 0) throw new Error('เธฃเธฑเธจเธกเธต (r) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (3 * V) / (Math.PI * r * r);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'h = \\frac{3V}{\\pi r^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'r') {
        if (h === 0) throw new Error('เธเธงเธฒเธกเธชเธนเธ (h) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt((3 * V) / (Math.PI * h));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'r = \\sqrt{\\frac{3V}{\\pi h}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเนเธงเธ–เธญเธ”เธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_sphere',
    name: 'Volume of Sphere',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฅเธก',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'circle',
    grade: 'เธก.3',
    latex: 'V = \\frac{4}{3} \\pi r^3',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฅเธกเน€เธ—เนเธฒเธเธฑเธ 4/3 ฯ€rยณ เนเธเนเธเธณเธเธงเธ“เธฅเธนเธเธเธญเธฅ เธฅเธนเธเนเธฅเธ เธ”เธฒเธงเน€เธเธฃเธฒเธฐเธซเนเนเธ”เธขเธเธฃเธฐเธกเธฒเธ“',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'เธฅเธ.เธซเธเนเธงเธข', defaultValue: 523.5988, min: 0, max: 1e15, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธต', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'r'],
    calculate: (inputs, target = 'V') => {
      let { V, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = (4 / 3) * Math.PI * Math.pow(r, 3);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฅเธก', latex: 'V = \\frac{4}{3} \\pi r^3', explanation: 'ฯ€ โ 3.14159' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `V = \\frac{4}{3} \\times \\pi \\times ${r}^3`, explanation: `เธฃเธฑเธจเธกเธต r = ${r}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'r') {
        result = Math.cbrt((3 * V) / (4 * Math.PI));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'r = \\sqrt[3]{\\frac{3V}{4\\pi}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเนเธงเธ–เธญเธ”เธฃเธฒเธเธ—เธตเนเธชเธฒเธก' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'surface_area_box',
    name: 'Surface Area of Rectangular Prism',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธเธดเธงเธ—เธฃเธเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธกเธธเธกเธเธฒเธ',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'box',
    grade: 'เธก.1-3',
    latex: 'A = 2(lw + lh + wh)',
    description: 'เธเธทเนเธเธ—เธตเนเธเธดเธงเธเนเธญเธเธเธดเธ”เธเธฅเนเธญเธ = เธเธฅเธฃเธงเธกเธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ—เธฑเนเธ 6 เธ”เนเธฒเธ',
    variables: [
      { id: 'A', symbol: 'A', name: 'Surface Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธเธดเธง', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 94, min: 0, max: 1e12, step: 0.1 },
      { id: 'l', symbol: 'l', name: 'Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธง', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'w', symbol: 'w', name: 'Width', nameTh: 'เธเธงเธฒเธกเธเธงเนเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 3, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      let { l, w, h } = inputs;
      const result = 2 * (l * w + l * h + w * h);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเธเธดเธง', latex: 'A = 2(lw + lh + wh)', explanation: 'เธกเธตเธซเธเนเธฒ 3 เธเธนเน เนเธ•เนเธฅเธฐเธซเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `A = 2[(${l} \\times ${w}) + (${l} \\times ${h}) + (${w} \\times ${h})]`, explanation: `l = ${l}, w = ${w}, h = ${h}` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเธเธดเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'pythagorean',
    name: 'Pythagorean Theorem',
    nameTh: 'เธ—เธคเธฉเธเธตเธเธ—เธเธตเธ—เธฒเนเธเธฃเธฑเธช',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'triangle',
    grade: 'เธก.3',
    latex: 'c^2 = a^2 + b^2',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธเธญเธเธ”เนเธฒเธเนเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเธกเธธเธกเธเธฒเธ cยฒ = aยฒ + bยฒ เน€เธกเธทเนเธญ c เน€เธเนเธเธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Leg a', nameTh: 'เธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ a', unit: '', defaultValue: 3, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Leg b', nameTh: 'เธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ b', unit: '', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Hypotenuse c', nameTh: 'เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ c', unit: '', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['c', 'a', 'b'],
    calculate: (inputs, target = 'c') => {
      const { a, b, c } = inputs;
      let result, steps;
      if (target === 'c') {
        result = Math.sqrt(a * a + b * b);
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'c^2 = a^2 + b^2', explanation: `a = ${a}, b = ${b}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `c^2 = ${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${a * a + b * b}`, explanation: `เธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธเน€เธ—เนเธฒเธเธฑเธ ${(a * a + b * b).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `c = \\sqrt{${(a * a + b * b).toFixed(4)}} = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธเธขเธฒเธง ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (c <= a) throw new Error('c เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ a (เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธเธขเธฒเธงเธ—เธตเนเธชเธธเธ”)');
        result = Math.sqrt(c * c - b * b);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ a', latex: 'a = \\sqrt{c^2 - b^2}', explanation: `c = ${c}, b = ${b}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a = \\sqrt{${c}^2 - ${b}^2} = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ a เธขเธฒเธง ${result.toFixed(4)}` }
        ];
      } else {
        if (c <= b) throw new Error('c เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ b (เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธเธขเธฒเธงเธ—เธตเนเธชเธธเธ”)');
        result = Math.sqrt(c * c - a * a);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ b', latex: 'b = \\sqrt{c^2 - a^2}', explanation: `c = ${c}, a = ${a}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `b = \\sqrt{${c}^2 - ${a}^2} = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ b เธขเธฒเธง ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: '', steps };
    }
  },

  {
    id: 'sphere_surface_area',
    name: 'Sphere Surface Area',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธเธดเธงเธ—เธฃเธเธเธฅเธก',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'circle',
    grade: 'เธก.6',
    latex: 'A = 4\\pi r^2',
    description: 'เธเธทเนเธเธ—เธตเนเธเธดเธงเธเธญเธเธ—เธฃเธเธเธฅเธก A = 4ฯ€rยฒ เธเธดเธ”เธเธฒเธเธฃเธฑเธจเธกเธต r เธซเธเนเธงเธขเธเธทเนเธเธ—เธตเน',
    variables: [
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธต', unit: '', defaultValue: 3, min: 0.0001, max: 1e7, step: 0.1 },
      { id: 'A', symbol: 'A', name: 'Surface Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธเธดเธง', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 113.0973, min: 0.0001, max: 1e15, step: 1 }
    ],
    solveTargets: ['A', 'r'],
    calculate: (inputs, target = 'A') => {
      const { r, A } = inputs;
      let result, steps;
      if (target === 'A') {
        result = 4 * Math.PI * r * r;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'A = 4\\pi r^2', explanation: `r = ${r}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `A = 4 \\times \\pi \\times ${r}^2`, explanation: 'เนเธ—เธเธเนเธฒเธฃเธฑเธจเธกเธตเธฅเธเนเธเธชเธนเธ•เธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)} \\ \\text{เธ•เธฃ.เธซเธเนเธงเธข}`, explanation: `เธเธทเนเธเธ—เธตเนเธเธดเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
        ];
      } else {
        if (A <= 0) throw new Error('เธเธทเนเธเธ—เธตเนเธเธดเธง A เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = Math.sqrt(A / (4 * Math.PI));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ r', latex: 'r = \\sqrt{\\frac{A}{4\\pi}}', explanation: `A = ${A}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = \\sqrt{\\frac{${A}}{4\\pi}} = ${result.toFixed(4)}`, explanation: `เธฃเธฑเธจเธกเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: target === 'A' ? 'เธ•เธฃ.เธซเธเนเธงเธข' : '', steps };
    }
  },

  {
    id: 'pyramid_volume',
    name: 'Pyramid Volume',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธเธตเธฃเธฐเธกเธดเธ”',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'layers',
    grade: 'เธก.2',
    latex: 'V = \\frac{1}{3}Bh',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธเธตเธฃเธฐเธกเธดเธ” = โ…“ ร— เธเธทเนเธเธ—เธตเนเธเธฒเธ (B) ร— เธชเธนเธ (h) เธ—เธฑเนเธเธเธฃเธดเธเธถเธกเธเธเธดเธ”เนเธ”เธเนเนเธ”เนเธ—เธตเนเธกเธตเธเธฒเธเน€เธเนเธเธฃเธนเธเธซเธฅเธฒเธขเน€เธซเธฅเธตเนเธขเธก',
    variables: [
      { id: 'B', symbol: 'B', name: 'Base Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธเธฒเธ', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 30, min: 0.0001, max: 1e12, step: 1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: '', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'เธฅเธ.เธซเธเนเธงเธข', defaultValue: 40, min: 0.0001, max: 1e15, step: 1 }
    ],
    solveTargets: ['V', 'B', 'h'],
    calculate: (inputs, target = 'V') => {
      const { B, h, V } = inputs;
      let result, steps;
      if (target === 'V') {
        result = (B * h) / 3;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'V = \\frac{1}{3}Bh', explanation: `B = ${B}, h = ${h}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `V = \\frac{1}{3} \\times ${B} \\times ${h}`, explanation: 'เนเธ—เธเธเธทเนเธเธ—เธตเนเธเธฒเธเนเธฅเธฐเธเธงเธฒเธกเธชเธนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)} \\ \\text{เธฅเธ.เธซเธเนเธงเธข}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธ.เธซเธเนเธงเธข` }
        ];
      } else if (target === 'B') {
        if (h === 0) throw new Error('เธเธงเธฒเธกเธชเธนเธ h เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (3 * V) / h;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ B', latex: 'B = \\frac{3V}{h}', explanation: `V = ${V}, h = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `B = \\frac{3 \\times ${V}}{${h}} = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
        ];
      } else {
        if (B === 0) throw new Error('เธเธทเนเธเธ—เธตเนเธเธฒเธ B เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (3 * V) / B;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ h', latex: 'h = \\frac{3V}{B}', explanation: `V = ${V}, B = ${B}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = \\frac{3 \\times ${V}}{${B}} = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: target === 'V' ? 'เธฅเธ.เธซเธเนเธงเธข' : target === 'B' ? 'เธ•เธฃ.เธซเธเนเธงเธข' : '', steps };
    }
  }
];