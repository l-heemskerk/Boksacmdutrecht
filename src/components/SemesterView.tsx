import { Semester } from '../types/curriculum';
import { ActivityCard } from './ActivityCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface SemesterViewProps {
  semesters: Semester[];
  selectedOutcomes: string[];
  searchQuery: string;
}

export function SemesterView({ semesters, selectedOutcomes, searchQuery }: SemesterViewProps) {
  const filterActivities = (semester: Semester) => {
    let filtered = semester.activities;

    if (selectedOutcomes.length > 0) {
      filtered = filtered.filter(activity =>
        activity.learningOutcomes.some(outcome => selectedOutcomes.includes(outcome))
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(activity => 
        activity.name.toLowerCase().includes(query) ||
        semester.name.toLowerCase().includes(query) ||
        semester.number.toString().includes(query)
      );
    }

    return filtered;
  };

  const filteredSemesters = semesters.filter(semester => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return semester.name.toLowerCase().includes(query) || 
           semester.number.toString().includes(query) ||
           semester.activities.some(a => a.name.toLowerCase().includes(query));
  });

  return (
    <Accordion type="multiple" defaultValue={['semester-1', 'semester-2']} className="space-y-2">
      {filteredSemesters.map((semester) => {
        const filteredActivities = filterActivities(semester);
        if (filteredActivities.length === 0) return null;

        return (
          <AccordionItem key={semester.number} value={`semester-${semester.number}`} className="border rounded-lg px-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <span>
                  Semester {semester.number}: {semester.name}
                </span>
                <span className="text-gray-500">
                  (Jaar {semester.year})
                </span>
                <Badge variant="secondary" className="ml-2">
                  {filteredActivities.length} {filteredActivities.length === 1 ? 'activiteit' : 'activiteiten'}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {filteredActivities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

import { Badge } from './ui/badge';
