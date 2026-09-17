// @ts-nocheck

/**
 * Biology & Earth Science Formulas (ชีววิทยา + โลกและดาราศาสตร์) - ม.3 - ม.6
 * รวมกับ hardy_weinberg, exponential_growth เดิมใน formulas.js หมวด biology
 */

export const BIOLOGY_FORMULAS = [
  {
    id: 'logistic_growth',
    name: 'Logistic Population Growth',
    nameTh: 'การเติบโตแบบโลจิสติกของประชากร',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'activity',
    grade: 'ม.6',
    latex: '\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)',
    description: 'อัตราการเพิ่มประชากรแบบจำกัดทรัพยากร = r·N(1−N/K) เมื่อ r = อัตราเพิ่มต่อตัว K = ขีดความสามารถรองรับ (carrying capacity)',
    variables: [
      { id: 'dN', symbol: '\\frac{dN}{dt}', name: 'Growth Rate', nameTh: 'อัตราการเพิ่มประชากร', unit: 'ตัว/เวลา', defaultValue: 25, min: -1e9, max: 1e9, step: 1 },
      { id: 'r', symbol: 'r', name: 'Per Capita Rate', nameTh: 'อัตราเพิ่มต่อตัว (r)', unit: '1/เวลา', defaultValue: 0.1, min: -10, max: 10, step: 0.01 },
      { id: 'N', symbol: 'N', name: 'Population Size', nameTh: 'ขนาดประชากร (N)', unit: 'ตัว', defaultValue: 500, min: 0, max: 1e12, step: 1 },
      { id: 'K', symbol: 'K', name: 'Carrying Capacity', nameTh: 'ขีดความสามารถรองรับ (K)', unit: 'ตัว', defaultValue: 1000, min: 0.0001, max: 1e12, step: 1 }
    ],
    solveTargets: ['dN', 'r', 'N', 'K'],
    calculate: (inputs, target = 'dN') => {
      let { dN, r, N, K } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dN') {
        result = r * N * (1 - N / K);
        steps = [
          { title: 'สมการโลจิสติก', latex: '\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)', explanation: `r = ${r}, N = ${N}, K = ${K}` },
          { title: 'แทนค่า', latex: `\\frac{dN}{dt} = ${r} \\times ${N} \\times \\left(1 - \\frac{${N}}{${K}}\\right)`, explanation: `1 − N/K = ${(1 - N / K).toFixed(3)}` },
          { title: 'ผลลัพธ์', latex: `\\frac{dN}{dt} = ${result.toFixed(1)} \\ \\text{ตัว/เวลา}`, explanation: `ประชากรเพิ่ม ${result.toFixed(1)} ตัวต่อหน่วยเวลา` }
        ];
      } else if (target === 'K') {
        const q = 1 - dN / (r * N);
        if (r === 0 || N === 0) throw new Error('r และ N ต้องไม่เป็น 0');
        if (q <= 0) throw new Error('ข้อมูลไม่สอดคล้อง (ต้องมี dN < r·N จึงจะหา K ได้)');
        result = N / q;
        steps = [
          { title: 'จัดรูปหา K', latex: 'K = \\frac{N}{1 - \\frac{dN}{rN}}', explanation: `dN = ${dN}, r = ${r}, N = ${N}` },
          { title: 'ผลลัพธ์', latex: `K = ${result.toFixed(1)} \\ \\text{ตัว}`, explanation: `ขีดความสามารถรองรับเท่ากับ ${result.toFixed(1)} ตัว` }
        ];
      } else if (target === 'r') {
        if (N === 0 || K === N) throw new Error('N ต้องไม่เป็น 0 และ N ≠ K');
        result = dN / (N * (1 - N / K));
        steps = [
          { title: 'จัดรูปหา r', latex: 'r = \\frac{dN/dt}{N(1 - N/K)}', explanation: 'อัตราการเพิ่มหารเทอมปรับค่า' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)} \\ \\text{/เวลา}`, explanation: `อัตราเพิ่มต่อตัวเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'N') {
        if (r === 0) throw new Error('r ต้องไม่เป็น 0');
        const disc = K * K * r * r - 4 * r * K * dN;
        if (disc < 0) throw new Error('ข้อมูลไม่สอดคล้อง (ไม่มีค่า N ที่เป็นจริง)');
        const roots = [];
        const s = Math.sqrt(disc);
        const n1 = (K * r + s) / (2 * r);
        const n2 = (K * r - s) / (2 * r);
        if (n1 >= 0) roots.push(n1);
        if (n2 >= 0 && Math.abs(n2 - n1) > 1e-9) roots.push(n2);
        if (roots.length === 0) throw new Error('ข้อมูลไม่สอดคล้อง (N ติดลบทุกค่า)');
        result = roots[roots.length - 1];
        steps = [
          { title: 'จัดรูปเป็นสมการกำลังสอง', latex: 'rN^2 - KrN + K \\, dN/dt = 0', explanation: 'แก้ด้วยสูตรกำลังสอง: N = \\frac{Kr \\pm \\sqrt{K^2r^2 - 4rK(dN/dt)}}{2r}' },
          { title: 'ผลลัพธ์', latex: `N = ${roots.map(x => x.toFixed(1)).join(' หรือ ')} \\ \\text{ตัว}`, explanation: roots.length > 1 ? `คำตอบที่เป็นไปได้: ${roots.map(x => x.toFixed(1)).join(' และ ')} ตัว (เลือกค่าที่ดูสมเหตุสมผล)` : `ขนาดประชากรเท่ากับ ${result.toFixed(1)} ตัว` }
        ];
      }

      return { result, unit: target === 'dN' ? 'ตัว/เวลา' : target === 'N' || target === 'K' ? 'ตัว' : '1/เวลา', steps };
    }
  },

  {
    id: 'population_change',
    name: 'Population Change (ΔN)',
    nameTh: 'การเปลี่ยนแปลงขนาดประชากร (ΔN)',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'users',
    grade: 'ม.6',
    latex: '\\Delta N = (B + I) - (D + E)',
    description: 'ประชากรเปลี่ยน = (เกิด + อพยพเข้า) − (ตาย + อพยพออก) เช่น เกิด 20 ตาย 8 อพยพเข้า 5 ออก 3 → เพิ่ม 14',
    variables: [
      { id: 'dN', symbol: '\\Delta N', name: 'Population Change', nameTh: 'ประชากรที่เปลี่ยน (ΔN)', unit: 'ตัว', defaultValue: 14, min: -1e12, max: 1e12, step: 1 },
      { id: 'B', symbol: 'B', name: 'Births', nameTh: 'เกิด (B)', unit: 'ตัว', defaultValue: 20, min: 0, max: 1e12, step: 1 },
      { id: 'I', symbol: 'I', name: 'Immigration', nameTh: 'อพยพเข้า (I)', unit: 'ตัว', defaultValue: 5, min: 0, max: 1e12, step: 1 },
      { id: 'D', symbol: 'D', name: 'Deaths', nameTh: 'ตาย (D)', unit: 'ตัว', defaultValue: 8, min: 0, max: 1e12, step: 1 },
      { id: 'E', symbol: 'E', name: 'Emigration', nameTh: 'อพยพออก (E)', unit: 'ตัว', defaultValue: 3, min: 0, max: 1e12, step: 1 }
    ],
    solveTargets: ['dN', 'B', 'D'],
    calculate: (inputs, target = 'dN') => {
      let { dN, B, I, D, E } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'dN') {
        result = (B + I) - (D + E);
        steps = [
          { title: 'สมการการเปลี่ยนแปลงประชากร', latex: '\\Delta N = (B + I) - (D + E)', explanation: `B = ${B}, I = ${I}, D = ${D}, E = ${E}` },
          { title: 'แทนค่า', latex: `\\Delta N = (${B} + ${I}) - (${D} + ${E}) = ${B + I} - ${D + E}`, explanation: 'รวมด้านเพิ่มและด้านลด' },
          { title: 'ผลลัพธ์', latex: `\\Delta N = ${result} \\ \\text{ตัว}`, explanation: result >= 0 ? `ประชากรเพิ่มขึ้น ${result} ตัว` : `ประชากรลดลง ${Math.abs(result)} ตัว` }
        ];
      } else if (target === 'B') {
        result = dN + (D + E) - I;
        steps = [
          { title: 'จัดรูปหาจำนวนเกิด', latex: 'B = \\Delta N + (D + E) - I', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `B = ${result.toFixed(0)} \\ \\text{ตัว}`, explanation: `จำนวนเกิดเท่ากับ ${result.toFixed(0)} ตัว` }
        ];
      } else if (target === 'D') {
        result = (B + I) - dN - E;
        steps = [
          { title: 'จัดรูปหาจำนวนตาย', latex: 'D = (B + I) - \\Delta N - E', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `D = ${result.toFixed(0)} \\ \\text{ตัว}`, explanation: `จำนวนตายเท่ากับ ${result.toFixed(0)} ตัว` }
        ];
      }

      return { result, unit: 'ตัว', steps };
    }
  },

  {
    id: 'doubling_time',
    name: 'Population Doubling Time',
    nameTh: 'เวลาเพิ่มประชากรเป็นเท่าตัว',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'clock',
    grade: 'ม.6',
    latex: 't_d = \\frac{\\ln 2}{r}',
    description: 'เวลาที่ประชากรเพิ่มเป็นเท่าตัวจากการเติบโตแบบเอ็กซ์โพเนนเชียล = ln2 ÷ อัตราเพิ่มต่อตัว เช่น r=0.04 → ~17 ปี',
    variables: [
      { id: 'td', symbol: 't_d', name: 'Doubling Time', nameTh: 'เวลาเพิ่มเท่าตัว (t_d)', unit: 'เวลา', defaultValue: 17.3, min: 0.001, max: 1e9, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Per Capita Rate', nameTh: 'อัตราเพิ่มต่อตัว (r)', unit: '1/เวลา', defaultValue: 0.04, min: 0.0000001, max: 100, step: 0.001 }
    ],
    solveTargets: ['td', 'r'],
    calculate: (inputs, target = 'td') => {
      let { td, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'td') {
        result = Math.LN2 / r;
        steps = [
          { title: 'สูตรเวลาเพิ่มเท่าตัว', latex: 't_d = \\frac{\\ln 2}{r}', explanation: `r = ${r}` },
          { title: 'แทนค่า', latex: `t_d = \\frac{0.6931}{${r}}`, explanation: 'ln2 ≈ 0.6931' },
          { title: 'ผลลัพธ์', latex: `t_d = ${result.toFixed(2)} \\ \\text{หน่วยเวลา}`, explanation: `ประชากรเพิ่มเท่าตัวใน ${result.toFixed(2)} หน่วยเวลา` }
        ];
      } else if (target === 'r') {
        if (td === 0) throw new Error('t_d ต้องไม่เป็น 0');
        result = Math.LN2 / td;
        steps = [
          { title: 'จัดรูปหาอัตราเพิ่ม', latex: 'r = \\frac{\\ln 2}{t_d}', explanation: `t_d = ${td}` },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)} \\ \\text{/เวลา}`, explanation: `อัตราเพิ่มต่อตัวเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: target === 'td' ? 'เวลา' : '1/เวลา', steps };
    }
  },

  {
    id: 'allele_frequency',
    name: 'Allele Frequency (p)',
    nameTh: 'ความถี่แอลลีล (p)',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'dna',
    grade: 'ม.6',
    latex: 'p = \\frac{2N_{AA} + N_{Aa}}{2N}',
    description: 'ความถี่แอลลีล A ในประชากร = (2×จำนวนAA + จำนวนAa) ÷ (2×จำนวนทั้งหมด) ใช้หาความถี่ยีนในประชากร',
    variables: [
      { id: 'p', symbol: 'p', name: 'Frequency of A', nameTh: 'ความถี่แอลลีล A (p)', unit: '', defaultValue: 0.7, min: 0, max: 1, step: 0.01 },
      { id: 'NAA', symbol: 'N_{AA}', name: 'Count AA', nameTh: 'จำนวนยีน AA (ตัว)', unit: 'ตัว', defaultValue: 280, min: 0, max: 1e9, step: 1 },
      { id: 'NAa', symbol: 'N_{Aa}', name: 'Count Aa', nameTh: 'จำนวนยีน Aa (ตัว)', unit: 'ตัว', defaultValue: 140, min: 0, max: 1e9, step: 1 },
      { id: 'N', symbol: 'N', name: 'Total Individuals', nameTh: 'ประชากรทั้งหมด (ตัว)', unit: 'ตัว', defaultValue: 500, min: 1, max: 1e9, step: 1 }
    ],
    solveTargets: ['p', 'NAA'],
    calculate: (inputs, target = 'p') => {
      let { p, NAA, NAa, N } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'p') {
        result = (2 * NAA + NAa) / (2 * N);
        steps = [
          { title: 'สูตรความถี่แอลลีล', latex: 'p = \\frac{2N_{AA} + N_{Aa}}{2N}', explanation: `AA = ${NAA}, Aa = ${NAa}, รวม = ${N}` },
          { title: 'แทนค่า', latex: `p = \\frac{2(${NAA}) + ${NAa}}{2(${N})} = \\frac{${2 * NAA + NAa}}{${2 * N}}`, explanation: 'แอลลีล A ทั้งหมดหารแอลลีลรวม' },
          { title: 'ผลลัพธ์', latex: `p = ${result.toFixed(4)} \\; (${(result * 100).toFixed(2)}\\% )`, explanation: `ความถี่แอลลีล A เท่ากับ ${(result * 100).toFixed(2)}%` }
        ];
      } else if (target === 'NAA') {
        result = (p * 2 * N - NAa) / 2;
        if (result < 0) throw new Error('ข้อมูลไม่สอดคล้อง (NAA ติดลบ)');
        steps = [
          { title: 'จัดรูปหาจำนวน AA', latex: 'N_{AA} = \\frac{2Np - N_{Aa}}{2}', explanation: `p = ${p}, N = ${N}, N_Aa = ${NAa}` },
          { title: 'ผลลัพธ์', latex: `N_{AA} = ${result.toFixed(1)} \\ \\text{ตัว}`, explanation: `จำนวน AA เท่ากับ ${result.toFixed(1)} ตัว` }
        ];
      }

      return { result, unit: target === 'p' ? '' : 'ตัว', steps };
    }
  },

  {
    id: 'cardiac_output',
    name: 'Cardiac Output',
    nameTh: 'ปริมาณเลือดที่หัวใจฉีดต่อนาที',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'heart',
    grade: 'ม.4',
    latex: 'CO = HR \\times SV',
    description: 'cardiac output = อัตราการเต้นหัวใจ (HR) × ปริมาตรเลือดฉีดต่อครั้ง (SV) เช่น 70 ครั้ง/นาที × 75 มล. = 5250 มล./นาที',
    variables: [
      { id: 'HR', symbol: 'HR', name: 'Heart Rate', nameTh: 'อัตราการเต้นหัวใจ', unit: 'ครั้ง/นาที', defaultValue: 70, min: 1, max: 400, step: 1 },
      { id: 'SV', symbol: 'SV', name: 'Stroke Volume', nameTh: 'ปริมาตรเลือดต่อครั้ง', unit: 'mL', defaultValue: 75, min: 1, max: 500, step: 1 },
      { id: 'CO', symbol: 'CO', name: 'Cardiac Output', nameTh: 'Cardiac Output', unit: 'mL/min', defaultValue: 5250, min: 1, max: 1e6, step: 1 }
    ],
    solveTargets: ['CO', 'HR', 'SV'],
    calculate: (inputs, target = 'CO') => {
      const { HR, SV, CO } = inputs;
      let result, steps;
      if (target === 'CO') {
        result = HR * SV;
        steps = [
          { title: 'สูตร', latex: 'CO = HR \\times SV', explanation: `HR = ${HR} ครั้ง/นาที, SV = ${SV} mL` },
          { title: 'แทนค่า', latex: `CO = ${HR} \\times ${SV}`, explanation: 'อัตราเต้นคูณปริมาตรต่อครั้ง' },
          { title: 'ผลลัพธ์', latex: `CO = ${result} \\ \\text{mL/min}`, explanation: `หัวใจฉีดเลือด ${result.toLocaleString()} มล. ต่อนาที` }
        ];
      } else if (target === 'HR') {
        if (SV === 0) throw new Error('SV ต้องไม่เป็น 0');
        result = CO / SV;
        steps = [
          { title: 'จัดรูปหา HR', latex: 'HR = \\frac{CO}{SV}', explanation: `CO = ${CO} mL/min, SV = ${SV} mL` },
          { title: 'ผลลัพธ์', latex: `HR = \\frac{${CO}}{${SV}} = ${result.toFixed(1)} \\ \\text{ครั้ง/นาที}`, explanation: `อัตราการเต้นหัวใจเท่ากับ ${result.toFixed(1)} ครั้ง/นาที` }
        ];
      } else {
        if (HR === 0) throw new Error('HR ต้องไม่เป็น 0');
        result = CO / HR;
        steps = [
          { title: 'จัดรูปหา SV', latex: 'SV = \\frac{CO}{HR}', explanation: `CO = ${CO} mL/min, HR = ${HR} ครั้ง/นาที` },
          { title: 'ผลลัพธ์', latex: `SV = \\frac{${CO}}{${HR}} = ${result.toFixed(1)} \\ \\text{mL}`, explanation: `ปริมาตรเลือดต่อครั้งเท่ากับ ${result.toFixed(1)} mL` }
        ];
      }
      return { result, unit: target === 'CO' ? 'mL/min' : target === 'HR' ? 'ครั้ง/นาที' : 'mL', steps };
    }
  }
];

export const EARTH_SCIENCE_FORMULAS = [
  {
    id: 'surface_gravity',
    name: 'Surface Gravity (g = GM/R²)',
    nameTh: 'ความเร่งโน้มถ่วงพื้นผิวดาว (g = GM/R²)',
    category: 'earth',
    categoryTh: 'โลกและดาราศาสตร์',
    icon: 'globe',
    grade: 'ม.5',
    latex: 'g = \\frac{GM}{R^2}',
    description: 'ความเร่งโน้มถ่วงที่พื้นผิว = G×มวลดาว ÷ รัศมี² เช่น โลก M=5.97×10²⁴ kg, R=6.37×10⁶ m → g ≈ 9.8 m/s²',
    variables: [
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง (g)', unit: 'm/s²', defaultValue: 9.8, min: 0.0001, max: 100, step: 0.01 },
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'ค่าคงที่โน้มถ่วง (G)', unit: 'N·m²/kg²', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Planet Mass', nameTh: 'มวลดาว (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'R', symbol: 'R', name: 'Planet Radius', nameTh: 'รัศมีดาว (R)', unit: 'm', defaultValue: 6.371e6, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['g', 'M', 'R'],
    calculate: (inputs, target = 'g') => {
      let { g, G, M, R } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'g') {
        result = (G * M) / (R * R);
        steps = [
          { title: 'สูตรความเร่งโน้มถ่วง', latex: 'g = \\frac{GM}{R^2}', explanation: `M = ${M.toExponential(2)}, R = ${R.toExponential(2)}` },
          { title: 'แทนค่า', latex: `g = \\frac{(${G})(${M.toExponential(2)})}{(${R.toExponential(2)})^2}`, explanation: `GM = ${(G * M).toExponential(3)}, R² = ${(R * R).toExponential(3)}` },
          { title: 'ผลลัพธ์', latex: `g = ${result.toFixed(2)} \\ \\text{m/s}^2`, explanation: `ความเร่งโน้มถ่วงเท่ากับ ${result.toFixed(2)} m/s²` }
        ];
      } else if (target === 'M') {
        if (G === 0) throw new Error('G ต้องไม่เป็น 0');
        result = (g * R * R) / G;
        steps = [
          { title: 'จัดรูปหามวลดาว', latex: 'M = \\frac{g R^2}{G}', explanation: `g = ${g}, R = ${R.toExponential(2)}` },
          { title: 'ผลลัพธ์', latex: `M = ${result.toExponential(3)} \\ \\text{kg}`, explanation: `มวลดาวเท่ากับ ${result.toExponential(3)} kg` }
        ];
      } else if (target === 'R') {
        if (g === 0) throw new Error('g ต้องไม่เป็น 0');
        result = Math.sqrt((G * M) / g);
        steps = [
          { title: 'จัดรูปหารัศมี', latex: 'R = \\sqrt{\\frac{GM}{g}}', explanation: `g = ${g}, M = ${M.toExponential(2)}` },
          { title: 'ผลลัพธ์', latex: `R = ${result.toExponential(3)} \\ \\text{m}`, explanation: `รัศมีดาวเท่ากับ ${result.toExponential(3)} เมตร` }
        ];
      }

      return { result, unit: target === 'g' ? 'm/s²' : target === 'M' ? 'kg' : 'm', steps };
    }
  },

  {
    id: 'orbital_velocity',
    name: 'Orbital Velocity (v = √(GM/r))',
    nameTh: 'ความเร็ววงโคจร (v = √(GM/r))',
    category: 'earth',
    categoryTh: 'โลกและดาราศาสตร์',
    icon: 'orbit',
    grade: 'ม.5-6',
    latex: 'v = \\sqrt{\\frac{GM}{r}}',
    description: 'ความเร็วที่วัตถุต้องมีเพื่อโคจรรอบดาวด้วยระยะ r จากศูนย์กลาง เช่น ดาวเทียมโคจรรอบโลกที่รัศมี 7,000 km',
    variables: [
      { id: 'v', symbol: 'v', name: 'Orbital Velocity', nameTh: 'ความเร็ววงโคจร (v)', unit: 'm/s', defaultValue: 7543, min: 0, max: 1e9, step: 1 },
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'ค่าคงที่โน้มถ่วง (G)', unit: 'N·m²/kg²', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Central Mass', nameTh: 'มวลของดาวกลาง (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'r', symbol: 'r', name: 'Orbit Radius', nameTh: 'ระยะวงโคจรจากศูนย์กลาง (r)', unit: 'm', defaultValue: 7e6, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['v', 'r'],
    calculate: (inputs, target = 'v') => {
      let { v, G, M, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'v') {
        result = Math.sqrt((G * M) / r);
        steps = [
          { title: 'สูตรความเร็ววงโคจร', latex: 'v = \\sqrt{\\frac{GM}{r}}', explanation: `M = ${M.toExponential(2)}, r = ${r.toExponential(2)} m` },
          { title: 'แทนค่า', latex: `v = \\sqrt{\\frac{(${G})(${M.toExponential(2)})}{${r.toExponential(2)}}}`, explanation: `GM/r = ${(G * M / r).toExponential(3)}` },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(0)} \\ \\text{m/s} \\; (${(result / 1000).toFixed(1)} \\ \\text{km/s})`, explanation: `ความเร็ววงโคจรเท่ากับ ${(result / 1000).toFixed(1)} km/s` }
        ];
      } else if (target === 'r') {
        if (v === 0) throw new Error('ความเร็ว v ต้องไม่เป็น 0');
        result = (G * M) / (v * v);
        steps = [
          { title: 'จัดรูประยะวงโคจร', latex: 'r = \\frac{GM}{v^2}', explanation: `v = ${v} m/s, M = ${M.toExponential(2)}` },
          { title: 'ผลลัพธ์', latex: `r = ${result.toExponential(3)} \\ \\text{m}`, explanation: `ระยะวงโคจรเท่ากับ ${result.toExponential(3)} เมตร` }
        ];
      }

      return { result, unit: target === 'v' ? 'm/s' : 'm', steps };
    }
  },

  {
    id: 'newtons_kepler_period',
    name: 'Orbital Period (T = 2π√(r³/GM))',
    nameTh: 'คาบการโคจร (T = 2π√(r³/GM))',
    category: 'earth',
    categoryTh: 'โลกและดาราศาสตร์',
    icon: 'orbit',
    grade: 'ม.5-6',
    latex: 'T = 2\\pi \\sqrt{\\frac{r^3}{GM}}',
    description: 'คาบการโคจรของดาวรอบดาวกลาง = 2π√(r³/GM) เช่น ดาวเทียมค้างฟ้าที่รัศมี ~42,164 km มีคาบ 24 ชั่วโมง',
    variables: [
      { id: 'T', symbol: 'T', name: 'Orbital Period', nameTh: 'คาบการโคจร (T)', unit: 's', defaultValue: 86164, min: 0.001, max: 1e15, step: 1 },
      { id: 'G', symbol: 'G', name: 'Gravitational Constant', nameTh: 'ค่าคงที่โน้มถ่วง (G)', unit: 'N·m²/kg²', defaultValue: 6.674e-11, min: 1e-14, max: 1e-5, step: 0 },
      { id: 'M', symbol: 'M', name: 'Central Mass', nameTh: 'มวลของดาวกลาง (M)', unit: 'kg', defaultValue: 5.972e24, min: 1e15, max: 1e32, step: 0 },
      { id: 'r', symbol: 'r', name: 'Orbit Radius', nameTh: 'ระยะวงโคจรจากศูนย์กลาง (r)', unit: 'm', defaultValue: 4.2164e7, min: 1e3, max: 1e12, step: 0 }
    ],
    solveTargets: ['T', 'r'],
    calculate: (inputs, target = 'T') => {
      let { T, G, M, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'T') {
        result = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / (G * M));
        steps = [
          { title: 'สูตรคาบการโคจร', latex: 'T = 2\\pi \\sqrt{\\frac{r^3}{GM}}', explanation: `r = ${r.toExponential(2)} m, M = ${M.toExponential(2)}` },
          { title: 'แทนค่า', latex: `T = 2\\pi \\sqrt{\\frac{${Math.pow(r, 3).toExponential(3)}}{${(G * M).toExponential(3)}}}`, explanation: `√(r³/GM) = ${Math.sqrt(Math.pow(r, 3) / (G * M)).toExponential(3)}` },
          { title: 'ผลลัพธ์', latex: `T = ${result.toFixed(0)} \\ \\text{s} \\; (${(result / 3600).toFixed(2)} \\ \\text{ชม.})`, explanation: `คาบการโคจรเท่ากับ ${(result / 3600).toFixed(2)} ชั่วโมง` }
        ];
      } else if (target === 'r') {
        const rad = T / (2 * Math.PI);
        result = Math.cbrt(G * M * rad * rad);
        steps = [
          { title: 'จัดรูปหารัศมีวงโคจร', latex: 'r = \\sqrt[3]{\\frac{GMT^2}{4\\pi^2}}', explanation: `T = ${T} s (${(T / 3600).toFixed(2)} ชม.)` },
          { title: 'ผลลัพธ์', latex: `r = ${result.toExponential(3)} \\ \\text{m}`, explanation: `ระยะวงโคจรเท่ากับ ${result.toExponential(3)} เมตร` }
        ];
      }

      return { result, unit: target === 'T' ? 's' : 'm', steps };
    }
  },

  {
    id: 'earthquake_magnitude',
    name: 'Earthquake Magnitude (M = log(A))',
    nameTh: 'ขนาดแผ่นดินไหว (แมกนิจูด M = log₁₀ A)',
    category: 'earth',
    categoryTh: 'โลกและดาราศาสตร์',
    icon: 'activity',
    grade: 'ม.3-6',
    latex: 'M = \\log_{10} A',
    description: 'แมกนิจูด (มาตราวิกเตอร์) = log₁₀(แอมพลิจูดสัมพัทธ์) โดย M เพิ่ม 1 หมายถึงพลังงานมากกว่า ~32 เท่า ใช้มาตราวิกเตอร์',
    variables: [
      { id: 'M', symbol: 'M', name: 'Magnitude', nameTh: 'ขนาดแผ่นดินไหว (แมกนิจูด)', unit: '', defaultValue: 5, min: -2, max: 12, step: 0.1 },
      { id: 'A', symbol: 'A', name: 'Amplitude Ratio', nameTh: 'แอมพลิจูดสัมพัทธ์ (A)', unit: '', defaultValue: 100000, min: 1, max: 1e12, step: 1 }
    ],
    solveTargets: ['M', 'A'],
    calculate: (inputs, target = 'M') => {
      let { M, A } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'M') {
        result = Math.log10(A);
        steps = [
          { title: 'สูตรแมกนิจูด', latex: 'M = \\log_{10} A', explanation: `A = ${A.toExponential(2)}` },
          { title: 'แทนค่า', latex: `M = \\log_{10}(${A.toExponential(2)})`, explanation: 'หาลอการิทึมฐาน 10' },
          { title: 'ผลลัพธ์', latex: `M = ${result.toFixed(2)}`, explanation: `แมกนิจูดเท่ากับ ${result.toFixed(2)}` }
        ];
      } else if (target === 'A') {
        result = Math.pow(10, M);
        steps = [
          { title: 'จัดรูปหาแอมพลิจูด', latex: 'A = 10^M', explanation: `M = ${M}` },
          { title: 'ผลลัพธ์', latex: `A = ${result.toExponential(3)}`, explanation: `แอมพลิจูดสัมพัทธ์เท่ากับ ${result.toExponential(3)}` }
        ];
      }

      return { result, unit: target === 'A' ? '' : '', steps };
    }
  }
];