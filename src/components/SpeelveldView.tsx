import { useState } from 'react';
import { Speelveld, speelvelden, speelveldDescriptions } from '../data/speelvelden';
import { getLeerlijnProgressions } from '../data/leerlijnProgressions';
import { Badge } from './ui/badge';
import { X, TrendingUp, Network, Sparkles } from 'lucide-react';
import { semesterLevels } from '../data/semesterLevels';

interface SpeelveldViewProps {
  searchQuery: string;
}

// Helper function: Get year from semester number
const getYear = (semester: number): number => {
  if (semester <= 2) return 1;
  if (semester <= 4) return 2;
  if (semester <= 6) return 3;
  return 4;
};

// Semester color configuration
const semesterColors: Record<number, { bg: string; border: string; text: string; accent: string }> = {
  1: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-900', accent: 'bg-blue-500' },
  2: { bg: 'bg-indigo-50', border: 'border-indigo-300', text: 'text-indigo-900', accent: 'bg-indigo-500' },
  3: { bg: 'bg-purple-50', border: 'border-purple-300', text: 'text-purple-900', accent: 'bg-purple-500' },
  4: { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-900', accent: 'bg-pink-500' },
  5: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-900', accent: 'bg-orange-500' },
  6: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-900', accent: 'bg-amber-500' },
  7: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-900', accent: 'bg-red-500' },
};

export function SpeelveldView({ searchQuery }: SpeelveldViewProps) {
  const [selectedSpeelveld, setSelectedSpeelveld] = useState<Speelveld>('Design');
  const [selectedSchemaSpecialization, setSelectedSchemaSpecialization] = useState<string>('brand-design');
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Get progressions for selected speelveld (cast to Leerlijn as they have the same values)
  const progressions = getLeerlijnProgressions(selectedSpeelveld as any);

  // Filter progressions to show only selected specialization for semester 6
  const filteredProgressions = progressions.filter(prog => {
    // If not semester 6, show all
    if (prog.semester !== 6) return true;
    
    // If semester 6, only show the selected specialization
    const specializationMap: Record<string, string> = {
      'brand-design': 'Brand Design',
      'immersive-design': 'Immersive Design',
      'digital-design': 'Digital Design'
    };
    
    return prog.semesterName === specializationMap[selectedSchemaSpecialization];
  });

  return (
    <div className="space-y-6 relative">
      {/* Introduction section */}
      {showIntro && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm -mt-6">
          <div className="flex items-start justify-between gap-4 p-6">
            <div className="flex-1">
              <h2 className="text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Speelvelden
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Speelvelden vormen de rode draad door het curriculum en tonen de ontwikkeling van kennis, vaardigheden en houding over alle semesters. 
                Elk speelveld ontwikkelt zich van beginnend niveau in jaar 1 tot expert niveau in jaar 4. 
                Selecteer hieronder een speelveld om te zien hoe deze zich ontwikkelt door de tijd.
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

      {/* Filter bar - sticky */}
      <div className="sticky top-0 z-30 bg-white rounded-lg shadow-lg p-4 mb-6">
        <div>
          <h3 className="text-sm text-gray-900 mb-3">
            Selecteer Speelveld
          </h3>
          <div className="flex flex-wrap gap-2">
            {speelvelden.map(speelveld => (
              <Badge
                key={speelveld}
                variant={selectedSpeelveld === speelveld ? "default" : "outline"}
                className={`cursor-pointer transition-all py-2 px-4 text-sm whitespace-nowrap ${
                  selectedSpeelveld === speelveld
                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400'
                }`}
                onClick={() => setSelectedSpeelveld(speelveld)}
              >
                {speelveld}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Speelveld Overview */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-6">
          <h3 className="text-gray-900 mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-blue-600" />
            {selectedSpeelveld}
          </h3>
          
          {/* Speelveld description */}
          {showDescription && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm mb-6">
              <div className="flex items-start justify-between gap-4 p-6">
                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {speelveldDescriptions[selectedSpeelveld]}
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

          {/* Semester 6 Specialization Selector - Only show if semester 6 exists in progressions */}
          {progressions.some(p => p.semester === 6) && (
            <div className="mb-6 bg-amber-50 rounded-lg border-2 border-amber-300 p-5 shadow-sm">
              <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Selecteer specialisatie voor Semester 6
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedSchemaSpecialization === 'brand-design' ? "default" : "outline"}
                  className={`cursor-pointer transition-all py-2 px-4 text-sm ${
                    selectedSchemaSpecialization === 'brand-design'
                      ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-400'
                  }`}
                  onClick={() => setSelectedSchemaSpecialization('brand-design')}
                >
                  Brand Design
                </Badge>
                <Badge
                  variant={selectedSchemaSpecialization === 'immersive-design' ? "default" : "outline"}
                  className={`cursor-pointer transition-all py-2 px-4 text-sm ${
                    selectedSchemaSpecialization === 'immersive-design'
                      ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-400'
                  }`}
                  onClick={() => setSelectedSchemaSpecialization('immersive-design')}
                >
                  Immersive Design
                </Badge>
                <Badge
                  variant={selectedSchemaSpecialization === 'digital-design' ? "default" : "outline"}
                  className={`cursor-pointer transition-all py-2 px-4 text-sm ${
                    selectedSchemaSpecialization === 'digital-design'
                      ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-400'
                  }`}
                  onClick={() => setSelectedSchemaSpecialization('digital-design')}
                >
                  Digital Design
                </Badge>
              </div>
            </div>
          )}

          {/* Grid layout of semester cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgressions.map((progression) => {
              const semColor = semesterColors[progression.semester];
              const uniqueKey = `${progression.semester}-${progression.semesterName}`;
              
              return (
                <div 
                  key={uniqueKey} 
                  className={`rounded-lg border-2 ${semColor.border} ${semColor.bg} shadow-sm hover:shadow-md transition-all overflow-hidden`}
                >
                  {/* Header with semester number and year */}
                  <div className={`px-5 py-3 border-b-2 ${semColor.border} bg-white`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${semColor.accent}`}></div>
                        <h4 className={`${semColor.text} font-semibold`}>
                          {progression.semester === 6 
                            ? `S6: ${progression.semesterName}`
                            : `Semester ${progression.semester}`
                          }
                        </h4>
                      </div>
                      <Badge variant="outline" className="text-xs bg-white">
                        Jaar {getYear(progression.semester)}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">
                      {semesterLevels[progression.semester]}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    {/* Global Description */}
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {progression.globalDescription}
                      </p>
                    </div>

                    {/* Kernfocus */}
                    {progression.kernfocus && (
                      <div className="pt-3 border-t border-gray-300">
                        <h5 className="text-xs text-gray-600 mb-2 uppercase tracking-wide">
                          Kernfocus
                        </h5>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {progression.kernfocus}
                        </p>
                      </div>
                    )}

                    {/* Typische Activiteiten */}
                    {progression.typischeActiviteiten && progression.typischeActiviteiten.length > 0 && (
                      <div className="pt-3 border-t border-gray-300">
                        <h5 className="text-xs text-gray-600 mb-2 uppercase tracking-wide">
                          Typische Activiteiten
                        </h5>
                        <ul className="space-y-1">
                          {progression.typischeActiviteiten.map((activiteit, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">•</span>
                              <span>{activiteit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export also as LeerlijnView for backwards compatibility
export { SpeelveldView as LeerlijnView };
