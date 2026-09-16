// @ts-nocheck

/**
 * Chemistry Formulas (เน€เธเธกเธต) - เธก.4 - เธก.6
 * เธฃเธงเธกเธเธฑเธ molarity, pH, dilution เน€เธ”เธดเธกเนเธ formulas.js เธซเธกเธงเธ” chemistry
 */

export const CHEMISTRY_FORMULAS = [
  {
    id: 'mole_mass',
    name: 'Moles from Mass (n = m/M)',
    nameTh: 'เธเธณเธเธงเธ“เนเธกเธฅเธเธฒเธเธกเธงเธฅ (n = m/M)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'hexagon',
    grade: 'เธก.4',
    latex: 'n = \\frac{m}{M}',
    description: 'เธเธณเธเธงเธเนเธกเธฅ = เธกเธงเธฅ รท เธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ/เธกเธงเธฅเธญเธฐเธ•เธญเธก (M) เน€เธเนเธ NaCl 58.44 g/mol โ€” 117 g เนเธ”เน 2 เนเธกเธฅ',
    variables: [
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'เธเธณเธเธงเธเนเธกเธฅ (n)', unit: 'mol', defaultValue: 2, min: 0, max: 1e15, step: 0.01 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ (m)', unit: 'g', defaultValue: 117, min: 0, max: 1e15, step: 1 },
      { id: 'M', symbol: 'M', name: 'Molar Mass', nameTh: 'เธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ/เธกเธงเธฅเธญเธฐเธ•เธญเธก (M)', unit: 'g/mol', defaultValue: 58.44, min: 0.0001, max: 1e6, step: 0.01 }
    ],
    solveTargets: ['n', 'm', 'M'],
    calculate: (inputs, target = 'n') => {
      let { n, m, M } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = m / M;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธณเธเธงเธ“เนเธกเธฅ', latex: 'n = \\frac{m}{M}', explanation: `m = ${m} g, M = ${M} g/mol` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `n = \\frac{${m}}{${M}}`, explanation: 'เธกเธงเธฅเธซเธฒเธฃเธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `เธเธณเธเธงเธเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅ` }
        ];
      } else if (target === 'm') {
        result = n * M;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅ', latex: 'm = n \\cdot M', explanation: 'เนเธกเธฅเธเธนเธ“เธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(2)} \\ \\text{g}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฃเธฑเธก` }
        ];
      } else if (target === 'M') {
        if (n === 0) throw new Error('เนเธกเธฅ n เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = m / n;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ', latex: 'M = \\frac{m}{n}', explanation: 'เธกเธงเธฅเธซเธฒเธฃเนเธกเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `M = ${result.toFixed(2)} \\ \\text{g/mol}`, explanation: `เธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} g/mol` }
        ];
      }

      return { result, unit: target === 'M' ? 'g/mol' : target === 'm' ? 'g' : 'mol', steps };
    }
  },

  {
    id: 'mole_particles',
    name: 'Moles from Particles (n = N/Nโ)',
    nameTh: 'เธเธณเธเธงเธ“เนเธกเธฅเธเธฒเธเธเธณเธเธงเธเธญเธเธธเธ เธฒเธ (n = N/Nโ)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'hexagon',
    grade: 'เธก.4',
    latex: 'n = \\frac{N}{N_A}',
    description: 'เธเธณเธเธงเธเนเธกเธฅเธเธฒเธเธเธณเธเธงเธเธญเธเธธเธ เธฒเธ (เธญเธฐเธ•เธญเธก/เนเธกเน€เธฅเธเธธเธฅ/เนเธญเธญเธญเธ) เนเธ”เธข Nโ = 6.022ร—10ยฒยณ เธญเธเธธเธ เธฒเธ/เนเธกเธฅ (เน€เธฅเธเธญเธฒเนเธงเธเธฒเนเธ”เธฃ)',
    variables: [
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'เธเธณเธเธงเธเนเธกเธฅ (n)', unit: 'mol', defaultValue: 0.5, min: 0, max: 1e15, step: 0.01 },
      { id: 'N', symbol: 'N', name: 'Number of Particles', nameTh: 'เธเธณเธเธงเธเธญเธเธธเธ เธฒเธ (N)', unit: 'เธญเธเธธเธ เธฒเธ', defaultValue: 3.011e23, min: 1, max: 1e30, step: 0 },
      { id: 'NA', symbol: 'N_A', name: "Avogadro's Number", nameTh: 'เน€เธฅเธเธญเธฒเนเธงเธเธฒเนเธ”เธฃ (Nโ)', unit: 'เธญเธเธธเธ เธฒเธ/mol', defaultValue: 6.022e23, min: 1e10, max: 1e26, step: 0 }
    ],
    solveTargets: ['n', 'N', 'NA'],
    calculate: (inputs, target = 'n') => {
      let { n, N, NA } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = N / NA;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธณเธเธงเธ“เนเธกเธฅเธเธฒเธเธญเธเธธเธ เธฒเธ', latex: 'n = \\frac{N}{N_A}', explanation: `N = ${N.toExponential(2)}, Nโ = ${NA.toExponential(2)}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `n = \\frac{${N.toExponential(2)}}{${NA.toExponential(2)}}`, explanation: 'เธเธณเธเธงเธเธญเธเธธเธ เธฒเธเธซเธฒเธฃเน€เธฅเธเธญเธฒเนเธงเธเธฒเนเธ”เธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `เธเธณเธเธงเธเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅ` }
        ];
      } else if (target === 'N') {
        result = n * NA;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธญเธเธธเธ เธฒเธ', latex: 'N = n \\cdot N_A', explanation: 'เนเธกเธฅเธเธนเธ“เน€เธฅเธเธญเธฒเนเธงเธเธฒเนเธ”เธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${result.toExponential(4)} \\ \\text{เธญเธเธธเธ เธฒเธ}`, explanation: `เธกเธตเธญเธเธธเธ เธฒเธ ${result.toExponential(3)} เธ•เธฑเธง` }
        ];
      } else if (target === 'NA') {
        if (n === 0) throw new Error('เนเธกเธฅ n เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = N / n;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธฅเธเธญเธฒเนเธงเธเธฒเนเธ”เธฃ', latex: 'N_A = \\frac{N}{n}', explanation: 'เธเธณเธเธงเธเธญเธเธธเธ เธฒเธเธซเธฒเธฃเนเธกเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N_A = ${result.toExponential(4)} \\ \\text{เธญเธเธธเธ เธฒเธ/mol}`, explanation: `เน€เธฅเธเธญเธฒเนเธงเธเธฒเนเธ”เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)}` }
        ];
      }

      return { result, unit: target === 'NA' ? 'เธญเธเธธเธ เธฒเธ/mol' : target === 'N' ? 'เธญเธเธธเธ เธฒเธ' : 'mol', steps };
    }
  },

  {
    id: 'mole_gas_stp',
    name: 'Moles of Gas (STP: n = V/22.4)',
    nameTh: 'เนเธกเธฅเธเธญเธเนเธเนเธชเธกเธฒเธ•เธฃเธเธฒเธ (n = V/22.4)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'wind',
    grade: 'เธก.4',
    latex: 'n = \\frac{V}{22.4}',
    description: 'เธเธณเธเธงเธเนเธกเธฅเธเธญเธเนเธเนเธชเธ—เธตเน STP (0ยฐC, 1 atm) = เธเธฃเธดเธกเธฒเธ•เธฃเน€เธเนเธเธฅเธดเธ•เธฃ รท 22.4 เธฅเธดเธ•เธฃ/เนเธกเธฅ เน€เธเนเธ เนเธเนเธช 11.2 L เนเธ”เน 0.5 เนเธกเธฅ',
    variables: [
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'เธเธณเธเธงเธเนเธกเธฅ (n)', unit: 'mol', defaultValue: 0.5, min: 0, max: 1e6, step: 0.01 },
      { id: 'V', symbol: 'V', name: 'Volume (STP)', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเนเธเนเธชเธ—เธตเน STP (V)', unit: 'L', defaultValue: 11.2, min: 0, max: 1e9, step: 0.1 },
      { id: 'molarVol', symbol: '22.4', name: 'Molar Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธ•เนเธญเนเธกเธฅ (22.4 L/mol)', unit: 'L/mol', defaultValue: 22.4, min: 1e-6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['n', 'V', 'molarVol'],
    calculate: (inputs, target = 'n') => {
      let { n, V, molarVol } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = V / molarVol;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธกเธฅเธเธญเธเนเธเนเธชเธ—เธตเน STP', latex: 'n = \\frac{V}{22.4}', explanation: `V = ${V} L (เธ—เธตเน STP: 0ยฐC, 1 atm)` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `n = \\frac{${V}}{${molarVol}}`, explanation: 'เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฒเธฃ 22.4 เธฅเธดเธ•เธฃ/เนเธกเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `เธเธณเธเธงเธเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅ` }
        ];
      } else if (target === 'V') {
        result = n * molarVol;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃ', latex: 'V = n \\cdot 22.4', explanation: 'เนเธกเธฅเธเธนเธ“ 22.4 เธฅเธดเธ•เธฃ/เนเธกเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `V = ${result.toFixed(2)} \\ \\text{L}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธฅเธดเธ•เธฃ` }
        ];
      } else if (target === 'molarVol') {
        if (n === 0) throw new Error('เนเธกเธฅ n เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = V / n;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃเธ•เนเธญเนเธกเธฅ', latex: '\\text{Molar Volume} = \\frac{V}{n}', explanation: 'เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฒเธฃเนเธกเธฅ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `= ${result.toFixed(2)} \\ \\text{L/mol}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธ•เนเธญเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธฅเธดเธ•เธฃ/เนเธกเธฅ` }
        ];
      }

      return { result, unit: target === 'molarVol' ? 'L/mol' : target === 'V' ? 'L' : 'mol', steps };
    }
  },

  {
    id: 'percent_composition',
    name: 'Percent Composition (%m/m)',
    nameTh: 'เธฃเนเธญเธขเธฅเธฐเนเธ”เธขเธกเธงเธฅ (%m/m)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'percent',
    grade: 'เธก.4',
    latex: '\\% m/m = \\frac{m_{solute}}{m_{solution}} \\times 100',
    description: 'เธฃเนเธญเธขเธฅเธฐเนเธ”เธขเธกเธงเธฅเธเธญเธเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข = เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข รท เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข ร— 100 เน€เธเนเธ เน€เธเธฅเธทเธญ 25 g เนเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข 200 g = 12.5%',
    variables: [
      { id: 'mMass', symbol: '\\%m/m', name: 'Percent by Mass', nameTh: 'เธฃเนเธญเธขเธฅเธฐเนเธ”เธขเธกเธงเธฅ', unit: '%', defaultValue: 12.5, min: 0, max: 100, step: 0.1 },
      { id: 'solute', symbol: 'm_{solute}', name: 'Solute Mass', nameTh: 'เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข (g)', unit: 'g', defaultValue: 25, min: 0, max: 1e6, step: 0.1 },
      { id: 'solution', symbol: 'm_{solution}', name: 'Solution Mass', nameTh: 'เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข (g)', unit: 'g', defaultValue: 200, min: 0.0000001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['mMass', 'solute', 'solution'],
    calculate: (inputs, target = 'mMass') => {
      let { mMass, solute, solution } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'mMass') {
        result = (solute / solution) * 100;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธฃเนเธญเธขเธฅเธฐเนเธ”เธขเธกเธงเธฅ', latex: '\\% m/m = \\frac{m_{solute}}{m_{solution}} \\times 100', explanation: `เธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข = ${solute} g, เธชเธฒเธฃเธฅเธฐเธฅเธฒเธข = ${solution} g` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\% m/m = \\frac{${solute}}{${solution}} \\times 100`, explanation: 'เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธขเธซเธฒเธฃเธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\% m/m = ${result.toFixed(2)}\\% `, explanation: `เธฃเนเธญเธขเธฅเธฐเนเธ”เธขเธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'solute') {
        result = (mMass / 100) * solution;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข', latex: 'm_{solute} = \\frac{\\%m/m}{100} \\times m_{solution}', explanation: 'เธฃเนเธญเธขเธฅเธฐเธเธนเธ“เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเธซเธฒเธฃ 100' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m_{solute} = ${result.toFixed(2)} \\ \\text{g}`, explanation: `เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฃเธฑเธก` }
        ];
      } else if (target === 'solution') {
        if (mMass === 0) throw new Error('เธฃเนเธญเธขเธฅเธฐเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (solute * 100) / mMass;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข', latex: 'm_{solution} = \\frac{m_{solute} \\times 100}{\\%m/m}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m_{solution} = ${result.toFixed(2)} \\ \\text{g}`, explanation: `เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฃเธฑเธก` }
        ];
      }

      return { result, unit: target === 'mMass' ? '%' : 'g', steps };
    }
  },

  {
    id: 'molality',
    name: 'Molality (m = n/kg solvent)',
    nameTh: 'เนเธกเนเธฅเธฅเธดเธ•เธต (m = เนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข/เธกเธงเธฅเธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธข kg)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'beaker',
    grade: 'เธก.4-5',
    latex: 'm = \\frac{n_{solute}}{kg_{solvent}}',
    description: 'เนเธกเนเธฅเธฅเธดเธ•เธต = เนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข รท เธกเธงเธฅเธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธขเน€เธเนเธเธเธดเนเธฅเธเธฃเธฑเธก เนเธเนเธเธฑเธเธชเธกเธเธฑเธ•เธดเธเธญเธฅเธฅเธดเน€เธเธ—เธตเธ (เนเธกเนเธเธถเนเธเธเธฑเธเธญเธธเธ“เธซเธ เธนเธกเธด)',
    variables: [
      { id: 'molality', symbol: 'm', name: 'Molality', nameTh: 'เนเธกเนเธฅเธฅเธดเธ•เธต (m)', unit: 'mol/kg', defaultValue: 0.5, min: 0, max: 1000, step: 0.01 },
      { id: 'n', symbol: 'n_{solute}', name: 'Solute Moles', nameTh: 'เนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข', unit: 'mol', defaultValue: 0.25, min: 0, max: 1e9, step: 0.01 },
      { id: 'kg', symbol: 'kg_{solvent}', name: 'Solvent Mass', nameTh: 'เธกเธงเธฅเธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธข', unit: 'kg', defaultValue: 0.5, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['molality', 'n', 'kg'],
    calculate: (inputs, target = 'molality') => {
      let { molality, n, kg } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'molality') {
        result = n / kg;
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธกเนเธฅเธฅเธดเธ•เธต', latex: 'm = \\frac{n_{solute}}{kg_{solvent}}', explanation: `เนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข = ${n}, เธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธข = ${kg} kg` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `m = \\frac{${n}}{${kg}}`, explanation: 'เนเธกเธฅเธซเธฒเธฃเธเธดเนเธฅเธเธฃเธฑเธกเธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m = ${result.toFixed(4)} \\ \\text{mol/kg}`, explanation: `เนเธกเนเธฅเธฅเธดเธ•เธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mol/kg` }
        ];
      } else if (target === 'n') {
        result = molality * kg;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข', latex: 'n_{solute} = m \\cdot kg_{solvent}', explanation: 'เนเธกเนเธฅเธฅเธดเธ•เธตเธเธนเธ“เธเธดเนเธฅเธเธฃเธฑเธกเธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `n_{solute} = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `เนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅ` }
        ];
      } else if (target === 'kg') {
        if (molality === 0) throw new Error('เนเธกเนเธฅเธฅเธดเธ•เธตเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = n / molality;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธข', latex: 'kg_{solvent} = \\frac{n_{solute}}{m}', explanation: 'เนเธกเธฅเธซเธฒเธฃเนเธกเนเธฅเธฅเธดเธ•เธต' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `kg_{solvent} = ${result.toFixed(4)} \\ \\text{kg}`, explanation: `เธ•เธฑเธงเธ—เธณเธฅเธฐเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      }

      return { result, unit: target === 'molality' ? 'mol/kg' : target === 'n' ? 'mol' : 'kg', steps };
    }
  },

  {
    id: 'parts_per_million',
    name: 'Concentration (ppm & ppb)',
    nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ ppm / ppb',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'gauge',
    grade: 'เธก.4-5',
    latex: 'ppm = \\frac{m_{solute}}{m_{solution}} \\times 10^6',
    description: 'ppm = เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข รท เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข ร— 10โถ เนเธเนเธเธฑเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเน€เธเธทเธญเธเธฒเธ เน€เธเนเธ เธชเธฒเธฃเธซเธเธนเนเธเธเนเธณ 0.05 ppm เธเธฅเธญเธ”เธ เธฑเธข',
    variables: [
      { id: 'ppm', symbol: 'ppm', name: 'Parts per Million', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ (ppm)', unit: 'ppm', defaultValue: 50, min: 0, max: 1e9, step: 0.1 },
      { id: 'solute', symbol: 'm_{solute}', name: 'Solute Mass', nameTh: 'เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข (mg)', unit: 'mg', defaultValue: 50, min: 0, max: 1e6, step: 0.1 },
      { id: 'solution', symbol: 'm_{solution}', name: 'Solution Mass', nameTh: 'เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข (kg)', unit: 'kg', defaultValue: 1, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['ppm', 'solute', 'solution'],
    calculate: (inputs, target = 'ppm') => {
      let { ppm, solute, solution } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'ppm') {
        result = (solute * 1e-3 / solution) * 1e6;
        steps = [
          { title: 'เธชเธนเธ•เธฃ ppm', latex: 'ppm = \\frac{m_{solute}}{m_{solution}} \\times 10^6', explanation: `เธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข = ${solute} mg, เธชเธฒเธฃเธฅเธฐเธฅเธฒเธข = ${solution} kg` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `ppm = \\frac{${solute} \\times 10^{-3}}{${solution}} \\times 10^6`, explanation: 'เนเธเธฅเธเธซเธเนเธงเธขเนเธฅเธฐเธเธนเธ“ 10โถ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `ppm = ${result.toFixed(2)} \\ \\text{ppm}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} ppm` }
        ];
      } else if (target === 'solute') {
        result = (ppm / 1e6) * solution * 1000;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธข', latex: 'm_{solute} = \\frac{ppm}{10^6} \\times m_{solution} \\times 1000', explanation: 'ppm เธเธนเธ“เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m_{solute} = ${result.toFixed(3)} \\ \\text{mg}`, explanation: `เธกเธงเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธกเธดเธฅเธฅเธดเธเธฃเธฑเธก` }
        ];
      } else if (target === 'solution') {
        if (ppm === 0) throw new Error('ppm เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (solute * 1e-3 / ppm) * 1e6;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข', latex: 'm_{solution} = \\frac{m_{solute} \\times 10^6}{ppm}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `m_{solution} = ${result.toFixed(3)} \\ \\text{kg}`, explanation: `เธกเธงเธฅเธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      }

      return { result, unit: target === 'ppm' ? 'ppm' : target === 'solute' ? 'mg' : 'kg', steps };
    }
  },

  {
    id: 'reaction_rate',
    name: 'Reaction Rate (rate = ฮ”[C]/ฮ”t)',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเธ”เธเธเธดเธเธดเธฃเธดเธขเธฒ (rate = ฮ”[C]/ฮ”t)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'flame',
    grade: 'เธก.5',
    latex: 'rate = \\frac{\\Delta [C]}{\\Delta t}',
    description: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเธ”เธเธเธดเธเธดเธฃเธดเธขเธฒ = เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธ—เธตเนเน€เธเธฅเธตเนเธขเธเนเธ รท เน€เธงเธฅเธฒ เน€เธเนเธ เธชเธฒเธฃเธ•เธฑเนเธเธ•เนเธเธซเธฒเธข 0.4 mol/L เนเธ 2 เธงเธดเธเธฒเธ—เธต โ’ 0.2 mol/(Lยทs)',
    variables: [
      { id: 'rate', symbol: 'rate', name: 'Reaction Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเธ”เธเธเธดเธเธดเธฃเธดเธขเธฒ', unit: 'mol/(Lยทs)', defaultValue: 0.2, min: -1e9, max: 1e9, step: 0.001 },
      { id: 'dC', symbol: '\\Delta [C]', name: 'Concentration Change', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธ—เธตเนเน€เธเธฅเธตเนเธขเธ (ฮ”C)', unit: 'mol/L', defaultValue: 0.4, min: -1e9, max: 1e9, step: 0.01 },
      { id: 'dt', symbol: '\\Delta t', name: 'Time Change', nameTh: 'เน€เธงเธฅเธฒเธ—เธตเนเน€เธเธฅเธตเนเธขเธ (ฮ”t)', unit: 's', defaultValue: 2, min: 0.0000001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['rate', 'dC', 'dt'],
    calculate: (inputs, target = 'rate') => {
      let { rate, dC, dt } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'rate') {
        result = dC / dt;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเธ”เธเธเธดเธเธดเธฃเธดเธขเธฒ', latex: 'rate = \\frac{\\Delta [C]}{\\Delta t}', explanation: `ฮ”C = ${dC} mol/L, ฮ”t = ${dt} s` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `rate = \\frac{${dC}}{${dt}}`, explanation: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธ—เธตเนเน€เธเธฅเธตเนเธขเธเธซเธฒเธฃเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `rate = ${result.toFixed(4)} \\ \\text{mol/(Lยทs)}`, explanation: `เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเธ”เธเธเธดเธเธดเธฃเธดเธขเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mol/(Lยทs)` }
        ];
      } else if (target === 'dC') {
        result = rate * dt;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธเนเธกเธเนเธเธ—เธตเนเน€เธเธฅเธตเนเธขเธ', latex: '\\Delta [C] = rate \\cdot \\Delta t', explanation: 'เธญเธฑเธ•เธฃเธฒเธเธนเธ“เน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta [C] = ${result.toFixed(4)} \\ \\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธเธฅเธตเนเธขเธ ${result.toFixed(4)} mol/L` }
        ];
      } else if (target === 'dt') {
        if (rate === 0) throw new Error('เธญเธฑเธ•เธฃเธฒเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = dC / rate;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเนเธเธ', latex: '\\Delta t = \\frac{\\Delta [C]}{rate}', explanation: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธเธฅเธตเนเธขเธเธซเธฒเธฃเธญเธฑเธ•เธฃเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\Delta t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `เน€เธงเธฅเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธงเธดเธเธฒเธ—เธต` }
        ];
      }

      return { result, unit: target === 'dC' ? 'mol/L' : target === 'dt' ? 's' : 'mol/(Lยทs)', steps };
    }
  },

  {
    id: 'equilibrium_constant',
    name: 'Equilibrium Constant (Kc)',
    nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธชเธกเธ”เธธเธฅ (Kc)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'scales',
    grade: 'เธก.5',
    latex: 'K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}',
    description: 'เธเนเธฒเธเธเธ—เธตเนเธชเธกเธ”เธธเธฅเธเธญเธเธเธเธดเธเธดเธฃเธดเธขเธฒ aA + bB โ cC + dD = เธเธฅเธเธนเธ“เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธเธฅเธดเธ•เธ เธฑเธ“เธ‘เนเธขเธเธเธณเธฅเธฑเธเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน เธซเธฒเธฃเธ”เนเธงเธขเธชเธฒเธฃเธ•เธฑเนเธเธ•เนเธ',
    variables: [
      { id: 'Kc', symbol: 'K_c', name: 'Equilibrium Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธชเธกเธ”เธธเธฅ (Kc)', unit: '', defaultValue: 4, min: 1e-12, max: 1e12, step: 0.01 },
      { id: 'C', symbol: '[C]', name: 'Product C (mol/L)', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ C', unit: 'mol/L', defaultValue: 1.6, min: 0, max: 1e6, step: 0.01 },
      { id: 'c', symbol: 'c', name: 'Coefficient of C', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธญเธ C', unit: '', defaultValue: 2, min: 1, max: 10, step: 1 },
      { id: 'A', symbol: '[A]', name: 'Reactant A (mol/L)', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ A', unit: 'mol/L', defaultValue: 0.8, min: 0.0000001, max: 1e6, step: 0.01 },
      { id: 'a', symbol: 'a', name: 'Coefficient of A', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเนเธเธญเธ A', unit: '', defaultValue: 1, min: 1, max: 10, step: 1 }
    ],
    solveTargets: ['Kc', 'C'],
    calculate: (inputs, target = 'Kc') => {
      let { Kc, C, c, A, a } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Kc') {
        result = Math.pow(C, c) / Math.pow(A, a);
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเนเธฒเธเธเธ—เธตเนเธชเธกเธ”เธธเธฅ', latex: 'K_c = \\frac{[C]^c}{[A]^a}', explanation: 'เธชเธกเธกเธ•เธดเธเธเธดเธเธดเธฃเธดเธขเธฒ aA โ cC (เธเธฅเธดเธ•เธ เธฑเธ“เธ‘เนเธขเธเธเธณเธฅเธฑเธเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน)' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `K_c = \\frac{${C}^{${c}}}{${A}^{${a}}} = \\frac{${Math.pow(C, c).toFixed(4)}}{${Math.pow(A, a).toFixed(4)}}`, explanation: 'เธเธณเธเธงเธ“เธเธณเธฅเธฑเธเธเธญเธเนเธ•เนเธฅเธฐเธ•เธฑเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `K_c = ${result.toFixed(4)}`, explanation: `เธเนเธฒเธเธเธ—เธตเนเธชเธกเธ”เธธเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'C') {
        result = Math.pow(Kc * Math.pow(A, a), 1 / c);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธเนเธกเธเนเธ C', latex: '[C] = (K_c \\cdot [A]^a)^{1/c}', explanation: `Kc = ${Kc}, [A] = ${A}, a = ${a}, c = ${c}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `[C] = ${result.toFixed(4)} \\ \\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธ C เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mol/L` }
        ];
      }

      return { result, unit: target === 'C' ? 'mol/L' : '', steps };
    }
  },

  {
    id: 'acid_dissociation',
    name: 'Acid Dissociation (Ka)',
    nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเนเธ•เธเธ•เธฑเธงเธเธญเธเธเธฃเธ”เธญเนเธญเธ (Ka)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'flask-round',
    grade: 'เธก.5-6',
    latex: 'K_a = \\frac{[H^+][A^-]}{[HA]}',
    description: 'เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเนเธ•เธเธ•เธฑเธงเธเธญเธเธเธฃเธ”เธญเนเธญเธ HA โ Hโบ + Aโป เนเธเนเธเธฑเธ pKa เนเธฅเธฐเธเธงเธฒเธกเนเธฃเธเธเธญเธเธเธฃเธ” (Ka เธกเธฒเธ = เธเธฃเธ”เนเธฃเธเธเธงเนเธฒ)',
    variables: [
      { id: 'Ka', symbol: 'K_a', name: 'Ka', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเนเธ•เธเธ•เธฑเธง (Ka)', unit: '', defaultValue: 1.8e-5, min: 1e-14, max: 100, step: 0 },
      { id: 'H', symbol: '[H^+]', name: 'H+ Concentration', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ Hโบ', unit: 'mol/L', defaultValue: 0.001, min: 1e-10, max: 10, step: 0 },
      { id: 'A', symbol: '[A^-]', name: 'A- Concentration', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ Aโป', unit: 'mol/L', defaultValue: 0.001, min: 1e-10, max: 10, step: 0 },
      { id: 'HA', symbol: '[HA]', name: 'HA Concentration', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ HA', unit: 'mol/L', defaultValue: 0.0556, min: 1e-10, max: 10, step: 0 }
    ],
    solveTargets: ['Ka', 'H'],
    calculate: (inputs, target = 'Ka') => {
      let { Ka, H, A, HA } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Ka') {
        if (HA === 0) throw new Error('[HA] เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (H * A) / HA;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเนเธ•เธเธ•เธฑเธงเธเธญเธเธเธฃเธ”เธญเนเธญเธ', latex: 'K_a = \\frac{[H^+][A^-]}{[HA]}', explanation: `[Hโบ] = ${H}, [Aโป] = ${A}, [HA] = ${HA}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `K_a = \\frac{${H} \\times ${A}}{${HA}}`, explanation: 'เธเธฅเธเธนเธ“ HโบยทAโป เธซเธฒเธฃ HA' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `K_a = ${result.toExponential(3)}`, explanation: `เธเนเธฒเธเธเธ—เธตเนเธเธฒเธฃเนเธ•เธเธ•เธฑเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)}` }
        ];
      } else if (target === 'H') {
        if (A === 0) throw new Error('[Aโป] เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (Ka * HA) / A;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธเนเธกเธเนเธ Hโบ', latex: '[H^+] = \\frac{K_a \\cdot [HA]}{[A^-]}', explanation: `Ka = ${Ka.toExponential(3)}, [HA] = ${HA}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `[H^+] = ${result.toExponential(3)} \\ \\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธ Hโบ เน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} mol/L` }
        ];
      }

      return { result, unit: target === 'H' ? 'mol/L' : '', steps };
    }
  },

  {
    id: 'normality',
    name: 'Normality',
    nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธเธญเธฃเนเนเธกเธฅ',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'flask',
    grade: 'เธก.5',
    latex: 'N = M \\times \\text{val}',
    description: 'เธเธญเธฃเนเนเธกเธฅเธฅเธดเธ•เธต = เนเธกเธฅเธฒเธฃเธดเธ•เธต(M) ร— เธเธณเธเธงเธเนเธเธ•เนเธญเธญเธญเธเธซเธฃเธทเธญเนเธฎเนเธ”เธฃเน€เธเธเธ—เธตเนเนเธซเน/เธฃเธฑเธ (val) เน€เธเนเธ HCl 1 M เนเธซเน Hโบ 1 โ’ N = 2 เธชเธณเธซเธฃเธฑเธ val = 2',
    variables: [
      { id: 'M', symbol: 'M', name: 'Molarity', nameTh: 'เนเธกเธฅเธฒเธฃเธดเธ•เธต (M)', unit: 'mol/L', defaultValue: 1, min: 0.0001, max: 1e6, step: 0.01 },
      { id: 'val', symbol: 'val', name: 'Valency', nameTh: 'เธงเธฒเน€เธฅเธเธเน', unit: '', defaultValue: 2, min: 1, max: 6, step: 1 },
      { id: 'N', symbol: 'N', name: 'Normality', nameTh: 'เธเธญเธฃเนเนเธกเธฅเธฅเธดเธ•เธต (N)', unit: 'eq/L', defaultValue: 2, min: 0.0001, max: 1e6, step: 0.01 }
    ],
    solveTargets: ['N', 'M', 'val'],
    calculate: (inputs, target = 'N') => {
      const { M, val, N } = inputs;
      let result, steps;
      if (target === 'N') {
        result = M * val;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'N = M \\times \\text{val}', explanation: `M = ${M} mol/L, val = ${val}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `N = ${M} \\times ${val}`, explanation: 'เนเธกเธฅเธฒเธฃเธดเธ•เธตเธเธนเธ“เธงเธฒเน€เธฅเธเธเน' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `N = ${result} \\ \\text{eq/L}`, explanation: `เธเธญเธฃเนเนเธกเธฅเธฅเธดเธ•เธตเน€เธ—เนเธฒเธเธฑเธ ${result} eq/L` }
        ];
      } else if (target === 'M') {
        if (val === 0) throw new Error('เธงเธฒเน€เธฅเธเธเน val เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = N / val;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ M', latex: 'M = \\frac{N}{\\text{val}}', explanation: `N = ${N} eq/L, val = ${val}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `M = \\frac{${N}}{${val}} = ${result.toFixed(4)} \\ \\text{mol/L}`, explanation: `เนเธกเธฅเธฒเธฃเธดเธ•เธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mol/L` }
        ];
      } else {
        if (M === 0) throw new Error('เนเธกเธฅเธฒเธฃเธดเธ•เธต M เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = N / M;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ val', latex: '\\text{val} = \\frac{N}{M}', explanation: `N = ${N} eq/L, M = ${M} mol/L` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{val} = \\frac{${N}}{${M}} = ${result.toFixed(2)}`, explanation: `เธงเธฒเน€เธฅเธเธเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}` }
        ];
      }
      return { result, unit: target === 'N' ? 'eq/L' : target === 'M' ? 'mol/L' : '', steps };
    }
  },

  {
    id: 'percent_yield',
    name: 'Percent Yield',
    nameTh: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฅเนเธ”เน',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'percent',
    grade: 'เธก.5',
    latex: '\\%\\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100',
    description: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฅเนเธ”เน = เธเธฅเธเธฅเธดเธ•เธเธฃเธดเธ/เธเธฅเธเธฅเธดเธ•เธ•เธฒเธกเธ—เธคเธฉเธเธต ร— 100 เน€เธเนเธ เนเธ”เนเธเธฃเธดเธ 18 เธเธฒเธเธ—เธคเธฉเธเธต 20 = 90%',
    variables: [
      { id: 'actual', symbol: '\\text{actual}', name: 'Actual Yield', nameTh: 'เธเธฅเนเธ”เนเธเธฃเธดเธ', unit: 'g', defaultValue: 18, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'theoretical', symbol: '\\text{theoretical}', name: 'Theoretical Yield', nameTh: 'เธเธฅเนเธ”เนเธ•เธฒเธกเธ—เธคเธฉเธเธต', unit: 'g', defaultValue: 20, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'yield', symbol: '\\%\\text{yield}', name: 'Percent Yield', nameTh: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฅเนเธ”เน', unit: '%', defaultValue: 90, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['yield', 'actual', 'theoretical'],
    calculate: (inputs, target = 'yield') => {
      const { actual, theoretical, yield: y } = inputs;
      let result, steps;
      if (target === 'yield') {
        if (theoretical === 0) throw new Error('เธเธฅเนเธ”เนเธ•เธฒเธกเธ—เธคเธฉเธเธตเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (actual / theoretical) * 100;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: '\\%\\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100', explanation: `actual = ${actual} g, theoretical = ${theoretical} g` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\%\\text{yield} = \\frac{${actual}}{${theoretical}} \\times 100`, explanation: 'เธเธฅเนเธ”เนเธเธฃเธดเธเธซเธฒเธฃเธ•เธฒเธกเธ—เธคเธฉเธเธต' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\%\\text{yield} = ${result.toFixed(2)}%`, explanation: `เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฅเนเธ”เนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'actual') {
        if (y === 0) throw new Error('เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฅเนเธ”เนเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (y / 100) * theoretical;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเนเธ”เนเธเธฃเธดเธ', latex: '\\text{actual} = \\frac{\\%\\text{yield} \\times \\text{theoretical}}{100}', explanation: `yield = ${y}%, theoretical = ${theoretical} g` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{actual} = \\frac{${y} \\times ${theoretical}}{100} = ${result.toFixed(3)} \\ \\text{g}`, explanation: `เธเธฅเนเธ”เนเธเธฃเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} g` }
        ];
      } else {
        if (y === 0) throw new Error('เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฅเนเธ”เนเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (actual * 100) / y;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฅเนเธ”เนเธ•เธฒเธกเธ—เธคเธฉเธเธต', latex: '\\text{theoretical} = \\frac{\\text{actual} \\times 100}{\\%\\text{yield}}', explanation: `actual = ${actual} g, yield = ${y}%` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{theoretical} = \\frac{${actual} \\times 100}{${y}} = ${result.toFixed(3)} \\ \\text{g}`, explanation: `เธเธฅเนเธ”เนเธ•เธฒเธกเธ—เธคเธฉเธเธตเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(3)} g` }
        ];
      }
      return { result, unit: target === 'yield' ? '%' : 'g', steps };
    }
  }
];