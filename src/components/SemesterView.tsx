import { useState } from 'react';
import { Semester, learningOutcomeLabels, learningOutcomeColors, CompetencyType, Activity, semesterColors } from '../types/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Brain, Zap, Heart, Package, ChevronDown, X, Link2, Calendar, Layers } from 'lucide-react';
import { getLearningOutcomeIcon } from '../utils/learningOutcomeIcons';
import { renderWithCMDMethodsLinks } from '../utils/cmdMethodsLinks';
import { leerlijnProgressions } from '../data/leerlijnProgressions';
import { Leerlijn, getLeerlijnForItem } from '../data/leerlijnen';

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

  const speelveldColors: Record<Leerlijn, string> = {
    'Design': 'bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-200',
    'Technologie & AI': 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200',
    'Mens & Ervaring': 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200',
    'Maatschappij & Toekomst': 'bg-green-100 text-green-800 hover:bg-green-200 border-green-200',
    'Organisatie & Strategie': 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200',
    'Onderzoekend Vermogen': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200',
  };

  const getSpeelveldenForActivity = (activity: Activity, semesterNumber: number): Leerlijn[] => {
    // 1. Check explicit matches from leerlijnProgressions (High Confidence)
    const explicitMatches = leerlijnProgressions.filter(progression => {
      if (progression.semester !== semesterNumber) return false;
      if (!progression.typischeActiviteiten) return false;
      
      return progression.typischeActiviteiten.some(typischeActiviteit => {
        const activityLower = typischeActiviteit.toLowerCase();
        // Handle "Name (details)" format
        const activityBase = activityLower.split(' (')[0].trim();
        const currentNameLower = activity.name.toLowerCase();
        
        // Match both ways
        return currentNameLower.includes(activityBase) || activityBase.includes(currentNameLower);
      });
    }).map(m => m.leerlijn);

    if (explicitMatches.length > 0) {
      return Array.from(new Set(explicitMatches));
    }

    // 2. Fallback: Scan name and description for keywords (Medium Confidence)
    const textToScan = `${activity.name} ${activity.description || ''}`;
    const keywordMatches = getLeerlijnForItem(textToScan);
    
    if (keywordMatches.length > 0) {
      return keywordMatches;
    }

    // 3. Fallback: Based on Learning Outcomes (Low Confidence heuristics)
    const outcomeMapping: Partial<Record<string, Leerlijn[]>> = {
      'ontwerpen': ['Design'],
      'prototype': ['Technologie & AI', 'Design'],
      'context': ['Mens & Ervaring', 'Maatschappij & Toekomst'],
      'verbinden': ['Organisatie & Strategie'],
      'reflecteren': ['Onderzoekend Vermogen']
    };

    const outcomeMatches: Leerlijn[] = [];
    activity.learningOutcomes.forEach(outcome => {
      const mapped = outcomeMapping[outcome];
      if (mapped) outcomeMatches.push(...mapped);
    });

    // Limit to 2 most relevant heuristic matches to avoid noise
    return Array.from(new Set(outcomeMatches)).slice(0, 2);
  };

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
    const relevantSpeelvelden = getSpeelveldenForActivity(activity, semester.number);

    return (
      <Card key={activity.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
        <CardHeader className="bg-gray-50/50 pb-4 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between md:justify-start gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {activity.name}
                </h3>
              </div>
              
              {relevantSpeelvelden.length > 0 && (
                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500 block mb-2">
                    Relevante speelvelden
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {relevantSpeelvelden.map(sv => (
                      <Badge key={sv} variant="secondary" className={`${speelveldColors[sv]} px-2.5 py-0.5 text-xs font-semibold border`}>
                        {sv}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activity.description && (
                <p className="text-gray-600 text-base leading-relaxed max-w-4xl">{activity.description}</p>
              )}
              
              {/* Relations to other activities */}
              {activity.relations && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/50 text-blue-700 rounded-md border border-blue-100 text-sm">
                  <Link2 className="w-4 h-4" />
                  <span className="font-medium">Relatie:</span>
                  <span>{activity.relations}</span>
                </div>
              )}
            </div>

            <div className="flex flex-row md:flex-col gap-2 shrink-0">
              <Badge variant="outline" className="bg-white text-gray-600 border-gray-200 whitespace-nowrap justify-center">
                {activity.duration}
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap justify-center">
                {semester.level}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
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
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        {/* Leeruitkomst header */}
                        <div className={`px-4 py-3 ${learningOutcomeColors[detail.outcome]} border-b border-gray-200`}>
                          <div className="flex items-center gap-2">
                            {getLearningOutcomeIcon(detail.outcome, 'w-5 h-5 text-gray-900')}
                            <h4 className="text-gray-900 font-semibold">{learningOutcomeLabels[detail.outcome]}</h4>
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

            {/* Deliverables */}
            {activity.professionalProducts && activity.duration !== '1 week' && (
              <AccordionItem value="products" className="border-none">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded">
                      <Package className="w-4 h-4 text-green-600" />
                      <span>Deliverables</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="border border-green-200 rounded-lg overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-green-200">
                      {(() => {
                        // Ensure professionalProducts is a string
                        const productsString = typeof activity.professionalProducts === 'string' 
                          ? activity.professionalProducts 
                          : '';
                        
                        if (!productsString) return null;
                        
                        return productsString.split('\n\n').filter(section => section.trim()).map((section, idx) => {
                          const parts = section.split(/(\*\*[^*]+\*\*)/g);
                          const titlePart = parts.find(part => part.startsWith('**') && part.endsWith('**'));
                          const contentParts = parts.filter(part => !(part.startsWith('**') && part.endsWith('**')));
                          const title = titlePart ? titlePart.slice(2, -2) : '';
                          const content = contentParts.join('').trim();
                          
                          // Split content into bullet points by newline or semicolon
                          const bullets = content.split(/[;\n]/).filter(line => line.trim());
                          
                          // Skip sections with no content
                          if (bullets.length === 0) return null;
                          
                          return (
                            <div key={idx} className="p-4 bg-green-50">
                              {title && (
                                <h5 className="text-green-800 mb-3 capitalize">{title}</h5>
                              )}
                              <ul className="space-y-2">
                                {bullets.map((bullet, i) => {
                                  const trimmedBullet = bullet.trim();
                                  if (!trimmedBullet) return null;
                                  return (
                                    <li key={i} className="text-green-900 text-sm flex items-start gap-2">
                                      <span className="text-green-600 mt-0.5">•</span>
                                      <span>{renderWithCMDMethodsLinks(trimmedBullet)}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        });
                      })()}
                    </div>
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
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm">
          <div className="flex items-start justify-between gap-4 p-6">
            <div className="flex-1">
              <h2 className="text-gray-900 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Semesteroverzicht
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dit semesteroverzicht laat per semester zien welke inhoud centraal staan. Per onderwijsactiviteit worden de kennis, vaardigheden, houding en deliverables inzichtelijk gemaakt.
              </p>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              className="flex-shrink-0 p-1 hover:bg-blue-100 rounded transition-colors"
              aria-label="Verberg introductie"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
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
          <Card key={semester.number} className={`overflow-hidden border ${semColor.border} shadow-sm hover:shadow-md transition-all duration-300`}>
            {/* Semester Header - Clickable */}
            <div 
              onClick={() => toggleSemester(semester.number)}
              className="cursor-pointer hover:opacity-95 transition-opacity"
            >
              <CardHeader className={`${semColor.bg} border-b ${semColor.border} py-5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <ChevronDown 
                      className={`w-6 h-6 ${semColor.text} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <Badge variant="secondary" className={`${semColor.text} bg-white border ${semColor.border} shrink-0 px-3 py-1 font-semibold`}>
                      Jaar {semester.year}
                    </Badge>
                    <div>
                      <CardTitle className={`${semColor.text} text-2xl tracking-tight`}>
                        {semester.number >= 5 ? semester.name : `Semester ${semester.number}: ${semester.name}`}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm">
                      {semester.number === 6 
                          ? '3 specialisaties' 
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
                      <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white/50 border border-blue-100 rounded-lg mb-6">
                        {semester.specializations!.map(spec => (
                          <TabsTrigger 
                            key={spec.id} 
                            value={spec.id}
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm py-3 rounded-md transition-all duration-200 font-medium"
                          >
                            <div className="text-center">
                              <div>{spec.name}</div>
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
