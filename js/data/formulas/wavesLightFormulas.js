/**
 * Waves, Sound & Light Formulas (ฟิสิกส์: คลื่น แสง เสียง) - ม.4 - ม.6
 */

export const WAVES_LIGHT_FORMULAS = [
  {
    id: 'wave_period_frequency',
    name: 'Period & Frequency (T = 1/f)',
    nameTh: 'คาบและความถี่คลื่น (T = 1/f)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'activity',
    grade: 'ม.4',
    latex: 'T = \\frac{1}{f}',
    description: 'คาบ (T) และความถี่ (f) ของคลื่นโคจรกลับกัน เช่น คลื่นความถี่ 2 Hz มีคาบ 0.5 วินาที',
    variables: [
      { id: 'T', symbol: 'T', name: 'Period', nameTh: 'คาบ (T)', unit: 's', defaultValue: 0.5, min: 0.0000001, max: 1e9, step: 0.01 },
      { id: 'f', symbol: 'f', name: 'Frequency', nameTh: 'ความถี่ (f)', unit: 'Hz', defaultValue: 2, min: 0.0000001, max: 1e12, step: 0.1 }
    ],
    solveTargets: ['T', 'f'],
    calculate: (inputs, target = 'T') => {
      let { T, f } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'T') {
        result = 1 / f;
        steps = [
          { title: 'สูตรคาบ', latex: 'T = \\frac{1}{f}', explanation: `f = ${f} Hz` },
          { title: 'แทนค่า', latex: `T = \\frac{1}{${f}}`, explanation: 'คาบเป็นส่วนกลับของความถี่' },
          { title: 'ผลลัพธ์', latex: `T = ${result.toFixed(4)} \\ \\text{s}`, explanation: `คาบเท่ากับ ${result.toFixed(4)} วินาที` }
        ];
      } else if (target === 'f') {
        result = 1 / T;
        steps = [
          { title: 'สูตรความถี่', latex: 'f = \\frac{1}{T}', explanation: `T = ${T} s` },
          { title: 'ผลลัพธ์', latex: `f = ${result.toFixed(4)} \\ \\text{Hz}`, explanation: `ความถี่เท่ากับ ${result.toFixed(4)} เฮิรตซ์` }
        ];
      }

      return { result, unit: target === 'T' ? 's' : 'Hz', steps };
    }
  },

  {
    id: 'sound_intensity_db',
    name: 'Sound Level (dB)',
    nameTh: 'ระดับเสียง (เดซิเบล)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'volume-2',
    grade: 'ม.4-5',
    latex: '\\beta = 10 \\log_{10} \\frac{I}{I_0}',
    description: 'ระดับความเข้มเสียงในเดซิเบล = 10·log₁₀(ความเข้ม/ความเข้มอ้างอิง) โดย I₀ = 10⁻¹² W/m² (เกณฑ์การได้ยิน)',
    variables: [
      { id: 'beta', symbol: '\\beta', name: 'Sound Level', nameTh: 'ระดับเสียง (β)', unit: 'dB', defaultValue: 100, min: 0, max: 300, step: 0.1 },
      { id: 'I', symbol: 'I', name: 'Intensity', nameTh: 'ความเข้มเสียง (I)', unit: 'W/m²', defaultValue: 0.01, min: 1e-15, max: 1e6, step: 0 },
      { id: 'I0', symbol: 'I_0', name: 'Reference Intensity', nameTh: 'ความเข้มอ้างอิง (I₀)', unit: 'W/m²', defaultValue: 1e-12, min: 1e-15, max: 1, step: 0 }
    ],
    solveTargets: ['beta', 'I', 'I0'],
    calculate: (inputs, target = 'beta') => {
      let { beta, I, I0 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'beta') {
        if (I0 <= 0) throw new Error('I₀ ต้องเป็นบวก');
        result = 10 * Math.log10(I / I0);
        steps = [
          { title: 'สูตรระดับเสียง', latex: '\\beta = 10 \\log_{10} \\frac{I}{I_0}', explanation: `I = ${I.toExponential(2)} W/m², I₀ = ${I0.toExponential(1)} W/m²` },
          { title: 'แทนค่า', latex: `\\beta = 10 \\log_{10} \\left(\\frac{${I.toExponential(2)}}{${I0.toExponential(1)}}\\right) = 10 \\times ${Math.log10(I / I0).toFixed(3)}`, explanation: `log₁₀(I/I₀) = ${Math.log10(I / I0).toFixed(3)}` },
          { title: 'ผลลัพธ์', latex: `\\beta = ${result.toFixed(2)} \\ \\text{dB}`, explanation: `ระดับเสียงเท่ากับ ${result.toFixed(2)} เดซิเบล` }
        ];
      } else if (target === 'I') {
        result = I0 * Math.pow(10, beta / 10);
        steps = [
          { title: 'จัดรูปหาความเข้ม', latex: 'I = I_0 \\cdot 10^{\\beta/10}', explanation: `β = ${beta} dB, I₀ = ${I0.toExponential(1)}` },
          { title: 'ผลลัพธ์', latex: `I = ${result.toExponential(3)} \\ \\text{W/m}^2`, explanation: `ความเข้มเสียงเท่ากับ ${result.toExponential(3)} W/m²` }
        ];
      } else if (target === 'I0') {
        result = I / Math.pow(10, beta / 10);
        steps = [
          { title: 'จัดรูปหาความเข้มอ้างอิง', latex: 'I_0 = \\frac{I}{10^{\\beta/10}}', explanation: `I = ${I.toExponential(2)}, β = ${beta} dB` },
          { title: 'ผลลัพธ์', latex: `I_0 = ${result.toExponential(3)} \\ \\text{W/m}^2`, explanation: `ความเข้มอ้างอิงเท่ากับ ${result.toExponential(3)} W/m²` }
        ];
      }

      return { result, unit: target === 'beta' ? 'dB' : 'W/m²', steps };
    }
  },

  {
    id: 'beat_frequency',
    name: 'Beat Frequency (f_b = |f₁ − f₂|)',
    nameTh: 'ความถี่บีต (f_beat = |f₁ − f₂|)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'repeat',
    grade: 'ม.4-5',
    latex: 'f_{beat} = |f_1 - f_2|',
    description: 'คลื่นเสียงสองคลื่นความถี่ใกล้กันซ้อนกันเกิดการบีต = ผลต่างความถี่สัมบูรณ์ เช่น 256 Hz กับ 258 Hz เกิดบีต 2 ครั้ง/วินาที',
    variables: [
      { id: 'fbeat', symbol: 'f_{beat}', name: 'Beat Frequency', nameTh: 'ความถี่บีต', unit: 'Hz', defaultValue: 2, min: 0, max: 1e6, step: 0.1 },
      { id: 'f1', symbol: 'f_1', name: 'Frequency 1', nameTh: 'ความถี่ที่ 1 (f₁)', unit: 'Hz', defaultValue: 258, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'f2', symbol: 'f_2', name: 'Frequency 2', nameTh: 'ความถี่ที่ 2 (f₂)', unit: 'Hz', defaultValue: 256, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['fbeat', 'f1', 'f2'],
    calculate: (inputs, target = 'fbeat') => {
      let { fbeat, f1, f2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'fbeat') {
        result = Math.abs(f1 - f2);
        steps = [
          { title: 'สูตรความถี่บีต', latex: 'f_{beat} = |f_1 - f_2|', explanation: `f₁ = ${f1} Hz, f₂ = ${f2} Hz` },
          { title: 'แทนค่า', latex: `f_{beat} = |${f1} - ${f2}|`, explanation: 'ค่าสัมบูรณ์ของผลต่างความถี่' },
          { title: 'ผลลัพธ์', latex: `f_{beat} = ${result.toFixed(2)} \\ \\text{Hz}`, explanation: `ได้ยินบีต ${result.toFixed(2)} ครั้งต่อวินาที` }
        ];
      } else if (target === 'f1') {
        const candidates = [f2 + fbeat, f2 - fbeat];
        result = candidates[0];
        steps = [
          { title: 'จัดรูปหาความถี่ที่ 1', latex: 'f_1 = f_2 \\pm f_{beat}', explanation: `f₂ = ${f2}, f_beat = ${fbeat}` },
          { title: 'ผลลัพธ์', latex: `f_1 = ${candidates[1].toFixed(2)} \\ \\text{Hz} \\; \\text{หรือ} \\; ${candidates[0].toFixed(2)} \\ \\text{Hz}`, explanation: 'มีได้สองค่าขึ้นกับว่าสูงหรือต่ำกว่า f₂' }
        ];
      } else if (target === 'f2') {
        const candidates = [f1 + fbeat, f1 - fbeat];
        result = candidates[0];
        steps = [
          { title: 'จัดรูปหาความถี่ที่ 2', latex: 'f_2 = f_1 \\pm f_{beat}', explanation: `f₁ = ${f1}, f_beat = ${fbeat}` },
          { title: 'ผลลัพธ์', latex: `f_2 = ${candidates[1].toFixed(2)} \\ \\text{Hz} \\; \\text{หรือ} \\; ${candidates[0].toFixed(2)} \\ \\text{Hz}`, explanation: 'มีได้สองค่าขึ้นกับว่าสูงหรือต่ำกว่า f₁' }
        ];
      }

      return { result, unit: target === 'fbeat' ? 'Hz' : '', steps };
    }
  },

  {
    id: 'thin_lens',
    name: 'Thin Lens Equation (1/f = 1/v + 1/u)',
    nameTh: 'สมการเลนส์บาง (1/f = 1/v + 1/u)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'circle-dot',
    grade: 'ม.4',
    latex: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}',
    description: 'ความสัมพันธ์ทางยาวโฟกัส ระยะภาพ และระยะวัตถุของเลนส์/กระจกเงาโค้ง (f=โฟกัส, v=ระยะภาพ, u=ระยะวัตถุ)',
    variables: [
      { id: 'f', symbol: 'f', name: 'Focal Length', nameTh: 'ทางโฟกัส (f)', unit: 'cm', defaultValue: 10, min: 0.0001, max: 1e6, step: 0.1 },
      { id: 'v', symbol: 'v', name: 'Image Distance', nameTh: 'ระยะภาพ (v)', unit: 'cm', defaultValue: 20, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Object Distance', nameTh: 'ระยะวัตถุ (u)', unit: 'cm', defaultValue: 20, min: 0.0001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['f', 'v', 'u'],
    calculate: (inputs, target = 'f') => {
      let { f, v, u } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'f') {
        const sum = 1 / v + 1 / u;
        if (sum === 0) throw new Error('1/v + 1/u = 0 ไม่สามารถหา f ได้');
        result = 1 / sum;
        steps = [
          { title: 'สมการเลนส์บาง', latex: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}', explanation: `v = ${v}, u = ${u}` },
          { title: 'คำนวณส่วนกลับ', latex: `\\frac{1}{f} = \\frac{1}{${v}} + \\frac{1}{${u}} = ${(1 / v + 1 / u).toFixed(4)}`, explanation: 'รวมเศษส่วน' },
          { title: 'ผลลัพธ์', latex: `f = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ทางโฟกัสเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      } else if (target === 'v') {
        const oneOver = 1 / f - 1 / u;
        if (oneOver === 0) throw new Error('1/f − 1/u = 0 ไม่สามารถหา v ได้');
        result = 1 / oneOver;
        steps = [
          { title: 'จัดรูปหาระยะภาพ', latex: '\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}', explanation: `f = ${f}, u = ${u}` },
          { title: 'คำนวณส่วนกลับ', latex: `\\frac{1}{v} = ${(1 / f).toFixed(4)} - ${(1 / u).toFixed(4)} = ${oneOver.toFixed(4)}`, explanation: 'ลบเศษส่วน' },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ระยะภาพเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      } else if (target === 'u') {
        const oneOver = 1 / f - 1 / v;
        if (oneOver === 0) throw new Error('1/f − 1/v = 0 ไม่สามารถหา u ได้');
        result = 1 / oneOver;
        steps = [
          { title: 'จัดรูปหาระยะวัตถุ', latex: '\\frac{1}{u} = \\frac{1}{f} - \\frac{1}{v}', explanation: `f = ${f}, v = ${v}` },
          { title: 'ผลลัพธ์', latex: `u = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ระยะวัตถุเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      }

      return { result, unit: 'cm', steps };
    }
  },

  {
    id: 'magnification',
    name: 'Magnification (m = v/u)',
    nameTh: 'กำลังขยาย (m = v/u)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'zoom-in',
    grade: 'ม.4',
    latex: 'm = \\frac{v}{u} = \\frac{h_i}{h_o}',
    description: 'กำลังขยาย = ระยะภาพ ÷ ระยะวัตถุ = ความสูงภาพ ÷ ความสูงวัตถุ เป็นลบเมื่อภาพหัวกลับ เช่น สไลด์ฉายภาพ',
    variables: [
      { id: 'm', symbol: 'm', name: 'Magnification', nameTh: 'กำลังขยาย (m)', unit: '', defaultValue: 2, min: -1000, max: 1000, step: 0.01 },
      { id: 'v', symbol: 'v', name: 'Image Distance', nameTh: 'ระยะภาพ (v)', unit: 'cm', defaultValue: 40, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'u', symbol: 'u', name: 'Object Distance', nameTh: 'ระยะวัตถุ (u)', unit: 'cm', defaultValue: 20, min: 0.0001, max: 1e6, step: 0.1 },
      { id: 'hi', symbol: 'h_i', name: 'Image Height', nameTh: 'ความสูงภาพ (hᵢ)', unit: 'cm', defaultValue: 10, min: -1e6, max: 1e6, step: 0.1 },
      { id: 'ho', symbol: 'h_o', name: 'Object Height', nameTh: 'ความสูงวัตถุ (hₒ)', unit: 'cm', defaultValue: 5, min: 0.0001, max: 1e6, step: 0.1 }
    ],
    solveTargets: ['m', 'v', 'u', 'hi', 'ho'],
    calculate: (inputs, target = 'm') => {
      let { m, v, u, hi, ho } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'm') {
        result = v / u;
        steps = [
          { title: 'สูตรกำลังขยาย', latex: 'm = \\frac{v}{u}', explanation: `v = ${v} cm, u = ${u} cm` },
          { title: 'แทนค่า', latex: `m = \\frac{${v}}{${u}}`, explanation: 'ระยะภาพหารระยะวัตถุ' },
          { title: 'ผลลัพธ์', latex: `m = ${result.toFixed(2)}`, explanation: result < 0 ? `ขยาย ${Math.abs(result).toFixed(2)} เท่า และภาพหัวกลับ` : `ขยาย ${result.toFixed(2)} เท่า` }
        ];
      } else if (target === 'v') {
        result = m * u;
        steps = [
          { title: 'จัดรูปหาระยะภาพ', latex: 'v = m \\cdot u', explanation: `m = ${m}, u = ${u}` },
          { title: 'ผลลัพธ์', latex: `v = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ระยะภาพเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      } else if (target === 'u') {
        if (m === 0) throw new Error('m ต้องไม่เป็น 0');
        result = v / m;
        steps = [
          { title: 'จัดรูปหาระยะวัตถุ', latex: 'u = \\frac{v}{m}', explanation: 'ระยะภาพหารกำลังขยาย' },
          { title: 'ผลลัพธ์', latex: `u = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ระยะวัตถุเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      } else if (target === 'hi') {
        result = m * ho;
        steps = [
          { title: 'จัดรูปหาความสูงภาพ', latex: 'h_i = m \\cdot h_o', explanation: `m = ${m}, hₒ = ${ho} cm` },
          { title: 'ผลลัพธ์', latex: `h_i = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ความสูงภาพเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      } else if (target === 'ho') {
        if (m === 0) throw new Error('m ต้องไม่เป็น 0');
        result = hi / m;
        steps = [
          { title: 'จัดรูปหาความสูงวัตถุ', latex: 'h_o = \\frac{h_i}{m}', explanation: 'ความสูงภาพหารกำลังขยาย' },
          { title: 'ผลลัพธ์', latex: `h_o = ${result.toFixed(2)} \\ \\text{cm}`, explanation: `ความสูงวัตถุเท่ากับ ${result.toFixed(2)} เซนติเมตร` }
        ];
      }

      return { result, unit: target === 'm' ? '' : 'cm', steps };
    }
  },

  {
    id: 'refraction_index',
    name: 'Index of Refraction (n = c/v)',
    nameTh: 'ดัชนีหักเห (n = c/v)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'eye',
    grade: 'ม.5',
    latex: 'n = \\frac{c}{v}',
    description: 'ดัชนีหักเหของตัวกลาง = ความเร็วแสงในสุญญากาศ ÷ ความเร็วแสงในตัวกลาง เช่น น้ำ n=1.33, แก้ว n=1.5',
    variables: [
      { id: 'n', symbol: 'n', name: 'Index of Refraction', nameTh: 'ดัชนีหักเห (n)', unit: '', defaultValue: 1.333, min: 1, max: 5, step: 0.001 },
      { id: 'c', symbol: 'c', name: 'Speed of Light (vacuum)', nameTh: 'ความเร็วแสงในสุญญากาศ (c)', unit: 'm/s', defaultValue: 3e8, min: 1e6, max: 1e10, step: 0 },
      { id: 'v', symbol: 'v', name: 'Speed in Medium', nameTh: 'ความเร็วแสงในตัวกลาง (v)', unit: 'm/s', defaultValue: 2.25e8, min: 1e6, max: 1e10, step: 0 }
    ],
    solveTargets: ['n', 'v'],
    calculate: (inputs, target = 'n') => {
      let { n, c, v } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'n') {
        result = c / v;
        steps = [
          { title: 'สูตรดัชนีหักเห', latex: 'n = \\frac{c}{v}', explanation: `c = ${c.toExponential(2)}, v = ${v.toExponential(2)} m/s` },
          { title: 'แทนค่า', latex: `n = \\frac{${c.toExponential(2)}}{${v.toExponential(2)}}`, explanation: 'ความเร็วในสุญญากาศหารความเร็วในตัวกลาง' },
          { title: 'ผลลัพธ์', latex: `n = ${result.toFixed(4)}`, explanation: `ดัชนีหักเหเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'v') {
        if (n === 0) throw new Error('n ต้องไม่เป็น 0');
        result = c / n;
        steps = [
          { title: 'จัดรูปหาความเร็วในตัวกลาง', latex: 'v = \\frac{c}{n}', explanation: `c = ${c.toExponential(2)}, n = ${n}` },
          { title: 'ผลลัพธ์', latex: `v = ${result.toExponential(3)} \\ \\text{m/s}`, explanation: `ความเร็วแสงในตัวกลางเท่ากับ ${result.toExponential(3)} m/s` }
        ];
      }

      return { result, unit: target === 'n' ? '' : 'm/s', steps };
    }
  },

  {
    id: 'snells_law',
    name: "Snell's Law (n₁sinθ₁ = n₂sinθ₂)",
    nameTh: 'กฎของสเนลล์ (n₁sinθ₁ = n₂sinθ₂)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'eye',
    grade: 'ม.5',
    latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2',
    description: 'ความสัมพันธ์ของมุมหักเหเมื่อแสงเดินทางข้ามตัวกลาง เช่น แสงจากอากาศ (n=1) เข้าน้ำ (n=1.33) ที่มุม 45°',
    variables: [
      { id: 'n1', symbol: 'n_1', name: 'Index 1', nameTh: 'ดัชนีหักเหตัวกลางที่ 1', unit: '', defaultValue: 1, min: 0.0001, max: 5, step: 0.01 },
      { id: 'theta1', symbol: '\\theta_1', name: 'Angle 1 (°)', nameTh: 'มุมในตัวกลางที่ 1', unit: '°', defaultValue: 45, min: 0, max: 90, step: 1 },
      { id: 'n2', symbol: 'n_2', name: 'Index 2', nameTh: 'ดัชนีหักเหตัวกลางที่ 2', unit: '', defaultValue: 1.333, min: 0.0001, max: 5, step: 0.01 },
      { id: 'theta2', symbol: '\\theta_2', name: 'Angle 2 (°)', nameTh: 'มุมในตัวกลางที่ 2', unit: '°', defaultValue: 32, min: 0, max: 90, step: 1 }
    ],
    solveTargets: ['theta2', 'theta1'],
    calculate: (inputs, target = 'theta2') => {
      let { n1, theta1, n2, theta2 } = inputs;
      const r1 = theta1 * Math.PI / 180;
      const r2 = theta2 * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'theta2') {
        const x = (n1 * Math.sin(r1)) / n2;
        if (Math.abs(x) > 1) throw new Error('ไม่สามารถเกิดการหักเหได้ (sinθ₂ เกิน 1 → เกิดการสะท้อนกลับหมด)');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: "กฎของสเนลล์", latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', explanation: `n₁ = ${n1}, θ₁ = ${theta1}°, n₂ = ${n2}` },
          { title: 'จัดรูปหามุมหักเห', latex: `\\sin\\theta_2 = \\frac{${n1} \\sin(${theta1}°)}{${n2}} = ${x.toFixed(4)}`, explanation: `sin(${theta1}°) = ${Math.sin(r1).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `\\theta_2 = ${result.toFixed(2)}°`, explanation: `มุมหักเหเท่ากับ ${result.toFixed(2)} องศา` }
        ];
      } else if (target === 'theta1') {
        const x = (n2 * Math.sin(r2)) / n1;
        if (Math.abs(x) > 1) throw new Error('sinθ₁ เกิน 1 ข้อมูลไม่สอดคล้อง');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: "กฎของสเนลล์", latex: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', explanation: `θ₂ = ${theta2}°, n₁ = ${n1}, n₂ = ${n2}` },
          { title: 'จัดรูปหามุมตกกระทบ', latex: `\\sin\\theta_1 = \\frac{${n2} \\sin(${theta2}°)}{${n1}} = ${x.toFixed(4)}`, explanation: `sin(${theta2}°) = ${Math.sin(r2).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `\\theta_1 = ${result.toFixed(2)}°`, explanation: `มุมตกกระทบเท่ากับ ${result.toFixed(2)} องศา` }
        ];
      }

      return { result, unit: '°', steps };
    }
  },

  {
    id: 'critical_angle',
    name: 'Critical Angle (sinθc = n₂/n₁)',
    nameTh: 'มุมวิกฤต (sinθc = n₂/n₁)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'eye',
    grade: 'ม.5',
    latex: '\\sin\\theta_c = \\frac{n_2}{n_1}',
    description: 'มุมตกกระทบที่ทำให้เกิดการสะท้อนกลับหมด ใช้ในใยแก้วนำแสง เช่น แก้ว n=1.5 ไปอากาศ n=1 → θc ≈ 41.8°',
    variables: [
      { id: 'thetaC', symbol: '\\theta_c', name: 'Critical Angle', nameTh: 'มุมวิกฤต (θc)', unit: '°', defaultValue: 41.8, min: 0, max: 90, step: 0.1 },
      { id: 'n1', symbol: 'n_1', name: 'Index (denser)', nameTh: 'ดัชนีหักเหตัวกลางหนาแน่น (n₁)', unit: '', defaultValue: 1.5, min: 0.0001, max: 5, step: 0.01 },
      { id: 'n2', symbol: 'n_2', name: 'Index (rarer)', nameTh: 'ดัชนีหักเหตัวกลางเบา (n₂)', unit: '', defaultValue: 1, min: 0.0001, max: 5, step: 0.01 }
    ],
    solveTargets: ['thetaC', 'n1', 'n2'],
    calculate: (inputs, target = 'thetaC') => {
      let { thetaC, n1, n2 } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'thetaC') {
        const x = n2 / n1;
        if (x > 1) throw new Error('n₂/n₁ เกิน 1: ตัวกลางที่ 2 ต้องเบากว่า จึงไม่เกิดมุมวิกฤต');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'สูตรมุมวิกฤต', latex: '\\sin\\theta_c = \\frac{n_2}{n_1}', explanation: `n₁ = ${n1}, n₂ = ${n2}` },
          { title: 'แทนค่า', latex: `\\sin\\theta_c = \\frac{${n2}}{${n1}} = ${x.toFixed(4)}`, explanation: 'หาอาร์กไซน์' },
          { title: 'ผลลัพธ์', latex: `\\theta_c = ${result.toFixed(2)}°`, explanation: `มุมวิกฤตเท่ากับ ${result.toFixed(2)} องศา` }
        ];
      } else if (target === 'n1') {
        if (thetaC === 90) throw new Error('θc = 90° ไม่สามารถหา n₁ ได้');
        result = n2 / Math.sin(thetaC * Math.PI / 180);
        steps = [
          { title: 'จัดรูปหาดัชนีตัวกลางหนาแน่น', latex: 'n_1 = \\frac{n_2}{\\sin\\theta_c}', explanation: `n₂ = ${n2}, θc = ${thetaC}°` },
          { title: 'ผลลัพธ์', latex: `n_1 = ${result.toFixed(4)}`, explanation: `ดัชนีหักเหเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'n2') {
        result = n1 * Math.sin(thetaC * Math.PI / 180);
        steps = [
          { title: 'จัดรูปหาดัชนีตัวกลางเบา', latex: 'n_2 = n_1 \\sin\\theta_c', explanation: `n₁ = ${n1}, θc = ${thetaC}°` },
          { title: 'ผลลัพธ์', latex: `n_2 = ${result.toFixed(4)}`, explanation: `ดัชนีหักเหเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: target === 'thetaC' ? '°' : '', steps };
    }
  },

  {
    id: 'diffraction_grating',
    name: 'Diffraction Grating (d·sinθ = mλ)',
    nameTh: 'เกรตติงเลี้ยวเบน (d·sinθ = mλ)',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'grid',
    grade: 'ม.6',
    latex: 'd \\sin\\theta = m \\lambda',
    description: 'ตำแหน่งแถบสว่าง (m) ของแสงผ่านเกรตติง ใช้หาแยกสีสเปกตรัม ต้องใช้หน่วยเดียวกันระหว่าง d และ λ',
    variables: [
      { id: 'd', symbol: 'd', name: 'Slit Spacing', nameTh: 'ระยะห่างช่อง (d)', unit: 'm', defaultValue: 2e-5, min: 1e-9, max: 1, step: 0 },
      { id: 'theta', symbol: '\\theta', name: 'Angle (°)', nameTh: 'มุมสเปกตรัม (θ)', unit: '°', defaultValue: 3.3, min: 0, max: 90, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Order', nameTh: 'อันดับแถบ (m)', unit: '', defaultValue: 1, min: 0, max: 100, step: 1 },
      { id: 'lambda', symbol: '\\lambda', name: 'Wavelength', nameTh: 'ความยาวคลื่น (λ)', unit: 'm', defaultValue: 5e-7, min: 1e-12, max: 1, step: 0 }
    ],
    solveTargets: ['lambda', 'd', 'theta'],
    calculate: (inputs, target = 'lambda') => {
      let { d, theta, m, lambda } = inputs;
      const rad = theta * Math.PI / 180;
      let steps = [];
      let result = 0;

      if (target === 'lambda') {
        result = (d * Math.sin(rad)) / m;
        steps = [
          { title: 'สูตรเกรตติง', latex: 'd \\sin\\theta = m \\lambda', explanation: `d = ${d.toExponential(2)} m, θ = ${theta}°, m = ${m}` },
          { title: 'จัดรูปหาความยาวคลื่น', latex: `\\lambda = \\frac{${d.toExponential(2)} \\times \\sin(${theta}°)}{${m}}`, explanation: `sin(${theta}°) = ${Math.sin(rad).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `\\lambda = ${result.toExponential(3)} \\ \\text{m} \\; (${(result * 1e9).toFixed(1)} \\ \\text{nm})`, explanation: `ความยาวคลื่นเท่ากับ ${(result * 1e9).toFixed(1)} นาโนเมตร` }
        ];
      } else if (target === 'd') {
        const denom = Math.sin(rad);
        if (denom === 0) throw new Error('sinθ ต้องไม่เป็น 0 (มุมต้องไม่เป็น 0°)');
        result = (m * lambda) / denom;
        steps = [
          { title: 'จัดรูปหาระยะห่างช่อง', latex: 'd = \\frac{m\\lambda}{\\sin\\theta}', explanation: `m = ${m}, λ = ${lambda.toExponential(2)}, θ = ${theta}°` },
          { title: 'ผลลัพธ์', latex: `d = ${result.toExponential(3)} \\ \\text{m}`, explanation: `ระยะห่างช่องเท่ากับ ${result.toExponential(3)} เมตร` }
        ];
      } else if (target === 'theta') {
        const x = (m * lambda) / d;
        if (Math.abs(x) > 1) throw new Error('(mλ)/d เกิน 1 ไม่มีแถบนั้นเกิดขึ้น');
        result = Math.asin(x) * 180 / Math.PI;
        steps = [
          { title: 'จัดรูปหามุม', latex: '\\sin\\theta = \\frac{m\\lambda}{d}', explanation: `m = ${m}, λ = ${lambda.toExponential(2)}, d = ${d.toExponential(2)}` },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(2)}°`, explanation: `มุมสเปกตรัมเท่ากับ ${result.toFixed(2)} องศา` }
        ];
      }

      return { result, unit: target === 'd' ? 'm' : target === 'lambda' ? 'm' : '°', steps };
    }
  }
];