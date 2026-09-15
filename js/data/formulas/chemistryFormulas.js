/**
 * Chemistry Formulas (เคมี) - ม.4 - ม.6
 * รวมกับ molarity, pH, dilution เดิมใน formulas.js หมวด chemistry
 */

export const CHEMISTRY_FORMULAS = [
  {
    id: 'mole_mass',
    name: 'Moles from Mass (n = m/M)',
    nameTh: 'คำนวณโมลจากมวล (n = m/M)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'hexagon',
    grade: 'ม.4',
    latex: 'n = \\frac{m}{M}',
    description: 'จำนวนโมล = มวล ÷ มวลโมเลกุล/มวลอะตอม (M) เช่น NaCl 58.44 g/mol — 117 g ได้ 2 โมล',
    variables: [
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'จำนวนโมล (n)', unit: 'mol', defaultValue: 2, min: 0, max: 1e15, step: 0.01 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล (m)', unit: 'g', defaultValue: 117, min: 0, max: 1e15, step: 1 },
      { id: 'M', symbol: 'M', name: 'Molar Mass', nameTh: 'มวลโมเลกุล/มวลอะตอม (M)', unit: 'g/mol', defaultValue: 58.44, min: 0.0001, max: 1e6, step: 0.01 }
    ],
    solveTargets: ['n', 'm', 'M'],
    calculate: (inputs, target = 'n') => {
      let { n, m, M } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = m / M;
        steps = [
          { title: 'สูตรคำนวณโมล', latex: 'n = \\frac{m}{M}', explanation: `m = ${m} g, M = ${M} g/mol` },
          { title: 'แทนค่า', latex: `n = \\frac{${m}}{${M}}`, explanation: 'มวลหารมวลโมเลกุล' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `จำนวนโมลเท่ากับ ${result.toFixed(4)} โมล` }
        ];
      } else if (target === 'm') {
        result = n * M;
        steps = [
          { title: 'จัดรูปหามวล', latex: 'm = n \\cdot M', explanation: 'โมลคูณมวลโมเลกุล' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(2)} \\ \\text{g}`, explanation: `มวลเท่ากับ ${result.toFixed(2)} กรัม` }
        ];
      } else if (target === 'M') {
        if (n === 0) throw new Error('โมล n ต้องไม่เป็น 0');
        result = m / n;
        steps = [
          { title: 'จัดรูปหามวลโมเลกุล', latex: 'M = \\frac{m}{n}', explanation: 'มวลหารโมล' },
          { title: 'ผลลัพธ์', latex: `M = ${result.toFixed(2)} \\ \\text{g/mol}`, explanation: `มวลโมเลกุลเท่ากับ ${result.toFixed(2)} g/mol` }
        ];
      }

      return { result, unit: target === 'M' ? 'g/mol' : target === 'm' ? 'g' : 'mol', steps };
    }
  },

  {
    id: 'mole_particles',
    name: 'Moles from Particles (n = N/Nₐ)',
    nameTh: 'คำนวณโมลจากจำนวนอนุภาค (n = N/Nₐ)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'hexagon',
    grade: 'ม.4',
    latex: 'n = \\frac{N}{N_A}',
    description: 'จำนวนโมลจากจำนวนอนุภาค (อะตอม/โมเลกุล/ไอออน) โดย Nₐ = 6.022×10²³ อนุภาค/โมล (เลขอาโวกาโดร)',
    variables: [
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'จำนวนโมล (n)', unit: 'mol', defaultValue: 0.5, min: 0, max: 1e15, step: 0.01 },
      { id: 'N', symbol: 'N', name: 'Number of Particles', nameTh: 'จำนวนอนุภาค (N)', unit: 'อนุภาค', defaultValue: 3.011e23, min: 1, max: 1e30, step: 0 },
      { id: 'NA', symbol: 'N_A', name: "Avogadro's Number", nameTh: 'เลขอาโวกาโดร (Nₐ)', unit: 'อนุภาค/mol', defaultValue: 6.022e23, min: 1e10, max: 1e26, step: 0 }
    ],
    solveTargets: ['n', 'N', 'NA'],
    calculate: (inputs, target = 'n') => {
      let { n, N, NA } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = N / NA;
        steps = [
          { title: 'สูตรคำนวณโมลจากอนุภาค', latex: 'n = \\frac{N}{N_A}', explanation: `N = ${N.toExponential(2)}, Nₐ = ${NA.toExponential(2)}` },
          { title: 'แทนค่า', latex: `n = \\frac{${N.toExponential(2)}}{${NA.toExponential(2)}}`, explanation: 'จำนวนอนุภาคหารเลขอาโวกาโดร' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `จำนวนโมลเท่ากับ ${result.toFixed(4)} โมล` }
        ];
      } else if (target === 'N') {
        result = n * NA;
        steps = [
          { title: 'จัดรูปหาจำนวนอนุภาค', latex: 'N = n \\cdot N_A', explanation: 'โมลคูณเลขอาโวกาโดร' },
          { title: 'ผลลัพธ์', latex: `N = ${result.toExponential(4)} \\ \\text{อนุภาค}`, explanation: `มีอนุภาค ${result.toExponential(3)} ตัว` }
        ];
      } else if (target === 'NA') {
        if (n === 0) throw new Error('โมล n ต้องไม่เป็น 0');
        result = N / n;
        steps = [
          { title: 'จัดรูปหาเลขอาโวกาโดร', latex: 'N_A = \\frac{N}{n}', explanation: 'จำนวนอนุภาคหารโมล' },
          { title: 'ผลลัพธ์', latex: `N_A = ${result.toExponential(4)} \\ \\text{อนุภาค/mol}`, explanation: `เลขอาโวกาโดรเท่ากับ ${result.toExponential(3)}` }
        ];
      }

      return { result, unit: target === 'NA' ? 'อนุภาค/mol' : target === 'N' ? 'อนุภาค' : 'mol', steps };
    }
  },

  {
    id: 'mole_gas_stp',
    name: 'Moles of Gas (STP: n = V/22.4)',
    nameTh: 'โมลของแก๊สมาตรฐาน (n = V/22.4)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'wind',
    grade: 'ม.4',
    latex: 'n = \\frac{V}{22.4}',
    description: 'จำนวนโมลของแก๊สที่ STP (0°C, 1 atm) = ปริมาตรเป็นลิตร ÷ 22.4 ลิตร/โมล เช่น แก๊ส 11.2 L ได้ 0.5 โมล',
    variables: [
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'จำนวนโมล (n)', unit: 'mol', defaultValue: 0.5, min: 0, max: 1e6, step: 0.01 },
      { id: 'V', symbol: 'V', name: 'Volume (STP)', nameTh: 'ปริมาตรแก๊สที่ STP (V)', unit: 'L', defaultValue: 11.2, min: 0, max: 1e9, step: 0.1 },
      { id: 'molarVol', symbol: '22.4', name: 'Molar Volume', nameTh: 'ปริมาตรต่อโมล (22.4 L/mol)', unit: 'L/mol', defaultValue: 22.4, min: 1e-6, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['n', 'V', 'molarVol'],
    calculate: (inputs, target = 'n') => {
      let { n, V, molarVol } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = V / molarVol;
        steps = [
          { title: 'สูตรโมลของแก๊สที่ STP', latex: 'n = \\frac{V}{22.4}', explanation: `V = ${V} L (ที่ STP: 0°C, 1 atm)` },
          { title: 'แทนค่า', latex: `n = \\frac{${V}}{${molarVol}}`, explanation: 'ปริมาตรหาร 22.4 ลิตร/โมล' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `จำนวนโมลเท่ากับ ${result.toFixed(4)} โมล` }
        ];
      } else if (target === 'V') {
        result = n * molarVol;
        steps = [
          { title: 'จัดรูปหาปริมาตร', latex: 'V = n \\cdot 22.4', explanation: 'โมลคูณ 22.4 ลิตร/โมล' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(2)} \\ \\text{L}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(2)} ลิตร` }
        ];
      } else if (target === 'molarVol') {
        if (n === 0) throw new Error('โมล n ต้องไม่เป็น 0');
        result = V / n;
        steps = [
          { title: 'จัดรูปหาปริมาตรต่อโมล', latex: '\\text{Molar Volume} = \\frac{V}{n}', explanation: 'ปริมาตรหารโมล' },
          { title: 'ผลลัพธ์', latex: `= ${result.toFixed(2)} \\ \\text{L/mol}`, explanation: `ปริมาตรต่อโมลเท่ากับ ${result.toFixed(2)} ลิตร/โมล` }
        ];
      }

      return { result, unit: target === 'molarVol' ? 'L/mol' : target === 'V' ? 'L' : 'mol', steps };
    }
  },

  {
    id: 'percent_composition',
    name: 'Percent Composition (%m/m)',
    nameTh: 'ร้อยละโดยมวล (%m/m)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'percent',
    grade: 'ม.4',
    latex: '\\% m/m = \\frac{m_{solute}}{m_{solution}} \\times 100',
    description: 'ร้อยละโดยมวลของตัวถูกละลาย = มวลตัวถูกละลาย ÷ มวลสารละลาย × 100 เช่น เกลือ 25 g ในสารละลาย 200 g = 12.5%',
    variables: [
      { id: 'mMass', symbol: '\\%m/m', name: 'Percent by Mass', nameTh: 'ร้อยละโดยมวล', unit: '%', defaultValue: 12.5, min: 0, max: 100, step: 0.1 },
      { id: 'solute', symbol: 'm_{solute}', name: 'Solute Mass', nameTh: 'มวลตัวถูกละลาย (g)', unit: 'g', defaultValue: 25, min: 0, max: 1e6, step: 0.1 },
      { id: 'solution', symbol: 'm_{solution}', name: 'Solution Mass', nameTh: 'มวลสารละลาย (g)', unit: 'g', defaultValue: 200, min: 0.0000001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['mMass', 'solute', 'solution'],
    calculate: (inputs, target = 'mMass') => {
      let { mMass, solute, solution } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'mMass') {
        result = (solute / solution) * 100;
        steps = [
          { title: 'สูตรร้อยละโดยมวล', latex: '\\% m/m = \\frac{m_{solute}}{m_{solution}} \\times 100', explanation: `ตัวถูกละลาย = ${solute} g, สารละลาย = ${solution} g` },
          { title: 'แทนค่า', latex: `\\% m/m = \\frac{${solute}}{${solution}} \\times 100`, explanation: 'มวลตัวถูกละลายหารมวลสารละลาย' },
          { title: 'ผลลัพธ์', latex: `\\% m/m = ${result.toFixed(2)}\\% `, explanation: `ร้อยละโดยมวลเท่ากับ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'solute') {
        result = (mMass / 100) * solution;
        steps = [
          { title: 'จัดรูปหามวลตัวถูกละลาย', latex: 'm_{solute} = \\frac{\\%m/m}{100} \\times m_{solution}', explanation: 'ร้อยละคูณมวลสารละลายหาร 100' },
          { title: 'ผลลัพธ์', latex: `m_{solute} = ${result.toFixed(2)} \\ \\text{g}`, explanation: `มวลตัวถูกละลายเท่ากับ ${result.toFixed(2)} กรัม` }
        ];
      } else if (target === 'solution') {
        if (mMass === 0) throw new Error('ร้อยละต้องไม่เป็น 0');
        result = (solute * 100) / mMass;
        steps = [
          { title: 'จัดรูปหามวลสารละลาย', latex: 'm_{solution} = \\frac{m_{solute} \\times 100}{\\%m/m}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `m_{solution} = ${result.toFixed(2)} \\ \\text{g}`, explanation: `มวลสารละลายเท่ากับ ${result.toFixed(2)} กรัม` }
        ];
      }

      return { result, unit: target === 'mMass' ? '%' : 'g', steps };
    }
  },

  {
    id: 'molality',
    name: 'Molality (m = n/kg solvent)',
    nameTh: 'โมแลลิตี (m = โมลตัวถูกละลาย/มวลตัวทำละลาย kg)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'beaker',
    grade: 'ม.4-5',
    latex: 'm = \\frac{n_{solute}}{kg_{solvent}}',
    description: 'โมแลลิตี = โมลตัวถูกละลาย ÷ มวลตัวทำละลายเป็นกิโลกรัม ใช้กับสมบัติคอลลิเกทีฟ (ไม่ขึ้นกับอุณหภูมิ)',
    variables: [
      { id: 'molality', symbol: 'm', name: 'Molality', nameTh: 'โมแลลิตี (m)', unit: 'mol/kg', defaultValue: 0.5, min: 0, max: 1000, step: 0.01 },
      { id: 'n', symbol: 'n_{solute}', name: 'Solute Moles', nameTh: 'โมลตัวถูกละลาย', unit: 'mol', defaultValue: 0.25, min: 0, max: 1e9, step: 0.01 },
      { id: 'kg', symbol: 'kg_{solvent}', name: 'Solvent Mass', nameTh: 'มวลตัวทำละลาย', unit: 'kg', defaultValue: 0.5, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['molality', 'n', 'kg'],
    calculate: (inputs, target = 'molality') => {
      let { molality, n, kg } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'molality') {
        result = n / kg;
        steps = [
          { title: 'สูตรโมแลลิตี', latex: 'm = \\frac{n_{solute}}{kg_{solvent}}', explanation: `โมลตัวถูกละลาย = ${n}, ตัวทำละลาย = ${kg} kg` },
          { title: 'แทนค่า', latex: `m = \\frac{${n}}{${kg}}`, explanation: 'โมลหารกิโลกรัมตัวทำละลาย' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(4)} \\ \\text{mol/kg}`, explanation: `โมแลลิตีเท่ากับ ${result.toFixed(4)} mol/kg` }
        ];
      } else if (target === 'n') {
        result = molality * kg;
        steps = [
          { title: 'จัดรูปหาโมลตัวถูกละลาย', latex: 'n_{solute} = m \\cdot kg_{solvent}', explanation: 'โมแลลิตีคูณกิโลกรัมตัวทำละลาย' },
          { title: 'ผลลัพธ์', latex: `n_{solute} = ${result.toFixed(4)} \\ \\text{mol}`, explanation: `โมลตัวถูกละลายเท่ากับ ${result.toFixed(4)} โมล` }
        ];
      } else if (target === 'kg') {
        if (molality === 0) throw new Error('โมแลลิตีต้องไม่เป็น 0');
        result = n / molality;
        steps = [
          { title: 'จัดรูปหามวลตัวทำละลาย', latex: 'kg_{solvent} = \\frac{n_{solute}}{m}', explanation: 'โมลหารโมแลลิตี' },
          { title: 'ผลลัพธ์', latex: `kg_{solvent} = ${result.toFixed(4)} \\ \\text{kg}`, explanation: `ตัวทำละลายเท่ากับ ${result.toFixed(4)} กิโลกรัม` }
        ];
      }

      return { result, unit: target === 'molality' ? 'mol/kg' : target === 'n' ? 'mol' : 'kg', steps };
    }
  },

  {
    id: 'parts_per_million',
    name: 'Concentration (ppm & ppb)',
    nameTh: 'ความเข้มข้น ppm / ppb',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'gauge',
    grade: 'ม.4-5',
    latex: 'ppm = \\frac{m_{solute}}{m_{solution}} \\times 10^6',
    description: 'ppm = มวลตัวถูกละลาย ÷ มวลสารละลาย × 10⁶ ใช้กับสารละลายเจือจาง เช่น สารหนูในน้ำ 0.05 ppm ปลอดภัย',
    variables: [
      { id: 'ppm', symbol: 'ppm', name: 'Parts per Million', nameTh: 'ความเข้มข้น (ppm)', unit: 'ppm', defaultValue: 50, min: 0, max: 1e9, step: 0.1 },
      { id: 'solute', symbol: 'm_{solute}', name: 'Solute Mass', nameTh: 'มวลตัวถูกละลาย (mg)', unit: 'mg', defaultValue: 50, min: 0, max: 1e6, step: 0.1 },
      { id: 'solution', symbol: 'm_{solution}', name: 'Solution Mass', nameTh: 'มวลสารละลาย (kg)', unit: 'kg', defaultValue: 1, min: 0.0000001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['ppm', 'solute', 'solution'],
    calculate: (inputs, target = 'ppm') => {
      let { ppm, solute, solution } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'ppm') {
        result = (solute * 1e-3 / solution) * 1e6;
        steps = [
          { title: 'สูตร ppm', latex: 'ppm = \\frac{m_{solute}}{m_{solution}} \\times 10^6', explanation: `ตัวถูกละลาย = ${solute} mg, สารละลาย = ${solution} kg` },
          { title: 'แทนค่า', latex: `ppm = \\frac{${solute} \\times 10^{-3}}{${solution}} \\times 10^6`, explanation: 'แปลงหน่วยและคูณ 10⁶' },
          { title: 'ผลลัพธ์', latex: `ppm = ${result.toFixed(2)} \\ \\text{ppm}`, explanation: `ความเข้มข้นเท่ากับ ${result.toFixed(2)} ppm` }
        ];
      } else if (target === 'solute') {
        result = (ppm / 1e6) * solution * 1000;
        steps = [
          { title: 'จัดรูปหามวลตัวถูกละลาย', latex: 'm_{solute} = \\frac{ppm}{10^6} \\times m_{solution} \\times 1000', explanation: 'ppm คูณมวลสารละลาย' },
          { title: 'ผลลัพธ์', latex: `m_{solute} = ${result.toFixed(3)} \\ \\text{mg}`, explanation: `มวลตัวถูกละลายเท่ากับ ${result.toFixed(3)} มิลลิกรัม` }
        ];
      } else if (target === 'solution') {
        if (ppm === 0) throw new Error('ppm ต้องไม่เป็น 0');
        result = (solute * 1e-3 / ppm) * 1e6;
        steps = [
          { title: 'จัดรูปหามวลสารละลาย', latex: 'm_{solution} = \\frac{m_{solute} \\times 10^6}{ppm}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `m_{solution} = ${result.toFixed(3)} \\ \\text{kg}`, explanation: `มวลสารละลายเท่ากับ ${result.toFixed(3)} กิโลกรัม` }
        ];
      }

      return { result, unit: target === 'ppm' ? 'ppm' : target === 'solute' ? 'mg' : 'kg', steps };
    }
  },

  {
    id: 'reaction_rate',
    name: 'Reaction Rate (rate = Δ[C]/Δt)',
    nameTh: 'อัตราการเกิดปฏิกิริยา (rate = Δ[C]/Δt)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'flame',
    grade: 'ม.5',
    latex: 'rate = \\frac{\\Delta [C]}{\\Delta t}',
    description: 'อัตราการเกิดปฏิกิริยา = ความเข้มข้นที่เปลี่ยนไป ÷ เวลา เช่น สารตั้งต้นหาย 0.4 mol/L ใน 2 วินาที → 0.2 mol/(L·s)',
    variables: [
      { id: 'rate', symbol: 'rate', name: 'Reaction Rate', nameTh: 'อัตราการเกิดปฏิกิริยา', unit: 'mol/(L·s)', defaultValue: 0.2, min: -1e9, max: 1e9, step: 0.001 },
      { id: 'dC', symbol: '\\Delta [C]', name: 'Concentration Change', nameTh: 'ความเข้มข้นที่เปลี่ยน (ΔC)', unit: 'mol/L', defaultValue: 0.4, min: -1e9, max: 1e9, step: 0.01 },
      { id: 'dt', symbol: '\\Delta t', name: 'Time Change', nameTh: 'เวลาที่เปลี่ยน (Δt)', unit: 's', defaultValue: 2, min: 0.0000001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['rate', 'dC', 'dt'],
    calculate: (inputs, target = 'rate') => {
      let { rate, dC, dt } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'rate') {
        result = dC / dt;
        steps = [
          { title: 'สูตรอัตราการเกิดปฏิกิริยา', latex: 'rate = \\frac{\\Delta [C]}{\\Delta t}', explanation: `ΔC = ${dC} mol/L, Δt = ${dt} s` },
          { title: 'แทนค่า', latex: `rate = \\frac{${dC}}{${dt}}`, explanation: 'ความเข้มข้นที่เปลี่ยนหารเวลา' },
          { title: 'ผลลัพธ์', latex: `rate = ${result.toFixed(4)} \\ \\text{mol/(L·s)}`, explanation: `อัตราการเกิดปฏิกิริยาเท่ากับ ${result.toFixed(4)} mol/(L·s)` }
        ];
      } else if (target === 'dC') {
        result = rate * dt;
        steps = [
          { title: 'จัดรูปหาความเข้มข้นที่เปลี่ยน', latex: '\\Delta [C] = rate \\cdot \\Delta t', explanation: 'อัตราคูณเวลา' },
          { title: 'ผลลัพธ์', latex: `\\Delta [C] = ${result.toFixed(4)} \\ \\text{mol/L}`, explanation: `ความเข้มข้นเปลี่ยน ${result.toFixed(4)} mol/L` }
        ];
      } else if (target === 'dt') {
        if (rate === 0) throw new Error('อัตราต้องไม่เป็น 0');
        result = dC / rate;
        steps = [
          { title: 'จัดรูปแบบ', latex: '\\Delta t = \\frac{\\Delta [C]}{rate}', explanation: 'ความเข้มข้นเปลี่ยนหารอัตรา' },
          { title: 'ผลลัพธ์', latex: `\\Delta t = ${result.toFixed(2)} \\ \\text{s}`, explanation: `เวลาเท่ากับ ${result.toFixed(2)} วินาที` }
        ];
      }

      return { result, unit: target === 'dC' ? 'mol/L' : target === 'dt' ? 's' : 'mol/(L·s)', steps };
    }
  },

  {
    id: 'equilibrium_constant',
    name: 'Equilibrium Constant (Kc)',
    nameTh: 'ค่าคงที่สมดุล (Kc)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'scales',
    grade: 'ม.5',
    latex: 'K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}',
    description: 'ค่าคงที่สมดุลของปฏิกิริยา aA + bB ⇌ cC + dD = ผลคูณความเข้มข้นผลิตภัณฑ์ยกกำลังสัมประสิทธิ์ หารด้วยสารตั้งต้น',
    variables: [
      { id: 'Kc', symbol: 'K_c', name: 'Equilibrium Constant', nameTh: 'ค่าคงที่สมดุล (Kc)', unit: '', defaultValue: 4, min: 1e-12, max: 1e12, step: 0.01 },
      { id: 'C', symbol: '[C]', name: 'Product C (mol/L)', nameTh: 'ความเข้มข้น C', unit: 'mol/L', defaultValue: 1.6, min: 0, max: 1e6, step: 0.01 },
      { id: 'c', symbol: 'c', name: 'Coefficient of C', nameTh: 'สัมประสิทธิ์ของ C', unit: '', defaultValue: 2, min: 1, max: 10, step: 1 },
      { id: 'A', symbol: '[A]', name: 'Reactant A (mol/L)', nameTh: 'ความเข้มข้น A', unit: 'mol/L', defaultValue: 0.8, min: 0.0000001, max: 1e6, step: 0.01 },
      { id: 'a', symbol: 'a', name: 'Coefficient of A', nameTh: 'สัมประสิทธิ์ของ A', unit: '', defaultValue: 1, min: 1, max: 10, step: 1 }
    ],
    solveTargets: ['Kc', 'C'],
    calculate: (inputs, target = 'Kc') => {
      let { Kc, C, c, A, a } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Kc') {
        result = Math.pow(C, c) / Math.pow(A, a);
        steps = [
          { title: 'สูตรค่าคงที่สมดุล', latex: 'K_c = \\frac{[C]^c}{[A]^a}', explanation: 'สมมติปฏิกิริยา aA ⇌ cC (ผลิตภัณฑ์ยกกำลังสัมประสิทธิ์)' },
          { title: 'แทนค่า', latex: `K_c = \\frac{${C}^{${c}}}{${A}^{${a}}} = \\frac{${Math.pow(C, c).toFixed(4)}}{${Math.pow(A, a).toFixed(4)}}`, explanation: 'คำนวณกำลังของแต่ละตัว' },
          { title: 'ผลลัพธ์', latex: `K_c = ${result.toFixed(4)}`, explanation: `ค่าคงที่สมดุลเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'C') {
        result = Math.pow(Kc * Math.pow(A, a), 1 / c);
        steps = [
          { title: 'จัดรูปหาความเข้มข้น C', latex: '[C] = (K_c \\cdot [A]^a)^{1/c}', explanation: `Kc = ${Kc}, [A] = ${A}, a = ${a}, c = ${c}` },
          { title: 'ผลลัพธ์', latex: `[C] = ${result.toFixed(4)} \\ \\text{mol/L}`, explanation: `ความเข้มข้น C เท่ากับ ${result.toFixed(4)} mol/L` }
        ];
      }

      return { result, unit: target === 'C' ? 'mol/L' : '', steps };
    }
  },

  {
    id: 'acid_dissociation',
    name: 'Acid Dissociation (Ka)',
    nameTh: 'ค่าคงที่การแตกตัวของกรดอ่อน (Ka)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'flask-round',
    grade: 'ม.5-6',
    latex: 'K_a = \\frac{[H^+][A^-]}{[HA]}',
    description: 'ค่าคงที่การแตกตัวของกรดอ่อน HA ⇌ H⁺ + A⁻ ใช้กับ pKa และความแรงของกรด (Ka มาก = กรดแรงกว่า)',
    variables: [
      { id: 'Ka', symbol: 'K_a', name: 'Ka', nameTh: 'ค่าคงที่การแตกตัว (Ka)', unit: '', defaultValue: 1.8e-5, min: 1e-14, max: 100, step: 0 },
      { id: 'H', symbol: '[H^+]', name: 'H+ Concentration', nameTh: 'ความเข้มข้น H⁺', unit: 'mol/L', defaultValue: 0.001, min: 1e-10, max: 10, step: 0 },
      { id: 'A', symbol: '[A^-]', name: 'A- Concentration', nameTh: 'ความเข้มข้น A⁻', unit: 'mol/L', defaultValue: 0.001, min: 1e-10, max: 10, step: 0 },
      { id: 'HA', symbol: '[HA]', name: 'HA Concentration', nameTh: 'ความเข้มข้น HA', unit: 'mol/L', defaultValue: 0.0556, min: 1e-10, max: 10, step: 0 }
    ],
    solveTargets: ['Ka', 'H'],
    calculate: (inputs, target = 'Ka') => {
      let { Ka, H, A, HA } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'Ka') {
        if (HA === 0) throw new Error('[HA] ต้องไม่เป็น 0');
        result = (H * A) / HA;
        steps = [
          { title: 'สูตรการแตกตัวของกรดอ่อน', latex: 'K_a = \\frac{[H^+][A^-]}{[HA]}', explanation: `[H⁺] = ${H}, [A⁻] = ${A}, [HA] = ${HA}` },
          { title: 'แทนค่า', latex: `K_a = \\frac{${H} \\times ${A}}{${HA}}`, explanation: 'ผลคูณ H⁺·A⁻ หาร HA' },
          { title: 'ผลลัพธ์', latex: `K_a = ${result.toExponential(3)}`, explanation: `ค่าคงที่การแตกตัวเท่ากับ ${result.toExponential(3)}` }
        ];
      } else if (target === 'H') {
        if (A === 0) throw new Error('[A⁻] ต้องไม่เป็น 0');
        result = (Ka * HA) / A;
        steps = [
          { title: 'จัดรูปหาความเข้มข้น H⁺', latex: '[H^+] = \\frac{K_a \\cdot [HA]}{[A^-]}', explanation: `Ka = ${Ka.toExponential(3)}, [HA] = ${HA}` },
          { title: 'ผลลัพธ์', latex: `[H^+] = ${result.toExponential(3)} \\ \\text{mol/L}`, explanation: `ความเข้มข้น H⁺ เท่ากับ ${result.toExponential(3)} mol/L` }
        ];
      }

      return { result, unit: target === 'H' ? 'mol/L' : '', steps };
    }
  },

  {
    id: 'normality',
    name: 'Normality',
    nameTh: 'ความเข้มข้นนอร์แมล',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'flask',
    grade: 'ม.5',
    latex: 'N = M \\times \\text{val}',
    description: 'นอร์แมลลิตี = โมลาริตี(M) × จำนวนแคตไอออนหรือไฮโดรเจนที่ให้/รับ (val) เช่น HCl 1 M ให้ H⁺ 1 → N = 2 สำหรับ val = 2',
    variables: [
      { id: 'M', symbol: 'M', name: 'Molarity', nameTh: 'โมลาริตี (M)', unit: 'mol/L', defaultValue: 1, min: 0.0001, max: 1e6, step: 0.01 },
      { id: 'val', symbol: 'val', name: 'Valency', nameTh: 'วาเลนซ์', unit: '', defaultValue: 2, min: 1, max: 6, step: 1 },
      { id: 'N', symbol: 'N', name: 'Normality', nameTh: 'นอร์แมลลิตี (N)', unit: 'eq/L', defaultValue: 2, min: 0.0001, max: 1e6, step: 0.01 }
    ],
    solveTargets: ['N', 'M', 'val'],
    calculate: (inputs, target = 'N') => {
      const { M, val, N } = inputs;
      let result, steps;
      if (target === 'N') {
        result = M * val;
        steps = [
          { title: 'สูตร', latex: 'N = M \\times \\text{val}', explanation: `M = ${M} mol/L, val = ${val}` },
          { title: 'แทนค่า', latex: `N = ${M} \\times ${val}`, explanation: 'โมลาริตีคูณวาเลนซ์' },
          { title: 'ผลลัพธ์', latex: `N = ${result} \\ \\text{eq/L}`, explanation: `นอร์แมลลิตีเท่ากับ ${result} eq/L` }
        ];
      } else if (target === 'M') {
        if (val === 0) throw new Error('วาเลนซ์ val ต้องไม่เป็น 0');
        result = N / val;
        steps = [
          { title: 'จัดรูปหา M', latex: 'M = \\frac{N}{\\text{val}}', explanation: `N = ${N} eq/L, val = ${val}` },
          { title: 'ผลลัพธ์', latex: `M = \\frac{${N}}{${val}} = ${result.toFixed(4)} \\ \\text{mol/L}`, explanation: `โมลาริตีเท่ากับ ${result.toFixed(4)} mol/L` }
        ];
      } else {
        if (M === 0) throw new Error('โมลาริตี M ต้องไม่เป็น 0');
        result = N / M;
        steps = [
          { title: 'จัดรูปหา val', latex: '\\text{val} = \\frac{N}{M}', explanation: `N = ${N} eq/L, M = ${M} mol/L` },
          { title: 'ผลลัพธ์', latex: `\\text{val} = \\frac{${N}}{${M}} = ${result.toFixed(2)}`, explanation: `วาเลนซ์เท่ากับ ${result.toFixed(2)}` }
        ];
      }
      return { result, unit: target === 'N' ? 'eq/L' : target === 'M' ? 'mol/L' : '', steps };
    }
  },

  {
    id: 'percent_yield',
    name: 'Percent Yield',
    nameTh: 'เปอร์เซ็นต์ผลได้',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'percent',
    grade: 'ม.5',
    latex: '\\%\\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100',
    description: 'เปอร์เซ็นต์ผลได้ = ผลผลิตจริง/ผลผลิตตามทฤษฎี × 100 เช่น ได้จริง 18 จากทฤษฎี 20 = 90%',
    variables: [
      { id: 'actual', symbol: '\\text{actual}', name: 'Actual Yield', nameTh: 'ผลได้จริง', unit: 'g', defaultValue: 18, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'theoretical', symbol: '\\text{theoretical}', name: 'Theoretical Yield', nameTh: 'ผลได้ตามทฤษฎี', unit: 'g', defaultValue: 20, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'yield', symbol: '\\%\\text{yield}', name: 'Percent Yield', nameTh: 'เปอร์เซ็นต์ผลได้', unit: '%', defaultValue: 90, min: 0.001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['yield', 'actual', 'theoretical'],
    calculate: (inputs, target = 'yield') => {
      const { actual, theoretical, yield: y } = inputs;
      let result, steps;
      if (target === 'yield') {
        if (theoretical === 0) throw new Error('ผลได้ตามทฤษฎีต้องไม่เป็น 0');
        result = (actual / theoretical) * 100;
        steps = [
          { title: 'สูตร', latex: '\\%\\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100', explanation: `actual = ${actual} g, theoretical = ${theoretical} g` },
          { title: 'แทนค่า', latex: `\\%\\text{yield} = \\frac{${actual}}{${theoretical}} \\times 100`, explanation: 'ผลได้จริงหารตามทฤษฎี' },
          { title: 'ผลลัพธ์', latex: `\\%\\text{yield} = ${result.toFixed(2)}%`, explanation: `เปอร์เซ็นต์ผลได้เท่ากับ ${result.toFixed(2)}%` }
        ];
      } else if (target === 'actual') {
        if (y === 0) throw new Error('เปอร์เซ็นต์ผลได้ต้องไม่เป็น 0');
        result = (y / 100) * theoretical;
        steps = [
          { title: 'จัดรูปหาผลได้จริง', latex: '\\text{actual} = \\frac{\\%\\text{yield} \\times \\text{theoretical}}{100}', explanation: `yield = ${y}%, theoretical = ${theoretical} g` },
          { title: 'ผลลัพธ์', latex: `\\text{actual} = \\frac{${y} \\times ${theoretical}}{100} = ${result.toFixed(3)} \\ \\text{g}`, explanation: `ผลได้จริงเท่ากับ ${result.toFixed(3)} g` }
        ];
      } else {
        if (y === 0) throw new Error('เปอร์เซ็นต์ผลได้ต้องไม่เป็น 0');
        result = (actual * 100) / y;
        steps = [
          { title: 'จัดรูปหาผลได้ตามทฤษฎี', latex: '\\text{theoretical} = \\frac{\\text{actual} \\times 100}{\\%\\text{yield}}', explanation: `actual = ${actual} g, yield = ${y}%` },
          { title: 'ผลลัพธ์', latex: `\\text{theoretical} = \\frac{${actual} \\times 100}{${y}} = ${result.toFixed(3)} \\ \\text{g}`, explanation: `ผลได้ตามทฤษฎีเท่ากับ ${result.toFixed(3)} g` }
        ];
      }
      return { result, unit: target === 'yield' ? '%' : 'g', steps };
    }
  }
];