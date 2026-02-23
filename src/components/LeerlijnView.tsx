import { useState } from 'react';
import { Speelveld, speelvelden, getSpeelveldForItem } from '../data/speelvelden';
import { getLeerlijnProgressions, LeerlijnSemesterDetail } from '../data/leerlijnProgressions';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronRight, Brain, Zap, Heart, BookOpen, Network, TrendingUp, X } from 'lucide-react';
import { semesters } from '../data/mockData';
import { learningOutcomeLabels, learningOutcomeColors, LearningOutcome } from '../types/curriculum';
import { getHoudingBySemester } from '../data/houdingPerLeeruitkomst';
import { semesterLevels } from '../data/semesterLevels';
import { TimelineCard } from './TimelineCard';

interface LeerlijnViewProps {
  searchQuery: string;
}

const semesterColors: Record<number, { bg: string; border: string; text: string }> = {
  1: { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-900' },
  2: { bg: 'bg-indigo-100', border: 'border-indigo-400', text: 'text-indigo-900' },
  3: { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-900' },
  4: { bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-900' },
  5: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-900' },
  6: { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-900' },
  7: { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-900' },
};

export function LeerlijnView({ searchQuery }: LeerlijnViewProps) {
  const [selectedSpeelveld, setSelectedSpeelveld] = useState<Speelveld>('Design');
  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);
  const [expandedOutcomes, setExpandedOutcomes] = useState<Record<string, boolean>>({});
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('immersive-design');
  const [selectedSchemaSpecialization, setSelectedSchemaSpecialization] = useState<string>('immersive-design'); // Separate state for schema

  const toggleSemester = (semester: number) => {
    // Als het huidige semester al open is, sluit het. Anders open het nieuwe en sluit de rest
    setExpandedSemester(prev => prev === semester ? null : semester);
  };

  const isSemesterExpanded = (semester: number) => {
    return expandedSemester === semester;
  };
  
  const toggleOutcome = (semesterId: number, outcome: string) => {
    const key = `${semesterId}-${outcome}`;
    setExpandedOutcomes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const isOutcomeExpanded = (semesterId: number, outcome: string) => {
    const key = `${semesterId}-${outcome}`;
    return expandedOutcomes[key] || false;
  };

  // Speelveld descriptions
  const speelveldDescriptions: Record<Speelveld, string> = {
    'Design': 'CMD\'ers brengen de huidige en gewenste situatie in kaart en benaderen het ontwerpprobleem vanuit verschillende perspectieven. Ze verkennen oplossingen, passen creatieve methoden toe om ideeën te genereren en te wegen, en werken prototypes uit van low-fidelity tot high-fidelity.',
    'Technologie & AI': 'CMD\'ers analyseren mogelijkheden van relevante technologieën en experimenteren met verschillende digitale technieken als onderdeel van de ontwerpoplossing. Ze maken prototypes om de context te begrijpen en keuzes te maken.',
    'Mens & Ervaring': 'CMD\'ers brengen gebruikers, hun wensen en de gebruikscontext in kaart. Ze betrekken gebruikers en belanghebbenden actief bij het ontwerpproces en toetsen de gebruiksvriendelijkheid en kwaliteit van de gebruikerservaring.',
    'Maatschappij & Toekomst': 'CMD\'ers zijn betrokken bij wat er speelt in de samenleving en houden rekening met de maatschappelijke impact van hun ontwerpen. Ze verkennen gevoeligheden, dilemma\'s en kwesties met behulp van scenario\'s en prototypen.',
    'Organisatie & Strategie': 'CMD\'ers stellen zich op de hoogte van nieuwe ontwikkelingen in de markt en organisatie. Ze identificeren belangen van verschillende stakeholders en brengen spanningsvelden in kaart.',
    'Onderzoekend Vermogen': 'CMD\'ers leven zich in in het probleem van de opdrachtgever en zoeken naar de vraag achter de vraag. Ze brengen het communicatieprobleem systematisch in kaart en passen evaluatiemethoden en technieken toe.'
  };

  // Get progressions for selected leerlijn
  const progressions = getLeerlijnProgressions(selectedLeerlijn);

  // Get competencies per semester and outcome for selected leerlijn
  const getCompetenciesForSemester = (semesterNum: number, specializationId?: string) => {
    const semester = semesters.find(s => s.number === semesterNum);
    if (!semester) return null;

    const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
    const competenciesByOutcome: Record<LearningOutcome, { kennis: Array<{text: string, activity: string}>; vaardigheden: Array<{text: string, activity: string}>; houding: string | string[] }> = {
      context: { kennis: [], vaardigheden: [], houding: [] },
      ontwerpen: { kennis: [], vaardigheden: [], houding: [] },
      prototype: { kennis: [], vaardigheden: [], houding: [] },
      verbinden: { kennis: [], vaardigheden: [], houding: [] },
      reflecteren: { kennis: [], vaardigheden: [], houding: [] }
    };

    // Collect from activities - filter by specialization if provided
    let activities = semester.specializations 
      ? semester.specializations.find(spec => spec.id === specializationId)?.activities || []
      : semester.activities;

    activities.forEach(activity => {
      if (!activity.learningOutcomeDetails) return;

      activity.learningOutcomeDetails.forEach(detail => {
        const outcome = detail.outcome as LearningOutcome;
        
        // Filter kennis by leerlijn and add activity name
        const filteredKennis = detail.kennis.filter(k => 
          getLeerlijnForItem(k).includes(selectedLeerlijn)
        ).map(k => ({ text: k, activity: activity.name }));
        competenciesByOutcome[outcome].kennis.push(...filteredKennis);

        // Filter vaardigheden by leerlijn and add activity name
        const filteredVaardigheden = detail.vaardigheden.filter(v => 
          getLeerlijnForItem(v).includes(selectedLeerlijn)
        ).map(v => ({ text: v, activity: activity.name }));
        competenciesByOutcome[outcome].vaardigheden.push(...filteredVaardigheden);
      });
    });

    // Get houding
    const houdingData = getHoudingBySemester(semesterNum);
    outcomes.forEach(outcome => {
      const houdingForOutcome = houdingData.find(h => h.outcome === outcome);
      if (houdingForOutcome) {
        // Split description into bullet points if it's a string
        if (typeof houdingForOutcome.description === 'string') {
          // Split on sentences and clean up
          const bullets = houdingForOutcome.description
            .split(/\.\s+/)
            .map(s => s.trim())
            .filter(s => s.length > 0)
            .map(s => s.endsWith('.') ? s : s + '.');
          competenciesByOutcome[outcome].houding = bullets;
        } else {
          competenciesByOutcome[outcome].houding = houdingForOutcome.description;
        }
      }
    });

    // Remove duplicates based on text
    outcomes.forEach(outcome => {
      const uniqueKennis = new Map();
      competenciesByOutcome[outcome].kennis.forEach(k => {
        if (!uniqueKennis.has(k.text)) {
          uniqueKennis.set(k.text, k);
        }
      });
      competenciesByOutcome[outcome].kennis = Array.from(uniqueKennis.values());

      const uniqueVaardigheden = new Map();
      competenciesByOutcome[outcome].vaardigheden.forEach(v => {
        if (!uniqueVaardigheden.has(v.text)) {
          uniqueVaardigheden.set(v.text, v);
        }
      });
      competenciesByOutcome[outcome].vaardigheden = Array.from(uniqueVaardigheden.values());
    });

    return competenciesByOutcome;
  };

  return (
    <div className="space-y-6 relative">
      {/* Introductie tekst - bovenaan, niet sticky */}
      {showIntro && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm -mt-6">
          <div className="flex items-start justify-between gap-4 p-6">
            <div className="flex-1">
              <h2 className="text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Leerlijnen
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Leerlijnen vormen de rode draad door het curriculum en tonen de ontwikkeling van kennis, vaardigheden en houding over alle semesters. 
                Elke leerlijn ontwikkelt zich van beginnend niveau in jaar 1 tot expert niveau in jaar 4. 
                Selecteer hieronder een leerlijn om te zien hoe deze zich ontwikkelt door de tijd.
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

      {/* Filter bar - horizontaal, sticky */}
      <div className="sticky top-0 z-30 bg-white rounded-lg shadow-lg p-4 mb-6">
        <h3 className="text-sm text-gray-900 mb-3">
          Selecteer Leerlijn
        </h3>
        <div className="flex flex-wrap gap-2">
          {leerlijnen.map(leerlijn => (
            <Badge
              key={leerlijn}
              variant={selectedLeerlijn === leerlijn ? "default" : "outline"}
              className={`cursor-pointer transition-all py-2 px-4 text-sm whitespace-nowrap ${
                selectedLeerlijn === leerlijn
                  ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400'
              }`}
              onClick={() => setSelectedLeerlijn(leerlijn)}
            >
              {leerlijn}
            </Badge>
          ))}
        </div>
      </div>

      {/* Horizontale Tijdlijn */}
      <div className="space-y-6">
        {/* Scrollbare semester tijdlijn + uitklapbaar schema */}
        <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
          <div className="p-6">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-600" />
              {selectedLeerlijn}
            </h3>
            
            {/* Leerlijn beschrijving - binnen border */}
            {showDescription && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm mb-6">
                <div className="flex items-start justify-between gap-4 p-6">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {leerlijnDescriptions[selectedLeerlijn]}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDescription(false)}
                    className="flex-shrink-0 p-1 hover:bg-blue-100 rounded transition-colors"
                    aria-label="Verberg beschrijving"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Horizontale scrollbare tijdlijn */}
          <div className="overflow-x-auto pb-4 px-4 sm:px-2">
            <div className="flex gap-4 min-w-max px-2">
              {progressions.map((progression, index) => {
                const semColor = semesterColors[progression.semester];
                const semester = semesters.find(s => s.number === progression.semester);
                const isExpanded = isSemesterExpanded(progression.semester);
                const competencies = getCompetenciesForSemester(progression.semester, selectedSpecialization);
                
                // Get year based on semester
                const getYear = (sem: number) => {
                  if (sem <= 2) return 1;
                  if (sem <= 4) return 2;
                  if (sem <= 6) return 3;
                  return 4;
                };
                
                // Check if there are any competencies for this leerlijn
                const hasAnyContent = competencies && (['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'] as LearningOutcome[]).some(outcome => {
                  const data = competencies[outcome];
                  return (data.kennis && data.kennis.length > 0) || (data.vaardigheden && data.vaardigheden.length > 0) || 
                    (Array.isArray(data.houding) ? data.houding.length > 0 : data.houding);
                });
                
                return (
                  <div key={progression.semester} className="flex items-start gap-4">
                    {/* Semester Card */}
                    <div className="relative">
                      {/* Connecting line */}
                      {index < progressions.length - 1 && (
                        <div className="absolute top-12 left-full w-4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 z-0" />
                      )}
                      
                      <div className={`rounded-lg border-2 ${semColor.border} ${semColor.bg} overflow-hidden transition-all w-64 h-80 flex flex-col ${isExpanded ? 'shadow-lg ring-2 ring-blue-400' : 'shadow-sm hover:shadow-md'}`}>
                        {/* Header - Always Visible */}
                        <button
                          onClick={() => toggleSemester(progression.semester)}
                          className="flex-1 text-left p-4 hover:bg-white/30 transition-colors flex flex-col"
                        >
                          <div className="flex-1 space-y-3">
                            {/* Expand/Collapse Icon - Top Right */}
                            <div className="flex items-center justify-end">
                              {isExpanded ? (
                                <ChevronDown className="w-5 h-5 text-gray-700" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-700" />
                              )}
                            </div>
                            
                            {/* Semester Info */}
                            <div>
                              <h4 className="text-gray-900 mb-1">{semester?.name}</h4>
                              <div className="text-xs text-gray-600 space-y-0.5">
                                <div>Jaar {getYear(progression.semester)}</div>
                                <div>{semesterLevels[progression.semester]}</div>
                              </div>
                              <p className="text-sm text-gray-700 mt-2 line-clamp-3">{progression.globalDescription}</p>
                            </div>
                            
                            {/* Badge */}
                            {hasAnyContent && (
                              <Badge variant="secondary" className="bg-white/80 text-gray-700 text-xs">
                                Toon competenties
                              </Badge>
                            )}
                          </div>
                        </button>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Uitklapbaar schema - onder de tijdlijn */}
          {expandedSemester !== null && (() => {
            const progression = progressions.find(p => p.semester === expandedSemester);
            if (!progression) return null;
            
            const semColor = semesterColors[expandedSemester];
            const semester = semesters.find(s => s.number === expandedSemester);
            const competencies = getCompetenciesForSemester(expandedSemester, selectedSchemaSpecialization);
            
            // Get year based on semester
            const getYear = (sem: number) => {
              if (sem <= 2) return 1;
              if (sem <= 4) return 2;
              if (sem <= 6) return 3;
              return 4;
            };
            
            // Check if there are any competencies for this leerlijn
            const hasAnyContent = competencies && (['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'] as LearningOutcome[]).some(outcome => {
              const data = competencies[outcome];
              return (data.kennis && data.kennis.length > 0) || (data.vaardigheden && data.vaardigheden.length > 0) || 
                (Array.isArray(data.houding) ? data.houding.length > 0 : data.houding);
            });
            
            return (
              <div className="border-t-2 border-gray-300 bg-gray-50 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-2 ${semColor.bg} rounded-lg border-2 ${semColor.border} shadow-sm`}>
                      <span className={`${semColor.text}`}>
                        <span className="opacity-60">Semester</span> <span className="font-semibold">{expandedSemester}</span>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-900">Competenties voor {selectedLeerlijn}</h3>
                      <div className="text-sm text-gray-600">
                        {semester?.name} • Jaar {getYear(expandedSemester)} • {semesterLevels[expandedSemester]}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSemester(expandedSemester)}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                    aria-label="Sluit schema"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {!hasAnyContent ? (
                  /* Lege state */
                  <div className="text-center py-12 px-4 bg-white rounded-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
                      <BookOpen className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600">
                      De leerlijn <span className="font-semibold">{selectedLeerlijn}</span> wordt niet toegepast binnen dit semester.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Specialization Selector for Semester 6 - in schema */}
                    {expandedSemester === 6 && semester?.specializations && (
                      <div className="mb-6 p-4 bg-white rounded-lg border-2 border-amber-400">
                        <label className="block text-sm text-gray-900 mb-3">Kies specialisatie voor schema:</label>
                        <div className="flex gap-3">
                          {semester.specializations.map(spec => (
                            <button
                              key={spec.id}
                              className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all text-sm ${
                                selectedSchemaSpecialization === spec.id
                                  ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                                  : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-400'
                              }`}
                              onClick={() => setSelectedSchemaSpecialization(spec.id)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{spec.name}</span>
                                {selectedSchemaSpecialization === spec.id && (
                                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center ml-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                  </div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Competencies per Learning Outcome - Accordion Style */}
                    <div className="space-y-3">
                      {(['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'] as LearningOutcome[]).map((outcome) => {
                        if (!competencies) return null;
                        const data = competencies[outcome];
                        const hasContent = (data.kennis && data.kennis.length > 0) || 
                                          (data.vaardigheden && data.vaardigheden.length > 0) || 
                                          (Array.isArray(data.houding) ? data.houding.length > 0 : data.houding);
                        
                        if (!hasContent) return null;

                        const outcomeColorBg = learningOutcomeColors[outcome];
                        const currentIsOutcomeExpanded = isOutcomeExpanded(expandedSemester, outcome);

                        return (
                          <div key={outcome} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            {/* Outcome Header */}
                            <button
                              onClick={() => toggleOutcome(expandedSemester, outcome)}
                              className={`w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-gray-900">{learningOutcomeLabels[outcome]}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {(data.kennis?.length || 0) + (data.vaardigheden?.length || 0) + (Array.isArray(data.houding) ? data.houding.length : (data.houding ? 1 : 0))} items
                                </Badge>
                              </div>
                              {currentIsOutcomeExpanded ? (
                                <ChevronDown className="w-4 h-4 text-gray-600" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-600" />
                              )}
                            </button>
                            
                            {/* Outcome Content */}
                            {currentIsOutcomeExpanded && (
                              <div className="border-t border-gray-200 p-6 bg-gray-50 grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Kennis */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Brain className="w-4 h-4 text-blue-600" />
                                    <h5 className="text-sm text-gray-900">Kennis</h5>
                                  </div>
                                  {data.kennis && data.kennis.length > 0 ? (
                                    <ul className="space-y-2">
                                      {data.kennis.map((k, idx) => (
                                        <li key={idx} className="text-sm text-gray-700 bg-white rounded p-3 border border-gray-200">
                                          <div className="mb-1">{k.text}</div>
                                          <div className="text-xs text-gray-500">({k.activity})</div>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-gray-400 italic">Geen kennis gedefinieerd</p>
                                  )}
                                </div>
                                
                                {/* Vaardigheden */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Zap className="w-4 h-4 text-orange-600" />
                                    <h5 className="text-sm text-gray-900">Vaardigheden</h5>
                                  </div>
                                  {data.vaardigheden && data.vaardigheden.length > 0 ? (
                                    <ul className="space-y-2">
                                      {data.vaardigheden.map((v, idx) => (
                                        <li key={idx} className="text-sm text-gray-700 bg-white rounded p-3 border border-gray-200">
                                          <div className="mb-1">{v.text}</div>
                                          <div className="text-xs text-gray-500">({v.activity})</div>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-gray-400 italic">Geen vaardigheden gedefinieerd</p>
                                  )}
                                </div>
                                
                                {/* Houding */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Heart className="w-4 h-4 text-pink-600" />
                                    <h5 className="text-sm text-gray-900">Houding</h5>
                                  </div>
                                  {data.houding ? (
                                    typeof data.houding === 'string' ? (
                                      <div className="text-sm text-gray-700 bg-white rounded p-3 border border-gray-200">
                                        {data.houding}
                                      </div>
                                    ) : Array.isArray(data.houding) && data.houding.length > 0 ? (
                                      <ul className="space-y-2">
                                        {data.houding.map((h, idx) => (
                                          <li key={idx} className="text-sm text-gray-700 bg-white rounded p-3 border border-gray-200">
                                            {h}
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-sm text-gray-400 italic">Geen houding gedefinieerd</p>
                                    )
                                  ) : (
                                    <p className="text-sm text-gray-400 italic">Geen houding gedefinieerd</p>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}