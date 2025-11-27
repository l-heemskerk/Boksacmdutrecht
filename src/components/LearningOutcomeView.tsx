import { LearningOutcome, learningOutcomeLabels, learningOutcomeColors } from '../types/curriculum';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { getProgressionsByOutcome } from '../data/learningOutcomeProgressions';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Info } from 'lucide-react';

interface LearningOutcomeViewProps {
  searchQuery: string;
}

export function LearningOutcomeView({ searchQuery }: LearningOutcomeViewProps) {
  const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

  // Function to highlight new text additions between semesters
  const getNewWords = (currentText: string, previousText?: string): string[] => {
    if (!previousText) return [];
    
    const currentWords = currentText.toLowerCase().split(/\s+/);
    const previousWords = previousText.toLowerCase().split(/\s+/);
    
    // Find words/phrases that are new
    const newPhrases: string[] = [];
    let i = 0;
    
    while (i < currentWords.length) {
      let foundInPrevious = false;
      for (let j = 0; j < previousWords.length; j++) {
        if (currentWords[i] === previousWords[j]) {
          foundInPrevious = true;
          break;
        }
      }
      
      if (!foundInPrevious && currentWords[i].length > 3) {
        newPhrases.push(currentWords[i]);
      }
      i++;
    }
    
    return newPhrases;
  };

  const highlightText = (text: string, wordsToHighlight: string[]) => {
    if (wordsToHighlight.length === 0) return text;
    
    const parts = text.split(/(\s+)/);
    return parts.map((part, idx) => {
      const cleanPart = part.toLowerCase().replace(/[.,;:!?]/g, '');
      if (wordsToHighlight.some(word => cleanPart.includes(word))) {
        return (
          <mark key={idx} className="bg-yellow-200 px-1 rounded">
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border-2 border-blue-600 p-6">
        <h2 className="text-gray-900 mb-2">Opbouw Leeruitkomsten</h2>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-gray-600">
            Bekijk hoe elke leeruitkomst zich ontwikkelt door de semesters heen. 
            <span className="ml-2 bg-yellow-200 px-2 py-0.5 rounded">
              Gemarkeerde tekst
            </span> toont nieuwe onderdelen ten opzichte van het vorige semester.
          </p>
        </div>
      </div>

      <Tabs defaultValue="context" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6 h-auto p-1 bg-white border-2 border-gray-200">
          <TabsTrigger 
            value="context"
            className="py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 data-[state=active]:border-blue-200"
          >
            {learningOutcomeLabels.context}
          </TabsTrigger>
          <TabsTrigger 
            value="ontwerpen"
            className="py-3 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 data-[state=active]:border-purple-200"
          >
            {learningOutcomeLabels.ontwerpen}
          </TabsTrigger>
          <TabsTrigger 
            value="prototype"
            className="py-3 data-[state=active]:bg-green-100 data-[state=active]:text-green-800 data-[state=active]:border-green-200"
          >
            {learningOutcomeLabels.prototype}
          </TabsTrigger>
          <TabsTrigger 
            value="verbinden"
            className="py-3 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800 data-[state=active]:border-orange-200"
          >
            {learningOutcomeLabels.verbinden}
          </TabsTrigger>
          <TabsTrigger 
            value="reflecteren"
            className="py-3 data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800 data-[state=active]:border-pink-200"
          >
            {learningOutcomeLabels.reflecteren}
          </TabsTrigger>
        </TabsList>

        {outcomes.map((outcome) => {
          const progressions = getProgressionsByOutcome(outcome);
          const filteredProgressions = searchQuery
            ? progressions.filter(p => 
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.semesterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.semester.toString().includes(searchQuery)
              )
            : progressions;

          return (
            <TabsContent key={outcome} value={outcome} className="mt-6">
              <div className="mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${learningOutcomeColors[outcome]}`}>
                  <h3>{learningOutcomeLabels[outcome]}</h3>
                </div>
              </div>

              {/* Leeruitkomst progressie - Grouped by year */}
              <div className="space-y-6">
                {/* Jaar 1 - Semester 1 & 2 */}
                <div className="border-4 border-blue-300 rounded-lg p-4 bg-blue-50">
                  <h4 className="text-blue-900 mb-4">Jaar 1</h4>
                  <div className="space-y-4">
                    {filteredProgressions.filter(p => p.semester === 1 || p.semester === 2).map((progression, index, arr) => {
                      const previousProgression = index > 0 ? arr[index - 1] : undefined;
                      const newWords = previousProgression 
                        ? getNewWords(progression.description, previousProgression.description)
                        : [];

                      const borderColorMap: Record<LearningOutcome, string> = {
                        context: '#DBEAFE',
                        ontwerpen: '#E9D5FF',
                        prototype: '#D1FAE5',
                        verbinden: '#FED7AA',
                        reflecteren: '#FCE7F3'
                      };

                      return (
                        <Card key={`${progression.semester}-${progression.outcome}`} className="border-l-4 bg-white" style={{ borderLeftColor: borderColorMap[progression.outcome] }}>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle>Semester {progression.semester} - {progression.semesterName}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">
                              {highlightText(progression.description, newWords)}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Jaar 2 - Semester 3 & 4 */}
                <div className="border-4 border-indigo-300 rounded-lg p-4 bg-indigo-50">
                  <h4 className="text-indigo-900 mb-4">Jaar 2</h4>
                  <div className="space-y-4">
                    {filteredProgressions.filter(p => p.semester === 3 || p.semester === 4).map((progression, index, arr) => {
                      const allPreviousProgressions = filteredProgressions.filter(p => p.semester < progression.semester);
                      const previousProgression = allPreviousProgressions[allPreviousProgressions.length - 1];
                      const newWords = previousProgression 
                        ? getNewWords(progression.description, previousProgression.description)
                        : [];

                      const borderColorMap: Record<LearningOutcome, string> = {
                        context: '#DBEAFE',
                        ontwerpen: '#E9D5FF',
                        prototype: '#D1FAE5',
                        verbinden: '#FED7AA',
                        reflecteren: '#FCE7F3'
                      };

                      return (
                        <Card key={`${progression.semester}-${progression.outcome}`} className="border-l-4 bg-white" style={{ borderLeftColor: borderColorMap[progression.outcome] }}>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle>Semester {progression.semester} - {progression.semesterName}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">
                              {highlightText(progression.description, newWords)}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Jaar 3 - Semester 5 (Praktijk) & 6 (Specialisatie) */}
                <div className="border-4 border-purple-300 rounded-lg p-4 bg-purple-50">
                  <h4 className="text-purple-900 mb-4">Jaar 3</h4>
                  <div className="space-y-4">
                    {filteredProgressions.filter(p => p.semester === 5 || p.semester === 6).map((progression, index, arr) => {
                      const allPreviousProgressions = filteredProgressions.filter(p => p.semester < progression.semester);
                      const previousProgression = allPreviousProgressions[allPreviousProgressions.length - 1];
                      const newWords = previousProgression 
                        ? getNewWords(progression.description, previousProgression.description)
                        : [];

                      const borderColorMap: Record<LearningOutcome, string> = {
                        context: '#DBEAFE',
                        ontwerpen: '#E9D5FF',
                        prototype: '#D1FAE5',
                        verbinden: '#FED7AA',
                        reflecteren: '#FCE7F3'
                      };

                      return (
                        <Card key={`${progression.semester}-${progression.outcome}`} className="border-l-4 bg-white" style={{ borderLeftColor: borderColorMap[progression.outcome] }}>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle>Semester {progression.semester} - {progression.semesterName}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">
                              {highlightText(progression.description, newWords)}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Jaar 4 - Semester 7 (Afstuderen) */}
                <div className="border-4 border-pink-300 rounded-lg p-4 bg-pink-50">
                  <h4 className="text-pink-900 mb-4">Jaar 4</h4>
                  <div className="space-y-4">
                    {filteredProgressions.filter(p => p.semester === 7).map((progression) => {
                      const allPreviousProgressions = filteredProgressions.filter(p => p.semester < progression.semester);
                      const previousProgression = allPreviousProgressions[allPreviousProgressions.length - 1];
                      const newWords = previousProgression 
                        ? getNewWords(progression.description, previousProgression.description)
                        : [];

                      const borderColorMap: Record<LearningOutcome, string> = {
                        context: '#DBEAFE',
                        ontwerpen: '#E9D5FF',
                        prototype: '#D1FAE5',
                        verbinden: '#FED7AA',
                        reflecteren: '#FCE7F3'
                      };

                      return (
                        <Card key={`${progression.semester}-${progression.outcome}`} className="border-l-4 bg-white" style={{ borderLeftColor: borderColorMap[progression.outcome] }}>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle>Semester {progression.semester} - {progression.semesterName}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">
                              {highlightText(progression.description, newWords)}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
