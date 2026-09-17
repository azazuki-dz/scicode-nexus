// @ts-nocheck

/**
 * Geometry Formulas (เรขาคณิต) - ม.1 - ม.6
 * พื้นที่ ปริมล วงกลม ปริมาตร พื้นที่ผิว
 */

export const GEOMETRY_FORMULAS = [
  {
    id: 'area_triangle',
    name: 'Area of Triangle',
    nameTh: 'พื้นที่รูปสามเหลี่ยม',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'triangle',
    grade: 'ม.1-3',
    latex: 'A = \\frac{1}{2} \\cdot b \\cdot h',
    description: 'พื้นที่สามเหลี่ยมเท่ากับครึ่งหนึ่งของฐานคูณความสูง (ความสูงต้องตั้งฉากกับฐาน)',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่', unit: 'ตร.หน่วย', defaultValue: 30, min: 0, max: 1e12, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Base', nameTh: 'ความยาวฐาน', unit: 'หน่วย', defaultValue: 12, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['A', 'b', 'h'],
    calculate: (inputs, target = 'A') => {
      let { A, b, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'A') {
        result = 0.5 * b * h;
        steps = [
          { title: 'สูตรพื้นที่สามเหลี่ยม', latex: 'A = \\frac{1}{2} b h', explanation: 'ครึ่งหนึ่งของฐานคูณความสูง' },
          { title: 'แทนค่า', latex: `A = 0.5 \\times ${b} \\times ${h}`, explanation: `ฐาน = ${b}, สูง = ${h}` },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}`, explanation: `พื้นที่เท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
        ];
      } else if (target === 'b') {
        if (h === 0) throw new Error('ความสูง (h) ต้องไม่เป็น 0');
        result = (2 * A) / h;
        steps = [
          { title: 'จัดรูปหาฐาน', latex: 'b = \\frac{2A}{h}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `b = ${result.toFixed(4)}`, explanation: `ฐานยาว ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'h') {
        if (b === 0) throw new Error('ฐาน (b) ต้องไม่เป็น 0');
        result = (2 * A) / b;
        steps = [
          { title: 'จัดรูปหาความสูง', latex: 'h = \\frac{2A}{b}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(4)}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'area_circle',
    name: 'Area of Circle',
    nameTh: 'พื้นที่วงกลม',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'circle',
    grade: 'ม.2-3',
    latex: 'A = \\pi r^2',
    description: 'พื้นที่วงกลมเท่ากับ π คูณรัศมียกกำลังสอง โดย π ≈ 3.14159',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่วงกลม', unit: 'ตร.หน่วย', defaultValue: 78.5398, min: 0, max: 1e12, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมี', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['A', 'r'],
    calculate: (inputs, target = 'A') => {
      let { A, r } = inputs;
      let steps = [];
      let result = 0;
      const PI = Math.PI;

      if (target === 'A') {
        result = PI * Math.pow(r, 2);
        steps = [
          { title: 'สูตรพื้นที่วงกลม', latex: 'A = \\pi r^2', explanation: 'π ≈ 3.14159' },
          { title: 'แทนค่า', latex: `A = \\pi \\times ${r}^2 = \\pi \\times ${(r * r).toFixed(4)}`, explanation: `รัศมี r = ${r}` },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}`, explanation: `พื้นที่เท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
        ];
      } else if (target === 'r') {
        result = Math.sqrt(A / PI);
        steps = [
          { title: 'จัดรูปหารัศมี', latex: 'r = \\sqrt{\\frac{A}{\\pi}}', explanation: 'ย้ายข้างแล้วถอดราก' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `รัศมีเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'circumference',
    name: 'Circumference of Circle',
    nameTh: 'เส้นรอบวงของวงกลม',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'circle',
    grade: 'ม.2-3',
    latex: 'C = 2 \\pi r',
    description: 'ความยาวรอบวงกลมเท่ากับ 2πr หรือ πd (d = เส้นผ่านศูนย์กลาง)',
    variables: [
      { id: 'C', symbol: 'C', name: 'Circumference', nameTh: 'เส้นรอบวง', unit: 'หน่วย', defaultValue: 31.4159, min: 0, max: 1e12, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมี', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['C', 'r'],
    calculate: (inputs, target = 'C') => {
      let { C, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'C') {
        result = 2 * Math.PI * r;
        steps = [
          { title: 'สูตรเส้นรอบวง', latex: 'C = 2 \\pi r', explanation: 'π ≈ 3.14159' },
          { title: 'ผลลัพธ์', latex: `C = ${result.toFixed(4)}`, explanation: `เส้นรอบวงเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'r') {
        result = C / (2 * Math.PI);
        steps = [
          { title: 'จัดรูปหารัศมี', latex: 'r = \\frac{C}{2\\pi}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `รัศมีเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'area_trapezoid',
    name: 'Area of Trapezoid',
    nameTh: 'พื้นที่รูปสี่เหลี่ยมคางหมู',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'layers',
    grade: 'ม.1-3',
    latex: 'A = \\frac{(a + b)}{2} \\cdot h',
    description: 'พื้นที่สี่เหลี่ยมคางหมูเท่ากับครึ่งหนึ่งของผลบวกด้านคู่ขนานคูณความสูง',
    variables: [
      { id: 'A', symbol: 'A', name: 'Area', nameTh: 'พื้นที่', unit: 'ตร.หน่วย', defaultValue: 40, min: 0, max: 1e12, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Parallel Side a', nameTh: 'ด้านคู่ขนาน a', unit: 'หน่วย', defaultValue: 10, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Parallel Side b', nameTh: 'ด้านคู่ขนาน b', unit: 'หน่วย', defaultValue: 6, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['A', 'h'],
    calculate: (inputs, target = 'A') => {
      let { A, a, b, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'A') {
        result = ((a + b) / 2) * h;
        steps = [
          { title: 'สูตรพื้นที่คางหมู', latex: 'A = \\frac{a + b}{2} \\cdot h', explanation: 'เฉลี่ยด้านคู่ขนาน คูณความสูง' },
          { title: 'แทนค่า', latex: `A = \\frac{${a} + ${b}}{2} \\times ${h}`, explanation: `a = ${a}, b = ${b}, h = ${h}` },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}`, explanation: `พื้นที่เท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
        ];
      } else if (target === 'h') {
        if (a + b === 0) throw new Error('ผลรวมด้านคู่ขนานต้องไม่เป็น 0');
        result = (2 * A) / (a + b);
        steps = [
          { title: 'จัดรูปหาความสูง', latex: 'h = \\frac{2A}{a + b}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(4)}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'sector_area',
    name: 'Area of Circle Sector',
    nameTh: 'พื้นที่เซกเตอร์วงกลม',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'pie-chart',
    grade: 'ม.3',
    latex: 'A = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2',
    description: 'พื้นที่เซกเตอร์ (พายวงกลมชิ้น) คำนวณจากสัดส่วนของมุมศูนย์กลาง θ เทียบกับ 360°',
    variables: [
      { id: 'A', symbol: 'A', name: 'Sector Area', nameTh: 'พื้นที่เซกเตอร์', unit: 'ตร.หน่วย', defaultValue: 32.7249, min: 0, max: 1e12, step: 0.1 },
      { id: 'theta', symbol: '\\theta', name: 'Central Angle', nameTh: 'มุมศูนย์กลาง', unit: '°', defaultValue: 150, min: 0.0001, max: 360, step: 1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมี', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['A', 'theta'],
    calculate: (inputs, target = 'A') => {
      let { A, theta, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'A') {
        result = (theta / 360) * Math.PI * r * r;
        steps = [
          { title: 'สูตรพื้นที่เซกเตอร์', latex: 'A = \\frac{\\theta}{360} \\cdot \\pi r^2', explanation: 'สัดส่วนมุมเทียบกับวงกลมเต็มวง' },
          { title: 'แทนค่า', latex: `A = \\frac{${theta}}{360} \\times \\pi \\times ${r}^2`, explanation: `θ = ${theta}°, r = ${r}` },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}`, explanation: `พื้นที่เซกเตอร์เท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
        ];
      } else if (target === 'theta') {
        if (r === 0) throw new Error('รัศมี (r) ต้องไม่เป็น 0');
        result = (A / (Math.PI * r * r)) * 360;
        steps = [
          { title: 'จัดรูปหามุมศูนย์กลาง', latex: '\\theta = \\frac{A}{\\pi r^2} \\cdot 360', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `\\theta = ${result.toFixed(4)}^\\circ`, explanation: `มุมศูนย์กลางเท่ากับ ${result.toFixed(4)} องศา` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_box',
    name: 'Volume of Rectangular Prism',
    nameTh: 'ปริมาตรทรงสี่เหลี่ยมมุมฉาก',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'box',
    grade: 'ม.1-3',
    latex: 'V = l \\cdot w \\cdot h',
    description: 'ปริมาตรของกล่องทรงสี่เหลี่ยม = กว้าง × ยาว × สูง',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'ลบ.หน่วย', defaultValue: 60, min: 0, max: 1e15, step: 0.1 },
      { id: 'l', symbol: 'l', name: 'Length', nameTh: 'ความยาว', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'w', symbol: 'w', name: 'Width', nameTh: 'ความกว้าง', unit: 'หน่วย', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'หน่วย', defaultValue: 3, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['V', 'h'],
    calculate: (inputs, target = 'V') => {
      let { V, l, w, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = l * w * h;
        steps = [
          { title: 'สูตรปริมาตรทรงสี่เหลี่ยม', latex: 'V = l \\cdot w \\cdot h', explanation: 'กว้าง × ยาว × สูง' },
          { title: 'แทนค่า', latex: `V = ${l} \\times ${w} \\times ${h}`, explanation: 'คูณทั้งสามด้าน' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} ลบ.หน่วย` }
        ];
      } else if (target === 'h') {
        if (l * w === 0) throw new Error('ความยาว×ความกว้างต้องไม่เป็น 0');
        result = V / (l * w);
        steps = [
          { title: 'จัดรูปหาความสูง', latex: 'h = \\frac{V}{l \\cdot w}', explanation: 'ปริมาตรหารด้วยพื้นที่ฐาน' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(4)}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_cylinder',
    name: 'Volume of Cylinder',
    nameTh: 'ปริมาตรทรงกระบอก',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'disc',
    grade: 'ม.1-3',
    latex: 'V = \\pi r^2 h',
    description: 'ปริมาตรทรงกระบอก = พื้นที่ฐานวงกลม (πr²) × ความสูง',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'ลบ.หน่วย', defaultValue: 157.0796, min: 0, max: 1e15, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมีฐาน', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'หน่วย', defaultValue: 2, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'h', 'r'],
    calculate: (inputs, target = 'V') => {
      let { V, r, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = Math.PI * r * r * h;
        steps = [
          { title: 'สูตรปริมาตรทรงกระบอก', latex: 'V = \\pi r^2 h', explanation: 'พื้นที่ฐานวงกลมคูณความสูง' },
          { title: 'แทนค่า', latex: `V = \\pi \\times ${r}^2 \\times ${h}`, explanation: `r = ${r}, h = ${h}` },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} ลบ.หน่วย` }
        ];
      } else if (target === 'h') {
        if (r === 0) throw new Error('รัศมี (r) ต้องไม่เป็น 0');
        result = V / (Math.PI * r * r);
        steps = [
          { title: 'จัดรูปหาความสูง', latex: 'h = \\frac{V}{\\pi r^2}', explanation: 'ปริมาตรหารพื้นที่ฐาน' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(4)}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'r') {
        if (h === 0) throw new Error('ความสูง (h) ต้องไม่เป็น 0');
        result = Math.sqrt(V / (Math.PI * h));
        steps = [
          { title: 'จัดรูปหารัศมี', latex: 'r = \\sqrt{\\frac{V}{\\pi h}}', explanation: 'ย้ายข้างแล้วถอดราก' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `รัศมีเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_cone',
    name: 'Volume of Cone',
    nameTh: 'ปริมาตรทรงกรวย',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'triangle',
    grade: 'ม.2-3',
    latex: 'V = \\frac{1}{3} \\pi r^2 h',
    description: 'ปริมาตรทรงกรวยเท่ากับหนึ่งในสามของปริมาตรทรงกระบอกที่มีฐานและความสูงเท่ากัน',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'ลบ.หน่วย', defaultValue: 104.7198, min: 0, max: 1e15, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมีฐาน', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'หน่วย', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'h', 'r'],
    calculate: (inputs, target = 'V') => {
      let { V, r, h } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = (1 / 3) * Math.PI * r * r * h;
        steps = [
          { title: 'สูตรปริมาตรทรงกรวย', latex: 'V = \\frac{1}{3} \\pi r^2 h', explanation: 'หนึ่งในสามของทรงกระบอก' },
          { title: 'แทนค่า', latex: `V = \\frac{1}{3} \\times \\pi \\times ${r}^2 \\times ${h}`, explanation: `r = ${r}, h = ${h}` },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} ลบ.หน่วย` }
        ];
      } else if (target === 'h') {
        if (r === 0) throw new Error('รัศมี (r) ต้องไม่เป็น 0');
        result = (3 * V) / (Math.PI * r * r);
        steps = [
          { title: 'จัดรูปหาความสูง', latex: 'h = \\frac{3V}{\\pi r^2}', explanation: 'ย้ายข้างสมการ' },
          { title: 'ผลลัพธ์', latex: `h = ${result.toFixed(4)}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      } else if (target === 'r') {
        if (h === 0) throw new Error('ความสูง (h) ต้องไม่เป็น 0');
        result = Math.sqrt((3 * V) / (Math.PI * h));
        steps = [
          { title: 'จัดรูปหารัศมี', latex: 'r = \\sqrt{\\frac{3V}{\\pi h}}', explanation: 'ย้ายข้างแล้วถอดราก' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `รัศมีเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'volume_sphere',
    name: 'Volume of Sphere',
    nameTh: 'ปริมาตรทรงกลม',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'circle',
    grade: 'ม.3',
    latex: 'V = \\frac{4}{3} \\pi r^3',
    description: 'ปริมาตรทรงกลมเท่ากับ 4/3 πr³ ใช้คำนวณลูกบอล ลูกโลก ดาวเคราะห์โดยประมาณ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'ลบ.หน่วย', defaultValue: 523.5988, min: 0, max: 1e15, step: 0.1 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมี', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.01 }
    ],
    solveTargets: ['V', 'r'],
    calculate: (inputs, target = 'V') => {
      let { V, r } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'V') {
        result = (4 / 3) * Math.PI * Math.pow(r, 3);
        steps = [
          { title: 'สูตรปริมาตรทรงกลม', latex: 'V = \\frac{4}{3} \\pi r^3', explanation: 'π ≈ 3.14159' },
          { title: 'แทนค่า', latex: `V = \\frac{4}{3} \\times \\pi \\times ${r}^3`, explanation: `รัศมี r = ${r}` },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} ลบ.หน่วย` }
        ];
      } else if (target === 'r') {
        result = Math.cbrt((3 * V) / (4 * Math.PI));
        steps = [
          { title: 'จัดรูปหารัศมี', latex: 'r = \\sqrt[3]{\\frac{3V}{4\\pi}}', explanation: 'ย้ายข้างแล้วถอดรากที่สาม' },
          { title: 'ผลลัพธ์', latex: `r = ${result.toFixed(4)}`, explanation: `รัศมีเท่ากับ ${result.toFixed(4)} หน่วย` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  {
    id: 'surface_area_box',
    name: 'Surface Area of Rectangular Prism',
    nameTh: 'พื้นที่ผิวทรงสี่เหลี่ยมมุมฉาก',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'box',
    grade: 'ม.1-3',
    latex: 'A = 2(lw + lh + wh)',
    description: 'พื้นที่ผิวก่อนปิดกล่อง = ผลรวมพื้นที่หน้าทั้ง 6 ด้าน',
    variables: [
      { id: 'A', symbol: 'A', name: 'Surface Area', nameTh: 'พื้นที่ผิว', unit: 'ตร.หน่วย', defaultValue: 94, min: 0, max: 1e12, step: 0.1 },
      { id: 'l', symbol: 'l', name: 'Length', nameTh: 'ความยาว', unit: 'หน่วย', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'w', symbol: 'w', name: 'Width', nameTh: 'ความกว้าง', unit: 'หน่วย', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'หน่วย', defaultValue: 3, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      let { l, w, h } = inputs;
      const result = 2 * (l * w + l * h + w * h);
      const steps = [
        { title: 'สูตรพื้นที่ผิว', latex: 'A = 2(lw + lh + wh)', explanation: 'มีหน้า 3 คู่ แต่ละหน้าเท่ากัน' },
        { title: 'แทนค่า', latex: `A = 2[(${l} \\times ${w}) + (${l} \\times ${h}) + (${w} \\times ${h})]`, explanation: `l = ${l}, w = ${w}, h = ${h}` },
        { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)}`, explanation: `พื้นที่ผิวเท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
      ];
      return { result, unit: '', steps };
    }
  },

  {
    id: 'pythagorean',
    name: 'Pythagorean Theorem',
    nameTh: 'ทฤษฎีบทพีทาโกรัส',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'triangle',
    grade: 'ม.3',
    latex: 'c^2 = a^2 + b^2',
    description: 'ความสัมพันธ์ของด้านในสามเหลี่ยมมุมฉาก c² = a² + b² เมื่อ c เป็นด้านตรงข้ามมุมฉาก',
    variables: [
      { id: 'a', symbol: 'a', name: 'Leg a', nameTh: 'ด้านประกอบมุมฉาก a', unit: '', defaultValue: 3, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Leg b', nameTh: 'ด้านประกอบมุมฉาก b', unit: '', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Hypotenuse c', nameTh: 'ด้านตรงข้ามมุมฉาก c', unit: '', defaultValue: 5, min: 0.0001, max: 1e9, step: 0.1 }
    ],
    solveTargets: ['c', 'a', 'b'],
    calculate: (inputs, target = 'c') => {
      const { a, b, c } = inputs;
      let result, steps;
      if (target === 'c') {
        result = Math.sqrt(a * a + b * b);
        steps = [
          { title: 'สูตร', latex: 'c^2 = a^2 + b^2', explanation: `a = ${a}, b = ${b}` },
          { title: 'แทนค่า', latex: `c^2 = ${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${a * a + b * b}`, explanation: `ผลรวมกำลังสองเท่ากับ ${(a * a + b * b).toFixed(4)}` },
          { title: 'ผลลัพธ์', latex: `c = \\sqrt{${(a * a + b * b).toFixed(4)}} = ${result.toFixed(4)}`, explanation: `ด้านตรงข้ามมุมฉากยาว ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (c <= a) throw new Error('c ต้องมากกว่า a (ด้านตรงข้ามมุมฉากยาวที่สุด)');
        result = Math.sqrt(c * c - b * b);
        steps = [
          { title: 'จัดรูปหา a', latex: 'a = \\sqrt{c^2 - b^2}', explanation: `c = ${c}, b = ${b}` },
          { title: 'ผลลัพธ์', latex: `a = \\sqrt{${c}^2 - ${b}^2} = ${result.toFixed(4)}`, explanation: `ด้าน a ยาว ${result.toFixed(4)}` }
        ];
      } else {
        if (c <= b) throw new Error('c ต้องมากกว่า b (ด้านตรงข้ามมุมฉากยาวที่สุด)');
        result = Math.sqrt(c * c - a * a);
        steps = [
          { title: 'จัดรูปหา b', latex: 'b = \\sqrt{c^2 - a^2}', explanation: `c = ${c}, a = ${a}` },
          { title: 'ผลลัพธ์', latex: `b = \\sqrt{${c}^2 - ${a}^2} = ${result.toFixed(4)}`, explanation: `ด้าน b ยาว ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: '', steps };
    }
  },

  {
    id: 'sphere_surface_area',
    name: 'Sphere Surface Area',
    nameTh: 'พื้นที่ผิวทรงกลม',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'circle',
    grade: 'ม.6',
    latex: 'A = 4\\pi r^2',
    description: 'พื้นที่ผิวของทรงกลม A = 4πr² คิดจากรัศมี r หน่วยพื้นที่',
    variables: [
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมี', unit: '', defaultValue: 3, min: 0.0001, max: 1e7, step: 0.1 },
      { id: 'A', symbol: 'A', name: 'Surface Area', nameTh: 'พื้นที่ผิว', unit: 'ตร.หน่วย', defaultValue: 113.0973, min: 0.0001, max: 1e15, step: 1 }
    ],
    solveTargets: ['A', 'r'],
    calculate: (inputs, target = 'A') => {
      const { r, A } = inputs;
      let result, steps;
      if (target === 'A') {
        result = 4 * Math.PI * r * r;
        steps = [
          { title: 'สูตร', latex: 'A = 4\\pi r^2', explanation: `r = ${r}` },
          { title: 'แทนค่า', latex: `A = 4 \\times \\pi \\times ${r}^2`, explanation: 'แทนค่ารัศมีลงในสูตร' },
          { title: 'ผลลัพธ์', latex: `A = ${result.toFixed(4)} \\ \\text{ตร.หน่วย}`, explanation: `พื้นที่ผิวเท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
        ];
      } else {
        if (A <= 0) throw new Error('พื้นที่ผิว A ต้องมากกว่า 0');
        result = Math.sqrt(A / (4 * Math.PI));
        steps = [
          { title: 'จัดรูปหา r', latex: 'r = \\sqrt{\\frac{A}{4\\pi}}', explanation: `A = ${A}` },
          { title: 'ผลลัพธ์', latex: `r = \\sqrt{\\frac{${A}}{4\\pi}} = ${result.toFixed(4)}`, explanation: `รัศมีเท่ากับ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: target === 'A' ? 'ตร.หน่วย' : '', steps };
    }
  },

  {
    id: 'pyramid_volume',
    name: 'Pyramid Volume',
    nameTh: 'ปริมาตรพีระมิด',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'layers',
    grade: 'ม.2',
    latex: 'V = \\frac{1}{3}Bh',
    description: 'ปริมาตรพีระมิด = ⅓ × พื้นที่ฐาน (B) × สูง (h) ทั้งปริซึมชนิดใดก็ได้ที่มีฐานเป็นรูปหลายเหลี่ยม',
    variables: [
      { id: 'B', symbol: 'B', name: 'Base Area', nameTh: 'พื้นที่ฐาน', unit: 'ตร.หน่วย', defaultValue: 30, min: 0.0001, max: 1e12, step: 1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: '', defaultValue: 4, min: 0.0001, max: 1e9, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'ลบ.หน่วย', defaultValue: 40, min: 0.0001, max: 1e15, step: 1 }
    ],
    solveTargets: ['V', 'B', 'h'],
    calculate: (inputs, target = 'V') => {
      const { B, h, V } = inputs;
      let result, steps;
      if (target === 'V') {
        result = (B * h) / 3;
        steps = [
          { title: 'สูตร', latex: 'V = \\frac{1}{3}Bh', explanation: `B = ${B}, h = ${h}` },
          { title: 'แทนค่า', latex: `V = \\frac{1}{3} \\times ${B} \\times ${h}`, explanation: 'แทนพื้นที่ฐานและความสูง' },
          { title: 'ผลลัพธ์', latex: `V = ${result.toFixed(4)} \\ \\text{ลบ.หน่วย}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} ลบ.หน่วย` }
        ];
      } else if (target === 'B') {
        if (h === 0) throw new Error('ความสูง h ต้องไม่เป็น 0');
        result = (3 * V) / h;
        steps = [
          { title: 'จัดรูปหา B', latex: 'B = \\frac{3V}{h}', explanation: `V = ${V}, h = ${h}` },
          { title: 'ผลลัพธ์', latex: `B = \\frac{3 \\times ${V}}{${h}} = ${result.toFixed(4)}`, explanation: `พื้นที่ฐานเท่ากับ ${result.toFixed(4)} ตร.หน่วย` }
        ];
      } else {
        if (B === 0) throw new Error('พื้นที่ฐาน B ต้องไม่เป็น 0');
        result = (3 * V) / B;
        steps = [
          { title: 'จัดรูปหา h', latex: 'h = \\frac{3V}{B}', explanation: `V = ${V}, B = ${B}` },
          { title: 'ผลลัพธ์', latex: `h = \\frac{3 \\times ${V}}{${B}} = ${result.toFixed(4)}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)}` }
        ];
      }
      return { result, unit: target === 'V' ? 'ลบ.หน่วย' : target === 'B' ? 'ตร.หน่วย' : '', steps };
    }
  }
];