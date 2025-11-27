import { LearningOutcome } from '../types/curriculum';
import { Leerlijn } from './leerlijnen';

// Kennis en vaardigheden per leeruitkomst met leerlijn koppeling
export interface LearningOutcomeDetailsItem {
  text: string;
  leerlijnen: Leerlijn[];
}

export interface LearningOutcomeDetails {
  outcome: LearningOutcome;
  knowledge: LearningOutcomeDetailsItem[];
  skills: LearningOutcomeDetailsItem[];
}

export const learningOutcomeDetails: LearningOutcomeDetails[] = [
  {
    outcome: 'context',
    knowledge: [
      { 
        text: 'Onderzoeksmethoden en -technieken', 
        leerlijnen: ['Onderzoekend Vermogen'] 
      },
      { 
        text: 'Data-analyse en interpretatie', 
        leerlijnen: ['Onderzoekend Vermogen', 'Technologie & AI'] 
      },
      { 
        text: 'Theorie over context en stakeholder analyse', 
        leerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'] 
      },
      { 
        text: 'Kennisbronnen en validatie', 
        leerlijnen: ['Onderzoekend Vermogen'] 
      },
      { 
        text: 'Professionele rapportage en communicatie', 
        leerlijnen: ['Organisatie & Strategie'] 
      }
    ],
    skills: [
      { 
        text: 'Informatie verzamelen en selecteren', 
        leerlijnen: ['Onderzoekend Vermogen'] 
      },
      { 
        text: 'Context analyseren en onderzoeken', 
        leerlijnen: ['Onderzoekend Vermogen', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Inzichten formuleren en onderbouwen', 
        leerlijnen: ['Onderzoekend Vermogen'] 
      },
      { 
        text: 'Probleem (her)definiëren en afbakenen', 
        leerlijnen: ['Onderzoekend Vermogen', 'Design'] 
      },
      { 
        text: 'Kansen identificeren en communiceren', 
        leerlijnen: ['Organisatie & Strategie', 'Onderzoekend Vermogen'] 
      }
    ]
  },
  {
    outcome: 'ontwerpen',
    knowledge: [
      { 
        text: 'Ontwerpprincipes en -methoden', 
        leerlijnen: ['Design'] 
      },
      { 
        text: 'Design thinking en creativiteitstechnieken', 
        leerlijnen: ['Design', 'Onderzoekend Vermogen'] 
      },
      { 
        text: 'Ontwerpstrategieën en -theorieën', 
        leerlijnen: ['Design', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Iteratief ontwerpproces', 
        leerlijnen: ['Design', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Impact assessment en ethiek', 
        leerlijnen: ['Maatschappij & Toekomst', 'Mens & Ervaring'] 
      }
    ],
    skills: [
      { 
        text: 'Experimenteren met oplossingen', 
        leerlijnen: ['Design', 'Onderzoekend Vermogen'] 
      },
      { 
        text: 'Concepten ontwikkelen', 
        leerlijnen: ['Design'] 
      },
      { 
        text: 'Iteratief werken', 
        leerlijnen: ['Design', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Verschillende perspectieven integreren', 
        leerlijnen: ['Design', 'Mens & Ervaring'] 
      },
      { 
        text: 'Originaliteit en onderscheidend vermogen tonen', 
        leerlijnen: ['Design'] 
      },
      { 
        text: 'Strategieën selecteren en toepassen', 
        leerlijnen: ['Organisatie & Strategie', 'Design'] 
      }
    ]
  },
  {
    outcome: 'prototype',
    knowledge: [
      { 
        text: 'Prototyping technieken (low-fi tot high-fi)', 
        leerlijnen: ['Design', 'Technologie & AI'] 
      },
      { 
        text: 'Digitale en analoge tools', 
        leerlijnen: ['Technologie & AI', 'Design'] 
      },
      { 
        text: 'Evaluatie- en testmethoden', 
        leerlijnen: ['Onderzoekend Vermogen', 'Mens & Ervaring'] 
      },
      { 
        text: 'Presentatietechnieken', 
        leerlijnen: ['Organisatie & Strategie', 'Design'] 
      },
      { 
        text: 'Technische haalbaarheid en ontwikkelbaarheid', 
        leerlijnen: ['Technologie & AI', 'Organisatie & Strategie'] 
      }
    ],
    skills: [
      { 
        text: 'Prototypes creëren in verschillende fidelity', 
        leerlijnen: ['Design', 'Technologie & AI'] 
      },
      { 
        text: 'Testen en valideren', 
        leerlijnen: ['Onderzoekend Vermogen', 'Mens & Ervaring'] 
      },
      { 
        text: 'Evalueren en itereren', 
        leerlijnen: ['Onderzoekend Vermogen', 'Design'] 
      },
      { 
        text: 'Presenteren en communiceren', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Keuzes beargumenteren', 
        leerlijnen: ['Onderzoekend Vermogen', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Rekening houden met implementatie', 
        leerlijnen: ['Technologie & AI', 'Organisatie & Strategie'] 
      }
    ]
  },
  {
    outcome: 'verbinden',
    knowledge: [
      { 
        text: 'Samenwerkingsmethoden en teamdynamiek', 
        leerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'] 
      },
      { 
        text: 'Feedbacktechnieken', 
        leerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'] 
      },
      { 
        text: 'Stakeholder management', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Interdisciplinaire samenwerking', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Projectorganisatie en overdracht', 
        leerlijnen: ['Organisatie & Strategie'] 
      }
    ],
    skills: [
      { 
        text: 'Feedback geven en ontvangen', 
        leerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'] 
      },
      { 
        text: 'Samenwerking organiseren en faciliteren', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Teambuilding initiëren', 
        leerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'] 
      },
      { 
        text: 'Belanghebbenden betrekken', 
        leerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'] 
      },
      { 
        text: 'Verbinden tussen disciplines en belangen', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Proces inzichtelijk en overdraagbaar maken', 
        leerlijnen: ['Organisatie & Strategie', 'Onderzoekend Vermogen'] 
      }
    ]
  },
  {
    outcome: 'reflecteren',
    knowledge: [
      { 
        text: 'Reflectiemodellen en -methoden', 
        leerlijnen: ['Onderzoekend Vermogen'] 
      },
      { 
        text: 'Leerstrategieën en zelfsturing', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Professionele identiteitsontwikkeling', 
        leerlijnen: ['Organisatie & Strategie', 'Maatschappij & Toekomst'] 
      },
      { 
        text: 'CMD-vakgebied en trends', 
        leerlijnen: ['Design', 'Technologie & AI', 'Maatschappij & Toekomst'] 
      },
      { 
        text: 'Feedback verwerking', 
        leerlijnen: ['Organisatie & Strategie', 'Onderzoekend Vermogen'] 
      }
    ],
    skills: [
      { 
        text: 'Richting geven aan eigen leerproces', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Reflecteren op handelen en ontwikkeling', 
        leerlijnen: ['Onderzoekend Vermogen', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Leerdoelen formuleren', 
        leerlijnen: ['Organisatie & Strategie'] 
      },
      { 
        text: 'Feedback zoeken en verwerken', 
        leerlijnen: ['Organisatie & Strategie', 'Onderzoekend Vermogen'] 
      },
      { 
        text: 'Handelingsperspectieven ontwikkelen', 
        leerlijnen: ['Onderzoekend Vermogen', 'Organisatie & Strategie'] 
      },
      { 
        text: 'Visie ontwikkelen op het vakgebied', 
        leerlijnen: ['Maatschappij & Toekomst', 'Design'] 
      }
    ]
  }
];

export function getDetailsForOutcome(outcome: LearningOutcome) {
  return learningOutcomeDetails.find(d => d.outcome === outcome);
}
