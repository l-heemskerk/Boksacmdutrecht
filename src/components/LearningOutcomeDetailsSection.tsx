import { LearningOutcome, learningOutcomeColors, learningOutcomeLabels } from '../types/curriculum';
import { getDetailsForOutcome } from '../data/learningOutcomeKnowledgeSkills';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BookOpen, Zap } from 'lucide-react';

interface LearningOutcomeDetailsSectionProps {
  outcome: LearningOutcome;
}

export function LearningOutcomeDetailsSection({ outcome }: LearningOutcomeDetailsSectionProps) {
  const details = getDetailsForOutcome(outcome);
  
  if (!details) return null;

  return (
    <Card className={`border-2 ${learningOutcomeColors[outcome]}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>{learningOutcomeLabels[outcome]}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Kennis */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="text-gray-900">Kennis</h3>
          </div>
          <ul className="space-y-2">
            {details.knowledge.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vaardigheden */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-orange-600" />
            <h3 className="text-gray-900">Vaardigheden</h3>
          </div>
          <ul className="space-y-2">
            {details.skills.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
