// Dummy competenties data - tijdelijke placeholder totdat we echte data hebben
import { LearningOutcome } from '../types/curriculum';
import { SpeelveldOutcomeData } from './speelvelden';

const dummyKennis = [
  { text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' },
  { text: 'Sed do eiusmod tempor incididunt ut labore et dolore' },
  { text: 'Duis aute irure dolor in reprehenderit in voluptate' }
];

const dummyVaardigheden = [
  { text: 'Ut enim ad minim veniam quis nostrud exercitation' },
  { text: 'Excepteur sint occaecat cupidatat non proident' },
  { text: 'Sunt in culpa qui officia deserunt mollit anim' }
];

export const getDummyOutcomeData = (): SpeelveldOutcomeData => ({
  kennis: dummyKennis,
  vaardigheden: dummyVaardigheden
});

export const getDummyCompetenciesForSemester = () => {
  const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
  const result: Record<string, SpeelveldOutcomeData> = {};
  
  outcomes.forEach(outcome => {
    result[outcome] = getDummyOutcomeData();
  });
  
  return result;
};
