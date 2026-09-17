// @ts-nocheck

/**
 * Trigonometry Formulas (ตรีโกณมิติ) - ม.3, ม.4-5
 */

export const TRIGONOMETRY_FORMULAS = [
  {
    id: 'sine_ratio',
    name: 'Sine Ratio',
    nameTh: 'อัตราส่วน sin (ตรงข้าม/ฉาก)',
    category: 'trigonometry',
    categoryTh: 'ตรีโกณมิติ',
    icon: 'triangle',
    grade: 'ม.3',
    latex: '\\sin(\\theta) = \\frac{\\text{ตรงข้าม}}{\\text{ฉาก}}',
    description: 'sin ของมุม = ด้านตรงข้ามมุมหารด้วยด้านตรงข้ามมุมฉาก ใช้หาด้านหรือมุมในสามเหลี่ยมมุมฉาก',
    variables: [
      { id: 'angle', symbol: '\\theta', name: 'Angle', nameTh: 'มุม θ', unit: '°', defaultValue: 30, min: -90, max: 90, step: 0.1 },
      { id: 'opp', symbol: 'opp', name: 'Opposite', nameTh: 'ด้านตรงข้ามมุม', unit: 'หน่วย', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'hyp', symbol: 'hyp', name: 'Hypotenuse', nameTh: 'ด้านตรงข้ามมุมฉาก', unit: 'หน่วย', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['opp', 'hyp', 'angle'],
    calculate: (inputs, target = 'opp') => {
      let { angle, opp, hyp } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'opp') {
        result = Math.sin(angle * Math.PI / 180) * hyp;
        steps = [
          { title: 'จัดรูปหาด้านตรงข้าม', latex: 'opp = \\sin(\\theta) \\cdot hyp', explanation: 'ย้าย hyp ไปคูณ' },
          { title: 'แทนค่า', latex: `opp = \\sin(${angle}^\\circ) \\times ${hyp}`, explanation: `θ = ${angle}°, ฉาก = ${hyp}` },
          { title: 'ผลลัพธ์', latex: `opp = ${result.toFixed(4)}`, explanation: `ด้านตรงข้ามยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'hyp') {
        if (Math.sin(angle * Math.PI / 180) === 0) throw new Error('sin(θ) = 0 ไม่สามารถใช้ได้');
        result = opp / Math.sin(angle * Math.PI / 180);
        steps = [
          { title: 'จัดรูปหาด้านฉาก', latex: 'hyp = \\frac{opp}{\\sin(\\theta)}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `hyp = ${result.toFixed(4)}`, explanation: `ด้านฉากยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'angle') {
        if (hyp === 0) throw new Error('ด้านฉาก (hyp) ต้องไม่เป็น 0');
        result = Math.asin(Math.max(-1, Math.min(1, opp / hyp))) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม', latex: '\\theta = \\arcsin\\left(\\frac{opp}{hyp}\\right)', explanation: 'ใช้ฟังก์ชันผกผัน arcsin' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `มุมเท่ากับ ${result.toFixed(4)} องศา` }
        ];
      }

      return { result, unit: target === 'angle' ? '°' : '', steps };
    }
  },

  {
    id: 'cosine_ratio',
    name: 'Cosine Ratio',
    nameTh: 'อัตราส่วน cos (ประชิด/ฉาก)',
    category: 'trigonometry',
    categoryTh: 'ตรีโกณมิติ',
    icon: 'triangle',
    grade: 'ม.3',
    latex: '\\cos(\\theta) = \\frac{\\text{ประชิด}}{\\text{ฉาก}}',
    description: 'cos ของมุม = ด้านประชิดมุมหารด้วยด้านตรงข้ามมุมฉาก ใช้หาด้านประชิดหรือมุม',
    variables: [
      { id: 'angle', symbol: '\\theta', name: 'Angle', nameTh: 'มุม θ', unit: '°', defaultValue: 60, min: 0, max: 180, step: 0.1 },
      { id: 'adj', symbol: 'adj', name: 'Adjacent', nameTh: 'ด้านประชิดมุม', unit: 'หน่วย', defaultValue: 1, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'hyp', symbol: 'hyp', name: 'Hypotenuse', nameTh: 'ด้านตรงข้ามมุมฉาก', unit: 'หน่วย', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['adj', 'hyp', 'angle'],
    calculate: (inputs, target = 'adj') => {
      let { angle, adj, hyp } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'adj') {
        result = Math.cos(angle * Math.PI / 180) * hyp;
        steps = [
          { title: 'จัดรูปหาด้านประชิด', latex: 'adj = \\cos(\\theta) \\cdot hyp', explanation: 'ย้าย hyp ไปคูณ' },
          { title: 'ผลลัพธ์', latex: `adj = ${result.toFixed(4)}`, explanation: `ด้านประชิดยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'hyp') {
        if (Math.cos(angle * Math.PI / 180) === 0) throw new Error('cos(θ) = 0 ไม่สามารถใช้ได้');
        result = adj / Math.cos(angle * Math.PI / 180);
        steps = [
          { title: 'จัดรูปหาด้านฉาก', latex: 'hyp = \\frac{adj}{\\cos(\\theta)}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `hyp = ${result.toFixed(4)}`, explanation: `ด้านฉากยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'angle') {
        if (hyp === 0) throw new Error('ด้านฉาก (hyp) ต้องไม่เป็น 0');
        result = Math.acos(Math.max(-1, Math.min(1, adj / hyp))) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม', latex: '\\theta = \\arccos\\left(\\frac{adj}{hyp}\\right)', explanation: 'ใช้ฟังก์ชันผกผัน' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `มุมเท่ากับ ${result.toFixed(4)} องศา` }
        ];
      }

      return { result, unit: target === 'angle' ? '°' : '', steps };
    }
  },

  {
    id: 'tangent_ratio',
    name: 'Tangent Ratio',
    nameTh: 'อัตราส่วน tan (ตรงข้าม/ประชิด)',
    category: 'trigonometry',
    categoryTh: 'ตรีโกณมิติ',
    icon: 'triangle',
    grade: 'ม.3',
    latex: '\\tan(\\theta) = \\frac{\\text{ตรงข้าม}}{\\text{ประชิด}}',
    description: 'tan ของมุม = ด้านตรงข้ามมุมหารด้วยด้านประชิดมุม ใช้หาความชันหรือระยะทางเช่น มุมเงย-มุมก้ม',
    variables: [
      { id: 'angle', symbol: '\\theta', name: 'Angle', nameTh: 'มุม θ', unit: '°', defaultValue: 45, min: -90, max: 90, step: 0.1 },
      { id: 'opp', symbol: 'opp', name: 'Opposite', nameTh: 'ด้านตรงข้ามมุม', unit: 'หน่วย', defaultValue: 10, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'adj', symbol: 'adj', name: 'Adjacent', nameTh: 'ด้านประชิดมุม', unit: 'หน่วย', defaultValue: 10, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['opp', 'adj', 'angle'],
    calculate: (inputs, target = 'opp') => {
      let { angle, opp, adj } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'opp') {
        result = Math.tan(angle * Math.PI / 180) * adj;
        steps = [
          { title: 'จัดรูปหาด้านตรงข้าม', latex: 'opp = \\tan(\\theta) \\cdot adj', explanation: 'ย้าย adj ไปคูณ' },
          { title: 'ผลลัพธ์', latex: `opp = ${result.toFixed(4)}`, explanation: `ด้านตรงข้ามยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'adj') {
        if (Math.tan(angle * Math.PI / 180) === 0) throw new Error('tan(θ) = 0 ไม่สามารถใช้ได้');
        result = opp / Math.tan(angle * Math.PI / 180);
        steps = [
          { title: 'จัดรูปหาด้านประชิด', latex: 'adj = \\frac{opp}{\\tan(\\theta)}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `adj = ${result.toFixed(4)}`, explanation: `ด้านประชิดยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'angle') {
        if (adj === 0) throw new Error('ด้านประชิด (adj) ต้องไม่เป็น 0');
        result = Math.atan(opp / adj) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม', latex: '\\theta = \\arctan\\left(\\frac{opp}{adj}\\right)', explanation: 'ใช้ฟังก์ชันผกผัน arctan' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `มุมเท่ากับ ${result.toFixed(4)} องศา` }
        ];
      }

      return { result, unit: target === 'angle' ? '°' : '', steps };
    }
  },

  {
    id: 'law_of_sines',
    name: 'Law of Sines',
    nameTh: 'กฎของไซน์ (a/sinA = b/sinB)',
    category: 'trigonometry',
    categoryTh: 'ตรีโกณมิติ',
    icon: 'triangle',
    grade: 'ม.4-5',
    latex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B}',
    description: 'ใช้หาด้านหรือมุมของสามเหลี่ยมใดๆ เมื่อรู้ 2 มุม 1 ด้าน หรือ 2 ด้าน 1 มุม (กรณีมุมไม่ตรงข้าม)',
    variables: [
      { id: 'sideA', symbol: 'a', name: 'Side a', nameTh: 'ด้าน a (ตรงข้าม A)', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleA', symbol: 'A', name: 'Angle A', nameTh: 'มุม A (ตรงข้าม a)', unit: '°', defaultValue: 60, min: 0.01, max: 179.99, step: 0.1 },
      { id: 'sideB', symbol: 'b', name: 'Side b', nameTh: 'ด้าน b (ตรงข้าม B)', unit: 'หน่วย', defaultValue: 4.33, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleB', symbol: 'B', name: 'Angle B', nameTh: 'มุม B (ตรงข้าม b)', unit: '°', defaultValue: 45, min: 0.01, max: 179.99, step: 0.1 }
    ],
    solveTargets: ['sideA', 'sideB', 'angleB'],
    calculate: (inputs, target = 'sideA') => {
      let { sideA, angleA, sideB, angleB } = inputs;
      let steps = [];
      let result = 0;
      const sinA = Math.sin(angleA * Math.PI / 180);
      const sinB = Math.sin(angleB * Math.PI / 180);

      if (target === 'sideA') {
        if (sinB === 0) throw new Error('sin B ต้องไม่เป็น 0');
        result = (sideB * sinA) / sinB;
        steps = [
          { title: 'จัดรูปหา a', latex: 'a = \\frac{b \\cdot \\sin A}{\\sin B}', explanation: 'ย้ายข้ามไปมา' },
          { title: 'แทนค่า', latex: `a = \\frac{${sideB} \\times \\sin(${angleA}^\\circ)}{\\sin(${angleB}^\\circ)}`, explanation: 'คำนวณค่า sine' },
          { title: 'ผลลัพธ์', latex: `a = ${result.toFixed(4)}`, explanation: `ด้าน a ยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'sideB') {
        if (sinA === 0) throw new Error('sin A ต้องไม่เป็น 0');
        result = (sideA * sinB) / sinA;
        steps = [
          { title: 'จัดรูปหา b', latex: 'b = \\frac{a \\cdot \\sin B}{\\sin A}', explanation: 'ย้ายข้ามไปมา' },
          { title: 'ผลลัพธ์', latex: `b = ${result.toFixed(4)}`, explanation: `ด้าน b ยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'angleB') {
        if (sideA === 0) throw new Error('ด้าน a ต้องไม่เป็น 0');
        const ratio = (sideB * sinA) / sideA;
        if (Math.abs(ratio) > 1) throw new Error('ค่าที่คำนวณได้เกินช่วงของ sine (1) — ตรวจสอบข้อมูล');
        result = Math.asin(ratio) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหา sin B', latex: '\\sin B = \\frac{b \\cdot \\sin A}{a}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `B = ${result.toFixed(4)}^\\circ`, explanation: `มุม B เท่ากับ ${result.toFixed(4)} องศา (ใช้ arcsin)` }
        ];
      }

      return { result, unit: target === 'angleB' ? '°' : '', steps };
    }
  },

  {
    id: 'law_of_cosines',
    name: 'Law of Cosines',
    nameTh: 'กฎของโคไซน์ (c² = a² + b² - 2ab cos C)',
    category: 'trigonometry',
    categoryTh: 'ตรีโกณมิติ',
    icon: 'triangle',
    grade: 'ม.4-5',
    latex: 'c^2 = a^2 + b^2 - 2ab\\cos(C)',
    description: 'ใช้หาด้านที่สามของสามเหลี่ยมใดๆ เมื่อรู้ 2 ด้าน 1 มุม หรือหามุมเมื่อรู้ด้านครบ 3 ด้าน',
    variables: [
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'ด้าน a', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'ด้าน b', unit: 'หน่วย', defaultValue: 7, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Side c', nameTh: 'ด้าน c (ตรงข้าม C)', unit: 'หน่วย', defaultValue: 6, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleC', symbol: 'C', name: 'Angle C', nameTh: 'มุม C (ตรงข้าม c)', unit: '°', defaultValue: 60, min: 0.01, max: 179.99, step: 0.1 }
    ],
    solveTargets: ['c', 'angleC'],
    calculate: (inputs, target = 'c') => {
      let { a, b, c, angleC } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'c') {
        result = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleC * Math.PI / 180));
        steps = [
          { title: 'สูตรกฎของโคไซน์', latex: 'c^2 = a^2 + b^2 - 2ab\\cos(C)', explanation: 'ถอดรากทั้งสองข้าง' },
          { title: 'แทนค่า', latex: `c = \\sqrt{${a}^2 + ${b}^2 - 2(${a})(${b})\\cos(${angleC}^\\circ)}`, explanation: `a = ${a}, b = ${b}, C = ${angleC}°` },
          { title: 'ผลลัพธ์', latex: `c = ${result.toFixed(4)}`, explanation: `ด้าน c ยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'angleC') {
        const cosC = (a * a + b * b - c * c) / (2 * a * b);
        if (Math.abs(cosC) > 1) throw new Error('ข้อมูลด้านเป็นไปไม่ได้: cos C เกิน ±1');
        result = Math.acos(cosC) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม C', latex: '\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `C = ${result.toFixed(4)}^\\circ`, explanation: `มุม C เท่ากับ ${result.toFixed(4)} องศา (ใช้ arccos)` }
        ];
      }

      return { result, unit: target === 'angleC' ? '°' : '', steps };
    }
  },

  {
    id: 'triangle_area_sinc',
    name: 'Triangle Area (½ab sin C)',
    nameTh: 'พื้นที่สามเหลี่ยม (½ab·sin C)',
    category: 'trigonometry',
    categoryTh: 'ตรีโกณมิติ',
    icon: 'triangle',
    grade: 'ม.4-5',
    latex: 'A = \\frac{1}{2} ab\\sin(C)',
    description: 'พื้นที่สามเหลี่ยมใดๆ คำนวณจากด้านสองด้านและมุมระหว่างด้าน (ใช้เมื่อไม่มีเส้นสูง)',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่', unit: 'ตร.หน่วย', defaultValue: 15.155, min: 0, max: 1e12, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'ด้าน a', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'ด้าน b', unit: 'หน่วย', defaultValue: 7, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'angleC', symbol: 'C', name: 'Included Angle', nameTh: 'มุมระหว่าง a และ b', unit: '°', defaultValue: 60, min: 0.01, max: 179.99, step: 0.1 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      let { a, b, angleC } = inputs;
      const result = 0.5 * a * b * Math.sin(angleC * Math.PI / 180);
      const steps = [
        { title: 'สูตรพื้นที่ด้วย sin', latex: 'A = \\frac{1}{2} ab\\sin(C)', explanation: 'ครึ่งหนึ่งของผลคูณสองด้านคูณ sin ของมุมระหว่างด้าน' },
        { title: 'แทนค่า', latex: `A = 0.5 \\times ${a} \\times ${b} \\times \\sin(${angleC}^\\circ)`, explanation: `a = ${a}, b = ${b}, C = ${angleC}°` },
        { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}`, explanation: `พื้นที่เท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
      ];
      return { result, unit: '', steps };
    }
  }
];