// @ts-nocheck

/**
 * Mechanics Formulas (เธเธดเธชเธดเธเธชเน: เธเธฅเธจเธฒเธชเธ•เธฃเน) - เธก.4
 */

export const MECHANICS_FORMULAS = [
  {
    id: 'final_velocity',
    name: 'Final Velocity (v = u + at)',
    nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธข (v = u + at)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'zap',
    grade: 'เธก.4',
    latex: 'v = u + at',
    description: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธขเธเธฒเธเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเนเธ”เนเธงเธขเธเธงเธฒเธกเน€เธฃเนเธเธเธเธ—เธตเน = เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ + (เธเธงเธฒเธกเน€เธฃเนเธ ร— เน€เธงเธฅเธฒ) เน€เธเนเธ เธฃเธ–เน€เธฃเนเธเธเธฒเธ 0 เธ–เธถเธ 20 m/s เนเธ 4 เธงเธดเธเธฒเธ—เธต',
    variables: [
      { id: 'v', symbol: 'v', name: 'Final Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธข (v)', unit: 'm/s', defaultValue: 20, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Initial Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ (u)', unit: 'm/s', defaultValue: 0, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธ (a)', unit: 'm/sยฒ', defaultValue: 5, min: -1e9, max: 1e9, step: 0.1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เน€เธงเธฅเธฒ (t)', unit: 's', defaultValue: 4, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['v', 'u', 'a', 't'],
    calculate: (inputs, target = 'v') => {
      let { v, u, a, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        result = u + a * t;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธข', latex: 'v = u + at', explanation: `u = ${u}, a = ${a}, t = ${t}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `v = ${u} + (${a} \\times ${t}) = ${u} + ${a * t}`, explanation: 'เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธเธเธงเธเธเธงเธฒเธกเน€เธฃเนเธเธเธนเธ“เน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'u') {
        result = v - a * t;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ', latex: 'u = v - at', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `u = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'a') {
        if (t === 0) throw new Error('เน€เธงเธฅเธฒ t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (v - u) / t;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธ', latex: 'a = \\frac{v - u}{t}', explanation: 'เธเธฅเธ•เนเธฒเธเธเธงเธฒเธกเน€เธฃเนเธงเธซเธฒเธฃเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/sยฒ` }
        ];
      } else if (target === 't') {
        if (a === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธ a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (v - u) / a;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเนเธเธ', latex: 't = \\frac{v - u}{a}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `เนเธเนเน€เธงเธฅเธฒ ${result.toFixed(2)} เธงเธดเธเธฒเธ—เธต` }
        ];
      }

      return { result, unit: target === 'a' ? 'm/sยฒ' : target === 't' ? 's' : 'm/s', steps };
    }
  },

  {
    id: 'velocity_squared',
    name: 'Velocity-Displacement (vยฒ = uยฒ + 2as)',
    nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธง-เธฃเธฐเธขเธฐเธ—เธฒเธ (vยฒ = uยฒ + 2as)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'zap',
    grade: 'เธก.4',
    latex: 'v^2 = u^2 + 2as',
    description: 'เธชเธฑเธกเธเธฑเธเธเนเธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธข เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ เธเธงเธฒเธกเน€เธฃเนเธ เนเธฅเธฐเธฃเธฐเธขเธฐเธ—เธฒเธเธ—เธตเนเน€เธเธฅเธทเนเธญเธเธ—เธตเนเนเธ”เน เนเธเนเน€เธกเธทเนเธญเนเธเธ—เธขเนเนเธกเนเนเธซเนเน€เธงเธฅเธฒ เน€เธเนเธ เธฃเธ–เน€เธเธฃเธเธเธฒเธ 20 m/s เธซเธขเธธเธ”เนเธ 40 m',
    variables: [
      { id: 'v', symbol: 'v', name: 'Final Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธข (v)', unit: 'm/s', defaultValue: 0, min: 0, max: 1e9, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Initial Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ (u)', unit: 'm/s', defaultValue: 20, min: 0, max: 1e9, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธ (a)', unit: 'm/sยฒ', defaultValue: -5, min: -1e9, max: 1e9, step: 0.1 },
      { id: 's', symbol: 's', name: 'Displacement', nameTh: 'เธฃเธฐเธขเธฐเธ—เธฒเธ (s)', unit: 'm', defaultValue: 40, min: -1e15, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['v', 'u', 'a', 's'],
    calculate: (inputs, target = 'v') => {
      let { v, u, a, s } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        const rad = u * u + 2 * a * s;
        if (rad < 0) throw new Error('เธเนเธฒเธ เธฒเธขเนเธ•เนเธฃเธฒเธเน€เธเนเธเธฅเธ เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธเธเธฑเธ');
        result = Math.sqrt(rad);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเน€เธฃเนเธง-เธฃเธฐเธขเธฐเธ—เธฒเธ', latex: 'v^2 = u^2 + 2as', explanation: `u = ${u}, a = ${a}, s = ${s}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `v^2 = ${u}^2 + 2(${a})(${s}) = ${rad.toFixed(2)}`, explanation: 'เธเธณเธเธงเธ“เธเนเธฒเธ เธฒเธขเนเธ•เนเธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'u') {
        const rad = v * v - 2 * a * s;
        if (rad < 0) throw new Error('เธเนเธฒเธ เธฒเธขเนเธ•เนเธฃเธฒเธเน€เธเนเธเธฅเธ เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธเธเธฑเธ');
        result = Math.sqrt(rad);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ', latex: 'u^2 = v^2 - 2as', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `u = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'a') {
        if (s === 0) throw new Error('เธฃเธฐเธขเธฐเธ—เธฒเธ s เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (v * v - u * u) / (2 * s);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธ', latex: 'a = \\frac{v^2 - u^2}{2s}', explanation: 'เธเธฅเธ•เนเธฒเธเธเธณเธฅเธฑเธเธชเธญเธเธเธงเธฒเธกเน€เธฃเนเธงเธซเธฒเธฃ 2 เน€เธ—เนเธฒเธฃเธฐเธขเธฐเธ—เธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `a = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/sยฒ` }
        ];
      } else if (target === 's') {
        if (a === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธ a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (v * v - u * u) / (2 * a);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฐเธขเธฐเธ—เธฒเธ', latex: 's = \\frac{v^2 - u^2}{2a}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `s = ${result.toFixed(2)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'a' ? 'm/sยฒ' : target === 's' ? 'm' : 'm/s', steps };
    }
  },

  {
    id: 'average_speed',
    name: 'Average Speed',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธฅเธตเนเธข',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'gauge',
    grade: 'เธก.4',
    latex: 'v = \\frac{s}{t}',
    description: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธฅเธตเนเธข = เธฃเธฐเธขเธฐเธ—เธฒเธ รท เน€เธงเธฅเธฒ เน€เธเนเธ เธงเธดเนเธ 100 เน€เธกเธ•เธฃเนเธ 20 เธงเธดเธเธฒเธ—เธต เธกเธตเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธฅเธตเนเธข 5 m/s',
    variables: [
      { id: 'v', symbol: 'v', name: 'Average Speed', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธฅเธตเนเธข', unit: 'm/s', defaultValue: 5, min: 0, max: 1e9, step: 0.1 },
      { id: 's', symbol: 's', name: 'Distance', nameTh: 'เธฃเธฐเธขเธฐเธ—เธฒเธ (s)', unit: 'm', defaultValue: 100, min: 0, max: 1e15, step: 0.1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เน€เธงเธฅเธฒ (t)', unit: 's', defaultValue: 20, min: 0.0000001, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['v', 's', 't'],
    calculate: (inputs, target = 'v') => {
      let { v, s, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        result = s / t;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธฅเธตเนเธข', latex: 'v = \\frac{s}{t}', explanation: 'เธฃเธฐเธขเธฐเธ—เธฒเธเธซเธฒเธฃเน€เธงเธฅเธฒ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `v = \\frac{${s}}{${t}}`, explanation: `s = ${s} m, t = ${t} s` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธฅเธตเนเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 's') {
        result = v * t;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฐเธขเธฐเธ—เธฒเธ', latex: 's = v \\cdot t', explanation: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธนเธ“เน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `s = ${result.toFixed(2)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 't') {
        if (v === 0) throw new Error('เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง v เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = s / v;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเนเธเธ', latex: 't = \\frac{s}{v}', explanation: 'เธฃเธฐเธขเธฐเธ—เธฒเธเธซเธฒเธฃเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `เนเธเนเน€เธงเธฅเธฒ ${result.toFixed(2)} เธงเธดเธเธฒเธ—เธต` }
        ];
      }

      return { result, unit: target === 's' ? 'm' : target === 't' ? 's' : 'm/s', steps };
    }
  },

  {
    id: 'weight_force',
    name: 'Weight (W = mg)',
    nameTh: 'เธเนเธณเธซเธเธฑเธ (W = mg)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'scaling',
    grade: 'เธก.1-4',
    latex: 'W = mg',
    description: 'เธเนเธณเธซเธเธฑเธเธเธทเธญเนเธฃเธเนเธเนเธกเธ–เนเธงเธเธ—เธตเนเธเธฃเธฐเธ—เธณเธ•เนเธญเธกเธงเธฅ = เธกเธงเธฅ ร— เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g โ 9.81 m/sยฒ เธเธเนเธฅเธ) เธเธ 70 เธเธ. เธซเธเธฑเธ 686.7 N',
    variables: [
      { id: 'W', symbol: 'W', name: 'Weight', nameTh: 'เธเนเธณเธซเธเธฑเธ (W)', unit: 'N', defaultValue: 686.7, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ (m)', unit: 'kg', defaultValue: 70, min: 0, max: 1e15, step: 0.1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g)', unit: 'm/sยฒ', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['W', 'm', 'g'],
    calculate: (inputs, target = 'W') => {
      let { W, m, g } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'W') {
        result = m * g;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเนเธณเธซเธเธฑเธ', latex: 'W = mg', explanation: `m = ${m} kg, g = ${g} m/sยฒ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `W = ${m} \\times ${g}`, explanation: 'เธกเธงเธฅเธเธนเธ“เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `W = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เธเนเธณเธซเธเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'm') {
        if (g === 0) throw new Error('g เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = W / g;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{W}{g}', explanation: 'เธเนเธณเธซเธเธฑเธเธซเธฒเธฃ g' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(2)} \\ \\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      } else if (target === 'g') {
        if (m === 0) throw new Error('เธกเธงเธฅ m เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = W / m;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ g', latex: 'g = \\frac{W}{m}', explanation: 'เธเนเธณเธซเธเธฑเธเธซเธฒเธฃเธกเธงเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `g = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/sยฒ` }
        ];
      }

      return { result, unit: target === 'm' ? 'kg' : target === 'g' ? 'm/sยฒ' : 'N', steps };
    }
  },

  {
    id: 'friction_force',
    name: 'Friction Force (f = ฮผN)',
    nameTh: 'เนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธ (f = ฮผN)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'grip',
    grade: 'เธก.4',
    latex: 'f = \\mu N',
    description: 'เนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธ = เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธ ร— เนเธฃเธเธเธเธดเธเธดเธฃเธดเธขเธฒเธ•เธฑเนเธเธเธฒเธ (N) เธเธถเนเธเนเธ”เธขเธเธเธ•เธดเน€เธ—เนเธฒเธเธฑเธเธเนเธณเธซเธเธฑเธเธเธเธเธทเนเธเธฃเธฒเธ เน€เธเนเธ เธเธฅเนเธญเธ 10 kg ฮผ=0.3',
    variables: [
      { id: 'f', symbol: 'f', name: 'Friction Force', nameTh: 'เนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธ (f)', unit: 'N', defaultValue: 29.43, min: 0, max: 1e12, step: 0.1 },
      { id: 'mu', symbol: '\\mu', name: 'Friction Coefficient', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธงเธฒเธกเน€เธชเธตเธขเธ”เธ—เธฒเธ (ฮผ)', unit: '', defaultValue: 0.3, min: 0, max: 100, step: 0.01 },
      { id: 'N', symbol: 'N', name: 'Normal Force', nameTh: 'เนเธฃเธเธเธเธดเธเธดเธฃเธดเธขเธฒเธ•เธฑเนเธเธเธฒเธ (N)', unit: 'N', defaultValue: 98.1, min: 0, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['f', 'mu', 'N'],
    calculate: (inputs, target = 'f') => {
      let { f, mu, N } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'f') {
        result = mu * N;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธ', latex: 'f = \\mu N', explanation: `ฮผ = ${mu}, N = ${N} N` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `f = ${mu} \\times ${N}`, explanation: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธนเธ“เนเธฃเธเธเธเธดเธเธดเธฃเธดเธขเธฒเธ•เธฑเนเธเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'mu') {
        if (N === 0) throw new Error('เนเธฃเธ N เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = f / N;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน', latex: '\\mu = \\frac{f}{N}', explanation: 'เนเธฃเธเน€เธชเธตเธขเธ”เธ—เธฒเธเธซเธฒเธฃเนเธฃเธเธ•เธฑเนเธเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\mu = ${result.toFixed(4)}`, explanation: `เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธงเธฒเธกเน€เธชเธตเธขเธ”เธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'N') {
        if (mu === 0) throw new Error('ฮผ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = f / mu;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒ N', latex: 'N = \\frac{f}{\\mu}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเธเธเธดเธเธดเธฃเธดเธขเธฒเธ•เธฑเนเธเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      }

      return { result, unit: target === 'mu' ? '' : 'N', steps };
    }
  },

  {
    id: 'hookes_law',
    name: "Hooke's Law (F = kx)",
    nameTh: 'เธเธเธเธญเธเธฎเธธเธ (F = kx)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'wrench',
    grade: 'เธก.4',
    latex: 'F = kx',
    description: 'เนเธฃเธเธ—เธตเนเธชเธเธฃเธดเธเธญเธญเธ = เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ ร— เธฃเธฐเธขเธฐเธขเธทเธ”/เธซเธ” เนเธเนเธเธฑเธเธชเธเธฃเธดเธเนเธเธขเนเธฒเธเธ—เธตเนเธขเธฑเธเนเธกเนเน€เธเธดเธเธเธตเธ”เธเธณเธเธฑเธ”เธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Spring Force', nameTh: 'เนเธฃเธเธชเธเธฃเธดเธ (F)', unit: 'N', defaultValue: 50, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'k', symbol: 'k', name: 'Spring Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ (k)', unit: 'N/m', defaultValue: 250, min: 0, max: 1e12, step: 0.1 },
      { id: 'x', symbol: 'x', name: 'Displacement', nameTh: 'เธฃเธฐเธขเธฐเธขเธทเธ”/เธซเธ” (x)', unit: 'm', defaultValue: 0.2, min: -1e9, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['F', 'k', 'x'],
    calculate: (inputs, target = 'F') => {
      let { F, k, x } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = k * x;
        steps = [
          { title: "เธเธเธเธญเธเธฎเธธเธ", latex: 'F = kx', explanation: `k = ${k} N/m, x = ${x} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `F = ${k} \\times ${x}`, explanation: 'เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธเธเธนเธ“เธฃเธฐเธขเธฐเธขเธทเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเธชเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'k') {
        if (x === 0) throw new Error('เธฃเธฐเธขเธฐเธขเธทเธ” x เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = F / x;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ', latex: 'k = \\frac{F}{x}', explanation: 'เนเธฃเธเธซเธฒเธฃเธฃเธฐเธขเธฐเธขเธทเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `k = ${result.toFixed(2)} \\ \\text{N/m}`, explanation: `เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} N/m` }
        ];
      } else if (target === 'x') {
        if (k === 0) throw new Error('k เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = F / k;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฐเธขเธฐเธขเธทเธ”', latex: 'x = \\frac{F}{k}', explanation: 'เนเธฃเธเธซเธฒเธฃเธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `x = ${result.toFixed(3)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธขเธทเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'k' ? 'N/m' : target === 'x' ? 'm' : 'N', steps };
    }
  },

  {
    id: 'torque',
    name: 'Torque (ฯ = rF sinฮธ)',
    nameTh: 'เนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธ / เธ—เธญเธฃเนเธ (ฯ = rF sinฮธ)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'refresh-ccw',
    grade: 'เธก.4',
    latex: '\\tau = rF \\sin\\theta',
    description: 'เนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธ = เนเธเธเนเธกเน€เธกเธเธ•เน ร— เนเธฃเธ ร— sin(เธกเธธเธกเธฃเธฐเธซเธงเนเธฒเธเนเธเธเธเธฑเธเนเธฃเธ) เนเธเนเน€เธเธดเธ”เธเธฃเธฐเธ•เธน เน€เธเนเธ เนเธฃเธ 20 N เนเธเธ 0.8 m เธ•เธฑเนเธเธเธฒเธ',
    variables: [
      { id: 'tau', symbol: '\\tau', name: 'Torque', nameTh: 'เนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธ (ฯ)', unit: 'Nยทm', defaultValue: 16, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Lever Arm', nameTh: 'เนเธเธเนเธกเน€เธกเธเธ•เน (r)', unit: 'm', defaultValue: 0.8, min: 0, max: 1e9, step: 0.01 },
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'เนเธฃเธ (F)', unit: 'N', defaultValue: 20, min: 0, max: 1e12, step: 0.1 },
      { id: 'theta', symbol: '\\theta', name: 'Angle (deg)', nameTh: 'เธกเธธเธกเธฃเธฐเธซเธงเนเธฒเธ r เธเธฑเธ F (เธญเธเธจเธฒ)', unit: 'ยฐ', defaultValue: 90, min: 0, max: 180, step: 1 }
    ],
    solveTargets: ['tau', 'r', 'F', 'theta'],
    calculate: (inputs, target = 'tau') => {
      let { tau, r, F, theta } = inputs;
      const rad = theta * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'tau') {
        result = r * F * Math.sin(rad);
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธ', latex: '\\tau = rF \\sin\\theta', explanation: `r = ${r} m, F = ${F} N, ฮธ = ${theta}ยฐ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\tau = ${r} \\times ${F} \\times \\sin(${theta}ยฐ) = ${r * F} \\times ${Math.sin(rad).toFixed(4)}`, explanation: `sin(${theta}ยฐ) = ${Math.sin(rad).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\tau = ${result.toFixed(2)} \\ \\text{Nยทm}`, explanation: `เนเธกเน€เธกเธเธ•เนเธเธญเธเนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธยทเน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'r') {
        const denom = F * Math.sin(rad);
        if (denom === 0) throw new Error('Fยทsinฮธ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = tau / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธเธเนเธกเน€เธกเธเธ•เน', latex: 'r = \\frac{\\tau}{F \\sin\\theta}', explanation: 'เธ—เธญเธฃเนเธเธซเธฒเธฃเธเธฅเธเธนเธ“เธเธญเธเนเธฃเธเนเธฅเธฐ sinฮธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(2)} \\ \\text{m}`, explanation: `เนเธเธเนเธกเน€เธกเธเธ•เนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'F') {
        const denom = r * Math.sin(rad);
        if (denom === 0) throw new Error('rยทsinฮธ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = tau / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธฃเธ', latex: 'F = \\frac{\\tau}{r \\sin\\theta}', explanation: 'เธ—เธญเธฃเนเธเธซเธฒเธฃเธเธฅเธเธนเธ“เธเธญเธเนเธเธเนเธฅเธฐ sinฮธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'theta') {
        const denom = r * F;
        if (denom === 0) throw new Error('rยทF เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const x = tau / denom;
        if (Math.abs(x) > 1) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (ฯ/(rF) เน€เธเธดเธ 1)');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก', latex: '\\sin\\theta = \\frac{\\tau}{rF}', explanation: 'เนเธเนเธเธฑเธเธเนเธเธฑเธเธญเธฒเธฃเนเธเนเธเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(1)}ยฐ`, explanation: `เธกเธธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธญเธเธจเธฒ (เธกเธตเธญเธตเธเธเนเธฒเธ—เธตเนเน€เธเนเธ 180ยฐ โ’ ${result.toFixed(1)}ยฐ)` }
        ];
      }

      return { result, unit: target === 'theta' ? 'ยฐ' : target === 'r' ? 'm' : target === 'F' ? 'N' : 'Nยทm', steps };
    }
  },

  {
    id: 'lever_balance',
    name: 'Lever Balance (Fโdโ = Fโdโ)',
    nameTh: 'เธชเธกเธ”เธธเธฅเธเธฒเธ (Fโdโ = Fโdโ)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'scales',
    grade: 'เธก.2-4',
    latex: 'F_1 d_1 = F_2 d_2',
    description: 'เธเธฒเธเธซเธกเธธเธเธฃเธญเธเธเธธเธ”เธซเธกเธธเธเธเธฐเธชเธกเธ”เธธเธฅเน€เธกเธทเนเธญ เนเธกเน€เธกเธเธ•เนเธ—เธงเธเน€เธเนเธกเธเธฒเธฌเธดเธเธฒ = เนเธกเน€เธกเธเธ•เนเธ•เธฒเธกเน€เธเนเธกเธเธฒเธฌเธดเธเธฒ เนเธเนเนเธเน€เธเธฃเธทเนเธญเธเธเธฑเนเธเนเธฅเธฐเธเธฒเธเธเธฑเธ”',
    variables: [
      { id: 'F1', symbol: 'F_1', name: 'Force 1', nameTh: 'เนเธฃเธเธ—เธตเน 1 (Fโ)', unit: 'N', defaultValue: 30, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'd1', symbol: 'd_1', name: 'Arm 1', nameTh: 'เนเธเธเธ—เธตเน 1 (dโ)', unit: 'm', defaultValue: 0.4, min: 0, max: 1e9, step: 0.01 },
      { id: 'F2', symbol: 'F_2', name: 'Force 2', nameTh: 'เนเธฃเธเธ—เธตเน 2 (Fโ)', unit: 'N', defaultValue: 12, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'd2', symbol: 'd_2', name: 'Arm 2', nameTh: 'เนเธเธเธ—เธตเน 2 (dโ)', unit: 'm', defaultValue: 1, min: 0, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['F1', 'd1', 'F2', 'd2'],
    calculate: (inputs, target = 'F2') => {
      let { F1, d1, F2, d2 } = inputs;
      let steps = [];
      let result = 0;

      const buildSteps = (solvar, latexExpr, val) => [
        { title: 'เธซเธฅเธฑเธเธชเธกเธ”เธธเธฅเธเธญเธเธเธฒเธ', latex: 'F_1 d_1 = F_2 d_2', explanation: 'เนเธกเน€เธกเธเธ•เนเธชเธญเธเธเนเธฒเธเธ•เนเธญเธเน€เธ—เนเธฒเธเธฑเธ' },
        { title: 'เนเธ—เธเธเนเธฒ', latex: latexExpr, explanation: `เธเธฅเธเธนเธ“เธเธฑเนเธเธ•เธฃเธเธเนเธฒเธก = ${val.toFixed(2)}` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `${solvar} = ${val.toFixed(2)}`, explanation: `เธเนเธฒ${solvar.replace('_', '').toUpperCase()} เน€เธ—เนเธฒเธเธฑเธ ${val.toFixed(2)}` }
      ];

      if (target === 'F2') {
        if (d2 === 0) throw new Error('เนเธเธ dโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (F1 * d1) / d2;
        steps = buildSteps('F_2', `F_2 = \\frac{${F1} \\times ${d1}}{${d2}}`, result);
      } else if (target === 'F1') {
        if (d1 === 0) throw new Error('เนเธเธ dโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (F2 * d2) / d1;
        steps = buildSteps('F_1', `F_1 = \\frac{${F2} \\times ${d2}}{${d1}}`, result);
      } else if (target === 'd1') {
        if (F1 === 0) throw new Error('เนเธฃเธ Fโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (F2 * d2) / F1;
        steps = buildSteps('d_1', `d_1 = \\frac{${F2} \\times ${d2}}{${F1}}`, result);
      } else if (target === 'd2') {
        if (F2 === 0) throw new Error('เนเธฃเธ Fโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (F1 * d1) / F2;
        steps = buildSteps('d_2', `d_2 = \\frac{${F1} \\times ${d1}}{${F2}}`, result);
      }

      return { result, unit: target.startsWith('d') ? 'm' : 'N', steps };
    }
  },

  {
    id: 'impulse',
    name: 'Impulse (I = Fฮ”t)',
    nameTh: 'เนเธกเน€เธกเธเธ•เธฑเธก (เนเธฃเธเธ”เธฅ I = Fฮ”t = ฮ”p)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'zap',
    grade: 'เธก.4',
    latex: 'I = F \\Delta t = \\Delta p',
    description: 'เนเธฃเธเธ”เธฅ = เนเธฃเธ ร— เธฃเธฐเธขเธฐเน€เธงเธฅเธฒ = เนเธกเน€เธกเธเธ•เธฑเธกเธ—เธตเนเน€เธเธฅเธตเนเธขเธเนเธ เน€เธเนเธ เธ•เธตเธฅเธนเธเน€เธ—เธเธเธดเธชเธ”เนเธงเธขเนเธฃเธ 80 N เธเธฒเธ 0.05 s เนเธ”เนเนเธฃเธเธ”เธฅ 4 Nยทs',
    variables: [
      { id: 'I', symbol: 'I', name: 'Impulse', nameTh: 'เนเธฃเธเธ”เธฅ (I)', unit: 'Nยทs', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'เนเธฃเธ (F)', unit: 'N', defaultValue: 80, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'dt', symbol: '\\Delta t', name: 'Time Interval', nameTh: 'เธเนเธงเธเน€เธงเธฅเธฒ (ฮ”t)', unit: 's', defaultValue: 0.05, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['I', 'F', 'dt'],
    calculate: (inputs, target = 'I') => {
      let { I, F, dt } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'I') {
        result = F * dt;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธฃเธเธ”เธฅ', latex: 'I = F \\Delta t', explanation: `F = ${F} N, ฮ”t = ${dt} s` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `I = ${F} \\times ${dt}`, explanation: 'เนเธฃเธเธเธนเธ“เธเนเธงเธเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I = ${result.toFixed(2)} \\ \\text{Nยทs}`, explanation: `เนเธฃเธเธ”เธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} Nยทs (เน€เธ—เนเธฒเธเธฑเธเนเธกเน€เธกเธเธ•เธฑเธกเธ—เธตเนเน€เธเธฅเธตเนเธขเธเนเธ)` }
        ];
      } else if (target === 'F') {
        result = I / dt;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธฃเธ', latex: 'F = \\frac{I}{\\Delta t}', explanation: 'เนเธฃเธเธ”เธฅเธซเธฒเธฃเธเนเธงเธเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'dt') {
        if (F === 0) throw new Error('เนเธฃเธ F เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = I / F;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเนเธเธเน€เธงเธฅเธฒ', latex: '\\Delta t = \\frac{I}{F}', explanation: 'เนเธฃเธเธ”เธฅเธซเธฒเธฃเนเธฃเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta t = ${result.toFixed(4)} \\ \\text{s}`, explanation: `เธเนเธงเธเน€เธงเธฅเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธงเธดเธเธฒเธ—เธต` }
        ];
      }

      return { result, unit: target === 'F' ? 'N' : target === 'dt' ? 's' : 'Nยทs', steps };
    }
  },

  {
    id: 'pendulum_period',
    name: 'Pendulum Period (T = 2ฯ€โ(L/g))',
    nameTh: 'เธเธฒเธเธเธญเธเธฅเธนเธเธ•เธธเนเธก (T = 2ฯ€โ(L/g))',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'clock',
    grade: 'เธก.4',
    latex: 'T = 2\\pi \\sqrt{\\frac{L}{g}}',
    description: 'เธเธฒเธเธเธฒเธฃเนเธเธงเนเธเธเธญเธเธฅเธนเธเธ•เธธเนเธกเธญเธขเนเธฒเธเธเนเธฒเธข เธเธถเนเธเธเธฑเธเธเธงเธฒเธกเธขเธฒเธงเน€เธเธทเธญเธ (L) เนเธฅเธฐ g เน€เธ—เนเธฒเธเธฑเนเธ เนเธกเนเธเธถเนเธเธเธฑเธเธกเธงเธฅเธซเธฃเธทเธญเธกเธธเธกเธ—เธตเนเนเธเธงเนเธเน€เธฅเนเธเน',
    variables: [
      { id: 'T', symbol: 'T', name: 'Period', nameTh: 'เธเธฒเธเธเธฒเธฃเนเธเธงเนเธ (T)', unit: 's', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'L', symbol: 'L', name: 'Pendulum Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเน€เธเธทเธญเธ (L)', unit: 'm', defaultValue: 0.994, min: 0.0001, max: 1e7, step: 0.01 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g)', unit: 'm/sยฒ', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['T', 'L', 'g'],
    calculate: (inputs, target = 'T') => {
      let { T, L, g } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'T') {
        result = 2 * Math.PI * Math.sqrt(L / g);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธเธฅเธนเธเธ•เธธเนเธก', latex: 'T = 2\\pi \\sqrt{\\frac{L}{g}}', explanation: `L = ${L} m, g = ${g} m/sยฒ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `T = 2\\pi \\sqrt{\\frac{${L}}{${g}}}`, explanation: `โ(L/g) = ${Math.sqrt(L / g).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T = ${result.toFixed(3)} \\ \\text{s}`, explanation: `เธเธฒเธเธเธฒเธฃเนเธเธงเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธงเธดเธเธฒเธ—เธต` }
        ];
      } else if (target === 'L') {
        result = g * Math.pow(T / (2 * Math.PI), 2);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธขเธฒเธงเน€เธเธทเธญเธ', latex: 'L = g\\left(\\frac{T}{2\\pi}\\right)^2', explanation: `T = ${T} s, g = ${g}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `L = ${result.toFixed(3)} \\ \\text{m}`, explanation: `เธเธงเธฒเธกเธขเธฒเธงเน€เธเธทเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'g') {
        if (T === 0) throw new Error('เธเธฒเธ T เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = L * Math.pow(2 * Math.PI / T, 2);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ g', latex: 'g = L\\left(\\frac{2\\pi}{T}\\right)^2', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `g = ${result.toFixed(3)} \\ \\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} m/sยฒ` }
        ];
      }

      return { result, unit: target === 'L' ? 'm' : target === 'g' ? 'm/sยฒ' : 's', steps };
    }
  },


  {
    id: 'gravitational_pe',
    name: 'Gravitational Potential Energy',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเนเธเนเธกเธ–เนเธงเธ',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'arrow-up',
    grade: 'เธก.4',
    latex: 'PE = mgh',
    description: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเนเธเนเธกเธ–เนเธงเธ = เธกเธงเธฅยทเธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธยทเธเธงเธฒเธกเธชเธนเธ เน€เธเนเธ m=5 kg, h=10 m เนเธ”เน 490.5 เธเธนเธฅ',
    variables: [
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ (m)', unit: 'kg', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g)', unit: 'm/sยฒ', defaultValue: 9.81, min: 0.0001, max: 100, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ (h)', unit: 'm', defaultValue: 10, min: 0, max: 1e7, step: 0.1 },
      { id: 'PE', symbol: 'PE', name: 'Potential Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเน', unit: 'J', defaultValue: 490.5, min: 0, max: 1e18, step: 1 }
    ],
    solveTargets: ['PE', 'm', 'g', 'h'],
    calculate: (inputs, target = 'PE') => {
      const { m, g, h, PE } = inputs;
      let result, steps;
      if (target === 'PE') {
        result = m * g * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'PE = mgh', explanation: `m = ${m} kg, g = ${g} m/sยฒ, h = ${h} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `PE = ${m} \\times ${g} \\times ${h}`, explanation: 'เนเธ—เธเธเนเธฒเธ—เธฑเนเธเธชเธฒเธกเธ•เธฑเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `PE = ${result.toFixed(2)} \\ \\text{J}`, explanation: `เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธนเธฅ` }
        ];
      } else if (target === 'm') {
        if (g === 0 || h === 0) throw new Error('g เนเธฅเธฐ h เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = PE / (g * h);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ m', latex: 'm = \\frac{PE}{gh}', explanation: `PE = ${PE} J, g = ${g}, h = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = \\frac{${PE}}{${g} \\times ${h}} = ${result.toFixed(3)} \\ \\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} kg` }
        ];
      } else if (target === 'g') {
        if (m === 0 || h === 0) throw new Error('m เนเธฅเธฐ h เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = PE / (m * h);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ g', latex: 'g = \\frac{PE}{mh}', explanation: `PE = ${PE} J, m = ${m}, h = ${h}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `g = \\frac{${PE}}{${m} \\times ${h}} = ${result.toFixed(3)} \\ \\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} m/sยฒ` }
        ];
      } else {
        if (m === 0 || g === 0) throw new Error('m เนเธฅเธฐ g เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = PE / (m * g);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ h', latex: 'h = \\frac{PE}{mg}', explanation: `PE = ${PE} J, m = ${m}, g = ${g}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = \\frac{${PE}}{${m} \\times ${g}} = ${result.toFixed(3)} \\ \\text{m}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} m` }
        ];
      }
      return { result, unit: target === 'PE' ? 'J' : target === 'm' ? 'kg' : target === 'g' ? 'm/sยฒ' : 'm', steps };
    }
  },

  {
    id: 'spring_energy',
    name: 'Spring Potential Energy',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเธชเธเธฃเธดเธ',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'activity',
    grade: 'เธก.5',
    latex: 'E = \\frac{1}{2}kx^2',
    description: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเธขเธทเธ”เธซเธขเธธเนเธ = ยฝยทเธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ(k)ยทเธฃเธฐเธขเธฐเธขเธทเธ”ยฒ(xยฒ) เน€เธเนเธ k=200 N/m, x=0.3 m เนเธ”เน 9 เธเธนเธฅ',
    variables: [
      { id: 'k', symbol: 'k', name: 'Spring Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ (k)', unit: 'N/m', defaultValue: 200, min: 0.0001, max: 1e9, step: 1 },
      { id: 'x', symbol: 'x', name: 'Displacement', nameTh: 'เธฃเธฐเธขเธฐเธขเธทเธ”/เธซเธ” (x)', unit: 'm', defaultValue: 0.3, min: 0, max: 1e6, step: 0.01 },
      { id: 'E', symbol: 'E', name: 'Spring Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเธชเธเธฃเธดเธ', unit: 'J', defaultValue: 9, min: 0, max: 1e18, step: 0.1 }
    ],
    solveTargets: ['E', 'k', 'x'],
    calculate: (inputs, target = 'E') => {
      const { k, x, E } = inputs;
      let result, steps;
      if (target === 'E') {
        result = 0.5 * k * x * x;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'E = \\frac{1}{2}kx^2', explanation: `k = ${k} N/m, x = ${x} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `E = \\frac{1}{2} \\times ${k} \\times ${x}^2`, explanation: 'เนเธ—เธเธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธเนเธฅเธฐเธฃเธฐเธขเธฐเธขเธทเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toFixed(3)} \\ \\text{J}`, explanation: `เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเธชเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธเธนเธฅ` }
        ];
      } else if (target === 'k') {
        if (x === 0) throw new Error('เธฃเธฐเธขเธฐ x เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (2 * E) / (x * x);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ k', latex: 'k = \\frac{2E}{x^2}', explanation: `E = ${E} J, x = ${x} m` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `k = \\frac{2 \\times ${E}}{${x}^2} = ${result.toFixed(3)} \\ \\text{N/m}`, explanation: `เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} N/m` }
        ];
      } else {
        if (k === 0) throw new Error('เธเนเธฒเธเธเธ—เธตเนเธชเธเธฃเธดเธ k เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt((2 * E) / k);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ x', latex: 'x = \\sqrt{\\frac{2E}{k}}', explanation: `E = ${E} J, k = ${k} N/m` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `x = \\sqrt{\\frac{2 \\times ${E}}{${k}}} = ${result.toFixed(3)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธขเธทเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} m` }
        ];
      }
      return { result, unit: target === 'E' ? 'J' : target === 'k' ? 'N/m' : 'm', steps };
    }
  },

  {
    id: 'mechanical_power',
    name: 'Mechanical Power',
    nameTh: 'เธเธณเธฅเธฑเธเธเธฅ',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'cpu',
    grade: 'เธก.4',
    latex: 'P = \\frac{W}{t}',
    description: 'เธเธณเธฅเธฑเธ = เธเธฒเธ(W)/เน€เธงเธฅเธฒ(t) เน€เธเนเธ เธเธฒเธ 500 เธเธนเธฅ เนเธ 10 เธงเธดเธเธฒเธ—เธต เนเธ”เนเธเธณเธฅเธฑเธ 50 เธงเธฑเธ•เธ•เน',
    variables: [
      { id: 'W', symbol: 'W', name: 'Work', nameTh: 'เธเธฒเธ (W)', unit: 'J', defaultValue: 500, min: 0, max: 1e15, step: 1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เน€เธงเธฅเธฒ (t)', unit: 's', defaultValue: 10, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'เธเธณเธฅเธฑเธ (P)', unit: 'W', defaultValue: 50, min: 0, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['P', 'W', 't'],
    calculate: (inputs, target = 'P') => {
      const { W, t, P } = inputs;
      let result, steps;
      if (target === 'P') {
        result = W / t;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'P = \\frac{W}{t}', explanation: `W = ${W} J, t = ${t} s` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `P = \\frac{${W}}{${t}}`, explanation: 'เธเธฒเธเธซเธฒเธฃเน€เธงเธฅเธฒเธ—เธตเนเนเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(3)} \\ \\text{W}`, explanation: `เธเธณเธฅเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธงเธฑเธ•เธ•เน` }
        ];
      } else if (target === 'W') {
        result = P * t;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ W', latex: 'W = P \\times t', explanation: `P = ${P} W, t = ${t} s` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `W = ${P} \\times ${t} = ${result.toFixed(3)} \\ \\text{J}`, explanation: `เธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธเธนเธฅ` }
        ];
      } else {
        if (P === 0) throw new Error('เธเธณเธฅเธฑเธ P เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = W / P;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ t', latex: 't = \\frac{W}{P}', explanation: `W = ${W} J, P = ${P} W` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = \\frac{${W}}{${P}} = ${result.toFixed(3)} \\ \\text{s}`, explanation: `เน€เธงเธฅเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธงเธดเธเธฒเธ—เธต` }
        ];
      }
      return { result, unit: target === 'P' ? 'W' : target === 'W' ? 'J' : 's', steps };
    }
  },


];