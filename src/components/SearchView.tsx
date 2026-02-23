import { useState, useMemo, useEffect } from 'react';
import { Search, X, ChevronLeft, ChevronRight, Sparkles, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { semesters, semesterNaamMapping } from '../data/curriculumDataConverter';
import { learningOutcomeLabels, learningOutcomeColors, semesterColors, LearningOutcome } from '../types/curriculum';
import { getLearningOutcomeIcon } from '../utils/learningOutcomeIcons';
import { renderWithCMDMethodsLinks } from '../utils/cmdMethodsLinks';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SearchViewProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

interface SearchResult {
  semester: number;
  semesterName: string;
  activityName: string;
  activityDuration: string;
  learningOutcome: LearningOutcome;
  matchType: 'kennis' | 'vaardigheden' | 'houding';
  matchedText: string;
  context: string; // Surrounding text for context
  speelvelden: string[]; // Speelvelden from activity
  specializationName?: string; // Voor semester 6
}

const quickSearchTerms = [
  { label: 'Concepten', query: 'concept' },
  { label: 'Design Thinking', query: 'design thinking' },
  { label: 'Feedback', query: 'feedback' },
  { label: 'Gedragsverandering', query: 'gedrag' },
  { label: 'Stakeholders', query: 'stakeholder' },
  { label: 'Gestalt', query: 'gestalt' },
  { label: 'Compositie', query: 'compositie' },
];

export function SearchView({ searchQuery, onSearchChange }: SearchViewProps) {
  const [inputValue, setInputValue] = useState(searchQuery || '');
  const [activeSearchQuery, setActiveSearchQuery] = useState(searchQuery || '');
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>(['Brand Design', 'Immersive Design', 'Digital Design']);
  const [selectedOutcomes, setSelectedOutcomes] = useState<LearningOutcome[]>([]);
  const [selectedMatchTypes, setSelectedMatchTypes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [expandedSemesters, setExpandedSemesters] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6, 7]));
  const [expandedFilterSections, setExpandedFilterSections] = useState<Set<string>>(new Set(['matchTypes', 'outcomes', 'specializations']));
  const [showIntro, setShowIntro] = useState(true);

  // Sync state with props
  useEffect(() => {
    if (searchQuery !== inputValue) {
      setInputValue(searchQuery);
    }
    if (searchQuery !== activeSearchQuery) {
      setActiveSearchQuery(searchQuery);
    }
  }, [searchQuery]);

  // Handler for search button click
  const handleSearch = () => {
    setActiveSearchQuery(inputValue);
    onSearchChange(inputValue);
  };

  // Handler for quick search buttons
  const handleQuickSearch = (query: string) => {
    setInputValue(query);
    setActiveSearchQuery(query);
    onSearchChange(query);
  };

  // Handler for clearing search
  const handleClearSearch = () => {
    setInputValue('');
    setActiveSearchQuery('');
    onSearchChange('');
  };

  // Handler for Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Helper function to check if text contains search query
  const containsQuery = (text: string | undefined, query: string): boolean => {
    if (!text || !query || typeof text !== 'string') return false;
    return text.toLowerCase().includes(query.toLowerCase());
  };

  // Helper function to get context around match
  const getContext = (text: string, query: string, maxLength: number = 150): string => {
    if (!text || typeof text !== 'string') return '';
    
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) return text.substring(0, maxLength);
    
    const start = Math.max(0, index - 50);
    const end = Math.min(text.length, index + query.length + 100);
    
    let context = text.substring(start, end);
    if (start > 0) context = '...' + context;
    if (end < text.length) context = context + '...';
    
    return context;
  };

  // Helper function to highlight search query in text
  const highlightQuery = (text: string, query: string) => {
    if (!query || !text || typeof text !== 'string') return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={index} className="bg-yellow-200 px-0.5 rounded">{part}</mark>
        : part
    );
  };

  // Search through all curriculum data
  const searchResults = useMemo(() => {
    if (!activeSearchQuery.trim()) return [];
    
    const results: SearchResult[] = [];
    const query = activeSearchQuery.trim();

    semesters.forEach(semester => {
      // Search in regular activities
      semester.activities.forEach(activity => {
        // Search in learning outcome details (kennis, vaardigheden, houding only)
        activity.learningOutcomeDetails?.forEach(detail => {
          // Search in kennis
          detail.kennis?.forEach(kennisItem => {
            if (containsQuery(kennisItem, query)) {
              results.push({
                semester: semester.number,
                semesterName: semester.name,
                activityName: activity.name,
                activityDuration: activity.duration,
                learningOutcome: detail.outcome,
                matchType: 'kennis',
                matchedText: kennisItem,
                context: kennisItem,
                speelvelden: activity.speelvelden || []
              });
            }
          });

          // Search in vaardigheden
          detail.vaardigheden?.forEach(vaardigheid => {
            if (containsQuery(vaardigheid, query)) {
              results.push({
                semester: semester.number,
                semesterName: semester.name,
                activityName: activity.name,
                activityDuration: activity.duration,
                learningOutcome: detail.outcome,
                matchType: 'vaardigheden',
                matchedText: vaardigheid,
                context: vaardigheid,
                speelvelden: activity.speelvelden || []
              });
            }
          });

          // Search in houding
          detail.houding?.forEach(houdingItem => {
            if (containsQuery(houdingItem, query)) {
              results.push({
                semester: semester.number,
                semesterName: semester.name,
                activityName: activity.name,
                activityDuration: activity.duration,
                learningOutcome: detail.outcome,
                matchType: 'houding',
                matchedText: houdingItem,
                context: houdingItem,
                speelvelden: activity.speelvelden || []
              });
            }
          });
        });
      });

      // Search in specializations (semester 6)
      semester.specializations?.forEach(spec => {
        spec.activities.forEach(activity => {
          activity.learningOutcomeDetails?.forEach(detail => {
            detail.kennis?.forEach(kennisItem => {
              if (containsQuery(kennisItem, query)) {
                results.push({
                  semester: semester.number,
                  semesterName: semester.name,
                  activityName: activity.name,
                  activityDuration: activity.duration,
                  learningOutcome: detail.outcome,
                  matchType: 'kennis',
                  matchedText: kennisItem,
                  context: kennisItem,
                  specializationName: spec.name,
                  speelvelden: activity.speelvelden || []
                });
              }
            });

            detail.vaardigheden?.forEach(vaardigheid => {
              if (containsQuery(vaardigheid, query)) {
                results.push({
                  semester: semester.number,
                  semesterName: semester.name,
                  activityName: activity.name,
                  activityDuration: activity.duration,
                  learningOutcome: detail.outcome,
                  matchType: 'vaardigheden',
                  matchedText: vaardigheid,
                  context: vaardigheid,
                  specializationName: spec.name,
                  speelvelden: activity.speelvelden || []
                });
              }
            });

            detail.houding?.forEach(houdingItem => {
              if (containsQuery(houdingItem, query)) {
                results.push({
                  semester: semester.number,
                  semesterName: semester.name,
                  activityName: activity.name,
                  activityDuration: activity.duration,
                  learningOutcome: detail.outcome,
                  matchType: 'houding',
                  matchedText: houdingItem,
                  context: houdingItem,
                  specializationName: spec.name,
                  speelvelden: activity.speelvelden || []
                });
              }
            });
          });
        });
      });
    });

    return results;
  }, [activeSearchQuery]);

  // Filter results
  const filteredResults = useMemo(() => {
    let filtered = searchResults;

    // Filter by specialization
    if (selectedSpecializations.length > 0) {
      filtered = filtered.filter(r => !r.specializationName || selectedSpecializations.includes(r.specializationName));
    }

    // Filter by learning outcome
    if (selectedOutcomes.length > 0) {
      filtered = filtered.filter(r => selectedOutcomes.includes(r.learningOutcome));
    }

    // Filter by match type
    if (selectedMatchTypes.length > 0) {
      filtered = filtered.filter(r => selectedMatchTypes.includes(r.matchType));
    }

    return filtered;
  }, [searchResults, selectedSpecializations, selectedOutcomes, selectedMatchTypes]);

  // Group results by semester
  const resultsBySemester = useMemo(() => {
    const grouped = new Map<number, SearchResult[]>();
    
    filteredResults.forEach(result => {
      if (!grouped.has(result.semester)) {
        grouped.set(result.semester, []);
      }
      grouped.get(result.semester)!.push(result);
    });

    return grouped;
  }, [filteredResults]);

  // Calculate statistics
  const statistics = useMemo(() => {
    const stats = {
      totalMatches: filteredResults.length,
      semesterCount: resultsBySemester.size,
      byOutcome: {} as Record<string, number>,
      byMatchType: {} as Record<string, number>,
      bySemester: {} as Record<number, number>
    };

    filteredResults.forEach(result => {
      // Count by outcome
      stats.byOutcome[result.learningOutcome] = (stats.byOutcome[result.learningOutcome] || 0) + 1;
      
      // Count by match type
      stats.byMatchType[result.matchType] = (stats.byMatchType[result.matchType] || 0) + 1;
      
      // Count by semester
      stats.bySemester[result.semester] = (stats.bySemester[result.semester] || 0) + 1;
    });

    return stats;
  }, [filteredResults, resultsBySemester]);

  // Match type labels
  const matchTypeLabels: Record<string, string> = {
    'kennis': 'Kennis',
    'vaardigheden': 'Vaardigheden',
    'houding': 'Houding'
  };

  const toggleSpecialization = (spec: string) => {
    setSelectedSpecializations(prev =>
      prev.includes(spec) ? prev.filter(s => s !== spec) : [...prev, spec]
    );
  };

  const toggleOutcome = (outcome: LearningOutcome) => {
    setSelectedOutcomes(prev =>
      prev.includes(outcome) ? prev.filter(o => o !== outcome) : [...prev, outcome]
    );
  };

  const toggleMatchType = (type: string) => {
    setSelectedMatchTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleSemesterExpansion = (sem: number) => {
    setExpandedSemesters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sem)) {
        newSet.delete(sem);
      } else {
        newSet.add(sem);
      }
      return newSet;
    });
  };

  const toggleFilterSection = (section: string) => {
    setExpandedFilterSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      {showIntro && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm">
          <div className="flex items-start justify-between gap-4 p-6">
            <div className="flex-1">
              <h2 className="text-gray-900 mb-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" />
                Zoeken in BoKSA
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Zoek door het hele curriculum om te ontdekken waar competenties en vakinhoudelijke thema's terugkomen. 
                Deze zoekfunctie toont hoe specifieke concepten, kennis, vaardigheden en houdingen zich ontwikkelen door de semesters, 
                met kleurcodering per leeruitkomst.
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

      {/* Search Bar */}
      <Card className="border-2 border-blue-300 shadow-lg">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500" />
                <Input
                  type="text"
                  placeholder="Zoek naar kennis, vaardigheden of houding in het curriculum..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-14 pr-12 h-14 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-lg shadow-sm"
                />
                {inputValue && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}
              </div>
              <Button
                onClick={handleSearch}
                disabled={!inputValue.trim()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 text-lg rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search className="w-5 h-5 mr-2" />
                Zoeken
              </Button>
            </div>

            {/* Quick Search Buttons */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Snelle zoekopdrachten:</p>
              <div className="flex flex-wrap gap-2">
                {quickSearchTerms.map(term => (
                  <button
                    key={term.query}
                    onClick={() => handleQuickSearch(term.query)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                      activeSearchQuery.toLowerCase() === term.query.toLowerCase()
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    {term.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            {activeSearchQuery && (
              <div className="flex items-center justify-center pt-2 border-t">
                <p className="text-sm text-gray-600">
                  {filteredResults.length} {filteredResults.length === 1 ? 'resultaat' : 'resultaten'} gevonden
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Filters and Statistics */}
      {activeSearchQuery && searchResults.length > 0 && (
        <div className="relative flex gap-6">
          {/* Filters Sidebar - Collapsible */}
          <div className={`transition-all duration-300 ${showFilters ? 'w-80' : 'w-12'}`}>
            <Card className="sticky top-6 h-fit">
              {!showFilters ? (
                <button
                  onClick={() => setShowFilters(true)}
                  className="w-full p-3 flex items-center justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <>
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Filters</CardTitle>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-1 rounded transition-colors"
                        title="Filters verbergen"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-2">
                      {/* Match Type Filter - EERST */}
                      <div className="border rounded-lg">
                        <button
                          onClick={() => toggleFilterSection('matchTypes')}
                          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm text-gray-900">Zoek in</span>
                          {expandedFilterSections.has('matchTypes') ? (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                        {expandedFilterSections.has('matchTypes') && (
                          <div className="px-3 pb-3 space-y-2">
                            {Object.entries(matchTypeLabels).map(([type, label]) => (
                              <label
                                key={type}
                                className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer"
                              >
                                <Checkbox
                                  checked={selectedMatchTypes.includes(type)}
                                  onCheckedChange={() => toggleMatchType(type)}
                                />
                                <span className="text-sm">{label}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Learning Outcome Filter - TWEEDE */}
                      <div className="border rounded-lg">
                        <button
                          onClick={() => toggleFilterSection('outcomes')}
                          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm text-gray-900">Leeruitkomsten</span>
                          {expandedFilterSections.has('outcomes') ? (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                        {expandedFilterSections.has('outcomes') && (
                          <div className="px-3 pb-3 space-y-2">
                            {(['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'] as LearningOutcome[]).map(outcome => (
                              <label
                                key={outcome}
                                className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${
                                  selectedOutcomes.includes(outcome) ? learningOutcomeColors[outcome] : 'hover:bg-gray-50'
                                }`}
                              >
                                <Checkbox
                                  checked={selectedOutcomes.includes(outcome)}
                                  onCheckedChange={() => toggleOutcome(outcome)}
                                />
                                <span className="text-sm">{learningOutcomeLabels[outcome]}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Specialization Filter - DERDE */}
                      <div className="border rounded-lg">
                        <button
                          onClick={() => toggleFilterSection('specializations')}
                          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm text-gray-900">Specialisaties</span>
                          {expandedFilterSections.has('specializations') ? (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                        {expandedFilterSections.has('specializations') && (
                          <div className="px-3 pb-3 space-y-2">
                            {['Brand Design', 'Immersive Design', 'Digital Design'].map(spec => (
                              <label
                                key={spec}
                                className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 cursor-pointer"
                              >
                                <Checkbox
                                  checked={selectedSpecializations.includes(spec)}
                                  onCheckedChange={() => toggleSpecialization(spec)}
                                />
                                <span className="text-sm">{spec}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          </div>

          {/* Statistics and Results */}
          <div className="flex-1 space-y-6">
            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistieken</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  {/* Left side: Statistics boxes */}
                  <div className="flex-1 space-y-4">
                    {/* Total matches */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-blue-700 mb-1">Totaal matches</p>
                      <p className="text-2xl text-blue-900">{statistics.totalMatches}</p>
                    </div>

                    {/* Semester spread */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-blue-700 mb-1">Semesters</p>
                      <p className="text-2xl text-blue-900">{statistics.semesterCount} / 7</p>
                    </div>

                    {/* Top learning outcome */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-green-700 mb-1">Meest voorkomend speelveld</p>
                      <p className="text-lg text-green-900">
                        {Object.entries(statistics.byOutcome).sort((a, b) => b[1] - a[1])[0]?.[0] 
                          ? learningOutcomeLabels[Object.entries(statistics.byOutcome).sort((a, b) => b[1] - a[1])[0][0] as LearningOutcome]
                          : '-'}
                      </p>
                    </div>
                  </div>

                  {/* Right side: Pie chart */}
                  <div className="flex-1">
                    <div>
                      <p className="text-sm text-gray-700 mb-2">Verdeling over semesters:</p>
                      <ResponsiveContainer width="100%" height={280}>
                        <PieChart>
                          <Pie
                            data={[1, 2, 3, 4, 5, 7].map(sem => ({
                              name: `Semester ${sem}`,
                              value: statistics.bySemester[sem] || 0,
                              semester: sem
                            })).filter(item => item.value > 0)}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name.replace('Semester ', 'S')}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {[1, 2, 3, 4, 5, 7].map(sem => {
                              const count = statistics.bySemester[sem] || 0;
                              if (count === 0) return null;
                              const semColor = semesterColors[sem];
                              // Extract the color from the Tailwind class
                              const colorMap: Record<number, string> = {
                                1: '#0ea5e9', // sky
                                2: '#3b82f6', // blue
                                3: '#6366f1', // indigo
                                4: '#8b5cf6', // violet
                                5: '#a855f7', // purple
                                7: '#ec4899', // pink
                              };
                              return <Cell key={`cell-${sem}`} fill={colorMap[sem]} />;
                            })}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Timeline */}
            {activeSearchQuery && (
              <div className="space-y-4">
                {filteredResults.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        {activeSearchQuery ? 'Geen resultaten gevonden voor je zoekopdracht.' : 'Voer een zoekterm in om te beginnen.'}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Probeer een andere zoekterm of pas de filters aan.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-gray-900">
                      Progressie door curriculum
                    </h3>
                    
                    {/* Timeline */}
                    {Array.from(resultsBySemester.entries())
                      .sort((a, b) => a[0] - b[0])
                      .map(([semesterNum, results]) => {
                        const semester = semesters.find(s => s.number === semesterNum)!;
                        const semColor = semesterColors[semesterNum];
                        
                        return (
                          <Card key={semesterNum} className={`border-2 ${semColor.border}`}>
                            <CardHeader 
                              className={`${semColor.bg} border-b-2 ${semColor.border} cursor-pointer hover:opacity-80 transition-opacity`}
                              onClick={() => toggleSemesterExpansion(semesterNum)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {expandedSemesters.has(semesterNum) ? (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                  ) : (
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                  )}
                                  <Badge variant="secondary" className={`${semColor.text} bg-white border-2 ${semColor.border}`}>
                                    Semester {semesterNum}
                                  </Badge>
                                  <CardTitle className={semColor.text}>
                                    {semester.name}
                                  </CardTitle>
                                </div>
                                <Badge variant="outline" className="bg-white">
                                  {results.length} {results.length === 1 ? 'match' : 'matches'}
                                </Badge>
                              </div>
                            </CardHeader>
                            {expandedSemesters.has(semesterNum) && (
                              <CardContent className="pt-6">
                                <div className="space-y-4">
                                  {results.map((result, idx) => {
                                    const outcomeColor = learningOutcomeColors[result.learningOutcome];
                                    
                                    return (
                                      <div
                                        key={idx}
                                        className={`border-l-4 ${outcomeColor.replace('bg-', 'border-').replace('-50', '-300')} pl-4 py-2`}
                                      >
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                              <p className="text-gray-900">
                                                {result.activityName}
                                              </p>
                                              {result.specializationName && (
                                                <Badge variant="outline" className="text-xs">
                                                  {result.specializationName}
                                                </Badge>
                                              )}
                                              <Badge variant="outline" className="text-xs">
                                                {result.activityDuration}
                                              </Badge>
                                            </div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                              <div className={`flex items-center gap-1 px-2 py-0.5 ${outcomeColor} rounded text-xs`}>
                                                {getLearningOutcomeIcon(result.learningOutcome, 'w-3 h-3')}
                                                <span>{learningOutcomeLabels[result.learningOutcome]}</span>
                                              </div>
                                              <Badge variant="secondary" className="text-xs">
                                                {matchTypeLabels[result.matchType]}
                                              </Badge>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="bg-gray-50 rounded p-3 text-sm text-gray-700 border border-gray-200">
                                          {result.context}
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
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}