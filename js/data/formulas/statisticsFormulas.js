/**
 * Statistics & Probability Formulas (สถิติและความน่าจะเป็น) - ม.3 - ม.6
 */

export const STATISTICS_FORMULAS = [
  {
    id: 'mean',
    name: 'Mean (Average)',
    nameTh: 'ค่าเฉลี่ยเลขคณิต',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'hash',
    grade: 'ม.3-5',
    latex: '\\bar{x} = \\frac{\\sum x_i}{n}',
    description: 'ค่าเฉลี่ย = ผลรวมของข้อมูลหารด้วยจำนวนข้อมูล ใช้กับข้อมูลทั้งหมดแบบเชิงปริมาณ',
    variables: [
      { id: 'mean', symbol: '\\bar{x}', name: 'Mean', nameTh: 'ค่าเฉลี่ย', unit: '', defaultValue: 12, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'sum', symbol: '\\sum x_i', name: 'Sum of Data', nameTh: 'ผลรวมข้อมูล', unit: '', defaultValue: 120, min: -1e18, max: 1e18, step: 1 },
      { id: 'n', symbol: 'n', name: 'Count', nameTh: 'จำนวนข้อมูล', unit: 'ชิ้น', defaultValue: 10, min: 1, max: 10000000, step: 1 }
    ],
    solveTargets: ['mean', 'sum', 'n'],
    calculate: (inputs, target = 'mean') => {
      let { mean, sum, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'mean') {
        result = sum / n;
        steps = [
          { title: 'สูตรค่าเฉลี่ย', latex: '\\bar{x} = \\frac{\\sum x_i}{n}', explanation: 'ผลรวมหารจำนวนข้อมูล' },
          { title: 'แทนค่า', latex: `\\bar{x} = \\frac{${sum}}{${n}}`, explanation: `ผลรวม = ${sum}, จำนวน = ${n}` },
          { title: 'ผลลัพธ์', latex: `\\bar{x} = ${result.toFixed(4)}`, explanation: `ค่าเฉลี่ยเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'sum') {
        result = mean * n;
        steps = [
          { title: 'จัดรูปหาผลรวม', latex: '\\sum x_i = \\bar{x} \\cdot n', explanation: 'ค่าเฉลี่ยคูณจำนวนข้อมูล' },
          { title: 'ผลลัพธ์', latex: `\\sum x_i = ${result.toFixed(4)}`, explanation: `ผลรวมข้อมูลเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (mean === 0) throw new Error('ค่าเฉลี่ย (mean) ต้องไม่เป็น 0');
        result = sum / mean;
        steps = [
          { title: 'จัดรูปหาจำนวนข้อมูล', latex: 'n = \\frac{\\sum x_i}{\\bar{x}}', explanation: 'ผลรวมหารค่าเฉลี่ย' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)}`, explanation: `จำนวนข้อมูลเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'standard_deviation',
    name: 'Standard Deviation',
    nameTh: 'ส่วนเบี่ยงเบนมาตรฐาน',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'activity',
    grade: 'ม.4-6',
    latex: '\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}',
    description: 'วัดการกระจายของข้อมูลรอบค่าเฉลี่ย หารากที่สองของความแปรปรวน ถ้าข้อมูลกระจายมาก σ จะมาก',
    variables: [
      { id: 'sd', symbol: '\\sigma', name: 'Standard Deviation', nameTh: 'ส่วนเบี่ยงเบนมาตรฐาน', unit: '', defaultValue: 2.915, min: 0, max: 1e15, step: 0.01 },
      { id: 'sumSqDev', symbol: '\\sum (x_i-\\bar{x})^2', name: 'Sum of Squared Deviations', nameTh: 'ผลรวมกำลังสองของความเบี่ยงเบน', unit: '', defaultValue: 85, min: 0, max: 1e18, step: 1 },
      { id: 'n', symbol: 'n', name: 'Count', nameTh: 'จำนวนข้อมูล', unit: 'ชิ้น', defaultValue: 10, min: 1, max: 10000000, step: 1 }
    ],
    solveTargets: ['sd', 'sumSqDev', 'n'],
    calculate: (inputs, target = 'sd') => {
      let { sd, sumSqDev, n } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'sd') {
        if (n === 0) throw new Error('จำนวนข้อมูลต้องมากกว่า 0');
        result = Math.sqrt(sumSqDev / n);
        steps = [
          { title: 'สูตรส่วนเบี่ยงเบนมาตรฐาน', latex: '\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}', explanation: 'รากที่สองของความแปรปรวน' },
          { title: 'แทนค่า', latex: `\\sigma = \\sqrt{\\frac{${sumSqDev}}{${n}}}`, explanation: `ผลรวมกำลังสองความเบี่ยงเบน = ${sumSqDev}, n = ${n}` },
          { title: 'ผลลัพธ์', latex: `\\sigma = ${result.toFixed(4)}`, explanation: `ส่วนเบี่ยงเบนมาตรฐานเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'sumSqDev') {
        result = sd * sd * n;
        steps = [
          { title: 'จัดรูปหาผลรวมกำลังสอง', latex: '\\sum (x_i - \\bar{x})^2 = \\sigma^2 \\cdot n', explanation: 'σ² (ความแปรปรวน) คูณจำนวนข้อมูล' },
          { title: 'ผลลัพธ์', latex: `\\sum (x_i - \\bar{x})^2 = ${result.toFixed(4)}`, explanation: `ผลรวมเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n') {
        if (sd === 0) throw new Error('ค่า σ ต้องไม่เป็น 0');
        result = sumSqDev / (sd * sd);
        steps = [
          { title: 'จัดรูปหาจำนวนข้อมูล', latex: 'n = \\frac{\\sum (x_i - \\bar{x})^2}{\\sigma^2}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)}`, explanation: `จำนวนข้อมูลเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'z_score',
    name: 'Z-Score (Standard Score)',
    nameTh: 'คะแนนมาตรฐาน Z (Z-Score)',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'target',
    grade: 'ม.5-6',
    latex: 'z = \\frac{x - \\bar{x}}{\\sigma}',
    description: 'บอกว่าข้อมูลอยู่ห่างจากค่าเฉลี่ยกี่เท่าของส่วนเบี่ยงเบนมาตรฐาน เป็นลบเมื่อต่ำกว่าค่าเฉลี่ย',
    variables: [
      { id: 'z', symbol: 'z', name: 'Z-Score', nameTh: 'ค่า Z', unit: '', defaultValue: 1.372, min: -10, max: 10, step: 0.01 },
      { id: 'x', symbol: 'x', name: 'Raw Score', nameTh: 'คะแนนดิบ (x)', unit: '', defaultValue: 85, min: -1e15, max: 1e15, step: 1 },
      { id: 'mu', symbol: '\\bar{x}', name: 'Mean', nameTh: 'ค่าเฉลี่ย', unit: '', defaultValue: 70, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'sigma', symbol: '\\sigma', name: 'Std Deviation', nameTh: 'ส่วนเบี่ยงเบนมาตรฐาน', unit: '', defaultValue: 5, min: 0.0001, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['z', 'x', 'sigma'],
    calculate: (inputs, target = 'z') => {
      let { z, x, mu, sigma } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'z') {
        result = (x - mu) / sigma;
        steps = [
          { title: 'สูตร Z-Score', latex: 'z = \\frac{x - \\bar{x}}{\\sigma}', explanation: 'ผลต่างคะแนนจากค่าเฉลี่ยหาร σ' },
          { title: 'แทนค่า', latex: `z = \\frac{${x} - ${mu}}{${sigma}}`, explanation: `x = ${x}, ค่าเฉลี่ย = ${mu}, σ = ${sigma}` },
          { title: 'ผลลัพธ์', latex: `z = ${result.toFixed(4)}`, explanation: result >= 0 ? `สูงกว่าค่าเฉลี่ย ${result.toFixed(2)} เท่าของ σ` : `ต่ำกว่าค่าเฉลี่ย ${Math.abs(result).toFixed(2)} เท่าของ σ` }
        ];
      } else if (target === 'x') {
        result = mu + z * sigma;
        steps = [
          { title: 'จัดรูปหาคะแนนดิบ', latex: 'x = \\bar{x} + z \\cdot \\sigma', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `x = ${result.toFixed(4)}`, explanation: `คะแนนดิบเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'sigma') {
        if (z === 0) throw new Error('ค่า z ต้องไม่เป็น 0');
        result = (x - mu) / z;
        steps = [
          { title: 'จัดรูปหาส่วนเบี่ยงเบน', latex: '\\sigma = \\frac{x - \\bar{x}}{z}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `\\sigma = ${result.toFixed(4)}`, explanation: `ส่วนเบี่ยงเบนมาตรฐานเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'permutation',
    name: 'Permutation (nPr)',
    nameTh: 'การเรียงสับเปลี่ยน (nPr)',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'list-ordered',
    grade: 'ม.5',
    latex: '{}_n P_r = \\frac{n!}{(n-r)!}',
    description: 'จำนวนวิธีเรียงสิ่งของ r สิ่งจากทั้งหมด n สิ่ง โดยคำนึงถึงลำดับ เช่น nPr ใช้ในเรื่องจำนวนวิธีจัดเรียง',
    variables: [
      { id: 'n', symbol: 'n', name: 'Total Items', nameTh: 'ของทั้งหมด (n)', unit: 'ชิ้น', defaultValue: 10, min: 1, max: 170, step: 1 },
      { id: 'r', symbol: 'r', name: 'Arranged Items', nameTh: 'เลือกมาเรียง (r)', unit: 'ชิ้น', defaultValue: 3, min: 0, max: 170, step: 1 },
      { id: 'result', symbol: '{}_n P_r', name: 'Permutations', nameTh: 'จำนวนวิธี', unit: 'วิธี', defaultValue: 720, min: 1, max: 1e308, step: 1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n, r } = inputs;
      if (!Number.isInteger(n) || !Number.isInteger(r)) throw new Error('n และ r ต้องเป็นจำนวนเต็ม');
      if (r > n) throw new Error('r ต้องไม่เกิน n');
      if (n > 170) throw new Error('n มากเกินไป (สูงสุด 170)');

      const fact = (k) => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; };
      const result = fact(n) / fact(n - r);
      const steps = [
        { title: 'สูตรการเรียงสับเปลี่ยน', latex: '{}_n P_r = \\frac{n!}{(n-r)!}', explanation: `n = ${n}, r = ${r}` },
        { title: 'แทนค่า', latex: `{}_n P_r = \\frac{${n}!}{(${n} - ${r})!} = \\frac{${fact(n)}}{${fact(n - r)}}`, explanation: 'คำนวณแฟกทอเรียล' },
        { title: 'ผลลัพธ์', latex: `{}_n P_r = ${result}`, explanation: `มีทั้งหมด ${result} วิธี` }
      ];
      return { result, unit: 'วิธี', steps };
    }
  },

  {
    id: 'combination',
    name: 'Combination (nCr)',
    nameTh: 'การจัดหมู่ (nCr)',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'list-ordered',
    grade: 'ม.5',
    latex: '{}_n C_r = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}',
    description: 'จำนวนวิธีเลือกของ r สิ่งจากทั้งหมด n สิ่ง โดยไม่คำนึงถึงลำดับ เช่น เลือกกรรมการ เลือกเสื้อ',
    variables: [
      { id: 'n', symbol: 'n', name: 'Total Items', nameTh: 'ของทั้งหมด (n)', unit: 'ชิ้น', defaultValue: 10, min: 1, max: 170, step: 1 },
      { id: 'r', symbol: 'r', name: 'Chosen Items', nameTh: 'เลือกมา (r)', unit: 'ชิ้น', defaultValue: 3, min: 0, max: 170, step: 1 },
      { id: 'result', symbol: '{}_n C_r', name: 'Combinations', nameTh: 'จำนวนวิธี', unit: 'วิธี', defaultValue: 120, min: 1, max: 1e308, step: 1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n, r } = inputs;
      if (!Number.isInteger(n) || !Number.isInteger(r)) throw new Error('n และ r ต้องเป็นจำนวนเต็ม');
      if (r > n) throw new Error('r ต้องไม่เกิน n');
      if (n > 170) throw new Error('n มากเกินไป (สูงสุด 170)');

      const fact = (k) => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; };
      const result = fact(n) / (fact(r) * fact(n - r));
      const steps = [
        { title: 'สูตรการจัดหมู่', latex: '{}_n C_r = \\frac{n!}{r!(n-r)!}', explanation: `n = ${n}, r = ${r}` },
        { title: 'แทนค่า', latex: `{}_n C_r = \\frac{${n}!}{${r}!(${n} - ${r})!}`, explanation: 'คำนวณแฟกทอเรียล' },
        { title: 'ผลลัพธ์', latex: `{}_n C_r = ${result}`, explanation: `มีทั้งหมด ${result} วิธี` }
      ];
      return { result, unit: 'วิธี', steps };
    }
  },

  {
    id: 'probability',
    name: 'Simple Probability',
    nameTh: 'ความน่าจะเป็น (P = ผลที่สนใจ/ผลทั้งหมด)',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'percent',
    grade: 'ม.3-5',
    latex: 'P(E) = \\frac{n(E)}{n(S)}',
    description: 'ความน่าจะเป็นของเหตุการณ์ = จำนวนผลลัพธ์ที่ต้องการหารด้วยจำนวนผลลัพธ์ทั้งหมด (ค่าอยู่ระหว่าง 0 ถึง 1)',
    variables: [
      { id: 'P', symbol: 'P(E)', name: 'Probability', nameTh: 'ความน่าจะเป็น', unit: '', defaultValue: 0.5, min: 0, max: 1, step: 0.01 },
      { id: 'favor', symbol: 'n(E)', name: 'Favorable Outcomes', nameTh: 'ผลลัพธ์ที่ต้องการ', unit: 'กรณี', defaultValue: 3, min: 0, max: 1e15, step: 1 },
      { id: 'total', symbol: 'n(S)', name: 'Total Outcomes', nameTh: 'ผลลัพธ์ทั้งหมด', unit: 'กรณี', defaultValue: 6, min: 1, max: 1e15, step: 1 }
    ],
    solveTargets: ['P', 'favor', 'total'],
    calculate: (inputs, target = 'P') => {
      let { P, favor, total } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = favor / total;
        steps = [
          { title: 'สูตรความน่าจะเป็น', latex: 'P(E) = \\frac{n(E)}{n(S)}', explanation: 'ผลลัพธ์ที่ต้องการหารผลลัพธ์ทั้งหมด' },
          { title: 'แทนค่า', latex: `P(E) = \\frac{${favor}}{${total}}`, explanation: `n(E) = ${favor}, n(S) = ${total}` },
          { title: 'ผลลัพธ์', latex: `P(E) = ${result.toFixed(4)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `ความน่าจะเป็นเท่ากับ ${(result * 100).toFixed(2)}%` }
        ];
      } else if (target === 'favor') {
        result = P * total;
        steps = [
          { title: 'จัดรูปหาผลลัพธ์ที่ต้องการ', latex: 'n(E) = P \\cdot n(S)', explanation: 'ความน่าจะเป็นคูณผลลัพธ์ทั้งหมด' },
          { title: 'ผลลัพธ์', latex: `n(E) = ${result.toFixed(4)}`, explanation: `มี ${result.toFixed(4)} กรณีที่ตรงเงื่อนไข` }
        ];
      } else if (target === 'total') {
        if (P === 0) throw new Error('ความน่าจะเป็นต้องไม่เป็น 0');
        result = favor / P;
        steps = [
          { title: 'จัดรูปหาผลลัพธ์ทั้งหมด', latex: 'n(S) = \\frac{n(E)}{P}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `n(S) = ${result.toFixed(4)}`, explanation: `มีทั้งหมด ${result.toFixed(4)} กรณี` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'chi_square',
    name: 'Chi-Square (single cell)',
    nameTh: 'ไคสแควร์ (χ² = Σ(O−E)²/E)',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'sigma',
    grade: 'ม.6',
    latex: '\\chi^2 = \\sum \\frac{(O - E)^2}{E}',
    description: 'ตรวจสอบความแตกต่างระหว่างค่าที่สังเกต (O) และค่าคาดหวัง (E) ใช้ในชีววิทยา (ทดสอบผลทางพันธุกรรม) และสถิติ',
    variables: [
      { id: 'chi2', symbol: '\\chi^2', name: 'Chi-Square', nameTh: 'ค่าไคสแควร์', unit: '', defaultValue: 0.5, min: 0, max: 1e9, step: 0.01 },
      { id: 'observed', symbol: 'O', name: 'Observed Value', nameTh: 'ค่าที่สังเกต (O)', unit: '', defaultValue: 60, min: 0, max: 1e15, step: 1 },
      { id: 'expected', symbol: 'E', name: 'Expected Value', nameTh: 'ค่าคาดหวัง (E)', unit: '', defaultValue: 55, min: 0.0000001, max: 1e15, step: 1 }
    ],
    solveTargets: ['chi2', 'observed', 'expected'],
    calculate: (inputs, target = 'chi2') => {
      let { chi2, observed, expected } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'chi2') {
        result = Math.pow(observed - expected, 2) / expected;
        steps = [
          { title: 'สูตรไคสแควร์', latex: '\\chi^2 = \\frac{(O - E)^2}{E}', explanation: 'ผลต่างกำลังสองหารค่าคาดหวัง (รวมทุกคลาสข้อมูล)' },
          { title: 'แทนค่า', latex: `\\chi^2 = \\frac{(${observed} - ${expected})^2}{${expected}}`, explanation: `O = ${observed}, E = ${expected}` },
          { title: 'ผลลัพธ์', latex: `\\chi^2 = ${result.toFixed(4)}`, explanation: `ค่าไคสแควร์ของข้อมูลนี้เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'observed') {
        result = expected + Math.sqrt(chi2 * expected);
        steps = [
          { title: 'จัดรูปหาค่า O', latex: 'O = E \\pm \\sqrt{\\chi^2 \\cdot E}', explanation: 'ถอดรากทั้งสองข้าง (เลือกเครื่องหมายตามข้อมูล)' },
          { title: 'ผลลัพธ์', latex: `O = ${result.toFixed(4)}`, explanation: `ค่าที่สังเกตเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'expected') {
        if (chi2 === 1) throw new Error('χ² = 1 ทำให้สมการมีผลเฉลยพิเศษ ไม่สามารถหา E ได้ตรงๆ');
        const a = chi2;
        const b = -2 * observed - chi2;
        const c = observed * observed;
        const nom1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        const nom2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        result = nom2 > 0 ? nom2 : nom1;
        if (result <= 0) throw new Error('ไม่พบค่า E ที่เป็นบวก');
        steps = [
          { title: 'แก้สมการหาค่า E', latex: '\\chi^2 E = (O - E)^2', explanation: 'กระจายและจัดรูปเป็นสมการกำลังสองของ E' },
          { title: 'ผลลัพธ์', latex: `E = ${result.toFixed(4)}`, explanation: `ค่าคาดหวังเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'binomial_probability',
    name: 'Binomial Probability',
    nameTh: 'ความน่าจะเป็นแบบทวินาม',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'percent',
    grade: 'ม.5-6',
    latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}',
    description: 'ความน่าจะเป็นที่จะเกิดความสำเร็จ k ครั้งจากการทดลอง n ครั้ง แต่ละครั้งมีโอกาสสำเร็จ p (เช่น ทอยเหรียญ)',
    variables: [
      { id: 'n', symbol: 'n', name: 'Number of Trials', nameTh: 'จำนวนการทดลอง (n)', unit: 'ครั้ง', defaultValue: 10, min: 1, max: 170, step: 1 },
      { id: 'k', symbol: 'k', name: 'Successes', nameTh: 'จำนวนครั้งที่สำเร็จ (k)', unit: 'ครั้ง', defaultValue: 6, min: 0, max: 170, step: 1 },
      { id: 'p', symbol: 'p', name: 'Success Probability', nameTh: 'โอกาสสำเร็จต่อครั้ง (p)', unit: '', defaultValue: 0.5, min: 0.0000001, max: 0.9999999, step: 0.01 },
      { id: 'result', symbol: 'P', name: 'Probability', nameTh: 'ความน่าจะเป็น', unit: '', defaultValue: 0.2051, min: 0, max: 1, step: 0.0001 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { n, k, p } = inputs;
      if (!Number.isInteger(n) || !Number.isInteger(k)) throw new Error('n และ k ต้องเป็นจำนวนเต็ม');
      if (k > n) throw new Error('k ต้องไม่เกิน n');
      if (n > 170) throw new Error('n มากเกินไป (สูงสุด 170)');

      const fact = (v) => { let f = 1; for (let i = 2; i <= v; i++) f *= i; return f; };
      const comb = fact(n) / (fact(k) * fact(n - k));
      const result = comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
      const steps = [
        { title: 'สูตรทวินาม', latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}', explanation: `n = ${n}, k = ${k}, p = ${p}` },
        { title: 'คำนวณค่าจัดหมู่', latex: `\\binom{${n}}{${k}} = ${comb}`, explanation: 'จำนวนวิธีเลือก k ครั้งจาก n ครั้ง' },
        { title: 'แทนค่า', latex: `P = ${comb} \\times ${p}^${k} \\times (1 - ${p})^{${n - k}}`, explanation: 'คูณโอกาสสำเร็จและล้มเหลว' },
        { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(6)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `ความน่าจะเป็นเท่ากับ ${(result * 100).toFixed(2)}%` }
      ];
      return { result, resultDisplay: `${(result * 100).toFixed(2)}%`, unit: '', steps };
    }
  }
];