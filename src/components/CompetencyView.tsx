import { useState } from 'react';
import { Activity, CompetencyType, LearningOutcome, learningOutcomeLabels, learningOutcomeColors, semesterColors } from '../types/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { semesterLevels } from '../data/semesterLevels';
import { Brain, Zap, Heart, Info, Plus, Minus, ChevronDown } from 'lucide-react';
import { Badge } from './ui/badge';
import { getHoudingBySemester } from '../data/houdingPerLeeruitkomst';
import { leerlijnen, getLeerlijnForItem, Leerlijn } from '../data/leerlijnen';
import { getLearningOutcomeIcon } from '../utils/learningOutcomeIcons';
import { semesters } from '../data/mockData';

interface CompetencyViewProps {
  activities: Activity[];
  searchQuery: string;
}

const semesterNames: Record<number, string> = {
  1: 'BASE',
  2: 'CHALLENGE',
  3: 'EXPLORE',
  4: 'CONNECT',
  5: 'Praktijk',
  6: 'Semester Specialisatie',
  7: 'Afstuderen'
};

const semesterYears: Record<number, number> = {
  1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4
};

interface SemesterOutcomeData {
  semester: number;
  outcome: LearningOutcome;
  items: string[];
  activities: string[];
  itemToActivities: Record<string, string[]>;
}

export function CompetencyView({ activities, searchQuery }: CompetencyViewProps) {
  const [selectedLeerlijn, setSelectedLeerlijn] = useState<Leerlijn>('Design');
  
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'jaar1-2': false,
    'specialisaties': false
  });
  
  // All outcomes start collapsed
  const [collapsedOutcomes, setCollapsedOutcomes] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    const sections = ['jaar1-2', 'specialisaties', 'leerlijn-jaar1-2', 'leerlijn-specialisaties'];
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
    sections.forEach(section => {
      outcomes.forEach(outcome => {
        // Start all collapsed for leerlijn sections
        initial[`${section}-${outcome}`] = true;
      });
    });
    return initial;
  });

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const isSectionCollapsed = (section: string) => {
    return collapsedSections[section] || false;
  };

  const toggleOutcome = (section: string, outcome: LearningOutcome) => {
    const key = `${section}-${outcome}`;
    setCollapsedOutcomes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isOutcomeCollapsed = (section: string, outcome: LearningOutcome) => {
    const key = `${section}-${outcome}`;
    return collapsedOutcomes[key] || false;
  };

  // Expand/Collapse all outcomes in a section
  const expandAllOutcomes = (section: string) => {
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
    setCollapsedOutcomes(prev => {
      const updated = { ...prev };
      outcomes.forEach(outcome => {
        updated[`${section}-${outcome}`] = false;
      });
      return updated;
    });
  };

  const collapseAllOutcomes = (section: string) => {
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
    setCollapsedOutcomes(prev => {
      const updated = { ...prev };
      outcomes.forEach(outcome => {
        updated[`${section}-${outcome}`] = true;
      });
      return updated;
    });
  };

  const selectLeerlijn = (leerlijn: Leerlijn | null) => {
    setSelectedLeerlijn(prev => prev === leerlijn ? null : leerlijn);
  };

  // Leerlijn descriptions
  const leerlijnDescriptions: Record<Leerlijn, string> = {
    'Design': 'CMD\'ers brengen de huidige en gewenste situatie in kaart en benaderen het ontwerpprobleem vanuit verschillende perspectieven. Ze verkennen oplossingen, passen creatieve methoden toe om ideeën te genereren en te wegen, en werken prototypes uit van low-fidelity tot high-fidelity. Ze gebruiken kennis van interactie, storytelling en vormgeving van multimodale interfaces, en passen evaluatiemethoden toe om ontwerpen te verfijnen en valideren.',
    'Technologie & AI': 'CMD\'ers analyseren mogelijkheden van relevante technologieën en experimenteren met verschillende digitale technieken als onderdeel van de ontwerpoplossing. Ze maken prototypes om de context te begrijpen en keuzes te maken, en toetsen of prototypes aan technische eisen voldoen. Ze verkennen actief wat digitale technologie kan betekenen voor innovatieve oplossingen.',
    'Mens & Ervaring': 'CMD\'ers brengen gebruikers, hun wensen en de gebruikscontext in kaart. Ze betrekken gebruikers en belanghebbenden actief bij het ontwerpproces, bij het bedenken en wegen van ideeën, en verbinden hun doelen en wensen in het concept. Ze toetsen de gebruiksvriendelijkheid en kwaliteit van de gebruikerservaring, en verbeteren concepten zodat deze optimaal passen bij gebruikerswensen.',
    'Maatschappij & Toekomst': 'CMD\'ers zijn betrokken bij wat er speelt in de samenleving en houden rekening met de maatschappelijke impact van hun ontwerpen. Ze verkennen gevoeligheden, dilemma\'s en kwesties met behulp van scenario\'s en prototypen, en gebruiken creatieve methoden om alternatieven te bedenken voor huidige maatschappelijke verhoudingen. Ze evalueren de te verwachten effecten op de lange termijn met experts en stakeholders.',
    'Organisatie & Strategie': 'CMD\'ers stellen zich op de hoogte van nieuwe ontwikkelingen in de markt en organisatie. Ze identificeren belangen van verschillende stakeholders en brengen spanningsvelden in kaart. Ze houden bij het ontwerp rekening met draagvlak en latere ingebruikname, bedenken slimme alternatieven voor de status quo, en valideren de toegevoegde waarde van hun oplossingen voor de organisatie.',
    'Onderzoekend Vermogen': 'CMD\'ers leven zich in in het probleem van de opdrachtgever en zoeken naar de vraag achter de vraag. Ze brengen het communicatieprobleem systematisch in kaart en passen evaluatiemethoden en technieken toe om ontwerpen te verfijnen en valideren. Ze gebruiken onderzoeksmethoden om effecten en waarde van oplossingen vast te stellen en ontwerpbeslissingen te onderbouwen.'
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

    return filtered;
  };

  const filteredActivities = filterActivities();

  // Group competencies by semester and learning outcome
  const groupBySemesterAndOutcome = (
    competencyType: CompetencyType, 
    semestersToInclude: number[]
  ): SemesterOutcomeData[] => {
    const grouped: SemesterOutcomeData[] = [];
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

    semestersToInclude.forEach(semester => {
      const semesterActivities = filteredActivities.filter(a => a.semester === semester);
      
      outcomes.forEach(outcomeItem => {
        const items: string[] = [];
        const activityNames: string[] = [];
        const itemToActivities: Record<string, string[]> = {};

        semesterActivities.forEach(activity => {
          if (!activity.learningOutcomeDetails) return;

          const detail = activity.learningOutcomeDetails.find(d => d.outcome === outcomeItem);
          if (detail && detail[competencyType] && detail[competencyType].length > 0) {
            detail[competencyType].forEach(item => {
              if (!items.includes(item)) {
                items.push(item);
              }
              if (!itemToActivities[item]) {
                itemToActivities[item] = [];
              }
              if (!itemToActivities[item].includes(activity.name)) {
                itemToActivities[item].push(activity.name);
              }
            });
            if (!activityNames.includes(activity.name)) {
              activityNames.push(activity.name);
            }
          }
        });

        if (items.length > 0) {
          grouped.push({
            semester,
            outcome: outcomeItem,
            items,
            activities: activityNames,
            itemToActivities
          });
        }
      });
    });

    return grouped;
  };

  // Get data for specific specialization
  const getSpecializationData = (
    competencyType: CompetencyType,
    specializationId: string
  ): SemesterOutcomeData[] => {
    const semester6 = semesters.find(s => s.number === 6);
    if (!semester6 || !semester6.specializations) return [];

    const specialization = semester6.specializations.find(s => s.id === specializationId);
    if (!specialization) return [];

    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
    const grouped: SemesterOutcomeData[] = [];

    outcomes.forEach(outcomeItem => {
      const items: string[] = [];
      const activityNames: string[] = [];
      const itemToActivities: Record<string, string[]> = {};

      specialization.activities.forEach(activity => {
        if (!activity.learningOutcomeDetails) return;

        const detail = activity.learningOutcomeDetails.find(d => d.outcome === outcomeItem);
        if (detail && detail[competencyType] && detail[competencyType].length > 0) {
          detail[competencyType].forEach(item => {
            if (!items.includes(item)) {
              items.push(item);
            }
            if (!itemToActivities[item]) {
              itemToActivities[item] = [];
            }
            if (!itemToActivities[item].includes(activity.name)) {
              itemToActivities[item].push(activity.name);
            }
          });
          if (!activityNames.includes(activity.name)) {
            activityNames.push(activity.name);
          }
        }
      });

      if (items.length > 0) {
        grouped.push({
          semester: 6,
          outcome: outcomeItem,
          items,
          activities: activityNames,
          itemToActivities
        });
      }
    });

    return grouped;
  };

  // Filter function based on selected leerlijn
  const shouldShowItem = (item: string | { text: string, leerlijnen: Leerlijn[] }): boolean => {
    if (!selectedLeerlijn) return true;
    
    // If item is an object with leerlijnen property (new structure)
    if (typeof item === 'object' && 'leerlijnen' in item) {
      return item.leerlijnen.includes(selectedLeerlijn);
    }
    
    // If item is a string (old structure - from activities)
    const itemLeerlijnen = getLeerlijnForItem(item as string);
    return itemLeerlijnen.includes(selectedLeerlijn);
  };

  // Filter function for houding descriptions based on selected leerlijn
  const shouldShowHouding = (description: string): boolean => {
    if (!selectedLeerlijn) return true;
    
    // Check if the houding description matches the selected leerlijn keywords
    const houdingLeerlijnen = getLeerlijnForItem(description);
    return houdingLeerlijnen.includes(selectedLeerlijn);
  };

  // Extract bullet points from houding description
  const extractHoudingBullets = (description: string): string[] => {
    // Split by common sentence patterns and clean up
    const bullets: string[] = [];
    
    // Split by common patterns: period followed by capital letter, "en" at end of sentence
    const sentences = description
      .replace(/\.\s+([A-Z])/g, '.|$1') // Mark sentence boundaries
      .split('|')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    
    sentences.forEach(sentence => {
      // Further split if there are multiple aspects connected with "en"
      // But only if the sentence is long enough
      if (sentence.length > 100 && sentence.includes(' en ')) {
        const parts = sentence.split(/,\s*(?=\w+\s+(tonen|ontwikkelen|nemen|stellen|hebben|durven|kunnen|staan))/);
        parts.forEach(part => {
          const cleaned = part.trim().replace(/\.$/, '');
          if (cleaned.length > 20) {
            bullets.push(cleaned);
          }
        });
      } else {
        const cleaned = sentence.trim().replace(/\.$/, '');
        if (cleaned.length > 20) {
          bullets.push(cleaned);
        }
      }
    });
    
    return bullets;
  };

  const renderLeerlijnenFilter = (colorClass: string) => {
    return (
      <div className={`bg-white border-2 border-${colorClass}-300 rounded-lg p-4 mb-4`}>
        <div className="flex items-center justify-between mb-3">
          <h4 className={`text-${colorClass}-900`}>Filter op leerlijn</h4>
          {selectedLeerlijn && (
            <button
              onClick={() => selectLeerlijn(null)}
              className={`text-sm text-${colorClass}-600 hover:text-${colorClass}-800 underline`}
            >
              Wis filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {leerlijnen.map((leerlijn) => {
            const isSelected = selectedLeerlijn === leerlijn;
            
            // Define color styles for selected state based on colorClass
            const selectedStyles = colorClass === 'blue' 
              ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
              : colorClass === 'orange'
              ? 'bg-orange-600 text-white border-orange-600 hover:bg-orange-700'
              : 'bg-pink-600 text-white border-pink-600 hover:bg-pink-700';
            
            return (
              <Badge
                key={leerlijn}
                variant={isSelected ? "default" : "outline"}
                className={`cursor-pointer transition-all py-2 px-3 ${
                  isSelected 
                    ? `${selectedStyles} shadow-sm` 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                }`}
                onClick={() => selectLeerlijn(leerlijn)}
              >
                {leerlijn}
              </Badge>
            );
          })}
        </div>
      </div>
    );
  };

  // Render combined outcome card with semesters side by side (LEERLIJNEN TAB)
  const renderOutcomeWithSemesters = (outcome: LearningOutcome, semestersToInclude: number[], section: string = 'leerlijn-jaar1-2') => {
    const outcomeColorMap = {
      'context': { border: 'border-blue-300', bg: 'bg-blue-50', text: 'text-blue-900' },
      'ontwerpen': { border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-900' },
      'prototype': { border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-900' },
      'verbinden': { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-900' },
      'reflecteren': { border: 'border-pink-300', bg: 'bg-pink-50', text: 'text-pink-900' }
    };
    const outcomeColors = outcomeColorMap[outcome];
    const isCollapsed = isOutcomeCollapsed(section, outcome);

    return (
      <Card key={outcome} className={`border-2 ${outcomeColors.border} rounded-xl overflow-hidden`}>
        <div
          onClick={() => toggleOutcome(section, outcome)}
          className="cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <CardHeader className={`${outcomeColors.bg} border-b-2 ${outcomeColors.border}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getLearningOutcomeIcon(outcome, 'w-5 h-5')}
                <CardTitle className={outcomeColors.text}>{learningOutcomeLabels[outcome]}</CardTitle>
              </div>
              {isCollapsed ? (
                <Plus className="w-5 h-5 text-gray-600" />
              ) : (
                <Minus className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </CardHeader>
        </div>
        {!isCollapsed && (
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {semestersToInclude.map(semesterNumber => {
                const semColor = semesterColors[semesterNumber] || semesterColors[1];
                
                // Get data for this semester and outcome
                const kennisData = groupBySemesterAndOutcome('kennis', [semesterNumber]);
                const vaardighedenData = groupBySemesterAndOutcome('vaardigheden', [semesterNumber]);
                const houdingData = getHoudingBySemester(semesterNumber).find(h => h.outcome === outcome);

                const kennisOutcome = kennisData.find(d => d.outcome === outcome);
                const vaardighedenOutcome = vaardighedenData.find(d => d.outcome === outcome);

                // Filter items based on selected leerlijn and create items with activity names
                const kennisItemsWithActivities = kennisOutcome 
                  ? kennisOutcome.items
                      .filter(item => shouldShowItem(item))
                      .map(item => ({
                        text: item,
                        activities: kennisOutcome.itemToActivities[item] || []
                      }))
                  : [];
                
                const vaardighedenItemsWithActivities = vaardighedenOutcome 
                  ? vaardighedenOutcome.items
                      .filter(item => shouldShowItem(item))
                      .map(item => ({
                        text: item,
                        activities: vaardighedenOutcome.itemToActivities[item] || []
                      }))
                  : [];

                // Check if there's any content to show
                const hasKennis = kennisItemsWithActivities.length > 0;
                const hasVaardigheden = vaardighedenItemsWithActivities.length > 0;
                const hasHouding = houdingData && shouldShowHouding(houdingData.description);

                return (
                  <div key={semesterNumber} className={`border-2 ${semColor.border} rounded-lg overflow-hidden bg-white shadow-sm`}>
                    {/* Semester Header - More Compact */}
                    <div className={`${semColor.bg} border-b-2 ${semColor.border} p-2`}>
                      <h4 className={`text-sm ${semColor.text}`}>S{semesterNumber} · {semesterNames[semesterNumber]}</h4>
                      <Badge variant="secondary" className={`${semColor.bg} ${semColor.text} border ${semColor.border} text-xs mt-1`}>
                        {semesterLevels[semesterNumber]}
                      </Badge>
                    </div>

                    {/* Content - More Compact */}
                    <div className="p-3 space-y-3">
                      {/* Kennis - Only show if has content */}
                      {hasKennis && (
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Brain className="w-3.5 h-3.5 text-blue-600" />
                            <h5 className="text-xs text-blue-900">Kennis</h5>
                          </div>
                          <ul className="space-y-1 text-xs pl-5">
                            {kennisItemsWithActivities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-blue-600 mt-0.5 text-[10px]">•</span>
                                <span className="text-gray-800 leading-snug">
                                  {item.text}
                                  {item.activities.length > 0 && (
                                    <span className="text-gray-500 text-[10px] ml-1">
                                      ({item.activities.join(', ')})
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Vaardigheden - Only show if has content */}
                      {hasVaardigheden && (
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Zap className="w-3.5 h-3.5 text-orange-600" />
                            <h5 className="text-xs text-orange-900">Vaardigheden</h5>
                          </div>
                          <ul className="space-y-1 text-xs pl-5">
                            {vaardighedenItemsWithActivities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-orange-600 mt-0.5 text-[10px]">•</span>
                                <span className="text-gray-800 leading-snug">
                                  {item.text}
                                  {item.activities.length > 0 && (
                                    <span className="text-gray-500 text-[10px] ml-1">
                                      ({item.activities.join(', ')})
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Houding - Only show if has content */}
                      {hasHouding && (
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Heart className="w-3.5 h-3.5 text-pink-600" />
                            <h5 className="text-xs text-pink-900">Houding</h5>
                          </div>
                          <ul className="space-y-1 text-xs pl-5">
                            {extractHoudingBullets(houdingData.description).map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-pink-600 mt-0.5 text-[10px]">•</span>
                                <span className="text-gray-800 leading-snug">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Show message if all empty */}
                      {!hasKennis && !hasVaardigheden && !hasHouding && (
                        <p className="text-xs text-gray-400 italic text-center py-2">Geen competenties voor deze leerlijn</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  // Render combined outcome card with all three competency types (for old views)
  const renderCombinedOutcomeCard = (
    outcome: LearningOutcome,
    semestersToInclude: number[],
    sectionName: string
  ) => {
    const outcomeColorMap = {
      'context': { border: 'border-blue-300', bg: 'bg-blue-50' },
      'ontwerpen': { border: 'border-purple-300', bg: 'bg-purple-50' },
      'prototype': { border: 'border-green-300', bg: 'bg-green-50' },
      'verbinden': { border: 'border-orange-300', bg: 'bg-orange-50' },
      'reflecteren': { border: 'border-pink-300', bg: 'bg-pink-50' }
    };
    const outcomeColors = outcomeColorMap[outcome];
    const isCollapsed = isOutcomeCollapsed(sectionName, outcome);

    // Get data for all three competency types
    const kennisData = groupBySemesterAndOutcome('kennis', semestersToInclude);
    const vaardighedenData = groupBySemesterAndOutcome('vaardigheden', semestersToInclude);
    
    // Filter for this outcome
    const kennisOutcome = kennisData.filter(d => d.outcome === outcome);
    const vaardighedenOutcome = vaardighedenData.filter(d => d.outcome === outcome);
    
    // Get houding data
    const houdingDataForOutcome = semestersToInclude
      .map(semester => {
        const data = getHoudingBySemester(semester).find(h => h.outcome === outcome);
        return data ? { ...data, semester } : null;
      })
      .filter(Boolean);

    // Check if there's any data to show
    if (kennisOutcome.length === 0 && vaardighedenOutcome.length === 0 && houdingDataForOutcome.length === 0) {
      return null;
    }

    return (
      <Card key={outcome} className={`border-2 ${outcomeColors.border} rounded-xl overflow-hidden`}>
        <div
          onClick={() => toggleOutcome(sectionName, outcome)}
          className="cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <CardHeader className={`${outcomeColors.bg} border-b-2 ${outcomeColors.border}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getLearningOutcomeIcon(outcome, 'w-5 h-5')}
                <CardTitle>{learningOutcomeLabels[outcome]}</CardTitle>
              </div>
              {isCollapsed ? (
                <Plus className="w-5 h-5 text-gray-600" />
              ) : (
                <Minus className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </CardHeader>
        </div>
        {!isCollapsed && (
          <CardContent className="p-6 space-y-6">
            {/* Kennis Section */}
            {kennisOutcome.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <h4 className="text-blue-900">Kennis</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {kennisOutcome.map((semData, idx) => {
                    const filteredItems = semData.items.filter(item => shouldShowItem(item));
                    const semColor = semesterColors[semData.semester] || semesterColors[1];
                    
                    if (filteredItems.length === 0 && selectedLeerlijn) return null;

                    return (
                      <div key={idx} className={`border-2 ${semColor.border} rounded-lg p-4 ${semColor.bg} shadow-sm`}>
                        <div className="mb-3">
                          <h5 className={`text-sm ${semColor.text}`}>
                            S{semData.semester}
                          </h5>
                          <p className="text-xs text-gray-600">{semesterNames[semData.semester]}</p>
                        </div>
                        
                        <ul className="space-y-2 text-sm">
                          {filteredItems.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <span className={`mt-0.5 text-xs ${semColor.text}`}>•</span>
                              <span className="leading-snug flex-1 text-gray-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Vaardigheden Section */}
            {vaardighedenOutcome.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-orange-600" />
                  <h4 className="text-orange-900">Vaardigheden</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {vaardighedenOutcome.map((semData, idx) => {
                    const filteredItems = semData.items.filter(item => shouldShowItem(item));
                    const semColor = semesterColors[semData.semester] || semesterColors[1];
                    
                    if (filteredItems.length === 0 && selectedLeerlijn) return null;

                    return (
                      <div key={idx} className={`border-2 ${semColor.border} rounded-lg p-4 ${semColor.bg} shadow-sm`}>
                        <div className="mb-3">
                          <h5 className={`text-sm ${semColor.text}`}>
                            S{semData.semester}
                          </h5>
                          <p className="text-xs text-gray-600">{semesterNames[semData.semester]}</p>
                        </div>
                        
                        <ul className="space-y-2 text-sm">
                          {filteredItems.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <span className={`mt-0.5 text-xs ${semColor.text}`}>•</span>
                              <span className="leading-snug flex-1 text-gray-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Houding Section */}
            {houdingDataForOutcome.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-pink-600" />
                  <h4 className="text-pink-900">Houding</h4>
                </div>
                <div className="space-y-3">
                  {houdingDataForOutcome.map((data, idx) => {
                    const semColor = semesterColors[data.semester] || semesterColors[1];
                    return (
                      <div key={idx} className={`border-2 ${semColor.border} ${semColor.bg} rounded-lg p-4 shadow-sm`}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className={`text-sm ${semColor.text}`}>
                              Semester {data.semester}: {semesterNames[data.semester]}
                            </h5>
                            <p className="text-xs text-gray-600">{semesterLevels[data.semester]}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-800 leading-relaxed mt-2">
                          {data.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    );
  };

  // Render specializations for LEERLIJNEN tab with 3 columns per specialization
  const renderLeerlijnSpecializations = (sectionName: string) => {
    const semester6 = semesters.find(s => s.number === 6);
    if (!semester6 || !semester6.specializations) return null;

    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

    return (
      <div className="space-y-4">
        {outcomes.map(outcome => {
          const outcomeColorMap = {
            'context': { border: 'border-blue-300', bg: 'bg-blue-50' },
            'ontwerpen': { border: 'border-purple-300', bg: 'bg-purple-50' },
            'prototype': { border: 'border-green-300', bg: 'bg-green-50' },
            'verbinden': { border: 'border-orange-300', bg: 'bg-orange-50' },
            'reflecteren': { border: 'border-pink-300', bg: 'bg-pink-50' }
          };
          const outcomeColors = outcomeColorMap[outcome];
          const isCollapsed = isOutcomeCollapsed(sectionName, outcome);

          return (
            <Card key={outcome} className={`border-2 ${outcomeColors.border} rounded-xl overflow-hidden`}>
              <div
                onClick={() => toggleOutcome(sectionName, outcome)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <CardHeader className={`${outcomeColors.bg} border-b-2 ${outcomeColors.border}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getLearningOutcomeIcon(outcome, 'w-5 h-5')}
                      <CardTitle>{learningOutcomeLabels[outcome]}</CardTitle>
                    </div>
                    {isCollapsed ? (
                      <Plus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Minus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </CardHeader>
              </div>
              {!isCollapsed && (
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {semester6.specializations!.map(spec => {
                      const specColors = {
                        'immersive-design': { border: 'border-purple-400', bg: 'bg-purple-50', text: 'text-purple-700' },
                        'digital-design': { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700' },
                        'brand-design': { border: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-700' }
                      };
                      const specColor = specColors[spec.id as keyof typeof specColors] || specColors['digital-design'];

                      // Get data for all three types
                      const kennisData = getSpecializationData('kennis', spec.id);
                      const vaardighedenData = getSpecializationData('vaardigheden', spec.id);
                      
                      const kennisOutcome = kennisData.find(d => d.outcome === outcome);
                      const vaardighedenOutcome = vaardighedenData.find(d => d.outcome === outcome);
                      const houdingData = getHoudingBySemester(6).find(h => h.outcome === outcome);

                      // Filter and create items with activities
                      const kennisItemsWithActivities = kennisOutcome
                        ? kennisOutcome.items
                            .filter(item => shouldShowItem(item))
                            .map(item => ({
                              text: item,
                              activities: kennisOutcome.itemToActivities[item] || []
                            }))
                        : [];

                      const vaardighedenItemsWithActivities = vaardighedenOutcome
                        ? vaardighedenOutcome.items
                            .filter(item => shouldShowItem(item))
                            .map(item => ({
                              text: item,
                              activities: vaardighedenOutcome.itemToActivities[item] || []
                            }))
                        : [];

                      // Check if there's any content to show
                      const hasKennis = kennisItemsWithActivities.length > 0;
                      const hasVaardigheden = vaardighedenItemsWithActivities.length > 0;
                      const hasHouding = houdingData && shouldShowHouding(houdingData.description);

                      // Don't show specialization if no data matches the filter
                      if (!hasKennis && !hasVaardigheden && !hasHouding && selectedLeerlijn) {
                        return null;
                      }

                      return (
                        <div key={spec.id} className={`border-2 ${specColor.border} rounded-lg overflow-hidden bg-white shadow-sm`}>
                          {/* Specialization Header - More Compact */}
                          <div className={`${specColor.bg} border-b-2 ${specColor.border} p-2`}>
                            <h4 className={`text-sm ${specColor.text}`}>{spec.name}</h4>
                          </div>

                          {/* Content: Kennis, Vaardigheden, Houding in column - More Compact */}
                          <div className="p-3 space-y-3">
                            {/* Kennis - Only show if has content */}
                            {hasKennis && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-1.5">
                                  <Brain className="w-3.5 h-3.5 text-blue-600" />
                                  <h5 className="text-xs text-blue-900">Kennis</h5>
                                </div>
                                <ul className="space-y-1 text-xs pl-5">
                                  {kennisItemsWithActivities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <span className="text-blue-600 mt-0.5 text-[10px]">•</span>
                                      <span className="text-gray-800 leading-snug">
                                        {item.text}
                                        {item.activities.length > 0 && (
                                          <span className="text-gray-500 text-[10px] ml-1">
                                            ({item.activities.join(', ')})
                                          </span>
                                        )}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Vaardigheden - Only show if has content */}
                            {hasVaardigheden && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-1.5">
                                  <Zap className="w-3.5 h-3.5 text-orange-600" />
                                  <h5 className="text-xs text-orange-900">Vaardigheden</h5>
                                </div>
                                <ul className="space-y-1 text-xs pl-5">
                                  {vaardighedenItemsWithActivities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <span className="text-orange-600 mt-0.5 text-[10px]">•</span>
                                      <span className="text-gray-800 leading-snug">
                                        {item.text}
                                        {item.activities.length > 0 && (
                                          <span className="text-gray-500 text-[10px] ml-1">
                                            ({item.activities.join(', ')})
                                          </span>
                                        )}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Houding - Only show if has content */}
                            {hasHouding && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-1.5">
                                  <Heart className="w-3.5 h-3.5 text-pink-600" />
                                  <h5 className="text-xs text-pink-900">Houding</h5>
                                </div>
                                <ul className="space-y-1 text-xs pl-5">
                                  {extractHoudingBullets(houdingData.description).map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <span className="text-pink-600 mt-0.5 text-[10px]">•</span>
                                      <span className="text-gray-800 leading-snug">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Show message if all empty */}
                            {!hasKennis && !hasVaardigheden && !hasHouding && (
                              <p className="text-xs text-gray-400 italic text-center py-2">Geen competenties voor deze leerlijn</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    );
  };

  // Render specializations with combined competency types
  const renderCombinedSpecializationsGrid = (
    sectionName: string
  ) => {
    const semester6 = semesters.find(s => s.number === 6);
    if (!semester6 || !semester6.specializations) return null;

    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

    return (
      <div className="space-y-4">
        {outcomes.map(outcome => {
          const outcomeColorMap = {
            'context': { border: 'border-blue-300', bg: 'bg-blue-50' },
            'ontwerpen': { border: 'border-purple-300', bg: 'bg-purple-50' },
            'prototype': { border: 'border-green-300', bg: 'bg-green-50' },
            'verbinden': { border: 'border-orange-300', bg: 'bg-orange-50' },
            'reflecteren': { border: 'border-pink-300', bg: 'bg-pink-50' }
          };
          const outcomeColors = outcomeColorMap[outcome];
          const isCollapsed = isOutcomeCollapsed(sectionName, outcome);

          return (
            <Card key={outcome} className={`border-2 ${outcomeColors.border} rounded-xl overflow-hidden`}>
              <div
                onClick={() => toggleOutcome(sectionName, outcome)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <CardHeader className={`${outcomeColors.bg} border-b-2 ${outcomeColors.border}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getLearningOutcomeIcon(outcome, 'w-5 h-5')}
                      <CardTitle>{learningOutcomeLabels[outcome]}</CardTitle>
                    </div>
                    {isCollapsed ? (
                      <Plus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Minus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </CardHeader>
              </div>
              {!isCollapsed && (
                <CardContent className="p-6 space-y-6">
                  {/* Kennis Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Brain className="w-5 h-5 text-blue-600" />
                      <h4 className="text-blue-900">Kennis</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {semester6.specializations!.map(spec => {
                        const specData = getSpecializationData('kennis', spec.id);
                        const outcomeData = specData.find(d => d.outcome === outcome);
                        
                        if (!outcomeData) return null;

                        const filteredItems = outcomeData.items.filter(item => shouldShowItem(item));
                        if (filteredItems.length === 0 && selectedLeerlijn) return null;

                        const specColors = {
                          'immersive-design': { border: 'border-purple-400', bg: 'bg-purple-50', text: 'text-purple-700' },
                          'digital-design': { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700' },
                          'brand-design': { border: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-700' }
                        };
                        const specColor = specColors[spec.id as keyof typeof specColors] || specColors['digital-design'];

                        return (
                          <div key={spec.id} className={`border-2 ${specColor.border} rounded-lg p-4 ${specColor.bg}`}>
                            <div className="mb-4">
                              <h5 className={`${specColor.text} mb-1`}>
                                {spec.name}
                              </h5>
                            </div>
                            
                            <ul className="space-y-2 text-sm">
                              {filteredItems.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2">
                                  <span className={`mt-0.5 text-xs ${specColor.text}`}>•</span>
                                  <span className="leading-snug flex-1 text-gray-800">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Vaardigheden Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-orange-600" />
                      <h4 className="text-orange-900">Vaardigheden</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {semester6.specializations!.map(spec => {
                        const specData = getSpecializationData('vaardigheden', spec.id);
                        const outcomeData = specData.find(d => d.outcome === outcome);
                        
                        if (!outcomeData) return null;

                        const filteredItems = outcomeData.items.filter(item => shouldShowItem(item));
                        if (filteredItems.length === 0 && selectedLeerlijn) return null;

                        const specColors = {
                          'immersive-design': { border: 'border-purple-400', bg: 'bg-purple-50', text: 'text-purple-700' },
                          'digital-design': { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700' },
                          'brand-design': { border: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-700' }
                        };
                        const specColor = specColors[spec.id as keyof typeof specColors] || specColors['digital-design'];

                        return (
                          <div key={spec.id} className={`border-2 ${specColor.border} rounded-lg p-4 ${specColor.bg}`}>
                            <div className="mb-4">
                              <h5 className={`${specColor.text} mb-1`}>
                                {spec.name}
                              </h5>
                            </div>
                            
                            <ul className="space-y-2 text-sm">
                              {filteredItems.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2">
                                  <span className={`mt-0.5 text-xs ${specColor.text}`}>•</span>
                                  <span className="leading-snug flex-1 text-gray-800">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Houding Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-5 h-5 text-pink-600" />
                      <h4 className="text-pink-900">Houding</h4>
                    </div>
                    <div className="space-y-3">
                      {(() => {
                        const data = getHoudingBySemester(6).find(h => h.outcome === outcome);
                        if (!data) return null;
                        
                        const semColor = semesterColors[6];
                        return (
                          <div className={`border-2 ${semColor.border} ${semColor.bg} rounded-lg p-4 shadow-sm`}>
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h5 className={`text-sm ${semColor.text}`}>
                                  Semester 6: {semesterNames[6]}
                                </h5>
                                <p className="text-xs text-gray-600">{semesterLevels[6]}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-800 leading-relaxed mt-2">
                              {data.description}
                            </p>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    );
  };

  const renderKennisContent = () => {
    const jaar1Data = groupBySemesterAndOutcome('kennis', [1, 2]);
    const jaar2Data = groupBySemesterAndOutcome('kennis', [3, 4]);
    const specialisatiesData = groupBySemesterAndOutcome('kennis', [6]);
    const isJaar1Collapsed = isSectionCollapsed('jaar1-2');
    const isSpecialisatiesCollapsed = isSectionCollapsed('specialisaties');
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

    return (
      <TabsContent value="kennis" className="mt-6">
        <div className="space-y-6">
          {/* Jaar 1 & 2 */}
          {jaar1Data.length > 0 && (
            <Card className="border-2 border-blue-400 rounded-xl overflow-hidden">
              <div 
                onClick={() => toggleSection('jaar1-2')}
                className="cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-300">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-blue-900">Jaar 1 & 2</CardTitle>
                    <ChevronDown 
                      className={`w-6 h-6 text-blue-700 transition-transform duration-200 ${isJaar1Collapsed ? '' : 'rotate-180'}`}
                    />
                  </div>
                </CardHeader>
              </div>
              {!isJaar1Collapsed && (
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'].map(outcome => 
                      renderOutcomeWithSemesters(outcome as LearningOutcome, [1, 2, 3, 4], 'leerlijn-jaar1-2')
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          )}

          {/* Specialisaties */}
          {specialisatiesData.length > 0 && (
            <Card className="border-2 border-blue-400 rounded-xl overflow-hidden">
              <div 
                onClick={() => toggleSection('specialisaties')}
                className="cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-300">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-blue-900">Specialisaties</CardTitle>
                    <ChevronDown 
                      className={`w-6 h-6 text-blue-700 transition-transform duration-200 ${isSpecialisatiesCollapsed ? '' : 'rotate-180'}`}
                    />
                  </div>
                </CardHeader>
              </div>
              {!isSpecialisatiesCollapsed && (
                <CardContent className="p-6">
                  {renderCombinedSpecializationsGrid('specialisaties')}
                </CardContent>
              )}
            </Card>
          )}
        </div>
      </TabsContent>
    );
  };

  const renderVaardighedenContent = () => {
    const jaar1Data = groupBySemesterAndOutcome('vaardigheden', [1, 2]);
    const jaar2Data = groupBySemesterAndOutcome('vaardigheden', [3, 4]);
    const specialisatiesData = groupBySemesterAndOutcome('vaardigheden', [6]);
    const isJaar1Collapsed = isSectionCollapsed('jaar1-2');
    const isSpecialisatiesCollapsed = isSectionCollapsed('specialisaties');
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

    return (
      <TabsContent value="vaardigheden" className="mt-6">
        <div className="space-y-6">
          {/* Jaar 1 & 2 */}
          {jaar1Data.length > 0 && (
            <Card className="border-2 border-orange-400 rounded-xl overflow-hidden">
              <div 
                onClick={() => toggleSection('jaar1-2')}
                className="cursor-pointer hover:bg-orange-50 transition-colors"
              >
                <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b-2 border-orange-300">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-orange-900">Jaar 1 & 2</CardTitle>
                    <ChevronDown 
                      className={`w-6 h-6 text-orange-700 transition-transform duration-200 ${isJaar1Collapsed ? '' : 'rotate-180'}`}
                    />
                  </div>
                </CardHeader>
              </div>
              {!isJaar1Collapsed && (
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {renderSemesterCard(1)}
                    {renderSemesterCard(2)}
                    {renderSemesterCard(3)}
                    {renderSemesterCard(4)}
                  </div>
                </CardContent>
              )}
            </Card>
          )}

          {/* Specialisaties */}
          {specialisatiesData.length > 0 && (
            <Card className="border-2 border-orange-400 rounded-xl overflow-hidden">
              <div 
                onClick={() => toggleSection('specialisaties')}
                className="cursor-pointer hover:bg-orange-50 transition-colors"
              >
                <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b-2 border-orange-300">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-orange-900">Specialisaties</CardTitle>
                    <ChevronDown 
                      className={`w-6 h-6 text-orange-700 transition-transform duration-200 ${isSpecialisatiesCollapsed ? '' : 'rotate-180'}`}
                    />
                  </div>
                </CardHeader>
              </div>
              {!isSpecialisatiesCollapsed && (
                <CardContent className="p-6">
                  {renderCombinedSpecializationsGrid('specialisaties')}
                </CardContent>
              )}
            </Card>
          )}
        </div>
      </TabsContent>
    );
  };

  const renderHoudingContent = () => {
    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
    
    return (
      <TabsContent value="houding" className="mt-6">
        <div className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-br from-gray-50/30 to-white shadow-sm">
          <div className="space-y-4">
            {outcomes.map(outcome => {
            const outcomeColorMap = {
              'context': { border: 'border-blue-300', bg: 'bg-blue-50' },
              'ontwerpen': { border: 'border-purple-300', bg: 'bg-purple-50' },
              'prototype': { border: 'border-green-300', bg: 'bg-green-50' },
              'verbinden': { border: 'border-orange-300', bg: 'bg-orange-50' },
              'reflecteren': { border: 'border-pink-300', bg: 'bg-pink-50' }
            };
            const outcomeColors = outcomeColorMap[outcome];
            const isCollapsed = isOutcomeCollapsed('all-houding', outcome);

            // Get all houding data for all semesters (1-7)
            const houdingDataForOutcome = [1, 2, 3, 4, 5, 6, 7]
              .map(semester => {
                const data = getHoudingBySemester(semester).find(h => h.outcome === outcome);
                return data ? { ...data, semester } : null;
              })
              .filter(Boolean);

            if (houdingDataForOutcome.length === 0) return null;

            return (
              <Card key={outcome} className={`border-2 ${outcomeColors.border} rounded-xl overflow-hidden`}>
                <div
                  onClick={() => toggleOutcome('all-houding', outcome)}
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <CardHeader className={`${outcomeColors.bg} border-b-2 ${outcomeColors.border}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getLearningOutcomeIcon(outcome, 'w-5 h-5')}
                        <CardTitle>{learningOutcomeLabels[outcome]}</CardTitle>
                      </div>
                      {isCollapsed ? (
                        <Plus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </CardHeader>
                </div>
                {!isCollapsed && (
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {houdingDataForOutcome.map((data, idx) => {
                        const semColor = semesterColors[data.semester] || semesterColors[1];
                        return (
                          <div key={idx} className={`border-2 ${semColor.border} ${semColor.bg} rounded-lg p-4 shadow-sm`}>
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className={`mb-1 ${semColor.text}`}>
                                  Semester {data.semester}: {semesterNames[data.semester]}
                                </h4>
                                <p className="text-sm text-gray-600">{semesterLevels[data.semester]}</p>
                              </div>
                              <Badge variant="secondary" className={`${semColor.bg} ${semColor.text} border-2 ${semColor.border}`}>
                                Jaar {semesterYears[data.semester]}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-800 leading-relaxed mt-3">
                              {data.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
          </div>
        </div>
      </TabsContent>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border-2 border-blue-600 p-6">
        <h2 className="text-gray-900 mb-2">Leerlijnen overzicht</h2>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-gray-600">
            Bekijk hoe de leerlijnen zich ontwikkelen per leeruitkomst en semester. Selecteer een leerlijn om de bijbehorende competenties te zien verdeeld over Kennis, Vaardigheden en Houding.
          </p>
        </div>
      </div>

      {/* Main Tabs: Leerlijnen */}
      <Tabs value={selectedLeerlijn} onValueChange={(value) => setSelectedLeerlijn(value as Leerlijn)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6 h-auto p-1 bg-white border-2 border-gray-200">
          {leerlijnen.map((leerlijn) => (
            <TabsTrigger 
              key={leerlijn}
              value={leerlijn}
              className="flex items-center justify-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              {leerlijn}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content for each Leerlijn */}
        {leerlijnen.map((leerlijn) => (
          <TabsContent key={leerlijn} value={leerlijn}>
            {/* Leerlijn Description */}
            <div className="bg-gradient-to-r from-blue-50 to-white border-2 border-blue-200 rounded-lg p-5 mb-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  {leerlijnDescriptions[leerlijn]}
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {/* Jaar 1 & 2 */}
              <Card className="border-2 border-blue-400 rounded-xl overflow-hidden">
                <div 
                  onClick={() => toggleSection('jaar1-2')}
                  className="cursor-pointer hover:bg-blue-50 transition-colors"
                >
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-300">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-blue-900">Jaar 1 & 2</CardTitle>
                      <ChevronDown 
                        className={`w-6 h-6 text-blue-700 transition-transform duration-200 ${isSectionCollapsed('jaar1-2') ? '' : 'rotate-180'}`}
                      />
                    </div>
                  </CardHeader>
                </div>
                {!isSectionCollapsed('jaar1-2') && (
                  <CardContent className="p-6">
                    {/* Expand/Collapse All Buttons */}
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => expandAllOutcomes('leerlijn-jaar1-2')}
                        className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                      >
                        Alles uitklappen
                      </button>
                      <button
                        onClick={() => collapseAllOutcomes('leerlijn-jaar1-2')}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        Alles inklappen
                      </button>
                    </div>
                    <div className="space-y-4">
                      {['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'].map(outcome => 
                        renderOutcomeWithSemesters(outcome as LearningOutcome, [1, 2, 3, 4], 'leerlijn-jaar1-2')
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Specialisaties */}
              <Card className="border-2 border-blue-400 rounded-xl overflow-hidden">
                <div 
                  onClick={() => toggleSection('specialisaties')}
                  className="cursor-pointer hover:bg-blue-50 transition-colors"
                >
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-300">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-blue-900">Specialisaties</CardTitle>
                      <ChevronDown 
                        className={`w-6 h-6 text-blue-700 transition-transform duration-200 ${isSectionCollapsed('specialisaties') ? '' : 'rotate-180'}`}
                      />
                    </div>
                  </CardHeader>
                </div>
                {!isSectionCollapsed('specialisaties') && (
                  <CardContent className="p-6">
                    {/* Expand/Collapse All Buttons */}
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => expandAllOutcomes('leerlijn-specialisaties')}
                        className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                      >
                        Alles uitklappen
                      </button>
                      <button
                        onClick={() => collapseAllOutcomes('leerlijn-specialisaties')}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        Alles inklappen
                      </button>
                    </div>
                    {renderLeerlijnSpecializations('leerlijn-specialisaties')}
                  </CardContent>
                )}
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}