import { LearningOutcome, learningOutcomeLabels, learningOutcomeColors } from '../types/curriculum';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface FilterPanelProps {
  selectedOutcomes: string[];
  searchQuery: string;
  onOutcomeChange: (outcomes: string[]) => void;
  onSearchChange: (query: string) => void;
  showOutcomeFilter?: boolean;
}

export function FilterPanel({
  selectedOutcomes,
  searchQuery,
  onOutcomeChange,
  onSearchChange,
  showOutcomeFilter = true
}: FilterPanelProps) {
  const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

  const toggleOutcome = (outcome: string) => {
    if (selectedOutcomes.includes(outcome)) {
      onOutcomeChange(selectedOutcomes.filter(o => o !== outcome));
    } else {
      onOutcomeChange([...selectedOutcomes, outcome]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div>
          <h3 className="text-gray-700 mb-3">Zoeken</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Zoek op activiteit of semester..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {showOutcomeFilter && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-700">Leeruitkomsten</h3>
              {selectedOutcomes.length > 0 && (
                <button
                  onClick={() => onOutcomeChange([])}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Wis alles
                </button>
              )}
            </div>
            <div className="space-y-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center space-x-2">
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
                      className={learningOutcomeColors[outcome]}
                    >
                      {learningOutcomeLabels[outcome]}
                    </Badge>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
