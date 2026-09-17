// @ts-nocheck

/**
 * SciCode Nexus - Math-to-Code Interactive Lessons
 * Bridges mathematical and scientific theory into clean, executable code.
 */

export const LESSONS_DATA = [
  {
    id: 'lesson-projectile',
    title: 'บทเรียนที่ 1: คำนวณระยะตกไกลของโพรเจกไทล์ (Projectile Range)',
    category: 'Physics to Code',
    difficulty: 'Beginner',
    badgeColor: 'emerald',
    description: 'เรียนรู้วิธีแปลงสูตรระยะตกไกลในแนวราบของฟิสิกส์ให้อยู่ในรูปของฟังก์ชันภาษา JavaScript พร้อมการแปลงหน่วยมุม',
    mathFormula: 'R = \\frac{v_0^2 \\cdot \\sin(2\\theta)}{g}',
    instructions: [
      'แปลงมุมจากองศา (Degrees) เป็นเรเดียน (Radians) โดยใช้สูตร: `thetaRad = thetaDegrees * (Math.PI / 180)`',
      'คำนวณระยะตกไกล `R` ตามสูตรข้างต้น',
      'ส่งคืนผลลัพธ์เป็นตัวเลข (ปัดทศนิยม 2 ตำแหน่ง หรือคืนค่าตัวเลขจริง)'
    ],
    starterCode: `/**
 * คำนวณระยะตกไกลของโพรเจกไทล์ (R)
 * @param {number} v0 - ความเร็วต้น (m/s)
 * @param {number} angleDeg - มุมยิงเทียบกับแนวราบ (องศา)
 * @param {number} g - ความเร่งโน้มถ่วง (m/s^2), ค่าเริ่มต้น 9.8
 * @returns {number} ระยะทางตกไกล (เมตร)
 */
function calculateRange(v0, angleDeg, g = 9.8) {
  // 1. แปลงมุมเป็นเรเดียน
  const thetaRad = angleDeg * (Math.PI / 180);
  
  // 2. คำนวณ R ตามสูตร: (v0^2 * sin(2 * thetaRad)) / g
  // เขียนโค้ดของคุณตรงนี้:
  
}

// ทดสอบรันฟังก์ชันตัวอย่าง:
console.log("ผลลัพธ์มุม 45 องศา, ความเร็ว 20 m/s:", calculateRange(20, 45));
`,
    solutionCode: `function calculateRange(v0, angleDeg, g = 9.8) {
  const thetaRad = angleDeg * (Math.PI / 180);
  const R = (Math.pow(v0, 2) * Math.sin(2 * thetaRad)) / g;
  return Number(R.toFixed(2));
}`,
    testCases: [
      { input: [20, 45, 9.8], expected: 40.82, description: 'v0 = 20 m/s, angle = 45°, g = 9.8 (มุมที่ยิงได้ไกลที่สุด)' },
      { input: [10, 30, 9.8], expected: 8.84, description: 'v0 = 10 m/s, angle = 30°, g = 9.8' },
      { input: [15, 90, 9.8], expected: 0.0, description: 'v0 = 15 m/s, angle = 90° (ยิงขึ้นตรงๆ ระยะราบเป็น 0)' }
    ],
    validate: (userFn) => {
      // Return test results array
      return [
        {
          name: 'ทดสอบมุม 45 องศา (Max Range)',
          passed: Math.abs(userFn(20, 45, 9.8) - 40.82) < 0.1,
          output: userFn(20, 45, 9.8),
          expected: 40.82
        },
        {
          name: 'ทดสอบมุม 30 องศา',
          passed: Math.abs(userFn(10, 30, 9.8) - 8.84) < 0.1,
          output: userFn(10, 30, 9.8),
          expected: 8.84
        },
        {
          name: 'ทดสอบมุม 90 องศา (แนวดิ่ง)',
          passed: Math.abs(userFn(15, 90, 9.8) - 0) < 0.01,
          output: userFn(15, 90, 9.8),
          expected: 0
        }
      ];
    }
  },

  {
    id: 'lesson-quadratic',
    title: 'บทเรียนที่ 2: แก้สมการกำลังสอง (Quadratic Equation Solver)',
    category: 'Algebra to Code',
    difficulty: 'Intermediate',
    badgeColor: 'indigo',
    description: 'เขียนฟังก์ชันเพื่อหารากของสมการ ax² + bx + c = 0 โดยพิจารณาค่าดิสคริมิแนนท์ (b² - 4ac)',
    mathFormula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    instructions: [
      'คำนวณค่า discriminant = b² - 4ac',
      'ถ้า discriminant < 0 ให้ return array ว่าง `[]` (ไม่มีรากจริง)',
      'ถ้า discriminant === 0 ให้ return array ที่มีค่ารากซ้ำ 1 ตัว `[x]`',
      'ถ้า discriminant > 0 ให้ return array คำตอบ 2 ตัวเรียงจากน้อยไปมาก `[x1, x2]` โดยปัดทศนิยม 2 ตำแหน่ง'
    ],
    starterCode: `/**
 * หารากของสมการกำลังสอง ax^2 + bx + c = 0
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]} อาร์เรย์ของรากสมการที่เป็นจำนวนจริง (เรียงจากน้อยไปมาก)
 */
function solveQuadratic(a, b, c) {
  // เขียนโค้ดของคุณตรงนี้:
  
}

// ตัวอย่างการทดสอบ:
console.log("คำตอบของ x^2 - 5x + 6 = 0 คือ:", solveQuadratic(1, -5, 6));
`,
    solutionCode: `function solveQuadratic(a, b, c) {
  const d = b * b - 4 * a * c;
  if (d < 0) return [];
  if (d === 0) {
    const x = -b / (2 * a);
    return [Number(x.toFixed(2))];
  }
  const x1 = (-b - Math.sqrt(d)) / (2 * a);
  const x2 = (-b + Math.sqrt(d)) / (2 * a);
  return [Number(x1.toFixed(2)), Number(x2.toFixed(2))].sort((m, n) => m - n);
}`,
    validate: (userFn) => {
      const res1 = userFn(1, -5, 6);
      const res2 = userFn(1, -4, 4);
      const res3 = userFn(1, 0, 1);

      const isPass1 = Array.isArray(res1) && res1.length === 2 && res1[0] === 2 && res1[1] === 3;
      const isPass2 = Array.isArray(res2) && res2.length === 1 && res2[0] === 2;
      const isPass3 = Array.isArray(res3) && res3.length === 0;

      return [
        { name: 'x² - 5x + 6 = 0 (มี 2 ราก: 2 และ 3)', passed: isPass1, output: JSON.stringify(res1), expected: '[2, 3]' },
        { name: 'x² - 4x + 4 = 0 (รากซ้ำ: 2)', passed: isPass2, output: JSON.stringify(res2), expected: '[2]' },
        { name: 'x² + 1 = 0 (ไม่มีรากจริง)', passed: isPass3, output: JSON.stringify(res3), expected: '[]' }
      ];
    }
  },

  {
    id: 'lesson-euler',
    title: "บทเรียนที่ 3: ระเบียบวิธีเชิงตัวเลขของออยเลอร์ (Euler's Simulation)",
    category: 'Physics Simulation',
    difficulty: 'Advanced',
    badgeColor: 'purple',
    description: 'จำลองการตกของวัตถุภายใต้แรงโน้มถ่วงและแรงต้านอากาศ โดยใช้วิธีระเบียบวิธีเชิงตัวเลข (Numerical Integration)',
    mathFormula: 'v_{t+dt} = v_t + a_t \\cdot dt, \\quad y_{t+dt} = y_t - v_t \\cdot dt',
    instructions: [
      'เริ่มจากความสูง h0 และความเร็วต้น v = 0',
      'ในแต่ละสเต็ปเวลา dt: ให้คำนวณความเร่ง a = g - (k * v² / m) โดยที่ k คือสัมประสิทธิ์แรงต้าน',
      'อัปเดตความเร็ว: `v += a * dt` และความสูง: `y -= v * dt`',
      'ลูปจนกว่าวัตถุจะแตะพื้น (`y <= 0`) แล้ว return เวลา `t` ทั้งหมดที่ใช้ (ปัดทศนิยม 2 ตำแหน่ง)'
    ],
    starterCode: `/**
 * คำนวณเวลาที่วัตถุตกถึงพื้นพร้อมแรงต้านอากาศ (Euler's Method)
 * @param {number} h0 - ความสูงเริ่มต้น (m)
 * @param {number} m - มวล (kg)
 * @param {number} k - สัมประสิทธิ์แรงต้านอากาศ (kg/m)
 * @param {number} g - ค่าความเร่งโน้มถ่วง (9.8 m/s^2)
 * @param {number} dt - time step (เช่น 0.01 วินาที)
 * @returns {number} เวลาทั้งหมดที่ใช้จนกระทั่งตกถึงพื้น
 */
function simulateDropTime(h0, m = 1, k = 0.05, g = 9.8, dt = 0.01) {
  let y = h0;
  let v = 0;
  let t = 0;

  // เขียน loop ของ Euler's method ตรงนี้:
  
  return Number(t.toFixed(2));
}

console.log("เวลาตกจากตึกสูง 100 เมตร:", simulateDropTime(100));
`,
    solutionCode: `function simulateDropTime(h0, m = 1, k = 0.05, g = 9.8, dt = 0.01) {
  let y = h0;
  let v = 0;
  let t = 0;

  while (y > 0) {
    const dragForce = k * v * v;
    const a = g - (dragForce / m);
    v += a * dt;
    y -= v * dt;
    t += dt;
  }

  return Number(t.toFixed(2));
}`,
    validate: (userFn) => {
      const t1 = userFn(100, 1, 0.05, 9.8, 0.01);
      const isPass1 = t1 >= 7.0 && t1 <= 8.5; // realistic terminal velocity range

      return [
        { name: 'ตกจากตึก 100 เมตร (แรงต้าน k = 0.05)', passed: isPass1, output: t1, expected: 'ช่วง 7.2 - 7.6 วินาที' }
      ];
    }
  },

  {
    id: 'lesson-vector-dot',
    title: 'บทเรียนที่ 4: เวกเตอร์และการหาผลคูณจุด (Vector Dot Product)',
    category: 'Linear Algebra',
    difficulty: 'Beginner',
    badgeColor: 'cyan',
    description: 'ผลคูณจุดของเวกเตอร์ 2 ตัวเป็นพื้นฐานสำคัญที่สุดในเกมเอนจิน (Game Physics) และการคำนวณการสะท้อนของแสง (Ray Tracing)',
    mathFormula: '\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z',
    instructions: [
      'รับเวกเตอร์ `u = [ux, uy, uz]` และ `v = [vx, vy, vz]`',
      'คำนวณผลคูณทีละมิติแล้วนำมารวมกัน',
      'ส่งคืนค่าผลคูณสเกลาร์ (Scalar Dot Product)'
    ],
    starterCode: `/**
 * คำนวณ Vector Dot Product ใน 3D
 * @param {number[]} u - [ux, uy, uz]
 * @param {number[]} v - [vx, vy, vz]
 * @returns {number}
 */
function dotProduct(u, v) {
  // เขียนโค้ดของคุณตรงนี้:
  
}

console.log("Dot product [1, 2, 3] . [4, 5, 6] =", dotProduct([1, 2, 3], [4, 5, 6]));
`,
    solutionCode: `function dotProduct(u, v) {
  return u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
}`,
    validate: (userFn) => {
      const res1 = userFn([1, 2, 3], [4, 5, 6]);
      const res2 = userFn([1, 0, 0], [0, 1, 0]); // ตั้งฉากกันต้องได้ 0

      return [
        { name: '[1,2,3] • [4,5,6] = 32', passed: res1 === 32, output: res1, expected: 32 },
        { name: 'เวกเตอร์ตั้งฉากกัน [1,0,0] • [0,1,0] = 0', passed: res2 === 0, output: res2, expected: 0 }
      ];
    }
  },

  {
    id: 'lesson-heron-area',
    title: 'บทเรียนที่ 5: พื้นที่สามเหลี่ยมจากความยาวด้าน 3 ด้าน (Heron\'s Formula)',
    category: 'Geometry to Code',
    difficulty: 'Beginner',
    badgeColor: 'teal',
    description: 'คำนวณพื้นที่สามเหลี่ยมเมื่อทราบความยาวทั้ง 3 ด้าน โดยไม่ต้องรู้ความสูง — ใช้สูตรเฮรอนที่ใช้กึ่งรอบรูป s = (a+b+c)/2',
    mathFormula: 'A = \\sqrt{s(s-a)(s-b)(s-c)}',
    instructions: [
      'รับความยาวด้านทั้ง 3 ด้าน: `a`, `b`, `c`',
      'คำนวณกึ่งรอบรูป: `s = (a + b + c) / 2`',
      'ตรวจสอบว่าด้านทั้ง 3 สามารถเป็นสามเหลี่ยมได้ (s-a, s-b, s-c ต้องมากกว่า 0 ทั้งหมด)',
      'คำนวณ `A = Math.sqrt(s * (s-a) * (s-b) * (s-c))` แล้วปัดทศนิยม 2 ตำแหน่ง'
    ],
    starterCode: `/**
 * คำนวณพื้นที่สามเหลี่ยมจากสูตรเฮรอน
 * @param {number} a - ด้านที่ 1
 * @param {number} b - ด้านที่ 2
 * @param {number} c - ด้านที่ 3
 * @returns {number} พื้นที่ (ปัดทศนิยม 2 ตำแหน่ง)
 */
function heronsArea(a, b, c) {
  // 1. คำนวณกึ่งรอบรูป s
  // 2. ตรวจสอบว่าเป็นสามเหลี่ยมได้หรือไม่
  // 3. คำนวณ A ตามสูตรเฮรอน
  
}

console.log("พื้นที่ 3-4-5:", heronsArea(3, 4, 5));       // ต้องได้ 6
console.log("พื้นที่ 7-8-9:", heronsArea(7, 8, 9));       // ต้องได้ ~26.83
console.log("พื้นที่ 1-2-10:", heronsArea(1, 2, 10));     // ต้องได้ 0 (เป็นไปไม่ได้)
`,
    solutionCode: `function heronsArea(a, b, c) {
  const s = (a + b + c) / 2;
  const val = s * (s - a) * (s - b) * (s - c);
  if (val <= 0) return 0;
  return Number(Math.sqrt(val).toFixed(2));
}`,
    validate: (userFn) => {
      const r1 = userFn(3, 4, 5);
      const r2 = userFn(7, 8, 9);
      const r3 = userFn(1, 2, 10);

      return [
        { name: '3-4-5 (Pythagorean) → 6', passed: Math.abs(r1 - 6) < 0.05, output: r1, expected: 6 },
        { name: '7-8-9 → ~26.83', passed: Math.abs(r2 - 26.83) < 0.1, output: r2, expected: 26.83 },
        { name: '1-2-10 (ไม่ใช่สามเหลี่ยม) → 0', passed: r3 === 0, output: r3, expected: 0 }
      ];
    }
  },

  {
    id: 'lesson-molar-mass',
    title: 'บทเรียนที่ 6: คำนวณน้ำหนักโมเลกุลจากสูตรเคมี (Molar Mass Calculator)',
    category: 'Chemistry to Code',
    difficulty: 'Intermediate',
    badgeColor: 'rose',
    description: 'แยกสูตรเคมี เช่น H2O หรือ C6H12O6 ออกเป็นธาตุและจำนวนอะตอม แล้วคำนวณน้ำหนักโมเลกุลรวมโดยใช้ตารางมวลอะตอม',
    mathFormula: 'M = \\sum (n_i \\times M_i)',
    instructions: [
      'รับสตริงสูตรเคมี เช่น `"H2O"` หรือ `"C6H12O6"`',
      'แยกชื่อธาตุและจำนวนอะตอม (ถ้าไม่มีตัวเลขหลังธาตุ ให้ถือว่าเป็น 1)',
      'ใช้ตารางมวลอะตอม: `{ H: 1.008, C: 12.011, N: 14.007, O: 15.999, S: 32.06, Na: 22.99, Cl: 35.45, Fe: 55.845, Ca: 40.078, P: 30.974 }`',
      'คำนวณผลรวมและปัดทศนิยม 3 ตำแหน่ง'
    ],
    starterCode: `const ATOMIC_MASS = {
  H: 1.008, C: 12.011, N: 14.007, O: 15.999,
  S: 32.06, Na: 22.99, Cl: 35.45, Fe: 55.845,
  Ca: 40.078, P: 30.974
};

/**
 * คำนวณมวลโมเลกุลจากสูตรเคมี
 * @param {string} formula - สูตรเคมี เช่น "H2O", "C6H12O6", "NaCl"
 * @returns {number} มวลโมเลกุล (g/mol) ปัดทศนิยม 3 ตำแหน่ง
 */
function molarMass(formula) {
  // แยกสูตรเคมีออกเป็นธาตุและจำนวน
  // คำนวณมวลรวม
  
}

console.log("H2O:", molarMass("H2O"));           // ~18.015
console.log("C6H12O6:", molarMass("C6H12O6"));   // ~180.156
console.log("NaCl:", molarMass("NaCl"));           // ~58.44
`,
    solutionCode: `const ATOMIC_MASS = {
  H: 1.008, C: 12.011, N: 14.007, O: 15.999,
  S: 32.06, Na: 22.99, Cl: 35.45, Fe: 55.845,
  Ca: 40.078, P: 30.974
};

function molarMass(formula) {
  const matches = formula.match(/[A-Z][a-z]?\d*/g);
  if (!matches) return 0;
  let total = 0;
  for (const part of matches) {
    const el = part.match(/[A-Z][a-z]?/)[0];
    const count = parseInt(part.match(/\\d+/)?.[0] || '1');
    total += (ATOMIC_MASS[el] || 0) * count;
  }
  return Number(total.toFixed(3));
}`,
    validate: (userFn) => {
      const r1 = userFn('H2O');
      const r2 = userFn('C6H12O6');
      const r3 = userFn('NaCl');
      const r4 = userFn('H2SO4');

      return [
        { name: 'H2O → ~18.015 g/mol', passed: Math.abs(r1 - 18.015) < 0.02, output: r1, expected: 18.015 },
        { name: 'C6H12O6 → ~180.156 g/mol', passed: Math.abs(r2 - 180.156) < 0.02, output: r2, expected: 180.156 },
        { name: 'NaCl → ~58.44 g/mol', passed: Math.abs(r3 - 58.44) < 0.02, output: r3, expected: 58.44 },
        { name: 'H2SO4 → ~98.079 g/mol', passed: Math.abs(r4 - 98.079) < 0.02, output: r4, expected: 98.079 }
      ];
    }
  },

  {
    id: 'lesson-three-scene',
    type: '3d',
    title: 'บทเรียนที่ 7: สร้างฉาก 3 มิติด้วย Three.js',
    category: '3D Graphics',
    difficulty: 'Beginner',
    badgeColor: 'sky',
    description: 'ก้าวเข้าสู่โลกเกมเอนจินจริง! เรียนรู้การสร้างทรงกล่อง ทรงกลม และทรงกระบอกในฉาก 3 มิติด้วย Three.js พร้อมจัดการแสง เท็กซ์เจอร์สี และตำแหน่งกล้อง',
    mathFormula: '\\vec{p} = (x, y, z), \\quad \\text{camera}_{pos} = (5, 4, 6) \\to (0, 0, 0)',
    instructions: [
      'ใช้ `THREE.BoxGeometry(w, h, d)`, `THREE.SphereGeometry(r, ...)`, `THREE.CylinderGeometry(r1, r2, h, ...)` สร้างทรงกล่อง / ทรงกลม / ทรงกระบอก',
      'กำหนดแสงสีให้วัตถุด้วย `new THREE.MeshStandardMaterial({ color: 0xrrggbb })`',
      'เพิ่มวัตถุลงฉากด้วย `scene.add(...)` แล้วเลื่อนตำแหน่งด้วย `.position.set(x, y, z)`',
      'ลองย้ายกล้องดูมุมมองใหม่โดยใช้ `camera.position.set(x, y, z)` (กดค้างบนฉากเพื่อหมุนมุมมองได้)'
    ],
    starterCode: `// ✅ มี THREE, scene, camera, renderer เตรียมไว้ให้แล้ว
// ฟังก์ชันช่วย: addBox, addSphere, addCylinder, addCone
//   เช่น addSphere(รัศมี, สี, x, y, z)  หรือ addBox(กว้าง, สูง, ลึก, สี, x, y, z)
// (สร้างเองแบบเต็มก็ได้: new THREE.Mesh(new THREE.BoxGeometry(...), new THREE.MeshStandardMaterial({ color: ... })))

// 1. พื้นแท่นสีฟ้า
const ground = new THREE.Mesh(
  new THREE.BoxGeometry(6, 0.2, 6),
  new THREE.MeshStandardMaterial({ color: 0x38bdf8 })
);
scene.add(ground);

// 2. กล่องสีส้มแดงตรงกลาง
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 1.2, 1.2),
  new THREE.MeshStandardMaterial({ color: 0xff6b6b })
);
box.position.set(0, 0.9, 0);
scene.add(box);

// 3. เขียนโค้ดของคุณตรงนี้: เพิ่มทรงกลมและทรงกระบอกให้ครบ
// เช่น:
// const sphere = addSphere(0.6, 0x48c774, 2, 0.6, 0);
// const cyl = addCylinder(0.5, 0.5, 1.4, 0xffd93d, -2, 0.9, 0);

// 4. ลองย้ายกล้อง: camera.position.set(6, 5, 6);
`,
    solutionCode: `const ground = new THREE.Mesh(
  new THREE.BoxGeometry(8, 0.2, 8),
  new THREE.MeshStandardMaterial({ color: 0x243b55 })
);
scene.add(ground);

const box = new THREE.Mesh(
  new THREE.BoxGeometry(1.4, 1.4, 1.4),
  new THREE.MeshStandardMaterial({ color: 0xff6b6b })
);
box.position.set(-1.5, 0.9, 0);
scene.add(box);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xffd93d, metalness: 0.4, roughness: 0.3 })
);
sphere.position.set(1.5, 0.8, 0);
scene.add(sphere);

const cyl = new THREE.Mesh(
  new THREE.CylinderGeometry(0.4, 0.4, 1.6, 32),
  new THREE.MeshStandardMaterial({ color: 0x48c774 })
);
cyl.position.set(0, 1, -2);
scene.add(cyl);

// มุมกล้องสวย ๆ: camera.position.set(6, 4, 7);
`,
    validate: (probe) => {
      const boxCount = probe.meshes.filter(m => m.type === 'box').length
      const sphereCount = probe.meshes.filter(m => m.type === 'sphere').length
      const cylinderCount = probe.meshes.filter(m => m.type === 'cylinder').length

      return [
        { name: 'มีทรงกล่อง (Box) อย่างน้อย 1 อัน', passed: boxCount >= 1, output: `${boxCount} อัน`, expected: '≥ 1' },
        { name: 'มีทรงกลม (Sphere) อย่างน้อย 1 อัน', passed: sphereCount >= 1, output: `${sphereCount} อัน`, expected: '≥ 1' },
        { name: 'มีวัตถุในฉากอย่างน้อย 4 ชิ้น (รวมพื้น)', passed: probe.objectCount >= 4, output: `${probe.objectCount} ชิ้น`, expected: '≥ 4' }
      ]
    }
  }
];
