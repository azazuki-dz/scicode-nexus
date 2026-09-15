/**
 * Thermodynamics & Thermal Formulas (ฟิสิกส์: ความร้อน) - ม.4
 * รวมกับ specific_heat (Q=mcΔT) เดิมใน formulas.js หมวด thermodynamics
 */

export const THERMODYNAMICS_FORMULAS = [
  {
    id: 'celsius_fahrenheit',
    name: 'Celsius ↔ Fahrenheit',
    nameTh: 'แปลงอุณหภูมิ องศาเซลเซียส ↔ องศาฟาเรนไฮต์',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'thermometer',
    grade: 'ม.1-4',
    latex: 'F = \\frac{9}{5}C + 32',
    description: 'แปลงอุณหภูมิระหว่างองศาเซลเซียสและฟาเรนไฮต์ เช่น น้ำเดือด 100°C = 212°F, น้ำแข็งละลาย 0°C = 32°F',
    variables: [
      { id: 'C', symbol: 'C', name: 'Celsius', nameTh: 'องศาเซลเซียส (°C)', unit: '°C', defaultValue: 100, min: -273.15, max: 1e6, step: 0.1 },
      { id: 'F', symbol: 'F', name: 'Fahrenheit', nameTh: 'องศาฟาเรนไฮต์ (°F)', unit: '°F', defaultValue: 212, min: -459.67, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['F', 'C'],
    calculate: (inputs, target = 'F') => {
      let { C, F } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'F') {
        result = (9 / 5) * C + 32;
        steps = [
          { title: 'สูตรแปลงเป็นฟาเรนไฮต์', latex: 'F = \\frac{9}{5}C + 32', explanation: `C = ${C}°C` },
          { title: 'แทนค่า', latex: `F = \\frac{9}{5} \\times ${C} + 32 = ${(9 / 5 * C).toFixed(2)} + 32`, explanation: 'คูณ 9/5 แล้วบวก 32' },
          { title: 'ผลลัพธ์', latex: `F = ${result.toFixed(2)}°F`, explanation: `${C}°C เท่ากับ ${result.toFixed(1)}°F` }
        ];
      } else if (target === 'C') {
        result = (5 / 9) * (F - 32);
        steps = [
          { title: 'สูตรแปลงเป็นเซลเซียส', latex: 'C = \\frac{5}{9}(F - 32)', explanation: `F = ${F}°F` },
          { title: 'แทนค่า', latex: `C = \\frac{5}{9}(${F} - 32) = \\frac{5}{9} \\times ${(F - 32).toFixed(2)}`, explanation: 'ลบ 32 แล้วคูณ 5/9' },
          { title: 'ผลลัพธ์', latex: `C = ${result.toFixed(2)}°C`, explanation: `${F}°F เท่ากับ ${result.toFixed(1)}°C` }
        ];
      }

      return { result, unit: target === 'F' ? '°F' : '°C', steps };
    }
  },

  {
    id: 'celsius_kelvin',
    name: 'Celsius ↔ Kelvin',
    nameTh: 'แปลงอุณหภูมิ องศาเซลเซียส ↔ เคลวิน',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'thermometer',
    grade: 'ม.4',
    latex: 'K = C + 273.15',
    description: 'แปลงอุณหภูมิระหว่างเซลเซียสและเคลวิน (สเกลสัมบูรณ์) โดย 0 K = −273.15°C ใช้บังคับในสมการแก๊ส',
    variables: [
      { id: 'C', symbol: 'C', name: 'Celsius', nameTh: 'องศาเซลเซียส (°C)', unit: '°C', defaultValue: 27, min: -273.15, max: 1e6, step: 0.1 },
      { id: 'K', symbol: 'K', name: 'Kelvin', nameTh: 'เคลวิน (K)', unit: 'K', defaultValue: 300.15, min: 0, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['K', 'C'],
    calculate: (inputs, target = 'K') => {
      let { C, K } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'K') {
        result = C + 273.15;
        steps = [
          { title: 'สูตรแปลงเป็นเคลวิน', latex: 'K = C + 273.15', explanation: `C = ${C}°C` },
          { title: 'ผลลัพธ์', latex: `K = ${C} + 273.15 = ${result.toFixed(2)} \\ \\text{K}`, explanation: `${C}°C เท่ากับ ${result.toFixed(2)} K` }
        ];
      } else if (target === 'C') {
        result = K - 273.15;
        steps = [
          { title: 'สูตรแปลงเป็นเซลเซียส', latex: 'C = K - 273.15', explanation: `K = ${K}` },
          { title: 'ผลลัพธ์', latex: `C = ${K} - 273.15 = ${result.toFixed(2)}°C`, explanation: `${K} K เท่ากับ ${result.toFixed(2)}°C` }
        ];
      }

      return { result, unit: target === 'K' ? 'K' : '°C', steps };
    }
  },

  {
    id: 'latent_heat',
    name: 'Latent Heat (Q = mL)',
    nameTh: 'ความร้อนแฝง (Q = mL)',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'flame',
    grade: 'ม.4',
    latex: 'Q = mL',
    description: 'ความร้อนที่ทำให้สสารเปลี่ยนสถานะ = มวล × ความร้อนแฝงจำเพาะ เช่น น้ำแข็งละลาย L=334 kJ/kg ใช้ Q = mL',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Heat Energy', nameTh: 'ความร้อน (Q)', unit: 'J', defaultValue: 334000, min: -1e12, max: 1e12, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล (m)', unit: 'kg', defaultValue: 1, min: 0, max: 1e12, step: 0.1 },
      { id: 'L', symbol: 'L', name: 'Latent Heat', nameTh: 'ความร้อนแฝงจำเพาะ (L)', unit: 'J/kg', defaultValue: 334000, min: -1e9, max: 1e9, step: 1 }
    ],
    solveTargets: ['Q', 'm', 'L'],
    calculate: (inputs, target = 'Q') => {
      let { Q, m, L } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Q') {
        result = m * L;
        steps = [
          { title: 'สูตรความร้อนแฝง', latex: 'Q = mL', explanation: `m = ${m} kg, L = ${L} J/kg` },
          { title: 'แทนค่า', latex: `Q = ${m} \\times ${L}`, explanation: 'มวลคูณความร้อนแฝง' },
          { title: 'ผลลัพธ์', latex: `Q = ${result.toFixed(0)} \\ \\text{J} \\; (${(result / 1000).toFixed(1)} \\ \\text{kJ})`, explanation: `ความร้อนเท่ากับ ${(result / 1000).toFixed(1)} กิโลจูล` }
        ];
      } else if (target === 'm') {
        if (L === 0) throw new Error('L ต้องไม่เป็น 0');
        result = Q / L;
        steps = [
          { title: 'จัดรูปหามวล', latex: 'm = \\frac{Q}{L}', explanation: 'ความร้อนหารความร้อนแฝง' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(3)} \\ \\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(3)} กิโลกรัม` }
        ];
      } else if (target === 'L') {
        if (m === 0) throw new Error('มวล m ต้องไม่เป็น 0');
        result = Q / m;
        steps = [
          { title: 'จัดรูปหาความร้อนแฝง', latex: 'L = \\frac{Q}{m}', explanation: 'ความร้อนหารมวล' },
          { title: 'ผลลัพธ์', latex: `L = ${result.toFixed(1)} \\ \\text{J/kg}`, explanation: `ความร้อนแฝงจำเพาะเท่ากับ ${result.toFixed(1)} J/kg` }
        ];
      }

      return { result, unit: target === 'Q' ? 'J' : target === 'm' ? 'kg' : 'J/kg', steps };
    }
  },

  {
    id: 'thermal_expansion',
    name: 'Linear Thermal Expansion (ΔL = αL₀ΔT)',
    nameTh: 'การขยายตัวทางความร้อน (ΔL = αL₀ΔT)',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'move-horizontal',
    grade: 'ม.6',
    latex: '\\Delta L = \\alpha L_0 \\Delta T',
    description: 'ความยาวที่เพิ่มขึ้นของวัตถุเมื่ออุณหภูมิเปลี่ยน = สัมประสิทธิ์การขยายตัวเชิงเส้น × ความยาวเดิม × ผลต่างอุณหภูมิ เช่น สะพานเหล็ก',
    variables: [
      { id: 'dL', symbol: '\\Delta L', name: 'Change in Length', nameTh: 'ความยาวที่เพิ่มขึ้น (ΔL)', unit: 'm', defaultValue: 0.0024, min: 0, max: 1e6, step: 0.0001 },
      { id: 'alpha', symbol: '\\alpha', name: 'Expansion Coefficient', nameTh: 'สัมประสิทธิ์การขยายตัว (α)', unit: '1/°C', defaultValue: 1.2e-5, min: 1e-9, max: 1, step: 0 },
      { id: 'L0', symbol: 'L_0', name: 'Original Length', nameTh: 'ความยาวเดิม (L₀)', unit: 'm', defaultValue: 10, min: 0.000001, max: 1e6, step: 0.1 },
      { id: 'dT', symbol: '\\Delta T', name: 'Temperature Change', nameTh: 'อุณหภูมิที่เปลี่ยน (ΔT)', unit: '°C', defaultValue: 20, min: -1e6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['dL', 'dT'],
    calculate: (inputs, target = 'dL') => {
      let { dL, alpha, L0, dT } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dL') {
        result = alpha * L0 * dT;
        steps = [
          { title: 'สูตรการขยายตัวเชิงเส้น', latex: '\\Delta L = \\alpha L_0 \\Delta T', explanation: `α = ${alpha.toExponential(2)}, L₀ = ${L0} m, ΔT = ${dT}°C` },
          { title: 'แทนค่า', latex: `\\Delta L = (${alpha.toExponential(2)}) \\times ${L0} \\times ${dT}`, explanation: 'คูณค่าสัมประสิทธิ์ ความยาวเดิม และผลต่างอุณหภูมิ' },
          { title: 'ผลลัพธ์', latex: `\\Delta L = ${result.toFixed(4)} \\ \\text{m}`, explanation: `ความยาวเพิ่มขึ้น ${result.toFixed(4)} เมตร (ยาวใหม่ ${(L0 + result).toFixed(4)} m)` }
        ];
      } else if (target === 'dT') {
        const denom = alpha * L0;
        if (denom === 0) throw new Error('α·L₀ ต้องไม่เป็น 0');
        result = dL / denom;
        steps = [
          { title: 'จัดรูปหาผลต่างอุณหภูมิ', latex: '\\Delta T = \\frac{\\Delta L}{\\alpha L_0}', explanation: 'ความยาวที่เพิ่มหารผลคูณ α·L₀' },
          { title: 'ผลลัพธ์', latex: `\\Delta T = ${result.toFixed(2)}°C`, explanation: `อุณหภูมิเปลี่ยน ${result.toFixed(2)}°C` }
        ];
      }

      return { result, unit: target === 'dT' ? '°C' : 'm', steps };
    }
  },

  {
    id: 'heat_engine_efficiency',
    name: 'Engine Efficiency (η = 1 − Tc/Th)',
    nameTh: 'ประสิทธิภาพเครื่องยนต์ (η = 1 − Tc/Th)',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'gauge',
    grade: 'ม.6',
    latex: '\\eta = 1 - \\frac{T_c}{T_h}',
    description: 'ประสิทธิภาพสูงสุด (การ์โนต์) ของเครื่องยนต์ความร้อน = 1 − (อุณหภูมิเย็น/อุณหภูมิร้อน) โดยใช้หน่วยเคลวินเท่านั้น',
    variables: [
      { id: 'eta', symbol: '\\eta', name: 'Efficiency', nameTh: 'ประสิทธิภาพ', unit: '', defaultValue: 0.6, min: 0, max: 1, step: 0.01 },
      { id: 'Tc', symbol: 'T_c', name: 'Cold Temp (K)', nameTh: 'อุณหภูมิเย็น (Tc)', unit: 'K', defaultValue: 300, min: 0.0001, max: 1e9, step: 1 },
      { id: 'Th', symbol: 'T_h', name: 'Hot Temp (K)', nameTh: 'อุณหภูมิร้อน (Th)', unit: 'K', defaultValue: 750, min: 0.0001, max: 1e9, step: 1 }
    ],
    solveTargets: ['eta', 'Tc', 'Th'],
    calculate: (inputs, target = 'eta') => {
      let { eta, Tc, Th } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'eta') {
        result = 1 - Tc / Th;
        steps = [
          { title: 'สูตรประสิทธิภาพการ์โนต์', latex: '\\eta = 1 - \\frac{T_c}{T_h}', explanation: `Tc = ${Tc} K, Th = ${Th} K (ต้องใช้เคลวิน)` },
          { title: 'แทนค่า', latex: `\\eta = 1 - \\frac{${Tc}}{${Th}} = 1 - ${(Tc / Th).toFixed(4)}`, explanation: 'อุณหภูมิต้องเป็นหน่วยเคลวินเสมอ' },
          { title: 'ผลลัพธ์', latex: `\\eta = ${result.toFixed(4)} \\; (${(result * 100).toFixed(1)}\\% )`, explanation: `ประสิทธิภาพสูงสุดเท่ากับ ${(result * 100).toFixed(1)}%` }
        ];
      } else if (target === 'Tc') {
        result = (1 - eta) * Th;
        steps = [
          { title: 'จัดรูปหาอุณหภูมิเย็น', latex: 'T_c = (1 - \\eta) T_h', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `T_c = ${result.toFixed(2)} \\ \\text{K}`, explanation: `อุณหภูมิเย็นเท่ากับ ${result.toFixed(2)} K` }
        ];
      } else if (target === 'Th') {
        if (eta === 1) throw new Error('ประสิทธิภาพต้องไม่เท่ากับ 1 (เป็นไปไม่ได้ในทางฟิสิกส์)');
        result = Tc / (1 - eta);
        steps = [
          { title: 'จัดรูปหาอุณหภูมิร้อน', latex: 'T_h = \\frac{T_c}{1 - \\eta}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `T_h = ${result.toFixed(2)} \\ \\text{K}`, explanation: `อุณหภูมิร้อนเท่ากับ ${result.toFixed(2)} K` }
        ];
      }

      return { result, resultDisplay: `${(result * 100).toFixed(1)}%`, unit: '', steps };
    }
  },

  {
    id: 'first_law_thermo',
    name: 'First Law of Thermodynamics (ΔU = Q − W)',
    nameTh: 'กฎข้อที่หนึ่งของอุณหพลศาสตร์ (ΔU = Q − W)',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'flame',
    grade: 'ม.6',
    latex: '\\Delta U = Q - W',
    description: 'พลังงานภายในที่เปลี่ยนไป = ความร้อนที่ให้ระบบ ลบ งานที่ระบบทำต่อสิ่งแวดล้อม (เช่น การขยายตัวของแก๊สในกระบอกสูบ)',
    variables: [
      { id: 'dU', symbol: '\\Delta U', name: 'Internal Energy Change', nameTh: 'พลังงานภายในเปลี่ยน (ΔU)', unit: 'J', defaultValue: 300, min: -1e12, max: 1e12, step: 1 },
      { id: 'Q', symbol: 'Q', name: 'Heat Added', nameTh: 'ความร้อนที่ให้ (Q)', unit: 'J', defaultValue: 1000, min: -1e12, max: 1e12, step: 1 },
      { id: 'W', symbol: 'W', name: 'Work Done by System', nameTh: 'งานที่ระบบทำ (W)', unit: 'J', defaultValue: 700, min: -1e12, max: 1e12, step: 1 }
    ],
    solveTargets: ['dU', 'Q', 'W'],
    calculate: (inputs, target = 'dU') => {
      let { dU, Q, W } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dU') {
        result = Q - W;
        steps = [
          { title: 'กฎข้อที่หนึ่ง', latex: '\\Delta U = Q - W', explanation: `Q = ${Q} J, W = ${W} J` },
          { title: 'แทนค่า', latex: `\\Delta U = ${Q} - ${W}`, explanation: 'ความร้อนที่ให้ลบงานที่ระบบทำ' },
          { title: 'ผลลัพธ์', latex: `\\Delta U = ${result.toFixed(1)} \\ \\text{J}`, explanation: result >= 0 ? `พลังงานภายในเพิ่มขึ้น ${result.toFixed(1)} J` : `พลังงานภายในลดลง ${Math.abs(result).toFixed(1)} J` }
        ];
      } else if (target === 'Q') {
        result = dU + W;
        steps = [
          { title: 'จัดรูปหาความร้อน', latex: 'Q = \\Delta U + W', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `Q = ${result.toFixed(1)} \\ \\text{J}`, explanation: `ความร้อนที่ให้ระบบเท่ากับ ${result.toFixed(1)} J` }
        ];
      } else if (target === 'W') {
        result = Q - dU;
        steps = [
          { title: 'จัดรูปหางาน', latex: 'W = Q - \\Delta U', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `W = ${result.toFixed(1)} \\ \\text{J}`, explanation: `งานที่ระบบทำเท่ากับ ${result.toFixed(1)} J` }
        ];
      }

      return { result, unit: 'J', steps };
    }
  },

  {
    id: 'combined_gas_law',
    name: 'Combined Gas Law (P₁V₁/T₁ = P₂V₂/T₂)',
    nameTh: 'กฎรวมแก๊ส (P₁V₁/T₁ = P₂V₂/T₂)',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'wind',
    grade: 'ม.4',
    latex: '\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}',
    description: 'ความสัมพันธ์ของความดัน ปริมาตร และอุณหภูมิ (เคลวิน) ของแก๊สแบบปิดต่อเนื่อง เช่น ลูกโป่งเมื่ออุณหภูมิเปลี่ยน',
    variables: [
      { id: 'P1', symbol: 'P_1', name: 'Pressure 1', nameTh: 'ความดันแรก (P₁)', unit: 'Pa', defaultValue: 100000, min: 0.0000001, max: 1e12, step: 1 },
      { id: 'V1', symbol: 'V_1', name: 'Volume 1', nameTh: 'ปริมาตรแรก (V₁)', unit: 'm³', defaultValue: 0.02, min: 0.0000001, max: 1e9, step: 0.001 },
      { id: 'T1', symbol: 'T_1', name: 'Temp 1 (K)', nameTh: 'อุณหภูมิแรก (T₁)', unit: 'K', defaultValue: 300, min: 0.0001, max: 1e9, step: 1 },
      { id: 'P2', symbol: 'P_2', name: 'Pressure 2', nameTh: 'ความดันหลัง (P₂)', unit: 'Pa', defaultValue: 120000, min: 0.0000001, max: 1e12, step: 1 },
      { id: 'V2', symbol: 'V_2', name: 'Volume 2', nameTh: 'ปริมาตรหลัง (V₂)', unit: 'm³', defaultValue: 0.0185, min: 0.0000001, max: 1e9, step: 0.0001 },
      { id: 'T2', symbol: 'T_2', name: 'Temp 2 (K)', nameTh: 'อุณหภูมิหลัง (T₂)', unit: 'K', defaultValue: 333, min: 0.0001, max: 1e9, step: 1 }
    ],
    solveTargets: ['P1', 'V1', 'T1', 'P2', 'V2', 'T2'],
    calculate: (inputs, target = 'P2') => {
      let { P1, V1, T1, P2, V2, T2 } = inputs;
      let steps = [];
      let result = 0;

      const ratio1 = (P1 * V1) / T1;
      const pvT = (label, expr, val) => ({ title: `ความสัมพันธ์ ${label}`, latex: expr, explanation: `ค่าคงที่ P·V/T = ${val.toFixed(4)}` });

      switch (target) {
        case 'P2':
          if (V2 === 0) throw new Error('V₂ ต้องไม่เป็น 0');
          result = (P1 * V1 * T2) / (T1 * V2);
          steps = [
            pvT('ก่อนขยาย', `\\frac{P_1 V_1}{T_1} = \\frac{${P1} \\times ${V1}}{${T1}}`, ratio1),
            { title: 'แทนค่าเพื่อหา P₂', latex: `P_2 = \\frac{${P1} \\times ${V1} \\times ${T2}}{${T1} \\times ${V2}}`, explanation: 'จัดรูปสมการย้ายตัวแปร' },
            { title: 'ผลลัพธ์', latex: `P_2 = ${result.toFixed(1)} \\ \\text{Pa}`, explanation: `ความดันหลังเท่ากับ ${result.toFixed(1)} Pa` }
          ];
          break;
        case 'V2':
          if (P2 === 0) throw new Error('P₂ ต้องไม่เป็น 0');
          result = (P1 * V1 * T2) / (T1 * P2);
          steps = [
            pvT('ก่อนขยาย', `\\frac{P_1 V_1}{T_1} = \\frac{${P1} \\times ${V1}}{${T1}}`, ratio1),
            { title: 'แทนค่าเพื่อหา V₂', latex: `V_2 = \\frac{${P1} \\times ${V1} \\times ${T2}}{${T1} \\times ${P2}}`, explanation: 'จัดรูปสมการย้ายตัวแปร' },
            { title: 'ผลลัพธ์', latex: `V_2 = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `ปริมาตรหลังเท่ากับ ${result.toFixed(4)} m³` }
          ];
          break;
        case 'T2':
          if (P2 === 0) throw new Error('P₂ ต้องไม่เป็น 0');
          result = (P2 * V2 * T1) / (P1 * V1);
          if (V2 === 0) throw new Error('V₂ ต้องไม่เป็น 0');
          steps = [
            pvT('ก่อนขยาย', `\\frac{P_1 V_1}{T_1} = \\frac{${P1} \\times ${V1}}{${T1}}`, ratio1),
            { title: 'แทนค่าเพื่อหา T₂', latex: `T_2 = \\frac{${P2} \\times ${V2} \\times ${T1}}{${P1} \\times ${V1}}`, explanation: 'จัดรูปสมการย้ายตัวแปร' },
            { title: 'ผลลัพธ์', latex: `T_2 = ${result.toFixed(2)} \\ \\text{K}`, explanation: `อุณหภูมิหลังเท่ากับ ${result.toFixed(2)} K` }
          ];
          break;
        case 'P1':
          result = (P2 * V2 * T1) / (T2 * V1);
          steps = [pvT('หลังขยาย', `\\frac{P_2 V_2}{T_2} = \\frac{${P2} \\times ${V2}}{${T2}}`, (P2 * V2) / T2), { title: 'ผลลัพธ์', latex: `P_1 = ${result.toFixed(1)} \\ \\text{Pa}`, explanation: `ความดันแรกเท่ากับ ${result.toFixed(1)} Pa` }];
          break;
        case 'V1':
          result = (P2 * V2 * T1) / (T2 * P1);
          steps = [pvT('หลังขยาย', `\\frac{P_2 V_2}{T_2} = \\frac{${P2} \\times ${V2}}{${T2}}`, (P2 * V2) / T2), { title: 'ผลลัพธ์', latex: `V_1 = ${result.toFixed(4)} \\ \\text{m}^3`, explanation: `ปริมาตรแรกเท่ากับ ${result.toFixed(4)} m³` }];
          break;
        case 'T1':
          result = (P1 * V1 * T2) / (P2 * V2);
          steps = [pvT('หลังขยาย', `\\frac{P_2 V_2}{T_2} = \\frac{${P2} \\times ${V2}}{${T2}}`, (P2 * V2) / T2), { title: 'ผลลัพธ์', latex: `T_1 = ${result.toFixed(2)} \\ \\text{K}`, explanation: `อุณหภูมิแรกเท่ากับ ${result.toFixed(2)} K` }];
          break;
        default:
          throw new Error('target ไม่ถูกต้อง');
      }

      if (V1 === 0) throw new Error('V₁ ต้องไม่เป็น 0');

      return { result, unit: target === 'V1' || target === 'V2' ? 'm³' : target === 'T1' || target === 'T2' ? 'K' : 'Pa', steps };
    }
  },

];