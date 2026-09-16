// @ts-nocheck

/**
 * Biology & Earth Science Formulas (เธเธตเธงเธงเธดเธ—เธขเธฒ + เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน) - เธก.3 - เธก.6
 * เธฃเธงเธกเธเธฑเธ hardy_weinberg, exponential_growth เน€เธ”เธดเธกเนเธ formulas.js เธซเธกเธงเธ” biology
 */

export const BIOLOGY_FORMULAS = [
  {
    id: 'logistic_growth',
    name: 'Logistic Population Growth',
    nameTh: 'เธเธฒเธฃเน€เธ•เธดเธเนเธ•เนเธเธเนเธฅเธเธดเธชเธ•เธดเธเธเธญเธเธเธฃเธฐเธเธฒเธเธฃ',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'activity',
    grade: 'เธก.6',
    latex: '\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)',
    description: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธกเธเธฃเธฐเธเธฒเธเธฃเนเธเธเธเธณเธเธฑเธ”เธ—เธฃเธฑเธเธขเธฒเธเธฃ = rยทN(1โ’N/K) เน€เธกเธทเนเธญ r = เธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธกเธ•เนเธญเธ•เธฑเธง K = เธเธตเธ”เธเธงเธฒเธกเธชเธฒเธกเธฒเธฃเธ–เธฃเธญเธเธฃเธฑเธ (carrying capacity)',
    variables: [
      { id: 'dN', symbol: '\\frac{dN}{dt}', name: 'Growth Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธกเธเธฃเธฐเธเธฒเธเธฃ', unit: 'เธ•เธฑเธง/เน€เธงเธฅเธฒ', defaultValue: 25, min: -1e9, max: 1e9, step: 1 },
      { id: 'r', symbol: 'r', name: 'Per Capita Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธกเธ•เนเธญเธ•เธฑเธง (r)', unit: '1/เน€เธงเธฅเธฒ', defaultValue: 0.1, min: -10, max: 10, step: 0.01 },
      { id: 'N', symbol: 'N', name: 'Population Size', nameTh: 'เธเธเธฒเธ”เธเธฃเธฐเธเธฒเธเธฃ (N)', unit: 'เธ•เธฑเธง', defaultValue: 500, min: 0, max: 1e12, step: 1 },
      { id: 'K', symbol: 'K', name: 'Carrying Capacity', nameTh: 'เธเธตเธ”เธเธงเธฒเธกเธชเธฒเธกเธฒเธฃเธ–เธฃเธญเธเธฃเธฑเธ (K)', unit: 'เธ•เธฑเธง', defaultValue: 1000, min: 0.0001, max: 1e12, step: 1 }
    ],
    solveTargets: ['dN', 'r', 'N', 'K'],
    calculate: (inputs, target = 'dN') => {
      let { dN, r, N, K } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dN') {
        result = r * N * (1 - N / K);
        steps = [
          { title: 'เธชเธกเธเธฒเธฃเนเธฅเธเธดเธชเธ•เธดเธ', latex: '\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)', explanation: `r = ${r}, N = ${N}, K = ${K}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\frac{dN}{dt} = ${r} \\times ${N} \\times \\left(1 - \\frac{${N}}{${K}}\\right)`, explanation: `1 โ’ N/K = ${(1 - N / K).toFixed(3)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\frac{dN}{dt} = ${result.toFixed(1)} \\ \\text{เธ•เธฑเธง/เน€เธงเธฅเธฒ}`, explanation: `เธเธฃเธฐเธเธฒเธเธฃเน€เธเธดเนเธก ${result.toFixed(1)} เธ•เธฑเธงเธ•เนเธญเธซเธเนเธงเธขเน€เธงเธฅเธฒ` }
        ];
      } else if (target === 'K') {
        const q = 1 - dN / (r * N);
        if (r === 0 || N === 0) throw new Error('r เนเธฅเธฐ N เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        if (q <= 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (เธ•เนเธญเธเธกเธต dN < rยทN เธเธถเธเธเธฐเธซเธฒ K เนเธ”เน)');
        result = N / q;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ K', latex: 'K = \\frac{N}{1 - \\frac{dN}{rN}}', explanation: `dN = ${dN}, r = ${r}, N = ${N}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `K = ${result.toFixed(1)} \\ \\text{เธ•เธฑเธง}`, explanation: `เธเธตเธ”เธเธงเธฒเธกเธชเธฒเธกเธฒเธฃเธ–เธฃเธญเธเธฃเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธ•เธฑเธง` }
        ];
      } else if (target === 'r') {
        if (N === 0 || K === N) throw new Error('N เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 เนเธฅเธฐ N โ  K');
        result = dN / (N * (1 - N / K));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ r', latex: 'r = \\frac{dN/dt}{N(1 - N/K)}', explanation: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธกเธซเธฒเธฃเน€เธ—เธญเธกเธเธฃเธฑเธเธเนเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)} \\ \\text{/เน€เธงเธฅเธฒ}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธกเธ•เนเธญเธ•เธฑเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'N') {
        if (r === 0) throw new Error('r เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        const disc = K * K * r * r - 4 * r * K * dN;
        if (disc < 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (เนเธกเนเธกเธตเธเนเธฒ N เธ—เธตเนเน€เธเนเธเธเธฃเธดเธ)');
        const roots = [];
        const s = Math.sqrt(disc);
        const n1 = (K * r + s) / (2 * r);
        const n2 = (K * r - s) / (2 * r);
        if (n1 >= 0) roots.push(n1);
        if (n2 >= 0 && Math.abs(n2 - n1) > 1e-9) roots.push(n2);
        if (roots.length === 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (N เธ•เธดเธ”เธฅเธเธ—เธธเธเธเนเธฒ)');
        result = roots[roots.length - 1];
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเน€เธเนเธเธชเธกเธเธฒเธฃเธเธณเธฅเธฑเธเธชเธญเธ', latex: 'rN^2 - KrN + K \\, dN/dt = 0', explanation: 'เนเธเนเธ”เนเธงเธขเธชเธนเธ•เธฃเธเธณเธฅเธฑเธเธชเธญเธ: N = \\frac{Kr \\pm \\sqrt{K^2r^2 - 4rK(dN/dt)}}{2r}' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${roots.map(x => x.toFixed(1)).join(' เธซเธฃเธทเธญ ')} \\ \\text{เธ•เธฑเธง}`, explanation: roots.length > 1 ? `เธเธณเธ•เธญเธเธ—เธตเนเน€เธเนเธเนเธเนเธ”เน: ${roots.map(x => x.toFixed(1)).join(' เนเธฅเธฐ ')} เธ•เธฑเธง (เน€เธฅเธทเธญเธเธเนเธฒเธ—เธตเนเธ”เธนเธชเธกเน€เธซเธ•เธธเธชเธกเธเธฅ)` : `เธเธเธฒเธ”เธเธฃเธฐเธเธฒเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธ•เธฑเธง` }
        ];
      }

      return { result, unit: target === 'dN' ? 'เธ•เธฑเธง/เน€เธงเธฅเธฒ' : target === 'N' || target === 'K' ? 'เธ•เธฑเธง' : '1/เน€เธงเธฅเธฒ', steps };
    }
  },

  {
    id: 'population_change',
    name: 'Population Change (ฮ”N)',
    nameTh: 'เธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเธเธเธฒเธ”เธเธฃเธฐเธเธฒเธเธฃ (ฮ”N)',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'users',
    grade: 'เธก.6',
    latex: '\\Delta N = (B + I) - (D + E)',
    description: 'เธเธฃเธฐเธเธฒเธเธฃเน€เธเธฅเธตเนเธขเธ = (เน€เธเธดเธ” + เธญเธเธขเธเน€เธเนเธฒ) โ’ (เธ•เธฒเธข + เธญเธเธขเธเธญเธญเธ) เน€เธเนเธ เน€เธเธดเธ” 20 เธ•เธฒเธข 8 เธญเธเธขเธเน€เธเนเธฒ 5 เธญเธญเธ 3 โ’ เน€เธเธดเนเธก 14',
    variables: [
      { id: 'dN', symbol: '\\Delta N', name: 'Population Change', nameTh: 'เธเธฃเธฐเธเธฒเธเธฃเธ—เธตเนเน€เธเธฅเธตเนเธขเธ (ฮ”N)', unit: 'เธ•เธฑเธง', defaultValue: 14, min: -1e12, max: 1e12, step: 1 },
      { id: 'B', symbol: 'B', name: 'Births', nameTh: 'เน€เธเธดเธ” (B)', unit: 'เธ•เธฑเธง', defaultValue: 20, min: 0, max: 1e12, step: 1 },
      { id: 'I', symbol: 'I', name: 'Immigration', nameTh: 'เธญเธเธขเธเน€เธเนเธฒ (I)', unit: 'เธ•เธฑเธง', defaultValue: 5, min: 0, max: 1e12, step: 1 },
      { id: 'D', symbol: 'D', name: 'Deaths', nameTh: 'เธ•เธฒเธข (D)', unit: 'เธ•เธฑเธง', defaultValue: 8, min: 0, max: 1e12, step: 1 },
      { id: 'E', symbol: 'E', name: 'Emigration', nameTh: 'เธญเธเธขเธเธญเธญเธ (E)', unit: 'เธ•เธฑเธง', defaultValue: 3, min: 0, max: 1e12, step: 1 }
    ],
    solveTargets: ['dN', 'B', 'D'],
    calculate: (inputs, target = 'dN') => {
      let { dN, B, I, D, E } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dN') {
        result = (B + I) - (D + E);
        steps = [
          { title: 'เธชเธกเธเธฒเธฃเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธเธเธฃเธฐเธเธฒเธเธฃ', latex: '\\Delta N = (B + I) - (D + E)', explanation: `B = ${B}, I = ${I}, D = ${D}, E = ${E}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\Delta N = (${B} + ${I}) - (${D} + ${E}) = ${B + I} - ${D + E}`, explanation: 'เธฃเธงเธกเธ”เนเธฒเธเน€เธเธดเนเธกเนเธฅเธฐเธ”เนเธฒเธเธฅเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta N = ${result} \\ \\text{เธ•เธฑเธง}`, explanation: result >= 0 ? `เธเธฃเธฐเธเธฒเธเธฃเน€เธเธดเนเธกเธเธถเนเธ ${result} เธ•เธฑเธง` : `เธเธฃเธฐเธเธฒเธเธฃเธฅเธ”เธฅเธ ${Math.abs(result)} เธ•เธฑเธง` }
        ];
      } else if (target === 'B') {
        result = dN + (D + E) - I;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเน€เธเธดเธ”', latex: 'B = \\Delta N + (D + E) - I', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `B = ${result.toFixed(0)} \\ \\text{เธ•เธฑเธง}`, explanation: `เธเธณเธเธงเธเน€เธเธดเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธ•เธฑเธง` }
        ];
      } else if (target === 'D') {
        result = (B + I) - dN - E;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธ•เธฒเธข', latex: 'D = (B + I) - \\Delta N - E', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `D = ${result.toFixed(0)} \\ \\text{เธ•เธฑเธง}`, explanation: `เธเธณเธเธงเธเธ•เธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธ•เธฑเธง` }
        ];
      }

      return { result, unit: 'เธ•เธฑเธง', steps };
    }
  },

  {
    id: 'doubling_time',
    name: 'Population Doubling Time',
    nameTh: 'เน€เธงเธฅเธฒเน€เธเธดเนเธกเธเธฃเธฐเธเธฒเธเธฃเน€เธเนเธเน€เธ—เนเธฒเธ•เธฑเธง',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'clock',
    grade: 'เธก.6',
    latex: 't_d = \\frac{\\ln 2}{r}',
    description: 'เน€เธงเธฅเธฒเธ—เธตเนเธเธฃเธฐเธเธฒเธเธฃเน€เธเธดเนเธกเน€เธเนเธเน€เธ—เนเธฒเธ•เธฑเธงเธเธฒเธเธเธฒเธฃเน€เธ•เธดเธเนเธ•เนเธเธเน€เธญเนเธเธเนเนเธเน€เธเธเน€เธเธตเธขเธฅ = ln2 รท เธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธกเธ•เนเธญเธ•เธฑเธง เน€เธเนเธ r=0.04 โ’ ~17 เธเธต',
    variables: [
      { id: 'td', symbol: 't_d', name: 'Doubling Time', nameTh: 'เน€เธงเธฅเธฒเน€เธเธดเนเธกเน€เธ—เนเธฒเธ•เธฑเธง (t_d)', unit: 'เน€เธงเธฅเธฒ', defaultValue: 17.3, min: 0.001, max: 1e9, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Per Capita Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธกเธ•เนเธญเธ•เธฑเธง (r)', unit: '1/เน€เธงเธฅเธฒ', defaultValue: 0.04, min: 0.0000001, max: 100, step: 0.001 }
    ],
    solveTargets: ['td', 'r'],
    calculate: (inputs, target = 'td') => {
      let { td, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'td') {
        result = Math.LN2 / r;
        steps = [
          { title: 'เธชเธนเธ•เธฃเน€เธงเธฅเธฒเน€เธเธดเนเธกเน€เธ—เนเธฒเธ•เธฑเธง', latex: 't_d = \\frac{\\ln 2}{r}', explanation: `r = ${r}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `t_d = \\frac{0.6931}{${r}}`, explanation: 'ln2 โ 0.6931' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t_d = ${result.toFixed(2)} \\ \\text{เธซเธเนเธงเธขเน€เธงเธฅเธฒ}`, explanation: `เธเธฃเธฐเธเธฒเธเธฃเน€เธเธดเนเธกเน€เธ—เนเธฒเธ•เธฑเธงเนเธ ${result.toFixed(2)} เธซเธเนเธงเธขเน€เธงเธฅเธฒ` }
        ];
      } else if (target === 'r') {
        if (td === 0) throw new Error('t_d เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.LN2 / td;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธก', latex: 'r = \\frac{\\ln 2}{t_d}', explanation: `t_d = ${td}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)} \\ \\text{/เน€เธงเธฅเธฒ}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธเธดเนเธกเธ•เนเธญเธ•เธฑเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: target === 'td' ? 'เน€เธงเธฅเธฒ' : '1/เน€เธงเธฅเธฒ', steps };
    }
  },

  {
    id: 'allele_frequency',
    name: 'Allele Frequency (p)',
    nameTh: 'เธเธงเธฒเธกเธ–เธตเนเนเธญเธฅเธฅเธตเธฅ (p)',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'dna',
    grade: 'เธก.6',
    latex: 'p = \\frac{2N_{AA} + N_{Aa}}{2N}',
    description: 'เธเธงเธฒเธกเธ–เธตเนเนเธญเธฅเธฅเธตเธฅ A เนเธเธเธฃเธฐเธเธฒเธเธฃ = (2ร—เธเธณเธเธงเธAA + เธเธณเธเธงเธAa) รท (2ร—เธเธณเธเธงเธเธ—เธฑเนเธเธซเธกเธ”) เนเธเนเธซเธฒเธเธงเธฒเธกเธ–เธตเนเธขเธตเธเนเธเธเธฃเธฐเธเธฒเธเธฃ',
    variables: [
      { id: 'p', symbol: 'p', name: 'Frequency of A', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเนเธญเธฅเธฅเธตเธฅ A (p)', unit: '', defaultValue: 0.7, min: 0, max: 1, step: 0.01 },
      { id: 'NAA', symbol: 'N_{AA}', name: 'Count AA', nameTh: 'เธเธณเธเธงเธเธขเธตเธ AA (เธ•เธฑเธง)', unit: 'เธ•เธฑเธง', defaultValue: 280, min: 0, max: 1e9, step: 1 },
      { id: 'NAa', symbol: 'N_{Aa}', name: 'Count Aa', nameTh: 'เธเธณเธเธงเธเธขเธตเธ Aa (เธ•เธฑเธง)', unit: 'เธ•เธฑเธง', defaultValue: 140, min: 0, max: 1e9, step: 1 },
      { id: 'N', symbol: 'N', name: 'Total Individuals', nameTh: 'เธเธฃเธฐเธเธฒเธเธฃเธ—เธฑเนเธเธซเธกเธ” (เธ•เธฑเธง)', unit: 'เธ•เธฑเธง', defaultValue: 500, min: 1, max: 1e9, step: 1 }
    ],
    solveTargets: ['p', 'NAA'],
    calculate: (inputs, target = 'p') => {
      let { p, NAA, NAa, N } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'p') {
        result = (2 * NAA + NAa) / (2 * N);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธ–เธตเนเนเธญเธฅเธฅเธตเธฅ', latex: 'p = \\frac{2N_{AA} + N_{Aa}}{2N}', explanation: `AA = ${NAA}, Aa = ${NAa}, เธฃเธงเธก = ${N}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `p = \\frac{2(${NAA}) + ${NAa}}{2(${N})} = \\frac{${2 * NAA + NAa}}{${2 * N}}`, explanation: 'เนเธญเธฅเธฅเธตเธฅ A เธ—เธฑเนเธเธซเธกเธ”เธซเธฒเธฃเนเธญเธฅเธฅเธตเธฅเธฃเธงเธก' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `p = ${result.toFixed(4)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `เธเธงเธฒเธกเธ–เธตเนเนเธญเธฅเธฅเธตเธฅ A เน€เธ—เนเธฒเธเธฑเธ ${(result * 100).toFixed(2)}%` }
        ];
      } else if (target === 'NAA') {
        result = (p * 2 * N - NAa) / 2;
        if (result < 0) throw new Error('เธเนเธญเธกเธนเธฅเนเธกเนเธชเธญเธ”เธเธฅเนเธญเธ (NAA เธ•เธดเธ”เธฅเธ)');
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธ AA', latex: 'N_{AA} = \\frac{2Np - N_{Aa}}{2}', explanation: `p = ${p}, N = ${N}, N_Aa = ${NAa}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N_{AA} = ${result.toFixed(1)} \\ \\text{เธ•เธฑเธง}`, explanation: `เธเธณเธเธงเธ AA เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธ•เธฑเธง` }
        ];
      }

      return { result, unit: target === 'p' ? '' : 'เธ•เธฑเธง', steps };
    }
  },

  {
    id: 'cardiac_output',
    name: 'Cardiac Output',
    nameTh: 'เธเธฃเธดเธกเธฒเธ“เน€เธฅเธทเธญเธ”เธ—เธตเนเธซเธฑเธงเนเธเธเธตเธ”เธ•เนเธญเธเธฒเธ—เธต',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'heart',
    grade: 'เธก.4',
    latex: 'CO = HR \\times SV',
    description: 'cardiac output = เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธซเธฑเธงเนเธ (HR) ร— เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฅเธทเธญเธ”เธเธตเธ”เธ•เนเธญเธเธฃเธฑเนเธ (SV) เน€เธเนเธ 70 เธเธฃเธฑเนเธ/เธเธฒเธ—เธต ร— 75 เธกเธฅ. = 5250 เธกเธฅ./เธเธฒเธ—เธต',
    variables: [
      { id: 'HR', symbol: 'HR', name: 'Heart Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธซเธฑเธงเนเธ', unit: 'เธเธฃเธฑเนเธ/เธเธฒเธ—เธต', defaultValue: 70, min: 1, max: 400, step: 1 },
      { id: 'SV', symbol: 'SV', name: 'Stroke Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฅเธทเธญเธ”เธ•เนเธญเธเธฃเธฑเนเธ', unit: 'mL', defaultValue: 75, min: 1, max: 500, step: 1 },
      { id: 'CO', symbol: 'CO', name: 'Cardiac Output', nameTh: 'Cardiac Output', unit: 'mL/min', defaultValue: 5250, min: 1, max: 1e6, step: 1 }
    ],
    solveTargets: ['CO', 'HR', 'SV'],
    calculate: (inputs, target = 'CO') => {
      const { HR, SV, CO } = inputs;
      let result, steps;
      if (target === 'CO') {
        result = HR * SV;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'CO = HR \\times SV', explanation: `HR = ${HR} เธเธฃเธฑเนเธ/เธเธฒเธ—เธต, SV = ${SV} mL` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `CO = ${HR} \\times ${SV}`, explanation: 'เธญเธฑเธ•เธฃเธฒเน€เธ•เนเธเธเธนเธ“เธเธฃเธดเธกเธฒเธ•เธฃเธ•เนเธญเธเธฃเธฑเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `CO = ${result} \\ \\text{mL/min}`, explanation: `เธซเธฑเธงเนเธเธเธตเธ”เน€เธฅเธทเธญเธ” ${result.toLocaleString()} เธกเธฅ. เธ•เนเธญเธเธฒเธ—เธต` }
        ];
      } else if (target === 'HR') {
        if (SV === 0) throw new Error('SV เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = CO / SV;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ HR', latex: 'HR = \\frac{CO}{SV}', explanation: `CO = ${CO} mL/min, SV = ${SV} mL` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `HR = \\frac{${CO}}{${SV}} = ${result.toFixed(1)} \\ \\text{เธเธฃเธฑเนเธ/เธเธฒเธ—เธต}`, explanation: `เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธซเธฑเธงเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธเธฃเธฑเนเธ/เธเธฒเธ—เธต` }
        ];
      } else {
        if (HR === 0) throw new Error('HR เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = CO / HR;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ SV', latex: 'SV = \\frac{CO}{HR}', explanation: `CO = ${CO} mL/min, HR = ${HR} เธเธฃเธฑเนเธ/เธเธฒเธ—เธต` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `SV = \\frac{${CO}}{${HR}} = ${result.toFixed(1)} \\ \\text{mL}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฅเธทเธญเธ”เธ•เนเธญเธเธฃเธฑเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} mL` }
        ];
      }
      return { result, unit: target === 'CO' ? 'mL/min' : target === 'HR' ? 'เธเธฃเธฑเนเธ/เธเธฒเธ—เธต' : 'mL', steps };
    }
  }
];

export const EARTH_SCIENCE_FORMULAS = [
  {
    id: 'surface_gravity',
    name: 'Surface Gravity (g = GM/Rยฒ)',
    nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธเธเธทเนเธเธเธดเธงเธ”เธฒเธง (g = GM/Rยฒ)',
    category: 'earth',
    categoryTh: 'เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน',
    icon: 'globe',
    grade: 'เธก.5',
    latex: 'g = \\frac{GM}{R^2}',
    description: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธเธ—เธตเนเธเธทเนเธเธเธดเธง = Gร—เธกเธงเธฅเธ”เธฒเธง รท เธฃเธฑเธจเธกเธตยฒ เน€เธเนเธ เนเธฅเธ M=5.97ร—10ยฒโด kg, R=6.37ร—10โถ m โ’ g โ 9.8 m/sยฒ',
    variables: [
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ (g)', unit: 'm/sยฒ', defaultValue: 9.8, min: 0.0001, max: 100, step: 0.01 },
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเนเธเนเธกเธ–เนเธงเธ (G)', unit: 'Nยทmยฒ/kgยฒ', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Planet Mass', nameTh: 'เธกเธงเธฅเธ”เธฒเธง (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'R', symbol: 'R', name: 'Planet Radius', nameTh: 'เธฃเธฑเธจเธกเธตเธ”เธฒเธง (R)', unit: 'm', defaultValue: 6.371e6, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['g', 'M', 'R'],
    calculate: (inputs, target = 'g') => {
      let { g, G, M, R } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'g') {
        result = (G * M) / (R * R);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ', latex: 'g = \\frac{GM}{R^2}', explanation: `M = ${M.toExponential(2)}, R = ${R.toExponential(2)}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `g = \\frac{(${G})(${M.toExponential(2)})}{(${R.toExponential(2)})^2}`, explanation: `GM = ${(G * M).toExponential(3)}, Rยฒ = ${(R * R).toExponential(3)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `g = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} m/sยฒ` }
        ];
      } else if (target === 'M') {
        if (G === 0) throw new Error('G เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (g * R * R) / G;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเธ”เธฒเธง', latex: 'M = \\frac{g R^2}{G}', explanation: `g = ${g}, R = ${R.toExponential(2)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `M = ${result.toExponential(3)} \\ \\text{kg}`, explanation: `เธกเธงเธฅเธ”เธฒเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} kg` }
        ];
      } else if (target === 'R') {
        if (g === 0) throw new Error('g เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt((G * M) / g);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'R = \\sqrt{\\frac{GM}{g}}', explanation: `g = ${g}, M = ${M.toExponential(2)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `R = ${result.toExponential(3)} \\ \\text{m}`, explanation: `เธฃเธฑเธจเธกเธตเธ”เธฒเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'g' ? 'm/sยฒ' : target === 'M' ? 'kg' : 'm', steps };
    }
  },

  {
    id: 'orbital_velocity',
    name: 'Orbital Velocity (v = โ(GM/r))',
    nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธงเธเนเธเธเธฃ (v = โ(GM/r))',
    category: 'earth',
    categoryTh: 'เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน',
    icon: 'orbit',
    grade: 'เธก.5-6',
    latex: 'v = \\sqrt{\\frac{GM}{r}}',
    description: 'เธเธงเธฒเธกเน€เธฃเนเธงเธ—เธตเนเธงเธฑเธ•เธ–เธธเธ•เนเธญเธเธกเธตเน€เธเธทเนเธญเนเธเธเธฃเธฃเธญเธเธ”เธฒเธงเธ”เนเธงเธขเธฃเธฐเธขเธฐ r เธเธฒเธเธจเธนเธเธขเนเธเธฅเธฒเธ เน€เธเนเธ เธ”เธฒเธงเน€เธ—เธตเธขเธกเนเธเธเธฃเธฃเธญเธเนเธฅเธเธ—เธตเนเธฃเธฑเธจเธกเธต 7,000 km',
    variables: [
      { id: 'v', symbol: 'v', name: 'Orbital Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธงเธเนเธเธเธฃ (v)', unit: 'm/s', defaultValue: 7543, min: 0, max: 1e9, step: 1 },
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเนเธเนเธกเธ–เนเธงเธ (G)', unit: 'Nยทmยฒ/kgยฒ', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Central Mass', nameTh: 'เธกเธงเธฅเธเธญเธเธ”เธฒเธงเธเธฅเธฒเธ (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'r', symbol: 'r', name: 'Orbit Radius', nameTh: 'เธฃเธฐเธขเธฐเธงเธเนเธเธเธฃเธเธฒเธเธจเธนเธเธขเนเธเธฅเธฒเธ (r)', unit: 'm', defaultValue: 7e6, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['v', 'r'],
    calculate: (inputs, target = 'v') => {
      let { v, G, M, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        result = Math.sqrt((G * M) / r);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเน€เธฃเนเธงเธงเธเนเธเธเธฃ', latex: 'v = \\sqrt{\\frac{GM}{r}}', explanation: `M = ${M.toExponential(2)}, r = ${r.toExponential(2)} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `v = \\sqrt{\\frac{(${G})(${M.toExponential(2)})}{${r.toExponential(2)}}}`, explanation: `GM/r = ${(G * M / r).toExponential(3)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v = ${result.toFixed(0)} \\ \\text{m/s} \\; (${(result / 1000).toFixed(1)} \\ \\text{km/s})`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธงเธเนเธเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${(result / 1000).toFixed(1)} km/s` }
        ];
      } else if (target === 'r') {
        if (v === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธง v เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (G * M) / (v * v);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธฃเธฐเธขเธฐเธงเธเนเธเธเธฃ', latex: 'r = \\frac{GM}{v^2}', explanation: `v = ${v} m/s, M = ${M.toExponential(2)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toExponential(3)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธงเธเนเธเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'v' ? 'm/s' : 'm', steps };
    }
  },

  {
    id: 'newtons_kepler_period',
    name: 'Orbital Period (T = 2ฯ€โ(rยณ/GM))',
    nameTh: 'เธเธฒเธเธเธฒเธฃเนเธเธเธฃ (T = 2ฯ€โ(rยณ/GM))',
    category: 'earth',
    categoryTh: 'เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน',
    icon: 'orbit',
    grade: 'เธก.5-6',
    latex: 'T = 2\\pi \\sqrt{\\frac{r^3}{GM}}',
    description: 'เธเธฒเธเธเธฒเธฃเนเธเธเธฃเธเธญเธเธ”เธฒเธงเธฃเธญเธเธ”เธฒเธงเธเธฅเธฒเธ = 2ฯ€โ(rยณ/GM) เน€เธเนเธ เธ”เธฒเธงเน€เธ—เธตเธขเธกเธเนเธฒเธเธเนเธฒเธ—เธตเนเธฃเธฑเธจเธกเธต ~42,164 km เธกเธตเธเธฒเธ 24 เธเธฑเนเธงเนเธกเธ',
    variables: [
      { id: 'T', symbol: 'T', name: 'Orbital Period', nameTh: 'เธเธฒเธเธเธฒเธฃเนเธเธเธฃ (T)', unit: 's', defaultValue: 86164, min: 0.001, max: 1e15, step: 1 },
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเนเธเนเธกเธ–เนเธงเธ (G)', unit: 'Nยทmยฒ/kgยฒ', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Central Mass', nameTh: 'เธกเธงเธฅเธเธญเธเธ”เธฒเธงเธเธฅเธฒเธ (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'r', symbol: 'r', name: 'Orbit Radius', nameTh: 'เธฃเธฐเธขเธฐเธงเธเนเธเธเธฃเธเธฒเธเธจเธนเธเธขเนเธเธฅเธฒเธ (r)', unit: 'm', defaultValue: 4.2164e7, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['T', 'r'],
    calculate: (inputs, target = 'T') => {
      let { T, G, M, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'T') {
        result = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / (G * M));
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธเธเธฒเธฃเนเธเธเธฃ', latex: 'T = 2\\pi \\sqrt{\\frac{r^3}{GM}}', explanation: `r = ${r.toExponential(2)} m, M = ${M.toExponential(2)}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `T = 2\\pi \\sqrt{\\frac{${Math.pow(r, 3).toExponential(3)}}{${(G * M).toExponential(3)}}}`, explanation: `โ(rยณ/GM) = ${Math.sqrt(Math.pow(r, 3) / (G * M)).toExponential(3)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `T = ${result.toFixed(0)} \\ \\text{s} \\; (${(result / 3600).toFixed(2)} \\ \\text{เธเธก.})`, explanation: `เธเธฒเธเธเธฒเธฃเนเธเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${(result / 3600).toFixed(2)} เธเธฑเนเธงเนเธกเธ` }
        ];
      } else if (target === 'r') {
        const rad = T / (2 * Math.PI);
        result = Math.cbrt(G * M * rad * rad);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฑเธจเธกเธตเธงเธเนเธเธเธฃ', latex: 'r = \\sqrt[3]{\\frac{GMT^2}{4\\pi^2}}', explanation: `T = ${T} s (${(T / 3600).toFixed(2)} เธเธก.)` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toExponential(3)} \\ \\text{m}`, explanation: `เธฃเธฐเธขเธฐเธงเธเนเธเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'T' ? 's' : 'm', steps };
    }
  },

  {
    id: 'earthquake_magnitude',
    name: 'Earthquake Magnitude (M = log(A))',
    nameTh: 'เธเธเธฒเธ”เนเธเนเธเธ”เธดเธเนเธซเธง (เนเธกเธเธเธดเธเธนเธ” M = logโโ€ A)',
    category: 'earth',
    categoryTh: 'เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน',
    icon: 'activity',
    grade: 'เธก.3-6',
    latex: 'M = \\log_{10} A',
    description: 'เนเธกเธเธเธดเธเธนเธ” (เธกเธฒเธ•เธฃเธฒเธงเธดเธเน€เธ•เธญเธฃเน) = logโโ€(เนเธญเธกเธเธฅเธดเธเธนเธ”เธชเธฑเธกเธเธฑเธ—เธเน) เนเธ”เธข M เน€เธเธดเนเธก 1 เธซเธกเธฒเธขเธ–เธถเธเธเธฅเธฑเธเธเธฒเธเธกเธฒเธเธเธงเนเธฒ ~32 เน€เธ—เนเธฒ เนเธเนเธกเธฒเธ•เธฃเธฒเธงเธดเธเน€เธ•เธญเธฃเน',
    variables: [
      { id: 'M', symbol: 'M', name: 'Magnitude', nameTh: 'เธเธเธฒเธ”เนเธเนเธเธ”เธดเธเนเธซเธง (เนเธกเธเธเธดเธเธนเธ”)', unit: '', defaultValue: 5, min: -2, max: 12, step: 0.1 },
      { id: 'A', symbol: 'A', name: 'Amplitude Ratio', nameTh: 'เนเธญเธกเธเธฅเธดเธเธนเธ”เธชเธฑเธกเธเธฑเธ—เธเน (A)', unit: '', defaultValue: 100000, min: 1, max: 1e12, step: 1 }
    ],
    solveTargets: ['M', 'A'],
    calculate: (inputs, target = 'M') => {
      let { M, A } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'M') {
        result = Math.log10(A);
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธกเธเธเธดเธเธนเธ”', latex: 'M = \\log_{10} A', explanation: `A = ${A.toExponential(2)}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `M = \\log_{10}(${A.toExponential(2)})`, explanation: 'เธซเธฒเธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเธเธฒเธ 10' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `M = ${result.toFixed(2)}`, explanation: `เนเธกเธเธเธดเธเธนเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}` }
        ];
      } else if (target === 'A') {
        result = Math.pow(10, M);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธญเธกเธเธฅเธดเธเธนเธ”', latex: 'A = 10^M', explanation: `M = ${M}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `A = ${result.toExponential(3)}`, explanation: `เนเธญเธกเธเธฅเธดเธเธนเธ”เธชเธฑเธกเธเธฑเธ—เธเนเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)}` }
        ];
      }

      return { result, unit: target === 'A' ? '' : '', steps };
    }
  }
];