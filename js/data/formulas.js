/**
 * SciCode Nexus - Formulas Registry
 * Comprehensive collection of Physics and Mathematics formulas
 * with multi-variable dynamic solver logic and step-by-step derivations.
 */

import { ALGEBRA_FORMULAS } from './formulas/algebraFormulas.js';
import { GEOMETRY_FORMULAS } from './formulas/geometryFormulas.js';
import { TRIGONOMETRY_FORMULAS } from './formulas/trigonometryFormulas.js';
import { SEQUENCES_FORMULAS } from './formulas/sequencesFormulas.js';
import { STATISTICS_FORMULAS } from './formulas/statisticsFormulas.js';
import { CALCULUS_FORMULAS, ADVANCED_MATH_FORMULAS } from './formulas/advancedMathFormulas.js';
import { FINANCE_FORMULAS } from './formulas/financeFormulas.js';
import { MECHANICS_FORMULAS } from './formulas/mechanicsFormulas.js';
import { GENERAL_PHYSICS_FORMULAS } from './formulas/generalPhysicsFormulas.js';
import { THERMODYNAMICS_FORMULAS } from './formulas/thermodynamicsFormulas.js';
import { WAVES_LIGHT_FORMULAS } from './formulas/wavesLightFormulas.js';
import { ELECTRICITY_FORMULAS } from './formulas/electricityFormulas.js';
import { CHEMISTRY_FORMULAS } from './formulas/chemistryFormulas.js';
import { BIOLOGY_FORMULAS, EARTH_SCIENCE_FORMULAS } from './formulas/biologyEarthFormulas.js';
import { ECONOMICS_FORMULAS, HEALTH_FORMULAS, TECHNOLOGY_FORMULAS } from './formulas/appliedFormulas.js';
import { EXTRA_FORMULAS } from './formulas/extraFormulas.js';

export const FORMULA_CATEGORIES = [
  { id: 'all', name: 'All Formulas', nameTh: 'สูตรทั้งหมด', icon: 'layers' },
  { id: 'physics', name: 'Physics', nameTh: 'ฟิสิกส์', icon: 'atom' },
  { id: 'chemistry', name: 'Chemistry', nameTh: 'เคมี', icon: 'flask' },
  { id: 'biology', name: 'Biology', nameTh: 'ชีววิทยา', icon: 'dna' },
  { id: 'mechanics', name: 'Mechanics', nameTh: 'กลศาสตร์', icon: 'activity' },
  { id: 'energy', name: 'Work & Energy', nameTh: 'งานและพลังงาน', icon: 'zap' },
  { id: 'thermodynamics', name: 'Thermodynamics', nameTh: 'อุณหพลศาสตร์', icon: 'thermometer' },
  { id: 'waves', name: 'Waves & Light', nameTh: 'คลื่นและแสง', icon: 'radio' },
  { id: 'electricity', name: 'Electricity', nameTh: 'ไฟฟ้าและแม่เหล็ก', icon: 'cpu' },
  { id: 'algebra', name: 'Algebra', nameTh: 'พีชคณิต', icon: 'grid' },
  { id: 'calculus', name: 'Calculus', nameTh: 'แคลคูลัส', icon: 'trending-up' },
  { id: 'geometry', name: 'Geometry', nameTh: 'เรขาคณิต', icon: 'box' },
  { id: 'trigonometry', name: 'Trigonometry', nameTh: 'ตรีโกณมิติ', icon: 'triangle' },
  { id: 'sequences', name: 'Sequences & Series', nameTh: 'ลำดับและอนุกรม', icon: 'list' },
  { id: 'statistics', name: 'Statistics & Probability', nameTh: 'สถิติและความน่าจะเป็น', icon: 'bar-chart' },
  { id: 'advanced', name: 'Advanced Math', nameTh: 'เวกเตอร์และเมทริกซ์', icon: 'grid' },
  { id: 'earth', name: 'Earth & Space', nameTh: 'โลกและดาราศาสตร์', icon: 'globe' },
  { id: 'economics', name: 'Economics', nameTh: 'เศรษฐศาสตร์', icon: 'trending-up' },
  { id: 'health', name: 'Health', nameTh: 'สุขภาพ', icon: 'heart' },
  { id: 'tech', name: 'Technology', nameTh: 'เทคโนโลยีดิจิทัล', icon: 'cpu' },
  { id: 'finance', name: 'Financial Math', nameTh: 'คณิตศาสตร์การเงิน', icon: 'dollar-sign' }
];

const BASE_FORMULAS = [
  // ==================== 1. MECHANICS: NEWTON'S SECOND LAW ====================
  {
    id: 'newton_second_law',
    name: "Newton's Second Law",
    nameTh: 'กฎข้อที่ 2 ของนิวตัน (แรงและความเร่ง)',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'target',
    latex: 'F = m \\cdot a',
    description: 'ความเร่งของวัตถุเป็นสัดส่วนโดยตรงกับแรงลัพธ์ที่กระทำต่อวัตถุ และเป็นสัดส่วนผกผันกับมวลของวัตถุ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'แรงลัพธ์', unit: 'N', defaultValue: 100, min: -10000, max: 10000, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล', unit: 'kg', defaultValue: 20, min: 0.001, max: 10000, step: 0.5 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'ความเร่ง', unit: 'm/s²', defaultValue: 5, min: -1000, max: 1000, step: 0.1 }
    ],
    solveTargets: ['F', 'm', 'a'],
    calculate: (inputs, target = 'F') => {
      let { F, m, a } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'F') {
        result = m * a;
        unit = 'N (นิวตัน)';
        steps = [
          { title: 'สูตรเริ่มต้น', latex: 'F = m \\times a', explanation: 'ใช้สูตรแรงของนิวตันโดยตรง' },
          { title: 'แทนค่าตัวแปร', latex: `F = ${m}\\,\\text{kg} \\times ${a}\\,\\text{m/s}^2`, explanation: `แทนค่ามวล m = ${m} และความเร่ง a = ${a}` },
          { title: 'ผลการคำนวณ', latex: `F = ${result.toFixed(4)}\\,\\text{N}`, explanation: `แรงลัพธ์เท่ากับ ${result.toFixed(4)} นิวตัน` }
        ];
      } else if (target === 'm') {
        if (a === 0) throw new Error('ความเร่ง (a) ต้องไม่เป็น 0');
        result = F / a;
        unit = 'kg (กิโลกรัม)';
        steps = [
          { title: 'จัดรูปสมการหาค่ามวล (m)', latex: 'm = \\frac{F}{a}', explanation: 'ย้ายความเร่ง (a) ไปหารแรงลัพธ์ (F)' },
          { title: 'แทนค่าตัวแปร', latex: `m = \\frac{${F}\\,\\text{N}}{${a}\\,\\text{m/s}^2}`, explanation: `แทนค่า F = ${F} และ a = ${a}` },
          { title: 'ผลการคำนวณ', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลของวัตถุเท่ากับ ${result.toFixed(4)} กิโลกรัม` }
        ];
      } else if (target === 'a') {
        if (m === 0) throw new Error('มวล (m) ต้องไม่เป็น 0');
        result = F / m;
        unit = 'm/s² (เมตรต่อวินาทีกำลังสอง)';
        steps = [
          { title: 'จัดรูปสมการหาค่าความเร่ง (a)', latex: 'a = \\frac{F}{m}', explanation: 'ย้ายมวล (m) ไปหารแรงลัพธ์ (F)' },
          { title: 'แทนค่าตัวแปร', latex: `a = \\frac{${F}\\,\\text{N}}{${m}\\,\\text{kg}}`, explanation: `แทนค่า F = ${F} และ m = ${m}` },
          { title: 'ผลการคำนวณ', latex: `a = ${result.toFixed(4)}\\,\\text{m/s}^2`, explanation: `ความเร่งของวัตถุเท่ากับ ${result.toFixed(4)} m/s²` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 2. MECHANICS: LINEAR MOTION (s = ut + 0.5at^2) ====================
  {
    id: 'displacement_acceleration',
    name: 'Displacement with Uniform Acceleration',
    nameTh: 'การกระจัดเมื่อความเร่งคงที่',
    category: 'mechanics',
    categoryTh: 'กลศาสตร์',
    icon: 'navigation',
    latex: 's = u \\cdot t + \\frac{1}{2} a \\cdot t^2',
    description: 'การหาระยะการกระจัดของการเคลื่อนที่ในแนวเส้นตรงที่มีความเร่งคงที่สม่ำเสมอ',
    variables: [
      { id: 's', symbol: 's', name: 'Displacement', nameTh: 'การกระจัด', unit: 'm', defaultValue: 60, min: -100000, max: 100000, step: 1 },
      { id: 'u', symbol: 'u', name: 'Initial Velocity', nameTh: 'ความเร็วต้น', unit: 'm/s', defaultValue: 10, min: -1000, max: 1000, step: 0.5 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เวลา', unit: 's', defaultValue: 4, min: 0.001, max: 1000, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'ความเร่ง', unit: 'm/s²', defaultValue: 2.5, min: -500, max: 500, step: 0.1 }
    ],
    solveTargets: ['s', 'u', 'a'],
    calculate: (inputs, target = 's') => {
      let { s, u, t, a } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 's') {
        result = u * t + 0.5 * a * Math.pow(t, 2);
        unit = 'm (เมตร)';
        steps = [
          { title: 'สูตรการกระจัด', latex: 's = u \\cdot t + \\frac{1}{2} a \\cdot t^2', explanation: 'สูตรหลักการกระจัด' },
          { title: 'แทนค่าตัวแปร', latex: `s = (${u})(${t}) + \\frac{1}{2} (${a}) (${t})^2`, explanation: `แทนค่า u = ${u}, t = ${t}, a = ${a}` },
          { title: 'คำนวณทีละพจน์', latex: `s = ${(u * t).toFixed(2)} + ${(0.5 * a * t * t).toFixed(2)}`, explanation: 'รวมระยะทางจากความเร็วต้นและการเร่ง' },
          { title: 'ผลการคำนวณ', latex: `s = ${result.toFixed(4)}\\,\\text{m}`, explanation: `การกระจัดทั้งหมดเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      } else if (target === 'u') {
        if (t === 0) throw new Error('เวลา (t) ต้องไม่เป็น 0');
        result = (s - 0.5 * a * Math.pow(t, 2)) / t;
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปสมการหาค่าความเร็วต้น (u)', latex: 'u = \\frac{s - \\frac{1}{2} a \\cdot t^2}{t}', explanation: 'ย้ายพจน์ความเร่งไปลบ แล้วหารด้วยเวลา' },
          { title: 'แทนค่าตัวแปร', latex: `u = \\frac{${s} - 0.5(${a})(${t}^2)}{${t}}`, explanation: 'แทนค่า s, a, t' },
          { title: 'ผลการคำนวณ', latex: `u = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `ความเร็วต้นเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      } else if (target === 'a') {
        if (t === 0) throw new Error('เวลา (t) ต้องไม่เป็น 0');
        result = (2 * (s - u * t)) / Math.pow(t, 2);
        unit = 'm/s²';
        steps = [
          { title: 'จัดรูปสมการหาค่าความเร่ง (a)', latex: 'a = \\frac{2(s - u \\cdot t)}{t^2}', explanation: 'ย้ายพจน์และคูณด้วย 2 แล้วหารด้วย t กำลังสอง' },
          { title: 'แทนค่าตัวแปร', latex: `a = \\frac{2(${s} - (${u})(${t}))}{${t}^2}`, explanation: 'แทนค่า s, u, t' },
          { title: 'ผลการคำนวณ', latex: `a = ${result.toFixed(4)}\\,\\text{m/s}^2`, explanation: `ความเร่งเท่ากับ ${result.toFixed(4)} m/s²` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 3. ENERGY: KINETIC ENERGY ====================
  {
    id: 'kinetic_energy',
    name: 'Kinetic Energy',
    nameTh: 'พลังงานจลน์',
    category: 'energy',
    categoryTh: 'งานและพลังงาน',
    icon: 'zap',
    latex: 'E_k = \\frac{1}{2} m v^2',
    description: 'พลังงานที่สะสมอยู่ในวัตถุอันเนื่องมาจากความเร็วของการเคลื่อนที่',
    variables: [
      { id: 'Ek', symbol: 'E_k', name: 'Kinetic Energy', nameTh: 'พลังงานจลน์', unit: 'J', defaultValue: 2500, min: 0, max: 10000000, step: 10 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล', unit: 'kg', defaultValue: 50, min: 0.001, max: 100000, step: 0.5 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'ความเร็ว', unit: 'm/s', defaultValue: 10, min: 0, max: 10000, step: 0.5 }
    ],
    solveTargets: ['Ek', 'm', 'v'],
    calculate: (inputs, target = 'Ek') => {
      let { Ek, m, v } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'Ek') {
        result = 0.5 * m * Math.pow(v, 2);
        unit = 'J (จูล)';
        steps = [
          { title: 'สูตรพลังงานจลน์', latex: 'E_k = \\frac{1}{2} m v^2', explanation: 'สูตรคำนวณพลังงานจลน์มาตรฐาน' },
          { title: 'แทนค่าตัวแปร', latex: `E_k = 0.5 \\times ${m}\\,\\text{kg} \\times (${v}\\,\\text{m/s})^2`, explanation: `แทนมวล = ${m} kg และความเร็ว = ${v} m/s` },
          { title: 'ผลการคำนวณ', latex: `E_k = ${result.toFixed(4)}\\,\\text{J}`, explanation: `พลังงานจลน์เท่ากับ ${result.toFixed(4)} จูล` }
        ];
      } else if (target === 'm') {
        if (v === 0) throw new Error('ความเร็ว (v) ต้องไม่เป็น 0 เพื่อคำนวณมวล');
        result = (2 * Ek) / Math.pow(v, 2);
        unit = 'kg';
        steps = [
          { title: 'จัดรูปสมการหามวล (m)', latex: 'm = \\frac{2 E_k}{v^2}', explanation: 'คูณด้วย 2 แล้วหารด้วย v²' },
          { title: 'แทนค่าตัวแปร', latex: `m = \\frac{2 \\times ${Ek}}{${v}^2}`, explanation: 'แทนค่า Ek และ v' },
          { title: 'ผลการคำนวณ', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'v') {
        if (m <= 0) throw new Error('มวล (m) ต้องมากกว่า 0');
        result = Math.sqrt((2 * Ek) / m);
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปสมการหาความเร็ว (v)', latex: 'v = \\sqrt{\\frac{2 E_k}{m}}', explanation: 'ถอดสแควร์รูททั้งสองข้าง' },
          { title: 'แทนค่าตัวแปร', latex: `v = \\sqrt{\\frac{2 \\times ${Ek}}{${m}}}`, explanation: 'แทนค่า Ek และ m' },
          { title: 'ผลการคำนวณ', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `ความเร็วเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 4. ENERGY: GRAVITATIONAL POTENTIAL ENERGY ====================
  {
    id: 'potential_energy',
    name: 'Gravitational Potential Energy',
    nameTh: 'พลังงานศักย์โน้มถ่วง',
    category: 'energy',
    categoryTh: 'งานและพลังงาน',
    icon: 'arrow-up',
    latex: 'E_p = m \\cdot g \\cdot h',
    description: 'พลังงานที่สะสมในวัตถุเนื่องจากตำแหน่งความสูงในระดับสนามโน้มถ่วง',
    variables: [
      { id: 'Ep', symbol: 'E_p', name: 'Potential Energy', nameTh: 'พลังงานศักย์', unit: 'J', defaultValue: 980, min: 0, max: 10000000, step: 10 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล', unit: 'kg', defaultValue: 10, min: 0.001, max: 10000, step: 0.5 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'ความเร่งโน้มถ่วง', unit: 'm/s²', defaultValue: 9.8, min: 0.1, max: 50, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'ความสูง', unit: 'm', defaultValue: 10, min: 0, max: 10000, step: 0.5 }
    ],
    solveTargets: ['Ep', 'm', 'h'],
    calculate: (inputs, target = 'Ep') => {
      let { Ep, m, g, h } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'Ep') {
        result = m * g * h;
        unit = 'J (จูล)';
        steps = [
          { title: 'สูตรพลังงานศักย์', latex: 'E_p = m \\cdot g \\cdot h', explanation: 'พลังงานศักย์โน้มถ่วง' },
          { title: 'แทนค่าตัวแปร', latex: `E_p = (${m})(${g})(${h})`, explanation: `m = ${m}, g = ${g}, h = ${h}` },
          { title: 'ผลการคำนวณ', latex: `E_p = ${result.toFixed(4)}\\,\\text{J}`, explanation: `พลังงานศักย์เท่ากับ ${result.toFixed(4)} จูล` }
        ];
      } else if (target === 'm') {
        result = Ep / (g * h);
        unit = 'kg';
        steps = [
          { title: 'จัดรูปสมการหามวล', latex: 'm = \\frac{E_p}{g \\cdot h}', explanation: 'ย้าย g และ h ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'h') {
        result = Ep / (m * g);
        unit = 'm';
        steps = [
          { title: 'จัดรูปสมการหาความสูง', latex: 'h = \\frac{E_p}{m \\cdot g}', explanation: 'ย้าย m และ g ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `h = ${result.toFixed(4)}\\,\\text{m}`, explanation: `ความสูงเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 5. WAVES: WAVE SPEED ====================
  {
    id: 'wave_speed',
    name: 'Wave Speed Relationship',
    nameTh: 'อัตราเร็วของคลื่น',
    category: 'waves',
    categoryTh: 'คลื่นและแสง',
    icon: 'radio',
    latex: 'v = f \\cdot \\lambda',
    description: 'ความสัมพันธ์ระหว่างอัตราเร็วของคลื่น ความถี่ และความยาวคลื่น',
    variables: [
      { id: 'v', symbol: 'v', name: 'Wave Speed', nameTh: 'อัตราเร็วคลื่น', unit: 'm/s', defaultValue: 340, min: 0.1, max: 300000000, step: 1 },
      { id: 'f', symbol: 'f', name: 'Frequency', nameTh: 'ความถี่', unit: 'Hz', defaultValue: 440, min: 0.01, max: 1000000000, step: 1 },
      { id: 'lambda', symbol: '\\lambda', name: 'Wavelength', nameTh: 'ความยาวคลื่น', unit: 'm', defaultValue: 0.7727, min: 0.000001, max: 100000, step: 0.01 }
    ],
    solveTargets: ['v', 'f', 'lambda'],
    calculate: (inputs, target = 'v') => {
      let { v, f, lambda } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'v') {
        result = f * lambda;
        unit = 'm/s';
        steps = [
          { title: 'สูตรอัตราเร็วคลื่น', latex: 'v = f \\times \\lambda', explanation: 'ความถี่คูณความยาวคลื่น' },
          { title: 'แทนค่าตัวแปร', latex: `v = ${f}\\,\\text{Hz} \\times ${lambda}\\,\\text{m}`, explanation: `f = ${f} Hz, λ = ${lambda} m` },
          { title: 'ผลการคำนวณ', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `อัตราเร็วคลื่นเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      } else if (target === 'f') {
        result = v / lambda;
        unit = 'Hz';
        steps = [
          { title: 'จัดรูปสมการหาความถี่', latex: 'f = \\frac{v}{\\lambda}', explanation: 'ย้ายความยาวคลื่นไปหาร' },
          { title: 'ผลการคำนวณ', latex: `f = ${result.toFixed(4)}\\,\\text{Hz}`, explanation: `ความถี่เท่ากับ ${result.toFixed(4)} Hz` }
        ];
      } else if (target === 'lambda') {
        result = v / f;
        unit = 'm';
        steps = [
          { title: 'จัดรูปสมการหาความยาวคลื่น', latex: '\\lambda = \\frac{v}{f}', explanation: 'ย้ายความถี่ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `\\lambda = ${result.toFixed(4)}\\,\\text{m}`, explanation: `ความยาวคลื่นเท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 6. ELECTRICITY: OHM'S LAW ====================
  {
    id: 'ohms_law',
    name: "Ohm's Law",
    nameTh: 'กฎของโอห์ม (ความต่างศักย์และกระแสไฟฟ้า)',
    category: 'electricity',
    categoryTh: 'ไฟฟ้าและแม่เหล็ก',
    icon: 'cpu',
    latex: 'V = I \\cdot R',
    description: 'กระแสไฟฟ้าที่ไหลผ่านตัวนำจะเป็นสัดส่วนโดยตรงกับความต่างศักย์ไฟฟ้าระหว่างปลายทั้งสองข้าง',
    variables: [
      { id: 'V', symbol: 'V', name: 'Voltage', nameTh: 'ความต่างศักย์', unit: 'V', defaultValue: 12, min: -10000, max: 10000, step: 0.5 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'กระแสไฟฟ้า', unit: 'A', defaultValue: 2, min: 0.001, max: 1000, step: 0.1 },
      { id: 'R', symbol: 'R', name: 'Resistance', nameTh: 'ความต้านทาน', unit: 'Ω', defaultValue: 6, min: 0.001, max: 1000000, step: 0.5 }
    ],
    solveTargets: ['V', 'I', 'R'],
    calculate: (inputs, target = 'V') => {
      let { V, I, R } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'V') {
        result = I * R;
        unit = 'V (โวลต์)';
        steps = [
          { title: 'สูตรกฎของโอห์ม', latex: 'V = I \\times R', explanation: 'กระแสไฟฟ้าคูณความต้านทาน' },
          { title: 'แทนค่าตัวแปร', latex: `V = ${I}\\,\\text{A} \\times ${R}\\,\\Omega`, explanation: `I = ${I} A, R = ${R} Ω` },
          { title: 'ผลการคำนวณ', latex: `V = ${result.toFixed(4)}\\,\\text{V}`, explanation: `ความต่างศักย์ไฟฟ้าเท่ากับ ${result.toFixed(4)} โวลต์` }
        ];
      } else if (target === 'I') {
        result = V / R;
        unit = 'A (แอมแปร์)';
        steps = [
          { title: 'จัดรูปสมการหากระแสไฟฟ้า', latex: 'I = \\frac{V}{R}', explanation: 'ย้ายความต้านทานไปหาร' },
          { title: 'ผลการคำนวณ', latex: `I = ${result.toFixed(4)}\\,\\text{A}`, explanation: `กระแสไฟฟ้าเท่ากับ ${result.toFixed(4)} แอมแปร์` }
        ];
      } else if (target === 'R') {
        result = V / I;
        unit = 'Ω (โอห์ม)';
        steps = [
          { title: 'จัดรูปสมการหาความต้านทาน', latex: 'R = \\frac{V}{I}', explanation: 'ย้ายกระแสไฟฟ้าไปหาร' },
          { title: 'ผลการคำนวณ', latex: `R = ${result.toFixed(4)}\\,\\Omega`, explanation: `ความต้านทานเท่ากับ ${result.toFixed(4)} โอห์ม` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 7. ALGEBRA: QUADRATIC FORMULA ====================
  {
    id: 'quadratic_equation',
    name: 'Quadratic Formula Solver',
    nameTh: 'สูตรแก้สมการกำลังสอง',
    category: 'algebra',
    categoryTh: 'พีชคณิต',
    icon: 'grid',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description: 'การหารากของสมการพหุนามกำลังสองในรูป ax² + bx + c = 0',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient a', nameTh: 'สัมประสิทธิ์ a', unit: '', defaultValue: 1, min: -1000, max: 1000, step: 1 },
      { id: 'b', symbol: 'b', name: 'Coefficient b', nameTh: 'สัมประสิทธิ์ b', unit: '', defaultValue: -5, min: -1000, max: 1000, step: 1 },
      { id: 'c', symbol: 'c', name: 'Constant c', nameTh: 'ค่าคงที่ c', unit: '', defaultValue: 6, min: -1000, max: 1000, step: 1 }
    ],
    solveTargets: ['x'],
    calculate: (inputs) => {
      let { a, b, c } = inputs;
      if (a === 0) throw new Error('สัมประสิทธิ์ a ต้องไม่เป็น 0 เพื่อให้เป็นสมการกำลังสอง');
      
      const discriminant = Math.pow(b, 2) - 4 * a * c;
      let steps = [
        { title: 'สมการในรูปมาตรฐาน', latex: `${a}x^2 + (${b})x + (${c}) = 0`, explanation: 'เทียบค่าสัมประสิทธิ์ a, b, c' },
        { title: 'คำนวณดิสคริมิแนนท์ (Discriminant, Δ)', latex: `\\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}`, explanation: `Δ = ${discriminant}` }
      ];

      let resultText = '';
      if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `x_1 = ${x1.toFixed(4)}, x_2 = ${x2.toFixed(4)}`;
        steps.push({
          title: 'คำนวณรากทั้ง 2 ค่า (รากจริงต่างกัน)',
          latex: `x = \\frac{-(${b}) \\pm \\sqrt{${discriminant}}}{2(${a})} \\implies x_1 = ${x1.toFixed(4)}, \\, x_2 = ${x2.toFixed(4)}`,
          explanation: `เนื่องจาก Δ > 0 สมการจะมี 2 คำตอบที่เป็นจำนวนจริง`
        });
        return { result: x1, secondaryResult: x2, resultDisplay: resultText, unit: '', steps };
      } else if (discriminant === 0) {
        const x = -b / (2 * a);
        resultText = `x = ${x.toFixed(4)} (รากซ้ำ)`;
        steps.push({
          title: 'คำนวณราก (รากจริงซ้ำกัน)',
          latex: `x = \\frac{-(${b})}{2(${a})} = ${x.toFixed(4)}`,
          explanation: `เนื่องจาก Δ = 0 สมการจะมี 1 คำตอบที่เป็นจำนวนจริง (รากซ้ำ)`
        });
        return { result: x, resultDisplay: resultText, unit: '', steps };
      } else {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
        resultText = `${realPart} ± ${Math.abs(imagPart)}i`;
        steps.push({
          title: 'คำนวณรากจำนวนเชิงซ้อน (Complex Roots)',
          latex: `x = ${realPart} \\pm ${Math.abs(imagPart)}i`,
          explanation: `เนื่องจาก Δ < 0 คำตอบจึงเป็นจำนวนเชิงซ้อนคู่สังยุค`
        });
        return { result: 0, resultDisplay: resultText, unit: '(Complex)', steps };
      }
    }
  },

  // ==================== 8. GEOMETRY: PYTHAGOREAN THEOREM ====================
  {
    id: 'pythagoras',
    name: 'Pythagorean Theorem',
    nameTh: 'ทฤษฎีบทพีทาโกรัส',
    category: 'geometry',
    categoryTh: 'เรขาคณิต',
    icon: 'triangle',
    latex: 'a^2 + b^2 = c^2',
    description: 'ความสัมพันธ์ระหว่างความยาวของด้านทั้งสามของรูปสามเหลี่ยมมุมฉาก',
    variables: [
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'ด้านประกอบมุมฉาก a', unit: '', defaultValue: 3, min: 0.001, max: 10000, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'ด้านประกอบมุมฉาก b', unit: '', defaultValue: 4, min: 0.001, max: 10000, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Hypotenuse c', nameTh: 'ด้านตรงข้ามมุมฉาก c', unit: '', defaultValue: 5, min: 0.001, max: 10000, step: 0.1 }
    ],
    solveTargets: ['c', 'a', 'b'],
    calculate: (inputs, target = 'c') => {
      let { a, b, c } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'c') {
        result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        steps = [
          { title: 'สูตรพีทาโกรัส', latex: 'c = \\sqrt{a^2 + b^2}', explanation: 'ถอดรูทผลรวมกำลังสองของด้านประกอบมุมฉาก' },
          { title: 'แทนค่าตัวแปร', latex: `c = \\sqrt{(${a})^2 + (${b})^2} = \\sqrt{${(a*a).toFixed(2)} + ${(b*b).toFixed(2)}} = \\sqrt{${(a*a + b*b).toFixed(2)}}`, explanation: 'คำนวณกำลังสองและบวกกัน' },
          { title: 'ผลการคำนวณ', latex: `c = ${result.toFixed(4)}`, explanation: `ด้านตรงข้ามมุมฉากยาวเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (c <= b) throw new Error('ด้านตรงข้ามมุมฉาก (c) ต้องยาวกว่าด้านประกอบมุมฉาก (b)');
        result = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        steps = [
          { title: 'จัดรูปสมการหาด้าน a', latex: 'a = \\sqrt{c^2 - b^2}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลการคำนวณ', latex: `a = ${result.toFixed(4)}`, explanation: `ด้าน a ยาวเท่ากับ ${result.toFixed(4)}` }
        ];
      } else if (target === 'b') {
        if (c <= a) throw new Error('ด้านตรงข้ามมุมฉาก (c) ต้องยาวกว่าด้านประกอบมุมฉาก (a)');
        result = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        steps = [
          { title: 'จัดรูปสมการหาด้าน b', latex: 'b = \\sqrt{c^2 - a^2}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลการคำนวณ', latex: `b = ${result.toFixed(4)}`, explanation: `ด้าน b ยาวเท่ากับ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  // ==================== 9. FINANCE: COMPOUND INTEREST ====================
  {
    id: 'compound_interest',
    name: 'Compound Interest',
    nameTh: 'ดอกเบี้ยทบต้น',
    category: 'finance',
    categoryTh: 'คณิตศาสตร์การเงิน',
    icon: 'dollar-sign',
    latex: 'A = P \\left(1 + \\frac{r}{n}\\right)^{n \\cdot t}',
    description: 'การคำนวณมูลค่าเงินในอนาคตรวมดอกเบี้ยทบต้นตามรอบระยะเวลา',
    variables: [
      { id: 'P', symbol: 'P', name: 'Principal', nameTh: 'เงินต้น', unit: '฿', defaultValue: 10000, min: 1, max: 1000000000, step: 100 },
      { id: 'r', symbol: 'r', name: 'Annual Rate', nameTh: 'อัตราดอกเบี้ยต่อปี (%)', unit: '%', defaultValue: 5, min: 0.01, max: 100, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Compounding frequency', nameTh: 'จำนวนครั้งทบต้นต่อปี', unit: 'ครั้ง/ปี', defaultValue: 12, min: 1, max: 365, step: 1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'ระยะเวลา', unit: 'ปี', defaultValue: 5, min: 0.1, max: 100, step: 0.5 }
    ],
    solveTargets: ['A'],
    calculate: (inputs) => {
      let { P, r, n, t } = inputs;
      const rateDecimal = r / 100;
      const base = 1 + (rateDecimal / n);
      const exponent = n * t;
      const result = P * Math.pow(base, exponent);
      const totalInterest = result - P;

      const steps = [
        { title: 'สูตรดอกเบี้ยทบต้น', latex: 'A = P \\left(1 + \\frac{r}{n}\\right)^{nt}', explanation: 'สูตรคำนวณเงินรวม' },
        { title: 'แปลงอัตราดอกเบี้ยเป็นทศนิยม', latex: `r = ${r}\\% = ${rateDecimal.toFixed(4)}`, explanation: 'หารเปอร์เซ็นต์ด้วย 100' },
        { title: 'แทนค่าตัวแปรในสมการ', latex: `A = ${P} \\times \\left(1 + \\frac{${rateDecimal.toFixed(4)}}{${n}}\\right)^{(${n})(${t})}`, explanation: `P = ${P}, n = ${n}, t = ${t}` },
        { title: 'ผลการคำนวณเงินรวม', latex: `A = ${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\,\\text{บาท}`, explanation: `เงินต้นรวมดอกเบี้ยทั้งหมด` },
        { title: 'ดอกเบี้ยที่ได้รับทั้งหมด', latex: `\\text{Interest} = A - P = ${totalInterest.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\,\\text{บาท}`, explanation: `ดอกเบี้ยสุทธิที่เพิ่มขึ้นมา` }
      ];

      return { result, resultDisplay: `฿${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, unit: 'บาท', steps };
    }
  },

  // ==================== 10. RELATIVITY: MASS-ENERGY EQUIVALENCE ====================
  {
    id: 'mass_energy',
    name: 'Mass-Energy Equivalence',
    nameTh: 'สมมูลมวล-พลังงาน (ไอน์สไตน์)',
    category: 'energy',
    categoryTh: 'งานและพลังงาน',
    icon: 'sun',
    latex: 'E = m \\cdot c^2',
    description: 'สูตรความสัมพันธ์ระหว่างมวลและพลังงานอันเลื่องชื่อของอัลเบิร์ต ไอน์สไตน์ โดย c คือความเร็วแสง (~3 × 10⁸ m/s)',
    variables: [
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวลที่เปลี่ยนรูป', unit: 'kg', defaultValue: 0.001, min: 0.0000000001, max: 100000, step: 0.0001 }
    ],
    solveTargets: ['E'],
    calculate: (inputs) => {
      const { m } = inputs;
      const c = 299792458; // m/s
      const result = m * Math.pow(c, 2);

      const steps = [
        { title: 'สูตรสมมูลมวล-พลังงาน', latex: 'E = m \\cdot c^2', explanation: 'พลังงานเทียบเท่ากับมวลคูณความเร็วแสงยกกำลังสอง' },
        { title: 'กำหนดค่าคงที่ความเร็วแสง', latex: `c \\approx 3 \\times 10^8\\,\\text{m/s} \\quad (${c}\\,\\text{m/s})`, explanation: 'ความเร็วแสงในสุญญากาศ' },
        { title: 'แทนค่ามวล', latex: `E = (${m}\\,\\text{kg}) \\times (${c}\\)^2`, explanation: `แทนมวล m = ${m} kg` },
        { title: 'ผลลัพธ์พลังงานมหาศาล', latex: `E \\approx ${result.toExponential(4)}\\,\\text{Joules}`, explanation: `พลังงานที่ปลดปล่อยออกมาเท่ากับ ${result.toExponential(4)} จูล` }
      ];

      return { result, resultDisplay: `${result.toExponential(4)} J`, unit: 'J (จูล)', steps };
    }
  },

  // ==================== 11. PHYSICS: MOMENTUM (p = mv) ====================
  {
    id: 'momentum',
    name: 'Linear Momentum',
    nameTh: 'โมเมนตัมเชิงเส้น',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'target',
    latex: 'p = m \\cdot v',
    description: 'โมเมนตัมคือปริมาณการเคลื่อนที่ของวัตถุ เป็นผลคูณระหว่างมวลกับความเร็ว มีทิศทางตามความเร็วเสมอ (หน่วย N·s หรือ kg·m/s)',
    variables: [
      { id: 'p', symbol: 'p', name: 'Momentum', nameTh: 'โมเมนตัม', unit: 'kg·m/s', defaultValue: 50, min: -1000000, max: 1000000, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล', unit: 'kg', defaultValue: 5, min: 0.001, max: 100000, step: 0.5 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'ความเร็ว', unit: 'm/s', defaultValue: 10, min: -1000, max: 1000, step: 0.5 }
    ],
    solveTargets: ['p', 'm', 'v'],
    calculate: (inputs, target = 'p') => {
      let { p, m, v } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'p') {
        result = m * v;
        unit = 'kg·m/s';
        steps = [
          { title: 'สูตรโมเมนตัม', latex: 'p = m \\times v', explanation: 'โมเมนตัมเท่ากับมวลคูณความเร็ว' },
          { title: 'แทนค่าตัวแปร', latex: `p = ${m}\\,\\text{kg} \\times ${v}\\,\\text{m/s}`, explanation: `แทนมวล m = ${m} kg และความเร็ว v = ${v} m/s` },
          { title: 'ผลการคำนวณ', latex: `p = ${result.toFixed(4)}\\,\\text{kg·m/s}`, explanation: `โมเมนตัมเท่ากับ ${result.toFixed(4)} kg·m/s` }
        ];
      } else if (target === 'm') {
        if (v === 0) throw new Error('ความเร็ว (v) ต้องไม่เป็น 0 เพื่อคำนวณมวล');
        result = p / v;
        unit = 'kg';
        steps = [
          { title: 'จัดรูปสมการหามวล', latex: 'm = \\frac{p}{v}', explanation: 'ย้ายความเร็วไปหารโมเมนตัม' },
          { title: 'ผลการคำนวณ', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'v') {
        if (m === 0) throw new Error('มวล (m) ต้องไม่เป็น 0 เพื่อคำนวณความเร็ว');
        result = p / m;
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปสมการหาความเร็ว', latex: 'v = \\frac{p}{m}', explanation: 'ย้ายมวลไปหารโมเมนตัม' },
          { title: 'ผลการคำนวณ', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `ความเร็วเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 12. PHYSICS: NEWTON'S LAW OF UNIVERSAL GRAVITATION ====================
  {
    id: 'newton_gravitation',
    name: "Newton's Law of Universal Gravitation",
    nameTh: 'กฎความโน้มถ่วงสากลของนิวตัน',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'orbit',
    latex: 'F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}',
    description: 'แรงดึงดูดระหว่างมวลสองก้อนเป็นสัดส่วนตรงกับผลคูณของมวล และแปรผกผันกับกำลังสองของระยะห่าง ค่าคงที่โน้มถ่วงสากล G = 6.674 × 10⁻¹¹ N·m²/kg²',
    variables: [
      { id: 'F', symbol: 'F', name: 'Gravitational Force', nameTh: 'แรงโน้มถ่วง', unit: 'N', defaultValue: 6.67e-7, min: 1e-20, max: 1e15, step: 1e-7 },
      { id: 'm1', symbol: 'm_1', name: 'Mass 1', nameTh: 'มวลวัตถุที่ 1', unit: 'kg', defaultValue: 100, min: 0.001, max: 1e15, step: 1 },
      { id: 'm2', symbol: 'm_2', name: 'Mass 2', nameTh: 'มวลวัตถุที่ 2', unit: 'kg', defaultValue: 100, min: 0.001, max: 1e15, step: 1 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'ระยะห่างระหว่างมวล', unit: 'm', defaultValue: 1, min: 0.000001, max: 1e12, step: 1 }
    ],
    solveTargets: ['F', 'm1', 'r'],
    calculate: (inputs, target = 'F') => {
      const G = 6.674e-11;
      let { F, m1, m2, r } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'F') {
        if (r === 0) throw new Error('ระยะห่าง (r) ต้องไม่เป็น 0');
        result = (G * m1 * m2) / Math.pow(r, 2);
        unit = 'N (นิวตัน)';
        steps = [
          { title: 'สูตรกฎความโน้มถ่วงสากล', latex: 'F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}', explanation: 'โดย G = 6.674 × 10⁻¹¹ N·m²/kg²' },
          { title: 'แทนค่าตัวแปร', latex: `F = (6.674 \\times 10^{-11}) \\times \\frac{${m1} \\times ${m2}}{(${r})^2}`, explanation: `m₁ = ${m1} kg, m₂ = ${m2} kg, r = ${r} m` },
          { title: 'ผลการคำนวณ', latex: `F = ${result.toExponential(4)}\\,\\text{N}`, explanation: `แรงโน้มถ่วงเท่ากับ ${result.toExponential(4)} นิวตัน` }
        ];
      } else if (target === 'm1') {
        if (m2 === 0) throw new Error('มวล m₂ ต้องไม่เป็น 0');
        result = (F * Math.pow(r, 2)) / (G * m2);
        unit = 'kg';
        steps = [
          { title: 'จัดรูปสมการหามวล m₁', latex: 'm_1 = \\frac{F \\cdot r^2}{G \\cdot m_2}', explanation: 'ย้ายข้างทั้งหมด' },
          { title: 'ผลการคำนวณ', latex: `m_1 = ${result.toExponential(4)}\\,\\text{kg}`, explanation: `มวลวัตถุที่ 1 เท่ากับ ${result.toExponential(4)} kg` }
        ];
      } else if (target === 'r') {
        if (F === 0) throw new Error('แรง (F) ต้องไม่เป็น 0');
        result = Math.sqrt((G * m1 * m2) / F);
        unit = 'm';
        steps = [
          { title: 'จัดรูปสมการหาระยะห่าง', latex: 'r = \\sqrt{\\frac{G \\cdot m_1 \\cdot m_2}{F}}', explanation: 'ย้ายและถอดรูท' },
          { title: 'ผลการคำนวณ', latex: `r = ${result.toExponential(4)}\\,\\text{m}`, explanation: `ระยะห่างเท่ากับ ${result.toExponential(4)} เมตร` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 13. PHYSICS: CENTRIPETAL FORCE ====================
  {
    id: 'centripetal_force',
    name: 'Centripetal Force',
    nameTh: 'แรงสู่ศูนย์กลาง',
    category: 'physics',
    categoryTh: 'ฟิสิกส์',
    icon: 'refresh',
    latex: 'F = \\frac{m \\cdot v^2}{r}',
    description: 'แรงลัพธ์ที่กระทำต่อวัตถุที่เคลื่อนที่เป็นวงกลม และมีทิศพุ่งเข้าหาจุดศูนย์กลางของวงกลมเสมอ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Centripetal Force', nameTh: 'แรงสู่ศูนย์กลาง', unit: 'N', defaultValue: 125, min: 0, max: 1e9, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวล', unit: 'kg', defaultValue: 2, min: 0.001, max: 100000, step: 0.1 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'อัตราเร็วเชิงเส้น', unit: 'm/s', defaultValue: 25, min: 0, max: 10000, step: 0.5 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'รัศมีการเคลื่อนที่', unit: 'm', defaultValue: 10, min: 0.000001, max: 100000, step: 0.5 }
    ],
    solveTargets: ['F', 'm', 'v', 'r'],
    calculate: (inputs, target = 'F') => {
      let { F, m, v, r } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'F') {
        if (r === 0) throw new Error('รัศมี (r) ต้องไม่เป็น 0');
        result = (m * Math.pow(v, 2)) / r;
        unit = 'N (นิวตัน)';
        steps = [
          { title: 'สูตรแรงสู่ศูนย์กลาง', latex: 'F = \\frac{m v^2}{r}', explanation: 'มวลคูณอัตราเร็วกำลังสองหารรัศมี' },
          { title: 'แทนค่าตัวแปร', latex: `F = \\frac{${m}\\,\\text{kg} \\times (${v}\\,\\text{m/s})^2}{${r}\\,\\text{m}}`, explanation: 'แทนค่าทั้งหมดลงในสูตร' },
          { title: 'ผลการคำนวณ', latex: `F = ${result.toFixed(4)}\\,\\text{N}`, explanation: `แรงสู่ศูนย์กลางเท่ากับ ${result.toFixed(4)} นิวตัน` }
        ];
      } else if (target === 'm') {
        if (v === 0) throw new Error('อัตราเร็ว (v) ต้องไม่เป็น 0');
        result = (F * r) / Math.pow(v, 2);
        unit = 'kg';
        steps = [
          { title: 'จัดรูปสมการหามวล', latex: 'm = \\frac{F \\cdot r}{v^2}', explanation: 'ย้ายข้างแก้สมการ' },
          { title: 'ผลการคำนวณ', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลเท่ากับ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'v') {
        if (m === 0) throw new Error('มวล (m) ต้องไม่เป็น 0');
        result = Math.sqrt((F * r) / m);
        unit = 'm/s';
        steps = [
          { title: 'จัดรูปสมการหาอัตราเร็ว', latex: 'v = \\sqrt{\\frac{F \\cdot r}{m}}', explanation: 'ย้ายข้างและถอดรูท' },
          { title: 'ผลการคำนวณ', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `อัตราเร็วเชิงเส้นเท่ากับ ${result.toFixed(4)} m/s` }
        ];
      } else if (target === 'r') {
        if (F === 0) throw new Error('แรง (F) ต้องไม่เป็น 0');
        result = (m * Math.pow(v, 2)) / F;
        unit = 'm';
        steps = [
          { title: 'จัดรูปสมการหารัศมี', latex: 'r = \\frac{m \\cdot v^2}{F}', explanation: 'ย้ายรัศมีไปไว้ตัวตั้ง' },
          { title: 'ผลการคำนวณ', latex: `r = ${result.toFixed(4)}\\,\\text{m}`, explanation: `รัศมีการเคลื่อนที่เท่ากับ ${result.toFixed(4)} เมตร` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 14. CHEMISTRY: IDEAL GAS LAW ====================
  {
    id: 'ideal_gas_law',
    name: 'Ideal Gas Law',
    nameTh: 'สมการแก๊สอุดมคติ (PV = nRT)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'wind',
    latex: 'P \\cdot V = n \\cdot R \\cdot T',
    description: 'ความสัมพันธ์ระหว่างความดัน (P) ปริมาตร (V) จำนวนโมล (n) และอุณหภูมิเคลวิน (T) ของแก๊สอุดมคติ โดยค่าคงที่แก๊ส R = 0.0821 L·atm/(mol·K)',
    variables: [
      { id: 'P', symbol: 'P', name: 'Pressure', nameTh: 'ความดัน', unit: 'atm', defaultValue: 1, min: 0.0001, max: 1000, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตร', unit: 'L', defaultValue: 22.4, min: 0.0001, max: 100000, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'จำนวนโมล', unit: 'mol', defaultValue: 1, min: 0.0001, max: 100000, step: 0.1 },
      { id: 'T', symbol: 'T', name: 'Temperature (Kelvin)', nameTh: 'อุณหภูมิ (เคลวิน)', unit: 'K', defaultValue: 273.15, min: 0.001, max: 5000, step: 1 }
    ],
    solveTargets: ['P', 'V', 'n', 'T'],
    calculate: (inputs, target = 'P') => {
      const R = 0.0821;
      let { P, V, n, T } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'P') {
        if (V === 0) throw new Error('ปริมาตร (V) ต้องไม่เป็น 0');
        result = (n * R * T) / V;
        unit = 'atm';
        steps = [
          { title: 'สูตรแก๊สอุดมคติ', latex: 'PV = nRT \\implies P = \\frac{nRT}{V}', explanation: 'จัดรูปสมการหาความดัน' },
          { title: 'แทนค่าตัวแปร', latex: `P = \\frac{${n}\\,\\text{mol} \\times 0.0821 \\times ${T}\\,\\text{K}}{${V}\\,\\text{L}}`, explanation: `n = ${n} mol, T = ${T} K, V = ${V} L` },
          { title: 'ผลการคำนวณ', latex: `P = ${result.toFixed(4)}\\,\\text{atm}`, explanation: `ความดันแก๊สเท่ากับ ${result.toFixed(4)} atm` }
        ];
      } else if (target === 'V') {
        if (P === 0) throw new Error('ความดัน (P) ต้องไม่เป็น 0');
        result = (n * R * T) / P;
        unit = 'L';
        steps = [
          { title: 'จัดรูปสมการหาปริมาตร', latex: 'V = \\frac{nRT}{P}', explanation: 'ย้าย P ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `V = ${result.toFixed(4)}\\,\\text{L}`, explanation: `ปริมาตรแก๊สเท่ากับ ${result.toFixed(4)} ลิตร` }
        ];
      } else if (target === 'n') {
        if (T === 0) throw new Error('อุณหภูมิ (T) ต้องไม่เป็น 0');
        result = (P * V) / (R * T);
        unit = 'mol';
        steps = [
          { title: 'จัดรูปสมการหาจำนวนโมล', latex: 'n = \\frac{PV}{RT}', explanation: 'ย้าย RT ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `n = ${result.toFixed(4)}\\,\\text{mol}`, explanation: `จำนวนโมลเท่ากับ ${result.toFixed(4)} โมล` }
        ];
      } else if (target === 'T') {
        if (n === 0) throw new Error('จำนวนโมล (n) ต้องไม่เป็น 0');
        result = (P * V) / (R * n);
        unit = 'K';
        steps = [
          { title: 'จัดรูปสมการหาอุณหภูมิ', latex: 'T = \\frac{PV}{nR}', explanation: 'ย้าย nR ไปหาร (อุณหภูมิต้องเป็นเคลวินเสมอ)' },
          { title: 'ผลการคำนวณ', latex: `T = ${result.toFixed(4)}\\,\\text{K}`, explanation: `อุณหภูมิเท่ากับ ${result.toFixed(4)} เคลวิน` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 15. CHEMISTRY: MOLE & MOLARITY ====================
  {
    id: 'molarity',
    name: 'Molarity (Solution Concentration)',
    nameTh: 'โมลาริตี (ความเข้มข้นของสารละลาย)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'droplet',
    latex: 'C = \\frac{n}{V} \\quad \\left(n = \\frac{m}{M}\\right)',
    description: 'ความเข้มข้นของสารละลายในหน่วยโมลต่อลิตร (mol/L หรือ M) โดยจำนวนโมลคำนวณจากมวลสารหารมวลโมเลกุล',
    variables: [
      { id: 'C', symbol: 'C', name: 'Molarity', nameTh: 'โมลาริตี', unit: 'mol/L', defaultValue: 1, min: 0.000001, max: 50, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Moles of Solute', nameTh: 'จำนวนโมลตัวละลาย', unit: 'mol', defaultValue: 1, min: 0.000001, max: 10000, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'ปริมาตรสารละลาย', unit: 'L', defaultValue: 1, min: 0.000001, max: 10000, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Mass of Solute', nameTh: 'มวลตัวละลาย', unit: 'g', defaultValue: 58.44, min: 0.000001, max: 1000000, step: 0.1 },
      { id: 'M', symbol: 'M', name: 'Molar Mass', nameTh: 'มวลโมเลกุล', unit: 'g/mol', defaultValue: 58.44, min: 0.001, max: 100000, step: 0.1 }
    ],
    solveTargets: ['C', 'n', 'V'],
    calculate: (inputs, target = 'C') => {
      let { C, n, V, m, M } = inputs;
      // If n is not directly given, derive from m / M
      if (inputIsZero(n)) n = m / M;
      let steps = [];
      let result = 0;
      let unit = '';

      function inputIsZero(val) { return val === 0 || val === undefined; }

      if (target === 'C') {
        if (V === 0) throw new Error('ปริมาตร (V) ต้องไม่เป็น 0');
        result = n / V;
        unit = 'mol/L (M)';
        steps = [
          { title: 'สูตรโมลาริตี', latex: 'C = \\frac{n}{V}', explanation: 'จำนวนโมลหารปริมาตรสารละลาย' },
          { title: 'แทนค่าตัวแปร', latex: `C = \\frac{${n}\\,\\text{mol}}{${V}\\,\\text{L}}`, explanation: `n = ${n} mol, V = ${V} L` },
          { title: 'ผลการคำนวณ', latex: `C = ${result.toFixed(4)}\\,\\text{mol/L}`, explanation: `ความเข้มข้นเท่ากับ ${result.toFixed(4)} โมลาร์` }
        ];
      } else if (target === 'n') {
        result = C * V;
        unit = 'mol';
        steps = [
          { title: 'จัดรูปสมการหาจำนวนโมล', latex: 'n = C \\times V', explanation: 'โมลาริตีคูณปริมาตร' },
          { title: 'ผลการคำนวณ', latex: `n = ${result.toFixed(4)}\\,\\text{mol}`, explanation: `จำนวนโมลเท่ากับ ${result.toFixed(4)} โมล` }
        ];
      } else if (target === 'V') {
        if (C === 0) throw new Error('ความเข้มข้น (C) ต้องไม่เป็น 0');
        result = n / C;
        unit = 'L';
        steps = [
          { title: 'จัดรูปสมการหาปริมาตร', latex: 'V = \\frac{n}{C}', explanation: 'จำนวนโมลหารความเข้มข้น' },
          { title: 'ผลการคำนวณ', latex: `V = ${result.toFixed(4)}\\,\\text{L}`, explanation: `ปริมาตรเท่ากับ ${result.toFixed(4)} ลิตร` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 16. CHEMISTRY: pH CALCULATION ====================
  {
    id: 'ph_calculation',
    name: 'pH Calculation (Hydrogen Ion Concentration)',
    nameTh: 'การคำนวณค่า pH จากความเข้มข้นไฮโดรเจนไอออน',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'droplet',
    latex: '\\text{pH} = -\\log_{10}[\\text{H}^+]',
    description: 'ค่า pH บอกความเป็นกรด-เบสของสารละลาย โดย pH = -log[H⁺] หาก pH < 7 เป็นกรด, pH = 7 เป็นกลาง, pH > 7 เป็นเบส',
    variables: [
      { id: 'pH', symbol: '\\text{pH}', name: 'pH Value', nameTh: 'ค่า pH', unit: '', defaultValue: 4.3, min: -2, max: 16, step: 0.01 },
      { id: 'H', symbol: '[H^+]', name: 'H+ Concentration', nameTh: 'ความเข้มข้น H⁺', unit: 'mol/L', defaultValue: 5e-5, min: 1e-14, max: 1, step: 1e-5 }
    ],
    solveTargets: ['H', 'pH'],
    calculate: (inputs, target = 'H') => {
      let { pH, H } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'H') {
        result = Math.pow(10, -pH);
        unit = 'mol/L';
        steps = [
          { title: 'สูตร pH', latex: '\\text{pH} = -\\log_{10}[H^+]', explanation: 'pH คือลอการิทึมฐานสิบของความเข้มข้น H⁺' },
          { title: 'จัดรูปสมการหา [H⁺]', latex: '[H^+] = 10^{-\\text{pH}}', explanation: 'ถอด่ายเป็นเลขยกกำลัง' },
          { title: 'แทนค่า pH', latex: `[H^+] = 10^{-${pH}}`, explanation: `แทนค่า pH = ${pH}` },
          { title: 'ผลการคำนวณ', latex: `[H^+] = ${result.toExponential(4)}\\,\\text{mol/L}`, explanation: `ความเข้มข้น H⁺ เท่ากับ ${result.toExponential(4)} mol/L` }
        ];
      } else if (target === 'pH') {
        if (H <= 0) throw new Error('ความเข้มข้น [H⁺] ต้องมากกว่า 0');
        result = -Math.log10(H);
        unit = '';
        steps = [
          { title: 'สูตร pH', latex: '\\text{pH} = -\\log_{10}[H^+]', explanation: 'คำนวณลอการิทึมฐานสิบของความเข้มข้น' },
          { title: 'แทนค่าความเข้มข้น', latex: `\\text{pH} = -\\log_{10}(${H.toExponential(4)})`, explanation: `แทน [H⁺] = ${H.toExponential(4)} mol/L` },
          { title: 'ผลการคำนวณ', latex: `\\text{pH} = ${result.toFixed(4)}`, explanation: result < 7 ? 'สารละลายนี้เป็นกรด (pH < 7)' : result > 7 ? 'สารละลายนี้เป็นเบส (pH > 7)' : 'สารละลายนี้เป็นกลาง (pH = 7)' }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 17. CHEMISTRY: DILUTION (C1V1 = C2V2) ====================
  {
    id: 'dilution',
    name: 'Dilution Law',
    nameTh: 'การเจือจางสารละลาย (C₁V₁ = C₂V₂)',
    category: 'chemistry',
    categoryTh: 'เคมี',
    icon: 'droplet',
    latex: 'C_1 \\cdot V_1 = C_2 \\cdot V_2',
    description: 'เมื่อเจือจางสารละลาย โมลของตัวถูกละลายคงที่ ดังนั้นผลคูณของความเข้มข้นกับปริมาตรก่อนและหลังเจือจางเท่ากัน',
    variables: [
      { id: 'C1', symbol: 'C_1', name: 'Initial Concentration', nameTh: 'ความเข้มข้นเริ่มต้น', unit: 'mol/L', defaultValue: 6, min: 0.000001, max: 1000, step: 0.1 },
      { id: 'V1', symbol: 'V_1', name: 'Initial Volume', nameTh: 'ปริมาตรเริ่มต้น', unit: 'mL', defaultValue: 10, min: 0.001, max: 1000000, step: 1 },
      { id: 'C2', symbol: 'C_2', name: 'Final Concentration', nameTh: 'ความเข้มข้นหลังเจือจาง', unit: 'mol/L', defaultValue: 0.6, min: 0.000001, max: 1000, step: 0.01 },
      { id: 'V2', symbol: 'V_2', name: 'Final Volume', nameTh: 'ปริมาตรหลังเจือจาง', unit: 'mL', defaultValue: 100, min: 0.001, max: 1000000, step: 1 }
    ],
    solveTargets: ['C2', 'V2', 'C1', 'V1'],
    calculate: (inputs, target = 'C2') => {
      let { C1, V1, C2, V2 } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'C2') {
        if (V2 === 0) throw new Error('ปริมาตรหลังเจือจาง (V₂) ต้องไม่เป็น 0');
        result = (C1 * V1) / V2;
        unit = 'mol/L';
        steps = [
          { title: 'สูตรการเจือจาง', latex: 'C_1 V_1 = C_2 V_2 \\implies C_2 = \\frac{C_1 V_1}{V_2}', explanation: 'โมลตัวถูกละลายไม่เปลี่ยนเมื่อเจือจาง' },
          { title: 'แทนค่าตัวแปร', latex: `C_2 = \\frac{${C1}\\,\\text{M} \\times ${V1}\\,\\text{mL}}{${V2}\\,\\text{mL}}`, explanation: 'แทนค่าทั้งหมดลงในสูตร' },
          { title: 'ผลการคำนวณ', latex: `C_2 = ${result.toFixed(4)}\\,\\text{mol/L}`, explanation: `ความเข้มข้นหลังเจือจางเท่ากับ ${result.toFixed(4)} โมลาร์` }
        ];
      } else if (target === 'V2') {
        if (C2 === 0) throw new Error('ความเข้มข้นหลังเจือจาง (C₂) ต้องไม่เป็น 0');
        result = (C1 * V1) / C2;
        unit = 'mL';
        steps = [
          { title: 'จัดรูปสมการหาปริมาตรสุดท้าย', latex: 'V_2 = \\frac{C_1 V_1}{C_2}', explanation: 'ย้าย C₂ ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `V_2 = ${result.toFixed(4)}\\,\\text{mL}`, explanation: `ปริมาตรหลังเจือจางเท่ากับ ${result.toFixed(4)} mL` }
        ];
      } else if (target === 'C1') {
        if (V1 === 0) throw new Error('ปริมาตรเริ่มต้น (V₁) ต้องไม่เป็น 0');
        result = (C2 * V2) / V1;
        unit = 'mol/L';
        steps = [
          { title: 'จัดรูปสมการหาความเข้มข้นเริ่มต้น', latex: 'C_1 = \\frac{C_2 V_2}{V_1}', explanation: 'ย้ายข้างแก้สมการ' },
          { title: 'ผลการคำนวณ', latex: `C_1 = ${result.toFixed(4)}\\,\\text{mol/L}`, explanation: `ความเข้มข้นเริ่มต้นเท่ากับ ${result.toFixed(4)} โมลาร์` }
        ];
      } else if (target === 'V1') {
        if (C1 === 0) throw new Error('ความเข้มข้นเริ่มต้น (C₁) ต้องไม่เป็น 0');
        result = (C2 * V2) / C1;
        unit = 'mL';
        steps = [
          { title: 'จัดรูปสมการหาปริมาตรเริ่มต้น', latex: 'V_1 = \\frac{C_2 V_2}{C_1}', explanation: 'ย้ายข้างแก้สมการ' },
          { title: 'ผลการคำนวณ', latex: `V_1 = ${result.toFixed(4)}\\,\\text{mL}`, explanation: `ปริมาตรเริ่มต้นเท่ากับ ${result.toFixed(4)} mL` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 18. THERMODYNAMICS: HEAT TRANSFER (Q = mcΔT) ====================
  {
    id: 'specific_heat',
    name: 'Heat Transfer (Specific Heat Capacity)',
    nameTh: 'ความร้อนที่ใช้เปลี่ยนอุณหภูมิ (Q = mcΔT)',
    category: 'thermodynamics',
    categoryTh: 'อุณหพลศาสตร์',
    icon: 'thermometer',
    latex: 'Q = m \\cdot c \\cdot \\Delta T',
    description: 'ปริมาณความร้อนที่สารได้รับหรือคายออกเมื่ออุณหภูมิเปลี่ยน โดย c คือความจุความร้อนจำเพาะของสาร เช่น น้ำ = 4,186 J/(kg·K)',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Heat Energy', nameTh: 'ปริมาณความร้อน', unit: 'J', defaultValue: 83720, min: -1e12, max: 1e12, step: 10 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'มวลของสาร', unit: 'kg', defaultValue: 2, min: 0.000001, max: 1000000, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Specific Heat', nameTh: 'ความจุความร้อนจำเพาะ', unit: 'J/(kg·K)', defaultValue: 4186, min: 1, max: 100000, step: 1 },
      { id: 'dT', symbol: '\\Delta T', name: 'Temperature Change', nameTh: 'อุณหภูมิที่เปลี่ยนไป', unit: 'K (°C)', defaultValue: 10, min: -10000, max: 10000, step: 0.5 }
    ],
    solveTargets: ['Q', 'm', 'c', 'dT'],
    calculate: (inputs, target = 'Q') => {
      let { Q, m, c, dT } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'Q') {
        result = m * c * dT;
        unit = 'J (จูล)';
        steps = [
          { title: 'สูตรความร้อน', latex: 'Q = m \\, c \\, \\Delta T', explanation: 'มวลคูณความจุความร้อนจำเพาะคูณอุณหภูมิที่เปลี่ยน' },
          { title: 'แทนค่าตัวแปร', latex: `Q = ${m}\\,\\text{kg} \\times ${c}\\,\\text{J/(kg·K)} \\times ${dT}\\,\\text{K}`, explanation: 'แทนค่าทั้งหมด' },
          { title: 'ผลการคำนวณ', latex: `Q = ${result.toFixed(4)}\\,\\text{J}`, explanation: `ปริมาณความร้อนเท่ากับ ${result.toFixed(4)} จูล` }
        ];
      } else if (target === 'm') {
        if (c === 0 || dT === 0) throw new Error('c และ ΔT ต้องไม่เป็น 0');
        result = Q / (c * dT);
        unit = 'kg';
        steps = [
          { title: 'จัดรูปสมการหามวล', latex: 'm = \\frac{Q}{c \\, \\Delta T}', explanation: 'ย้าย c และ ΔT ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `มวลของสารเท่ากับ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'c') {
        if (m === 0 || dT === 0) throw new Error('m และ ΔT ต้องไม่เป็น 0');
        result = Q / (m * dT);
        unit = 'J/(kg·K)';
        steps = [
          { title: 'จัดรูปสมการหาความจุความร้อนจำเพาะ', latex: 'c = \\frac{Q}{m \\, \\Delta T}', explanation: 'ย้าย m และ ΔT ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `c = ${result.toFixed(4)}\\,\\text{J/(kg·K)}`, explanation: `ความจุความร้อนจำเพาะเท่ากับ ${result.toFixed(4)} J/(kg·K)` }
        ];
      } else if (target === 'dT') {
        if (m === 0 || c === 0) throw new Error('m และ c ต้องไม่เป็น 0');
        result = Q / (m * c);
        unit = 'K';
        steps = [
          { title: 'จัดรูปสมการหาอุณหภูมิที่เปลี่ยน', latex: '\\Delta T = \\frac{Q}{m \\, c}', explanation: 'ย้าย m และ c ไปหาร' },
          { title: 'ผลการคำนวณ', latex: `\\Delta T = ${result.toFixed(4)}\\,\\text{K}`, explanation: `อุณหภูมิเปลี่ยนเท่ากับ ${result.toFixed(4)} เคลวิน` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 19. BIOLOGY: HARDY-WEINBERG EQUILIBRIUM ====================
  {
    id: 'hardy_weinberg',
    name: 'Hardy-Weinberg Equilibrium',
    nameTh: 'สมดุลฮาร์ดี-ไวน์เบิร์ก (ความถี่ยีน)',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'dna',
    latex: 'p^2 + 2pq + q^2 = 1 \\quad (p + q = 1)',
    description: 'ใช้คำนวณความถี่ของจีโนไทป์ (AA, Aa, aa) ในประชากรที่ไม่มีวิวัฒนาการ: p² = Homozygous dominant, 2pq = Heterozygous, q² = Homozygous recessive โดย p คือความถี่ของอัลลีลเด่น และ q คือความถี่ของอัลลีลด้อย',
    variables: [
      { id: 'p', symbol: 'p', name: 'Dominant Allele Frequency', nameTh: 'ความถี่อัลลีลเด่น (p)', unit: '', defaultValue: 0.7, min: 0.001, max: 0.999, step: 0.01 },
      { id: 'q', symbol: 'q', name: 'Recessive Allele Frequency', nameTh: 'ความถี่อัลลีลด้อย (q)', unit: '', defaultValue: 0.3, min: 0.001, max: 0.999, step: 0.01 }
    ],
    solveTargets: ['p', 'q'],
    calculate: (inputs, target = 'p') => {
      let { p, q } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      // When solving for one allele, derive it from the other via p + q = 1
      if (p == null) p = 1 - q;
      if (q == null) q = 1 - p;

      // Ensure p + q = 1
      if (Math.abs((p + q) - 1) > 0.001) {
        throw new Error(`p + q ต้องเท่ากับ 1 เสมอ (ตอนนี้ p+q = ${(p + q).toFixed(4)}) จัดการให้ p + q = 1 ก่อน`);
      }

      const p2 = Math.pow(p, 2);
      const pqTerm = 2 * p * q;
      const q2 = Math.pow(q, 2);

      const resultDisplay = `AA (p²) = ${p2.toFixed(4)} • Aa (2pq) = ${pqTerm.toFixed(4)} • aa (q²) = ${q2.toFixed(4)}`;

      if (target === 'p') {
        result = p;
        steps = [
          { title: 'สูตรสมดุลฮาร์ดี-ไวน์เบิร์ก', latex: 'p^2 + 2pq + q^2 = 1', explanation: 'ผลรวมความถี่จีโนไทป์ทั้งสามแบบเท่ากับ 1 เสมอ' },
          { title: 'แทนค่าความถี่อัลลีล', latex: `p = ${p}, \\quad q = ${q}`, explanation: `ความถี่อัลลีลเด่น ${p}, ความถี่อัลลีลด้อย ${q}` },
          { title: 'คำนวณความถี่จีโนไทป์', latex: `p^2 = ${p2.toFixed(4)}, \\quad 2pq = ${pqTerm.toFixed(4)}, \\quad q^2 = ${q2.toFixed(4)}`, explanation: resultDisplay },
          { title: 'ตรวจสอบผลรวม', latex: `${p2.toFixed(4)} + ${pqTerm.toFixed(4)} + ${q2.toFixed(4)} = ${(p2 + pqTerm + q2).toFixed(4)} = 1`, explanation: 'ผลรวมความถี่ทั้งหมดต้องเท่ากับ 1' }
        ];
        return { result: p, resultDisplay, unit, steps };
      } else if (target === 'q') {
        result = q;
        steps = [
          { title: 'สูตรสมดุลฮาร์ดี-ไวน์เบิร์ก', latex: 'p^2 + 2pq + q^2 = 1', explanation: 'ผลรวมความถี่จีโนไทป์เท่ากับ 1' },
          { title: 'แทนค่าความถี่อัลลีล', latex: `p = ${p}, \\quad q = ${q}`, explanation: 'ค่าความถี่ของแต่ละอัลลีล' },
          { title: 'คำนวณความถี่จีโนไทป์', latex: `p^2 = ${p2.toFixed(4)}, \\quad 2pq = ${pqTerm.toFixed(4)}, \\quad q^2 = ${q2.toFixed(4)}`, explanation: resultDisplay }
        ];
        return { result: q, resultDisplay, unit, steps };
      }
    }
  },

  // ==================== 20. BIOLOGY: EXPONENTIAL POPULATION GROWTH ====================
  {
    id: 'population_growth',
    name: 'Exponential Population Growth',
    nameTh: 'การเจริญเติบโตของประชากรแบบเอกซ์โปเนนเชียล',
    category: 'biology',
    categoryTh: 'ชีววิทยา',
    icon: 'trending-up',
    latex: 'N_t = N_0 \\cdot e^{r \\cdot t}',
    description: 'การเพิ่มของประชากรอย่างไม่จำกัดทรัพยากร โดย N₀ คือจำนวนประชากรเริ่มต้น, r คืออัตราการเพิ่มประชากรต่อหน่วยเวลา (ต่อปี), t คือเวลา และ e ≈ 2.71828',
    variables: [
      { id: 'Nt', symbol: 'N_t', name: 'Final Population', nameTh: 'จำนวนประชากรหลังเวลา t', unit: 'ตัว', defaultValue: 7408, min: 0, max: 1e15, step: 1 },
      { id: 'N0', symbol: 'N_0', name: 'Initial Population', nameTh: 'จำนวนประชากรเริ่มต้น', unit: 'ตัว', defaultValue: 100, min: 0.001, max: 1e12, step: 1 },
      { id: 'r', symbol: 'r', name: 'Growth Rate', nameTh: 'อัตราการเพิ่มต่อปี', unit: '/ปี', defaultValue: 0.1, min: -1, max: 5, step: 0.01 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'ระยะเวลา', unit: 'ปี', defaultValue: 42.9, min: -1000, max: 1000, step: 0.1 }
    ],
    solveTargets: ['Nt', 'N0', 'r'],
    calculate: (inputs, target = 'Nt') => {
      let { Nt, N0, r, t } = inputs;
      const EULER = Math.E;
      let steps = [];
      let result = 0;
      let unit = 'ตัว';

      if (target === 'Nt') {
        result = N0 * Math.pow(EULER, r * t);
        unit = 'ตัว';
        steps = [
          { title: 'สูตรการเจริญเติบโตแบบเอกซ์โปเนนเชียล', latex: 'N_t = N_0 \\, e^{r \\cdot t}', explanation: 'โดย e ≈ 2.718 (ค่าคงที่ออยเลอร์)' },
          { title: 'แทนค่าตัวแปร', latex: `N_t = ${N0} \\times e^{${r} \\times ${t}}`, explanation: `N₀ = ${N0}, r = ${r}/ปี, t = ${t} ปี` },
          { title: 'ผลการคำนวณ', latex: `N_t = ${result.toFixed(4)}`, explanation: `จำนวนประชากรเท่ากับ ${result.toFixed(0)} ตัว` }
        ];
      } else if (target === 'N0') {
        if (t === 0) throw new Error('เวลา (t) ต้องไม่เป็น 0');
        result = Nt / Math.pow(EULER, r * t);
        unit = 'ตัว';
        steps = [
          { title: 'จัดรูปสมการหาประชากรเริ่มต้น', latex: 'N_0 = \\frac{N_t}{e^{r \\cdot t}}', explanation: 'ย้าย N₀ และ e^(rt)' },
          { title: 'ผลการคำนวณ', latex: `N_0 = ${result.toFixed(4)}`, explanation: `ประชากรเริ่มต้นเท่ากับ ${result.toFixed(0)} ตัว` }
        ];
      } else if (target === 'r') {
        if (t === 0) throw new Error('เวลา (t) ต้องไม่เป็น 0');
        result = Math.log(Nt / N0) / t;
        unit = '/ปี';
        steps = [
          { title: 'จัดรูปสมการหาอัตราการเพิ่ม', latex: 'r = \\frac{\\ln(N_t / N_0)}{t}', explanation: 'ใช้ลอการิทึมธรรมชาติ (ln) ทั้งสองข้าง' },
          { title: 'ผลการคำนวณ', latex: `r = ${result.toFixed(4)}\\,\\text{ต่อปี}`, explanation: `อัตราการเพิ่มประชากรเท่ากับ ${result.toFixed(4)} ต่อปี` }
        ];
      }

      return { result, unit, steps };
    }
  }
];

// ==================== COMBINED REGISTRY ====================
// BASE_FORMULAS contains the original formulas; merge with the new
// per-subject module arrays so the full curriculum (ม.1–ม.6) is available.
export const FORMULAS_DATA = [
  ...BASE_FORMULAS,
  ...ALGEBRA_FORMULAS,
  ...GEOMETRY_FORMULAS,
  ...TRIGONOMETRY_FORMULAS,
  ...SEQUENCES_FORMULAS,
  ...STATISTICS_FORMULAS,
  ...CALCULUS_FORMULAS,
  ...ADVANCED_MATH_FORMULAS,
  ...FINANCE_FORMULAS,
  ...MECHANICS_FORMULAS,
  ...GENERAL_PHYSICS_FORMULAS,
  ...THERMODYNAMICS_FORMULAS,
  ...WAVES_LIGHT_FORMULAS,
  ...ELECTRICITY_FORMULAS,
  ...CHEMISTRY_FORMULAS,
  ...BIOLOGY_FORMULAS,
  ...EARTH_SCIENCE_FORMULAS,
  ...ECONOMICS_FORMULAS,
  ...HEALTH_FORMULAS,
  ...TECHNOLOGY_FORMULAS,
  ...EXTRA_FORMULAS
];
