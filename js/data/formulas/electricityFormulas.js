/**
 * Electricity & Magnetism Formulas (ฟิสิกส์: ไฟฟ้า แม่เหล็ก) - ม.3 - ม.6
 */

export const ELECTRICITY_FORMULAS = [
  {
    id: 'power_voltage_current',
    name: 'Electric Power (P = VI)',
    nameTh: 'กำลังไฟฟ้า (P = VI)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'zap',
    grade: 'ม.3-5',
    latex: 'P = VI',
    description: 'กำลังไฟฟ้า = ความต่างศักย์ × กระแส เช่น เตารีด 220 V ใช้กระแส 10 A มีกำลัง 2,200 วัตต์',
    variables: [
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'กำลังไฟฟ้า (P)', unit: 'W', defaultValue: 2200, min: 0, max: 1e12, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Voltage', nameTh: 'ความต่างศักย์ (V)', unit: 'V', defaultValue: 220, min: 0, max: 1e9, step: 0.1 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'กระแสไฟฟ้า (I)', unit: 'A', defaultValue: 10, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['P', 'V', 'I'],
    calculate: (inputs, target = 'P') => {
      let { P, V, I } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'P') {
        result = V * I;
        steps = [
          { title: 'สูตรกำลังไฟฟ้า', latex: 'P = VI', explanation: `V = ${V} V, I = ${I} A` },
          { title: 'แทนค่า', latex: `P = ${V} \\times ${I}`, explanation: 'ความต่างศักย์คูณกระแส' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(2)} \\ \\text{W}`, explanation: `กำลังไฟฟ้าเท่ากับ ${result.toFixed(2)} วัตต์` }
        ];
      } else if (target === 'V') {
        if (I === 0) throw new Error('กระแส I ต้องไม่เป็น 0');
        result = P / I;
        steps = [
          { title: 'จัดรูปหาความต่างศักย์', latex: 'V = \\frac{P}{I}', explanation: 'กำลังหารกระแส' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(2)} \\ \\text{V}`, explanation: `ความต่างศักย์เท่ากับ ${result.toFixed(2)} โวลต์` }
        ];
      } else if (target === 'I') {
        if (V === 0) throw new Error('ความต่างศักย์ V ต้องไม่เป็น 0');
        result = P / V;
        steps = [
          { title: 'จัดรูปหากระแส', latex: 'I = \\frac{P}{V}', explanation: 'กำลังหารความต่างศักย์' },
          { title: 'ผลลัพธ์', latex: `I = ${result.toFixed(2)} \\ \\text{A}`, explanation: `กระแสเท่ากับ ${result.toFixed(2)} แอมแปร์` }
        ];
      }

      return { result, unit: target === 'P' ? 'W' : target === 'V' ? 'V' : 'A', steps };
    }
  },

  {
    id: 'electrical_energy',
    name: 'Electrical Energy (Pt)',
    nameTh: 'พลังงานไฟฟ้า (E = Pt)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'plug-zap',
    grade: 'ม.3-5',
    latex: 'E = P \\cdot t',
    description: 'พลังงานไฟฟ้าที่ใช้ = กำลังไฟฟ้า × เวลา เช่น หลอด 60 W เปิด 5 ชั่วโมง ใช้พลังงาน 300 Wh = 0.3 หน่วย',
    variables: [
      { id: 'E', symbol: 'E', name: 'Energy', nameTh: 'พลังงานไฟฟ้า (E)', unit: 'Wh', defaultValue: 300, min: 0, max: 1e15, step: 1 },
      { id: 'P', symbol: 'P', name: 'Power', nameTh: 'กำลังไฟฟ้า (P)', unit: 'W', defaultValue: 60, min: 0, max: 1e12, step: 0.1 },
      { id: 't', symbol: 't', name: 'Time (hours)', nameTh: 'เวลา (ชั่วโมง)', unit: 'ชม.', defaultValue: 5, min: 0, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['E', 'P', 't'],
    calculate: (inputs, target = 'E') => {
      let { E, P, t } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'E') {
        result = P * t;
        steps = [
          { title: 'สูตรพลังงานไฟฟ้า', latex: 'E = P \\cdot t', explanation: `P = ${P} W, t = ${t} ชม.` },
          { title: 'แทนค่า', latex: `E = ${P} \\times ${t}`, explanation: 'กำลังคูณเวลา' },
          { title: 'ผลลัพธ์', latex: `E = ${result.toFixed(2)} \\ \\text{Wh} \\; (${(result / 1000).toFixed(3)} \\ \\text{หน่วย})`, explanation: `ใช้พลังงาน ${(result / 1000).toFixed(3)} หน่วย (kWh)` }
        ];
      } else if (target === 'P') {
        if (t === 0) throw new Error('เวลา t ต้องไม่เป็น 0');
        result = E / t;
        steps = [
          { title: 'จัดรูปหากำลังไฟฟ้า', latex: 'P = \\frac{E}{t}', explanation: 'พลังงานหารเวลา' },
          { title: 'ผลลัพธ์', latex: `P = ${result.toFixed(2)} \\ \\text{W}`, explanation: `กำลังไฟฟ้าเท่ากับ ${result.toFixed(2)} วัตต์` }
        ];
      } else if (target === 't') {
        if (P === 0) throw new Error('กำลัง P ต้องไม่เป็น 0');
        result = E / P;
        steps = [
          { title: 'จัดรูปแบบชั่วโมง', latex: 't = \\frac{E}{P}', explanation: 'พลังงานหารกำลัง' },
          { title: 'ผลลัพธ์', latex: `t = ${result.toFixed(2)} \\ \\text{ชม.}`, explanation: `ใช้เวลา ${result.toFixed(2)} ชั่วโมง` }
        ];
      }

      return { result, unit: target === 'E' ? 'Wh' : target === 'P' ? 'W' : 'ชม.', steps };
    }
  },

  {
    id: 'resistor_series',
    name: 'Resistors in Series (R = R₁+R₂+…)',
    nameTh: 'ตัวต้านทานต่ออนุกรม',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'plug',
    grade: 'ม.3-5',
    latex: 'R_{total} = R_1 + R_2 + \\ldots',
    description: 'ความต้านทานรวมของตัวต้านทานที่ต่ออนุกรม = ผลรวมทั้งหมด เช่น ตัวต้านทาน 4Ω + 6Ω = 10Ω',
    variables: [
      { id: 'rt', symbol: 'R_{total}', name: 'Total Resistance', nameTh: 'ความต้านทานรวม (R)', unit: 'Ω', defaultValue: 10, min: 0, max: 1e12, step: 0.1 },
      { id: 'R1', symbol: 'R_1', name: 'Resistor 1', nameTh: 'ตัวต้านทานที่ 1', unit: 'Ω', defaultValue: 4, min: 0, max: 1e12, step: 0.1 },
      { id: 'R2', symbol: 'R_2', name: 'Resistor 2', nameTh: 'ตัวต้านทานที่ 2', unit: 'Ω', defaultValue: 6, min: 0, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['rt', 'R1', 'R2'],
    calculate: (inputs, target = 'rt') => {
      let { rt, R1, R2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'rt') {
        result = R1 + R2;
        steps = [
          { title: 'สูตรความต้านทานอนุกรม', latex: 'R_{total} = R_1 + R_2', explanation: 'ตัวต้านทานในอนุกรมบวกกัน' },
          { title: 'แทนค่า', latex: `R_{total} = ${R1} + ${R2}`, explanation: 'กระแสไหลผ่านตัวเดียวกันทั้งหมด' },
          { title: 'ผลลัพธ์', latex: `R_{total} = ${result.toFixed(2)} \\ \\Omega`, explanation: `ความต้านทานรวมเท่ากับ ${result.toFixed(2)} โอห์ม` }
        ];
      } else if (target === 'R1') {
        result = rt - R2;
        steps = [
          { title: 'จัดรูปหาตัวต้านทานที่ 1', latex: 'R_1 = R_{total} - R_2', explanation: 'ความต้านทานรวมลบตัวที่ทราบ' },
          { title: 'ผลลัพธ์', latex: `R_1 = ${result.toFixed(2)} \\ \\Omega`, explanation: `ตัวต้านทานที่ 1 เท่ากับ ${result.toFixed(2)} โอห์ม` }
        ];
      } else if (target === 'R2') {
        result = rt - R1;
        steps = [
          { title: 'จัดรูปหาตัวต้านทานที่ 2', latex: 'R_2 = R_{total} - R_1', explanation: 'ความต้านทานรวมลบตัวที่ทราบ' },
          { title: 'ผลลัพธ์', latex: `R_2 = ${result.toFixed(2)} \\ \\Omega`, explanation: `ตัวต้านทานที่ 2 เท่ากับ ${result.toFixed(2)} โอห์ม` }
        ];
      }

      return { result, unit: 'Ω', steps };
    }
  },

  {
    id: 'resistor_parallel',
    name: 'Resistors in Parallel (1/R = 1/R₁+1/R₂)',
    nameTh: 'ตัวต้านทานต่อขนาน',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'plug',
    grade: 'ม.3-5',
    latex: '\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2}',
    description: 'ความต้านทานรวมของตัวต้านทานที่ต่อขนาน = 1/(1/R₁+1/R₂) มีค่าน้อยกว่าตัวต้านทานตัวที่เล็กที่สุดเสมอ',
    variables: [
      { id: 'rt', symbol: 'R_{total}', name: 'Total Resistance', nameTh: 'ความต้านทานรวม (R)', unit: 'Ω', defaultValue: 2.4, min: 0, max: 1e12, step: 0.1 },
      { id: 'R1', symbol: 'R_1', name: 'Resistor 1', nameTh: 'ตัวต้านทานที่ 1', unit: 'Ω', defaultValue: 4, min: 0.0001, max: 1e12, step: 0.1 },
      { id: 'R2', symbol: 'R_2', name: 'Resistor 2', nameTh: 'ตัวต้านทานที่ 2', unit: 'Ω', defaultValue: 6, min: 0.0001, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['rt', 'R1', 'R2'],
    calculate: (inputs, target = 'rt') => {
      let { rt, R1, R2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'rt') {
        if (R1 + R2 === 0) throw new Error('ผลรวมของ R₁+R₂ ต้องไม่เป็น 0');
        result = (R1 * R2) / (R1 + R2);
        steps = [
          { title: 'สูตรความต้านทานขนาน (2 ตัว)', latex: 'R_{total} = \\frac{R_1 R_2}{R_1 + R_2}', explanation: `R₁ = ${R1}, R₂ = ${R2}` },
          { title: 'แทนค่า', latex: `R_{total} = \\frac{${R1} \\times ${R2}}{${R1} + ${R2}} = \\frac{${R1 * R2}}{${R1 + R2}}`, explanation: 'ผลคูณหารผลบวก' },
          { title: 'ผลลัพธ์', latex: `R_{total} = ${result.toFixed(2)} \\ \\Omega`, explanation: `ความต้านทานรวมเท่ากับ ${result.toFixed(2)} โอห์ม (น้อยกว่าตัวที่เล็กที่สุด)` }
        ];
      } else if (target === 'R1') {
        if (rt === 0) throw new Error('R_total ต้องไม่เป็น 0');
        const denom = R2 - rt;
        if (denom === 0) throw new Error('R₂ − Rt ต้องไม่เป็น 0');
        result = (rt * R2) / denom;
        if (result <= 0) throw new Error('ข้อมูลไม่สอดคล้อง (ค่าติดลบ)');
        steps = [
          { title: 'จัดรูปหาตัวต้านทานที่ 1', latex: 'R_1 = \\frac{R_{total} R_2}{R_2 - R_{total}}', explanation: 'จัดรูปสมการขนาน' },
          { title: 'ผลลัพธ์', latex: `R_1 = ${result.toFixed(2)} \\ \\Omega`, explanation: `ตัวต้านทานที่ 1 เท่ากับ ${result.toFixed(2)} โอห์ม` }
        ];
      } else if (target === 'R2') {
        if (rt === 0) throw new Error('R_total ต้องไม่เป็น 0');
        const denom = R1 - rt;
        if (denom === 0) throw new Error('R₁ − Rt ต้องไม่เป็น 0');
        result = (rt * R1) / denom;
        if (result <= 0) throw new Error('ข้อมูลไม่สอดคล้อง (ค่าติดลบ)');
        steps = [
          { title: 'จัดรูปหาตัวต้านทานที่ 2', latex: 'R_2 = \\frac{R_{total} R_1}{R_1 - R_{total}}', explanation: 'จัดรูปสมการขนาน' },
          { title: 'ผลลัพธ์', latex: `R_2 = ${result.toFixed(2)} \\ \\Omega`, explanation: `ตัวต้านทานที่ 2 เท่ากับ ${result.toFixed(2)} โอห์ม` }
        ];
      }

      return { result, unit: 'Ω', steps };
    }
  },

  {
    id: 'resistivity',
    name: 'Resistance & Resistivity (R = ρL/A)',
    nameTh: 'ความต้านทานของลวด (R = ρL/A)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'waypoints',
    grade: 'ม.5',
    latex: 'R = \\rho \\frac{L}{A}',
    description: 'ความต้านทานของลวดตัวนำ = สภาพต้านทาน × ความยาว ÷ พื้นที่หน้าตัด เช่น ลวดทองแดงยาว 100 m พื้นที่ 1 mm²',
    variables: [
      { id: 'R', symbol: 'R', name: 'Resistance', nameTh: 'ความต้านทาน (R)', unit: 'Ω', defaultValue: 1.72, min: 0, max: 1e12, step: 0.001 },
      { id: 'rho', symbol: '\\rho', name: 'Resistivity', nameTh: 'สภาพต้านทาน (ρ)', unit: 'Ω·m', defaultValue: 1.72e-8, min: 1e-12, max: 1e6, step: 0 },
      { id: 'L', symbol: 'L', name: 'Length', nameTh: 'ความยาวลวด (L)', unit: 'm', defaultValue: 100, min: 0, max: 1e9, step: 1 },
      { id: 'A', symbol: 'A', name: 'Cross-section Area', nameTh: 'พื้นที่หน้าตัด (A)', unit: 'm²', defaultValue: 1e-6, min: 1e-15, max: 100, step: 0 }
    ],
    solveTargets: ['R', 'L', 'A'],
    calculate: (inputs, target = 'R') => {
      let { R, rho, L, A } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'R') {
        result = (rho * L) / A;
        steps = [
          { title: 'สูตรความต้านทานลวด', latex: 'R = \\rho \\frac{L}{A}', explanation: `ρ = ${rho.toExponential(2)}, L = ${L} m, A = ${A.toExponential(2)} m²` },
          { title: 'แทนค่า', latex: `R = ${rho.toExponential(2)} \\times \\frac{${L}}{${A.toExponential(2)}}`, explanation: 'สภาพต้านทานคูณความยาวหารพื้นที่' },
          { title: 'ผลลัพธ์', latex: `R = ${result.toFixed(4)} \\ \\Omega`, explanation: `ความต้านทานเท่ากับ ${result.toFixed(4)} โอห์ม` }
        ];
      } else if (target === 'L') {
        if (rho === 0) throw new Error('ρ ต้องไม่เป็น 0');
        result = (R * A) / rho;
        steps = [
          { title: 'จัดรูปหาความยาว', latex: 'L = \\frac{R \\cdot A}{\\rho}', explanation: 'ความต้านทานคูณพื้นที่หารสภาพต้านทาน' },
          { title: 'ผลลัพธ์', latex: `L = ${result.toFixed(2)} \\ \\text{m}`, explanation: `ความยาวลวดเท่ากับ ${result.toFixed(2)} เมตร` }
        ];
      } else if (target === 'A') {
        if (R === 0) throw new Error('R ต้องไม่เป็น 0');
        result = (rho * L) / R;
        steps = [
          { title: 'จัดรูปหาพื้นที่หน้าตัด', latex: 'A = \\frac{\\rho L}{R}', explanation: 'สภาพต้านทานคูณความยาวหาร R' },
          { title: 'ผลลัพธ์', latex: `A = ${result.toExponential(3)} \\ \\text{m}^2`, explanation: `พื้นที่หน้าตัดเท่ากับ ${result.toExponential(3)} m²` }
        ];
      }

      return { result, unit: target === 'R' ? 'Ω' : target === 'L' ? 'm' : 'm²', steps };
    }
  },

  {
    id: 'coulombs_law',
    name: "Coulomb's Law (F = kq₁q₂/r²)",
    nameTh: 'กฎของคูลอมบ์ (F = kq₁q₂/r²)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'zap',
    grade: 'ม.6',
    latex: 'F = k \\frac{|q_1 q_2|}{r^2}',
    description: 'แรงระหว่างประจุไฟฟ้าสองก้อน = k·|q₁q₂|/r² โดย k = 9×10⁹ N·m²/C² แรงดูด/ผลักตามเครื่องหมายของประจุ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'แรงไฟฟ้า (F)', unit: 'N', defaultValue: 22.5, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'k', symbol: 'k', name: 'Coulomb Constant', nameTh: 'ค่าคงที่คูลอมบ์ (k)', unit: 'N·m²/C²', defaultValue: 9e9, min: 1e8, max: 1e12, step: 0 },
      { id: 'q1', symbol: 'q_1', name: 'Charge 1', nameTh: 'ประจุที่ 1 (q₁)', unit: 'C', defaultValue: 2e-6, min: -1e-6, max: 1, step: 0 },
      { id: 'q2', symbol: 'q_2', name: 'Charge 2', nameTh: 'ประจุที่ 2 (q₂)', unit: 'C', defaultValue: 5e-6, min: -1e-6, max: 1, step: 0 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'ระยะห่าง (r)', unit: 'm', defaultValue: 0.2, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['F', 'r', 'q1', 'q2'],
    calculate: (inputs, target = 'F') => {
      let { F, k, q1, q2, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = k * Math.abs(q1 * q2) / (r * r);
        const sign = q1 * q2 > 0 ? 'ผลักกัน' : 'ดูดกัน';
        steps = [
          { title: 'กฎของคูลอมบ์', latex: 'F = k \\frac{|q_1 q_2|}{r^2}', explanation: `q₁ = ${q1.toExponential(1)} C, q₂ = ${q2.toExponential(1)} C, r = ${r} m` },
          { title: 'แทนค่า', latex: `F = (${k.toExponential(1)}) \\times \\frac{|${q1.toExponential(1)} \\times ${q2.toExponential(1)}|}{${r}^2}`, explanation: `|q₁q₂| = ${Math.abs(q1 * q2).toExponential(2)}, r² = ${(r * r).toExponential(2)}` },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงเท่ากับ ${result.toFixed(2)} นิวตัน (ประจุ${sign})` }
        ];
      } else if (target === 'r') {
        if (F === 0) throw new Error('แรง F ต้องไม่เป็น 0');
        result = Math.sqrt(k * Math.abs(q1 * q2) / F);
        steps = [
          { title: 'จัดรูประยะห่าง', latex: 'r = \\sqrt{\\frac{k|q_1 q_2|}{F}}', explanation: `F = ${F} N` },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)} \\ \\text{m}`, explanation: `ระยะห่างเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      } else if (target === 'q1' || target === 'q2') {
        const other = target === 'q1' ? q2 : q1;
        if (other === 0) throw new Error(`ประจุที่ ${target === 'q1' ? '2' : '1'} (q₂) ต้องไม่เป็น 0`);
        result = (F * r * r) / (k * Math.abs(other));
        steps = [
          { title: 'จัดรูปหาประจุ', latex: `q_${target[1]} = \\frac{F r^2}{k|q_${target === 'q1' ? '2' : '1'}|}`, explanation: `F = ${F} N, r = ${r} m` },
          { title: 'ผลลัพธ์', latex: `q_${target[1]} = ${result.toExponential(3)} \\ \\text{C}`, explanation: `ประจุเท่ากับ ${result.toExponential(3)} คูลอมบ์` }
        ];
      }

      return { result, unit: target === 'q1' || target === 'q2' ? 'C' : target === 'r' ? 'm' : 'N', steps };
    }
  },

  {
    id: 'electric_potential_point',
    name: 'Electric Potential (V = kQ/r)',
    nameTh: 'ศักย์ไฟฟ้าจากประจุจุด (V = kQ/r)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'circle-dot',
    grade: 'ม.6',
    latex: 'V = \\frac{kQ}{r}',
    description: 'ศักย์ไฟฟ้าที่จุดห่าง r จากประจุจุด Q โดย k = 9×10⁹ และสุญญากาศ เช่น Q = 2 μC ที่ระยะ 0.5 m',
    variables: [
      { id: 'V', symbol: 'V', name: 'Electric Potential', nameTh: 'ศักย์ไฟฟ้า (V)', unit: 'V', defaultValue: 36000, min: -1e12, max: 1e12, step: 1 },
      { id: 'k', symbol: 'k', name: 'Coulomb Constant', nameTh: 'ค่าคงที่คูลอมบ์ (k)', unit: 'N·m²/C²', defaultValue: 9e9, min: 1e8, max: 1e12, step: 0 },
      { id: 'Q', symbol: 'Q', name: 'Charge', nameTh: 'ประจุ (Q)', unit: 'C', defaultValue: 2e-6, min: -1e-6, max: 1, step: 0 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'ระยะจากประจุ (r)', unit: 'm', defaultValue: 0.5, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'r', 'Q'],
    calculate: (inputs, target = 'V') => {
      let { V, k, Q, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = (k * Q) / r;
        steps = [
          { title: 'สูตรศักย์ไฟฟ้า', latex: 'V = \\frac{kQ}{r}', explanation: `Q = ${Q.toExponential(1)} C, r = ${r} m` },
          { title: 'แทนค่า', latex: `V = \\frac{${k.toExponential(1)} \\times ${Q.toExponential(1)}}{${r}}`, explanation: 'k·Q แล้วหาร r' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(1)} \\ \\text{V}`, explanation: `ศักย์ไฟฟ้าเท่ากับ ${result.toFixed(1)} โวลต์` }
        ];
      } else if (target === 'r') {
        if (V === 0) throw new Error('V ต้องไม่เป็น 0');
        result = (k * Q) / V;
        steps = [
          { title: 'จัดรูประยะทาง', latex: 'r = \\frac{kQ}{V}', explanation: 'k·Q หารศักย์ไฟฟ้า' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)} \\ \\text{m}`, explanation: `ระยะห่างเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      } else if (target === 'Q') {
        if (k === 0) throw new Error('k ต้องไม่เป็น 0');
        result = (V * r) / k;
        steps = [
          { title: 'จัดรูปหาประจุ', latex: 'Q = \\frac{Vr}{k}', explanation: 'ศักย์คูณระยะหาร k' },
          { title: 'ผลลัพธ์', latex: `Q = ${result.toExponential(3)} \\ \\text{C}`, explanation: `ประจุเท่ากับ ${result.toExponential(3)} คูลอมบ์` }
        ];
      }

      return { result, unit: target === 'V' ? 'V' : target === 'r' ? 'm' : 'C', steps };
    }
  },

  {
    id: 'capacitor',
    name: 'Capacitance (Q = CV)',
    nameTh: 'ความจุตัวเก็บประจุ (Q = CV)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'lamp-desk',
    grade: 'ม.6',
    latex: 'Q = CV',
    description: 'ประจุที่เก็บได้ในตัวเก็บประจุ = ความจุ × ความต่างศักย์ เช่น C = 10 μF กับ 12 V เก็บประจุ 120 μC',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Charge', nameTh: 'ประจุ (Q)', unit: 'C', defaultValue: 0.00012, min: -1e12, max: 1e12, step: 0 },
      { id: 'C', symbol: 'C', name: 'Capacitance', nameTh: 'ความจุ (C)', unit: 'F', defaultValue: 1e-5, min: 0, max: 1000, step: 0 },
      { id: 'V', symbol: 'V', name: 'Voltage', nameTh: 'ความต่างศักย์ (V)', unit: 'V', defaultValue: 12, min: -1e9, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['Q', 'C', 'V'],
    calculate: (inputs, target = 'Q') => {
      let { Q, C, V } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Q') {
        result = C * V;
        steps = [
          { title: 'สูตรตัวเก็บประจุ', latex: 'Q = CV', explanation: `C = ${C.toExponential(2)} F, V = ${V} V` },
          { title: 'แทนค่า', latex: `Q = (${C.toExponential(2)}) \\times ${V}`, explanation: 'ความจุคูณความต่างศักย์' },
          { title: 'ผลลัพธ์', latex: `Q = ${result.toExponential(3)} \\ \\text{C} \\; (${(result * 1e6).toFixed(1)} \\ \\mu\\text{C})`, explanation: `ประจุเท่ากับ ${(result * 1e6).toFixed(1)} ไมโครคูลอมบ์` }
        ];
      } else if (target === 'C') {
        if (V === 0) throw new Error('V ต้องไม่เป็น 0');
        result = Q / V;
        steps = [
          { title: 'จัดรูปหาความจุ', latex: 'C = \\frac{Q}{V}', explanation: 'ประจุหารความต่างศักย์' },
          { title: 'ผลลัพธ์', latex: `C = ${result.toExponential(3)} \\ \\text{F}`, explanation: `ความจุเท่ากับ ${result.toExponential(3)} ฟารัด` }
        ];
      } else if (target === 'V') {
        if (C === 0) throw new Error('C ต้องไม่เป็น 0');
        result = Q / C;
        steps = [
          { title: 'จัดรูปหาความต่างศักย์', latex: 'V = \\frac{Q}{C}', explanation: 'ประจุหารความจุ' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(2)} \\ \\text{V}`, explanation: `ความต่างศักย์เท่ากับ ${result.toFixed(2)} โวลต์` }
        ];
      }

      return { result, unit: target === 'Q' ? 'C' : target === 'C' ? 'F' : 'V', steps };
    }
  },

  {
    id: 'transformer',
    name: 'Transformer (V₂/V₁ = N₂/N₁)',
    nameTh: 'หม้อแปลงไฟฟ้า (V₂/V₁ = N₂/N₁)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'download',
    grade: 'ม.6',
    latex: '\\frac{V_2}{V_1} = \\frac{N_2}{N_1}',
    description: 'อัตราส่วนแรงดันของหม้อแปลง = อัตราส่วนรอบขดลวด เช่น 11500 V → 230 V ผ่านขด 2000 รอบ/40 รอบ',
    variables: [
      { id: 'V1', symbol: 'V_1', name: 'Primary Voltage', nameTh: 'แรงดันปฐมภูมิ (V₁)', unit: 'V', defaultValue: 11500, min: 0, max: 1e9, step: 1 },
      { id: 'V2', symbol: 'V_2', name: 'Secondary Voltage', nameTh: 'แรงดันทุติยภูมิ (V₂)', unit: 'V', defaultValue: 230, min: 0, max: 1e9, step: 1 },
      { id: 'N1', symbol: 'N_1', name: 'Primary Turns', nameTh: 'จำนวนรอบขดปฐมภูมิ (N₁)', unit: 'รอบ', defaultValue: 2000, min: 1, max: 1e7, step: 1 },
      { id: 'N2', symbol: 'N_2', name: 'Secondary Turns', nameTh: 'จำนวนรอบขดทุติยภูมิ (N₂)', unit: 'รอบ', defaultValue: 40, min: 1, max: 1e7, step: 1 }
    ],
    solveTargets: ['V2', 'V1', 'N2', 'N1'],
    calculate: (inputs, target = 'V2') => {
      let { V1, V2, N1, N2 } = inputs;
      let steps = [];
      let result = 0;

      const build = (label, expr, val, unit) => [
        { title: 'สูตรหม้อแปลง', latex: '\\frac{V_2}{V_1} = \\frac{N_2}{N_1}', explanation: 'อัตราส่วนแรงดันเท่ากับอัตราส่วนรอบขด' },
        { title: label, latex: expr, explanation: 'จัดรูปสมการย้ายตัวแปร' },
        { title: 'ผลลัพธ์', latex: `${label.split(' ')[0]} = ${val.toFixed(2)} \\ ${unit}`, explanation: `ค่าที่คำนวณได้เท่ากับ ${val.toFixed(2)} ${unit}` }
      ];

      if (target === 'V2') {
        result = V1 * N2 / N1;
        steps = build('แรงดันทุติยภูมิ V_2', `V_2 = ${V1} \\times \\frac{${N2}}{${N1}}`, result, 'V');
      } else if (target === 'V1') {
        if (N2 === 0) throw new Error('N₂ ต้องไม่เป็น 0');
        result = V2 * N1 / N2;
        steps = build('แรงดันปฐมภูมิ V_1', `V_1 = ${V2} \\times \\frac{${N1}}{${N2}}`, result, 'V');
      } else if (target === 'N2') {
        if (V1 === 0) throw new Error('V₁ ต้องไม่เป็น 0');
        result = V2 * N1 / V1;
        steps = build('รอบทุติยภูมิ N_2', `N_2 = ${V2} \\times \\frac{${N1}}{${V1}}`, result, 'รอบ');
      } else if (target === 'N1') {
        if (V2 === 0) throw new Error('V₂ ต้องไม่เป็น 0');
        result = V1 * N2 / V2;
        steps = build('รอบปฐมภูมิ N_1', `N_1 = ${V1} \\times \\frac{${N2}}{${V2}}`, result, 'รอบ');
      }

      return { result, unit: target.startsWith('N') ? 'รอบ' : 'V', steps };
    }
  },

  {
    id: 'magnetic_wire_force',
    name: 'Magnetic Force on Wire (F = BIl sinθ)',
    nameTh: 'แรงแม่เหล็กบนเส้นลวด (F = BIl sinθ)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้า',
    icon: 'magnet',
    grade: 'ม.6',
    latex: 'F = B I l \\sin\\theta',
    description: 'แรงแม่เหล็กบนลวดยาว l ที่มีกระแส I ในสนามแม่เหล็ก B ทำมุม θ เช่น ลัดวงจร 0.5 m, 10 A, B = 0.8 T ตั้งฉาก',
    variables: [
      { id: 'F', symbol: 'F', name: 'Magnetic Force', nameTh: 'แรงแม่เหล็ก (F)', unit: 'N', defaultValue: 4, min: -1e12, max: 1e12, step: 0.1 },
      { id: 'B', symbol: 'B', name: 'Magnetic Field', nameTh: 'สนามแม่เหล็ก (B)', unit: 'T', defaultValue: 0.8, min: 0, max: 1000, step: 0.01 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'กระแสไฟฟ้า (I)', unit: 'A', defaultValue: 10, min: 0, max: 1e9, step: 0.1 },
      { id: 'l', symbol: 'l', name: 'Wire Length', nameTh: 'ความยาวลวด (l)', unit: 'm', defaultValue: 0.5, min: 0, max: 1e6, step: 0.01 },
      { id: 'theta', symbol: '\\theta', name: 'Angle (°)', nameTh: 'มุมระหว่าง B กับลวด', unit: '°', defaultValue: 90, min: 0, max: 180, step: 1 }
    ],
    solveTargets: ['F', 'theta', 'B'],
    calculate: (inputs, target = 'F') => {
      let { F, B, I, l, theta } = inputs;
      const rad = theta * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = B * I * l * Math.sin(rad);
        steps = [
          { title: 'สูตรแรงบนเส้นลวด', latex: 'F = BIl\\sin\\theta', explanation: `B = ${B} T, I = ${I} A, l = ${l} m, θ = ${theta}°` },
          { title: 'แทนค่า', latex: `F = ${B} \\times ${I} \\times ${l} \\times \\sin(${theta}°)`, explanation: `sin(${theta}°) = ${Math.sin(rad).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)} \\ \\text{N}`, explanation: `แรงแม่เหล็กเท่ากับ ${result.toFixed(2)} นิวตัน` }
        ];
      } else if (target === 'theta') {
        const denom = B * I * l;
        if (denom === 0) throw new Error('BIl ต้องไม่เป็น 0');
        const x = F / denom;
        if (Math.abs(x) > 1) throw new Error('F/(BIl) เกิน 1 ข้อมูลไม่สอดคล้อง');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม', latex: '\\sin\\theta = \\frac{F}{BIl}', explanation: 'ใช้ฟังก์ชันอาร์กไซน์' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(1)}°`, explanation: `มุมเท่ากับ ${result.toFixed(1)} องศา` }
        ];
      } else if (target === 'B') {
        const denom = I * l * Math.sin(rad);
        if (denom === 0) throw new Error('Il·sinθ ต้องไม่เป็น 0');
        result = F / denom;
        steps = [
          { title: 'จัดรูปหาสนามแม่เหล็ก', latex: 'B = \\frac{F}{Il\\sin\\theta}', explanation: 'แรงหารผลคูณ I·l·sinθ' },
          { title: 'ผลลัพธ์', latex: `B = ${result.toFixed(4)} \\ \\text{T}`, explanation: `สนามแม่เหล็กเท่ากับ ${result.toFixed(4)} เทสลา` }
        ];
      }

      return { result, unit: target === 'theta' ? '°' : target === 'B' ? 'T' : 'N', steps };
    }
  }
];