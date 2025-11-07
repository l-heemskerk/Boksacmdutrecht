import { LearningOutcome } from '../types/curriculum';

interface HoudingData {
  semester: number;
  outcome: LearningOutcome;
  description: string;
}

// Houding formulering per semester en leeruitkomst
const houdingData: HoudingData[] = [
  // Jaar 1, Semester 1
  {
    semester: 1,
    outcome: 'context',
    description: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.'
  },
  {
    semester: 1,
    outcome: 'ontwerpen',
    description: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.'
  },
  {
    semester: 1,
    outcome: 'prototype',
    description: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.'
  },
  {
    semester: 1,
    outcome: 'verbinden',
    description: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.'
  },
  {
    semester: 1,
    outcome: 'reflecteren',
    description: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.'
  },

  // Jaar 1, Semester 2
  {
    semester: 2,
    outcome: 'context',
    description: 'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes. Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders.'
  },
  {
    semester: 2,
    outcome: 'ontwerpen',
    description: 'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting. Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten. Verder werken de studenten aan creative confidence.'
  },
  {
    semester: 2,
    outcome: 'prototype',
    description: 'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen. Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen. Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt.'
  },
  {
    semester: 2,
    outcome: 'verbinden',
    description: 'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking. Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek.'
  },
  {
    semester: 2,
    outcome: 'reflecteren',
    description: 'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht. Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen. Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten.'
  },

  // Jaar 2, Semester 3
  {
    semester: 3,
    outcome: 'context',
    description: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    outcome: 'ontwerpen',
    description: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    outcome: 'prototype',
    description: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    outcome: 'verbinden',
    description: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    outcome: 'reflecteren',
    description: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Jaar 2, Semester 4
  {
    semester: 4,
    outcome: 'context',
    description: 'Studenten beargumenteren onderzoekskeuzes met theorie, herdefiniëren problemen op basis van inzichten en zoeken waardegedreven naar kansen voor belanghebbenden. Ze koppelen onderzoek aan beproefde methoden en durven van koers te veranderen.'
  },
  {
    semester: 4,
    outcome: 'ontwerpen',
    description: 'Studenten tonen intellectuele eerlijkheid door keuzes transparant te onderbouwen en nederigheid om van anderen te leren. Ze balanceren assertiviteit in hun visie met luisterbereidheid naar stakeholders. Verantwoordelijkheidsbesef voor de impact van hun ontwerpen groeit, evenals moed om moeilijke ontwerpdilemma\'s aan te pakken.'
  },
  {
    semester: 4,
    outcome: 'prototype',
    description: 'Studenten nemen verantwoordelijkheid voor de betrouwbaarheid van hun testopzet en tonen transparantie in hun methodiekeuzes. Ze balanceren efficiëntie in testprocessen met zorgvuldigheid in uitvoering. Zelfkritische reflectie op testbeperkingen combineert met zelfvertrouwen in hun bevindingen en aanbevelingen.'
  },
  {
    semester: 4,
    outcome: 'verbinden',
    description: 'Studenten fungeren als bruggenbouwers tussen verschillende disciplines met professioneel gezag. Ze tonen mentale flexibiliteit bij het schakelen tussen verschillende communicatiestijlen per doelgroep. Hun leiderschapsrol in complexe projecten wordt ondersteund door betrouwbaarheid en authentieke professionele autoriteit.'
  },
  {
    semester: 4,
    outcome: 'reflecteren',
    description: 'Studenten ontwikkelen zelfreflectie over hun professionele identiteit en toekomstige ontwikkeling. Ze tonen leiderschapsmentaliteit in hun eigen leerproces en inspireren anderen door hun leerhouding. Ze verbinden persoonlijke passies met professionele doelen en tonen intrinsieke motivatie en ontwikkeling als CMD\'er.'
  }
];

export function getHoudingForOutcome(outcome: LearningOutcome, semester?: number): string {
  if (semester) {
    const item = houdingData.find(h => h.outcome === outcome && h.semester === semester);
    return item?.description || '';
  }
  
  // Return combined description for all semesters if no specific semester is provided
  const items = houdingData.filter(h => h.outcome === outcome);
  return items.map(item => `Semester ${item.semester}: ${item.description}`).join('\n\n');
}

export function getHoudingBySemester(semester: number): HoudingData[] {
  return houdingData.filter(h => h.semester === semester);
}

export function getAllHoudingData(): HoudingData[] {
  return houdingData;
}
