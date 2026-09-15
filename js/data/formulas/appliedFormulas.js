/**
 * Applied Formulas (เศรษฐศาสตร์ + สุขศึกษา + เทคโนโลยี) - ม.3 - ม.6
 */

export const ECONOMICS_FORMULAS = [
  {
    id: 'equilibrium_price',
    name: 'Market Equilibrium (P*)',
    nameTh: 'ดุลยภาพตลาด (P* และ Q*)',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'scales',
    grade: 'ม.4-6',
    latex: 'P^* = \\frac{a - c}{b + d}, \\ Q^* = a - bP^*',
    description: 'ราคาดุลยภาพจาก Q_d = a − bP และ Q_s = c + dP เช่น อุปสงค์ 200−2P อุปทาน 20+3P → P* = 36',
    variables: [
      { id: 'a', symbol: 'a', name: 'Demand Intercept', nameTh: 'ค่าคงที่อุปสงค์ (a)', unit: 'หน่วย', defaultValue: 200, min: 0, max: 1e9, step: 1 },
      { id: 'b', symbol: 'b', name: 'Demand Slope', nameTh: 'ความชันอุปสงค์ (b)', unit: '', defaultValue: 2, min: 0.0001, max: 1e6, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Supply Intercept', nameTh: 'ค่าคงที่อุปทาน (c)', unit: 'หน่วย', defaultValue: 20, min: -1e9, max: 1e9, step: 1 },
      { id: 'd', symbol: 'd', name: 'Supply Slope', nameTh: 'ความชันอุปทาน (d)', unit: '', defaultValue: 3, min: 0.0001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['P'],
    calculate: (inputs) => {
      let { a, b, c, d } = inputs;
      const P = (a - c) / (b + d);
      const Q = a - b * P;
      const steps = [
        { title: 'สมการดุลยภาพ', latex: 'a - bP = c + dP', explanation: 'กำหนดให้อุปสงค์เท่ากับอุปทาน' },
        { title: 'จัดรูปหาราคา', latex: `P^* = \\frac{a - c}{b + d} = \\frac{${a} - ${c}}{${b} + ${d}} = \\frac{${a - c}}{${b + d}}`, explanation: 'ย้ายตัวแปรมาอยู่ข้างเดียว' },
        { title: 'ผลลัพธ์', latex: `P^* = ${P.toFixed(2)}`, explanation: `ราคาดุลยภาพเท่ากับ ${P.toFixed(2)} บาท` },
        { title: 'หาปริมาณดุลยภาพ', latex: `Q^* = a - bP^* = ${a} - ${b}(${P.toFixed(2)}) = ${Q.toFixed(2)}`, explanation: `ปริมาณดุลยภาพเท่ากับ ${Q.toFixed(2)} หน่วย` }
      ];
      return { result: P, resultDisplay: `P* = ${P.toFixed(2)}, Q* = ${Q.toFixed(2)}`, unit: 'บาท', steps };
    }
  },

  {
    id: 'price_elasticity',
    name: 'Price Elasticity of Demand',
    nameTh: 'ความยืดหยุ่นของอุปสงค์ต่อราคา',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'percent',
    grade: 'ม.5-6',
    latex: 'E_d = \\frac{\\%\\Delta Q}{\\%\\Delta P}',
    description: 'ความยืดหยุ่น = เปอร์เซ็นต์การเปลี่ยนของปริมาณ ÷ เปอร์เซ็นต์การเปลี่ยนของราคา โดย |E|>1 แปลว่าไวต่อราคา (ยืดหยุ่น)',
    variables: [
      { id: 'Ed', symbol: 'E_d', name: 'Elasticity', nameTh: 'ความยืดหยุ่น (Ed)', unit: '', defaultValue: -1.5, min: -100, max: 100, step: 0.1 },
      { id: 'dQ', symbol: '\\%\\Delta Q', name: 'Quantity Change (%)', nameTh: '% ปริมาณที่เปลี่ยน', unit: '%', defaultValue: 15, min: -1000, max: 1000, step: 0.1 },
      { id: 'dP', symbol: '\\%\\Delta P', name: 'Price Change (%)', nameTh: '% ราคาที่เปลี่ยน', unit: '%', defaultValue: -10, min: -1000, max: 1000, step: 0.1 }
    ],
    solveTargets: ['Ed', 'dQ', 'dP'],
    calculate: (inputs, target = 'Ed') => {
      let { Ed, dQ, dP } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Ed') {
        if (dP === 0) throw new Error('%ΔP ต้องไม่เป็น 0');
        result = dQ / dP;
        steps = [
          { title: 'สูตรความยืดหยุ่น', latex: 'E_d = \\frac{\\%\\Delta Q}{\\%\\Delta P}', explanation: `%ΔQ = ${dQ}%, %ΔP = ${dP}%` },
          { title: 'แทนค่า', latex: `E_d = \\frac{${dQ}}{${dP}}`, explanation: 'เปอร์เซ็นต์ปริมาณหารเปอร์เซ็นต์ราคา' },
          { title: 'ผลลัพธ์', latex: `E_d = ${result.toFixed(2)}`, explanation: `ความยืดหยุ่นเท่ากับ ${result.toFixed(2)} (${Math.abs(result) > 1 ? 'ยืดหยุ่น' : Math.abs(result) < 1 ? 'ไม่ยืดหยุ่น' : 'ยืดหยุ่นหน่วยเดียว'})` }
        ];
      } else if (target === 'dQ') {
        result = Ed * dP;
        steps = [
          { title: 'จัดรูปหา %ΔQ', latex: '\\%\\Delta Q = E_d \\times \\%\\Delta P', explanation: `Ed = ${Ed}, %ΔP = ${dP}%` },
          { title: 'ผลลัพธ์', latex: `\\%\\Delta Q = ${result.toFixed(2)}\\% `, explanation: `ปริมาณเปลี่ยน ${result.toFixed(2)}%` }
        ];
      } else if (target === 'dP') {
        if (Ed === 0) throw new Error('Ed ต้องไม่เป็น 0');
        result = dQ / Ed;
        steps = [
          { title: 'จัดรูปหา %ΔP', latex: '\\%\\Delta P = \\frac{\\%\\Delta Q}{E_d}', explanation: 'เปอร์เซ็นต์ปริมาณหารความยืดหยุ่น' },
          { title: 'ผลลัพธ์', latex: `\\%\\Delta P = ${result.toFixed(2)}\\% `, explanation: `ราคาเปลี่ยน ${result.toFixed(2)}%` }
        ];
      }

      return { result, unit: '%', steps };
    }
  },

  {
    id: 'gdp',
    name: 'GDP (Expenditure Method)',
    nameTh: 'ผลิตภัณฑ์มวลรวมในประเทศ (GDP)',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'chart-line',
    grade: 'ม.5',
    latex: 'GDP = C + I + G + (X - M)',
    description: 'GDP วิธีรายจ่าย = การบริโภค (C) + การลงทุน (I) + รายจ่ายรัฐ (G) + ส่งออกสุทธิ (X−M) เช่น ใช้คำนวณขนาดเศรษฐกิจ',
    variables: [
      { id: 'GDP', symbol: 'GDP', name: 'GDP', nameTh: 'GDP (ล้านบาท)', unit: 'ล้านบาท', defaultValue: 16900, min: -1e15, max: 1e15, step: 1 },
      { id: 'C', symbol: 'C', name: 'Consumption', nameTh: 'การบริโภค (C)', unit: 'ล้านบาท', defaultValue: 10000, min: 0, max: 1e15, step: 1 },
      { id: 'I', symbol: 'I', name: 'Investment', nameTh: 'การลงทุน (I)', unit: 'ล้านบาท', defaultValue: 4000, min: 0, max: 1e15, step: 1 },
      { id: 'G', symbol: 'G', name: 'Government Spending', nameTh: 'รายจ่ายรัฐ (G)', unit: 'ล้านบาท', defaultValue: 3000, min: 0, max: 1e15, step: 1 },
      { id: 'X', symbol: 'X', name: 'Exports', nameTh: 'ส่งออก (X)', unit: 'ล้านบาท', defaultValue: 2500, min: 0, max: 1e15, step: 1 },
      { id: 'M', symbol: 'M', name: 'Imports', nameTh: 'นำเข้า (M)', unit: 'ล้านบาท', defaultValue: 2600, min: 0, max: 1e15, step: 1 }
    ],
    solveTargets: ['GDP', 'C'],
    calculate: (inputs, target = 'GDP') => {
      let { GDP, C, I, G, X, M } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'GDP') {
        result = C + I + G + (X - M);
        steps = [
          { title: 'วิธีรายจ่าย', latex: 'GDP = C + I + G + (X - M)', explanation: `C=${C}, I=${I}, G=${G}, X=${X}, M=${M}` },
          { title: 'แทนค่า', latex: `GDP = ${C} + ${I} + ${G} + (${X} - ${M})`, explanation: `ส่งออกสุทธิ = ${(X - M).toFixed(0)}` },
          { title: 'ผลลัพธ์', latex: `GDP = ${result.toFixed(0)} \\ \\text{ล้านบาท}`, explanation: `GDP เท่ากับ ${result.toFixed(0)} ล้านบาท` }
        ];
      } else if (target === 'C') {
        result = GDP - I - G - (X - M);
        steps = [
          { title: 'จัดรูปหาการบริโภค', latex: 'C = GDP - I - G - (X - M)', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `C = ${result.toFixed(0)} \\ \\text{ล้านบาท}`, explanation: `การบริโภคเท่ากับ ${result.toFixed(0)} ล้านบาท` }
        ];
      }

      return { result, unit: 'ล้านบาท', steps };
    }
  },

  {
    id: 'gdp_per_capita',
    name: 'GDP per Capita',
    nameTh: 'รายได้ประชาชาติต่อหัว (GDP per capita)',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'users',
    grade: 'ม.5',
    latex: 'GDP_{pc} = \\frac{GDP}{P}',
    description: 'รายได้เฉลี่ยต่อคน = GDP รวม ÷ จำนวนประชากร ใช้เปรียบเทียบมาตรฐานการครองชีพระหว่างประเทศ',
    variables: [
      { id: 'GDPpc', symbol: 'GDP_{pc}', name: 'GDP per Capita', nameTh: 'GDP ต่อหัว', unit: 'บาท/คน', defaultValue: 260000, min: 0, max: 1e12, step: 1 },
      { id: 'GDP', symbol: 'GDP', name: 'Total GDP', nameTh: 'GDP รวม', unit: 'บาท', defaultValue: 1.69e14, min: 0, max: 1e18, step: 0 },
      { id: 'P', symbol: 'P', name: 'Population', nameTh: 'ประชากร', unit: 'คน', defaultValue: 6.5e7, min: 1, max: 1e12, step: 0 }
    ],
    solveTargets: ['GDPpc', 'P'],
    calculate: (inputs, target = 'GDPpc') => {
      let { GDPpc, GDP, P } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'GDPpc') {
        result = GDP / P;
        steps = [
          { title: 'สูตร GDP ต่อหัว', latex: 'GDP_{pc} = \\frac{GDP}{P}', explanation: `GDP = ${GDP.toExponential(2)}, ประชากร = ${P.toExponential(2)}` },
          { title: 'แทนค่า', latex: `GDP_{pc} = \\frac{${GDP.toExponential(2)}}{${P.toExponential(2)}}`, explanation: 'GDP รวมหารประชากร' },
          { title: 'ผลลัพธ์', latex: `GDP_{pc} = ${result.toFixed(2)} \\ \\text{บาท/คน}`, explanation: `รายได้ต่อหัวเท่ากับ ${(result / 1000).toFixed(1)} พันบาท` }
        ];
      } else if (target === 'P') {
        if (GDPpc === 0) throw new Error('GDP ต่อหัวต้องไม่เป็น 0');
        result = GDP / GDPpc;
        steps = [
          { title: 'จัดรูปหาประชากร', latex: 'P = \\frac{GDP}{GDP_{pc}}', explanation: 'GDP รวมหาร GDP ต่อหัว' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toExponential(3)} \\ \\text{คน}`, explanation: `ประชากรเท่ากับ ${result.toExponential(3)} คน` }
        ];
      }

      return { result, unit: target === 'GDPpc' ? 'บาท/คน' : 'คน', steps };
    }
  },

  {
    id: 'inflation_rate',
    name: 'Inflation Rate',
    nameTh: 'อัตราเงินเฟ้อ',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'trending-up',
    grade: 'ม.5',
    latex: '\\text{อัตราเงินเฟ้อ} = \\frac{CPI_{ปีนี้} - CPI_{ปีก่อน}}{CPI_{ปีก่อน}} \\times 100',
    description: 'อัตราเงินเฟ้อ = ดัชนีราคาผู้บริโภคปีนี้ลบปีก่อน หารปีก่อน × 100 เช่น CPI จาก 130 เป็น 135 → เฟ้อ ~3.85%',
    variables: [
      { id: 'inflation', symbol: '\\%\\Delta CPI', name: 'Inflation Rate', nameTh: 'อัตราเงินเฟ้อ', unit: '%', defaultValue: 3.85, min: -1000, max: 1000, step: 0.01 },
      { id: 'CPI1', symbol: 'CPI_{current}', name: 'CPI Current', nameTh: 'CPI ปีนี้', unit: '', defaultValue: 135, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'CPI0', symbol: 'CPI_{previous}', name: 'CPI Previous', nameTh: 'CPI ปีก่อน', unit: '', defaultValue: 130, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['inflation', 'CPI0'],
    calculate: (inputs, target = 'inflation') => {
      let { inflation, CPI1, CPI0 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'inflation') {
        result = ((CPI1 - CPI0) / CPI0) * 100;
        steps = [
          { title: 'สูตรอัตราเงินเฟ้อ', latex: '\\text{เฟ้อ} = \\frac{CPI_1 - CPI_0}{CPI_0} \\times 100', explanation: `CPI ปีนี้ = ${CPI1}, ปีก่อน = ${CPI0}` },
          { title: 'แทนค่า', latex: `\\text{เฟ้อ} = \\frac{${CPI1} - ${CPI0}}{${CPI0}} \\times 100 = \\frac{${(CPI1 - CPI0).toFixed(2)}}{${CPI0}} \\times 100`, explanation: 'หาผลต่างแล้วหารปีฐาน' },
          { title: 'ผลลัพธ์', latex: `= ${result.toFixed(2)}\\% `, explanation: `อัตราเงินเฟ้อเท่ากับ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'CPI0') {
        if (inflation === -100) throw new Error('เงินเฟ้อ −100% ทำให้ CPI₀ ไม่มีคำตอบ');
        result = (CPI1 * 100) / (100 + inflation);
        steps = [
          { title: 'จัดรูปหา CPI ปีก่อน', latex: 'CPI_0 = \\frac{CPI_1 \\times 100}{100 + \\text{เฟ้อ}}', explanation: `CPI₁ = ${CPI1}, เฟ้อ = ${inflation}%` },
          { title: 'ผลลัพธ์', latex: `CPI_0 = ${result.toFixed(2)}`, explanation: `CPI ปีก่อนเท่ากับ ${result.toFixed(2)}` }
        ];
      }

      return { result, unit: target === 'inflation' ? '%' : '', steps };
    }
  },

  {
    id: 'simple_multiplier',
    name: 'Money Multiplier',
    nameTh: 'ตัวทวีเงิน',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'trending-up',
    grade: 'ม.6',
    latex: 'k = \\frac{1}{\\text{rrr}}',
    description: 'ตัวทวีเงิน = 1/อัตราสำรองตามกฎหมาย (rrr) เช่น rrr = 10% จะได้เงินฝากสร้างได้ k = 10 เท่า',
    variables: [
      { id: 'reserve', symbol: '\\text{rrr}', name: 'Required Reserve Ratio', nameTh: 'อัตราสำรองตามกฎหมาย', unit: '', defaultValue: 0.1, min: 0.0001, max: 0.9999, step: 0.01 },
      { id: 'k', symbol: 'k', name: 'Money Multiplier', nameTh: 'ตัวทวีเงิน', unit: 'เท่า', defaultValue: 10, min: 1.0001, max: 1e5, step: 0.1 }
    ],
    solveTargets: ['k', 'reserve'],
    calculate: (inputs, target = 'k') => {
      const { reserve, k } = inputs;
      let result, steps;
      if (target === 'k') {
        if (reserve === 0) throw new Error('อัตราสำรอง rrr ต้องไม่เป็น 0');
        result = 1 / reserve;
        steps = [
          { title: 'สูตร', latex: 'k = \\frac{1}{\\text{rrr}}', explanation: `rrr = ${reserve} (${(reserve * 100).toFixed(1)}%)` },
          { title: 'แทนค่า', latex: `k = \\frac{1}{${reserve}}`, explanation: '1 หารด้วยอัตราสำรอง' },
          { title: 'ผลลัพธ์', latex: `k = ${result.toFixed(2)} \\ \\text{เท่า}`, explanation: `เงินฝากขยายได้สูงสุด ${result.toFixed(2)} เท่า` }
        ];
      } else {
        if (k === 0) throw new Error('ตัวทวีเงิน k ต้องไม่เป็น 0');
        result = 1 / k;
        steps = [
          { title: 'จัดรูปหาอัตราสำรอง', latex: '\\text{rrr} = \\frac{1}{k}', explanation: `k = ${k}` },
          { title: 'ผลลัพธ์', latex: `\\text{rrr} = \\frac{1}{${k}} = ${result.toFixed(4)} \\ (${(result * 100).toFixed(1)}%)`, explanation: `อัตราสำรองเท่ากับ ${(result * 100).toFixed(1)}%` }
        ];
      }
      return { result, unit: '', steps };
    }
  },

  {
    id: 'unemployment_rate',
    name: 'Unemployment Rate',
    nameTh: 'อัตราการว่างงาน',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'users',
    grade: 'ม.6',
    latex: 'u = \\frac{\\text{unemployed}}{\\text{labor force}} \\times 100',
    description: 'อัตราการว่างงาน = ผู้ว่างงาน/กำลังแรงงาน × 100 เช่น ว่างงาน 25 จากกำลังแรงงาน 500 คน ได้ 5%',
    variables: [
      { id: 'unemployed', symbol: '\\text{unemployed}', name: 'Unemployed', nameTh: 'ผู้ว่างงาน', unit: 'คน', defaultValue: 25, min: 0, max: 1e9, step: 1 },
      { id: 'labor', symbol: '\\text{labor}', name: 'Labor Force', nameTh: 'กำลังแรงงาน', unit: 'คน', defaultValue: 500, min: 1, max: 1e9, step: 1 },
      { id: 'rate', symbol: 'u', name: 'Unemployment Rate', nameTh: 'อัตราการว่างงาน', unit: '%', defaultValue: 5, min: 0, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['rate', 'unemployed', 'labor'],
    calculate: (inputs, target = 'rate') => {
      const { unemployed, labor, rate } = inputs;
      let result, steps;
      if (target === 'rate') {
        if (labor === 0) throw new Error('กำลังแรงงานต้องไม่เป็น 0');
        result = (unemployed / labor) * 100;
        steps = [
          { title: 'สูตร', latex: 'u = \\frac{\\text{unemployed}}{\\text{labor}} \\times 100', explanation: `unemployed = ${unemployed} คน, labor = ${labor} คน` },
          { title: 'แทนค่า', latex: `u = \\frac{${unemployed}}{${labor}} \\times 100`, explanation: 'ผู้ว่างงานหารกำลังแรงงาน' },
          { title: 'ผลลัพธ์', latex: `u = ${result.toFixed(2)}%`, explanation: `อัตราการว่างงานเท่ากับ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'unemployed') {
        if (rate === 0) throw new Error('อัตราการว่างงานต้องไม่เป็น 0');
        result = (rate / 100) * labor;
        steps = [
          { title: 'จัดรูปหาผู้ว่างงาน', latex: '\\text{unemployed} = \\frac{u \\times \\text{labor}}{100}', explanation: `u = ${rate}%, labor = ${labor} คน` },
          { title: 'ผลลัพธ์', latex: `\\text{unemployed} = \\frac{${rate} \\times ${labor}}{100} = ${result.toFixed(1)} \\ \\text{คน}`, explanation: `ผู้ว่างงานเท่ากับ ${result.toFixed(1)} คน` }
        ];
      } else {
        if (rate === 0) throw new Error('อัตราการว่างงานต้องไม่เป็น 0');
        result = (unemployed * 100) / rate;
        steps = [
          { title: 'จัดรูปหากำลังแรงงาน', latex: '\\text{labor} = \\frac{\\text{unemployed} \\times 100}{u}', explanation: `unemployed = ${unemployed} คน, u = ${rate}%` },
          { title: 'ผลลัพธ์', latex: `\\text{labor} = \\frac{${unemployed} \\times 100}{${rate}} = ${result.toFixed(1)} \\ \\text{คน}`, explanation: `กำลังแรงงานเท่ากับ ${result.toFixed(1)} คน` }
        ];
      }
      return { result, unit: target === 'rate' ? '%' : 'คน', steps };
    }
  }
];

export const HEALTH_FORMULAS = [
  {
    id: 'bmi',
    name: 'Body Mass Index (BMI)',
    nameTh: 'ดัชนีมวลกาย (BMI)',
    category: 'health',
    categoryTh: 'สุขภาพ',
    icon: 'scale',
    grade: 'ม.1-3',
    latex: 'BMI = \\frac{W}{H^2}',
    description: 'BMI = น้ำหนัก (กก.) ÷ ส่วนสูง² (ม.) ค่าปกติ 18.5–22.9 (ไทย) เช่น ชั่ง 52 กก. สูง 1.6 ม. → BMI 20.3',
    variables: [
      { id: 'bmi', symbol: 'BMI', name: 'BMI', nameTh: 'BMI', unit: '', defaultValue: 20.3, min: 1, max: 100, step: 0.1 },
      { id: 'W', symbol: 'W', name: 'Weight (kg)', nameTh: 'น้ำหนัก (กก.)', unit: 'kg', defaultValue: 52, min: 1, max: 500, step: 0.1 },
      { id: 'H', symbol: 'H', name: 'Height (m)', nameTh: 'ส่วนสูง (เมตร)', unit: 'm', defaultValue: 1.6, min: 0.4, max: 2.8, step: 0.01 }
    ],
    solveTargets: ['bmi', 'W', 'H'],
    calculate: (inputs, target = 'bmi') => {
      let { bmi, W, H } = inputs;
      let steps = [];
      let result = 0;

      const categorize = (v) => v < 18.5 ? 'น้ำหนักน้อย' : v < 23 ? 'ปกติ' : v < 25 ? 'ท้วม' : v < 30 ? 'อ้วนระดับ 1' : 'อ้วนระดับ 2';

      if (target === 'bmi') {
        result = W / (H * H);
        steps = [
          { title: 'สูตร BMI', latex: 'BMI = \\frac{W}{H^2}', explanation: `W = ${W} kg, H = ${H} m` },
          { title: 'แทนค่า', latex: `BMI = \\frac{${W}}{${H}^2} = \\frac{${W}}{${(H * H).toFixed(4)}}`, explanation: 'ยกกำลังสองส่วนสูง' },
          { title: 'ผลลัพธ์', latex: `BMI = ${result.toFixed(1)}`, explanation: `BMI เท่ากับ ${result.toFixed(1)} (${categorize(result)})` }
        ];
      } else if (target === 'W') {
        result = bmi * H * H;
        steps = [
          { title: 'จัดรูปหาน้ำหนัก', latex: 'W = BMI \\cdot H^2', explanation: `BMI = ${bmi}, H = ${H}` },
          { title: 'ผลลัพธ์', latex: `W = ${result.toFixed(1)} \\ \\text{kg}`, explanation: `น้ำหนักเท่ากับ ${result.toFixed(1)} กิโลกรัม` }
        ];
      } else if (target === 'H') {
        if (bmi === 0) throw new Error('BMI ต้องไม่เป็น 0');
        result = Math.sqrt(W / bmi);
        steps = [
          { title: 'จัดรูปหาส่วนสูง', latex: 'H = \\sqrt{\\frac{W}{BMI}}', explanation: `W = ${W}, BMI = ${bmi}` },
          { title: 'ผลลัพธ์', latex: `H = ${result.toFixed(2)} \\ \\text{m} \\; (${(result * 100).toFixed(0)} \\ \\text{cm})`, explanation: `ส่วนสูงเท่ากับ ${(result * 100).toFixed(0)} เซนติเมตร` }
        ];
      }

      return { result, unit: target === 'W' ? 'kg' : target === 'H' ? 'm' : '', steps };
    }
  },

  {
    id: 'max_heart_rate',
    name: 'Maximum Heart Rate (HRmax = 220 − age)',
    nameTh: 'อัตราชีพจรสูงสุด (220 − อายุ)',
    category: 'health',
    categoryTh: 'สุขภาพ',
    icon: 'heart-pulse',
    grade: 'ม.4-6',
    latex: 'HR_{max} = 220 - \\text{age}',
    description: 'อัตราการเต้นของหัวใจสูงสุดตอนออกกำลังกายประมาณ 220 − อายุ และควรออกกำลังในโซน 60–85% ของ HRmax',
    variables: [
      { id: 'HRmax', symbol: 'HR_{max}', name: 'Max Heart Rate', nameTh: 'ชีพจรสูงสุด', unit: 'ครั้ง/นาที', defaultValue: 190, min: 60, max: 250, step: 1 },
      { id: 'age', symbol: 'age', name: 'Age', nameTh: 'อายุ (ปี)', unit: 'ปี', defaultValue: 30, min: 5, max: 110, step: 1 }
    ],
    solveTargets: ['HRmax', 'age'],
    calculate: (inputs, target = 'HRmax') => {
      let { HRmax, age } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'HRmax') {
        result = 220 - age;
        steps = [
          { title: 'สูตรชีพจรสูงสุด', latex: 'HR_{max} = 220 - age', explanation: `อายุ = ${age} ปี` },
          { title: 'แทนค่า', latex: `HR_{max} = 220 - ${age}`, explanation: '220 ลบอายุ' },
          { title: 'ผลลัพธ์', latex: `HR_{max} = ${result} \\ \\text{ครั้ง/นาที}`, explanation: `โซนปานกลาง (60-70%): ${Math.round(result * 0.6)}–${Math.round(result * 0.7)}, โซนหนัก (70-85%): ${Math.round(result * 0.7)}–${Math.round(result * 0.85)}` }
        ];
      } else if (target === 'age') {
        result = 220 - HRmax;
        steps = [
          { title: 'จัดรูปหาอายุ', latex: 'age = 220 - HR_{max}', explanation: `HRmax = ${HRmax}` },
          { title: 'ผลลัพธ์', latex: `age = ${result} \\ \\text{ปี}`, explanation: `อายุเท่ากับ ${result} ปี` }
        ];
      }

      return { result, unit: target === 'age' ? 'ปี' : 'ครั้ง/นาที', steps };
    }
  },

  {
    id: 'bmr',
    name: 'Basal Metabolic Rate (Mifflin-St Jeor)',
    nameTh: 'อัตราการเผาผลาญพื้นฐาน (BMR)',
    category: 'health',
    categoryTh: 'สุขภาพ',
    icon: 'flame',
    grade: 'ม.4-6',
    latex: 'BMR = 10W + 6.25H - 5A + s',
    description: 'พลังงานขั้นต่ำในการดำรงชีวิต = 10·น้ำหนัก + 6.25·ส่วนสูง(ซม.) − 5·อายุ + (ชาย +5 / หญิง −161) หน่วย kcal/วัน',
    variables: [
      { id: 'BMR', symbol: 'BMR', name: 'BMR', nameTh: 'BMR', unit: 'kcal/วัน', defaultValue: 1559, min: 300, max: 5000, step: 1 },
      { id: 'W', symbol: 'W', name: 'Weight (kg)', nameTh: 'น้ำหนัก (กก.)', unit: 'kg', defaultValue: 65, min: 20, max: 300, step: 0.1 },
      { id: 'H', symbol: 'H', name: 'Height (cm)', nameTh: 'ส่วนสูง (ซม.)', unit: 'cm', defaultValue: 170, min: 100, max: 250, step: 1 },
      { id: 'A', symbol: 'A', name: 'Age', nameTh: 'อายุ (ปี)', unit: 'ปี', defaultValue: 25, min: 10, max: 100, step: 1 },
      { id: 'sex', symbol: 's', name: 'Sex Constant', nameTh: 'ค่าคงที่เพศ (+5 ชาย / −161 หญิง)', unit: '', defaultValue: 5, min: -161, max: 5, step: 1 }
    ],
    solveTargets: ['BMR'],
    calculate: (inputs) => {
      let { W, H, A, sex } = inputs;
      const result = 10 * W + 6.25 * H - 5 * A + sex;
      const steps = [
        { title: 'สูตร Mifflin-St Jeor', latex: 'BMR = 10W + 6.25H - 5A + s', explanation: `W = ${W} kg, H = ${H} cm, A = ${A} ปี, s = ${sex}` },
        { title: 'แทนค่า', latex: `BMR = 10(${W}) + 6.25(${H}) - 5(${A}) + (${sex})`, explanation: `10W = ${(10 * W).toFixed(0)}, 6.25H = ${(6.25 * H).toFixed(0)}, 5A = ${5 * A}` },
        { title: 'ผลลัพธ์', latex: `BMR = ${result.toFixed(0)} \\ \\text{kcal/วัน}`, explanation: `ร่างกายเผาผลาญพื้นฐาน ${result.toFixed(0)} แคลอรีต่อวัน` }
      ];
      return { result, unit: 'kcal/วัน', steps };
    }

  },

  {
    id: 'tdee',
    name: 'Total Daily Energy Expenditure',
    nameTh: 'พลังงานที่ร่างกายใช้ต่อวัน',
    category: 'health',
    categoryTh: 'สุขภาพและพลศึกษา',
    icon: 'activity',
    grade: 'ม.4',
    latex: '\\text{TDEE} = \\text{BMR} \\times \\text{activity}',
    description: 'พลังงานรวมต่อวัน = BMR × ระดับกิจกรรม เช่น BMR 1500 แคลอรี × 1.55 (ออกกำลังปานกลาง) = 2325 แคลอรี/วัน',
    variables: [
      { id: 'BMR', symbol: '\\text{BMR}', name: 'Basal Metabolic Rate', nameTh: 'Basal Metabolic Rate', unit: 'kcal/วัน', defaultValue: 1500, min: 300, max: 10000, step: 10 },
      { id: 'activity', symbol: '\\text{activity}', name: 'Activity Factor', nameTh: 'ตัวคูณระดับกิจกรรม', unit: '', defaultValue: 1.55, min: 1, max: 2.5, step: 0.05 },
      { id: 'tdee', symbol: '\\text{TDEE}', name: 'Total Daily Energy', nameTh: 'พลังงานรวมต่อวัน', unit: 'kcal/วัน', defaultValue: 2325, min: 300, max: 30000, step: 10 }
    ],
    solveTargets: ['tdee', 'BMR', 'activity'],
    calculate: (inputs, target = 'tdee') => {
      const { BMR, activity, tdee } = inputs;
      let result, steps;
      if (target === 'tdee') {
        result = BMR * activity;
        steps = [
          { title: 'สูตร', latex: '\\text{TDEE} = \\text{BMR} \\times \\text{activity}', explanation: `BMR = ${BMR} kcal/วัน, activity = ${activity}` },
          { title: 'แทนค่า', latex: `\\text{TDEE} = ${BMR} \\times ${activity}`, explanation: 'BMR คูณตัวคูณกิจกรรม' },
          { title: 'ผลลัพธ์', latex: `\\text{TDEE} = ${result.toFixed(0)} \\ \\text{kcal/วัน}`, explanation: `ร่างกายใช้พลังงานประมาณ ${result.toFixed(0)} แคลอรีต่อวัน` }
        ];
      } else if (target === 'BMR') {
        if (activity === 0) throw new Error('ตัวคูณกิจกรรมต้องไม่เป็น 0');
        result = tdee / activity;
        steps = [
          { title: 'จัดรูปหา BMR', latex: '\\text{BMR} = \\frac{\\text{TDEE}}{\\text{activity}}', explanation: `TDEE = ${tdee} kcal/วัน, activity = ${activity}` },
          { title: 'ผลลัพธ์', latex: `\\text{BMR} = \\frac{${tdee}}{${activity}} = ${result.toFixed(0)} \\ \\text{kcal/วัน}`, explanation: `BMR เท่ากับประมาณ ${result.toFixed(0)} แคลอรี/วัน` }
        ];
      } else {
        if (BMR === 0) throw new Error('BMR ต้องไม่เป็น 0');
        result = tdee / BMR;
        steps = [
          { title: 'จัดรูปหาตัวคูณกิจกรรม', latex: '\\text{activity} = \\frac{\\text{TDEE}}{\\text{BMR}}', explanation: `TDEE = ${tdee} kcal/วัน, BMR = ${BMR} kcal/วัน` },
          { title: 'ผลลัพธ์', latex: `\\text{activity} = \\frac{${tdee}}{${BMR}} = ${result.toFixed(2)}`, explanation: `ตัวคูณกิจกรรมเท่ากับ ${result.toFixed(2)}` }
        ];
      }
      return { result, unit: target === 'activity' ? '' : 'kcal/วัน', steps };
    }
  }
];

export const TECHNOLOGY_FORMULAS = [
  {
    id: 'binary_to_decimal',
    name: 'Binary → Decimal',
    nameTh: 'แปลงเลขฐานสองเป็นฐานสิบ',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'binary',
    grade: 'ม.3-4',
    latex: 'N_{10} = \\sum b_i \\cdot 2^i',
    description: 'แปลงเลขฐานสองเป็นฐานสิบโดยคูณแต่ละหลักด้วยกำลังของ 2 เช่น 1011₂ = 8+0+2+1 = 11',
    variables: [
      { id: 'binary', symbol: 'binary', name: 'Binary Input', nameTh: 'เลขฐานสอง (เช่น 1011)', unit: '', defaultValue: 1011, min: 0, max: 9007199254740991, step: 1 },
      { id: 'decimal', symbol: 'N_{10}', name: 'Decimal Output', nameTh: 'ผลเป็นฐานสิบ', unit: '', defaultValue: 11, min: 0, max: 1e9, step: 1 }
    ],
    solveTargets: ['decimal'],
    calculate: (inputs) => {
      let { binary } = inputs;
      if (typeof binary !== 'number') throw new Error('กรอกตัวเลขให้เป็นตัวเลข');
      const binStr = Math.abs(binary).toString();
      if (!/^[01]+$/.test(binStr)) throw new Error('ต้องเป็นเลขฐานสอง (0 หรือ 1 เท่านั้น)');
      const digits = binStr.split('').map(Number);
      let result = 0;
      const parts = [];
      digits.forEach((d, i) => {
        const pos = digits.length - 1 - i;
        if (d === 1) { result += Math.pow(2, pos); parts.push(`${Math.pow(2, pos).toLocaleString()}`); }
      });
      const steps = [
        { title: 'หลักของฐานสอง', latex: `${binStr.split('').map((d, i) => `${d} \\times 2^{${digits.length - 1 - i}}`).join(' + ')}`, explanation: 'แต่ละหลักคูณด้วยกำลังของ 2 ตามตำแหน่ง' },
        { title: 'รวมเฉพาะหลักที่มี 1', latex: parts.length ? parts.join(' + ') : '0', explanation: 'บวกค่าประจำหลักที่หลักละ 1' },
        { title: 'ผลลัพธ์', latex: `${binStr}_2 = ${result}_{10}`, explanation: `เลขฐานสิบเท่ากับ ${result.toLocaleString()}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'decimal_to_binary',
    name: 'Decimal → Binary',
    nameTh: 'แปลงเลขฐานสิบเป็นฐานสอง',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'binary',
    grade: 'ม.3-4',
    latex: 'N_2 = \\ldots \\text{ (หาร 2 เศษเป็นบิต)}',
    description: 'แปลงเลขฐานสิบเป็นฐานสองโดยหารด้วย 2 ไปเรื่อยๆ เช่น 11 → 1011₂',
    variables: [
      { id: 'decimal', symbol: 'N_{10}', name: 'Decimal Input', nameTh: 'เลขฐานสิบ', unit: '', defaultValue: 11, min: 0, max: 9007199254740991, step: 1 },
      { id: 'binary', symbol: 'binary', name: 'Binary Output', nameTh: 'ผลเป็นฐานสอง', unit: '', defaultValue: 1011, min: 0, max: 9007199254740991, step: 1 }
    ],
    solveTargets: ['binary'],
    calculate: (inputs) => {
      let { decimal } = inputs;
      if (!Number.isInteger(decimal) || decimal < 0) throw new Error('ต้องเป็นจำนวนเต็มบวกหรือ 0');
      if (decimal === 0) {
        return { result: 0, unit: '', steps: [{ title: 'ผลลัพธ์', latex: '0_{10} = 0_2', explanation: 'เลขศูนย์คือ 0 ในทุกฐาน' }] };
      }
      const remainders = [];
      let n = decimal;
      const ops = [];
      while (n > 0) {
        const rem = n % 2;
        ops.push(`${n} \\div 2 = ${Math.floor(n / 2)} \\ \\text{เศษ} \\ ${rem}`);
        remainders.unshift(rem);
        n = Math.floor(n / 2);
      }
      const result = parseInt(remainders.join(''), 10);
      const steps = [
        { title: 'หาร 2 ไปเรื่อยๆ', latex: ops.join(' \\\\ '), explanation: 'อ่านเศษจากล่างขึ้นบน' },
        { title: 'ผลลัพธ์', latex: `${decimal}_{10} = ${remainders.join('')}_2`, explanation: `เลขฐานสองเท่ากับ ${remainders.join('')}` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'pixel_resolution',
    name: 'Image Resolution (Megapixels)',
    nameTh: 'ความละเอียดภาพ (ล้านพิกเซล)',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'image',
    grade: 'ม.3-4',
    latex: 'MP = \\frac{W \\times H}{1{,}000{,}000}',
    description: 'ความละเอียดภาพ = กว้าง × สูง (พิกเซล) ÷ 1,000,000 เช่น ภาพ 4000×3000 = 12 ล้านพิกเซล (12 MP)',
    variables: [
      { id: 'MP', symbol: 'MP', name: 'Megapixels', nameTh: 'ล้านพิกเซล', unit: 'MP', defaultValue: 12, min: 0, max: 1e9, step: 0.1 },
      { id: 'W', symbol: 'W', name: 'Width (px)', nameTh: 'ความกว้าง (พิกเซล)', unit: 'px', defaultValue: 4000, min: 1, max: 1e9, step: 1 },
      { id: 'H', symbol: 'H', name: 'Height (px)', nameTh: 'ความสูง (พิกเซล)', unit: 'px', defaultValue: 3000, min: 1, max: 1e9, step: 1 }
    ],
    solveTargets: ['MP', 'W', 'H'],
    calculate: (inputs, target = 'MP') => {
      let { MP, W, H } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'MP') {
        result = (W * H) / 1e6;
        steps = [
          { title: 'สูตรความละเอียด', latex: 'MP = \\frac{W \\times H}{1{,}000{,}000}', explanation: `กว้าง ${W.toLocaleString()} px, สูง ${H.toLocaleString()} px` },
          { title: 'แทนค่า', latex: `MP = \\frac{${W.toLocaleString()} \\times ${H.toLocaleString()}}{1{,}000{,}000}`, explanation: `พิกเซลรวม = ${(W * H).toLocaleString()}` },
          { title: 'ผลลัพธ์', latex: `MP = ${result.toFixed(2)} \\ \\text{MP}`, explanation: `ความละเอียดเท่ากับ ${result.toFixed(2)} ล้านพิกเซล` }
        ];
      } else if (target === 'W') {
        if (H === 0) throw new Error('ความสูง H ต้องไม่เป็น 0');
        result = (MP * 1e6) / H;
        steps = [
          { title: 'จัดรูปหาความกว้าง', latex: 'W = \\frac{MP \\times 1{,}000{,}000}{H}', explanation: `MP = ${MP}, H = ${H.toLocaleString()}` },
          { title: 'ผลลัพธ์', latex: `W = ${result.toLocaleString()} \\ \\text{px}`, explanation: `ความกว้างเท่ากับ ${result.toLocaleString()} พิกเซล` }
        ];
      } else if (target === 'H') {
        if (W === 0) throw new Error('ความกว้าง W ต้องไม่เป็น 0');
        result = (MP * 1e6) / W;
        steps = [
          { title: 'จัดรูปหาความสูง', latex: 'H = \\frac{MP \\times 1{,}000{,}000}{W}', explanation: `MP = ${MP}, W = ${W.toLocaleString()}` },
          { title: 'ผลลัพธ์', latex: `H = ${result.toLocaleString()} \\ \\text{px}`, explanation: `ความสูงเท่ากับ ${result.toLocaleString()} พิกเซล` }
        ];
      }

      return { result, unit: target === 'MP' ? 'MP' : 'px', steps };
    }
  },

  {
    id: 'download_time',
    name: 'Download Time',
    nameTh: 'เวลาในการดาวน์โหลด',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'download',
    grade: 'ม.3-6',
    latex: 't_{seconds} = \\frac{size_{MB}}{speed_{MBps}}',
    description: 'เวลาดาวน์โหลด = ขนาดไฟล์ (MB) ÷ ความเร็ว (MB/s) เช่น ไฟล์ 750 MB ด้วยเน็ต 10 MB/s ใช้เวลา 75 วินาที',
    variables: [
      { id: 'size', symbol: 'size', name: 'File Size', nameTh: 'ขนาดไฟล์ (MB)', unit: 'MB', defaultValue: 750, min: 0, max: 1e9, step: 0.1 },
      { id: 'speed', symbol: 'speed', name: 'Download Speed', nameTh: 'ความเร็ว (MB/s)', unit: 'MB/s', defaultValue: 10, min: 0.000001, max: 1e6, step: 0.1 },
      { id: 'time', symbol: 't', name: 'Time', nameTh: 'เวลาที่ใช้', unit: 's', defaultValue: 75, min: 0, max: 1e9, step: 0.1 }
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
          { title: 'สูตรเวลาดาวน์โหลด', latex: 't = \\frac{size}{speed}', explanation: `ขนาด ${size} MB, ความเร็ว ${speed} MB/s` },
          { title: 'แทนค่า', latex: `t = \\frac{${size}}{${speed}}`, explanation: 'ขนาดไฟล์หารความเร็ว' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(1)} \\ \\text{วินาที} \\; (≈ ${min} นาที ${sec.toFixed(0)} วินาที)`, explanation: `ใช้เวลาดาวน์โหลด ${result.toFixed(1)} วินาที` }
        ];
      } else if (target === 'size') {
        result = speed * time;
        steps = [
          { title: 'จัดรูปหาขนาดไฟล์', latex: 'size = speed \\times t', explanation: 'ความเร็วคูณเวลา' },
          { title: 'ผลลัพธ์', latex: `size = ${result.toFixed(1)} \\ \\text{MB}`, explanation: `ขนาดไฟล์เท่ากับ ${result.toFixed(1)} MB` }
        ];
      } else if (target === 'speed') {
        if (time === 0) throw new Error('เวลา t ต้องไม่เป็น 0');
        result = size / time;
        steps = [
          { title: 'จัดรูปหาความเร็ว', latex: 'speed = \\frac{size}{t}', explanation: 'ขนาดไฟล์หารเวลา' },
          { title: 'ผลลัพธ์', latex: `speed = ${result.toFixed(2)} \\ \\text{MB/s}`, explanation: `ความเร็วเท่ากับ ${result.toFixed(2)} MB/s` }
        ];
      }

      return { result, unit: target === 'size' ? 'MB' : target === 'speed' ? 'MB/s' : 's', steps };
    }
  },

  {
    id: 'upload_time',
    name: 'Upload Time',
    nameTh: 'เวลาในการอัปโหลดไฟล์',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'upload',
    grade: 'ม.4',
    latex: 't = \\frac{\\text{size} \\times 8}{\\text{rate}}',
    description: 'เวลาอัปโหลด = ขนาดไฟล์(MB)×8/ความเร็ว(Mbps) เช่น 25 MB บน 20 Mbps ใช้เวลา 10 วินาที',
    variables: [
      { id: 'size', symbol: '\\text{size}', name: 'File Size', nameTh: 'ขนาดไฟล์', unit: 'MB', defaultValue: 25, min: 0.001, max: 1e9, step: 1 },
      { id: 'rate', symbol: '\\text{rate}', name: 'Upload Speed', nameTh: 'ความเร็วอัปโหลด', unit: 'Mbps', defaultValue: 20, min: 0.001, max: 1e6, step: 1 },
      { id: 'time', symbol: 't', name: 'Time', nameTh: 'เวลา', unit: 's', defaultValue: 10, min: 0.001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['time', 'size', 'rate'],
    calculate: (inputs, target = 'time') => {
      const { size, rate, time } = inputs;
      let result, steps;
      if (target === 'time') {
        if (rate === 0) throw new Error('ความเร็วต้องไม่เป็น 0');
        result = (size * 8) / rate;
        steps = [
          { title: 'สูตร', latex: 't = \\frac{\\text{size} \\times 8}{\\text{rate}}', explanation: `size = ${size} MB, rate = ${rate} Mbps` },
          { title: 'แปลงหน่วย', latex: `${size} \\ \\text{MB} = ${size} \\times 8 = ${size * 8} \\ \\text{Mb}`, explanation: '1 MB = 8 เมกะบิต (Mb)' },
          { title: 'แทนค่า', latex: `t = \\frac{${size * 8}}{${rate}}`, explanation: 'ขนาดบิตหารความเร็วต่อวินาที' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `ใช้เวลาอัปโหลด ${result.toFixed(2)} วินาที` }
        ];
      } else if (target === 'size') {
        result = (time * rate) / 8;
        steps = [
          { title: 'จัดรูปหาขนาดไฟล์', latex: '\\text{size} = \\frac{t \\times \\text{rate}}{8}', explanation: `t = ${time} s, rate = ${rate} Mbps` },
          { title: 'ผลลัพธ์', latex: `\\text{size} = \\frac{${time} \\times ${rate}}{8} = ${result.toFixed(2)} \\ \\text{MB}`, explanation: `ขนาดไฟล์เท่ากับ ${result.toFixed(2)} MB` }
        ];
      } else {
        if (time === 0) throw new Error('เวลา t ต้องไม่เป็น 0');
        result = (size * 8) / time;
        steps = [
          { title: 'จัดรูปหาความเร็ว', latex: '\\text{rate} = \\frac{\\text{size} \\times 8}{t}', explanation: `size = ${size} MB, t = ${time} s` },
          { title: 'ผลลัพธ์', latex: `\\text{rate} = \\frac{${size} \\times 8}{${time}} = ${result.toFixed(2)} \\ \\text{Mbps}`, explanation: `ความเร็วอัปโหลดเท่ากับ ${result.toFixed(2)} Mbps` }
        ];
      }
      return { result, unit: target === 'time' ? 's' : target === 'size' ? 'MB' : 'Mbps', steps };
    }
  },

  {
    id: 'text_file_size',
    name: 'Text File Size',
    nameTh: 'ขนาดไฟล์ข้อความ',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'file-text',
    grade: 'ม.4',
    latex: '\\text{size} = \\text{chars} \\times \\text{bytes/char}',
    description: 'ขนาดไฟล์ข้อความ = จำนวนตัวอักษร × ไบต์ต่อตัวอักษร เช่น 1000 ตัวอักษร × 2 ไบต์ (UTF-16) = 2000 ไบต์',
    variables: [
      { id: 'chars', symbol: '\\text{chars}', name: 'Character Count', nameTh: 'จำนวนตัวอักษร', unit: 'ตัว', defaultValue: 1000, min: 1, max: 1e9, step: 1 },
      { id: 'bpc', symbol: '\\text{bytes/char}', name: 'Bytes per Character', nameTh: 'ไบต์ต่อตัวอักษร', unit: 'B/ตัว', defaultValue: 2, min: 1, max: 8, step: 1 },
      { id: 'size', symbol: '\\text{size}', name: 'File Size', nameTh: 'ขนาดไฟล์', unit: 'bytes', defaultValue: 2000, min: 1, max: 1e12, step: 1 }
    ],
    solveTargets: ['size', 'chars', 'bpc'],
    calculate: (inputs, target = 'size') => {
      const { chars, bpc, size } = inputs;
      let result, steps;
      if (target === 'size') {
        result = chars * bpc;
        steps = [
          { title: 'สูตร', latex: '\\text{size} = \\text{chars} \\times \\text{bytes/char}', explanation: `chars = ${chars}, bytes/char = ${bpc}` },
          { title: 'แทนค่า', latex: `\\text{size} = ${chars} \\times ${bpc}`, explanation: 'จำนวนตัวอักษรคูณไบต์ต่อตัว' },
          { title: 'ผลลัพธ์', latex: `\\text{size} = ${result.toLocaleString()} \\ \\text{bytes}`, explanation: `ไฟล์มีขนาด ${result.toLocaleString()} ไบต์ (${(result / 1024).toFixed(2)} KB)` }
        ];
      } else if (target === 'chars') {
        if (bpc === 0) throw new Error('ไบต์ต่อตัวต้องไม่เป็น 0');
        result = size / bpc;
        steps = [
          { title: 'จัดรูปหาจำนวนตัวอักษร', latex: '\\text{chars} = \\frac{\\text{size}}{\\text{bytes/char}}', explanation: `size = ${size} bytes, bytes/char = ${bpc}` },
          { title: 'ผลลัพธ์', latex: `\\text{chars} = \\frac{${size}}{${bpc}} = ${result.toFixed(1)} \\ \\text{ตัว}`, explanation: `ตัวอักษรประมาณ ${result.toFixed(1)} ตัว` }
        ];
      } else {
        if (chars === 0) throw new Error('จำนวนตัวอักษรต้องไม่เป็น 0');
        result = size / chars;
        steps = [
          { title: 'จัดรูปหาไบต์ต่อตัว', latex: '\\text{bytes/char} = \\frac{\\text{size}}{\\text{chars}}', explanation: `size = ${size} bytes, chars = ${chars}` },
          { title: 'ผลลัพธ์', latex: `\\text{bytes/char} = \\frac{${size}}{${chars}} = ${result.toFixed(2)} \\ \\text{B/ตัว}`, explanation: `แต่ละตัวอักษรใช้ ${result.toFixed(2)} ไบต์` }
        ];
      }
      return { result, unit: target === 'size' ? 'bytes' : target === 'chars' ? 'ตัว' : 'B/ตัว', steps };
    }
  }
];