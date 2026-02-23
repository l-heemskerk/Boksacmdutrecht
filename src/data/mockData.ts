import { Activity, Semester } from '../types/curriculum';
import { professionalProductsBySemester } from './professionalProductsData';
import { semesterLevels } from './semesterLevels';

// Semester names
const semesterNames = [
  'Semester 1',
  'Semester 2', 
  'Semester 3',
  'Semester 4',
  'Semester 5 - Praktijk',
  'Semester 6 - Specialisatie',
  'Semester 7 - Afstuderen'
];

// Semester descriptions
const semesterDescriptions: Record<number, string> = {
  1: 'Kennismaking met CMD en fundamenten van design',
  2: 'Toepassing van vaardigheden in opdrachtgeversprojecten',
  3: 'Verdieping en professionalisering',
  4: 'Voorbereiding op de praktijk',
  5: 'Werken in de praktijk',
  6: 'Specialisatie in gekozen richting',
  7: 'Afstuderen'
};

// Mock activities data
export const mockActivities: Activity[] = [
  // Semester 1
  {
    id: 's1-basecamp',
    name: 'Basecamp',
    duration: '1 week',
    description: 'Kennismakingsweek waarin studenten het vakgebied CMD verkennen',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Kennismaking met CMD' },
      { type: 'vaardigheden', description: 'Prototyping basics' },
      { type: 'houding', description: 'Professionele instelling' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        kennis: [
          'Designgeschiedenis en -voorbeelden',
          'Betekenis van context voor ontwerp',
          'Basis projectstructuur en rollen'
        ],
        vaardigheden: [
          'Observeert designvoorbeelden in dagelijks leven',
          'Communiceert basisontwerp aan medestudenten',
          'Begrijpt basis projectstructuur en rollen'
        ],
        houding: []
      },
      {
        outcome: 'reflecteren',
        kennis: ['Reflectiemodellen (STARR)', 'Portfoliotools (Portflow)'],
        vaardigheden: ['Reflecteert op eigen ontwerpproces met begeleiding', 'Reflecteert op eigen rol en samenwerking'],
        houding: []
      }
    ]
  },
  {
    id: 's1-visual-design',
    name: 'Visual Design',
    duration: '4 weken',
    description: 'Introductie in visueel ontwerpen',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Visuele ontwerpprincipes' },
      { type: 'vaardigheden', description: 'Visuele ontwerpen maken' },
      { type: 'houding', description: 'Oog voor detail' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        kennis: [
          'Basis ontwerpprincipes (contrast, hiërarchie, balans)',
          'Betekenis van context voor ontwerp'
        ],
        vaardigheden: [
          'Verkent ontwerpcontext en doelgroep met begeleiding',
          'Verzamelt visuele inspiratie en referenties',
          'Maakt eerste moodboards'
        ],
        houding: []
      },
      {
        outcome: 'ontwerpen',
        kennis: [
          'Typografie basics (lettertype, grootte, hiërarchie)',
          'Kleurtheorie en kleurgebruik',
          'Compositie en layout principes',
          'Design Thinking proces'
        ],
        vaardigheden: [
          'Genereert eerste ideeën en schetsen',
          'Experimenteert met basis ontwerpprincipes',
          'Past typografie, kleur en compositie toe'
        ],
        houding: []
      },
      {
        outcome: 'prototype',
        kennis: [
          'Adobe Creative Suite basics',
          'Fidelity niveaus (low-fi, mid-fi, high-fi)'
        ],
        vaardigheden: [
          'Maakt visuele prototypes in Adobe tools',
          'Experimenteert met verschillende fidelity niveaus'
        ],
        houding: []
      }
    ]
  },
  {
    id: 's1-interaction-design',
    name: 'Interaction Design',
    duration: '4 weken',
    description: 'Leren ontwerpen van gebruiksvriendelijke interfaces',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Interactieprincipes en UX' },
      { type: 'vaardigheden', description: 'Prototypes ontwerpen en testen' },
      { type: 'houding', description: 'Gebruikersgericht denken' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        kennis: [
          'HTML/CSS fundamentals',
          'Basis web technologieën',
          'Digitale tools overzicht'
        ],
        vaardigheden: [
          'Verkent digitale tools en basis technologie',
          'Maakt kennis met HTML/CSS basis',
          'Observeert gebruikers en hun gedrag met begeleiding',
          'Herkent basis gebruikersbehoeften'
        ],
        houding: []
      },
      {
        outcome: 'ontwerpen',
        kennis: [
          'Basis interactiepatronen',
          'Figma interface design',
          'UI design patterns'
        ],
        vaardigheden: [
          'Experimenteert met basis interacties',
          'Werkt met Figma voor interface design',
          'Ontwerpt met aandacht voor gebruiksvriendelijkheid',
          'Past basis UX principes toe'
        ],
        houding: []
      },
      {
        outcome: 'prototype',
        kennis: [
          'HTML/CSS prototyping',
          'Figma prototyping functionaliteiten',
          'Wireframing principes'
        ],
        vaardigheden: [
          'Bouwt eenvoudige digitale prototypes (HTML/CSS)',
          'Maakt clickable prototypes in Figma',
          'Maakt eenvoudige low-fi prototypes (schetsen, wireframes)',
          'Test prototypes met medestudenten'
        ],
        houding: []
      }
    ]
  },
  {
    id: 's1-social-design',
    name: 'Social Design',
    duration: '4 weken',
    description: 'Ontwerpen voor maatschappelijke vraagstukken',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Maatschappelijke context' },
      { type: 'vaardigheden', description: 'Ontwerpen voor sociale impact' },
      { type: 'houding', description: 'Empathie voor doelgroepen' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        kennis: [
          'Doelgroepanalyse basics',
          'Maatschappelijke thema\'s en vraagstukken',
          'Empathy mapping'
        ],
        vaardigheden: [
          'Voert basis doelgroepanalyse uit',
          'Identificeert maatschappelijke vraagstukken',
          'Past empathy mapping toe'
        ],
        houding: []
      },
      {
        outcome: 'ontwerpen',
        kennis: [
          'Social design basics',
          'Inclusief ontwerpen',
          'User-centered design'
        ],
        vaardigheden: [
          'Ontwerpt met aandacht voor sociale impact',
          'Past inclusive design principes toe',
          'Betrekt doelgroep bij ontwerpproces'
        ],
        houding: []
      },
      {
        outcome: 'prototype',
        kennis: [
          'Low-fidelity prototyping',
          'User testing basics'
        ],
        vaardigheden: [
          'Maakt low-fi prototypes voor social design',
          'Test prototypes met doelgroep'
        ],
        houding: []
      },
      {
        outcome: 'verbinden',
        kennis: [
          'Communiceren met stakeholders',
          'Presenteren aan doelgroep'
        ],
        vaardigheden: [
          'Communiceert met maatschappelijke partners',
          'Presenteert ontwerpen aan doelgroep',
          'Verzamelt feedback van stakeholders'
        ],
        houding: []
      }
    ]
  },

  // Semester 2
  {
    id: 's2-project1',
    name: 'Opdrachtgeversproject 1',
    duration: '8 weken',
    description: 'Eerste grote project voor externe opdrachtgever',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Projectmanagement basics' },
      { type: 'vaardigheden', description: 'Samenwerken in projectteam' },
      { type: 'houding', description: 'Professionele werkhouding' }
    ],
    learningOutcomeDetails: []
  },
  {
    id: 's2-webdev',
    name: 'Webdevelopment',
    duration: '4 weken',
    description: 'Verdieping in webdevelopment',
    semester: 2,
    learningOutcomes: ['prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'JavaScript frameworks' },
      { type: 'vaardigheden', description: 'Responsive websites bouwen' },
      { type: 'houding', description: 'Probleem-oplossend denken' }
    ],
    learningOutcomeDetails: []
  },

  // Semester 3
  {
    id: 's3-themed-project',
    name: 'Themed Project',
    duration: '8 weken',
    description: 'Thematisch project met verdieping',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Advanced research methods' },
      { type: 'vaardigheden', description: 'Diepgaand onderzoek uitvoeren' },
      { type: 'houding', description: 'Onderzoekende houding' }
    ],
    learningOutcomeDetails: []
  },

  // Semester 4
  {
    id: 's4-professional-project',
    name: 'Professional Project',
    duration: '12 weken',
    description: 'Professioneel project met stakeholders',
    semester: 4,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Professional practices' },
      { type: 'vaardigheden', description: 'Werken op professioneel niveau' },
      { type: 'houding', description: 'Professionele instelling' }
    ],
    learningOutcomeDetails: []
  },

  // Semester 5
  {
    id: 's5-internship',
    name: 'Stage',
    duration: '20 weken',
    description: 'Stage bij een bedrijf',
    semester: 5,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Werkcontext' },
      { type: 'vaardigheden', description: 'Professioneel werken' },
      { type: 'houding', description: 'Professionele werkhouding' }
    ],
    learningOutcomeDetails: []
  },

  // Semester 6 - UX Specialisatie
  {
    id: 's6-ux-research',
    name: 'UX Research Advanced',
    duration: '8 weken',
    description: 'Verdieping in UX research',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Advanced research methods' },
      { type: 'vaardigheden', description: 'Complex onderzoek uitvoeren' },
      { type: 'houding', description: 'Analytische instelling' }
    ],
    learningOutcomeDetails: []
  },

  // Semester 7
  {
    id: 's7-graduation',
    name: 'Afstudeerproject',
    duration: '20 weken',
    description: 'Afstuderen',
    semester: 7,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Expert knowledge' },
      { type: 'vaardigheden', description: 'Zelfstandig project uitvoeren' },
      { type: 'houding', description: 'Professionele expert' }
    ],
    learningOutcomeDetails: []
  }
];

// Generate semesters from activities
export const semesters: Semester[] = [
  {
    number: 1,
    name: 'Semester 1 BASE',
    level: 'BASE',
    description: semesterDescriptions[1],
    activities: mockActivities.filter(a => a.semester === 1),
    professionalProducts: professionalProductsBySemester[1] || [],
    semesterLevel: semesterLevels[1]
  },
  {
    number: 2,
    name: 'Semester 2 CHALLENGING',
    level: 'CHALLENGING',
    description: semesterDescriptions[2],
    activities: mockActivities.filter(a => a.semester === 2),
    professionalProducts: professionalProductsBySemester[2] || [],
    semesterLevel: semesterLevels[2]
  },
  {
    number: 3,
    name: 'Semester 3 EXPLORE',
    level: 'EXPLORE',
    description: semesterDescriptions[3],
    activities: mockActivities.filter(a => a.semester === 3),
    professionalProducts: professionalProductsBySemester[3] || [],
    semesterLevel: semesterLevels[3]
  },
  {
    number: 4,
    name: 'Semester 4 CONNECTING',
    level: 'CONNECTING',
    description: semesterDescriptions[4],
    activities: mockActivities.filter(a => a.semester === 4),
    professionalProducts: professionalProductsBySemester[4] || [],
    semesterLevel: semesterLevels[4]
  },
  {
    number: 5,
    name: 'Semester 5 Praktijk',
    level: 'Praktijk',
    description: semesterDescriptions[5],
    activities: mockActivities.filter(a => a.semester === 5),
    professionalProducts: professionalProductsBySemester[5] || [],
    semesterLevel: semesterLevels[5]
  },
  {
    number: 6,
    name: 'Semester 6 Specialisatie',
    level: 'Specialisatie',
    description: semesterDescriptions[6],
    activities: [],
    professionalProducts: professionalProductsBySemester[6] || [],
    semesterLevel: semesterLevels[6],
    specializations: [
      {
        name: 'User Experience Ontwerper',
        activities: mockActivities.filter(a => a.semester === 6)
      }
    ]
  },
  {
    number: 7,
    name: 'Semester 7 Afstuderen',
    level: 'Afstuderen',
    description: semesterDescriptions[7],
    activities: [],
    professionalProducts: professionalProductsBySemester[7] || [],
    semesterLevel: semesterLevels[7],
    specializations: [
      {
        name: 'Design',
        activities: mockActivities.filter(a => a.semester === 7)
      }
    ]
  }
];