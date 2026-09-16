// @ts-nocheck

/**
 * Finance Formulas (เธเธฒเธฃเน€เธเธดเธ) - เธก.3 - เธก.6
 * เธฃเธงเธกเธเธฑเธ compound_interest เน€เธ”เธดเธกเนเธ formulas.js
 */

export const FINANCE_FORMULAS = [
  {
    id: 'simple_interest',
    name: 'Simple Interest',
    nameTh: 'เธ”เธญเธเน€เธเธตเนเธขเนเธเธเธเนเธฒเธข',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'wallet',
    grade: 'เธก.3',
    latex: 'I = P \\cdot r \\cdot t',
    description: 'เธ”เธญเธเน€เธเธตเนเธขเนเธเธเธเนเธฒเธข = เน€เธเธดเธเธ•เนเธ ร— เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเธเธต ร— เธฃเธฐเธขเธฐเน€เธงเธฅเธฒ (เธเธต) เน€เธเนเธ เธเธฒเธ 1,000 เธเธฒเธ— เธญเธฑเธ•เธฃเธฒ 5% เธ•เนเธญเธเธต เน€เธเนเธเน€เธงเธฅเธฒ 3 เธเธต',
    variables: [
      { id: 'I', symbol: 'I', name: 'Interest', nameTh: 'เธ”เธญเธเน€เธเธตเนเธข (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 150, min: 0, max: 1e15, step: 1 },
      { id: 'P', symbol: 'P', name: 'Principal', nameTh: 'เน€เธเธดเธเธ•เนเธ (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 1000, min: 0, max: 1e15, step: 1 },
      { id: 'r', symbol: 'r', name: 'Annual Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเธเธต (เธ—เธจเธเธดเธขเธก เน€เธเนเธ 0.05 = 5%)', unit: '', defaultValue: 0.05, min: 0, max: 1, step: 0.01 },
      { id: 't', symbol: 't', name: 'Time (years)', nameTh: 'เธฃเธฐเธขเธฐเน€เธงเธฅเธฒ (เธเธต)', unit: 'เธเธต', defaultValue: 3, min: 0, max: 1000, step: 0.5 }
    ],
    solveTargets: ['I', 'P', 'r', 't'],
    calculate: (inputs, target = 'I') => {
      let { I, P, r, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'I') {
        result = P * r * t;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธ”เธญเธเน€เธเธตเนเธขเนเธเธเธเนเธฒเธข', latex: 'I = P \\cdot r \\cdot t', explanation: `P = ${P}, r = ${r} (${(r * 100).toFixed(2)}%), t = ${t} เธเธต` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `I = ${P} \\times ${r} \\times ${t}`, explanation: 'เธเธนเธ“เน€เธเธดเธเธ•เนเธ เธญเธฑเธ•เธฃเธฒ เนเธฅเธฐเน€เธงเธฅเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `I = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เธ”เธญเธเน€เธเธตเนเธข ${result.toFixed(2)} เธเธฒเธ— (เธขเธญเธ”เธฃเธงเธก ${(P + result).toFixed(2)} เธเธฒเธ—)` }
        ];
      } else if (target === 'P') {
        if (r === 0 || t === 0) throw new Error('r เนเธฅเธฐ t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = I / (r * t);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธเธดเธเธ•เนเธ', latex: 'P = \\frac{I}{r \\cdot t}', explanation: 'เธ”เธญเธเน€เธเธตเนเธขเธซเธฒเธฃเธเธฅเธเธนเธ“เธเธญเธ rยทt' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เน€เธเธดเธเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฒเธ—` }
        ];
      } else if (target === 'r') {
        if (P === 0 || t === 0) throw new Error('P เนเธฅเธฐ t เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = I / (P * t);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธข', latex: 'r = \\frac{I}{P \\cdot t}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `r = ${result.toFixed(4)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธข ${(result * 100).toFixed(2)}% เธ•เนเธญเธเธต` }
        ];
      } else if (target === 't') {
        if (P === 0 || r === 0) throw new Error('P เนเธฅเธฐ r เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = I / (P * r);
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเธฃเธฐเธขเธฐเน€เธงเธฅเธฒ', latex: 't = \\frac{I}{P \\cdot r}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `t = ${result.toFixed(2)} \\ \\text{เธเธต}`, explanation: `เนเธเนเน€เธงเธฅเธฒ ${result.toFixed(2)} เธเธต` }
        ];
      }

      return { result, resultDisplay: `${result.toFixed(2)}`, unit: target === 'I' || target === 'P' ? 'เธเธฒเธ—' : '', steps };
    }
  },

  {
    id: 'annuity_fv',
    name: 'Future Value of Annuity',
    nameTh: 'เธกเธนเธฅเธเนเธฒเธญเธเธฒเธเธ•เธเธญเธเน€เธเธดเธเธฃเธฒเธขเธเธงเธ”',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'wallet',
    grade: 'เธก.5-6',
    latex: 'FV = PMT \\cdot \\frac{(1+r)^n - 1}{r}',
    description: 'เธกเธนเธฅเธเนเธฒเนเธเธญเธเธฒเธเธ•เธเธญเธเน€เธเธดเธเธ—เธตเนเธเธฒเธเน€เธเนเธเธเธงเธ”เธชเธกเนเธณเน€เธชเธกเธญ เน€เธเนเธ เธเธฒเธเธชเธดเนเธเธเธต 5,000 เธเธฒเธ—เธ—เธธเธเธเธต เธญเธฑเธ•เธฃเธฒ 6% เน€เธเนเธเน€เธงเธฅเธฒ 10 เธเธต',
    variables: [
      { id: 'FV', symbol: 'FV', name: 'Future Value', nameTh: 'เธกเธนเธฅเธเนเธฒเธญเธเธฒเธเธ• (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 65904, min: 0, max: 1e18, step: 1 },
      { id: 'PMT', symbol: 'PMT', name: 'Payment per Period', nameTh: 'เน€เธเธดเธเธ—เธตเนเธเนเธฒเธขเธ•เนเธญเธเธงเธ” (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 5000, min: 0, max: 1e12, step: 1 },
      { id: 'r', symbol: 'r', name: 'Rate per Period', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเธเธงเธ” (เธ—เธจเธเธดเธขเธก)', unit: '', defaultValue: 0.06, min: 0.0000001, max: 1, step: 0.01 },
      { id: 'n', symbol: 'n', name: 'Number of Periods', nameTh: 'เธเธณเธเธงเธเธเธงเธ”', unit: 'เธเธงเธ”', defaultValue: 10, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['FV', 'PMT'],
    calculate: (inputs, target = 'FV') => {
      let { FV, PMT, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'FV') {
        result = PMT * (Math.pow(1 + r, n) - 1) / r;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธกเธนเธฅเธเนเธฒเธญเธเธฒเธเธ•เธเธญเธเน€เธเธดเธเธฃเธฒเธขเธเธงเธ”', latex: 'FV = PMT \\cdot \\frac{(1+r)^n - 1}{r}', explanation: `PMT = ${PMT}, r = ${r}, n = ${n}` },
          { title: 'เธเธณเธเธงเธ“เธ•เธฑเธงเธเธนเธ“', latex: `(1+${r})^{${n}} = ${Math.pow(1 + r, n).toFixed(4)}`, explanation: 'เธเธฒเธฃเธ—เธเธ•เนเธ n เธเธงเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `FV = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เธกเธนเธฅเธเนเธฒเธญเธเธฒเธเธ•เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฒเธ—` }
        ];
      } else if (target === 'PMT') {
        const factor = (Math.pow(1 + r, n) - 1) / r;
        result = FV / factor;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธเธดเธเธ•เนเธญเธเธงเธ”', latex: 'PMT = \\frac{FV \\cdot r}{(1+r)^n - 1}', explanation: `FV = ${FV}, r = ${r}, n = ${n}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `PMT = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—/เธเธงเธ”}`, explanation: `เธ•เนเธญเธเธเธฒเธเธเธงเธ”เธฅเธฐ ${result.toFixed(2)} เธเธฒเธ—` }
        ];
      }

      return { result, unit: target === 'FV' || target === 'PMT' ? 'เธเธฒเธ—' : '', steps };
    }
  },

  {
    id: 'annuity_pv',
    name: 'Present Value of Annuity',
    nameTh: 'เธกเธนเธฅเธเนเธฒเธเธฑเธเธเธธเธเธฑเธเธเธญเธเน€เธเธดเธเธฃเธฒเธขเธเธงเธ”',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'wallet',
    grade: 'เธก.5-6',
    latex: 'PV = PMT \\cdot \\frac{1 - (1+r)^{-n}}{r}',
    description: 'เน€เธเธดเธเธเนเธญเธเธ—เธตเนเธ•เนเธญเธเธกเธตเธงเธฑเธเธเธตเนเน€เธเธทเนเธญเธเนเธฒเธขเน€เธเนเธเธเธงเธ”เธฃเธฒเธขเน€เธ”เธทเธญเธเธ—เธตเนเนเธเนเธเธญเธ เน€เธเนเธ เธ•เนเธญเธเธเธฒเธฃเธฃเธฑเธ 2,000 เธเธฒเธ—เธ—เธธเธเน€เธ”เธทเธญเธ 24 เน€เธ”เธทเธญเธ เธญเธฑเธ•เธฃเธฒ 1% เธ•เนเธญเน€เธ”เธทเธญเธ',
    variables: [
      { id: 'PV', symbol: 'PV', name: 'Present Value', nameTh: 'เธกเธนเธฅเธเนเธฒเธเธฑเธเธเธธเธเธฑเธ (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 42490, min: 0, max: 1e15, step: 1 },
      { id: 'PMT', symbol: 'PMT', name: 'Payment per Period', nameTh: 'เน€เธเธดเธเธ—เธตเนเนเธ”เนเธฃเธฑเธเธ•เนเธญเธเธงเธ” (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 2000, min: 0, max: 1e12, step: 1 },
      { id: 'r', symbol: 'r', name: 'Rate per Period', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเธเธงเธ” (เธ—เธจเธเธดเธขเธก)', unit: '', defaultValue: 0.01, min: 0.0000001, max: 1, step: 0.001 },
      { id: 'n', symbol: 'n', name: 'Number of Periods', nameTh: 'เธเธณเธเธงเธเธเธงเธ”', unit: 'เธเธงเธ”', defaultValue: 24, min: 1, max: 1200, step: 1 }
    ],
    solveTargets: ['PV', 'PMT'],
    calculate: (inputs, target = 'PV') => {
      let { PV, PMT, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'PV') {
        result = PMT * (1 - Math.pow(1 + r, -n)) / r;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธกเธนเธฅเธเนเธฒเธเธฑเธเธเธธเธเธฑเธเธเธญเธเน€เธเธดเธเธฃเธฒเธขเธเธงเธ”', latex: 'PV = PMT \\cdot \\frac{1 - (1+r)^{-n}}{r}', explanation: `PMT = ${PMT}, r = ${r}, n = ${n}` },
          { title: 'เธเธณเธเธงเธ“เธ•เธฑเธงเธเธนเธ“', latex: `(1+${r})^{-${n}} = ${Math.pow(1 + r, -n).toFixed(6)}`, explanation: 'เธเธดเธ”เธฅเธ”เธขเนเธญเธเธเธฅเธฑเธ n เธเธงเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `PV = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เธ•เนเธญเธเธกเธตเน€เธเธดเธ ${result.toFixed(2)} เธเธฒเธ—เธงเธฑเธเธเธตเน` }
        ];
      } else if (target === 'PMT') {
        const factor = (1 - Math.pow(1 + r, -n)) / r;
        result = PV / factor;
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธซเธฒเน€เธเธดเธเธ•เนเธญเธเธงเธ”', latex: 'PMT = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}', explanation: `PV = ${PV}, r = ${r}, n = ${n}` },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `PMT = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—/เธเธงเธ”}`, explanation: `เธฃเธฑเธเน€เธเธดเธเธเธงเธ”เธฅเธฐ ${result.toFixed(2)} เธเธฒเธ—` }
        ];
      }

      return { result, unit: target === 'PV' || target === 'PMT' ? 'เธเธฒเธ—' : '', steps };
    }
  },

  {
    id: 'loan_payment',
    name: 'Loan Payment (Amortization)',
    nameTh: 'เธเนเธฒเธเธงเธ”เธเนเธญเธเธเธณเธฃเธฐ',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'banknote',
    grade: 'เธก.5-6',
    latex: 'PMT = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}',
    description: 'เธเนเธฒเธเธงเธ”เธฃเธฒเธขเน€เธ”เธทเธญเธเธเธญเธเธชเธดเธเน€เธเธทเนเธญเธเนเธญเธเธเธณเธฃเธฐ เน€เธเนเธ เธเธนเน 1,000,000 เธเธฒเธ— เธญเธฑเธ•เธฃเธฒ 5% เธ•เนเธญเธเธต เธเนเธญเธ 30 เธเธต (n = 360 เน€เธ”เธทเธญเธ)',
    variables: [
      { id: 'PMT', symbol: 'PMT', name: 'Monthly Payment', nameTh: 'เธเนเธฒเธเธงเธ”เธ•เนเธญเน€เธ”เธทเธญเธ (เธเธฒเธ—)', unit: 'เธเธฒเธ—/เน€เธ”เธทเธญเธ', defaultValue: 5368, min: 0, max: 1e9, step: 1 },
      { id: 'PV', symbol: 'PV', name: 'Loan Amount', nameTh: 'เธขเธญเธ”เธเธนเน (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 1000000, min: 1, max: 1e15, step: 1 },
      { id: 'rAnnual', symbol: 'r_{annual}', name: 'Annual Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเธเธต (%)', unit: '%', defaultValue: 5, min: 0.0000001, max: 100, step: 0.1 },
      { id: 'years', symbol: 't', name: 'Term (years)', nameTh: 'เธฃเธฐเธขเธฐเน€เธงเธฅเธฒเธเธนเน (เธเธต)', unit: 'เธเธต', defaultValue: 30, min: 1, max: 100, step: 1 }
    ],
    solveTargets: ['PMT'],
    calculate: (inputs) => {
      let { PV, rAnnual, years } = inputs;
      const r = rAnnual / 100 / 12;
      const n = years * 12;
      const result = n > 0 ? PV * r / (1 - Math.pow(1 + r, -n)) : PV * r;
      const steps = [
        { title: 'เนเธเธฅเธเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเน€เธเนเธเธ•เนเธญเธเธงเธ”', latex: `r = \\frac{${rAnnual}}{100 \\times 12} = ${r.toFixed(6)}`, explanation: 'เธญเธฑเธ•เธฃเธฒเธฃเธฒเธขเธเธตเธซเธฒเธฃเน€เธเนเธเธฃเธฒเธขเน€เธ”เธทเธญเธ' },
        { title: 'เธเธณเธเธงเธ“เธเธณเธเธงเธเธเธงเธ”', latex: `n = ${years} \\times 12 = ${n}`, explanation: 'เนเธเธฅเธเธเธตเน€เธเนเธเน€เธ”เธทเธญเธ' },
        { title: 'เธชเธนเธ•เธฃเธเนเธฒเธเธงเธ”', latex: 'PMT = \\frac{PV \\cdot r}{1 - (1+r)^{-n}}', explanation: `PV = ${PV}, r = ${r.toFixed(6)}, n = ${n}` },
        { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `PMT = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—/เน€เธ”เธทเธญเธ}`, explanation: `เธ•เนเธญเธเธเนเธญเธเน€เธ”เธทเธญเธเธฅเธฐ ${result.toFixed(2)} เธเธฒเธ— (เธเนเธฒเธขเธฃเธงเธก ${n} เธเธงเธ” = ${(result * n).toLocaleString()} เธเธฒเธ—)` }
      ];
      return { result, unit: 'เธเธฒเธ—/เน€เธ”เธทเธญเธ', steps };
    }
  },

  {
    id: 'discount',
    name: 'Discount & Sale Price',
    nameTh: 'เธชเนเธงเธเธฅเธ”เนเธฅเธฐเธฃเธฒเธเธฒเธเธฒเธข',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'tag',
    grade: 'เธก.2-4',
    latex: '\\text{เธฃเธฒเธเธฒเธฅเธ”} = เธฃเธฒเธเธฒ \\times \\frac{d}{100}, \\ \\text{เธเนเธฒเธข} = เธฃเธฒเธเธฒ - เธชเนเธงเธเธฅเธ”',
    description: 'เธชเนเธงเธเธฅเธ” = เธฃเธฒเธเธฒเน€เธ•เนเธก ร— เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฅเธ” เนเธฅเธฐเธฃเธฒเธเธฒเธ—เธตเนเธ•เนเธญเธเธเนเธฒเธข = เธฃเธฒเธเธฒเน€เธ•เนเธก โ’ เธชเนเธงเธเธฅเธ” เน€เธเนเธ เน€เธชเธทเนเธญ 800 เธเธฒเธ— เธฅเธ” 25%',
    variables: [
      { id: 'price', symbol: 'P', name: 'Original Price', nameTh: 'เธฃเธฒเธเธฒเน€เธ•เนเธก (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 800, min: 0, max: 1e12, step: 1 },
      { id: 'discountPct', symbol: 'd\\%', name: 'Discount %', nameTh: 'เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฅเธ” (%)', unit: '%', defaultValue: 25, min: 0, max: 100, step: 1 },
      { id: 'salePrice', symbol: 'P_{sale}', name: 'Sale Price', nameTh: 'เธฃเธฒเธเธฒเธ—เธตเนเธ•เนเธญเธเธเนเธฒเธข (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 600, min: 0, max: 1e12, step: 1 }
    ],
    solveTargets: ['salePrice', 'discountPct'],
    calculate: (inputs, target = 'salePrice') => {
      let { price, discountPct, salePrice } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'salePrice') {
        const disc = price * discountPct / 100;
        result = price - disc;
        steps = [
          { title: 'เธเธณเธเธงเธ“เธชเนเธงเธเธฅเธ”', latex: `\\text{เธชเนเธงเธเธฅเธ”} = ${price} \\times \\frac{${discountPct}}{100} = ${disc.toFixed(2)}`, explanation: 'เธฃเธฒเธเธฒเน€เธ•เนเธกเธเธนเธ“เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฅเธ”' },
          { title: 'เธซเธฑเธเธชเนเธงเธเธฅเธ”', latex: `P_{sale} = ${price} - ${disc.toFixed(2)}`, explanation: 'เธฃเธฒเธเธฒเน€เธ•เนเธกเธฅเธเธชเนเธงเธเธฅเธ”' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P_{sale} = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เธ•เนเธญเธเธเนเธฒเธข ${result.toFixed(2)} เธเธฒเธ— (เธเธฃเธฐเธซเธขเธฑเธ” ${disc.toFixed(2)} เธเธฒเธ—)` }
        ];
      } else if (target === 'discountPct') {
        if (price === 0) throw new Error('เธฃเธฒเธเธฒเน€เธ•เนเธกเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = ((price - salePrice) / price) * 100;
        steps = [
          { title: 'เธเธณเธเธงเธ“เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฅเธ”', latex: `d\\% = \\frac{P - P_{sale}}{P} \\times 100`, explanation: `เธชเนเธงเธเธฅเธ” ${(price - salePrice).toFixed(2)} เธเธฒเธ—เธเธฒเธเธฃเธฒเธเธฒเน€เธ•เนเธก ${price}` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `d\\% = \\frac{${price} - ${salePrice}}{${price}} \\times 100`, explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `d\\% = ${result.toFixed(2)}\\% `, explanation: `เธญเธฑเธ•เธฃเธฒเธชเนเธงเธเธฅเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}%` }
        ];
      }

      return { result, unit: target === 'discountPct' ? '%' : 'เธเธฒเธ—', steps };
    }
  },

  {
    id: 'vat',
    name: 'VAT (Thai 7% / Custom)',
    nameTh: 'เธ เธฒเธฉเธตเธกเธนเธฅเธเนเธฒเน€เธเธดเนเธก (VAT)',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'receipt',
    grade: 'เธก.4-6',
    latex: '\\text{VAT} = P \\times \\frac{v}{100}, \\ \\text{เธฃเธงเธก} = P + \\text{VAT}',
    description: 'VAT = เธฃเธฒเธเธฒเนเธกเนเธฃเธงเธกเธ เธฒเธฉเธต ร— เธญเธฑเธ•เธฃเธฒ (เนเธ—เธข 7%) เธฃเธฒเธเธฒเธฃเธงเธกเธ เธฒเธฉเธต = เธฃเธฒเธเธฒ + VAT เน€เธเนเธ เธเธทเนเธญเธเธญเธ 500 เธเธฒเธ— + VAT 7%',
    variables: [
      { id: 'priceNoVat', symbol: 'P', name: 'Price (excl. VAT)', nameTh: 'เธฃเธฒเธเธฒเธเนเธญเธเธ เธฒเธฉเธต (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 500, min: 0, max: 1e12, step: 1 },
      { id: 'vatRate', symbol: 'v\\%', name: 'VAT Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒ VAT (%)', unit: '%', defaultValue: 7, min: 0, max: 100, step: 0.5 },
      { id: 'priceVat', symbol: 'P_{vat}', name: 'Price (incl. VAT)', nameTh: 'เธฃเธฒเธเธฒเธฃเธงเธก VAT (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 535, min: 0, max: 1e12, step: 1 }
    ],
    solveTargets: ['priceVat', 'vatRate'],
    calculate: (inputs, target = 'priceVat') => {
      let { priceNoVat, vatRate, priceVat } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'priceVat') {
        const vat = priceNoVat * vatRate / 100;
        result = priceNoVat + vat;
        steps = [
          { title: 'เธเธณเธเธงเธ“ VAT', latex: `VAT = ${priceNoVat} \\times \\frac{${vatRate}}{100} = ${vat.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: 'เธฃเธฒเธเธฒเธเนเธญเธเธ เธฒเธฉเธตเธเธนเธ“เธญเธฑเธ•เธฃเธฒ' },
          { title: 'เธเธงเธ VAT เน€เธเนเธฒเธเธฑเธเธฃเธฒเธเธฒ', latex: `P_{vat} = ${priceNoVat} + ${vat.toFixed(2)}`, explanation: 'เธฃเธฒเธเธฒเธเนเธญเธเธเธงเธเธ เธฒเธฉเธตเธเธงเธ VAT' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `P_{vat} = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เธฃเธฒเธเธฒเธฃเธงเธก VAT เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)} เธเธฒเธ—` }
        ];
      } else if (target === 'vatRate') {
        if (priceNoVat === 0) throw new Error('เธฃเธฒเธเธฒเธเนเธญเธเธ เธฒเธฉเธตเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = ((priceVat - priceNoVat) / priceNoVat) * 100;
        steps = [
          { title: 'เธเธณเธเธงเธ“เธญเธฑเธ•เธฃเธฒ VAT', latex: `v\\% = \\frac{P_{vat} - P}{P} \\times 100`, explanation: `เธ เธฒเธฉเธตเธ—เธตเนเธเนเธฒเธข = ${(priceVat - priceNoVat).toFixed(2)} เธเธฒเธ—` },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `v\\% = \\frac{${priceVat} - ${priceNoVat}}{${priceNoVat}} \\times 100`, explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `v\\% = ${result.toFixed(2)}\\% `, explanation: `เธญเธฑเธ•เธฃเธฒ VAT เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(2)}%` }
        ];
      }

      return { result, unit: target === 'vatRate' ? '%' : 'เธเธฒเธ—', steps };
    }
  },

  {
    id: 'currency_exchange',
    name: 'Currency Exchange',
    nameTh: 'เธเธฒเธฃเนเธฅเธเน€เธเธฅเธตเนเธขเธเน€เธเธดเธเธ•เธฃเธฒ',
    category: 'finance',
    categoryTh: 'เธเธฒเธฃเน€เธเธดเธ',
    icon: 'repeat',
    grade: 'เธก.3-6',
    latex: '\\text{เนเธ”เน} = \\frac{\\text{เน€เธเธดเธเธเธฒเธ—}}{\\text{เธญเธฑเธ•เธฃเธฒ}}',
    description: 'เธเธณเธเธงเธเน€เธเธดเธเธ•เธฃเธฒเธ•เนเธฒเธเธเธฃเธฐเน€เธ—เธจเธ—เธตเนเนเธ”เน = เน€เธเธดเธเธเธฒเธ— รท เธญเธฑเธ•เธฃเธฒเนเธฅเธเน€เธเธฅเธตเนเธขเธ เน€เธเนเธ 15,000 เธเธฒเธ— เธญเธฑเธ•เธฃเธฒ 35 เธเธฒเธ—/เธ”เธญเธฅเธฅเธฒเธฃเน เนเธ”เนเธเธฃเธฐเธกเธฒเธ“ 428.57 USD',
    variables: [
      { id: 'thb', symbol: 'THB', name: 'Amount in THB', nameTh: 'เน€เธเธดเธเธเธฒเธ— (เธเธฒเธ—)', unit: 'เธเธฒเธ—', defaultValue: 15000, min: 0, max: 1e15, step: 1 },
      { id: 'rate', symbol: 'rate', name: 'Rate (THB per 1 unit)', nameTh: 'เธญเธฑเธ•เธฃเธฒเนเธฅเธเน€เธเธฅเธตเนเธขเธ (เธเธฒเธ—เธ•เนเธญเธซเธเนเธงเธข)', unit: 'เธเธฒเธ—/เธซเธเนเธงเธข', defaultValue: 35, min: 0.000001, max: 1e9, step: 0.01 },
      { id: 'foreign', symbol: 'foreign', name: 'Amount in Foreign', nameTh: 'เน€เธเธดเธเธ•เธฃเธฒเธ•เนเธฒเธเธเธฃเธฐเน€เธ—เธจเธ—เธตเนเนเธ”เน', unit: 'เธซเธเนเธงเธข', defaultValue: 428.57, min: 0, max: 1e15, step: 0.01 }
    ],
    solveTargets: ['foreign', 'rate', 'thb'],
    calculate: (inputs, target = 'foreign') => {
      let { thb, rate, foreign } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'foreign') {
        result = thb / rate;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเนเธฅเธเน€เธเธฅเธตเนเธขเธ', latex: '\\text{เนเธ”เน} = \\frac{THB}{rate}', explanation: 'เน€เธเธดเธเธเธฒเธ—เธซเธฒเธฃเธญเธฑเธ•เธฃเธฒเนเธฅเธเน€เธเธฅเธตเนเธขเธ' },
          { title: 'เนเธ—เธเธเนเธฒ', latex: `\\text{เนเธ”เน} = \\frac{${thb}}{${rate}}`, explanation: 'เธญเธฑเธ•เธฃเธฒ ${rate} เธเธฒเธ—เธ•เนเธญเธซเธเนเธงเธข' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `= ${result.toFixed(2)} \\ \\text{เธซเธเนเธงเธข}`, explanation: `เนเธฅเธเนเธ”เน ${result.toFixed(2)} เธซเธเนเธงเธขเน€เธเธดเธเธ•เธฃเธฒ` }
        ];
      } else if (target === 'rate') {
        if (foreign === 0) throw new Error('เน€เธเธดเธเธ•เธฃเธฒเธ•เนเธฒเธเธเธฃเธฐเน€เธ—เธจเธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = thb / foreign;
        steps = [
          { title: 'เธเธณเธเธงเธ“เธญเธฑเธ•เธฃเธฒเนเธฅเธเน€เธเธฅเธตเนเธขเธ', latex: 'rate = \\frac{THB}{foreign}', explanation: 'เธเธฒเธ—เธซเธฒเธฃเธซเธเนเธงเธขเน€เธเธดเธเธ•เธฃเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `rate = ${result.toFixed(4)} \\ \\text{เธเธฒเธ—/เธซเธเนเธงเธข}`, explanation: `เธญเธฑเธ•เธฃเธฒเนเธฅเธเน€เธเธฅเธตเนเธขเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธฒเธ—เธ•เนเธญเธซเธเนเธงเธข` }
        ];
      } else if (target === 'thb') {
        result = foreign * rate;
        steps = [
          { title: 'เธเธณเธเธงเธ“เน€เธเธดเธเธเธฒเธ—', latex: 'THB = foreign \\times rate', explanation: 'เธซเธเนเธงเธขเน€เธเธดเธเธ•เธฃเธฒเธเธนเธ“เธญเธฑเธ•เธฃเธฒ' },
          { title: 'เธเธฅเธฅเธฑเธเธเน', latex: `THB = ${result.toFixed(2)} \\ \\text{เธเธฒเธ—}`, explanation: `เนเธเนเน€เธเธดเธ ${result.toFixed(2)} เธเธฒเธ—` }
        ];
      }

      return { result, unit: target === 'rate' ? 'เธเธฒเธ—/เธซเธเนเธงเธข' : target === 'thb' ? 'เธเธฒเธ—' : 'เธซเธเนเธงเธข', steps };
    }
  }
];