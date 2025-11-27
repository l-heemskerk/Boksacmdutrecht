import { LearningOutcome } from '../types/curriculum';
import { Search, Lightbulb, Hammer, Users, GraduationCap } from 'lucide-react';

export function getLearningOutcomeIcon(outcome: LearningOutcome, className?: string) {
  const iconProps = { className: className || 'w-4 h-4' };
  
  switch (outcome) {
    case 'context':
      return <Search {...iconProps} />;
    case 'ontwerpen':
      return <Lightbulb {...iconProps} />;
    case 'prototype':
      return <Hammer {...iconProps} />;
    case 'verbinden':
      return <Users {...iconProps} />;
    case 'reflecteren':
      return <GraduationCap {...iconProps} />;
    default:
      return null;
  }
}
