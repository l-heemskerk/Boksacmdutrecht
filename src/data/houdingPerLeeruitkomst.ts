import { LearningOutcome } from '../types/curriculum';

interface HoudingData {
  semester: number;
  outcome: LearningOutcome;
  description: string | string[];
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
    description: 'Studenten durven risicos te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.'
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
    description: 'Studenten tonen intellectuele eerlijkheid door keuzes transparant te onderbouwen en nederigheid om van anderen te leren. Ze balanceren assertiviteit in hun visie met luisterbereidheid naar stakeholders. Verantwoordelijkheidsbesef voor de impact van hun ontwerpen groeit, evenals moed om moeilijke ontwerpdilemmas aan te pakken.'
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
    description: 'Studenten ontwikkelen zelfreflectie over hun professionele identiteit en toekomstige ontwikkeling. Ze tonen leiderschapsmentaliteit in hun eigen leerproces en inspireren anderen door hun leerhouding. Ze verbinden persoonlijke passies met professionele doelen en tonen intrinsieke motivatie en ontwikkeling als CMDer.'
  },

  // Jaar 3, Semester 5 (Praktijk)
  {
    semester: 5,
    outcome: 'context',
    description: 'De student toont een professionele, nieuwsgierige en onderzoekende houding binnen de organisatie. Hij/zij verdiept zich actief in processen, gebruikers en stakeholders, vraagt door waar nodig en houdt rekening met organisatorische belangen en beperkingen. De student gaat zorgvuldig om met verwachtingen en toont verantwoordelijkheid voor de kwaliteit en zorgvuldigheid van de contextanalyse.'
  },
  {
    semester: 5,
    outcome: 'ontwerpen',
    description: 'De student ontwerpt met eigenaarschap en autonomie. Hij/zij maakt bewuste keuzes op basis van onderzoek en feedback, toont creativiteit binnen realistische kaders en blijft flexibel bij veranderende prioriteiten. De student durft een duidelijke richting voor te stellen, maar staat open voor expertise van collegas en de visie van de organisatie.'
  },
  {
    semester: 5,
    outcome: 'prototype',
    description: 'De student toont een lerende, iteratieve houding: durft aannames te toetsen, organiseert tests passend bij de praktijk en verwerkt testresultaten eerlijk en nauwkeurig. De student gaat professioneel om met feedback, ook wanneer deze kritisch is, en past ontwerpen transparant aan op basis van bevindingen.'
  },
  {
    semester: 5,
    outcome: 'verbinden',
    description: 'De student communiceert professioneel met collegas, opdrachtgevers en andere betrokkenen. Hij/zij stemt actief af, zoekt samenwerking op en bewaakt een constructieve, respectvolle werkrelatie. De student draagt verantwoordelijkheid binnen het team, vraagt tijdig hulp en geeft en ontvangt feedback op een volwassen manier.'
  },
  {
    semester: 5,
    outcome: 'reflecteren',
    description: 'De student neemt regie over zijn/haar eigen ontwikkeling binnen de organisatie. Hij/zij stelt zelf leerdoelen op, vraagt actief om feedback en reflecteert realistisch op eigen handelen. De student toont zelfbewustzijn, bekijkt fouten als leerkansen en verbindt persoonlijke groei zichtbaar aan de professionele context van de stage.'
  },

  // Jaar 3, Semester 6 (Specialisaties)
  {
    semester: 6,
    outcome: 'context',
    description: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    outcome: 'ontwerpen',
    description: 'Studenten ontwerpen autonoom en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    outcome: 'prototype',
    description: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    outcome: 'verbinden',
    description: 'Studenten nemen een leidende en verbindende rol in multidisciplinaire teams. Ze communiceren professioneel, transparant en empathisch, en stemmen belangen van verschillende stakeholders af. Ze tonen openheid voor diversiteit, steunen peers, en bewaken een veilige, constructieve feedbackcultuur. Hun houding kenmerkt zich door betrouwbaarheid, authenticiteit en verantwoordelijk leiderschap.'
  },
  {
    semester: 6,
    outcome: 'reflecteren',
    description: 'Studenten werken zelfsturend en proactief aan hun ontwikkeling als ontwerper. Ze tonen kritische zelfreflectie op hun professionele identiteit, waarden en ambities binnen het vakgebied. Ze verbinden persoonlijke motivatie met maatschappelijke verantwoordelijkheid en tonen ethische en geëngageerde betrokkenheid bij hun werk.'
  },

  // Jaar 4, Semester 7 (Afstuderen)
  {
    semester: 7,
    outcome: 'context',
    description: 'De afstudeerder benadert complexe vraagstukken met een professionele, onderzoekende en kritische houding. Hij/zij toont eigenaarschap in het afbakenen en doorgronden van de context, vraagt door op aannames en onderzoekt belangen van alle relevante stakeholders. De student gaat zorgvuldig en ethisch om met data en toont bewustzijn van maatschappelijke en organisatorische consequenties van keuzes. Daarbij wordt verantwoordelijkheid genomen voor de kwaliteit, diepgang en betrouwbaarheid van het onderzoek.'
  },
  {
    semester: 7,
    outcome: 'ontwerpen',
    description: 'De afstudeerder ontwerpt met autonomie, visie en een volwassen vakinhoudelijke houding. Hij/zij durft duidelijke ontwerpkeuzes te maken en verantwoordt deze met overtuiging richting professionals en opdrachtgevers. De student balanceert creativiteit met realisme en toont flexibiliteit wanneer nieuwe inzichten of veranderende omstandigheden dat vragen. Ontwerpen wordt gezien als een verantwoordelijk proces, waarin de student openstaat voor kritiek en steeds naar de beste oplossing blijft streven.'
  },
  {
    semester: 7,
    outcome: 'prototype',
    description: 'De afstudeerder toont een transparante, nauwkeurige en iteratieve houding in het prototypen en testen. Hij/zij gaat professioneel om met feedback en onderzoekt kritisch de werking van het ontwerp, ook wanneer resultaten confronterend zijn. De student toont discipline in het zorgvuldig documenteren en analyseren van tests en blijft gericht op verbeteren, valideren en afwegen. Integriteit, eerlijkheid en doorzettingsvermogen kenmerken de houding in dit deel van het proces.'
  },
  {
    semester: 7,
    outcome: 'verbinden',
    description: 'De afstudeerder communiceert volwassen, respectvol en professioneel binnen de organisatie en met externe stakeholders. Hij/zij stemt actief af, bewaakt verwachtingen en neemt initiatief in samenwerking. De student toont empathie voor verschillende disciplines en belangen en beweegt zich soepel tussen rollen en gesprekspartners. Feedback wordt zowel constructief gegeven als ontvangen, en de student draagt zichtbaar bij aan een professionele, collegiale samenwerking.'
  },
  {
    semester: 7,
    outcome: 'reflecteren',
    description: 'De afstudeerder neemt volledige verantwoordelijkheid voor zijn/haar eigen ontwikkeling en handelen. Hij/zij reflecteert kritisch en eerlijk op keuzes, resultaten en professionele identiteit, en koppelt inzichten aan concrete verbeteringen. De student toont zelfbewustzijn, realisme en intrinsieke motivatie om verder te groeien binnen het vakgebied. Tegelijk wordt een ethische en maatschappelijk bewuste houding zichtbaar, waarbij de student nadenkt over de bredere impact van het ontwerp en het eigen professionele handelen.'
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
