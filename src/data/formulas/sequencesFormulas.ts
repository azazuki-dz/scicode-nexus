// @ts-nocheck

/**
 * Sequences & Series Formulas (ลำดับและอนุกรม) - ม.5
 */

export const SEQUENCES_FORMULAS = [
  {
    id: 'arithmetic_term',
    name: 'Arithmetic Sequence (nth term)',
    nameTh: 'ลำดับเลขคณิต (พจน์ที่ n)',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'list',
    grade: 'ม.5',
    latex: 'a_n = a_1 + (n-1)d',
    description: 'พจน์ที่ n ของลำดับเลขคณิต คำนวณจากพจน์แรกบวกร้อยละผลต่างร่วม (d) ถึง n-1 ครั้ง',
    variables: [
      { id: 'an', symbol: 'a_n', name: 'nth Term', nameTh: 'พจน์ที่ n (aₙ)', unit: '', defaultValue: 23, min: -1e15, max: 1e15, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'พจน์แรก (a₁)', unit: '', defaultValue: 3, min: -1e15, max: 1e15, step: 1 },
      { id: 'n', symbol: 'n', name: 'Term Number', nameTh: 'ลำดับที่ (n)', unit: '', defaultValue: 6, min: 1, max: 1000000, step: 1 },
      { id: 'd', symbol: 'd', name: 'Common Difference', nameTh: 'ผลต่างร่วม (d)', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 1 }
    ],
    solveTargets: ['an', 'n', 'd', 'a1'],
    calculate: (inputs, target = 'an') => {
      let { an, a1, n, d } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'an') {
        result = a1 + (n - 1) * d;
        steps = [
          { title: 'สูตรพจน์ที่ n', latex: 'a_n = a_1 + (n-1)d', explanation: `a₁ = ${a1}, d = ${d}, n = ${n}` },
          { title: 'แทนค่า', latex: `a_n = ${a1} + (${n} - 1) \\times ${d} = ${a1} + ${(n - 1) * d}`, explanation: 'บวกผลต่างร่วม n-1 ครั้ง' },
          { title: 'ผลลัพธ์', latex: `a_n = ${result.toFixed(4)}`, explanation: `พจน์ที่ ${n} เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (d === 0) throw new Error('ผลต่างร่วม (d) ต้องไม่เป็น 0');
        result = (an - a1) / d + 1;
        if (result <= 0 || !Number.isInteger(result)) throw new Error('ข้อมูลนี้ไม่ให้ค่า n ที่เป็นจำนวนเต็มบวก');
        steps = [
          { title: 'จัดรูปหา n', latex: 'n = \\frac{a_n - a_1}{d} + 1', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(0)}`, explanation: `เป็นพจน์ที่ ${result.toFixed(0)}` }
        ];
      } else if (target === 'd') {
        if (n === 1) throw new Error('ต้องมีพจน์อย่างน้อย 2 พจน์ (n > 1)');
        result = (an - a1) / (n - 1);
        steps = [
          { title: 'จัดรูปหาผลต่างร่วม', latex: 'd = \\frac{a_n - a_1}{n-1}', explanation: 'ผลต่างของพจน์หารจำนวนขั้น' },
          { title: 'ผลลัพธ์', latex: `d = ${result.toFixed(4)}`, explanation: `ผลต่างร่วมเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a1') {
        result = an - (n - 1) * d;
        steps = [
          { title: 'จัดรูปหาพจน์แรก', latex: 'a_1 = a_n - (n-1)d', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `a_1 = ${result.toFixed(4)}`, explanation: `พจน์แรกเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'arithmetic_sum',
    name: 'Arithmetic Series (Sum)',
    nameTh: 'อนุกรมเลขคณิต (ผลบวก)',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'list',
    grade: 'ม.5',
    latex: 'S_n = \\frac{n}{2}(a_1 + a_n)',
    description: 'ผลบวก n พจน์แรกของลำดับเลขคณิต = จำนวนพจน์คูณค่าเฉลี่ยของพจน์แรกและพจน์สุดท้าย',
    variables: [
      { id: 'Sn', symbol: 'S_n', name: 'Sum', nameTh: 'ผลบวก n พจน์ (Sₙ)', unit: '', defaultValue: 78, min: -1e15, max: 1e15, step: 1 },
      { id: 'n', symbol: 'n', name: 'Number of Terms', nameTh: 'จำนวนพจน์ (n)', unit: '', defaultValue: 6, min: 1, max: 1000000, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'พจน์แรก (a₁)', unit: '', defaultValue: 3, min: -1e15, max: 1e15, step: 1 },
      { id: 'an', symbol: 'a_n', name: 'Last Term', nameTh: 'พจน์สุดท้าย (aₙ)', unit: '', defaultValue: 23, min: -1e15, max: 1e15, step: 1 }
    ],
    solveTargets: ['Sn', 'n'],
    calculate: (inputs, target = 'Sn') => {
      let { Sn, n, a1, an } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Sn') {
        result = (n / 2) * (a1 + an);
        steps = [
          { title: 'สูตรผลบวก', latex: 'S_n = \\frac{n}{2}(a_1 + a_n)', explanation: 'จำนวนพจน์คูณค่าเฉลี่ยของพจน์แรกและสุดท้าย' },
          { title: 'แทนค่า', latex: `S_n = \\frac{${n}}{2} \\times (${a1} + ${an})`, explanation: `n = ${n}, a₁ = ${a1}, aₙ = ${an}` },
          { title: 'ผลลัพธ์', latex: `S_n = ${result.toFixed(4)}`, explanation: `ผลบวกเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (a1 + an === 0) throw new Error('a₁ + aₙ ต้องไม่เป็น 0');
        result = (2 * Sn) / (a1 + an);
        if (result <= 0 || !Number.isInteger(result)) throw new Error('ข้อมูลนี้ไม่ให้ค่า n ที่เป็นจำนวนเต็มบวก');
        steps = [
          { title: 'จัดรูปหา n', latex: 'n = \\frac{2S_n}{a_1 + a_n}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(0)}`, explanation: `จำนวนพจน์เท่ากับ ${result.toFixed(0)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_term',
    name: 'Geometric Sequence (nth term)',
    nameTh: 'ลำดับเรขาคณิต (พจน์ที่ n)',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'list',
    grade: 'ม.5',
    latex: 'a_n = a_1 \\cdot r^{n-1}',
    description: 'พจน์ที่ n ของลำดับเรขาคณิต คำนวณจากพจน์แรกคูณอัตราส่วนร่วม (r) ยกกำลัง n-1',
    variables: [
      { id: 'an', symbol: 'a_n', name: 'nth Term', nameTh: 'พจน์ที่ n (aₙ)', unit: '', defaultValue: 324, min: -1e300, max: 1e300, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'พจน์แรก (a₁)', unit: '', defaultValue: 4, min: -1e300, max: 1e300, step: 1 },
      { id: 'r', symbol: 'r', name: 'Common Ratio', nameTh: 'อัตราส่วนร่วม (r)', unit: '', defaultValue: 3, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Term Number', nameTh: 'ลำดับที่ (n)', unit: '', defaultValue: 5, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['an', 'n', 'r'],
    calculate: (inputs, target = 'an') => {
      let { an, a1, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'an') {
        result = a1 * Math.pow(r, n - 1);
        steps = [
          { title: 'สูตรพจน์ที่ n', latex: 'a_n = a_1 \\cdot r^{n-1}', explanation: `a₁ = ${a1}, r = ${r}, n = ${n}` },
          { title: 'ผลลัพธ์', latex: `a_n = ${result.toFixed(4)}`, explanation: `พจน์ที่ ${n} เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (a1 === 0 || Math.abs(r) <= 0) throw new Error('a₁ และ r ต้องไม่เป็น 0');
        if ((an / a1) < 0) throw new Error('aₙ/a₁ เป็นลบ ไม่สามารถหาค่า n ด้วยลอการิทึม');
        result = Math.log(Math.abs(an / a1)) / Math.log(Math.abs(r)) + 1;
        const nRounded = Math.round(result);
        if (Math.abs(result - nRounded) > 1e-9) throw new Error('ข้อมูลนี้ไม่ให้ค่า n ที่เป็นจำนวนเต็มบวก');
        result = nRounded;
        steps = [
          { title: 'จัดรูปหา n', latex: 'n = \\frac{\\log(a_n / a_1)}{\\log(r)} + 1', explanation: 'ใช้ลอการิทึมแก้เลขชี้กำลัง' },
          { title: 'ผลลัพธ์', latex: `n = ${result}`, explanation: `เป็นพจน์ที่ ${result}` }
        ];
      } else if (target === 'r') {
        if (a1 === 0) throw new Error('พจน์แรก (a₁) ต้องไม่เป็น 0');
        const base = an / a1;
        result = (n - 1) % 2 === 1 ? -Math.pow(Math.abs(base), 1 / (n - 1)) : Math.pow(base, 1 / (n - 1));
        steps = [
          { title: 'จัดรูปหาอัตราส่วนร่วม', latex: 'r = \\sqrt[n-1]{\\frac{a_n}{a_1}}', explanation: 'ถอดรากอันดับ n-1' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `อัตราส่วนร่วมเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_sum',
    name: 'Geometric Series (Finite Sum)',
    nameTh: 'อนุกรมเรขาคณิต (ผลบวกจำกัด)',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'list',
    grade: 'ม.5',
    latex: 'S_n = \\frac{a_1(1 - r^n)}{1 - r}',
    description: 'ผลบวก n พจน์แรกของลำดับเรขาคณิต เมื่อ r ≠ 1 เช่น 4 + 12 + 36 + ... 5 พจน์',
    variables: [
      { id: 'Sn', symbol: 'S_n', name: 'Sum', nameTh: 'ผลบวก n พจน์ (Sₙ)', unit: '', defaultValue: 484, min: -1e300, max: 1e300, step: 1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'พจน์แรก (a₁)', unit: '', defaultValue: 4, min: -1e300, max: 1e300, step: 1 },
      { id: 'r', symbol: 'r', name: 'Common Ratio', nameTh: 'อัตราส่วนร่วม (r)', unit: '', defaultValue: 3, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Number of Terms', nameTh: 'จำนวนพจน์ (n)', unit: '', defaultValue: 5, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['Sn', 'n'],
    calculate: (inputs, target = 'Sn') => {
      let { Sn, a1, r, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Sn') {
        if (r === 1) throw new Error('เมื่อ r = 1 ให้ใช้สูตร Sn = n·a₁ แทน');
        result = (a1 * (1 - Math.pow(r, n))) / (1 - r);
        steps = [
          { title: 'สูตรผลบวกอนุกรมเรขาคณิต', latex: 'S_n = \\frac{a_1(1 - r^n)}{1 - r}', explanation: `a₁ = ${a1}, r = ${r}, n = ${n}` },
          { title: 'แทนค่า', latex: `S_n = \\frac{${a1}(1 - ${r}^${n})}{1 - ${r}}`, explanation: `คำนวณ ${r}^${n} = ${Math.pow(r, n).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `S_n = ${result.toFixed(4)}`, explanation: `ผลบวกเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (a1 === 0 || r === 1 || r === 0) throw new Error('ต้องมี a₁ ≠ 0 และ r ≠ 0, 1');
        const lhs = 1 - (Sn * (1 - r)) / a1;
        if (lhs <= 0 || r < 0) throw new Error('ไม่สามารถคำนวณหา n จากข้อมูลนี้ได้ (ตรวจสอบค่าอีกครั้ง)');
        result = Math.log(lhs) / Math.log(r);
        if (!Number.isInteger(result)) throw new Error('ข้อมูลนี้ไม่ให้ค่า n ที่เป็นจำนวนเต็มบวก');
        steps = [
          { title: 'จัดรูปหา n', latex: 'r^n = 1 - \\frac{S_n(1-r)}{a_1}', explanation: 'ย้ายข้างแล้วใช้ลอการิทึม' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(0)}`, explanation: `จำนวนพจน์เท่ากับ ${result.toFixed(0)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_infinite_sum',
    name: 'Geometric Series (Infinite Sum)',
    nameTh: 'อนุกรมเรขาคณิตอนันต์ (|r| < 1)',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'infinity',
    grade: 'ม.5',
    latex: 'S_\\infty = \\frac{a_1}{1 - r}',
    description: 'ผลบวกของอนุกรมเรขาคณิตที่มีพจน์ไม่รู้จบ เมื่ออัตราส่วนร่วมอยู่ในช่วง -1 < r < 1 เท่านั้นที่จะเข้าสู่ค่าจำกัด',
    variables: [
      { id: 'S', symbol: 'S_\\infty', name: 'Infinite Sum', nameTh: 'ผลบวกอนันต์', unit: '', defaultValue: 12, min: 0, max: 1e15, step: 0.1 },
      { id: 'a1', symbol: 'a_1', name: 'First Term', nameTh: 'พจน์แรก (a₁)', unit: '', defaultValue: 4, min: -1e15, max: 1e15, step: 1 },
      { id: 'r', symbol: 'r', name: 'Common Ratio', nameTh: 'อัตราส่วนร่วม (r)', unit: '', defaultValue: 0.6667, min: -0.9999, max: 0.9999, step: 0.01 }
    ],
    solveTargets: ['S', 'a1', 'r'],
    calculate: (inputs, target = 'S') => {
      let { S, a1, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'S') {
        if (Math.abs(r) >= 1) throw new Error('อนุกรมลู่ออก: ต้องมี |r| < 1');
        result = a1 / (1 - r);
        steps = [
          { title: 'สูตรอนุกรมเรขาคณิตอนันต์', latex: 'S_\\infty = \\frac{a_1}{1 - r}', explanation: `ใช้ได้เมื่อ |r| = |${r}| < 1` },
          { title: 'ผลลัพธ์', latex: `S_\\infty = ${result.toFixed(4)}`, explanation: `ผลบวกอนันต์เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a1') {
        result = S * (1 - r);
        steps = [
          { title: 'จัดรูปหาพจน์แรก', latex: 'a_1 = S_\\infty (1 - r)', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `a_1 = ${result.toFixed(4)}`, explanation: `พจน์แรกเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'r') {
        if (S === 0) throw new Error('ผลบวก S ต้องไม่เป็น 0');
        result = 1 - a1 / S;
        steps = [
          { title: 'จัดรูปหาอัตราส่วนร่วม', latex: 'r = 1 - \\frac{a_1}{S_\\infty}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `อัตราส่วนร่วมเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'factorial',
    name: 'Factorial (n!)',
    nameTh: 'แฟกทอเรียล (n!)',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'hash',
    grade: 'ม.5',
    latex: 'n! = n \\times (n-1) \\times (n-2) \\times \\ldots \\times 1',
    description: 'แฟกทอเรียลคือผลคูณของจำนวนเต็มบวกตั้งแต่ 1 ถึง n (นิยาม 0! = 1) ใช้ในเรื่องการเรียงสับเปลี่ยนและความน่าจะเป็น',
    variables: [
      { id: 'n', symbol: 'n', name: 'Number', nameTh: 'ค่า n', unit: '', defaultValue: 5, min: 0, max: 170, step: 1 },
      { id: 'result', symbol: 'n!', name: 'Factorial', nameTh: 'ผลแฟกทอเรียล', unit: '', defaultValue: 120, min: 1, max: 1e308, step: 1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n } = inputs;
      if (!Number.isInteger(n) || n < 0) throw new Error('n ต้องเป็นจำนวนเต็มบวกหรือ 0');
      if (n > 170) throw new Error('n มากเกินไป (สูงสุด 170)');
      const terms = [];
      let result = 1;
      for (let i = 2; i <= n; i++) { result *= i; terms.push(i); }
      const steps = [
        { title: 'นิยามแฟกทอเรียล', latex: n === 0 ? '0! = 1' : `${n}! = ${terms.join(' \\times ')}`, explanation: 'คูณจำนวนเต็มบวกเรียงจากมากไปน้อย' },
        { title: 'ผลลัพธ์', latex: `${n}! = ${result}`.length < 100 ? `${n}! = ${result}` : `${n}! \\approx ${result.toExponential(4)}`, explanation: `แฟกทอเรียลของ ${n} เท่ากับ ${n > 100 ? result.toExponential(4) : result}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'sum_naturals',
    name: 'Sum of First n Naturals',
    nameTh: 'ผลบวกจำนวนนับ n ตัวแรก',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'list',
    grade: 'ม.4',
    latex: 'S = \\frac{n(n+1)}{2}',
    description: 'ผลบวก 1 + 2 + 3 + ... + n = n(n+1)/2 เช่น n = 5 ได้ 1+2+3+4+5 = 15',
    variables: [
      { id: 'n', symbol: 'n', name: 'Term Count', nameTh: 'จำนวนพจน์ (n)', unit: '', defaultValue: 5, min: 1, max: 1e9, step: 1 },
      { id: 'S', symbol: 'S', name: 'Sum', nameTh: 'ผลบวก', unit: '', defaultValue: 15, min: 1, max: 1e18, step: 1 }
    ],
    solveTargets: ['S', 'n'],
    calculate: (inputs, target = 'S') => {
      const { n, S } = inputs;
      let result, steps;
      if (target === 'S') {
        result = (n * (n + 1)) / 2;
        steps = [
          { title: 'สูตร', latex: 'S = \\frac{n(n+1)}{2}', explanation: `n = ${n}` },
          { title: 'แทนค่า', latex: `S = \\frac{${n} \\times ${n + 1}}{2}`, explanation: 'แทนจำนวนพจน์ลงในสูตร' },
          { title: 'ผลลัพธ์', latex: `S = ${result}`, explanation: `ผลบวก 1 ถึง ${n} เท่ากับ ${result}` }
        ];
      } else {
        const cand = (Math.sqrt(8 * S + 1) - 1) / 2;
        const nVal = Math.round(cand);
        if (Math.abs(nVal - cand) > 1e-9 || nVal < 1) throw new Error('S ต้องเป็นผลบวกจำนวนนับลงตัว (เช่น 15, 21, 28 ...)');
        result = nVal;
        steps = [
          { title: 'จัดรูปหา n', latex: 'n = \\frac{\\sqrt{8S + 1} - 1}{2}', explanation: `S = ${S}` },
          { title: 'ผลลัพธ์', latex: `n = ${nVal}`, explanation: `ต้องมีทั้งหมด ${nVal} พจน์ จึงจะรวมได้ ${S}` }
        ];
      }
      return { result, unit: '', steps };
    }
  },

  {
    id: 'sum_squares',
    name: 'Sum of Squared Naturals',
    nameTh: 'ผลบวกกำลังสอง n ตัวแรก',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'square',
    grade: 'ม.5',
    latex: 'S = \\frac{n(n+1)(2n+1)}{6}',
    description: 'ผลบวก 1² + 2² + ... + n² = n(n+1)(2n+1)/6 เช่น n = 5 ได้ 1+4+9+16+25 = 55',
    variables: [
      { id: 'n', symbol: 'n', name: 'Term Count', nameTh: 'จำนวนพจน์ (n)', unit: '', defaultValue: 5, min: 1, max: 1e5, step: 1 }
    ],
    solveTargets: ['S'],
    calculate: (inputs) => {
      const { n } = inputs;
      const result = (n * (n + 1) * (2 * n + 1)) / 6;
      const steps = [
        { title: 'สูตร', latex: 'S = \\frac{n(n+1)(2n+1)}{6}', explanation: `n = ${n}` },
        { title: 'แทนค่า', latex: `S = \\frac{${n} \\times ${n + 1} \\times ${2 * n + 1}}{6}`, explanation: 'แทนจำนวนพจน์' },
        { title: 'ผลลัพธ์', latex: `S = ${result}`, explanation: `ผลบวกกำลังสอง 1² ถึง ${n}² เท่ากับ ${result}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'geometric_mean',
    name: 'Geometric Mean',
    nameTh: 'ค่าเฉลี่ยเรขาคณิต',
    category: 'sequences',
    categoryTh: 'ลำดับและอนุกรม',
    icon: 'percent',
    grade: 'ม.5',
    latex: 'g = \\sqrt{ab}',
    description: 'ค่าเฉลี่ยเรขาคณิตของสองจำนวน = √(ab) เช่น √(4×9) = 6 ใช้หาพจน์กลางของลำดับเรขาคณิต',
    variables: [
      { id: 'a', symbol: 'a', name: 'Value a', nameTh: 'จำนวน a', unit: '', defaultValue: 4, min: 0.0001, max: 1e12, step: 1 },
      { id: 'b', symbol: 'b', name: 'Value b', nameTh: 'จำนวน b', unit: '', defaultValue: 9, min: 0.0001, max: 1e12, step: 1 },
      { id: 'g', symbol: 'g', name: 'Geometric Mean', nameTh: 'ค่าเฉลี่ยเรขาคณิต', unit: '', defaultValue: 6, min: 0.0001, max: 1e12, step: 1 }
    ],
    solveTargets: ['g', 'a', 'b'],
    calculate: (inputs, target = 'g') => {
      const { a, b, g } = inputs;
      let result, steps;
      if (target === 'g') {
        result = Math.sqrt(a * b);
        steps = [
          { title: 'สูตร', latex: 'g = \\sqrt{ab}', explanation: `a = ${a}, b = ${b}` },
          { title: 'แทนค่า', latex: `g = \\sqrt{${a} \\times ${b}} = \\sqrt{${a * b}}`, explanation: 'คูณแล้วเปิดราก' },
          { title: 'ผลลัพธ์', latex: `g = ${result.toFixed(4)}`, explanation: `ค่าเฉลี่ยเรขาคณิตเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (b === 0) throw new Error('b ต้องไม่เป็น 0');
        result = (g * g) / b;
        steps = [
          { title: 'จัดรูปหา a', latex: 'a = \\frac{g^2}{b}', explanation: `g = ${g}, b = ${b}` },
          { title: 'ผลลัพธ์', latex: `a = \\frac{${g}^2}{${b}} = ${result.toFixed(4)}`, explanation: `จำนวน a เท่ากับ ${result.toFixed(4)}` }
        ];
      } else {
        if (a === 0) throw new Error('a ต้องไม่เป็น 0');
        result = (g * g) / a;
        steps = [
          { title: 'จัดรูปหา b', latex: 'b = \\frac{g^2}{a}', explanation: `g = ${g}, a = ${a}` },
          { title: 'ผลลัพธ์', latex: `b = \\frac{${g}^2}{${a}} = ${result.toFixed(4)}`, explanation: `จำนวน b เท่ากับ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: '', steps };
    }
  }
];