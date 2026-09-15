/**
 * Algebra Formulas (พีชคณิต) - ม.1 - ม.6
 * อัตราส่วน ร้อยละ สัดส่วน สมการเชิงเส้น ลอการิทึม
 */

export const ALGEBRA_FORMULAS = [
  {
    id: 'percent_of',
    name: 'Percent of a Number',
    nameTh: 'หาเปอร์เซ็นต์ของจำนวน',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'percent',
    grade: 'ม.1-2',
    latex: '\\text{ผลลัพธ์} = \\frac{\\text{จำนวน} \\times p}{100}',
    description: 'หาร้อยละ p ของจำนวนที่กำหนด เช่น 20% ของ 500 = 100 (ใช้ในเรื่อง ร้อยละ กำไร ขาดทุน ภาษี)',
    variables: [
      { id: 'result', symbol: 'R', name: 'Result', nameTh: 'ผลลัพธ์ (ค่า p%)', unit: '', defaultValue: 100, min: -1e15, max: 1e15, step: 1 },
      { id: 'value', symbol: 'A', name: 'Base Value', nameTh: 'จำนวนทั้งหมด', unit: '', defaultValue: 500, min: -1e15, max: 1e15, step: 1 },
      { id: 'p', symbol: 'p\\%', name: 'Percent', nameTh: 'ร้อยละ (p)', unit: '%', defaultValue: 20, min: -1e6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['result', 'p', 'value'],
    calculate: (inputs, target = 'result') => {
      let { result, value, p } = inputs;
      let steps = [];
      let unit = '';

      if (target === 'result') {
        result = (value * p) / 100;
        steps = [
          { title: 'สูตรร้อยละ', latex: 'R = \\frac{A \\cdot p}{100}', explanation: 'จำนวนคูณด้วยร้อยละ หาร 100' },
          { title: 'แทนค่า', latex: `R = \\frac{${value} \\times ${p}}{100}`, explanation: `A = ${value}, p = ${p}%` },
          { title: 'ผลลัพธ์', latex: `R = ${result.toFixed(4)}`, explanation: `${p}% ของ ${value} เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'p') {
        if (value === 0) throw new Error('จำนวนทั้งหมด (A) ต้องไม่เป็น 0');
        p = (result * 100) / value;
        steps = [
          { title: 'จัดรูปหาค่าร้อยละ', latex: 'p = \\frac{R \\cdot 100}{A}', explanation: 'กลับข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `p = ${p.toFixed(4)}\\%`, explanation: `คิดเป็น ${p.toFixed(4)} เปอร์เซ็นต์` }
        ];
      } else if (target === 'value') {
        if (p === 0) throw new Error('ร้อยละ (p) ต้องไม่เป็น 0');
        value = (result * 100) / p;
        steps = [
          { title: 'จัดรูปหาจำนวนทั้งหมด', latex: 'A = \\frac{R \\cdot 100}{p}', explanation: 'กลับข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `A = ${value.toFixed(4)}`, explanation: `จำนวนทั้งหมดเท่ากับ ${value.toFixed(4)}` }
        ];
      }

      return { result, unit, steps };
    }
  },

  {
    id: 'percent_change',
    name: 'Percent Change',
    nameTh: 'เปอร์เซ็นต์การเปลี่ยนแปลง',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'trending-up',
    grade: 'ม.2-3',
    latex: '\\frac{New - Old}{Old} \\times 100\\%',
    description: 'การเปลี่ยนแปลงคิดเป็นร้อยละ เช่น ราคาจาก 80 เพิ่มเป็น 100 เพิ่มขึ้น 25% ใช้ในการวิเคราะห์กำไร-ขาดทุน การเติบโต',
    variables: [
      { id: 'pct', symbol: '\\Delta\\%', name: 'Percent Change', nameTh: 'เปอร์เซ็นต์การเปลี่ยนแปลง', unit: '%', defaultValue: 25, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'newVal', symbol: 'N', name: 'New Value', nameTh: 'ค่าใหม่', unit: '', defaultValue: 100, min: -1e15, max: 1e15, step: 1 },
      { id: 'oldVal', symbol: 'O', name: 'Old Value', nameTh: 'ค่าเดิม', unit: '', defaultValue: 80, min: -1e15, max: 1e15, step: 1 }
    ],
    solveTargets: ['pct', 'newVal', 'oldVal'],
    calculate: (inputs, target = 'pct') => {
      let { pct, newVal, oldVal } = inputs;
      let steps = [];

      if (target === 'pct') {
        if (oldVal === 0) throw new Error('ค่าเดิม (O) ต้องไม่เป็น 0');
        pct = ((newVal - oldVal) / oldVal) * 100;
        steps = [
          { title: 'สูตรเปอร์เซ็นต์การเปลี่ยนแปลง', latex: '\\Delta\\% = \\frac{N - O}{O} \\times 100', explanation: 'ผลต่างหารด้วยค่าเดิม คูณ 100' },
          { title: 'แทนค่า', latex: `\\Delta\\% = \\frac{${newVal} - ${oldVal}}{${oldVal}} \\times 100`, explanation: 'คำนวณผลต่างก่อน' },
          { title: 'ผลลัพธ์', latex: `\\Delta\\% = ${pct.toFixed(4)}\\%`, explanation: pct >= 0 ? `เพิ่มขึ้น ${pct.toFixed(2)}%` : `ลดลง ${Math.abs(pct).toFixed(2)}%` }
        ];
      } else if (target === 'newVal') {
        newVal = oldVal * (1 + pct / 100);
        steps = [
          { title: 'จัดรูปหาค่าใหม่', latex: 'N = O \\left(1 + \\frac{p}{100}\\right)', explanation: 'ค่าเดิมคูณด้วยตัวประกอบการเปลี่ยนแปลง' },
          { title: 'ผลลัพธ์', latex: `N = ${newVal.toFixed(4)}`, explanation: `ค่าใหม่เท่ากับ ${newVal.toFixed(4)}` }
        ];
      } else if (target === 'oldVal') {
        if (pct === -100) throw new Error('เปอร์เซ็นต์การเปลี่ยนแปลงต้องไม่เป็น -100%');
        oldVal = newVal / (1 + pct / 100);
        steps = [
          { title: 'จัดรูปหาค่าเดิม', latex: 'O = \\frac{N}{1 + \\frac{p}{100}}', explanation: 'กลับข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `O = ${oldVal.toFixed(4)}`, explanation: `ค่าเดิมเท่ากับ ${oldVal.toFixed(4)}` }
        ];
      }

      return { result: target === 'pct' ? pct : target === 'newVal' ? newVal : oldVal, unit: target === 'pct' ? '%' : '', steps };
    }
  },

  {
    id: 'proportion',
    name: 'Proportion (Cross Multiplication)',
    nameTh: 'สัดส่วน (ไขว้คูณ)',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'divide',
    grade: 'ม.1-2',
    latex: '\\frac{a}{b} = \\frac{c}{d} \\quad \\Rightarrow \\quad a \\cdot d = b \\cdot c',
    description: 'เมื่ออัตราส่วนเท่ากัน ผลคูณไขว้เท่ากัน ใช้แก้สัดส่วน เช่น อัตราส่วนการผสม การย่อ-ขยาย',
    variables: [
      { id: 'a', symbol: 'a', name: 'Numerator 1', nameTh: 'ตัวเศษ 1 (a)', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Denominator 1', nameTh: 'ตัวส่วน 1 (b)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Numerator 2', nameTh: 'ตัวเศษ 2 (c)', unit: '', defaultValue: 8, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'd', symbol: 'd', name: 'Denominator 2', nameTh: 'ตัวส่วน 2 (d)', unit: '', defaultValue: 12, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['a', 'b', 'c', 'd'],
    calculate: (inputs, target = 'a') => {
      let { a, b, c, d } = inputs;
      let steps = [];
      const cross = [
        { t: 'a', expr: (b * c) / d, need: ['b', 'c', 'd'], guard: () => d === 0 ? 'ตัวส่วน d ต้องไม่เป็น 0' : null },
        { t: 'b', expr: (a * d) / c, need: ['a', 'c', 'd'], guard: () => c === 0 ? 'ตัวส่วน c ต้องไม่เป็น 0' : null },
        { t: 'c', expr: (a * d) / b, need: ['a', 'b', 'd'], guard: () => b === 0 ? 'ตัวส่วน b ต้องไม่เป็น 0' : null },
        { t: 'd', expr: (b * c) / a, need: ['a', 'b', 'c'], guard: () => a === 0 ? 'ตัวเศษ a ต้องไม่เป็น 0' : null }
      ];
      const row = cross.find(r => r.t === target);
      if (!row) throw new Error('ตัวแปรเป้าหมายไม่ถูกต้อง');
      const err = row.guard();
      if (err) throw new Error(err);
      const result = row.expr;
      steps = [
        { title: 'หลักการไขว้คูณ', latex: 'a \\cdot d = b \\cdot c', explanation: 'ผลคูณไขว้ของสัดส่วนเท่ากันเสมอ' },
        { title: 'จัดรูปหาค่า ' + target, latex: `${target} = ${cross.filter(r => r.t !== target).map(r => r.t).join(' , ')}`, explanation: 'ย้ายตัวประกอบที่เหลือไปอีกข้างหนึ่ง' },
        { title: 'แทนค่าและคำนวณ', latex: `${target} = ${result.toFixed(4)}`, explanation: `ค่าของ ${target} เท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'linear_equation',
    name: 'Linear Equation (ax + b = c)',
    nameTh: 'สมการเชิงเส้นตัวแปรเดียว',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'minus',
    grade: 'ม.1-2',
    latex: 'a x + b = c \\quad \\Rightarrow \\quad x = \\frac{c - b}{a}',
    description: 'การแก้สมการเชิงเส้นตัวแปรเดียว ใช้ย้ายข้างสมการเพื่อหาค่า x เช่น 2x + 3 = 15 แล้ว x = 6',
    variables: [
      { id: 'x', symbol: 'x', name: 'Solution x', nameTh: 'คำตอบ (x)', unit: '', defaultValue: 6, min: -1e9, max: 1e9, step: 0.01 },
      { id: 'a', symbol: 'a', name: 'Coefficient a', nameTh: 'สัมประสิทธิ์ (a)', unit: '', defaultValue: 2, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Constant b', nameTh: 'ค่าคงที่ (b)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Right Side c', nameTh: 'ฝั่งขวา (c)', unit: '', defaultValue: 15, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['x', 'a', 'b'],
    calculate: (inputs, target = 'x') => {
      let { x, a, b, c } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'x') {
        if (a === 0) throw new Error('สัมประสิทธิ์ (a) ต้องไม่เป็น 0');
        result = (c - b) / a;
        steps = [
          { title: 'ย้าย b ไปฝั่งขวา', latex: `a x = ${c} - (${b}) = ${(c - b).toFixed(4)}`, explanation: 'ค่าคงที่ย้ายข้างเปลี่ยนเครื่องหมาย' },
          { title: 'หารด้วย a', latex: `x = \\frac{${(c - b).toFixed(4)}}{${a}}`, explanation: 'นำสัมประสิทธิ์ a ไปหาร' },
          { title: 'ผลลัพธ์', latex: `x = ${result.toFixed(4)}`, explanation: `คำตอบของสมการคือ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (x === 0) throw new Error('ค่า x ต้องไม่เป็น 0');
        result = (c - b) / x;
        steps = [
          { title: 'จัดรูปหาค่า a', latex: 'a = \\frac{c - b}{x}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `a = ${result.toFixed(4)}`, explanation: `สัมประสิทธิ์ a เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'b') {
        result = c - a * x;
        steps = [
          { title: 'จัดรูปหาค่า b', latex: 'b = c - a \\cdot x', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `b = ${result.toFixed(4)}`, explanation: `ค่าคงที่ b เท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'logarithm',
    name: 'Logarithm (log_b x = y)',
    nameTh: 'ลอการิทึม (log_b x = y)',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'log-in',
    grade: 'ม.4-5',
    latex: '\\log_b(x) = y \\quad \\Leftrightarrow \\quad b^y = x',
    description: 'ลอการิทึมคือเลขชี้กำลัง เช่น log₂8 = 3 เพราะ 2³ = 8 เขียน log ฐาน 10 = log(x) และฐาน e = ln(x)',
    variables: [
      { id: 'y', symbol: 'y', name: 'Logarithm Value', nameTh: 'ค่าลอการิทึม (y)', unit: '', defaultValue: 3, min: -1e6, max: 1e6, step: 0.01 },
      { id: 'b', symbol: 'b', name: 'Base', nameTh: 'ฐาน (b)', unit: '', defaultValue: 2, min: 0.0000001, max: 1e6, step: 0.1 },
      { id: 'x', symbol: 'x', name: 'Argument', nameTh: 'จำนวน (x)', unit: '', defaultValue: 8, min: 1e-15, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['y', 'x', 'b'],
    calculate: (inputs, target = 'y') => {
      let { y, b, x } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'y') {
        if (x <= 0 || b <= 0 || b === 1) throw new Error('ต้องมี x > 0, b > 0 และ b ≠ 1');
        result = Math.log(x) / Math.log(b);
        steps = [
          { title: 'สูตรลอการิทึม', latex: 'y = \\log_b(x)', explanation: `log ฐาน ${b} ของ ${x}` },
          { title: 'แทนค่าและคำนวณ', latex: `y = \\frac{\\ln(${x})}{\\ln(${b})} = ${result.toFixed(4)}`, explanation: 'ใช้การเปลี่ยนฐานลอการิทึม (หรือจำลองเป็น log ฐานสิบ/ฐานธรรมชาติ)' }
        ];
      } else if (target === 'x') {
        result = Math.pow(b, y);
        steps = [
          { title: 'แปลงเป็นเลขยกกำลัง', latex: `x = b^y = ${b}^{${y}}`, explanation: 'ลอการิทึมคือเลขชี้กำลัง' },
          { title: 'ผลลัพธ์', latex: `x = ${result.toFixed(4)}`, explanation: `จำนวน x เท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'b') {
        if (y === 0) throw new Error('ค่า y ต้องไม่เป็น 0');
        result = Math.pow(x, 1 / y);
        steps = [
          { title: 'จัดรูปหาฐาน', latex: `b = x^{1/y}`, explanation: 'ถอดรากอันดับ y' },
          { title: 'ผลลัพธ์', latex: `b = ${result.toFixed(4)}`, explanation: `ฐาน b เท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'quadratic_formula',
    name: 'Quadratic Formula',
    nameTh: 'สูตรสมการกำลังสอง',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'function',
    grade: 'ม.4',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description: 'หารากของสมการ ax² + bx + c = 0 พร้อมค่า discriminant b² − 4ac บอกจำนวนรากแท้จริง',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient a', nameTh: 'สัมประสิทธิ์ a', unit: '', defaultValue: 2, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Coefficient b', nameTh: 'สัมประสิทธิ์ b', unit: '', defaultValue: 5, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Constant c', nameTh: 'ค่าคงที่ c', unit: '', defaultValue: -3, min: -1e6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['x', 'D'],
    calculate: (inputs, target = 'x') => {
      const { a, b, c } = inputs;
      if (a === 0) throw new Error('a ต้องไม่เป็น 0 (ไม่ใช่สมการกำลังสอง)');
      const Dv = b * b - 4 * a * c;

      if (target === 'D') {
        return {
          result: Dv,
          unit: '',
          steps: [
            { title: 'คำนวณ discriminant', latex: `\\Delta = b^2 - 4ac = ${b}^2 - 4 \\times ${a} \\times ${c}`, explanation: `แทนค่า a = ${a}, b = ${b}, c = ${c}` },
            { title: 'ผลลัพธ์', latex: `\\Delta = ${Dv}`, explanation: Dv > 0 ? 'รากแท้จริง 2 ค่าต่างกัน' : Dv === 0 ? 'รากจริงซ้ำ 1 ค่า' : 'ไม่มีรากแท้จริง' }
          ]
        };
      }

      if (Dv < 0) throw new Error('discriminant ติดลบ → สมการนี้ไม่มีรากแท้จริง');
      const sq = Math.sqrt(Dv);
      const r1 = (-b + sq) / (2 * a);
      const r2 = (-b - sq) / (2 * a);
      return {
        result: r1,
        unit: '',
        steps: [
          { title: 'สูตรราก', latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', explanation: `a = ${a}, b = ${b}, c = ${c}` },
          { title: 'คำนวณ discriminant', latex: `\\Delta = b^2 - 4ac = ${b}^2 - 4 \\times ${a} \\times ${c} = ${Dv}`, explanation: Dv > 0 ? 'รากแท้จริง 2 ค่า' : 'รากซ้ำ 1 ค่า' },
          { title: 'แทนค่า', latex: `x = \\frac{-(${b}) \\pm \\sqrt{${Dv}}}{2 \\times ${a}}`, explanation: 'แทนค่าลงในสูตร' },
          { title: 'ผลลัพธ์', latex: `x = ${r1.toFixed(4)} \\ \\text{หรือ} \\ x = ${r2.toFixed(4)}`, explanation: `รากทั้งสองคือ ${r1.toFixed(4)} และ ${r2.toFixed(4)}` }
        ]
      };
    }
  },

  {
    id: 'exponent_value',
    name: 'Exponent Value',
    nameTh: 'หาค่าเลขชี้กำลัง',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'power',
    grade: 'ม.3',
    latex: 'b^n = v',
    description: 'หาค่า n ที่ทำให้ bⁿ = v เช่น 3ⁿ = 27 ได้ n = 3 (สำหรับค่าลงตัวพอดีเท่านั้น)',
    variables: [
      { id: 'b', symbol: 'b', name: 'Base', nameTh: 'ฐาน', unit: '', defaultValue: 3, min: 1.0000001, max: 1e6, step: 0.1 },
      { id: 'v', symbol: 'v', name: 'Value', nameTh: 'ค่า v', unit: '', defaultValue: 27, min: 1e-12, max: 1e24, step: 1 }
    ],
    solveTargets: ['n'],
    calculate: (inputs) => {
      const { b, v } = inputs;
      if (b <= 0) throw new Error('ฐาน b ต้องมากกว่า 0');
      if (v <= 0) throw new Error('ค่า v ต้องมากกว่า 0');
      const exact = Math.log(v) / Math.log(b);
      const n = Math.round(exact);
      if (Math.abs(n - exact) > 1e-9) throw new Error('ค่า v ไม่ใช่เลขยกกำลังพอดีของฐานนี้ (ผลลัพธ์ไม่ลงตัว)');
      const result = n;
      return {
        result,
        unit: '',
        steps: [
          { title: 'สมการ', latex: `${b}^{n} = ${v}`, explanation: 'ต้องการหาเลขชี้กำลัง n' },
          { title: 'ใช้ log แก้สมการ', latex: `n = \\frac{\\log ${v}}{\\log ${b}} = ${exact.toFixed(6)}`, explanation: 'เปลี่ยนเป็น log เพื่อแยก n ออกมา' },
          { title: 'ผลลัพธ์', latex: `${b}^{${n}} = ${Math.pow(b, n).toFixed(4)}`, explanation: `เลขชี้กำลัง n เท่ากับ ${n}` }
        ]
      };
    }
  }
];