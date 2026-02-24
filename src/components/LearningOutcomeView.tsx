import { LearningOutcome, learningOutcomeLabels } from '../types/curriculum';
import { getProgressionsByOutcome } from '../data/learningOutcomeProgressions';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useState } from 'react';
import { Info, CheckCircle2, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LearningOutcomeViewProps {
  searchQuery: string;
}

const outcomes: LearningOutcome[] = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];

// Base colors matching types/curriculum.ts
// Context: Blue, Ontwerpen: Purple, Prototype: Green, Verbinden: Orange, Reflecteren: Pink
const outcomeBaseColors: Record<LearningOutcome, string> = {
  context: 'blue',
  ontwerpen: 'purple',
  prototype: 'green',
  verbinden: 'orange',
  reflecteren: 'pink'
};

// Year grouping configuration
const yearGroups = [
  { year: 1, label: 'Jaar 1', semesters: [1, 2], subLabel: 'Basis & Oriëntatie' },
  { year: 2, label: 'Jaar 2', semesters: [3, 4], subLabel: 'Verdieping & Verbreding' },
  { year: 3, label: 'Jaar 3', semesters: [5, 6], subLabel: 'Profilering & Praktijk' },
  { year: 4, label: 'Jaar 4', semesters: [7, 8], subLabel: 'Afstuderen' },
];

const getNewWords = (currentText: string, previousText?: string): string[] => {
  if (!previousText) return [];
  const currentWords = currentText.toLowerCase().split(/\s+/);
  const previousWords = previousText.toLowerCase().split(/\s+/);
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
        <span key={idx} className="bg-yellow-100 text-yellow-900 px-0.5 rounded font-medium mx-0.5 box-decoration-clone">
          {part}
        </span>
      );
    }
    return part;
  });
};

export function LearningOutcomeView({ searchQuery }: LearningOutcomeViewProps) {
  const [selectedOutcome, setSelectedOutcome] = useState<LearningOutcome>('context');
  const [showInfo, setShowInfo] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const progressions = getProgressionsByOutcome(selectedOutcome);
  
  const filteredProgressions = searchQuery
    ? progressions.filter(p => 
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.semesterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.semester.toString().includes(searchQuery)
      )
    : progressions;

  const currentOutcomeLabel = learningOutcomeLabels[selectedOutcome];
  const colorBase = outcomeBaseColors[selectedOutcome];

  // Handler voor leeruitkomst selectie (sluit sheet op mobile)
  const handleOutcomeSelect = (outcome: LearningOutcome) => {
    setSelectedOutcome(outcome);
    setIsFilterOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Intro / Info Box */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 relative mb-2">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1 text-sm text-blue-900 pr-8">
                <p className="leading-relaxed">
                  De leeruitkomsten zijn datgene wat studenten dienen aan te tonen aan het einde van een semester. CMD-Utrecht werkt door het hele curriculum met dezelfde vijf leeruitkomsten. In het overzicht hieronder geeft de <span className="bg-yellow-100 text-yellow-900 px-1 rounded font-medium">gemarkeerde tekst</span> nieuwe onderdelen t.o.v. vorig semester weer.
                </p>
              </div>
              <button 
                onClick={() => setShowInfo(false)}
                className="absolute right-2 top-2 p-1.5 text-blue-400 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: Filter Button + Sheet */}
      <div className="md:hidden sticky top-4 z-30">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <button className="w-full bg-white/95 backdrop-blur-md rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-${colorBase}-50`}>
                  <div className={`w-5 h-5 rounded bg-${colorBase}-500`} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium">Leeruitkomst</div>
                  <div className="font-bold text-gray-900">{currentOutcomeLabel}</div>
                </div>
              </div>
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Selecteer Leeruitkomst
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-2">
              {outcomes.map((outcome) => {
                const isActive = selectedOutcome === outcome;
                const base = outcomeBaseColors[outcome];
                
                return (
                  <button
                    key={outcome}
                    onClick={() => handleOutcomeSelect(outcome)}
                    className={`
                      w-full px-4 py-4 rounded-lg text-left transition-all duration-200 flex items-center gap-3 border
                      ${isActive 
                        ? `bg-${base}-50 border-${base}-200 shadow-sm` 
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }
                    `}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? `bg-${base}-100` : 'bg-gray-100'}`}>
                      <div className={`w-5 h-5 rounded ${isActive ? `bg-${base}-500` : 'bg-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold ${isActive ? `text-${base}-900` : 'text-gray-700'}`}>
                        {learningOutcomeLabels[outcome]}
                      </div>
                      {isActive && (
                        <div className={`text-xs text-${base}-600 mt-0.5`}>Actieve leeruitkomst</div>
                      )}
                    </div>
                    {isActive && (
                      <div className={`w-2 h-2 rounded-full bg-${base}-500`} />
                    )}
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: Horizontal Menu Bar */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 p-2 sticky top-4 z-20">
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          {outcomes.map(outcome => {
            const isActive = selectedOutcome === outcome;
            const base = outcomeBaseColors[outcome];
            return (
              <button
                key={outcome}
                onClick={() => setSelectedOutcome(outcome)}
                className={`flex-1 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap text-center ${
                  isActive 
                    ? `bg-${base}-100 text-${base}-800 shadow-sm ring-1 ring-${base}-200` 
                    : 'bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {learningOutcomeLabels[outcome]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline View */}
      <div className="relative">
        {yearGroups.map(({ year, label, subLabel, semesters }) => {
          const yearProgressions = filteredProgressions.filter(p => semesters.includes(p.semester));
          if (yearProgressions.length === 0) return null;

          return (
            <div key={year} className="relative mb-12 last:mb-0">
              {/* Year Marker */}
              <div className="flex items-center mb-6 relative z-10">
                 <div>
                   <h3 className="text-lg font-bold text-gray-900">{label}</h3>
                   <span className="text-sm text-gray-500 font-medium">{subLabel}</span>
                 </div>
              </div>

              <div className="space-y-6">
                {yearProgressions.map((progression) => {
                   const allPreviousProgressions = filteredProgressions.filter(p => p.semester < progression.semester);
                   const previousProgression = allPreviousProgressions[allPreviousProgressions.length - 1];
                   const newWords = previousProgression 
                     ? getNewWords(progression.description, previousProgression.description)
                     : [];

                  return (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      key={`${progression.semester}-${progression.semesterName}-${progression.outcome}`}
                      className="group relative"
                    >
                       <Card className={`border-l-4 hover:shadow-md transition-shadow duration-200 border-gray-200`} style={{ borderLeftColor: `var(--color-${colorBase}-500)` }}>
                         <CardContent className="p-6">
                           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                             <div className="flex items-center gap-3">
                               <Badge variant="secondary" className={`bg-${colorBase}-100 text-${colorBase}-800 border-${colorBase}-200 px-3 py-1 text-sm font-semibold border`}>
                                 Semester {progression.semester}
                               </Badge>
                               <h4 className="font-semibold text-gray-900">{progression.semesterName}</h4>
                             </div>
                             {progression.zelcomLevel && (
                               <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                 <CheckCircle2 className="w-4 h-4 text-green-600" />
                                 <span>Niveau: <span className="font-medium text-gray-900">{progression.zelcomLevel}</span></span>
                               </div>
                             )}
                           </div>
                           
                           <div className="prose prose-blue max-w-none">
                             <p className="text-gray-700 leading-relaxed text-base">
                               {highlightText(progression.description, newWords)}
                             </p>
                           </div>
                         </CardContent>
                       </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}