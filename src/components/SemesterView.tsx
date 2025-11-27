import { useState } from 'react';
import { Semester, learningOutcomeLabels, learningOutcomeColors, CompetencyType, Activity, semesterColors } from '../types/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Brain, Zap, Heart, Package, ChevronDown, X, Link2 } from 'lucide-react';
import { getLearningOutcomeIcon } from '../utils/learningOutcomeIcons';
import { renderWithCMDMethodsLinks } from '../utils/cmdMethodsLinks';

interface SemesterViewProps {
  semesters: Semester[];
  selectedOutcomes: string[];
  searchQuery: string;
  selectedCompetencies: CompetencyType[];
  onOutcomeChange: (outcomes: string[]) => void;
  onSearchChange: (query: string) => void;
  onCompetencyChange: (competencies: CompetencyType[]) => void;
}

export function SemesterView({ 
  semesters, 
  selectedOutcomes, 
  searchQuery, 
  selectedCompetencies,
  onOutcomeChange,
  onSearchChange,
  onCompetencyChange
}: SemesterViewProps) {
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const toggleSemester = (semesterNumber: number) => {
    setOpenSemesters(prev => 
      prev.includes(semesterNumber) 
        ? prev.filter(n => n !== semesterNumber)
        : [...prev, semesterNumber]
    );
  };

  const filterSemester = (semester: Semester) => {
    // Filter by search query
    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      const matchesSemester = semester.name.toLowerCase().includes(query) || 
                             semester.number.toString().includes(query) ||
                             semester.level.toLowerCase().includes(query);
      const matchesActivity = semester.activities.some(a => 
        a.name.toLowerCase().includes(query) ||
        (a.description && a.description.toLowerCase().includes(query))
      );
      if (!matchesSemester && !matchesActivity) return false;
    }

    return true;
  };

  const filterActivities = (semester: Semester) => {
    let filtered = semester.activities;

    if (selectedOutcomes.length > 0) {
      filtered = filtered.filter(activity =>
        activity.learningOutcomes.some(outcome => selectedOutcomes.includes(outcome))
      );
    }

    if (selectedCompetencies.length > 0) {
      filtered = filtered.filter(activity => {
        // Check if activity has learningOutcomeDetails with the selected competencies
        if (activity.learningOutcomeDetails) {
          return activity.learningOutcomeDetails.some(detail => 
            selectedCompetencies.some(comp => {
              const competencyData = detail[comp];
              return competencyData && competencyData.length > 0;
            })
          );
        }
        // Fallback to old competencies format
        if (activity.competencies) {
          return activity.competencies.some(comp => 
            selectedCompetencies.includes(comp.type)
          );
        }
        return false;
      });
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(activity => 
        activity.name.toLowerCase().includes(query) ||
        (activity.description && activity.description.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const filteredSemesters = semesters.filter(filterSemester);

  // Helper function to render activity card
  const renderActivityCard = (activity: Activity, semester: Semester) => {
    return (
      <Card key={activity.id} className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
        <CardHeader className="bg-gray-50">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <CardTitle>{activity.name}</CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {semester.level}
                </Badge>
              </div>
              {activity.description && (
                <p className="text-gray-600 mt-2">{activity.description}</p>
              )}
              {/* Relations to other activities */}
              {activity.relations && (
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Link2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-blue-900 text-sm">{activity.relations}</span>
                    </div>
                  </div>
                </div>
              )}
              {/* Workshopweek special message */}
              {activity.excludeCompetenciesSection && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-900 text-sm">
                    <span className="font-semibold">Let op:</span> Er kunnen geen specifieke Kennis, Houding en Vaardigheden aan deze activiteit gekoppeld worden omdat dit afhangt van de gekozen workshops.
                  </p>
                </div>
              )}
            </div>
            <Badge variant="outline" className="shrink-0 bg-white">
              {activity.duration}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="multiple" className="w-full">
            {/* Competenties per leeruitkomst */}
            {!activity.excludeCompetenciesSection && activity.learningOutcomeDetails && activity.learningOutcomeDetails.length > 0 && (
              <AccordionItem value="competencies" className="border-none">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span>Competenties per leeruitkomst</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-6">
                    {activity.learningOutcomeDetails
                      .filter(detail => selectedOutcomes.length === 0 || selectedOutcomes.includes(detail.outcome))
                      .map((detail, idx) => (
                      <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                        {/* Leeruitkomst header */}
                        <div className={`px-4 py-3 ${learningOutcomeColors[detail.outcome]} border-b-2 border-gray-200`}>
                          <div className="flex items-center gap-2">
                            {getLearningOutcomeIcon(detail.outcome, 'w-5 h-5 text-gray-900')}
                            <h4 className="text-gray-900">{learningOutcomeLabels[detail.outcome]}</h4>
                          </div>
                        </div>
                        
                        {/* Competenties grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
                          {/* Kennis */}
                          {detail.kennis && detail.kennis.length > 0 && (selectedCompetencies.length === 0 || selectedCompetencies.includes('kennis')) && (
                            <div className="p-4 bg-white">
                              <div className="flex items-center gap-2 mb-3">
                                <Brain className="w-4 h-4 text-blue-600" />
                                <h5 className="text-blue-900">Kennis</h5>
                              </div>
                              <ul className="space-y-2">
                                {detail.kennis.map((item, i) => (
                                  <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>{renderWithCMDMethodsLinks(item)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Vaardigheden */}
                          {detail.vaardigheden && detail.vaardigheden.length > 0 && (selectedCompetencies.length === 0 || selectedCompetencies.includes('vaardigheden')) && (
                            <div className="p-4 bg-white">
                              <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-4 h-4 text-orange-600" />
                                <h5 className="text-orange-900">Vaardigheden</h5>
                              </div>
                              <ul className="space-y-2">
                                {detail.vaardigheden.map((item, i) => (
                                  <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                                    <span className="text-orange-600 mt-0.5">•</span>
                                    <span>{renderWithCMDMethodsLinks(item)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Houding */}
                          {detail.houding && detail.houding.length > 0 && (selectedCompetencies.length === 0 || selectedCompetencies.includes('houding')) && (
                            <div className="p-4 bg-white">
                              <div className="flex items-center gap-2 mb-3">
                                <Heart className="w-4 h-4 text-pink-600" />
                                <h5 className="text-pink-900">Houding</h5>
                              </div>
                              <ul className="space-y-2">
                                {detail.houding.map((item, i) => (
                                  <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                                    <span className="text-pink-600 mt-0.5">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Beroepsproducten */}
            {activity.duration !== '1 week' && semester.professionalProducts && semester.professionalProducts.length > 0 && (
              <AccordionItem value="products" className="border-none">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded">
                      <Package className="w-4 h-4 text-green-600" />
                      <span>Beroepsproducten</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {semester.professionalProducts
                      .filter(product => 
                        selectedOutcomes.length === 0 || selectedOutcomes.includes(product.outcome)
                      )
                      .map((product, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                        <Badge 
                          variant="outline" 
                          className={`${learningOutcomeColors[product.outcome]} shrink-0 flex items-center gap-1.5`}
                        >
                          {getLearningOutcomeIcon(product.outcome, 'w-3.5 h-3.5')}
                          {learningOutcomeLabels[product.outcome]}
                        </Badge>
                        <p className="text-gray-700 flex-1">{renderWithCMDMethodsLinks(product.description)}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Korte Introductie met sluit-optie */}
      {showIntro && (
        <div className="bg-white rounded-lg border-2 border-blue-600 p-6 relative">
          <button
            onClick={() => setShowIntro(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Sluit introductie"
          >
            <X className="w-5 h-5" />
          </button>
          <p className="text-gray-700 pr-8">
            De BOKSA (Body of Knowledge, Skills and Attitudes) vormt het fundament van het CMD-onderwijs in Utrecht 
            en operationaliseert de visie, leeruitkomsten en onderzoekend vermogen binnen het ontwerpgericht curriculum.
          </p>
        </div>
      )}

      {filteredSemesters.map((semester) => {
        const filteredActivities = filterActivities(semester);
        const hasSpecializations = semester.specializations && semester.specializations.length > 0;
        
        // For semesters with specializations, check if any specialization has matching activities
        if (hasSpecializations) {
          const hasMatchingSpecialization = semester.specializations!.some(spec => {
            const specFiltered = spec.activities.filter(activity => {
              // Apply same filters
              let matches = true;
              
              if (selectedOutcomes.length > 0) {
                matches = matches && activity.learningOutcomes.some(outcome => selectedOutcomes.includes(outcome));
              }
              
              if (selectedCompetencies.length > 0) {
                if (activity.learningOutcomeDetails) {
                  matches = matches && activity.learningOutcomeDetails.some(detail => 
                    selectedCompetencies.some(comp => {
                      const competencyData = detail[comp];
                      return competencyData && competencyData.length > 0;
                    })
                  );
                }
              }
              
              if (searchQuery && searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase().trim();
                matches = matches && (
                  activity.name.toLowerCase().includes(query) ||
                  (activity.description && activity.description.toLowerCase().includes(query))
                );
              }
              
              return matches;
            });
            return specFiltered.length > 0;
          });
          
          if (!hasMatchingSpecialization) return null;
        } else if (filteredActivities.length === 0) {
          return null;
        }
        
        const isOpen = openSemesters.includes(semester.number);
        const semColor = semesterColors[semester.number] || semesterColors[1];

        return (
          <Card key={semester.number} className={`overflow-hidden border-2 ${semColor.border} shadow-sm hover:shadow-md transition-all`}>
            {/* Semester Header - Clickable */}
            <div 
              onClick={() => toggleSemester(semester.number)}
              className="cursor-pointer hover:opacity-95 transition-opacity"
            >
              <CardHeader className={`${semColor.bg} border-b-2 ${semColor.border}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <ChevronDown 
                      className={`w-6 h-6 ${semColor.text} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <Badge variant="secondary" className={`${semColor.text} bg-white border-2 ${semColor.border} shrink-0`}>
                      Jaar {semester.year}
                    </Badge>
                    <div>
                      <CardTitle className={semColor.text}>
                        {semester.number >= 5 ? semester.name : `Semester ${semester.number}: ${semester.name}`}
                      </CardTitle>
                      {semester.description && (
                        <p className="text-gray-700 mt-1">{semester.description}</p>
                      )}
                      {!semester.description && (
                        <p className="text-gray-700 mt-1">{semester.level}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">
                      {semester.number === 5 
                        ? 'Praktijk' 
                        : semester.number === 6 
                          ? '3 specialisaties' 
                          : semester.number === 7
                            ? 'Afstuderen'
                            : `${filteredActivities.length} ${filteredActivities.length === 1 ? 'activiteit' : 'activiteiten'}`}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </div>

            {/* Semester Content - Collapsible */}
            {isOpen && (
              <CardContent className="p-6">
                {hasSpecializations ? (
                  /* Specialisaties tabs */
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-900">
                        <span className="font-semibold">Keuze-specialisaties:</span> Dit semester biedt verschillende specialisaties. 
                        Kies een tab om de activiteiten per specialisatie te bekijken.
                      </p>
                    </div>
                    <Tabs defaultValue={semester.specializations![0].id} className="w-full">
                      <TabsList className="grid w-full grid-cols-3 h-auto">
                        {semester.specializations!.map(spec => (
                          <TabsTrigger 
                            key={spec.id} 
                            value={spec.id}
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3"
                          >
                            <div className="text-center">
                              <div className="font-semibold">{spec.name}</div>
                              {spec.description && (
                                <div className="text-xs mt-1 opacity-80">{spec.description}</div>
                              )}
                            </div>
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {semester.specializations!.map(spec => {
                        const specActivities = spec.activities.filter(activity => {
                          // Apply same filters
                          let matches = true;
                          
                          if (selectedOutcomes.length > 0) {
                            matches = matches && activity.learningOutcomes.some(outcome => selectedOutcomes.includes(outcome));
                          }
                          
                          if (selectedCompetencies.length > 0) {
                            if (activity.learningOutcomeDetails) {
                              matches = matches && activity.learningOutcomeDetails.some(detail => 
                                selectedCompetencies.some(comp => {
                                  const competencyData = detail[comp];
                                  return competencyData && competencyData.length > 0;
                                })
                              );
                            }
                          }
                          
                          if (searchQuery && searchQuery.trim() !== '') {
                            const query = searchQuery.toLowerCase().trim();
                            matches = matches && (
                              activity.name.toLowerCase().includes(query) ||
                              (activity.description && activity.description.toLowerCase().includes(query))
                            );
                          }
                          
                          return matches;
                        });

                        return (
                          <TabsContent key={spec.id} value={spec.id} className="mt-6">
                            <div className="space-y-6">
                              {specActivities.length > 0 ? (
                                specActivities.map(activity => renderActivityCard(activity, semester))
                              ) : (
                                <div className="text-center text-gray-500 py-8">
                                  <p>Geen activiteiten gevonden voor deze specialisatie met de huidige filters.</p>
                                </div>
                              )}
                            </div>
                          </TabsContent>
                        );
                      })}
                    </Tabs>
                  </div>
                ) : (
                  /* Reguliere activiteiten zonder specialisaties */
                  <div className="space-y-6">
                    {filteredActivities.map((activity) => renderActivityCard(activity, semester))}
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        );
      })}

        {filteredSemesters.length === 0 && (
          <Card className="p-8">
            <div className="text-center text-gray-500">
              <p>Geen semesters gevonden die aan je filters voldoen.</p>
              <p className="text-sm mt-2">Pas je filters aan om resultaten te zien.</p>
            </div>
          </Card>
        )}
    </div>
  );
}