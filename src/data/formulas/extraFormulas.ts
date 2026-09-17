// @ts-nocheck

/**
 * Extra Formulas — 30 new formulas across categories
 * กลศาสตร์ ฟิสิกส์ คลื่น ไฟฟ้า เคมี เรขาคณิต สถิติ การเงิน เศรษฐศาสตร์ สุขภาพ เทคโนโลยี
 */

export const EXTRA_FORMULAS = [
  // ==================== MECHANICS ====================
  {
    id: 'projectile_range',
    name: 'Projectile Range',
    nameTh: 'ระยะพุ่งไกลของวัตถุ',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'target',
    grade: 'ม.4',
    latex: 'R = \\frac{v_0^2 \\sin(2\\theta)}{g}',
    description: 'ระยะพุ่งไกลแนวนอนของวัตถุที่ยิงออกจากพื้นดินในระดับเดียวกัน (ไม่มีแรงต้านอากาศ)',
    variables: [
      { id: 'R', symbol: 'R', name: 'Range', nameTh: 'ระยะพุ่งไกล', unit: 'm', defaultValue: 40.8163, min: 0, max: 100000, step: 0.1 },
      { id: 'v0', symbol: 'v_0', name: 'Initial Speed', nameTh: 'อัตราเร็วต้น', unit: 'm/s', defaultValue: 20, min: 0.01, max: 10000, step: 0.5 },
      { id: 'theta', symbol: '\\theta', name: 'Launch Angle', nameTh: 'มุมยิง', unit: '°', defaultValue: 45, min: 0.1, max: 89.9, step: 1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง', unit: 'm/s²', defaultValue: 9.8, min: 0.1, max: 50, step: 0.1 }
    ],
    solveTargets: ['R', 'v0', 'theta'],
    calculate: (inputs, target = 'R') => {
      const { R, v0, theta, g } = inputs;
      const thetaRad = (theta * Math.PI) / 180;
      let result, steps = [], unit = '';
      if (target === 'R') {
        result = (v0 * v0 * Math.sin(2 * thetaRad)) / g;
        unit = 'm';
        steps = [
          { title: 'สูตรระยะพุ่งไกล', latex: 'R = \\frac{v_0^2 \\sin(2\\theta)}{g}', explanation: 'ยิงจากพื้นดินระดับเดียวกัน' },
          { title: 'แปลงมุมเป็นเรเดียน', latex: `\\theta = ${theta}^\\circ = ${thetaRad.toFixed(4)}\\,\\text{rad}`, explanation: 'คูณ π/180' },
          { title: 'แทนค่า', latex: `R = \\frac{(${v0})^2 \\cdot \\sin(2 \\times ${thetaRad.toFixed(4)})}{${g}}`, explanation: 'แทนค่าทั้งหมด' },
          { title: 'ผลลัพธ์', latex: `R = ${result.toFixed(4)}\\,\\text{m}`, explanation: `ระยะพุ่งไกลเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      } else if (target === 'v0') {
        if (Math.sin(2 * thetaRad) === 0) throw new Error('sin(2θ) ≠ 0 ต้องไม่ใช่มุม 0° หรือ 90°');
        result = Math.sqrt((R * g) / Math.sin(2 * thetaRad));
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปหาอัตราเร็วต้น', latex: 'v_0 = \\sqrt{\\frac{R \\cdot g}{\\sin(2\\theta)}}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลลัพธ์', latex: `v_0 = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `อัตราเร็วต้นเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      } else {
        if (v0 === 0) throw new Error('v₀ ≠ 0');
        const sinVal = Math.max(-1, Math.min(1, (R * g) / (v0 * v0)));
        result = (Math.asin(sinVal) / 2) * (180 / Math.PI);
        unit = '°';
        steps = [
          { title: 'จัดรูปหามุมยิง', latex: '\\theta = \\frac{1}{2} \\arcsin\\left(\\frac{Rg}{v_0^2}\\right)', explanation: 'ย้ายข้างและใช้ arcsin' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `มุมยิงเท่ากับ ${result.toFixed(4)} องศา` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'banked_curve',
    name: 'Banked Curve',
    nameTh: 'ถนนโค้งเอียง',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'navigation',
    grade: 'ม.4',
    latex: '\\tan\\theta = \\frac{v^2}{r \\cdot g}',
    description: 'มุมเอียงที่เหมาะสมของถนนโค้งเพื่อให้รถผ่านโค้งได้โดยไม่ต้องพึ่งแรงเสียดทาน',
    variables: [
      { id: 'theta', symbol: '\\theta', name: 'Bank Angle', nameTh: 'มุมเอียง', unit: '°', defaultValue: 14.25, min: 0.1, max: 89.9, step: 0.5 },
      { id: 'v', symbol: 'v', name: 'Speed', nameTh: 'อัตราเร็ว', unit: 'm/s', defaultValue: 20, min: 0.01, max: 200, step: 0.5 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมีโค้ง', unit: 'm', defaultValue: 100, min: 0.1, max: 10000, step: 1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง', unit: 'm/s²', defaultValue: 9.8, min: 0.1, max: 50, step: 0.1 }
    ],
    solveTargets: ['theta', 'v', 'r'],
    calculate: (inputs, target = 'theta') => {
      const { theta, v, r, g } = inputs;
      let result, steps = [], unit = '';
      if (target === 'theta') {
        result = (Math.atan((v * v) / (r * g)) * 180) / Math.PI;
        unit = '°';
        steps = [
          { title: 'สูตรถนนโค้งเอียง', latex: '\\theta = \\arctan\\left(\\frac{v^2}{rg}\\right)', explanation: 'มุมเอียงที่สมดุลกับแรงหนีศูนย์กลาง' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `มุมเอียงเท่ากับ ${result.toFixed(4)} องศา` }
        ];
      } else if (target === 'v') {
        result = Math.sqrt(r * g * Math.tan((theta * Math.PI) / 180));
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปหาอัตราเร็ว', latex: 'v = \\sqrt{rg \\tan\\theta}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `อัตราเร็วที่เหมาะสมเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      } else {
        if (Math.tan((theta * Math.PI) / 180) === 0) throw new Error('tan(θ) ≠ 0');
        result = (v * v) / (g * Math.tan((theta * Math.PI) / 180));
        unit = 'm';
        steps = [
          { title: 'จัดรูปรัศมี', latex: 'r = \\frac{v^2}{g \\tan\\theta}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}\\,\\text{m}`, explanation: `รัศมีโค้งเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'rotational_kinetic_energy',
    name: 'Rotational Kinetic Energy',
    nameTh: 'พลังงานจลน์การหมุน',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'zap',
    grade: 'ม.4',
    latex: 'KE_{rot} = \\frac{1}{2} I \\omega^2',
    description: 'พลังงานจลน์ของวัตถุที่กำลังหมุนรอบแกน I คือโมเมนต์ของแรงเฉื่อย ω คืออัตราเร็วเชิงมุม',
    variables: [
      { id: 'KE', symbol: 'KE', name: 'Rotational KE', nameTh: 'พลังงานจลน์การหมุน', unit: 'J', defaultValue: 25, min: 0, max: 1e9, step: 1 },
      { id: 'I', symbol: 'I', name: 'Moment of Inertia', nameTh: 'โมเมนต์ของแรงเฉื่อย', unit: 'kg·m²', defaultValue: 2, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'omega', symbol: '\\omega', name: 'Angular Velocity', nameTh: 'อัตราเร็วเชิงมุม', unit: 'rad/s', defaultValue: 5, min: 0.001, max: 10000, step: 0.1 }
    ],
    solveTargets: ['KE', 'I', 'omega'],
    calculate: (inputs, target = 'KE') => {
      const { KE, I, omega } = inputs;
      let result, steps = [], unit = '';
      if (target === 'KE') {
        result = 0.5 * I * omega * omega;
        unit = 'J';
        steps = [
          { title: 'สูตรพลังงานจลน์การหมุน', latex: 'KE_{rot} = \\frac{1}{2} I \\omega^2', explanation: 'ครึ่งหนึ่งของโมเมนต์แรงเฉื่อยคูณอัตราเร็วเชิงมุมกำลังสอง' },
          { title: 'ผลลัพธ์', latex: `KE_{rot} = ${result.toFixed(4)}\\,\\text{J}`, explanation: `พลังงานจลน์การหมุนเท่ากับ ${result.toFixed(4)} จูล` }
        ];
      } else if (target === 'I') {
        if (omega === 0) throw new Error('ω ≠ 0');
        result = (2 * KE) / (omega * omega);
        unit = 'kg·m²';
        steps = [
          { title: 'จัดรูปหาโมเมนต์ของแรงเฉื่อย', latex: 'I = \\frac{2 KE_{rot}}{\\omega^2}', explanation: 'คูณ 2 แล้วหารด้วย ω²' },
          { title: 'ผลลัพธ์', latex: `I = ${result.toFixed(4)}\\,\\text{kg·m}^2`, explanation: `โมเมนต์ของแรงเฉื่อยเท่ากับ ${result.toFixed(4)} kg·m²` }
        ];
      } else {
        if (I === 0) throw new Error('I ≠ 0');
        result = Math.sqrt((2 * KE) / I);
        unit = 'rad/s';
        steps = [
          { title: 'จัดรูปหาอัตราเร็วเชิงมุม', latex: '\\omega = \\sqrt{\\frac{2 KE_{rot}}{I}}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลลัพธ์', latex: `\\omega = ${result.toFixed(4)}\\,\\text{rad/s}`, explanation: `อัตราเร็วเชิงมุมเท่ากับ ${result.toFixed(4)} rad/s` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== PHYSICS ====================
  {
    id: 'spring_period',
    name: 'Spring Oscillation Period',
    nameTh: 'คาบการสั่นของสปริง',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'activity',
    grade: 'ม.4',
    latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}',
    description: 'คาบการสั่นของวัตถุที่ติดกับสปริง m คือมวล k คือค่าคงที่สปริง',
    variables: [
      { id: 'T', symbol: 'T', name: 'Period', nameTh: 'คาบ', unit: 's', defaultValue: 1.269, min: 0.001, max: 100, step: 0.01 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล', unit: 'kg', defaultValue: 2, min: 0.001, max: 10000, step: 0.1 },
      { id: 'k', symbol: 'k', name: 'Spring Constant', nameTh: 'ค่าคงที่สปริง', unit: 'N/m', defaultValue: 50, min: 0.001, max: 1e6, step: 1 }
    ],
    solveTargets: ['T', 'm', 'k'],
    calculate: (inputs, target = 'T') => {
      const { T, m, k } = inputs;
      let result, steps = [], unit = '';
      if (target === 'T') {
        if (k <= 0) throw new Error('k ต้องมากกว่า 0');
        result = 2 * Math.PI * Math.sqrt(m / k);
        unit = 's';
        steps = [
          { title: 'สูตรคาบสปริง', latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}', explanation: 'คาบแปรผกผันกับรูปที่สองของ k' },
          { title: 'ผลลัพธ์', latex: `T = ${result.toFixed(4)}\\,\\text{s}`, explanation: `คาบการสั่นเท่ากับ ${result.toFixed(4)} วินาที` }
        ];
      } else if (target === 'm') {
        result = (k * T * T) / (4 * Math.PI * Math.PI);
        unit = 'kg';
        steps = [
          { title: 'จัดรูปหามวล', latex: 'm = \\frac{k T^2}{4\\pi^2}', explanation: 'ย้ายข้างและยกกำลังสอง' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(4)} kg` }
        ];
      } else {
        if (T <= 0) throw new Error('T ต้องมากกว่า 0');
        result = (4 * Math.PI * Math.PI * m) / (T * T);
        unit = 'N/m';
        steps = [
          { title: 'จัดรูปหาค่าคงที่สปริง', latex: 'k = \\frac{4\\pi^2 m}{T^2}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `k = ${result.toFixed(4)}\\,\\text{N/m}`, explanation: `ค่าคงที่สปริงเท่ากับ ${result.toFixed(4)} N/m` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'flow_rate',
    name: 'Volume Flow Rate',
    nameTh: 'อัตราการไหลแบบปริมาตร',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'droplet',
    grade: 'ม.4',
    latex: 'Q = A \\cdot v',
    description: 'อัตราการไหลแบบปริมาตรคือพื้นที่หน้าตัดคูณอัตราเร็วการไหลของของไหล',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Flow Rate', nameTh: 'อัตราการไหล', unit: 'm³/s', defaultValue: 0.05, min: 0, max: 1e6, step: 0.001 },
      { id: 'A', symbol: 'A', name: 'Cross-section Area', nameTh: 'พื้นที่หน้าตัด', unit: 'm²', defaultValue: 0.01, min: 0.0001, max: 1e6, step: 0.001 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'อัตราเร็วการไหล', unit: 'm/s', defaultValue: 5, min: 0, max: 10000, step: 0.1 }
    ],
    solveTargets: ['Q', 'A', 'v'],
    calculate: (inputs, target = 'Q') => {
      const { Q, A, v } = inputs;
      let result, steps = [], unit = '';
      if (target === 'Q') {
        result = A * v;
        unit = 'm³/s';
        steps = [
          { title: 'สูตรอัตราการไหล', latex: 'Q = A \\cdot v', explanation: 'พื้นที่หน้าตัดคูณความเร็ว' },
          { title: 'ผลลัพธ์', latex: `Q = ${result.toFixed(4)}\\,\\text{m}^3/\\text{s}`, explanation: `อัตราการไหลเท่ากับ ${result.toFixed(4)} m³/s` }
        ];
      } else if (target === 'A') {
        if (v === 0) throw new Error('v ≠ 0');
        result = Q / v;
        unit = 'm²';
        steps = [
          { title: 'จัดรูปหาพื้นที่หน้าตัด', latex: 'A = \\frac{Q}{v}', explanation: 'ย้ายความเร็วไปหาร' },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}\\,\\text{m}^2`, explanation: `พื้นที่หน้าตัดเท่ากับ ${result.toFixed(4)} m²` }
        ];
      } else {
        if (A <= 0) throw new Error('A ต้องมากกว่า 0');
        result = Q / A;
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปหาอัตราเร็ว', latex: 'v = \\frac{Q}{A}', explanation: 'ย้ายพื้นที่ไปหาร' },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `อัตราเร็วการไหลเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== WAVES ====================
  {
    id: 'intensity_inverse_square',
    name: 'Inverse Square Law',
    nameTh: 'ความเข้มรัศมีกำลังสองผกผัน',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'sun',
    grade: 'ม.4',
    latex: 'I_2 = I_1 \\cdot \\frac{r_1^2}{r_2^2}',
    description: 'ความเข้มของคลื่นลดลงแปรผกผันกับกำลังสองของระยะห่างจากแหล่งกำเนิด',
    variables: [
      { id: 'I1', symbol: 'I_1', name: 'Intensity at r₁', nameTh: 'ความเข้ม ณ ระยะ r₁', unit: 'W/m²', defaultValue: 100, min: 0, max: 1e9, step: 1 },
      { id: 'r1', symbol: 'r_1', name: 'Distance 1', nameTh: 'ระยะที่ 1', unit: 'm', defaultValue: 2, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'r2', symbol: 'r_2', name: 'Distance 2', nameTh: 'ระยะที่ 2', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'I2', symbol: 'I_2', name: 'Intensity at r₂', nameTh: 'ความเข้ม ณ ระยะ r₂', unit: 'W/m²', defaultValue: 16, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['I2', 'I1', 'r2'],
    calculate: (inputs, target = 'I2') => {
      const { I1, r1, r2, I2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'I2') {
        if (r2 === 0) throw new Error('r₂ ≠ 0');
        result = I1 * (r1 * r1) / (r2 * r2);
        unit = 'W/m²';
        steps = [
          { title: 'สูตรผกผันกำลังสอง', latex: 'I_2 = I_1 \\cdot \\frac{r_1^2}{r_2^2}', explanation: 'ความเข้มแปรผกผันกับรูปที่สองของระยะ' },
          { title: 'ผลลัพธ์', latex: `I_2 = ${result.toFixed(4)}\\,\\text{W/m}^2`, explanation: `ความเข้มที่ระยะ r₂ เท่ากับ ${result.toFixed(4)} W/m²` }
        ];
      } else if (target === 'I1') {
        if (r1 === 0) throw new Error('r₁ ≠ 0');
        result = I2 * (r2 * r2) / (r1 * r1);
        unit = 'W/m²';
        steps = [
          { title: 'จัดรูปหาความเข้มที่ r₁', latex: 'I_1 = I_2 \\cdot \\frac{r_2^2}{r_1^2}', explanation: 'กลับข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `I_1 = ${result.toFixed(4)}\\,\\text{W/m}^2`, explanation: `ความเข้มที่ r₁ เท่ากับ ${result.toFixed(4)} W/m²` }
        ];
      } else {
        if (I2 <= 0) throw new Error('I₂ ต้องมากกว่า 0');
        result = r1 * Math.sqrt(I1 / I2);
        unit = 'm';
        steps = [
          { title: 'จัดรูปหาระยะ', latex: 'r_2 = r_1 \\sqrt{\\frac{I_1}{I_2}}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลลัพธ์', latex: `r_2 = ${result.toFixed(4)}\\,\\text{m}`, explanation: `ระยะ r₂ เท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'doppler_effect_observed',
    name: 'Doppler Effect (Observer)',
    nameTh: 'ผลดอปเพลอร์ (ผู้ฟัง)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'radio',
    grade: 'ม.4',
    latex: "f' = f \\cdot \\frac{v \\pm v_o}{v \\mp v_s}",
    description: 'ความถี่ที่ผู้ฟังได้ยินเมื่อแหล่งกำเนิดเสียงและผู้ฟังเคลื่อนที่เข้าหรือออกจากกัน',
    variables: [
      { id: 'fPrime', symbol: "f'", name: 'Observed Frequency', nameTh: 'ความถี่ที่ได้ยิน', unit: 'Hz', defaultValue: 440, min: 0, max: 1e6, step: 1 },
      { id: 'f', symbol: 'f', name: 'Source Frequency', nameTh: 'ความถี่แหล่งกำเนิด', unit: 'Hz', defaultValue: 440, min: 0.01, max: 1e6, step: 1 },
      { id: 'v', symbol: 'v', name: 'Sound Speed', nameTh: 'ความเร็วเสียง', unit: 'm/s', defaultValue: 340, min: 1, max: 1000, step: 1 },
      { id: 'vs', symbol: 'v_s', name: 'Source Speed', nameTh: 'อัตราเร็วแหล่งกำเนิด', unit: 'm/s', defaultValue: 30, min: 0, max: 500, step: 1 },
      { id: 'vo', symbol: 'v_o', name: 'Observer Speed', nameTh: 'อัตราเร็วผู้ฟัง', unit: 'm/s', defaultValue: 0, min: 0, max: 500, step: 1 }
    ],
    solveTargets: ['fPrime'],
    calculate: (inputs, target = 'fPrime') => {
      const { f, v, vs, vo } = inputs;
      let result, steps = [], unit = '';
      if (vs >= v) throw new Error('อัตราเร็วแหล่งกำเนิดต้องน้อยกว่าความเร็วเสียง');
      result = f * (v + vo) / (v - vs);
      unit = 'Hz';
      steps = [
        { title: 'สูตรดอปเพลอร์ (เข้าหากัน)', latex: "f' = f \\cdot \\frac{v + v_o}{v - v_s}", explanation: 'ผู้ฟังเคลื่อนเข้า + และแหล่งกำเนิดเคลื่อนเข้า −' },
        { title: 'ผลลัพธ์', latex: `f' = ${result.toFixed(4)}\\,\\text{Hz}`, explanation: `ความถี่ที่ได้ยินสูงขึ้นเป็น ${result.toFixed(4)} Hz` }
      ];
      return { result, unit, steps };
    }
  },

  // ==================== ELECTRICITY ====================
  {
    id: 'voltage_divider',
    name: 'Voltage Divider',
    nameTh: 'ตัวแบ่งความต่างศักย์',
    category: 'electricity',
    categoryTh: 'ไฟฟ้าและแม่เหล็ก',
    icon: 'cpu',
    grade: 'ม.4',
    latex: 'V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}',
    description: 'วงจรแบ่งความต่างศักย์จาคuessistor สองตัวต่อกันเป็นสายไฟ',
    variables: [
      { id: 'Vout', symbol: 'V_{out}', name: 'Output Voltage', nameTh: 'ความต่างศักย์ขาออก', unit: 'V', defaultValue: 4, min: 0, max: 1e6, step: 0.1 },
      { id: 'Vin', symbol: 'V_{in}', name: 'Input Voltage', nameTh: 'ความต่างศักย์ขาเข้า', unit: 'V', defaultValue: 12, min: 0, max: 1e6, step: 0.1 },
      { id: 'R1', symbol: 'R_1', name: 'Resistor 1', nameTh: 'ตัวต้านทาน R₁', unit: 'Ω', defaultValue: 2000, min: 0.001, max: 1e8, step: 100 },
      { id: 'R2', symbol: 'R_2', name: 'Resistor 2', nameTh: 'ตัวต้านทาน R₂', unit: 'Ω', defaultValue: 1000, min: 0.001, max: 1e8, step: 100 }
    ],
    solveTargets: ['Vout', 'Vin', 'R1', 'R2'],
    calculate: (inputs, target = 'Vout') => {
      const { Vout, Vin, R1, R2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'Vout') {
        if (R1 + R2 === 0) throw new Error('R₁ + R₂ ≠ 0');
        result = Vin * R2 / (R1 + R2);
        unit = 'V';
        steps = [
          { title: 'สูตรตัวแบ่งความต่างศักย์', latex: 'V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}', explanation: 'อัตราส่วนของ R₂ ต่อผลรวมทั้งหมด' },
          { title: 'ผลลัพธ์', latex: `V_{out} = ${result.toFixed(4)}\\,\\text{V}`, explanation: `ความต่างศักย์ขาออกเท่ากับ ${result.toFixed(4)} V` }
        ];
      } else if (target === 'Vin') {
        if (R2 === 0) throw new Error('R₂ ≠ 0');
        result = Vout * (R1 + R2) / R2;
        unit = 'V';
        steps = [
          { title: 'จัดรูปหา Vin', latex: 'V_{in} = V_{out} \\cdot \\frac{R_1 + R_2}{R_2}', explanation: 'กลับข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `V_{in} = ${result.toFixed(4)}\\,\\text{V}`, explanation: `ความต่างศักย์ขาเข้าเท่ากับ ${result.toFixed(4)} V` }
        ];
      } else if (target === 'R1') {
        if (Vout === 0) throw new Error('Vout ≠ 0');
        result = R2 * (Vin - Vout) / Vout;
        unit = 'Ω';
        steps = [
          { title: 'จัดรูปหา R₁', latex: 'R_1 = R_2 \\cdot \\frac{V_{in} - V_{out}}{V_{out}}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `R_1 = ${result.toFixed(4)}\\,\\Omega`, explanation: `R₁ เท่ากับ ${result.toFixed(4)} Ω` }
        ];
      } else {
        if (Vin === Vout) throw new Error('Vin ≠ Vout เพื่อหา R₂');
        result = R1 * Vout / (Vin - Vout);
        unit = 'Ω';
        steps = [
          { title: 'จัดรูปหา R₂', latex: 'R_2 = \\frac{R_1 \\cdot V_{out}}{V_{in} - V_{out}}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `R_2 = ${result.toFixed(4)}\\,\\Omega`, explanation: `R₂ เท่ากับ ${result.toFixed(4)} Ω` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'power_resistance',
    name: 'Electrical Power (I²R)',
    nameTh: 'กำลังไฟฟ้า (I²R)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้าและแม่เหล็ก',
    icon: 'zap',
    grade: 'ม.4',
    latex: 'P = I^2 \\cdot R',
    description: 'กำลังไฟฟ้าที่สูญเปล่าเป็นความร้อนในตัวต้านทาน (กฎจูล)',
    variables: [
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'กำลังไฟฟ้า', unit: 'W', defaultValue: 200, min: 0, max: 1e8, step: 1 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'กระแสไฟฟ้า', unit: 'A', defaultValue: 10, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'R', symbol: 'R', name: 'Resistance', nameTh: 'ความต้านทาน', unit: 'Ω', defaultValue: 2, min: 0.001, max: 1e8, step: 0.1 }
    ],
    solveTargets: ['P', 'I', 'R'],
    calculate: (inputs, target = 'P') => {
      const { P, I, R } = inputs;
      let result, steps = [], unit = '';
      if (target === 'P') {
        result = I * I * R;
        unit = 'W';
        steps = [
          { title: 'สูตรกำลังไฟฟ้า', latex: 'P = I^2 R', explanation: 'กระแสกำลังสองคูณความต้านทาน' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(4)}\\,\\text{W}`, explanation: `กำลังไฟฟ้าเท่ากับ ${result.toFixed(4)} วัตต์` }
        ];
      } else if (target === 'I') {
        if (R <= 0) throw new Error('R > 0');
        result = Math.sqrt(P / R);
        unit = 'A';
        steps = [
          { title: 'จัดรูปหากระแส', latex: 'I = \\sqrt{\\frac{P}{R}}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลลัพธ์', latex: `I = ${result.toFixed(4)}\\,\\text{A}`, explanation: `กระแสไฟฟ้าเท่ากับ ${result.toFixed(4)} A` }
        ];
      } else {
        if (I === 0) throw new Error('I ≠ 0');
        result = P / (I * I);
        unit = 'Ω';
        steps = [
          { title: 'จัดรูปหาความต้านทาน', latex: 'R = \\frac{P}{I^2}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `R = ${result.toFixed(4)}\\,\\Omega`, explanation: `ความต้านทานเท่ากับ ${result.toFixed(4)} Ω` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'resistance_temperature',
    name: 'Resistance vs Temperature',
    nameTh: 'ความต้านทานแปรผันอุณหภูมิ',
    category: 'electricity',
    categoryTh: 'ไฟฟ้าและแม่เหล็ก',
    icon: 'thermometer',
    grade: 'ม.4',
    latex: 'R_T = R_0 \\left(1 + \\alpha \\cdot \\Delta T\\right)',
    description: 'ความต้านทานของโลหะเปลี่ยนตามอุณหภูมิ α คือสัมประสิทธิ์อุณหภูมิ',
    variables: [
      { id: 'RT', symbol: 'R_T', name: 'Resistance at T', nameTh: 'ความต้านทาน ณ อุณหภูมิ T', unit: 'Ω', defaultValue: 22, min: 0, max: 1e8, step: 0.1 },
      { id: 'R0', symbol: 'R_0', name: 'Resistance at T₀', nameTh: 'ความต้านทาน ณ ที่อ้างอิง', unit: 'Ω', defaultValue: 20, min: 0.001, max: 1e8, step: 0.1 },
      { id: 'alpha', symbol: '\\alpha', name: 'Temp Coefficient', nameTh: 'สัมประสิทธิ์อุณหภูมิ', unit: '/°C', defaultValue: 0.005, min: -1e-4, max: 1e-2, step: 0.0001 },
      { id: 'dT', symbol: '\\Delta T', name: 'Temperature Change', nameTh: 'การเปลี่ยนแปลงอุณหภูมิ', unit: '°C', defaultValue: 20, min: -1000, max: 1000, step: 1 }
    ],
    solveTargets: ['RT', 'dT'],
    calculate: (inputs, target = 'RT') => {
      const { RT, R0, alpha, dT } = inputs;
      let result, steps = [], unit = '';
      if (target === 'RT') {
        result = R0 * (1 + alpha * dT);
        unit = 'Ω';
        steps = [
          { title: 'สูตรความต้านทาน-อุณหภูมิ', latex: 'R_T = R_0(1 + \\alpha \\Delta T)', explanation: 'ความต้านทานเปลี่ยนตามการเปลี่ยนอุณหภูมิ' },
          { title: 'ผลลัพธ์', latex: `R_T = ${result.toFixed(4)}\\,\\Omega`, explanation: `ความต้านทาน ณ อุณหภูมิใหม่เท่ากับ ${result.toFixed(4)} Ω` }
        ];
      } else {
        if (R0 === 0 || alpha === 0) throw new Error('R₀ ≠ 0 และ α ≠ 0');
        result = (RT / R0 - 1) / alpha;
        unit = '°C';
        steps = [
          { title: 'จัดรูปหาการเปลี่ยนอุณหภูมิ', latex: '\\Delta T = \\frac{\\frac{R_T}{R_0} - 1}{\\alpha}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `\\Delta T = ${result.toFixed(4)}^\\circ\\text{C}`, explanation: `การเปลี่ยนแปลงอุณหภูมิเท่ากับ ${result.toFixed(4)} °C` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== CHEMISTRY ====================
  {
    id: 'boyles_law',
    name: "Boyle's Law",
    nameTh: 'กฎของบอยล์',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'wind',
    grade: 'ม.4',
    latex: 'P_1 V_1 = P_2 V_2',
    description: 'ความดันกับปริมาตรของแก๊สมีความสัมพันธ์แบบผกผัน ณ อุณหภูมิคงที่',
    variables: [
      { id: 'P1', symbol: 'P_1', name: 'Initial Pressure', nameTh: 'ความดันเริ่มต้น', unit: 'atm', defaultValue: 2, min: 0.001, max: 1e4, step: 0.1 },
      { id: 'V1', symbol: 'V_1', name: 'Initial Volume', nameTh: 'ปริมาตรเริ่มต้น', unit: 'L', defaultValue: 10, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'P2', symbol: 'P_2', name: 'Final Pressure', nameTh: 'ความดันสุดท้าย', unit: 'atm', defaultValue: 4, min: 0.001, max: 1e4, step: 0.1 },
      { id: 'V2', symbol: 'V_2', name: 'Final Volume', nameTh: 'ปริมาตรสุดท้าย', unit: 'L', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['V2', 'P2', 'P1'],
    calculate: (inputs, target = 'V2') => {
      const { P1, V1, P2, V2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'V2') {
        if (P2 === 0) throw new Error('P₂ ≠ 0');
        result = (P1 * V1) / P2;
        unit = 'L';
        steps = [
          { title: 'สูตรบอยล์', latex: 'P_1 V_1 = P_2 V_2 \\implies V_2 = \\frac{P_1 V_1}{P_2}', explanation: 'ปริมาตรแปรผกผันกับความดัน ณ อุณหภูมิคงที่' },
          { title: 'ผลลัพธ์', latex: `V_2 = ${result.toFixed(4)}\\,\\text{L}`, explanation: `ปริมาตรสุดท้ายเท่ากับ ${result.toFixed(4)} L` }
        ];
      } else if (target === 'P2') {
        if (V2 === 0) throw new Error('V₂ ≠ 0');
        result = (P1 * V1) / V2;
        unit = 'atm';
        steps = [
          { title: 'จัดรูปหาความดันสุดท้าย', latex: 'P_2 = \\frac{P_1 V_1}{V_2}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `P_2 = ${result.toFixed(4)}\\,\\text{atm}`, explanation: `ความดันสุดท้ายเท่ากับ ${result.toFixed(4)} atm` }
        ];
      } else {
        if (V1 === 0) throw new Error('V₁ ≠ 0');
        result = (P2 * V2) / V1;
        unit = 'atm';
        steps = [
          { title: 'จัดรูปหาความดันเริ่มต้น', latex: 'P_1 = \\frac{P_2 V_2}{V_1}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `P_1 = ${result.toFixed(4)}\\,\\text{atm}`, explanation: `ความดันเริ่มต้นเท่ากับ ${result.toFixed(4)} atm` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'charles_law',
    name: "Charles's Law",
    nameTh: 'กฎของชาร์ล',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'thermometer',
    grade: 'ม.4',
    latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
    description: 'ปริมาตรของแก๊สมีความสัมพันธ์โดยตรงกับอุณหภูมิเคลวิน ณ ความดันคงที่',
    variables: [
      { id: 'V1', symbol: 'V_1', name: 'Initial Volume', nameTh: 'ปริมาตรเริ่มต้น', unit: 'L', defaultValue: 10, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'T1', symbol: 'T_1', name: 'Initial Temp (K)', nameTh: 'อุณหภูมิเริ่มต้น (K)', unit: 'K', defaultValue: 300, min: 0.001, max: 1e6, step: 1 },
      { id: 'V2', symbol: 'V_2', name: 'Final Volume', nameTh: 'ปริมาตรสุดท้าย', unit: 'L', defaultValue: 12, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'T2', symbol: 'T_2', name: 'Final Temp (K)', nameTh: 'อุณหภูมิสุดท้าย (K)', unit: 'K', defaultValue: 360, min: 0.001, max: 1e6, step: 1 }
    ],
    solveTargets: ['V2', 'T2', 'T1'],
    calculate: (inputs, target = 'V2') => {
      const { V1, T1, V2, T2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'V2') {
        if (T1 === 0) throw new Error('T₁ ≠ 0');
        result = (V1 * T2) / T1;
        unit = 'L';
        steps = [
          { title: 'สูตรชาร์ล', latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = \\frac{V_1 T_2}{T_1}', explanation: 'ปริมาตรแปรตรงกับอุณหภูมิเคลวิน' },
          { title: 'ผลลัพธ์', latex: `V_2 = ${result.toFixed(4)}\\,\\text{L}`, explanation: `ปริมาตรสุดท้ายเท่ากับ ${result.toFixed(4)} L` }
        ];
      } else if (target === 'T2') {
        if (V1 === 0) throw new Error('V₁ ≠ 0');
        result = (V2 * T1) / V1;
        unit = 'K';
        steps = [
          { title: 'จัดรูปหาอุณหภูมิสุดท้าย', latex: 'T_2 = \\frac{V_2 T_1}{V_1}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `T_2 = ${result.toFixed(4)}\\,\\text{K}`, explanation: `อุณหภูมิสุดท้ายเท่ากับ ${result.toFixed(4)} K` }
        ];
      } else {
        if (V2 === 0) throw new Error('V₂ ≠ 0');
        result = (V1 * T2) / V2;
        unit = 'K';
        steps = [
          { title: 'จัดรูปหาอุณหภูมิเริ่มต้น', latex: 'T_1 = \\frac{V_1 T_2}{V_2}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `T_1 = ${result.toFixed(4)}\\,\\text{K}`, explanation: `อุณหภูมิเริ่มต้นเท่ากับ ${result.toFixed(4)} K` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'avogadro_molar_volume',
    name: 'Molar Volume at STP',
    nameTh: 'ปริมาตรโมลาร์ ณ STP',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'wind',
    grade: 'ม.4',
    latex: 'V = n \\times 22.4\\,\\text{L/mol}',
    description: 'แก๊ส 1 โมล ณ สภาวะมาตรฐาน (STP: 0°C, 1 atm) มีปริมาตร 22.4 ลิตร',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'L', defaultValue: 44.8, min: 0, max: 1e8, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'จำนวนโมล', unit: 'mol', defaultValue: 2, min: 0, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['V', 'n'],
    calculate: (inputs, target = 'V') => {
      const { V, n } = inputs;
      const MOLAR_VOL = 22.4;
      let result, steps = [], unit = '';
      if (target === 'V') {
        result = n * MOLAR_VOL;
        unit = 'L';
        steps = [
          { title: 'สูตรปริมาตรโมลาร์ ณ STP', latex: `V = n \\times ${MOLAR_VOL}\\,\\text{L/mol}`, explanation: 'ณ 0°C และ 1 atm' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)}\\,\\text{L}`, explanation: `ปริมาตรแก๊สเท่ากับ ${result.toFixed(4)} ลิตร` }
        ];
      } else {
        if (MOLAR_VOL === 0) throw new Error('MOLAR_VOL ≠ 0');
        result = V / MOLAR_VOL;
        unit = 'mol';
        steps = [
          { title: 'จัดรูปหามอล', latex: 'n = \\frac{V}{22.4}', explanation: 'ย้าย 22.4 ไปหาร' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)}\\,\\text{mol}`, explanation: `จำนวนโมลเท่ากับ ${result.toFixed(4)} mol` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== GEOMETRY ====================
  {
    id: 'herons_formula',
    name: "Heron's Formula",
    nameTh: 'สูตรเฮรอน (พื้นที่สามเหลี่ยมจากด้าน)',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'box',
    grade: 'ม.2',
    latex: 'A = \\sqrt{s(s-a)(s-b)(s-c)}',
    description: 'คำนวณพื้นที่สามเหลี่ยมเมื่อทราบความยาวทั้ง 3 ด้าน โดย s คือกึ่งรอบรูป',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่', unit: 'm²', defaultValue: 6, min: 0, max: 1e12, step: 0.01 },
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'ด้าน a', unit: 'm', defaultValue: 3, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'ด้าน b', unit: 'm', defaultValue: 4, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Side c', nameTh: 'ด้าน c', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      const { a, b, c } = inputs;
      const s = (a + b + c) / 2;
      const val = s * (s - a) * (s - b) * (s - c);
      if (val < 0) throw new Error('ความยาวด้านไม่สามารถเป็นสามเหลี่ยมได้ (ไม่เข้าเงื่อนไขสามเหลี่ยม)');
      const result = Math.sqrt(val);
      const steps = [
        { title: 'คำนวณกึ่งรอบรูป', latex: `s = \\frac{a+b+c}{2} = \\frac{${a}+${b}+${c}}{2} = ${s.toFixed(4)}`, explanation: 'กึ่งรอบรูปของสามเหลี่ยม' },
        { title: 'สูตรเฮรอน', latex: 'A = \\sqrt{s(s-a)(s-b)(s-c)}', explanation: 'แทนค่าในสูตรเฮรอน' },
        { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}\\,\\text{m}^2`, explanation: `พื้นที่สามเหลี่ยมเท่ากับ ${result.toFixed(4)} ตร.ม.` }
      ];
      return { result, unit: 'm²', steps };
    }
  },

  {
    id: 'area_rhombus',
    name: 'Area of Rhombus',
    nameTh: 'พื้นที่สี่เหลี่ยมขนมปังขิง',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'box',
    grade: 'ม.2',
    latex: 'A = \\frac{d_1 \\times d_2}{2}',
    description: 'พื้นที่สี่เหลี่ยมขนมปังขิงเท่ากับครึ่งหนึ่งของผลคูณเส้นทแยงมุมทั้งสอง',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่', unit: 'm²', defaultValue: 24, min: 0, max: 1e12, step: 0.1 },
      { id: 'd1', symbol: 'd_1', name: 'Diagonal 1', nameTh: 'เส้นทแยงมุมที่ 1', unit: 'm', defaultValue: 6, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'd2', symbol: 'd_2', name: 'Diagonal 2', nameTh: 'เส้นทแยงมุมที่ 2', unit: 'm', defaultValue: 8, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['A', 'd1', 'd2'],
    calculate: (inputs, target = 'A') => {
      const { A, d1, d2 } = inputs;
      let result, steps = [], unit = '';
      if (target === 'A') {
        result = (d1 * d2) / 2;
        unit = 'm²';
        steps = [
          { title: 'สูตรพื้นที่สี่เหลี่ยมขนมปังขิง', latex: 'A = \\frac{d_1 \\cdot d_2}{2}', explanation: 'ผลคูณเส้นทแยงมุมหาร 2' },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}\\,\\text{m}^2`, explanation: `พื้นที่เท่ากับ ${result.toFixed(4)} ตร.ม.` }
        ];
      } else if (target === 'd1') {
        if (d2 === 0) throw new Error('d₂ ≠ 0');
        result = (2 * A) / d2;
        unit = 'm';
        steps = [
          { title: 'จัดรูปหาเส้นทแยงมุม', latex: 'd_1 = \\frac{2A}{d_2}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `d_1 = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เส้นทแยงมุมที่ 1 เท่ากับ ${result.toFixed(4)} m` }
        ];
      } else {
        if (d1 === 0) throw new Error('d₁ ≠ 0');
        result = (2 * A) / d1;
        unit = 'm';
        steps = [
          { title: 'จัดรูปหาเส้นทแยงมุม', latex: 'd_2 = \\frac{2A}{d_1}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `d_2 = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เส้นทแยงมุมที่ 2 เท่ากับ ${result.toFixed(4)} m` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'volume_frustum',
    name: 'Volume of Frustum (Cone)',
    nameTh: 'ปริมาตรทรงกรวยตัด',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'box',
    grade: 'ม.3',
    latex: 'V = \\frac{\\pi h}{3}\\left(R^2 + Rr + r^2\\right)',
    description: 'ปริมาตรของทรงกรวยที่ถูกตัดเอากลางออก เป็นรูปทรงกระถางคว่ำ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'm³', defaultValue: 326.73, min: 0, max: 1e12, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'R', symbol: 'R', name: 'Bottom Radius', nameTh: 'รัศมีด้านล่าง', unit: 'm', defaultValue: 5, min: 0.001, max: 1e6, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Top Radius', nameTh: 'รัศมีด้านบน', unit: 'm', defaultValue: 3, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['V'],
    calculate: (inputs) => {
      const { h, R, r } = inputs;
      const result = (Math.PI * h / 3) * (R * R + R * r + r * r);
      const steps = [
        { title: 'สูตรทรงกรวยตัด', latex: 'V = \\frac{\\pi h}{3}(R^2 + Rr + r^2)', explanation: 'R = รัศมีล่าง, r = รัศมีบน' },
        { title: 'ผลลัพธ์', latex: `V \\approx ${result.toFixed(4)}\\,\\text{m}^3`, explanation: `ปริมาตรทรงกรวยตัดเท่ากับ ${result.toFixed(4)} ลบ.ม.` }
      ];
      return { result, unit: 'm³', steps };
    }
  },

  // ==================== STATISTICS ====================
  {
    id: 'variance_population',
    name: 'Population Variance',
    nameTh: 'ความแปรปรวนของประชากร',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'bar-chart',
    grade: 'ม.5',
    latex: '\\sigma^2 = \\frac{\\sum(x_i - \\mu)^2}{N}',
    description: 'ความแปรปรวนของข้อมูลทั้งหมดในประชากร μ คือค่าเฉลี่ย N คือจำนวนข้อมูล',
    variables: [
      { id: 'variance', symbol: '\\sigma^2', name: 'Variance', nameTh: 'ความแปรปรวน', unit: '', defaultValue: 4, min: 0, max: 1e12, step: 0.01 },
      { id: 'mean', symbol: '\\mu', name: 'Mean', nameTh: 'ค่าเฉลี่ย', unit: '', defaultValue: 10, min: -1e10, max: 1e10, step: 0.1 },
      { id: 'sumSqDiff', symbol: '\\sum(x_i-\\mu)^2', name: 'Sum of Squared Diff', nameTh: 'ผลรวมยกกำลังสอง', unit: '', defaultValue: 40, min: 0, max: 1e15, step: 1 },
      { id: 'N', symbol: 'N', name: 'Count', nameTh: 'จำนวนข้อมูล', unit: '', defaultValue: 10, min: 1, max: 1e10, step: 1 }
    ],
    solveTargets: ['variance', 'N', 'sumSqDiff'],
    calculate: (inputs, target = 'variance') => {
      const { variance, mean, sumSqDiff, N } = inputs;
      let result, steps = [], unit = '';
      if (target === 'variance') {
        if (N === 0) throw new Error('N ≠ 0');
        result = sumSqDiff / N;
        unit = '';
        steps = [
          { title: 'สูตรความแปรปรวน', latex: '\\sigma^2 = \\frac{\\sum(x_i - \\mu)^2}{N}', explanation: 'ผลรวมยกกำลังสองหารจำนวนข้อมูล' },
          { title: 'ผลลัพธ์', latex: `\\sigma^2 = ${result.toFixed(4)}`, explanation: `ความแปรปรวนเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'N') {
        if (variance === 0) throw new Error('σ² ≠ 0');
        result = sumSqDiff / variance;
        unit = '';
        steps = [
          { title: 'จัดรูปหาจำนวนข้อมูล', latex: 'N = \\frac{\\sum(x_i - \\mu)^2}{\\sigma^2}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `N = ${result.toFixed(4)}`, explanation: `จำนวนข้อมูลเท่ากับ ${result.toFixed(4)}` }
        ];
      } else {
        if (N === 0) throw new Error('N ≠ 0');
        result = variance * N;
        unit = '';
        steps = [
          { title: 'จัดรูปหายอดรวมยกกำลังสอง', latex: '\\sum(x_i - \\mu)^2 = \\sigma^2 \\cdot N', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `\\sum(x_i - \\mu)^2 = ${result.toFixed(4)}`, explanation: `ผลรวมยกกำลังสองเท่ากับ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'expected_value',
    name: 'Expected Value',
    nameTh: 'ค่าคาดหวัง',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'bar-chart',
    grade: 'ม.5',
    latex: 'E(X) = \\sum x_i \\cdot p_i',
    description: 'ค่าคาดหวังคือค่าเฉลี่ยถ่วงน้ำหนักของผลลัพธ์ทุกคูณด้วยความน่าจะเป็นของมัน',
    variables: [
      { id: 'E', symbol: 'E(X)', name: 'Expected Value', nameTh: 'ค่าคาดหวัง', unit: '', defaultValue: 3.5, min: -1e10, max: 1e10, step: 0.1 },
      { id: 'sumProd', symbol: '\\sum x_i p_i', name: 'Sum of x·p', nameTh: 'ผลรวม x·p', unit: '', defaultValue: 21, min: -1e10, max: 1e10, step: 0.1 },
      { id: 'numTerms', symbol: 'n', name: 'Number of Terms', nameTh: 'จำนวนพจน์', unit: '', defaultValue: 6, min: 1, max: 1000, step: 1 }
    ],
    solveTargets: ['E', 'numTerms'],
    calculate: (inputs, target = 'E') => {
      const { E, sumProd, numTerms } = inputs;
      let result, steps = [], unit = '';
      if (target === 'E') {
        if (numTerms === 0) throw new Error('n ≠ 0');
        result = sumProd;
        unit = '';
        steps = [
          { title: 'สูตรค่าคาดหวัง', latex: 'E(X) = \\sum_{i=1}^{n} x_i \\cdot p_i', explanation: 'ผลรวมของ x คูณความน่าจะเป็นทุกพจน์' },
          { title: 'ผลลัพธ์', latex: `E(X) = ${result.toFixed(4)}`, explanation: `ค่าคาดหวังเท่ากับ ${result.toFixed(4)}` }
        ];
      } else {
        if (E === 0) throw new Error('E(X) ≠ 0');
        result = sumProd / E;
        unit = '';
        steps = [
          { title: 'จัดรูปหาจำนวนพจน์', latex: 'n \\approx \\frac{\\sum x_i p_i}{E(X)}', explanation: 'ประมาณจำนวนจากยอดรวม' },
          { title: 'ผลลัพธ์', latex: `n \\approx ${result.toFixed(0)}`, explanation: `จำนวนพจน์ประมาณ ${result.toFixed(0)} พจน์` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'coefficient_of_variation',
    name: 'Coefficient of Variation',
    nameTh: 'สัมประสิทธิ์ความแปรปรวน',
    category: 'statistics',
    categoryTh: 'สถิติและความน่าจะเป็น',
    icon: 'bar-chart',
    grade: 'ม.5',
    latex: 'CV = \\frac{\\sigma}{\\mu} \\times 100\\%',
    description: 'CV วัดความผันผวนสัมพัทธ์ของข้อมูล เปรียบเทียบระหว่างชุดข้อมูลที่ต่างหน่วยกัน',
    variables: [
      { id: 'CV', symbol: 'CV', name: 'CV (%)', nameTh: 'ค่า CV', unit: '%', defaultValue: 20, min: 0, max: 1e6, step: 0.1 },
      { id: 'sigma', symbol: '\\sigma', name: 'Standard Deviation', nameTh: 'ส่วนเบี่ยงเบนมาตรฐาน', unit: '', defaultValue: 4, min: 0, max: 1e10, step: 0.1 },
      { id: 'mu', symbol: '\\mu', name: 'Mean', nameTh: 'ค่าเฉลี่ย', unit: '', defaultValue: 20, min: -1e10, max: 1e10, step: 0.1 }
    ],
    solveTargets: ['CV', 'sigma', 'mu'],
    calculate: (inputs, target = 'CV') => {
      const { CV, sigma, mu } = inputs;
      let result, steps = [], unit = '';
      if (target === 'CV') {
        if (mu === 0) throw new Error('μ ≠ 0');
        result = (sigma / Math.abs(mu)) * 100;
        unit = '%';
        steps = [
          { title: 'สูตร CV', latex: 'CV = \\frac{\\sigma}{|\\mu|} \\times 100\\%', explanation: 'ส่วนเบี่ยงเบนมาตรฐานหารด้วยค่าเฉลี่ย absolut' },
          { title: 'ผลลัพธ์', latex: `CV = ${result.toFixed(4)}\\%`, explanation: `สัมประสิทธิ์ความแปรปรวนเท่ากับ ${result.toFixed(4)}%` }
        ];
      } else if (target === 'sigma') {
        result = (CV / 100) * Math.abs(mu);
        unit = '';
        steps = [
          { title: 'จัดรูปหา σ', latex: '\\sigma = \\frac{CV \\times |\\mu|}{100}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `\\sigma = ${result.toFixed(4)}`, explanation: `ส่วนเบี่ยงเบนมาตรฐานเท่ากับ ${result.toFixed(4)}` }
        ];
      } else {
        if (CV === 0) throw new Error('CV ≠ 0');
        result = (sigma * 100) / CV;
        unit = '';
        steps = [
          { title: 'จัดรูปหา μ', latex: '|\\mu| = \\frac{\\sigma \\times 100}{CV}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `\\mu = \\pm${result.toFixed(4)}`, explanation: `ค่าเฉลี่ยเท่ากับ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== FINANCE ====================
  {
    id: 'doubling_time_rule72',
    name: 'Doubling Time (Rule of 72)',
    nameTh: 'เวลาเพิ่มเป็น 2 เท่า (กฎ 72)',
    category: 'finance',
    categoryTh: 'คณิตศาสตร์การเงิน',
    icon: 'trending-up',
    grade: 'ม.4',
    latex: 't = \\frac{72}{r}',
    description: 'ประมาณเวลาที่เงินจะเพิ่มเป็น 2 เท่าจากร้อยละต่อปี (กฎ 72 ใช้ได้ดีกับอัตราร้อยละ 1-20%)',
    variables: [
      { id: 't', symbol: 't', name: 'Years', nameTh: 'จำนวนปี', unit: 'ปี', defaultValue: 7.2, min: 0.01, max: 1000, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Rate (%)', nameTh: 'อัตราดอกเบี้ย (%)', unit: '%', defaultValue: 10, min: 0.01, max: 100, step: 0.1 }
    ],
    solveTargets: ['t', 'r'],
    calculate: (inputs, target = 't') => {
      const { t, r } = inputs;
      let result, steps = [], unit = '';
      if (target === 't') {
        if (r === 0) throw new Error('r ≠ 0');
        result = 72 / r;
        unit = 'ปี';
        steps = [
          { title: 'กฎ 72', latex: 't = \\frac{72}{r}', explanation: 'หาร 72 ด้วยอัตราร้อยละต่อปี' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(4)}\\,\\text{ปี}`, explanation: `เงินจะเพิ่มเป็น 2 เท่าใน ${result.toFixed(4)} ปี` }
        ];
      } else {
        if (t === 0) throw new Error('t ≠ 0');
        result = 72 / t;
        unit = '%';
        steps = [
          { title: 'จัดรูปหาอัตรา', latex: 'r = \\frac{72}{t}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}\\%`, explanation: `อัตราดอกเบี้ยที่ต้องการเท่ากับ ${result.toFixed(4)}% ต่อปี` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'continuous_compound',
    name: 'Continuous Compound Interest',
    nameTh: 'ดอกเบี้ยทบต้นต่อเนื่อง',
    category: 'finance',
    categoryTh: 'คณิตศาสตร์การเงิน',
    icon: 'trending-up',
    grade: 'ม.5',
    latex: 'A = P \\cdot e^{rt}',
    description: 'มูลค่าเงินเมื่อทบต้นแบบต่อเนื่อง (n → ∞) e ≈ 2.71828',
    variables: [
      { id: 'A', symbol: 'A', name: 'Final Amount', nameTh: 'เงินรวม', unit: '฿', defaultValue: 16487, min: 0, max: 1e15, step: 100 },
      { id: 'P', symbol: 'P', name: 'Principal', nameTh: 'เงินต้น', unit: '฿', defaultValue: 10000, min: 1, max: 1e12, step: 100 },
      { id: 'r', symbol: 'r', name: 'Rate (decimal)', nameTh: 'อัตราดอกเบี้ย (ทศนิยม)', unit: '', defaultValue: 0.05, min: -1, max: 10, step: 0.001 },
      { id: 't', symbol: 't', name: 'Time (years)', nameTh: 'เวลา (ปี)', unit: 'ปี', defaultValue: 10, min: 0.01, max: 100, step: 0.5 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      const { P, r, t } = inputs;
      const result = P * Math.exp(r * t);
      const steps = [
        { title: 'สูตรดอกเบี้ยต่อเนื่อง', latex: 'A = P \\cdot e^{rt}', explanation: 'e ≈ 2.71828 (ค่าคงที่ของนอยเปอร์)' },
        { title: 'คำนวณexpectsponent', latex: `rt = ${r} \\times ${t} = ${(r * t).toFixed(4)}`, explanation: 'คูณอัตราดอกเบี้ยกับเวลา' },
        { title: 'ผลลัพธ์', latex: `A = ${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\,\\text{บาท}`, explanation: 'มูลค่าเงินรวมหลังดอกเบี้ยทบต้นต่อเนื่อง' }
      ];
      return { result, resultDisplay: `฿${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, unit: 'บาท', steps };
    }
  },

  // ==================== ECONOMICS ====================
  {
    id: 'real_interest_rate',
    name: 'Real Interest Rate',
    nameTh: 'อัตราดอกเบี้ยจริง',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'trending-up',
    grade: 'ม.5',
    latex: 'r_{real} = r_{nominal} - i',
    description: 'อัตราดอกเบี้ยจริงเท่ากับอัตราดอกเบี้ยนามธรรมลบอัตราเงินเฟ้อ (魚 fisher equation แบบง่าย)',
    variables: [
      { id: 'rReal', symbol: 'r_{real}', name: 'Real Rate', nameTh: 'อัตราดอกเบี้ยจริง', unit: '%', defaultValue: 2, min: -100, max: 100, step: 0.1 },
      { id: 'rNominal', symbol: 'r_{nominal}', name: 'Nominal Rate', nameTh: 'อัตราดอกเบี้ยนามธรรม', unit: '%', defaultValue: 5, min: -100, max: 100, step: 0.1 },
      { id: 'i', symbol: 'i', name: 'Inflation Rate', nameTh: 'อัตราเงินเฟ้อ', unit: '%', defaultValue: 3, min: -100, max: 100, step: 0.1 }
    ],
    solveTargets: ['rReal', 'rNominal', 'i'],
    calculate: (inputs, target = 'rReal') => {
      const { rReal, rNominal, i } = inputs;
      let result, steps = [], unit = '';
      if (target === 'rReal') {
        result = rNominal - i;
        unit = '%';
        steps = [
          { title: 'สูตรอัตราดอกเบี้ยจริง', latex: 'r_{real} = r_{nominal} - i', explanation: 'หักเงินเฟ้อออกจากอัตราดอกเบี้ย' },
          { title: 'ผลลัพธ์', latex: `r_{real} = ${result.toFixed(4)}\\%`, explanation: `อัตราดอกเบี้ยจริงเท่ากับ ${result.toFixed(4)}%` }
        ];
      } else if (target === 'rNominal') {
        result = rReal + i;
        unit = '%';
        steps = [
          { title: 'จัดรูปหาอัตราดอกเบี้ยนามธรรม', latex: 'r_{nominal} = r_{real} + i', explanation: 'บวกเงินเฟ้อกลับเข้าไป' },
          { title: 'ผลลัพธ์', latex: `r_{nominal} = ${result.toFixed(4)}\\%`, explanation: `อัตราดอกเบี้ยนามธรรมเท่ากับ ${result.toFixed(4)}%` }
        ];
      } else {
        result = rNominal - rReal;
        unit = '%';
        steps = [
          { title: 'จัดรูปหาอัตราเงินเฟ้อ', latex: 'i = r_{nominal} - r_{real}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `i = ${result.toFixed(4)}\\%`, explanation: `อัตราเงินเฟ้อเท่ากับ ${result.toFixed(4)}%` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'break_even_point',
    name: 'Break-Even Point',
    nameTh: 'จุดคุ้มทุน',
    category: 'economics',
    categoryTh: 'เศรษฐศาสตร์',
    icon: 'target',
    grade: 'ม.5',
    latex: 'BEP = \\frac{FC}{P - VC}',
    description: 'จำนวนหน่วยที่ต้องขายเพื่อให้ค่าใช้จ่ายรวมเท่ากับรายได้รวม (ไม่ขาดทุน ไม่กำไร)',
    variables: [
      { id: 'BEP', symbol: 'BEP', name: 'Break-Even Units', nameTh: 'จำนวนจุดคุ้มทุน', unit: 'หน่วย', defaultValue: 100, min: 0, max: 1e9, step: 1 },
      { id: 'FC', symbol: 'FC', name: 'Fixed Cost', nameTh: 'ต้นทุนคงที่', unit: '฿', defaultValue: 50000, min: 0, max: 1e12, step: 100 },
      { id: 'P', symbol: 'P', name: 'Price per Unit', nameTh: 'ราคาต่อหน่วย', unit: '฿', defaultValue: 1000, min: 0.01, max: 1e8, step: 10 },
      { id: 'VC', symbol: 'VC', name: 'Variable Cost per Unit', nameTh: 'ต้นทุนผันแปรต่อหน่วย', unit: '฿', defaultValue: 500, min: 0, max: 1e8, step: 10 }
    ],
    solveTargets: ['BEP', 'FC', 'P', 'VC'],
    calculate: (inputs, target = 'BEP') => {
      const { BEP, FC, P, VC } = inputs;
      let result, steps = [], unit = '';
      if (target === 'BEP') {
        if (P - VC === 0) throw new Error('ราคาขายต้องมากกว่าต้นทุนผันแปร');
        result = FC / (P - VC);
        unit = 'หน่วย';
        steps = [
          { title: 'สูตรจุดคุ้มทุน', latex: 'BEP = \\frac{FC}{P - VC}', explanation: 'ต้นทุนคงที่หารกำไรขั้นต้นต่อหน่วย' },
          { title: 'ผลลัพธ์', latex: `BEP = ${result.toFixed(2)}\\,\\text{หน่วย}`, explanation: `ต้องขาย ${result.toFixed(2)} หน่วยเพื่อจุดคุ้มทุน` }
        ];
      } else if (target === 'FC') {
        result = BEP * (P - VC);
        unit = '฿';
        steps = [
          { title: 'จัดรูปหาต้นทุนคงที่', latex: 'FC = BEP \\times (P - VC)', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `FC = ${result.toLocaleString()}\\,\\text{บาท}`, explanation: `ต้นทุนคงที่เท่ากับ ${result.toLocaleString()} บาท` }
        ];
      } else if (target === 'P') {
        if (BEP === 0) throw new Error('BEP ≠ 0');
        result = VC + FC / BEP;
        unit = '฿';
        steps = [
          { title: 'จัดรูปราคาขาย', latex: 'P = VC + \\frac{FC}{BEP}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(4)}\\,\\text{บาท}`, explanation: `ราคาขายต่อหน่วยเท่ากับ ${result.toFixed(4)} บาท` }
        ];
      } else {
        if (BEP === 0) throw new Error('BEP ≠ 0');
        result = P - FC / BEP;
        unit = '฿';
        steps = [
          { title: 'จัดรูปต้นทุนผันแปร', latex: 'VC = P - \\frac{FC}{BEP}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `VC = ${result.toFixed(4)}\\,\\text{บาท}`, explanation: `ต้นทุนผันแปรต่อหน่วยเท่ากับ ${result.toFixed(4)} บาท` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== HEALTH ====================
  {
    id: 'calories_from_macros',
    name: 'Calories from Macronutrients',
    nameTh: 'แคลอรีจากสารอาหารหลัก',
    category: 'health',
    categoryTh: 'สุขภาพ',
    icon: 'heart',
    grade: 'ม.4',
    latex: '\\text{Cal} = 4P + 4C + 9F',
    description: 'คำนวณแคลอรีรวมจากปริมาณโปรตีน คาร์โบไฮเดรต และไขมัน (P = 4 Cal/g, C = 4 Cal/g, F = 9 Cal/g)',
    variables: [
      { id: 'cal', symbol: 'Cal', name: 'Total Calories', nameTh: 'แคลอรีรวม', unit: 'Cal', defaultValue: 2270, min: 0, max: 1e7, step: 10 },
      { id: 'P', symbol: 'P', name: 'Protein (g)', nameTh: 'โปรตีน (กรัม)', unit: 'g', defaultValue: 150, min: 0, max: 1e5, step: 1 },
      { id: 'C', symbol: 'C', name: 'Carbs (g)', nameTh: 'คาร์โบไฮเดรต (กรัม)', unit: 'g', defaultValue: 250, min: 0, max: 1e5, step: 1 },
      { id: 'F', symbol: 'F', name: 'Fat (g)', nameTh: 'ไขมัน (กรัม)', unit: 'g', defaultValue: 70, min: 0, max: 1e5, step: 1 }
    ],
    solveTargets: ['cal'],
    calculate: (inputs) => {
      const { P, C, F } = inputs;
      const result = 4 * P + 4 * C + 9 * F;
      const proteinCal = 4 * P;
      const carbCal = 4 * C;
      const fatCal = 9 * F;
      const steps = [
        { title: 'สูตรคำนวณแคลอรี', latex: '\\text{Cal} = 4P + 4C + 9F', explanation: 'โปรตีน/คาร์บ 4 Cal/g, ไขมัน 9 Cal/g' },
        { title: 'แยกคำนวณ', latex: `4 \\times ${P} + 4 \\times ${C} + 9 \\times ${F} = ${proteinCal} + ${carbCal} + ${fatCal}`, explanation: 'คำนวณจากสารอาหารแต่ละชนิด' },
        { title: 'ผลลัพธ์', latex: `\\text{Total} = ${result}\\,\\text{Cal}`, explanation: `แคลอรีรวมเท่ากับ ${result} แคลอรี` }
      ];
      return { result, unit: 'Cal', steps };
    }
  },

  {
    id: 'target_heart_rate',
    name: 'Target Heart Rate Zone',
    nameTh: 'โซนอัตราการเต้นหัวใจเป้าหมาย',
    category: 'health',
    categoryTh: 'สุขภาพ',
    icon: 'activity',
    grade: 'ม.4',
    latex: 'THR = (HR_{max} - HR_{rest}) \\times \\%intensity + HR_{rest}',
    description: 'คำนวณโซนอัตราการเต้นหัวใจสำหรับออกกำลังกาย HR_max ≈ 220 − อายุ',
    variables: [
      { id: 'THR', symbol: 'THR', name: 'Target HR', nameTh: 'อัตราการเต้นเป้าหมาย', unit: 'bpm', defaultValue: 155, min: 40, max: 250, step: 1 },
      { id: 'age', symbol: 'age', name: 'Age', nameTh: 'อายุ', unit: 'ปี', defaultValue: 25, min: 10, max: 100, step: 1 },
      { id: 'restHR', symbol: 'HR_{rest}', name: 'Resting HR', nameTh: 'อัตราการเต้นพัก', unit: 'bpm', defaultValue: 60, min: 30, max: 120, step: 1 },
      { id: 'intensity', symbol: '\\%', name: 'Intensity', nameTh: 'ความเข้มข้น', unit: '%', defaultValue: 70, min: 30, max: 100, step: 5 }
    ],
    solveTargets: ['THR', 'age'],
    calculate: (inputs, target = 'THR') => {
      const { THR, age, restHR, intensity } = inputs;
      let result, steps = [], unit = '';
      if (target === 'THR') {
        const HRmax = 220 - age;
        const HRR = HRmax - restHR;
        result = HRR * (intensity / 100) + restHR;
        unit = 'bpm';
        steps = [
          { title: 'คำนวณ HR_max', latex: `HR_{max} = 220 - ${age} = ${HRmax}`, explanation: 'สูตรประมาณ HR_max จากอายุ' },
          { title: 'คำนวณ HR Reserve', latex: `HRR = ${HRmax} - ${restHR} = ${HRR}`, explanation: 'ช่วงหัวใจพักถึงสูงสุด' },
          { title: 'ผลลัพธ์', latex: `THR = ${HRR} \\times ${intensity}\\% + ${restHR} = ${result.toFixed(0)}\\,\\text{bpm}`, explanation: `โซนเป้าหมายเท่ากับ ${result.toFixed(0)} bpm` }
        ];
      } else {
        if (intensity === 0) throw new Error('intensity ≠ 0');
        const HRmax = 220 - age;
        const HRR = (THR - restHR) / (intensity / 100);
        result = 220 - (HRR + restHR);
        unit = 'ปี';
        steps = [
          { title: 'ประมาณอายุจาก THR', latex: 'age \\approx 220 - HR_{max}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `age \\approx ${result.toFixed(0)}\\,\\text{ปี}`, explanation: `อายุประมาณ ${result.toFixed(0)} ปี` }
        ];
      }
      return { result, unit, steps };
    }
  },

  // ==================== TECHNOLOGY ====================
  {
    id: 'file_size_lines',
    name: 'Text File Size',
    nameTh: 'ขนาดไฟล์ข้อความ',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'file-text',
    grade: 'ม.2',
    latex: '\\text{Size (bytes)} = \\text{lines} \\times \\text{avgChars} \\times \\text{bytesPerChar}',
    description: 'คำนวณขนาดไฟล์ข้อความจากจำนวนบรรทัด ความยาวเฉลี่ย และจำนวนไบต์ต่ออักขระ',
    variables: [
      { id: 'sizeBytes', symbol: 'S', name: 'Size (bytes)', nameTh: 'ขนาด (ไบต์)', unit: 'bytes', defaultValue: 10240, min: 0, max: 1e15, step: 1 },
      { id: 'lines', symbol: 'L', name: 'Lines', nameTh: 'จำนวนบรรทัด', unit: '', defaultValue: 512, min: 0, max: 1e10, step: 1 },
      { id: 'avgChars', symbol: 'C', name: 'Avg chars/line', nameTh: 'อักขระเฉลี่ยต่อบรรทัด', unit: '', defaultValue: 10, min: 0, max: 10000, step: 1 },
      { id: 'bytesPerChar', symbol: 'B', name: 'Bytes/char', nameTh: 'ไบต์ต่ออักขระ', unit: '', defaultValue: 2, min: 1, max: 4, step: 1 }
    ],
    solveTargets: ['sizeBytes', 'lines', 'avgChars'],
    calculate: (inputs, target = 'sizeBytes') => {
      const { sizeBytes, lines, avgChars, bytesPerChar } = inputs;
      let result, steps = [], unit = '';
      if (target === 'sizeBytes') {
        result = lines * avgChars * bytesPerChar;
        unit = 'bytes';
        steps = [
          { title: 'สูตรขนาดไฟล์', latex: 'S = L \\times C \\times B', explanation: 'จำนวนบรรทัด × อักขระเฉลี่ย × ไบต์ต่ออักขระ' },
          { title: 'ผลลัพธ์', latex: `S = ${result.toLocaleString()}\\,\\text{bytes}`, explanation: `ขนาดไฟล์เท่ากับ ${result.toLocaleString()} ไบต์` }
        ];
      } else if (target === 'lines') {
        if (avgChars * bytesPerChar === 0) throw new Error('C × B ≠ 0');
        result = Math.ceil(sizeBytes / (avgChars * bytesPerChar));
        unit = '';
        steps = [
          { title: 'จัดรูปหาจำนวนบรรทัด', latex: 'L = \\lceil \\frac{S}{C \\times B} \\rceil', explanation: 'ย้ายข้างและปัดขึ้น' },
          { title: 'ผลลัพธ์', latex: `L = ${result.toLocaleString()}`, explanation: `จำนวนบรรทัดเท่ากับ ${result.toLocaleString()} บรรทัด` }
        ];
      } else {
        if (lines * bytesPerChar === 0) throw new Error('L × B ≠ 0');
        result = sizeBytes / (lines * bytesPerChar);
        unit = '';
        steps = [
          { title: 'จัดรูปหาอักขระเฉลี่ย', latex: 'C = \\frac{S}{L \\times B}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `C = ${result.toFixed(4)}`, explanation: `อักขระเฉลี่ยต่อบรรทัดเท่ากับ ${result.toFixed(4)} ตัว` }
        ];
      }
      return { result, unit, steps };
    }
  },

  {
    id: 'power_consumption_kwh',
    name: 'Energy Consumption (kWh)',
    nameTh: 'การใช้พลังงานไฟฟ้า (หน่วย)',
    category: 'tech',
    categoryTh: 'เทคโนโลยีดิจิทัล',
    icon: 'zap',
    grade: 'ม.2',
    latex: 'E = \\frac{W \\cdot h}{1000}',
    description: 'คำนวณการใช้ไฟฟ้าเป็นหน่วย (กิโลวัตต์-ชั่วโมง) จากกำลังไฟฟ้าและเวลาใช้งาน',
    variables: [
      { id: 'E', symbol: 'E', name: 'Energy (kWh)', nameTh: 'พลังงาน (หน่วย)', unit: 'kWh', defaultValue: 0.6, min: 0, max: 1e6, step: 0.01 },
      { id: 'W', symbol: 'W', name: 'Power (W)', nameTh: 'กำลังไฟฟ้า (วัตต์)', unit: 'W', defaultValue: 60, min: 0, max: 1e7, step: 1 },
      { id: 'h', symbol: 'h', name: 'Hours', nameTh: 'ชั่วโมงใช้งาน', unit: 'ชม.', defaultValue: 10, min: 0, max: 1e6, step: 0.5 }
    ],
    solveTargets: ['E', 'W', 'h'],
    calculate: (inputs, target = 'E') => {
      const { E, W, h } = inputs;
      let result, steps = [], unit = '';
      if (target === 'E') {
        result = (W * h) / 1000;
        unit = 'kWh';
        steps = [
          { title: 'สูตรหน่วยไฟฟ้า', latex: 'E = \\frac{W \\times h}{1000}', explanation: 'กำลังคูณเวลาหาร 1000 = 1 หน่วย' },
          { title: 'ผลลัพธ์', latex: `E = ${result.toFixed(4)}\\,\\text{kWh}`, explanation: `การใช้ไฟฟ้าเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'W') {
        if (h === 0) throw new Error('h ≠ 0');
        result = (E * 1000) / h;
        unit = 'W';
        steps = [
          { title: 'จัดรูปหากำลังไฟฟ้า', latex: 'W = \\frac{E \\times 1000}{h}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `W = ${result.toFixed(4)}\\,\\text{W}`, explanation: `กำลังไฟฟ้าเท่ากับ ${result.toFixed(4)} วัตต์` }
        ];
      } else {
        if (W === 0) throw new Error('W ≠ 0');
        result = (E * 1000) / W;
        unit = 'ชม.';
        steps = [
          { title: 'จัดรูปหาเวลา', latex: 'h = \\frac{E \\times 1000}{W}', explanation: 'ย้ายข้าง' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(4)}\\,\\text{ชม.}`, explanation: `เวลาใช้งานเท่ากับ ${result.toFixed(4)} ชั่วโมง` }
        ];
      }
      return { result, unit, steps };
    }
  }
];
