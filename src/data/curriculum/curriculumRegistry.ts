// @ts-nocheck

/**
 * SciCode Nexus - Curriculum Registry & Query Service
 * Aggregates all subjects (Math, Science, Tech/IS, Social, History, Economics)
 * and provides smart filtering by grade level (ม.1 - ม.6) and search keywords.
 */

import { MATH_CURRICULUM } from './mathCurriculum';
import { SCIENCE_CURRICULUM } from './scienceCurriculum';
import { TECH_IS_CURRICULUM } from './techIsCurriculum';
import { SOCIAL_CURRICULUM } from './socialCurriculum';
import { HISTORY_CURRICULUM } from './historyCurriculum';
import { ECONOMICS_CURRICULUM } from './economicsCurriculum';
import { THAI_CURRICULUM } from './thaiCurriculum';
import { ENGLISH_CURRICULUM } from './englishCurriculum';
import { EARTH_ASTRONOMY_CURRICULUM } from './earthAstronomyCurriculum';
import { HEALTH_PE_CURRICULUM } from './healthPeCurriculum';
import { ARTS_MUSIC_CURRICULUM } from './artsMusicCurriculum';
import { CAREER_CURRICULUM } from './careerCurriculum';

export const CURRICULUM_GRADES = [
  { id: 'all', label: 'ทุกระดับชั้น (ม.1 - ม.6)' },
  { id: 'm1', label: 'ม.1' },
  { id: 'm2', label: 'ม.2' },
  { id: 'm3', label: 'ม.3' },
  { id: 'm4', label: 'ม.4' },
  { id: 'm5', label: 'ม.5' },
  { id: 'm6', label: 'ม.6' }
];

export const CURRICULUM_SUBJECTS = [
  { id: 'all', name: 'ทุกกลุ่มสาระวิชา', icon: 'layers', color: 'indigo' },
  { id: 'thai', name: 'ภาษาไทย', icon: 'book', color: 'red' },
  { id: 'english', name: 'ภาษาอังกฤษ', icon: 'globe', color: 'blue' },
  { id: 'math', name: 'คณิตศาสตร์', icon: 'plus-circle', color: 'cyan' },
  { id: 'science', name: 'วิทยาศาสตร์ (ฟิสิกส์ เคมี ชีวะ)', icon: 'flask', color: 'emerald' },
  { id: 'earth', name: 'โลกและดาราศาสตร์', icon: 'compass', color: 'teal' },
  { id: 'tech', name: 'วิทยาการคำนวณ & IS', icon: 'code', color: 'purple' },
  { id: 'social', name: 'สังคมศึกษา & ภูมิศาสตร์', icon: 'map', color: 'sky' },
  { id: 'history', name: 'ประวัติศาสตร์ไทย-สากล', icon: 'bookmark', color: 'amber' },
  { id: 'economics', name: 'เศรษฐศาสตร์', icon: 'dollar-sign', color: 'rose' },
  { id: 'health', name: 'สุขศึกษา & พลศึกษา', icon: 'activity', color: 'orange' },
  { id: 'arts', name: 'ศิลปะ & ดนตรี', icon: 'feather', color: 'fuchsia' },
  { id: 'career', name: 'การงานอาชีพ & ธุรกิจ', icon: 'briefcase', color: 'lime' }
];

export const ALL_CURRICULUM_DATA = [
  ...MATH_CURRICULUM,
  ...SCIENCE_CURRICULUM,
  ...TECH_IS_CURRICULUM,
  ...SOCIAL_CURRICULUM,
  ...HISTORY_CURRICULUM,
  ...ECONOMICS_CURRICULUM,
  ...THAI_CURRICULUM,
  ...ENGLISH_CURRICULUM,
  ...EARTH_ASTRONOMY_CURRICULUM,
  ...HEALTH_PE_CURRICULUM,
  ...ARTS_MUSIC_CURRICULUM,
  ...CAREER_CURRICULUM
];

/**
 * Filter curriculum topics by grade, subject, and search query
 */
export function queryCurriculum(grade = 'all', subject = 'all', searchQuery = '') {
  let list = ALL_CURRICULUM_DATA;

  if (grade !== 'all') {
    list = list.filter(item => {
      if (item.grade === grade) return true;
      if (item.grade === 'm1' && (grade === 'm1' || grade === 'm2' || grade === 'm3')) return true; // shared lower secondary
      if (item.grade === 'm4' && (grade === 'm4' || grade === 'm5' || grade === 'm6')) return true; // shared upper secondary
      if (item.gradeLabel && item.gradeLabel.includes(grade.toUpperCase().replace('M', 'ม.'))) return true;
      return false;
    });
  }

  if (subject !== 'all') {
    list = list.filter(item => item.subject === subject);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.chapter.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.subjectLabel.toLowerCase().includes(q) ||
      item.keyConcepts.some(k => k.toLowerCase().includes(q))
    );
  }

  return list;
}
