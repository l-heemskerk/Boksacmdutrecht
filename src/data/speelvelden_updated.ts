// Tijdelijk bestand om de verbeterde speelveld bullets te bouwen
// Dit zal speelvelden.ts vervangen

import { Speelveld, SpeelveldBullet } from './speelvelden';
import { LearningOutcome } from '../types/curriculum';

// Uitgebreide speelveld bullets met activiteiten koppelingen voor Semester 1
export const semester1Bullets = {
  'Design': {
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
  
  'Technologie & AI': {
    context: [
      { text: 'Verkent digitale tools en basis technologie', activity: 'Interaction Design' },
      { text: 'Herkent technische mogelijkheden in eenvoudige context', activity: 'Interaction Design' },
      { text: 'Maakt kennis met HTML/CSS basis', activity: 'Interaction Design' },
      { text: 'Leert over verschillende digitale platformen' }
    ],
    ontwerpen: [
      { text: 'Gebruikt standaard digitale tools voor ontwerp', activity: 'Visual Design' },
      { text: 'Experimenteert met basis interacties', activity: 'Interaction Design' },
      { text: 'Werkt met Figma voor interface design', activity: 'Interaction Design' },
      { text: 'Leert Adobe Creative Suite basis', activity: 'Visual Design' }
    ],
    prototype: [
      { text: 'Bouwt eenvoudige digitale prototypes (HTML/CSS)', activity: 'Interaction Design' },
      { text: 'Test basis functionaliteit', activity: 'Interaction Design' },
      { text: 'Maakt clickable prototypes in Figma', activity: 'Interaction Design' },
      { text: 'Experimenteert met video editing', activity: 'Hackathon Film' }
    ],
    verbinden: [
      { text: 'Communiceert over technische keuzes in eigen woorden', activity: 'Interaction Design' },
      { text: 'Werkt samen met peers in technisch project', activity: 'Hackathon Film' },
      { text: 'Deelt technische uitdagingen en oplossingen' }
    ],
    reflecteren: [
      { text: 'Reflecteert op eigen technische vaardigheden', activity: 'Interaction Design' },
      { text: 'Documenteert geleerde tools en technieken', activity: 'Basecamp' }
    ]
  },
  
  'Mens & Ervaring': {
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
  
  'Maatschappij & Toekomst': {
    context: [
      { text: 'Herkent basis maatschappelijke thema\'s in ontwerp', activity: 'Social Design' },
      { text: 'Verkent actuele maatschappelijke vraagstukken', activity: 'Social Design' },
      { text: 'Onderzoekt sociale doelgroepen', activity: 'Social Design' },
      { text: 'Begrijpt context van sociale vraagstukken', activity: 'Social Design' }
    ],
    ontwerpen: [
      { text: 'Ontwerpt met bewustzijn van sociale impact', activity: 'Social Design' },
      { text: 'Overweegt inclusie in ontwerpkeuzes', activity: 'Visual Design' },
      { text: 'Werkt aan ontwerpen voor maatschappelijke vraagstukken', activity: 'Social Design' },
      { text: 'Past co-creatie toe', activity: 'Social Design' }
    ],
    prototype: [
      { text: 'Test oplossingen met aandacht voor toegankelijkheid', activity: 'Social Design' },
      { text: 'Observeert sociale effecten', activity: 'Social Design' },
      { text: 'Maakt fysieke prototypes voor sociale context', activity: 'Social Design' },
      { text: 'Test met diverse doelgroepen' }
    ],
    verbinden: [
      { text: 'Luistert naar verschillende perspectieven', activity: 'Basecamp' },
      { text: 'Respecteert diversiteit in teamverband', activity: 'Social Design' },
      { text: 'Werkt samen met maatschappelijke partners', activity: 'Social Design' },
      { text: 'Communiceert over waarden en normen', activity: 'Social Design' }
    ],
    reflecteren: [
      { text: 'Reflecteert op eigen waarden en normen', activity: 'Social Design' },
      { text: 'Denkt na over maatschappelijke rol als ontwerper', activity: 'Social Design' }
    ]
  },
  
  'Organisatie & Strategie': {
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
  
  'Onderzoekend Vermogen': {
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
  }
};

// Semester 2 bullets
export const semester2Bullets = {
  'Design': {
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
  
  'Technologie & AI': {
    context: [
      { text: 'Analyseert technische mogelijkheden en beperkingen', activity: 'Opdrachtgeversproject 1' },
      { text: 'Begrijpt impact van technische keuzes op ontwerp', activity: 'Opdrachtgeversproject 1' },
      { text: 'Onderzoekt geschikte technische oplossingen' },
      { text: 'Verkent nieuwe tools en platforms', activity: 'Workshopweek' }
    ],
    ontwerpen: [
      { text: 'Integreert technologie bewust in conceptontwikkeling', activity: 'Opdrachtgeversproject 1' },
      { text: 'Gebruikt digitale tools gericht en effectief', activity: 'Opdrachtgeversproject 2' },
      { text: 'Maakt technische haalbaarheidsanalyses', activity: 'Eigen Project' }
    ],
    prototype: [
      { text: 'Bouwt interactieve prototypes (web, apps)', activity: 'Opdrachtgeversproject 1' },
      { text: 'Test usability en performance', activity: 'Opdrachtgeversproject 1' },
      { text: 'Duidt technische uitkomsten', activity: 'Opdrachtgeversproject 2' },
      { text: 'Realiseert filmische producties', activity: 'Film-hackathon' }
    ],
    verbinden: [
      { text: 'Legt technische concepten uit aan niet-technische stakeholders', activity: 'Opdrachtgeversproject 1' },
      { text: 'Werkt samen in mixed teams', activity: 'Opdrachtgeversproject 2' },
      { text: 'Deelt technische kennis met peers', activity: 'Workshopweek' }
    ],
    reflecteren: [
      { text: 'Reflecteert op technologie gebruik en ethische aspecten', activity: 'Opdrachtgeversproject 2' },
      { text: 'Evalueert eigen technische vaardigheden' }
    ]
  },
  
  'Mens & Ervaring': {
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
  
  'Maatschappij & Toekomst': {
    context: [
      { text: 'Analyseert maatschappelijke trends en ontwikkelingen', activity: 'Opdrachtgeversproject 1' },
      { text: 'Verdiept zich in sociale en ecologische vraagstukken', activity: 'Eigen Project' },
      { text: 'Begrijpt stakeholder belangen', activity: 'Opdrachtgeversproject 1' },
      { text: 'Onderzoekt sociale impact van ontwerp' }
    ],
    ontwerpen: [
      { text: 'Ontwerpt met oog voor inclusie en duurzaamheid', activity: 'Opdrachtgeversproject 2' },
      { text: 'Weegt verschillende waarden mee in ontwerp', activity: 'Eigen Project' },
      { text: 'Houdt rekening met diverse doelgroepen', activity: 'Opdrachtgeversproject 1' }
    ],
    prototype: [
      { text: 'Test oplossingen op ongewenste effecten', activity: 'Opdrachtgeversproject 2' },
      { text: 'Gebruikt scenario\'s voor impact analyse', activity: 'Opdrachtgeversproject 2' },
      { text: 'Valideert sociale waarde', activity: 'Eigen Project' }
    ],
    verbinden: [
      { text: 'Faciliteert gesprekken over waarden', activity: 'Opdrachtgeversproject 2' },
      { text: 'Werkt samen met diverse groepen', activity: 'Opdrachtgeversproject 1' },
      { text: 'Communiceert over maatschappelijke impact' }
    ],
    reflecteren: [
      { text: 'Reflecteert op eigen rol als ontwerper in samenleving', activity: 'Eigen Project' },
      { text: 'Evalueert ethische aspecten van ontwerp', activity: 'Opdrachtgeversproject 2' }
    ]
  },
  
  'Organisatie & Strategie': {
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
  
  'Onderzoekend Vermogen': {
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
  }
};

// Placeholder voor semester 3-7 (zonder koppelingen voor nu)
function createPlaceholderBullets(semesterNum: number): Record<string, SpeelveldBullet[]> {
  return {
    context: [{ text: `Semester ${semesterNum} - Nog geen koppelingen geconfigureerd` }],
    ontwerpen: [{ text: `Semester ${semesterNum} - Nog geen koppelingen geconfigureerd` }],
    prototype: [{ text: `Semester ${semesterNum} - Nog geen koppelingen geconfigureerd` }],
    verbinden: [{ text: `Semester ${semesterNum} - Nog geen koppelingen geconfigureerd` }],
    reflecteren: [{ text: `Semester ${semesterNum} - Nog geen koppelingen geconfigureerd` }]
  };
}
