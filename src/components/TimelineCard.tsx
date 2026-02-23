import { useState } from 'react';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronRight, Brain, BookOpen } from 'lucide-react';
import { learningOutcomeLabels, learningOutcomeColors, LearningOutcome } from '../types/curriculum';

interface TimelineCardProps {
  progression: any;
  semColor: { bg: string; border: string; text: string };
  semester: any;
  isExpanded: boolean;
  onToggle: () => void;
  competencies: Record<LearningOutcome, { kennis: string[]; vaardigheden: string[]; houding: string | string[] }> | null;
  level: string;
  isSpecialization?: boolean;
  specializations?: any[];
  selectedSpecialization?: string;
  onSpecializationChange?: (id: string) => void;
}

export function TimelineCard({
  progression,
  semColor,
  semester,
  isExpanded,
  onToggle,
  competencies,
  level,
  isSpecialization,
  specializations,
  selectedSpecialization,
  onSpecializationChange
}: TimelineCardProps) {
  
  // Specialization card
  if (isSpecialization) {
    return (
      <div className={`w-64 bg-white border-2 ${semColor.border} rounded-xl shadow-md`}>
        {/* Header */}
        <div className={`${semColor.bg} p-4 border-b-2 ${semColor.border}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-600">Semester {progression.semester}</span>
            <Badge className={`${semColor.bg} ${semColor.text} border ${semColor.border} text-xs`}>
              {progression.semesterName}
            </Badge>
          </div>
          <h4 className={`${semColor.text} text-sm mb-2`}>
            Specialisaties
          </h4>
          <p className="text-xs text-gray-600">
            {level}
          </p>
        </div>
        
        {/* Specialization selector */}
        <div className="p-4">
          <p className="text-xs text-gray-700 mb-3">
            Selecteer een specialisatie om de details te bekijken:
          </p>
          <div className="space-y-2">
            {specializations?.map(spec => (
              <button
                key={spec.id}
                onClick={() => onSpecializationChange?.(spec.id)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                  selectedSpecialization === spec.id
                    ? `${semColor.border} ${semColor.bg}`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-xs text-gray-900">{spec.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{spec.description}</div>
              </button>
            ))}
          </div>
          <button
            onClick={onToggle}
            className={`w-full mt-4 py-2 px-4 rounded-lg text-xs transition-all ${
              isExpanded
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isExpanded ? (
              <span className="flex items-center justify-center gap-1.5">
                <ChevronDown className="w-3.5 h-3.5" />
                Verberg details
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                Toon details {selectedSpecialization && specializations?.find(s => s.id === selectedSpecialization)?.name}
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }
  
  // Regular semester card
  return (
    <div 
      className={`w-64 bg-white border-2 ${semColor.border} rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer ${
        isExpanded ? 'ring-2 ring-blue-500 ring-offset-2' : ''
      }`}
      onClick={onToggle}
    >
      {/* Header */}
      <div className={`${semColor.bg} p-4 border-b-2 ${semColor.border}`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-600">Semester {progression.semester}</span>
          <Badge className={`${semColor.bg} ${semColor.text} border ${semColor.border} text-xs`}>
            {progression.semesterName}
          </Badge>
        </div>
        <h4 className={`${semColor.text} text-sm mb-2`}>
          {progression.leerlijn}
        </h4>
        <p className="text-xs text-gray-600">
          {level}
        </p>
      </div>
      
      {/* Content - Always show summary */}
      <div className="p-4 space-y-3">
        {/* Global description */}
        <div>
          <p className="text-xs text-gray-700 leading-relaxed">
            {progression.globalDescription}
          </p>
        </div>
        
        {/* Kernfocus */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Brain className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs text-gray-900">Kernfocus</span>
          </div>
          <p className="text-xs text-gray-600 leading-snug pl-5">
            {progression.kernfocus}
          </p>
        </div>
        
        {/* Deliverables */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <BookOpen className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs text-gray-900">Typische Deliverables</span>
          </div>
          <ul className="space-y-1 pl-5">
            {progression.typischeActiviteiten.slice(0, 2).map((activity: string, idx: number) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs">
                <span className="text-green-600 mt-0.5">•</span>
                <span className="text-gray-600 leading-snug">{activity}</span>
              </li>
            ))}
            {progression.typischeActiviteiten.length > 2 && (
              <li className="text-xs text-gray-400 italic pl-3.5">
                +{progression.typischeActiviteiten.length - 2} meer
              </li>
            )}
          </ul>
        </div>
      </div>
      
      {/* Expanded state shows a subtle indicator */}
      {isExpanded && (
        <div className="px-4 py-2 bg-blue-50 border-t border-blue-200">
          <p className="text-xs text-blue-700 text-center">
            ✓ Competenties worden onder de tijdlijn getoond
          </p>
        </div>
      )}
      
      {/* Footer - klik voor details */}
      <div className={`${semColor.bg} px-4 py-2 border-t-2 ${semColor.border}`}>
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600">
          {isExpanded ? (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Verberg competenties</span>
            </>
          ) : (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Toon competenties</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
