// Speelvelden mapping voor filtering
export type Speelveld = 
  | 'Design'
  | 'Technologie & AI'
  | 'Mens & Ervaring'
  | 'Maatschappij & Toekomst'
  | 'Organisatie & Strategie'
  | 'Onderzoekend Vermogen';

export const speelvelden: Speelveld[] = [
  'Design',
  'Technologie & AI',
  'Mens & Ervaring',
  'Maatschappij & Toekomst',
  'Organisatie & Strategie',
  'Onderzoekend Vermogen'
];

// Speelveld globale beschrijvingen
export const speelveldDescriptions: Record<Speelveld, string> = {
  'Design': 'CMD\'ers brengen de huidige en gewenste situatie in kaart en benaderen het ontwerpprobleem vanuit verschillende perspectieven. Ze verkennen oplossingen, passen creatieve methoden toe om ideeën te genereren en te wegen, en werken prototypes uit van low-fidelity tot high-fidelity.',
  
  'Technologie & AI': 'CMD\'ers analyseren mogelijkheden van relevante technologieën en experimenteren met verschillende digitale technieken als onderdeel van de ontwerpoplossing. Ze maken prototypes om de context te begrijpen en keuzes te maken.',
  
  'Mens & Ervaring': 'CMD\'ers brengen gebruikers, hun wensen en de gebruikscontext in kaart. Ze betrekken gebruikers en belanghebbenden actief bij het ontwerpproces en toetsen de gebruiksvriendelijkheid en kwaliteit van de gebruikerservaring.',
  
  'Maatschappij & Toekomst': 'CMD\'ers zijn betrokken bij wat er speelt in de samenleving en houden rekening met de maatschappelijke impact van hun ontwerpen. Ze verkennen gevoeligheden, dilemma\'s en kwesties met behulp van scenario\'s en prototypen.',
  
  'Organisatie & Strategie': 'CMD\'ers stellen zich op de hoogte van nieuwe ontwikkelingen in de markt en organisatie. Ze identificeren belangen van verschillende stakeholders en brengen spanningsvelden in kaart.',
  
  'Onderzoekend Vermogen': 'CMD\'ers leven zich in in het probleem van de opdrachtgever en zoeken naar de vraag achter de vraag. Ze brengen het communicatieprobleem systematisch in kaart en passen evaluatiemethoden en technieken toe.'
};

// Type voor speelveld bullet met optionele activiteit
export type SpeelveldBullet = {
  text: string;
  activity?: string; // Optioneel: naam van onderwijsactiviteit
};

// Type voor speelveld competenties per leeruitkomst
export type SpeelveldOutcomeData = {
  kennis: SpeelveldBullet[];
  vaardigheden: SpeelveldBullet[];
};

// Speelveld bullets per leeruitkomst per semester (met opbouw)
// DEPRECATED: gebruik speelveldCompetencies voor nieuwe structuur
export const speelveldBullets: Record<Speelveld, Record<number, {
  context: SpeelveldBullet[];
  ontwerpen: SpeelveldBullet[];
  prototype: SpeelveldBullet[];
  verbinden: SpeelveldBullet[];
  reflecteren: SpeelveldBullet[];
}>> = {
  'Design': {
    1: {
      context: [
        { text: 'Verkent ontwerpcontext en doelgroep met begeleiding', activity: 'Visual Design' },
        { text: 'Verzamelt visuele inspiratie en referenties', activity: 'Visual Design' },
        { text: 'Observeert designvoorbeelden in dagelijks leven', activity: 'Basecamp' },
        { text: 'Maakt eerste moodboards', activity: 'Visual Design' }
      ],
      ontwerpen: [
        { text: 'Genereert eerste ideeën en schetsen', activity: 'Visual Design' },
        { text: 'Experimenteert met basis ontwerpprincipes', activity: 'Visual Design' },
        { text: 'Past typografie, kleur en compositie toe', activity: 'Visual Design' },
        { text: 'Werkt analoog en digitaal aan concepten', activity: 'Social Design' }
      ],
      prototype: [
        { text: 'Maakt eenvoudige low-fi prototypes (schetsen, wireframes)', activity: 'Interaction Design' },
        { text: 'Communiceert basisontwerp aan medestudenten', activity: 'Basecamp' },
        { text: 'Maakt visuele prototypes in Adobe tools', activity: 'Visual Design' },
        { text: 'Experimenteert met verschillende fidelity niveaus', activity: 'Interaction Design' }
      ],
      verbinden: [
        { text: 'Presenteert ontwerpoplossingen aan groep', activity: 'Workshopweek' },
        { text: 'Ontvangt en verwerkt feedback van peers', activity: 'Visual Design' },
        { text: 'Deelt werk tijdens tussentijdse presentaties', activity: 'Social Design' },
        { text: 'Exposeert eindwerk', activity: 'Visual Design' }
      ],
      reflecteren: [
        { text: 'Reflecteert op eigen ontwerpproces met begeleiding', activity: 'Basecamp' },
        { text: 'Documenteert ontwerpkeuzes in Portflow', activity: 'Visual Design' },
        { text: 'Reflecteert op aesthetische keuzes', activity: 'Visual Design' }
      ]
    },
    2: {
      context: [
        { text: 'Analyseert ontwerpcontext en vraagstuk systematischer', activity: 'Opdrachtgeversproject 1' },
        { text: 'Formuleert eerste ontwerpcriteria', activity: 'Opdrachtgeversproject 1' },
        { text: 'Verkent ontwerptrends en best practices', activity: 'Opdrachtgeversproject 2' },
        { text: 'Analyseert designvoorbeelden kritisch', activity: 'Eigen Project' }
      ],
      ontwerpen: [
        { text: 'Verkent meerdere ontwerprichtingen', activity: 'Opdrachtgeversproject 1' },
        { text: 'Maakt onderbouwde keuzes met design principes', activity: 'Opdrachtgeversproject 1' },
        { text: 'Gebruikt brainstorm- en conceptmethodieken', activity: 'Opdrachtgeversproject 2' },
        { text: 'Werkt met guiding principles', activity: 'Opdrachtgeversproject 2' },
        { text: 'Ontwikkelt eigen visuele identiteit', activity: 'Eigen Project' }
      ],
      prototype: [
        { text: 'Maakt mid-fi prototypes (visueel, interactief)', activity: 'Opdrachtgeversproject 1' },
        { text: 'Test prototypes met doelgroep', activity: 'Opdrachtgeversproject 1' },
        { text: 'Verwerkt feedback in vervolgversie', activity: 'Opdrachtgeversproject 2' },
        { text: 'Gebruikt verschillende fidelity levels strategisch', activity: 'Eigen Project' }
      ],
      verbinden: [
        { text: 'Communiceert ontwerpkeuzes helder aan opdrachtgever', activity: 'Opdrachtgeversproject 1' },
        { text: 'Faciliteert feedback sessies', activity: 'Opdrachtgeversproject 2' },
        { text: 'Presenteert ontwerp professioneel', activity: 'Opdrachtgeversproject 1' },
        { text: 'Exposeert eigen werk', activity: 'Eigen Project' }
      ],
      reflecteren: [
        { text: 'Reflecteert op ontwerpvisie en kwaliteit van keuzes', activity: 'Opdrachtgeversproject 1' },
        { text: 'Evalueert ontwerpproces kritisch', activity: 'Eigen Project' },
        { text: 'Documenteert leerproces in Portflow', activity: 'Opdrachtgeversproject 2' }
      ]
    },
    3: {
      context: {
        kennis: [
          { text: 'Context van ontwerpers (Wim Crouwel, Martin Lorentz)', activity: 'Visual Design' },
          { text: 'Design Thinking en onderzoeksmethoden voor complexere vraagstukken', activity: 'Opdrachtgeversproject' },
          { text: 'Ontwerpvisies en -filosofieën van gerenommeerde ontwerpers', activity: 'Visual Design' },
          { text: 'Culturele en ethische context van design', activity: 'Visual Design' },
          { text: 'Narratieve structuren en storytellingtheorieën', activity: 'Storytelling' }
        ],
        vaardigheden: [
          { text: 'Past designonderzoek toe voor dieper inzicht in complexe vraagstukken', activity: 'Opdrachtgeversproject' },
          { text: 'Analyseert ontwerpers via deskresearch en visuele analyse', activity: 'Visual Design' },
          { text: 'Interpreteert ontwerpfilosofie en vertaalt naar eigen visie', activity: 'Visual Design' },
          { text: 'Onderzoekt doelgroep en hun verhaalvoorkeuren', activity: 'Storytelling' },
          { text: 'Formuleert onderbouwde onderzoeks- en ontwerpvragen', activity: 'Opdrachtgeversproject' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Grids, compositie, hiërarchie, kleurgebruik en typografie', activity: 'Visual Design' },
          { text: 'Iteratieve ontwerpprocessen binnen Design Thinking', activity: 'Opdrachtgeversproject' },
          { text: 'Vormtaal en visuele consistentie', activity: 'Visual Design' },
          { text: 'Ontwerpprincipes voor narratieve structuren', activity: 'Storytelling' },
          { text: 'Conceptontwikkeling en ethische afwegingen', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Genereert concepten vanuit verschillende perspectieven en onderzoek', activity: 'Opdrachtgeversproject' },
          { text: 'Ontwikkelt visuele identiteit voor complexere projecten', activity: 'Visual Design' },
          { text: 'Experimenteert met compositie, typografie en beeld', activity: 'Visual Design' },
          { text: 'Creëert verhaalconcepten met begin, midden en einde', activity: 'Storytelling' },
          { text: 'Onderbouwt ontwerpkeuzes met theorie en strategie', activity: 'Opdrachtgeversproject' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Presentatievormen en materiaalkeuze voor visuele prototypes', activity: 'Visual Design' },
          { text: 'Evaluatiecriteria voor gebruikservaring en effectiviteit', activity: 'Opdrachtgeversproject' },
          { text: 'Productietechnieken voor verschillende storytelling media', activity: 'Storytelling' },
          { text: 'Ethische aspecten bij testen: transparantie, privacy', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Maakt high-fi prototypes met aandacht voor detail en consistentie', activity: 'Visual Design' },
          { text: 'Test iteratief en verbetert systematisch op basis van feedback', activity: 'Opdrachtgeversproject' },
          { text: 'Produceert storytelling prototypes (animatic, trailer)', activity: 'Storytelling' },
          { text: 'Presenteert en onderbouwt resultaten richting opdrachtgever', activity: 'Opdrachtgeversproject' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Presentatietechnieken voor visueel werk', activity: 'Visual Design' },
          { text: 'Professionele communicatie met opdrachtgevers', activity: 'Opdrachtgeversproject' },
          { text: 'Stakeholder management en verwachtingsmanagement', activity: 'Opdrachtgeversproject' },
          { text: 'Communicatie van creatieve keuzes', activity: 'Storytelling' }
        ],
        vaardigheden: [
          { text: 'Faciliteert co-creatie sessies en werkgroepen', activity: 'Opdrachtgeversproject' },
          { text: 'Presenteert ontwerpkeuzes professioneel met onderbouwing', activity: 'Visual Design' },
          { text: 'Communiceert met externe opdrachtgevers en stakeholders', activity: 'Opdrachtgeversproject' },
          { text: 'Brengt verschillende perspectieven samen in samenwerking', activity: 'Opdrachtgeversproject' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Zelfevaluatie van visueel werk', activity: 'Visual Design' },
          { text: 'Projectevaluatie en procesevaluatie', activity: 'Opdrachtgeversproject' },
          { text: 'Reflectie op creatieve keuzes', activity: 'Storytelling' },
          { text: 'Ontwerpkritiek en reflectie op vormgeving', activity: 'Visual Design' }
        ],
        vaardigheden: [
          { text: 'Ontwikkelt bewustwording van eigen ontwerpidentiteit', activity: 'Visual Design' },
          { text: 'Reflecteert op samenwerking met opdrachtgever en team', activity: 'Opdrachtgeversproject' },
          { text: 'Evalueert ontwerpproces en projectaanpak kritisch', activity: 'Opdrachtgeversproject' },
          { text: 'Koppelt ervaring aan persoonlijke ontwikkeldoelen', activity: 'Opdrachtgeversproject' }
        ]
      }
    },
    4: {
      context: ['Analyseert complexe ontwerpcontexten zelfstandig', 'Positioneert ontwerp binnen design filosofie'],
      ontwerpen: ['Ontwikkelt originele concepten met sterke visie', 'Zoekt naar innovatie en impact in oplossingen'],
      prototype: ['Realiseert high-fi prototypes (visueel, interactief, audiovisueel)', 'Communiceert ontwerpvisie overtuigend via prototypes'],
      verbinden: ['Leidt ontwerpgesprekken met stakeholders', 'Navigeert tussen verschillende belangen'],
      reflecteren: ['Reflecteert kritisch op ontwerpfilosofie en richting']
    },
    5: {
      context: ['Herkent en benut kansen in complexe contexts', 'Definieert eigen ontwerpuitgangspunten'],
      ontwerpen: ['Ontwikkelt onderscheidende ontwerpoplossingen', 'Balanceert creativiteit met haalbaarheid autonoom'],
      prototype: ['Produceert professionele prototypes voor diverse media', 'Valideert oplossingen met stakeholders'],
      verbinden: ['Adviseert stakeholders over ontwerpstrategie', 'Bouwt draagvlak voor ontwerpvisie'],
      reflecteren: ['Evalueert eigen ontwerpstandpunt kritisch', 'Blijft ontwerpvisie doorontwikkelen']
    },
    6: {
      context: ['Analyseert strategische ontwerpvraagstukken', 'Vertaalt maatschappelijke trends naar ontwerpkansen'],
      ontwerpen: ['Leidt ontwerpprocessen en conceptontwikkeling', 'Innoveert met nieuwe ontwerpmethodieken'],
      prototype: ['Realiseert complexe multimodale prototypes', 'Gebruikt prototyping als strategisch middel'],
      verbinden: ['Coördineert multidisciplinaire ontwerpteams', 'Overtuigt beslissers van ontwerpwaarde'],
      reflecteren: ['Reflecteert op ontwerpimpact en maatschappelijke rol', 'Draagt bij aan design discourse']
    },
    7: {
      context: ['Definieert ontwerpruimte en strategische richting', 'Positioneert ontwerp als driver voor verandering'],
      ontwerpen: ['Initieert en leidt innovatieve ontwerpprojecten', 'Ontwikkelt eigen ontwerpvisie en methodiek'],
      prototype: ['Realiseert impactvolle prototypes op strategisch niveau', 'Toont thought leadership via ontwerpwerk'],
      verbinden: ['Beïnvloedt organisatiecultuur en ontwerpdenken', 'Inspireert en begeleidt anderen in ontwerpproces'],
      reflecteren: ['Reflecteert op ontwerpethiek en verantwoordelijkheid', 'Vormt eigen positie binnen design field']
    }
  },
  
  'Technologie & AI': {
    1: {
      context: [
        { text: 'Verkent digitale tools en basis technologie', activity: 'Interaction Design' },
        { text: 'Maakt kennis met HTML/CSS basis', activity: 'Interaction Design' }
      ],
      ontwerpen: [
        { text: 'Experimenteert met basis interacties', activity: 'Interaction Design' },
        { text: 'Werkt met Figma voor interface design', activity: 'Interaction Design' }
      ],
      prototype: [
        { text: 'Bouwt eenvoudige digitale prototypes (HTML/CSS)', activity: 'Interaction Design' },
        { text: 'Maakt clickable prototypes in Figma', activity: 'Interaction Design' }
      ],
      verbinden: [
        { text: 'Communiceert over technische keuzes in eigen woorden', activity: 'Interaction Design' }
      ],
      reflecteren: [
        { text: 'Reflecteert op eigen technische vaardigheden', activity: 'Interaction Design' }
      ]
    },
    2: {
      context: [
        { text: 'Analyseert technische mogelijkheden en beperkingen', activity: 'Opdrachtgeversproject 1' },
        { text: 'Begrijpt impact van technische keuzes op ontwerp', activity: 'Opdrachtgeversproject 1' }
      ],
      ontwerpen: [
        { text: 'Integreert technologie bewust in conceptontwikkeling', activity: 'Opdrachtgeversproject 1' },
        { text: 'Maakt technische haalbaarheidsanalyses', activity: 'Eigen Project' }
      ],
      prototype: [
        { text: 'Bouwt interactieve prototypes (web, apps)', activity: 'Opdrachtgeversproject 1' },
        { text: 'Test usability en performance', activity: 'Opdrachtgeversproject 1' }
      ],
      verbinden: [
        { text: 'Legt technische concepten uit aan niet-technische stakeholders', activity: 'Opdrachtgeversproject 1' }
      ],
      reflecteren: [
        { text: 'Reflecteert op technologie gebruik en ethische aspecten', activity: 'Opdrachtgeversproject 2' }
      ]
    },
    3: {
      context: {
        kennis: [
          { text: 'Basisprincipes van spelontwerp en spelmechanismen', activity: 'Game hackathon' },
          { text: 'Verschillende spelmechanismen en hun invloed op spelersgedrag', activity: 'Game hackathon' },
          { text: 'Werking van prototyping technieken voor games', activity: 'Game hackathon' },
          { text: 'Technische haalbaarheid van ontwerpoplossingen', activity: 'Eigen project' }
        ],
        vaardigheden: [
          { text: 'Analyseert bestaande spellen op mechaniek en interactie', activity: 'Game hackathon' },
          { text: 'Analyseert technische trends en innovaties in gamedesign', activity: 'Game hackathon' },
          { text: 'Begrijpt data en algoritmes in spelcontext', activity: 'Game hackathon' },
          { text: 'Verkent technische mogelijkheden voor eigen projecten', activity: 'Eigen project' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Ontwerpprincipes voor spelmechaniek en interactie', activity: 'Game hackathon' },
          { text: 'Spelregels, visuals en storytelling in games', activity: 'Game hackathon' },
          { text: 'Computationele benaderingen in ontwerp', activity: 'Game hackathon' }
        ],
        vaardigheden: [
          { text: 'Experimenteert met spelregels en interactiemechanismen', activity: 'Game hackathon' },
          { text: 'Gebruikt computationele benaderingen in game ontwerp', activity: 'Game hackathon' },
          { text: 'Zoekt naar innovatieve technische speloplossingen', activity: 'Game hackathon' },
          { text: 'Snel itereren: vertaalt ideeën naar low-fi prototypes', activity: 'Game hackathon' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Werking en waarde van prototyping en playtesting', activity: 'Game hackathon' },
          { text: 'Testmethoden voor spelmechanismes', activity: 'Game hackathon' },
          { text: 'Verschillende fidelity niveaus voor game prototypes', activity: 'Game hackathon' }
        ],
        vaardigheden: [
          { text: 'Maakt speelbare prototypes (low-fi tot high-fi)', activity: 'Game hackathon' },
          { text: 'Test spelconcepten binnen en buiten het team', activity: 'Game hackathon' },
          { text: 'Bouwt data-driven prototypes', activity: 'Game hackathon' },
          { text: 'Verbetert spelmechanismes op basis van testresultaten', activity: 'Game hackathon' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Communicatie- en presentatietechnieken voor technische concepten', activity: 'Game hackathon' },
          { text: 'Samenwerking in multidisciplinaire game teams', activity: 'Game hackathon' }
        ],
        vaardigheden: [
          { text: 'Overbrugt taal tussen design en technologie teams', activity: 'Game hackathon' },
          { text: 'Presenteert spelconcepten technisch en visueel', activity: 'Game hackathon' },
          { text: 'Communiceert ontwerpkeuzes naar verschillende doelgroepen', activity: 'Game hackathon' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Reflectiemethoden voor technische projecten', activity: 'Game hackathon' },
          { text: 'Ethiek in game design (bias, accessibility)', activity: 'Game hackathon' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op technische ontwerpkeuzes', activity: 'Game hackathon' },
          { text: 'Reflecteert op ethiek (toegankelijkheid, inclusie in games)', activity: 'Game hackathon' },
          { text: 'Evalueert eigen bijdrage aan technisch teamproject', activity: 'Game hackathon' }
        ]
      }
    },
    4: {
      context: ['Evalueert emerging technologies kritisch', 'Voorspelt technologische impact'],
      ontwerpen: ['Innoveert met nieuwe technische mogelijkheden', 'Balanceert innovatie met haalbaarheid'],
      prototype: ['Ontwikkelt complexe technische prototypes', 'Experimenteert met AI en geavanceerde tech'],
      verbinden: ['Adviseert teams over technische strategie'],
      reflecteren: ['Ontwikkelt visie op tech en maatschappij']
    },
    5: {
      context: ['Beheerst technische landschap autonoom', 'Herkent technologische kansen en risico\'s'],
      ontwerpen: ['Ontwikkelt technisch haalbare en innovatieve oplossingen'],
      prototype: ['Bouwt schaalbare en robuuste prototypes', 'Valideert technische architectuur'],
      verbinden: ['Coördineert tussen technische en niet-technische teams'],
      reflecteren: ['Reflecteert op lange-termijn impact van tech keuzes']
    },
    6: {
      context: ['Analyseert complexe technische ecosystemen', 'Positioneert technologie als strategisch middel'],
      ontwerpen: ['Ontwerpt technology-enabled oplossingen op strategisch niveau'],
      prototype: ['Realiseert geavanceerde technische prototypes', 'Integreert AI en data verantwoord'],
      verbinden: ['Leidt technische besluitvorming in projecten'],
      reflecteren: ['Ontwikkelt visie op responsible AI']
    },
    7: {
      context: ['Definieert technologische richting en strategie', 'Anticipeert op toekomstige ontwikkelingen'],
      ontwerpen: ['Initieert innovatieve technology-driven projecten'],
      prototype: ['Ontwikkelt proof-of-concepts voor nieuwe technologie', 'Toont technisch thought leadership'],
      verbinden: ['Beïnvloedt organisatie breed technologiebeleid'],
      reflecteren: ['Reflecteert op ethische verantwoordelijkheid tech professionals']
    }
  },
  
  'Mens & Ervaring': {
    1: {
      context: [
        { text: 'Observeert gebruikers en hun gedrag met begeleiding', activity: 'Interaction Design' },
        { text: 'Herkent basis gebruikersbehoeften', activity: 'Interaction Design' },
        { text: 'Voert eerste interviews uit', activity: 'Social Design' },
        { text: 'Maakt empathy maps', activity: 'Social Design' },
        { text: 'Past design probes toe', activity: 'Social Design' }
      ],
      ontwerpen: [
        { text: 'Ontwerpt met aandacht voor gebruiksvriendelijkheid', activity: 'Interaction Design' },
        { text: 'Past basis UX principes toe', activity: 'Interaction Design' },
        { text: 'Werkt met persona\'s', activity: 'Interaction Design' },
        { text: 'Gebruikt UI design patterns', activity: 'Interaction Design' },
        { text: 'Ontwerpt vanuit empathie', activity: 'Social Design' }
      ],
      prototype: [
        { text: 'Test prototypes met medestudenten', activity: 'Interaction Design' },
        { text: 'Observeert hoe mensen prototype gebruiken', activity: 'Interaction Design' },
        { text: 'Voert usability tests uit', activity: 'Interaction Design' },
        { text: 'Test met doelgroep', activity: 'Social Design' }
      ],
      verbinden: [
        { text: 'Luistert naar gebruikers feedback', activity: 'Interaction Design' },
        { text: 'Stelt simpele vragen aan gebruikers', activity: 'Social Design' },
        { text: 'Faciliteert eenvoudige gebruikerstests', activity: 'Interaction Design' },
        { text: 'Past interviewtechnieken toe', activity: 'Social Design' }
      ],
      reflecteren: [
        { text: 'Reflecteert op eigen aannames over gebruikers', activity: 'Interaction Design' },
        { text: 'Ontwikkelt empathisch vermogen', activity: 'Social Design' }
      ]
    },
    2: {
      context: [
        { text: 'Past basis UX-onderzoek toe (interviews, observatie)', activity: 'Opdrachtgeversproject 1' },
        { text: 'Begrijpt motivatie en context van gebruik', activity: 'Opdrachtgeversproject 1' },
        { text: 'Maakt eenvoudige persona\'s en journey maps', activity: 'Opdrachtgeversproject 1' },
        { text: 'Voert stakeholderanalyse uit', activity: 'Opdrachtgeversproject 1' },
        { text: 'Achtert vraag achter de vraag', activity: 'Opdrachtgeversproject 1' }
      ],
      ontwerpen: [
        { text: 'Ontwerpt vanuit empathie en gebruikersinzichten', activity: 'Opdrachtgeversproject 1' },
        { text: 'Integreert human-centered design principes', activity: 'Opdrachtgeversproject 2' },
        { text: 'Gebruikt Design Thinking methodiek', activity: 'Eigen Project' },
        { text: 'Maakt gebruikersbehoeften leidend', activity: 'Opdrachtgeversproject 1' }
      ],
      prototype: [
        { text: 'Test usability en toegankelijkheid', activity: 'Opdrachtgeversproject 1' },
        { text: 'Observeert en analyseert gebruikersgedrag', activity: 'Opdrachtgeversproject 1' },
        { text: 'Verwerkt inzichten in nieuwe versie', activity: 'Opdrachtgeversproject 2' },
        { text: 'Gebruikt Mom Test methodiek', activity: 'Opdrachtgeversproject 2' }
      ],
      verbinden: [
        { text: 'Faciliteert gebruikerstests en interviews', activity: 'Opdrachtgeversproject 1' },
        { text: 'Communiceert empathisch met gebruikers', activity: 'Opdrachtgeversproject 1' },
        { text: 'Vertaalt gebruikersinzichten naar team', activity: 'Opdrachtgeversproject 2' }
      ],
      reflecteren: [
        { text: 'Toetst eigen vooroordelen kritisch', activity: 'Opdrachtgeversproject 2' },
        { text: 'Reflecteert op empathisch vermogen', activity: 'Eigen Project' }
      ]
    },
    3: {
      context: {
        kennis: [
          { text: 'Gedragstheorieën en beïnvloedingsmodellen (Kahneman, Fogg, Cialdini)', activity: 'Persuasive Communication' },
          { text: 'De CASI-methode en gedragslenzen', activity: 'Persuasive Communication' },
          { text: 'Verschillende spelmechanismen en spelersgedrag', activity: 'Game hackathon' },
          { text: 'Narratieve structuren en emotionele impact van verhalen', activity: 'Storytelling' },
          { text: 'Ethische kaders rondom gedragsbeïnvloeding', activity: 'Persuasive Communication' }
        ],
        vaardigheden: [
          { text: 'Past gevorderde UX-methoden en gedragsanalyse toe', activity: 'Persuasive Communication' },
          { text: 'Analyseert gedragspsychologie en motivatie dieper', activity: 'Persuasive Communication' },
          { text: 'Analyseert spelersgedrag en emotionele triggers', activity: 'Game hackathon' },
          { text: 'Onderzoekt doelgroep en hun verhaalvoorkeuren', activity: 'Storytelling' },
          { text: 'Verkent inclusie en toegankelijkheid in ervaring', activity: 'Persuasive Communication' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Toepassing van gedragslenzen in ontwerpprocessen', activity: 'Persuasive Communication' },
          { text: 'Strategische inzet van beïnvloedingsmechanismen', activity: 'Persuasive Communication' },
          { text: 'Ontwerpprincipes voor spelerervaring', activity: 'Game hackathon' },
          { text: 'Karakterontwikkeling, plot building en dramatische spanning', activity: 'Storytelling' }
        ],
        vaardigheden: [
          { text: 'Ontwerpt voor betekenisvolle ervaringen en emoties', activity: 'Persuasive Communication' },
          { text: 'Ontwikkelt concepten die gedrag bewust beïnvloeden', activity: 'Persuasive Communication' },
          { text: 'Ontwerpt spelconcepten met aandacht voor beleving', activity: 'Game hackathon' },
          { text: 'Creëert emotionele verhalen en karakters', activity: 'Storytelling' },
          { text: 'Zoekt originaliteit in user experience', activity: 'Persuasive Communication' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Prototyping- en testmethoden voor gedragsinterventies', activity: 'Persuasive Communication' },
          { text: 'Evaluatiecriteria voor geloofwaardigheid en ethiek', activity: 'Persuasive Communication' },
          { text: 'Playtesting methodieken', activity: 'Game hackathon' },
          { text: 'Testmethoden voor verhaalimpact', activity: 'Storytelling' }
        ],
        vaardigheden: [
          { text: 'Test gedragseffecten en emotionele impact', activity: 'Persuasive Communication' },
          { text: 'Test spelconcepten op flow, spanning en frustratie', activity: 'Game hackathon' },
          { text: 'Test verhalen op doelgroep voor emotionele resonantie', activity: 'Storytelling' },
          { text: 'Valideert ethische aspecten van gedragssturing', activity: 'Persuasive Communication' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Communicatie van ethische overwegingen bij gedragsbeïnvloeding', activity: 'Persuasive Communication' },
          { text: 'Presenteren van gedragsstrategieën aan experts', activity: 'Persuasive Communication' },
          { text: 'Communicatie in creatieve productieprocessen', activity: 'Storytelling' }
        ],
        vaardigheden: [
          { text: 'Faciliteert co-design sessies met gebruikers', activity: 'Persuasive Communication' },
          { text: 'Brengt diverse gebruikersgroepen en perspectieven in', activity: 'Persuasive Communication' },
          { text: 'Communiceert over ethische dilemma\'s in persuasief ontwerp', activity: 'Persuasive Communication' },
          { text: 'Presenteert narratieve content overtuigend', activity: 'Storytelling' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Ethische reflectie op gedragsbeïnvloeding', activity: 'Persuasive Communication' },
          { text: 'Impact assessment van persuasieve strategieën', activity: 'Persuasive Communication' },
          { text: 'Zelfevaluatie van narratieve kwaliteit', activity: 'Storytelling' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op inclusie en eigen interpretatiekaders', activity: 'Persuasive Communication' },
          { text: 'Evalueert maatschappelijke impact van beïnvloedingsstrategieën', activity: 'Persuasive Communication' },
          { text: 'Reflecteert op emotionele impact van eigen narratief werk', activity: 'Storytelling' },
          { text: 'Analyseert eigen rol als persuasieve designer', activity: 'Persuasive Communication' }
        ]
      }
    },
    4: {
      context: ['Analyseert complexe gebruikerscontexten', 'Begrijpt intersectionaliteit en diversiteit diepgaand'],
      ontwerpen: ['Ontwerpt voor diverse en inclusieve ervaringen', 'Balanceert verschillende gebruikersbehoeften'],
      prototype: ['Valideert toegankelijkheid volgens standaarden', 'Test met diverse gebruikersgroepen'],
      verbinden: ['Advocateert voor gebruikersbelangen', 'Vertaalt gebruikersinzichten naar business beslissingen'],
      reflecteren: ['Reflecteert op ethiek van persuasive design', 'Ontwikkelt visie op verantwoord ontwerpen']
    },
    5: {
      context: ['Voert strategisch gebruikersonderzoek uit', 'Analyseert trends in menselijk gedrag en technologie'],
      ontwerpen: ['Ontwerpt voor complexe gebruikersecosystemen', 'Innoveert in user experience'],
      prototype: ['Valideert experience design met rigoureuze methoden', 'Meet lange-termijn impact op gebruikers'],
      verbinden: ['Bouwt gebruikerscommunities', 'Coördineert tussen gebruikers en organisatie'],
      reflecteren: ['Evalueert impact van ontwerp op welzijn gebruikers', 'Neemt standpunt in UX ethiek']
    },
    6: {
      context: ['Definieert gebruikersonderzoek strategie', 'Positioneert gebruikersinzichten als strategisch asset'],
      ontwerpen: ['Leidt human-centered innovation trajecten', 'Ontwikkelt nieuwe UX methodieken'],
      prototype: ['Valideert ervaringen in complexe contexten', 'Gebruikt experience prototyping strategisch'],
      verbinden: ['Transformeert organisaties naar user-centric cultuur', 'Beïnvloedt product strategie met gebruikersinzichten'],
      reflecteren: ['Reflecteert op rol van designer in gebruikerswelzijn', 'Draagt bij aan UX thought leadership']
    },
    7: {
      context: ['Anticipeert op toekomstige gebruikersbehoeften', 'Definieert visie op mens-technologie relatie'],
      ontwerpen: ['Initieert projecten die menselijke ervaring centraal stellen', 'Ontwikkelt nieuwe paradigma\'s voor user experience'],
      prototype: ['Valideert visionaire experience concepten', 'Toont thought leadership in UX'],
      verbinden: ['Beïnvloedt industrie standaarden voor UX en accessibility', 'Inspireert organisaties in human-centered transformation'],
      reflecteren: ['Reflecteert op maatschappelijke impact van experience design', 'Vormt ethisch standpunt als UX professional']
    }
  },
  
  'Maatschappij & Toekomst': {
    1: {
      context: [
        { text: 'Herkent basis maatschappelijke thema\'s in ontwerp', activity: 'Social Design' },
        { text: 'Verkent actuele maatschappelijke vraagstukken', activity: 'Social Design' }
      ],
      ontwerpen: [
        { text: 'Ontwerpt met bewustzijn van sociale impact', activity: 'Social Design' },
        { text: 'Overweegt inclusie in ontwerpkeuzes', activity: 'Visual Design' }
      ],
      prototype: [
        { text: 'Test oplossingen met aandacht voor toegankelijkheid', activity: 'Social Design' },
        { text: 'Observeert sociale effecten', activity: 'Social Design' }
      ],
      verbinden: [
        { text: 'Luistert naar verschillende perspectieven', activity: 'Basecamp' },
        { text: 'Respecteert diversiteit in teamverband', activity: 'Social Design' }
      ],
      reflecteren: [
        { text: 'Reflecteert op eigen waarden en normen', activity: 'Social Design' }
      ]
    },
    2: {
      context: ['Analyseert maatschappelijke trends en ontwikkelingen', 'Verdiept zich in sociale en ecologische vraagstukken', 'Begrijpt stakeholder belangen'],
      ontwerpen: ['Ontwerpt met oog voor inclusie en duurzaamheid', 'Weegt verschillende waarden mee in ontwerp'],
      prototype: ['Test oplossingen op ongewenste effecten', 'Gebruikt scenario\'s voor impact analyse'],
      verbinden: ['Faciliteert gesprekken over waarden', 'Werkt samen met diverse groepen'],
      reflecteren: ['Reflecteert op eigen rol als ontwerper in samenleving']
    },
    3: {
      context: ['Analyseert systeemverbanden en lange-termijn effecten', 'Verkent toekomstscenario\'s', 'Begrijpt economische, sociale en ecologische intersecties'],
      ontwerpen: ['Ontwerpt voor duurzame en rechtvaardige toekomst', 'Creëert designs met maatschappelijke waarde'],
      prototype: ['Evalueert lange-termijn impact', 'Gebruikt system mapping en impact modellen'],
      verbinden: ['Maakt complexe maatschappelijke context begrijpelijk', 'Werkt met gemeenschappen en organisaties'],
      reflecteren: ['Ontwikkelt visie op verantwoordelijkheid en impact']
    },
    4: {
      context: ['Analyseert wicked problems en complexe systemen', 'Positioneert ontwerp binnen bredere maatschappelijke context'],
      ontwerpen: ['Ontwerpt voor transformatieve sociale verandering', 'Balanceert economische, sociale en ecologische belangen'],
      prototype: ['Valideert systemische impact van interventies', 'Test met diverse stakeholder groepen'],
      verbinden: ['Faciliteert multi-stakeholder dialogen', 'Navigeert tussen conflicterende belangen'],
      reflecteren: ['Reflecteert op macht en privilege in ontwerpproces', 'Ontwikkelt ethisch kompas als designer']
    },
    5: {
      context: ['Voert futures research uit', 'Analyseert megatrends en hun impact op ontwerp'],
      ontwerpen: ['Ontwerpt voor preferred futures', 'Innoveert met circular en regenerative design'],
      prototype: ['Valideert toekomstscenario\'s', 'Meet maatschappelijke en ecologische impact'],
      verbinden: ['Bouwt coalities voor maatschappelijke verandering', 'Communiceert complexe systemische kwesties'],
      reflecteren: ['Neemt standpunt in sustainability en social justice', 'Evalueert eigen impact als change agent']
    },
    6: {
      context: ['Definieert maatschappelijke design challenges', 'Positioneert ontwerp als katalysator voor transitie'],
      ontwerpen: ['Leidt social innovation trajecten', 'Ontwikkelt nieuwe methodieken voor systemic design'],
      prototype: ['Valideert transitie pathways', 'Gebruikt prototyping voor systems change'],
      verbinden: ['Beïnvloedt beleidsmakers en organisaties', 'Faciliteert societal transformations'],
      reflecteren: ['Reflecteert op rol van design in maatschappelijke transities', 'Draagt bij aan discourse over design futures']
    },
    7: {
      context: ['Anticipeert op toekomstige maatschappelijke challenges', 'Definieert visie op rol van design in samenleving'],
      ontwerpen: ['Initieert impactvolle maatschappelijke projecten', 'Ontwikkelt nieuwe paradigma\'s voor social design'],
      prototype: ['Valideert visionaire maatschappelijke concepten', 'Toont thought leadership in sustainable design'],
      verbinden: ['Beïnvloedt industrie en overheid op systemisch niveau', 'Inspireert beweging voor responsible design'],
      reflecteren: ['Reflecteert op legacy en lange-termijn maatschappelijke impact', 'Vormt moreel leiderschap in design field']
    }
  },
  
  'Organisatie & Strategie': {
    1: {
      context: [
        { text: 'Begrijpt basis projectstructuur en rollen', activity: 'Basecamp' },
        { text: 'Herkent stakeholders in eenvoudig project', activity: 'Social Design' },
        { text: 'Leert over teamrollen (Belbin)', activity: 'Interaction Design' },
        { text: 'Begrijpt wat een retrospective is', activity: 'Visual Design' }
      ],
      ontwerpen: [
        { text: 'Ontwerpt met aandacht voor projectdoelen', activity: 'Visual Design' },
        { text: 'Werkt volgens gegeven planning', activity: 'Social Design' },
        { text: 'Volgt Design Thinking proces', activity: 'Visual Design' },
        { text: 'Werkt met briefing', activity: 'Social Design' }
      ],
      prototype: [
        { text: 'Test met begeleider en opdrachtgever' },
        { text: 'Presenteert werk aan team', activity: 'Basecamp' },
        { text: 'Exposeert eindwerk professioneel', activity: 'Visual Design' }
      ],
      verbinden: [
        { text: 'Werkt samen in team', activity: 'Basecamp' },
        { text: 'Communiceert over voortgang met begeleiding', activity: 'Social Design' },
        { text: 'Geeft en ontvangt peer feedback', activity: 'Visual Design' },
        { text: 'Doet mee aan retrospectives', activity: 'Interaction Design' },
        { text: 'Werkt in filmcrew', activity: 'Hackathon Film' }
      ],
      reflecteren: [
        { text: 'Reflecteert op eigen rol en samenwerking', activity: 'Basecamp' },
        { text: 'Gebruikt Portflow voor reflectie', activity: 'Visual Design' },
        { text: 'Reflecteert met STARR methode', activity: 'Visual Design' }
      ]
    },
    2: {
      context: [
        { text: 'Analyseert stakeholders en hun belangen', activity: 'Opdrachtgeversproject 1' },
        { text: 'Begrijpt organisatiecontext en processen', activity: 'Opdrachtgeversproject 1' },
        { text: 'Vertaalt projectdoelen naar ontwerpcriteria', activity: 'Opdrachtgeversproject 1' },
        { text: 'Maakt onderzoeksopzet', activity: 'Opdrachtgeversproject 1' },
        { text: 'Definieert eigen projectscope', activity: 'Eigen Project' }
      ],
      ontwerpen: [
        { text: 'Ontwerpt oplossingen die aansluiten bij strategie', activity: 'Opdrachtgeversproject 1' },
        { text: 'Gebruikt basis frameworks (value proposition, etc.)', activity: 'Opdrachtgeversproject 2' },
        { text: 'Werkt met briefing en debriefing', activity: 'Opdrachtgeversproject 1' },
        { text: 'Plant en stuurt eigen project', activity: 'Eigen Project' }
      ],
      prototype: [
        { text: 'Test concepten met opdrachtgevers', activity: 'Opdrachtgeversproject 1' },
        { text: 'Integreert haalbaarheid in prototypes', activity: 'Opdrachtgeversproject 2' },
        { text: 'Stelt testplannen op', activity: 'Opdrachtgeversproject 2' }
      ],
      verbinden: [
        { text: 'Werkt effectief in teamverband', activity: 'Opdrachtgeversproject 1' },
        { text: 'Communiceert voortgang en keuzes helder', activity: 'Opdrachtgeversproject 1' },
        { text: 'Faciliteert afstemming', activity: 'Opdrachtgeversproject 2' },
        { text: 'Geeft feedback, feedup, feedforward', activity: 'Opdrachtgeversproject 2' },
        { text: 'Navigeert groepsdynamieken', activity: 'Opdrachtgeversproject 2' }
      ],
      reflecteren: [
        { text: 'Reflecteert op professioneel handelen', activity: 'Opdrachtgeversproject 1' },
        { text: 'Neemt verantwoordelijkheid voor eigen taken', activity: 'Opdrachtgeversproject 2' },
        { text: 'Stuurt eigen leerproces', activity: 'Eigen Project' },
        { text: 'Gebruikt documentatietechnieken (dummy, procesverslag)', activity: 'Opdrachtgeversproject 2' }
      ]
    },
    3: {
      context: {
        kennis: [
          { text: 'Organisatiecontext en stakeholder landscape', activity: 'Opdrachtgeversproject' },
          { text: 'Business modellen en waardecreatie', activity: 'Opdrachtgeversproject' },
          { text: 'Theoretische kaders rondom merk en trends', activity: 'Opdrachtgeversproject' },
          { text: 'Ethische principes: belangen, waarden en impact', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Analyseert organisatiecultuur en -strategie', activity: 'Opdrachtgeversproject' },
          { text: 'Onderzoekt opdrachtgever, gebruikers en omgeving', activity: 'Opdrachtgeversproject' },
          { text: 'Analyseert stakeholders en vertaalt naar ontwerpcriteria', activity: 'Opdrachtgeversproject' },
          { text: 'Begrijpt business modellen en waardecreatie', activity: 'Opdrachtgeversproject' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Iteratieve ontwerpprocessen binnen Design Thinking', activity: 'Opdrachtgeversproject' },
          { text: 'Conceptontwikkeling met business focus', activity: 'Opdrachtgeversproject' },
          { text: 'Validatie van ontwerpkeuzes via stakeholderfeedback', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Ontwerpt strategische oplossingen voor bedrijven', activity: 'Opdrachtgeversproject' },
          { text: 'Balanceert creativiteit met business value', activity: 'Opdrachtgeversproject' },
          { text: 'Toetst concepten aan ethische waarden en feedback', activity: 'Opdrachtgeversproject' },
          { text: 'Ontwikkelt onderscheidende en uitvoerbare oplossingen', activity: 'Opdrachtgeversproject' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Evaluatiecriteria voor effectiviteit en uitvoerbaarheid', activity: 'Opdrachtgeversproject' },
          { text: 'Testplannen met relevante stakeholders', activity: 'Opdrachtgeversproject' },
          { text: 'Ethische aspecten bij testen: transparantie, betrouwbaarheid', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Gebruikt prototyping als besluitvormingsinstrument', activity: 'Opdrachtgeversproject' },
          { text: 'Test business assumptions met stakeholders', activity: 'Opdrachtgeversproject' },
          { text: 'Presenteert en onderbouwt resultaten richting opdrachtgever', activity: 'Opdrachtgeversproject' },
          { text: 'Analyseert en verwerkt testresultaten in ontwerpverbeteringen', activity: 'Opdrachtgeversproject' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Professionele communicatie met opdrachtgevers', activity: 'Opdrachtgeversproject' },
          { text: 'Stakeholder management en verwachtingsmanagement', activity: 'Opdrachtgeversproject' },
          { text: 'Presentatie- en rapportagetechnieken voor bedrijven', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Faciliteert workshops en design sprints', activity: 'Opdrachtgeversproject' },
          { text: 'Communiceert ontwerpwaarde aan management', activity: 'Opdrachtgeversproject' },
          { text: 'Professioneel communiceren met externe opdrachtgevers', activity: 'Opdrachtgeversproject' },
          { text: 'Samenwerkt in projectteam met rolverdeling', activity: 'Opdrachtgeversproject' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Projectevaluatie en procesevaluatie', activity: 'Opdrachtgeversproject' },
          { text: 'Zelfreflectie op professioneel handelen', activity: 'Opdrachtgeversproject' },
          { text: 'Leren van professionele projectervaringen', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op professionele ontwikkeling', activity: 'Opdrachtgeversproject' },
          { text: 'Ontwikkelt eigen werkwijze in professionele context', activity: 'Eigen project' },
          { text: 'Evalueert ontwerpproces en projectaanpak', activity: 'Opdrachtgeversproject' },
          { text: 'Identificeert ontwikkelpunten voor toekomstige projecten', activity: 'Opdrachtgeversproject' }
        ]
      }
    },
    4: {
      context: ['Analyseert complexe organisatievraagstukken', 'Begrijpt marktdynamiek en concurrentie'],
      ontwerpen: ['Ontwikkelt business-driven design oplossingen', 'Integreert branding en communicatiestrategie'],
      prototype: ['Valideert business value en ROI', 'Test go-to-market strategieën'],
      verbinden: ['Leidt multidisciplinaire teams', 'Managet verwachtingen van stakeholders'],
      reflecteren: ['Reflecteert op professionele identiteit', 'Ontwikkelt visie op rol als designer in organisatie']
    },
    5: {
      context: ['Voert strategische analyses uit autonoom', 'Identificeert innovatiekansen voor organisaties'],
      ontwerpen: ['Ontwerpt organisatie-brede interventies', 'Gebruikt design thinking voor business innovatie'],
      prototype: ['Valideert strategische propositie', 'Test en itereert business modellen'],
      verbinden: ['Coördineert complexe projecten', 'Bouwt draagvlak bij senior management'],
      reflecteren: ['Evalueert eigen professionele impact', 'Neemt initiatief in professionele ontwikkeling']
    },
    6: {
      context: ['Definieert strategische ontwerpvraagstukken', 'Positioneert design als strategisch asset'],
      ontwerpen: ['Leidt design-driven innovation', 'Ontwikkelt nieuwe business modellen door design'],
      prototype: ['Valideert strategische visie met stakeholders', 'Gebruikt prototyping op board level'],
      verbinden: ['Transformeert organisaties naar design-led culture', 'Adviseert C-level over design strategie'],
      reflecteren: ['Reflecteert op leiderschap en invloed', 'Ontwikkelt visie op design in business']
    },
    7: {
      context: ['Anticipeert op toekomstige organisatie challenges', 'Definieert visie op design-led organizations'],
      ontwerpen: ['Initieert strategische design transformaties', 'Ontwikkelt nieuwe paradigma\'s voor design in business'],
      prototype: ['Valideert visionaire business concepten', 'Toont thought leadership in design management'],
      verbinden: ['Beïnvloedt industrie op strategisch niveau', 'Mentort next generation design leaders'],
      reflecteren: ['Reflecteert op legacy als design professional', 'Vormt visie op toekomst van design practice']
    }
  },
  
  'Onderzoekend Vermogen': {
    1: {
      context: [
        { text: 'Verkent communicatieproblemen met begeleiding', activity: 'Social Design' },
        { text: 'Verzamelt informatie uit bronnen', activity: 'Visual Design' },
        { text: 'Past basis onderzoeksmethoden toe', activity: 'Interaction Design' },
        { text: 'Voert desk research uit', activity: 'Visual Design' },
        { text: 'Past CMD Methods toe (Good/Best/Bad practices)', activity: 'Visual Design' },
        { text: 'Voert veldonderzoek uit', activity: 'Interaction Design' }
      ],
      ontwerpen: [
        { text: 'Gebruikt onderzoeksinzichten voor ontwerpkeuzes', activity: 'Interaction Design' },
        { text: 'Documenteert bevindingen', activity: 'Visual Design' },
        { text: 'Onderbouwt keuzes met theorie', activity: 'Social Design' },
        { text: 'Werkt volgens Double Diamond', activity: 'Visual Design' }
      ],
      prototype: [
        { text: 'Evalueert prototypes met simpele methoden', activity: 'Interaction Design' },
        { text: 'Observeert wat werkt en wat niet', activity: 'Interaction Design' },
        { text: 'Voert usability tests uit', activity: 'Interaction Design' },
        { text: 'Test en itereert', activity: 'Social Design' }
      ],
      verbinden: [
        { text: 'Presenteert bevindingen aan groep', activity: 'Visual Design' },
        { text: 'Legt onderzoek uit in eigen woorden', activity: 'Social Design' },
        { text: 'Deelt onderzoeksresultaten', activity: 'Interaction Design' }
      ],
      reflecteren: [
        { text: 'Reflecteert op onderzoeksproces met begeleiding', activity: 'Social Design' },
        { text: 'Documenteert onderzoekskeuzes', activity: 'Visual Design' }
      ]
    },
    2: {
      context: [
        { text: 'Onderzoekt communicatieproblemen systematisch', activity: 'Opdrachtgeversproject 1' },
        { text: 'Ontdekt vraag achter de vraag', activity: 'Opdrachtgeversproject 1' },
        { text: 'Past onderzoeksmethoden toe passend bij context', activity: 'Opdrachtgeversproject 1' },
        { text: 'Analyseert informatie kritisch', activity: 'Opdrachtgeversproject 2' },
        { text: 'Maakt onderzoeksopzet', activity: 'Opdrachtgeversproject 1' },
        { text: 'Gebruikt APA bronvermelding', activity: 'Opdrachtgeversproject 1' }
      ],
      ontwerpen: [
        { text: 'Onderbouwt ontwerpkeuzes met onderzoeksinzichten', activity: 'Opdrachtgeversproject 1' },
        { text: 'Verkent alternatieven methodisch', activity: 'Opdrachtgeversproject 2' },
        { text: 'Gebruikt Design Thinking methodiek', activity: 'Eigen Project' },
        { text: 'Werkt evidence-based', activity: 'Opdrachtgeversproject 2' }
      ],
      prototype: [
        { text: 'Evalueert prototypes met geschikte methoden', activity: 'Opdrachtgeversproject 1' },
        { text: 'Toetst aannames en valideert oplossingen', activity: 'Opdrachtgeversproject 1' },
        { text: 'Gebruikt bevindingen voor iteratie', activity: 'Opdrachtgeversproject 2' },
        { text: 'Analyseert testresultaten', activity: 'Opdrachtgeversproject 2' }
      ],
      verbinden: [
        { text: 'Communiceert onderzoeksbevindingen helder', activity: 'Opdrachtgeversproject 1' },
        { text: 'Betrekt stakeholders bij onderzoek', activity: 'Opdrachtgeversproject 1' },
        { text: 'Vertaalt inzichten naar implicaties', activity: 'Opdrachtgeversproject 2' },
        { text: 'Presenteert onderzoeksresultaten', activity: 'Opdrachtgeversproject 1' }
      ],
      reflecteren: [
        { text: 'Reflecteert op onderzoeksproces en kwaliteit', activity: 'Opdrachtgeversproject 2' },
        { text: 'Evalueert betrouwbaarheid bronnen en methoden', activity: 'Opdrachtgeversproject 2' },
        { text: 'Documenteert onderzoekskeuzes', activity: 'Eigen Project' }
      ]
    },
    3: {
      context: {
        kennis: [
          { text: 'Design Thinking en onderzoeksmethoden voor complexe vraagstukken', activity: 'Opdrachtgeversproject' },
          { text: 'Gedragstheorieën en beïnvloedingsmodellen', activity: 'Persuasive Communication' },
          { text: 'CASI-methode en gedragslenzen voor analyse', activity: 'Persuasive Communication' },
          { text: 'Zelfstandig projectonderzoek opzetten', activity: 'Eigen project' },
          { text: 'Bronvermelding en academische integriteit', activity: 'Opdrachtgeversproject' }
        ],
        vaardigheden: [
          { text: 'Voert diepgaand contextueel onderzoek uit', activity: 'Opdrachtgeversproject' },
          { text: 'Combineert onderzoeksmethoden effectief (triangulatie)', activity: 'Opdrachtgeversproject' },
          { text: 'Synthetiseert complexe informatie uit meerdere bronnen', activity: 'Opdrachtgeversproject' },
          { text: 'Analyseert gedragsvraagstukken met theoretische modellen', activity: 'Persuasive Communication' },
          { text: 'Formuleert eigen onderzoeksvraag autonoom', activity: 'Eigen project' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Iteratieve ontwerpprocessen binnen Design Thinking', activity: 'Opdrachtgeversproject' },
          { text: 'Toepassing van gedragslenzen in ontwerp', activity: 'Persuasive Communication' },
          { text: 'Validatie van ontwerpkeuzes via onderzoek', activity: 'Opdrachtgeversproject' },
          { text: 'Zelfstandige conceptontwikkeling', activity: 'Eigen project' }
        ],
        vaardigheden: [
          { text: 'Gebruikt onderzoek strategisch in ontwerpproces', activity: 'Opdrachtgeversproject' },
          { text: 'Evalueert ontwerprichtingen evidence-based', activity: 'Opdrachtgeversproject' },
          { text: 'Vertaalt gedragsdoelen naar ontwerpstrategieën', activity: 'Persuasive Communication' },
          { text: 'Onderbouwt ontwerpkeuzes met theorie en onderzoek', activity: 'Eigen project' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Evaluatiecriteria voor effectiviteit en uitvoerbaarheid', activity: 'Opdrachtgeversproject' },
          { text: 'Prototyping- en testmethoden voor gedragsinterventies', activity: 'Persuasive Communication' },
          { text: 'Teststrategieën zonder voorgeschreven aanpak', activity: 'Eigen project' }
        ],
        vaardigheden: [
          { text: 'Valideert met rigoureuze evaluatiemethoden', activity: 'Opdrachtgeversproject' },
          { text: 'Analyseert en interpreteert data grondig', activity: 'Opdrachtgeversproject' },
          { text: 'Test beïnvloedingsmechanismen met experts', activity: 'Persuasive Communication' },
          { text: 'Zelfstandig opzetten en uitvoeren van testplan', activity: 'Eigen project' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Presentatie- en rapportagetechnieken voor onderzoek', activity: 'Opdrachtgeversproject' },
          { text: 'Communicatie van ethische overwegingen', activity: 'Persuasive Communication' },
          { text: 'Zelfstandig organiseren van feedback momenten', activity: 'Eigen project' }
        ],
        vaardigheden: [
          { text: 'Vertaalt complex onderzoek naar toegankelijke inzichten', activity: 'Opdrachtgeversproject' },
          { text: 'Faciliteert research driven workshops', activity: 'Opdrachtgeversproject' },
          { text: 'Presenteert gedragsonderzoek aan experts', activity: 'Persuasive Communication' },
          { text: 'Proactief feedback vragen aan relevante experts', activity: 'Eigen project' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Projectevaluatie en procesevaluatie', activity: 'Opdrachtgeversproject' },
          { text: 'Ethische reflectie op gedragsbeïnvloeding', activity: 'Persuasive Communication' },
          { text: 'Zelfsturend leren en persoonlijke ontwikkeling', activity: 'Eigen project' }
        ],
        vaardigheden: [
          { text: 'Reflecteert kritisch op methodologische keuzes', activity: 'Opdrachtgeversproject' },
          { text: 'Herkent bias in eigen onderzoek en aannames', activity: 'Opdrachtgeversproject' },
          { text: 'Evalueert maatschappelijke impact van onderzoeksresultaten', activity: 'Persuasive Communication' },
          { text: 'Evalueert eigen regie over leerproces', activity: 'Eigen project' }
        ]
      }
    },
    4: {
      context: ['Ontwerpt onderzoeksaanpak voor complexe vraagstukken', 'Beheerst kwalitatieve en kwantitatieve methoden', 'Analyseert met geavanceerde technieken'],
      ontwerpen: ['Integreert onderzoek strategisch in innovatieproces', 'Gebruikt data voor design decisioning'],
      prototype: ['Valideert met mixed-methods approaches', 'Evalueert lange-termijn effecten'],
      verbinden: ['Communiceert onderzoek voor verschillende doelgroepen', 'Gebruikt onderzoek om consensus te bouwen'],
      reflecteren: ['Reflecteert op ethiek van onderzoek', 'Ontwikkelt visie op rigor en relevance']
    },
    5: {
      context: ['Voert strategisch research uit autonoom', 'Ontwikkelt eigen onderzoeksaanpak', 'Synthetiseert cross-disciplinaire inzichten'],
      ontwerpen: ['Leidt research-driven innovation', 'Innoveert met research methodieken'],
      prototype: ['Valideert met academische rigor', 'Publiceert onderzoeksbevindingen'],
      verbinden: ['Bouwt onderzoekscapaciteit in organisaties', 'Adviseert over research strategie'],
      reflecteren: ['Evalueert eigen bijdrage aan kennisontwikkeling', 'Neemt standpunt in methodologische debatten']
    },
    6: {
      context: ['Definieert research agenda\'s', 'Positioneert onderzoek als strategisch instrument', 'Leidt complex multidisciplinair onderzoek'],
      ontwerpen: ['Transformeert organisaties naar evidence-based practice', 'Ontwikkelt nieuwe research methodologieën'],
      prototype: ['Valideert op wetenschappelijk niveau', 'Draagt bij aan body of knowledge'],
      verbinden: ['Beïnvloedt beleid met onderzoeksinzichten', 'Faciliteert onderzoekscommunities'],
      reflecteren: ['Reflecteert op rol van onderzoek in maatschappij', 'Vormt visie op practitioner research']
    },
    7: {
      context: ['Anticipeert op toekomstige research needs', 'Definieert visie op design research', 'Leidt academische en praktijk onderzoek'],
      ontwerpen: ['Initieert baanbrekend onderzoek', 'Ontwikkelt nieuwe paradigma\'s voor design research'],
      prototype: ['Valideert visionaire onderzoeksconcepten', 'Toont thought leadership in research'],
      verbinden: ['Beïnvloedt onderzoeksagenda in field', 'Mentort volgende generatie researchers'],
      reflecteren: ['Reflecteert op legacy in kennisontwikkeling', 'Vormt methodologisch leiderschap']
    }
  }
};

// Keywords mapping om items te koppelen aan speelvelden
export const speelveldKeywords: Record<Speelveld, string[]> = {
  'Design': [
    'visueel', 'visual', 'design', 'ontwerp', 'vormgev', 'typografie', 'kleur', 'compositie',
    'layout', 'interface', 'UI', 'user interface', 'interactieontwerp', 'wireframe',
    'figma', 'esthetiek', 'grid', 'contrast', 'hiërarchie',
    'brand', 'huisstijl', 'stijl', 'grafisch', 'illustrat', 'icono', 'pixel', 'scherm',
    'multimodale interface', 'storytelling', 'beleving', 'vormgeving'
  ],
  'Technologie & AI': [
    'technolog', 'technisch', 'code', 'programmeren', 'HTML', 'CSS', 'JavaScript',
    'front-end', 'backend', 'database', 'API', 'framework', 'software', 'platform',
    'digitale tool', 'web', 'app', 'applicatie', 'systeem', 'algoritme',
    'AI', 'machine learning', 'automation', 'implementeren', 'integreren', 
    'bouwen', 'realiseren', 'technische eisen'
  ],
  'Mens & Ervaring': [
    'gebruiker', 'user', 'ervaring', 'experience', 'UX', 'usability', 'toegankelijk',
    'gebruiksvriendelijk', 'interactie', 'gedrag', 'psycholog', 'emotie', 'beleving',
    'persona', 'empathie', 'empathy', 'journey', 'touchpoint', 'doelgroep',
    'interview', 'observat', 'enquête', 'feedback', 'accessibility',
    'behoeften', 'wensen', 'motivatie', 'belanghebbenden', 'gebruikscontext'
  ],
  'Maatschappij & Toekomst': [
    'maatschappij', 'sociaal', 'ethiek', 'ethisch', 'duurzaam',
    'sustainability', 'impact', 'maatschappelijke impact', 'verantwoord', 'diversiteit',
    'toekomst', 'future', 'innovatie', 'disrupt', 'transformatie',
    'cultuur', 'politiek', 'economie', 'klimaat', 'SDG', 'circulair',
    'gevoeligheden', 'dilemma', 'kwesties', 'lange termijn', 'maatschappelijke verhoudingen'
  ],
  'Organisatie & Strategie': [
    'organisatie', 'business', 'strategie', 'strategy', 'stakeholder',
    'management', 'projectmanagement', 'proces', 'planning', 'agile', 'scrum',
    'businessmodel', 'propositie', 'organiseer', 'coördin', 'facilitate',
    'samenwerk', 'collaboration', 'teamwork', 'communicat', 'presenteren', 'pitch',
    'professioneel', 'netwerk', 'interdisciplinair', 'multidisciplinair',
    'team', 'client', 'opdrachtgever', 'eigenaarschap',
    'verantwoordelijkheid', 'initiatief', 'proactief', 'zelfsturend', 'zelfstandig',
    'draagvlak', 'ingebruikname', 'markt', 'status quo', 'bedrijfscommunicatie',
    'toegevoegde waarde'
  ],
  'Onderzoekend Vermogen': [
    'onderzoek', 'research', 'analyse', 'analy', 'methode', 'onderzoeksmethode',
    'inzicht', 'bevinding', 'conclusie', 'rapport', 'desk research', 'field research',
    'kwalitatief', 'kwantitatief', 'triangulatie', 'DOT', 'valideer', 'evalueer',
    'evaluatiemethoden', 'exploreer', 'synthes', 'interpret', 'reflectie', 'reflecteren',
    'kritisch', 'onderbouw', 'communicatieprobleem', 'vraag achter de vraag',
    'toetsen', 'verfijnen'
  ]
};

// Function to determine which speelvelden an item belongs to (more strict)
export function getSpeelveldForItem(item: string): Speelveld[] {
  const itemLower = item.toLowerCase();
  const matchedSpeelvelden: Speelveld[] = [];

  speelvelden.forEach(speelveld => {
    const keywords = speelveldKeywords[speelveld];
    
    // Count how many keywords match
    let matchCount = 0;
    keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (itemLower.includes(keywordLower)) {
        matchCount++;
      }
    });
    
    // Only add if there's at least one clear match
    if (matchCount > 0) {
      matchedSpeelvelden.push(speelveld);
    }
  });

  // Only return matched speelvelden - no fallback
  // Be even more strict: if an item matches too many speelvelden (>3), it's probably too generic
  if (matchedSpeelvelden.length > 3) {
    return [];
  }

  return matchedSpeelvelden;
}

// Nieuwe structuur: Speelveld competenties met onderscheid tussen kennis en vaardigheden
export const speelveldCompetencies: Record<Speelveld, Record<number, {
  context: SpeelveldOutcomeData;
  ontwerpen: SpeelveldOutcomeData;
  prototype: SpeelveldOutcomeData;
  verbinden: SpeelveldOutcomeData;
  reflecteren: SpeelveldOutcomeData;
}>> = {
  'Design': {
    1: {
      context: {
        kennis: [
          { text: 'Basis ontwerpprincipes (contrast, hiërarchie, balans)', activity: 'Visual Design' },
          { text: 'Designgeschiedenis en -voorbeelden', activity: 'Basecamp' },
          { text: 'Betekenis van context voor ontwerp', activity: 'Visual Design' },
          { text: 'Doelgroepanalyse basics', activity: 'Social Design' }
        ],
        vaardigheden: [
          { text: 'Verkent ontwerpcontext en doelgroep met begeleiding', activity: 'Visual Design' },
          { text: 'Verzamelt visuele inspiratie en referenties', activity: 'Visual Design' },
          { text: 'Observeert designvoorbeelden in dagelijks leven', activity: 'Basecamp' },
          { text: 'Maakt eerste moodboards', activity: 'Visual Design' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Typografie basics (lettertype, grootte, hiërarchie)', activity: 'Visual Design' },
          { text: 'Kleurtheorie en kleurgebruik', activity: 'Visual Design' },
          { text: 'Compositie en layout principes', activity: 'Visual Design' },
          { text: 'Design Thinking proces', activity: 'Visual Design' }
        ],
        vaardigheden: [
          { text: 'Genereert eerste ideeën en schetsen', activity: 'Visual Design' },
          { text: 'Experimenteert met basis ontwerpprincipes', activity: 'Visual Design' },
          { text: 'Past typografie, kleur en compositie toe', activity: 'Visual Design' },
          { text: 'Werkt analoog en digitaal aan concepten', activity: 'Social Design' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Fidelity niveaus (low-fi, mid-fi, high-fi)', activity: 'Interaction Design' },
          { text: 'Adobe Creative Suite basics', activity: 'Visual Design' },
          { text: 'Wireframing principes', activity: 'Interaction Design' }
        ],
        vaardigheden: [
          { text: 'Maakt eenvoudige low-fi prototypes (schetsen, wireframes)', activity: 'Interaction Design' },
          { text: 'Communiceert basisontwerp aan medestudenten', activity: 'Basecamp' },
          { text: 'Maakt visuele prototypes in Adobe tools', activity: 'Visual Design' },
          { text: 'Experimenteert met verschillende fidelity niveaus', activity: 'Interaction Design' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Presentatietechnieken', activity: 'Workshopweek' },
          { text: 'Feedbackprocessen', activity: 'Visual Design' },
          { text: 'Portfolio en documentatie', activity: 'Visual Design' }
        ],
        vaardigheden: [
          { text: 'Presenteert ontwerpoplossingen aan groep', activity: 'Workshopweek' },
          { text: 'Ontvangt en verwerkt feedback van peers', activity: 'Visual Design' },
          { text: 'Deelt werk tijdens tussentijdse presentaties', activity: 'Social Design' },
          { text: 'Exposeert eindwerk', activity: 'Visual Design' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Reflectiemodellen (STARR)', activity: 'Visual Design' },
          { text: 'Portfoliotools (Portflow)', activity: 'Visual Design' },
          { text: 'Ontwerpkeuzes documenteren', activity: 'Visual Design' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op eigen ontwerpproces met begeleiding', activity: 'Basecamp' },
          { text: 'Documenteert ontwerpkeuzes in Portflow', activity: 'Visual Design' },
          { text: 'Reflecteert op aesthetische keuzes', activity: 'Visual Design' }
        ]
      }
    },
    2: {
      context: {
        kennis: [
          { text: 'Ontwerponderzoek methodieken', activity: 'Opdrachtgeversproject 1' },
          { text: 'Ontwerpcriteria formuleren', activity: 'Opdrachtgeversproject 1' },
          { text: 'Design trends en best practices', activity: 'Opdrachtgeversproject 2' },
          { text: 'Kritische designanalyse', activity: 'Eigen Project' }
        ],
        vaardigheden: [
          { text: 'Analyseert ontwerpcontext en vraagstuk systematischer', activity: 'Opdrachtgeversproject 1' },
          { text: 'Formuleert eerste ontwerpcriteria', activity: 'Opdrachtgeversproject 1' },
          { text: 'Verkent ontwerptrends en best practices', activity: 'Opdrachtgeversproject 2' },
          { text: 'Analyseert designvoorbeelden kritisch', activity: 'Eigen Project' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Conceptontwikkeling methodieken', activity: 'Opdrachtgeversproject 1' },
          { text: 'Guiding principles', activity: 'Opdrachtgeversproject 2' },
          { text: 'Brainstormtechnieken', activity: 'Opdrachtgeversproject 2' },
          { text: 'Visuele identiteit opbouw', activity: 'Eigen Project' }
        ],
        vaardigheden: [
          { text: 'Verkent meerdere ontwerprichtingen', activity: 'Opdrachtgeversproject 1' },
          { text: 'Maakt onderbouwde keuzes met design principes', activity: 'Opdrachtgeversproject 1' },
          { text: 'Gebruikt brainstorm- en conceptmethodieken', activity: 'Opdrachtgeversproject 2' },
          { text: 'Werkt met guiding principles', activity: 'Opdrachtgeversproject 2' },
          { text: 'Ontwikkelt eigen visuele identiteit', activity: 'Eigen Project' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Mid-fi prototyping technieken', activity: 'Opdrachtgeversproject 1' },
          { text: 'Testmethodieken', activity: 'Opdrachtgeversproject 1' },
          { text: 'Iteratieve ontwerpprocessen', activity: 'Opdrachtgeversproject 2' },
          { text: 'Strategisch gebruik van fidelity', activity: 'Eigen Project' }
        ],
        vaardigheden: [
          { text: 'Maakt mid-fi prototypes (visueel, interactief)', activity: 'Opdrachtgeversproject 1' },
          { text: 'Test prototypes met doelgroep', activity: 'Opdrachtgeversproject 1' },
          { text: 'Verwerkt feedback in vervolgversie', activity: 'Opdrachtgeversproject 2' },
          { text: 'Gebruikt verschillende fidelity levels strategisch', activity: 'Eigen Project' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Communicatie met opdrachtgevers', activity: 'Opdrachtgeversproject 1' },
          { text: 'Feedbacksessies faciliteren', activity: 'Opdrachtgeversproject 2' },
          { text: 'Professionele presentatie', activity: 'Opdrachtgeversproject 1' }
        ],
        vaardigheden: [
          { text: 'Communiceert ontwerpkeuzes helder aan opdrachtgever', activity: 'Opdrachtgeversproject 1' },
          { text: 'Faciliteert feedback sessies', activity: 'Opdrachtgeversproject 2' },
          { text: 'Presenteert ontwerp professioneel', activity: 'Opdrachtgeversproject 1' },
          { text: 'Exposeert eigen werk', activity: 'Eigen Project' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Ontwerpvisie articuleren', activity: 'Opdrachtgeversproject 1' },
          { text: 'Procesevaluatie', activity: 'Eigen Project' },
          { text: 'Portfolio opbouw', activity: 'Opdrachtgeversproject 2' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op ontwerpvisie en kwaliteit van keuzes', activity: 'Opdrachtgeversproject 1' },
          { text: 'Evalueert ontwerpproces kritisch', activity: 'Eigen Project' },
          { text: 'Documenteert leerproces in Portflow', activity: 'Opdrachtgeversproject 2' }
        ]
      }
    },
    // Semesters 3-7 gebruiken nog de oude structuur (string arrays)
    3: {
      context: { kennis: [], vaardigheden: [{ text: 'Past designonderzoek toe voor dieper inzicht' }, { text: 'Koppelt context aan relevante design trends' }] },
      ontwerpen: { kennis: [], vaardigheden: [{ text: 'Genereert concepten vanuit verschillende perspectieven' }, { text: 'Onderbouwt keuzes met theorie en strategie' }] },
      prototype: { kennis: [], vaardigheden: [{ text: 'Maakt high-fi prototypes met aandacht voor detail' }, { text: 'Test iteratief en verbetert systematisch' }] },
      verbinden: { kennis: [], vaardigheden: [{ text: 'Faciliteert co-creatie sessies' }, { text: 'Brengt verschillende perspectieven samen' }] },
      reflecteren: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt bewustwording van eigen ontwerpidentiteit' }] }
    },
    4: {
      context: { kennis: [], vaardigheden: [{ text: 'Analyseert complexe ontwerpcontexten zelfstandig' }, { text: 'Positioneert ontwerp binnen design filosofie' }] },
      ontwerpen: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt originele concepten met sterke visie' }, { text: 'Zoekt naar innovatie en impact in oplossingen' }] },
      prototype: { kennis: [], vaardigheden: [{ text: 'Realiseert high-fi prototypes (visueel, interactief, audiovisueel)' }, { text: 'Communiceert ontwerpvisie overtuigend via prototypes' }] },
      verbinden: { kennis: [], vaardigheden: [{ text: 'Leidt ontwerpgesprekken met stakeholders' }, { text: 'Navigeert tussen verschillende belangen' }] },
      reflecteren: { kennis: [], vaardigheden: [{ text: 'Reflecteert kritisch op ontwerpfilosofie en richting' }] }
    },
    5: {
      context: { kennis: [], vaardigheden: [{ text: 'Herkent en benut kansen in complexe contexts' }, { text: 'Definieert eigen ontwerpuitgangspunten' }] },
      ontwerpen: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt onderscheidende ontwerpoplossingen' }, { text: 'Balanceert creativiteit met haalbaarheid autonoom' }] },
      prototype: { kennis: [], vaardigheden: [{ text: 'Produceert professionele prototypes voor diverse media' }, { text: 'Valideert oplossingen met stakeholders' }] },
      verbinden: { kennis: [], vaardigheden: [{ text: 'Adviseert stakeholders over ontwerpstrategie' }, { text: 'Bouwt draagvlak voor ontwerpvisie' }] },
      reflecteren: { kennis: [], vaardigheden: [{ text: 'Evalueert eigen ontwerpstandpunt kritisch' }, { text: 'Blijft ontwerpvisie doorontwikkelen' }] }
    },
    6: {
      context: { kennis: [], vaardigheden: [{ text: 'Analyseert strategische ontwerpvraagstukken' }, { text: 'Vertaalt maatschappelijke trends naar ontwerpkansen' }] },
      ontwerpen: { kennis: [], vaardigheden: [{ text: 'Leidt ontwerpprocessen en conceptontwikkeling' }, { text: 'Innoveert met nieuwe ontwerpmethodieken' }] },
      prototype: { kennis: [], vaardigheden: [{ text: 'Realiseert complexe multimodale prototypes' }, { text: 'Gebruikt prototyping als strategisch middel' }] },
      verbinden: { kennis: [], vaardigheden: [{ text: 'Coördineert multidisciplinaire ontwerpteams' }, { text: 'Overtuigt beslissers van ontwerpwaarde' }] },
      reflecteren: { kennis: [], vaardigheden: [{ text: 'Reflecteert op ontwerpimpact en maatschappelijke rol' }, { text: 'Draagt bij aan design discourse' }] }
    },
    7: {
      context: { kennis: [], vaardigheden: [{ text: 'Definieert ontwerpruimte en strategische richting' }, { text: 'Positioneert ontwerp als driver voor verandering' }] },
      ontwerpen: { kennis: [], vaardigheden: [{ text: 'Initieert en leidt innovatieve ontwerpprojecten' }, { text: 'Ontwikkelt eigen ontwerpvisie en methodiek' }] },
      prototype: { kennis: [], vaardigheden: [{ text: 'Realiseert impactvolle prototypes op strategisch niveau' }, { text: 'Toont thought leadership via ontwerpwerk' }] },
      verbinden: { kennis: [], vaardigheden: [{ text: 'Beïnvloedt organisatiecultuur en ontwerpdenken' }, { text: 'Inspireert en begeleidt anderen in ontwerpproces' }] },
      reflecteren: { kennis: [], vaardigheden: [{ text: 'Reflecteert op ontwerpethiek en verantwoordelijkheid' }, { text: 'Vormt eigen positie binnen design field' }] }
    }
  },
  // Voor nu alleen Design volledig uitgewerkt - andere speelvelden volgen hetzelfde patroon
  'Technologie & AI': {
    1: {
      context: {
        kennis: [
          { text: 'HTML/CSS fundamentals', activity: 'Interaction Design' },
          { text: 'Basis web technologieën', activity: 'Interaction Design' },
          { text: 'Digitale tools overzicht', activity: 'Interaction Design' }
        ],
        vaardigheden: [
          { text: 'Verkent digitale tools en basis technologie', activity: 'Interaction Design' },
          { text: 'Maakt kennis met HTML/CSS basis', activity: 'Interaction Design' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Basis interactiepatronen', activity: 'Interaction Design' },
          { text: 'Figma interface design', activity: 'Interaction Design' }
        ],
        vaardigheden: [
          { text: 'Experimenteert met basis interacties', activity: 'Interaction Design' },
          { text: 'Werkt met Figma voor interface design', activity: 'Interaction Design' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'HTML/CSS prototyping', activity: 'Interaction Design' },
          { text: 'Figma prototyping functionaliteiten', activity: 'Interaction Design' }
        ],
        vaardigheden: [
          { text: 'Bouwt eenvoudige digitale prototypes (HTML/CSS)', activity: 'Interaction Design' },
          { text: 'Maakt clickable prototypes in Figma', activity: 'Interaction Design' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Technische communicatie basics', activity: 'Interaction Design' }
        ],
        vaardigheden: [
          { text: 'Communiceert over technische keuzes in eigen woorden', activity: 'Interaction Design' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Zelfreflectie op technische vaardigheden', activity: 'Interaction Design' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op eigen technische vaardigheden', activity: 'Interaction Design' }
        ]
      }
    },
    2: {
      context: {
        kennis: [
          { text: 'Technische haalbaarheid', activity: 'Opdrachtgeversproject 1' },
          { text: 'Impact van technologie op ontwerp', activity: 'Opdrachtgeversproject 1' }
        ],
        vaardigheden: [
          { text: 'Analyseert technische mogelijkheden en beperkingen', activity: 'Opdrachtgeversproject 1' },
          { text: 'Begrijpt impact van technische keuzes op ontwerp', activity: 'Opdrachtgeversproject 1' }
        ]
      },
      ontwerpen: {
        kennis: [
          { text: 'Technische haalbaarheidsanalyse', activity: 'Eigen Project' },
          { text: 'Technologie in conceptontwikkeling', activity: 'Opdrachtgeversproject 1' }
        ],
        vaardigheden: [
          { text: 'Integreert technologie bewust in conceptontwikkeling', activity: 'Opdrachtgeversproject 1' },
          { text: 'Maakt technische haalbaarheidsanalyses', activity: 'Eigen Project' }
        ]
      },
      prototype: {
        kennis: [
          { text: 'Web en app prototyping', activity: 'Opdrachtgeversproject 1' },
          { text: 'Usability en performance testing', activity: 'Opdrachtgeversproject 1' }
        ],
        vaardigheden: [
          { text: 'Bouwt interactieve prototypes (web, apps)', activity: 'Opdrachtgeversproject 1' },
          { text: 'Test usability en performance', activity: 'Opdrachtgeversproject 1' }
        ]
      },
      verbinden: {
        kennis: [
          { text: 'Technische communicatie naar niet-technische stakeholders', activity: 'Opdrachtgeversproject 1' }
        ],
        vaardigheden: [
          { text: 'Legt technische concepten uit aan niet-technische stakeholders', activity: 'Opdrachtgeversproject 1' }
        ]
      },
      reflecteren: {
        kennis: [
          { text: 'Ethische aspecten van technologie', activity: 'Opdrachtgeversproject 2' }
        ],
        vaardigheden: [
          { text: 'Reflecteert op technologie gebruik en ethische aspecten', activity: 'Opdrachtgeversproject 2' }
        ]
      }
    },
    // Semesters 3-7: placeholder data
    3: { context: { kennis: [], vaardigheden: [{ text: 'Analyseert technische trends en innovaties' }, { text: 'Begrijpt data en algoritmes' }] }, ontwerpen: { kennis: [], vaardigheden: [{ text: 'Gebruikt computationele benaderingen in ontwerp' }, { text: 'Zoekt naar innovatieve technische oplossingen' }] }, prototype: { kennis: [], vaardigheden: [{ text: 'Bouwt data-driven en AI-aangedreven prototypes' }, { text: 'Test betrouwbaarheid en bias' }] }, verbinden: { kennis: [], vaardigheden: [{ text: 'Overbrugt taal tussen design en technologie teams' }] }, reflecteren: { kennis: [], vaardigheden: [{ text: 'Reflecteert op ethiek (bias, privacy, transparantie)' }] } },
    4: { context: { kennis: [], vaardigheden: [{ text: 'Evalueert emerging technologies kritisch' }, { text: 'Voorspelt technologische impact' }] }, ontwerpen: { kennis: [], vaardigheden: [{ text: 'Innoveert met nieuwe technische mogelijkheden' }, { text: 'Balanceert innovatie met haalbaarheid' }] }, prototype: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt complexe technische prototypes' }, { text: 'Experimenteert met AI en geavanceerde tech' }] }, verbinden: { kennis: [], vaardigheden: [{ text: 'Adviseert teams over technische strategie' }] }, reflecteren: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt visie op tech en maatschappij' }] } },
    5: { context: { kennis: [], vaardigheden: [{ text: 'Beheerst technische landschap autonoom' }, { text: 'Herkent technologische kansen en risico\'s' }] }, ontwerpen: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt technisch haalbare en innovatieve oplossingen' }] }, prototype: { kennis: [], vaardigheden: [{ text: 'Bouwt schaalbare en robuuste prototypes' }, { text: 'Valideert technische architectuur' }] }, verbinden: { kennis: [], vaardigheden: [{ text: 'Coördineert tussen technische en niet-technische teams' }] }, reflecteren: { kennis: [], vaardigheden: [{ text: 'Reflecteert op lange-termijn impact van tech keuzes' }] } },
    6: { context: { kennis: [], vaardigheden: [{ text: 'Analyseert complexe technische ecosystemen' }, { text: 'Positioneert technologie als strategisch middel' }] }, ontwerpen: { kennis: [], vaardigheden: [{ text: 'Ontwerpt technology-enabled oplossingen op strategisch niveau' }] }, prototype: { kennis: [], vaardigheden: [{ text: 'Realiseert geavanceerde technische prototypes' }, { text: 'Integreert AI en data verantwoord' }] }, verbinden: { kennis: [], vaardigheden: [{ text: 'Leidt technische besluitvorming in projecten' }] }, reflecteren: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt visie op responsible AI' }] } },
    7: { context: { kennis: [], vaardigheden: [{ text: 'Definieert technologische richting en strategie' }, { text: 'Anticipeert op toekomstige ontwikkelingen' }] }, ontwerpen: { kennis: [], vaardigheden: [{ text: 'Initieert innovatieve technology-driven projecten' }] }, prototype: { kennis: [], vaardigheden: [{ text: 'Ontwikkelt proof-of-concepts voor nieuwe technologie' }, { text: 'Toont technisch thought leadership' }] }, verbinden: { kennis: [], vaardigheden: [{ text: 'Beïnvloedt organisatie breed technologiebeleid' }] }, reflecteren: { kennis: [], vaardigheden: [{ text: 'Reflecteert op ethische verantwoordelijkheid tech professionals' }] } }
  },
  // Placeholder voor andere speelvelden - deze moeten nog worden ingevuld
  'Mens & Ervaring': {
    1: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    2: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    3: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    4: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    5: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    6: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    7: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } }
  },
  'Maatschappij & Toekomst': {
    1: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    2: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    3: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    4: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    5: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    6: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    7: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } }
  },
  'Organisatie & Strategie': {
    1: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    2: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    3: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    4: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    5: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    6: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    7: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } }
  },
  'Onderzoekend Vermogen': {
    1: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    2: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    3: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    4: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    5: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    6: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } },
    7: { context: { kennis: [], vaardigheden: [] }, ontwerpen: { kennis: [], vaardigheden: [] }, prototype: { kennis: [], vaardigheden: [] }, verbinden: { kennis: [], vaardigheden: [] }, reflecteren: { kennis: [], vaardigheden: [] } }
  }
};

// Backwards compatibility - exports as Leerlijn for existing code
export type Leerlijn = Speelveld;
export const leerlijnen = speelvelden;
export const leerlijnKeywords = speelveldKeywords;
export const getLeerlijnForItem = getSpeelveldForItem;
