import { Leerlijn } from './leerlijnen';

export interface LeerlijnInfo {
  title: string;
  kernvraag: string;
  toelichting: string;
  essentie: string[];
  cruciaal: string;
  koppeling: Record<string, string[]>;
}

export const leerlijnInfo: Record<Leerlijn, LeerlijnInfo> = {
  'Design': {
    title: 'Design',
    kernvraag: 'Hoe kom je tot doordachte, samenhangende en verantwoord ontworpen oplossingen?',
    toelichting: 'Design gaat over het ontwerpvak zelf: het vermogen om ontwerpprocessen te sturen, keuzes te onderbouwen en ontwerp als integrale discipline te positioneren. De CMD’er beheerst ontwerpdenken, ontwerpstrategieën en -methoden en kan deze situationeel inzetten.',
    essentie: [
      'Ontwerptheorieën, -modellen en -methodieken',
      'Ontwerp als iteratief, mensgericht en onderzoekend proces',
      'Reflectie op ontwerpkwaliteit, rol en impact van design',
      'Verbinding tussen concept, uitvoering en evaluatie'
    ],
    cruciaal: 'Zonder een stevige designbasis verwordt CMD tot losse vaardigheden. Dit speelveld borgt het vakmanschap en de samenhang.',
    koppeling: {
      'Context': [
        'CMD’ers brengen de ontwerpvraag in kaart.',
        'CMD\'ers weten welke methodes ze in kunnen zetten om zich in de ontwerpvraag te verdiepen.'
      ],
      'Ontwerpen': [
        'CMD’ers verkennen oplossingen voor de ontwerpvraag',
        'CMD’ers passen geschikte methoden en technieken toe om ideeën te ontwikkelen',
        'CMD’ers ontwikkelen concepten vanuit verschillende perspectieven'
      ],
      'Prototype & testen': [
        'CMD’ers maken prototypes die ontwerpkeuzes onderbouwen.',
        'CMD’ers werken iteratief aan het verbeteren van prototypes.',
        'CMD’ers passen test/evaluatie methoden toe om het ontwerp te verfijnen en te valideren.'
      ],
      'Verbinden': [
        'CMD’ers organiseren het ontwerpproces binnen teams door rollen en taken af te stemmen.'
      ],
      'Leren & reflecteren': [
        'CMD’ers reflecteren op hun ontwerpproces en de kwaliteit van hun ontwerp.',
        'CMD’ers vertalen reflectie en evaluatie naar verbeteringen in hun handelen.'
      ]
    }
  },
  'Technologie & AI': {
    title: 'Digitale technologie & AI',
    kernvraag: 'Hoe zetten we digitale technologie en AI doelgericht, verantwoord en betekenisvol in binnen ontwerp?',
    toelichting: 'Technologie & AI vormt een belangrijk deel van het ontwerpmateriaal van de CMD’er, naast analoge en hybride ontwerpvormen, en omvat zowel het ontwerpen en toepassen van digitale oplossingen als het begrijpen van trends en ontwikkelingen in een steeds verder digitaliserende wereld.',
    essentie: [
      'Basiskennis van digitale systemen, media en netwerken',
      'Werken met promps, algoritmen en AI-concepten op ontwerpniveau',
      'Prototyping (incl. no/low-code) als denk- en testinstrument',
      'Kritisch omgaan met automatisering, bias en transparantie'
    ],
    cruciaal: 'CMD’ers ontwerpen met en rond technologie. Dit speelveld voorkomt zowel technologische naïviteit als technologische dominantie.',
    koppeling: {
      'Context': [
        'CMD’ers onderzoeken en analyseren de mogelijkheden van relevante digitale technologieën en AI.'
      ],
      'Ontwerpen': [
        'CMD’ers experimenteren met digitale technologie en AI binnen het ontwerp.',
        'CMD’ers verkennen de betekenis van technologie als onderdeel van de ontwerpoplossing.'
      ],
      'Prototype & testen': [
        'CMD’ers werken digitale prototypes uit van low-fidelity tot high-fidelity.',
        'CMD’ers toetsen of het prototype voldoet aan technische eisen en randvoorwaarden.'
      ],
      'Verbinden': [
        'CMD’ers stemmen binnen teams technische, ontwerp- en gebruikersperspectieven op elkaar af en communiceren hierover met stakeholders.'
      ],
      'Leren & reflecteren': [
        'CMD’ers reflecteren op de inzet en impact van technologie en AI binnen hun ontwerp.',
        'CMD’ers evalueren hun aannames en blijven zich ontwikkelen in digitale toepassingen.'
      ]
    }
  },
  'Mens & Ervaring': {
    title: 'Mens & ervaring',
    kernvraag: 'Hoe ontwerpen we digitale oplossingen die aansluiten bij mensen, hun gedrag en hun leefcontext?',
    toelichting: 'Dit speelveld verankert de menselijke maat. De CMD’er begrijpt hoe mensen waarnemen, handelen en betekenis geven in interactie met (digitale) producten en diensten. Ontwerpbeslissingen zijn gebaseerd op inzicht in gebruik, context, diversiteit en inclusiviteit.',
    essentie: [
      'Inzicht in gedrag, perceptie, cognitie en ergonomie',
      'User research en co-creatie methoden',
      'Ontwerpen voor context (situatie, omgeving, devices)',
      'Inclusief en toegankelijk ontwerpen (standaarden, design systems)'
    ],
    cruciaal: 'Zonder dit speelveld wordt technologie leidend in plaats van ondersteunend. Hier wordt waarde voor mensen gerealiseerd.',
    koppeling: {
      'Context': [
        'CMD’ers brengen gebruikers, hun wensen en de gebruikscontext in kaart.',
        'CMD’ers zijn empatisch en kunnen zich te verplaatsen in ervaringen en perspectieven.'
      ],
      'Ontwerpen': [
        'CMD’ers verbinden doelen en wensen van gebruikers en stakeholders in conceptontwikkeling',
        'CMD’ers betrekken gebruikers en andere belanghebbenden bij het ontwerpproces.'
      ],
      'Prototype & testen': [
        'CMD’ers werken prototypes uit met aandacht voor gebruikerservaring.',
        'CMD’ers evalueren de gebruiksvriendelijkheid en beleving met gebruikers.'
      ],
      'Verbinden': [
        'CMD’ers betrekken gebruikers en andere belanghebbenden bij het ontwerpproces.',
        'CMD’ers organiseren samenwerking binnen teams vanuit aandacht voor menselijk gedrag, beleving en perspectief.'
      ],
      'Leren & reflecteren': [
        'CMD’ers verdiepen hun inzicht in menselijk gedrag, beleving en diversiteit en reflecteren daarop'
      ]
    }
  },
  'Organisatie & Strategie': {
    title: 'Organisatie & strategie',
    kernvraag: 'Hoe functioneert ontwerp binnen organisaties en hoe draagt het bij aan strategische doelen?',
    toelichting: 'Ontwerpen gebeurt altijd binnen een organisatorische en economische realiteit. CMD’ers begrijpen hoe ontwerp strategisch kan bijdragen aan waardecreatie en hoe ontwerp zich verhoudt tot processen, stakeholders en besluitvorming.',
    essentie: [
      'Inzicht in organisaties, processen en design maturity',
      'Project- en procesmatig werken',
      'Strategische positionering van ontwerp',
      'Waardecreatie: verdienmodellen, proposities en impact'
    ],
    cruciaal: 'Dit speelveld maakt CMD’ers effectief en geloofwaardig binnen professionele contexten, in-house én extern.',
    koppeling: {
      'Context': [
        'CMD’ers stellen zich op de hoogte van ontwikkelingen in de markt en organisaties',
        'CMD’ers verkennen de vraag achter de vraag van de opdrachtgever.'
      ],
      'Ontwerpen': [
        'CMD’ers bedenken alternatieven voor bestaande oplossingen en strategieën.'
      ],
      'Prototype & testen': [
        'CMD’ers houden rekening met draagvlak en implementatie binnen de organisatie.',
        'CMD’ers valideren de toegevoegde waarde van het ontwerp voor de organisatie.'
      ],
      'Verbinden': [
        'CMD’ers werken samen met opdrachtgevers en teamleden en stemmen rollen, verwachtingen en besluitvorming af.'
      ],
      'Leren & reflecteren': [
        'CMD’ers reflecteren op hun rol en effectiviteit binnen een professionele context.',
        'CMD’ers gebruiken evaluatie om hun professionele handelen binnen een organisatie te versterken.'
      ]
    }
  },
  'Maatschappij & Toekomst': {
    title: 'Maatschappij & toekomst',
    kernvraag: 'Welke maatschappelijke en toekomstige gevolgen heeft wat we ontwerpen, en welke rol nemen we daarin?',
    toelichting: 'Dit speelveld richt zich op verantwoord, kritisch en toekomstgericht ontwerpen. CMD’ers begrijpen dat (digitale) ontwerpen waarden, machtsverhoudingen en toekomstbeelden beïnvloeden. Ze kunnen deze effecten onderzoeken, bevragen en verbeelden.',
    essentie: [
      'Inzicht in de ethische, sociale en ecologische gevolgen van ontwerp',
      'Toekomstgericht denken en toekomstverkenning',
      'Kritisch en verantwoord reflecteren in relatie tot samenleving en toekomst'
    ],
    cruciaal: 'Hier wordt CMD meer dan probleemoplosser: dit speelveld positioneert de CMD’er als verantwoord vormgever van de toekomst.',
    koppeling: {
      'Context': [
        'CMD’ers identificeren belangen van menselijk en niet menselijke stakeholders',
        'CMD’ers volgen en analyseren maatschappelijke ontwikkelingen.'
      ],
      'Ontwerpen': [
        'CMD’ers houden rekening met de maatschappelijke impact van hun concepten.',
        'CMD’ers gebruiken creatieve methoden om bestaande verhoudingen te verkennen.'
      ],
      'Prototype & testen': [
        'CMD’ers verkennen maatschappelijke dilemma’s met scenario’s en prototypen.',
        'CMD’ers evalueren langetermijneffecten met experts en stakeholders.'
      ],
      'Verbinden': [],
      'Leren & reflecteren': [
        'CMD’ers reflecteren op de maatschappelijke en toekomstige impact van hun ontwerp.',
        'CMD’ers onderzoeken hun verantwoordelijkheid als ontwerper in de samenleving.'
      ]
    }
  },
  'Onderzoekend Vermogen': {
    title: 'Onderzoekend vermogen',
    kernvraag: 'Hoe onderbouwt en versterkt onderzoek het ontwerpproces en de kwaliteit van ontwerp beslissingen?',
    toelichting: 'Onderzoekend vermogen beschrijft het vermogen van de CMD’er om systematisch, kritisch en doelgericht kennis te vergaren, te duiden en toe te passen binnen ontwerpvraagstukken. Onderzoek is geen losstaand traject, maar een integraal onderdeel van alle leeruitkomsten. De CMD’er gebruikt onderzoek om problemen te begrijpen, keuzes te verantwoorden, ontwerpen te verbeteren en impact inzichtelijk te maken.',
    essentie: [
      'Onderzoeksvaardigheden passend bij ontwerppraktijk (kwalitatief, kwantitatief, ontwerpend onderzoek)',
      'Probleem- en vraagformulering in context',
      'Selecteren en toepassen van passende onderzoeksmethoden',
      'Analyseren, interpreteren en vertalen van onderzoeksresultaten naar ontwerpkeuzes',
      'Kritische reflectie op validiteit, betrouwbaarheid en beperkingen',
      'Verantwoorden van ontwerpbeslissingen met theorie, data en evidence'
    ],
    cruciaal: 'Zonder onderzoekend vermogen blijft ontwerp intuïtief en moeilijk overdraagbaar. Dit speelveld borgt dat CMD’ers bewuste, navolgbare en beargumenteerde keuzes maken en zich professioneel kunnen verhouden tot opdrachtgevers, stakeholders en vakgenoten.',
    koppeling: {
      'Context': [
        'CMD’ers formuleren onderzoeksvragen passend bij de ontwerpcontext.',
        'CMD’ers gebruiken onderzoek om ontwerpkeuzes te onderbouwen.'
      ],
      'Ontwerpen': [
        'CMD’ers selecteren en passen passende onderzoeksmethoden toe binnen het ontwerpproces.'
      ],
      'Prototype & testen': [
        'CMD’ers analyseren en interpreteren onderzoeks- en testresultaten.'
      ],
      'Verbinden': [],
      'Leren & reflecteren': [
        'CMD’ers reflecteren op de kwaliteit en beperkingen van hun onderzoek.'
      ]
    }
  }
};
