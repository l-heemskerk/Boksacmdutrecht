import { Activity, learningOutcomeLabels, learningOutcomeColors } from '../types/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Brain, Zap, Heart } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  highlightOutcome?: string;
  highlightCompetency?: string;
}

export function ActivityCard({ activity, highlightOutcome, highlightCompetency }: ActivityCardProps) {
  const hasDetailedOutcomes = activity.learningOutcomeDetails && activity.learningOutcomeDetails.length > 0;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="flex-1">{activity.name}</CardTitle>
          <Badge variant="outline" className="shrink-0">
            {activity.duration}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {activity.learningOutcomes.map((outcome) => (
            <Badge
              key={outcome}
              variant="outline"
              className={`${learningOutcomeColors[outcome]} ${
                highlightOutcome === outcome ? 'ring-2 ring-offset-2 ring-current' : ''
              }`}
            >
              {learningOutcomeLabels[outcome]}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {hasDetailedOutcomes ? (
          <Accordion type="single" collapsible className="w-full">
            {activity.learningOutcomeDetails!.map((detail, idx) => (
              <AccordionItem key={idx} value={`detail-${idx}`} className="border-none">
                <AccordionTrigger className="py-2 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={learningOutcomeColors[detail.outcome]}
                    >
                      {learningOutcomeLabels[detail.outcome]}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  {/* Houding */}
                  {detail.houding && detail.houding.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-pink-600" />
                        <span className="text-gray-700">Houding</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {detail.houding.map((item, i) => (
                          <li key={i} className="text-gray-600 list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Kennis */}
                  {detail.kennis && detail.kennis.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Kennis</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {detail.kennis.map((item, i) => (
                          <li key={i} className="text-gray-600 list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Vaardigheden */}
                  {detail.vaardigheden && detail.vaardigheden.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Vaardigheden</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {detail.vaardigheden.map((item, i) => (
                          <li key={i} className="text-gray-600 list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="space-y-3">
            {activity.competencies
              .filter(c => !highlightCompetency || c.type === highlightCompetency)
              .map((competency, idx) => (
                <div key={idx} className="border-l-2 border-gray-200 pl-3">
                  <div className="text-gray-600 uppercase tracking-wide mb-1">
                    {competency.type}
                  </div>
                  <p className="text-gray-700">{competency.description}</p>
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
