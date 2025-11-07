import { Activity, LearningOutcome, learningOutcomeLabels, learningOutcomeColors } from '../types/curriculum';
import { ActivityCard } from './ActivityCard';
import { LearningOutcomeProgressionCard } from './LearningOutcomeProgressionCard';
import { LearningOutcomeDetailsSection } from './LearningOutcomeDetailsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { getProgressionsByOutcome } from '../data/learningOutcomeProgressions';
import { Separator } from './ui/separator';

interface LearningOutcomeViewProps {
  activities: Activity[];
  searchQuery: string;
}

export function LearningOutcomeView({ activities, searchQuery }: LearningOutcomeViewProps) {
  const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

  const getActivitiesForOutcome = (outcome: LearningOutcome) => {
    let filtered = activities.filter(activity => activity.learningOutcomes.includes(outcome));

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(activity => 
        activity.name.toLowerCase().includes(query) ||
        activity.semester.toString().includes(query)
      );
    }

    return filtered.sort((a, b) => a.semester - b.semester);
  };

  return (
    <Tabs defaultValue="context" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        {outcomes.map((outcome) => (
          <TabsTrigger key={outcome} value={outcome}>
            {learningOutcomeLabels[outcome]}
          </TabsTrigger>
        ))}
      </TabsList>

      {outcomes.map((outcome) => {
        const outcomActivities = getActivitiesForOutcome(outcome);
        const progressions = getProgressionsByOutcome(outcome);

        return (
          <TabsContent key={outcome} value={outcome} className="mt-6">
            <div className="mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${learningOutcomeColors[outcome]}`}>
                <h2>{learningOutcomeLabels[outcome]}</h2>
              </div>
              <p className="text-gray-600 mt-2">Ontwikkeling van deze leeruitkomst door de semesters heen</p>
            </div>

            {/* Kennis en Vaardigheden */}
            <div className="mb-8">
              <h3 className="mb-4 text-gray-900">Kennis en Vaardigheden</h3>
              <LearningOutcomeDetailsSection outcome={outcome} />
            </div>

            <Separator className="my-8" />

            {/* Leeruitkomst progressie */}
            <div className="mb-8">
              <h3 className="mb-4 text-gray-900">Opbouw per semester</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {progressions.map((progression) => (
                  <LearningOutcomeProgressionCard
                    key={`${progression.semester}-${progression.outcome}`}
                    progression={progression}
                  />
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Onderwijsactiviteiten */}
            <div>
              <h3 className="mb-4 text-gray-900">
                Onderwijsactiviteiten ({outcomActivities.length})
              </h3>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(semester => {
                  const semesterActivities = outcomActivities.filter(a => a.semester === semester);
                  if (semesterActivities.length === 0) return null;

                  return (
                    <div key={semester}>
                      <h4 className="mb-3 text-gray-600">
                        Semester {semester}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {semesterActivities.map((activity) => (
                          <ActivityCard
                            key={activity.id}
                            activity={activity}
                            highlightOutcome={outcome}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
