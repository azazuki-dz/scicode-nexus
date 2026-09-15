/**
 * Mechanics Formulas (ฟิสิกส์: กลศาสตร์) - ม.4
 */

export const MECHANICS_FORMULAS = [
  {
    id: 'final_velocity',
    name: 'Final Velocity (v = u + at)',
    nameTh: 'ความเร็วปลาย (v = u + at)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'zap',
    grade: 'ม.4',
    latex: 'v = u + at',
    description: 'ความเร็วปลายจากการเคลื่อนที่ด้วยความเร่งคงที่ = ความเร็วต้น + (ความเร่ง × เวลา) เช่น รถเร่งจาก 0 ถึง 20 m/s ใน 4 วินาที',
    variables: [
      { id: 'v', symbol: 'v', name: 'Final Velocity', nameTh: 'ความเร็วปลาย (v)', unit: 'm/s', defaultValue: 20, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Initial Velocity', nameTh: 'ความเร็วต้น (u)', unit: 'm/s', defaultValue: 0, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'ความเร่ง (a)', unit: 'm/s²', defaultValue: 5, min: -1e9, max: 1e9, step: 0.1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เวลา (t)', unit: 's', defaultValue: 4, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['v', 'u', 'a', 't'],
    calculate: (inputs, target = 'v') => {
      let { v, u, a, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        result = u + a * t;
        steps = [
          { title: 'สูตรความเร็วปลาย', latex: 'v = u + at', explanation: `u = ${u}, a = ${a}, t = ${t}` },
          { title: 'แทนค่า', latex: `v = ${u} + (${a} \\times ${t}) = ${u} + ${a * t}`, explanation: 'ความเร็วต้นบวกความเร่งคูณเวลา' },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `ความเร็วปลายเท่ากับ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'u') {
        result = v - a * t;
        steps = [
          { title: 'จัดรูปหาความเร็วต้น', latex: 'u = v - at', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `u = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `ความเร็วต้นเท่ากับ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'a') {
        if (t === 0) throw new Error('เวลา t ต้องไม่เป็น 0');
        result = (v - u) / t;
        steps = [
          { title: 'จัดรูปหาความเร่ง', latex: 'a = \\frac{v - u}{t}', explanation: 'ผลต่างความเร็วหารเวลา' },
          { title: 'ผลลัพธ์', latex: `a = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `ความเร่งเท่ากับ ${result.toFixed(2)} m/s²` }
        ];
      } else if (target === 't') {
        if (a === 0) throw new Error('ความเร่ง a ต้องไม่เป็น 0');
        result = (v - u) / a;
        steps = [
          { title: 'จัดรูปแบบ', latex: 't = \\frac{v - u}{a}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `ใช้เวลา ${result.toFixed(2)} วินาที` }
        ];
      }

      return { result, unit: target === 'a' ? 'm/s²' : target === 't' ? 's' : 'm/s', steps };
    }
  },

  {
    id: 'velocity_squared',
    name: 'Velocity-Displacement (v² = u² + 2as)',
    nameTh: 'ความเร็ว-ระยะทาง (v² = u² + 2as)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'zap',
    grade: 'ม.4',
    latex: 'v^2 = u^2 + 2as',
    description: 'สัมพันธ์ความเร็วปลาย ความเร็วต้น ความเร่ง และระยะทางที่เคลื่อนที่ได้ ใช้เมื่อโจทย์ไม่ให้เวลา เช่น รถเบรกจาก 20 m/s หยุดใน 40 m',
    variables: [
      { id: 'v', symbol: 'v', name: 'Final Velocity', nameTh: 'ความเร็วปลาย (v)', unit: 'm/s', defaultValue: 0, min: 0, max: 1e9, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Initial Velocity', nameTh: 'ความเร็วต้น (u)', unit: 'm/s', defaultValue: 20, min: 0, max: 1e9, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'ความเร่ง (a)', unit: 'm/s²', defaultValue: -5, min: -1e9, max: 1e9, step: 0.1 },
      { id: 's', symbol: 's', name: 'Displacement', nameTh: 'ระยะทาง (s)', unit: 'm', defaultValue: 40, min: -1e15, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['v', 'u', 'a', 's'],
    calculate: (inputs, target = 'v') => {
      let { v, u, a, s } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        const rad = u * u + 2 * a * s;
        if (rad < 0) throw new Error('ค่าภายใต้รากเป็นลบ ข้อมูลไม่สอดคล้องกัน');
        result = Math.sqrt(rad);
        steps = [
          { title: 'สูตรความเร็ว-ระยะทาง', latex: 'v^2 = u^2 + 2as', explanation: `u = ${u}, a = ${a}, s = ${s}` },
          { title: 'แทนค่า', latex: `v^2 = ${u}^2 + 2(${a})(${s}) = ${rad.toFixed(2)}`, explanation: 'คำนวณค่าภายใต้ราก' },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `ความเร็วปลายเท่ากับ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'u') {
        const rad = v * v - 2 * a * s;
        if (rad < 0) throw new Error('ค่าภายใต้รากเป็นลบ ข้อมูลไม่สอดคล้องกัน');
        result = Math.sqrt(rad);
        steps = [
          { title: 'จัดรูปหาความเร็วต้น', latex: 'u^2 = v^2 - 2as', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `u = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `ความเร็วต้นเท่ากับ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 'a') {
        if (s === 0) throw new Error('ระยะทาง s ต้องไม่เป็น 0');
        result = (v * v - u * u) / (2 * s);
        steps = [
          { title: 'จัดรูปหาความเร่ง', latex: 'a = \\frac{v^2 - u^2}{2s}', explanation: 'ผลต่างกำลังสองความเร็วหาร 2 เท่าระยะทาง' },
          { title: 'ผลลัพธ์', latex: `a = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `ความเร่งเท่ากับ ${result.toFixed(2)} m/s²` }
        ];
      } else if (target === 's') {
        if (a === 0) throw new Error('ความเร่ง a ต้องไม่เป็น 0');
        result = (v * v - u * u) / (2 * a);
        steps = [
          { title: 'จัดรูประยะทาง', latex: 's = \\frac{v^2 - u^2}{2a}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `s = ${result.toFixed(2)} \\ \\text{m}`, explanation: `ระยะทางเท่ากับ ${result.toFixed(2)} เมตร` }
        ];
      }

      return { result, unit: target === 'a' ? 'm/s²' : target === 's' ? 'm' : 'm/s', steps };
    }
  },

  {
    id: 'average_speed',
    name: 'Average Speed',
    nameTh: 'อัตราเร็วเฉลี่ย',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'gauge',
    grade: 'ม.4',
    latex: 'v = \\frac{s}{t}',
    description: 'อัตราเร็วเฉลี่ย = ระยะทาง ÷ เวลา เช่น วิ่ง 100 เมตรใน 20 วินาที มีอัตราเร็วเฉลี่ย 5 m/s',
    variables: [
      { id: 'v', symbol: 'v', name: 'Average Speed', nameTh: 'อัตราเร็วเฉลี่ย', unit: 'm/s', defaultValue: 5, min: 0, max: 1e9, step: 0.1 },
      { id: 's', symbol: 's', name: 'Distance', nameTh: 'ระยะทาง (s)', unit: 'm', defaultValue: 100, min: 0, max: 1e15, step: 0.1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เวลา (t)', unit: 's', defaultValue: 20, min: 0.0000001, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['v', 's', 't'],
    calculate: (inputs, target = 'v') => {
      let { v, s, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        result = s / t;
        steps = [
          { title: 'สูตรอัตราเร็วเฉลี่ย', latex: 'v = \\frac{s}{t}', explanation: 'ระยะทางหารเวลา' },
          { title: 'แทนค่า', latex: `v = \\frac{${s}}{${t}}`, explanation: `s = ${s} m, t = ${t} s` },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(2)} \\ \\text{m/s}`, explanation: `อัตราเร็วเฉลี่ยเท่ากับ ${result.toFixed(2)} m/s` }
        ];
      } else if (target === 's') {
        result = v * t;
        steps = [
          { title: 'จัดรูประยะทาง', latex: 's = v \\cdot t', explanation: 'อัตราเร็วคูณเวลา' },
          { title: 'ผลลัพธ์', latex: `s = ${result.toFixed(2)} \\ \\text{m}`, explanation: `ระยะทางเท่ากับ ${result.toFixed(2)} เมตร` }
        ];
      } else if (target === 't') {
        if (v === 0) throw new Error('อัตราเร็ว v ต้องไม่เป็น 0');
        result = s / v;
        steps = [
          { title: 'จัดรูปแบบ', latex: 't = \\frac{s}{v}', explanation: 'ระยะทางหารอัตราเร็ว' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `ใช้เวลา ${result.toFixed(2)} วินาที` }
        ];
      }

      return { result, unit: target === 's' ? 'm' : target === 't' ? 's' : 'm/s', steps };
    }
  },

  {
    id: 'weight_force',
    name: 'Weight (W = mg)',
    nameTh: 'น้ำหนัก (W = mg)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'scaling',
    grade: 'ม.1-4',
    latex: 'W = mg',
    description: 'น้ำหนักคือแรงโน้มถ่วงที่กระทำต่อมวล = มวล × ความเร่งโน้มถ่วง (g ≈ 9.81 m/s² บนโลก) คน 70 กก. หนัก 686.7 N',
    variables: [
      { id: 'W', symbol: 'W', name: 'Weight', nameTh: 'น้ำหนัก (W)', unit: 'N', defaultValue: 686.7, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล (m)', unit: 'kg', defaultValue: 70, min: 0, max: 1e15, step: 0.1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง (g)', unit: 'm/s²', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['W', 'm', 'g'],
    calculate: (inputs, target = 'W') => {
      let { W, m, g } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'W') {
        result = m * g;
        steps = [
          { title: 'สูตรน้ำหนัก', latex: 'W = mg', explanation: `m = ${m} kg, g = ${g} m/s²` },
          { title: 'แทนค่า', latex: `W = ${m} \\times ${g}`, explanation: 'มวลคูณความเร่งโน้มถ่วง' },
          { title: 'ผลลัพธ์', latex: `W = ${result.toFixed(2)} \\ \\text{N}`, explanation: `น้ำหนักเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'm') {
        if (g === 0) throw new Error('g ต้องไม่เป็น 0');
        result = W / g;
        steps = [
          { title: 'จัดรูปหามวล', latex: 'm = \\frac{W}{g}', explanation: 'น้ำหนักหาร g' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(2)} \\ \\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(2)} กิโลกรัม` }
        ];
      } else if (target === 'g') {
        if (m === 0) throw new Error('มวล m ต้องไม่เป็น 0');
        result = W / m;
        steps = [
          { title: 'จัดรูปหา g', latex: 'g = \\frac{W}{m}', explanation: 'น้ำหนักหารมวล' },
          { title: 'ผลลัพธ์', latex: `g = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `ความเร่งโน้มถ่วงเท่ากับ ${result.toFixed(2)} m/s²` }
        ];
      }

      return { result, unit: target === 'm' ? 'kg' : target === 'g' ? 'm/s²' : 'N', steps };
    }
  },

  {
    id: 'friction_force',
    name: 'Friction Force (f = μN)',
    nameTh: 'แรงเสียดทาน (f = μN)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'grip',
    grade: 'ม.4',
    latex: 'f = \\mu N',
    description: 'แรงเสียดทาน = สัมประสิทธิ์แรงเสียดทาน × แรงปฏิกิริยาตั้งฉาก (N) ซึ่งโดยปกติเท่ากับน้ำหนักบนพื้นราบ เช่น กล่อง 10 kg μ=0.3',
    variables: [
      { id: 'f', symbol: 'f', name: 'Friction Force', nameTh: 'แรงเสียดทาน (f)', unit: 'N', defaultValue: 29.43, min: 0, max: 1e12, step: 0.1 },
      { id: 'mu', symbol: '\\mu', name: 'Friction Coefficient', nameTh: 'สัมประสิทธิ์ความเสียดทาน (μ)', unit: '', defaultValue: 0.3, min: 0, max: 100, step: 0.01 },
      { id: 'N', symbol: 'N', name: 'Normal Force', nameTh: 'แรงปฏิกิริยาตั้งฉาก (N)', unit: 'N', defaultValue: 98.1, min: 0, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['f', 'mu', 'N'],
    calculate: (inputs, target = 'f') => {
      let { f, mu, N } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'f') {
        result = mu * N;
        steps = [
          { title: 'สูตรแรงเสียดทาน', latex: 'f = \\mu N', explanation: `μ = ${mu}, N = ${N} N` },
          { title: 'แทนค่า', latex: `f = ${mu} \\times ${N}`, explanation: 'สัมประสิทธิ์คูณแรงปฏิกิริยาตั้งฉาก' },
          { title: 'ผลลัพธ์', latex: `f = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงเสียดทานเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'mu') {
        if (N === 0) throw new Error('แรง N ต้องไม่เป็น 0');
        result = f / N;
        steps = [
          { title: 'จัดรูปหาสัมประสิทธิ์', latex: '\\mu = \\frac{f}{N}', explanation: 'แรงเสียดทานหารแรงตั้งฉาก' },
          { title: 'ผลลัพธ์', latex: `\\mu = ${result.toFixed(4)}`, explanation: `สัมประสิทธิ์ความเสียดทานเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'N') {
        if (mu === 0) throw new Error('μ ต้องไม่เป็น 0');
        result = f / mu;
        steps = [
          { title: 'จัดรูปหาค่า N', latex: 'N = \\frac{f}{\\mu}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `N = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงปฏิกิริยาตั้งฉากเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      }

      return { result, unit: target === 'mu' ? '' : 'N', steps };
    }
  },

  {
    id: 'hookes_law',
    name: "Hooke's Law (F = kx)",
    nameTh: 'กฎของฮุค (F = kx)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'wrench',
    grade: 'ม.4',
    latex: 'F = kx',
    description: 'แรงที่สปริงออก = ค่าคงที่สปริง × ระยะยืด/หด ใช้กับสปริงในย่านที่ยังไม่เกินขีดจำกัดความยืดหยุ่น',
    variables: [
      { id: 'F', symbol: 'F', name: 'Spring Force', nameTh: 'แรงสปริง (F)', unit: 'N', defaultValue: 50, min: -1e9, max: 1e9, step: 0.1 },
      { id: 'k', symbol: 'k', name: 'Spring Constant', nameTh: 'ค่าคงที่สปริง (k)', unit: 'N/m', defaultValue: 250, min: 0, max: 1e12, step: 0.1 },
      { id: 'x', symbol: 'x', name: 'Displacement', nameTh: 'ระยะยืด/หด (x)', unit: 'm', defaultValue: 0.2, min: -1e9, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['F', 'k', 'x'],
    calculate: (inputs, target = 'F') => {
      let { F, k, x } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = k * x;
        steps = [
          { title: "กฎของฮุค", latex: 'F = kx', explanation: `k = ${k} N/m, x = ${x} m` },
          { title: 'แทนค่า', latex: `F = ${k} \\times ${x}`, explanation: 'ค่าคงที่สปริงคูณระยะยืด' },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงสปริงเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'k') {
        if (x === 0) throw new Error('ระยะยืด x ต้องไม่เป็น 0');
        result = F / x;
        steps = [
          { title: 'จัดรูปหาค่าคงที่สปริง', latex: 'k = \\frac{F}{x}', explanation: 'แรงหารระยะยืด' },
          { title: 'ผลลัพธ์', latex: `k = ${result.toFixed(2)} \\ \\text{N/m}`, explanation: `ค่าคงที่สปริงเท่ากับ ${result.toFixed(2)} N/m` }
        ];
      } else if (target === 'x') {
        if (k === 0) throw new Error('k ต้องไม่เป็น 0');
        result = F / k;
        steps = [
          { title: 'จัดรูประยะยืด', latex: 'x = \\frac{F}{k}', explanation: 'แรงหารค่าคงที่สปริง' },
          { title: 'ผลลัพธ์', latex: `x = ${result.toFixed(3)} \\ \\text{m}`, explanation: `ระยะยืดเท่ากับ ${result.toFixed(3)} เมตร` }
        ];
      }

      return { result, unit: target === 'k' ? 'N/m' : target === 'x' ? 'm' : 'N', steps };
    }
  },

  {
    id: 'torque',
    name: 'Torque (τ = rF sinθ)',
    nameTh: 'โมเมนต์ของแรง / ทอร์ก (τ = rF sinθ)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'refresh-ccw',
    grade: 'ม.4',
    latex: '\\tau = rF \\sin\\theta',
    description: 'โมเมนต์ของแรง = แขนโมเมนต์ × แรง × sin(มุมระหว่างแขนกับแรง) ใช้เปิดประตู เช่น แรง 20 N แขน 0.8 m ตั้งฉาก',
    variables: [
      { id: 'tau', symbol: '\\tau', name: 'Torque', nameTh: 'โมเมนต์ของแรง (τ)', unit: 'N·m', defaultValue: 16, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Lever Arm', nameTh: 'แขนโมเมนต์ (r)', unit: 'm', defaultValue: 0.8, min: 0, max: 1e9, step: 0.01 },
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'แรง (F)', unit: 'N', defaultValue: 20, min: 0, max: 1e12, step: 0.1 },
      { id: 'theta', symbol: '\\theta', name: 'Angle (deg)', nameTh: 'มุมระหว่าง r กับ F (องศา)', unit: '°', defaultValue: 90, min: 0, max: 180, step: 1 }
    ],
    solveTargets: ['tau', 'r', 'F', 'theta'],
    calculate: (inputs, target = 'tau') => {
      let { tau, r, F, theta } = inputs;
      const rad = theta * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'tau') {
        result = r * F * Math.sin(rad);
        steps = [
          { title: 'สูตรโมเมนต์ของแรง', latex: '\\tau = rF \\sin\\theta', explanation: `r = ${r} m, F = ${F} N, θ = ${theta}°` },
          { title: 'แทนค่า', latex: `\\tau = ${r} \\times ${F} \\times \\sin(${theta}°) = ${r * F} \\times ${Math.sin(rad).toFixed(4)}`, explanation: `sin(${theta}°) = ${Math.sin(rad).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `\\tau = ${result.toFixed(2)} \\ \\text{N·m}`, explanation: `โมเมนต์ของแรงเท่ากับ ${result.toFixed(2)} นิวตัน·เมตร` }
        ];
      } else if (target === 'r') {
        const denom = F * Math.sin(rad);
        if (denom === 0) throw new Error('F·sinθ ต้องไม่เป็น 0');
        result = tau / denom;
        steps = [
          { title: 'จัดรูปหาแขนโมเมนต์', latex: 'r = \\frac{\\tau}{F \\sin\\theta}', explanation: 'ทอร์กหารผลคูณของแรงและ sinθ' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(2)} \\ \\text{m}`, explanation: `แขนโมเมนต์เท่ากับ ${result.toFixed(2)} เมตร` }
        ];
      } else if (target === 'F') {
        const denom = r * Math.sin(rad);
        if (denom === 0) throw new Error('r·sinθ ต้องไม่เป็น 0');
        result = tau / denom;
        steps = [
          { title: 'จัดรูปหาแรง', latex: 'F = \\frac{\\tau}{r \\sin\\theta}', explanation: 'ทอร์กหารผลคูณของแขนและ sinθ' },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'theta') {
        const denom = r * F;
        if (denom === 0) throw new Error('r·F ต้องไม่เป็น 0');
        const x = tau / denom;
        if (Math.abs(x) > 1) throw new Error('ข้อมูลไม่สอดคล้อง (τ/(rF) เกิน 1)');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม', latex: '\\sin\\theta = \\frac{\\tau}{rF}', explanation: 'ใช้ฟังก์ชันอาร์กไซน์' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(1)}°`, explanation: `มุมเท่ากับ ${result.toFixed(1)} องศา (มีอีกค่าที่เป็น 180° − ${result.toFixed(1)}°)` }
        ];
      }

      return { result, unit: target === 'theta' ? '°' : target === 'r' ? 'm' : target === 'F' ? 'N' : 'N·m', steps };
    }
  },

  {
    id: 'lever_balance',
    name: 'Lever Balance (F₁d₁ = F₂d₂)',
    nameTh: 'สมดุลคาน (F₁d₁ = F₂d₂)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'scales',
    grade: 'ม.2-4',
    latex: 'F_1 d_1 = F_2 d_2',
    description: 'คานหมุนรอบจุดหมุนจะสมดุลเมื่อ โมเมนต์ทวนเข็มนาฬิกา = โมเมนต์ตามเข็มนาฬิกา ใช้ในเครื่องชั่งและคานงัด',
    variables: [
      { id: 'F1', symbol: 'F_1', name: 'Force 1', nameTh: 'แรงที่ 1 (F₁)', unit: 'N', defaultValue: 30, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'd1', symbol: 'd_1', name: 'Arm 1', nameTh: 'แขนที่ 1 (d₁)', unit: 'm', defaultValue: 0.4, min: 0, max: 1e9, step: 0.01 },
      { id: 'F2', symbol: 'F_2', name: 'Force 2', nameTh: 'แรงที่ 2 (F₂)', unit: 'N', defaultValue: 12, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'd2', symbol: 'd_2', name: 'Arm 2', nameTh: 'แขนที่ 2 (d₂)', unit: 'm', defaultValue: 1, min: 0, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['F1', 'd1', 'F2', 'd2'],
    calculate: (inputs, target = 'F2') => {
      let { F1, d1, F2, d2 } = inputs;
      let steps = [];
      let result = 0;

      const buildSteps = (solvar, latexExpr, val) => [
        { title: 'หลักสมดุลของคาน', latex: 'F_1 d_1 = F_2 d_2', explanation: 'โมเมนต์สองข้างต้องเท่ากัน' },
        { title: 'แทนค่า', latex: latexExpr, explanation: `ผลคูณฝั่งตรงข้าม = ${val.toFixed(2)}` },
        { title: 'ผลลัพธ์', latex: `${solvar} = ${val.toFixed(2)}`, explanation: `ค่า${solvar.replace('_', '').toUpperCase()} เท่ากับ ${val.toFixed(2)}` }
      ];

      if (target === 'F2') {
        if (d2 === 0) throw new Error('แขน d₂ ต้องไม่เป็น 0');
        result = (F1 * d1) / d2;
        steps = buildSteps('F_2', `F_2 = \\frac{${F1} \\times ${d1}}{${d2}}`, result);
      } else if (target === 'F1') {
        if (d1 === 0) throw new Error('แขน d₁ ต้องไม่เป็น 0');
        result = (F2 * d2) / d1;
        steps = buildSteps('F_1', `F_1 = \\frac{${F2} \\times ${d2}}{${d1}}`, result);
      } else if (target === 'd1') {
        if (F1 === 0) throw new Error('แรง F₁ ต้องไม่เป็น 0');
        result = (F2 * d2) / F1;
        steps = buildSteps('d_1', `d_1 = \\frac{${F2} \\times ${d2}}{${F1}}`, result);
      } else if (target === 'd2') {
        if (F2 === 0) throw new Error('แรง F₂ ต้องไม่เป็น 0');
        result = (F1 * d1) / F2;
        steps = buildSteps('d_2', `d_2 = \\frac{${F1} \\times ${d1}}{${F2}}`, result);
      }

      return { result, unit: target.startsWith('d') ? 'm' : 'N', steps };
    }
  },

  {
    id: 'impulse',
    name: 'Impulse (I = FΔt)',
    nameTh: 'โมเมนตัม (แรงดล I = FΔt = Δp)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'zap',
    grade: 'ม.4',
    latex: 'I = F \\Delta t = \\Delta p',
    description: 'แรงดล = แรง × ระยะเวลา = โมเมนตัมที่เปลี่ยนไป เช่น ตีลูกเทนนิสด้วยแรง 80 N นาน 0.05 s ได้แรงดล 4 N·s',
    variables: [
      { id: 'I', symbol: 'I', name: 'Impulse', nameTh: 'แรงดล (I)', unit: 'N·s', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'แรง (F)', unit: 'N', defaultValue: 80, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'dt', symbol: '\\Delta t', name: 'Time Interval', nameTh: 'ช่วงเวลา (Δt)', unit: 's', defaultValue: 0.05, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['I', 'F', 'dt'],
    calculate: (inputs, target = 'I') => {
      let { I, F, dt } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'I') {
        result = F * dt;
        steps = [
          { title: 'สูตรแรงดล', latex: 'I = F \\Delta t', explanation: `F = ${F} N, Δt = ${dt} s` },
          { title: 'แทนค่า', latex: `I = ${F} \\times ${dt}`, explanation: 'แรงคูณช่วงเวลา' },
          { title: 'ผลลัพธ์', latex: `I = ${result.toFixed(2)} \\ \\text{N·s}`, explanation: `แรงดลเท่ากับ ${result.toFixed(2)} N·s (เท่ากับโมเมนตัมที่เปลี่ยนไป)` }
        ];
      } else if (target === 'F') {
        result = I / dt;
        steps = [
          { title: 'จัดรูปหาแรง', latex: 'F = \\frac{I}{\\Delta t}', explanation: 'แรงดลหารช่วงเวลา' },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'dt') {
        if (F === 0) throw new Error('แรง F ต้องไม่เป็น 0');
        result = I / F;
        steps = [
          { title: 'จัดรูปแบบเวลา', latex: '\\Delta t = \\frac{I}{F}', explanation: 'แรงดลหารแรง' },
          { title: 'ผลลัพธ์', latex: `\\Delta t = ${result.toFixed(4)} \\ \\text{s}`, explanation: `ช่วงเวลาเท่ากับ ${result.toFixed(4)} วินาที` }
        ];
      }

      return { result, unit: target === 'F' ? 'N' : target === 'dt' ? 's' : 'N·s', steps };
    }
  },

  {
    id: 'pendulum_period',
    name: 'Pendulum Period (T = 2π√(L/g))',
    nameTh: 'คาบของลูกตุ้ม (T = 2π√(L/g))',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'clock',
    grade: 'ม.4',
    latex: 'T = 2\\pi \\sqrt{\\frac{L}{g}}',
    description: 'คาบการแกว่งของลูกตุ้มอย่างง่าย ขึ้นกับความยาวเชือก (L) และ g เท่านั้น ไม่ขึ้นกับมวลหรือมุมที่แกว่งเล็กๆ',
    variables: [
      { id: 'T', symbol: 'T', name: 'Period', nameTh: 'คาบการแกว่ง (T)', unit: 's', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'L', symbol: 'L', name: 'Pendulum Length', nameTh: 'ความยาวเชือก (L)', unit: 'm', defaultValue: 0.994, min: 0.0001, max: 1e7, step: 0.01 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง (g)', unit: 'm/s²', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['T', 'L', 'g'],
    calculate: (inputs, target = 'T') => {
      let { T, L, g } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'T') {
        result = 2 * Math.PI * Math.sqrt(L / g);
        steps = [
          { title: 'สูตรคาบลูกตุ้ม', latex: 'T = 2\\pi \\sqrt{\\frac{L}{g}}', explanation: `L = ${L} m, g = ${g} m/s²` },
          { title: 'แทนค่า', latex: `T = 2\\pi \\sqrt{\\frac{${L}}{${g}}}`, explanation: `√(L/g) = ${Math.sqrt(L / g).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `T = ${result.toFixed(3)} \\ \\text{s}`, explanation: `คาบการแกว่งเท่ากับ ${result.toFixed(3)} วินาที` }
        ];
      } else if (target === 'L') {
        result = g * Math.pow(T / (2 * Math.PI), 2);
        steps = [
          { title: 'จัดรูปหาความยาวเชือก', latex: 'L = g\\left(\\frac{T}{2\\pi}\\right)^2', explanation: `T = ${T} s, g = ${g}` },
          { title: 'ผลลัพธ์', latex: `L = ${result.toFixed(3)} \\ \\text{m}`, explanation: `ความยาวเชือกเท่ากับ ${result.toFixed(3)} เมตร` }
        ];
      } else if (target === 'g') {
        if (T === 0) throw new Error('คาบ T ต้องไม่เป็น 0');
        result = L * Math.pow(2 * Math.PI / T, 2);
        steps = [
          { title: 'จัดรูปหา g', latex: 'g = L\\left(\\frac{2\\pi}{T}\\right)^2', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `g = ${result.toFixed(3)} \\ \\text{m/s}^2`, explanation: `ความเร่งโน้มถ่วงเท่ากับ ${result.toFixed(3)} m/s²` }
        ];
      }

      return { result, unit: target === 'L' ? 'm' : target === 'g' ? 'm/s²' : 's', steps };
    }
  },


  {
    id: 'gravitational_pe',
    name: 'Gravitational Potential Energy',
    nameTh: 'พลังงานศักย์โน้มถ่วง',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'arrow-up',
    grade: 'ม.4',
    latex: 'PE = mgh',
    description: 'พลังงานศักย์โน้มถ่วง = มวล·ความเร่งโน้มถ่วง·ความสูง เช่น m=5 kg, h=10 m ได้ 490.5 จูล',
    variables: [
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล (m)', unit: 'kg', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง (g)', unit: 'm/s²', defaultValue: 9.81, min: 0.0001, max: 100, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง (h)', unit: 'm', defaultValue: 10, min: 0, max: 1e7, step: 0.1 },
      { id: 'PE', symbol: 'PE', name: 'Potential Energy', nameTh: 'พลังงานศักย์', unit: 'J', defaultValue: 490.5, min: 0, max: 1e18, step: 1 }
    ],
    solveTargets: ['PE', 'm', 'g', 'h'],
    calculate: (inputs, target = 'PE') => {
      const { m, g, h, PE } = inputs;
      let result, steps;
      if (target === 'PE') {
        result = m * g * h;
        steps = [
          { title: 'สูตร', latex: 'PE = mgh', explanation: `m = ${m} kg, g = ${g} m/s², h = ${h} m` },
          { title: 'แทนค่า', latex: `PE = ${m} \\times ${g} \\times ${h}`, explanation: 'แทนค่าทั้งสามตัว' },
          { title: 'ผลลัพธ์', latex: `PE = ${result.toFixed(2)} \\ \\text{J}`, explanation: `พลังงานศักย์เท่ากับ ${result.toFixed(2)} จูล` }
        ];
      } else if (target === 'm') {
        if (g === 0 || h === 0) throw new Error('g และ h ต้องไม่เป็น 0');
        result = PE / (g * h);
        steps = [
          { title: 'จัดรูปหา m', latex: 'm = \\frac{PE}{gh}', explanation: `PE = ${PE} J, g = ${g}, h = ${h}` },
          { title: 'ผลลัพธ์', latex: `m = \\frac{${PE}}{${g} \\times ${h}} = ${result.toFixed(3)} \\ \\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(3)} kg` }
        ];
      } else if (target === 'g') {
        if (m === 0 || h === 0) throw new Error('m และ h ต้องไม่เป็น 0');
        result = PE / (m * h);
        steps = [
          { title: 'จัดรูปหา g', latex: 'g = \\frac{PE}{mh}', explanation: `PE = ${PE} J, m = ${m}, h = ${h}` },
          { title: 'ผลลัพธ์', latex: `g = \\frac{${PE}}{${m} \\times ${h}} = ${result.toFixed(3)} \\ \\text{m/s}^2`, explanation: `ความเร่งโน้มถ่วงเท่ากับ ${result.toFixed(3)} m/s²` }
        ];
      } else {
        if (m === 0 || g === 0) throw new Error('m และ g ต้องไม่เป็น 0');
        result = PE / (m * g);
        steps = [
          { title: 'จัดรูปหา h', latex: 'h = \\frac{PE}{mg}', explanation: `PE = ${PE} J, m = ${m}, g = ${g}` },
          { title: 'ผลลัพธ์', latex: `h = \\frac{${PE}}{${m} \\times ${g}} = ${result.toFixed(3)} \\ \\text{m}`, explanation: `ความสูงเท่ากับ ${result.toFixed(3)} m` }
        ];
      }
      return { result, unit: target === 'PE' ? 'J' : target === 'm' ? 'kg' : target === 'g' ? 'm/s²' : 'm', steps };
    }
  },

  {
    id: 'spring_energy',
    name: 'Spring Potential Energy',
    nameTh: 'พลังงานศักย์สปริง',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'activity',
    grade: 'ม.5',
    latex: 'E = \\frac{1}{2}kx^2',
    description: 'พลังงานศักย์ยืดหยุ่น = ½·ค่าคงที่สปริง(k)·ระยะยืด²(x²) เช่น k=200 N/m, x=0.3 m ได้ 9 จูล',
    variables: [
      { id: 'k', symbol: 'k', name: 'Spring Constant', nameTh: 'ค่าคงที่สปริง (k)', unit: 'N/m', defaultValue: 200, min: 0.0001, max: 1e9, step: 1 },
      { id: 'x', symbol: 'x', name: 'Displacement', nameTh: 'ระยะยืด/หด (x)', unit: 'm', defaultValue: 0.3, min: 0, max: 1e6, step: 0.01 },
      { id: 'E', symbol: 'E', name: 'Spring Energy', nameTh: 'พลังงานศักย์สปริง', unit: 'J', defaultValue: 9, min: 0, max: 1e18, step: 0.1 }
    ],
    solveTargets: ['E', 'k', 'x'],
    calculate: (inputs, target = 'E') => {
      const { k, x, E } = inputs;
      let result, steps;
      if (target === 'E') {
        result = 0.5 * k * x * x;
        steps = [
          { title: 'สูตร', latex: 'E = \\frac{1}{2}kx^2', explanation: `k = ${k} N/m, x = ${x} m` },
          { title: 'แทนค่า', latex: `E = \\frac{1}{2} \\times ${k} \\times ${x}^2`, explanation: 'แทนค่าคงที่สปริงและระยะยืด' },
          { title: 'ผลลัพธ์', latex: `E = ${result.toFixed(3)} \\ \\text{J}`, explanation: `พลังงานศักย์สปริงเท่ากับ ${result.toFixed(3)} จูล` }
        ];
      } else if (target === 'k') {
        if (x === 0) throw new Error('ระยะ x ต้องไม่เป็น 0');
        result = (2 * E) / (x * x);
        steps = [
          { title: 'จัดรูปหา k', latex: 'k = \\frac{2E}{x^2}', explanation: `E = ${E} J, x = ${x} m` },
          { title: 'ผลลัพธ์', latex: `k = \\frac{2 \\times ${E}}{${x}^2} = ${result.toFixed(3)} \\ \\text{N/m}`, explanation: `ค่าคงที่สปริงเท่ากับ ${result.toFixed(3)} N/m` }
        ];
      } else {
        if (k === 0) throw new Error('ค่าคงที่สปริง k ต้องไม่เป็น 0');
        result = Math.sqrt((2 * E) / k);
        steps = [
          { title: 'จัดรูปหา x', latex: 'x = \\sqrt{\\frac{2E}{k}}', explanation: `E = ${E} J, k = ${k} N/m` },
          { title: 'ผลลัพธ์', latex: `x = \\sqrt{\\frac{2 \\times ${E}}{${k}}} = ${result.toFixed(3)} \\ \\text{m}`, explanation: `ระยะยืดเท่ากับ ${result.toFixed(3)} m` }
        ];
      }
      return { result, unit: target === 'E' ? 'J' : target === 'k' ? 'N/m' : 'm', steps };
    }
  },

  {
    id: 'mechanical_power',
    name: 'Mechanical Power',
    nameTh: 'กำลังกล',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'cpu',
    grade: 'ม.4',
    latex: 'P = \\frac{W}{t}',
    description: 'กำลัง = งาน(W)/เวลา(t) เช่น งาน 500 จูล ใน 10 วินาที ได้กำลัง 50 วัตต์',
    variables: [
      { id: 'W', symbol: 'W', name: 'Work', nameTh: 'งาน (W)', unit: 'J', defaultValue: 500, min: 0, max: 1e15, step: 1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เวลา (t)', unit: 's', defaultValue: 10, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'กำลัง (P)', unit: 'W', defaultValue: 50, min: 0, max: 1e15, step: 0.1 }
    ],
    solveTargets: ['P', 'W', 't'],
    calculate: (inputs, target = 'P') => {
      const { W, t, P } = inputs;
      let result, steps;
      if (target === 'P') {
        result = W / t;
        steps = [
          { title: 'สูตร', latex: 'P = \\frac{W}{t}', explanation: `W = ${W} J, t = ${t} s` },
          { title: 'แทนค่า', latex: `P = \\frac{${W}}{${t}}`, explanation: 'งานหารเวลาที่ใช้' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(3)} \\ \\text{W}`, explanation: `กำลังเท่ากับ ${result.toFixed(3)} วัตต์` }
        ];
      } else if (target === 'W') {
        result = P * t;
        steps = [
          { title: 'จัดรูปหา W', latex: 'W = P \\times t', explanation: `P = ${P} W, t = ${t} s` },
          { title: 'ผลลัพธ์', latex: `W = ${P} \\times ${t} = ${result.toFixed(3)} \\ \\text{J}`, explanation: `งานเท่ากับ ${result.toFixed(3)} จูล` }
        ];
      } else {
        if (P === 0) throw new Error('กำลัง P ต้องไม่เป็น 0');
        result = W / P;
        steps = [
          { title: 'จัดรูปหา t', latex: 't = \\frac{W}{P}', explanation: `W = ${W} J, P = ${P} W` },
          { title: 'ผลลัพธ์', latex: `t = \\frac{${W}}{${P}} = ${result.toFixed(3)} \\ \\text{s}`, explanation: `เวลาเท่ากับ ${result.toFixed(3)} วินาที` }
        ];
      }
      return { result, unit: target === 'P' ? 'W' : target === 'W' ? 'J' : 's', steps };
    }
  },


];