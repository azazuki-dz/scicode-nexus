// @ts-nocheck

/**
 * General/Modern Physics Formulas (เธเธดเธชเธดเธเธชเน: เธเธญเธเน€เธซเธฅเธง เธเธดเธงเน€เธเธฅเธตเธขเธฃเน เนเธเธ•เธญเธ) - เธก.4 - เธก.6
 */

export const GENERAL_PHYSICS_FORMULAS = [
  {
    id: 'density',
    name: 'Density (ฯ = m/V)',
    nameTh: 'เธเธงเธฒเธกเธซเธเธฒเนเธเนเธ (ฯ = m/V)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'scaling',
    grade: 'เธก.1-4',
    latex: '\\rho = \\frac{m}{V}',
    description: 'เธเธงเธฒเธกเธซเธเธฒเนเธเนเธ = เธกเธงเธฅ รท เธเธฃเธดเธกเธฒเธ•เธฃ เน€เธเนเธ เธ—เธญเธเน€เธซเธฅเธทเธญเธ เธซเธฃเธทเธญ เธเนเธณ (1,000 kg/mยณ) เนเธเนเนเธขเธเธชเธฒเธฃเธงเนเธฒเธฅเธญเธขเธซเธฃเธทเธญเธเธก',
    variables: [
      { id: 'density', symbol: '\\rho', name: 'Density', nameTh: 'เธเธงเธฒเธกเธซเธเธฒเนเธเนเธ (ฯ)', unit: 'kg/mยณ', defaultValue: 1000, min: 0, max: 1e15, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ (m)', unit: 'kg', defaultValue: 250, min: 0, max: 1e15, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ (V)', unit: 'mยณ', defaultValue: 0.25, min: 0.0000001, max: 1e15, step: 0.001 }
    ],
    solveTargets: ['density', 'm', 'V'],
    calculate: (inputs, target = 'density') => {
      let { density: d, m, V } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'density') {
        result = m / V;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธซเธเธฒเนเธเนเธ', latex: '\\rho = \\frac{m}{V}', explanation: 'เธกเธงเธฅเธซเธฒเธฃเธเธฃเธดเธกเธฒเธ•เธฃ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\rho = \\frac{${m}}{${V}}`, explanation: `m = ${m} kg, V = ${V} mยณ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\rho = ${result.toFixed(2)} \\ \\text{kg/m}^3`, explanation: `เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} kg/mยณ` }
        ];
      } else if (target === 'm') {
        result = d * V;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅ', latex: 'm = \\rho V', explanation: 'เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเธเธนเธ“เธเธฃเธดเธกเธฒเธ•เธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(2)} \\ \\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      } else if (target === 'V') {
        if (d === 0) throw new Error('เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = m / d;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃ', latex: 'V = \\frac{m}{\\rho}', explanation: 'เธกเธงเธฅเธซเธฒเธฃเธเธงเธฒเธกเธซเธเธฒเนเธเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยณ` }
        ];
      }

      return { result, unit: target === 'density' ? 'kg/mยณ' : target === 'm' ? 'kg' : 'mยณ', steps };
    }
  },

  {
    id: 'fluid_pressure',
    name: 'Fluid Pressure (P = ฯgh)',
    nameTh: 'เธเธงเธฒเธกเธ”เธฑเธเธเธญเธเน€เธซเธฅเธง (P = ฯgh)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'droplet',
    grade: 'เธก.4',
    latex: 'P = \\rho g h',
    description: 'เธเธงเธฒเธกเธ”เธฑเธ เธ“ เธเธงเธฒเธกเธฅเธถเธ h เนเธเธเธญเธเน€เธซเธฅเธง = เธเธงเธฒเธกเธซเธเธฒเนเธเนเธ ร— g ร— เธเธงเธฒเธกเธฅเธถเธ เน€เธเนเธ เธเธฒเธฃเธ”เธณเธเนเธณเธฅเธถเธ 10 เน€เธกเธ•เธฃเนเธเธเนเธณ (ฯ=1000) เนเธ”เนเธเธงเธฒเธกเธ”เธฑเธ 98,100 Pa',
    variables: [
      { id: 'P', symbol: 'P', name: 'Fluid Pressure', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธเธเธญเธเน€เธซเธฅเธง (P)', unit: 'Pa', defaultValue: 98100, min: 0, max: 1e15, step: 0.1 },
      { id: 'rho', symbol: '\\rho', name: 'Fluid Density', nameTh: 'เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเธเธญเธเน€เธซเธฅเธง (ฯ)', unit: 'kg/mยณ', defaultValue: 1000, min: 0.0001, max: 1e9, step: 1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g)', unit: 'm/sยฒ', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Depth', nameTh: 'เธเธงเธฒเธกเธฅเธถเธ (h)', unit: 'm', defaultValue: 10, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['P', 'h', 'rho'],
    calculate: (inputs, target = 'P') => {
      let { P, rho, g, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = rho * g * h;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ”เธฑเธเธเธญเธเน€เธซเธฅเธง', latex: 'P = \\rho g h', explanation: `ฯ = ${rho}, g = ${g}, h = ${h} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `P = ${rho} \\times ${g} \\times ${h} = ${(rho * g).toFixed(2)} \\times ${h}`, explanation: 'เธเธนเธ“ ฯยทg เนเธฅเนเธงเธเธนเธ“เธเธงเธฒเธกเธฅเธถเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(1)} \\ \\text{Pa}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธเธฒเธชเธเธฒเธฅ` }
        ];
      } else if (target === 'h') {
        const denom = rho * g;
        if (denom === 0) throw new Error('ฯยทg เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = P / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธฅเธถเธ', latex: 'h = \\frac{P}{\\rho g}', explanation: 'เธเธงเธฒเธกเธ”เธฑเธเธซเธฒเธฃเธเธฅเธเธนเธ“ ฯยทg' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `h = ${result.toFixed(2)} \\ \\text{m}`, explanation: `เธเธงเธฒเธกเธฅเธถเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'rho') {
        const denom = g * h;
        if (denom === 0) throw new Error('gยทh เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = P / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธซเธเธฒเนเธเนเธ', latex: '\\rho = \\frac{P}{g h}', explanation: 'เธเธงเธฒเธกเธ”เธฑเธเธซเธฒเธฃเธเธฅเธเธนเธ“ gยทh' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\rho = ${result.toFixed(2)} \\ \\text{kg/m}^3`, explanation: `เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} kg/mยณ` }
        ];
      }

      return { result, unit: target === 'rho' ? 'kg/mยณ' : target === 'h' ? 'm' : 'Pa', steps };
    }
  },

  {
    id: 'buoyant_force',
    name: 'Buoyant Force (F_b = ฯVg)',
    nameTh: 'เนเธฃเธเธเธขเธธเธ (F_b = ฯVg) / เธซเธฅเธฑเธเธญเธฒเธฃเนเธเธดเธกเธดเธ”เธตเธช',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'waves',
    grade: 'เธก.4',
    latex: 'F_b = \\rho_{fl} V g',
    description: 'เนเธฃเธเธเธขเธธเธเธเธญเธเธเธญเธเน€เธซเธฅเธง = เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเธเธญเธเน€เธซเธฅเธง ร— เธเธฃเธดเธกเธฒเธ•เธฃเธชเนเธงเธเธเธก ร— g เธ•เธฒเธกเธซเธฅเธฑเธเธญเธฒเธฃเนเธเธดเธกเธดเธ”เธตเธช เนเธเนเธ—เธณเนเธกเน€เธฃเธทเธญเน€เธซเธฅเนเธเธเธถเธเธฅเธญเธขเธเนเธณเนเธ”เน',
    variables: [
      { id: 'Fb', symbol: 'F_b', name: 'Buoyant Force', nameTh: 'เนเธฃเธเธเธขเธธเธ (F_b)', unit: 'N', defaultValue: 98.1, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'rho', symbol: '\\rho', name: 'Fluid Density', nameTh: 'เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเธเธญเธเน€เธซเธฅเธง (ฯ)', unit: 'kg/mยณ', defaultValue: 1000, min: 0.0001, max: 1e9, step: 1 },
      { id: 'V', symbol: 'V', name: 'Submerged Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธชเนเธงเธเธเธก (V)', unit: 'mยณ', defaultValue: 0.01, min: 0.0000001, max: 1e9, step: 0.0001 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g)', unit: 'm/sยฒ', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['Fb', 'V', 'rho'],
    calculate: (inputs, target = 'Fb') => {
      let { Fb, rho, V, g } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Fb') {
        result = rho * V * g;
        steps = [
          { title: 'เธซเธฅเธฑเธเธญเธฒเธฃเนเธเธดเธกเธดเธ”เธตเธช', latex: 'F_b = \\rho_{fl} V g', explanation: `ฯ = ${rho}, V = ${V} mยณ, g = ${g}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `F_b = ${rho} \\times ${V} \\times ${g}`, explanation: 'เธเธนเธ“เธเธงเธฒเธกเธซเธเธฒเนเธเนเธ เธเธฃเธดเธกเธฒเธ•เธฃ เนเธฅเธฐ g' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F_b = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเธเธขเธธเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'V') {
        const denom = rho * g;
        if (denom === 0) throw new Error('ฯยทg เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Fb / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃเธชเนเธงเธเธเธก', latex: 'V = \\frac{F_b}{\\rho g}', explanation: 'เนเธฃเธเธเธขเธธเธเธซเธฒเธฃเธเธฅเธเธนเธ“ ฯยทg' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธชเนเธงเธเธเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยณ` }
        ];
      } else if (target === 'rho') {
        const denom = V * g;
        if (denom === 0) throw new Error('Vยทg เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Fb / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธซเธเธฒเนเธเนเธเธเธญเธเน€เธซเธฅเธง', latex: '\\rho = \\frac{F_b}{V g}', explanation: 'เนเธฃเธเธเธขเธธเธเธซเธฒเธฃเธเธฅเธเธนเธ“ Vยทg' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\rho = ${result.toFixed(2)} \\ \\text{kg/m}^3`, explanation: `เธเธงเธฒเธกเธซเธเธฒเนเธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} kg/mยณ` }
        ];
      }

      return { result, unit: target === 'rho' ? 'kg/mยณ' : target === 'V' ? 'mยณ' : 'N', steps };
    }
  },

  {
    id: 'pressure_force',
    name: 'Pressure on Area (P = F/A)',
    nameTh: 'เธเธงเธฒเธกเธ”เธฑเธ (P = F/A)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'columns-2',
    grade: 'เธก.3-4',
    latex: 'P = \\frac{F}{A}',
    description: 'เธเธงเธฒเธกเธ”เธฑเธ = เนเธฃเธเธ•เธฑเนเธเธเธฒเธ รท เธเธทเนเธเธ—เธตเนเธฃเธฑเธเนเธฃเธ เน€เธเนเธ เน€เธ—เนเธฒเธเธญเธเธเนเธฒเธเธ—เธตเนเน€เธซเธขเธตเธขเธเธเธทเนเธ เธซเธฃเธทเธญเธเธญเธเธกเธตเธเธก (เธเธทเนเธเธเนเธญเธข โ’ เธเธงเธฒเธกเธ”เธฑเธเธกเธฒเธ)',
    variables: [
      { id: 'P', symbol: 'P', name: 'Pressure', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธ (P)', unit: 'Pa', defaultValue: 50000, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'เนเธฃเธเธ•เธฑเนเธเธเธฒเธ (F)', unit: 'N', defaultValue: 1000, min: 0, max: 1e15, step: 0.1 },
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'เธเธทเนเธเธ—เธตเนเธฃเธฑเธเนเธฃเธ (A)', unit: 'mยฒ', defaultValue: 0.02, min: 0.0000001, max: 1e9, step: 0.0001 }
    ],
    solveTargets: ['P', 'F', 'A'],
    calculate: (inputs, target = 'P') => {
      let { P, F, A } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = F / A;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ”เธฑเธ', latex: 'P = \\frac{F}{A}', explanation: 'เนเธฃเธเธ•เธฑเนเธเธเธฒเธเธซเธฒเธฃเธเธทเนเธเธ—เธตเน' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `P = \\frac{${F}}{${A}}`, explanation: `F = ${F} N, A = ${A} mยฒ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(2)} \\ \\text{Pa}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฒเธชเธเธฒเธฅ` }
        ];
      } else if (target === 'F') {
        result = P * A;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธฃเธ', latex: 'F = P \\cdot A', explanation: 'เธเธงเธฒเธกเธ”เธฑเธเธเธนเธ“เธเธทเนเธเธ—เธตเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `เนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'A') {
        if (P === 0) throw new Error('เธเธงเธฒเธกเธ”เธฑเธ P เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = F / P;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธทเนเธเธ—เธตเน', latex: 'A = \\frac{F}{P}', explanation: 'เนเธฃเธเธซเธฒเธฃเธเธงเธฒเธกเธ”เธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toFixed(4)} \\ \\text{m}^2`, explanation: `เธเธทเนเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยฒ` }
        ];
      }

      return { result, unit: target === 'A' ? 'mยฒ' : target === 'F' ? 'N' : 'Pa', steps };
    }
  },

  {
    id: 'escape_velocity',
    name: 'Escape Velocity',
    nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธซเธฅเธธเธ”เธเนเธ (Escape Velocity)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'rocket',
    grade: 'เธก.6',
    latex: 'v_{esc} = \\sqrt{\\frac{2GM}{R}}',
    description: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธฑเนเธเธ•เนเธณเธ—เธตเนเธงเธฑเธ•เธ–เธธเธ•เนเธญเธเธกเธตเน€เธเธทเนเธญเธซเธฅเธธเธ”เธเนเธเนเธฃเธเนเธเนเธกเธ–เนเธงเธเธเธญเธเธ”เธฒเธงเน€เธเธฃเธฒเธฐเธซเน เน€เธเนเธ เธชเธเธฒเธกเธเธญเธเนเธฅเธ โ 11.2 km/s',
    variables: [
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเนเธเนเธกเธ–เนเธงเธ G', unit: 'Nยทmยฒ/kgยฒ', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Planet Mass', nameTh: 'เธกเธงเธฅเธเธญเธเธ”เธฒเธง (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'R', symbol: 'R', name: 'Radius from Center', nameTh: 'เธฃเธฑเธจเธกเธตเธเธฒเธเธจเธนเธเธขเนเธเธฅเธฒเธ (R)', unit: 'm', defaultValue: 6.371e6, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { G, M, R } = inputs;
      const result = Math.sqrt((2 * G * M) / R);
      const steps = [
        { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเน€เธฃเนเธงเธซเธฅเธธเธ”เธเนเธ', latex: 'v_{esc} = \\sqrt{\\frac{2GM}{R}}', explanation: `G = ${G.toExponential(2)}, M = ${M.toExponential(2)}, R = ${R.toExponential(2)}` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `v_{esc} = \\sqrt{\\frac{2(${G})(${M})}{${R}}`, explanation: `เธเธณเธเธงเธ“ 2GM/R = ${(2 * G * M / R).toExponential(3)}` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v_{esc} = ${result.toFixed(0)} \\ \\text{m/s} \\; (${(result / 1000).toFixed(1)} \\ \\text{km/s})`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธซเธฅเธธเธ”เธเนเธเน€เธ—เนเธฒเธเธฑเธ ${(result / 1000).toFixed(1)} km/s` }
      ];
      return { result, resultDisplay: `${(result / 1000).toFixed(2)} km/s`, unit: 'm/s', steps };
    }
  },

  {
    id: 'half_life',
    name: 'Radioactive Decay (Half-Life)',
    nameTh: 'เธเธฒเธฃเธชเธฅเธฒเธขเธเธฑเธกเธกเธฑเธเธ•เธฃเธฑเธเธชเธต (เธเธฃเธถเนเธเธเธตเธงเธดเธ•)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'atom',
    grade: 'เธก.4-6',
    latex: 'N = N_0 \\left(\\frac{1}{2}\\right)^{t/T}',
    description: 'เธเธฃเธดเธกเธฒเธ“เธชเธฒเธฃเธเธฑเธกเธกเธฑเธเธ•เธฃเธฑเธเธชเธตเธ—เธตเนเน€เธซเธฅเธทเธญเธซเธฅเธฑเธเน€เธงเธฅเธฒ t = เน€เธฃเธดเนเธกเธ•เนเธ ร— (1/2)^(t/T) เนเธ”เธข T เธเธทเธญเธเธฃเธถเนเธเธเธตเธงเธดเธ• เน€เธเนเธ เธเธฒเธฃเนเธเธญเธ-14 (T โ 5730 เธเธต)',
    variables: [
      { id: 'N', symbol: 'N', name: 'Remaining Amount', nameTh: 'เธเธฃเธดเธกเธฒเธ“เธ—เธตเนเน€เธซเธฅเธทเธญ (N)', unit: 'เธซเธเนเธงเธข', defaultValue: 25, min: 0, max: 1e30, step: 1 },
      { id: 'N0', symbol: 'N_0', name: 'Initial Amount', nameTh: 'เธเธฃเธดเธกเธฒเธ“เน€เธฃเธดเนเธกเธ•เนเธ (Nโ€)', unit: 'เธซเธเนเธงเธข', defaultValue: 100, min: 0.0000001, max: 1e30, step: 1 },
      { id: 't', symbol: 't', name: 'Elapsed Time', nameTh: 'เน€เธงเธฅเธฒเธ—เธตเนเธเนเธฒเธเนเธ (t)', unit: 'เธเธต/เธซเธเนเธงเธขเน€เธงเธฅเธฒ', defaultValue: 11460, min: 0, max: 1e15, step: 1 },
      { id: 'T', symbol: 'T', name: 'Half-Life', nameTh: 'เธเธฃเธถเนเธเธเธตเธงเธดเธ• (T)', unit: 'เธซเธเนเธงเธขเน€เธงเธฅเธฒ', defaultValue: 5730, min: 0.0000001, max: 1e15, step: 1 }
    ],
    solveTargets: ['N', 't', 'T'],
    calculate: (inputs, target = 'N') => {
      let { N, N0, t, T } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'N') {
        result = N0 * Math.pow(0.5, t / T);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเธชเธฅเธฒเธข', latex: 'N = N_0 \\left(\\frac{1}{2}\\right)^{t/T}', explanation: `Nโ€ = ${N0}, t = ${t}, T = ${T}` },
          { title: 'เธเธณเธเธงเธ“เน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ', latex: `\\frac{t}{T} = \\frac{${t}}{${T}} = ${(t / T).toFixed(4)}`, explanation: 'เธเธณเธเธงเธเธเธฃเธถเนเธเธเธตเธงเธดเธ•เธ—เธตเนเธเนเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${N0} \\times 0.5^{${(t / T).toFixed(3)}} = ${result.toFixed(4)}`, explanation: `เน€เธซเธฅเธทเธญ ${result.toFixed(4)} เธซเธเนเธงเธข` }
        ];
      } else if (target === 't') {
        if (N <= 0 || N0 <= 0) throw new Error('N เนเธฅเธฐ Nโ€ เธ•เนเธญเธเน€เธเนเธเธเธงเธ');
        result = T * (Math.log(N / N0) / Math.log(0.5));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเนเธเธเน€เธงเธฅเธฒ', latex: 't = T \\cdot \\frac{\\ln(N/N_0)}{\\ln(0.5)}', explanation: 'เนเธเนเธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเนเธเนเน€เธฅเธเธเธตเนเธเธณเธฅเธฑเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(2)} \\ \\text{เธซเธเนเธงเธขเน€เธงเธฅเธฒ}`, explanation: `เนเธเนเน€เธงเธฅเธฒ ${result.toFixed(2)} เธซเธเนเธงเธขเน€เธงเธฅเธฒ` }
        ];
      } else if (target === 'T') {
        if (t === 0 || N0 <= 0) throw new Error('t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 เนเธฅเธฐ Nโ€ เธ•เนเธญเธเน€เธเนเธเธเธงเธ');
        if (N <= 0) throw new Error('N เธ•เนเธญเธเน€เธเนเธเธเธงเธ');
        result = t / (Math.log(N0 / N) / Math.log(2));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธถเนเธเธเธตเธงเธดเธ•', latex: 'T = \\frac{t}{\\log_2(N_0/N)}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T = ${result.toFixed(2)} \\ \\text{เธซเธเนเธงเธขเน€เธงเธฅเธฒ}`, explanation: `เธเธฃเธถเนเธเธเธตเธงเธดเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธซเธเนเธงเธขเน€เธงเธฅเธฒ` }
        ];
      }

      return { result, unit: target === 'N' ? 'เธซเธเนเธงเธข' : 'เธซเธเนเธงเธขเน€เธงเธฅเธฒ', steps };
    }
  },

  {
    id: 'decay_constant',
    name: 'Decay Constant (ฮป = ln2/T)',
    nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเธชเธฅเธฒเธข (ฮป = ln2/T)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'atom',
    grade: 'เธก.6',
    latex: '\\lambda = \\frac{\\ln 2}{T}',
    description: 'เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเธชเธฅเธฒเธขเธชเธฑเธกเธเธฑเธเธเนเธเธฑเธเธเธฃเธถเนเธเธเธตเธงเธดเธ•เนเธ”เธข ฮป = ln2/Th เน€เธเนเธ เธเธฒเธฃเนเธเธญเธ-14 (T=5730 เธเธต) เธกเธต ฮป โ 1.21ร—10โปโด /เธเธต',
    variables: [
      { id: 'lambda', symbol: '\\lambda', name: 'Decay Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเธชเธฅเธฒเธข (ฮป)', unit: '1/เธซเธเนเธงเธขเน€เธงเธฅเธฒ', defaultValue: 0.000121, min: 0.0000000001, max: 1000, step: 0 },
      { id: 'T', symbol: 'T', name: 'Half-Life', nameTh: 'เธเธฃเธถเนเธเธเธตเธงเธดเธ• (T)', unit: 'เธซเธเนเธงเธขเน€เธงเธฅเธฒ', defaultValue: 5730, min: 0.0000001, max: 1e15, step: 1 }
    ],
    solveTargets: ['lambda', 'T'],
    calculate: (inputs, target = 'lambda') => {
      let { lambda, T } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'lambda') {
        result = Math.LN2 / T;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเธชเธฅเธฒเธข', latex: '\\lambda = \\frac{\\ln 2}{T}', explanation: `T = ${T}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\lambda = \\frac{0.6931}{${T}}`, explanation: 'ln2 โ 0.6931' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\lambda = ${result.toExponential(4)} \\ \\text{/เธซเธเนเธงเธขเน€เธงเธฅเธฒ}`, explanation: `เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเธชเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} เธ•เนเธญเธซเธเนเธงเธขเน€เธงเธฅเธฒ` }
        ];
      } else if (target === 'T') {
        if (lambda === 0) throw new Error('ฮป เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.LN2 / lambda;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธถเนเธเธเธตเธงเธดเธ•', latex: 'T = \\frac{\\ln 2}{\\lambda}', explanation: `ฮป = ${lambda}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T = ${result.toFixed(2)} \\ \\text{เธซเธเนเธงเธขเน€เธงเธฅเธฒ}`, explanation: `เธเธฃเธถเนเธเธเธตเธงเธดเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธซเธเนเธงเธขเน€เธงเธฅเธฒ` }
        ];
      }

      return { result, unit: target === 'lambda' ? '1/เธซเธเนเธงเธขเน€เธงเธฅเธฒ' : 'เธซเธเนเธงเธขเน€เธงเธฅเธฒ', steps };
    }
  },

  {
    id: 'photon_energy',
    name: 'Photon Energy (E = hf)',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเนเธเธ•เธญเธ (E = hf)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'sun',
    grade: 'เธก.6',
    latex: 'E = hf',
    description: 'เธเธฅเธฑเธเธเธฒเธเธเธญเธเนเธเธ•เธญเธ = เธเนเธฒเธเธเธ—เธตเนเธเธฅเธฑเธเธเน (h) ร— เธเธงเธฒเธกเธ–เธตเน เน€เธเนเธ เนเธชเธเน€เธเธตเธขเธง f=5.5ร—10ยนโด Hz เธกเธตเธเธฅเธฑเธเธเธฒเธ โ 3.64ร—10โปยนโน J',
    variables: [
      { id: 'E', symbol: 'E', name: 'Photon Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเนเธเธ•เธญเธ (E)', unit: 'J', defaultValue: 3.645e-19, min: 1e-28, max: 10, step: 0 },
      { id: 'h', symbol: 'h', name: "Planck's Constant", nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธฅเธฑเธเธเน (h)', unit: 'Jยทs', defaultValue: 6.626e-34, min: 1e-38, max: 1e-25, step: 0 },
      { id: 'f', symbol: 'f', name: 'Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเน (f)', unit: 'Hz', defaultValue: 5.5e14, min: 1e3, max: 1e27, step: 0 }
    ],
    solveTargets: ['E', 'f'],
    calculate: (inputs, target = 'E') => {
      let { E, h, f } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'E') {
        result = h * f;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธฑเธเธเธฒเธเนเธเธ•เธญเธ', latex: 'E = hf', explanation: `h = ${h.toExponential(2)}, f = ${f.toExponential(2)} Hz` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `E = (${h}) \\times (${f})`, explanation: 'เธเนเธฒเธเธเธ—เธตเนเธเธฅเธฑเธเธเนเธเธนเธ“เธเธงเธฒเธกเธ–เธตเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toExponential(4)} \\ \\text{J} \\; (${(result / 1.602e-19).toFixed(2)} \\ \\text{eV})`, explanation: `เธเธฅเธฑเธเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เธเธนเธฅ เธซเธฃเธทเธญ ${(result / 1.602e-19).toFixed(2)} eV` }
        ];
      } else if (target === 'f') {
        if (h === 0) throw new Error('h เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = E / h;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธ–เธตเน', latex: 'f = \\frac{E}{h}', explanation: 'เธเธฅเธฑเธเธเธฒเธเธซเธฒเธฃเธเนเธฒเธเธเธ—เธตเนเธเธฅเธฑเธเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `f = ${result.toExponential(4)} \\ \\text{Hz}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เน€เธฎเธดเธฃเธ•เธเน` }
        ];
      }

      return { result, unit: target === 'f' ? 'Hz' : 'J', steps };
    }
  },

  {
    id: 'photon_wavelength',
    name: 'Photon Wavelength (E = hc/ฮป)',
    nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธเนเธเธ•เธญเธ (E = hc/ฮป)',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'sun',
    grade: 'เธก.6',
    latex: 'E = \\frac{hc}{\\lambda}',
    description: 'เธเธฅเธฑเธเธเธฒเธเนเธเธ•เธญเธเธเธฒเธเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ E = hc/ฮป เน€เธเนเธ เนเธเธ•เธญเธเนเธ”เธ ฮป=700 nm เธกเธตเธเธฅเธฑเธเธเธฒเธ โ 2.84ร—10โปยนโน J',
    variables: [
      { id: 'E', symbol: 'E', name: 'Photon Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเนเธเธ•เธญเธ (E)', unit: 'J', defaultValue: 2.84e-19, min: 1e-28, max: 10, step: 0 },
      { id: 'h', symbol: 'h', name: "Planck's Constant", nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธฅเธฑเธเธเน (h)', unit: 'Jยทs', defaultValue: 6.626e-34, min: 1e-38, max: 1e-25, step: 0 },
      { id: 'c', symbol: 'c', name: 'Speed of Light', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธ (c)', unit: 'm/s', defaultValue: 3e8, min: 1e6, max: 1e10, step: 0 },
      { id: 'wavelength', symbol: '\\lambda', name: 'Wavelength', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ (ฮป)', unit: 'm', defaultValue: 7e-7, min: 1e-15, max: 10, step: 0 }
    ],
    solveTargets: ['E', 'wavelength'],
    calculate: (inputs, target = 'E') => {
      let { E, h, c, wavelength } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'E') {
        result = (h * c) / wavelength;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธฑเธเธเธฒเธเนเธเธ•เธญเธเธเธฒเธเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ', latex: 'E = \\frac{hc}{\\lambda}', explanation: `h = ${h.toExponential(2)}, c = ${c.toExponential(2)}, ฮป = ${wavelength.toExponential(2)} m (${(wavelength * 1e9).toFixed(0)} nm)` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `E = \\frac{(${h})(${c})}{${wavelength}}`, explanation: 'เธเธนเธ“ hยทc เนเธฅเนเธงเธซเธฒเธฃเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E = ${result.toExponential(4)} \\ \\text{J}`, explanation: `เธเธฅเธฑเธเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เธเธนเธฅ` }
        ];
      } else if (target === 'wavelength') {
        if (E === 0) throw new Error('เธเธฅเธฑเธเธเธฒเธ E เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (h * c) / E;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ', latex: '\\lambda = \\frac{hc}{E}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\lambda = ${result.toExponential(4)} \\ \\text{m} \\; (${(result * 1e9).toFixed(1)} \\ \\text{nm})`, explanation: `เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธเน€เธ—เนเธฒเธเธฑเธ ${(result * 1e9).toFixed(1)} เธเธฒเนเธเน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'wavelength' ? 'm' : 'J', steps };
    }
  }
];