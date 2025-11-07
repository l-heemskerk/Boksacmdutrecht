import { Activity, Semester } from '../types/curriculum';

// Curriculum data CMD Utrecht
export const mockActivities: Activity[] = [
  // Semester 1
  {
    id: 's1-basecamp',
    name: 'Basecamp',
    duration: '1 week',
    description: 'Kennismakingsweek waarin studenten het vakgebied CMD verkennen en elkaar leren kennen.',
    semester: 1,
    learningOutcomes: ['context', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Kennismaking met het vakgebied CMD en digitale media' },
      { type: 'vaardigheden', description: 'Oriënteren op het werkveld en CMD-competenties' },
      { type: 'houding', description: 'Professionele instelling en nieuwsgierigheid tonen' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar het vakgebied CMD',
          'Openheid voor nieuwe perspectieven en disciplines',
          'Professionele instelling bij kennismaking'
        ],
        kennis: [
          'Kennismaking met het vakgebied CMD en digitale media',
          'Oriëntatie op verschillende specialisaties binnen CMD',
          'Eerste inzichten in het werkveld'
        ],
        vaardigheden: [
          'Oriënteren op het werkveld en CMD-competenties',
          'Netwerken met medestudenten en docenten',
          'Presenteren van jezelf en je ambities'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's1-visual-design',
    name: 'Visual Design',
    duration: '4 weken',
    description: 'Introductie in visueel ontwerpen, typografie, kleur en compositie.',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
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
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's1-interaction-design',
    name: 'Interaction Design',
    duration: '4 weken',
    description: 'Leren ontwerpen van gebruiksvriendelijke digitale interfaces.',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
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
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's1-social-design',
    name: 'Social Design',
    duration: '4 weken',
    description: 'Ontwerpen voor maatschappelijke vraagstukken met oog voor impact.',
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
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's1-workshopweek',
    name: 'Workshopweek',
    duration: '1 week',
    description: 'Week vol workshops om nieuwe technieken en tools te exploreren.',
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
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's1-hackathon-film',
    name: 'Hackathon Film',
    duration: '1 week',
    description: 'Intensieve week waarin een filmproduct in teamverband wordt gerealiseerd.',
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
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      }
    ]
  },
  // Semester 2
  {
    id: 's2-opdrachtgevers-1',
    name: 'Opdrachtgeversproject 1',
    duration: '6 weken',
    description: 'Werken aan een echte opdracht voor een externe opdrachtgever.',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Projectmatig werken met echte opdrachtgevers' },
      { type: 'vaardigheden', description: 'Van briefing tot realisatie in teamverband' },
      { type: 'houding', description: 'Professionele communicatie en verantwoordelijkheid' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten selecteren zelfstandig onderzoeksmethoden',
          'Tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes',
          'Nemen verantwoordelijkheid voor onderzoekskwaliteit',
          'Kunnen de vraag achter de vraag achterhalen bij stakeholders'
        ],
        kennis: [
          'Onderzoeksopzet maken',
          'APA bronvermelding'
        ],
        vaardigheden: []
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Studenten nemen eigenaarschap van hun ontwerpkeuzes',
          'Durven standpunt in te nemen over hun conceptrichting',
          'Tonen volharding bij tegenslagen',
          'Flexibiliteit om koers bij te stellen op basis van inzichten',
          'Werken aan creative confidence'
        ],
        kennis: [
          'Ontwerpen in professionele setting',
          'Briefing en debriefing',
          'Guiding principles'
        ],
        vaardigheden: []
      },
      {
        outcome: 'prototype',
        houding: [
          'Ontwikkelen systematische aanpak bij testen',
          'Tonen geduld om meerdere iteraties te doorlopen',
          'Hebben vertrouwen in de waarde van hun testresultaten',
          'Durven moeilijke keuzes te maken op basis van bevindingen',
          'Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt'
        ],
        kennis: [
          'Mom test'
        ],
        vaardigheden: []
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's2-hackathon-ai',
    name: 'Workshopweek en Hackathon',
    duration: '2 weken',
    description: 'Verkennen van AI-tools en toepassen in een creatief concept.',
    semester: 2,
    learningOutcomes: ['context', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Kennismaking met AI-tools en mogelijkheden' },
      { type: 'vaardigheden', description: 'AI-tools toepassen in een creatief concept' },
      { type: 'houding', description: 'Experimenteren met nieuwe technologie' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [],
        kennis: [],
        vaardigheden: []
      },
      {
        outcome: 'prototype',
        houding: [],
        kennis: [],
        vaardigheden: []
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      }
    ]
  },
  {
    id: 's2-eigen-project',
    name: 'Eigen Project',
    duration: '4 weken',
    description: 'Zelfstandig een eigen ontwerpprobleem definiëren en oplossen.',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Zelfstandig een ontwerpprobleem definiëren en oplossen' },
      { type: 'vaardigheden', description: 'Autonoom projecten initiëren en uitvoeren' },
      { type: 'houding', description: 'Zelfstandigheid, initiatief en eigenaarschap' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [],
        kennis: [
          'Inzicht in het volledige Design Thinking-proces: van onderzoek en idee tot prototype',
          'Basiskennis van creatieve methoden, technieken en iteratieve werkwijzen'
        ],
        vaardigheden: [
          'Zelfstandig een creatief proces doorlopen: onderzoeken, experimenteren, ontwerpen en reflecteren',
          'Relevante methoden en technieken inzetten om ideeën te ontwikkelen en keuzes te onderbouwen',
          'Resultaten en voortgang zichtbaar maken in beroepsproducten (dummy, schetsen, prototypes)'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [],
        kennis: [
          'Basisprincipes van professioneel en ondernemend werken als ontwerper',
          'Inzicht in persoonlijke kwaliteiten, leerdoelen en verantwoordelijkheden binnen het ontwerpproces'
        ],
        vaardigheden: [
          'Planmatig en doelgericht werken binnen zelfgekozen kaders',
          'Eigen leerproces sturen op basis van feedback en reflectie',
          'Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat'
        ]
      },
      {
        outcome: 'prototype',
        houding: [],
        kennis: [
          'Inzicht in hoe ontwerpkeuzes samenhangen met onderzoek, doelgroep en doelstelling',
          'Kennis van communicatieve en visuele presentatievormen'
        ],
        vaardigheden: [
          'Eigen werk helder en professioneel exposeren',
          'Design Thinking zelfstandig toepassen: methodes combineren, selecteren en onderbouwen',
          'Feedback gebruiken om ontwerp en proces verder te verbeteren'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  {
    id: 's2-opdrachtgevers-2',
    name: 'Opdrachtgeversproject 2',
    duration: '6 weken',
    description: 'Vervolgopdracht met meer complexiteit en zelfstandigheid.',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Verdieping in projectmatig werken' },
      { type: 'vaardigheden', description: 'Complexere opdrachten realiseren met meer autonomie' },
      { type: 'houding', description: 'Professionele groei en reflectie op werkproces' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten selecteren zelfstandig onderzoeksmethoden',
          'Tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes',
          'Nemen verantwoordelijkheid voor onderzoekskwaliteit',
          'Kunnen de vraag achter de vraag achterhalen bij stakeholders'
        ],
        kennis: [
          'Onderzoeksopzet maken',
          'APA bronvermelding'
        ],
        vaardigheden: []
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Studenten nemen eigenaarschap van hun ontwerpkeuzes',
          'Durven standpunt in te nemen over hun conceptrichting',
          'Tonen volharding bij tegenslagen',
          'Flexibiliteit om koers bij te stellen op basis van inzichten',
          'Werken aan creative confidence'
        ],
        kennis: [
          'Ontwerpen in professionele setting',
          'Briefing en debriefing',
          'Guiding principles'
        ],
        vaardigheden: []
      },
      {
        outcome: 'prototype',
        houding: [
          'Ontwikkelen systematische aanpak bij testen',
          'Tonen geduld om meerdere iteraties te doorlopen',
          'Hebben vertrouwen in de waarde van hun testresultaten',
          'Durven moeilijke keuzes te maken op basis van bevindingen',
          'Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt'
        ],
        kennis: [
          'Mom test'
        ],
        vaardigheden: []
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen',
          'Ze staan open om feedback te ontvangen en kunnen het ook geven',
          'Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten',
          'Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren'
        ],
        kennis: [
          'Wat, hoe en waarom van een retrospective',
          'Feedbackgeletterdheid (geven én ontvangen van feedback)',
          'Belbin groepsrollen (inzicht in teamrollen en dynamiek)'
        ],
        vaardigheden: [
          'Actief en constructief feedback geven en ontvangen',
          'Communiceren en overleggen met teamleden en stakeholders',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen',
          'Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
          'Reflecteren op groepsproces en de eigen rol daarin'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten staan open om te leren van fouten en successen',
          'Ze tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten',
          'Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis',
          'Growth mindset helpt hen uitdagingen te zien als kansen',
          'Reflectieve houding maakt hen bewust van hun leerproces'
        ],
        kennis: [
          'Reflectiemethodes (STARR en Korthagen)',
          'Zelfsturend leren (regie nemen over eigen leerproces)',
          'Leerdoelen opstellen DART/SMART',
          'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer- en werkproces)',
          'Schrijfvaardigheden (reflectieverslagen, onderbouwde keuzes)'
        ],
        vaardigheden: [
          'Gebruik maken van Portflow: datapunten, zelfevaluaties en leerdoelen vastleggen',
          'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces',
          'Schriftelijk reflecteren: onderbouwde verslagen en evaluaties schrijven',
          'Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling'
        ]
      }
    ]
  },
  // Semester 3
  {
    id: 's3-game-hackathon',
    name: 'Game Hackathon',
    duration: '1 week',
    description: 'Intensieve week waarin studenten experimenteren met game design en development.',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Basisprincipes van game design en mechanics' },
      { type: 'vaardigheden', description: 'Snel prototypen en itereren in teamverband' },
      { type: 'houding', description: 'Experimenteren onder tijdsdruk en samenwerken' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Studenten tonen nieuwsgierigheid naar spelontwerp en bestaande spellen',
          'Openheid voor nieuwe mechanismes en interacties',
          'Analytische blik naar spelersgedrag en -ervaring',
          'Bereidheid om te leren van bestaande voorbeelden'
        ],
        kennis: [
          'Basisprincipes van spelontwerp, interactie en storytelling',
          'Verschillende spelmechanismen en hun invloed op spelersgedrag',
          'Voorbeelden en analyses van bestaande spellen als inspiratie'
        ],
        vaardigheden: [
          'Analyseren van bestaande spellen op vorm, mechaniek en ervaring',
          'Vertalen van inzichten uit onderzoek en workshops naar eigen spelideeën',
          'In teamverband verkennen van thema\'s, interacties en doelen voor een nieuw spelconcept'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Experimentele en speelse houding bij conceptontwikkeling',
          'Durven falen en snel bijstellen',
          'Creatief denken en itereren',
          'Focus op spelerervaring en beleving'
        ],
        kennis: [
          'Ontwerpprincipes voor spelmechaniek, visuele communicatie en narratief',
          'De relatie tussen ontwerpkeuzes en spelerervaring (interactie, tactiek, verhaal)'
        ],
        vaardigheden: [
          'Ontwikkelen van originele spelconcepten met aandacht voor interactie en beleving',
          'Experimenteren met spelregels, visuals en storytelling',
          'Snel itereren: ideeën vertalen naar schetsen en low-fi prototypes'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Pragmatisch en hands-on benaderen van prototyping',
          'Focus op speelbaarheid en testbaarheid',
          'Accepteren van imperfectie en ruwe versies',
          'Openheid voor feedback en observaties tijdens playtesting'
        ],
        kennis: [
          'Werking en waarde van prototyping en playtesting in ontwerpprocessen',
          'Basisprincipes van feedback, observatie en iteratie'
        ],
        vaardigheden: [
          'Maken van speelbare prototypes (low-fi tot high-fi)',
          'Testen van spelconcepten binnen en buiten het team',
          'Interpreteren van testresultaten en verbeteren van spelmechanismes en storytelling',
          'Presenteren van eindresultaat en proces in een korte video of demo'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Intensief samenwerken in korte tijdsspanne',
          'Flexibiliteit in rolverdeling',
          'Ondersteunende teamcultuur'
        ],
        kennis: [
          'Agile werkmethodes',
          'Effectieve communicatie onder tijdsdruk',
          'Teamrollen in hackathon setting'
        ],
        vaardigheden: [
          'Snel rollen verdelen en taken organiseren',
          'Continue communicatie binnen team',
          'Gezamenlijk beslissingen nemen onder druk'
        ]
      }
    ]
  },
  {
    id: 's3-visual-design',
    name: 'Visual Design',
    duration: '3 weken',
    description: 'Verdieping in visuele communicatie, branding en design systems.',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Visuele communicatie principes en design systems' },
      { type: 'vaardigheden', description: 'Visuele identiteit ontwikkelen en toepassen' },
      { type: 'houding', description: 'Oog voor detail en consistentie' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Analytische en onderzoekende blik op ontwerpvisies',
          'Interesse in ontwerpgeschiedenis en filosofieën',
          'Bewust van culturele en ethische context van visual design',
          'Respect voor het werk van andere ontwerpers'
        ],
        kennis: [
          'Context van ontwerpen Wim Crouwel en Martin Lorenz',
          'Ontwerpvisies en werkwijzen van ontwerpers (Crouwel, Lorenz, Scher)',
          'Culturele en ethische context van visual design',
          'Doelgroep en functie van een visueel communicatiemiddel (magazine)'
        ],
        vaardigheden: [
          'Onderzoeken van ontwerpers via deskresearch en visuele analyse',
          'Interpreteren van ontwerpfilosofie en vertalen naar eigen visie',
          'Toepassen van CMD-methods: benchmark creation, design pattern search, ethical check',
          'Documenteren en analyseren van referenties en experimenten'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Aandacht voor detail, precisie en vakmanschap',
          'Experimentele houding bij compositie en vormgeving',
          'Kritische reflectie op eigen ontwerpkeuzes',
          'Balans tussen expressie en functionaliteit'
        ],
        kennis: [
          'Grids, compositie, hiërarchie, kleurgebruik en typografie',
          'Vormtaal en visuele consistentie',
          'Schetsen, itereren en varianten maken',
          'Theoretische principes van visuele taal en expressie'
        ],
        vaardigheden: [
          'Ontwerpen van spreads en posters op basis van onderzoek en theorie',
          'Experimenteren met compositie, typografie en beeld',
          'Schetsen, variëren, itereren en onderbouwen van ontwerpkeuzes',
          'Ontwikkelen van een visuele identiteit voor het magazine'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Iteratief werken aan visuele kwaliteit en consistentie',
          'Open voor feedback van peers en experts',
          'Perfectionisme balanceren met voortgang',
          'Trots op craftmanship en afwerking'
        ],
        kennis: [
          'Presentatievormen en materiaalkeuze voor visuele prototypes (print, digitaal)',
          'Evaluatiecriteria voor visuele communicatie: leesbaarheid, hiërarchie, stijlconsistentie'
        ],
        vaardigheden: [
          'Integreren van feedback van peers en experts in het ontwerp',
          'Uitwerken van spreads en zine tot een tastbaar prototype',
          'Testen en evalueren van ontwerp met doelgroep en peers',
          'Documenteren van iteraties en onderbouwen van ontwerpbeslissingen'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Reflectief over ontwerpkeuzes',
          'Bewust van persoonlijke stijl',
          'Kritisch over visuele trends'
        ],
        kennis: [
          'Design critique methodes',
          'Visuele analyse frameworks',
          'Portfolio ontwikkeling'
        ],
        vaardigheden: [
          'Ontwerpkeuzes onderbouwen',
          'Visueel werk evalueren',
          'Proces documenteren'
        ]
      }
    ]
  },
  {
    id: 's3-opdrachtgevers',
    name: 'Opdrachtgeversproject',
    duration: '5 weken',
    description: 'Complexe opdracht voor externe opdrachtgever met focus op professionele samenwerking.',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Professioneel projectmanagement en stakeholder management' },
      { type: 'vaardigheden', description: 'Complexe opdrachten managen en realiseren' },
      { type: 'houding', description: 'Professionele houding en verantwoordelijkheid' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Proactieve en nieuwsgierige onderzoekende houding',
          'Professionele en respectvolle omgang met stakeholders',
          'Kritisch en analytisch denkvermogen',
          'Ethisch bewustzijn bij onderzoek en design'
        ],
        kennis: [
          'Design Thinking en onderzoeksmethoden voor context- en stakeholderanalyse',
          'Theoretische kaders rondom merk, gebruiker, trends en maatschappelijke context',
          'Ethische principes: belangen, waarden en impact van ontwerpoplossingen'
        ],
        vaardigheden: [
          'Onderzoek uitvoeren naar opdrachtgever, gebruikers en omgeving met passende methodieken',
          'Context en stakeholders analyseren en vertalen naar ontwerpcriteria',
          'Ontwerp- en onderzoeksvraag formuleren en herijken op basis van inzichten',
          'Bevindingen helder visualiseren en communiceren in beroepsproducten'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Eigenaarschap van complexe ontwerpvraagstukken',
          'Strategisch en kritisch denkvermogen',
          'Balans tussen creativiteit, haalbaarheid en ethiek',
          'Iteratieve en flexibele mindset'
        ],
        kennis: [
          'Iteratieve ontwerpprocessen en creatieve methoden binnen Design Thinking',
          'Principes van conceptontwikkeling, visuele communicatie en ethische afweging',
          'Validatie van ontwerpkeuzes via onderzoek en stakeholderfeedback'
        ],
        vaardigheden: [
          'Genereren, selecteren en uitwerken van concepten op basis van onderzoek',
          'Toetsen van concepten aan ontwerpcriteria, ethische waarden en feedback',
          'Iteratief ontwikkelen van onderscheidende en uitvoerbare oplossingen',
          'Onderbouwd vastleggen van keuzes in conceptborden, procesplanning en mediaplan'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Systematische en grondige testbenadering',
          'Professionele presentatie vaardigheden',
          'Objectieve en transparante evaluatie van resultaten',
          'Open voor feedback en bereid tot aanpassen'
        ],
        kennis: [
          'Evaluatiecriteria voor gebruikservaring, effectiviteit en uitvoerbaarheid',
          'Ethische aspecten bij testen: transparantie, privacy, betrouwbaarheid'
        ],
        vaardigheden: [
          'Ontwerpen van prototypes om aannames en oplossingen te toetsen',
          'Opstellen en uitvoeren van testplannen met relevante stakeholders',
          'Analyseren en verwerken van testresultaten in ontwerpverbeteringen',
          'Presenteren en onderbouwen van resultaten richting opdrachtgever in adviesrapport en eindpresentatie'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Proactieve communicatie met opdrachtgever',
          'Teamleiderschap en verantwoordelijkheid',
          'Diplomatiek omgaan met feedback'
        ],
        kennis: [
          'Professionele communicatieprotocollen',
          'Projectmanagement basics',
          'Conflicthantering'
        ],
        vaardigheden: [
          'Effectief overleggen met opdrachtgevers',
          'Team organiseren en aansturen',
          'Professionele verslaglegging'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Kritisch reflecteren op proces',
          'Leerpunten identificeren',
          'Professionele groei nastreven'
        ],
        kennis: [
          'Project evaluatie methodes',
          'Professionele reflectie frameworks',
          'Competentieontwikkeling'
        ],
        vaardigheden: [
          'Proces en resultaat evalueren',
          'Leerpunten documenteren',
          'Actieplan voor verbetering opstellen'
        ]
      }
    ]
  },
  {
    id: 's3-persuasive-communication',
    name: 'Persuasive Communication',
    duration: '3 weken',
    description: 'Leren overtuigen door middel van design en communicatie.',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Persuasive design principes en psychologie' },
      { type: 'vaardigheden', description: 'Overtuigende experiences ontwerpen' },
      { type: 'houding', description: 'Ethisch bewustzijn en verantwoordelijkheid' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch en reflectief naar persuasieve tactieken kijken',
          'Sterk ethisch bewustzijn en verantwoordelijkheid',
          'Empathie voor gebruikers en hun autonomie',
          'Nieuwsgierig naar maatschappelijke vraagstukken en gedragspatronen'
        ],
        kennis: [
          'Gedragstheorieën en beïnvloedingsmodellen (Kahneman, Fogg, Cialdini, Ajzen, Deci & Ryan)',
          'De CASI-methode en gedragslenzen voor het analyseren van gedragsvraagstukken',
          'Methoden voor doelgroep en gedragsanalyse',
          'Ethische kaders rondom gedragsbeïnvloeding en maatschappelijke impact'
        ],
        vaardigheden: [
          'Onderzoeken van een maatschappelijk vraagstuk en het gedrag van de doelgroep',
          'Analyseren van gedragsinterventies en bepalen van beïnvloedingsmechanismen',
          'Formuleren van gedragsdoelen en onderbouwen van keuzes met theorie',
          'Vertalen van onderzoeksresultaten naar ontwerpcriteria en een duidelijke rationale'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Verantwoord en ethisch bewust ontwerpen',
          'Balans tussen effectiviteit en respect voor autonomie',
          'Reflectief over maatschappelijke impact',
          'Iteratief en open voor feedback van experts en peers'
        ],
        kennis: [
          'Toepassing van gedragslenzen en CASI-stappenplan in ontwerpprocessen',
          'Strategische inzet van beïnvloedingsmechanismen vanuit meerdere theoretische perspectieven',
          'Ontwerpprincipes voor gedragsinterventies en ethische afwegingen bij sturing van gedrag'
        ],
        vaardigheden: [
          'Ontwikkelen van concepten en strategieën die gedrag bewust beïnvloeden',
          'Vertalen van gedragsdoelen en strategieën naar visuele en inhoudelijke ontwerpuitingen',
          'Iteratief verkennen en aanscherpen van strategieën op basis van feedback van experts en peers',
          'Reflecteren op de impact van de gekozen strategieën op individu, organisatie en maatschappij'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Testen met sterke aandacht voor ethiek en transparantie',
          'Kritisch evalueren van gedragsimpact',
          'Open communicatie over persuasieve tactieken',
          'Bereid om aan te passen op basis van ethische overwegingen'
        ],
        kennis: [
          'Prototyping- en testmethoden voor gedragsinterventies (lo-fi, mid-fi, expert review)',
          'Criteria voor effectiviteit, geloofwaardigheid en ethische toetsing van beïnvloedingsstrategieën',
          'Methodieken voor evaluatie van gedragsverandering en communicatie-impact'
        ],
        vaardigheden: [
          'Maken van prototypes waarin beïnvloedingsmechanismen worden getest',
          'Valideren van keuzes met experts en doelgroepvertegenwoordigers',
          'Iteratief verbeteren van concepten op basis van testresultaten en feedback',
          'Documenteren en presenteren van de rationale, iteraties en eindconcept in een overtuigende eindpresentatie'
        ]
      }
    ]
  },
  {
    id: 's3-storytelling',
    name: 'Storytelling',
    duration: '3 weken',
    description: 'Verhalen vertellen door middel van design en interactie.',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Narrative design en storytelling technieken' },
      { type: 'vaardigheden', description: 'Verhalen vormgeven in interactieve media' },
      { type: 'houding', description: 'Creatief en emotioneel intelligent' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Empathisch luisteren naar verhalen',
          'Nieuwsgierig naar betekenis en emotie',
          'Cultureel bewust'
        ],
        kennis: [
          'Storytelling frameworks (Hero\'s Journey, Story Arc)',
          'Narrative design principes',
          'Transmedia storytelling'
        ],
        vaardigheden: [
          'Verhalen verzamelen en analyseren',
          'Doelgroep narratieve voorkeuren onderzoeken',
          'Emotionele impact inschatten'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Creatief en authentiek verhalen vertellen',
          'Emotionele diepgang nastreven',
          'Respect voor verhalen van anderen'
        ],
        kennis: [
          'Plot structuren en dramatische bogen',
          'Character development',
          'Interactieve narratieve technieken'
        ],
        vaardigheden: [
          'Overtuigende verhaallijnen ontwikkelen',
          'Personages en werelden creëren',
          'Narratieve elementen in design integreren'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Experimenteren met vertelvormen',
          'Openheid voor interpretatie',
          'Itereren op emotionele impact'
        ],
        kennis: [
          'Storyboarding en scenario development',
          'Interactive narrative tools',
          'Presentatie en performance technieken'
        ],
        vaardigheden: [
          'Verhalen visualiseren en prototypen',
          'Interactieve verhaalstructuren bouwen',
          'Narratieve experiences testen'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Reflectief over eigen verhalen en perspectief',
          'Bewust van narratieve keuzes',
          'Kritisch over storytelling effecten'
        ],
        kennis: [
          'Narratieve analyse methodes',
          'Storytelling effectiviteit evalueren',
          'Persoonlijke vertel-stijl ontwikkeling'
        ],
        vaardigheden: [
          'Narratieve keuzes onderbouwen',
          'Impact van verhalen evalueren',
          'Eigen storytelling ontwikkelen'
        ]
      }
    ]
  },
  {
    id: 's3-eigen-project',
    name: 'Eigen Project',
    duration: '3 weken',
    description: 'Zelfgekozen project met focus op persoonlijke ontwikkeling en specialisatie.',
    semester: 3,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Zelfstandig kennisdomein verdiepen' },
      { type: 'vaardigheden', description: 'Autonoom project uitvoeren en specialiseren' },
      { type: 'houding', description: 'Ondernemend en zelfsturend' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Proactief zoeken naar interessegebied',
          'Ondernemende houding',
          'Nieuwsgierigheid naar specialisatie'
        ],
        kennis: [
          'Zelfstandig onderzoek opzetten',
          'Specialisatie binnen CMD verkennen',
          'Kennisontwikkeling strategieën'
        ],
        vaardigheden: [
          'Eigen onderzoeksvraag formuleren',
          'Relevante bronnen vinden en evalueren',
          'Onderzoek structureren en uitvoeren'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Eigenaarschap en autonomie',
          'Experimentele mindset',
          'Doorzettingsvermogen'
        ],
        kennis: [
          'Specialistische design methodes',
          'Innovatieve ontwerpbenaderingen',
          'Persoonlijke ontwerpfilosofie ontwikkelen'
        ],
        vaardigheden: [
          'Zelfstandig concept ontwikkelen',
          'Eigen ontwerpproces bepalen',
          'Originele oplossingen bedenken'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Trots op eigen werk',
          'Kritisch naar eigen resultaat',
          'Presenteren met overtuiging'
        ],
        kennis: [
          'Geavanceerde prototyping technieken',
          'Portfolio development',
          'Professionele presentatie'
        ],
        vaardigheden: [
          'Hoogwaardig prototype realiseren',
          'Werk professioneel documenteren',
          'Overtuigend presenteren'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Diepgaande zelfreflectie',
          'Bewust van eigen ontwikkeling',
          'Leergierig en groei-gericht'
        ],
        kennis: [
          'Persoonlijke ontwikkelingsmodellen',
          'Competentie-evaluatie',
          'Toekomstplanning en carrière ontwikkeling'
        ],
        vaardigheden: [
          'Eigen proces en resultaat kritisch evalueren',
          'Persoonlijke groei documenteren',
          'Toekomstige leerdoelen bepalen'
        ]
      }
    ]
  },
  // Semester 5 - Immersive Design Specialisatie
  {
    id: 's5-immersive-vr-project',
    name: 'VR Experience Design',
    duration: '4 weken',
    description: 'Ontwerpen en ontwikkelen van een Virtual Reality ervaring.',
    semester: 5,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'VR design principles en spatial design' },
      { type: 'vaardigheden', description: '3D prototyping en VR development' },
      { type: 'houding', description: 'Experimenteel en technisch nieuwsgierig' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: ['Nieuwsgierig naar nieuwe technologieën', 'Open voor immersieve experiences'],
        kennis: ['VR hardware en platforms', 'Spatial computing principes', 'User experience in VR'],
        vaardigheden: ['VR context onderzoek', 'Gebruikerstesten in VR', 'Technische haalbaarheid analyseren']
      },
      {
        outcome: 'ontwerpen',
        houding: ['Experimenteel en iteratief', 'Aandacht voor comfort en ergonomie'],
        kennis: ['3D interface design', 'Interaction design voor VR', 'Spatial audio'],
        vaardigheden: ['VR experiences ontwerpen', '3D prototypes maken', 'Interacties voor VR ontwikkelen']
      },
      {
        outcome: 'prototype',
        houding: ['Technisch vaardig', 'Gebruikersgericht testen'],
        kennis: ['VR development tools', 'Performance optimization', 'Testing methodologies'],
        vaardigheden: ['VR prototypes bouwen', 'User testing uitvoeren', 'Itereren op basis van feedback']
      }
    ]
  },
  {
    id: 's5-immersive-ar-application',
    name: 'AR Mobile Application',
    duration: '3 weken',
    description: 'Augmented Reality applicatie voor mobiele devices.',
    semester: 5,
    learningOutcomes: ['ontwerpen', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'AR technology en mobile development' },
      { type: 'vaardigheden', description: 'AR prototyping en testing' },
      { type: 'houding', description: 'Innovatief en praktijkgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'ontwerpen',
        houding: ['Innovatief denken', 'Balans tussen realiteit en augmentatie'],
        kennis: ['AR design patterns', 'Mobile UX principles', 'Markerless tracking'],
        vaardigheden: ['AR experiences ontwerpen', 'Mobile interfaces creëren', 'Spatial mapping toepassen']
      },
      {
        outcome: 'prototype',
        houding: ['Hands-on experimenteren', 'Iteratief testen'],
        kennis: ['AR development frameworks', 'Mobile prototyping tools'],
        vaardigheden: ['AR prototypes ontwikkelen', 'Real-world testing', 'Performance optimaliseren']
      },
      {
        outcome: 'verbinden',
        houding: ['Samenwerken met developers', 'Communiceren over technische mogelijkheden'],
        kennis: ['Technische communicatie', 'Agile samenwerking'],
        vaardigheden: ['Tech team communicatie', 'Presenteren van AR concepten', 'Stakeholder management']
      }
    ]
  },
  // Semester 5 - Digital Design Specialisatie
  {
    id: 's5-digital-web-platform',
    name: 'Web Platform Design',
    duration: '4 weken',
    description: 'Ontwerpen van een complexe webapplicatie met moderne frontend technologie.',
    semester: 5,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Web technologies en responsive design' },
      { type: 'vaardigheden', description: 'Frontend development en design systems' },
      { type: 'houding', description: 'Gebruikersgericht en toegankelijk' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: ['Gebruikersgericht onderzoeken', 'Data-gedreven beslissingen'],
        kennis: ['Web analytics', 'User research voor web', 'Accessibility standards'],
        vaardigheden: ['Analytics interpreteren', 'User interviews', 'Accessibility audits']
      },
      {
        outcome: 'ontwerpen',
        houding: ['Systematisch en consistent', 'Aandacht voor detail'],
        kennis: ['Design systems', 'Component-based design', 'Responsive principles'],
        vaardigheden: ['Design systems opzetten', 'Responsive layouts ontwerpen', 'Component libraries maken']
      },
      {
        outcome: 'prototype',
        houding: ['Technisch vaardig', 'Code-bewust ontwerpen'],
        kennis: ['Frontend frameworks', 'Browser compatibility', 'Performance'],
        vaardigheden: ['High-fidelity prototypes', 'Frontend code schrijven', 'Cross-browser testen']
      }
    ]
  },
  {
    id: 's5-digital-ui-animation',
    name: 'UI Animation & Microinteractions',
    duration: '3 weken',
    description: 'Verdieping in animatie en microinteracties voor digitale interfaces.',
    semester: 5,
    learningOutcomes: ['ontwerpen', 'prototype', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Animation principles en timing' },
      { type: 'vaardigheden', description: 'Motion design en prototyping' },
      { type: 'houding', description: 'Oog voor detail en timing' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'ontwerpen',
        houding: ['Oog voor subtiele details', 'Gevoel voor timing en ritme'],
        kennis: ['Animation principles', 'Easing functions', 'Choreography'],
        vaardigheden: ['Microinteracties ontwerpen', 'Transitions creëren', 'Storyboarding voor animatie']
      },
      {
        outcome: 'prototype',
        houding: ['Experimenteel met motion', 'Iteratief verfijnen'],
        kennis: ['Animation tools', 'CSS animations', 'JavaScript libraries'],
        vaardigheden: ['Geanimeerde prototypes maken', 'Code-based animaties', 'Motion testen']
      },
      {
        outcome: 'reflecteren',
        houding: ['Kritisch over toegevoegde waarde', 'Bewust van performance impact'],
        kennis: ['UX van animatie', 'Performance metrics', 'Accessibility van motion'],
        vaardigheden: ['Impact evalueren', 'Performance analyseren', 'Accessibility testen']
      }
    ]
  },
  // Semester 5 - Branding Specialisatie
  {
    id: 's5-branding-identity',
    name: 'Brand Identity Development',
    duration: '4 weken',
    description: 'Ontwikkelen van een complete merkidentiteit en visuele strategie.',
    semester: 5,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Branding strategie en merkpsychologie' },
      { type: 'vaardigheden', description: 'Visuele identiteit en brand guidelines' },
      { type: 'houding', description: 'Strategisch en conceptueel sterk' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: ['Strategisch denken', 'Empathie voor merkwaarden'],
        kennis: ['Brand strategy', 'Merkpsychologie', 'Concurrentie analyse'],
        vaardigheden: ['Merkonderzoek', 'Positionering bepalen', 'Brand workshops faciliteren']
      },
      {
        outcome: 'ontwerpen',
        houding: ['Conceptueel sterk', 'Consistent in uitvoering'],
        kennis: ['Visual identity systems', 'Logo design', 'Brand touchpoints'],
        vaardigheden: ['Logo ontwerpen', 'Huisstijl ontwikkelen', 'Touchpoints vormgeven']
      },
      {
        outcome: 'prototype',
        houding: ['Aandacht voor toepassing', 'Kwaliteitsbewust'],
        kennis: ['Brand guidelines', 'Asset management', 'Print en digital producties'],
        vaardigheden: ['Brand manuals maken', 'Mockups produceren', 'Guidelines documenteren']
      }
    ]
  },
  {
    id: 's5-branding-campaign',
    name: 'Integrated Brand Campaign',
    duration: '3 weken',
    description: 'Cross-media campagne voor een merk of product.',
    semester: 5,
    learningOutcomes: ['ontwerpen', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Campaign strategy en media planning' },
      { type: 'vaardigheden', description: 'Cross-media concepten en storytelling' },
      { type: 'houding', description: 'Creatief en strategisch' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'ontwerpen',
        houding: ['Creatief storytelling', 'Strategisch campagne denken'],
        kennis: ['Campaign strategie', 'Media channels', 'Content strategie'],
        vaardigheden: ['Campagne concepten ontwikkelen', 'Cross-media planning', 'Verhaallijnen creëren']
      },
      {
        outcome: 'verbinden',
        houding: ['Samenwerken met specialisten', 'Klantgericht presenteren'],
        kennis: ['Stakeholder management', 'Pitch technieken', 'Budget planning'],
        vaardigheden: ['Campagnes pitchen', 'Teams coördineren', 'Klanten adviseren']
      },
      {
        outcome: 'reflecteren',
        houding: ['Kritisch evalueren', 'Leren van resultaten'],
        kennis: ['Campaign metrics', 'ROI analyse', 'Impact measurement'],
        vaardigheden: ['Campagne effectiviteit meten', 'Data analyseren', 'Learnings documenteren']
      }
    ]
  }
];

const semesterNames = [
  'BASE',
  'CHALLENGE', 
  'CONNECT',
  'EXPLORE',
  'Specialisaties',
  'JAAR 3 EN 4',
  'JAAR 3 EN 4',
  'JAAR 3 EN 4'
];

import { semesterLevels } from './semesterLevels';
import { Specialization } from '../types/curriculum';

// Specialisaties voor semester 5
const semester5Specializations: Specialization[] = [
  {
    id: 'immersive-design',
    name: 'Immersive Design',
    description: 'VR, AR en 3D experiences',
    activities: mockActivities.filter(a => a.semester === 5 && a.id.includes('immersive'))
  },
  {
    id: 'digital-design',
    name: 'Digital Design',
    description: 'Web en interface design',
    activities: mockActivities.filter(a => a.semester === 5 && a.id.includes('digital'))
  },
  {
    id: 'branding',
    name: 'Branding',
    description: 'Merkidentiteit en strategie',
    activities: mockActivities.filter(a => a.semester === 5 && a.id.includes('branding'))
  }
];

export const semesters: Semester[] = Array.from({ length: 8 }, (_, i) => ({
  number: i + 1,
  name: semesterNames[i],
  level: semesterLevels[i + 1],
  year: Math.floor(i / 2) + 1,
  activities: i === 4 ? [] : mockActivities.filter(a => a.semester === i + 1), // Semester 5 heeft geen directe activities
  specializations: i === 4 ? semester5Specializations : undefined, // Semester 5 heeft specialisaties
  professionalProducts: i === 0 ? [
    { outcome: 'context', description: 'Onderzoeksrapport met persona\'s en inzichten' },
    { outcome: 'ontwerpen', description: 'Visuele concepten en moodboards' },
    { outcome: 'prototype', description: 'Prototypes (low-fi en high-fi) en presentaties' },
    { outcome: 'verbinden', description: 'Teamreflectie en feedbackdocumenten' },
    { outcome: 'reflecteren', description: 'Persoonlijk ontwikkelingsplan en leerreflecties' }
  ] : i === 1 ? [
    { outcome: 'context', description: 'Uitgebreid onderzoeksplan en -resultaten' },
    { outcome: 'ontwerpen', description: 'Iteratieve conceptontwikkeling met onderbouwing' },
    { outcome: 'prototype', description: 'Werkende prototypes en testplannen' },
    { outcome: 'verbinden', description: 'Opdrachtgevers presentaties en samenwerking portfolio' },
    { outcome: 'reflecteren', description: 'Proces documentatie en persoonlijke groei rapportage' }
  ] : undefined
}));
