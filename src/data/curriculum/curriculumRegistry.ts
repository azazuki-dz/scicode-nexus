// @ts-nocheck

/**
 * SciCode Nexus - Curriculum Registry & Query Service
 * Aggregates all subjects (Math, Science, Tech/IS, Social, History, Economics)
 * and provides smart filtering by grade level (เธก.1 - เธก.6) and search keywords.
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
  { id: 'all', label: 'เธ—เธธเธเธฃเธฐเธ”เธฑเธเธเธฑเนเธ (เธก.1 - เธก.6)' },
  { id: 'm1', label: 'เธก.1' },
  { id: 'm2', label: 'เธก.2' },
  { id: 'm3', label: 'เธก.3' },
  { id: 'm4', label: 'เธก.4' },
  { id: 'm5', label: 'เธก.5' },
  { id: 'm6', label: 'เธก.6' }
];

export const CURRICULUM_SUBJECTS = [
  { id: 'all', name: 'เธ—เธธเธเธเธฅเธธเนเธกเธชเธฒเธฃเธฐเธงเธดเธเธฒ', icon: 'layers', color: 'indigo' },
  { id: 'thai', name: 'เธ เธฒเธฉเธฒเนเธ—เธข', icon: 'book', color: 'red' },
  { id: 'english', name: 'เธ เธฒเธฉเธฒเธญเธฑเธเธเธคเธฉ', icon: 'globe', color: 'blue' },
  { id: 'math', name: 'เธเธ“เธดเธ•เธจเธฒเธชเธ•เธฃเน', icon: 'plus-circle', color: 'cyan' },
  { id: 'science', name: 'เธงเธดเธ—เธขเธฒเธจเธฒเธชเธ•เธฃเน (เธเธดเธชเธดเธเธชเน เน€เธเธกเธต เธเธตเธงเธฐ)', icon: 'flask', color: 'emerald' },
  { id: 'earth', name: 'เนเธฅเธเนเธฅเธฐเธ”เธฒเธฃเธฒเธจเธฒเธชเธ•เธฃเน', icon: 'compass', color: 'teal' },
  { id: 'tech', name: 'เธงเธดเธ—เธขเธฒเธเธฒเธฃเธเธณเธเธงเธ“ & IS', icon: 'code', color: 'purple' },
  { id: 'social', name: 'เธชเธฑเธเธเธกเธจเธถเธเธฉเธฒ & เธ เธนเธกเธดเธจเธฒเธชเธ•เธฃเน', icon: 'map', color: 'sky' },
  { id: 'history', name: 'เธเธฃเธฐเธงเธฑเธ•เธดเธจเธฒเธชเธ•เธฃเนเนเธ—เธข-เธชเธฒเธเธฅ', icon: 'bookmark', color: 'amber' },
  { id: 'economics', name: 'เน€เธจเธฃเธฉเธเธจเธฒเธชเธ•เธฃเน', icon: 'dollar-sign', color: 'rose' },
  { id: 'health', name: 'เธชเธธเธเธจเธถเธเธฉเธฒ & เธเธฅเธจเธถเธเธฉเธฒ', icon: 'activity', color: 'orange' },
  { id: 'arts', name: 'เธจเธดเธฅเธเธฐ & เธ”เธเธ•เธฃเธต', icon: 'feather', color: 'fuchsia' },
  { id: 'career', name: 'เธเธฒเธฃเธเธฒเธเธญเธฒเธเธตเธ & เธเธธเธฃเธเธดเธ', icon: 'briefcase', color: 'lime' }
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
      if (item.gradeLabel && item.gradeLabel.includes(grade.toUpperCase().replace('M', 'เธก.'))) return true;
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
