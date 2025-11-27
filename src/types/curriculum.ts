export type LearningOutcome = 'context' | 'ontwerpen' | 'prototype' | 'verbinden' | 'reflecteren';

export type CompetencyType = 'kennis' | 'vaardigheden' | 'houding';

export interface Competency {
  type: CompetencyType;
  description: string;
}

export interface LearningOutcomeDetail {
  outcome: LearningOutcome;
  kennis: string[];
  vaardigheden: string[];
  houding: string[];
}

export interface Activity {
  id: string;
  name: string;
  duration: string;
  description?: string;
  relations?: string;
  semester: number;
  learningOutcomes: LearningOutcome[];
  competencies: Competency[];
  learningOutcomeDetails?: LearningOutcomeDetail[];
  excludeCompetenciesSection?: boolean;
}

export interface Specialization {
  id: string;
  name: string;
  description?: string;
  activities: Activity[];
}

export interface Semester {
  number: number;
  name: string;
  description?: string;
  year: number;
  level: string;
  activities: Activity[];
  specializations?: Specialization[];
  professionalProducts?: ProfessionalProduct[];
}

export interface ProfessionalProduct {
  outcome: LearningOutcome;
  description: string;
}

export interface LearningOutcomeProgression {
  semester: number;
  semesterName: string;
  outcome: LearningOutcome;
  description: string;
  knowledge?: string[];
  skills?: string[];
}

export const learningOutcomeLabels: Record<LearningOutcome, string> = {
  context: 'Context',
  ontwerpen: 'Ontwerpen',
  prototype: 'Prototype & testen',
  verbinden: 'Verbinden',
  reflecteren: 'Leren & reflecteren'
};

export const learningOutcomeColors: Record<LearningOutcome, string> = {
  context: 'bg-blue-100 text-blue-800 border-blue-200',
  ontwerpen: 'bg-purple-100 text-purple-800 border-purple-200',
  prototype: 'bg-green-100 text-green-800 border-green-200',
  verbinden: 'bg-orange-100 text-orange-800 border-orange-200',
  reflecteren: 'bg-pink-100 text-pink-800 border-pink-200'
};

export const semesterColors: Record<number, { bg: string; text: string; border: string }> = {
  1: { bg: 'bg-sky-50', text: 'text-sky-900', border: 'border-sky-300' },
  2: { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-300' },
  3: { bg: 'bg-indigo-50', text: 'text-indigo-900', border: 'border-indigo-300' },
  4: { bg: 'bg-violet-50', text: 'text-violet-900', border: 'border-violet-300' },
  5: { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-300' },
  6: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-900', border: 'border-fuchsia-300' },
  7: { bg: 'bg-pink-50', text: 'text-pink-900', border: 'border-pink-300' }
};