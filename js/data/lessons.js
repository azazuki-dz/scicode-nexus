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
  }
];
