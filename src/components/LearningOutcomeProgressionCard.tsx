import { LearningOutcomeProgression, learningOutcomeColors } from '../types/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LearningOutcomeProgressionCardProps {
  progression: LearningOutcomeProgression;
}

export function LearningOutcomeProgressionCard({ progression }: LearningOutcomeProgressionCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Semester {progression.semester}</CardTitle>
          <div className={`px-3 py-1 rounded text-sm ${learningOutcomeColors[progression.outcome]}`}>
            {progression.semesterName}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">{progression.description}</p>
      </CardContent>
    </Card>
  );
}
