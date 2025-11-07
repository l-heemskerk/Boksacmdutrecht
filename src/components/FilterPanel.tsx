import { LearningOutcome, CompetencyType, learningOutcomeLabels, learningOutcomeColors } from '../types/curriculum';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Filter, ChevronLeft, Brain, Zap, Heart } from 'lucide-react';
import { useState } from 'react';

interface FilterPanelProps {
  selectedOutcomes: string[];
  searchQuery: string;
  selectedCompetencies: CompetencyType[];
  onOutcomeChange: (outcomes: string[]) => void;
  onSearchChange: (query: string) => void;
  onCompetencyChange: (competencies: CompetencyType[]) => void;
}

export function FilterPanel({
  selectedOutcomes,
  searchQuery,
  selectedCompetencies,
  onOutcomeChange,
  onSearchChange,
  onCompetencyChange
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
  
  const competencyLabels: Record<CompetencyType, string> = {
    kennis: 'Kennis',
    vaardigheden: 'Vaardigheden',
    houding: 'Houding'
  };

  const competencyIcons: Record<CompetencyType, typeof Brain> = {
    kennis: Brain,
    vaardigheden: Zap,
    houding: Heart
  };

  const competencyColors: Record<CompetencyType, string> = {
    kennis: 'text-blue-600',
    vaardigheden: 'text-orange-600',
    houding: 'text-pink-600'
  };

  const toggleOutcome = (outcome: string) => {
    if (selectedOutcomes.includes(outcome)) {
      onOutcomeChange(selectedOutcomes.filter(o => o !== outcome));
    } else {
      onOutcomeChange([...selectedOutcomes, outcome]);
    }
  };

  const toggleCompetency = (competency: CompetencyType) => {
    if (selectedCompetencies.includes(competency)) {
      onCompetencyChange(selectedCompetencies.filter(c => c !== competency));
    } else {
      onCompetencyChange([...selectedCompetencies, competency]);
    }
  };

  return (
    <div className="sticky top-24">
      <Card className="border-2 shadow-lg">
        <CardHeader 
          className="bg-gradient-to-br from-blue-50 to-white border-b-2 border-blue-100 cursor-pointer hover:bg-blue-100/50 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-blue-900">Filters</CardTitle>
            </div>
            <ChevronLeft 
              className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}
            />
          </div>
        </CardHeader>
        {isExpanded && (
          <CardContent className="space-y-6 pt-6">

            {/* Leeruitkomsten */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-900">Leeruitkomsten</h3>
                {selectedOutcomes.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOutcomeChange([]);
                    }}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Wis
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors">
                    <Checkbox
                      id={`outcome-${outcome}`}
                      checked={selectedOutcomes.includes(outcome)}
                      onCheckedChange={() => toggleOutcome(outcome)}
                    />
                    <Label
                      htmlFor={`outcome-${outcome}`}
                      className="flex-1 cursor-pointer"
                    >
                      <Badge
                        variant="outline"
                        className={`${learningOutcomeColors[outcome]} w-full justify-center`}
                      >
                        {learningOutcomeLabels[outcome]}
                      </Badge>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Competenties filter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-900">Competenties</h3>
                {selectedCompetencies.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCompetencyChange([]);
                    }}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Wis
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {(Object.keys(competencyLabels) as CompetencyType[]).map((comp) => {
                  const Icon = competencyIcons[comp];
                  return (
                    <div key={comp} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={`comp-${comp}`}
                        checked={selectedCompetencies.includes(comp)}
                        onCheckedChange={() => toggleCompetency(comp)}
                      />
                      <Label htmlFor={`comp-${comp}`} className="cursor-pointer flex-1 flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${competencyColors[comp]}`} />
                        {competencyLabels[comp]}
                      </Label>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
