// @ts-nocheck

/**
 * General/Modern Physics Formulas (ฟิสิกส์: ของเหลว นิวเคลียร์ โฟตอน) - ม.4 - ม.6
 */

export const GENERAL_PHYSICS_FORMULAS = [
  {
    id: 'density',
    name: 'Density (ρ = m/V)',
    nameTh: 'ความหนาแน่น (ρ = m/V)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'scaling',
    grade: 'ม.1-4',
    latex: '\\rho = \\frac{m}{V}',
    description: 'ความหนาแน่น = มวล ÷ ปริมาตร เช่น ทองเหลือง หรือ น้ำ (1,000 kg/m³) ใช้แยกสารว่าลอยหรือจม',
    variables: [
      { id: 'density', symbol: '\\rho', name: 'Density', nameTh: 'ความหนาแน่น (ρ)', unit: 'kg/m³', defaultValue: 1000, min: 0, max: 1e15, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล (m)', unit: 'kg', defaultValue: 250, min: 0, max: 1e15, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร (V)', unit: 'm³', defaultValue: 0.25, min: 0.0000001, max: 1e15, step: 0.001 }
    ],
    solveTargets: ['density', 'm', 'V'],
    calculate: (inputs, target = 'density') => {
      let { density: d, m, V } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'density') {
        result = m / V;
        steps = [
          { title: 'สูตรความหนาแน่น', latex: '\\rho = \\frac{m}{V}', explanation: 'มวลหารปริมาตร' },
          { title: 'แทนค่า', latex: `\\rho = \\frac{${m}}{${V}}`, explanation: `m = ${m} kg, V = ${V} m³` },
          { title: 'ผลลัพธ์', latex: `\\rho = ${result.toFixed(2)} \\ \\text{kg/m}^3`, explanation: `ความหนาแน่นเท่ากับ ${result.toFixed(2)} kg/m³` }
        ];
      } else if (target === 'm') {
        result = d * V;
        steps = [
          { title: 'จัดรูปหามวล', latex: 'm = \\rho V', explanation: 'ความหนาแน่นคูณปริมาตร' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(2)} \\ \\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(2)} กิโลกรัม` }
        ];
      } else if (target === 'V') {
        if (d === 0) throw new Error('ความหนาแน่นต้องไม่เป็น 0');
        result = m / d;
        steps = [
          { title: 'จัดรูปหาปริมาตร', latex: 'V = \\frac{m}{\\rho}', explanation: 'มวลหารความหนาแน่น' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} m³` }
        ];
      }

      return { result, unit: target === 'density' ? 'kg/m³' : target === 'm' ? 'kg' : 'm³', steps };
    }
  },

  {
    id: 'fluid_pressure',
    name: 'Fluid Pressure (P = ρgh)',
    nameTh: 'ความดันของเหลว (P = ρgh)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'droplet',
    grade: 'ม.4',
    latex: 'P = \\rho g h',
    description: 'ความดัน ณ ความลึก h ในของเหลว = ความหนาแน่น × g × ความลึก เช่น การดำน้ำลึก 10 เมตรในน้ำ (ρ=1000) ได้ความดัน 98,100 Pa',
    variables: [
      { id: 'P', symbol: 'P', name: 'Fluid Pressure', nameTh: 'ความดันของเหลว (P)', unit: 'Pa', defaultValue: 98100, min: 0, max: 1e15, step: 0.1 },
      { id: 'rho', symbol: '\\rho', name: 'Fluid Density', nameTh: 'ความหนาแน่นของเหลว (ρ)', unit: 'kg/m³', defaultValue: 1000, min: 0.0001, max: 1e9, step: 1 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง (g)', unit: 'm/s²', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Depth', nameTh: 'ความลึก (h)', unit: 'm', defaultValue: 10, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['P', 'h', 'rho'],
    calculate: (inputs, target = 'P') => {
      let { P, rho, g, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = rho * g * h;
        steps = [
          { title: 'สูตรความดันของเหลว', latex: 'P = \\rho g h', explanation: `ρ = ${rho}, g = ${g}, h = ${h} m` },
          { title: 'แทนค่า', latex: `P = ${rho} \\times ${g} \\times ${h} = ${(rho * g).toFixed(2)} \\times ${h}`, explanation: 'คูณ ρ·g แล้วคูณความลึก' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(1)} \\ \\text{Pa}`, explanation: `ความดันเท่ากับ ${result.toFixed(0)} ปาสคาล` }
        ];
      } else if (target === 'h') {
        const denom = rho * g;
        if (denom === 0) throw new Error('ρ·g ต้องไม่เป็น 0');
        result = P / denom;
        steps = [
          { title: 'จัดรูปหาความลึก', latex: 'h = \\frac{P}{\\rho g}', explanation: 'ความดันหารผลคูณ ρ·g' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(2)} \\ \\text{m}`, explanation: `ความลึกเท่ากับ ${result.toFixed(2)} เมตร` }
        ];
      } else if (target === 'rho') {
        const denom = g * h;
        if (denom === 0) throw new Error('g·h ต้องไม่เป็น 0');
        result = P / denom;
        steps = [
          { title: 'จัดรูปหาความหนาแน่น', latex: '\\rho = \\frac{P}{g h}', explanation: 'ความดันหารผลคูณ g·h' },
          { title: 'ผลลัพธ์', latex: `\\rho = ${result.toFixed(2)} \\ \\text{kg/m}^3`, explanation: `ความหนาแน่นเท่ากับ ${result.toFixed(2)} kg/m³` }
        ];
      }

      return { result, unit: target === 'rho' ? 'kg/m³' : target === 'h' ? 'm' : 'Pa', steps };
    }
  },

  {
    id: 'buoyant_force',
    name: 'Buoyant Force (F_b = ρVg)',
    nameTh: 'แรงพยุง (F_b = ρVg) / หลักอาร์คิมิดีส',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'waves',
    grade: 'ม.4',
    latex: 'F_b = \\rho_{fl} V g',
    description: 'แรงพยุงของของเหลว = ความหนาแน่นของเหลว × ปริมาตรส่วนจม × g ตามหลักอาร์คิมิดีส ใช้ทำไมเรือเหล็กจึงลอยน้ำได้',
    variables: [
      { id: 'Fb', symbol: 'F_b', name: 'Buoyant Force', nameTh: 'แรงพยุง (F_b)', unit: 'N', defaultValue: 98.1, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'rho', symbol: '\\rho', name: 'Fluid Density', nameTh: 'ความหนาแน่นของเหลว (ρ)', unit: 'kg/m³', defaultValue: 1000, min: 0.0001, max: 1e9, step: 1 },
      { id: 'V', symbol: 'V', name: 'Submerged Volume', nameTh: 'ปริมาตรส่วนจม (V)', unit: 'm³', defaultValue: 0.01, min: 0.0000001, max: 1e9, step: 0.0001 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง (g)', unit: 'm/s²', defaultValue: 9.81, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['Fb', 'V', 'rho'],
    calculate: (inputs, target = 'Fb') => {
      let { Fb, rho, V, g } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Fb') {
        result = rho * V * g;
        steps = [
          { title: 'หลักอาร์คิมิดีส', latex: 'F_b = \\rho_{fl} V g', explanation: `ρ = ${rho}, V = ${V} m³, g = ${g}` },
          { title: 'แทนค่า', latex: `F_b = ${rho} \\times ${V} \\times ${g}`, explanation: 'คูณความหนาแน่น ปริมาตร และ g' },
          { title: 'ผลลัพธ์', latex: `F_b = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงพยุงเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'V') {
        const denom = rho * g;
        if (denom === 0) throw new Error('ρ·g ต้องไม่เป็น 0');
        result = Fb / denom;
        steps = [
          { title: 'จัดรูปหาปริมาตรส่วนจม', latex: 'V = \\frac{F_b}{\\rho g}', explanation: 'แรงพยุงหารผลคูณ ρ·g' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `ปริมาตรส่วนจมเท่ากับ ${result.toFixed(4)} m³` }
        ];
      } else if (target === 'rho') {
        const denom = V * g;
        if (denom === 0) throw new Error('V·g ต้องไม่เป็น 0');
        result = Fb / denom;
        steps = [
          { title: 'จัดรูปหาความหนาแน่นของเหลว', latex: '\\rho = \\frac{F_b}{V g}', explanation: 'แรงพยุงหารผลคูณ V·g' },
          { title: 'ผลลัพธ์', latex: `\\rho = ${result.toFixed(2)} \\ \\text{kg/m}^3`, explanation: `ความหนาแน่นเท่ากับ ${result.toFixed(2)} kg/m³` }
        ];
      }

      return { result, unit: target === 'rho' ? 'kg/m³' : target === 'V' ? 'm³' : 'N', steps };
    }
  },

  {
    id: 'pressure_force',
    name: 'Pressure on Area (P = F/A)',
    nameTh: 'ความดัน (P = F/A)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'columns-2',
    grade: 'ม.3-4',
    latex: 'P = \\frac{F}{A}',
    description: 'ความดัน = แรงตั้งฉาก ÷ พื้นที่รับแรง เช่น เท้าของช้างที่เหยียบพื้น หรือของมีคม (พื้นน้อย → ความดันมาก)',
    variables: [
      { id: 'P', symbol: 'P', name: 'Pressure', nameTh: 'ความดัน (P)', unit: 'Pa', defaultValue: 50000, min: -1e15, max: 1e15, step: 0.1 },
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'แรงตั้งฉาก (F)', unit: 'N', defaultValue: 1000, min: 0, max: 1e15, step: 0.1 },
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่รับแรง (A)', unit: 'm²', defaultValue: 0.02, min: 0.0000001, max: 1e9, step: 0.0001 }
    ],
    solveTargets: ['P', 'F', 'A'],
    calculate: (inputs, target = 'P') => {
      let { P, F, A } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = F / A;
        steps = [
          { title: 'สูตรความดัน', latex: 'P = \\frac{F}{A}', explanation: 'แรงตั้งฉากหารพื้นที่' },
          { title: 'แทนค่า', latex: `P = \\frac{${F}}{${A}}`, explanation: `F = ${F} N, A = ${A} m²` },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(2)} \\ \\text{Pa}`, explanation: `ความดันเท่ากับ ${result.toFixed(2)} ปาสคาล` }
        ];
      } else if (target === 'F') {
        result = P * A;
        steps = [
          { title: 'จัดรูปหาแรง', latex: 'F = P \\cdot A', explanation: 'ความดันคูณพื้นที่' },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'A') {
        if (P === 0) throw new Error('ความดัน P ต้องไม่เป็น 0');
        result = F / P;
        steps = [
          { title: 'จัดรูปหาพื้นที่', latex: 'A = \\frac{F}{P}', explanation: 'แรงหารความดัน' },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)} \\ \\text{m}^2`, explanation: `พื้นที่เท่ากับ ${result.toFixed(4)} m²` }
        ];
      }

      return { result, unit: target === 'A' ? 'm²' : target === 'F' ? 'N' : 'Pa', steps };
    }
  },

  {
    id: 'escape_velocity',
    name: 'Escape Velocity',
    nameTh: 'ความเร็วหลุดพ้น (Escape Velocity)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'rocket',
    grade: 'ม.6',
    latex: 'v_{esc} = \\sqrt{\\frac{2GM}{R}}',
    description: 'ความเร็วขั้นต่ำที่วัตถุต้องมีเพื่อหลุดพ้นแรงโน้มถ่วงของดาวเคราะห์ เช่น สนามของโลก ≈ 11.2 km/s',
    variables: [
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'ค่าคงที่โน้มถ่วง G', unit: 'N·m²/kg²', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Planet Mass', nameTh: 'มวลของดาว (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'R', symbol: 'R', name: 'Radius from Center', nameTh: 'รัศมีจากศูนย์กลาง (R)', unit: 'm', defaultValue: 6.371e6, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['result'],
    calculate: (inputs) => {
      let { G, M, R } = inputs;
      const result = Math.sqrt((2 * G * M) / R);
      const steps = [
        { title: 'สูตรความเร็วหลุดพ้น', latex: 'v_{esc} = \\sqrt{\\frac{2GM}{R}}', explanation: `G = ${G.toExponential(2)}, M = ${M.toExponential(2)}, R = ${R.toExponential(2)}` },
        { title: 'แทนค่า', latex: `v_{esc} = \\sqrt{\\frac{2(${G})(${M})}{${R}}`, explanation: `คำนวณ 2GM/R = ${(2 * G * M / R).toExponential(3)}` },
        { title: 'ผลลัพธ์', latex: `v_{esc} = ${result.toFixed(0)} \\ \\text{m/s} \\; (${(result / 1000).toFixed(1)} \\ \\text{km/s})`, explanation: `ความเร็วหลุดพ้นเท่ากับ ${(result / 1000).toFixed(1)} km/s` }
      ];
      return { result, resultDisplay: `${(result / 1000).toFixed(2)} km/s`, unit: 'm/s', steps };
    }
  },

  {
    id: 'half_life',
    name: 'Radioactive Decay (Half-Life)',
    nameTh: 'การสลายกัมมันตรังสี (ครึ่งชีวิต)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'atom',
    grade: 'ม.4-6',
    latex: 'N = N_0 \\left(\\frac{1}{2}\\right)^{t/T}',
    description: 'ปริมาณสารกัมมันตรังสีที่เหลือหลังเวลา t = เริ่มต้น × (1/2)^(t/T) โดย T คือครึ่งชีวิต เช่น คาร์บอน-14 (T ≈ 5730 ปี)',
    variables: [
      { id: 'N', symbol: 'N', name: 'Remaining Amount', nameTh: 'ปริมาณที่เหลือ (N)', unit: 'หน่วย', defaultValue: 25, min: 0, max: 1e30, step: 1 },
      { id: 'N0', symbol: 'N_0', name: 'Initial Amount', nameTh: 'ปริมาณเริ่มต้น (N₀)', unit: 'หน่วย', defaultValue: 100, min: 0.0000001, max: 1e30, step: 1 },
      { id: 't', symbol: 't', name: 'Elapsed Time', nameTh: 'เวลาที่ผ่านไป (t)', unit: 'ปี/หน่วยเวลา', defaultValue: 11460, min: 0, max: 1e15, step: 1 },
      { id: 'T', symbol: 'T', name: 'Half-Life', nameTh: 'ครึ่งชีวิต (T)', unit: 'หน่วยเวลา', defaultValue: 5730, min: 0.0000001, max: 1e15, step: 1 }
    ],
    solveTargets: ['N', 't', 'T'],
    calculate: (inputs, target = 'N') => {
      let { N, N0, t, T } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'N') {
        result = N0 * Math.pow(0.5, t / T);
        steps = [
          { title: 'สูตรการสลาย', latex: 'N = N_0 \\left(\\frac{1}{2}\\right)^{t/T}', explanation: `N₀ = ${N0}, t = ${t}, T = ${T}` },
          { title: 'คำนวณเลขชี้กำลัง', latex: `\\frac{t}{T} = \\frac{${t}}{${T}} = ${(t / T).toFixed(4)}`, explanation: 'จำนวนครึ่งชีวิตที่ผ่าน' },
          { title: 'ผลลัพธ์', latex: `N = ${N0} \\times 0.5^{${(t / T).toFixed(3)}} = ${result.toFixed(4)}`, explanation: `เหลือ ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 't') {
        if (N <= 0 || N0 <= 0) throw new Error('N และ N₀ ต้องเป็นบวก');
        result = T * (Math.log(N / N0) / Math.log(0.5));
        steps = [
          { title: 'จัดรูปแบบเวลา', latex: 't = T \\cdot \\frac{\\ln(N/N_0)}{\\ln(0.5)}', explanation: 'ใช้ลอการิทึมแก้เลขชี้กำลัง' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(2)} \\ \\text{หน่วยเวลา}`, explanation: `ใช้เวลา ${result.toFixed(2)} หน่วยเวลา` }
        ];
      } else if (target === 'T') {
        if (t === 0 || N0 <= 0) throw new Error('t ต้องไม่เป็น 0 และ N₀ ต้องเป็นบวก');
        if (N <= 0) throw new Error('N ต้องเป็นบวก');
        result = t / (Math.log(N0 / N) / Math.log(2));
        steps = [
          { title: 'จัดรูปหาครึ่งชีวิต', latex: 'T = \\frac{t}{\\log_2(N_0/N)}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `T = ${result.toFixed(2)} \\ \\text{หน่วยเวลา}`, explanation: `ครึ่งชีวิตเท่ากับ ${result.toFixed(2)} หน่วยเวลา` }
        ];
      }

      return { result, unit: target === 'N' ? 'หน่วย' : 'หน่วยเวลา', steps };
    }
  },

  {
    id: 'decay_constant',
    name: 'Decay Constant (λ = ln2/T)',
    nameTh: 'ค่าคงที่การสลาย (λ = ln2/T)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'atom',
    grade: 'ม.6',
    latex: '\\lambda = \\frac{\\ln 2}{T}',
    description: 'ค่าคงที่การสลายสัมพันธ์กับครึ่งชีวิตโดย λ = ln2/Th เช่น คาร์บอน-14 (T=5730 ปี) มี λ ≈ 1.21×10⁻⁴ /ปี',
    variables: [
      { id: 'lambda', symbol: '\\lambda', name: 'Decay Constant', nameTh: 'ค่าคงที่การสลาย (λ)', unit: '1/หน่วยเวลา', defaultValue: 0.000121, min: 0.0000000001, max: 1000, step: 0 },
      { id: 'T', symbol: 'T', name: 'Half-Life', nameTh: 'ครึ่งชีวิต (T)', unit: 'หน่วยเวลา', defaultValue: 5730, min: 0.0000001, max: 1e15, step: 1 }
    ],
    solveTargets: ['lambda', 'T'],
    calculate: (inputs, target = 'lambda') => {
      let { lambda, T } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'lambda') {
        result = Math.LN2 / T;
        steps = [
          { title: 'สูตรค่าคงที่การสลาย', latex: '\\lambda = \\frac{\\ln 2}{T}', explanation: `T = ${T}` },
          { title: 'แทนค่า', latex: `\\lambda = \\frac{0.6931}{${T}}`, explanation: 'ln2 ≈ 0.6931' },
          { title: 'ผลลัพธ์', latex: `\\lambda = ${result.toExponential(4)} \\ \\text{/หน่วยเวลา}`, explanation: `ค่าคงที่การสลายเท่ากับ ${result.toExponential(4)} ต่อหน่วยเวลา` }
        ];
      } else if (target === 'T') {
        if (lambda === 0) throw new Error('λ ต้องไม่เป็น 0');
        result = Math.LN2 / lambda;
        steps = [
          { title: 'จัดรูปหาครึ่งชีวิต', latex: 'T = \\frac{\\ln 2}{\\lambda}', explanation: `λ = ${lambda}` },
          { title: 'ผลลัพธ์', latex: `T = ${result.toFixed(2)} \\ \\text{หน่วยเวลา}`, explanation: `ครึ่งชีวิตเท่ากับ ${result.toFixed(2)} หน่วยเวลา` }
        ];
      }

      return { result, unit: target === 'lambda' ? '1/หน่วยเวลา' : 'หน่วยเวลา', steps };
    }
  },

  {
    id: 'photon_energy',
    name: 'Photon Energy (E = hf)',
    nameTh: 'พลังงานโฟตอน (E = hf)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'sun',
    grade: 'ม.6',
    latex: 'E = hf',
    description: 'พลังงานของโฟตอน = ค่าคงที่พลังค์ (h) × ความถี่ เช่น แสงเขียว f=5.5×10¹⁴ Hz มีพลังงาน ≈ 3.64×10⁻¹⁹ J',
    variables: [
      { id: 'E', symbol: 'E', name: 'Photon Energy', nameTh: 'พลังงานโฟตอน (E)', unit: 'J', defaultValue: 3.645e-19, min: 1e-28, max: 10, step: 0 },
      { id: 'h', symbol: 'h', name: "Planck's Constant", nameTh: 'ค่าคงที่พลังค์ (h)', unit: 'J·s', defaultValue: 6.626e-34, min: 1e-38, max: 1e-25, step: 0 },
      { id: 'f', symbol: 'f', name: 'Frequency', nameTh: 'ความถี่ (f)', unit: 'Hz', defaultValue: 5.5e14, min: 1e3, max: 1e27, step: 0 }
    ],
    solveTargets: ['E', 'f'],
    calculate: (inputs, target = 'E') => {
      let { E, h, f } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'E') {
        result = h * f;
        steps = [
          { title: 'สูตรพลังงานโฟตอน', latex: 'E = hf', explanation: `h = ${h.toExponential(2)}, f = ${f.toExponential(2)} Hz` },
          { title: 'แทนค่า', latex: `E = (${h}) \\times (${f})`, explanation: 'ค่าคงที่พลังค์คูณความถี่' },
          { title: 'ผลลัพธ์', latex: `E = ${result.toExponential(4)} \\ \\text{J} \\; (${(result / 1.602e-19).toFixed(2)} \\ \\text{eV})`, explanation: `พลังงานเท่ากับ ${result.toExponential(3)} จูล หรือ ${(result / 1.602e-19).toFixed(2)} eV` }
        ];
      } else if (target === 'f') {
        if (h === 0) throw new Error('h ต้องไม่เป็น 0');
        result = E / h;
        steps = [
          { title: 'จัดรูปหาความถี่', latex: 'f = \\frac{E}{h}', explanation: 'พลังงานหารค่าคงที่พลังค์' },
          { title: 'ผลลัพธ์', latex: `f = ${result.toExponential(4)} \\ \\text{Hz}`, explanation: `ความถี่เท่ากับ ${result.toExponential(3)} เฮิรตซ์` }
        ];
      }

      return { result, unit: target === 'f' ? 'Hz' : 'J', steps };
    }
  },

  {
    id: 'photon_wavelength',
    name: 'Photon Wavelength (E = hc/λ)',
    nameTh: 'ความยาวคลื่นโฟตอน (E = hc/λ)',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'sun',
    grade: 'ม.6',
    latex: 'E = \\frac{hc}{\\lambda}',
    description: 'พลังงานโฟตอนจากความยาวคลื่น E = hc/λ เช่น โฟตอนแดง λ=700 nm มีพลังงาน ≈ 2.84×10⁻¹⁹ J',
    variables: [
      { id: 'E', symbol: 'E', name: 'Photon Energy', nameTh: 'พลังงานโฟตอน (E)', unit: 'J', defaultValue: 2.84e-19, min: 1e-28, max: 10, step: 0 },
      { id: 'h', symbol: 'h', name: "Planck's Constant", nameTh: 'ค่าคงที่พลังค์ (h)', unit: 'J·s', defaultValue: 6.626e-34, min: 1e-38, max: 1e-25, step: 0 },
      { id: 'c', symbol: 'c', name: 'Speed of Light', nameTh: 'ความเร็วแสง (c)', unit: 'm/s', defaultValue: 3e8, min: 1e6, max: 1e10, step: 0 },
      { id: 'wavelength', symbol: '\\lambda', name: 'Wavelength', nameTh: 'ความยาวคลื่น (λ)', unit: 'm', defaultValue: 7e-7, min: 1e-15, max: 10, step: 0 }
    ],
    solveTargets: ['E', 'wavelength'],
    calculate: (inputs, target = 'E') => {
      let { E, h, c, wavelength } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'E') {
        result = (h * c) / wavelength;
        steps = [
          { title: 'สูตรพลังงานโฟตอนจากความยาวคลื่น', latex: 'E = \\frac{hc}{\\lambda}', explanation: `h = ${h.toExponential(2)}, c = ${c.toExponential(2)}, λ = ${wavelength.toExponential(2)} m (${(wavelength * 1e9).toFixed(0)} nm)` },
          { title: 'แทนค่า', latex: `E = \\frac{(${h})(${c})}{${wavelength}}`, explanation: 'คูณ h·c แล้วหารความยาวคลื่น' },
          { title: 'ผลลัพธ์', latex: `E = ${result.toExponential(4)} \\ \\text{J}`, explanation: `พลังงานเท่ากับ ${result.toExponential(3)} จูล` }
        ];
      } else if (target === 'wavelength') {
        if (E === 0) throw new Error('พลังงาน E ต้องไม่เป็น 0');
        result = (h * c) / E;
        steps = [
          { title: 'จัดรูปหาความยาวคลื่น', latex: '\\lambda = \\frac{hc}{E}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `\\lambda = ${result.toExponential(4)} \\ \\text{m} \\; (${(result * 1e9).toFixed(1)} \\ \\text{nm})`, explanation: `ความยาวคลื่นเท่ากับ ${(result * 1e9).toFixed(1)} นาโนเมตร` }
        ];
      }

      return { result, unit: target === 'wavelength' ? 'm' : 'J', steps };
    }
  }
];