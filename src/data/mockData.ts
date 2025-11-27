import { Activity, Semester } from '../types/curriculum';

// Curriculum data CMD Utrecht
export const mockActivities: Activity[] = [
  // Semester 1
  {
    id: 's1-basecamp',
    name: 'Basecamp',
    duration: '1 week',
    description: 'Kennismakingsweek waarin studenten het vakgebied CMD verkennen, elkaar leren kennen en eerste inzichten opdoen in ontwerpprocessen, teamwork en reflectie. Studenten werken aan kleine praktijkopdrachten om kennis te maken met de CMD-werkwijze en bouwstenen van het vak.',
    semester: 1,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Kennismaking met het vakgebied CMD en digitale media' },
      { type: 'vaardigheden', description: 'Prototyping basics, teamwork en reflectie' },
      { type: 'houding', description: 'Professionele instelling en nieuwsgierigheid tonen' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Nieuwsgierigheid tonen',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'Introductie Design Thinking'
        ],
        vaardigheden: [
          'Informatie verzamelen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Experimenteren en verkennen',
          'Spelenderwijs mogelijkheden ontdekken'
        ],
        kennis: [
          'Introductie Design Thinking'
        ],
        vaardigheden: [
          'Simpele concepten bedenken'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Nieuwsgierigheid naar feedback'
        ],
        kennis: [
          'Eerste kennismaking met prototyping',
          'Basics van presenteren'
        ],
        vaardigheden: [
          'Simpele prototypes maken',
          'Presenteren van werk'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Meewerkende open houding',
          'Hulp vragen en ondersteuning bieden'
        ],
        kennis: [
          'Wat is een retrospective',
          'Feedbackgeletterdheid basis'
        ],
        vaardigheden: [
          'Communiceren met teamleden'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Openstaan om te leren',
          'Betrokkenheid tonen',
          'Leergierigheid en vragen stellen'
        ],
        kennis: [
          'Portflow (introductie)'
        ],
        vaardigheden: [
          'Portflow gebruiken (introductie)',
          'Eigen leerproces bijhouden'
        ]
      }
    ]
  },
  {
    id: 's1-visual-design',
    name: 'Visual Design',
    duration: '4 weken',
    description: 'Introductie in visueel ontwerpen waarbij studenten de fundamenten van typografie, kleur, compositie en visuele hiërarchie leren. Ze werken aan praktijkopdrachten waarin ze visuele concepten ontwikkelen en toepassen, gebruikmakend van professionele design tools en principes.',
    relations: 'De visuele ontwerpvaardigheden die hier worden aangeleerd vormen de basis voor alle latere ontwerpprojecten doorheen het curriculum. Kennis van compositie, kleur en typografie komt terug in jaar 2 projecten, verdiept zich in semester 3 Visual Design, en vormt de kern van de Brand Design specialisatie in jaar 3.',
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
          'Meewerkende houding tonen en actief bijdragen aan teamwerk',
          'Bereid zijn om hulp te vragen als iets niet lukt'
        ],
        kennis: [
          'Wat is een retrospective en waarom doen we die',
          'Eerste kennismaking met feedbackgeletterdheid'
        ],
        vaardigheden: [
          'Basale communicatie met teamleden',
          'Feedback durven ontvangen',
          'Kennis maken met retrospective methodes (warme douche)'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Openstaan om te leren en fouten te maken',
          'Aanwezig en betrokken zijn tijdens lessen'
        ],
        kennis: [
          'Introductie reflectiemethode STARR',
          'Kennismaking met Portflow als reflectie-instrument'
        ],
        vaardigheden: [
          'Eerste datapunten vastleggen in Portflow',
          'Eenvoudige reflecties schrijven over wat je hebt gedaan en geleerd'
        ]
      }
    ]
  },
  {
    id: 's1-interaction-design',
    name: 'Interaction Design',
    duration: '4 weken',
    description: 'Leren ontwerpen van gebruiksvriendelijke digitale interfaces waarbij studenten kennismaken met UX-principes, gebruikersonderzoek en interactiepatronen. Ze werken aan interactieve prototypes en leren deze te testen met gebruikers, waarbij empathie en gebruiksgericht denken centraal staan.',
    relations: 'De UX-principes en testmethodes die hier worden geleerd, vormen een rode draad door het curriculum. Deze fundamenten komen terug in alle opdrachtgeversprojecten, worden verder ontwikkeld in jaar 2 en 3, en zijn essentieel voor zowel de Digital Design als Immersive Design specialisaties in jaar 3.',
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
          'Actief luisteren naar feedback van anderen',
          'Lef tonen om eigen werk te delen met de groep'
        ],
        kennis: [
          'Verschillende soorten feedback (peer feedback, docent feedback)',
          'Belbin groepsrollen - kennismaking'
        ],
        vaardigheden: [
          'Feedback ontvangen en daar iets mee doen',
          'Eerste stappen in constructieve feedback geven',
          'Samenwerken in een team'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Nieuwsgierig zijn naar wat je hebt geleerd',
          'Durven toegeven als iets niet lukt'
        ],
        kennis: [
          'Reflectiemethode Korthagen (kern, actie, terugblik)',
          'Het belang van leerdoelen'
        ],
        vaardigheden: [
          'Datapunten toevoegen in Portflow',
          'Reflecteren op wat goed ging en wat beter kan',
          'Eerste leerdoelen formuleren'
        ]
      }
    ]
  },
  {
    id: 's1-social-design',
    name: 'Social Design',
    duration: '4 weken',
    description: 'Ontwerpen voor maatschappelijke vraagstukken met oog voor impact.',
    relations: 'De kwalitatieve onderzoeksmethoden (interviews, empathy maps, co-creatie) en empathisch ontwerpen die hier worden geïntroduceerd, komen terug in alle opdrachtgeversprojecten en het Eigen Project in jaar 2. Deze vaardigheden worden verder verdiept in semester 3 en vormen een belangrijk onderdeel van alle specialisaties in jaar 3.',
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
          'Elkaar helpen en ondersteunen tijdens workshops',
          'Respectvol omgaan met verschillende werkwijzen'
        ],
        kennis: [
          'Belbin groepsrollen - verschillende rollen in teams',
          'Basisprincipes van samenwerken'
        ],
        vaardigheden: [
          'Samenwerken met wisselende teamleden',
          'Feedback geven aan peers',
          'Vragen durven stellen aan docenten en medestudenten'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Experimenteren en daarvan leren',
          'Nieuwsgierig zijn naar nieuwe vakgebieden'
        ],
        kennis: [
          'Reflectiemethode STARR toepassen op Social Design',
          'Zelfsturend leren - eerste stappen in planning'
        ],
        vaardigheden: [
          'Reflecteren op Social Design project in Portflow',
          'Leerdoelen bijstellen op basis van ervaringen',
          'Proces documenteren met foto\'s en notities'
        ]
      }
    ]
  },
  {
    id: 's1-workshopweek',
    name: 'Workshopweek',
    duration: '1 week',
    description: 'Intensieve week vol workshops waarin studenten nieuwe technieken, tools en vakgebieden binnen CMD exploreren. Studenten experimenteren met verschillende methoden, leren van experts en ontdekken nieuwe mogelijkheden voor hun ontwerpvaardigheden, waarbij experimenteren en nieuwsgierigheid centraal staan.',
    excludeCompetenciesSection: true,
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
          'Enthousiasme tonen voor nieuwe technieken',
          'Experimenteren zonder angst om te falen'
        ],
        kennis: [
          'Workshop etiquette en participatie',
          'Kennismaken met verschillende CMD vakgebieden'
        ],
        vaardigheden: [
          'Workshops actief volgen en meedoen',
          'Nieuwe tools en technieken uitproberen',
          'Inspiratie opdoen voor toekomstige projecten'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Openstaan voor nieuwe ervaringen',
          'Ontdekken wat je interesseert binnen CMD'
        ],
        kennis: [
          'Overzicht van CMD vakgebieden en specialismen',
          'Zelfontdekking - wat ligt mij?'
        ],
        vaardigheden: [
          'Eerste kennismaking met zelfevaluatie',
          'Ontdekken van eigen interesses en talenten',
          'Workshop ervaringen documenteren'
        ]
      }
    ]
  },
  {
    id: 's1-hackathon-film',
    name: 'Hackathon Film',
    duration: '1 week',
    description: 'Intensieve week waarin studenten in teamverband een filmproduct realiseren van concept tot eindresultaat. Studenten leren snel schakelen onder tijdsdruk, creatieve beslissingen nemen en effectief samenwerken aan een filmische productie, waarbij storytelling en visuele communicatie centraal staan.',
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
          'Nieuwsgierigheid tonen naar het onderwerp',
          'Openheid voor nieuwe perspectieven'
        ],
        kennis: [
          'Montage en editing: ritme, continuïteit en transities',
          'Storytelling: dramatische structuur, character development en narratieve technieken',
          'Filmische genres en stijlen (documentaire, fictie, experimenteel)',
          'Productierollen: regisseur, cameraman, editor, geluidstechnicus',
          'Scenarioschrijven en storyboarding voor filmproducties'
        ],
        vaardigheden: [
          'Informatie vertalen naar visuele expressie en inzichtelijke documentatie'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Risico\'s durven nemen bij het experimenteren',
          'Bereid zijn om fouten te maken als onderdeel van het leerproces'
        ],
        kennis: [
          'Narratieve structuren en plot development',
          'Tools en methodes uit het filmwerkveld'
        ],
        vaardigheden: [
          'Ideeën genereren en uitwerken via storyboards en shot lists',
          'Moodboards maken voor filmische sfeer en esthetiek',
          'Experimenteren met film, licht, geluid en vorm om betekenisvolle verhalen te ontwikkelen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Moed tonen om imperfecte prototypes te delen',
          'Openheid voor feedback'
        ],
        kennis: [
          'Montageprincipes: continuity editing, match cuts en pacing',
          'Storytellingtechnieken voor bewegend beeld',
          'Presentatievormen en feedbackmethodes binnen filmproducties'
        ],
        vaardigheden: [
          'Ontwerpen vertalen naar een overtuigende filmische productie',
          'Opnametechnieken toepassen met camera en audio-apparatuur',
          'Video editing en montage in professionele software'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Meewerkende houding - actief bijdragen is belangrijk'
        ],
        kennis: [
          'Feedback geven én ontvangen'
        ],
        vaardigheden: [
          'Communiceren en overleggen met teamleden',
          'Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen'
        ]
      }
    ]
  },
  // Semester 2
  {
    id: 's2-opdrachtgevers-1',
    name: 'Opdrachtgeversproject 1',
    duration: '6 weken',
    description: 'Werken aan een echte opdracht voor een externe opdrachtgever waarbij studenten zelfstandig onderzoeksmethodes selecteren, ontwerpkeuzes onderbouwen en professioneel communiceren. Dit is een cruciale stap in hun ontwikkeling naar zelfstandige ontwerpers die verantwoordelijkheid nemen voor hun werk.',
    relations: 'Dit is het eerste opdrachtgeversproject waarbij studenten alle skills uit semester 1 (visual design, interaction design, gebruikersonderzoek) combineren in een realistisch project. Bereidt voor op Opdrachtgeversproject 2 in semester 2, de opdrachtgeversprojecten in semester 3, en uiteindelijk de praktijkstage in semester 5 en specialisatieprojecten in jaar 3.',
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
          'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes',
          'Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders'
        ],
        kennis: [
          'Onderzoeksopzet maken',
          'Stakeholderanalyse',
          'Probleemdefinitie (vraag achter de vraag)',
          'APA bronvermelding',
          'Design thinking verdieping (Empatise)'
        ],
        vaardigheden: [
          'Onderzoeksmethoden selecteren en uitvoeren',
          'Relevante informatie verzamelen en analyseren',
          'Inzichten formuleren en onderbouwen',
          'Gebruikersbehoeften vertalen naar kaders voor ontwerp'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting',
          'Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten',
          'Verder werken de studenten aan creative confidence'
        ],
        kennis: [
          'Ontwerpen in professionele setting',
          'Briefing en debriefing',
          'Brainstorm- en conceptmethodieken',
          'Guiding principles',
          'Design thinking verdieping (Define en Ideate)'
        ],
        vaardigheden: [
          'Concepten genereren, vergelijken en selecteren',
          'Ontwerpkeuzes onderbouwen',
          'Iteratief werken met meerdere versies'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen',
          'Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen',
          'Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt'
        ],
        kennis: [
          'Mom test',
          'Design thinking verdieping (Prototype & testen)',
          'Kennis van feedbackanalyse'
        ],
        vaardigheden: [
          'Prototypes maken die aansluiten bij gekozen concept',
          'Testplannen opstellen en uitvoerbare tests ontwerpen',
          'Testresultaten analyseren en prioriteren',
          'Verbeteringen doorvoeren op basis van inzichten'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking',
          'Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek'
        ],
        kennis: [
          'Groepsdynamieken',
          'Feedback, feedup, feedforward',
          'Begrip van samenwerkingsmodellen (rollen, afspraken, planning)',
          'Inzicht in communicatievormen richting opdrachtgever',
          'Selecteren van feedbackmethodieken'
        ],
        vaardigheden: [
          'Communiceren met opdrachtgever en team',
          'Samenwerkingsproces organiseren',
          'Presenteren van werk en ontwerpkeuzes'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht',
          'Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen',
          'Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten'
        ],
        kennis: [
          'Inzicht in persoonlijke leerdoelen en groei-indicatoren',
          'Kennis van documentatietechnieken (dummy, procesverslag)'
        ],
        vaardigheden: [
          'Reflecteren op eigen ontwikkeling',
          'Feedback vertalen naar concrete leeracties',
          'Proces en leermomenten documenteren'
        ]
      }
    ]
  },
  {
    id: 's2-workshopweek',
    name: 'Workshopweek',
    duration: '1 week',
    description: 'Intensieve week vol workshops waarin studenten nieuwe technieken, tools en vakgebieden binnen CMD exploreren. Studenten experimenteren met verschillende methoden en ontdekken nieuwe mogelijkheden voor hun ontwerpvaardigheden.',
    excludeCompetenciesSection: true,
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Kennisverbreding door workshops in verschillende vakgebieden' },
      { type: 'vaardigheden', description: 'Nieuwe technieken en tools exploreren' },
      { type: 'houding', description: 'Openheid voor nieuwe ervaringen en experimenteren' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [],
        kennis: [
          'Nieuwe tools en methodes uit de ontwerppraktijk',
          'Afhankelijk van specifieke workshop'
        ],
        vaardigheden: [
          'Afhankelijk van specifieke workshop'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [],
        kennis: [
          'Tools en methodes uit het werkveld',
          'Afhankelijk van specifieke workshop'
        ],
        vaardigheden: [
          'Afhankelijk van specifieke workshop'
        ]
      },
      {
        outcome: 'prototype',
        houding: [],
        kennis: [
          'Presentatievormen en feedbackmethodes binnen creatieve processen',
          'Afhankelijk van specifieke workshop'
        ],
        vaardigheden: [
          'Feedback verzamelen, analyseren en gebruiken om het eindproduct te verbeteren',
          'Afhankelijk van specifieke workshop'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [],
        kennis: [
          'Geen (tenzij specifiek in workshop aangereikt)'
        ],
        vaardigheden: [
          'Samenwerken met medestudenten buiten het cluster'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [],
        kennis: [
          'Geen (tenzij specifiek in workshop aangereikt)'
        ],
        vaardigheden: [
          'Zelfstandig reflecteren op leermomenten'
        ]
      }
    ]
  },
  {
    id: 's2-eigen-project',
    name: 'Eigen Project',
    duration: '4 weken',
    description: 'Zelfstandig een eigen ontwerpprobleem definiëren en oplossen waarbij studenten het volledige Design Thinking proces doorlopen. Van onderzoek tot prototype, studenten tonen eigenaarschap, initiatief en leren zelfstandig keuzes te maken en te onderbouwen. Dit project bereidt hen voor op meer autonome werkvormen.',
    relations: 'Eerste keer dat studenten volledig zelfstandig een project vormgeven. Combineert alle methodieken uit semester 1 en 2, en bereidt voor op het Eigen Project in semester 3, de keuzevrijheid in de minor (semester 5), en de zelfstandigheid die vereist is bij specialisatieprojecten en het afstudeerproject in jaar 3 en 4.',
    semester: 2,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
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
          'Inzicht in persoonlijke kwaliteiten, leerdoelen en verantwoordelijkheden binnen het ontwerpproces',
          'Design thinking - Frames (Samenvatting Siebe de Boer)'
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
        outcome: 'verbinden',
        houding: [],
        kennis: [
          'Inzicht in het betrekken van experts/docenten bij zelf gestuurd werk'
        ],
        vaardigheden: [
          'Feedback vragen bij relevante docenten/experts',
          'Persoonlijke motivatie verbinden aan ontwerpkeuzes',
          'Resultaten presenteren in een expositiecontext'
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
          'Begrip van autonomie binnen het leerproces',
          'Kennis van methodes om leerontwikkeling vast te leggen',
          'Inzicht in hoe persoonlijke fascinatie een leercurve vormt'
        ],
        vaardigheden: [
          'Reflecteren op eigen ontwikkeling',
          'Feedback vertalen naar concrete leeracties',
          'Proces en leermomenten documenteren'
        ]
      }
    ]
  },
  {
    id: 's2-opdrachtgevers-2',
    name: 'Opdrachtgeversproject 2',
    duration: '6 weken',
    description: 'Vervolgopdracht met meer complexiteit en zelfstandigheid waarbij studenten hun verworven vaardigheden toepassen in een professionele context. Studenten tonen groei in hun onderzoeksaanpak, ontwerpproces en samenwerking.',
    relations: 'Bouwt voort op Opdrachtgeversproject 1 met hogere verwachtingen qua zelfstandigheid en complexiteit. De ervaringen uit het Eigen Project en Workshopweek worden hier geïntegreerd in een professionele context. Bereidt voor op de opdrachtgeversprojecten in semester 3, de praktijkstage in semester 5, en de professionele projecten in de specialisaties in jaar 3.',
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
          'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes',
          'Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders'
        ],
        kennis: [
          'Onderzoeksopzet maken',
          'Stakeholderanalyse',
          'Probleemdefinitie (vraag achter de vraag)',
          'APA bronvermelding',
          'Design thinking verdieping (Empatise)'
        ],
        vaardigheden: [
          'Onderzoeksmethoden selecteren en uitvoeren',
          'Relevante informatie verzamelen en analyseren',
          'Inzichten formuleren en onderbouwen',
          'Gebruikersbehoeften vertalen naar kaders voor ontwerp'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting',
          'Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten',
          'Verder werken de studenten aan creative confidence'
        ],
        kennis: [
          'Ontwerpen in professionele setting',
          'Briefing en debriefing',
          'Brainstorm- en conceptmethodieken',
          'Guiding principles',
          'Design thinking verdieping (Define en Ideate)',
          'Design thinking - Frames (Samenvatting Siebe de Boer)'
        ],
        vaardigheden: [
          'Concepten genereren, vergelijken en selecteren',
          'Ontwerpkeuzes onderbouwen',
          'Iteratief werken met meerdere versies'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen',
          'Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen',
          'Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt'
        ],
        kennis: [
          'Mom test',
          'Design thinking verdieping (Prototype & testen)',
          'Kennis van feedbackanalyse'
        ],
        vaardigheden: [
          'Prototypes maken die aansluiten bij gekozen concept',
          'Testplannen opstellen en uitvoerbare tests ontwerpen',
          'Testresultaten analyseren en prioriteren',
          'Verbeteringen doorvoeren op basis van inzichten'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking',
          'Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek'
        ],
        kennis: [
          'Groepsdynamieken',
          'Feedback, feedup, feedforward',
          'Begrip van samenwerkingsmodellen (rollen, afspraken, planning)',
          'Inzicht in communicatievormen richting opdrachtgever',
          'Selecteren van feedbackmethodieken'
        ],
        vaardigheden: [
          'Communiceren met opdrachtgever en team',
          'Samenwerkingsproces organiseren',
          'Presenteren van werk en ontwerpkeuzes'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht',
          'Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen',
          'Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten'
        ],
        kennis: [
          'Inzicht in persoonlijke leerdoelen en groei-indicatoren',
          'Kennis van documentatietechnieken (dummy, procesverslag)'
        ],
        vaardigheden: [
          'Reflecteren op eigen ontwikkeling',
          'Feedback vertalen naar concrete leeracties',
          'Proces en leermomenten documenteren'
        ]
      }
    ]
  },
  {
    id: 's2-film-hackathon',
    name: 'Film-hackathon',
    duration: '1 week',
    description: 'Intensieve week waarin studenten in teamverband een filmproduct realiseren van concept tot eindresultaat. Studenten leren snel schakelen onder tijdsdruk, creatieve beslissingen nemen en effectief samenwerken aan een filmische productie.',
    excludeCompetenciesSection: true,
    semester: 2,
    learningOutcomes: ['context', 'prototype', 'verbinden'],
    competencies: [
      { type: 'kennis', description: 'Video productie en storytelling basics' },
      { type: 'vaardigheden', description: 'Snel een filmproduct realiseren in teamverband' },
      { type: 'houding', description: 'Creatief onder tijdsdruk en samenwerken' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [],
        kennis: [
          'Inzicht in AI/technologie als ontwerptool'
        ],
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
        houding: [],
        kennis: [],
        vaardigheden: []
      }
    ]
  },
  // Semester 3
  {
    id: 's3-game-hackathon',
    name: 'Game Hackathon',
    duration: '1 week',
    description: 'Intensieve week waarin studenten experimenteren met game design en development.',
    relations: 'Bouwt voort op de hackathon-ervaring uit semester 1 en 2, maar nu met focus op game mechanics en interactieve storytelling. De prototyping vaardigheden en het werken onder tijdsdruk worden verder ontwikkeld en zijn toepasbaar in de minor (semester 5) en alle specialisaties in jaar 3, met name voor Immersive Design (VR/AR games) en Digital Design (interactive experiences).',
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
    description: 'Verdieping in visuele communicatie, brand design en design systems.',
    relations: 'Verdieping van de visuele ontwerpvaardigheden uit semester 1 met focus op brand design en design systems. Deze kennis is cruciaal voor de Brand Design specialisatie in jaar 3, maar ook zeer relevant voor Digital Design (UI/UX systems) en Immersive Design (visual language in 3D spaces). Bereidt tevens voor op professioneel werk tijdens de stage in semester 5.',
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
    relations: 'Bouwt voort op de opdrachtgeversprojecten uit semester 1 en 2 met significant hogere complexiteit en zelfstandigheid. Dit project integreert alle skills uit jaar 1 en 2 en bereidt direct voor op de praktijkstage in semester 5. De professionele werkwijze en stakeholder management zijn essentieel voor alle specialisatieprojecten in jaar 3 (Brand Design, Immersive Design, Digital Design) en het afstudeerproject.',
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
    relations: 'Verdieping in persuasive design principes en ethisch ontwerpen. Deze kennis is toepasbaar in alle specialisaties: Brand Design (merkovertuiging en campagnes), Digital Design (engagement en conversion), en Immersive Design (gedragsverandering door immersive experiences). Ook relevant voor communicatie tijdens de stage en het afstudeerproject.',
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
    relations: 'Narrative design en storytelling technieken die cruciaal zijn voor alle specialisaties. Brand Design gebruikt storytelling voor merkidentiteit en campagnes, Digital Design voor user journeys en content experiences, en Immersive Design voor narratieve VR/AR experiences. Deze vaardigheden komen ook terug in presentaties tijdens stage en afstuderen.',
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
    relations: 'Tweede Eigen Project waarin studenten volledige autonomie hebben om een eigen ontwerpprobleem te definiëren en op te lossen. Dit project helpt studenten hun specialisatie richting te verkennen en bereidt voor op de minor keuze in semester 5, de specialisatiekeuze in jaar 3 (Brand/Immersive/Digital Design), en het zelfstandig werken tijdens het afstudeerproject in jaar 4.',
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
  // Semester 4 - CONNECT (nog in te vullen)
  {
    id: 's4-placeholder-1',
    name: 'Activiteit Semester 4',
    duration: 'TBD',
    description: 'Deze activiteit wordt later ingevuld.',
    semester: 4,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Nog in te vullen' },
      { type: 'vaardigheden', description: 'Nog in te vullen' },
      { type: 'houding', description: 'Nog in te vullen' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: ['Nog in te vullen'],
        kennis: ['Nog in te vullen'],
        vaardigheden: ['Nog in te vullen']
      },
      {
        outcome: 'ontwerpen',
        houding: ['Nog in te vullen'],
        kennis: ['Nog in te vullen'],
        vaardigheden: ['Nog in te vullen']
      },
      {
        outcome: 'prototype',
        houding: ['Nog in te vullen'],
        kennis: ['Nog in te vullen'],
        vaardigheden: ['Nog in te vullen']
      },
      {
        outcome: 'verbinden',
        houding: ['Nog in te vullen'],
        kennis: ['Nog in te vullen'],
        vaardigheden: ['Nog in te vullen']
      },
      {
        outcome: 'reflecteren',
        houding: ['Nog in te vullen'],
        kennis: ['Nog in te vullen'],
        vaardigheden: ['Nog in te vullen']
      }
    ]
  },
  // Semester 5 - Praktijk
  {
    id: 's5-praktijk-stage',
    name: 'Praktijk Stage',
    duration: '20 weken',
    description: 'Het praktijksemester richt zich op functioneren als junior CMD-ontwerper in een professionele context. Stage bij een extern bedrijf of organisatie waar studenten praktijkervaring opdoen in een professionele CMD-omgeving.',
    semester: 5,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Onderzoeksmethoden, design thinking, organisatiebelangen en bedrijfsprocessen' },
      { type: 'vaardigheden', description: 'Context analyseren, concepten genereren, prototypen en testen, professioneel communiceren' },
      { type: 'houding', description: 'Professioneel, nieuwsgierig, onderzoekend en leergierig' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'De student toont een professionele, nieuwsgierige en onderzoekende houding binnen de organisatie',
          'Verdiept zich actief in processen, gebruikers en stakeholders',
          'Vraagt door waar nodig en houdt rekening met organisatorische belangen en beperkingen',
          'Gaat zorgvuldig om met verwachtingen',
          'Toont verantwoordelijkheid voor de kwaliteit en zorgvuldigheid van de contextanalyse'
        ],
        kennis: [
          'Kennis van onderzoeksmethoden (contextonderzoek, doelgroepanalyse, stakeholdermapping) om problemen te analyseren',
          'Inzicht in organisatiebelangen, bedrijfsprocessen en design maturity van organisaties'
        ],
        vaardigheden: [
          'Context analyseren en inzichten formuleren op basis van onderzoek',
          'Stakeholder- en doelgroepanalyse kunnen uitvoeren',
          'Relevante onderzoeksmethoden kiezen, onderbouwen en uitvoeren',
          'Complexe informatie vertalen naar ontwerpimplicaties'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'De student ontwerpt met eigenaarschap en autonomie',
          'Maakt bewuste keuzes op basis van onderzoek en feedback',
          'Toont creativiteit binnen realistische kaders',
          'Blijft flexibel bij veranderende prioriteiten',
          'Durft een duidelijke richting voor te stellen',
          'Staat open voor expertise van collega\'s en de visie van de organisatie'
        ],
        kennis: [
          'Design thinking',
          'Kennis van concepting-methodes, ideation-technieken en ontwerpstrategieën',
          'Inzicht in eisen en kaders van opdrachtgever, gebruikers en stakeholders',
          'Kennis van design-principes (UX, UI, visual design, service design, social design)'
        ],
        vaardigheden: [
          'Concepten genereren op basis van onderzoek en organisatiebelangen',
          'Iteratief ontwerpproces uitvoeren: schetsen, itereren, feedback verwerken',
          'Ontwerpkeuzes onderbouwen richting stakeholder en team'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'De student toont een lerende, iteratieve houding',
          'Durft aannames te toetsen',
          'Organiseert tests passend bij de praktijk',
          'Verwerkt testresultaten eerlijk en nauwkeurig',
          'Gaat professioneel om met feedback, ook wanneer deze kritisch is',
          'Past ontwerpen transparant aan op basis van bevindingen'
        ],
        kennis: [
          'Inzicht in evaluatiemethodes (usability testing, expert reviews, A/B testing)',
          'Kennis van standaarden zoals usability-normen, toegankelijkheid (WCAG), design systems'
        ],
        vaardigheden: [
          'Prototypes maken die keuzes verhelderen (van low-fi tot high-fi)',
          'Testopzetten opstellen en uitvoeren; resultaten analyseren',
          'Gebruikerservaringen evalueren en verbeteringen doorvoeren'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'De student communiceert professioneel met collega\'s, opdrachtgevers en andere betrokkenen',
          'Stemt actief af en zoekt samenwerking op',
          'Bewaakt een constructieve, respectvolle werkrelatie',
          'Draagt verantwoordelijkheid binnen het team',
          'Vraagt tijdig hulp',
          'Geeft en ontvangt feedback op een volwassen manier'
        ],
        kennis: [
          'Kennis van communicatievormen in multidisciplinaire teams',
          'Inzicht in rollen binnen ontwerpteams en samenwerking met externe stakeholders',
          'Kennis van documentatie- en overdrachtsvormen (procesdocumentatie, design rationale)'
        ],
        vaardigheden: [
          'Professioneel communiceren intern en extern (presenteren, pitchen, overtuigen)',
          'Actief samenwerken met interdisciplinair team en stakeholders',
          'Consistente feedback geven, ontvangen en verwerken',
          'Proces inzichtelijk en overdraagbaar maken (documentatie, planning)'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'De student neemt regie over zijn/haar eigen ontwikkeling binnen de organisatie',
          'Stelt zelf leerdoelen op',
          'Vraagt actief om feedback',
          'Reflecteert realistisch op eigen handelen',
          'Toont zelfbewustzijn',
          'Bekijkt fouten als leerkansen',
          'Verbindt persoonlijke groei zichtbaar aan de professionele context van de stage'
        ],
        kennis: [
          'Kennis van reflectiemethodieken en persoonlijke leerdoelen formuleren',
          'Inzicht in beroepsrollen, ontwikkeling binnen het CMD-beroep en persoonlijke groei'
        ],
        vaardigheden: [
          'Eigen werk kritisch evalueren en bijsturen op basis van feedback',
          'Doelgericht werken aan professionele ontwikkeling',
          'Nieuwe kennis en technologie proactief onderzoeken en toepassen'
        ]
      }
    ]
  },
  // Semester 6 - Immersive Design Specialisatie
  {
    id: 's6-immersive-leren-kijken',
    name: 'Leren kijken (introproject)',
    duration: '1 week',
    description: 'Introductieweek waarin studenten leren kritisch te kijken naar immersive experiences en hun werking analyseren op vorm, mechaniek en ervaring.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Experience design, storytelling en teamwerk basics' },
      { type: 'vaardigheden', description: 'Analyseren van immersive experiences en samenwerken' },
      { type: 'houding', description: 'Nieuwsgierig, kritisch en reflectief' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch en nieuwsgierig kijken naar immersive design',
          'Ontwikkelen van een visie op het vakgebied',
          'Betrouwbare ontwerper die durft te bevragen'
        ],
        kennis: [
          'Basiskennis storytelling, experience design, (zintuiglijke) waarneming en interactie',
          'Inspiratiemateriaal verzamelen en analyseren (case study)'
        ],
        vaardigheden: [
          'Analyseren van bestaande immersive experiences op vorm, mechaniek en ervaring',
          'Vertalen van inzichten uit case studies naar eigen werk',
          'In teamverband verkennen van thema\'s, interacties en doelen voor een nieuw ervaringsconcept'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Durven bestaande patronen te doorbreken',
          'Balanceren tussen creatieve vrijheid en realistische haalbaarheid',
          'Zelfbewustzijn en verantwoordelijkheid voor ontwerpkeuzes'
        ],
        kennis: [
          'Basis ontwerpprincipes voor interactie, experience design, (zintuiglijke) beleving en narratief',
          'De relatie tussen ontwerpkeuzes en (immersive) ervaring (interactie, beleving, verhaal)'
        ],
        vaardigheden: [
          'In teamverband maken van een korte immersive experience',
          'Basis technische skills',
          'Basis concepting: ontwikkelen van creative immersieve concepten met aandacht voor interactie en beleving',
          'Experimenteren met (digitale) technologie, storytelling, spel, performance',
          'Creativiteit en snel itereren: ideeën vertalen naar schetsen en low-fi prototypes'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch en iteratief testen',
          'Eerlijkheid en flexibiliteit in omgaan met feedback',
          'Volharding bij het ontwikkelen van prototypes'
        ],
        kennis: [
          'Werking en waarde van prototyping en playtesting in ontwerpprocessen',
          'Basisprincipes van feedback, observatie en iteratie'
        ],
        vaardigheden: [
          'Maken van low fi immersive prototypes met analoge en digitale technieken',
          'Testen van immersieve concepten binnen en buiten het team',
          'Interpreteren van testresultaten en verbeteren van beleving, techniek, spelmechanismes en storytelling',
          'Presenteren en ervaarbaar maken van prototype',
          'Planmatig en doelgericht werken binnen zelfgekozen kaders',
          'Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'Open en samenwerkend in teamverband',
          'Actief luisteren en feedback verwerken'
        ],
        kennis: [
          'Basisbegrip van samenwerken in een ontwerpteam',
          'Inzicht in duidelijke verdeling van rollen en taken voor een korte sprint',
          'Weten hoe je observaties en ontwerpbeslissingen deelt met anderen'
        ],
        vaardigheden: [
          'Samenwerken onder tijdsdruk',
          'Gezamenlijke keuzes maken over concept en verhaallijn',
          'Observaties helder presenteren in de video',
          'Actief luisteren en feedback verwerken binnen de groep',
          'Comfortzones leren navigeren'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'Reflectief op eigen rol en keuzes',
          'Open voor zelfinzicht'
        ],
        kennis: [
          'Basisbegrip van reflecteren op eigen rol en keuzes',
          'Inzicht in hoe observaties impact hebben op het ontwerp'
        ],
        vaardigheden: [
          'Kort reflecteren op wat je hebt gezien, bedacht en gemaakt',
          'Eigen aannames herkennen en bespreekbaar maken',
          'Feedback opnemen in de volgende versie van het prototype of video'
        ]
      }
    ]
  },
  {
    id: 's6-immersive-theorie-analyse',
    name: 'Immersive landscape: theorie en analyse (solo)',
    duration: '3 weken',
    description: 'Diepgaand solo-project waarin studenten literatuuronderzoek, case studies en analyse uitvoeren om bestaande immersive experiences te vergelijken en te plaatsen in het immersive design landschap.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Literatuuronderzoek en analyse van immersive experiences' },
      { type: 'vaardigheden', description: 'Wetenschappelijke analyse en kritisch vergelijken' },
      { type: 'houding', description: 'Analytisch, grondig en ethisch bewust' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch en ethisch bewustzijn in keuzes',
          'Nieuwsgierig en analytisch onderzoeken',
          'Reflecteren op onderliggende waarden in projecten'
        ],
        kennis: [
          'Literatuuronderzoek',
          'Case studies',
          'Analyse',
          'Maatschappelijke en technologische actualiteit en trends (vb Future Today Institute)',
          '(Ethiek)'
        ],
        vaardigheden: [
          'Analyseren van bestaande immersive experiences op vorm, mechaniek en ervaring aan de hand van (wetenschappelijke) literatuur',
          'Bestaande immersieve werken vergelijken en ten opzichte van elkaar kunnen plaatsen in het \'landschap\' van immersive design',
          'Waarden en wensen van doelgroep als uitgangspunt nemen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig ontwerpen met visie',
          'Keuzes onderbouwen vanuit onderzoek en maatschappelijke relevantie',
          'Verantwoordelijkheid voor consequenties van ontwerp'
        ],
        kennis: [
          'Basis principes voor uitvoeren en schrijven van analyse',
          'Beargumenteren en overtuigen',
          'Terminologie en basisbegrip vanuit het werkveld, zoals uiteengezet in oa \'Immersion Revisited\', \'Narrative as virtual reality\' (Ryan) en andere artikelen'
        ],
        vaardigheden: [
          'Uitvoeren en schrijven van analyse',
          'Argumenteren en onderbouwen ahv literatuur',
          'Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders',
          'Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Reflectief en kritisch over testresultaten',
          'Flexibel aanpassen op basis van feedback',
          'Volharding bij iteratief verbeteren'
        ],
        kennis: [
          'Projection mapping',
          'Verhaalperspectief en elementen van cinematografie',
          'Montagetechnieken'
        ],
        vaardigheden: [
          'Werken met een beamer, afstellen en het beeld aanpassen op het projectieoppervlak met Touchdesigner',
          'Rapid prototyping',
          'Rapid prototype met filmopname en montage'
        ]
      }
    ]
  },
  {
    id: 's6-immersive-concept-create',
    name: 'Immersive landscape: concept, create, test, prototype',
    duration: '4 weken',
    description: 'Uitgebreid project waarin studenten een volledig immersief concept ontwikkelen, realiseren en testen met aandacht voor interactie, AR/VR technologie en gebruikersbetrokkenheid.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'AR/VR, experience design en interactieontwerp' },
      { type: 'vaardigheden', description: 'Conceptontwikkeling en prototyping in immersive media' },
      { type: 'houding', description: 'Experimenteel, iteratief en gebruikersgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch analyseren vanuit meerdere perspectieven',
          'Ethisch bewustzijn tonen in ontwerpkeuzes',
          'Leervragen formuleren en passende leerstrategieën ontwikkelen'
        ],
        kennis: [
          'Literatuuronderzoek',
          'Case studies',
          'Analyse',
          'Maatschappelijke en technologische actualiteit en trends (vb Future Today Institute)',
          '(Ethiek)'
        ],
        vaardigheden: [
          'Analyseren van bestaande immersive experiences op vorm, mechaniek en ervaring aan de hand van (wetenschappelijke) literatuur',
          'Bestaande immersieve werken vergelijken en ten opzichte van elkaar kunnen plaatsen in het \'landschap\' van immersive design',
          'Waarden en wensen van doelgroep als uitgangspunt nemen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig en met visie ontwerpen',
          'Creatieve vrijheid balanceren met haalbaarheid',
          'Verantwoordelijkheid nemen voor ontwerpbeslissingen'
        ],
        kennis: [
          '5E-model voor experience design (Sontag)',
          'Magic circle (Huizinga)',
          'Ontwerpprincipes voor narratief expliciteren: Hero\'s journey, pyramide van Freytag',
          '(Immersive) audio'
        ],
        vaardigheden: [
          'oa werken in Adobe Audition, Ableton, Logic Pro',
          'Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders',
          'Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch, iteratief en reflectief testen',
          'Kritische vragen stellen bij aannames',
          'Gebruikers actief betrekken in evaluaties'
        ],
        kennis: [
          'Mobile Augmented Reality',
          'Intro into VR',
          'Maken van een testplan',
          'Interactie'
        ],
        vaardigheden: [
          'Werken met de online software: https://web-ar.studio/en/ het maken van een betekenisvolle digitale laag, bovenop een poster',
          'Kennis van wat Virtual Reality is en wat er voor nodig is om een ervaring te maken',
          'Gebruiken van de sensors op een laptop en een Makey Makey om een ervaring interactief te maken',
          'Toepassen van verscheidenheid aan test- en evaluatiemethoden (en daar kritisch op kunnen reflecteren)'
        ]
      }
    ]
  },
  {
    id: 's6-immersive-hackathon',
    name: 'Hackathon',
    duration: '1 week',
    description: 'Intensieve week waarin studenten in teamverband snel een immersive experience realiseren en leren samenwerken met peers van andere specialisaties.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Snelle conceptontwikkeling en multidisciplinair samenwerken' },
      { type: 'vaardigheden', description: 'Snel prototypen en communiceren onder tijdsdruk' },
      { type: 'houding', description: 'Flexibel, teamgericht en besluitvaardig' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Betrouwbare teamspeler in multidisciplinair verband',
          'Durven bevragen van andere specialisaties',
          'Kritisch en reflectief over eigen rol'
        ],
        kennis: [
          'Visie op en innemen van de rol van immersief ontwerper in een breder ontwerpteam'
        ],
        vaardigheden: [
          'Communicatie en samenwerken met peers met ander specialisme (ook LU verbinden)',
          'Wensen en waarden van opdrachtgever als uitgangspunt nemen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Besluitvaardig en actief in teamverband',
          'Balans tussen eigen visie en teamdynamiek',
          'Flexibel omgaan met veranderende eisen'
        ],
        kennis: [
          'Experience design principes in multidisciplinaire context'
        ],
        vaardigheden: [
          'Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders',
          'Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Eerlijkheid en flexibiliteit bij feedback',
          'Teamleden en stakeholders actief betrekken',
          'Volharding onder tijdsdruk'
        ],
        kennis: [
          'Rapid prototyping technieken voor immersive experiences'
        ],
        vaardigheden: [
          'Snel itereren en testen met multidisciplinair team',
          'Presenteren van immersive prototypes'
        ]
      }
    ]
  },
  {
    id: 's6-immersive-opdrachtgever',
    name: 'Opdrachtgeversproject',
    duration: '5-6 weken',
    description: 'Uitgebreid project voor een externe opdrachtgever waarbij studenten een complete immersive experience ontwikkelen op professioneel niveau met cultural probes en gebruikersonderzoek.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Professioneel immersive design en research through design' },
      { type: 'vaardigheden', description: 'Volledig designproces van onderzoek tot uitvoering' },
      { type: 'houding', description: 'Professioneel, ethisch bewust en klantgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Professioneel en ethisch bewustzijn in keuzes',
          'Kritisch analyseren vanuit gebruiker, organisatie en maatschappij',
          'Leervragen formuleren en passende leerstrategieën ontwikkelen',
          'Betrouwbare ontwerper die durft te bevragen en reflecteren'
        ],
        kennis: [
          'Cultural Probes',
          'Literatuuronderzoek',
          'Case studies',
          'Analyse',
          'Maatschappelijke en technologische actualiteit en trends (vb Future Today Institute)',
          '(Ethiek)'
        ],
        vaardigheden: [
          'Onderzoek doen met behulp van een ontworpen object',
          'Zelfstandig theorie en literatuur, inspiratie en analyse vinden die passend is bij het onderwerp en de fase van de opdracht',
          'Op een manier inzetten die het proces voedt/inspireert',
          'Communicatie met opdrachtgevers en stakeholders',
          'Wensen en waarden van opdrachtgever als uitgangspunt nemen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig ontwerpen met visie en zelfbewustzijn',
          'Keuzes onderbouwen vanuit onderzoek en maatschappelijke relevantie',
          'Verantwoordelijkheid nemen voor consequenties van ontwerp',
          'Durven bestaande patronen te doorbreken'
        ],
        kennis: [
          'VR/AR',
          'Ontwerpen in een complexe context met meerdere belanghebbenden',
          'Ontwerpen vanuit een specifieke rol binnen het vakgebied van immersive design'
        ],
        vaardigheden: [
          'Zelfstandig uitstippelen van het ontwerptraject in verschillende fases en iteraties',
          'Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders',
          'Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch, iteratief en reflectief testen',
          'Kritische vragen stellen bij aannames',
          'Volharding, eerlijkheid en flexibiliteit bij feedback',
          'Gebruikers actief betrekken in evaluaties'
        ],
        kennis: [
          'Gevorderde prototyping technieken voor immersive experiences',
          'Evaluatiemethoden voor immersive design'
        ],
        vaardigheden: [
          'Toepassen van verscheidenheid aan test- en evaluatiemethoden (en daar kritisch op kunnen reflecteren)',
          'Professioneel niveau prototypes ontwikkelen en presenteren'
        ]
      }
    ]
  },
  // Semester 6 - Digital Design Specialisatie
  {
    id: 's6-digital-leren-kijken',
    name: 'Leren kijken/Introproject',
    duration: '1 week',
    description: 'Introductieweek waarin studenten leren data te interpreteren in stedelijke omgevingen door middel van observaties, data walks en het ontwikkelen van begrip voor context en gedragspatronen.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Basiskennis data-interpretatie en context' },
      { type: 'vaardigheden', description: 'Observeren en signalen herkennen' },
      { type: 'houding', description: 'Nieuwsgierig, kritisch en bewust van data-ethiek' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch en nieuwsgierig kijken naar data in de omgeving',
          'Bewustzijn dat data gedrag beïnvloedt',
          'Betrouwbare ontwerper die durft te bevragen'
        ],
        kennis: [
          'Basiskennis Planes Garrett',
          'Basisinzicht in wat "context" betekent binnen (ontwerpgericht) onderzoek: omgeving, gedrag, (type) data, patronen',
          'Begrip van wat, zichtbare en onzichtbare, data kan zijn in een stedelijke omgeving: camera\'s, sporen, eigenaarschap',
          '(Laagdrempelig) ontwikkelen van kennis hoe diverse vormen van data te interpreteren en toepasbaar te maken',
          'Inzicht in hoe je door een andere lens kijkt (fietsendief + data-antropoloog)',
          'Bewustzijn dat data gedrag beïnvloedt en ontwerpkeuzes stuurt (en vice versa)'
        ],
        vaardigheden: [
          'Observaties uitvoeren in een context (Data Walk)',
          'Signalen herkennen van dataverzameling en gedragspatronen',
          'Foto\'s/video\'s maken om observaties vast te leggen',
          'Eerste ruwe inzichten formuleren over kansen/risico\'s voor de gebruiker'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Durven bestaande patronen te doorbreken',
          'Balanceren tussen observatie en interpretatie',
          'Zelfbewustzijn in ontwerpkeuzes'
        ],
        kennis: [
          'Basiskennis van low-fi ontwerp (paper prototyping)',
          'Inzicht in hoe functies inspelen op behoeften uit context observaties',
          'Kennis van eenvoudige conceptontwikkeling (functie → situatie → oplossing)'
        ],
        vaardigheden: [
          'Snel iteratief ideeën genereren op basis van observaties',
          'Paper wireframes maken voor twee kernfuncties',
          'Content en functionaliteit koppelen aan geobserveerde geïnterpreteerde data en patronen',
          'Ontwerpkeuzes mondeling uitleggen in eenvoudige taal'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch en iteratief testen',
          'Eerlijkheid in reflectie op eigen werk',
          'Flexibiliteit bij feedback'
        ],
        kennis: [
          'Basisinzicht in wat een prototype is en waarom het helpt om ideeën tastbaar te maken',
          'Weten wat een demonstratievideo moet laten zien (flow, functie, context)',
          'Short narrative production, door middel van vertaling concept in video'
        ],
        vaardigheden: [
          'Low-fi prototype maken (paper, schetsen, snelle flow)',
          'Storyboard-achtig denken voor de video',
          'Een mini-test uitvoeren binnen het team: "werkt deze flow logisch?"',
          'Resultaten vertalen naar de video-opzet'
        ]
      }
    ]
  },
  {
    id: 's6-digital-fictief-project',
    name: 'Fictief project',
    duration: '3 weken',
    description: 'Diepgaand project waarin studenten generatief onderzoek uitvoeren, co-design sessies leiden en UX-design ontwikkelen voor een fictieve opdracht binnen een ecosysteem (Apple/Google).',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'UX research, generatief onderzoek en ecosystemen' },
      { type: 'vaardigheden', description: 'Co-design en wireflow development' },
      { type: 'houding', description: 'Analytisch, grondig en gebruikersgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch analyseren vanuit meerdere perspectieven',
          'Nieuwsgierig naar gebruikersbehoeften',
          'Reflecteren op onderliggende waarden'
        ],
        kennis: [
          'Inzicht in subjectieve begrippen (transparantie, vertrouwen, eerlijkheid, gezond, duur, lekker)',
          'Diep begrip van Elements Of User Experience: User-Centered Design for the Web and Beyond (Five Planes of UX design van James Garrett, 2011)',
          'Aanvullende recente (wetenschappelijke) literatuur',
          'Kennis van generatief onderzoek (Sanders & Stappers 2019), zoals bijvoorbeeld: sociona\'s, contextmapping, interviews met gesprekstools, inzetten van sensitizers, co-design',
          'Inzicht in ecosystemen (Apple/Google) en wat dit betekent voor ontwerpkeuzes',
          'Kennis van doelgroepanalyse en waardegedreven onderzoek',
          'Begrip van hoe data, AI/ML en gedragsinformatie binnen ecosystemen werken'
        ],
        vaardigheden: [
          'Co designsessies voorbereiden, uitvoeren en analyseren',
          'Generatieve onderzoeksmethoden toepassen om betekenis op te halen',
          'Analyseren van onderzoeksresultaten. Data clusteren door middel van: affinity mapping, coderen van interviews, thema\'s duiden, patronen ontdekken',
          'Contextvisualisaties maken (sociona\'s, journeys, scenario\'s)',
          'Onderzoeks- en ontwerpvragen formuleren en wekelijks aanscherpen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig ontwerpen met visie',
          'Keuzes onderbouwen vanuit onderzoek',
          'Verantwoordelijkheid voor ontwerpbeslissingen'
        ],
        kennis: [
          'Diepgaand inzicht in toepassen van de UX-Planes theorie: Strategy → Scope → Structure → Skeleton → Surface',
          'Kennis van: informatie-architectuur, wireflows, component libraries, design patterns',
          'Begrip van ecosystem lock-in en second-party design',
          'Kennis van multi-device UX en design systems (Material / Human Interface Guidelines)',
          'Inzicht in AI/ML-toepassingen binnen UX'
        ],
        vaardigheden: [
          'Ontwerpoplossingen ontwikkelen op basis van onderzoek',
          'Wireframes en wireflows maken voor meerdere devices',
          'Componenten ontwerpen volgens patterns van gekozen ecosysteem',
          'Consistente UI-elementen opzetten binnen een mini-designsysteem',
          'Ontwerpkeuzes onderbouwen op basis van insights',
          'Conceptontwikkeling en valideren van concepten; vertalen van concepten d.m.v. iteratief ontwerp in interacties'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch en reflectief testen',
          'Kritische vragen stellen bij aannames',
          'Flexibel omgaan met feedback'
        ],
        kennis: [
          'Inzicht in usability testing (heuristieken, testplan, scenario-gebaseerd testen)',
          'Kennis van high-fi prototyping (visual design, interaction states, motion basics)',
          'Inzicht in multi-device interactie (switching, complementariteit, continuïteit)'
        ],
        vaardigheden: [
          'High-fi prototypes bouwen in Figma (component libraries, varianten, states)',
          'Testscenario\'s opstellen voor meerdere devices (mobiel, desktop, eventueel wearables)',
          'Usability tests uitvoeren met echte gebruikers of medestudenten',
          'Heuristische evaluaties uitvoeren en verwerken',
          'Testresultaten vertalen naar ontwerpiteraties',
          'Eindprototype demonstreren met focus op rationale en ecosysteem-logica'
        ]
      }
    ]
  },
  {
    id: 's6-digital-deep-dive',
    name: 'Deep Dive',
    duration: '4 weken',
    description: 'Uitgebreid project waarin studenten een volledig atomic design system ontwikkelen voor multi-device experiences met aandacht voor dark patterns, micro-interacties en portfolio-ontwikkeling.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Atomic design, dark patterns en multi-device UX' },
      { type: 'vaardigheden', description: 'Design systems en component development' },
      { type: 'houding', description: 'Systematisch, ethisch bewust en detail-gericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Kritisch en ethisch bewustzijn bij dark patterns',
          'Nieuwsgierig naar multi-device gedrag',
          'Reflectief over eigen positionering als ontwerper'
        ],
        kennis: [
          'Inzicht in dark patterns, ethische keuzes en beïnvloeding in digitale omgevingen',
          'Kennis van hoe ontwerpkeuzes gedrag sturen (normatief ontwerp, manipulatie vs. guidance)',
          'Inzicht in multi-device ecosystemen (smartwatch, mobiel, desktop, interactie tussen devices)',
          'Kennis van contextuele factoren die invloed hebben op navigatie, locatiegebruik, ruimtegebruik en gedrag',
          'Begrip van persoonlijke positionering binnen portfolio-ontwikkeling (wie ben ik als ontwerper?)'
        ],
        vaardigheden: [
          'Interfaces analyseren op: ethiek, overtuiging en manipulatie (dark pattern reviews)',
          'Ontwerpkeuzes onderbouwen binnen een device-ecosysteem',
          'Contextgedrag vertalen naar UX-principes en interaction flows',
          'Een zelfgekozen ontwerpcontext definiëren (portfolio): doelgroep, toon, functie'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Systematisch en consistent werken',
          'Verantwoordelijkheid voor ethische ontwerpkeuzes',
          'Zelfbewustzijn in persoonlijke stijl ontwikkelen'
        ],
        kennis: [
          'Diep inzicht in atomic design en component-hiërarchie',
          'Basis kennis van motion-principes, micro-interacties en visuele hiërarchie',
          'Inzicht in multi-device patroonbibliotheken (Material, Human Interface Guidelines) en hoe deze samenwerken',
          'Kennis van dark-pattern mechanismen en hoe ze visueel en interactief vorm krijgen',
          'Begrip van visuele storytelling binnen portfolio-ontwerpen'
        ],
        vaardigheden: [
          'Een eigen atomic design system opzetten (atoms, molecules, organisms)',
          'Componentvarianten ontwerpen (states, transitions, errors, micro-interacties)',
          'Multi-device flows ontwerpen (smartwatch, telefoon, desktop)',
          'UI-designprincipes toepassen: grid, compositie, spacing, visuele hiërarchie',
          'Design rationale expliciet formuleren bij elke ontwerpkeuze'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Iteratief verfijnen van details',
          'Kritisch evalueren van micro-interacties',
          'Volharding bij perfectie van states en transitions'
        ],
        kennis: [
          'Inzicht in high-fi prototyping (interacties, animaties, motion timing, UI-details)',
          'Kennis van usability-testen, heuristische evaluaties en snelle feedbackloops',
          'Inzicht in device-specifieke interacties (tap targets, haptic feedback, scroll-patronen, gestures)'
        ],
        vaardigheden: [
          'Klikbare high-fi prototypes maken voor meerdere devices (smartwatch + mobiel + desktop)',
          'Animaties, micro-interacties en transities ontwerpen en implementeren',
          'Dark-pattern flows visueel overtuigend uitwerken (bewust misleiden / sturen)',
          'Mini-tests uitvoeren (bijv. peer feedback, hallway tests, kort heuristisch review)',
          'Testresultaten verwerken in verbeterde componenten en flows'
        ]
      }
    ]
  },
  {
    id: 's6-digital-hackathon',
    name: 'Hackathon',
    duration: '1 week',
    description: 'Intensieve week waarin studenten in multidisciplinair verband een immersive/physical digital experience ontwerpen en testen onder tijdsdruk.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Experience journeys en mixed physical/digital design' },
      { type: 'vaardigheden', description: 'Snelle contextanalyse en prototyping' },
      { type: 'houding', description: 'Flexibel, besluitvaardig en teamgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Betrouwbare teamspeler in mixed-discipline context',
          'Durven bevragen van aannames onder tijdsdruk',
          'Kritisch over beleving en gebruikerservaring'
        ],
        kennis: [
          'Inzicht in contexten waarin verschillende beleving samenkomen',
          'Begrip van hoe bezoekers door fysieke én digitale ruimtes bewegen',
          'Basiskennis van experience journeys: voor-, tijdens- en na een beleving',
          'Inzicht in uitdagingen voor mixed physical/digital experiences (wayfinding, interactie, informatievoorziening)'
        ],
        vaardigheden: [
          'Contextinformatie ophalen binnen een kort tijdsframe (snelle desk research, mini-interviews, field assumptions)',
          'Identificeren van behoeften, motivaties en belevingselementen',
          'Snel scenario\'s schetsen, waaronder edge cases',
          'Context mapping op sprintniveau, kansen en fricties benoemen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Besluitvaardig en actief in teamverband',
          'Balans tussen creatieve vrijheid en haalbaarheid',
          'Flexibel omgaan met veranderende eisen'
        ],
        kennis: [
          'Kennis van hoe je van contentmomenten en interactielogica',
          'Inzicht in wat een kernflow is binnen een belevings-app',
          'Kennis van UI-principes voor audio-triggers, micro-interacties en storytelling',
          'Begrip van hoe branding, immersive elementen en UX elkaar versterken'
        ],
        vaardigheden: [
          'Ontwerpen van wireframes of wireflows die de route-ervaring ondersteunen',
          'UX-beslissingen vertalen naar schermen, componenten en interacties',
          'Integreren van muziekcontent in de flow (audio players, visual storytelling, markers)',
          'Concepten omzetten naar een helder, overtuigend en visueel ontwerp',
          'Snel itereren binnen een multidisciplinair team'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Eerlijkheid en flexibiliteit bij snelle feedback',
          'Teamleden en stakeholders actief betrekken',
          'Volharding onder tijdsdruk'
        ],
        kennis: [
          'Basiskennis van hoe je een prototype maakt dat een beleving communiceert (narratief, flow, interactie)',
          'Inzicht in hoe je test op begrijpelijkheid, usability en aantrekkingskracht binnen één dag',
          'Kennis van functionaliteiten'
        ],
        vaardigheden: [
          'Maken van een klikbaar prototype dat de kernflow laat zien',
          'Testscenario\'s formuleren: "begrijpt de gebruiker waar hij naartoe moet?"',
          'Uitvoeren van snelle usability-checks met medestudenten / andere specialisaties',
          'Aanpassen van ontwerp op basis van directe feedback',
          'Eindpresentatie maken waarbij de beleving duidelijk voelbaar is'
        ]
      }
    ]
  },
  {
    id: 's6-digital-bureauopdracht',
    name: 'Bureauopdracht',
    duration: '5-6 weken',
    description: 'Uitgebreid professioneel project voor een externe opdrachtgever waarbij studenten een volledig digitaal product ontwikkelen voor complexe doelgroepen met aandacht voor toegankelijkheid, vertrouwen en gebruikersonderzoek.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Professioneel UX design en participatief onderzoek' },
      { type: 'vaardigheden', description: 'Volledig designproces van onderzoek tot uitvoering' },
      { type: 'houding', description: 'Professioneel, ethisch bewust en empathisch' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Professioneel en ethisch bewustzijn in keuzes',
          'Kritisch analyseren vanuit gebruiker, organisatie en maatschappij',
          'Empathisch en respectvol met kwetsbare doelgroepen',
          'Betrouwbare ontwerper die durft te bevragen en reflecteren'
        ],
        kennis: [
          'Inzicht in de complexe leefwereld van gebruikers',
          'Begrip van barrières: taal, vertrouwen, digitale toegang, sociale context, onzekerheid, keuze-overload',
          'Kennis van participatieve onderzoeksmethoden voor/met kwetsbare doelgroepen',
          'Inzicht in waardeproposities, motivaties en gedragsfactoren die ontwerpbeslissingen sturen',
          'Kennis van hoe fysieke context en digitale context elkaar beïnvloeden (stad, opvang, woonruimte, online winkelomgeving)'
        ],
        vaardigheden: [
          'Onderzoeksvragen opstellen en aanscherpen op basis van stakeholderinput',
          'Generatieve en evaluatieve onderzoeksmethoden uitvoeren, passend bij de doelgroep',
          'Inzichten vertalen naar concrete user needs en opportunity areas',
          'Omgaan met gevoeligheden: vertrouwen, veiligheid, taal, toegankelijkheid, emotionele belasting',
          'Contextmap, journey, insights-deck of opportunity-framework opstellen'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig ontwerpen met visie en zelfbewustzijn',
          'Keuzes onderbouwen vanuit onderzoek en maatschappelijke relevantie',
          'Verantwoordelijkheid voor toegankelijkheid en inclusiviteit',
          'Durven bestaande patronen te doorbreken'
        ],
        kennis: [
          'Inzicht in UX-conceptontwikkeling voor complexe systemen (bijv. stedelijke hulpstructuren of grote e-commerce platformen)',
          'Kennis van informatiearchitectuur, flows, aanbevelingslogica, motivatieprincipes',
          'Diepgaand inzicht in UI-principes voor helderheid, toegankelijkheid, samenhang en keuzezekerheid',
          'Kennis van interaction patterns voor search, filtering, keuzebegeleiding, vergelijking en contextvisualisatie'
        ],
        vaardigheden: [
          'Concepten ontwikkelen die inspelen op vertrouwen, duidelijkheid, ondersteuning en motivatie',
          'Ontwerpen van wireframes, flows en decision-points (bijv. twijfelvermindering of route/navigatie)',
          'UI-componenten ontwikkelen volgens ecosystemen (Android, iOS, Web)',
          'Ontwerpkeuzes expliciet koppelen aan onderzoek en insights',
          'Scenario\'s ontwerpen voor verschillende doelgroepen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch, iteratief en reflectief testen',
          'Kritische vragen stellen bij aannames',
          'Volharding, eerlijkheid en flexibiliteit bij feedback',
          'Gebruikers actief en respectvol betrekken'
        ],
        kennis: [
          'Usability-testing principes voor uiteenlopende doelgroepen (bijv. laagdrempelig, taalarme, stressgevoelige enz)',
          'Inzicht in testscenario\'s voor vertrouwen, duidelijkheid, navigatie, en keuzezekerheid',
          'Kennis van high-fi prototyping en state-management (componenten, variants, motion)'
        ],
        vaardigheden: [
          'High-fi prototypes bouwen op basis van design systems en platform guidelines',
          'Prototypes testen met echte gebruikers, doelgroep-experts of medestudenten',
          'Observaties vertalen naar concrete ontwerpaanpassingen',
          'Visuele, inhoudelijke en UX-testfeedback integreren in een iteratiecyclus',
          'Eindprototype overtuigend demonstreren met rationale en onderbouwing'
        ]
      }
    ]
  },
  // Semester 6 - Brand Design Specialisatie
  {
    id: 's6-brand-design-leren-kijken',
    name: 'Leren kijken (introproject)',
    duration: '1 week',
    description: 'Introductieweek waarin studenten leren kritisch te kijken naar merkidentiteiten en visuele communicatie door museumbezoeken en analyse van design in een bredere context.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Visuele analyse en merkidentiteit basics' },
      { type: 'vaardigheden', description: 'Kritisch observeren en analyseren' },
      { type: 'houding', description: 'Nieuwsgierig en analytisch' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Nieuwsgierig en kritisch kijken naar design',
          'Ontwikkelen van een visie op het vakgebied'
        ],
        kennis: [
          'Basiskennis storytelling, visual design, design in een bredere context',
          'Kritisch kijken naar design en deze in een relevante context plaatsen'
        ],
        vaardigheden: [
          'Kunnen zien en analyseren wat waarom werkt op designvlak (o.a. door museumbezoek) in een bredere context'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Nieuwsgierig naar verschillende ontwerp-interpretaties',
          'Open staan voor eerste conceptuele stappen'
        ],
        kennis: [
          'Basiskennis onderzoek en eerste stappen van analyse naar concept/eigen interpretatie',
          'Dit adhv design thinking'
        ],
        vaardigheden: [
          'Interpreteren van geanalyseerd werk en hier zelfstandig iteratief leren conceptualiseren',
          'Hierbij leren welke terminologie wordt gehanteerd'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Reflectieve houding ontwikkelen',
          'Jezelf verhouden tot eigen werk en interpretaties'
        ],
        kennis: [
          'Basisprincipes van gestructureerde feedback, gerichte observatie en iteratie'
        ],
        vaardigheden: [
          'Op basisniveau leren zichzelf te verhouden tot een gemaakt werk en hier op een persoonlijk niveau een eigen interpretatie van maken',
          'Wie wil je worden als designer en waarom...'
        ]
      }
    ]
  },
  {
    id: 's6-brand-design-analyse',
    name: 'Analyse project',
    duration: '3 weken',
    description: 'Diepgaande analyse van een bestaand merk inclusief markt, doelgroep en merkpositionering waarbij studenten leren onderzoek uit te voeren op diverse niveaus en domeinen.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Merkstrategie en marktonderzoek' },
      { type: 'vaardigheden', description: 'Strategische analyse en rapportage' },
      { type: 'houding', description: 'Analytisch en grondig' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Analyseren vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij)',
          'Kritisch en grondig onderzoek uitvoeren'
        ],
        kennis: [
          'Inhoudelijke kennis van designproces o.a. / briefing/ debriefing',
          'Onderzoek op diverse niveaus/ domeinen',
          'Analyse bestaande campagnes en brands'
        ],
        vaardigheden: [
          'Onderzoeksvaardigheden/ design thinking/ iteratief ontwerpen',
          'Denk hierbij aan doelgroeponderzoek, concurrentie-analyse, trendonderzoek, etc.'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig werken met visie',
          'Keuzes onderbouwen vanuit onderzoek'
        ],
        kennis: [
          'Brainstormtechnieken/ maaktechnieken',
          'Kennis van relevantie designdomeinen',
          '(basis)kennis van relevante software',
          'Campagne- en brandstrategie/ -concept/ -ontwikkeling',
          'Dit o.a. door Brand the Change (A. Miltenburg) en Advertising Concept Book (P. Barry)'
        ],
        vaardigheden: [
          'Adobe/ aanverwante software',
          'Beheersing storytelling/ concepting-/ designskills',
          'Leren interpreteren van inzichten uit onderzoek en deze vertalen naar een pakkend concept'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategische en iteratieve testhouding',
          'Kritische vragen stellen bij aannames'
        ],
        kennis: [
          'Prototyping, visual design, iteratief toewerken naar presentabele uitingen',
          'Dit o.a. door Brand the Change (A. Miltenburg) en Advertising Concept Book (P. Barry)'
        ],
        vaardigheden: [
          'Overstijgende designskills',
          'Strategische designskills',
          'Selectie relevante richtingen/ communicatieve vaardigheden',
          'Designskills/ ontwikkelen BIG/ ontwikkelen Campagneproducten'
        ]
      }
    ]
  },
  {
    id: 's6-brand-design-brainstorm',
    name: 'Brainstorm project',
    duration: '4 weken',
    description: 'Creatief proces van conceptontwikkeling voor een nieuwe merkidentiteit of rebranding waarbij studenten leren experimenteren en iteratief designen.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Creatieve conceptontwikkeling en branding principes' },
      { type: 'vaardigheden', description: 'Ideation, schetsen en conceptualiseren' },
      { type: 'houding', description: 'Creatief, exploratief en collaboratief' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Durven experimenteren en bestaande patronen doorbreken',
          'Zelfstandig en kritisch naar eigen werk kijken'
        ],
        kennis: [
          'Brainstormtechnieken/ maaktechnieken',
          'Kennis van relevantie designdomeinen',
          '(basis)kennis van relevante software'
        ],
        vaardigheden: [
          'Kunnen toepassen wat eerder in het semester is geleerd, nu op meer zelfstandig niveau',
          'Leren en durven experimenteren',
          'Kritisch kijken naar eigen werk'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Creatieve vrijheid balanceren met realistische haalbaarheid',
          'Conceptueel sterk en iteratief werken'
        ],
        kennis: [
          'Copywriting, Storytelling, Art direction, Strategie, merkpositionering, Gestalt, AV design semiotiek en visuele retorica',
          'Kennis van relevantie designdomeinen/ werkveld',
          'Kennis van Layout/ AIDA'
        ],
        vaardigheden: [
          'Iteratief leren divergeren en adhv experimenten/ brainstormtechnieken eerste concepten opstellen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Reflectief en flexibel in omgaan met feedback',
          'Volharding tonen bij het iteratief ontwikkelen'
        ],
        kennis: [
          'Iteratief leren designen',
          'Adhv designcycli divergeren en convergeren om het geheel presentabel te presenteren'
        ],
        vaardigheden: [
          'Vanuit divergeren leren convergeren en designkeuzes maken',
          'Kritisch leren kijken naar eigen (en andermans) werk en leren wat wel of niet te behouden',
          'Welke designer ben/ word ik?'
        ]
      }
    ]
  },
  {
    id: 's6-brand-design-hackathon',
    name: 'Hackathon',
    duration: '1 week',
    description: 'Intensieve week waarin studenten in teamverband snel een merkidentiteit of campagne concept realiseren en leren samenwerken in een multidisciplinair team.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Snelle conceptontwikkeling en uitvoering' },
      { type: 'vaardigheden', description: 'Snel prototypen en samenwerken onder tijdsdruk' },
      { type: 'houding', description: 'Flexibel, creatief en teamgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Betrouwbare teamspeler in multidisciplinair verband',
          'Durven bevragen van opdrachtgever en stakeholders'
        ],
        kennis: [
          'Welke rol neem ik in als designer in een multidisciplinair team',
          'Welke belangen heeft de opdrachtegever en hoe zorgen we dat we de vraag achter de vraag ontdekken',
          'Onderzoek naar context en stakeholders'
        ],
        vaardigheden: [
          'Leren samenwerken',
          'Leren een rol in te nemen',
          'Leren breder te kijken dan eigen specialisatie'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Besluitvaardig en actief in teamverband',
          'Balans tussen creatieve vrijheid en teamdynamiek'
        ],
        kennis: [
          'Iteratief werken, design thinking, concepting op een gestructureerde manier'
        ],
        vaardigheden: [
          'Leren concepten op een breder niveau, dus multidisciplinair',
          'Brainstormen in een divers team',
          'Hier ook een actieve rol in nemen'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Eerlijkheid en flexibiliteit in omgaan met feedback',
          'Gebruikers en stakeholders actief betrekken'
        ],
        kennis: [
          'Iteratief en kritisch designen en testen',
          'Actief stakeholders meenemen en bevragen/ toetsen',
          'Binnen designcyclus hier de laatste stappen zetten en mogelijk weer eerste stappen richting context',
          'Deliverables op professioneel niveau opleveren',
          'Kritisch en analytisch kijken naar eindniveau en op dit niveau leveren'
        ],
        vaardigheden: [
          'Leren inschatten wanneer een product/ deliverable voldoende presentabel is',
          'Blijven testen en itereren (in samenspraak met stakeholders)'
        ]
      }
    ]
  },
  {
    id: 's6-brand-design-opdrachtgever',
    name: 'Opdrachtgeversproject',
    duration: '5-6 weken',
    description: 'Uitgebreid project voor een externe opdrachtgever waarbij studenten een complete merkidentiteit of campagne ontwikkelen op professioneel niveau met gestructureerde design thinking.',
    semester: 6,
    learningOutcomes: ['context', 'ontwerpen', 'prototype'],
    competencies: [
      { type: 'kennis', description: 'Professionele branding en merkstrategie' },
      { type: 'vaardigheden', description: 'Volledig branding proces van onderzoek tot uitvoering' },
      { type: 'houding', description: 'Professioneel, strategisch en klantgericht' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'Professioneel en ethisch bewustzijn in keuzes',
          'Kritisch analyseren vanuit gebruiker, organisatie en maatschappij',
          'Leervragen formuleren en passende leerstrategieën ontwikkelen'
        ],
        kennis: [
          'Design thinking',
          'Van briefing naar debrief',
          'Research (through design)',
          'Doelgroeponderzoek en -segmentatie (bijv a day in the life)',
          'Stakeholderanalyse',
          'Concurrentie-analyse',
          'Bredere context analyseren'
        ],
        vaardigheden: [
          'Gedegen en goed beslagen ten ijs van start gaan met een opdracht',
          'Alle factoren en randvoorwaarden in kaart hebben',
          'Gestructureerd een designproces opzetten'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'Zelfstandig ontwerpen met visie en zelfbewustzijn',
          'Keuzes onderbouwen vanuit onderzoek en maatschappelijke relevantie',
          'Verantwoordelijkheid nemen voor consequenties van ontwerp'
        ],
        kennis: [
          'Gestructureerde analyse van onderzoeksresultaten',
          'Vanuit hier brainstorming, concepting en eerste designresultaten'
        ],
        vaardigheden: [
          'Gestructureerd kunnen divergeren op basis van onderzoeksresultaten in een professionele context'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'Strategisch, iteratief en reflectief testen',
          'Volharding, eerlijkheid en flexibiliteit bij feedback',
          'Gebruikers actief betrekken in evaluaties'
        ],
        kennis: [
          'Toewerken naar krachtige en relevante deliverables',
          'Copywriting, Artdirection, Layout, Semiotiek, fotografie, editorial design, AV-design Business, Presentatieskills, Expodesign'
        ],
        vaardigheden: [
          'Convergeren en kritisch kijken naar ontwikkelde oplossingen',
          'Vanuit hier presentabele producten maken die voldoen aan de (geïtereerde en geïnterpreteerde) designvragen van de opdrachtgever'
        ]
      }
    ]
  },
  // Semester 7 - Afstuderen
  {
    id: 's7-afstuderen',
    name: 'Afstudeerproject',
    duration: '20 weken',
    description: 'Het afstudeerproject waarin studenten een complex ontwerpprobleem zelfstandig definiëren, onderzoeken, ontwerpen, realiseren en professioneel presenteren. Studenten werken zelfstandig, nemen professionele verantwoordelijkheid en tonen dat ze kunnen functioneren als beginnend ontwerper die complexe vraagstukken aanpakt volgens het volledige CMD-proces.',
    semester: 7,
    learningOutcomes: ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'],
    competencies: [
      { type: 'kennis', description: 'Diepgaande kennis van onderzoeksmethoden, organisatiecontext, ontwerpmethodieken en theorieën binnen het afstudeerdomein' },
      { type: 'vaardigheden', description: 'Zelfstandig complexe vraagstukken analyseren, ontwerpen, prototypen, testen en professioneel communiceren' },
      { type: 'houding', description: 'Professioneel, onderzoekend, autonoom, visiegericht en kritisch reflecterend' }
    ],
    learningOutcomeDetails: [
      {
        outcome: 'context',
        houding: [
          'De afstudeerder benadert complexe vraagstukken met een professionele, onderzoekende en kritische houding',
          'Toont eigenaarschap in het afbakenen en doorgronden van de context',
          'Vraagt door op aannames en onderzoekt belangen van alle relevante stakeholders',
          'Gaat zorgvuldig en ethisch om met data',
          'Toont bewustzijn van maatschappelijke en organisatorische consequenties van keuzes',
          'Neemt verantwoordelijkheid voor de kwaliteit, diepgang en betrouwbaarheid van het onderzoek'
        ],
        kennis: [
          'Diepgaande kennis van onderzoeksmethoden voor complexe vraagstukken (kwalitatief, kwantitatief, mixed-methods)',
          'Inzicht in organisatiecontext: processen, governance, strategie en stakeholders',
          'Kennis van maatschappelijke, ethische en technologische factoren die ontwerp beïnvloeden',
          'Kennis van theorieën en modellen binnen het gekozen afstudeerdomein'
        ],
        vaardigheden: [
          'Zelfstandig een complex vraagstuk analyseren en herdefiniëren',
          'Geschikte onderzoeksmethoden kiezen, plannen, onderbouwen en uitvoeren',
          'Onderzoeksresultaten kritisch interpreteren en vertalen naar ontwerpcriteria',
          'Waardecreatie aantonen vanuit meerdere perspectieven (gebruiker/organisatie/samenleving)'
        ]
      },
      {
        outcome: 'ontwerpen',
        houding: [
          'De afstudeerder ontwerpt met autonomie, visie en een volwassen vakinhoudelijke houding',
          'Durft duidelijke ontwerpkeuzes te maken en verantwoordt deze met overtuiging richting professionals en opdrachtgevers',
          'Balanceert creativiteit met realisme',
          'Toont flexibiliteit wanneer nieuwe inzichten of veranderende omstandigheden dat vragen',
          'Ontwerpen wordt gezien als een verantwoordelijk proces',
          'Staat open voor kritiek en blijft streven naar de beste oplossing'
        ],
        kennis: [
          'Kennis van geavanceerde ontwerpmethodieken (service design, interaction design, system design, UX-strategie)',
          'Kennis van ontwerpprincipes, patterns, design systems en bijbehorende tools',
          'Inzicht in haalbaarheid, technische randvoorwaarden en implementatiecontext'
        ],
        vaardigheden: [
          'Ontwerpen vanuit probleem- én waardeperspectief',
          'Onderbouwde ontwerprichting ontwikkelen en itereren op basis van inzichten',
          'Autonome ontwerpkeuzes maken én verdedigen richting stakeholders',
          'Meervoudige ontwerpvarianten creëren en evalueren'
        ]
      },
      {
        outcome: 'prototype',
        houding: [
          'De afstudeerder toont een transparante, nauwkeurige en iteratieve houding in het prototypen en testen',
          'Gaat professioneel om met feedback',
          'Onderzoekt kritisch de werking van het ontwerp, ook wanneer resultaten confronterend zijn',
          'Toont discipline in het zorgvuldig documenteren en analyseren van tests',
          'Blijft gericht op verbeteren, valideren en afwegen',
          'Integriteit, eerlijkheid en doorzettingsvermogen kenmerken de houding'
        ],
        kennis: [
          'Kennis van verschillende prototypingtechnieken (van low- tot high-fidelity)',
          'Inzicht in testmethoden en evaluatiecriteria (usability, toegankelijkheid, effectmeting)',
          'Kennis van eisen rond veiligheid, toegankelijkheid, consistentie en betrouwbaarheid'
        ],
        vaardigheden: [
          'Gestructureerd prototypen dat ontwerpkeuzes concreet maakt',
          'Testopzetten ontwerpen, uitvoeren, analyseren en verantwoorden',
          'Resultaten vertalen naar concrete ontwerpverbeteringen',
          'Onderzoekersdiscipline tonen in nauwkeurige verslaglegging'
        ]
      },
      {
        outcome: 'verbinden',
        houding: [
          'De afstudeerder communiceert volwassen, respectvol en professioneel binnen de organisatie en met externe stakeholders',
          'Stemt actief af en bewaakt verwachtingen',
          'Neemt initiatief in samenwerking',
          'Toont empathie voor verschillende disciplines en belangen',
          'Beweegt zich soepel tussen rollen en gesprekspartners',
          'Feedback wordt zowel constructief gegeven als ontvangen',
          'Draagt zichtbaar bij aan een professionele, collegiale samenwerking'
        ],
        kennis: [
          'Kennis van communicatie- en overlegstrategieën in multidisciplinaire professionele contexten',
          'Inzicht in stakeholdermanagement, projectstructuren en besluitvorming',
          'Kennis van professionele presentatievormen, documentatie en overdracht'
        ],
        vaardigheden: [
          'Professioneel communiceren met opdrachtgever, gebruikers, experts en teamleden',
          'Constructief feedback geven, ontvangen en verwerken',
          'Stakeholders meenemen in keuzes en beslissingen',
          'Heldere, professionele documentatie en presentatie van proces en resultaat'
        ]
      },
      {
        outcome: 'reflecteren',
        houding: [
          'De afstudeerder neemt volledige verantwoordelijkheid voor zijn/haar eigen ontwikkeling en handelen',
          'Reflecteert kritisch en eerlijk op keuzes, resultaten en professionele identiteit',
          'Koppelt inzichten aan concrete verbeteringen',
          'Toont zelfbewustzijn, realisme en intrinsieke motivatie om verder te groeien binnen het vakgebied',
          'Toont een ethische en maatschappelijk bewuste houding',
          'Denkt na over de bredere impact van het ontwerp en het eigen professionele handelen'
        ],
        kennis: [
          'Inzicht in eigen professionele rol binnen het CMD-beroep',
          'Kennis van reflectiemethodieken en professionele ontwikkeling',
          'Inzicht in ethische vraagstukken, maatschappelijke impact en verantwoordelijk ontwerp'
        ],
        vaardigheden: [
          'Kritisch reflecteren op eigen handelen, onderbouwing en resultaat',
          'Zelfstandig leerdoelen formuleren, monitoren en bijsturen',
          'Professionele keuzes uitleggen en relateren aan theorie, context en eigen identiteit',
          'Verantwoord, autonoom projectmanagement uitvoeren binnen de stage-/afstudeeromgeving'
        ]
      }
    ]
  }
];

const semesterNames = [
  'BASE',
  'CHALLENGE', 
  'EXPLORE',
  'CONNECT',
  'Praktijk',
  'Semester Specialisatie',
  'Afstuderen'
];

import { semesterLevels } from './semesterLevels';
import { Specialization } from '../types/curriculum';

const semesterDescriptions: Record<number, string> = {
  1: 'Beginnend - onder begeleiding kennis maken met het CMD vakgebied',
  2: 'Groeiend - met ondersteuning, werken aan echte opdrachten en eigen projecten',
  3: 'Ontwikkelend - meer zelfstandig met feedback uitproberen en verdiepen',
  4: 'Gevorderd - zelfstandig complexere multidisciplinaire opdracht',
  5: 'Praktijkervaring opdoen in een professionele werkomgeving',
  6: 'Verdieping in gekozen specialisatie binnen CMD',
  7: 'Afstudeerproject - zelfstandig complex ontwerpprobleem onderzoeken, ontwerpen en realiseren'
};

// Specialisaties voor semester 6
const semester6Specializations: Specialization[] = [
  {
    id: 'immersive-design',
    name: 'Immersive Design',
    description: 'VR, AR en 3D experiences',
    activities: mockActivities.filter(a => a.semester === 6 && a.id.includes('immersive'))
  },
  {
    id: 'digital-design',
    name: 'Digital Design',
    description: 'Web en interface design',
    activities: mockActivities.filter(a => a.semester === 6 && a.id.includes('digital'))
  },
  {
    id: 'brand-design',
    name: 'Brand Design',
    description: 'Merkidentiteit en strategie',
    activities: mockActivities.filter(a => a.semester === 6 && a.id.includes('brand-design'))
  }
];

export const semesters: Semester[] = Array.from({ length: 7 }, (_, i) => ({
  number: i + 1,
  name: semesterNames[i],
  description: semesterDescriptions[i + 1],
  level: semesterLevels[i + 1],
  year: i >= 4 && i <= 5 ? 3 : i >= 6 ? 4 : Math.floor(i / 2) + 1, // Semester 5-6 is jaar 3, 7 is jaar 4
  activities: i === 5 ? [] : mockActivities.filter(a => a.semester === i + 1), // Semester 6 heeft geen directe activities
  specializations: i === 5 ? semester6Specializations : undefined, // Semester 6 heeft specialisaties
  professionalProducts: (() => {
    const semesterNum = i + 1;
    switch(semesterNum) {
      case 1:
        return [
          { outcome: 'context', description: 'CMD Introductie: Oriëntatie op beroepspraktijk met bezoekverslagen en interviews met professionals, Visual Design: Literatuuronderzoek grafisch ontwerp met moodboard en inspiratiebronnen, Interaction Design: User research notities en eerste persona schetsen, Social Design: Interview verslagen doelgroep met empathy maps' },
          { outcome: 'ontwerpen', description: 'CMD Introductie: Eerste conceptschetsen en ideeënexploratie, Visual Design: Moodboards, typografie experimenten en kleurstudies, Interaction Design: User stories, wireframes en user flows, Social Design: Co-creatie concepten met doelgroep en participatieve ontwerpschetsen' },
          { outcome: 'prototype', description: 'CMD Introductie: Eerste digitale prototypes met no-code tools, Visual Design: Poster ontwerpen en huisstijl elementen, Interaction Design: Klikbaar Figma prototype met basic interacties, Social Design: Fysiek prototype voor doelgroep met foto documentatie, Frontend Development: Eerste HTML/CSS webpagina\'s' },
          { outcome: 'verbinden', description: 'CMD Introductie: Teampresentaties en groepswerk documentatie, Retrospective documentatie per project met teamreflecties, Peer feedback notities en verbeterpunten, Presentatieslides voor projectpitches' },
          { outcome: 'reflecteren', description: 'Portflow: Eerste datapunten en reflecties per project, Leerdoelen formulering voor semester 2, Zelfevaluatie per onderwijsactiviteit, Portfolio opzet met eerste werkstukken' }
        ];
      case 2:
        return [
          { outcome: 'context', description: 'Opdrachtgeversproject 1 & 2: Onderzoeksrapport met doelgroep analyse, persona\'s en user journey maps, User Experience Design: Field research verslagen met gebruikersinterviews en observaties, Eigen Project: Zelfgekozen onderzoeksvraag met literatuurstudie en desk research, Frontend Development 2: Technische analyse van bestaande websites en frameworks' },
          { outcome: 'ontwerpen', description: 'Opdrachtgeversproject: Design rationale document en conceptpresentaties voor externe opdrachtgever, User Experience Design: Lo-fi en hi-fi prototypes met UX-principes en design patterns, Visual Design: Design system componenten met typografie en kleurgebruik, Eigen Project: Autonoom ontwikkeld concept met volledige onderbouwing en ontwerpkeuzes' },
          { outcome: 'prototype', description: 'Opdrachtgeversproject: High-fidelity prototype getest met doelgroep en testrapport, User Experience Design: Clickable prototypes met verschillende fidelity levels, Frontend Development 2: Responsive websites met HTML/CSS en JavaScript interacties, Eigen Project: Zelfgekozen prototype (digitaal of fysiek) met uitgebreide testresultaten, API integraties en werkende features' },
          { outcome: 'verbinden', description: 'Opdrachtgever presentaties met pitch decks en feedback documenten, User Experience Design: Testresultaten communicatie naar stakeholders, Teamsamenwerkingsplan met rolverdeling en planning, Eigen Project: Zelfstandige planning en voortgangsrapportage met tussentijdse evaluaties' },
          { outcome: 'reflecteren', description: 'Portflow: Zelfevaluaties met SMART leerdoelen en competentie ontwikkeling, User Experience Design: Reflectie op iteratief ontwerpen en gebruikerstesten, Eigen Project: Uitgebreide reflectie op zelfstandig werken en probleemoplossend vermogen, Portfolio update met semester 2 projecten en learnings' }
        ];
      case 3:
        return [
          { outcome: 'context', description: 'Opdrachtgeversproject: Strategisch onderzoeksrapport met concurrentieanalyse, marktonderzoek en trends, Visual Design: Merkanalyse met doelgroep segmentatie en brand positioning, Empowering Technology: Technologie exploratie en ethische impactanalyse, Eigen Project: Verdiepend onderzoek met wetenschappelijke bronnen en theoretisch kader (10+ bronnen), Design Thinking en onderzoeksmethoden voor complexere vraagstukken' },
          { outcome: 'ontwerpen', description: 'Opdrachtgeversproject: Concept met business impact onderbouwing en ROI analyse, Visual Design: Visueel identiteitssysteem met merkstrategie, logo ontwerp en brand guidelines, Empowering Technology: Technologie-gedreven concepten met feasibility assessment, Eigen Project: Innovatief en persoonlijk concept met ontwerpvisie, Iteratieve conceptontwikkeling met meervoudige varianten' },
          { outcome: 'prototype', description: 'Opdrachtgeversproject: Professioneel high-fidelity prototype met uitgebreide user testing en validatie, Visual Design: Complete branded producten (website/app mockups, social media templates), Empowering Technology: Werkende technische prototypes of proof-of-concepts, Eigen Project: Volledig uitgewerkt prototype met meerdere iteraties en testresultaten, Design systems en consistent UI components' },
          { outcome: 'verbinden', description: 'Opdrachtgeversproject: Professionele presentaties voor stakeholders met pitch deck en business case, Teamsamenwerkingsplan met agile werkwijze en retrospectives, Feedback sessies met experts en opdrachtgevers, Adviesrapport met strategische aanbevelingen, Eigen Project: Zelfevaluatie en peer feedback documentatie' },
          { outcome: 'reflecteren', description: 'Portflow: Competentie ontwikkeling tracking en specialisatie oriëntatie voor jaar 3, Eigen Project: Kritische zelfreflectie op autonomie en vakmanschap, Reflectie op ethische dilemma\'s en ontwerpkeuzes, Portfolio voorbereiding voor praktijk en minor, Leerdoelen formulering voor praktijksemester' }
        ];
      case 4:
        return [
          { outcome: 'context', description: 'Trendonderzoek: Futures research rapport met scenario mapping en trendanalyse, Marktanalyse voor innovatieve concepten met concurrentie en kansen, Ethische en maatschappelijke impactanalyse met SDG mapping, Strategisch stakeholder onderzoek met interview insights, Design research met theoretische onderbouwing (15+ bronnen)' },
          { outcome: 'ontwerpen', description: 'Strategische visie document en roadmap voor product/dienst met timeline, Business model canvas en value proposition design, Design sprint resultaten met rapid prototyping, Innovatiegedreven concepten met toekomstperspectief en maatschappelijke relevantie, Service design met customer journey en touchpoint analyse, Conceptevaluatie matrix met meervoudige varianten' },
          { outcome: 'prototype', description: 'Strategische prototypes met scenario mapping en use cases, Service design blueprints met front-stage en back-stage processen, Multi-platform product demonstraties (web, mobiel, fysiek), High-fidelity prototypes met geavanceerde interacties, Testplannen en validatie met kwalitatieve en kwantitatieve methoden, Design systems met herbruikbare componenten' },
          { outcome: 'verbinden', description: 'Stakeholder journey mapping en communicatieplan voor verschillende doelgroepen, Multidisciplinaire samenwerking portfolio met teamreflecties, Pitch presentaties voor investors/partners met business case, Professionele netwerk events en gastsprekers documentatie, Projectmanagement documentatie met agile/scrum methodieken, Overdrachtsrapport en design rationale voor opdrachtgever' },
          { outcome: 'reflecteren', description: 'Portfolio voorbereiding voor stage en minor met selectie beste werk, Professionele ontwikkeling en specialisatie keuze motivatie (Brand/Digital/Immersive), Carrière oriëntatie plan met concrete ambities en stappen, Reflectie op 2 jaar CMD met competentie self-assessment, Leerdoelen voor praktijksemester en minor, Professionele identiteit statement met persoonlijke visie' }
        ];
      case 5:
        return [
          { outcome: 'context', description: 'Stage: Onderzoeksrapport organisatiecontext met stakeholder mapping en doelgroepanalyse, Design brief met probleemstelling en ontwerpkaders, Contextanalyse bedrijfsprocessen en design maturity assessment' },
          { outcome: 'ontwerpen', description: 'Stage: Conceptpresentaties met design rationale en onderbouwing, Iteratieve ontwerpschetsen en wireframes, Design system documentatie of style guide voor organisatie' },
          { outcome: 'prototype', description: 'Stage: Werkende prototypes (low-fi tot high-fi) voor reële projecten, Testplannen met usability test resultaten, Iteratieve prototypes met validatierapportages' },
          { outcome: 'verbinden', description: 'Stage: Professionele presentaties voor stakeholders en management, Projectdocumentatie en overdrachtsrapporten, Feedbackverslagen en samenwerkingsreflecties, Netwerk opbouw binnen werkveld' },
          { outcome: 'reflecteren', description: 'Stage evaluatie en competentie assessment met concrete leerdoelen, Reflectieverslag over professionele ontwikkeling en praktijkervaringen, Portfolio update met stageopdrachten en learnings, Voorbereiding specialisatiekeuze jaar 4' }
        ];
      case 6:
        return [
          { outcome: 'context', description: 'Brand Design: Merkstrategie onderzoek met brand audits en positionering analyse, Digital Design: UX research met gebruikerstesten en data analyse, Immersive Design: User needs onderzoek voor VR/AR met spatial design principes, Specialisatie-specifiek literatuuronderzoek met 15+ vakgebied bronnen, Trendanalyse binnen gekozen specialisatie domein' },
          { outcome: 'ontwerpen', description: 'Brand Design: Visuele identiteiten met brand guidelines en merkbeleving, Digital Design: Interactieve ervaringen met UX/UI design en information architecture, Immersive Design: 3D/VR concepten met spatial storytelling en interaction design, Specialisatie conceptdocumentatie met design rationale, Iteratieve ontwerpprocessen met meervoudige varianten en evaluatie' },
          { outcome: 'prototype', description: 'Brand Design: Complete campagnes en merkidentiteiten voor portfolio (print, digital, motion), Digital Design: Werkende apps/websites met responsive design en accessibility, Immersive Design: VR/AR prototypes met Unity/Unreal of 360° experiences, High-fidelity specialisatie producten showcase-ready, Uitgebreide testresultaten en validatie met doelgroep' },
          { outcome: 'verbinden', description: 'Specialisatie netwerk events, gastsprekers en expert feedback sessies, Multidisciplinaire projecten binnen specialisatie met teamwork documentatie, Professionele zichtbaarheid: LinkedIn profiel update en online portfolio, Pitch presentaties voor vakgenoten en professionals, Kennisdeling binnen specialisatie community, Collaborative projects met andere CMD specialisaties' },
          { outcome: 'reflecteren', description: 'Specialisatie portfolio opbouw met best work en case studies, Professionele identiteit ontwikkeling binnen gekozen specialisatie, Afstudeerthema verkenning met onderzoeksvraag formulering, Reflectie op 3 jaar CMD en specialisatie keuze, Carrièreplan binnen specialisatie vakgebied, Leerdoelen voor afstudeerproject met focus en scope' }
        ];
      case 7:
        return [
          { outcome: 'context', description: 'Afstudeeronderzoek met theoretisch kader en uitgebreide literatuurreview (20+ bronnen), Mixed-methods onderzoeksrapport met kwalitatieve en kwantitatieve data, Stakeholder interviews en gebruikersstudies met analyse, Trend en futures research voor innovatie en impact assessment, Ethische reflectie op maatschappelijke consequenties' },
          { outcome: 'ontwerpen', description: 'Innovatief afstudeerproject met aantoonbare maatschappelijke of commerciële relevantie, Design visie document met strategische positionering en toekomstperspectief, Conceptdocumentatie met meervoudige ontwerpvarianten en evaluatie, Uitgewerkt eindontwerp met complete design rationale, Proces documentatie met iteraties en ontwerpbeslissingen' },
          { outcome: 'prototype', description: 'Professioneel eindproduct: brand identity, digital product, of immersive experience op portfolio niveau, High-fidelity prototypes gevalideerd door uitgebreide gebruikerstesten, Testplannen en testresultaten met iteratieve verbeteringen, Technische documentatie en implementatie specificaties, Showcase-ready presentatie voor publieke verdediging' },
          { outcome: 'verbinden', description: 'Afstudeerpresentatie en verdediging voor examencommissie en vakgenoten, Stakeholder management documentatie met communicatieplan, Professionele presentaties en pitch voor externe opdrachtgever of jury, Portfolio website met geïntegreerde case study, LinkedIn profiel update en netwerk voor carrièrestart' },
          { outcome: 'reflecteren', description: 'Afstudeerverslag (thesis) met methodologische verantwoording en wetenschappelijke onderbouwing, Kritische reflectie op 4 jaar CMD en bereikte competenties per leeruitkomst, Professionele identiteit statement met persoonlijke visie op het vakgebied, Ethische reflectie op ontwerp impact en maatschappelijke verantwoordelijkheid, Carrièreplan met concrete toekomstvisie en professionele ambities' }
        ];
      default:
        return undefined;
    }
  })()
}));
