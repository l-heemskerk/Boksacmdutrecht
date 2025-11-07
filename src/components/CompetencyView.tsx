import { useState } from 'react';
import { Activity, CompetencyType, LearningOutcome, learningOutcomeLabels, learningOutcomeColors } from '../types/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { getHoudingBySemester } from '../data/houdingPerLeeruitkomst';
import { semesterLevels } from '../data/semesterLevels';
import { Brain, Zap, Heart, ChevronDown, Info } from 'lucide-react';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CompetencyViewProps {
  activities: Activity[];
  searchQuery: string;
}

const semesterNames: Record<number, string> = {
  1: 'BASE',
  2: 'CHALLENGE',
  3: 'EXPLORE',
  4: 'CONNECT',
  5: 'JAAR 3',
  6: 'JAAR 3',
  7: 'JAAR 4',
  8: 'JAAR 4'
};

const semesterYears: Record<number, number> = {
  1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4
};

export function CompetencyView({ activities, searchQuery }: CompetencyViewProps) {
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);

  const competencyLabels: Record<CompetencyType, string> = {
    kennis: 'Kennis',
    vaardigheden: 'Vaardigheden',
    houding: 'Houding'
  };

  const toggleSemester = (semester: number) => {
    setOpenSemesters(prev => 
      prev.includes(semester)
        ? prev.filter(s => s !== semester)
        : [...prev, semester]
    );
  };

  // Filter activities
  const filterActivities = () => {
    let filtered = activities;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(activity => 
        activity.name.toLowerCase().includes(query) ||
        activity.semester.toString().includes(query)
      );
    }

    return filtered.sort((a, b) => a.semester - b.semester);
  };

  const filteredActivities = filterActivities();

  const renderKennisContent = () => (
    <TabsContent value="kennis" className="mt-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(semester => {
        const semesterActivities = filteredActivities.filter(a => a.semester === semester);
        
        const activitiesWithItems = semesterActivities.filter(activity => {
          if (!activity.learningOutcomeDetails) return false;
          return activity.learningOutcomeDetails.some(detail => 
            detail.kennis && detail.kennis.length > 0
          );
        });

        if (activitiesWithItems.length === 0) return null;

        const isOpen = openSemesters.includes(semester);

        return (
          <Card key={semester} className="overflow-hidden border-2 mb-4">
            <div 
              onClick={() => toggleSemester(semester)}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <ChevronDown 
                      className={`w-6 h-6 text-blue-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <div>
                      <CardTitle className="text-blue-900">
                        Semester {semester}: {semesterNames[semester]}
                      </CardTitle>
                      <p className="text-blue-700 mt-1">{semesterLevels[semester]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      Jaar {semesterYears[semester]}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      {activitiesWithItems.length} {activitiesWithItems.length === 1 ? 'activiteit' : 'activiteiten'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </div>

            {isOpen && (
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activitiesWithItems.map((activity) => {
                    const items: string[] = [];
                    
                    if (activity.learningOutcomeDetails) {
                      activity.learningOutcomeDetails.forEach(detail => {
                        if (detail.kennis) {
                          items.push(...detail.kennis);
                        }
                      });
                    }

                    if (items.length === 0) return null;

                    return (
                      <Card key={activity.id} className="h-full border-l-4 border-l-blue-500">
                        <CardHeader>
                          <div className="flex items-center justify-between gap-2">
                            <CardTitle className="flex-1">{activity.name}</CardTitle>
                            <Badge variant="outline" className="shrink-0 bg-white">
                              {activity.duration}
                            </Badge>
                          </div>
                          {activity.description && (
                            <p className="text-gray-600 mt-2">{activity.description}</p>
                          )}
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}
    </TabsContent>
  );

  const renderVaardighedenContent = () => (
    <TabsContent value="vaardigheden" className="mt-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(semester => {
        const semesterActivities = filteredActivities.filter(a => a.semester === semester);
        
        const activitiesWithItems = semesterActivities.filter(activity => {
          if (!activity.learningOutcomeDetails) return false;
          return activity.learningOutcomeDetails.some(detail => 
            detail.vaardigheden && detail.vaardigheden.length > 0
          );
        });

        if (activitiesWithItems.length === 0) return null;

        const isOpen = openSemesters.includes(semester);

        return (
          <Card key={semester} className="overflow-hidden border-2 mb-4">
            <div 
              onClick={() => toggleSemester(semester)}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b-2 border-orange-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <ChevronDown 
                      className={`w-6 h-6 text-orange-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <div>
                      <CardTitle className="text-orange-900">
                        Semester {semester}: {semesterNames[semester]}
                      </CardTitle>
                      <p className="text-orange-700 mt-1">{semesterLevels[semester]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-orange-600 text-white">
                      Jaar {semesterYears[semester]}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      {activitiesWithItems.length} {activitiesWithItems.length === 1 ? 'activiteit' : 'activiteiten'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </div>

            {isOpen && (
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activitiesWithItems.map((activity) => {
                    const items: string[] = [];
                    
                    if (activity.learningOutcomeDetails) {
                      activity.learningOutcomeDetails.forEach(detail => {
                        if (detail.vaardigheden) {
                          items.push(...detail.vaardigheden);
                        }
                      });
                    }

                    if (items.length === 0) return null;

                    return (
                      <Card key={activity.id} className="h-full border-l-4 border-l-orange-500">
                        <CardHeader>
                          <div className="flex items-center justify-between gap-2">
                            <CardTitle className="flex-1">{activity.name}</CardTitle>
                            <Badge variant="outline" className="shrink-0 bg-white">
                              {activity.duration}
                            </Badge>
                          </div>
                          {activity.description && (
                            <p className="text-gray-600 mt-2">{activity.description}</p>
                          )}
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-orange-600 mt-1">•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}
    </TabsContent>
  );

  const renderHoudingContent = () => (
    <TabsContent value="houding" className="mt-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(semester => {
        const houdingData = getHoudingBySemester(semester);
        if (houdingData.length === 0) return null;

        const isOpen = openSemesters.includes(semester);

        return (
          <Card key={semester} className="overflow-hidden border-2 mb-4">
            <div 
              onClick={() => toggleSemester(semester)}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <CardHeader className="bg-gradient-to-r from-pink-50 to-white border-b-2 border-pink-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <ChevronDown 
                      className={`w-6 h-6 text-pink-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <div>
                      <CardTitle className="text-pink-900">
                        Semester {semester}: {semesterNames[semester]}
                      </CardTitle>
                      <p className="text-pink-700 mt-1">{semesterLevels[semester]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-pink-600 text-white">
                      Jaar {semesterYears[semester]}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      {houdingData.length} {houdingData.length === 1 ? 'leeruitkomst' : 'leeruitkomsten'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </div>

            {isOpen && (
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {houdingData.map((item) => (
                    <Card key={`${semester}-${item.outcome}`} className={`border-l-4 ${learningOutcomeColors[item.outcome]}`}>
                      <CardHeader>
                        <CardTitle>{learningOutcomeLabels[item.outcome]}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}
    </TabsContent>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border-2 border-blue-600 p-6">
        <h2 className="text-gray-900 mb-2">Competenties overzicht</h2>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-gray-600">
            Bekijk hoe kennis, vaardigheden en houding zich ontwikkelen door de semesters heen.
          </p>
        </div>
      </div>

      <Tabs defaultValue="kennis" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 h-auto p-1 bg-white border-2 border-gray-200">
          <TabsTrigger 
            value="kennis"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 data-[state=active]:border-blue-200"
          >
            <Brain className="w-4 h-4" />
            Kennis
          </TabsTrigger>
          <TabsTrigger 
            value="vaardigheden"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800 data-[state=active]:border-orange-200"
          >
            <Zap className="w-4 h-4" />
            Vaardigheden
          </TabsTrigger>
          <TabsTrigger 
            value="houding"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800 data-[state=active]:border-pink-200"
          >
            <Heart className="w-4 h-4" />
            Houding
          </TabsTrigger>
        </TabsList>

        {renderKennisContent()}
        {renderVaardighedenContent()}
        {renderHoudingContent()}
      </Tabs>
    </div>
  );
}
