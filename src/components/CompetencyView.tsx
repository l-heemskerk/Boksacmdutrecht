import { Activity, CompetencyType } from '../types/curriculum';
import { ActivityCard } from './ActivityCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CompetencyViewProps {
  activities: Activity[];
  selectedOutcomes: string[];
  searchQuery: string;
}

export function CompetencyView({ activities, selectedOutcomes, searchQuery }: CompetencyViewProps) {
  const competencyTypes: CompetencyType[] = ['kennis', 'vaardigheden', 'houding'];

  const getActivitiesForCompetency = (competencyType: CompetencyType) => {
    let filtered = activities.filter(activity =>
      activity.competencies.some(comp => comp.type === competencyType)
    );

    if (selectedOutcomes.length > 0) {
      filtered = filtered.filter(activity =>
        activity.learningOutcomes.some(outcome => selectedOutcomes.includes(outcome))
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(activity => 
        activity.name.toLowerCase().includes(query) ||
        activity.semester.toString().includes(query)
      );
    }

    return filtered.sort((a, b) => a.semester - b.semester);
  };

  const competencyLabels: Record<CompetencyType, string> = {
    kennis: 'Kennis',
    vaardigheden: 'Vaardigheden',
    houding: 'Houding'
  };

  return (
    <Tabs defaultValue="kennis" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {competencyTypes.map((type) => (
          <TabsTrigger key={type} value={type}>
            {competencyLabels[type]}
          </TabsTrigger>
        ))}
      </TabsList>

      {competencyTypes.map((type) => {
        const competencyActivities = getActivitiesForCompetency(type);

        return (
          <TabsContent key={type} value={type} className="mt-6">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-800">
                <h2>{competencyLabels[type]}</h2>
                <span>({competencyActivities.length} activiteiten)</span>
              </div>
              <p className="mt-2 text-gray-600">
                Opbouw van {competencyLabels[type].toLowerCase()} door de semesters heen
              </p>
            </div>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(semester => {
                const semesterActivities = competencyActivities.filter(a => a.semester === semester);
                if (semesterActivities.length === 0) return null;

                return (
                  <div key={semester}>
                    <h3 className="mb-3 text-gray-600">
                      Semester {semester}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {semesterActivities.map((activity) => (
                        <ActivityCard
                          key={activity.id}
                          activity={activity}
                          highlightCompetency={type}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
