// @ts-nocheck

/**
 * Calculus & Advanced Math Formulas (แคลคูลัส + เวกเตอร์/เมทริกซ์/จำนวนเชิงซ้อน) - ม.4 - ม.6
 */

export const CALCULUS_FORMULAS = [
  {
    id: 'power_derivative',
    name: 'Power Rule (Derivative)',
    nameTh: 'อนุพันธ์ของฟังก์ชันยกกำลัง',
    category: 'calculus',
    categoryTh: 'แคลคูลัส',
    icon: 'trending-up',
    grade: 'ม.6',
    latex: '\\frac{d}{dx} a x^n = a \\cdot n \\cdot x^{n-1}',
    description: 'อนุพันธ์ของ axⁿ = (a·n)·xⁿ⁻¹ เช่น d/dx ของ 3x² คือ 6x เมื่อใส่ค่า x จะได้ความชันของเส้นสัมผัส ณ จุดนั้น',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient', nameTh: 'สัมประสิทธิ์ (a)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Exponent', nameTh: 'เลขชี้กำลัง (n)', unit: '', defaultValue: 2, min: -100, max: 100, step: 1 },
      { id: 'x0', symbol: 'x', name: 'Evaluate At x', nameTh: 'ค่า x ที่ต้องการ', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, n, x0 } = inputs;
      const diffCoef = a * n;
      const diffExp = n - 1;
      const result = diffCoef * Math.pow(x0, diffExp);
      const steps = [
        { title: 'กฎยกกำลัง', latex: `\\frac{d}{dx} (${a}x^{${n}}) = (${a} \\cdot ${n}) x^{${n - 1}}`, explanation: 'ดึงเลขชี้กำลังลงมาคูณ และลดเลขชี้กำลังลง 1' },
        { title: 'ฟังก์ชันอนุพันธ์', latex: `f'(x) = ${diffCoef} x^{${diffExp}}`, explanation: `อนุพันธ์ของฟังก์ชันคือ ${diffCoef}x^${diffExp}` },
        { title: 'แทนค่า x', latex: `f'(${x0}) = ${diffCoef} \\times ${x0}^${diffExp} = ${result.toFixed(4)}`, explanation: `ความชันของกราฟที่ x = ${x0} เท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, resultDisplay: `f'(${x0}) = ${result.toFixed(4)}`, unit: '', steps };
    }
  },

  {
    id: 'power_integral',
    name: 'Power Rule (Integral)',
    nameTh: 'ปริพันธ์ของฟังก์ชันยกกำลัง',
    category: 'calculus',
    categoryTh: 'แคลคูลัส',
    icon: 'sigma',
    grade: 'ม.6',
    latex: '\\int a x^n \\, dx = \\frac{a}{n+1} x^{n+1} + C',
    description: 'อินทิกรัลของ axⁿ (n ≠ -1) = (a/(n+1))·xⁿ⁺¹ + C เช่น ∫3x² dx = x³ + C ใช้หาพื้นที่ใต้กราฟ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient', nameTh: 'สัมประสิทธิ์ (a)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Exponent', nameTh: 'เลขชี้กำลัง (n)', unit: '', defaultValue: 2, min: -100, max: 100, step: 1 },
      { id: 'from', symbol: 'b', name: 'Lower Bound', nameTh: 'ขอบล่าง (a)', unit: '', defaultValue: 0, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'to', symbol: 'a', name: 'Upper Bound', nameTh: 'ขอบบน (b)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, n, from, to } = inputs;
      if (n === -1) throw new Error('n = -1 จะได้ชุดรูปแบบ ∫ a·x⁻¹ dx = a·ln|x| + C (ใส่ขอบเขตเพื่อหาพื้นที่)');
      const coef = a / (n + 1);
      const exp = n + 1;
      const F = (x) => coef * Math.pow(x, exp);
      const result = F(to) - F(from);
      const steps = [
        { title: 'สูตรปริพันธ์', latex: `\\int ${a}x^{${n}} \\, dx = \\frac{${a}}{${n + 1}} x^{${n + 1}} + C`, explanation: 'บวกเลขชี้กำลัง 1 แล้วหารด้วยเลขชี้กำลังใหม่' },
        { title: 'ฟังก์ชันปริพันธ์', latex: `F(x) = ${coef} x^{${exp}}`, explanation: 'อินทิกรัลไม่จำกัดเขตของฟังก์ชัน' },
        { title: 'หาพื้นที่ในช่วง', latex: `\\int_${from}^{${to}} ${a}x^{${n}} dx = F(${to}) - F(${from}) = ${F(to).toFixed(4)} - ${F(from).toFixed(4)}`, explanation: 'แทนค่าขอบเขตบนและล่าง' },
        { title: 'ผลลัพธ์', latex: `= ${result.toFixed(4)}`, explanation: `พื้นที่ใต้กราฟในช่วง ${from} ถึง ${to} เท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'avg_rate_of_change',
    name: 'Average Rate of Change',
    nameTh: 'อัตราการเปลี่ยนแปลงเฉลี่ย',
    category: 'calculus',
    categoryTh: 'แคลคูลัส',
    icon: 'activity',
    grade: 'ม.4-6',
    latex: '\\frac{\\Delta f}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}',
    description: 'ความชันเฉลี่ยของฟังก์ชันระหว่างจุดสองจุด ใช้หาอัตราการเปลี่ยนแปลง เช่น ความเร็วเฉลี่ยจากกราฟระยะทาง',
    variables: [
      { id: 'result', symbol: 'ROC', name: 'Rate of Change', nameTh: 'อัตราการเปลี่ยนแปลง', unit: '', defaultValue: 4, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'fb', symbol: 'f(b)', name: 'Function at b', nameTh: 'ค่าฟังก์ชันที่ b', unit: '', defaultValue: 15, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'fa', symbol: 'f(a)', name: 'Function at a', nameTh: 'ค่าฟังก์ชันที่ a', unit: '', defaultValue: 3, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Point b', nameTh: 'จุด b', unit: '', defaultValue: 4, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Point a', nameTh: 'จุด a', unit: '', defaultValue: 1, min: -1e15, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { fb, fa, b, a } = inputs;
      if (b === a) throw new Error('จุด a และ b ต้องต่างกัน');
      const result = (fb - fa) / (b - a);
      const steps = [
        { title: 'สูตรอัตราการเปลี่ยนแปลงเฉลี่ย', latex: 'ROC = \\frac{f(b) - f(a)}{b - a}', explanation: 'ผลต่างฟังก์ชันหารผลต่างจุด' },
        { title: 'แทนค่า', latex: `ROC = \\frac{${fb} - ${fa}}{${b} - ${a}}`, explanation: 'คำนวณผลต่าง numerator / denominator' },
        { title: 'ผลลัพธ์', latex: `ROC = ${result.toFixed(4)}`, explanation: `อัตราการเปลี่ยนแปลงเฉลี่ยเท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  }
];

export const ADVANCED_MATH_FORMULAS = [
  {
    id: 'vector_magnitude',
    name: 'Vector Magnitude',
    nameTh: 'ขนาดของเวกเตอร์',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'navigation',
    grade: 'ม.4-5',
    latex: '|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}',
    description: 'ขนาด (ความยาว) ของเวกเตอร์ในปริภูมิ 3 มิติ ได้จากรากที่สองของผลรวมกำลังสองขององค์ประกอบ หากโจทย์เป็น 2 มิติ ให้ใส่ z = 0',
    variables: [
      { id: 'x', symbol: 'x', name: 'Component x', nameTh: 'องค์ประกอบ x', unit: '', defaultValue: 3, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'y', symbol: 'y', name: 'Component y', nameTh: 'องค์ประกอบ y', unit: '', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'z', symbol: 'z', name: 'Component z', nameTh: 'องค์ประกอบ z (2D ใส่ 0)', unit: '', defaultValue: 0, min: -1e12, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x, y, z } = inputs;
      const result = Math.sqrt(x * x + y * y + z * z);
      const steps = [
        { title: 'สูตรขนาดเวกเตอร์', latex: '|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}', explanation: `องค์ประกอบ (${x}, ${y}, ${z})` },
        { title: 'แทนค่า', latex: `|\\vec{v}| = \\sqrt{${x}^2 + ${y}^2 + ${z}^2} = \\sqrt{${x * x + y * y + z * z}}`, explanation: 'ยกกำลังสองแล้วรวมกัน' },
        { title: 'ผลลัพธ์', latex: `|\\vec{v}| = ${result.toFixed(4)}`, explanation: `ขนาดเวกเตอร์เท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'dot_product',
    name: 'Dot Product (Scalar Product)',
    nameTh: 'ผลคูณดอต (Dot Product)',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'sigma',
    grade: 'ม.4-5',
    latex: '\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y',
    description: 'ผลคูณเชิงสเกลาร์ของเวกเตอร์ 2 มิติ = ผลรวมของผลคูณองค์ประกอบตามแกน ใช้ตรวจมุมฉาก (ได้ 0) และหาขนาด',
    variables: [
      { id: 'ax', symbol: 'a_x', name: 'a.x', nameTh: 'องค์ประกอบ x ของ a', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'ay', symbol: 'a_y', name: 'a.y', nameTh: 'องค์ประกอบ y ของ a', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'bx', symbol: 'b_x', name: 'b.x', nameTh: 'องค์ประกอบ x ของ b', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'by', symbol: 'b_y', name: 'b.y', nameTh: 'องค์ประกอบ y ของ b', unit: '', defaultValue: -2, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { ax, ay, bx, by } = inputs;
      const result = ax * bx + ay * by;
      const steps = [
        { title: 'สูตรผลคูณดอต', latex: '\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y', explanation: 'คูณองค์ประกอบตามแกนแล้วบวกกัน' },
        { title: 'แทนค่า', latex: `\\vec{a} \\cdot \\vec{b} = (${ax} \\times ${bx}) + (${ay} \\times ${by}) = ${ax * bx} + ${ay * by}`, explanation: 'คำนวณแต่ละพจน์' },
        { title: 'ผลลัพธ์', latex: `\\vec{a} \\cdot \\vec{b} = ${result.toFixed(4)}`, explanation: result === 0 ? 'ผลคูณเป็น 0 → เวกเตอร์ตั้งฉากกัน' : `ผลคูณดอตเท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'distance_points',
    name: 'Distance Between Two Points',
    nameTh: 'ระยะทางระหว่างจุด 2 จุด',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'navigation',
    grade: 'ม.4',
    latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}',
    description: 'ระยะทางระหว่างจุด (x₁,y₁) และ (x₂,y₂) ในพิกัดฉาก ใช้ในเรขาคณิตวิเคราะห์',
    variables: [
      { id: 'x1', symbol: 'x_1', name: 'Point 1 x', nameTh: 'x ของจุดแรก', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y1', symbol: 'y_1', name: 'Point 1 y', nameTh: 'y ของจุดแรก', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'x2', symbol: 'x_2', name: 'Point 2 x', nameTh: 'x ของจุดที่สอง', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y2', symbol: 'y_2', name: 'Point 2 y', nameTh: 'y ของจุดที่สอง', unit: '', defaultValue: 6, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x1, y1, x2, y2 } = inputs;
      const dx = x2 - x1, dy = y2 - y1;
      const result = Math.sqrt(dx * dx + dy * dy);
      const steps = [
        { title: 'สูตรระยะทาง', latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}', explanation: 'หาผลต่างพิกัดตามแกน' },
        { title: 'แทนค่า', latex: `d = \\sqrt{(${x2}-${x1})^2 + (${y2}-${y1})^2} = \\sqrt{${dx}^2 + ${dy}^2}`, explanation: `ผลต่าง x = ${dx}, y = ${dy}` },
        { title: 'ผลลัพธ์', latex: `d = ${result.toFixed(4)}`, explanation: `ระยะทางเท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'midpoint',
    name: 'Midpoint of Segment',
    nameTh: 'จุดกึ่งกลาง',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'triangle',
    grade: 'ม.4',
    latex: 'M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)',
    description: 'จุดกึ่งกลางของส่วนของเส้นตรงระหว่างจุดสองจุด คือค่าเฉลี่ยของพิกัดตามแกน',
    variables: [
      { id: 'x1', symbol: 'x_1', name: 'Point 1 x', nameTh: 'x ของจุดแรก', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y1', symbol: 'y_1', name: 'Point 1 y', nameTh: 'y ของจุดแรก', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'x2', symbol: 'x_2', name: 'Point 2 x', nameTh: 'x ของจุดที่สอง', unit: '', defaultValue: 8, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y2', symbol: 'y_2', name: 'Point 2 y', nameTh: 'y ของจุดที่สอง', unit: '', defaultValue: 10, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x1, y1, x2, y2 } = inputs;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const steps = [
        { title: 'สูตรจุดกึ่งกลาง', latex: 'M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)', explanation: 'เฉลี่ยพิกัดตามแกน' },
        { title: 'แทนค่า', latex: `M = \\left(\\frac{${x1}+${x2}}{2},\\ \\frac{${y1}+${y2}}{2}\\right) = (${mx}, ${my})`, explanation: 'คำนวณแต่ละแกน' },
        { title: 'ผลลัพธ์', latex: `M = (${mx.toFixed(4)},\\ ${my.toFixed(4)})`, explanation: `จุดกึ่งกลางคือ (${mx.toFixed(4)}, ${my.toFixed(4)})` }
      ];
      return { result: mx, resultDisplay: `(${mx.toFixed(4)}, ${my.toFixed(4)})`, unit: '', steps };
    }
  },

  {
    id: 'slope',
    name: 'Slope of a Line',
    nameTh: 'ความชันของเส้นตรง',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'trending-up',
    grade: 'ม.4',
    latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
    description: 'ความชัน (m) คืออัตราการเปลี่ยนแปลง y ต่อ x ระหว่างจุดสองจุด เป็นบวกเมื่อชันขึ้น ลบเมื่อชันลง ศูนย์เมื่อราบ',
    variables: [
      { id: 'x1', symbol: 'x_1', name: 'Point 1 x', nameTh: 'x ของจุดแรก', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y1', symbol: 'y_1', name: 'Point 1 y', nameTh: 'y ของจุดแรก', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'x2', symbol: 'x_2', name: 'Point 2 x', nameTh: 'x ของจุดที่สอง', unit: '', defaultValue: 5, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'y2', symbol: 'y_2', name: 'Point 2 y', nameTh: 'y ของจุดที่สอง', unit: '', defaultValue: 11, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { x1, y1, x2, y2 } = inputs;
      if (x2 === x1) throw new Error('เส้นตรงในแนวดิ่ง (x เท่ากัน) ไม่มีความชัน');
      const result = (y2 - y1) / (x2 - x1);
      const steps = [
        { title: 'สูตรความชัน', latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', explanation: 'ผลต่าง y หารผลต่าง x' },
        { title: 'แทนค่า', latex: `m = \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${y2 - y1}}{${x2 - x1}}`, explanation: 'คำนวณผลต่าง' },
        { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(4)}`, explanation: `ความชันเท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'matrix_det',
    name: 'Determinant of 2x2 Matrix',
    nameTh: 'ดีเทอร์มิแนนต์ของเมทริกซ์ (ขนาด 2×2)',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'grid',
    grade: 'ม.5',
    latex: '\\det(A) = ad - bc',
    description: 'ดีเทอร์มิแนนต์ของเมทริกซ์ [[a,b],[c,d]] = ad − bc ใช้ตรวจสอบว่ามีตัวผกผัน (≠ 0) และแก้ระบบสมการ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Entry a', nameTh: 'a (แถว1 คอลัมน์1)', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Entry b', nameTh: 'b (แถว1 คอลัมน์2)', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Entry c', nameTh: 'c (แถว2 คอลัมน์1)', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'd', symbol: 'd', name: 'Entry d', nameTh: 'd (แถว2 คอลัมน์2)', unit: '', defaultValue: 4, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, b, c, d } = inputs;
      const result = a * d - b * c;
      const steps = [
        { title: 'สูตรดีเทอร์มิแนนต์', latex: '\\det(A) = ad - bc', explanation: 'เส้นทแยงหลักลบเส้นทแยงรอง' },
        { title: 'แทนค่า', latex: `\\det(A) = (${a} \\times ${d}) - (${b} \\times ${c}) = ${a * d} - ${b * c}`, explanation: 'คำนวณผลคูณทแยง' },
        { title: 'ผลลัพธ์', latex: `\\det(A) = ${result.toFixed(4)}`, explanation: result === 0 ? 'ดีเทอร์มิแนนต์เป็น 0 → เมทริกซ์เอกฐาน ไม่มีตัวผกผัน' : `ดีเทอร์มิแนนต์เท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'matrix_inverse',
    name: 'Inverse of 2x2 Matrix',
    nameTh: 'ตัวผกผันของเมทริกซ์ (ขนาด 2×2)',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'grid',
    grade: 'ม.5',
    latex: 'A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
    description: 'ตัวผกผันของเมทริกซ์ 2×2 หาได้โดยสลับทแยงหลัก ใส่เครื่องหมายลบที่ทแยงรอง แล้วหารด้วยดีเทอร์มิแนนต์ (ต้อง ≠ 0)',
    variables: [
      { id: 'a', symbol: 'a', name: 'Entry a', nameTh: 'a', unit: '', defaultValue: 2, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Entry b', nameTh: 'b', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Entry c', nameTh: 'c', unit: '', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'd', symbol: 'd', name: 'Entry d', nameTh: 'd', unit: '', defaultValue: 3, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, b, c, d } = inputs;
      const det = a * d - b * c;
      if (det === 0) throw new Error('ดีเทอร์มิแนนต์เป็น 0 → เมทริกซ์ไม่มีตัวผกผัน');
      const inv = [
        [d / det, -b / det],
        [-c / det, a / det]
      ];
      const steps = [
        { title: 'คำนวณดีเทอร์มิแนนต์', latex: `\\det(A) = ${a}(${d}) - ${b}(${c}) = ${det.toFixed(4)}`, explanation: 'ad − bc ต้องไม่เป็น 0' },
        { title: 'สูตรตัวผกผัน', latex: 'A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}', explanation: `คูณ 1/${det.toFixed(4)} กับเมทริกซ์สลับทแยง` },
        { title: 'ผลลัพธ์', latex: `A^{-1} = \\begin{pmatrix} ${inv[0][0].toFixed(4)} & ${inv[0][1].toFixed(4)} \\\\ ${inv[1][0].toFixed(4)} & ${inv[1][1].toFixed(4)} \\end{pmatrix}`, explanation: `ทุกช่องคูณด้วย 1/${det.toFixed(4)}` }
      ];
      return { result: det, resultDisplay: `[[${inv[0][0].toFixed(3)}, ${inv[0][1].toFixed(3)}], [${inv[1][0].toFixed(3)}, ${inv[1][1].toFixed(3)}]]`, unit: '', steps };
    }
  },

  {
    id: 'complex_modulus',
    name: 'Modulus of Complex Number',
    nameTh: 'ค่าสัมบูรณ์ของจำนวนเชิงซ้อน',
    category: 'advanced',
    categoryTh: 'เวกเตอร์และเมทริกซ์',
    icon: 'hash',
    grade: 'ม.5',
    latex: '|a + bi| = \\sqrt{a^2 + b^2}',
    description: 'ขนาดของจำนวนเชิงซ้อน a + bi ได้จากรากที่สองของผลรวมกำลังสองของส่วนจริงและส่วนจินตภาพ เช่น |3 + 4i| = 5',
    variables: [
      { id: 'a', symbol: 'a', name: 'Real Part', nameTh: 'ส่วนจริง (a)', unit: '', defaultValue: 3, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Imaginary Part', nameTh: 'ส่วนจินตภาพ (b)', unit: '', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { a, b } = inputs;
      const result = Math.sqrt(a * a + b * b);
      const steps = [
        { title: 'สูตรค่าสัมบูรณ์', latex: '|a + bi| = \\sqrt{a^2 + b^2}', explanation: `จำนวนเชิงซ้อน ${a} + ${b}i` },
        { title: 'แทนค่า', latex: `|z| = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a + b * b}}`, explanation: 'ยกกำลังสองแล้วรวมกัน' },
        { title: 'ผลลัพธ์', latex: `|z| = ${result.toFixed(4)}`, explanation: `ขนาดเท่ากับ ${result.toFixed(4)}` }
      ];
      return { result, unit: '', steps };
    }
  }
];