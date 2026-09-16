// @ts-nocheck

/**
 * Extra Formulas โ€” 30 new formulas across categories
 * เธเธฅเธจเธฒเธชเธ•เธฃเน เธเธดเธชเธดเธเธชเน เธเธฅเธทเนเธ เนเธเธเนเธฒ เน€เธเธกเธต เน€เธฃเธเธฒเธเธ“เธดเธ• เธชเธ–เธดเธ•เธด เธเธฒเธฃเน€เธเธดเธ เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน เธชเธธเธเธ เธฒเธ เน€เธ—เธเนเธเนเธฅเธขเธต
 */

export const EXTRA_FORMULAS = [
  // ==================== MECHANICS ====================
  {
    id: 'projectile_range',
    name: 'Projectile Range',
    nameTh: 'เธฃเธฐเธขเธฐเธเธธเนเธเนเธเธฅเธเธญเธเธงเธฑเธ•เธ–เธธ',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'target',
    grade: 'เธก.4',
    latex: 'R = \\frac{v_0^2 \\sin(2\\theta)}{g}',
    description: 'เธฃเธฐเธขเธฐเธเธธเนเธเนเธเธฅเนเธเธงเธเธญเธเธเธญเธเธงเธฑเธ•เธ–เธธเธ—เธตเนเธขเธดเธเธญเธญเธเธเธฒเธเธเธทเนเธเธ”เธดเธเนเธเธฃเธฐเธ”เธฑเธเน€เธ”เธตเธขเธงเธเธฑเธ (เนเธกเนเธกเธตเนเธฃเธเธ•เนเธฒเธเธญเธฒเธเธฒเธจ)',
    variables: [
      { id: 'R', symbol: 'R', name: 'Range', nameTh: 'เธฃเธฐเธขเธฐเธเธธเนเธเนเธเธฅ', unit: 'm', defaultValue: 40.8163, min: 0, max: 100000, step: 0.1 },
      { id: 'v0', symbol: 'v_0', name: 'Initial Speed', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธ•เนเธ', unit: 'm/s', defaultValue: 20, min: 0.01, max: 10000, step: 0.5 },
      { id: 'theta', symbol: '\\theta', name: 'Launch Angle', nameTh: 'เธกเธธเธกเธขเธดเธ', unit: 'ยฐ', defaultValue: 45, min: 0.1, max: 89.9, step: 1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ', unit: 'm/sยฒ', defaultValue: 9.8, min: 0.1, max: 50, step: 0.1 }
    ],
    solveTargets: ['R', 'v0', 'theta'],
    calculate: (inputs, target = 'R') => {
      const { R, v0, theta, g } = inputs;
      const thetaRad = (theta * Math.PI) / 180;
      let result, steps = [], unit = '';
      if (target === 'R') {
        result = (v0 * v0 * Math.sin(2 * thetaRad)) / g;
        unit = 'm';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธฃเธฐเธขเธฐเธเธธเนเธเนเธเธฅ', latex: 'R = \\frac{v_0^2 \\sin(2\\theta)}{g}', explanation: 'เธขเธดเธเธเธฒเธเธเธทเนเธเธ”เธดเธเธฃเธฐเธ”เธฑเธเน€เธ”เธตเธขเธงเธเธฑเธ' },
          { title: 'เนเธเธฅเธเธกเธธเธกเน€เธเนเธเน€เธฃเน€เธ”เธตเธขเธ', latex: `\\theta = ${theta}^\\circ = ${thetaRad.toFixed(4)}\\,\\text{rad}`, explanation: 'เธเธนเธ“ ฯ€/180' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `R = \\frac{(${v0})^2 \\cdot \\sin(2 \\times ${thetaRad.toFixed(4)})}{${g}}`, explanation: 'เนเธ—เธเธเนเธฒเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธฃเธฐเธขเธฐเธเธธเนเธเนเธเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'v0') {
        if (Math.sin(2 * thetaRad) === 0) throw new Error('sin(2ฮธ) โ  0 เธ•เนเธญเธเนเธกเนเนเธเนเธกเธธเธก 0ยฐ เธซเธฃเธทเธญ 90ยฐ');
        result = Math.sqrt((R * g) / Math.sin(2 * thetaRad));
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธ•เนเธ', latex: 'v_0 = \\sqrt{\\frac{R \\cdot g}{\\sin(2\\theta)}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v_0 = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      } else {
        if (v0 === 0) throw new Error('vโ€ โ  0');
        const sinVal = Math.max(-1, Math.min(1, (R * g) / (v0 * v0)));
        result = (Math.asin(sinVal) / 2) * (180 / Math.PI);
        unit = 'ยฐ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธกเธขเธดเธ', latex: '\\theta = \\frac{1}{2} \\arcsin\\left(\\frac{Rg}{v_0^2}\\right)', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเนเธเน arcsin' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธกเธขเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'banked_curve',
    name: 'Banked Curve',
    nameTh: 'เธ–เธเธเนเธเนเธเน€เธญเธตเธขเธ',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'navigation',
    grade: 'เธก.4',
    latex: '\\tan\\theta = \\frac{v^2}{r \\cdot g}',
    description: 'เธกเธธเธกเน€เธญเธตเธขเธเธ—เธตเนเน€เธซเธกเธฒเธฐเธชเธกเธเธญเธเธ–เธเธเนเธเนเธเน€เธเธทเนเธญเนเธซเนเธฃเธ–เธเนเธฒเธเนเธเนเธเนเธ”เนเนเธ”เธขเนเธกเนเธ•เนเธญเธเธเธถเนเธเนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธ',
    variables: [
      { id: 'theta', symbol: '\\theta', name: 'Bank Angle', nameTh: 'เธกเธธเธกเน€เธญเธตเธขเธ', unit: 'ยฐ', defaultValue: 14.25, min: 0.1, max: 89.9, step: 0.5 },
      { id: 'v', symbol: 'v', name: 'Speed', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง', unit: 'm/s', defaultValue: 20, min: 0.01, max: 200, step: 0.5 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธตเนเธเนเธ', unit: 'm', defaultValue: 100, min: 0.1, max: 10000, step: 1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ', unit: 'm/sยฒ', defaultValue: 9.8, min: 0.1, max: 50, step: 0.1 }
    ],
    solveTargets: ['theta', 'v', 'r'],
    calculate: (inputs, target = 'theta') => {
      const { theta, v, r, g } = inputs;
      let result, steps = [], unit = '';
      if (target === 'theta') {
        result = (Math.atan((v * v) / (r * g)) * 180) / Math.PI;
        unit = 'ยฐ';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธ–เธเธเนเธเนเธเน€เธญเธตเธขเธ', latex: '\\theta = \\arctan\\left(\\frac{v^2}{rg}\\right)', explanation: 'เธกเธธเธกเน€เธญเธตเธขเธเธ—เธตเนเธชเธกเธ”เธธเธฅเธเธฑเธเนเธฃเธเธซเธเธตเธจเธนเธเธขเนเธเธฅเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `เธกเธธเธกเน€เธญเธตเธขเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธญเธเธจเธฒ` }
        ];
      } else if (target === 'v') {
        result = Math.sqrt(r * g * Math.tan((theta * Math.PI) / 180));
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง', latex: 'v = \\sqrt{rg \\tan\\theta}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธ—เธตเนเน€เธซเธกเธฒเธฐเธชเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      } else {
        if (Math.tan((theta * Math.PI) / 180) === 0) throw new Error('tan(ฮธ) โ  0');
        result = (v * v) / (g * Math.tan((theta * Math.PI) / 180));
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฑเธจเธกเธต', latex: 'r = \\frac{v^2}{g \\tan\\theta}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธฃเธฑเธจเธกเธตเนเธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'rotational_kinetic_energy',
    name: 'Rotational Kinetic Energy',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเธเธฒเธฃเธซเธกเธธเธ',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'zap',
    grade: 'เธก.4',
    latex: 'KE_{rot} = \\frac{1}{2} I \\omega^2',
    description: 'เธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเธเธญเธเธงเธฑเธ•เธ–เธธเธ—เธตเนเธเธณเธฅเธฑเธเธซเธกเธธเธเธฃเธญเธเนเธเธ I เธเธทเธญเนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธเน€เธเธทเนเธญเธข ฯ เธเธทเธญเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเธกเธธเธก',
    variables: [
      { id: 'KE', symbol: 'KE', name: 'Rotational KE', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเธเธฒเธฃเธซเธกเธธเธ', unit: 'J', defaultValue: 25, min: 0, max: 1e9, step: 1 },
      { id: 'I', symbol: 'I', name: 'Moment of Inertia', nameTh: 'เนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธเน€เธเธทเนเธญเธข', unit: 'kgยทmยฒ', defaultValue: 2, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'omega', symbol: '\\omega', name: 'Angular Velocity', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเธกเธธเธก', unit: 'rad/s', defaultValue: 5, min: 0.001, max: 10000, step: 0.1 }
    ],
    solveTargets: ['KE', 'I', 'omega'],
    calculate: (inputs, target = 'KE') => {
      const { KE, I, omega } = inputs;
      let result, steps = [], unit = '';
      if (target === 'KE') {
        result = 0.5 * I * omega * omega;
        unit = 'J';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเธเธฒเธฃเธซเธกเธธเธ', latex: 'KE_{rot} = \\frac{1}{2} I \\omega^2', explanation: 'เธเธฃเธถเนเธเธซเธเธถเนเธเธเธญเธเนเธกเน€เธกเธเธ•เนเนเธฃเธเน€เธเธทเนเธญเธขเธเธนเธ“เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเธกเธธเธกเธเธณเธฅเธฑเธเธชเธญเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `KE_{rot} = ${result.toFixed(4)}\\,\\text{J}`, explanation: `เธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเธเธฒเธฃเธซเธกเธธเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธนเธฅ` }
        ];
      } else if (target === 'I') {
        if (omega === 0) throw new Error('ฯ โ  0');
        result = (2 * KE) / (omega * omega);
        unit = 'kgยทmยฒ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธเน€เธเธทเนเธญเธข', latex: 'I = \\frac{2 KE_{rot}}{\\omega^2}', explanation: 'เธเธนเธ“ 2 เนเธฅเนเธงเธซเธฒเธฃเธ”เนเธงเธข ฯยฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I = ${result.toFixed(4)}\\,\\text{kgยทm}^2`, explanation: `เนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธเน€เธเธทเนเธญเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kgยทmยฒ` }
        ];
      } else {
        if (I === 0) throw new Error('I โ  0');
        result = Math.sqrt((2 * KE) / I);
        unit = 'rad/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเธกเธธเธก', latex: '\\omega = \\sqrt{\\frac{2 KE_{rot}}{I}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\omega = ${result.toFixed(4)}\\,\\text{rad/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเธกเธธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} rad/s` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== PHYSICS ====================
  {
    id: 'spring_period',
    name: 'Spring Oscillation Period',
    nameTh: 'เธเธฒเธเธเธฒเธฃเธชเธฑเนเธเธเธญเธเธชเธเธฃเธดเธ',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'activity',
    grade: 'เธก.4',
    latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}',
    description: 'เธเธฒเธเธเธฒเธฃเธชเธฑเนเธเธเธญเธเธงเธฑเธ•เธ–เธธเธ—เธตเนเธ•เธดเธ”เธเธฑเธเธชเธเธฃเธดเธ m เธเธทเธญเธกเธงเธฅ k เธเธทเธญเธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ',
    variables: [
      { id: 'T', symbol: 'T', name: 'Period', nameTh: 'เธเธฒเธ', unit: 's', defaultValue: 1.269, min: 0.001, max: 100, step: 0.01 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ', unit: 'kg', defaultValue: 2, min: 0.001, max: 10000, step: 0.1 },
      { id: 'k', symbol: 'k', name: 'Spring Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ', unit: 'N/m', defaultValue: 50, min: 0.001, max: 1e6, step: 1 }
    ],
    solveTargets: ['T', 'm', 'k'],
    calculate: (inputs, target = 'T') => {
      const { T, m, k } = inputs;
      let result, steps = [], unit = '';
      if (target === 'T') {
        if (k <= 0) throw new Error('k เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = 2 * Math.PI * Math.sqrt(m / k);
        unit = 's';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธเธชเธเธฃเธดเธ', latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}', explanation: 'เธเธฒเธเนเธเธฃเธเธเธเธฑเธเธเธฑเธเธฃเธนเธเธ—เธตเนเธชเธญเธเธเธญเธ k' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T = ${result.toFixed(4)}\\,\\text{s}`, explanation: `เธเธฒเธเธเธฒเธฃเธชเธฑเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธงเธดเธเธฒเธ—เธต` }
        ];
      } else if (target === 'm') {
        result = (k * T * T) / (4 * Math.PI * Math.PI);
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{k T^2}{4\\pi^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธขเธเธเธณเธฅเธฑเธเธชเธญเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kg` }
        ];
      } else {
        if (T <= 0) throw new Error('T เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = (4 * Math.PI * Math.PI * m) / (T * T);
        unit = 'N/m';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ', latex: 'k = \\frac{4\\pi^2 m}{T^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `k = ${result.toFixed(4)}\\,\\text{N/m}`, explanation: `เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} N/m` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'flow_rate',
    name: 'Volume Flow Rate',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเนเธซเธฅเนเธเธเธเธฃเธดเธกเธฒเธ•เธฃ',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'droplet',
    grade: 'เธก.4',
    latex: 'Q = A \\cdot v',
    description: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเนเธซเธฅเนเธเธเธเธฃเธดเธกเธฒเธ•เธฃเธเธทเธญเธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”เธเธนเธ“เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธฒเธฃเนเธซเธฅเธเธญเธเธเธญเธเนเธซเธฅ',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Flow Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเนเธซเธฅ', unit: 'mยณ/s', defaultValue: 0.05, min: 0, max: 1e6, step: 0.001 },
      { id: 'A', symbol: 'A', name: 'Cross-section Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”', unit: 'mยฒ', defaultValue: 0.01, min: 0.0001, max: 1e6, step: 0.001 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธฒเธฃเนเธซเธฅ', unit: 'm/s', defaultValue: 5, min: 0, max: 10000, step: 0.1 }
    ],
    solveTargets: ['Q', 'A', 'v'],
    calculate: (inputs, target = 'Q') => {
      const { Q, A, v } = inputs;
      let result, steps = [], unit = '';
      if (target === 'Q') {
        result = A * v;
        unit = 'mยณ/s';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเนเธซเธฅ', latex: 'Q = A \\cdot v', explanation: 'เธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”เธเธนเธ“เธเธงเธฒเธกเน€เธฃเนเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `Q = ${result.toFixed(4)}\\,\\text{m}^3/\\text{s}`, explanation: `เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเนเธซเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยณ/s` }
        ];
      } else if (target === 'A') {
        if (v === 0) throw new Error('v โ  0');
        result = Q / v;
        unit = 'mยฒ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”', latex: 'A = \\frac{Q}{v}', explanation: 'เธขเนเธฒเธขเธเธงเธฒเธกเน€เธฃเนเธงเนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}\\,\\text{m}^2`, explanation: `เธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยฒ` }
        ];
      } else {
        if (A <= 0) throw new Error('A เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = Q / A;
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง', latex: 'v = \\frac{Q}{A}', explanation: 'เธขเนเธฒเธขเธเธทเนเธเธ—เธตเนเนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธฒเธฃเนเธซเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== WAVES ====================
  {
    id: 'intensity_inverse_square',
    name: 'Inverse Square Law',
    nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธฃเธฑเธจเธกเธตเธเธณเธฅเธฑเธเธชเธญเธเธเธเธเธฑเธ',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'sun',
    grade: 'เธก.4',
    latex: 'I_2 = I_1 \\cdot \\frac{r_1^2}{r_2^2}',
    description: 'เธเธงเธฒเธกเน€เธเนเธกเธเธญเธเธเธฅเธทเนเธเธฅเธ”เธฅเธเนเธเธฃเธเธเธเธฑเธเธเธฑเธเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธเธฃเธฐเธขเธฐเธซเนเธฒเธเธเธฒเธเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”',
    variables: [
      { id: 'I1', symbol: 'I_1', name: 'Intensity at rโ', nameTh: 'เธเธงเธฒเธกเน€เธเนเธก เธ“ เธฃเธฐเธขเธฐ rโ', unit: 'W/mยฒ', defaultValue: 100, min: 0, max: 1e9, step: 1 },
      { id: 'r1', symbol: 'r_1', name: 'Distance 1', nameTh: 'เธฃเธฐเธขเธฐเธ—เธตเน 1', unit: 'm', defaultValue: 2, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'r2', symbol: 'r_2', name: 'Distance 2', nameTh: 'เธฃเธฐเธขเธฐเธ—เธตเน 2', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'I2', symbol: 'I_2', name: 'Intensity at rโ', nameTh: 'เธเธงเธฒเธกเน€เธเนเธก เธ“ เธฃเธฐเธขเธฐ rโ', unit: 'W/mยฒ', defaultValue: 16, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['I2', 'I1', 'r2'],
    calculate: (inputs, target = 'I2') => {
      const { I1, r1, r2, I2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'I2') {
        if (r2 === 0) throw new Error('rโ โ  0');
        result = I1 * (r1 * r1) / (r2 * r2);
        unit = 'W/mยฒ';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธเธฑเธเธเธณเธฅเธฑเธเธชเธญเธ', latex: 'I_2 = I_1 \\cdot \\frac{r_1^2}{r_2^2}', explanation: 'เธเธงเธฒเธกเน€เธเนเธกเนเธเธฃเธเธเธเธฑเธเธเธฑเธเธฃเธนเธเธ—เธตเนเธชเธญเธเธเธญเธเธฃเธฐเธขเธฐ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I_2 = ${result.toFixed(4)}\\,\\text{W/m}^2`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธ—เธตเนเธฃเธฐเธขเธฐ rโ เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} W/mยฒ` }
        ];
      } else if (target === 'I1') {
        if (r1 === 0) throw new Error('rโ โ  0');
        result = I2 * (r2 * r2) / (r1 * r1);
        unit = 'W/mยฒ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธเนเธกเธ—เธตเน rโ', latex: 'I_1 = I_2 \\cdot \\frac{r_2^2}{r_1^2}', explanation: 'เธเธฅเธฑเธเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I_1 = ${result.toFixed(4)}\\,\\text{W/m}^2`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธ—เธตเน rโ เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} W/mยฒ` }
        ];
      } else {
        if (I2 <= 0) throw new Error('Iโ เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = r1 * Math.sqrt(I1 / I2);
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐ', latex: 'r_2 = r_1 \\sqrt{\\frac{I_1}{I_2}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r_2 = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธฃเธฐเธขเธฐ rโ เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'doppler_effect_observed',
    name: 'Doppler Effect (Observer)',
    nameTh: 'เธเธฅเธ”เธญเธเน€เธเธฅเธญเธฃเน (เธเธนเนเธเธฑเธ)',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'radio',
    grade: 'เธก.4',
    latex: "f' = f \\cdot \\frac{v \\pm v_o}{v \\mp v_s}",
    description: 'เธเธงเธฒเธกเธ–เธตเนเธ—เธตเนเธเธนเนเธเธฑเธเนเธ”เนเธขเธดเธเน€เธกเธทเนเธญเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”เน€เธชเธตเธขเธเนเธฅเธฐเธเธนเนเธเธฑเธเน€เธเธฅเธทเนเธญเธเธ—เธตเนเน€เธเนเธฒเธซเธฃเธทเธญเธญเธญเธเธเธฒเธเธเธฑเธ',
    variables: [
      { id: 'fPrime', symbol: "f'", name: 'Observed Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธ—เธตเนเนเธ”เนเธขเธดเธ', unit: 'Hz', defaultValue: 440, min: 0, max: 1e6, step: 1 },
      { id: 'f', symbol: 'f', name: 'Source Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”', unit: 'Hz', defaultValue: 440, min: 0.01, max: 1e6, step: 1 },
      { id: 'v', symbol: 'v', name: 'Sound Speed', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเน€เธชเธตเธขเธ', unit: 'm/s', defaultValue: 340, min: 1, max: 1000, step: 1 },
      { id: 'vs', symbol: 'v_s', name: 'Source Speed', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”', unit: 'm/s', defaultValue: 30, min: 0, max: 500, step: 1 },
      { id: 'vo', symbol: 'v_o', name: 'Observer Speed', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธนเนเธเธฑเธ', unit: 'm/s', defaultValue: 0, min: 0, max: 500, step: 1 }
    ],
    solveTargets: ['fPrime'],
    calculate: (inputs, target = 'fPrime') => {
      const { f, v, vs, vo } = inputs;
      let result, steps = [], unit = '';
      if (vs >= v) throw new Error('เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”เธ•เนเธญเธเธเนเธญเธขเธเธงเนเธฒเธเธงเธฒเธกเน€เธฃเนเธงเน€เธชเธตเธขเธ');
      result = f * (v + vo) / (v - vs);
      unit = 'Hz';
      steps = [
        { title: 'เธชเธนเธ•เธฃเธ”เธญเธเน€เธเธฅเธญเธฃเน (เน€เธเนเธฒเธซเธฒเธเธฑเธ)', latex: "f' = f \\cdot \\frac{v + v_o}{v - v_s}", explanation: 'เธเธนเนเธเธฑเธเน€เธเธฅเธทเนเธญเธเน€เธเนเธฒ + เนเธฅเธฐเนเธซเธฅเนเธเธเธณเน€เธเธดเธ”เน€เธเธฅเธทเนเธญเธเน€เธเนเธฒ โ’' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f' = ${result.toFixed(4)}\\,\\text{Hz}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเธ—เธตเนเนเธ”เนเธขเธดเธเธชเธนเธเธเธถเนเธเน€เธเนเธ ${result.toFixed(4)} Hz` }
      ];
      return { result, unit, steps };
    }
  },

  // ==================== ELECTRICITY ====================
  {
    id: 'voltage_divider',
    name: 'Voltage Divider',
    nameTh: 'เธ•เธฑเธงเนเธเนเธเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ',
    icon: 'cpu',
    grade: 'เธก.4',
    latex: 'V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}',
    description: 'เธงเธเธเธฃเนเธเนเธเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเธเธฒเธuessistor เธชเธญเธเธ•เธฑเธงเธ•เนเธญเธเธฑเธเน€เธเนเธเธชเธฒเธขเนเธ',
    variables: [
      { id: 'Vout', symbol: 'V_{out}', name: 'Output Voltage', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเธเธฒเธญเธญเธ', unit: 'V', defaultValue: 4, min: 0, max: 1e6, step: 0.1 },
      { id: 'Vin', symbol: 'V_{in}', name: 'Input Voltage', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเธเธฒเน€เธเนเธฒ', unit: 'V', defaultValue: 12, min: 0, max: 1e6, step: 0.1 },
      { id: 'R1', symbol: 'R_1', name: 'Resistor 1', nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธ Rโ', unit: 'ฮฉ', defaultValue: 2000, min: 0.001, max: 1e8, step: 100 },
      { id: 'R2', symbol: 'R_2', name: 'Resistor 2', nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธ Rโ', unit: 'ฮฉ', defaultValue: 1000, min: 0.001, max: 1e8, step: 100 }
    ],
    solveTargets: ['Vout', 'Vin', 'R1', 'R2'],
    calculate: (inputs, target = 'Vout') => {
      const { Vout, Vin, R1, R2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'Vout') {
        if (R1 + R2 === 0) throw new Error('Rโ + Rโ โ  0');
        result = Vin * R2 / (R1 + R2);
        unit = 'V';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธ•เธฑเธงเนเธเนเธเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน', latex: 'V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}', explanation: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธเธญเธ Rโ เธ•เนเธญเธเธฅเธฃเธงเธกเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V_{out} = ${result.toFixed(4)}\\,\\text{V}`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเธเธฒเธญเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} V` }
        ];
      } else if (target === 'Vin') {
        if (R2 === 0) throw new Error('Rโ โ  0');
        result = Vout * (R1 + R2) / R2;
        unit = 'V';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ Vin', latex: 'V_{in} = V_{out} \\cdot \\frac{R_1 + R_2}{R_2}', explanation: 'เธเธฅเธฑเธเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V_{in} = ${result.toFixed(4)}\\,\\text{V}`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเธเธฒเน€เธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} V` }
        ];
      } else if (target === 'R1') {
        if (Vout === 0) throw new Error('Vout โ  0');
        result = R2 * (Vin - Vout) / Vout;
        unit = 'ฮฉ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ Rโ', latex: 'R_1 = R_2 \\cdot \\frac{V_{in} - V_{out}}{V_{out}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_1 = ${result.toFixed(4)}\\,\\Omega`, explanation: `Rโ เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ฮฉ` }
        ];
      } else {
        if (Vin === Vout) throw new Error('Vin โ  Vout เน€เธเธทเนเธญเธซเธฒ Rโ');
        result = R1 * Vout / (Vin - Vout);
        unit = 'ฮฉ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ Rโ', latex: 'R_2 = \\frac{R_1 \\cdot V_{out}}{V_{in} - V_{out}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_2 = ${result.toFixed(4)}\\,\\Omega`, explanation: `Rโ เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ฮฉ` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'power_resistance',
    name: 'Electrical Power (IยฒR)',
    nameTh: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ (IยฒR)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ',
    icon: 'zap',
    grade: 'เธก.4',
    latex: 'P = I^2 \\cdot R',
    description: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒเธ—เธตเนเธชเธนเธเน€เธเธฅเนเธฒเน€เธเนเธเธเธงเธฒเธกเธฃเนเธญเธเนเธเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธ (เธเธเธเธนเธฅ)',
    variables: [
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ', unit: 'W', defaultValue: 200, min: 0, max: 1e8, step: 1 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'เธเธฃเธฐเนเธชเนเธเธเนเธฒ', unit: 'A', defaultValue: 10, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'R', symbol: 'R', name: 'Resistance', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ', unit: 'ฮฉ', defaultValue: 2, min: 0.001, max: 1e8, step: 0.1 }
    ],
    solveTargets: ['P', 'I', 'R'],
    calculate: (inputs, target = 'P') => {
      const { P, I, R } = inputs;
      let result, steps = [], unit = '';
      if (target === 'P') {
        result = I * I * R;
        unit = 'W';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธณเธฅเธฑเธเนเธเธเนเธฒ', latex: 'P = I^2 R', explanation: 'เธเธฃเธฐเนเธชเธเธณเธฅเธฑเธเธชเธญเธเธเธนเธ“เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(4)}\\,\\text{W}`, explanation: `เธเธณเธฅเธฑเธเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธงเธฑเธ•เธ•เน` }
        ];
      } else if (target === 'I') {
        if (R <= 0) throw new Error('R > 0');
        result = Math.sqrt(P / R);
        unit = 'A';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธฐเนเธช', latex: 'I = \\sqrt{\\frac{P}{R}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I = ${result.toFixed(4)}\\,\\text{A}`, explanation: `เธเธฃเธฐเนเธชเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} A` }
        ];
      } else {
        if (I === 0) throw new Error('I โ  0');
        result = P / (I * I);
        unit = 'ฮฉ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ', latex: 'R = \\frac{P}{I^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R = ${result.toFixed(4)}\\,\\Omega`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ฮฉ` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'resistance_temperature',
    name: 'Resistance vs Temperature',
    nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเนเธเธฃเธเธฑเธเธญเธธเธ“เธซเธ เธนเธกเธด',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ',
    icon: 'thermometer',
    grade: 'เธก.4',
    latex: 'R_T = R_0 \\left(1 + \\alpha \\cdot \\Delta T\\right)',
    description: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธเธญเธเนเธฅเธซเธฐเน€เธเธฅเธตเนเธขเธเธ•เธฒเธกเธญเธธเธ“เธซเธ เธนเธกเธด ฮฑ เธเธทเธญเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธญเธธเธ“เธซเธ เธนเธกเธด',
    variables: [
      { id: 'RT', symbol: 'R_T', name: 'Resistance at T', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ เธ“ เธญเธธเธ“เธซเธ เธนเธกเธด T', unit: 'ฮฉ', defaultValue: 22, min: 0, max: 1e8, step: 0.1 },
      { id: 'R0', symbol: 'R_0', name: 'Resistance at Tโ€', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ เธ“ เธ—เธตเนเธญเนเธฒเธเธญเธดเธ', unit: 'ฮฉ', defaultValue: 20, min: 0.001, max: 1e8, step: 0.1 },
      { id: 'alpha', symbol: '\\alpha', name: 'Temp Coefficient', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธญเธธเธ“เธซเธ เธนเธกเธด', unit: '/ยฐC', defaultValue: 0.005, min: -1e-4, max: 1e-2, step: 0.0001 },
      { id: 'dT', symbol: '\\Delta T', name: 'Temperature Change', nameTh: 'เธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเธญเธธเธ“เธซเธ เธนเธกเธด', unit: 'ยฐC', defaultValue: 20, min: -1000, max: 1000, step: 1 }
    ],
    solveTargets: ['RT', 'dT'],
    calculate: (inputs, target = 'RT') => {
      const { RT, R0, alpha, dT } = inputs;
      let result, steps = [], unit = '';
      if (target === 'RT') {
        result = R0 * (1 + alpha * dT);
        unit = 'ฮฉ';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ-เธญเธธเธ“เธซเธ เธนเธกเธด', latex: 'R_T = R_0(1 + \\alpha \\Delta T)', explanation: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเน€เธเธฅเธตเนเธขเธเธ•เธฒเธกเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธญเธธเธ“เธซเธ เธนเธกเธด' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_T = ${result.toFixed(4)}\\,\\Omega`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ เธ“ เธญเธธเธ“เธซเธ เธนเธกเธดเนเธซเธกเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ฮฉ` }
        ];
      } else {
        if (R0 === 0 || alpha === 0) throw new Error('Rโ€ โ  0 เนเธฅเธฐ ฮฑ โ  0');
        result = (RT / R0 - 1) / alpha;
        unit = 'ยฐC';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธญเธธเธ“เธซเธ เธนเธกเธด', latex: '\\Delta T = \\frac{\\frac{R_T}{R_0} - 1}{\\alpha}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta T = ${result.toFixed(4)}^\\circ\\text{C}`, explanation: `เธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ยฐC` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== CHEMISTRY ====================
  {
    id: 'boyles_law',
    name: "Boyle's Law",
    nameTh: 'เธเธเธเธญเธเธเธญเธขเธฅเน',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'wind',
    grade: 'เธก.4',
    latex: 'P_1 V_1 = P_2 V_2',
    description: 'เธเธงเธฒเธกเธ”เธฑเธเธเธฑเธเธเธฃเธดเธกเธฒเธ•เธฃเธเธญเธเนเธเนเธชเธกเธตเธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเนเธเธเธเธเธเธฑเธ เธ“ เธญเธธเธ“เธซเธ เธนเธกเธดเธเธเธ—เธตเน',
    variables: [
      { id: 'P1', symbol: 'P_1', name: 'Initial Pressure', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธเน€เธฃเธดเนเธกเธ•เนเธ', unit: 'atm', defaultValue: 2, min: 0.001, max: 1e4, step: 0.1 },
      { id: 'V1', symbol: 'V_1', name: 'Initial Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธ', unit: 'L', defaultValue: 10, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'P2', symbol: 'P_2', name: 'Final Pressure', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธเธชเธธเธ”เธ—เนเธฒเธข', unit: 'atm', defaultValue: 4, min: 0.001, max: 1e4, step: 0.1 },
      { id: 'V2', symbol: 'V_2', name: 'Final Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธชเธธเธ”เธ—เนเธฒเธข', unit: 'L', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['V2', 'P2', 'P1'],
    calculate: (inputs, target = 'V2') => {
      const { P1, V1, P2, V2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'V2') {
        if (P2 === 0) throw new Error('Pโ โ  0');
        result = (P1 * V1) / P2;
        unit = 'L';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธญเธขเธฅเน', latex: 'P_1 V_1 = P_2 V_2 \\implies V_2 = \\frac{P_1 V_1}{P_2}', explanation: 'เธเธฃเธดเธกเธฒเธ•เธฃเนเธเธฃเธเธเธเธฑเธเธเธฑเธเธเธงเธฒเธกเธ”เธฑเธ เธ“ เธญเธธเธ“เธซเธ เธนเธกเธดเธเธเธ—เธตเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V_2 = ${result.toFixed(4)}\\,\\text{L}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธชเธธเธ”เธ—เนเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} L` }
        ];
      } else if (target === 'P2') {
        if (V2 === 0) throw new Error('Vโ โ  0');
        result = (P1 * V1) / V2;
        unit = 'atm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ”เธฑเธเธชเธธเธ”เธ—เนเธฒเธข', latex: 'P_2 = \\frac{P_1 V_1}{V_2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P_2 = ${result.toFixed(4)}\\,\\text{atm}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเธชเธธเธ”เธ—เนเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} atm` }
        ];
      } else {
        if (V1 === 0) throw new Error('Vโ โ  0');
        result = (P2 * V2) / V1;
        unit = 'atm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ”เธฑเธเน€เธฃเธดเนเธกเธ•เนเธ', latex: 'P_1 = \\frac{P_2 V_2}{V_1}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P_1 = ${result.toFixed(4)}\\,\\text{atm}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเน€เธฃเธดเนเธกเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} atm` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'charles_law',
    name: "Charles's Law",
    nameTh: 'เธเธเธเธญเธเธเธฒเธฃเนเธฅ',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'thermometer',
    grade: 'เธก.4',
    latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธเธญเธเนเธเนเธชเธกเธตเธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเนเธ”เธขเธ•เธฃเธเธเธฑเธเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธงเธดเธ เธ“ เธเธงเธฒเธกเธ”เธฑเธเธเธเธ—เธตเน',
    variables: [
      { id: 'V1', symbol: 'V_1', name: 'Initial Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธ', unit: 'L', defaultValue: 10, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'T1', symbol: 'T_1', name: 'Initial Temp (K)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธฃเธดเนเธกเธ•เนเธ (K)', unit: 'K', defaultValue: 300, min: 0.001, max: 1e6, step: 1 },
      { id: 'V2', symbol: 'V_2', name: 'Final Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธชเธธเธ”เธ—เนเธฒเธข', unit: 'L', defaultValue: 12, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'T2', symbol: 'T_2', name: 'Final Temp (K)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเธชเธธเธ”เธ—เนเธฒเธข (K)', unit: 'K', defaultValue: 360, min: 0.001, max: 1e6, step: 1 }
    ],
    solveTargets: ['V2', 'T2', 'T1'],
    calculate: (inputs, target = 'V2') => {
      const { V1, T1, V2, T2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'V2') {
        if (T1 === 0) throw new Error('Tโ โ  0');
        result = (V1 * T2) / T1;
        unit = 'L';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเนเธฅ', latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = \\frac{V_1 T_2}{T_1}', explanation: 'เธเธฃเธดเธกเธฒเธ•เธฃเนเธเธฃเธ•เธฃเธเธเธฑเธเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธงเธดเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V_2 = ${result.toFixed(4)}\\,\\text{L}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธชเธธเธ”เธ—เนเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} L` }
        ];
      } else if (target === 'T2') {
        if (V1 === 0) throw new Error('Vโ โ  0');
        result = (V2 * T1) / V1;
        unit = 'K';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธธเธ“เธซเธ เธนเธกเธดเธชเธธเธ”เธ—เนเธฒเธข', latex: 'T_2 = \\frac{V_2 T_1}{V_1}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T_2 = ${result.toFixed(4)}\\,\\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเธชเธธเธ”เธ—เนเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} K` }
        ];
      } else {
        if (V2 === 0) throw new Error('Vโ โ  0');
        result = (V1 * T2) / V2;
        unit = 'K';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธฃเธดเนเธกเธ•เนเธ', latex: 'T_1 = \\frac{V_1 T_2}{V_2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T_1 = ${result.toFixed(4)}\\,\\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธฃเธดเนเธกเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} K` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'avogadro_molar_volume',
    name: 'Molar Volume at STP',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเนเธกเธฅเธฒเธฃเน เธ“ STP',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'wind',
    grade: 'เธก.4',
    latex: 'V = n \\times 22.4\\,\\text{L/mol}',
    description: 'เนเธเนเธช 1 เนเธกเธฅ เธ“ เธชเธ เธฒเธงเธฐเธกเธฒเธ•เธฃเธเธฒเธ (STP: 0ยฐC, 1 atm) เธกเธตเธเธฃเธดเธกเธฒเธ•เธฃ 22.4 เธฅเธดเธ•เธฃ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'L', defaultValue: 44.8, min: 0, max: 1e8, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'เธเธณเธเธงเธเนเธกเธฅ', unit: 'mol', defaultValue: 2, min: 0, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['V', 'n'],
    calculate: (inputs, target = 'V') => {
      const { V, n } = inputs;
      const MOLAR_VOL = 22.4;
      let result, steps = [], unit = '';
      if (target === 'V') {
        result = n * MOLAR_VOL;
        unit = 'L';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฃเธดเธกเธฒเธ•เธฃเนเธกเธฅเธฒเธฃเน เธ“ STP', latex: `V = n \\times ${MOLAR_VOL}\\,\\text{L/mol}`, explanation: 'เธ“ 0ยฐC เนเธฅเธฐ 1 atm' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)}\\,\\text{L}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเนเธเนเธชเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธดเธ•เธฃ` }
        ];
      } else {
        if (MOLAR_VOL === 0) throw new Error('MOLAR_VOL โ  0');
        result = V / MOLAR_VOL;
        unit = 'mol';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธญเธฅ', latex: 'n = \\frac{V}{22.4}', explanation: 'เธขเนเธฒเธข 22.4 เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)}\\,\\text{mol}`, explanation: `เธเธณเธเธงเธเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mol` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== GEOMETRY ====================
  {
    id: 'herons_formula',
    name: "Heron's Formula",
    nameTh: 'เธชเธนเธ•เธฃเน€เธฎเธฃเธญเธ (เธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเธเธฒเธเธ”เนเธฒเธ)',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'box',
    grade: 'เธก.2',
    latex: 'A = \\sqrt{s(s-a)(s-b)(s-c)}',
    description: 'เธเธณเธเธงเธ“เธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเน€เธกเธทเนเธญเธ—เธฃเธฒเธเธเธงเธฒเธกเธขเธฒเธงเธ—เธฑเนเธ 3 เธ”เนเธฒเธ เนเธ”เธข s เธเธทเธญเธเธถเนเธเธฃเธญเธเธฃเธนเธ',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเน', unit: 'mยฒ', defaultValue: 6, min: 0, max: 1e12, step: 0.01 },
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'เธ”เนเธฒเธ a', unit: 'm', defaultValue: 3, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'เธ”เนเธฒเธ b', unit: 'm', defaultValue: 4, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Side c', nameTh: 'เธ”เนเธฒเธ c', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      const { a, b, c } = inputs;
      const s = (a + b + c) / 2;
      const val = s * (s - a) * (s - b) * (s - c);
      if (val < 0) throw new Error('เธเธงเธฒเธกเธขเธฒเธงเธ”เนเธฒเธเนเธกเนเธชเธฒเธกเธฒเธฃเธ–เน€เธเนเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเนเธ”เน (เนเธกเนเน€เธเนเธฒเน€เธเธทเนเธญเธเนเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธก)');
      const result = Math.sqrt(val);
      const steps = [
        { title: 'เธเธณเธเธงเธ“เธเธถเนเธเธฃเธญเธเธฃเธนเธ', latex: `s = \\frac{a+b+c}{2} = \\frac{${a}+${b}+${c}}{2} = ${s.toFixed(4)}`, explanation: 'เธเธถเนเธเธฃเธญเธเธฃเธนเธเธเธญเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธก' },
        { title: 'เธชเธนเธ•เธฃเน€เธฎเธฃเธญเธ', latex: 'A = \\sqrt{s(s-a)(s-b)(s-c)}', explanation: 'เนเธ—เธเธเนเธฒเนเธเธชเธนเธ•เธฃเน€เธฎเธฃเธญเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}\\,\\text{m}^2`, explanation: `เธเธทเนเธเธ—เธตเนเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธก.` }
      ];
      return { result, unit: 'mยฒ', steps };
    }
  },

  {
    id: 'area_rhombus',
    name: 'Area of Rhombus',
    nameTh: 'เธเธทเนเธเธ—เธตเนเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธเธเธกเธเธฑเธเธเธดเธ',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'box',
    grade: 'เธก.2',
    latex: 'A = \\frac{d_1 \\times d_2}{2}',
    description: 'เธเธทเนเธเธ—เธตเนเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธเธเธกเธเธฑเธเธเธดเธเน€เธ—เนเธฒเธเธฑเธเธเธฃเธถเนเธเธซเธเธถเนเธเธเธญเธเธเธฅเธเธนเธ“เน€เธชเนเธเธ—เนเธขเธเธกเธธเธกเธ—เธฑเนเธเธชเธญเธ',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเน', unit: 'mยฒ', defaultValue: 24, min: 0, max: 1e12, step: 0.1 },
      { id: 'd1', symbol: 'd_1', name: 'Diagonal 1', nameTh: 'เน€เธชเนเธเธ—เนเธขเธเธกเธธเธกเธ—เธตเน 1', unit: 'm', defaultValue: 6, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'd2', symbol: 'd_2', name: 'Diagonal 2', nameTh: 'เน€เธชเนเธเธ—เนเธขเธเธกเธธเธกเธ—เธตเน 2', unit: 'm', defaultValue: 8, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['A', 'd1', 'd2'],
    calculate: (inputs, target = 'A') => {
      const { A, d1, d2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'A') {
        result = (d1 * d2) / 2;
        unit = 'mยฒ';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธทเนเธเธ—เธตเนเธชเธตเนเน€เธซเธฅเธตเนเธขเธกเธเธเธกเธเธฑเธเธเธดเธ', latex: 'A = \\frac{d_1 \\cdot d_2}{2}', explanation: 'เธเธฅเธเธนเธ“เน€เธชเนเธเธ—เนเธขเธเธกเธธเธกเธซเธฒเธฃ 2' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)}\\,\\text{m}^2`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฃ.เธก.` }
        ];
      } else if (target === 'd1') {
        if (d2 === 0) throw new Error('dโ โ  0');
        result = (2 * A) / d2;
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธชเนเธเธ—เนเธขเธเธกเธธเธก', latex: 'd_1 = \\frac{2A}{d_2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `d_1 = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เน€เธชเนเธเธ—เนเธขเธเธกเธธเธกเธ—เธตเน 1 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m` }
        ];
      } else {
        if (d1 === 0) throw new Error('dโ โ  0');
        result = (2 * A) / d1;
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธชเนเธเธ—เนเธขเธเธกเธธเธก', latex: 'd_2 = \\frac{2A}{d_1}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `d_2 = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เน€เธชเนเธเธ—เนเธขเธเธกเธธเธกเธ—เธตเน 2 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'volume_frustum',
    name: 'Volume of Frustum (Cone)',
    nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธงเธขเธ•เธฑเธ”',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'box',
    grade: 'เธก.3',
    latex: 'V = \\frac{\\pi h}{3}\\left(R^2 + Rr + r^2\\right)',
    description: 'เธเธฃเธดเธกเธฒเธ•เธฃเธเธญเธเธ—เธฃเธเธเธฃเธงเธขเธ—เธตเนเธ–เธนเธเธ•เธฑเธ”เน€เธญเธฒเธเธฅเธฒเธเธญเธญเธ เน€เธเนเธเธฃเธนเธเธ—เธฃเธเธเธฃเธฐเธ–เธฒเธเธเธงเนเธณ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'mยณ', defaultValue: 326.73, min: 0, max: 1e12, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'R', symbol: 'R', name: 'Bottom Radius', nameTh: 'เธฃเธฑเธจเธกเธตเธ”เนเธฒเธเธฅเนเธฒเธ', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Top Radius', nameTh: 'เธฃเธฑเธจเธกเธตเธ”เนเธฒเธเธเธ', unit: 'm', defaultValue: 3, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['V'],
    calculate: (inputs) => {
      const { h, R, r } = inputs;
      const result = (Math.PI * h / 3) * (R * R + R * r + r * r);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธ—เธฃเธเธเธฃเธงเธขเธ•เธฑเธ”', latex: 'V = \\frac{\\pi h}{3}(R^2 + Rr + r^2)', explanation: 'R = เธฃเธฑเธจเธกเธตเธฅเนเธฒเธ, r = เธฃเธฑเธจเธกเธตเธเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V \\approx ${result.toFixed(4)}\\,\\text{m}^3`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธ—เธฃเธเธเธฃเธงเธขเธ•เธฑเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธ.เธก.` }
      ];
      return { result, unit: 'mยณ', steps };
    }
  },

  // ==================== STATISTICS ====================
  {
    id: 'variance_population',
    name: 'Population Variance',
    nameTh: 'เธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธเธเธญเธเธเธฃเธฐเธเธฒเธเธฃ',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'bar-chart',
    grade: 'เธก.5',
    latex: '\\sigma^2 = \\frac{\\sum(x_i - \\mu)^2}{N}',
    description: 'เธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธเธเธญเธเธเนเธญเธกเธนเธฅเธ—เธฑเนเธเธซเธกเธ”เนเธเธเธฃเธฐเธเธฒเธเธฃ ฮผ เธเธทเธญเธเนเธฒเน€เธเธฅเธตเนเธข N เธเธทเธญเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ',
    variables: [
      { id: 'variance', symbol: '\\sigma^2', name: 'Variance', nameTh: 'เธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธ', unit: '', defaultValue: 4, min: 0, max: 1e12, step: 0.01 },
      { id: 'mean', symbol: '\\mu', name: 'Mean', nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธข', unit: '', defaultValue: 10, min: -1e10, max: 1e10, step: 0.1 },
      { id: 'sumSqDiff', symbol: '\\sum(x_i-\\mu)^2', name: 'Sum of Squared Diff', nameTh: 'เธเธฅเธฃเธงเธกเธขเธเธเธณเธฅเธฑเธเธชเธญเธ', unit: '', defaultValue: 40, min: 0, max: 1e15, step: 1 },
      { id: 'N', symbol: 'N', name: 'Count', nameTh: 'เธเธณเธเธงเธเธเนเธญเธกเธนเธฅ', unit: '', defaultValue: 10, min: 1, max: 1e10, step: 1 }
    ],
    solveTargets: ['variance', 'N', 'sumSqDiff'],
    calculate: (inputs, target = 'variance') => {
      const { variance, mean, sumSqDiff, N } = inputs;
      let result, steps = [], unit = '';
      if (target === 'variance') {
        if (N === 0) throw new Error('N โ  0');
        result = sumSqDiff / N;
        unit = '';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธ', latex: '\\sigma^2 = \\frac{\\sum(x_i - \\mu)^2}{N}', explanation: 'เธเธฅเธฃเธงเธกเธขเธเธเธณเธฅเธฑเธเธชเธญเธเธซเธฒเธฃเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sigma^2 = ${result.toFixed(4)}`, explanation: `เธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'N') {
        if (variance === 0) throw new Error('ฯยฒ โ  0');
        result = sumSqDiff / variance;
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธเนเธญเธกเธนเธฅ', latex: 'N = \\frac{\\sum(x_i - \\mu)^2}{\\sigma^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธเธเนเธญเธกเธนเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else {
        if (N === 0) throw new Error('N โ  0');
        result = variance * N;
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธขเธญเธ”เธฃเธงเธกเธขเธเธเธณเธฅเธฑเธเธชเธญเธ', latex: '\\sum(x_i - \\mu)^2 = \\sigma^2 \\cdot N', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sum(x_i - \\mu)^2 = ${result.toFixed(4)}`, explanation: `เธเธฅเธฃเธงเธกเธขเธเธเธณเธฅเธฑเธเธชเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'expected_value',
    name: 'Expected Value',
    nameTh: 'เธเนเธฒเธเธฒเธ”เธซเธงเธฑเธ',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'bar-chart',
    grade: 'เธก.5',
    latex: 'E(X) = \\sum x_i \\cdot p_i',
    description: 'เธเนเธฒเธเธฒเธ”เธซเธงเธฑเธเธเธทเธญเธเนเธฒเน€เธเธฅเธตเนเธขเธ–เนเธงเธเธเนเธณเธซเธเธฑเธเธเธญเธเธเธฅเธฅเธฑเธเธเนเธ—เธธเธเธเธนเธ“เธ”เนเธงเธขเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเธเธญเธเธกเธฑเธ',
    variables: [
      { id: 'E', symbol: 'E(X)', name: 'Expected Value', nameTh: 'เธเนเธฒเธเธฒเธ”เธซเธงเธฑเธ', unit: '', defaultValue: 3.5, min: -1e10, max: 1e10, step: 0.1 },
      { id: 'sumProd', symbol: '\\sum x_i p_i', name: 'Sum of xยทp', nameTh: 'เธเธฅเธฃเธงเธก xยทp', unit: '', defaultValue: 21, min: -1e10, max: 1e10, step: 0.1 },
      { id: 'numTerms', symbol: 'n', name: 'Number of Terms', nameTh: 'เธเธณเธเธงเธเธเธเธเน', unit: '', defaultValue: 6, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['E', 'numTerms'],
    calculate: (inputs, target = 'E') => {
      const { E, sumProd, numTerms } = inputs;
      let result, steps = [], unit = '';
      if (target === 'E') {
        if (numTerms === 0) throw new Error('n โ  0');
        result = sumProd;
        unit = '';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเนเธฒเธเธฒเธ”เธซเธงเธฑเธ', latex: 'E(X) = \\sum_{i=1}^{n} x_i \\cdot p_i', explanation: 'เธเธฅเธฃเธงเธกเธเธญเธ x เธเธนเธ“เธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธเธ—เธธเธเธเธเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E(X) = ${result.toFixed(4)}`, explanation: `เธเนเธฒเธเธฒเธ”เธซเธงเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else {
        if (E === 0) throw new Error('E(X) โ  0');
        result = sumProd / E;
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธเธเธเน', latex: 'n \\approx \\frac{\\sum x_i p_i}{E(X)}', explanation: 'เธเธฃเธฐเธกเธฒเธ“เธเธณเธเธงเธเธเธฒเธเธขเธญเธ”เธฃเธงเธก' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n \\approx ${result.toFixed(0)}`, explanation: `เธเธณเธเธงเธเธเธเธเนเธเธฃเธฐเธกเธฒเธ“ ${result.toFixed(0)} เธเธเธเน` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'coefficient_of_variation',
    name: 'Coefficient of Variation',
    nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธ',
    category: 'statistics',
    categoryTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ',
    icon: 'bar-chart',
    grade: 'เธก.5',
    latex: 'CV = \\frac{\\sigma}{\\mu} \\times 100\\%',
    description: 'CV เธงเธฑเธ”เธเธงเธฒเธกเธเธฑเธเธเธงเธเธชเธฑเธกเธเธฑเธ—เธเนเธเธญเธเธเนเธญเธกเธนเธฅ เน€เธเธฃเธตเธขเธเน€เธ—เธตเธขเธเธฃเธฐเธซเธงเนเธฒเธเธเธธเธ”เธเนเธญเธกเธนเธฅเธ—เธตเนเธ•เนเธฒเธเธซเธเนเธงเธขเธเธฑเธ',
    variables: [
      { id: 'CV', symbol: 'CV', name: 'CV (%)', nameTh: 'เธเนเธฒ CV', unit: '%', defaultValue: 20, min: 0, max: 1e6, step: 0.1 },
      { id: 'sigma', symbol: '\\sigma', name: 'Standard Deviation', nameTh: 'เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธ', unit: '', defaultValue: 4, min: 0, max: 1e10, step: 0.1 },
      { id: 'mu', symbol: '\\mu', name: 'Mean', nameTh: 'เธเนเธฒเน€เธเธฅเธตเนเธข', unit: '', defaultValue: 20, min: -1e10, max: 1e10, step: 0.1 }
    ],
    solveTargets: ['CV', 'sigma', 'mu'],
    calculate: (inputs, target = 'CV') => {
      const { CV, sigma, mu } = inputs;
      let result, steps = [], unit = '';
      if (target === 'CV') {
        if (mu === 0) throw new Error('ฮผ โ  0');
        result = (sigma / Math.abs(mu)) * 100;
        unit = '%';
        steps = [
          { title: 'เธชเธนเธ•เธฃ CV', latex: 'CV = \\frac{\\sigma}{|\\mu|} \\times 100\\%', explanation: 'เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธเธซเธฒเธฃเธ”เนเธงเธขเธเนเธฒเน€เธเธฅเธตเนเธข absolut' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `CV = ${result.toFixed(4)}\\%`, explanation: `เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธงเธฒเธกเนเธเธฃเธเธฃเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}%` }
        ];
      } else if (target === 'sigma') {
        result = (CV / 100) * Math.abs(mu);
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ ฯ', latex: '\\sigma = \\frac{CV \\times |\\mu|}{100}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\sigma = ${result.toFixed(4)}`, explanation: `เธชเนเธงเธเน€เธเธตเนเธขเธเน€เธเธเธกเธฒเธ•เธฃเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else {
        if (CV === 0) throw new Error('CV โ  0');
        result = (sigma * 100) / CV;
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ ฮผ', latex: '|\\mu| = \\frac{\\sigma \\times 100}{CV}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\mu = \\pm${result.toFixed(4)}`, explanation: `เธเนเธฒเน€เธเธฅเธตเนเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== FINANCE ====================
  {
    id: 'doubling_time_rule72',
    name: 'Doubling Time (Rule of 72)',
    nameTh: 'เน€เธงเธฅเธฒเน€เธเธดเนเธกเน€เธเนเธ 2 เน€เธ—เนเธฒ (เธเธ 72)',
    category: 'finance',
    categoryTh: 'เธเธ“เธดเธ•เธจเธฒเธชเธ•เธฃเนเธเธฒเธฃเน€เธเธดเธ',
    icon: 'trending-up',
    grade: 'เธก.4',
    latex: 't = \\frac{72}{r}',
    description: 'เธเธฃเธฐเธกเธฒเธ“เน€เธงเธฅเธฒเธ—เธตเนเน€เธเธดเธเธเธฐเน€เธเธดเนเธกเน€เธเนเธ 2 เน€เธ—เนเธฒเธเธฒเธเธฃเนเธญเธขเธฅเธฐเธ•เนเธญเธเธต (เธเธ 72 เนเธเนเนเธ”เนเธ”เธตเธเธฑเธเธญเธฑเธ•เธฃเธฒเธฃเนเธญเธขเธฅเธฐ 1-20%)',
    variables: [
      { id: 't', symbol: 't', name: 'Years', nameTh: 'เธเธณเธเธงเธเธเธต', unit: 'เธเธต', defaultValue: 7.2, min: 0.01, max: 1000, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Rate (%)', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธข (%)', unit: '%', defaultValue: 10, min: 0.01, max: 100, step: 0.1 }
    ],
    solveTargets: ['t', 'r'],
    calculate: (inputs, target = 't') => {
      const { t, r } = inputs;
      let result, steps = [], unit = '';
      if (target === 't') {
        if (r === 0) throw new Error('r โ  0');
        result = 72 / r;
        unit = 'เธเธต';
        steps = [
          { title: 'เธเธ 72', latex: 't = \\frac{72}{r}', explanation: 'เธซเธฒเธฃ 72 เธ”เนเธงเธขเธญเธฑเธ•เธฃเธฒเธฃเนเธญเธขเธฅเธฐเธ•เนเธญเธเธต' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(4)}\\,\\text{เธเธต}`, explanation: `เน€เธเธดเธเธเธฐเน€เธเธดเนเธกเน€เธเนเธ 2 เน€เธ—เนเธฒเนเธ ${result.toFixed(4)} เธเธต` }
        ];
      } else {
        if (t === 0) throw new Error('t โ  0');
        result = 72 / t;
        unit = '%';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒ', latex: 'r = \\frac{72}{t}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)}\\%`, explanation: `เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ—เธตเนเธ•เนเธญเธเธเธฒเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}% เธ•เนเธญเธเธต` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'continuous_compound',
    name: 'Continuous Compound Interest',
    nameTh: 'เธ”เธญเธเน€เธเธตเนเธขเธ—เธเธ•เนเธเธ•เนเธญเน€เธเธทเนเธญเธ',
    category: 'finance',
    categoryTh: 'เธเธ“เธดเธ•เธจเธฒเธชเธ•เธฃเนเธเธฒเธฃเน€เธเธดเธ',
    icon: 'trending-up',
    grade: 'เธก.5',
    latex: 'A = P \\cdot e^{rt}',
    description: 'เธกเธนเธฅเธเนเธฒเน€เธเธดเธเน€เธกเธทเนเธญเธ—เธเธ•เนเธเนเธเธเธ•เนเธญเน€เธเธทเนเธญเธ (n โ’ โ) e โ 2.71828',
    variables: [
      { id: 'A', symbol: 'A', name: 'Final Amount', nameTh: 'เน€เธเธดเธเธฃเธงเธก', unit: 'เธฟ', defaultValue: 16487, min: 0, max: 1e15, step: 100 },
      { id: 'P', symbol: 'P', name: 'Principal', nameTh: 'เน€เธเธดเธเธ•เนเธ', unit: 'เธฟ', defaultValue: 10000, min: 1, max: 1e12, step: 100 },
      { id: 'r', symbol: 'r', name: 'Rate (decimal)', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธข (เธ—เธจเธเธดเธขเธก)', unit: '', defaultValue: 0.05, min: -1, max: 10, step: 0.001 },
      { id: 't', symbol: 't', name: 'Time (years)', nameTh: 'เน€เธงเธฅเธฒ (เธเธต)', unit: 'เธเธต', defaultValue: 10, min: 0.01, max: 100, step: 0.5 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      const { P, r, t } = inputs;
      const result = P * Math.exp(r * t);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเน€เธเธทเนเธญเธ', latex: 'A = P \\cdot e^{rt}', explanation: 'e โ 2.71828 (เธเนเธฒเธเธเธ—เธตเนเธเธญเธเธเธญเธขเน€เธเธญเธฃเน)' },
        { title: 'เธเธณเธเธงเธ“expectsponent', latex: `rt = ${r} \\times ${t} = ${(r * t).toFixed(4)}`, explanation: 'เธเธนเธ“เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฑเธเน€เธงเธฅเธฒ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\,\\text{เธเธฒเธ—}`, explanation: 'เธกเธนเธฅเธเนเธฒเน€เธเธดเธเธฃเธงเธกเธซเธฅเธฑเธเธ”เธญเธเน€เธเธตเนเธขเธ—เธเธ•เนเธเธ•เนเธญเน€เธเธทเนเธญเธ' }
      ];
      return { result, resultDisplay: `เธฟ${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, unit: 'เธเธฒเธ—', steps };
    }
  },

  // ==================== ECONOMICS ====================
  {
    id: 'real_interest_rate',
    name: 'Real Interest Rate',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฃเธดเธ',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'trending-up',
    grade: 'เธก.5',
    latex: 'r_{real} = r_{nominal} - i',
    description: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฒเธกเธเธฃเธฃเธกเธฅเธเธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ (้ญ fisher equation เนเธเธเธเนเธฒเธข)',
    variables: [
      { id: 'rReal', symbol: 'r_{real}', name: 'Real Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฃเธดเธ', unit: '%', defaultValue: 2, min: -100, max: 100, step: 0.1 },
      { id: 'rNominal', symbol: 'r_{nominal}', name: 'Nominal Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฒเธกเธเธฃเธฃเธก', unit: '%', defaultValue: 5, min: -100, max: 100, step: 0.1 },
      { id: 'i', symbol: 'i', name: 'Inflation Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ', unit: '%', defaultValue: 3, min: -100, max: 100, step: 0.1 }
    ],
    solveTargets: ['rReal', 'rNominal', 'i'],
    calculate: (inputs, target = 'rReal') => {
      const { rReal, rNominal, i } = inputs;
      let result, steps = [], unit = '';
      if (target === 'rReal') {
        result = rNominal - i;
        unit = '%';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฃเธดเธ', latex: 'r_{real} = r_{nominal} - i', explanation: 'เธซเธฑเธเน€เธเธดเธเน€เธเนเธญเธญเธญเธเธเธฒเธเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r_{real} = ${result.toFixed(4)}\\%`, explanation: `เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}%` }
        ];
      } else if (target === 'rNominal') {
        result = rReal + i;
        unit = '%';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฒเธกเธเธฃเธฃเธก', latex: 'r_{nominal} = r_{real} + i', explanation: 'เธเธงเธเน€เธเธดเธเน€เธเนเธญเธเธฅเธฑเธเน€เธเนเธฒเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r_{nominal} = ${result.toFixed(4)}\\%`, explanation: `เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธเธฒเธกเธเธฃเธฃเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}%` }
        ];
      } else {
        result = rNominal - rReal;
        unit = '%';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ', latex: 'i = r_{nominal} - r_{real}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `i = ${result.toFixed(4)}\\%`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}%` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'break_even_point',
    name: 'Break-Even Point',
    nameTh: 'เธเธธเธ”เธเธธเนเธกเธ—เธธเธ',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'target',
    grade: 'เธก.5',
    latex: 'BEP = \\frac{FC}{P - VC}',
    description: 'เธเธณเธเธงเธเธซเธเนเธงเธขเธ—เธตเนเธ•เนเธญเธเธเธฒเธขเน€เธเธทเนเธญเนเธซเนเธเนเธฒเนเธเนเธเนเธฒเธขเธฃเธงเธกเน€เธ—เนเธฒเธเธฑเธเธฃเธฒเธขเนเธ”เนเธฃเธงเธก (เนเธกเนเธเธฒเธ”เธ—เธธเธ เนเธกเนเธเธณเนเธฃ)',
    variables: [
      { id: 'BEP', symbol: 'BEP', name: 'Break-Even Units', nameTh: 'เธเธณเธเธงเธเธเธธเธ”เธเธธเนเธกเธ—เธธเธ', unit: 'เธซเธเนเธงเธข', defaultValue: 100, min: 0, max: 1e9, step: 1 },
      { id: 'FC', symbol: 'FC', name: 'Fixed Cost', nameTh: 'เธ•เนเธเธ—เธธเธเธเธเธ—เธตเน', unit: 'เธฟ', defaultValue: 50000, min: 0, max: 1e12, step: 100 },
      { id: 'P', symbol: 'P', name: 'Price per Unit', nameTh: 'เธฃเธฒเธเธฒเธ•เนเธญเธซเธเนเธงเธข', unit: 'เธฟ', defaultValue: 1000, min: 0.01, max: 1e8, step: 10 },
      { id: 'VC', symbol: 'VC', name: 'Variable Cost per Unit', nameTh: 'เธ•เนเธเธ—เธธเธเธเธฑเธเนเธเธฃเธ•เนเธญเธซเธเนเธงเธข', unit: 'เธฟ', defaultValue: 500, min: 0, max: 1e8, step: 10 }
    ],
    solveTargets: ['BEP', 'FC', 'P', 'VC'],
    calculate: (inputs, target = 'BEP') => {
      const { BEP, FC, P, VC } = inputs;
      let result, steps = [], unit = '';
      if (target === 'BEP') {
        if (P - VC === 0) throw new Error('เธฃเธฒเธเธฒเธเธฒเธขเธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒเธ•เนเธเธ—เธธเธเธเธฑเธเนเธเธฃ');
        result = FC / (P - VC);
        unit = 'เธซเธเนเธงเธข';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธธเธ”เธเธธเนเธกเธ—เธธเธ', latex: 'BEP = \\frac{FC}{P - VC}', explanation: 'เธ•เนเธเธ—เธธเธเธเธเธ—เธตเนเธซเธฒเธฃเธเธณเนเธฃเธเธฑเนเธเธ•เนเธเธ•เนเธญเธซเธเนเธงเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `BEP = ${result.toFixed(2)}\\,\\text{เธซเธเนเธงเธข}`, explanation: `เธ•เนเธญเธเธเธฒเธข ${result.toFixed(2)} เธซเธเนเธงเธขเน€เธเธทเนเธญเธเธธเธ”เธเธธเนเธกเธ—เธธเธ` }
        ];
      } else if (target === 'FC') {
        result = BEP * (P - VC);
        unit = 'เธฟ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ•เนเธเธ—เธธเธเธเธเธ—เธตเน', latex: 'FC = BEP \\times (P - VC)', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `FC = ${result.toLocaleString()}\\,\\text{เธเธฒเธ—}`, explanation: `เธ•เนเธเธ—เธธเธเธเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toLocaleString()} เธเธฒเธ—` }
        ];
      } else if (target === 'P') {
        if (BEP === 0) throw new Error('BEP โ  0');
        result = VC + FC / BEP;
        unit = 'เธฟ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฒเธเธฒเธเธฒเธข', latex: 'P = VC + \\frac{FC}{BEP}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(4)}\\,\\text{เธเธฒเธ—}`, explanation: `เธฃเธฒเธเธฒเธเธฒเธขเธ•เนเธญเธซเธเนเธงเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธฒเธ—` }
        ];
      } else {
        if (BEP === 0) throw new Error('BEP โ  0');
        result = P - FC / BEP;
        unit = 'เธฟ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธ•เนเธเธ—เธธเธเธเธฑเธเนเธเธฃ', latex: 'VC = P - \\frac{FC}{BEP}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `VC = ${result.toFixed(4)}\\,\\text{เธเธฒเธ—}`, explanation: `เธ•เนเธเธ—เธธเธเธเธฑเธเนเธเธฃเธ•เนเธญเธซเธเนเธงเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธฒเธ—` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== HEALTH ====================
  {
    id: 'calories_from_macros',
    name: 'Calories from Macronutrients',
    nameTh: 'เนเธเธฅเธญเธฃเธตเธเธฒเธเธชเธฒเธฃเธญเธฒเธซเธฒเธฃเธซเธฅเธฑเธ',
    category: 'health',
    categoryTh: 'เธชเธธเธเธ เธฒเธ',
    icon: 'heart',
    grade: 'เธก.4',
    latex: '\\text{Cal} = 4P + 4C + 9F',
    description: 'เธเธณเธเธงเธ“เนเธเธฅเธญเธฃเธตเธฃเธงเธกเธเธฒเธเธเธฃเธดเธกเธฒเธ“เนเธเธฃเธ•เธตเธ เธเธฒเธฃเนเนเธเนเธฎเน€เธ”เธฃเธ• เนเธฅเธฐเนเธเธกเธฑเธ (P = 4 Cal/g, C = 4 Cal/g, F = 9 Cal/g)',
    variables: [
      { id: 'cal', symbol: 'Cal', name: 'Total Calories', nameTh: 'เนเธเธฅเธญเธฃเธตเธฃเธงเธก', unit: 'Cal', defaultValue: 2270, min: 0, max: 1e7, step: 10 },
      { id: 'P', symbol: 'P', name: 'Protein (g)', nameTh: 'เนเธเธฃเธ•เธตเธ (เธเธฃเธฑเธก)', unit: 'g', defaultValue: 150, min: 0, max: 1e5, step: 1 },
      { id: 'C', symbol: 'C', name: 'Carbs (g)', nameTh: 'เธเธฒเธฃเนเนเธเนเธฎเน€เธ”เธฃเธ• (เธเธฃเธฑเธก)', unit: 'g', defaultValue: 250, min: 0, max: 1e5, step: 1 },
      { id: 'F', symbol: 'F', name: 'Fat (g)', nameTh: 'เนเธเธกเธฑเธ (เธเธฃเธฑเธก)', unit: 'g', defaultValue: 70, min: 0, max: 1e5, step: 1 }
    ],
    solveTargets: ['cal'],
    calculate: (inputs) => {
      const { P, C, F } = inputs;
      const result = 4 * P + 4 * C + 9 * F;
      const proteinCal = 4 * P;
      const carbCal = 4 * C;
      const fatCal = 9 * F;
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธณเธเธงเธ“เนเธเธฅเธญเธฃเธต', latex: '\\text{Cal} = 4P + 4C + 9F', explanation: 'เนเธเธฃเธ•เธตเธ/เธเธฒเธฃเนเธ 4 Cal/g, เนเธเธกเธฑเธ 9 Cal/g' },
        { title: 'เนเธขเธเธเธณเธเธงเธ“', latex: `4 \\times ${P} + 4 \\times ${C} + 9 \\times ${F} = ${proteinCal} + ${carbCal} + ${fatCal}`, explanation: 'เธเธณเธเธงเธ“เธเธฒเธเธชเธฒเธฃเธญเธฒเธซเธฒเธฃเนเธ•เนเธฅเธฐเธเธเธดเธ”' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{Total} = ${result}\\,\\text{Cal}`, explanation: `เนเธเธฅเธญเธฃเธตเธฃเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result} เนเธเธฅเธญเธฃเธต` }
      ];
      return { result, unit: 'Cal', steps };
    }
  },

  {
    id: 'target_heart_rate',
    name: 'Target Heart Rate Zone',
    nameTh: 'เนเธเธเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธซเธฑเธงเนเธเน€เธเนเธฒเธซเธกเธฒเธข',
    category: 'health',
    categoryTh: 'เธชเธธเธเธ เธฒเธ',
    icon: 'activity',
    grade: 'เธก.4',
    latex: 'THR = (HR_{max} - HR_{rest}) \\times \\%intensity + HR_{rest}',
    description: 'เธเธณเธเธงเธ“เนเธเธเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธซเธฑเธงเนเธเธชเธณเธซเธฃเธฑเธเธญเธญเธเธเธณเธฅเธฑเธเธเธฒเธข HR_max โ 220 โ’ เธญเธฒเธขเธธ',
    variables: [
      { id: 'THR', symbol: 'THR', name: 'Target HR', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเน€เธเนเธฒเธซเธกเธฒเธข', unit: 'bpm', defaultValue: 155, min: 40, max: 250, step: 1 },
      { id: 'age', symbol: 'age', name: 'Age', nameTh: 'เธญเธฒเธขเธธ', unit: 'เธเธต', defaultValue: 25, min: 10, max: 100, step: 1 },
      { id: 'restHR', symbol: 'HR_{rest}', name: 'Resting HR', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธเธฑเธ', unit: 'bpm', defaultValue: 60, min: 30, max: 120, step: 1 },
      { id: 'intensity', symbol: '\\%', name: 'Intensity', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ', unit: '%', defaultValue: 70, min: 30, max: 100, step: 5 }
    ],
    solveTargets: ['THR', 'age'],
    calculate: (inputs, target = 'THR') => {
      const { THR, age, restHR, intensity } = inputs;
      let result, steps = [], unit = '';
      if (target === 'THR') {
        const HRmax = 220 - age;
        const HRR = HRmax - restHR;
        result = HRR * (intensity / 100) + restHR;
        unit = 'bpm';
        steps = [
          { title: 'เธเธณเธเธงเธ“ HR_max', latex: `HR_{max} = 220 - ${age} = ${HRmax}`, explanation: 'เธชเธนเธ•เธฃเธเธฃเธฐเธกเธฒเธ“ HR_max เธเธฒเธเธญเธฒเธขเธธ' },
          { title: 'เธเธณเธเธงเธ“ HR Reserve', latex: `HRR = ${HRmax} - ${restHR} = ${HRR}`, explanation: 'เธเนเธงเธเธซเธฑเธงเนเธเธเธฑเธเธ–เธถเธเธชเธนเธเธชเธธเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `THR = ${HRR} \\times ${intensity}\\% + ${restHR} = ${result.toFixed(0)}\\,\\text{bpm}`, explanation: `เนเธเธเน€เธเนเธฒเธซเธกเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} bpm` }
        ];
      } else {
        if (intensity === 0) throw new Error('intensity โ  0');
        const HRmax = 220 - age;
        const HRR = (THR - restHR) / (intensity / 100);
        result = 220 - (HRR + restHR);
        unit = 'เธเธต';
        steps = [
          { title: 'เธเธฃเธฐเธกเธฒเธ“เธญเธฒเธขเธธเธเธฒเธ THR', latex: 'age \\approx 220 - HR_{max}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `age \\approx ${result.toFixed(0)}\\,\\text{เธเธต}`, explanation: `เธญเธฒเธขเธธเธเธฃเธฐเธกเธฒเธ“ ${result.toFixed(0)} เธเธต` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== TECHNOLOGY ====================
  {
    id: 'file_size_lines',
    name: 'Text File Size',
    nameTh: 'เธเธเธฒเธ”เนเธเธฅเนเธเนเธญเธเธงเธฒเธก',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'file-text',
    grade: 'เธก.2',
    latex: '\\text{Size (bytes)} = \\text{lines} \\times \\text{avgChars} \\times \\text{bytesPerChar}',
    description: 'เธเธณเธเธงเธ“เธเธเธฒเธ”เนเธเธฅเนเธเนเธญเธเธงเธฒเธกเธเธฒเธเธเธณเธเธงเธเธเธฃเธฃเธ—เธฑเธ” เธเธงเธฒเธกเธขเธฒเธงเน€เธเธฅเธตเนเธข เนเธฅเธฐเธเธณเธเธงเธเนเธเธ•เนเธ•เนเธญเธญเธฑเธเธเธฃเธฐ',
    variables: [
      { id: 'sizeBytes', symbol: 'S', name: 'Size (bytes)', nameTh: 'เธเธเธฒเธ” (เนเธเธ•เน)', unit: 'bytes', defaultValue: 10240, min: 0, max: 1e15, step: 1 },
      { id: 'lines', symbol: 'L', name: 'Lines', nameTh: 'เธเธณเธเธงเธเธเธฃเธฃเธ—เธฑเธ”', unit: '', defaultValue: 512, min: 0, max: 1e10, step: 1 },
      { id: 'avgChars', symbol: 'C', name: 'Avg chars/line', nameTh: 'เธญเธฑเธเธเธฃเธฐเน€เธเธฅเธตเนเธขเธ•เนเธญเธเธฃเธฃเธ—เธฑเธ”', unit: '', defaultValue: 10, min: 0, max: 10000, step: 1 },
      { id: 'bytesPerChar', symbol: 'B', name: 'Bytes/char', nameTh: 'เนเธเธ•เนเธ•เนเธญเธญเธฑเธเธเธฃเธฐ', unit: '', defaultValue: 2, min: 1, max: 4, step: 1 }
    ],
    solveTargets: ['sizeBytes', 'lines', 'avgChars'],
    calculate: (inputs, target = 'sizeBytes') => {
      const { sizeBytes, lines, avgChars, bytesPerChar } = inputs;
      let result, steps = [], unit = '';
      if (target === 'sizeBytes') {
        result = lines * avgChars * bytesPerChar;
        unit = 'bytes';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธฒเธ”เนเธเธฅเน', latex: 'S = L \\times C \\times B', explanation: 'เธเธณเธเธงเธเธเธฃเธฃเธ—เธฑเธ” ร— เธญเธฑเธเธเธฃเธฐเน€เธเธฅเธตเนเธข ร— เนเธเธ•เนเธ•เนเธญเธญเธฑเธเธเธฃเธฐ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `S = ${result.toLocaleString()}\\,\\text{bytes}`, explanation: `เธเธเธฒเธ”เนเธเธฅเนเน€เธ—เนเธฒเธเธฑเธ ${result.toLocaleString()} เนเธเธ•เน` }
        ];
      } else if (target === 'lines') {
        if (avgChars * bytesPerChar === 0) throw new Error('C ร— B โ  0');
        result = Math.ceil(sizeBytes / (avgChars * bytesPerChar));
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธเธฃเธฃเธ—เธฑเธ”', latex: 'L = \\lceil \\frac{S}{C \\times B} \\rceil', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธเธฑเธ”เธเธถเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `L = ${result.toLocaleString()}`, explanation: `เธเธณเธเธงเธเธเธฃเธฃเธ—เธฑเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toLocaleString()} เธเธฃเธฃเธ—เธฑเธ”` }
        ];
      } else {
        if (lines * bytesPerChar === 0) throw new Error('L ร— B โ  0');
        result = sizeBytes / (lines * bytesPerChar);
        unit = '';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธเธเธฃเธฐเน€เธเธฅเธตเนเธข', latex: 'C = \\frac{S}{L \\times B}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toFixed(4)}`, explanation: `เธญเธฑเธเธเธฃเธฐเน€เธเธฅเธตเนเธขเธ•เนเธญเธเธฃเธฃเธ—เธฑเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เธฑเธง` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'power_consumption_kwh',
    name: 'Energy Consumption (kWh)',
    nameTh: 'เธเธฒเธฃเนเธเนเธเธฅเธฑเธเธเธฒเธเนเธเธเนเธฒ (เธซเธเนเธงเธข)',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'zap',
    grade: 'เธก.2',
    latex: 'E = \\frac{W \\cdot h}{1000}',
    description: 'เธเธณเธเธงเธ“เธเธฒเธฃเนเธเนเนเธเธเนเธฒเน€เธเนเธเธซเธเนเธงเธข (เธเธดเนเธฅเธงเธฑเธ•เธ•เน-เธเธฑเนเธงเนเธกเธ) เธเธฒเธเธเธณเธฅเธฑเธเนเธเธเนเธฒเนเธฅเธฐเน€เธงเธฅเธฒเนเธเนเธเธฒเธ',
    variables: [
      { id: 'E', symbol: 'E', name: 'Energy (kWh)', nameTh: 'เธเธฅเธฑเธเธเธฒเธ (เธซเธเนเธงเธข)', unit: 'kWh', defaultValue: 0.6, min: 0, max: 1e6, step: 0.01 },
      { id: 'W', symbol: 'W', name: 'Power (W)', nameTh: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ (เธงเธฑเธ•เธ•เน)', unit: 'W', defaultValue: 60, min: 0, max: 1e7, step: 1 },
      { id: 'h', symbol: 'h', name: 'Hours', nameTh: 'เธเธฑเนเธงเนเธกเธเนเธเนเธเธฒเธ', unit: 'เธเธก.', defaultValue: 10, min: 0, max: 1e6, step: 0.5 }
    ],
    solveTargets: ['E', 'W', 'h'],
    calculate: (inputs, target = 'E') => {
      const { E, W, h } = inputs;
      let result, steps = [], unit = '';
      if (target === 'E') {
        result = (W * h) / 1000;
        unit = 'kWh';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธซเธเนเธงเธขเนเธเธเนเธฒ', latex: 'E = \\frac{W \\times h}{1000}', explanation: 'เธเธณเธฅเธฑเธเธเธนเธ“เน€เธงเธฅเธฒเธซเธฒเธฃ 1000 = 1 เธซเธเนเธงเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toFixed(4)}\\,\\text{kWh}`, explanation: `เธเธฒเธฃเนเธเนเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 'W') {
        if (h === 0) throw new Error('h โ  0');
        result = (E * 1000) / h;
        unit = 'W';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธฅเธฑเธเนเธเธเนเธฒ', latex: 'W = \\frac{E \\times 1000}{h}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `W = ${result.toFixed(4)}\\,\\text{W}`, explanation: `เธเธณเธฅเธฑเธเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธงเธฑเธ•เธ•เน` }
        ];
      } else {
        if (W === 0) throw new Error('W โ  0');
        result = (E * 1000) / W;
        unit = 'เธเธก.';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธงเธฅเธฒ', latex: 'h = \\frac{E \\times 1000}{W}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(4)}\\,\\text{เธเธก.}`, explanation: `เน€เธงเธฅเธฒเนเธเนเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธฑเนเธงเนเธกเธ` }
        ];
      }
      return { result, unit, steps };
    }
  }
];
