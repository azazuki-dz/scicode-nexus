// @ts-nocheck

/**
 * Applied Formulas (เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน + เธชเธธเธเธจเธถเธเธฉเธฒ + เน€เธ—เธเนเธเนเธฅเธขเธต) - เธก.3 - เธก.6
 */

export const ECONOMICS_FORMULAS = [
  {
    id: 'equilibrium_price',
    name: 'Market Equilibrium (P*)',
    nameTh: 'เธ”เธธเธฅเธขเธ เธฒเธเธ•เธฅเธฒเธ” (P* เนเธฅเธฐ Q*)',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'scales',
    grade: 'เธก.4-6',
    latex: 'P^* = \\frac{a - c}{b + d}, \\ Q^* = a - bP^*',
    description: 'เธฃเธฒเธเธฒเธ”เธธเธฅเธขเธ เธฒเธเธเธฒเธ Q_d = a โ’ bP เนเธฅเธฐ Q_s = c + dP เน€เธเนเธ เธญเธธเธเธชเธเธเน 200โ’2P เธญเธธเธเธ—เธฒเธ 20+3P โ’ P* = 36',
    variables: [
      { id: 'a', symbol: 'a', name: 'Demand Intercept', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธญเธธเธเธชเธเธเน (a)', unit: 'เธซเธเนเธงเธข', defaultValue: 200, min: 0, max: 1e9, step: 1 },
      { id: 'b', symbol: 'b', name: 'Demand Slope', nameTh: 'เธเธงเธฒเธกเธเธฑเธเธญเธธเธเธชเธเธเน (b)', unit: '', defaultValue: 2, min: 0.0001, max: 1e6, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Supply Intercept', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเธญเธธเธเธ—เธฒเธ (c)', unit: 'เธซเธเนเธงเธข', defaultValue: 20, min: -1e9, max: 1e9, step: 1 },
      { id: 'd', symbol: 'd', name: 'Supply Slope', nameTh: 'เธเธงเธฒเธกเธเธฑเธเธญเธธเธเธ—เธฒเธ (d)', unit: '', defaultValue: 3, min: 0.0001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['P'],
    calculate: (inputs) => {
      let { a, b, c, d } = inputs;
      const P = (a - c) / (b + d);
      const Q = a - b * P;
      const steps = [
        { title: 'เธชเธกเธเธฒเธฃเธ”เธธเธฅเธขเธ เธฒเธ', latex: 'a - bP = c + dP', explanation: 'เธเธณเธซเธเธ”เนเธซเนเธญเธธเธเธชเธเธเนเน€เธ—เนเธฒเธเธฑเธเธญเธธเธเธ—เธฒเธ' },
        { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฒเธเธฒ', latex: `P^* = \\frac{a - c}{b + d} = \\frac{${a} - ${c}}{${b} + ${d}} = \\frac{${a - c}}{${b + d}}`, explanation: 'เธขเนเธฒเธขเธ•เธฑเธงเนเธเธฃเธกเธฒเธญเธขเธนเนเธเนเธฒเธเน€เธ”เธตเธขเธง' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P^* = ${P.toFixed(2)}`, explanation: `เธฃเธฒเธเธฒเธ”เธธเธฅเธขเธ เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${P.toFixed(2)} เธเธฒเธ—` },
        { title: 'เธซเธฒเธเธฃเธดเธกเธฒเธ“เธ”เธธเธฅเธขเธ เธฒเธ', latex: `Q^* = a - bP^* = ${a} - ${b}(${P.toFixed(2)}) = ${Q.toFixed(2)}`, explanation: `เธเธฃเธดเธกเธฒเธ“เธ”เธธเธฅเธขเธ เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${Q.toFixed(2)} เธซเธเนเธงเธข` }
      ];
      return { result: P, resultDisplay: `P* = ${P.toFixed(2)}, Q* = ${Q.toFixed(2)}`, unit: 'เธเธฒเธ—', steps };
    }
  },

  {
    id: 'price_elasticity',
    name: 'Price Elasticity of Demand',
    nameTh: 'เธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธเธเธญเธเธญเธธเธเธชเธเธเนเธ•เนเธญเธฃเธฒเธเธฒ',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'percent',
    grade: 'เธก.5-6',
    latex: 'E_d = \\frac{\\%\\Delta Q}{\\%\\Delta P}',
    description: 'เธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธ = เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธเธญเธเธเธฃเธดเธกเธฒเธ“ รท เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเธเธญเธเธฃเธฒเธเธฒ เนเธ”เธข |E|>1 เนเธเธฅเธงเนเธฒเนเธงเธ•เนเธญเธฃเธฒเธเธฒ (เธขเธทเธ”เธซเธขเธธเนเธ)',
    variables: [
      { id: 'Ed', symbol: 'E_d', name: 'Elasticity', nameTh: 'เธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธ (Ed)', unit: '', defaultValue: -1.5, min: -100, max: 100, step: 0.1 },
      { id: 'dQ', symbol: '\\%\\Delta Q', name: 'Quantity Change (%)', nameTh: '% เธเธฃเธดเธกเธฒเธ“เธ—เธตเนเน€เธเธฅเธตเนเธขเธ', unit: '%', defaultValue: 15, min: -1000, max: 1000, step: 0.1 },
      { id: 'dP', symbol: '\\%\\Delta P', name: 'Price Change (%)', nameTh: '% เธฃเธฒเธเธฒเธ—เธตเนเน€เธเธฅเธตเนเธขเธ', unit: '%', defaultValue: -10, min: -1000, max: 1000, step: 0.1 }
    ],
    solveTargets: ['Ed', 'dQ', 'dP'],
    calculate: (inputs, target = 'Ed') => {
      let { Ed, dQ, dP } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Ed') {
        if (dP === 0) throw new Error('%ฮ”P เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = dQ / dP;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธ', latex: 'E_d = \\frac{\\%\\Delta Q}{\\%\\Delta P}', explanation: `%ฮ”Q = ${dQ}%, %ฮ”P = ${dP}%` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `E_d = \\frac{${dQ}}{${dP}}`, explanation: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฃเธดเธกเธฒเธ“เธซเธฒเธฃเน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธฃเธฒเธเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `E_d = ${result.toFixed(2)}`, explanation: `เธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} (${Math.abs(result) > 1 ? 'เธขเธทเธ”เธซเธขเธธเนเธ' : Math.abs(result) < 1 ? 'เนเธกเนเธขเธทเธ”เธซเธขเธธเนเธ' : 'เธขเธทเธ”เธซเธขเธธเนเธเธซเธเนเธงเธขเน€เธ”เธตเธขเธง'})` }
        ];
      } else if (target === 'dQ') {
        result = Ed * dP;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ %ฮ”Q', latex: '\\%\\Delta Q = E_d \\times \\%\\Delta P', explanation: `Ed = ${Ed}, %ฮ”P = ${dP}%` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\%\\Delta Q = ${result.toFixed(2)}\\% `, explanation: `เธเธฃเธดเธกเธฒเธ“เน€เธเธฅเธตเนเธขเธ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'dP') {
        if (Ed === 0) throw new Error('Ed เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = dQ / Ed;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ %ฮ”P', latex: '\\%\\Delta P = \\frac{\\%\\Delta Q}{E_d}', explanation: 'เน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธเธฃเธดเธกเธฒเธ“เธซเธฒเธฃเธเธงเธฒเธกเธขเธทเธ”เธซเธขเธธเนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\%\\Delta P = ${result.toFixed(2)}\\% `, explanation: `เธฃเธฒเธเธฒเน€เธเธฅเธตเนเธขเธ ${result.toFixed(2)}%` }
        ];
      }

      return { result, unit: '%', steps };
    }
  },

  {
    id: 'gdp',
    name: 'GDP (Expenditure Method)',
    nameTh: 'เธเธฅเธดเธ•เธ เธฑเธ“เธ‘เนเธกเธงเธฅเธฃเธงเธกเนเธเธเธฃเธฐเน€เธ—เธจ (GDP)',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'chart-line',
    grade: 'เธก.5',
    latex: 'GDP = C + I + G + (X - M)',
    description: 'GDP เธงเธดเธเธตเธฃเธฒเธขเธเนเธฒเธข = เธเธฒเธฃเธเธฃเธดเนเธ เธ (C) + เธเธฒเธฃเธฅเธเธ—เธธเธ (I) + เธฃเธฒเธขเธเนเธฒเธขเธฃเธฑเธ (G) + เธชเนเธเธญเธญเธเธชเธธเธ—เธเธด (Xโ’M) เน€เธเนเธ เนเธเนเธเธณเธเธงเธ“เธเธเธฒเธ”เน€เธจเธฃเธฉเธเธเธดเธ',
    variables: [
      { id: 'GDP', symbol: 'GDP', name: 'GDP', nameTh: 'GDP (เธฅเนเธฒเธเธเธฒเธ—)', unit: 'เธฅเนเธฒเธเธเธฒเธ—', defaultValue: 16900, min: -1e15, max: 1e15, step: 1 },
      { id: 'C', symbol: 'C', name: 'Consumption', nameTh: 'เธเธฒเธฃเธเธฃเธดเนเธ เธ (C)', unit: 'เธฅเนเธฒเธเธเธฒเธ—', defaultValue: 10000, min: 0, max: 1e15, step: 1 },
      { id: 'I', symbol: 'I', name: 'Investment', nameTh: 'เธเธฒเธฃเธฅเธเธ—เธธเธ (I)', unit: 'เธฅเนเธฒเธเธเธฒเธ—', defaultValue: 4000, min: 0, max: 1e15, step: 1 },
      { id: 'G', symbol: 'G', name: 'Government Spending', nameTh: 'เธฃเธฒเธขเธเนเธฒเธขเธฃเธฑเธ (G)', unit: 'เธฅเนเธฒเธเธเธฒเธ—', defaultValue: 3000, min: 0, max: 1e15, step: 1 },
      { id: 'X', symbol: 'X', name: 'Exports', nameTh: 'เธชเนเธเธญเธญเธ (X)', unit: 'เธฅเนเธฒเธเธเธฒเธ—', defaultValue: 2500, min: 0, max: 1e15, step: 1 },
      { id: 'M', symbol: 'M', name: 'Imports', nameTh: 'เธเธณเน€เธเนเธฒ (M)', unit: 'เธฅเนเธฒเธเธเธฒเธ—', defaultValue: 2600, min: 0, max: 1e15, step: 1 }
    ],
    solveTargets: ['GDP', 'C'],
    calculate: (inputs, target = 'GDP') => {
      let { GDP, C, I, G, X, M } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'GDP') {
        result = C + I + G + (X - M);
        steps = [
          { title: 'เธงเธดเธเธตเธฃเธฒเธขเธเนเธฒเธข', latex: 'GDP = C + I + G + (X - M)', explanation: `C=${C}, I=${I}, G=${G}, X=${X}, M=${M}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `GDP = ${C} + ${I} + ${G} + (${X} - ${M})`, explanation: `เธชเนเธเธญเธญเธเธชเธธเธ—เธเธด = ${(X - M).toFixed(0)}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `GDP = ${result.toFixed(0)} \\ \\text{เธฅเนเธฒเธเธเธฒเธ—}`, explanation: `GDP เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธฅเนเธฒเธเธเธฒเธ—` }
        ];
      } else if (target === 'C') {
        result = GDP - I - G - (X - M);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฒเธฃเธเธฃเธดเนเธ เธ', latex: 'C = GDP - I - G - (X - M)', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `C = ${result.toFixed(0)} \\ \\text{เธฅเนเธฒเธเธเธฒเธ—}`, explanation: `เธเธฒเธฃเธเธฃเธดเนเธ เธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธฅเนเธฒเธเธเธฒเธ—` }
        ];
      }

      return { result, unit: 'เธฅเนเธฒเธเธเธฒเธ—', steps };
    }
  },

  {
    id: 'gdp_per_capita',
    name: 'GDP per Capita',
    nameTh: 'เธฃเธฒเธขเนเธ”เนเธเธฃเธฐเธเธฒเธเธฒเธ•เธดเธ•เนเธญเธซเธฑเธง (GDP per capita)',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'users',
    grade: 'เธก.5',
    latex: 'GDP_{pc} = \\frac{GDP}{P}',
    description: 'เธฃเธฒเธขเนเธ”เนเน€เธเธฅเธตเนเธขเธ•เนเธญเธเธ = GDP เธฃเธงเธก รท เธเธณเธเธงเธเธเธฃเธฐเธเธฒเธเธฃ เนเธเนเน€เธเธฃเธตเธขเธเน€เธ—เธตเธขเธเธกเธฒเธ•เธฃเธเธฒเธเธเธฒเธฃเธเธฃเธญเธเธเธตเธเธฃเธฐเธซเธงเนเธฒเธเธเธฃเธฐเน€เธ—เธจ',
    variables: [
      { id: 'GDPpc', symbol: 'GDP_{pc}', name: 'GDP per Capita', nameTh: 'GDP เธ•เนเธญเธซเธฑเธง', unit: 'เธเธฒเธ—/เธเธ', defaultValue: 260000, min: 0, max: 1e12, step: 1 },
      { id: 'GDP', symbol: 'GDP', name: 'Total GDP', nameTh: 'GDP เธฃเธงเธก', unit: 'เธเธฒเธ—', defaultValue: 1.69e14, min: 0, max: 1e18, step: 0 },
      { id: 'P', symbol: 'P', name: 'Population', nameTh: 'เธเธฃเธฐเธเธฒเธเธฃ', unit: 'เธเธ', defaultValue: 6.5e7, min: 1, max: 1e12, step: 0 }
    ],
    solveTargets: ['GDPpc', 'P'],
    calculate: (inputs, target = 'GDPpc') => {
      let { GDPpc, GDP, P } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'GDPpc') {
        result = GDP / P;
        steps = [
          { title: 'เธชเธนเธ•เธฃ GDP เธ•เนเธญเธซเธฑเธง', latex: 'GDP_{pc} = \\frac{GDP}{P}', explanation: `GDP = ${GDP.toExponential(2)}, เธเธฃเธฐเธเธฒเธเธฃ = ${P.toExponential(2)}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `GDP_{pc} = \\frac{${GDP.toExponential(2)}}{${P.toExponential(2)}}`, explanation: 'GDP เธฃเธงเธกเธซเธฒเธฃเธเธฃเธฐเธเธฒเธเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `GDP_{pc} = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—/เธเธ}`, explanation: `เธฃเธฒเธขเนเธ”เนเธ•เนเธญเธซเธฑเธงเน€เธ—เนเธฒเธเธฑเธ ${(result / 1000).toFixed(1)} เธเธฑเธเธเธฒเธ—` }
        ];
      } else if (target === 'P') {
        if (GDPpc === 0) throw new Error('GDP เธ•เนเธญเธซเธฑเธงเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = GDP / GDPpc;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธฃเธฐเธเธฒเธเธฃ', latex: 'P = \\frac{GDP}{GDP_{pc}}', explanation: 'GDP เธฃเธงเธกเธซเธฒเธฃ GDP เธ•เนเธญเธซเธฑเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toExponential(3)} \\ \\text{เธเธ}`, explanation: `เธเธฃเธฐเธเธฒเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(3)} เธเธ` }
        ];
      }

      return { result, unit: target === 'GDPpc' ? 'เธเธฒเธ—/เธเธ' : 'เธเธ', steps };
    }
  },

  {
    id: 'inflation_rate',
    name: 'Inflation Rate',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'trending-up',
    grade: 'เธก.5',
    latex: '\\text{เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ} = \\frac{CPI_{เธเธตเธเธตเน} - CPI_{เธเธตเธเนเธญเธ}}{CPI_{เธเธตเธเนเธญเธ}} \\times 100',
    description: 'เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ = เธ”เธฑเธเธเธตเธฃเธฒเธเธฒเธเธนเนเธเธฃเธดเนเธ เธเธเธตเธเธตเนเธฅเธเธเธตเธเนเธญเธ เธซเธฒเธฃเธเธตเธเนเธญเธ ร— 100 เน€เธเนเธ CPI เธเธฒเธ 130 เน€เธเนเธ 135 โ’ เน€เธเนเธญ ~3.85%',
    variables: [
      { id: 'inflation', symbol: '\\%\\Delta CPI', name: 'Inflation Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ', unit: '%', defaultValue: 3.85, min: -1000, max: 1000, step: 0.01 },
      { id: 'CPI1', symbol: 'CPI_{current}', name: 'CPI Current', nameTh: 'CPI เธเธตเธเธตเน', unit: '', defaultValue: 135, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'CPI0', symbol: 'CPI_{previous}', name: 'CPI Previous', nameTh: 'CPI เธเธตเธเนเธญเธ', unit: '', defaultValue: 130, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['inflation', 'CPI0'],
    calculate: (inputs, target = 'inflation') => {
      let { inflation, CPI1, CPI0 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'inflation') {
        result = ((CPI1 - CPI0) / CPI0) * 100;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญ', latex: '\\text{เน€เธเนเธญ} = \\frac{CPI_1 - CPI_0}{CPI_0} \\times 100', explanation: `CPI เธเธตเธเธตเน = ${CPI1}, เธเธตเธเนเธญเธ = ${CPI0}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\text{เน€เธเนเธญ} = \\frac{${CPI1} - ${CPI0}}{${CPI0}} \\times 100 = \\frac{${(CPI1 - CPI0).toFixed(2)}}{${CPI0}} \\times 100`, explanation: 'เธซเธฒเธเธฅเธ•เนเธฒเธเนเธฅเนเธงเธซเธฒเธฃเธเธตเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `= ${result.toFixed(2)}\\% `, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธเธดเธเน€เธเนเธญเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'CPI0') {
        if (inflation === -100) throw new Error('เน€เธเธดเธเน€เธเนเธญ โ’100% เธ—เธณเนเธซเน CPIโ€ เนเธกเนเธกเธตเธเธณเธ•เธญเธ');
        result = (CPI1 * 100) / (100 + inflation);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ CPI เธเธตเธเนเธญเธ', latex: 'CPI_0 = \\frac{CPI_1 \\times 100}{100 + \\text{เน€เธเนเธญ}}', explanation: `CPIโ = ${CPI1}, เน€เธเนเธญ = ${inflation}%` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `CPI_0 = ${result.toFixed(2)}`, explanation: `CPI เธเธตเธเนเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}` }
        ];
      }

      return { result, unit: target === 'inflation' ? '%' : '', steps };
    }
  },

  {
    id: 'simple_multiplier',
    name: 'Money Multiplier',
    nameTh: 'เธ•เธฑเธงเธ—เธงเธตเน€เธเธดเธ',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'trending-up',
    grade: 'เธก.6',
    latex: 'k = \\frac{1}{\\text{rrr}}',
    description: 'เธ•เธฑเธงเธ—เธงเธตเน€เธเธดเธ = 1/เธญเธฑเธ•เธฃเธฒเธชเธณเธฃเธญเธเธ•เธฒเธกเธเธเธซเธกเธฒเธข (rrr) เน€เธเนเธ rrr = 10% เธเธฐเนเธ”เนเน€เธเธดเธเธเธฒเธเธชเธฃเนเธฒเธเนเธ”เน k = 10 เน€เธ—เนเธฒ',
    variables: [
      { id: 'reserve', symbol: '\\text{rrr}', name: 'Required Reserve Ratio', nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเธณเธฃเธญเธเธ•เธฒเธกเธเธเธซเธกเธฒเธข', unit: '', defaultValue: 0.1, min: 0.0001, max: 0.9999, step: 0.01 },
      { id: 'k', symbol: 'k', name: 'Money Multiplier', nameTh: 'เธ•เธฑเธงเธ—เธงเธตเน€เธเธดเธ', unit: 'เน€เธ—เนเธฒ', defaultValue: 10, min: 1.0001, max: 1e5, step: 0.1 }
    ],
    solveTargets: ['k', 'reserve'],
    calculate: (inputs, target = 'k') => {
      const { reserve, k } = inputs;
      let result, steps;
      if (target === 'k') {
        if (reserve === 0) throw new Error('เธญเธฑเธ•เธฃเธฒเธชเธณเธฃเธญเธ rrr เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = 1 / reserve;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'k = \\frac{1}{\\text{rrr}}', explanation: `rrr = ${reserve} (${(reserve * 100).toFixed(1)}%)` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `k = \\frac{1}{${reserve}}`, explanation: '1 เธซเธฒเธฃเธ”เนเธงเธขเธญเธฑเธ•เธฃเธฒเธชเธณเธฃเธญเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `k = ${result.toFixed(2)} \\ \\text{เน€เธ—เนเธฒ}`, explanation: `เน€เธเธดเธเธเธฒเธเธเธขเธฒเธขเนเธ”เนเธชเธนเธเธชเธธเธ” ${result.toFixed(2)} เน€เธ—เนเธฒ` }
        ];
      } else {
        if (k === 0) throw new Error('เธ•เธฑเธงเธ—เธงเธตเน€เธเธดเธ k เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = 1 / k;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเธชเธณเธฃเธญเธ', latex: '\\text{rrr} = \\frac{1}{k}', explanation: `k = ${k}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{rrr} = \\frac{1}{${k}} = ${result.toFixed(4)} \\ (${(result * 100).toFixed(1)}%)`, explanation: `เธญเธฑเธ•เธฃเธฒเธชเธณเธฃเธญเธเน€เธ—เนเธฒเธเธฑเธ ${(result * 100).toFixed(1)}%` }
        ];
      }
      return { result, unit: '', steps };
    }
  },

  {
    id: 'unemployment_rate',
    name: 'Unemployment Rate',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเธงเนเธฒเธเธเธฒเธ',
    category: 'economics',
    categoryTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน',
    icon: 'users',
    grade: 'เธก.6',
    latex: 'u = \\frac{\\text{unemployed}}{\\text{labor force}} \\times 100',
    description: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเธงเนเธฒเธเธเธฒเธ = เธเธนเนเธงเนเธฒเธเธเธฒเธ/เธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธ ร— 100 เน€เธเนเธ เธงเนเธฒเธเธเธฒเธ 25 เธเธฒเธเธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธ 500 เธเธ เนเธ”เน 5%',
    variables: [
      { id: 'unemployed', symbol: '\\text{unemployed}', name: 'Unemployed', nameTh: 'เธเธนเนเธงเนเธฒเธเธเธฒเธ', unit: 'เธเธ', defaultValue: 25, min: 0, max: 1e9, step: 1 },
      { id: 'labor', symbol: '\\text{labor}', name: 'Labor Force', nameTh: 'เธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธ', unit: 'เธเธ', defaultValue: 500, min: 1, max: 1e9, step: 1 },
      { id: 'rate', symbol: 'u', name: 'Unemployment Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเธงเนเธฒเธเธเธฒเธ', unit: '%', defaultValue: 5, min: 0, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['rate', 'unemployed', 'labor'],
    calculate: (inputs, target = 'rate') => {
      const { unemployed, labor, rate } = inputs;
      let result, steps;
      if (target === 'rate') {
        if (labor === 0) throw new Error('เธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (unemployed / labor) * 100;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 'u = \\frac{\\text{unemployed}}{\\text{labor}} \\times 100', explanation: `unemployed = ${unemployed} เธเธ, labor = ${labor} เธเธ` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `u = \\frac{${unemployed}}{${labor}} \\times 100`, explanation: 'เธเธนเนเธงเนเธฒเธเธเธฒเธเธซเธฒเธฃเธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `u = ${result.toFixed(2)}%`, explanation: `เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเธงเนเธฒเธเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'unemployed') {
        if (rate === 0) throw new Error('เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเธงเนเธฒเธเธเธฒเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (rate / 100) * labor;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธนเนเธงเนเธฒเธเธเธฒเธ', latex: '\\text{unemployed} = \\frac{u \\times \\text{labor}}{100}', explanation: `u = ${rate}%, labor = ${labor} เธเธ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{unemployed} = \\frac{${rate} \\times ${labor}}{100} = ${result.toFixed(1)} \\ \\text{เธเธ}`, explanation: `เธเธนเนเธงเนเธฒเธเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธเธ` }
        ];
      } else {
        if (rate === 0) throw new Error('เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเธงเนเธฒเธเธเธฒเธเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (unemployed * 100) / rate;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธ', latex: '\\text{labor} = \\frac{\\text{unemployed} \\times 100}{u}', explanation: `unemployed = ${unemployed} เธเธ, u = ${rate}%` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{labor} = \\frac{${unemployed} \\times 100}{${rate}} = ${result.toFixed(1)} \\ \\text{เธเธ}`, explanation: `เธเธณเธฅเธฑเธเนเธฃเธเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธเธ` }
        ];
      }
      return { result, unit: target === 'rate' ? '%' : 'เธเธ', steps };
    }
  }
];

export const HEALTH_FORMULAS = [
  {
    id: 'bmi',
    name: 'Body Mass Index (BMI)',
    nameTh: 'เธ”เธฑเธเธเธตเธกเธงเธฅเธเธฒเธข (BMI)',
    category: 'health',
    categoryTh: 'เธชเธธเธเธ เธฒเธ',
    icon: 'scale',
    grade: 'เธก.1-3',
    latex: 'BMI = \\frac{W}{H^2}',
    description: 'BMI = เธเนเธณเธซเธเธฑเธ (เธเธ.) รท เธชเนเธงเธเธชเธนเธยฒ (เธก.) เธเนเธฒเธเธเธ•เธด 18.5โ€“22.9 (เนเธ—เธข) เน€เธเนเธ เธเธฑเนเธ 52 เธเธ. เธชเธนเธ 1.6 เธก. โ’ BMI 20.3',
    variables: [
      { id: 'bmi', symbol: 'BMI', name: 'BMI', nameTh: 'BMI', unit: '', defaultValue: 20.3, min: 1, max: 100, step: 0.1 },
      { id: 'W', symbol: 'W', name: 'Weight (kg)', nameTh: 'เธเนเธณเธซเธเธฑเธ (เธเธ.)', unit: 'kg', defaultValue: 52, min: 1, max: 500, step: 0.1 },
      { id: 'H', symbol: 'H', name: 'Height (m)', nameTh: 'เธชเนเธงเธเธชเธนเธ (เน€เธกเธ•เธฃ)', unit: 'm', defaultValue: 1.6, min: 0.4, max: 2.8, step: 0.01 }
    ],
    solveTargets: ['bmi', 'W', 'H'],
    calculate: (inputs, target = 'bmi') => {
      let { bmi, W, H } = inputs;
      let steps = [];
      let result = 0;

      const categorize = (v) => v < 18.5 ? 'เธเนเธณเธซเธเธฑเธเธเนเธญเธข' : v < 23 ? 'เธเธเธ•เธด' : v < 25 ? 'เธ—เนเธงเธก' : v < 30 ? 'เธญเนเธงเธเธฃเธฐเธ”เธฑเธ 1' : 'เธญเนเธงเธเธฃเธฐเธ”เธฑเธ 2';

      if (target === 'bmi') {
        result = W / (H * H);
        steps = [
          { title: 'เธชเธนเธ•เธฃ BMI', latex: 'BMI = \\frac{W}{H^2}', explanation: `W = ${W} kg, H = ${H} m` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `BMI = \\frac{${W}}{${H}^2} = \\frac{${W}}{${(H * H).toFixed(4)}}`, explanation: 'เธขเธเธเธณเธฅเธฑเธเธชเธญเธเธชเนเธงเธเธชเธนเธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `BMI = ${result.toFixed(1)}`, explanation: `BMI เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} (${categorize(result)})` }
        ];
      } else if (target === 'W') {
        result = bmi * H * H;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเนเธณเธซเธเธฑเธ', latex: 'W = BMI \\cdot H^2', explanation: `BMI = ${bmi}, H = ${H}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `W = ${result.toFixed(1)} \\ \\text{kg}`, explanation: `เธเนเธณเธซเธเธฑเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      } else if (target === 'H') {
        if (bmi === 0) throw new Error('BMI เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt(W / bmi);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธชเนเธงเธเธชเธนเธ', latex: 'H = \\sqrt{\\frac{W}{BMI}}', explanation: `W = ${W}, BMI = ${bmi}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `H = ${result.toFixed(2)} \\ \\text{m} \\; (${(result * 100).toFixed(0)} \\ \\text{cm})`, explanation: `เธชเนเธงเธเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${(result * 100).toFixed(0)} เน€เธเธเธ•เธดเน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit: target === 'W' ? 'kg' : target === 'H' ? 'm' : '', steps };
    }
  },

  {
    id: 'max_heart_rate',
    name: 'Maximum Heart Rate (HRmax = 220 โ’ age)',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธตเธเธเธฃเธชเธนเธเธชเธธเธ” (220 โ’ เธญเธฒเธขเธธ)',
    category: 'health',
    categoryTh: 'เธชเธธเธเธ เธฒเธ',
    icon: 'heart-pulse',
    grade: 'เธก.4-6',
    latex: 'HR_{max} = 220 - \\text{age}',
    description: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธ•เนเธเธเธญเธเธซเธฑเธงเนเธเธชเธนเธเธชเธธเธ”เธ•เธญเธเธญเธญเธเธเธณเธฅเธฑเธเธเธฒเธขเธเธฃเธฐเธกเธฒเธ“ 220 โ’ เธญเธฒเธขเธธ เนเธฅเธฐเธเธงเธฃเธญเธญเธเธเธณเธฅเธฑเธเนเธเนเธเธ 60โ€“85% เธเธญเธ HRmax',
    variables: [
      { id: 'HRmax', symbol: 'HR_{max}', name: 'Max Heart Rate', nameTh: 'เธเธตเธเธเธฃเธชเธนเธเธชเธธเธ”', unit: 'เธเธฃเธฑเนเธ/เธเธฒเธ—เธต', defaultValue: 190, min: 60, max: 250, step: 1 },
      { id: 'age', symbol: 'age', name: 'Age', nameTh: 'เธญเธฒเธขเธธ (เธเธต)', unit: 'เธเธต', defaultValue: 30, min: 5, max: 110, step: 1 }
    ],
    solveTargets: ['HRmax', 'age'],
    calculate: (inputs, target = 'HRmax') => {
      let { HRmax, age } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'HRmax') {
        result = 220 - age;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธตเธเธเธฃเธชเธนเธเธชเธธเธ”', latex: 'HR_{max} = 220 - age', explanation: `เธญเธฒเธขเธธ = ${age} เธเธต` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `HR_{max} = 220 - ${age}`, explanation: '220 เธฅเธเธญเธฒเธขเธธ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `HR_{max} = ${result} \\ \\text{เธเธฃเธฑเนเธ/เธเธฒเธ—เธต}`, explanation: `เนเธเธเธเธฒเธเธเธฅเธฒเธ (60-70%): ${Math.round(result * 0.6)}โ€“${Math.round(result * 0.7)}, เนเธเธเธซเธเธฑเธ (70-85%): ${Math.round(result * 0.7)}โ€“${Math.round(result * 0.85)}` }
        ];
      } else if (target === 'age') {
        result = 220 - HRmax;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฒเธขเธธ', latex: 'age = 220 - HR_{max}', explanation: `HRmax = ${HRmax}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `age = ${result} \\ \\text{เธเธต}`, explanation: `เธญเธฒเธขเธธเน€เธ—เนเธฒเธเธฑเธ ${result} เธเธต` }
        ];
      }

      return { result, unit: target === 'age' ? 'เธเธต' : 'เธเธฃเธฑเนเธ/เธเธฒเธ—เธต', steps };
    }
  },

  {
    id: 'bmr',
    name: 'Basal Metabolic Rate (Mifflin-St Jeor)',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธฒเธเธฅเธฒเธเธเธทเนเธเธเธฒเธ (BMR)',
    category: 'health',
    categoryTh: 'เธชเธธเธเธ เธฒเธ',
    icon: 'flame',
    grade: 'เธก.4-6',
    latex: 'BMR = 10W + 6.25H - 5A + s',
    description: 'เธเธฅเธฑเธเธเธฒเธเธเธฑเนเธเธ•เนเธณเนเธเธเธฒเธฃเธ”เธณเธฃเธเธเธตเธงเธดเธ• = 10ยทเธเนเธณเธซเธเธฑเธ + 6.25ยทเธชเนเธงเธเธชเธนเธ(เธเธก.) โ’ 5ยทเธญเธฒเธขเธธ + (เธเธฒเธข +5 / เธซเธเธดเธ โ’161) เธซเธเนเธงเธข kcal/เธงเธฑเธ',
    variables: [
      { id: 'BMR', symbol: 'BMR', name: 'BMR', nameTh: 'BMR', unit: 'kcal/เธงเธฑเธ', defaultValue: 1559, min: 300, max: 5000, step: 1 },
      { id: 'W', symbol: 'W', name: 'Weight (kg)', nameTh: 'เธเนเธณเธซเธเธฑเธ (เธเธ.)', unit: 'kg', defaultValue: 65, min: 20, max: 300, step: 0.1 },
      { id: 'H', symbol: 'H', name: 'Height (cm)', nameTh: 'เธชเนเธงเธเธชเธนเธ (เธเธก.)', unit: 'cm', defaultValue: 170, min: 100, max: 250, step: 1 },
      { id: 'A', symbol: 'A', name: 'Age', nameTh: 'เธญเธฒเธขเธธ (เธเธต)', unit: 'เธเธต', defaultValue: 25, min: 10, max: 100, step: 1 },
      { id: 'sex', symbol: 's', name: 'Sex Constant', nameTh: 'เธเนเธฒเธเธเธ—เธตเนเน€เธเธจ (+5 เธเธฒเธข / โ’161 เธซเธเธดเธ)', unit: '', defaultValue: 5, min: -161, max: 5, step: 1 }
    ],
    solveTargets: ['BMR'],
    calculate: (inputs) => {
      let { W, H, A, sex } = inputs;
      const result = 10 * W + 6.25 * H - 5 * A + sex;
      const steps = [
        { title: 'เธชเธนเธ•เธฃ Mifflin-St Jeor', latex: 'BMR = 10W + 6.25H - 5A + s', explanation: `W = ${W} kg, H = ${H} cm, A = ${A} เธเธต, s = ${sex}` },
        { title: 'เนเธ—เธเธเนเธฒ', latex: `BMR = 10(${W}) + 6.25(${H}) - 5(${A}) + (${sex})`, explanation: `10W = ${(10 * W).toFixed(0)}, 6.25H = ${(6.25 * H).toFixed(0)}, 5A = ${5 * A}` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `BMR = ${result.toFixed(0)} \\ \\text{kcal/เธงเธฑเธ}`, explanation: `เธฃเนเธฒเธเธเธฒเธขเน€เธเธฒเธเธฅเธฒเธเธเธทเนเธเธเธฒเธ ${result.toFixed(0)} เนเธเธฅเธญเธฃเธตเธ•เนเธญเธงเธฑเธ` }
      ];
      return { result, unit: 'kcal/เธงเธฑเธ', steps };
    }

  },

  {
    id: 'tdee',
    name: 'Total Daily Energy Expenditure',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเธ—เธตเนเธฃเนเธฒเธเธเธฒเธขเนเธเนเธ•เนเธญเธงเธฑเธ',
    category: 'health',
    categoryTh: 'เธชเธธเธเธ เธฒเธเนเธฅเธฐเธเธฅเธจเธถเธเธฉเธฒ',
    icon: 'activity',
    grade: 'เธก.4',
    latex: '\\text{TDEE} = \\text{BMR} \\times \\text{activity}',
    description: 'เธเธฅเธฑเธเธเธฒเธเธฃเธงเธกเธ•เนเธญเธงเธฑเธ = BMR ร— เธฃเธฐเธ”เธฑเธเธเธดเธเธเธฃเธฃเธก เน€เธเนเธ BMR 1500 เนเธเธฅเธญเธฃเธต ร— 1.55 (เธญเธญเธเธเธณเธฅเธฑเธเธเธฒเธเธเธฅเธฒเธ) = 2325 เนเธเธฅเธญเธฃเธต/เธงเธฑเธ',
    variables: [
      { id: 'BMR', symbol: '\\text{BMR}', name: 'Basal Metabolic Rate', nameTh: 'Basal Metabolic Rate', unit: 'kcal/เธงเธฑเธ', defaultValue: 1500, min: 300, max: 10000, step: 10 },
      { id: 'activity', symbol: '\\text{activity}', name: 'Activity Factor', nameTh: 'เธ•เธฑเธงเธเธนเธ“เธฃเธฐเธ”เธฑเธเธเธดเธเธเธฃเธฃเธก', unit: '', defaultValue: 1.55, min: 1, max: 2.5, step: 0.05 },
      { id: 'tdee', symbol: '\\text{TDEE}', name: 'Total Daily Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธฃเธงเธกเธ•เนเธญเธงเธฑเธ', unit: 'kcal/เธงเธฑเธ', defaultValue: 2325, min: 300, max: 30000, step: 10 }
    ],
    solveTargets: ['tdee', 'BMR', 'activity'],
    calculate: (inputs, target = 'tdee') => {
      const { BMR, activity, tdee } = inputs;
      let result, steps;
      if (target === 'tdee') {
        result = BMR * activity;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: '\\text{TDEE} = \\text{BMR} \\times \\text{activity}', explanation: `BMR = ${BMR} kcal/เธงเธฑเธ, activity = ${activity}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\text{TDEE} = ${BMR} \\times ${activity}`, explanation: 'BMR เธเธนเธ“เธ•เธฑเธงเธเธนเธ“เธเธดเธเธเธฃเธฃเธก' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{TDEE} = ${result.toFixed(0)} \\ \\text{kcal/เธงเธฑเธ}`, explanation: `เธฃเนเธฒเธเธเธฒเธขเนเธเนเธเธฅเธฑเธเธเธฒเธเธเธฃเธฐเธกเธฒเธ“ ${result.toFixed(0)} เนเธเธฅเธญเธฃเธตเธ•เนเธญเธงเธฑเธ` }
        ];
      } else if (target === 'BMR') {
        if (activity === 0) throw new Error('เธ•เธฑเธงเธเธนเธ“เธเธดเธเธเธฃเธฃเธกเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = tdee / activity;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒ BMR', latex: '\\text{BMR} = \\frac{\\text{TDEE}}{\\text{activity}}', explanation: `TDEE = ${tdee} kcal/เธงเธฑเธ, activity = ${activity}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{BMR} = \\frac{${tdee}}{${activity}} = ${result.toFixed(0)} \\ \\text{kcal/เธงเธฑเธ}`, explanation: `BMR เน€เธ—เนเธฒเธเธฑเธเธเธฃเธฐเธกเธฒเธ“ ${result.toFixed(0)} เนเธเธฅเธญเธฃเธต/เธงเธฑเธ` }
        ];
      } else {
        if (BMR === 0) throw new Error('BMR เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = tdee / BMR;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธ•เธฑเธงเธเธนเธ“เธเธดเธเธเธฃเธฃเธก', latex: '\\text{activity} = \\frac{\\text{TDEE}}{\\text{BMR}}', explanation: `TDEE = ${tdee} kcal/เธงเธฑเธ, BMR = ${BMR} kcal/เธงเธฑเธ` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{activity} = \\frac{${tdee}}{${BMR}} = ${result.toFixed(2)}`, explanation: `เธ•เธฑเธงเธเธนเธ“เธเธดเธเธเธฃเธฃเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}` }
        ];
      }
      return { result, unit: target === 'activity' ? '' : 'kcal/เธงเธฑเธ', steps };
    }
  }
];

export const TECHNOLOGY_FORMULAS = [
  {
    id: 'binary_to_decimal',
    name: 'Binary โ’ Decimal',
    nameTh: 'เนเธเธฅเธเน€เธฅเธเธเธฒเธเธชเธญเธเน€เธเนเธเธเธฒเธเธชเธดเธ',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'binary',
    grade: 'เธก.3-4',
    latex: 'N_{10} = \\sum b_i \\cdot 2^i',
    description: 'เนเธเธฅเธเน€เธฅเธเธเธฒเธเธชเธญเธเน€เธเนเธเธเธฒเธเธชเธดเธเนเธ”เธขเธเธนเธ“เนเธ•เนเธฅเธฐเธซเธฅเธฑเธเธ”เนเธงเธขเธเธณเธฅเธฑเธเธเธญเธ 2 เน€เธเนเธ 1011โ = 8+0+2+1 = 11',
    variables: [
      { id: 'binary', symbol: 'binary', name: 'Binary Input', nameTh: 'เน€เธฅเธเธเธฒเธเธชเธญเธ (เน€เธเนเธ 1011)', unit: '', defaultValue: 1011, min: 0, max: 9007199254740991, step: 1 },
      { id: 'decimal', symbol: 'N_{10}', name: 'Decimal Output', nameTh: 'เธเธฅเน€เธเนเธเธเธฒเธเธชเธดเธ', unit: '', defaultValue: 11, min: 0, max: 1e9, step: 1 }
    ],
    solveTargets: ['decimal'],
    calculate: (inputs) => {
      let { binary } = inputs;
      if (typeof binary !== 'number') throw new Error('เธเธฃเธญเธเธ•เธฑเธงเน€เธฅเธเนเธซเนเน€เธเนเธเธ•เธฑเธงเน€เธฅเธ');
      const binStr = Math.abs(binary).toString();
      if (!/^[01]+$/.test(binStr)) throw new Error('เธ•เนเธญเธเน€เธเนเธเน€เธฅเธเธเธฒเธเธชเธญเธ (0 เธซเธฃเธทเธญ 1 เน€เธ—เนเธฒเธเธฑเนเธ)');
      const digits = binStr.split('').map(Number);
      let result = 0;
      const parts = [];
      digits.forEach((d, i) => {
        const pos = digits.length - 1 - i;
        if (d === 1) { result += Math.pow(2, pos); parts.push(`${Math.pow(2, pos).toLocaleString()}`); }
      });
      const steps = [
        { title: 'เธซเธฅเธฑเธเธเธญเธเธเธฒเธเธชเธญเธ', latex: `${binStr.split('').map((d, i) => `${d} \\times 2^{${digits.length - 1 - i}}`).join(' + ')}`, explanation: 'เนเธ•เนเธฅเธฐเธซเธฅเธฑเธเธเธนเธ“เธ”เนเธงเธขเธเธณเธฅเธฑเธเธเธญเธ 2 เธ•เธฒเธกเธ•เธณเนเธซเธเนเธ' },
        { title: 'เธฃเธงเธกเน€เธเธเธฒเธฐเธซเธฅเธฑเธเธ—เธตเนเธกเธต 1', latex: parts.length ? parts.join(' + ') : '0', explanation: 'เธเธงเธเธเนเธฒเธเธฃเธฐเธเธณเธซเธฅเธฑเธเธ—เธตเนเธซเธฅเธฑเธเธฅเธฐ 1' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `${binStr}_2 = ${result}_{10}`, explanation: `เน€เธฅเธเธเธฒเธเธชเธดเธเน€เธ—เนเธฒเธเธฑเธ ${result.toLocaleString()}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'decimal_to_binary',
    name: 'Decimal โ’ Binary',
    nameTh: 'เนเธเธฅเธเน€เธฅเธเธเธฒเธเธชเธดเธเน€เธเนเธเธเธฒเธเธชเธญเธ',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'binary',
    grade: 'เธก.3-4',
    latex: 'N_2 = \\ldots \\text{ (เธซเธฒเธฃ 2 เน€เธจเธฉเน€เธเนเธเธเธดเธ•)}',
    description: 'เนเธเธฅเธเน€เธฅเธเธเธฒเธเธชเธดเธเน€เธเนเธเธเธฒเธเธชเธญเธเนเธ”เธขเธซเธฒเธฃเธ”เนเธงเธข 2 เนเธเน€เธฃเธทเนเธญเธขเน เน€เธเนเธ 11 โ’ 1011โ',
    variables: [
      { id: 'decimal', symbol: 'N_{10}', name: 'Decimal Input', nameTh: 'เน€เธฅเธเธเธฒเธเธชเธดเธ', unit: '', defaultValue: 11, min: 0, max: 9007199254740991, step: 1 },
      { id: 'binary', symbol: 'binary', name: 'Binary Output', nameTh: 'เธเธฅเน€เธเนเธเธเธฒเธเธชเธญเธ', unit: '', defaultValue: 1011, min: 0, max: 9007199254740991, step: 1 }
    ],
    solveTargets: ['binary'],
    calculate: (inputs) => {
      let { decimal } = inputs;
      if (!Number.isInteger(decimal) || decimal < 0) throw new Error('เธ•เนเธญเธเน€เธเนเธเธเธณเธเธงเธเน€เธ•เนเธกเธเธงเธเธซเธฃเธทเธญ 0');
      if (decimal === 0) {
        return { result: 0, unit: '', steps: [{ title: 'เธเธฅเธฅเธฑเธเธเน', latex: '0_{10} = 0_2', explanation: 'เน€เธฅเธเธจเธนเธเธขเนเธเธทเธญ 0 เนเธเธ—เธธเธเธเธฒเธ' }] };
      }
      const remainders = [];
      let n = decimal;
      const ops = [];
      while (n > 0) {
        const rem = n % 2;
        ops.push(`${n} \\div 2 = ${Math.floor(n / 2)} \\ \\text{เน€เธจเธฉ} \\ ${rem}`);
        remainders.unshift(rem);
        n = Math.floor(n / 2);
      }
      const result = parseInt(remainders.join(''), 10);
      const steps = [
        { title: 'เธซเธฒเธฃ 2 เนเธเน€เธฃเธทเนเธญเธขเน', latex: ops.join(' \\\\ '), explanation: 'เธญเนเธฒเธเน€เธจเธฉเธเธฒเธเธฅเนเธฒเธเธเธถเนเธเธเธ' },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `${decimal}_{10} = ${remainders.join('')}_2`, explanation: `เน€เธฅเธเธเธฒเธเธชเธญเธเน€เธ—เนเธฒเธเธฑเธ ${remainders.join('')}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'pixel_resolution',
    name: 'Image Resolution (Megapixels)',
    nameTh: 'เธเธงเธฒเธกเธฅเธฐเน€เธญเธตเธขเธ”เธ เธฒเธ (เธฅเนเธฒเธเธเธดเธเน€เธเธฅ)',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'image',
    grade: 'เธก.3-4',
    latex: 'MP = \\frac{W \\times H}{1{,}000{,}000}',
    description: 'เธเธงเธฒเธกเธฅเธฐเน€เธญเธตเธขเธ”เธ เธฒเธ = เธเธงเนเธฒเธ ร— เธชเธนเธ (เธเธดเธเน€เธเธฅ) รท 1,000,000 เน€เธเนเธ เธ เธฒเธ 4000ร—3000 = 12 เธฅเนเธฒเธเธเธดเธเน€เธเธฅ (12 MP)',
    variables: [
      { id: 'MP', symbol: 'MP', name: 'Megapixels', nameTh: 'เธฅเนเธฒเธเธเธดเธเน€เธเธฅ', unit: 'MP', defaultValue: 12, min: 0, max: 1e9, step: 0.1 },
      { id: 'W', symbol: 'W', name: 'Width (px)', nameTh: 'เธเธงเธฒเธกเธเธงเนเธฒเธ (เธเธดเธเน€เธเธฅ)', unit: 'px', defaultValue: 4000, min: 1, max: 1e9, step: 1 },
      { id: 'H', symbol: 'H', name: 'Height (px)', nameTh: 'เธเธงเธฒเธกเธชเธนเธ (เธเธดเธเน€เธเธฅ)', unit: 'px', defaultValue: 3000, min: 1, max: 1e9, step: 1 }
    ],
    solveTargets: ['MP', 'W', 'H'],
    calculate: (inputs, target = 'MP') => {
      let { MP, W, H } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'MP') {
        result = (W * H) / 1e6;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธฅเธฐเน€เธญเธตเธขเธ”', latex: 'MP = \\frac{W \\times H}{1{,}000{,}000}', explanation: `เธเธงเนเธฒเธ ${W.toLocaleString()} px, เธชเธนเธ ${H.toLocaleString()} px` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `MP = \\frac{${W.toLocaleString()} \\times ${H.toLocaleString()}}{1{,}000{,}000}`, explanation: `เธเธดเธเน€เธเธฅเธฃเธงเธก = ${(W * H).toLocaleString()}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `MP = ${result.toFixed(2)} \\ \\text{MP}`, explanation: `เธเธงเธฒเธกเธฅเธฐเน€เธญเธตเธขเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธฅเนเธฒเธเธเธดเธเน€เธเธฅ` }
        ];
      } else if (target === 'W') {
        if (H === 0) throw new Error('เธเธงเธฒเธกเธชเธนเธ H เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (MP * 1e6) / H;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธเธงเนเธฒเธ', latex: 'W = \\frac{MP \\times 1{,}000{,}000}{H}', explanation: `MP = ${MP}, H = ${H.toLocaleString()}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `W = ${result.toLocaleString()} \\ \\text{px}`, explanation: `เธเธงเธฒเธกเธเธงเนเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toLocaleString()} เธเธดเธเน€เธเธฅ` }
        ];
      } else if (target === 'H') {
        if (W === 0) throw new Error('เธเธงเธฒเธกเธเธงเนเธฒเธ W เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (MP * 1e6) / W;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'H = \\frac{MP \\times 1{,}000{,}000}{W}', explanation: `MP = ${MP}, W = ${W.toLocaleString()}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `H = ${result.toLocaleString()} \\ \\text{px}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toLocaleString()} เธเธดเธเน€เธเธฅ` }
        ];
      }

      return { result, unit: target === 'MP' ? 'MP' : 'px', steps };
    }
  },

  {
    id: 'download_time',
    name: 'Download Time',
    nameTh: 'เน€เธงเธฅเธฒเนเธเธเธฒเธฃเธ”เธฒเธงเธเนเนเธซเธฅเธ”',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'download',
    grade: 'เธก.3-6',
    latex: 't_{seconds} = \\frac{size_{MB}}{speed_{MBps}}',
    description: 'เน€เธงเธฅเธฒเธ”เธฒเธงเธเนเนเธซเธฅเธ” = เธเธเธฒเธ”เนเธเธฅเน (MB) รท เธเธงเธฒเธกเน€เธฃเนเธง (MB/s) เน€เธเนเธ เนเธเธฅเน 750 MB เธ”เนเธงเธขเน€เธเนเธ• 10 MB/s เนเธเนเน€เธงเธฅเธฒ 75 เธงเธดเธเธฒเธ—เธต',
    variables: [
      { id: 'size', symbol: 'size', name: 'File Size', nameTh: 'เธเธเธฒเธ”เนเธเธฅเน (MB)', unit: 'MB', defaultValue: 750, min: 0, max: 1e9, step: 0.1 },
      { id: 'speed', symbol: 'speed', name: 'Download Speed', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธง (MB/s)', unit: 'MB/s', defaultValue: 10, min: 0.000001, max: 1e6, step: 0.1 },
      { id: 'time', symbol: 't', name: 'Time', nameTh: 'เน€เธงเธฅเธฒเธ—เธตเนเนเธเน', unit: 's', defaultValue: 75, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['time', 'size', 'speed'],
    calculate: (inputs, target = 'time') => {
      let { size, speed, time } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'time') {
        result = size / speed;
        const min = Math.floor(result / 60), sec = (result % 60);
        steps = [
          { title: 'เธชเธนเธ•เธฃเน€เธงเธฅเธฒเธ”เธฒเธงเธเนเนเธซเธฅเธ”', latex: 't = \\frac{size}{speed}', explanation: `เธเธเธฒเธ” ${size} MB, เธเธงเธฒเธกเน€เธฃเนเธง ${speed} MB/s` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `t = \\frac{${size}}{${speed}}`, explanation: 'เธเธเธฒเธ”เนเธเธฅเนเธซเธฒเธฃเธเธงเธฒเธกเน€เธฃเนเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(1)} \\ \\text{เธงเธดเธเธฒเธ—เธต} \\; (โ ${min} เธเธฒเธ—เธต ${sec.toFixed(0)} เธงเธดเธเธฒเธ—เธต)`, explanation: `เนเธเนเน€เธงเธฅเธฒเธ”เธฒเธงเธเนเนเธซเธฅเธ” ${result.toFixed(1)} เธงเธดเธเธฒเธ—เธต` }
        ];
      } else if (target === 'size') {
        result = speed * time;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธเธฒเธ”เนเธเธฅเน', latex: 'size = speed \\times t', explanation: 'เธเธงเธฒเธกเน€เธฃเนเธงเธเธนเธ“เน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `size = ${result.toFixed(1)} \\ \\text{MB}`, explanation: `เธเธเธฒเธ”เนเธเธฅเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(1)} MB` }
        ];
      } else if (target === 'speed') {
        if (time === 0) throw new Error('เน€เธงเธฅเธฒ t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = size / time;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธง', latex: 'speed = \\frac{size}{t}', explanation: 'เธเธเธฒเธ”เนเธเธฅเนเธซเธฒเธฃเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `speed = ${result.toFixed(2)} \\ \\text{MB/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} MB/s` }
        ];
      }

      return { result, unit: target === 'size' ? 'MB' : target === 'speed' ? 'MB/s' : 's', steps };
    }
  },

  {
    id: 'upload_time',
    name: 'Upload Time',
    nameTh: 'เน€เธงเธฅเธฒเนเธเธเธฒเธฃเธญเธฑเธเนเธซเธฅเธ”เนเธเธฅเน',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'upload',
    grade: 'เธก.4',
    latex: 't = \\frac{\\text{size} \\times 8}{\\text{rate}}',
    description: 'เน€เธงเธฅเธฒเธญเธฑเธเนเธซเธฅเธ” = เธเธเธฒเธ”เนเธเธฅเน(MB)ร—8/เธเธงเธฒเธกเน€เธฃเนเธง(Mbps) เน€เธเนเธ 25 MB เธเธ 20 Mbps เนเธเนเน€เธงเธฅเธฒ 10 เธงเธดเธเธฒเธ—เธต',
    variables: [
      { id: 'size', symbol: '\\text{size}', name: 'File Size', nameTh: 'เธเธเธฒเธ”เนเธเธฅเน', unit: 'MB', defaultValue: 25, min: 0.001, max: 1e9, step: 1 },
      { id: 'rate', symbol: '\\text{rate}', name: 'Upload Speed', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธญเธฑเธเนเธซเธฅเธ”', unit: 'Mbps', defaultValue: 20, min: 0.001, max: 1e6, step: 1 },
      { id: 'time', symbol: 't', name: 'Time', nameTh: 'เน€เธงเธฅเธฒ', unit: 's', defaultValue: 10, min: 0.001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['time', 'size', 'rate'],
    calculate: (inputs, target = 'time') => {
      const { size, rate, time } = inputs;
      let result, steps;
      if (target === 'time') {
        if (rate === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (size * 8) / rate;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: 't = \\frac{\\text{size} \\times 8}{\\text{rate}}', explanation: `size = ${size} MB, rate = ${rate} Mbps` },
          { title: 'เนเธเธฅเธเธซเธเนเธงเธข', latex: `${size} \\ \\text{MB} = ${size} \\times 8 = ${size * 8} \\ \\text{Mb}`, explanation: '1 MB = 8 เน€เธกเธเธฐเธเธดเธ• (Mb)' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `t = \\frac{${size * 8}}{${rate}}`, explanation: 'เธเธเธฒเธ”เธเธดเธ•เธซเธฒเธฃเธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธญเธงเธดเธเธฒเธ—เธต' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `เนเธเนเน€เธงเธฅเธฒเธญเธฑเธเนเธซเธฅเธ” ${result.toFixed(2)} เธงเธดเธเธฒเธ—เธต` }
        ];
      } else if (target === 'size') {
        result = (time * rate) / 8;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธเธฒเธ”เนเธเธฅเน', latex: '\\text{size} = \\frac{t \\times \\text{rate}}{8}', explanation: `t = ${time} s, rate = ${rate} Mbps` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{size} = \\frac{${time} \\times ${rate}}{8} = ${result.toFixed(2)} \\ \\text{MB}`, explanation: `เธเธเธฒเธ”เนเธเธฅเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} MB` }
        ];
      } else {
        if (time === 0) throw new Error('เน€เธงเธฅเธฒ t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (size * 8) / time;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธง', latex: '\\text{rate} = \\frac{\\text{size} \\times 8}{t}', explanation: `size = ${size} MB, t = ${time} s` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{rate} = \\frac{${size} \\times 8}{${time}} = ${result.toFixed(2)} \\ \\text{Mbps}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธญเธฑเธเนเธซเธฅเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} Mbps` }
        ];
      }
      return { result, unit: target === 'time' ? 's' : target === 'size' ? 'MB' : 'Mbps', steps };
    }
  },

  {
    id: 'text_file_size',
    name: 'Text File Size',
    nameTh: 'เธเธเธฒเธ”เนเธเธฅเนเธเนเธญเธเธงเธฒเธก',
    category: 'tech',
    categoryTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ',
    icon: 'file-text',
    grade: 'เธก.4',
    latex: '\\text{size} = \\text{chars} \\times \\text{bytes/char}',
    description: 'เธเธเธฒเธ”เนเธเธฅเนเธเนเธญเธเธงเธฒเธก = เธเธณเธเธงเธเธ•เธฑเธงเธญเธฑเธเธฉเธฃ ร— เนเธเธ•เนเธ•เนเธญเธ•เธฑเธงเธญเธฑเธเธฉเธฃ เน€เธเนเธ 1000 เธ•เธฑเธงเธญเธฑเธเธฉเธฃ ร— 2 เนเธเธ•เน (UTF-16) = 2000 เนเธเธ•เน',
    variables: [
      { id: 'chars', symbol: '\\text{chars}', name: 'Character Count', nameTh: 'เธเธณเธเธงเธเธ•เธฑเธงเธญเธฑเธเธฉเธฃ', unit: 'เธ•เธฑเธง', defaultValue: 1000, min: 1, max: 1e9, step: 1 },
      { id: 'bpc', symbol: '\\text{bytes/char}', name: 'Bytes per Character', nameTh: 'เนเธเธ•เนเธ•เนเธญเธ•เธฑเธงเธญเธฑเธเธฉเธฃ', unit: 'B/เธ•เธฑเธง', defaultValue: 2, min: 1, max: 8, step: 1 },
      { id: 'size', symbol: '\\text{size}', name: 'File Size', nameTh: 'เธเธเธฒเธ”เนเธเธฅเน', unit: 'bytes', defaultValue: 2000, min: 1, max: 1e12, step: 1 }
    ],
    solveTargets: ['size', 'chars', 'bpc'],
    calculate: (inputs, target = 'size') => {
      const { chars, bpc, size } = inputs;
      let result, steps;
      if (target === 'size') {
        result = chars * bpc;
        steps = [
          { title: 'เธชเธนเธ•เธฃ', latex: '\\text{size} = \\text{chars} \\times \\text{bytes/char}', explanation: `chars = ${chars}, bytes/char = ${bpc}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\text{size} = ${chars} \\times ${bpc}`, explanation: 'เธเธณเธเธงเธเธ•เธฑเธงเธญเธฑเธเธฉเธฃเธเธนเธ“เนเธเธ•เนเธ•เนเธญเธ•เธฑเธง' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{size} = ${result.toLocaleString()} \\ \\text{bytes}`, explanation: `เนเธเธฅเนเธกเธตเธเธเธฒเธ” ${result.toLocaleString()} เนเธเธ•เน (${(result / 1024).toFixed(2)} KB)` }
        ];
      } else if (target === 'chars') {
        if (bpc === 0) throw new Error('เนเธเธ•เนเธ•เนเธญเธ•เธฑเธงเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = size / bpc;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธเธณเธเธงเธเธ•เธฑเธงเธญเธฑเธเธฉเธฃ', latex: '\\text{chars} = \\frac{\\text{size}}{\\text{bytes/char}}', explanation: `size = ${size} bytes, bytes/char = ${bpc}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{chars} = \\frac{${size}}{${bpc}} = ${result.toFixed(1)} \\ \\text{เธ•เธฑเธง}`, explanation: `เธ•เธฑเธงเธญเธฑเธเธฉเธฃเธเธฃเธฐเธกเธฒเธ“ ${result.toFixed(1)} เธ•เธฑเธง` }
        ];
      } else {
        if (chars === 0) throw new Error('เธเธณเธเธงเธเธ•เธฑเธงเธญเธฑเธเธฉเธฃเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = size / chars;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเนเธเธ•เนเธ•เนเธญเธ•เธฑเธง', latex: '\\text{bytes/char} = \\frac{\\text{size}}{\\text{chars}}', explanation: `size = ${size} bytes, chars = ${chars}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `\\text{bytes/char} = \\frac{${size}}{${chars}} = ${result.toFixed(2)} \\ \\text{B/เธ•เธฑเธง}`, explanation: `เนเธ•เนเธฅเธฐเธ•เธฑเธงเธญเธฑเธเธฉเธฃเนเธเน ${result.toFixed(2)} เนเธเธ•เน` }
        ];
      }
      return { result, unit: target === 'size' ? 'bytes' : target === 'chars' ? 'เธ•เธฑเธง' : 'B/เธ•เธฑเธง', steps };
    }
  }
];