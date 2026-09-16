// @ts-nocheck

/**
 * Electricity & Magnetism Formulas (เธเธดเธชเธดเธเธชเน: เนเธเธเนเธฒ เนเธกเนเน€เธซเธฅเนเธ) - เธก.3 - เธก.6
 */

export const ELECTRICITY_FORMULAS = [
  {
    id: 'power_voltage_current',
    name: 'Electric Power (P = VI)',
    nameTh: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ (P = VI)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'zap',
    grade: 'เธก.3-5',
    latex: 'P = VI',
    description: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ = เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน ร— เธเธฃเธฐเนเธช เน€เธเนเธ เน€เธ•เธฒเธฃเธตเธ” 220 V เนเธเนเธเธฃเธฐเนเธช 10 A เธกเธตเธเธณเธฅเธฑเธ 2,200 เธงเธฑเธ•เธ•เน',
    variables: [
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ (P)', unit: 'W', defaultValue: 2200, min: 0, max: 1e12, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Voltage', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน (V)', unit: 'V', defaultValue: 220, min: 0, max: 1e9, step: 0.1 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'เธเธฃเธฐเนเธชเนเธเธเนเธฒ (I)', unit: 'A', defaultValue: 10, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['P', 'V', 'I'],
    calculate: (inputs, target = 'P') => {
      let { P, V, I } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = V * I;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธณเธฅเธฑเธเนเธเธเนเธฒ', latex: 'P = VI', explanation: `V = ${V} V, I = ${I} A` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `P = ${V} \\times ${I}`, explanation: 'เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเธเธนเธ“เธเธฃเธฐเนเธช' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(2)} \\ \\text{W}`, explanation: `เธเธณเธฅเธฑเธเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธงเธฑเธ•เธ•เน` }
        ];
      } else if (target === 'V') {
        if (I === 0) throw new Error('เธเธฃเธฐเนเธช I เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = P / I;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน', latex: 'V = \\frac{P}{I}', explanation: 'เธเธณเธฅเธฑเธเธซเธฒเธฃเธเธฃเธฐเนเธช' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(2)} \\ \\text{V}`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธงเธฅเธ•เน` }
        ];
      } else if (target === 'I') {
        if (V === 0) throw new Error('เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน V เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = P / V;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธฐเนเธช', latex: 'I = \\frac{P}{V}', explanation: 'เธเธณเธฅเธฑเธเธซเธฒเธฃเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I = ${result.toFixed(2)} \\ \\text{A}`, explanation: `เธเธฃเธฐเนเธชเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธกเนเธเธฃเน` }
        ];
      }

      return { result, unit: target === 'P' ? 'W' : target === 'V' ? 'V' : 'A', steps };
    }
  },

  {
    id: 'electrical_energy',
    name: 'Electrical Energy (Pt)',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเนเธเธเนเธฒ (E = Pt)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'plug-zap',
    grade: 'เธก.3-5',
    latex: 'E = P \\cdot t',
    description: 'เธเธฅเธฑเธเธเธฒเธเนเธเธเนเธฒเธ—เธตเนเนเธเน = เธเธณเธฅเธฑเธเนเธเธเนเธฒ ร— เน€เธงเธฅเธฒ เน€เธเนเธ เธซเธฅเธญเธ” 60 W เน€เธเธดเธ” 5 เธเธฑเนเธงเนเธกเธ เนเธเนเธเธฅเธฑเธเธเธฒเธ 300 Wh = 0.3 เธซเธเนเธงเธข',
    variables: [
      { id: 'E', symbol: 'E', name: 'Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเนเธเธเนเธฒ (E)', unit: 'Wh', defaultValue: 300, min: 0, max: 1e15, step: 1 },
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'เธเธณเธฅเธฑเธเนเธเธเนเธฒ (P)', unit: 'W', defaultValue: 60, min: 0, max: 1e12, step: 0.1 },
      { id: 't', symbol: 't', name: 'Time (hours)', nameTh: 'เน€เธงเธฅเธฒ (เธเธฑเนเธงเนเธกเธ)', unit: 'เธเธก.', defaultValue: 5, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['E', 'P', 't'],
    calculate: (inputs, target = 'E') => {
      let { E, P, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'E') {
        result = P * t;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธฑเธเธเธฒเธเนเธเธเนเธฒ', latex: 'E = P \\cdot t', explanation: `P = ${P} W, t = ${t} เธเธก.` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `E = ${P} \\times ${t}`, explanation: 'เธเธณเธฅเธฑเธเธเธนเธ“เน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toFixed(2)} \\ \\text{Wh} \\; (${(result / 1000).toFixed(3)} \\ \\text{เธซเธเนเธงเธข})`, explanation: `เนเธเนเธเธฅเธฑเธเธเธฒเธ ${(result / 1000).toFixed(3)} เธซเธเนเธงเธข (kWh)` }
        ];
      } else if (target === 'P') {
        if (t === 0) throw new Error('เน€เธงเธฅเธฒ t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = E / t;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธฅเธฑเธเนเธเธเนเธฒ', latex: 'P = \\frac{E}{t}', explanation: 'เธเธฅเธฑเธเธเธฒเธเธซเธฒเธฃเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(2)} \\ \\text{W}`, explanation: `เธเธณเธฅเธฑเธเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธงเธฑเธ•เธ•เน` }
        ];
      } else if (target === 't') {
        if (P === 0) throw new Error('เธเธณเธฅเธฑเธ P เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = E / P;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเนเธเธเธเธฑเนเธงเนเธกเธ', latex: 't = \\frac{E}{P}', explanation: 'เธเธฅเธฑเธเธเธฒเธเธซเธฒเธฃเธเธณเธฅเธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(2)} \\ \\text{เธเธก.}`, explanation: `เนเธเนเน€เธงเธฅเธฒ ${result.toFixed(2)} เธเธฑเนเธงเนเธกเธ` }
        ];
      }

      return { result, unit: target === 'E' ? 'Wh' : target === 'P' ? 'W' : 'เธเธก.', steps };
    }
  },

  {
    id: 'resistor_series',
    name: 'Resistors in Series (R = Rโ+Rโ+โ€ฆ)',
    nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ•เนเธญเธญเธเธธเธเธฃเธก',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'plug',
    grade: 'เธก.3-5',
    latex: 'R_{total} = R_1 + R_2 + \\ldots',
    description: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธกเธเธญเธเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเนเธ•เนเธญเธญเธเธธเธเธฃเธก = เธเธฅเธฃเธงเธกเธ—เธฑเนเธเธซเธกเธ” เน€เธเนเธ เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธ 4ฮฉ + 6ฮฉ = 10ฮฉ',
    variables: [
      { id: 'rt', symbol: 'R_{total}', name: 'Total Resistance', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธก (R)', unit: 'ฮฉ', defaultValue: 10, min: 0, max: 1e12, step: 0.1 },
      { id: 'R1', symbol: 'R_1', name: 'Resistor 1', nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 1', unit: 'ฮฉ', defaultValue: 4, min: 0, max: 1e12, step: 0.1 },
      { id: 'R2', symbol: 'R_2', name: 'Resistor 2', nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 2', unit: 'ฮฉ', defaultValue: 6, min: 0, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['rt', 'R1', 'R2'],
    calculate: (inputs, target = 'rt') => {
      let { rt, R1, R2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'rt') {
        result = R1 + R2;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธญเธเธธเธเธฃเธก', latex: 'R_{total} = R_1 + R_2', explanation: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเนเธเธญเธเธธเธเธฃเธกเธเธงเธเธเธฑเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `R_{total} = ${R1} + ${R2}`, explanation: 'เธเธฃเธฐเนเธชเนเธซเธฅเธเนเธฒเธเธ•เธฑเธงเน€เธ”เธตเธขเธงเธเธฑเธเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_{total} = ${result.toFixed(2)} \\ \\Omega`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธซเนเธก` }
        ];
      } else if (target === 'R1') {
        result = rt - R2;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 1', latex: 'R_1 = R_{total} - R_2', explanation: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธกเธฅเธเธ•เธฑเธงเธ—เธตเนเธ—เธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_1 = ${result.toFixed(2)} \\ \\Omega`, explanation: `เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 1 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธซเนเธก` }
        ];
      } else if (target === 'R2') {
        result = rt - R1;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 2', latex: 'R_2 = R_{total} - R_1', explanation: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธกเธฅเธเธ•เธฑเธงเธ—เธตเนเธ—เธฃเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_2 = ${result.toFixed(2)} \\ \\Omega`, explanation: `เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 2 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธซเนเธก` }
        ];
      }

      return { result, unit: 'ฮฉ', steps };
    }
  },

  {
    id: 'resistor_parallel',
    name: 'Resistors in Parallel (1/R = 1/Rโ+1/Rโ)',
    nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ•เนเธญเธเธเธฒเธ',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'plug',
    grade: 'เธก.3-5',
    latex: '\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2}',
    description: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธกเธเธญเธเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเนเธ•เนเธญเธเธเธฒเธ = 1/(1/Rโ+1/Rโ) เธกเธตเธเนเธฒเธเนเธญเธขเธเธงเนเธฒเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ•เธฑเธงเธ—เธตเนเน€เธฅเนเธเธ—เธตเนเธชเธธเธ”เน€เธชเธกเธญ',
    variables: [
      { id: 'rt', symbol: 'R_{total}', name: 'Total Resistance', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธก (R)', unit: 'ฮฉ', defaultValue: 2.4, min: 0, max: 1e12, step: 0.1 },
      { id: 'R1', symbol: 'R_1', name: 'Resistor 1', nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 1', unit: 'ฮฉ', defaultValue: 4, min: 0.0001, max: 1e12, step: 0.1 },
      { id: 'R2', symbol: 'R_2', name: 'Resistor 2', nameTh: 'เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 2', unit: 'ฮฉ', defaultValue: 6, min: 0.0001, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['rt', 'R1', 'R2'],
    calculate: (inputs, target = 'rt') => {
      let { rt, R1, R2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'rt') {
        if (R1 + R2 === 0) throw new Error('เธเธฅเธฃเธงเธกเธเธญเธ Rโ+Rโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (R1 * R2) / (R1 + R2);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธเธเธฒเธ (2 เธ•เธฑเธง)', latex: 'R_{total} = \\frac{R_1 R_2}{R_1 + R_2}', explanation: `Rโ = ${R1}, Rโ = ${R2}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `R_{total} = \\frac{${R1} \\times ${R2}}{${R1} + ${R2}} = \\frac{${R1 * R2}}{${R1 + R2}}`, explanation: 'เธเธฅเธเธนเธ“เธซเธฒเธฃเธเธฅเธเธงเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_{total} = ${result.toFixed(2)} \\ \\Omega`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฃเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธซเนเธก (เธเนเธญเธขเธเธงเนเธฒเธ•เธฑเธงเธ—เธตเนเน€เธฅเนเธเธ—เธตเนเธชเธธเธ”)` }
        ];
      } else if (target === 'R1') {
        if (rt === 0) throw new Error('R_total เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const denom = R2 - rt;
        if (denom === 0) throw new Error('Rโ โ’ Rt เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (rt * R2) / denom;
        if (result <= 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (เธเนเธฒเธ•เธดเธ”เธฅเธ)');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 1', latex: 'R_1 = \\frac{R_{total} R_2}{R_2 - R_{total}}', explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_1 = ${result.toFixed(2)} \\ \\Omega`, explanation: `เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 1 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธซเนเธก` }
        ];
      } else if (target === 'R2') {
        if (rt === 0) throw new Error('R_total เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const denom = R1 - rt;
        if (denom === 0) throw new Error('Rโ โ’ Rt เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (rt * R1) / denom;
        if (result <= 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (เธเนเธฒเธ•เธดเธ”เธฅเธ)');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 2', latex: 'R_2 = \\frac{R_{total} R_1}{R_1 - R_{total}}', explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R_2 = ${result.toFixed(2)} \\ \\Omega`, explanation: `เธ•เธฑเธงเธ•เนเธฒเธเธ—เธฒเธเธ—เธตเน 2 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธญเธซเนเธก` }
        ];
      }

      return { result, unit: 'ฮฉ', steps };
    }
  },

  {
    id: 'resistivity',
    name: 'Resistance & Resistivity (R = ฯL/A)',
    nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธเธญเธเธฅเธงเธ” (R = ฯL/A)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'waypoints',
    grade: 'เธก.5',
    latex: 'R = \\rho \\frac{L}{A}',
    description: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธเธญเธเธฅเธงเธ”เธ•เธฑเธงเธเธณ = เธชเธ เธฒเธเธ•เนเธฒเธเธ—เธฒเธ ร— เธเธงเธฒเธกเธขเธฒเธง รท เธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ” เน€เธเนเธ เธฅเธงเธ”เธ—เธญเธเนเธ”เธเธขเธฒเธง 100 m เธเธทเนเธเธ—เธตเน 1 mmยฒ',
    variables: [
      { id: 'R', symbol: 'R', name: 'Resistance', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ (R)', unit: 'ฮฉ', defaultValue: 1.72, min: 0, max: 1e12, step: 0.001 },
      { id: 'rho', symbol: '\\rho', name: 'Resistivity', nameTh: 'เธชเธ เธฒเธเธ•เนเธฒเธเธ—เธฒเธ (ฯ)', unit: 'ฮฉยทm', defaultValue: 1.72e-8, min: 1e-12, max: 1e6, step: 0 },
      { id: 'L', symbol: 'L', name: 'Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธฅเธงเธ” (L)', unit: 'm', defaultValue: 100, min: 0, max: 1e9, step: 1 },
      { id: 'A', symbol: 'A', name: 'Cross-section Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ” (A)', unit: 'mยฒ', defaultValue: 1e-6, min: 1e-15, max: 100, step: 0 }
    ],
    solveTargets: ['R', 'L', 'A'],
    calculate: (inputs, target = 'R') => {
      let { R, rho, L, A } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'R') {
        result = (rho * L) / A;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธฅเธงเธ”', latex: 'R = \\rho \\frac{L}{A}', explanation: `ฯ = ${rho.toExponential(2)}, L = ${L} m, A = ${A.toExponential(2)} mยฒ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `R = ${rho.toExponential(2)} \\times \\frac{${L}}{${A.toExponential(2)}}`, explanation: 'เธชเธ เธฒเธเธ•เนเธฒเธเธ—เธฒเธเธเธนเธ“เธเธงเธฒเธกเธขเธฒเธงเธซเธฒเธฃเธเธทเนเธเธ—เธตเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R = ${result.toFixed(4)} \\ \\Omega`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธญเธซเนเธก` }
        ];
      } else if (target === 'L') {
        if (rho === 0) throw new Error('ฯ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (R * A) / rho;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธขเธฒเธง', latex: 'L = \\frac{R \\cdot A}{\\rho}', explanation: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเธเธนเธ“เธเธทเนเธเธ—เธตเนเธซเธฒเธฃเธชเธ เธฒเธเธ•เนเธฒเธเธ—เธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `L = ${result.toFixed(2)} \\ \\text{m}`, explanation: `เธเธงเธฒเธกเธขเธฒเธงเธฅเธงเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'A') {
        if (R === 0) throw new Error('R เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (rho * L) / R;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”', latex: 'A = \\frac{\\rho L}{R}', explanation: 'เธชเธ เธฒเธเธ•เนเธฒเธเธ—เธฒเธเธเธนเธ“เธเธงเธฒเธกเธขเธฒเธงเธซเธฒเธฃ R' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toExponential(3)} \\ \\text{m}^2`, explanation: `เธเธทเนเธเธ—เธตเนเธซเธเนเธฒเธ•เธฑเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} mยฒ` }
        ];
      }

      return { result, unit: target === 'R' ? 'ฮฉ' : target === 'L' ? 'm' : 'mยฒ', steps };
    }
  },

  {
    id: 'coulombs_law',
    name: "Coulomb's Law (F = kqโqโ/rยฒ)",
    nameTh: 'เธเธเธเธญเธเธเธนเธฅเธญเธกเธเน (F = kqโqโ/rยฒ)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'zap',
    grade: 'เธก.6',
    latex: 'F = k \\frac{|q_1 q_2|}{r^2}',
    description: 'เนเธฃเธเธฃเธฐเธซเธงเนเธฒเธเธเธฃเธฐเธเธธเนเธเธเนเธฒเธชเธญเธเธเนเธญเธ = kยท|qโqโ|/rยฒ เนเธ”เธข k = 9ร—10โน Nยทmยฒ/Cยฒ เนเธฃเธเธ”เธนเธ”/เธเธฅเธฑเธเธ•เธฒเธกเน€เธเธฃเธทเนเธญเธเธซเธกเธฒเธขเธเธญเธเธเธฃเธฐเธเธธ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'เนเธฃเธเนเธเธเนเธฒ (F)', unit: 'N', defaultValue: 22.5, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'k', symbol: 'k', name: 'Coulomb Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธนเธฅเธญเธกเธเน (k)', unit: 'Nยทmยฒ/Cยฒ', defaultValue: 9e9, min: 1e8, max: 1e12, step: 0 },
      { id: 'q1', symbol: 'q_1', name: 'Charge 1', nameTh: 'เธเธฃเธฐเธเธธเธ—เธตเน 1 (qโ)', unit: 'C', defaultValue: 2e-6, min: -1e-6, max: 1, step: 0 },
      { id: 'q2', symbol: 'q_2', name: 'Charge 2', nameTh: 'เธเธฃเธฐเธเธธเธ—เธตเน 2 (qโ)', unit: 'C', defaultValue: 5e-6, min: -1e-6, max: 1, step: 0 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'เธฃเธฐเธขเธฐเธซเนเธฒเธ (r)', unit: 'm', defaultValue: 0.2, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['F', 'r', 'q1', 'q2'],
    calculate: (inputs, target = 'F') => {
      let { F, k, q1, q2, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = k * Math.abs(q1 * q2) / (r * r);
        const sign = q1 * q2 > 0 ? 'เธเธฅเธฑเธเธเธฑเธ' : 'เธ”เธนเธ”เธเธฑเธ';
        steps = [
          { title: 'เธเธเธเธญเธเธเธนเธฅเธญเธกเธเน', latex: 'F = k \\frac{|q_1 q_2|}{r^2}', explanation: `qโ = ${q1.toExponential(1)} C, qโ = ${q2.toExponential(1)} C, r = ${r} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `F = (${k.toExponential(1)}) \\times \\frac{|${q1.toExponential(1)} \\times ${q2.toExponential(1)}|}{${r}^2}`, explanation: `|qโqโ| = ${Math.abs(q1 * q2).toExponential(2)}, rยฒ = ${(r * r).toExponential(2)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ (เธเธฃเธฐเธเธธ${sign})` }
        ];
      } else if (target === 'r') {
        if (F === 0) throw new Error('เนเธฃเธ F เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt(k * Math.abs(q1 * q2) / F);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฐเธขเธฐเธซเนเธฒเธ', latex: 'r = \\sqrt{\\frac{k|q_1 q_2|}{F}}', explanation: `F = ${F} N` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธซเนเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'q1' || target === 'q2') {
        const other = target === 'q1' ? q2 : q1;
        if (other === 0) throw new Error(`เธเธฃเธฐเธเธธเธ—เธตเน ${target === 'q1' ? '2' : '1'} (qโ) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0`);
        result = (F * r * r) / (k * Math.abs(other));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธฐเธเธธ', latex: `q_${target[1]} = \\frac{F r^2}{k|q_${target === 'q1' ? '2' : '1'}|}`, explanation: `F = ${F} N, r = ${r} m` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `q_${target[1]} = ${result.toExponential(3)} \\ \\text{C}`, explanation: `เธเธฃเธฐเธเธธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เธเธนเธฅเธญเธกเธเน` }
        ];
      }

      return { result, unit: target === 'q1' || target === 'q2' ? 'C' : target === 'r' ? 'm' : 'N', steps };
    }
  },

  {
    id: 'electric_potential_point',
    name: 'Electric Potential (V = kQ/r)',
    nameTh: 'เธจเธฑเธเธขเนเนเธเธเนเธฒเธเธฒเธเธเธฃเธฐเธเธธเธเธธเธ” (V = kQ/r)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'circle-dot',
    grade: 'เธก.6',
    latex: 'V = \\frac{kQ}{r}',
    description: 'เธจเธฑเธเธขเนเนเธเธเนเธฒเธ—เธตเนเธเธธเธ”เธซเนเธฒเธ r เธเธฒเธเธเธฃเธฐเธเธธเธเธธเธ” Q เนเธ”เธข k = 9ร—10โน เนเธฅเธฐเธชเธธเธเธเธฒเธเธฒเธจ เน€เธเนเธ Q = 2 ฮผC เธ—เธตเนเธฃเธฐเธขเธฐ 0.5 m',
    variables: [
      { id: 'V', symbol: 'V', name: 'Electric Potential', nameTh: 'เธจเธฑเธเธขเนเนเธเธเนเธฒ (V)', unit: 'V', defaultValue: 36000, min: -1e12, max: 1e12, step: 1 },
      { id: 'k', symbol: 'k', name: 'Coulomb Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธนเธฅเธญเธกเธเน (k)', unit: 'Nยทmยฒ/Cยฒ', defaultValue: 9e9, min: 1e8, max: 1e12, step: 0 },
      { id: 'Q', symbol: 'Q', name: 'Charge', nameTh: 'เธเธฃเธฐเธเธธ (Q)', unit: 'C', defaultValue: 2e-6, min: -1e-6, max: 1, step: 0 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'เธฃเธฐเธขเธฐเธเธฒเธเธเธฃเธฐเธเธธ (r)', unit: 'm', defaultValue: 0.5, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'r', 'Q'],
    calculate: (inputs, target = 'V') => {
      let { V, k, Q, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = (k * Q) / r;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธจเธฑเธเธขเนเนเธเธเนเธฒ', latex: 'V = \\frac{kQ}{r}', explanation: `Q = ${Q.toExponential(1)} C, r = ${r} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `V = \\frac{${k.toExponential(1)} \\times ${Q.toExponential(1)}}{${r}}`, explanation: 'kยทQ เนเธฅเนเธงเธซเธฒเธฃ r' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(1)} \\ \\text{V}`, explanation: `เธจเธฑเธเธขเนเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เนเธงเธฅเธ•เน` }
        ];
      } else if (target === 'r') {
        if (V === 0) throw new Error('V เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (k * Q) / V;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฐเธขเธฐเธ—เธฒเธ', latex: 'r = \\frac{kQ}{V}', explanation: 'kยทQ เธซเธฒเธฃเธจเธฑเธเธขเนเนเธเธเนเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธซเนเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'Q') {
        if (k === 0) throw new Error('k เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (V * r) / k;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธฐเธเธธ', latex: 'Q = \\frac{Vr}{k}', explanation: 'เธจเธฑเธเธขเนเธเธนเธ“เธฃเธฐเธขเธฐเธซเธฒเธฃ k' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `Q = ${result.toExponential(3)} \\ \\text{C}`, explanation: `เธเธฃเธฐเธเธธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เธเธนเธฅเธญเธกเธเน` }
        ];
      }

      return { result, unit: target === 'V' ? 'V' : target === 'r' ? 'm' : 'C', steps };
    }
  },

  {
    id: 'capacitor',
    name: 'Capacitance (Q = CV)',
    nameTh: 'เธเธงเธฒเธกเธเธธเธ•เธฑเธงเน€เธเนเธเธเธฃเธฐเธเธธ (Q = CV)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'lamp-desk',
    grade: 'เธก.6',
    latex: 'Q = CV',
    description: 'เธเธฃเธฐเธเธธเธ—เธตเนเน€เธเนเธเนเธ”เนเนเธเธ•เธฑเธงเน€เธเนเธเธเธฃเธฐเธเธธ = เธเธงเธฒเธกเธเธธ ร— เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน เน€เธเนเธ C = 10 ฮผF เธเธฑเธ 12 V เน€เธเนเธเธเธฃเธฐเธเธธ 120 ฮผC',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Charge', nameTh: 'เธเธฃเธฐเธเธธ (Q)', unit: 'C', defaultValue: 0.00012, min: -1e12, max: 1e12, step: 0 },
      { id: 'C', symbol: 'C', name: 'Capacitance', nameTh: 'เธเธงเธฒเธกเธเธธ (C)', unit: 'F', defaultValue: 1e-5, min: 0, max: 1000, step: 0 },
      { id: 'V', symbol: 'V', name: 'Voltage', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน (V)', unit: 'V', defaultValue: 12, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['Q', 'C', 'V'],
    calculate: (inputs, target = 'Q') => {
      let { Q, C, V } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Q') {
        result = C * V;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธ•เธฑเธงเน€เธเนเธเธเธฃเธฐเธเธธ', latex: 'Q = CV', explanation: `C = ${C.toExponential(2)} F, V = ${V} V` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `Q = (${C.toExponential(2)}) \\times ${V}`, explanation: 'เธเธงเธฒเธกเธเธธเธเธนเธ“เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `Q = ${result.toExponential(3)} \\ \\text{C} \\; (${(result * 1e6).toFixed(1)} \\ \\mu\\text{C})`, explanation: `เธเธฃเธฐเธเธธเน€เธ—เนเธฒเธเธฑเธ ${(result * 1e6).toFixed(1)} เนเธกเนเธเธฃเธเธนเธฅเธญเธกเธเน` }
        ];
      } else if (target === 'C') {
        if (V === 0) throw new Error('V เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / V;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธเธธ', latex: 'C = \\frac{Q}{V}', explanation: 'เธเธฃเธฐเธเธธเธซเธฒเธฃเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toExponential(3)} \\ \\text{F}`, explanation: `เธเธงเธฒเธกเธเธธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เธเธฒเธฃเธฑเธ”` }
        ];
      } else if (target === 'V') {
        if (C === 0) throw new Error('C เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / C;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน', latex: 'V = \\frac{Q}{C}', explanation: 'เธเธฃเธฐเธเธธเธซเธฒเธฃเธเธงเธฒเธกเธเธธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(2)} \\ \\text{V}`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เนเธงเธฅเธ•เน` }
        ];
      }

      return { result, unit: target === 'Q' ? 'C' : target === 'C' ? 'F' : 'V', steps };
    }
  },

  {
    id: 'transformer',
    name: 'Transformer (Vโ/Vโ = Nโ/Nโ)',
    nameTh: 'เธซเธกเนเธญเนเธเธฅเธเนเธเธเนเธฒ (Vโ/Vโ = Nโ/Nโ)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'download',
    grade: 'เธก.6',
    latex: '\\frac{V_2}{V_1} = \\frac{N_2}{N_1}',
    description: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเนเธฃเธเธ”เธฑเธเธเธญเธเธซเธกเนเธญเนเธเธฅเธ = เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเธญเธเธเธ”เธฅเธงเธ” เน€เธเนเธ 11500 V โ’ 230 V เธเนเธฒเธเธเธ” 2000 เธฃเธญเธ/40 เธฃเธญเธ',
    variables: [
      { id: 'V1', symbol: 'V_1', name: 'Primary Voltage', nameTh: 'เนเธฃเธเธ”เธฑเธเธเธเธกเธ เธนเธกเธด (Vโ)', unit: 'V', defaultValue: 11500, min: 0, max: 1e9, step: 1 },
      { id: 'V2', symbol: 'V_2', name: 'Secondary Voltage', nameTh: 'เนเธฃเธเธ”เธฑเธเธ—เธธเธ•เธดเธขเธ เธนเธกเธด (Vโ)', unit: 'V', defaultValue: 230, min: 0, max: 1e9, step: 1 },
      { id: 'N1', symbol: 'N_1', name: 'Primary Turns', nameTh: 'เธเธณเธเธงเธเธฃเธญเธเธเธ”เธเธเธกเธ เธนเธกเธด (Nโ)', unit: 'เธฃเธญเธ', defaultValue: 2000, min: 1, max: 1e7, step: 1 },
      { id: 'N2', symbol: 'N_2', name: 'Secondary Turns', nameTh: 'เธเธณเธเธงเธเธฃเธญเธเธเธ”เธ—เธธเธ•เธดเธขเธ เธนเธกเธด (Nโ)', unit: 'เธฃเธญเธ', defaultValue: 40, min: 1, max: 1e7, step: 1 }
    ],
    solveTargets: ['V2', 'V1', 'N2', 'N1'],
    calculate: (inputs, target = 'V2') => {
      let { V1, V2, N1, N2 } = inputs;
      let steps = [];
      let result = 0;

      const build = (label, expr, val, unit) => [
        { title: 'เธชเธนเธ•เธฃเธซเธกเนเธญเนเธเธฅเธ', latex: '\\frac{V_2}{V_1} = \\frac{N_2}{N_1}', explanation: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเนเธฃเธเธ”เธฑเธเน€เธ—เนเธฒเธเธฑเธเธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฃเธญเธเธเธ”' },
        { title: label, latex: expr, explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธขเนเธฒเธขเธ•เธฑเธงเนเธเธฃ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `${label.split(' ')[0]} = ${val.toFixed(2)} \\ ${unit}`, explanation: `เธเนเธฒเธ—เธตเนเธเธณเธเธงเธ“เนเธ”เนเน€เธ—เนเธฒเธเธฑเธ ${val.toFixed(2)} ${unit}` }
      ];

      if (target === 'V2') {
        result = V1 * N2 / N1;
        steps = build('เนเธฃเธเธ”เธฑเธเธ—เธธเธ•เธดเธขเธ เธนเธกเธด V_2', `V_2 = ${V1} \\times \\frac{${N2}}{${N1}}`, result, 'V');
      } else if (target === 'V1') {
        if (N2 === 0) throw new Error('Nโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = V2 * N1 / N2;
        steps = build('เนเธฃเธเธ”เธฑเธเธเธเธกเธ เธนเธกเธด V_1', `V_1 = ${V2} \\times \\frac{${N1}}{${N2}}`, result, 'V');
      } else if (target === 'N2') {
        if (V1 === 0) throw new Error('Vโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = V2 * N1 / V1;
        steps = build('เธฃเธญเธเธ—เธธเธ•เธดเธขเธ เธนเธกเธด N_2', `N_2 = ${V2} \\times \\frac{${N1}}{${V1}}`, result, 'เธฃเธญเธ');
      } else if (target === 'N1') {
        if (V2 === 0) throw new Error('Vโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = V1 * N2 / V2;
        steps = build('เธฃเธญเธเธเธเธกเธ เธนเธกเธด N_1', `N_1 = ${V1} \\times \\frac{${N2}}{${V2}}`, result, 'เธฃเธญเธ');
      }

      return { result, unit: target.startsWith('N') ? 'เธฃเธญเธ' : 'V', steps };
    }
  },

  {
    id: 'magnetic_wire_force',
    name: 'Magnetic Force on Wire (F = BIl sinฮธ)',
    nameTh: 'เนเธฃเธเนเธกเนเน€เธซเธฅเนเธเธเธเน€เธชเนเธเธฅเธงเธ” (F = BIl sinฮธ)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒ',
    icon: 'magnet',
    grade: 'เธก.6',
    latex: 'F = B I l \\sin\\theta',
    description: 'เนเธฃเธเนเธกเนเน€เธซเธฅเนเธเธเธเธฅเธงเธ”เธขเธฒเธง l เธ—เธตเนเธกเธตเธเธฃเธฐเนเธช I เนเธเธชเธเธฒเธกเนเธกเนเน€เธซเธฅเนเธ B เธ—เธณเธกเธธเธก ฮธ เน€เธเนเธ เธฅเธฑเธ”เธงเธเธเธฃ 0.5 m, 10 A, B = 0.8 T เธ•เธฑเนเธเธเธฒเธ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Magnetic Force', nameTh: 'เนเธฃเธเนเธกเนเน€เธซเธฅเนเธ (F)', unit: 'N', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'B', symbol: 'B', name: 'Magnetic Field', nameTh: 'เธชเธเธฒเธกเนเธกเนเน€เธซเธฅเนเธ (B)', unit: 'T', defaultValue: 0.8, min: 0, max: 1000, step: 0.01 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'เธเธฃเธฐเนเธชเนเธเธเนเธฒ (I)', unit: 'A', defaultValue: 10, min: 0, max: 1e9, step: 0.1 },
      { id: 'l', symbol: 'l', name: 'Wire Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธฅเธงเธ” (l)', unit: 'm', defaultValue: 0.5, min: 0, max: 1e6, step: 0.01 },
      { id: 'theta', symbol: '\\theta', name: 'Angle (ยฐ)', nameTh: 'เธกเธธเธกเธฃเธฐเธซเธงเนเธฒเธ B เธเธฑเธเธฅเธงเธ”', unit: 'ยฐ', defaultValue: 90, min: 0, max: 180, step: 1 }
    ],
    solveTargets: ['F', 'theta', 'B'],
    calculate: (inputs, target = 'F') => {
      let { F, B, I, l, theta } = inputs;
      const rad = theta * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = B * I * l * Math.sin(rad);
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธฃเธเธเธเน€เธชเนเธเธฅเธงเธ”', latex: 'F = BIl\\sin\\theta', explanation: `B = ${B} T, I = ${I} A, l = ${l} m, ฮธ = ${theta}ยฐ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `F = ${B} \\times ${I} \\times ${l} \\times \\sin(${theta}ยฐ)`, explanation: `sin(${theta}ยฐ) = ${Math.sin(rad).toFixed(4)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเนเธกเนเน€เธซเธฅเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'theta') {
        const denom = B * I * l;
        if (denom === 0) throw new Error('BIl เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const x = F / denom;
        if (Math.abs(x) > 1) throw new Error('F/(BIl) เน€เธเธดเธ 1 เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธธเธก', latex: '\\sin\\theta = \\frac{F}{BIl}', explanation: 'เนเธเนเธเธฑเธเธเนเธเธฑเธเธญเธฒเธฃเนเธเนเธเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\theta = ${result.toFixed(1)}ยฐ`, explanation: `เธกเธธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธญเธเธจเธฒ` }
        ];
      } else if (target === 'B') {
        const denom = I * l * Math.sin(rad);
        if (denom === 0) throw new Error('Ilยทsinฮธ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = F / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธชเธเธฒเธกเนเธกเนเน€เธซเธฅเนเธ', latex: 'B = \\frac{F}{Il\\sin\\theta}', explanation: 'เนเธฃเธเธซเธฒเธฃเธเธฅเธเธนเธ“ Iยทlยทsinฮธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `B = ${result.toFixed(4)} \\ \\text{T}`, explanation: `เธชเธเธฒเธกเนเธกเนเน€เธซเธฅเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธ—เธชเธฅเธฒ` }
        ];
      }

      return { result, unit: target === 'theta' ? 'ยฐ' : target === 'B' ? 'T' : 'N', steps };
    }
  },

  {
    id: 'electric_field_point',
    name: 'Electric Field of a Point Charge',
    nameTh: 'เธชเธเธฒเธกเนเธเธเนเธฒเธเธธเธ”เธเธฃเธฐเธเธธ',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ',
    icon: 'zap',
    grade: 'เธก.6',
    latex: 'E = \\frac{kQ}{r^2}',
    description: 'เธชเธเธฒเธกเนเธเธเนเธฒ E = kQ/rยฒ เนเธ”เธข k = 8.99ร—10โน เธเธดเธงเธ•เธฑเธยทเน€เธกเธ•เธฃยฒ/เธเธนเธฅเธญเธกเธเนยฒ เน€เธเนเธ Q=10โปโต C เธ—เธตเน r=1 m เนเธ”เน 89,900 N/C',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Charge', nameTh: 'เธเธฃเธฐเธเธธ (Q)', unit: 'C', defaultValue: 0.00001, min: -1e6, max: 1e6, step: 1e-6 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'เธฃเธฐเธขเธฐเธซเนเธฒเธ (r)', unit: 'm', defaultValue: 1, min: 0.0001, max: 1e7, step: 0.1 },
      { id: 'E', symbol: 'E', name: 'Electric Field', nameTh: 'เธชเธเธฒเธกเนเธเธเนเธฒ (E)', unit: 'N/C', defaultValue: 89900, min: -1e15, max: 1e15, step: 1 }
    ],
    solveTargets: ['E', 'Q', 'r'],
    calculate: (inputs, target = 'E') => {
      const { Q, r, E } = inputs;
      const k = 8.99e9;
      let result, steps;
      if (target === 'E') {
        result = (k * Q) / (r * r);
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'E = \\frac{kQ}{r^2}', explanation: `Q = ${Q.toExponential(1)} C, r = ${r} m, k = 8.99ร—10โน` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `E = \\frac{8.99 \\times 10^9 \\times ${Q.toExponential(1)}}{${r}^2}`, explanation: 'เนเธ—เธเธเธฃเธฐเธเธธเนเธฅเธฐเธฃเธฐเธขเธฐเธซเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toExponential(4)} \\ \\text{N/C}`, explanation: `เธชเธเธฒเธกเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} เธเธดเธงเธ•เธฑเธ/เธเธนเธฅเธญเธกเธเน` }
        ];
      } else if (target === 'Q') {
        result = (E * r * r) / k;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ Q', latex: 'Q = \\frac{Er^2}{k}', explanation: `E = ${E.toExponential(3)} N/C, r = ${r} m` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `Q = \\frac{${E.toExponential(3)} \\times ${r}^2}{8.99 \\times 10^9} = ${result.toExponential(4)} \\ \\text{C}`, explanation: `เธเธฃเธฐเธเธธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} เธเธนเธฅเธญเธกเธเน` }
        ];
      } else {
        if (E === 0) throw new Error('เธชเธเธฒเธกเนเธเธเนเธฒ E เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt(Math.abs((k * Q) / E));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ r', latex: 'r = \\sqrt{\\left|\\frac{kQ}{E}\\right|}', explanation: `Q = ${Q.toExponential(1)} C, E = ${E.toExponential(3)} N/C` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = \\sqrt{\\frac{8.99 \\times 10^9 \\times ${Q.toExponential(1)}}{${E.toExponential(3)}}} = ${result.toFixed(3)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธซเนเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เน€เธกเธ•เธฃ` }
        ];
      }
      return { result, unit: target === 'E' ? 'N/C' : target === 'Q' ? 'C' : 'm', steps };
    }
  },

  {
    id: 'capacitors_series',
    name: 'Capacitors in Series',
    nameTh: 'เธ•เธฑเธงเน€เธเนเธเธเธฃเธฐเธเธธเธญเธเธธเธเธฃเธก',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ',
    icon: 'layers',
    grade: 'เธก.6',
    latex: 'C = \\frac{C_1 C_2}{C_1 + C_2}',
    description: 'เธเธงเธฒเธกเธเธธเธฃเธงเธกเธญเธเธธเธเธฃเธกเธชเธญเธเธ•เธฑเธง = เธเธฅเธเธนเธ“/เธเธฅเธเธงเธ เน€เธเนเธ Cโ=Cโ=4 ยตF เนเธ”เน C = 16/8 = 2 ยตF (เธเนเธญเธขเธเธงเนเธฒเธ•เธฑเธงเน€เธฅเนเธเธชเธธเธ”)',
    variables: [
      { id: 'C1', symbol: 'C_1', name: 'Capacitance 1', nameTh: 'เธเธงเธฒเธกเธเธธเธ•เธฑเธงเธ—เธตเน 1', unit: 'ยตF', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'C2', symbol: 'C_2', name: 'Capacitance 2', nameTh: 'เธเธงเธฒเธกเธเธธเธ•เธฑเธงเธ—เธตเน 2', unit: 'ยตF', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'C', symbol: 'C', name: 'Total Capacitance', nameTh: 'เธเธงเธฒเธกเธเธธเธฃเธงเธก (C)', unit: 'ยตF', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['C', 'C1', 'C2'],
    calculate: (inputs, target = 'C') => {
      const { C1, C2, C } = inputs;
      let result, steps;
      if (target === 'C') {
        result = (C1 * C2) / (C1 + C2);
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'C = \\frac{C_1 C_2}{C_1 + C_2}', explanation: `Cโ = ${C1} ยตF, Cโ = ${C2} ยตF` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `C = \\frac{${C1} \\times ${C2}}{${C1} + ${C2}} = \\frac{${C1 * C2}}{${C1 + C2}}`, explanation: 'เธเธฅเธเธนเธ“เธซเธฒเธฃเธเธฅเธเธงเธเธเธญเธเธเธงเธฒเธกเธเธธเธ—เธฑเนเธเธชเธญเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toFixed(4)} \\ \\text{ยตF}`, explanation: `เธเธงเธฒเธกเธเธธเธฃเธงเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ยตF` }
        ];
      } else if (target === 'C1') {
        if (C2 === C) throw new Error('Cโ เธ•เนเธญเธเนเธกเนเน€เธ—เนเธฒเธเธฑเธ C (เธ•เธฑเธงเธชเนเธงเธเน€เธเนเธ 0)');
        result = (C * C2) / (C2 - C);
        if (result <= 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (Cโ เธ•เธดเธ”เธฅเธเธซเธฃเธทเธญ 0)');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ Cโ', latex: 'C_1 = \\frac{C\\,C_2}{C_2 - C}', explanation: `C = ${C} ยตF, Cโ = ${C2} ยตF` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C_1 = \\frac{${C} \\times ${C2}}{${C2} - ${C}} = ${result.toFixed(4)} \\ \\text{ยตF}`, explanation: `เธเธงเธฒเธกเธเธธเธ•เธฑเธงเธ—เธตเน 1 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ยตF` }
        ];
      } else {
        if (C1 === C) throw new Error('Cโ เธ•เนเธญเธเนเธกเนเน€เธ—เนเธฒเธเธฑเธ C (เธ•เธฑเธงเธชเนเธงเธเน€เธเนเธ 0)');
        result = (C * C1) / (C1 - C);
        if (result <= 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (Cโ เธ•เธดเธ”เธฅเธเธซเธฃเธทเธญ 0)');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ Cโ', latex: 'C_2 = \\frac{C\\,C_1}{C_1 - C}', explanation: `C = ${C} ยตF, Cโ = ${C1} ยตF` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C_2 = \\frac{${C} \\times ${C1}}{${C1} - ${C}} = ${result.toFixed(4)} \\ \\text{ยตF}`, explanation: `เธเธงเธฒเธกเธเธธเธ•เธฑเธงเธ—เธตเน 2 เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} ยตF` }
        ];
      }
      return { result, unit: 'ยตF', steps };
    }
  }
];