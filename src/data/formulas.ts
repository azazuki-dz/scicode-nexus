// @ts-nocheck

/**
 * SciCode Nexus - Formulas Registry
 * Comprehensive collection of Physics and Mathematics formulas
 * with multi-variable dynamic solver logic and step-by-step derivations.
 */

import { ALGEBRA_FORMULAS } from './formulas/algebraFormulas';
import { GEOMETRY_FORMULAS } from './formulas/geometryFormulas';
import { TRIGONOMETRY_FORMULAS } from './formulas/trigonometryFormulas';
import { SEQUENCES_FORMULAS } from './formulas/sequencesFormulas';
import { STATISTICS_FORMULAS } from './formulas/statisticsFormulas';
import { CALCULUS_FORMULAS, ADVANCED_MATH_FORMULAS } from './formulas/advancedMathFormulas';
import { FINANCE_FORMULAS } from './formulas/financeFormulas';
import { MECHANICS_FORMULAS } from './formulas/mechanicsFormulas';
import { GENERAL_PHYSICS_FORMULAS } from './formulas/generalPhysicsFormulas';
import { THERMODYNAMICS_FORMULAS } from './formulas/thermodynamicsFormulas';
import { WAVES_LIGHT_FORMULAS } from './formulas/wavesLightFormulas';
import { ELECTRICITY_FORMULAS } from './formulas/electricityFormulas';
import { CHEMISTRY_FORMULAS } from './formulas/chemistryFormulas';
import { BIOLOGY_FORMULAS, EARTH_SCIENCE_FORMULAS } from './formulas/biologyEarthFormulas';
import { ECONOMICS_FORMULAS, HEALTH_FORMULAS, TECHNOLOGY_FORMULAS } from './formulas/appliedFormulas';
import { EXTRA_FORMULAS } from './formulas/extraFormulas';

export const FORMULA_CATEGORIES = [
  { id: 'all', name: 'All Formulas', nameTh: 'เธชเธนเธ•เธฃเธ—เธฑเนเธเธซเธกเธ”', icon: 'layers' },
  { id: 'physics', name: 'Physics', nameTh: 'เธเธดเธชเธดเธเธชเน', icon: 'atom' },
  { id: 'chemistry', name: 'Chemistry', nameTh: 'เน€เธเธกเธต', icon: 'flask' },
  { id: 'biology', name: 'Biology', nameTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ', icon: 'dna' },
  { id: 'mechanics', name: 'Mechanics', nameTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน', icon: 'activity' },
  { id: 'energy', name: 'Work & Energy', nameTh: 'เธเธฒเธเนเธฅเธฐเธเธฅเธฑเธเธเธฒเธ', icon: 'zap' },
  { id: 'thermodynamics', name: 'Thermodynamics', nameTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน', icon: 'thermometer' },
  { id: 'waves', name: 'Waves & Light', nameTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ', icon: 'radio' },
  { id: 'electricity', name: 'Electricity', nameTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ', icon: 'cpu' },
  { id: 'algebra', name: 'Algebra', nameTh: 'เธเธตเธเธเธ“เธดเธ•', icon: 'grid' },
  { id: 'calculus', name: 'Calculus', nameTh: 'เนเธเธฅเธเธนเธฅเธฑเธช', icon: 'trending-up' },
  { id: 'geometry', name: 'Geometry', nameTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•', icon: 'box' },
  { id: 'trigonometry', name: 'Trigonometry', nameTh: 'เธ•เธฃเธตเนเธเธ“เธกเธดเธ•เธด', icon: 'triangle' },
  { id: 'sequences', name: 'Sequences & Series', nameTh: 'เธฅเธณเธ”เธฑเธเนเธฅเธฐเธญเธเธธเธเธฃเธก', icon: 'list' },
  { id: 'statistics', name: 'Statistics & Probability', nameTh: 'เธชเธ–เธดเธ•เธดเนเธฅเธฐเธเธงเธฒเธกเธเนเธฒเธเธฐเน€เธเนเธ', icon: 'bar-chart' },
  { id: 'advanced', name: 'Advanced Math', nameTh: 'เน€เธงเธเน€เธ•เธญเธฃเนเนเธฅเธฐเน€เธกเธ—เธฃเธดเธเธเน', icon: 'grid' },
  { id: 'earth', name: 'Earth & Space', nameTh: 'เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน', icon: 'globe' },
  { id: 'economics', name: 'Economics', nameTh: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน', icon: 'trending-up' },
  { id: 'health', name: 'Health', nameTh: 'เธชเธธเธเธ เธฒเธ', icon: 'heart' },
  { id: 'tech', name: 'Technology', nameTh: 'เน€เธ—เธเนเธเนเธฅเธขเธตเธ”เธดเธเธดเธ—เธฑเธฅ', icon: 'cpu' },
  { id: 'finance', name: 'Financial Math', nameTh: 'เธเธ“เธดเธ•เธจเธฒเธชเธ•เธฃเนเธเธฒเธฃเน€เธเธดเธ', icon: 'dollar-sign' }
];

const BASE_FORMULAS = [
  // ==================== 1. MECHANICS: NEWTON'S SECOND LAW ====================
  {
    id: 'newton_second_law',
    name: "Newton's Second Law",
    nameTh: 'เธเธเธเนเธญเธ—เธตเน 2 เธเธญเธเธเธดเธงเธ•เธฑเธ (เนเธฃเธเนเธฅเธฐเธเธงเธฒเธกเน€เธฃเนเธ)',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'target',
    latex: 'F = m \\cdot a',
    description: 'เธเธงเธฒเธกเน€เธฃเนเธเธเธญเธเธงเธฑเธ•เธ–เธธเน€เธเนเธเธชเธฑเธ”เธชเนเธงเธเนเธ”เธขเธ•เธฃเธเธเธฑเธเนเธฃเธเธฅเธฑเธเธเนเธ—เธตเนเธเธฃเธฐเธ—เธณเธ•เนเธญเธงเธฑเธ•เธ–เธธ เนเธฅเธฐเน€เธเนเธเธชเธฑเธ”เธชเนเธงเธเธเธเธเธฑเธเธเธฑเธเธกเธงเธฅเธเธญเธเธงเธฑเธ•เธ–เธธ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Force', nameTh: 'เนเธฃเธเธฅเธฑเธเธเน', unit: 'N', defaultValue: 100, min: -10000, max: 10000, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ', unit: 'kg', defaultValue: 20, min: 0.001, max: 10000, step: 0.5 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธ', unit: 'm/sยฒ', defaultValue: 5, min: -1000, max: 1000, step: 0.1 }
    ],
    solveTargets: ['F', 'm', 'a'],
    calculate: (inputs, target = 'F') => {
      let { F, m, a } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'F') {
        result = m * a;
        unit = 'N (เธเธดเธงเธ•เธฑเธ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธ', latex: 'F = m \\times a', explanation: 'เนเธเนเธชเธนเธ•เธฃเนเธฃเธเธเธญเธเธเธดเธงเธ•เธฑเธเนเธ”เธขเธ•เธฃเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `F = ${m}\\,\\text{kg} \\times ${a}\\,\\text{m/s}^2`, explanation: `เนเธ—เธเธเนเธฒเธกเธงเธฅ m = ${m} เนเธฅเธฐเธเธงเธฒเธกเน€เธฃเนเธ a = ${a}` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `F = ${result.toFixed(4)}\\,\\text{N}`, explanation: `เนเธฃเธเธฅเธฑเธเธเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'm') {
        if (a === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธ (a) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = F / a;
        unit = 'kg (เธเธดเนเธฅเธเธฃเธฑเธก)';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเนเธฒเธกเธงเธฅ (m)', latex: 'm = \\frac{F}{a}', explanation: 'เธขเนเธฒเธขเธเธงเธฒเธกเน€เธฃเนเธ (a) เนเธเธซเธฒเธฃเนเธฃเธเธฅเธฑเธเธเน (F)' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `m = \\frac{${F}\\,\\text{N}}{${a}\\,\\text{m/s}^2}`, explanation: `เนเธ—เธเธเนเธฒ F = ${F} เนเธฅเธฐ a = ${a}` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเธเธญเธเธงเธฑเธ•เธ–เธธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธดเนเธฅเธเธฃเธฑเธก` }
        ];
      } else if (target === 'a') {
        if (m === 0) throw new Error('เธกเธงเธฅ (m) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = F / m;
        unit = 'm/sยฒ (เน€เธกเธ•เธฃเธ•เนเธญเธงเธดเธเธฒเธ—เธตเธเธณเธฅเธฑเธเธชเธญเธ)';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเนเธฒเธเธงเธฒเธกเน€เธฃเนเธ (a)', latex: 'a = \\frac{F}{m}', explanation: 'เธขเนเธฒเธขเธกเธงเธฅ (m) เนเธเธซเธฒเธฃเนเธฃเธเธฅเธฑเธเธเน (F)' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `a = \\frac{${F}\\,\\text{N}}{${m}\\,\\text{kg}}`, explanation: `เนเธ—เธเธเนเธฒ F = ${F} เนเธฅเธฐ m = ${m}` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `a = ${result.toFixed(4)}\\,\\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเธเธญเธเธงเธฑเธ•เธ–เธธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/sยฒ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 2. MECHANICS: LINEAR MOTION (s = ut + 0.5at^2) ====================
  {
    id: 'displacement_acceleration',
    name: 'Displacement with Uniform Acceleration',
    nameTh: 'เธเธฒเธฃเธเธฃเธฐเธเธฑเธ”เน€เธกเธทเนเธญเธเธงเธฒเธกเน€เธฃเนเธเธเธเธ—เธตเน',
    category: 'mechanics',
    categoryTh: 'เธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'navigation',
    latex: 's = u \\cdot t + \\frac{1}{2} a \\cdot t^2',
    description: 'เธเธฒเธฃเธซเธฒเธฃเธฐเธขเธฐเธเธฒเธฃเธเธฃเธฐเธเธฑเธ”เธเธญเธเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเนเนเธเนเธเธงเน€เธชเนเธเธ•เธฃเธเธ—เธตเนเธกเธตเธเธงเธฒเธกเน€เธฃเนเธเธเธเธ—เธตเนเธชเธกเนเธณเน€เธชเธกเธญ',
    variables: [
      { id: 's', symbol: 's', name: 'Displacement', nameTh: 'เธเธฒเธฃเธเธฃเธฐเธเธฑเธ”', unit: 'm', defaultValue: 60, min: -100000, max: 100000, step: 1 },
      { id: 'u', symbol: 'u', name: 'Initial Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ', unit: 'm/s', defaultValue: 10, min: -1000, max: 1000, step: 0.5 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เน€เธงเธฅเธฒ', unit: 's', defaultValue: 4, min: 0.001, max: 1000, step: 0.1 },
      { id: 'a', symbol: 'a', name: 'Acceleration', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธ', unit: 'm/sยฒ', defaultValue: 2.5, min: -500, max: 500, step: 0.1 }
    ],
    solveTargets: ['s', 'u', 'a'],
    calculate: (inputs, target = 's') => {
      let { s, u, t, a } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 's') {
        result = u * t + 0.5 * a * Math.pow(t, 2);
        unit = 'm (เน€เธกเธ•เธฃ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเธเธฃเธฐเธเธฑเธ”', latex: 's = u \\cdot t + \\frac{1}{2} a \\cdot t^2', explanation: 'เธชเธนเธ•เธฃเธซเธฅเธฑเธเธเธฒเธฃเธเธฃเธฐเธเธฑเธ”' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `s = (${u})(${t}) + \\frac{1}{2} (${a}) (${t})^2`, explanation: `เนเธ—เธเธเนเธฒ u = ${u}, t = ${t}, a = ${a}` },
          { title: 'เธเธณเธเธงเธ“เธ—เธตเธฅเธฐเธเธเธเน', latex: `s = ${(u * t).toFixed(2)} + ${(0.5 * a * t * t).toFixed(2)}`, explanation: 'เธฃเธงเธกเธฃเธฐเธขเธฐเธ—เธฒเธเธเธฒเธเธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธเนเธฅเธฐเธเธฒเธฃเน€เธฃเนเธ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `s = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธเธฒเธฃเธเธฃเธฐเธเธฑเธ”เธ—เธฑเนเธเธซเธกเธ”เน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      } else if (target === 'u') {
        if (t === 0) throw new Error('เน€เธงเธฅเธฒ (t) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (s - 0.5 * a * Math.pow(t, 2)) / t;
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเนเธฒเธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธ (u)', latex: 'u = \\frac{s - \\frac{1}{2} a \\cdot t^2}{t}', explanation: 'เธขเนเธฒเธขเธเธเธเนเธเธงเธฒเธกเน€เธฃเนเธเนเธเธฅเธ เนเธฅเนเธงเธซเธฒเธฃเธ”เนเธงเธขเน€เธงเธฅเธฒ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `u = \\frac{${s} - 0.5(${a})(${t}^2)}{${t}}`, explanation: 'เนเธ—เธเธเนเธฒ s, a, t' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `u = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      } else if (target === 'a') {
        if (t === 0) throw new Error('เน€เธงเธฅเธฒ (t) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (2 * (s - u * t)) / Math.pow(t, 2);
        unit = 'm/sยฒ';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเนเธฒเธเธงเธฒเธกเน€เธฃเนเธ (a)', latex: 'a = \\frac{2(s - u \\cdot t)}{t^2}', explanation: 'เธขเนเธฒเธขเธเธเธเนเนเธฅเธฐเธเธนเธ“เธ”เนเธงเธข 2 เนเธฅเนเธงเธซเธฒเธฃเธ”เนเธงเธข t เธเธณเธฅเธฑเธเธชเธญเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `a = \\frac{2(${s} - (${u})(${t}))}{${t}^2}`, explanation: 'เนเธ—เธเธเนเธฒ s, u, t' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `a = ${result.toFixed(4)}\\,\\text{m/s}^2`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/sยฒ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 3. ENERGY: KINETIC ENERGY ====================
  {
    id: 'kinetic_energy',
    name: 'Kinetic Energy',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเธเธฅเธเน',
    category: 'energy',
    categoryTh: 'เธเธฒเธเนเธฅเธฐเธเธฅเธฑเธเธเธฒเธ',
    icon: 'zap',
    latex: 'E_k = \\frac{1}{2} m v^2',
    description: 'เธเธฅเธฑเธเธเธฒเธเธ—เธตเนเธชเธฐเธชเธกเธญเธขเธนเนเนเธเธงเธฑเธ•เธ–เธธเธญเธฑเธเน€เธเธทเนเธญเธเธกเธฒเธเธฒเธเธเธงเธฒเธกเน€เธฃเนเธงเธเธญเธเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเน',
    variables: [
      { id: 'Ek', symbol: 'E_k', name: 'Kinetic Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธเธฅเธเน', unit: 'J', defaultValue: 2500, min: 0, max: 10000000, step: 10 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ', unit: 'kg', defaultValue: 50, min: 0.001, max: 100000, step: 0.5 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธง', unit: 'm/s', defaultValue: 10, min: 0, max: 10000, step: 0.5 }
    ],
    solveTargets: ['Ek', 'm', 'v'],
    calculate: (inputs, target = 'Ek') => {
      let { Ek, m, v } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'Ek') {
        result = 0.5 * m * Math.pow(v, 2);
        unit = 'J (เธเธนเธฅ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธฑเธเธเธฒเธเธเธฅเธเน', latex: 'E_k = \\frac{1}{2} m v^2', explanation: 'เธชเธนเธ•เธฃเธเธณเธเธงเธ“เธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเธกเธฒเธ•เธฃเธเธฒเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `E_k = 0.5 \\times ${m}\\,\\text{kg} \\times (${v}\\,\\text{m/s})^2`, explanation: `เนเธ—เธเธกเธงเธฅ = ${m} kg เนเธฅเธฐเธเธงเธฒเธกเน€เธฃเนเธง = ${v} m/s` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `E_k = ${result.toFixed(4)}\\,\\text{J}`, explanation: `เธเธฅเธฑเธเธเธฒเธเธเธฅเธเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธนเธฅ` }
        ];
      } else if (target === 'm') {
        if (v === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธง (v) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 เน€เธเธทเนเธญเธเธณเธเธงเธ“เธกเธงเธฅ');
        result = (2 * Ek) / Math.pow(v, 2);
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธกเธงเธฅ (m)', latex: 'm = \\frac{2 E_k}{v^2}', explanation: 'เธเธนเธ“เธ”เนเธงเธข 2 เนเธฅเนเธงเธซเธฒเธฃเธ”เนเธงเธข vยฒ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `m = \\frac{2 \\times ${Ek}}{${v}^2}`, explanation: 'เนเธ—เธเธเนเธฒ Ek เนเธฅเธฐ v' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'v') {
        if (m <= 0) throw new Error('เธกเธงเธฅ (m) เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = Math.sqrt((2 * Ek) / m);
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธง (v)', latex: 'v = \\sqrt{\\frac{2 E_k}{m}}', explanation: 'เธ–เธญเธ”เธชเนเธเธงเธฃเนเธฃเธนเธ—เธ—เธฑเนเธเธชเธญเธเธเนเธฒเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `v = \\sqrt{\\frac{2 \\times ${Ek}}{${m}}}`, explanation: 'เนเธ—เธเธเนเธฒ Ek เนเธฅเธฐ m' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 4. ENERGY: GRAVITATIONAL POTENTIAL ENERGY ====================
  {
    id: 'potential_energy',
    name: 'Gravitational Potential Energy',
    nameTh: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเนเธเนเธกเธ–เนเธงเธ',
    category: 'energy',
    categoryTh: 'เธเธฒเธเนเธฅเธฐเธเธฅเธฑเธเธเธฒเธ',
    icon: 'arrow-up',
    latex: 'E_p = m \\cdot g \\cdot h',
    description: 'เธเธฅเธฑเธเธเธฒเธเธ—เธตเนเธชเธฐเธชเธกเนเธเธงเธฑเธ•เธ–เธธเน€เธเธทเนเธญเธเธเธฒเธเธ•เธณเนเธซเธเนเธเธเธงเธฒเธกเธชเธนเธเนเธเธฃเธฐเธ”เธฑเธเธชเธเธฒเธกเนเธเนเธกเธ–เนเธงเธ',
    variables: [
      { id: 'Ep', symbol: 'E_p', name: 'Potential Energy', nameTh: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเน', unit: 'J', defaultValue: 980, min: 0, max: 10000000, step: 10 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ', unit: 'kg', defaultValue: 10, min: 0.001, max: 10000, step: 0.5 },
      { id: 'g', symbol: 'g', name: 'Gravity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธเนเธเนเธกเธ–เนเธงเธ', unit: 'm/sยฒ', defaultValue: 9.8, min: 0.1, max: 50, step: 0.1 },
      { id: 'h', symbol: 'h', name: 'Height', nameTh: 'เธเธงเธฒเธกเธชเธนเธ', unit: 'm', defaultValue: 10, min: 0, max: 10000, step: 0.5 }
    ],
    solveTargets: ['Ep', 'm', 'h'],
    calculate: (inputs, target = 'Ep') => {
      let { Ep, m, g, h } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'Ep') {
        result = m * g * h;
        unit = 'J (เธเธนเธฅ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเน', latex: 'E_p = m \\cdot g \\cdot h', explanation: 'เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเนเธเนเธกเธ–เนเธงเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `E_p = (${m})(${g})(${h})`, explanation: `m = ${m}, g = ${g}, h = ${h}` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `E_p = ${result.toFixed(4)}\\,\\text{J}`, explanation: `เธเธฅเธฑเธเธเธฒเธเธจเธฑเธเธขเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธนเธฅ` }
        ];
      } else if (target === 'm') {
        result = Ep / (g * h);
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{E_p}{g \\cdot h}', explanation: 'เธขเนเธฒเธข g เนเธฅเธฐ h เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'h') {
        result = Ep / (m * g);
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเธชเธนเธ', latex: 'h = \\frac{E_p}{m \\cdot g}', explanation: 'เธขเนเธฒเธข m เนเธฅเธฐ g เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `h = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธเธงเธฒเธกเธชเธนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 5. WAVES: WAVE SPEED ====================
  {
    id: 'wave_speed',
    name: 'Wave Speed Relationship',
    nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธญเธเธเธฅเธทเนเธ',
    category: 'waves',
    categoryTh: 'เธเธฅเธทเนเธเนเธฅเธฐเนเธชเธ',
    icon: 'radio',
    latex: 'v = f \\cdot \\lambda',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธฃเธฐเธซเธงเนเธฒเธเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธญเธเธเธฅเธทเนเธ เธเธงเธฒเธกเธ–เธตเน เนเธฅเธฐเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ',
    variables: [
      { id: 'v', symbol: 'v', name: 'Wave Speed', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธฅเธทเนเธ', unit: 'm/s', defaultValue: 340, min: 0.1, max: 300000000, step: 1 },
      { id: 'f', symbol: 'f', name: 'Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเน', unit: 'Hz', defaultValue: 440, min: 0.01, max: 1000000000, step: 1 },
      { id: 'lambda', symbol: '\\lambda', name: 'Wavelength', nameTh: 'เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ', unit: 'm', defaultValue: 0.7727, min: 0.000001, max: 100000, step: 0.01 }
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
          { title: 'เธชเธนเธ•เธฃเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธฅเธทเนเธ', latex: 'v = f \\times \\lambda', explanation: 'เธเธงเธฒเธกเธ–เธตเนเธเธนเธ“เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `v = ${f}\\,\\text{Hz} \\times ${lambda}\\,\\text{m}`, explanation: `f = ${f} Hz, ฮป = ${lambda} m` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธฅเธทเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      } else if (target === 'f') {
        result = v / lambda;
        unit = 'Hz';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเธ–เธตเน', latex: 'f = \\frac{v}{\\lambda}', explanation: 'เธขเนเธฒเธขเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธเนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `f = ${result.toFixed(4)}\\,\\text{Hz}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} Hz` }
        ];
      } else if (target === 'lambda') {
        result = v / f;
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธ', latex: '\\lambda = \\frac{v}{f}', explanation: 'เธขเนเธฒเธขเธเธงเธฒเธกเธ–เธตเนเนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `\\lambda = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธเธงเธฒเธกเธขเธฒเธงเธเธฅเธทเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 6. ELECTRICITY: OHM'S LAW ====================
  {
    id: 'ohms_law',
    name: "Ohm's Law",
    nameTh: 'เธเธเธเธญเธเนเธญเธซเนเธก (เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเนเธฅเธฐเธเธฃเธฐเนเธชเนเธเธเนเธฒ)',
    category: 'electricity',
    categoryTh: 'เนเธเธเนเธฒเนเธฅเธฐเนเธกเนเน€เธซเธฅเนเธ',
    icon: 'cpu',
    latex: 'V = I \\cdot R',
    description: 'เธเธฃเธฐเนเธชเนเธเธเนเธฒเธ—เธตเนเนเธซเธฅเธเนเธฒเธเธ•เธฑเธงเธเธณเธเธฐเน€เธเนเธเธชเธฑเธ”เธชเนเธงเธเนเธ”เธขเธ•เธฃเธเธเธฑเธเธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเนเธเธเนเธฒเธฃเธฐเธซเธงเนเธฒเธเธเธฅเธฒเธขเธ—เธฑเนเธเธชเธญเธเธเนเธฒเธ',
    variables: [
      { id: 'V', symbol: 'V', name: 'Voltage', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเน', unit: 'V', defaultValue: 12, min: -10000, max: 10000, step: 0.5 },
      { id: 'I', symbol: 'I', name: 'Current', nameTh: 'เธเธฃเธฐเนเธชเนเธเธเนเธฒ', unit: 'A', defaultValue: 2, min: 0.001, max: 1000, step: 0.1 },
      { id: 'R', symbol: 'R', name: 'Resistance', nameTh: 'เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ', unit: 'ฮฉ', defaultValue: 6, min: 0.001, max: 1000000, step: 0.5 }
    ],
    solveTargets: ['V', 'I', 'R'],
    calculate: (inputs, target = 'V') => {
      let { V, I, R } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'V') {
        result = I * R;
        unit = 'V (เนเธงเธฅเธ•เน)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธเธญเธเนเธญเธซเนเธก', latex: 'V = I \\times R', explanation: 'เธเธฃเธฐเนเธชเนเธเธเนเธฒเธเธนเธ“เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `V = ${I}\\,\\text{A} \\times ${R}\\,\\Omega`, explanation: `I = ${I} A, R = ${R} ฮฉ` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `V = ${result.toFixed(4)}\\,\\text{V}`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธจเธฑเธเธขเนเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธงเธฅเธ•เน` }
        ];
      } else if (target === 'I') {
        result = V / R;
        unit = 'A (เนเธญเธกเนเธเธฃเน)';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธฃเธฐเนเธชเนเธเธเนเธฒ', latex: 'I = \\frac{V}{R}', explanation: 'เธขเนเธฒเธขเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `I = ${result.toFixed(4)}\\,\\text{A}`, explanation: `เธเธฃเธฐเนเธชเนเธเธเนเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธญเธกเนเธเธฃเน` }
        ];
      } else if (target === 'R') {
        result = V / I;
        unit = 'ฮฉ (เนเธญเธซเนเธก)';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธ', latex: 'R = \\frac{V}{I}', explanation: 'เธขเนเธฒเธขเธเธฃเธฐเนเธชเนเธเธเนเธฒเนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `R = ${result.toFixed(4)}\\,\\Omega`, explanation: `เธเธงเธฒเธกเธ•เนเธฒเธเธ—เธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธญเธซเนเธก` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 7. ALGEBRA: QUADRATIC FORMULA ====================
  {
    id: 'quadratic_equation',
    name: 'Quadratic Formula Solver',
    nameTh: 'เธชเธนเธ•เธฃเนเธเนเธชเธกเธเธฒเธฃเธเธณเธฅเธฑเธเธชเธญเธ',
    category: 'algebra',
    categoryTh: 'เธเธตเธเธเธ“เธดเธ•',
    icon: 'grid',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description: 'เธเธฒเธฃเธซเธฒเธฃเธฒเธเธเธญเธเธชเธกเธเธฒเธฃเธเธซเธธเธเธฒเธกเธเธณเธฅเธฑเธเธชเธญเธเนเธเธฃเธนเธ axยฒ + bx + c = 0',
    variables: [
      { id: 'a', symbol: 'a', name: 'Coefficient a', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน a', unit: '', defaultValue: 1, min: -1000, max: 1000, step: 1 },
      { id: 'b', symbol: 'b', name: 'Coefficient b', nameTh: 'เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน b', unit: '', defaultValue: -5, min: -1000, max: 1000, step: 1 },
      { id: 'c', symbol: 'c', name: 'Constant c', nameTh: 'เธเนเธฒเธเธเธ—เธตเน c', unit: '', defaultValue: 6, min: -1000, max: 1000, step: 1 }
    ],
    solveTargets: ['x'],
    calculate: (inputs) => {
      let { a, b, c } = inputs;
      if (a === 0) throw new Error('เธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน a เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 เน€เธเธทเนเธญเนเธซเนเน€เธเนเธเธชเธกเธเธฒเธฃเธเธณเธฅเธฑเธเธชเธญเธ');
      
      const discriminant = Math.pow(b, 2) - 4 * a * c;
      let steps = [
        { title: 'เธชเธกเธเธฒเธฃเนเธเธฃเธนเธเธกเธฒเธ•เธฃเธเธฒเธ', latex: `${a}x^2 + (${b})x + (${c}) = 0`, explanation: 'เน€เธ—เธตเธขเธเธเนเธฒเธชเธฑเธกเธเธฃเธฐเธชเธดเธ—เธเธดเน a, b, c' },
        { title: 'เธเธณเธเธงเธ“เธ”เธดเธชเธเธฃเธดเธกเธดเนเธเธเธ—เน (Discriminant, ฮ”)', latex: `\\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}`, explanation: `ฮ” = ${discriminant}` }
      ];

      let resultText = '';
      if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `x_1 = ${x1.toFixed(4)}, x_2 = ${x2.toFixed(4)}`;
        steps.push({
          title: 'เธเธณเธเธงเธ“เธฃเธฒเธเธ—เธฑเนเธ 2 เธเนเธฒ (เธฃเธฒเธเธเธฃเธดเธเธ•เนเธฒเธเธเธฑเธ)',
          latex: `x = \\frac{-(${b}) \\pm \\sqrt{${discriminant}}}{2(${a})} \\implies x_1 = ${x1.toFixed(4)}, \\, x_2 = ${x2.toFixed(4)}`,
          explanation: `เน€เธเธทเนเธญเธเธเธฒเธ ฮ” > 0 เธชเธกเธเธฒเธฃเธเธฐเธกเธต 2 เธเธณเธ•เธญเธเธ—เธตเนเน€เธเนเธเธเธณเธเธงเธเธเธฃเธดเธ`
        });
        return { result: x1, secondaryResult: x2, resultDisplay: resultText, unit: '', steps };
      } else if (discriminant === 0) {
        const x = -b / (2 * a);
        resultText = `x = ${x.toFixed(4)} (เธฃเธฒเธเธเนเธณ)`;
        steps.push({
          title: 'เธเธณเธเธงเธ“เธฃเธฒเธ (เธฃเธฒเธเธเธฃเธดเธเธเนเธณเธเธฑเธ)',
          latex: `x = \\frac{-(${b})}{2(${a})} = ${x.toFixed(4)}`,
          explanation: `เน€เธเธทเนเธญเธเธเธฒเธ ฮ” = 0 เธชเธกเธเธฒเธฃเธเธฐเธกเธต 1 เธเธณเธ•เธญเธเธ—เธตเนเน€เธเนเธเธเธณเธเธงเธเธเธฃเธดเธ (เธฃเธฒเธเธเนเธณ)`
        });
        return { result: x, resultDisplay: resultText, unit: '', steps };
      } else {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
        resultText = `${realPart} ยฑ ${Math.abs(imagPart)}i`;
        steps.push({
          title: 'เธเธณเธเธงเธ“เธฃเธฒเธเธเธณเธเธงเธเน€เธเธดเธเธเนเธญเธ (Complex Roots)',
          latex: `x = ${realPart} \\pm ${Math.abs(imagPart)}i`,
          explanation: `เน€เธเธทเนเธญเธเธเธฒเธ ฮ” < 0 เธเธณเธ•เธญเธเธเธถเธเน€เธเนเธเธเธณเธเธงเธเน€เธเธดเธเธเนเธญเธเธเธนเนเธชเธฑเธเธขเธธเธ`
        });
        return { result: 0, resultDisplay: resultText, unit: '(Complex)', steps };
      }
    }
  },

  // ==================== 8. GEOMETRY: PYTHAGOREAN THEOREM ====================
  {
    id: 'pythagoras',
    name: 'Pythagorean Theorem',
    nameTh: 'เธ—เธคเธฉเธเธตเธเธ—เธเธตเธ—เธฒเนเธเธฃเธฑเธช',
    category: 'geometry',
    categoryTh: 'เน€เธฃเธเธฒเธเธ“เธดเธ•',
    icon: 'triangle',
    latex: 'a^2 + b^2 = c^2',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธฃเธฐเธซเธงเนเธฒเธเธเธงเธฒเธกเธขเธฒเธงเธเธญเธเธ”เนเธฒเธเธ—เธฑเนเธเธชเธฒเธกเธเธญเธเธฃเธนเธเธชเธฒเธกเน€เธซเธฅเธตเนเธขเธกเธกเธธเธกเธเธฒเธ',
    variables: [
      { id: 'a', symbol: 'a', name: 'Side a', nameTh: 'เธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ a', unit: '', defaultValue: 3, min: 0.001, max: 10000, step: 0.1 },
      { id: 'b', symbol: 'b', name: 'Side b', nameTh: 'เธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ b', unit: '', defaultValue: 4, min: 0.001, max: 10000, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Hypotenuse c', nameTh: 'เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ c', unit: '', defaultValue: 5, min: 0.001, max: 10000, step: 0.1 }
    ],
    solveTargets: ['c', 'a', 'b'],
    calculate: (inputs, target = 'c') => {
      let { a, b, c } = inputs;
      let steps = [];
      let result = 0;

      if (target === 'c') {
        result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธตเธ—เธฒเนเธเธฃเธฑเธช', latex: 'c = \\sqrt{a^2 + b^2}', explanation: 'เธ–เธญเธ”เธฃเธนเธ—เธเธฅเธฃเธงเธกเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธเธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `c = \\sqrt{(${a})^2 + (${b})^2} = \\sqrt{${(a*a).toFixed(2)} + ${(b*b).toFixed(2)}} = \\sqrt{${(a*a + b*b).toFixed(2)}}`, explanation: 'เธเธณเธเธงเธ“เธเธณเธฅเธฑเธเธชเธญเธเนเธฅเธฐเธเธงเธเธเธฑเธ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `c = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธเธขเธฒเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'a') {
        if (c <= b) throw new Error('เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ (c) เธ•เนเธญเธเธขเธฒเธงเธเธงเนเธฒเธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ (b)');
        result = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธ”เนเธฒเธ a', latex: 'a = \\sqrt{c^2 - b^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `a = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ a เธขเธฒเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      } else if (target === 'b') {
        if (c <= a) throw new Error('เธ”เนเธฒเธเธ•เธฃเธเธเนเธฒเธกเธกเธธเธกเธเธฒเธ (c) เธ•เนเธญเธเธขเธฒเธงเธเธงเนเธฒเธ”เนเธฒเธเธเธฃเธฐเธเธญเธเธกเธธเธกเธเธฒเธ (a)');
        result = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธ”เนเธฒเธ b', latex: 'b = \\sqrt{c^2 - a^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `b = ${result.toFixed(4)}`, explanation: `เธ”เนเธฒเธ b เธขเธฒเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)}` }
        ];
      }

      return { result, unit: '', steps };
    }
  },

  // ==================== 9. FINANCE: COMPOUND INTEREST ====================
  {
    id: 'compound_interest',
    name: 'Compound Interest',
    nameTh: 'เธ”เธญเธเน€เธเธตเนเธขเธ—เธเธ•เนเธ',
    category: 'finance',
    categoryTh: 'เธเธ“เธดเธ•เธจเธฒเธชเธ•เธฃเนเธเธฒเธฃเน€เธเธดเธ',
    icon: 'dollar-sign',
    latex: 'A = P \\left(1 + \\frac{r}{n}\\right)^{n \\cdot t}',
    description: 'เธเธฒเธฃเธเธณเธเธงเธ“เธกเธนเธฅเธเนเธฒเน€เธเธดเธเนเธเธญเธเธฒเธเธ•เธฃเธงเธกเธ”เธญเธเน€เธเธตเนเธขเธ—เธเธ•เนเธเธ•เธฒเธกเธฃเธญเธเธฃเธฐเธขเธฐเน€เธงเธฅเธฒ',
    variables: [
      { id: 'P', symbol: 'P', name: 'Principal', nameTh: 'เน€เธเธดเธเธ•เนเธ', unit: 'เธฟ', defaultValue: 10000, min: 1, max: 1000000000, step: 100 },
      { id: 'r', symbol: 'r', name: 'Annual Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเธ•เนเธญเธเธต (%)', unit: '%', defaultValue: 5, min: 0.01, max: 100, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Compounding frequency', nameTh: 'เธเธณเธเธงเธเธเธฃเธฑเนเธเธ—เธเธ•เนเธเธ•เนเธญเธเธต', unit: 'เธเธฃเธฑเนเธ/เธเธต', defaultValue: 12, min: 1, max: 365, step: 1 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เธฃเธฐเธขเธฐเน€เธงเธฅเธฒ', unit: 'เธเธต', defaultValue: 5, min: 0.1, max: 100, step: 0.5 }
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
        { title: 'เธชเธนเธ•เธฃเธ”เธญเธเน€เธเธตเนเธขเธ—เธเธ•เนเธ', latex: 'A = P \\left(1 + \\frac{r}{n}\\right)^{nt}', explanation: 'เธชเธนเธ•เธฃเธเธณเธเธงเธ“เน€เธเธดเธเธฃเธงเธก' },
        { title: 'เนเธเธฅเธเธญเธฑเธ•เธฃเธฒเธ”เธญเธเน€เธเธตเนเธขเน€เธเนเธเธ—เธจเธเธดเธขเธก', latex: `r = ${r}\\% = ${rateDecimal.toFixed(4)}`, explanation: 'เธซเธฒเธฃเน€เธเธญเธฃเนเน€เธเนเธเธ•เนเธ”เนเธงเธข 100' },
        { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃเนเธเธชเธกเธเธฒเธฃ', latex: `A = ${P} \\times \\left(1 + \\frac{${rateDecimal.toFixed(4)}}{${n}}\\right)^{(${n})(${t})}`, explanation: `P = ${P}, n = ${n}, t = ${t}` },
        { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“เน€เธเธดเธเธฃเธงเธก', latex: `A = ${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\,\\text{เธเธฒเธ—}`, explanation: `เน€เธเธดเธเธ•เนเธเธฃเธงเธกเธ”เธญเธเน€เธเธตเนเธขเธ—เธฑเนเธเธซเธกเธ”` },
        { title: 'เธ”เธญเธเน€เธเธตเนเธขเธ—เธตเนเนเธ”เนเธฃเธฑเธเธ—เธฑเนเธเธซเธกเธ”', latex: `\\text{Interest} = A - P = ${totalInterest.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\\,\\text{เธเธฒเธ—}`, explanation: `เธ”เธญเธเน€เธเธตเนเธขเธชเธธเธ—เธเธดเธ—เธตเนเน€เธเธดเนเธกเธเธถเนเธเธกเธฒ` }
      ];

      return { result, resultDisplay: `เธฟ${result.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, unit: 'เธเธฒเธ—', steps };
    }
  },

  // ==================== 10. RELATIVITY: MASS-ENERGY EQUIVALENCE ====================
  {
    id: 'mass_energy',
    name: 'Mass-Energy Equivalence',
    nameTh: 'เธชเธกเธกเธนเธฅเธกเธงเธฅ-เธเธฅเธฑเธเธเธฒเธ (เนเธญเธเนเธชเนเธ•เธเน)',
    category: 'energy',
    categoryTh: 'เธเธฒเธเนเธฅเธฐเธเธฅเธฑเธเธเธฒเธ',
    icon: 'sun',
    latex: 'E = m \\cdot c^2',
    description: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธฃเธฐเธซเธงเนเธฒเธเธกเธงเธฅเนเธฅเธฐเธเธฅเธฑเธเธเธฒเธเธญเธฑเธเน€เธฅเธทเนเธญเธเธเธทเนเธญเธเธญเธเธญเธฑเธฅเน€เธเธดเธฃเนเธ• เนเธญเธเนเธชเนเธ•เธเน เนเธ”เธข c เธเธทเธญเธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธ (~3 ร— 10โธ m/s)',
    variables: [
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅเธ—เธตเนเน€เธเธฅเธตเนเธขเธเธฃเธนเธ', unit: 'kg', defaultValue: 0.001, min: 0.0000000001, max: 100000, step: 0.0001 }
    ],
    solveTargets: ['E'],
    calculate: (inputs) => {
      const { m } = inputs;
      const c = 299792458; // m/s
      const result = m * Math.pow(c, 2);

      const steps = [
        { title: 'เธชเธนเธ•เธฃเธชเธกเธกเธนเธฅเธกเธงเธฅ-เธเธฅเธฑเธเธเธฒเธ', latex: 'E = m \\cdot c^2', explanation: 'เธเธฅเธฑเธเธเธฒเธเน€เธ—เธตเธขเธเน€เธ—เนเธฒเธเธฑเธเธกเธงเธฅเธเธนเธ“เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเธขเธเธเธณเธฅเธฑเธเธชเธญเธ' },
        { title: 'เธเธณเธซเธเธ”เธเนเธฒเธเธเธ—เธตเนเธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธ', latex: `c \\approx 3 \\times 10^8\\,\\text{m/s} \\quad (${c}\\,\\text{m/s})`, explanation: 'เธเธงเธฒเธกเน€เธฃเนเธงเนเธชเธเนเธเธชเธธเธเธเธฒเธเธฒเธจ' },
        { title: 'เนเธ—เธเธเนเธฒเธกเธงเธฅ', latex: `E = (${m}\\,\\text{kg}) \\times (${c}\\)^2`, explanation: `เนเธ—เธเธกเธงเธฅ m = ${m} kg` },
        { title: 'เธเธฅเธฅเธฑเธเธเนเธเธฅเธฑเธเธเธฒเธเธกเธซเธฒเธจเธฒเธฅ', latex: `E \\approx ${result.toExponential(4)}\\,\\text{Joules}`, explanation: `เธเธฅเธฑเธเธเธฒเธเธ—เธตเนเธเธฅเธ”เธเธฅเนเธญเธขเธญเธญเธเธกเธฒเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} เธเธนเธฅ` }
      ];

      return { result, resultDisplay: `${result.toExponential(4)} J`, unit: 'J (เธเธนเธฅ)', steps };
    }
  },

  // ==================== 11. PHYSICS: MOMENTUM (p = mv) ====================
  {
    id: 'momentum',
    name: 'Linear Momentum',
    nameTh: 'เนเธกเน€เธกเธเธ•เธฑเธกเน€เธเธดเธเน€เธชเนเธ',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'target',
    latex: 'p = m \\cdot v',
    description: 'เนเธกเน€เธกเธเธ•เธฑเธกเธเธทเธญเธเธฃเธดเธกเธฒเธ“เธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเนเธเธญเธเธงเธฑเธ•เธ–เธธ เน€เธเนเธเธเธฅเธเธนเธ“เธฃเธฐเธซเธงเนเธฒเธเธกเธงเธฅเธเธฑเธเธเธงเธฒเธกเน€เธฃเนเธง เธกเธตเธ—เธดเธจเธ—เธฒเธเธ•เธฒเธกเธเธงเธฒเธกเน€เธฃเนเธงเน€เธชเธกเธญ (เธซเธเนเธงเธข Nยทs เธซเธฃเธทเธญ kgยทm/s)',
    variables: [
      { id: 'p', symbol: 'p', name: 'Momentum', nameTh: 'เนเธกเน€เธกเธเธ•เธฑเธก', unit: 'kgยทm/s', defaultValue: 50, min: -1000000, max: 1000000, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ', unit: 'kg', defaultValue: 5, min: 0.001, max: 100000, step: 0.5 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'เธเธงเธฒเธกเน€เธฃเนเธง', unit: 'm/s', defaultValue: 10, min: -1000, max: 1000, step: 0.5 }
    ],
    solveTargets: ['p', 'm', 'v'],
    calculate: (inputs, target = 'p') => {
      let { p, m, v } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'p') {
        result = m * v;
        unit = 'kgยทm/s';
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธกเน€เธกเธเธ•เธฑเธก', latex: 'p = m \\times v', explanation: 'เนเธกเน€เธกเธเธ•เธฑเธกเน€เธ—เนเธฒเธเธฑเธเธกเธงเธฅเธเธนเธ“เธเธงเธฒเธกเน€เธฃเนเธง' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `p = ${m}\\,\\text{kg} \\times ${v}\\,\\text{m/s}`, explanation: `เนเธ—เธเธกเธงเธฅ m = ${m} kg เนเธฅเธฐเธเธงเธฒเธกเน€เธฃเนเธง v = ${v} m/s` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `p = ${result.toFixed(4)}\\,\\text{kgยทm/s}`, explanation: `เนเธกเน€เธกเธเธ•เธฑเธกเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kgยทm/s` }
        ];
      } else if (target === 'm') {
        if (v === 0) throw new Error('เธเธงเธฒเธกเน€เธฃเนเธง (v) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 เน€เธเธทเนเธญเธเธณเธเธงเธ“เธกเธงเธฅ');
        result = p / v;
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{p}{v}', explanation: 'เธขเนเธฒเธขเธเธงเธฒเธกเน€เธฃเนเธงเนเธเธซเธฒเธฃเนเธกเน€เธกเธเธ•เธฑเธก' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'v') {
        if (m === 0) throw new Error('เธกเธงเธฅ (m) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0 เน€เธเธทเนเธญเธเธณเธเธงเธ“เธเธงเธฒเธกเน€เธฃเนเธง');
        result = p / m;
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเน€เธฃเนเธง', latex: 'v = \\frac{p}{m}', explanation: 'เธขเนเธฒเธขเธกเธงเธฅเนเธเธซเธฒเธฃเนเธกเน€เธกเธเธ•เธฑเธก' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธเธงเธฒเธกเน€เธฃเนเธงเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 12. PHYSICS: NEWTON'S LAW OF UNIVERSAL GRAVITATION ====================
  {
    id: 'newton_gravitation',
    name: "Newton's Law of Universal Gravitation",
    nameTh: 'เธเธเธเธงเธฒเธกเนเธเนเธกเธ–เนเธงเธเธชเธฒเธเธฅเธเธญเธเธเธดเธงเธ•เธฑเธ',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'orbit',
    latex: 'F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}',
    description: 'เนเธฃเธเธ”เธถเธเธ”เธนเธ”เธฃเธฐเธซเธงเนเธฒเธเธกเธงเธฅเธชเธญเธเธเนเธญเธเน€เธเนเธเธชเธฑเธ”เธชเนเธงเธเธ•เธฃเธเธเธฑเธเธเธฅเธเธนเธ“เธเธญเธเธกเธงเธฅ เนเธฅเธฐเนเธเธฃเธเธเธเธฑเธเธเธฑเธเธเธณเธฅเธฑเธเธชเธญเธเธเธญเธเธฃเธฐเธขเธฐเธซเนเธฒเธ เธเนเธฒเธเธเธ—เธตเนเนเธเนเธกเธ–เนเธงเธเธชเธฒเธเธฅ G = 6.674 ร— 10โปยนยน Nยทmยฒ/kgยฒ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Gravitational Force', nameTh: 'เนเธฃเธเนเธเนเธกเธ–เนเธงเธ', unit: 'N', defaultValue: 6.67e-7, min: 1e-20, max: 1e15, step: 1e-7 },
      { id: 'm1', symbol: 'm_1', name: 'Mass 1', nameTh: 'เธกเธงเธฅเธงเธฑเธ•เธ–เธธเธ—เธตเน 1', unit: 'kg', defaultValue: 100, min: 0.001, max: 1e15, step: 1 },
      { id: 'm2', symbol: 'm_2', name: 'Mass 2', nameTh: 'เธกเธงเธฅเธงเธฑเธ•เธ–เธธเธ—เธตเน 2', unit: 'kg', defaultValue: 100, min: 0.001, max: 1e15, step: 1 },
      { id: 'r', symbol: 'r', name: 'Distance', nameTh: 'เธฃเธฐเธขเธฐเธซเนเธฒเธเธฃเธฐเธซเธงเนเธฒเธเธกเธงเธฅ', unit: 'm', defaultValue: 1, min: 0.000001, max: 1e12, step: 1 }
    ],
    solveTargets: ['F', 'm1', 'r'],
    calculate: (inputs, target = 'F') => {
      const G = 6.674e-11;
      let { F, m1, m2, r } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'F') {
        if (r === 0) throw new Error('เธฃเธฐเธขเธฐเธซเนเธฒเธ (r) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (G * m1 * m2) / Math.pow(r, 2);
        unit = 'N (เธเธดเธงเธ•เธฑเธ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธเธเธงเธฒเธกเนเธเนเธกเธ–เนเธงเธเธชเธฒเธเธฅ', latex: 'F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}', explanation: 'เนเธ”เธข G = 6.674 ร— 10โปยนยน Nยทmยฒ/kgยฒ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `F = (6.674 \\times 10^{-11}) \\times \\frac{${m1} \\times ${m2}}{(${r})^2}`, explanation: `mโ = ${m1} kg, mโ = ${m2} kg, r = ${r} m` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `F = ${result.toExponential(4)}\\,\\text{N}`, explanation: `เนเธฃเธเนเธเนเธกเธ–เนเธงเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'm1') {
        if (m2 === 0) throw new Error('เธกเธงเธฅ mโ เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (F * Math.pow(r, 2)) / (G * m2);
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธกเธงเธฅ mโ', latex: 'm_1 = \\frac{F \\cdot r^2}{G \\cdot m_2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m_1 = ${result.toExponential(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเธงเธฑเธ•เธ–เธธเธ—เธตเน 1 เน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} kg` }
        ];
      } else if (target === 'r') {
        if (F === 0) throw new Error('เนเธฃเธ (F) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt((G * m1 * m2) / F);
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธฃเธฐเธขเธฐเธซเนเธฒเธ', latex: 'r = \\sqrt{\\frac{G \\cdot m_1 \\cdot m_2}{F}}', explanation: 'เธขเนเธฒเธขเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `r = ${result.toExponential(4)}\\,\\text{m}`, explanation: `เธฃเธฐเธขเธฐเธซเนเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 13. PHYSICS: CENTRIPETAL FORCE ====================
  {
    id: 'centripetal_force',
    name: 'Centripetal Force',
    nameTh: 'เนเธฃเธเธชเธนเนเธจเธนเธเธขเนเธเธฅเธฒเธ',
    category: 'physics',
    categoryTh: 'เธเธดเธชเธดเธเธชเน',
    icon: 'refresh',
    latex: 'F = \\frac{m \\cdot v^2}{r}',
    description: 'เนเธฃเธเธฅเธฑเธเธเนเธ—เธตเนเธเธฃเธฐเธ—เธณเธ•เนเธญเธงเธฑเธ•เธ–เธธเธ—เธตเนเน€เธเธฅเธทเนเธญเธเธ—เธตเนเน€เธเนเธเธงเธเธเธฅเธก เนเธฅเธฐเธกเธตเธ—เธดเธจเธเธธเนเธเน€เธเนเธฒเธซเธฒเธเธธเธ”เธจเธนเธเธขเนเธเธฅเธฒเธเธเธญเธเธงเธเธเธฅเธกเน€เธชเธกเธญ',
    variables: [
      { id: 'F', symbol: 'F', name: 'Centripetal Force', nameTh: 'เนเธฃเธเธชเธนเนเธจเธนเธเธขเนเธเธฅเธฒเธ', unit: 'N', defaultValue: 125, min: 0, max: 1e9, step: 1 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅ', unit: 'kg', defaultValue: 2, min: 0.001, max: 100000, step: 0.1 },
      { id: 'v', symbol: 'v', name: 'Velocity', nameTh: 'เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเน€เธชเนเธ', unit: 'm/s', defaultValue: 25, min: 0, max: 10000, step: 0.5 },
      { id: 'r', symbol: 'r', name: 'Radius', nameTh: 'เธฃเธฑเธจเธกเธตเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเน', unit: 'm', defaultValue: 10, min: 0.000001, max: 100000, step: 0.5 }
    ],
    solveTargets: ['F', 'm', 'v', 'r'],
    calculate: (inputs, target = 'F') => {
      let { F, m, v, r } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'F') {
        if (r === 0) throw new Error('เธฃเธฑเธจเธกเธต (r) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (m * Math.pow(v, 2)) / r;
        unit = 'N (เธเธดเธงเธ•เธฑเธ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธฃเธเธชเธนเนเธจเธนเธเธขเนเธเธฅเธฒเธ', latex: 'F = \\frac{m v^2}{r}', explanation: 'เธกเธงเธฅเธเธนเธ“เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเธเธณเธฅเธฑเธเธชเธญเธเธซเธฒเธฃเธฃเธฑเธจเธกเธต' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `F = \\frac{${m}\\,\\text{kg} \\times (${v}\\,\\text{m/s})^2}{${r}\\,\\text{m}}`, explanation: 'เนเธ—เธเธเนเธฒเธ—เธฑเนเธเธซเธกเธ”เธฅเธเนเธเธชเธนเธ•เธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `F = ${result.toFixed(4)}\\,\\text{N}`, explanation: `เนเธฃเธเธชเธนเนเธจเธนเธเธขเนเธเธฅเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธดเธงเธ•เธฑเธ` }
        ];
      } else if (target === 'm') {
        if (v === 0) throw new Error('เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง (v) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (F * r) / Math.pow(v, 2);
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{F \\cdot r}{v^2}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธเนเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'v') {
        if (m === 0) throw new Error('เธกเธงเธฅ (m) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.sqrt((F * r) / m);
        unit = 'm/s';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธญเธฑเธ•เธฃเธฒเน€เธฃเนเธง', latex: 'v = \\sqrt{\\frac{F \\cdot r}{m}}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธฅเธฐเธ–เธญเธ”เธฃเธนเธ—' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `v = ${result.toFixed(4)}\\,\\text{m/s}`, explanation: `เธญเธฑเธ•เธฃเธฒเน€เธฃเนเธงเน€เธเธดเธเน€เธชเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} m/s` }
        ];
      } else if (target === 'r') {
        if (F === 0) throw new Error('เนเธฃเธ (F) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (m * Math.pow(v, 2)) / F;
        unit = 'm';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธฃเธฑเธจเธกเธต', latex: 'r = \\frac{m \\cdot v^2}{F}', explanation: 'เธขเนเธฒเธขเธฃเธฑเธจเธกเธตเนเธเนเธงเนเธ•เธฑเธงเธ•เธฑเนเธ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `r = ${result.toFixed(4)}\\,\\text{m}`, explanation: `เธฃเธฑเธจเธกเธตเธเธฒเธฃเน€เธเธฅเธทเนเธญเธเธ—เธตเนเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธกเธ•เธฃ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 14. CHEMISTRY: IDEAL GAS LAW ====================
  {
    id: 'ideal_gas_law',
    name: 'Ideal Gas Law',
    nameTh: 'เธชเธกเธเธฒเธฃเนเธเนเธชเธญเธธเธ”เธกเธเธ•เธด (PV = nRT)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'wind',
    latex: 'P \\cdot V = n \\cdot R \\cdot T',
    description: 'เธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเธฃเธฐเธซเธงเนเธฒเธเธเธงเธฒเธกเธ”เธฑเธ (P) เธเธฃเธดเธกเธฒเธ•เธฃ (V) เธเธณเธเธงเธเนเธกเธฅ (n) เนเธฅเธฐเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธงเธดเธ (T) เธเธญเธเนเธเนเธชเธญเธธเธ”เธกเธเธ•เธด เนเธ”เธขเธเนเธฒเธเธเธ—เธตเนเนเธเนเธช R = 0.0821 Lยทatm/(molยทK)',
    variables: [
      { id: 'P', symbol: 'P', name: 'Pressure', nameTh: 'เธเธงเธฒเธกเธ”เธฑเธ', unit: 'atm', defaultValue: 1, min: 0.0001, max: 1000, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃ', unit: 'L', defaultValue: 22.4, min: 0.0001, max: 100000, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Moles', nameTh: 'เธเธณเธเธงเธเนเธกเธฅ', unit: 'mol', defaultValue: 1, min: 0.0001, max: 100000, step: 0.1 },
      { id: 'T', symbol: 'T', name: 'Temperature (Kelvin)', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธด (เน€เธเธฅเธงเธดเธ)', unit: 'K', defaultValue: 273.15, min: 0.001, max: 5000, step: 1 }
    ],
    solveTargets: ['P', 'V', 'n', 'T'],
    calculate: (inputs, target = 'P') => {
      const R = 0.0821;
      let { P, V, n, T } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'P') {
        if (V === 0) throw new Error('เธเธฃเธดเธกเธฒเธ•เธฃ (V) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (n * R * T) / V;
        unit = 'atm';
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธเนเธชเธญเธธเธ”เธกเธเธ•เธด', latex: 'PV = nRT \\implies P = \\frac{nRT}{V}', explanation: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเธ”เธฑเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `P = \\frac{${n}\\,\\text{mol} \\times 0.0821 \\times ${T}\\,\\text{K}}{${V}\\,\\text{L}}`, explanation: `n = ${n} mol, T = ${T} K, V = ${V} L` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `P = ${result.toFixed(4)}\\,\\text{atm}`, explanation: `เธเธงเธฒเธกเธ”เธฑเธเนเธเนเธชเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} atm` }
        ];
      } else if (target === 'V') {
        if (P === 0) throw new Error('เธเธงเธฒเธกเธ”เธฑเธ (P) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (n * R * T) / P;
        unit = 'L';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃ', latex: 'V = \\frac{nRT}{P}', explanation: 'เธขเนเธฒเธข P เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `V = ${result.toFixed(4)}\\,\\text{L}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเนเธเนเธชเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธดเธ•เธฃ` }
        ];
      } else if (target === 'n') {
        if (T === 0) throw new Error('เธญเธธเธ“เธซเธ เธนเธกเธด (T) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (P * V) / (R * T);
        unit = 'mol';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธณเธเธงเธเนเธกเธฅ', latex: 'n = \\frac{PV}{RT}', explanation: 'เธขเนเธฒเธข RT เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `n = ${result.toFixed(4)}\\,\\text{mol}`, explanation: `เธเธณเธเธงเธเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅ` }
        ];
      } else if (target === 'T') {
        if (n === 0) throw new Error('เธเธณเธเธงเธเนเธกเธฅ (n) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (P * V) / (R * n);
        unit = 'K';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธญเธธเธ“เธซเธ เธนเธกเธด', latex: 'T = \\frac{PV}{nR}', explanation: 'เธขเนเธฒเธข nR เนเธเธซเธฒเธฃ (เธญเธธเธ“เธซเธ เธนเธกเธดเธ•เนเธญเธเน€เธเนเธเน€เธเธฅเธงเธดเธเน€เธชเธกเธญ)' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `T = ${result.toFixed(4)}\\,\\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธเธฅเธงเธดเธ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 15. CHEMISTRY: MOLE & MOLARITY ====================
  {
    id: 'molarity',
    name: 'Molarity (Solution Concentration)',
    nameTh: 'เนเธกเธฅเธฒเธฃเธดเธ•เธต (เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธเธญเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'droplet',
    latex: 'C = \\frac{n}{V} \\quad \\left(n = \\frac{m}{M}\\right)',
    description: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธเธญเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเนเธเธซเธเนเธงเธขเนเธกเธฅเธ•เนเธญเธฅเธดเธ•เธฃ (mol/L เธซเธฃเธทเธญ M) เนเธ”เธขเธเธณเธเธงเธเนเธกเธฅเธเธณเธเธงเธ“เธเธฒเธเธกเธงเธฅเธชเธฒเธฃเธซเธฒเธฃเธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ',
    variables: [
      { id: 'C', symbol: 'C', name: 'Molarity', nameTh: 'เนเธกเธฅเธฒเธฃเธดเธ•เธต', unit: 'mol/L', defaultValue: 1, min: 0.000001, max: 50, step: 0.1 },
      { id: 'n', symbol: 'n', name: 'Moles of Solute', nameTh: 'เธเธณเธเธงเธเนเธกเธฅเธ•เธฑเธงเธฅเธฐเธฅเธฒเธข', unit: 'mol', defaultValue: 1, min: 0.000001, max: 10000, step: 0.1 },
      { id: 'V', symbol: 'V', name: 'Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข', unit: 'L', defaultValue: 1, min: 0.000001, max: 10000, step: 0.1 },
      { id: 'm', symbol: 'm', name: 'Mass of Solute', nameTh: 'เธกเธงเธฅเธ•เธฑเธงเธฅเธฐเธฅเธฒเธข', unit: 'g', defaultValue: 58.44, min: 0.000001, max: 1000000, step: 0.1 },
      { id: 'M', symbol: 'M', name: 'Molar Mass', nameTh: 'เธกเธงเธฅเนเธกเน€เธฅเธเธธเธฅ', unit: 'g/mol', defaultValue: 58.44, min: 0.001, max: 100000, step: 0.1 }
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
        if (V === 0) throw new Error('เธเธฃเธดเธกเธฒเธ•เธฃ (V) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = n / V;
        unit = 'mol/L (M)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเนเธกเธฅเธฒเธฃเธดเธ•เธต', latex: 'C = \\frac{n}{V}', explanation: 'เธเธณเธเธงเธเนเธกเธฅเธซเธฒเธฃเธเธฃเธดเธกเธฒเธ•เธฃเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `C = \\frac{${n}\\,\\text{mol}}{${V}\\,\\text{L}}`, explanation: `n = ${n} mol, V = ${V} L` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `C = ${result.toFixed(4)}\\,\\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅเธฒเธฃเน` }
        ];
      } else if (target === 'n') {
        result = C * V;
        unit = 'mol';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธณเธเธงเธเนเธกเธฅ', latex: 'n = C \\times V', explanation: 'เนเธกเธฅเธฒเธฃเธดเธ•เธตเธเธนเธ“เธเธฃเธดเธกเธฒเธ•เธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `n = ${result.toFixed(4)}\\,\\text{mol}`, explanation: `เธเธณเธเธงเธเนเธกเธฅเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅ` }
        ];
      } else if (target === 'V') {
        if (C === 0) throw new Error('เธเธงเธฒเธกเน€เธเนเธกเธเนเธ (C) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = n / C;
        unit = 'L';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃ', latex: 'V = \\frac{n}{C}', explanation: 'เธเธณเธเธงเธเนเธกเธฅเธซเธฒเธฃเธเธงเธฒเธกเน€เธเนเธกเธเนเธ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `V = ${result.toFixed(4)}\\,\\text{L}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธฅเธดเธ•เธฃ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 16. CHEMISTRY: pH CALCULATION ====================
  {
    id: 'ph_calculation',
    name: 'pH Calculation (Hydrogen Ion Concentration)',
    nameTh: 'เธเธฒเธฃเธเธณเธเธงเธ“เธเนเธฒ pH เธเธฒเธเธเธงเธฒเธกเน€เธเนเธกเธเนเธเนเธฎเนเธ”เธฃเน€เธเธเนเธญเธญเธญเธ',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'droplet',
    latex: '\\text{pH} = -\\log_{10}[\\text{H}^+]',
    description: 'เธเนเธฒ pH เธเธญเธเธเธงเธฒเธกเน€เธเนเธเธเธฃเธ”-เน€เธเธชเธเธญเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข เนเธ”เธข pH = -log[Hโบ] เธซเธฒเธ pH < 7 เน€เธเนเธเธเธฃเธ”, pH = 7 เน€เธเนเธเธเธฅเธฒเธ, pH > 7 เน€เธเนเธเน€เธเธช',
    variables: [
      { id: 'pH', symbol: '\\text{pH}', name: 'pH Value', nameTh: 'เธเนเธฒ pH', unit: '', defaultValue: 4.3, min: -2, max: 16, step: 0.01 },
      { id: 'H', symbol: '[H^+]', name: 'H+ Concentration', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธ Hโบ', unit: 'mol/L', defaultValue: 5e-5, min: 1e-14, max: 1, step: 1e-5 }
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
          { title: 'เธชเธนเธ•เธฃ pH', latex: '\\text{pH} = -\\log_{10}[H^+]', explanation: 'pH เธเธทเธญเธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเธเธฒเธเธชเธดเธเธเธญเธเธเธงเธฒเธกเน€เธเนเธกเธเนเธ Hโบ' },
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒ [Hโบ]', latex: '[H^+] = 10^{-\\text{pH}}', explanation: 'เธ–เธญเธ”เนเธฒเธขเน€เธเนเธเน€เธฅเธเธขเธเธเธณเธฅเธฑเธ' },
          { title: 'เนเธ—เธเธเนเธฒ pH', latex: `[H^+] = 10^{-${pH}}`, explanation: `เนเธ—เธเธเนเธฒ pH = ${pH}` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `[H^+] = ${result.toExponential(4)}\\,\\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธ Hโบ เน€เธ—เนเธฒเธเธฑเธ ${result.toExponential(4)} mol/L` }
        ];
      } else if (target === 'pH') {
        if (H <= 0) throw new Error('เธเธงเธฒเธกเน€เธเนเธกเธเนเธ [Hโบ] เธ•เนเธญเธเธกเธฒเธเธเธงเนเธฒ 0');
        result = -Math.log10(H);
        unit = '';
        steps = [
          { title: 'เธชเธนเธ•เธฃ pH', latex: '\\text{pH} = -\\log_{10}[H^+]', explanation: 'เธเธณเธเธงเธ“เธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเธเธฒเธเธชเธดเธเธเธญเธเธเธงเธฒเธกเน€เธเนเธกเธเนเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธเธงเธฒเธกเน€เธเนเธกเธเนเธ', latex: `\\text{pH} = -\\log_{10}(${H.toExponential(4)})`, explanation: `เนเธ—เธ [Hโบ] = ${H.toExponential(4)} mol/L` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `\\text{pH} = ${result.toFixed(4)}`, explanation: result < 7 ? 'เธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเธเธตเนเน€เธเนเธเธเธฃเธ” (pH < 7)' : result > 7 ? 'เธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเธเธตเนเน€เธเนเธเน€เธเธช (pH > 7)' : 'เธชเธฒเธฃเธฅเธฐเธฅเธฒเธขเธเธตเนเน€เธเนเธเธเธฅเธฒเธ (pH = 7)' }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 17. CHEMISTRY: DILUTION (C1V1 = C2V2) ====================
  {
    id: 'dilution',
    name: 'Dilution Law',
    nameTh: 'เธเธฒเธฃเน€เธเธทเธญเธเธฒเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข (CโVโ = CโVโ)',
    category: 'chemistry',
    categoryTh: 'เน€เธเธกเธต',
    icon: 'droplet',
    latex: 'C_1 \\cdot V_1 = C_2 \\cdot V_2',
    description: 'เน€เธกเธทเนเธญเน€เธเธทเธญเธเธฒเธเธชเธฒเธฃเธฅเธฐเธฅเธฒเธข เนเธกเธฅเธเธญเธเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธขเธเธเธ—เธตเน เธ”เธฑเธเธเธฑเนเธเธเธฅเธเธนเธ“เธเธญเธเธเธงเธฒเธกเน€เธเนเธกเธเนเธเธเธฑเธเธเธฃเธดเธกเธฒเธ•เธฃเธเนเธญเธเนเธฅเธฐเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ',
    variables: [
      { id: 'C1', symbol: 'C_1', name: 'Initial Concentration', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธฃเธดเนเธกเธ•เนเธ', unit: 'mol/L', defaultValue: 6, min: 0.000001, max: 1000, step: 0.1 },
      { id: 'V1', symbol: 'V_1', name: 'Initial Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธ', unit: 'mL', defaultValue: 10, min: 0.001, max: 1000000, step: 1 },
      { id: 'C2', symbol: 'C_2', name: 'Final Concentration', nameTh: 'เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธ', unit: 'mol/L', defaultValue: 0.6, min: 0.000001, max: 1000, step: 0.01 },
      { id: 'V2', symbol: 'V_2', name: 'Final Volume', nameTh: 'เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธ', unit: 'mL', defaultValue: 100, min: 0.001, max: 1000000, step: 1 }
    ],
    solveTargets: ['C2', 'V2', 'C1', 'V1'],
    calculate: (inputs, target = 'C2') => {
      let { C1, V1, C2, V2 } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'C2') {
        if (V2 === 0) throw new Error('เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธ (Vโ) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (C1 * V1) / V2;
        unit = 'mol/L';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเน€เธเธทเธญเธเธฒเธ', latex: 'C_1 V_1 = C_2 V_2 \\implies C_2 = \\frac{C_1 V_1}{V_2}', explanation: 'เนเธกเธฅเธ•เธฑเธงเธ–เธนเธเธฅเธฐเธฅเธฒเธขเนเธกเนเน€เธเธฅเธตเนเธขเธเน€เธกเธทเนเธญเน€เธเธทเธญเธเธฒเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `C_2 = \\frac{${C1}\\,\\text{M} \\times ${V1}\\,\\text{mL}}{${V2}\\,\\text{mL}}`, explanation: 'เนเธ—เธเธเนเธฒเธ—เธฑเนเธเธซเธกเธ”เธฅเธเนเธเธชเธนเธ•เธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `C_2 = ${result.toFixed(4)}\\,\\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅเธฒเธฃเน` }
        ];
      } else if (target === 'V2') {
        if (C2 === 0) throw new Error('เธเธงเธฒเธกเน€เธเนเธกเธเนเธเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธ (Cโ) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (C1 * V1) / C2;
        unit = 'mL';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃเธชเธธเธ”เธ—เนเธฒเธข', latex: 'V_2 = \\frac{C_1 V_1}{C_2}', explanation: 'เธขเนเธฒเธข Cโ เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `V_2 = ${result.toFixed(4)}\\,\\text{mL}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเธซเธฅเธฑเธเน€เธเธทเธญเธเธฒเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mL` }
        ];
      } else if (target === 'C1') {
        if (V1 === 0) throw new Error('เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธ (Vโ) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (C2 * V2) / V1;
        unit = 'mol/L';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธฃเธดเนเธกเธ•เนเธ', latex: 'C_1 = \\frac{C_2 V_2}{V_1}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธเนเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `C_1 = ${result.toFixed(4)}\\,\\text{mol/L}`, explanation: `เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธฃเธดเนเธกเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เนเธกเธฅเธฒเธฃเน` }
        ];
      } else if (target === 'V1') {
        if (C1 === 0) throw new Error('เธเธงเธฒเธกเน€เธเนเธกเธเนเธเน€เธฃเธดเนเธกเธ•เนเธ (Cโ) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = (C2 * V2) / C1;
        unit = 'mL';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธฃเธดเธกเธฒเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธ', latex: 'V_1 = \\frac{C_2 V_2}{C_1}', explanation: 'เธขเนเธฒเธขเธเนเธฒเธเนเธเนเธชเธกเธเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `V_1 = ${result.toFixed(4)}\\,\\text{mL}`, explanation: `เธเธฃเธดเธกเธฒเธ•เธฃเน€เธฃเธดเนเธกเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} mL` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 18. THERMODYNAMICS: HEAT TRANSFER (Q = mcฮ”T) ====================
  {
    id: 'specific_heat',
    name: 'Heat Transfer (Specific Heat Capacity)',
    nameTh: 'เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเนเธเนเน€เธเธฅเธตเนเธขเธเธญเธธเธ“เธซเธ เธนเธกเธด (Q = mcฮ”T)',
    category: 'thermodynamics',
    categoryTh: 'เธญเธธเธ“เธซเธเธฅเธจเธฒเธชเธ•เธฃเน',
    icon: 'thermometer',
    latex: 'Q = m \\cdot c \\cdot \\Delta T',
    description: 'เธเธฃเธดเธกเธฒเธ“เธเธงเธฒเธกเธฃเนเธญเธเธ—เธตเนเธชเธฒเธฃเนเธ”เนเธฃเธฑเธเธซเธฃเธทเธญเธเธฒเธขเธญเธญเธเน€เธกเธทเนเธญเธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธตเนเธขเธ เนเธ”เธข c เธเธทเธญเธเธงเธฒเธกเธเธธเธเธงเธฒเธกเธฃเนเธญเธเธเธณเน€เธเธฒเธฐเธเธญเธเธชเธฒเธฃ เน€เธเนเธ เธเนเธณ = 4,186 J/(kgยทK)',
    variables: [
      { id: 'Q', symbol: 'Q', name: 'Heat Energy', nameTh: 'เธเธฃเธดเธกเธฒเธ“เธเธงเธฒเธกเธฃเนเธญเธ', unit: 'J', defaultValue: 83720, min: -1e12, max: 1e12, step: 10 },
      { id: 'm', symbol: 'm', name: 'Mass', nameTh: 'เธกเธงเธฅเธเธญเธเธชเธฒเธฃ', unit: 'kg', defaultValue: 2, min: 0.000001, max: 1000000, step: 0.1 },
      { id: 'c', symbol: 'c', name: 'Specific Heat', nameTh: 'เธเธงเธฒเธกเธเธธเธเธงเธฒเธกเธฃเนเธญเธเธเธณเน€เธเธฒเธฐ', unit: 'J/(kgยทK)', defaultValue: 4186, min: 1, max: 100000, step: 1 },
      { id: 'dT', symbol: '\\Delta T', name: 'Temperature Change', nameTh: 'เธญเธธเธ“เธซเธ เธนเธกเธดเธ—เธตเนเน€เธเธฅเธตเนเธขเธเนเธ', unit: 'K (ยฐC)', defaultValue: 10, min: -10000, max: 10000, step: 0.5 }
    ],
    solveTargets: ['Q', 'm', 'c', 'dT'],
    calculate: (inputs, target = 'Q') => {
      let { Q, m, c, dT } = inputs;
      let steps = [];
      let result = 0;
      let unit = '';

      if (target === 'Q') {
        result = m * c * dT;
        unit = 'J (เธเธนเธฅ)';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธงเธฒเธกเธฃเนเธญเธ', latex: 'Q = m \\, c \\, \\Delta T', explanation: 'เธกเธงเธฅเธเธนเธ“เธเธงเธฒเธกเธเธธเธเธงเธฒเธกเธฃเนเธญเธเธเธณเน€เธเธฒเธฐเธเธนเธ“เธญเธธเธ“เธซเธ เธนเธกเธดเธ—เธตเนเน€เธเธฅเธตเนเธขเธ' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `Q = ${m}\\,\\text{kg} \\times ${c}\\,\\text{J/(kgยทK)} \\times ${dT}\\,\\text{K}`, explanation: 'เนเธ—เธเธเนเธฒเธ—เธฑเนเธเธซเธกเธ”' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `Q = ${result.toFixed(4)}\\,\\text{J}`, explanation: `เธเธฃเธดเธกเธฒเธ“เธเธงเธฒเธกเธฃเนเธญเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธเธนเธฅ` }
        ];
      } else if (target === 'm') {
        if (c === 0 || dT === 0) throw new Error('c เนเธฅเธฐ ฮ”T เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / (c * dT);
        unit = 'kg';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธกเธงเธฅ', latex: 'm = \\frac{Q}{c \\, \\Delta T}', explanation: 'เธขเนเธฒเธข c เนเธฅเธฐ ฮ”T เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `m = ${result.toFixed(4)}\\,\\text{kg}`, explanation: `เธกเธงเธฅเธเธญเธเธชเธฒเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} kg` }
        ];
      } else if (target === 'c') {
        if (m === 0 || dT === 0) throw new Error('m เนเธฅเธฐ ฮ”T เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / (m * dT);
        unit = 'J/(kgยทK)';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธงเธฒเธกเธเธธเธเธงเธฒเธกเธฃเนเธญเธเธเธณเน€เธเธฒเธฐ', latex: 'c = \\frac{Q}{m \\, \\Delta T}', explanation: 'เธขเนเธฒเธข m เนเธฅเธฐ ฮ”T เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `c = ${result.toFixed(4)}\\,\\text{J/(kgยทK)}`, explanation: `เธเธงเธฒเธกเธเธธเธเธงเธฒเธกเธฃเนเธญเธเธเธณเน€เธเธฒเธฐเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} J/(kgยทK)` }
        ];
      } else if (target === 'dT') {
        if (m === 0 || c === 0) throw new Error('m เนเธฅเธฐ c เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Q / (m * c);
        unit = 'K';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธญเธธเธ“เธซเธ เธนเธกเธดเธ—เธตเนเน€เธเธฅเธตเนเธขเธ', latex: '\\Delta T = \\frac{Q}{m \\, c}', explanation: 'เธขเนเธฒเธข m เนเธฅเธฐ c เนเธเธซเธฒเธฃ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `\\Delta T = ${result.toFixed(4)}\\,\\text{K}`, explanation: `เธญเธธเธ“เธซเธ เธนเธกเธดเน€เธเธฅเธตเนเธขเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เน€เธเธฅเธงเธดเธ` }
        ];
      }

      return { result, unit, steps };
    }
  },

  // ==================== 19. BIOLOGY: HARDY-WEINBERG EQUILIBRIUM ====================
  {
    id: 'hardy_weinberg',
    name: 'Hardy-Weinberg Equilibrium',
    nameTh: 'เธชเธกเธ”เธธเธฅเธฎเธฒเธฃเนเธ”เธต-เนเธงเธเนเน€เธเธดเธฃเนเธ (เธเธงเธฒเธกเธ–เธตเนเธขเธตเธ)',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'dna',
    latex: 'p^2 + 2pq + q^2 = 1 \\quad (p + q = 1)',
    description: 'เนเธเนเธเธณเธเธงเธ“เธเธงเธฒเธกเธ–เธตเนเธเธญเธเธเธตเนเธเนเธ—เธเน (AA, Aa, aa) เนเธเธเธฃเธฐเธเธฒเธเธฃเธ—เธตเนเนเธกเนเธกเธตเธงเธดเธงเธฑเธ’เธเธฒเธเธฒเธฃ: pยฒ = Homozygous dominant, 2pq = Heterozygous, qยฒ = Homozygous recessive เนเธ”เธข p เธเธทเธญเธเธงเธฒเธกเธ–เธตเนเธเธญเธเธญเธฑเธฅเธฅเธตเธฅเน€เธ”เนเธ เนเธฅเธฐ q เธเธทเธญเธเธงเธฒเธกเธ–เธตเนเธเธญเธเธญเธฑเธฅเธฅเธตเธฅเธ”เนเธญเธข',
    variables: [
      { id: 'p', symbol: 'p', name: 'Dominant Allele Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธญเธฑเธฅเธฅเธตเธฅเน€เธ”เนเธ (p)', unit: '', defaultValue: 0.7, min: 0.001, max: 0.999, step: 0.01 },
      { id: 'q', symbol: 'q', name: 'Recessive Allele Frequency', nameTh: 'เธเธงเธฒเธกเธ–เธตเนเธญเธฑเธฅเธฅเธตเธฅเธ”เนเธญเธข (q)', unit: '', defaultValue: 0.3, min: 0.001, max: 0.999, step: 0.01 }
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
        throw new Error(`p + q เธ•เนเธญเธเน€เธ—เนเธฒเธเธฑเธ 1 เน€เธชเธกเธญ (เธ•เธญเธเธเธตเน p+q = ${(p + q).toFixed(4)}) เธเธฑเธ”เธเธฒเธฃเนเธซเน p + q = 1 เธเนเธญเธ`);
      }

      const p2 = Math.pow(p, 2);
      const pqTerm = 2 * p * q;
      const q2 = Math.pow(q, 2);

      const resultDisplay = `AA (pยฒ) = ${p2.toFixed(4)} โ€ข Aa (2pq) = ${pqTerm.toFixed(4)} โ€ข aa (qยฒ) = ${q2.toFixed(4)}`;

      if (target === 'p') {
        result = p;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธชเธกเธ”เธธเธฅเธฎเธฒเธฃเนเธ”เธต-เนเธงเธเนเน€เธเธดเธฃเนเธ', latex: 'p^2 + 2pq + q^2 = 1', explanation: 'เธเธฅเธฃเธงเธกเธเธงเธฒเธกเธ–เธตเนเธเธตเนเธเนเธ—เธเนเธ—เธฑเนเธเธชเธฒเธกเนเธเธเน€เธ—เนเธฒเธเธฑเธ 1 เน€เธชเธกเธญ' },
          { title: 'เนเธ—เธเธเนเธฒเธเธงเธฒเธกเธ–เธตเนเธญเธฑเธฅเธฅเธตเธฅ', latex: `p = ${p}, \\quad q = ${q}`, explanation: `เธเธงเธฒเธกเธ–เธตเนเธญเธฑเธฅเธฅเธตเธฅเน€เธ”เนเธ ${p}, เธเธงเธฒเธกเธ–เธตเนเธญเธฑเธฅเธฅเธตเธฅเธ”เนเธญเธข ${q}` },
          { title: 'เธเธณเธเธงเธ“เธเธงเธฒเธกเธ–เธตเนเธเธตเนเธเนเธ—เธเน', latex: `p^2 = ${p2.toFixed(4)}, \\quad 2pq = ${pqTerm.toFixed(4)}, \\quad q^2 = ${q2.toFixed(4)}`, explanation: resultDisplay },
          { title: 'เธ•เธฃเธงเธเธชเธญเธเธเธฅเธฃเธงเธก', latex: `${p2.toFixed(4)} + ${pqTerm.toFixed(4)} + ${q2.toFixed(4)} = ${(p2 + pqTerm + q2).toFixed(4)} = 1`, explanation: 'เธเธฅเธฃเธงเธกเธเธงเธฒเธกเธ–เธตเนเธ—เธฑเนเธเธซเธกเธ”เธ•เนเธญเธเน€เธ—เนเธฒเธเธฑเธ 1' }
        ];
        return { result: p, resultDisplay, unit, steps };
      } else if (target === 'q') {
        result = q;
        steps = [
          { title: 'เธชเธนเธ•เธฃเธชเธกเธ”เธธเธฅเธฎเธฒเธฃเนเธ”เธต-เนเธงเธเนเน€เธเธดเธฃเนเธ', latex: 'p^2 + 2pq + q^2 = 1', explanation: 'เธเธฅเธฃเธงเธกเธเธงเธฒเธกเธ–เธตเนเธเธตเนเธเนเธ—เธเนเน€เธ—เนเธฒเธเธฑเธ 1' },
          { title: 'เนเธ—เธเธเนเธฒเธเธงเธฒเธกเธ–เธตเนเธญเธฑเธฅเธฅเธตเธฅ', latex: `p = ${p}, \\quad q = ${q}`, explanation: 'เธเนเธฒเธเธงเธฒเธกเธ–เธตเนเธเธญเธเนเธ•เนเธฅเธฐเธญเธฑเธฅเธฅเธตเธฅ' },
          { title: 'เธเธณเธเธงเธ“เธเธงเธฒเธกเธ–เธตเนเธเธตเนเธเนเธ—เธเน', latex: `p^2 = ${p2.toFixed(4)}, \\quad 2pq = ${pqTerm.toFixed(4)}, \\quad q^2 = ${q2.toFixed(4)}`, explanation: resultDisplay }
        ];
        return { result: q, resultDisplay, unit, steps };
      }
    }
  },

  // ==================== 20. BIOLOGY: EXPONENTIAL POPULATION GROWTH ====================
  {
    id: 'population_growth',
    name: 'Exponential Population Growth',
    nameTh: 'เธเธฒเธฃเน€เธเธฃเธดเธเน€เธ•เธดเธเนเธ•เธเธญเธเธเธฃเธฐเธเธฒเธเธฃเนเธเธเน€เธญเธเธเนเนเธเน€เธเธเน€เธเธตเธขเธฅ',
    category: 'biology',
    categoryTh: 'เธเธตเธงเธงเธดเธ—เธขเธฒ',
    icon: 'trending-up',
    latex: 'N_t = N_0 \\cdot e^{r \\cdot t}',
    description: 'เธเธฒเธฃเน€เธเธดเนเธกเธเธญเธเธเธฃเธฐเธเธฒเธเธฃเธญเธขเนเธฒเธเนเธกเนเธเธณเธเธฑเธ”เธ—เธฃเธฑเธเธขเธฒเธเธฃ เนเธ”เธข Nโ€ เธเธทเธญเธเธณเธเธงเธเธเธฃเธฐเธเธฒเธเธฃเน€เธฃเธดเนเธกเธ•เนเธ, r เธเธทเธญเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธกเธเธฃเธฐเธเธฒเธเธฃเธ•เนเธญเธซเธเนเธงเธขเน€เธงเธฅเธฒ (เธ•เนเธญเธเธต), t เธเธทเธญเน€เธงเธฅเธฒ เนเธฅเธฐ e โ 2.71828',
    variables: [
      { id: 'Nt', symbol: 'N_t', name: 'Final Population', nameTh: 'เธเธณเธเธงเธเธเธฃเธฐเธเธฒเธเธฃเธซเธฅเธฑเธเน€เธงเธฅเธฒ t', unit: 'เธ•เธฑเธง', defaultValue: 7408, min: 0, max: 1e15, step: 1 },
      { id: 'N0', symbol: 'N_0', name: 'Initial Population', nameTh: 'เธเธณเธเธงเธเธเธฃเธฐเธเธฒเธเธฃเน€เธฃเธดเนเธกเธ•เนเธ', unit: 'เธ•เธฑเธง', defaultValue: 100, min: 0.001, max: 1e12, step: 1 },
      { id: 'r', symbol: 'r', name: 'Growth Rate', nameTh: 'เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธกเธ•เนเธญเธเธต', unit: '/เธเธต', defaultValue: 0.1, min: -1, max: 5, step: 0.01 },
      { id: 't', symbol: 't', name: 'Time', nameTh: 'เธฃเธฐเธขเธฐเน€เธงเธฅเธฒ', unit: 'เธเธต', defaultValue: 42.9, min: -1000, max: 1000, step: 0.1 }
    ],
    solveTargets: ['Nt', 'N0', 'r'],
    calculate: (inputs, target = 'Nt') => {
      let { Nt, N0, r, t } = inputs;
      const EULER = Math.E;
      let steps = [];
      let result = 0;
      let unit = 'เธ•เธฑเธง';

      if (target === 'Nt') {
        result = N0 * Math.pow(EULER, r * t);
        unit = 'เธ•เธฑเธง';
        steps = [
          { title: 'เธชเธนเธ•เธฃเธเธฒเธฃเน€เธเธฃเธดเธเน€เธ•เธดเธเนเธ•เนเธเธเน€เธญเธเธเนเนเธเน€เธเธเน€เธเธตเธขเธฅ', latex: 'N_t = N_0 \\, e^{r \\cdot t}', explanation: 'เนเธ”เธข e โ 2.718 (เธเนเธฒเธเธเธ—เธตเนเธญเธญเธขเน€เธฅเธญเธฃเน)' },
          { title: 'เนเธ—เธเธเนเธฒเธ•เธฑเธงเนเธเธฃ', latex: `N_t = ${N0} \\times e^{${r} \\times ${t}}`, explanation: `Nโ€ = ${N0}, r = ${r}/เธเธต, t = ${t} เธเธต` },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `N_t = ${result.toFixed(4)}`, explanation: `เธเธณเธเธงเธเธเธฃเธฐเธเธฒเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธ•เธฑเธง` }
        ];
      } else if (target === 'N0') {
        if (t === 0) throw new Error('เน€เธงเธฅเธฒ (t) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Nt / Math.pow(EULER, r * t);
        unit = 'เธ•เธฑเธง';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธเธฃเธฐเธเธฒเธเธฃเน€เธฃเธดเนเธกเธ•เนเธ', latex: 'N_0 = \\frac{N_t}{e^{r \\cdot t}}', explanation: 'เธขเนเธฒเธข Nโ€ เนเธฅเธฐ e^(rt)' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `N_0 = ${result.toFixed(4)}`, explanation: `เธเธฃเธฐเธเธฒเธเธฃเน€เธฃเธดเนเธกเธ•เนเธเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(0)} เธ•เธฑเธง` }
        ];
      } else if (target === 'r') {
        if (t === 0) throw new Error('เน€เธงเธฅเธฒ (t) เธ•เนเธญเธเนเธกเนเน€เธเนเธ 0');
        result = Math.log(Nt / N0) / t;
        unit = '/เธเธต';
        steps = [
          { title: 'เธเธฑเธ”เธฃเธนเธเธชเธกเธเธฒเธฃเธซเธฒเธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธก', latex: 'r = \\frac{\\ln(N_t / N_0)}{t}', explanation: 'เนเธเนเธฅเธญเธเธฒเธฃเธดเธ—เธถเธกเธเธฃเธฃเธกเธเธฒเธ•เธด (ln) เธ—เธฑเนเธเธชเธญเธเธเนเธฒเธ' },
          { title: 'เธเธฅเธเธฒเธฃเธเธณเธเธงเธ“', latex: `r = ${result.toFixed(4)}\\,\\text{เธ•เนเธญเธเธต}`, explanation: `เธญเธฑเธ•เธฃเธฒเธเธฒเธฃเน€เธเธดเนเธกเธเธฃเธฐเธเธฒเธเธฃเน€เธ—เนเธฒเธเธฑเธ ${result.toFixed(4)} เธ•เนเธญเธเธต` }
        ];
      }

      return { result, unit, steps };
    }
  }
];

// ==================== COMBINED REGISTRY ====================
// BASE_FORMULAS contains the original formulas; merge with the new
// per-subject module arrays so the full curriculum (เธก.1โ€“เธก.6) is available.
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
