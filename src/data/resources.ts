// @ts-nocheck

/**
 * SciCode Nexus - Curated Learning Hub & Knowledge Vault
 * High-yield roadmaps, formula cheatsheets, and verified world-class resources.
 */

export const ROADMAPS_DATA = [
  {
    id: 'roadmap-ai-math',
    title: 'Mathematics for AI & Machine Learning',
    titleTh: 'คณิตศาสตร์สำหรับ AI และแมชชีนเลิร์นนิง',
    badge: 'Trending Roadmap',
    badgeColor: 'indigo',
    description: 'เส้นทางการเรียนรู้คณิตศาสตร์จากศูนย์เพื่อเข้าใจอัลกอริทึม Deep Learning, Transformers และ Data Science ได้อย่างลึกซึ้ง',
    steps: [
      {
        stage: 'ระดับ 1',
        title: 'พีชคณิตเชิงเส้น (Linear Algebra)',
        topics: ['เวกเตอร์, เมทริกซ์ และการแปลงเชิงเส้น (Matrix Transformations)', 'Dot Product & Cross Product ใน High Dimensions', 'Eigenvalues และ Eigenvectors สำหรับ PCA'],
        timeEst: '3-4 สัปดาห์'
      },
      {
        stage: 'ระดับ 2',
        title: 'แคลคูลัสหลายตัวแปร (Multivariate Calculus)',
        topics: ['อนุพันธ์ย่อย (Partial Derivatives)', 'Gradient Vector & Directional Derivative', 'Chain Rule สำหรับ Backpropagation ในโครงข่ายประสาทเทียม'],
        timeEst: '3-4 สัปดาห์'
      },
      {
        stage: 'ระดับ 3',
        title: 'ความน่าจะเป็นและสถิติ (Probability & Statistics)',
        topics: ['การแจกแจงความน่าจะเป็น (Normal, Bernoulli, Poisson)', 'Bayes Theorem & Maximum Likelihood Estimation (MLE)', 'Expectation, Variance, และ Covariance'],
        timeEst: '4 สัปดาห์'
      },
      {
        stage: 'ระดับ 4',
        title: 'การหาค่าที่เหมาะที่สุด (Mathematical Optimization)',
        topics: ['Gradient Descent, Adam Optimizer', 'Convex Optimization & Loss Functions', 'Stochastic Methods'],
        timeEst: '2-3 สัปดาห์'
      }
    ]
  },
  {
    id: 'roadmap-game-physics',
    title: 'Physics for Game Development & Simulation',
    titleTh: 'ฟิสิกส์สำหรับผู้พัฒนาเกมและการจำลอง',
    badge: 'Game Dev & WebGL',
    badgeColor: 'purple',
    description: 'เรียนรู้การจำลองโลกกายภาพในเกม 2D/3D และระบบคอมพิวเตอร์กราฟิกส์',
    steps: [
      {
        stage: 'ระดับ 1',
        title: 'จลนศาสตร์และเวกเตอร์ (Kinematics & Vectors)',
        topics: ['Position, Velocity, Acceleration', 'Vector Addition, Scaling, Normalization', 'Trajectory & Projectile Equations'],
        timeEst: '2 สัปดาห์'
      },
      {
        stage: 'ระดับ 2',
        title: 'แรงและการชน (Forces & Collisions)',
        topics: ["Newton's Laws of Motion in Code", 'AABB & Circle Collision Detection', 'Elastic & Inelastic Momentum Conservation'],
        timeEst: '3 สัปดาห์'
      },
      {
        stage: 'ระดับ 3',
        title: 'การคำนวณเชิงตัวเลข (Numerical Integrators)',
        topics: ["Euler's Method, Verlet Integration", "Runge-Kutta 4 (RK4) สำหรับเสถียรภาพสูง", 'Spring-Damper Systems & Cloth Simulation'],
        timeEst: '3 สัปดาห์'
      }
    ]
  },
  {
    id: 'roadmap-data-science',
    title: 'Data Science & Statistics for Beginners',
    titleTh: 'วิทยาศาสตร์ข้อมูลและสถิติสำหรับผู้เริ่มต้น',
    badge: 'Data & Stats',
    badgeColor: 'emerald',
    description: 'เริ่มต้นเรียนรู้การวิเคราะห์ข้อมูล สถิติพื้นฐาน และการสร้างกราฟเพื่อเข้าใจข้อมูลเชิงปริมาณ',
    steps: [
      {
        stage: 'ระดับ 1',
        title: 'สถิติพื้นฐาน (Descriptive Statistics)',
        topics: ['ค่าเฉลี่ย มัธยฐาน ฐานนิยม (Mean, Median, Mode)', 'ส่วนเบี่ยงเบนมาตรฐานและค่า CV', 'Histograms, Boxplots, Scatter Plots'],
        timeEst: '2 สัปดาห์'
      },
      {
        stage: 'ระดับ 2',
        title: 'ความน่าจะเป็น (Probability Basics)',
        topics: ['Probability Rules & Conditional Probability', 'Binomial & Normal Distribution', 'Expected Value & Variance'],
        timeEst: '3 สัปดาห์'
      },
      {
        stage: 'ระดับ 3',
        title: 'การทดสอบสมมติฐาน (Hypothesis Testing)',
        topics: ['P-value & Confidence Intervals', 'Chi-Square Test', 'Correlation vs Causation'],
        timeEst: '3 สัปดาห์'
      }
    ]
  }
];

export const CHEATSHEETS_DATA = [
  {
    category: 'ฟิสิกส์กลศาสตร์ (Classical Mechanics)',
    items: [
      { name: 'ความเร็วเฉลี่ย', formula: 'v = \\frac{\\Delta s}{\\Delta t}', note: 'การกระจัดหารเวลา' },
      { name: 'ความเร่งเฉลี่ย', formula: 'a = \\frac{\\Delta v}{\\Delta t}', note: 'ความเร็วที่เปลี่ยนไปหารเวลา' },
      { name: 'สมการการเคลื่อนที่ 1', formula: 'v = u + at', note: 'ความเร่งคงที่ ไม่ใช้ s' },
      { name: 'สมการการเคลื่อนที่ 2', formula: 's = ut + \\frac{1}{2}at^2', note: 'ความเร่งคงที่ ไม่ใช้ v' },
      { name: 'สมการการเคลื่อนที่ 3', formula: 'v^2 = u^2 + 2as', note: 'ความเร่งคงที่ ไม่ใช้ t' },
      { name: 'กฎข้อที่สองของนิวตัน', formula: '\\sum F = ma', note: 'แรงลัพธ์เท่ากับมวลคูณความเร่ง' },
      { name: 'โมเมนตัมเชิงเส้น', formula: 'p = mv', note: 'มวลคูณความเร็ว' },
      { name: 'แรงสู่ศูนย์กลาง', formula: 'F_c = \\frac{mv^2}{r}', note: 'มวลคูณอัตราเร็วกำลังสองหารรัศมี' },
      { name: 'กฎความโน้มถ่วงสากล', formula: 'F = G \\frac{m_1 m_2}{r^2}', note: 'G = 6.674 × 10⁻¹¹ N·m²/kg²' },
      { name: 'พลังงานจลน์', formula: 'E_k = \\frac{1}{2}mv^2', note: 'พลังงานจากการเคลื่อนที่' },
      { name: 'พลังงานศักย์โน้มถ่วง', formula: 'E_p = mgh', note: 'พลังงานจากระดับความสูง' },
      { name: 'งานจากแรงคงที่', formula: 'W = F \\cdot s \\cdot \\cos(\\theta)', note: 'ผลคูณจุดของแรงและการกระจัด' }
    ]
  },
  {
    category: 'อุณหพลศาสตร์ (Thermodynamics)',
    items: [
      { name: 'ความร้อนที่ใช้เปลี่ยนอุณหภูมิ', formula: 'Q = mc\\Delta T', note: 'c ของน้ำ = 4,186 J/(kg·K)' },
      { name: 'ความร้อนแฝงจำเพาะ', formula: 'Q = mL', note: 'L คือความร้อนแฝง (J/kg)' },
      { name: 'แก๊สอุดมคติ', formula: 'PV = nRT', note: 'R = 0.0821 L·atm/(mol·K)' },
      { name: 'กฎของแก๊สรวม', formula: '\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}', note: 'T ต้องเป็นเคลวินเสมอ' }
    ]
  },
  {
    category: 'เคมี (Chemistry)',
    items: [
      { name: 'สะพานโมล', formula: 'n = \\frac{g}{M} = \\frac{N}{6.02 \\times 10^{23}}', note: 'N คือจำนวนอนุภาค (อะตอม/โมเลกุล)' },
      { name: 'ปริมาตรแก๊สที่ STP', formula: 'V = n \\times 22.4\\,\\text{L}', note: 'STP คือ 0°C และ 1 atm' },
      { name: 'ความเข้มข้น (โมลาริตี)', formula: 'C = \\frac{n}{V}', note: 'หน่วย mol/L (M)' },
      { name: 'การเจือจาง', formula: 'C_1 V_1 = C_2 V_2', note: 'โมลตัวถูกละลายคงที่' },
      { name: 'ค่า pH', formula: '\\text{pH} = -\\log[\\text{H}^+]', note: 'pH < 7 กรด, > 7 เบส' },
      { name: 'ค่าผลคูณไอออนของน้ำ', formula: '[\\text{H}^+][\\text{OH}^-] = 10^{-14}', note: 'ที่ 25°C, pH + pOH = 14' }
    ]
  },
  {
    category: 'ชีววิทยา (Biology)',
    items: [
      { name: 'สมดุลฮาร์ดี-ไวน์เบิร์ก', formula: 'p^2 + 2pq + q^2 = 1', note: 'p + q = 1 (ไม่เกิดวิวัฒนาการ)' },
      { name: 'การเจริญแบบเอกซ์โปเนนเชียล', formula: 'N_t = N_0 e^{rt}', note: 'r คืออัตราการเพิ่มต่อหน่วยเวลา' },
      { name: 'การเจริญแบบโลจิสติก', formula: '\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)', note: 'K คือความจุรองรับของสิ่งแวดล้อม (Carrying capacity)' },
      { name: 'ออสโมซิสเพื่อการออสโมติก', formula: '\\pi = iMRT', note: 'i คือแวนต์ฮอฟฟ์แฟกเตอร์, M โมลาริตี' },
      { name: 'ประมาณจำนวนประชากร (Capture-Recapture)', formula: 'N = \\frac{M \\times n}{m}', note: 'M = ครั้งแรกที่จับได้, n = ครั้งที่สองจับได้, m = ที่ติดเครื่องหมายแล้วจับซ้ำ' }
    ]
  },
  {
    category: 'แคลคูลัสและพีชคณิต (Calculus & Algebra)',
    items: [
      { name: 'สูตรสมการกำลังสอง', formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', note: 'หารากของ ax² + bx + c = 0' },
      { name: 'อนุพันธ์ของฟังก์ชันยกกำลัง', formula: '\\frac{d}{dx}[x^n] = n x^{n-1}', note: 'Power rule' },
      { name: 'อนุพันธ์ผลคูณ', formula: '\\frac{d}{dx}[u \\cdot v] = u v\' + v u\'', note: 'หน้าดิฟหลัง + หลังดิฟหน้า' },
      { name: 'อนุพันธ์ผลหาร', formula: '\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{v u\' - u v\'}{v^2}', note: '(ล่างดิฟบน - บนดิฟล่าง) / ล่าง²' },
      { name: 'กฎลูกโซ่ (Chain Rule)', formula: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}', note: 'อนุพันธ์ฟังก์ชันประกอบ' },
      { name: 'ทฤษฎีบทพีทาโกรัส', formula: 'a^2 + b^2 = c^2', note: 'สามเหลี่ยมมุมฉาก' },
      { name: 'พื้นที่สูตรเฮรอน', formula: 'A = \\sqrt{s(s-a)(s-b)(s-c)}', note: 's = (a+b+c)/2, หาพื้นที่จากด้าน 3 ด้าน' },
      { name: 'กฎบอยล์', formula: 'P_1 V_1 = P_2 V_2', note: 'ความดัน x ปริมาตร คงที่ ณ อุณหภูมิคงที่' },
      { name: 'กฎชาร์ล', formula: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}', note: 'ปริมาตรแปรตรงกับอุณหภูมิเคลวิน' }
    ]
  },
  {
    category: 'ไฟฟ้าและอิเล็กทรอนิกส์ (Electricity & Electronics)',
    items: [
      { name: 'กฎโอห์ม', formula: 'V = IR', note: 'ความต่างศักย์ = กระแส x ความต้านทาน' },
      { name: 'ตัวแบ่งแรงดัน', formula: 'V_{out} = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}', note: 'แรงดันขาออกจาก R1, R2' },
      { name: 'พลังงานไฟฟ้า', formula: 'P = I^2 R = \\frac{V^2}{R}', note: 'ความสัมพันธ์_power, 电流, 电压, 电阻' },
      { name: 'กฎเคอร์ชอฟฟ์ (KCL)', formula: '\\sum I_{in} = \\sum I_{out}', note: 'กระแสขาเข้า = กระแสขาออก ที่จุดโหนด' }
    ]
  }
];

export const EXTERNAL_RESOURCES_DATA = [
  {
    title: '3Blue1Brown (Grant Sanderson)',
    tag: 'Visual Mathematics',
    badgeColor: 'indigo',
    description: 'วิดีโออธิบายคณิตศาสตร์ที่ดีที่สุดในโลก ภาพเคลื่อนไหวคณิตศาสตร์สวยงามด้วย Manim แนะนำซีรีส์ Essence of Linear Algebra และ Essence of Calculus',
    url: 'https://www.youtube.com/c/3blue1brown',
    icon: 'video'
  },
  {
    title: 'Khan Academy',
    tag: 'Interactive Learning',
    badgeColor: 'emerald',
    description: 'แหล่งเรียนรู้ฟรีระดับโลก ครอบคลุมวิชาฟิสิกส์ แคลคูลัส พีชคณิต สถิติ และวิทยาการคอมพิวเตอร์อย่างเป็นระบบ',
    url: 'https://www.khanacademy.org/',
    icon: 'book-open'
  },
  {
    title: 'MIT OpenCourseWare (Physics 8.01)',
    tag: 'University Lecture',
    badgeColor: 'rose',
    description: 'คอร์สเรียนฟิสิกส์กลศาสตร์ระดับมหาวิทยาลัยชั้นนำของโลก บรรยายโดย ศ. Walter Lewin พร้อมการทดลองตื่นตาตื่นใจ',
    url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
    icon: 'award'
  },
  {
    title: 'The Nature of Code (Daniel Shiffman)',
    tag: 'Math & Physics in Code',
    badgeColor: 'amber',
    description: 'หนังสือและคอร์สออนไลน์สอนสร้างการจำลองฟิสิกส์ คลื่น อนุภาค และระบบนิเวศน์ทางชีววิทยาด้วยโค้ด JavaScript/p5.js',
    url: 'https://natureofcode.com/',
    icon: 'code'
  },
  {
    title: 'Wolfram MathWorld & Alpha',
    tag: 'Encyclopedia & Computational Engine',
    badgeColor: 'purple',
    description: 'สารานุกรมคณิตศาสตร์ที่สมบูรณ์แบบที่สุด พร้อมเครื่องมือคำนวณและพลอตกราฟเชิงสัญลักษณ์',
    url: 'https://mathworld.wolfram.com/',
    icon: 'globe'
  },
  {
    title: 'PhET Interactive Simulations (CU Boulder)',
    tag: 'Physics Interactive Simulations',
    badgeColor: 'cyan',
    description: 'การจำลองปรากฏการณ์ฟิสิกส์ เคมี และคณิตศาสตร์แบบอินเทอร์แอคทีฟจากมหาวิทยาลัยโคโลราโด โบลเดอร์',
    url: 'https://phet.colorado.edu/',
    icon: 'compass'
  }
];
