import { LearningOutcome } from '../types/curriculum';

// Kennis en vaardigheden per leeruitkomst (algemeen, niet per semester)
export interface LearningOutcomeDetails {
  outcome: LearningOutcome;
  knowledge: string[];
  skills: string[];
}

export const learningOutcomeDetails: LearningOutcomeDetails[] = [
  {
    outcome: 'context',
    knowledge: [
      'Onderzoeksmethoden en -technieken',
      'Data-analyse en interpretatie',
      'Theorie over context en stakeholder analyse',
      'Kennisbronnen en validatie',
      'Professionele rapportage en communicatie'
    ],
    skills: [
      'Informatie verzamelen en selecteren',
      'Context analyseren en onderzoeken',
      'Inzichten formuleren en onderbouwen',
      'Probleem (her)definiëren en afbakenen',
      'Kansen identificeren en communiceren'
    ]
  },
  {
    outcome: 'ontwerpen',
    knowledge: [
      'Ontwerpprincipes en -methoden',
      'Design thinking en creativiteitstechnieken',
      'Ontwerpstrategieën en -theorieën',
      'Iteratief ontwerpproces',
      'Impact assessment en ethiek'
    ],
    skills: [
      'Experimenteren met oplossingen',
      'Concepten ontwikkelen',
      'Iteratief werken',
      'Verschillende perspectieven integreren',
      'Originaliteit en onderscheidend vermogen tonen',
      'Strategieën selecteren en toepassen'
    ]
  },
  {
    outcome: 'prototype',
    knowledge: [
      'Prototyping technieken (low-fi tot high-fi)',
      'Digitale en analoge tools',
      'Evaluatie- en testmethoden',
      'Presentatietechnieken',
      'Technische haalbaarheid en ontwikkelbaarheid'
    ],
    skills: [
      'Prototypes creëren in verschillende fidelity',
      'Testen en valideren',
      'Evalueren en itereren',
      'Presenteren en communiceren',
      'Keuzes beargumenteren',
      'Rekening houden met implementatie'
    ]
  },
  {
    outcome: 'verbinden',
    knowledge: [
      'Samenwerkingsmethoden en teamdynamiek',
      'Feedbacktechnieken',
      'Stakeholder management',
      'Interdisciplinaire samenwerking',
      'Projectorganisatie en overdracht'
    ],
    skills: [
      'Feedback geven en ontvangen',
      'Samenwerking organiseren en faciliteren',
      'Teambuilding initiëren',
      'Belanghebbenden betrekken',
      'Verbinden tussen disciplines en belangen',
      'Proces inzichtelijk en overdraagbaar maken'
    ]
  },
  {
    outcome: 'reflecteren',
    knowledge: [
      'Reflectiemodellen en -methoden',
      'Leerstrategieën en zelfsturing',
      'Professionele identiteitsontwikkeling',
      'CMD-vakgebied en trends',
      'Feedback verwerking'
    ],
    skills: [
      'Richting geven aan eigen leerproces',
      'Reflecteren op handelen en ontwikkeling',
      'Leerdoelen formuleren',
      'Feedback zoeken en verwerken',
      'Handelingsperspectieven ontwikkelen',
      'Visie ontwikkelen op het vakgebied'
    ]
  }
];

export function getDetailsForOutcome(outcome: LearningOutcome) {
  return learningOutcomeDetails.find(d => d.outcome === outcome);
}
