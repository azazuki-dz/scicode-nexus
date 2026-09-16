// @ts-nocheck

/**
 * Trigonometry Formulas (เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด) - เธก.3, เธก.4-5
 */

export const TRIGONOMETRY_FORMULAS = [
  {
    id: 'sine_ratio',
    name: 'Sine Ratio',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธ sin (เธ•เธฃเธเธเนเธฒเธก/เธเธฒเธ)',
    category: 'trigonometry',
    categoryTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด',
    icon: 'triangle',
    grade: 'เธก.3',
    latex: '\\sin(\\theta) = \\frac{\\text{เธ•เธฃเธเธเนเธฒเธก}}{\\text{เธเธฒเธ}}',
    description: 'sin เธเธญเธเธกเธธเธก = เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธซเธฒเธฃเธ”เนเธงเธขเธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ เนเธเนเธซเธฒเธ”เนเธฒเธเธซเธฃเธทเธญเธกเธธเธกเนเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเธกเธธเธกเธเธฒเธ',
    variables: [
      { id: 'angle', symbol: '\\theta', name: 'Angle', nameTh: 'เธกเธธเธก ฮธ', unit: 'ยฐ', defaultValue: 30, min: -90, max: 90, step: 0.1 },
      { id: 'opp', symbol: 'opp', name: 'Opposite', nameTh: 'เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธก', unit: 'เธซเธเนเธงเธข', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'hyp', symbol: 'hyp', name: 'Hypotenuse', nameTh: 'เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['opp', 'hyp', 'angle'],
    calculate: (inputs, target = 'opp') => {
      let { angle, opp, hyp } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'opp') {
        result = Math.sin(angle * Math.PI / 180) * hyp;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธก', latex: 'opp = \\sin(\\theta) \\cdot hyp', explanation: 'เธขเนเธฒเธข hyp เนเธเธเธนเธ“' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `opp = \\sin(${angle}^\\circ) \\times ${hyp}`, explanation: `ฮธ = ${angle}ยฐ, เธเธฒเธ = ${hyp}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `opp = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'hyp') {
        if (Math.sin(angle * Math.PI / 180) === 0) throw new Error('sin(ฮธ) = 0 เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธเนเนเธ”เน');
        result = opp / Math.sin(angle * Math.PI / 180);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เนเธฒเธเธเธฒเธ', latex: 'hyp = \\frac{opp}{\\sin(\\theta)}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `hyp = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธเธฒเธเธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'angle') {
        if (hyp === 0) throw new Error('เธ”เนเธฒเธเธเธฒเธ (hyp) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.asin(Math.max(-1, Math.min(1, opp / hyp))) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก', latex: '\\theta = \\arcsin\\left(\\frac{opp}{hyp}\\right)', explanation: 'เนเธเนเธเธฑเธเธเนเธเธฑเธเธเธเธเธฑเธ arcsin' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ` }
        ];
      }

      return { result, unit: target === 'angle' ? 'ยฐ' : '', steps };
    }
  },

  {
    id: 'cosine_ratio',
    name: 'Cosine Ratio',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธ cos (เธเธฃเธฐเธเธดเธ”/เธเธฒเธ)',
    category: 'trigonometry',
    categoryTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด',
    icon: 'triangle',
    grade: 'เธก.3',
    latex: '\\cos(\\theta) = \\frac{\\text{เธเธฃเธฐเธเธดเธ”}}{\\text{เธเธฒเธ}}',
    description: 'cos เธเธญเธเธกเธธเธก = เธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธกเธธเธกเธซเธฒเธฃเธ”เนเธงเธขเธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ เนเธเนเธซเธฒเธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธซเธฃเธทเธญเธกเธธเธก',
    variables: [
      { id: 'angle', symbol: '\\theta', name: 'Angle', nameTh: 'เธกเธธเธก ฮธ', unit: 'ยฐ', defaultValue: 60, min: 0, max: 180, step: 0.1 },
      { id: 'adj', symbol: 'adj', name: 'Adjacent', nameTh: 'เธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธกเธธเธก', unit: 'เธซเธเนเธงเธข', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'hyp', symbol: 'hyp', name: 'Hypotenuse', nameTh: 'เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['adj', 'hyp', 'angle'],
    calculate: (inputs, target = 'adj') => {
      let { angle, adj, hyp } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'adj') {
        result = Math.cos(angle * Math.PI / 180) * hyp;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”', latex: 'adj = \\cos(\\theta) \\cdot hyp', explanation: 'เธขเนเธฒเธข hyp เนเธเธเธนเธ“' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `adj = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'hyp') {
        if (Math.cos(angle * Math.PI / 180) === 0) throw new Error('cos(ฮธ) = 0 เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธเนเนเธ”เน');
        result = adj / Math.cos(angle * Math.PI / 180);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เนเธฒเธเธเธฒเธ', latex: 'hyp = \\frac{adj}{\\cos(\\theta)}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `hyp = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธเธฒเธเธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'angle') {
        if (hyp === 0) throw new Error('เธ”เนเธฒเธเธเธฒเธ (hyp) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.acos(Math.max(-1, Math.min(1, adj / hyp))) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก', latex: '\\theta = \\arccos\\left(\\frac{adj}{hyp}\\right)', explanation: 'เนเธเนเธเธฑเธเธเนเธเธฑเธเธเธเธเธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ` }
        ];
      }

      return { result, unit: target === 'angle' ? 'ยฐ' : '', steps };
    }
  },

  {
    id: 'tangent_ratio',
    name: 'Tangent Ratio',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธ tan (เธ•เธฃเธเธเนเธฒเธก/เธเธฃเธฐเธเธดเธ”)',
    category: 'trigonometry',
    categoryTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด',
    icon: 'triangle',
    grade: 'เธก.3',
    latex: '\\tan(\\theta) = \\frac{\\text{เธ•เธฃเธเธเนเธฒเธก}}{\\text{เธเธฃเธฐเธเธดเธ”}}',
    description: 'tan เธเธญเธเธกเธธเธก = เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธซเธฒเธฃเธ”เนเธงเธขเธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธกเธธเธก เนเธเนเธซเธฒเธเธงเธฒเธกเธเธฑเธเธซเธฃเธทเธญเธฃเธฐเธขเธฐเธ—เธฒเธเน€เธเนเธ เธกเธธเธกเน€เธเธข-เธกเธธเธกเธเนเธก',
    variables: [
      { id: 'angle', symbol: '\\theta', name: 'Angle', nameTh: 'เธกเธธเธก ฮธ', unit: 'ยฐ', defaultValue: 45, min: -90, max: 90, step: 0.1 },
      { id: 'opp', symbol: 'opp', name: 'Opposite', nameTh: 'เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธก', unit: 'เธซเธเนเธงเธข', defaultValue: 10, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'adj', symbol: 'adj', name: 'Adjacent', nameTh: 'เธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธกเธธเธก', unit: 'เธซเธเนเธงเธข', defaultValue: 10, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['opp', 'adj', 'angle'],
    calculate: (inputs, target = 'opp') => {
      let { angle, opp, adj } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'opp') {
        result = Math.tan(angle * Math.PI / 180) * adj;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธก', latex: 'opp = \\tan(\\theta) \\cdot adj', explanation: 'เธขเนเธฒเธข adj เนเธเธเธนเธ“' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `opp = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'adj') {
        if (Math.tan(angle * Math.PI / 180) === 0) throw new Error('tan(ฮธ) = 0 เนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธเนเนเธ”เน');
        result = opp / Math.tan(angle * Math.PI / 180);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”', latex: 'adj = \\frac{opp}{\\tan(\\theta)}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `adj = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธเธฃเธฐเธเธดเธ”เธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'angle') {
        if (adj === 0) throw new Error('เธ”เนเธฒเธเธเธฃเธฐเธเธดเธ” (adj) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.atan(opp / adj) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก', latex: '\\theta = \\arctan\\left(\\frac{opp}{adj}\\right)', explanation: 'เนเธเนเธเธฑเธเธเนเธเธฑเธเธเธเธเธฑเธ arctan' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ` }
        ];
      }

      return { result, unit: target === 'angle' ? 'ยฐ' : '', steps };
    }
  },

  {
    id: 'law_of_sines',
    name: 'Law of Sines',
    nameTh: 'เธเธเธเธญเธเนเธเธเน (a/sinA = b/sinB)',
    category: 'trigonometry',
    categoryTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด',
    icon: 'triangle',
    grade: 'เธก.4-5',
    latex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B}',
    description: 'เนเธเนเธซเธฒเธ”เนเธฒเธเธซเธฃเธทเธญเธกเธธเธกเธเธญเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเนเธ”เน เน€เธกเธทเนเธญเธฃเธนเน 2 เธกเธธเธก 1 เธ”เนเธฒเธ เธซเธฃเธทเธญ 2 เธ”เนเธฒเธ 1 เธกเธธเธก (เธเธฃเธ“เธตเธกเธธเธกเนเธกเนเธ•เธฃเธเธเนเธฒเธก)',
    variables: [
      { id: 'sideA', symbol: 'a', name: 'Side a', nameTh: 'เธ”เนเธฒเธ a (เธ•เธฃเธเธเนเธฒเธก A)', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleA', symbol: 'A', name: 'Angle A', nameTh: 'เธกเธธเธก A (เธ•เธฃเธเธเนเธฒเธก a)', unit: 'ยฐ', defaultValue: 60, min: 0.01, max: 179.99, step: 0.1 },
      { id: 'sideB', symbol: 'b', name: 'Side b', nameTh: 'เธ”เนเธฒเธ b (เธ•เธฃเธเธเนเธฒเธก B)', unit: 'เธซเธเนเธงเธข', defaultValue: 4.33, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleB', symbol: 'B', name: 'Angle B', nameTh: 'เธกเธธเธก B (เธ•เธฃเธเธเนเธฒเธก b)', unit: 'ยฐ', defaultValue: 45, min: 0.01, max: 179.99, step: 0.1 }
    ],
    solveTargets: ['sideA', 'sideB', 'angleB'],
    calculate: (inputs, target = 'sideA') => {
      let { sideA, angleA, sideB, angleB } = inputs;
      let steps = [];
      let result = 0;
      const sinA = Math.sin(angleA * Math.PI / 180);
      const sinB = Math.sin(angleB * Math.PI / 180);

      if (target === 'sideA') {
        if (sinB === 0) throw new Error('sin B เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (sideB * sinA) / sinB;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ a', latex: 'a = \\frac{b \\cdot \\sin A}{\\sin B}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธกเนเธเธกเธฒ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `a = \\frac{${sideB} \\times \\sin(${angleA}^\\circ)}{\\sin(${angleB}^\\circ)}`, explanation: 'เธเธณเธเธงเธ“เธเนเธฒ sine' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ a เธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'sideB') {
        if (sinA === 0) throw new Error('sin A เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (sideA * sinB) / sinA;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ b', latex: 'b = \\frac{a \\cdot \\sin B}{\\sin A}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธกเนเธเธกเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `b = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ b เธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'angleB') {
        if (sideA === 0) throw new Error('เธ”เนเธฒเธ a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const ratio = (sideB * sinA) / sideA;
        if (Math.abs(ratio) > 1) throw new Error('เธเนเธฒเธ—เธตเนเธเธณเธเธงเธ“เนเธ”เนเน€เธเธดเธเธเนเธงเธเธเธญเธ sine (1) โ€” เธ•เธฃเธงเธเธชเธญเธเธเนเธญเธกเธนเธฅ');
        result = Math.asin(ratio) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ sin B', latex: '\\sin B = \\frac{b \\cdot \\sin A}{a}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `B = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธก B เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ (เนเธเน arcsin)` }
        ];
      }

      return { result, unit: target === 'angleB' ? 'ยฐ' : '', steps };
    }
  },

  {
    id: 'law_of_cosines',
    name: 'Law of Cosines',
    nameTh: 'เธเธเธเธญเธเนเธเนเธเธเน (cยฒ = aยฒ + bยฒ - 2ab cos C)',
    category: 'trigonometry',
    categoryTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด',
    icon: 'triangle',
    grade: 'เธก.4-5',
    latex: 'c^2 = a^2 + b^2 - 2ab\\cos(C)',
    description: 'เนเธเนเธซเธฒเธ”เนเธฒเธเธ—เธตเนเธชเธฒเธกเธเธญเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเนเธ”เน เน€เธกเธทเนเธญเธฃเธนเน 2 เธ”เนเธฒเธ 1 เธกเธธเธก เธซเธฃเธทเธญเธซเธฒเธกเธธเธกเน€เธกเธทเนเธญเธฃเธนเนเธ”เนเธฒเธเธเธฃเธ 3 เธ”เนเธฒเธ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'เธ”เนเธฒเธ a', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'เธ”เนเธฒเธ b', unit: 'เธซเธเนเธงเธข', defaultValue: 7, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Side c', nameTh: 'เธ”เนเธฒเธ c (เธ•เธฃเธเธเนเธฒเธก C)', unit: 'เธซเธเนเธงเธข', defaultValue: 6, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleC', symbol: 'C', name: 'Angle C', nameTh: 'เธกเธธเธก C (เธ•เธฃเธเธเนเธฒเธก c)', unit: 'ยฐ', defaultValue: 60, min: 0.01, max: 179.99, step: 0.1 }
    ],
    solveTargets: ['c', 'angleC'],
    calculate: (inputs, target = 'c') => {
      let { a, b, c, angleC } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'c') {
        result = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleC * Math.PI / 180));
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธเธญเธเนเธเนเธเธเน', latex: 'c^2 = a^2 + b^2 - 2ab\\cos(C)', explanation: 'เธ–เธญเธ”เธฃเธฒเธเธ—เธฑเนเธเธชเธญเธเธเนเธฒเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `c = \\sqrt{${a}^2 + ${b}^2 - 2(${a})(${b})\\cos(${angleC}^\\circ)}`, explanation: `a = ${a}, b = ${b}, C = ${angleC}ยฐ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `c = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ c เธขเธฒเธง ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'angleC') {
        const cosC = (a * a + b * b - c * c) / (2 * a * b);
        if (Math.abs(cosC) > 1) throw new Error('เธเนเธญเธกเธนเธฅเธ”เนเธฒเธเน€เธเนเธเนเธเนเธกเนเนเธ”เน: cos C เน€เธเธดเธ ยฑ1');
        result = Math.acos(cosC) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก C', latex: '\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธก C เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ (เนเธเน arccos)` }
        ];
      }

      return { result, unit: target === 'angleC' ? 'ยฐ' : '', steps };
    }
  },

  {
    id: 'triangle_area_sinc',
    name: 'Triangle Area (ยฝab sin C)',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธก (ยฝabยทsin C)',
    category: 'trigonometry',
    categoryTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด',
    icon: 'triangle',
    grade: 'เธก.4-5',
    latex: 'A = \\frac{1}{2} ab\\sin(C)',
    description: 'เธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเนเธ”เน เธเธณเธเธงเธ“เธเธฒเธเธ”เนเธฒเธเธชเธญเธเธ”เนเธฒเธเนเธฅเธฐเธกเธธเธกเธฃเธฐเธซเธงเนเธฒเธเธ”เนเธฒเธ (เนเธเนเน€เธกเธทเนเธญเนเธกเนเธกเธตเน€เธชเนเธเธชเธนเธ)',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเน', unit: 'เธ•เธฃ.เธซเธเนเธงเธข', defaultValue: 15.155, min: 0, max: 1e12, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'เธ”เนเธฒเธ a', unit: 'เธซเธเนเธงเธข', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'เธ”เนเธฒเธ b', unit: 'เธซเธเนเธงเธข', defaultValue: 7, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleC', symbol: 'C', name: 'Included Angle', nameTh: 'เธกเธธเธกเธฃเธฐเธซเธงเนเธฒเธ a เนเธฅเธฐ b', unit: 'ยฐ', defaultValue: 60, min: 0.01, max: 179.99, step: 0.1 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      let { a, b, angleC } = inputs;
      const result = 0.5 * a * b * Math.sin(angleC * Math.PI / 180);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเธ”เนเธงเธข sin', latex: 'A = \\frac{1}{2} ab\\sin(C)', explanation: 'เธเธฃเธถเนเธเธซเธเธถเนเธเธเธญเธเธเธฅเธเธนเธ“เธชเธญเธเธ”เนเธฒเธเธเธนเธ“ sin เธเธญเธเธกเธธเธกเธฃเธฐเธซเธงเนเธฒเธเธ”เนเธฒเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `A = 0.5 \\times ${a} \\times ${b} \\times \\sin(${angleC}^\\circ)`, explanation: `a = ${a}, b = ${b}, C = ${angleC}ยฐ` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธซเธเนเธงเธข` }
      ];
      return { result, unit: '', steps };
    }
  }
];