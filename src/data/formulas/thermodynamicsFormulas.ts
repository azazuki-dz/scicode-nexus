// @ts-nocheck

/**
 * Thermodynamics & Thermal Formulas (เธเธดเธชเธดเธเธชเน: เธเธงเธฒเธกเธฃเนเธญเธ) - เธก.4
 * เธฃเธงเธกเธเธฑเธ specific_heat (Q=mcฮ”T) เน€เธ”เธดเธกเนเธ formulas.js เธซเธกเธงเธ” thermodynamics
 */

export const THERMODYNAMICS_FORMULAS = [
  {
    id: 'celsius_fahrenheit',
    name: 'Celsius โ” Fahrenheit',
    nameTh: 'เนเธเธฅเธเธญเธธเธ“เธซเธ เธนเธกเธด เธญเธเธจเธฒเน€เธเธฅเน€เธเธตเธขเธช โ” เธญเธเธจเธฒเธเธฒเน€เธฃเธเนเธฎเธ•เน',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'thermometer',
    grade: 'เธก.1-4',
    latex: 'F = \\frac{9}{5}C + 32',
    description: 'เนเธเธฅเธเธญเธธเธ“เธซเธ เธนเธกเธดเธฃเธฐเธซเธงเนเธฒเธเธญเธเธจเธฒเน€เธเธฅเน€เธเธตเธขเธชเนเธฅเธฐเธเธฒเน€เธฃเธเนเธฎเธ•เน เน€เธเนเธ เธเนเธณเน€เธ”เธทเธญเธ” 100ยฐC = 212ยฐF, เธเนเธณเนเธเนเธเธฅเธฐเธฅเธฒเธข 0ยฐC = 32ยฐF',
    variables: [
      { id: 'C', symbol: 'C', name: 'Celsius', nameTh: 'เธญเธเธจเธฒเน€เธเธฅเน€เธเธตเธขเธช (ยฐC)', unit: 'ยฐC', defaultValue: 100, min: -273.15, max: 1e6, step: 0.1 },
      { id: 'F', symbol: 'F', name: 'Fahrenheit', nameTh: 'เธญเธเธจเธฒเธเธฒเน€เธฃเธเนเธฎเธ•เน (ยฐF)', unit: 'ยฐF', defaultValue: 212, min: -459.67, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['F', 'C'],
    calculate: (inputs, target = 'F') => {
      let { C, F } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = (9 / 5) * C + 32;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธเธฅเธเน€เธเนเธเธเธฒเน€เธฃเธเนเธฎเธ•เน', latex: 'F = \\frac{9}{5}C + 32', explanation: `C = ${C}ยฐC` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `F = \\frac{9}{5} \\times ${C} + 32 = ${(9 / 5 * C).toFixed(2)} + 32`, explanation: 'เธเธนเธ“ 9/5 เนเธฅเนเธงเธเธงเธ 32' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `F = ${result.toFixed(2)}ยฐF`, explanation: `${C}ยฐC เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)}ยฐF` }
        ];
      } else if (target === 'C') {
        result = (5 / 9) * (F - 32);
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธเธฅเธเน€เธเนเธเน€เธเธฅเน€เธเธตเธขเธช', latex: 'C = \\frac{5}{9}(F - 32)', explanation: `F = ${F}ยฐF` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `C = \\frac{5}{9}(${F} - 32) = \\frac{5}{9} \\times ${(F - 32).toFixed(2)}`, explanation: 'เธฅเธ 32 เนเธฅเนเธงเธเธนเธ“ 5/9' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toFixed(2)}ยฐC`, explanation: `${F}ยฐF เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)}ยฐC` }
        ];
      }

      return { result, unit: target === 'F' ? 'ยฐF' : 'ยฐC', steps };
    }
  },

  {
    id: 'celsius_kelvin',
    name: 'Celsius โ” Kelvin',
    nameTh: 'เนเธเธฅเธเธญเธธเธ“เธซเธ เธนเธกเธด เธญเธเธจเธฒเน€เธเธฅเน€เธเธตเธขเธช โ” เน€เธเธฅเธงเธดเธ',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'thermometer',
    grade: 'เธก.4',
    latex: 'K = C + 273.15',
    description: 'เนเธเธฅเธเธญเธธเธ“เธซเธ เธนเธกเธดเธฃเธฐเธซเธงเนเธฒเธเน€เธเธฅเน€เธเธตเธขเธชเนเธฅเธฐเน€เธเธฅเธงเธดเธ (เธชเน€เธเธฅเธชเธฑเธกเธเธนเธฃเธ“เน) เนเธ”เธข 0 K = โ’273.15ยฐC เนเธเนเธเธฑเธเธเธฑเธเนเธเธชเธกเธเธฒเธฃเนเธเนเธช',
    variables: [
      { id: 'C', symbol: 'C', name: 'Celsius', nameTh: 'เธญเธเธจเธฒเน€เธเธฅเน€เธเธตเธขเธช (ยฐC)', unit: 'ยฐC', defaultValue: 27, min: -273.15, max: 1e6, step: 0.1 },
      { id: 'K', symbol: 'K', name: 'Kelvin', nameTh: 'เน€เธเธฅเธงเธดเธ (K)', unit: 'K', defaultValue: 300.15, min: 0, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['K', 'C'],
    calculate: (inputs, target = 'K') => {
      let { C, K } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'K') {
        result = C + 273.15;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธเธฅเธเน€เธเนเธเน€เธเธฅเธงเธดเธ', latex: 'K = C + 273.15', explanation: `C = ${C}ยฐC` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `K = ${C} + 273.15 = ${result.toFixed(2)} \\ \\text{K}`, explanation: `${C}ยฐC เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} K` }
        ];
      } else if (target === 'C') {
        result = K - 273.15;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธเธฅเธเน€เธเนเธเน€เธเธฅเน€เธเธตเธขเธช', latex: 'C = K - 273.15', explanation: `K = ${K}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${K} - 273.15 = ${result.toFixed(2)}ยฐC`, explanation: `${K} K เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}ยฐC` }
        ];
      }

      return { result, unit: target === 'K' ? 'K' : 'ยฐC', steps };
    }
  },

  {
    id: 'latent_heat',
    name: 'Latent Heat (Q = mL)',
    nameTh: 'เธเธงเธฒเธกเธฃเนเธญเธเนเธเธ (Q = mL)',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'flame',
    grade: 'เธก.4',
    latex: 'Q = mL',
    description: 'เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเธ—เธณเนเธซเนเธชเธชเธฒเธฃเน€เธเธฅเธตเนเธขเธเธชเธ–เธฒเธเธฐ = เธกเธงเธฅ ร— เธเธงเธฒเธกเธฃเนเธญเธเนเธเธเธเธณเน€เธเธฒเธฐ เน€เธเนเธ เธเนเธณเนเธเนเธเธฅเธฐเธฅเธฒเธข L=334 kJ/kg เนเธเน Q = mL',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Heat Energy', nameTh: 'เธเธงเธฒเธกเธฃเนเธญเธ (Q)', unit: 'J', defaultValue: 334000, min: -1e12, max: 1e12, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ (m)', unit: 'kg', defaultValue: 1, min: 0, max: 1e12, step: 0.1 },
      { id: 'L', symbol: 'L', name: 'Latent Heat', nameTh: 'เธเธงเธฒเธกเธฃเนเธญเธเนเธเธเธเธณเน€เธเธฒเธฐ (L)', unit: 'J/kg', defaultValue: 334000, min: -1e9, max: 1e9, step: 1 }
    ],
    solveTargets: ['Q', 'm', 'L'],
    calculate: (inputs, target = 'Q') => {
      let { Q, m, L } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Q') {
        result = m * L;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธฃเนเธญเธเนเธเธ', latex: 'Q = mL', explanation: `m = ${m} kg, L = ${L} J/kg` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `Q = ${m} \\times ${L}`, explanation: 'เธกเธงเธฅเธเธนเธ“เธเธงเธฒเธกเธฃเนเธญเธเนเธเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `Q = ${result.toFixed(0)} \\ \\text{J} \\; (${(result / 1000).toFixed(1)} \\ \\text{kJ})`, explanation: `เธเธงเธฒเธกเธฃเนเธญเธเน€เธ—เนเธฒเธเธฑเธ ${(result / 1000).toFixed(1)} เธเธดเนเธฅเธเธนเธฅ` }
        ];
      } else if (target === 'm') {
        if (L === 0) throw new Error('L เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / L;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{Q}{L}', explanation: 'เธเธงเธฒเธกเธฃเนเธญเธเธซเธฒเธฃเธเธงเธฒเธกเธฃเนเธญเธเนเธเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(3)} \\ \\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      } else if (target === 'L') {
        if (m === 0) throw new Error('เธกเธงเธฅ m เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / m;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธฃเนเธญเธเนเธเธ', latex: 'L = \\frac{Q}{m}', explanation: 'เธเธงเธฒเธกเธฃเนเธญเธเธซเธฒเธฃเธกเธงเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `L = ${result.toFixed(1)} \\ \\text{J/kg}`, explanation: `เธเธงเธฒเธกเธฃเนเธญเธเนเธเธเธเธณเน€เธเธฒเธฐเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} J/kg` }
        ];
      }

      return { result, unit: target === 'Q' ? 'J' : target === 'm' ? 'kg' : 'J/kg', steps };
    }
  },

  {
    id: 'thermal_expansion',
    name: 'Linear Thermal Expansion (ฮ”L = ฮฑLโ€ฮ”T)',
    nameTh: 'เธเธฒเธฃเธเธขเธฒเธขเธ•เธฑเธงเธ—เธฒเธเธเธงเธฒเธกเธฃเนเธญเธ (ฮ”L = ฮฑLโ€ฮ”T)',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'move-horizontal',
    grade: 'เธก.6',
    latex: '\\Delta L = \\alpha L_0 \\Delta T',
    description: 'เธเธงเธฒเธกเธขเธฒเธงเธ—เธตเนเน€เธเธดเนเธกเธเธถเนเธเธเธญเธเธงเธฑเธ•เธ–เธธเน€เธกเธทเนเธญเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธตเนเธขเธ = เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธฒเธฃเธเธขเธฒเธขเธ•เธฑเธงเน€เธเธดเธเน€เธชเนเธ ร— เธเธงเธฒเธกเธขเธฒเธงเน€เธ”เธดเธก ร— เธเธฅเธ•เนเธฒเธเธญเธธเธ“เธซเธ เธนเธกเธด เน€เธเนเธ เธชเธฐเธเธฒเธเน€เธซเธฅเนเธ',
    variables: [
      { id: 'dL', symbol: '\\Delta L', name: 'Change in Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธ—เธตเนเน€เธเธดเนเธกเธเธถเนเธ (ฮ”L)', unit: 'm', defaultValue: 0.0024, min: 0, max: 1e6, step: 0.0001 },
      { id: 'alpha', symbol: '\\alpha', name: 'Expansion Coefficient', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธฒเธฃเธเธขเธฒเธขเธ•เธฑเธง (ฮฑ)', unit: '1/ยฐC', defaultValue: 1.2e-5, min: 1e-9, max: 1, step: 0 },
      { id: 'L0', symbol: 'L_0', name: 'Original Length', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเน€เธ”เธดเธก (Lโ€)', unit: 'm', defaultValue: 10, min: 0.000001, max: 1e6, step: 0.1 },
      { id: 'dT', symbol: '\\Delta T', name: 'Temperature Change', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเธ—เธตเนเน€เธเธฅเธตเนเธขเธ (ฮ”T)', unit: 'ยฐC', defaultValue: 20, min: -1e6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['dL', 'dT'],
    calculate: (inputs, target = 'dL') => {
      let { dL, alpha, L0, dT } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dL') {
        result = alpha * L0 * dT;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเธเธขเธฒเธขเธ•เธฑเธงเน€เธเธดเธเน€เธชเนเธ', latex: '\\Delta L = \\alpha L_0 \\Delta T', explanation: `ฮฑ = ${alpha.toExponential(2)}, Lโ€ = ${L0} m, ฮ”T = ${dT}ยฐC` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\Delta L = (${alpha.toExponential(2)}) \\times ${L0} \\times ${dT}`, explanation: 'เธเธนเธ“เธเนเธฒเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน เธเธงเธฒเธกเธขเธฒเธงเน€เธ”เธดเธก เนเธฅเธฐเธเธฅเธ•เนเธฒเธเธญเธธเธ“เธซเธ เธนเธกเธด' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta L = ${result.toFixed(4)} \\ \\text{m}`, explanation: `เธเธงเธฒเธกเธขเธฒเธงเน€เธเธดเนเธกเธเธถเนเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ (เธขเธฒเธงเนเธซเธกเน ${(L0 + result).toFixed(4)} m)` }
        ];
      } else if (target === 'dT') {
        const denom = alpha * L0;
        if (denom === 0) throw new Error('ฮฑยทLโ€ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = dL / denom;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเธ•เนเธฒเธเธญเธธเธ“เธซเธ เธนเธกเธด', latex: '\\Delta T = \\frac{\\Delta L}{\\alpha L_0}', explanation: 'เธเธงเธฒเธกเธขเธฒเธงเธ—เธตเนเน€เธเธดเนเธกเธซเธฒเธฃเธเธฅเธเธนเธ“ ฮฑยทLโ€' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta T = ${result.toFixed(2)}ยฐC`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธตเนเธขเธ ${result.toFixed(2)}ยฐC` }
        ];
      }

      return { result, unit: target === 'dT' ? 'ยฐC' : 'm', steps };
    }
  },

  {
    id: 'heat_engine_efficiency',
    name: 'Engine Efficiency (ฮท = 1 โ’ Tc/Th)',
    nameTh: 'เธเธฃเธฐเธชเธดเธ—เธเธดเธ เธฒเธเน€เธเธฃเธทเนเธญเธเธขเธเธ•เน (ฮท = 1 โ’ Tc/Th)',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'gauge',
    grade: 'เธก.6',
    latex: '\\eta = 1 - \\frac{T_c}{T_h}',
    description: 'เธเธฃเธฐเธชเธดเธ—เธเธดเธ เธฒเธเธชเธนเธเธชเธธเธ” (เธเธฒเธฃเนเนเธเธ•เน) เธเธญเธเน€เธเธฃเธทเนเธญเธเธขเธเธ•เนเธเธงเธฒเธกเธฃเนเธญเธ = 1 โ’ (เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธขเนเธ/เธญเธธเธ“เธซเธ เธนเธกเธดเธฃเนเธญเธ) เนเธ”เธขเนเธเนเธซเธเนเธงเธขเน€เธเธฅเธงเธดเธเน€เธ—เนเธฒเธเธฑเนเธ',
    variables: [
      { id: 'eta', symbol: '\\eta', name: 'Efficiency', nameTh: 'เธเธฃเธฐเธชเธดเธ—เธเธดเธ เธฒเธ', unit: '', defaultValue: 0.6, min: 0, max: 1, step: 0.01 },
      { id: 'Tc', symbol: 'T_c', name: 'Cold Temp (K)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธขเนเธ (Tc)', unit: 'K', defaultValue: 300, min: 0.0001, max: 1e9, step: 1 },
      { id: 'Th', symbol: 'T_h', name: 'Hot Temp (K)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเธฃเนเธญเธ (Th)', unit: 'K', defaultValue: 750, min: 0.0001, max: 1e9, step: 1 }
    ],
    solveTargets: ['eta', 'Tc', 'Th'],
    calculate: (inputs, target = 'eta') => {
      let { eta, Tc, Th } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'eta') {
        result = 1 - Tc / Th;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฃเธฐเธชเธดเธ—เธเธดเธ เธฒเธเธเธฒเธฃเนเนเธเธ•เน', latex: '\\eta = 1 - \\frac{T_c}{T_h}', explanation: `Tc = ${Tc} K, Th = ${Th} K (เธ•เนเธญเธเนเธเนเน€เธเธฅเธงเธดเธ)` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\eta = 1 - \\frac{${Tc}}{${Th}} = 1 - ${(Tc / Th).toFixed(4)}`, explanation: 'เธญเธธเธ“เธซเธ เธนเธกเธดเธ•เนเธญเธเน€เธเนเธเธซเธเนเธงเธขเน€เธเธฅเธงเธดเธเน€เธชเธกเธญ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\eta = ${result.toFixed(4)} \\; (${(result * 100).toFixed(1)}\\% )`, explanation: `เธเธฃเธฐเธชเธดเธ—เธเธดเธ เธฒเธเธชเธนเธเธชเธธเธ”เน€เธ—เนเธฒเธเธฑเธ ${(result * 100).toFixed(1)}%` }
        ];
      } else if (target === 'Tc') {
        result = (1 - eta) * Th;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธขเนเธ', latex: 'T_c = (1 - \\eta) T_h', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T_c = ${result.toFixed(2)} \\ \\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธขเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} K` }
        ];
      } else if (target === 'Th') {
        if (eta === 1) throw new Error('เธเธฃเธฐเธชเธดเธ—เธเธดเธ เธฒเธเธ•เนเธญเธเนเธกเนเน€เธ—เนเธฒเธเธฑเธ 1 (เน€เธเนเธเนเธเนเธกเนเนเธ”เนเนเธเธ—เธฒเธเธเธดเธชเธดเธเธชเน)');
        result = Tc / (1 - eta);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธธเธ“เธซเธ เธนเธกเธดเธฃเนเธญเธ', latex: 'T_h = \\frac{T_c}{1 - \\eta}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T_h = ${result.toFixed(2)} \\ \\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเธฃเนเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} K` }
        ];
      }

      return { result, resultDisplay: `${(result * 100).toFixed(1)}%`, unit: '', steps };
    }
  },

  {
    id: 'first_law_thermo',
    name: 'First Law of Thermodynamics (ฮ”U = Q โ’ W)',
    nameTh: 'เธเธเธเนเธญเธ—เธตเนเธซเธเธถเนเธเธเธญเธเธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน (ฮ”U = Q โ’ W)',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'flame',
    grade: 'เธก.6',
    latex: '\\Delta U = Q - W',
    description: 'เธเธฅเธฑเธเธเธฒเธเธ เธฒเธขเนเธเธ—เธตเนเน€เธเธฅเธตเนเธขเธเนเธ = เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเนเธซเนเธฃเธฐเธเธ เธฅเธ เธเธฒเธเธ—เธตเนเธฃเธฐเธเธเธ—เธณเธ•เนเธญเธชเธดเนเธเนเธงเธ”เธฅเนเธญเธก (เน€เธเนเธ เธเธฒเธฃเธเธขเธฒเธขเธ•เธฑเธงเธเธญเธเนเธเนเธชเนเธเธเธฃเธฐเธเธญเธเธชเธนเธ)',
    variables: [
      { id: 'dU', symbol: '\\Delta U', name: 'Internal Energy Change', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธ เธฒเธขเนเธเน€เธเธฅเธตเนเธขเธ (ฮ”U)', unit: 'J', defaultValue: 300, min: -1e12, max: 1e12, step: 1 },
      { id: 'Q', symbol: 'Q', name: 'Heat Added', nameTh: 'เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเนเธซเน (Q)', unit: 'J', defaultValue: 1000, min: -1e12, max: 1e12, step: 1 },
      { id: 'W', symbol: 'W', name: 'Work Done by System', nameTh: 'เธเธฒเธเธ—เธตเนเธฃเธฐเธเธเธ—เธณ (W)', unit: 'J', defaultValue: 700, min: -1e12, max: 1e12, step: 1 }
    ],
    solveTargets: ['dU', 'Q', 'W'],
    calculate: (inputs, target = 'dU') => {
      let { dU, Q, W } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dU') {
        result = Q - W;
        steps = [
          { title: 'เธเธเธเนเธญเธ—เธตเนเธซเธเธถเนเธ', latex: '\\Delta U = Q - W', explanation: `Q = ${Q} J, W = ${W} J` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\Delta U = ${Q} - ${W}`, explanation: 'เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเนเธซเนเธฅเธเธเธฒเธเธ—เธตเนเธฃเธฐเธเธเธ—เธณ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta U = ${result.toFixed(1)} \\ \\text{J}`, explanation: result >= 0 ? `เธเธฅเธฑเธเธเธฒเธเธ เธฒเธขเนเธเน€เธเธดเนเธกเธเธถเนเธ ${result.toFixed(1)} J` : `เธเธฅเธฑเธเธเธฒเธเธ เธฒเธขเนเธเธฅเธ”เธฅเธ ${Math.abs(result).toFixed(1)} J` }
        ];
      } else if (target === 'Q') {
        result = dU + W;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธฃเนเธญเธ', latex: 'Q = \\Delta U + W', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `Q = ${result.toFixed(1)} \\ \\text{J}`, explanation: `เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเนเธซเนเธฃเธฐเธเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} J` }
        ];
      } else if (target === 'W') {
        result = Q - dU;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฒเธ', latex: 'W = Q - \\Delta U', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `W = ${result.toFixed(1)} \\ \\text{J}`, explanation: `เธเธฒเธเธ—เธตเนเธฃเธฐเธเธเธ—เธณเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} J` }
        ];
      }

      return { result, unit: 'J', steps };
    }
  },

  {
    id: 'combined_gas_law',
    name: 'Combined Gas Law (PโVโ/Tโ = PโVโ/Tโ)',
    nameTh: 'เธเธเธฃเธงเธกเนเธเนเธช (PโVโ/Tโ = PโVโ/Tโ)',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'wind',
    grade: 'เธก.4',
    latex: '\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธเธญเธเธเธงเธฒเธกเธ”เธฑเธ เธเธฃเธดเธกเธฒเธ•เธฃ เนเธฅเธฐเธญเธธเธ“เธซเธ เธนเธกเธด (เน€เธเธฅเธงเธดเธ) เธเธญเธเนเธเนเธชเนเธเธเธเธดเธ”เธ•เนเธญเน€เธเธทเนเธญเธ เน€เธเนเธ เธฅเธนเธเนเธเนเธเน€เธกเธทเนเธญเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธตเนเธขเธ',
    variables: [
      { id: 'P1', symbol: 'P_1', name: 'Pressure 1', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธเนเธฃเธ (Pโ)', unit: 'Pa', defaultValue: 100000, min: 0.0000001, max: 1e12, step: 1 },
      { id: 'V1', symbol: 'V_1', name: 'Volume 1', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเนเธฃเธ (Vโ)', unit: 'mยณ', defaultValue: 0.02, min: 0.0000001, max: 1e9, step: 0.001 },
      { id: 'T1', symbol: 'T_1', name: 'Temp 1 (K)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเนเธฃเธ (Tโ)', unit: 'K', defaultValue: 300, min: 0.0001, max: 1e9, step: 1 },
      { id: 'P2', symbol: 'P_2', name: 'Pressure 2', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธเธซเธฅเธฑเธ (Pโ)', unit: 'Pa', defaultValue: 120000, min: 0.0000001, max: 1e12, step: 1 },
      { id: 'V2', symbol: 'V_2', name: 'Volume 2', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฅเธฑเธ (Vโ)', unit: 'mยณ', defaultValue: 0.0185, min: 0.0000001, max: 1e9, step: 0.0001 },
      { id: 'T2', symbol: 'T_2', name: 'Temp 2 (K)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเธซเธฅเธฑเธ (Tโ)', unit: 'K', defaultValue: 333, min: 0.0001, max: 1e9, step: 1 }
    ],
    solveTargets: ['P1', 'V1', 'T1', 'P2', 'V2', 'T2'],
    calculate: (inputs, target = 'P2') => {
      let { P1, V1, T1, P2, V2, T2 } = inputs;
      let steps = [];
      let result = 0;

      const ratio1 = (P1 * V1) / T1;
      const pvT = (label, expr, val) => ({ title: `เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเน ${label}`, latex: expr, explanation: `เธเนเธฒเธเธเธ—เธตเน PยทV/T = ${val.toFixed(4)}` });

      switch (target) {
        case 'P2':
          if (V2 === 0) throw new Error('Vโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
          result = (P1 * V1 * T2) / (T1 * V2);
          steps = [
            pvT('เธเนเธญเธเธเธขเธฒเธข', `\\frac{P_1 V_1}{T_1} = \\frac{${P1} \\times ${V1}}{${T1}}`, ratio1),
            { title: 'เนเธ—เธเธเนเธฒเน€เธเธทเนเธญเธซเธฒ Pโ', latex: `P_2 = \\frac{${P1} \\times ${V1} \\times ${T2}}{${T1} \\times ${V2}}`, explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธขเนเธฒเธขเธ•เธฑเธงเนเธเธฃ' },
            { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P_2 = ${result.toFixed(1)} \\ \\text{Pa}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเธซเธฅเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} Pa` }
          ];
          break;
        case 'V2':
          if (P2 === 0) throw new Error('Pโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
          result = (P1 * V1 * T2) / (T1 * P2);
          steps = [
            pvT('เธเนเธญเธเธเธขเธฒเธข', `\\frac{P_1 V_1}{T_1} = \\frac{${P1} \\times ${V1}}{${T1}}`, ratio1),
            { title: 'เนเธ—เธเธเนเธฒเน€เธเธทเนเธญเธซเธฒ Vโ', latex: `V_2 = \\frac{${P1} \\times ${V1} \\times ${T2}}{${T1} \\times ${P2}}`, explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธขเนเธฒเธขเธ•เธฑเธงเนเธเธฃ' },
            { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V_2 = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฅเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยณ` }
          ];
          break;
        case 'T2':
          if (P2 === 0) throw new Error('Pโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
          result = (P2 * V2 * T1) / (P1 * V1);
          if (V2 === 0) throw new Error('Vโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
          steps = [
            pvT('เธเนเธญเธเธเธขเธฒเธข', `\\frac{P_1 V_1}{T_1} = \\frac{${P1} \\times ${V1}}{${T1}}`, ratio1),
            { title: 'เนเธ—เธเธเนเธฒเน€เธเธทเนเธญเธซเธฒ Tโ', latex: `T_2 = \\frac{${P2} \\times ${V2} \\times ${T1}}{${P1} \\times ${V1}}`, explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธขเนเธฒเธขเธ•เธฑเธงเนเธเธฃ' },
            { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T_2 = ${result.toFixed(2)} \\ \\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเธซเธฅเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} K` }
          ];
          break;
        case 'P1':
          result = (P2 * V2 * T1) / (T2 * V1);
          steps = [pvT('เธซเธฅเธฑเธเธเธขเธฒเธข', `\\frac{P_2 V_2}{T_2} = \\frac{${P2} \\times ${V2}}{${T2}}`, (P2 * V2) / T2), { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P_1 = ${result.toFixed(1)} \\ \\text{Pa}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} Pa` }];
          break;
        case 'V1':
          result = (P2 * V2 * T1) / (T2 * P1);
          steps = [pvT('เธซเธฅเธฑเธเธเธขเธฒเธข', `\\frac{P_2 V_2}{T_2} = \\frac{${P2} \\times ${V2}}{${T2}}`, (P2 * V2) / T2), { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V_1 = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mยณ` }];
          break;
        case 'T1':
          result = (P1 * V1 * T2) / (P2 * V2);
          steps = [pvT('เธซเธฅเธฑเธเธเธขเธฒเธข', `\\frac{P_2 V_2}{T_2} = \\frac{${P2} \\times ${V2}}{${T2}}`, (P2 * V2) / T2), { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T_1 = ${result.toFixed(2)} \\ \\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเนเธฃเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} K` }];
          break;
        default:
          throw new Error('target เนเธกเนเธ–เธนเธเธ•เนเธญเธ');
      }

      if (V1 === 0) throw new Error('Vโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');

      return { result, unit: target === 'V1' || target === 'V2' ? 'mยณ' : target === 'T1' || target === 'T2' ? 'K' : 'Pa', steps };
    }
  },

];