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
  semester: number;
  learningOutcomes: LearningOutcome[];
  competencies: Competency[];
  learningOutcomeDetails?: LearningOutcomeDetail[];
}

export interface Semester {
  number: number;
  name: string;
  year: number;
  activities: Activity[];
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
  prototype: 'Prototype',
  verbinden: 'Verbinden',
  reflecteren: 'Reflecteren'
};

export const learningOutcomeColors: Record<LearningOutcome, string> = {
  context: 'bg-blue-100 text-blue-800 border-blue-200',
  ontwerpen: 'bg-purple-100 text-purple-800 border-purple-200',
  prototype: 'bg-green-100 text-green-800 border-green-200',
  verbinden: 'bg-orange-100 text-orange-800 border-orange-200',
  reflecteren: 'bg-pink-100 text-pink-800 border-pink-200'
};
