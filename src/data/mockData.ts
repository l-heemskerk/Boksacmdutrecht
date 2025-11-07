import { Activity, Semester } from '../types/curriculum';

// Curriculum data CMD Utrecht
export const mockActivities: Activity[] = [
  // Semester 1
  {
    id: 's1-basecamp',
    name: 'Basecamp',
    duration: '1 week',
    semester: 1,
    learningOutcomes: ['context', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Kennismaking met het vakgebied CMD en digitale media' },
      { type: 'vaardigheden', description: 'Oriënteren op het werkveld en CMD-competenties' },
      { type: 'houding', description: 'Professionele instelling en nieuwsgierigheid tonen' }
    ]
  },
  {
    id: 's1-visual-design',
    name: 'Visual Design',
    duration: '4 weken',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Visuele ontwerpprincipes, typografie, kleur en compositie' },
      { type: 'vaardigheden', description: 'Visuele ontwerpen maken met designtools' },
      { type: 'houding', description: 'Oog voor esthetiek, detail en consistentie' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar gebruikers en context',
          'Empathie voor belanghebbenden',
          'Onderzoekende houding bij het verzamelen van informatie',
          'Vragen stellen in plaats van direct oplossingen zoeken',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'CMD Methods: Good, best and bad practices',
          'Interviews',
          'Literature study',
          'Boek Grafisch ontwerp deel 1'
        ],
        vaardigheden: [
          'Uitvoeren van desk research',
          'Aangereikte onderzoeksmethodes uitvoeren (passende grondigheid)',
          'Aanspreken van doelgroep',
          'Onderzoeksresultaten delen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Risico\'s durven nemen bij het experimenteren',
          'Bereid zijn om fouten te maken als onderdeel van het leerproces',
          'Geduld tonen en accepteren dat goede concepten tijd nodig hebben',
          'Spelenderwijs mogelijkheden verkennen zonder direct te oordelen'
        ],
        kennis: [
          'Design thinking: Introductie basisprincipes',
          'Werken volgens de Double Diamond methode',
          'Divergeren - Convergeren',
          'Moodboards en mindmaps',
          'Concepten'
        ],
        vaardigheden: [
          'Out of the box denken',
          'Simpele concepten bedenken',
          'Digitaal en analoog ideeën uitwerken'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Accepteren dat vroege versies ruw mogen zijn',
          'Lage drempel hebben voor het maken van testversies',
          'Openheid voor feedback',
          'Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen'
        ],
        kennis: [
          'Boek Grafisch ontwerp Deel 1',
          'Compositie',
          'Typografie',
          'Kleur'
        ],
        vaardigheden: [
          'Basic Adobe Skills (Photoshop, InDesign, Illustrator)',
          'Doelgroepen bevragen over gemaakte prototypes',
          'Eindwerk exposeren'
        ]
      }
    ]
  },
  {
    id: 's1-interaction-design',
    name: 'Interaction Design',
    duration: '4 weken',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Interactieprincipes, gebruikersonderzoek en UX basics' },
      { type: 'vaardigheden', description: 'Interactieve prototypes ontwerpen en testen' },
      { type: 'houding', description: 'Gebruikersgericht en empathisch denken' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar gebruikers en context',
          'Empathie voor belanghebbenden',
          'Onderzoekende houding bij het verzamelen van informatie',
          'Vragen stellen in plaats van direct oplossingen zoeken',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'CMD Methods: Veldonderzoek',
          'Kwantitatief onderzoek',
          'Persona\'s',
          'UI Design patterns'
        ],
        vaardigheden: [
          'Inzichten ophalen doelgroep',
          'Onderzoeksresultaten analyseren',
          'Keuzes onderbouwen vanuit gebruikersbehoeften'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Risico\'s durven nemen bij het experimenteren',
          'Bereid zijn om fouten te maken als onderdeel van het leerproces',
          'Geduld tonen en accepteren dat goede concepten tijd nodig hebben',
          'Spelenderwijs mogelijkheden verkennen zonder direct te oordelen'
        ],
        kennis: [
          'Double Diamond methode',
          'User stories',
          'Customer Journey Maps',
          'Card sorting'
        ],
        vaardigheden: [
          'Iteratief ontwerpen',
          'Conclusies onderzoek meenemen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Accepteren dat vroege versies ruw mogen zijn',
          'Lage drempel hebben voor het maken van testversies',
          'Openheid voor feedback',
          'Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen'
        ],
        kennis: [
          'Flowcharts en wireframes',
          'Heuristieken van Nielsen',
          'Usability testing',
          'Levels of fidelity (low/paper - high clickable)'
        ],
        vaardigheden: [
          'Flowcharts en wireframes maken',
          'Basics Figma (design file)',
          'Uitvoeren van usability tests'
        ]
      }
    ]
  },
  {
    id: 's1-social-design',
    name: 'Social Design',
    duration: '4 weken',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Maatschappelijke context en design voor sociale impact' },
      { type: 'vaardigheden', description: 'Ontwerpen met oog voor maatschappelijke vraagstukken' },
      { type: 'houding', description: 'Empathie voor doelgroepen en maatschappelijk bewustzijn' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar gebruikers en context',
          'Empathie voor belanghebbenden',
          'Onderzoekende houding bij het verzamelen van informatie',
          'Vragen stellen in plaats van direct oplossingen zoeken',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'Design probes',
          'Field trial',
          'Empathy maps',
          'Sociona\'s',
          'APA bronvermelding'
        ],
        vaardigheden: [
          'Interview technieken',
          'Onderzoeksvaardigheden',
          'Kwalitatieve onderzoeksmethoden',
          'Documenteren, inzichtelijk maken & concluderen',
          'Empatisch vermogen (inleven in doelgroep)'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Risico\'s durven nemen bij het experimenteren',
          'Bereid zijn om fouten te maken als onderdeel van het leerproces',
          'Geduld tonen en accepteren dat goede concepten tijd nodig hebben',
          'Spelenderwijs mogelijkheden verkennen zonder direct te oordelen'
        ],
        kennis: [
          'Conceptontwikkeling',
          'Co-creatie',
          'Design thinking - Frames (Samenvatting Siebe de Boer)',
          'Brainstormtechnieken',
          'Vervolg conceptontwikkeling'
        ],
        vaardigheden: [
          'Conceptueel denken',
          'Weten wanneer te brainstormen',
          'Onderbouwen van ontwerpkeuzes met theorie',
          'Ideeën genereren, selecteren en uitwerken',
          'Co-creëren met gebruikers en teamleden',
          'Argumenteren en onderbouwen van ontwerpkeuzes'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Accepteren dat vroege versies ruw mogen zijn',
          'Lage drempel hebben voor het maken van testversies',
          'Openheid voor feedback',
          'Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen'
        ],
        kennis: [
          'Iteratief werken en testen met gebruikers',
          'Feedback verwerken en herontwerpen',
          'Onderbouwen van ontwerpkeuzes met theorie en inzicht'
        ],
        vaardigheden: [
          'Externe kennisbronnen benutten',
          'Fysieke prototypes maken',
          'Feedback vertalen naar verbeteringen',
          'Eindresultaat overtuigend presenteren',
          'Eindresultaat verantwoorden'
        ]
      }
    ]
  },
  {
    id: 's1-workshopweek',
    name: 'Workshopweek',
    duration: '1 week',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Kennisverbreding door workshops in verschillende vakgebieden' },
      { type: 'vaardigheden', description: 'Nieuwe technieken en tools exploreren' },
      { type: 'houding', description: 'Openheid voor nieuwe ervaringen en experimenteren' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar gebruikers en context',
          'Empathie voor belanghebbenden',
          'Onderzoekende houding bij het verzamelen van informatie',
          'Vragen stellen in plaats van direct oplossingen zoeken',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'Basis filmtechnieken (camera, montage, storytelling)',
          'Toepassing van ontwerpprincipes in korte tijd',
          'Nieuwe tools en methodes uit de ontwerppraktijk',
          'Toepassen van ontwerpvaardigheden in verschillende contexten'
        ],
        vaardigheden: [
          'Doelgroep en context analyseren via beeld en experiment',
          'Informatie vertalen naar visuele expressie en inzichtelijke documentatie'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Risico\'s durven nemen bij het experimenteren',
          'Bereid zijn om fouten te maken als onderdeel van het leerproces',
          'Geduld tonen en accepteren dat goede concepten tijd nodig hebben',
          'Spelenderwijs mogelijkheden verkennen zonder direct te oordelen'
        ],
        kennis: [
          'Creatieve strategieën voor conceptontwikkeling en visuele communicatie',
          'Tools en methodes uit het werkveld'
        ],
        vaardigheden: [
          'Ideeën genereren, uitwerken en visueel presenteren (storyboard, moodboard, conceptschets)',
          'Experimenteren met film, materiaal en vorm om betekenisvolle concepten te ontwikkelen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Accepteren dat vroege versies ruw mogen zijn',
          'Lage drempel hebben voor het maken van testversies',
          'Openheid voor feedback',
          'Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen'
        ],
        kennis: [
          'Filmische vormgeving, montageprincipes en storytellingtechnieken',
          'Presentatievormen en feedbackmethodes binnen creatieve processen'
        ],
        vaardigheden: [
          'Ontwerpen vertalen naar een overtuigende filmische of visuele presentatie',
          'Feedback verzamelen, analyseren en gebruiken om het eindproduct te verbeteren'
        ]
      }
    ]
  },
  {
    id: 's1-hackathon-film',
    name: 'Hackathon Film',
    duration: '1 week',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Video productie en storytelling basics' },
      { type: 'vaardigheden', description: 'Snel een filmproduct realiseren in teamverband' },
      { type: 'houding', description: 'Creatief onder tijdsdruk en samenwerken' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar gebruikers en context',
          'Empathie voor belanghebbenden',
          'Onderzoekende houding bij het verzamelen van informatie',
          'Vragen stellen in plaats van direct oplossingen zoeken',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'Basis filmtechnieken (camera, montage, storytelling)',
          'Toepassing van ontwerpprincipes in korte tijd',
          'Nieuwe tools en methodes uit de ontwerppraktijk',
          'Toepassen van ontwerpvaardigheden in verschillende contexten'
        ],
        vaardigheden: [
          'Doelgroep en context analyseren via beeld en experiment',
          'Informatie vertalen naar visuele expressie en inzichtelijke documentatie'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Risico\'s durven nemen bij het experimenteren',
          'Bereid zijn om fouten te maken als onderdeel van het leerproces',
          'Geduld tonen en accepteren dat goede concepten tijd nodig hebben',
          'Spelenderwijs mogelijkheden verkennen zonder direct te oordelen'
        ],
        kennis: [
          'Creatieve strategieën voor conceptontwikkeling en visuele communicatie',
          'Tools en methodes uit het werkveld'
        ],
        vaardigheden: [
          'Ideeën genereren, uitwerken en visueel presenteren (storyboard, moodboard, conceptschets)',
          'Experimenteren met film, materiaal en vorm om betekenisvolle concepten te ontwikkelen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Accepteren dat vroege versies ruw mogen zijn',
          'Lage drempel hebben voor het maken van testversies',
          'Openheid voor feedback',
          'Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen'
        ],
        kennis: [
          'Filmische vormgeving, montageprincipes en storytellingtechnieken',
          'Presentatievormen en feedbackmethodes binnen creatieve processen'
        ],
        vaardigheden: [
          'Ontwerpen vertalen naar een overtuigende filmische of visuele presentatie',
          'Feedback verzamelen, analyseren en gebruiken om het eindproduct te verbeteren'
        ]
      }
    ]
  },
  // Semester 2
  {
    id: 's2-opdrachtgevers-1',
    name: 'Opdrachtgeversproject 1',
    duration: '5 weken',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Projectmatig werken met echte opdrachtgevers' },
      { type: 'vaardigheden', description: 'Van briefing tot realisatie in teamverband' },
      { type: 'houding', description: 'Professionele communicatie en verantwoordelijkheid' }
    ]
  },
  {
    id: 's2-hackathon-ai',
    name: 'Hackathon AI',
    duration: '1 week',
    semester: 2,
    learningOutcomes: ['context', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Kennismaking met AI-tools en mogelijkheden' },
      { type: 'vaardigheden', description: 'AI-tools toepassen in een creatief concept' },
      { type: 'houding', description: 'Experimenteren met nieuwe technologie' }
    ]
  },
  {
    id: 's2-eigen-project',
    name: 'Eigen Project',
    duration: '4 weken',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Zelfstandig een ontwerpprobleem definiëren en oplossen' },
      { type: 'vaardigheden', description: 'Autonoom projecten initiëren en uitvoeren' },
      { type: 'houding', description: 'Zelfstandigheid, initiatief en eigenaarschap' }
    ]
  },
  {
    id: 's2-opdrachtgevers-2',
    name: 'Opdrachtgeversproject 2',
    duration: '5 weken',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Verdieping in projectmatig werken' },
      { type: 'vaardigheden', description: 'Complexere opdrachten realiseren met meer autonomie' },
      { type: 'houding', description: 'Professionele groei en reflectie op werkproces' }
    ]
  }
];

const semesterNames = [
  'BASE',
  'CHALLENGE', 
  'EXPLORE',
  'CONNECT',
  'JAAR 3 EN 4',
  'JAAR 3 EN 4',
  'JAAR 3 EN 4',
  'JAAR 3 EN 4'
];

export const semesters: Semester[] = Array.from({ length: 8 }, (_, i) => ({
  number: i + 1,
  name: semesterNames[i],
  year: Math.floor(i / 2) + 1,
  activities: mockActivities.filter(a => a.semester === i + 1)
}));
