import { LearningOutcomeProgression } from '../types/curriculum';

// Zelcom niveau mapping per semester
const zelcomLevelMapping: Record<number, string> = {
  1: 'Beginnend - onder begeleiding',
  2: 'Gevorderd - onder toezicht',
  3: 'Bekwaam - zelfstandig',
  4: 'Bekwaam - zelfstandig',
  5: 'Vaardig - adviserend',
  6: 'Expert - specialistisch',
  7: 'Meester - autonoom'
};

export const learningOutcomeProgressions: LearningOutcomeProgression[] = [
  // ==================== BASE - Semester 1 ====================
  {
    semester: 1,
    semesterName: 'BASE',
    outcome: 'context',
    description: 'Je verzamelt informatie over de context van de opdracht en de belanghebbenden ten behoeve van je eigen ontwerp. Je formuleert en onderbouwt welke inzichten je hieruit hebt opgedaan voor jouw ontwerp.',
    zelcomLevel: zelcomLevelMapping[1]
  },
  {
    semester: 1,
    semesterName: 'BASE',
    outcome: 'ontwerpen',
    description: 'Je experimenteert met mogelijke oplossingen vanuit verschillende perspectieven, op basis van onderzoeken. Daarmee creëer je, op iteratieve wijze, concepten en ontwerpen.',
    zelcomLevel: zelcomLevelMapping[1]
  },
  {
    semester: 1,
    semesterName: 'BASE',
    outcome: 'prototype',
    description: 'Je creëert (low- en high-fi) prototypes en op basis van een testplan test je herhaaldelijk bij belanghebbenden. Je presenteert op verschillende manieren en in verschillende stijlen.',
    zelcomLevel: zelcomLevelMapping[1]
  },
  {
    semester: 1,
    semesterName: 'BASE',
    outcome: 'verbinden',
    description: 'Je geeft en ontvangt feedback. Je organiseert het samenwerkingsproces volgens aangereikte methoden, daarin houd je rekening met je team.',
    zelcomLevel: zelcomLevelMapping[1]
  },
  {
    semester: 1,
    semesterName: 'BASE',
    outcome: 'reflecteren',
    description: 'Je geeft richting aan het eigen leerproces met behulp van ontwerpen feedback en opgedane kennis. Je past diverse reflectiemethodes toe om tot inzicht in jouw eigen leerproces.',
    zelcomLevel: zelcomLevelMapping[1]
  },
  
  // ==================== CHALLENGE - Semester 2 ====================
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    outcome: 'context',
    description: 'Je selecteert zelf verschillende onderzoeksmethodes, past deze op relevante momenten in het proces informatie te verkrijgen over de context van de opdracht en de belanghebbenden. Je formuleert en onderbouwt welke richtinggevende inzichten je hieruit hebt opgedaan voor jouw ontwerp.',
    zelcomLevel: zelcomLevelMapping[2]
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    outcome: 'ontwerpen',
    description: 'Je experimenteert met mogelijke oplossingen vanuit verschillende perspectieven, op basis van onderzoeken en onderbouwt de keuzes in je ontwerp. Daarmee creëer je, op iteratieve wijze, onderscheidende concepten en ontwerpen met behulp van strategieën, theorieën en methodes.',
    zelcomLevel: zelcomLevelMapping[2]
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    outcome: 'prototype',
    description: 'Je creëert prototypes en op basis van een testplan evalueer je herhaaldelijk bij belanghebbenden. Je genereert waardevolle inzichten vanuit deze tests, ze presenteert op verschillende manieren en in verschillende stijlen en je kunt ordenen en informeren en inspireren.',
    zelcomLevel: zelcomLevelMapping[2]
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    outcome: 'verbinden',
    description: 'Je toont initiatief om feedback te geven, te ontvangen en kennnis te delen. Je organiseert het samenwerkingsproces zelf volgens passende methoden, daarin houd je rekening met de belanghebbeden.',
    zelcomLevel: zelcomLevelMapping[2]
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    outcome: 'reflecteren',
    description: 'Je geeft richting aan het eigen leerproces met behulp van ontwerpen feedback en opgedane kennis en eigen leerdoelen. Je neemt een verantwoordelijkheid voor het verloop en de uitkomsten van het leerproces door te reflecteren.',
    zelcomLevel: zelcomLevelMapping[2]
  },
  
  // ==================== EXPLORE - Semester 3 ====================
  {
    semester: 3,
    semesterName: 'EXPLORE',
    outcome: 'context',
    description: 'Je selecteert passende theorieën en onderzoeksmethodes, past deze op controleerbare wijze toe om informatie te verkrijgen over de context van de opdracht en de belanghebbeden. Je analyseert de resultaten om tot een afbakening van een probleem te komen en weet deze op professionele wijze te communiceren. Je komt hiermee op iteratieve wijze tot inzichten en bepaalt op basis hiervan de consequenties voor jouw ontwerp.',
    zelcomLevel: zelcomLevelMapping[3]
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    outcome: 'ontwerpen',
    description: 'Beschouwen is iteratief en je onderbouwt de keuzes in je ontwerpproces. Je werken verschillende oplossingsrichtingen en selecteert relevante oplossingen. Op basis van onderzoek vanuit verschillende perspectieven en belangen ga je actief op zoek naar originaliteit en ontwikkel je onderscheidende concepten. Je houdt rekening met de impact van je oplossingen voor belanghebbenden.',
    zelcomLevel: zelcomLevelMapping[3]
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    outcome: 'prototype',
    description: 'Je creëert verschillende prototypes waarmee je (e)indzichtelijk vanuit een test, valideert en evalueert. Je prototypes zijn in het stadium bij aan het (iteratief ontwikkelen van je ontwerp. Je presenteert je producten op een inzichtelijke en overtuigende manier aan belanghebbenden en kunt de keuzes in je proces beargumenteren. Je houdt daarbij aantoonbaar rekening met de doelen en verwachting van je ontwerp en uitvoerbaarheid van je ontwerp.',
    zelcomLevel: zelcomLevelMapping[3]
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    outcome: 'verbinden',
    description: 'Je geeft actief feedback en initieert kennisdeling. Je stuurt het samenwerkingsproces bij vanuit de leerbehoefte en expertises van je team. Je betrekt belanghebbenden bij het ontwerpproces.',
    zelcomLevel: zelcomLevelMapping[3]
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    outcome: 'reflecteren',
    description: 'Je geeft richting aan je eigen leerproces en stuurt waar nodig bij om jezelf te ontwikkelen in de gewenste professionele en persoonlijke richting. Daarbij betrekt je actief docenten, experts en peers. Je neemt verantwoordelijkheid voor je leerproces door te reflecteren en daaruit nieuwe handelingsperspectieven te formuleren.',
    zelcomLevel: zelcomLevelMapping[3]
  },
  
  // ==================== CONNECT - Semester 4 ====================
  {
    semester: 4,
    semesterName: 'CONNECT',
    outcome: 'context',
    description: 'Je selecteert en beargumenteert passende theorieën en onderzoeksmethodes en controleerbare, betrouwbare en valide wijze toe om informatie te verkrijgen over de context van de opdracht en belanghebbeden, te analyseren de resultaten om tot een handelingsreflectie of afbakening van een probleem te komen en weet dit op professionele wijze te communiceren. Je komt hiermee op iteratieve wijze tot inzichten, ziet kansen om waarde te creëren voor de belanghebbenden en bepaalt op basis hiervan de consequenties voor jouw ontwerp.',
    zelcomLevel: zelcomLevelMapping[4]
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    outcome: 'ontwerpen',
    description: 'Je ontwerpproces is iteratief en navolgbaar. Je selecteert en beargumenteert je ontwerplrategie waarin je actief ook naar verschillenden en originele oplossingsrichtingen. Je selecteert relevante oplossingen aan de hand van beproefde methodes en je baseert je keuzes op relevante theorieën. Op basis van onderzoek vanuit verschillende perspectieven en belangen ontwikkel je vernieuwende concepten. Je houdt rekening met de impact van je oplossingen voor belanghebbenden.',
    zelcomLevel: zelcomLevelMapping[4]
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    outcome: 'prototype',
    description: 'Je creëert verschillende prototypes waarmee je het ontwerpen kunt testen en evalueren. Je voegt elke iteratie een passende prototypemethodes bij ontwerp toe. Je presenteert je producten op een inzichtelijke en overtuigende manier aan belanghebbenden en kunt de keuzes in je proces beargumenteren. Je houdt daarbij aantoonbaar rekening met de doelen en verwachting van je ontwerp en kunt duiden welke resultaten in ontwerp opleveren voor diverse belanghebbenden.',
    zelcomLevel: zelcomLevelMapping[4]
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    outcome: 'verbinden',
    description: 'Je geeft en zoekt actief feedback en neemt verantwoordelijkheid voor leersituaties (je stuurt het samenwerkingsproces bij) vanuit de leerbehoefte en expertises van je team en stelt je op als verbinder tussen verschillende disciplines en belangen. Je betrekt de relevante belanghebbenden bij het ontwerpproces.',
    zelcomLevel: zelcomLevelMapping[4]
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    outcome: 'reflecteren',
    description: 'Je geeft richting aan je eigen leerproces vanuit een gewenste professionele identiteit en een visie op het CMD-vakgebied. Daarbij betrekt je actief docenten, experts en peers. Je neemt verantwoordelijkheid voor je leerproces door effectief te reflecteren.',
    zelcomLevel: zelcomLevelMapping[4]
  },
  
  // ==================== PRAKTIJK - Semester 5 ====================
  {
    semester: 5,
    semesterName: 'PRAKTIJK',
    outcome: 'context',
    description: 'Je kunt als ontwerper de context van het probleem analyseren, hieruit inzichten formuleren, de belangen van belanghebbenden en de mogelijkheden van de technologie in kaart brengen en begrijpen. Je hebt een onderzoekende houding en kan passende relevante methodes gebruiken en je keuze onderbouwen. Hierbij werk je vanuit jouw eigen visie als ontwerper.',
    zelcomLevel: zelcomLevelMapping[5]
  },
  {
    semester: 5,
    semesterName: 'PRAKTIJK',
    outcome: 'ontwerpen',
    description: 'Je kunt op basis van inzichten uit je onderzoek tot passende concepten komen. Je kunt rekening houden met de belanghebbenden. Je versterkt iteratief verschillende oplossingen of (digitale) mogelijkheden en uitwerkingen. Je licht de impact van concepten en consequenties van het ontwerp toe. Je selecteert bestaande en eigen ontwerpstrategieën en -methoden en zet deze in. Je kunt zelfstandig en initiatiefrijk het ontwerpproces inrichten, plannen, uitvoeren, monitoren en beheren.',
    zelcomLevel: zelcomLevelMapping[5]
  },
  {
    semester: 5,
    semesterName: 'PRAKTIJK',
    outcome: 'prototype',
    description: 'Je geeft concepten vorm en concretiseert ideen in prototypes vanme in elke fase van uitwerking. Je maakt prototypes die inzicht geven (al kunnen bij de context en helpen om keuzes te maken. Je past evaluatiemethodes toe en het hermee maatschappelijke effecten en waarden vast. Je valideert resultaten die tijdens verschillende stadia van het ontwerpproces zijn ontstaan op hun waarde voor de belanghebbenden.',
    zelcomLevel: zelcomLevelMapping[5]
  },
  {
    semester: 5,
    semesterName: 'PRAKTIJK',
    outcome: 'verbinden',
    description: 'Je opereert in verschillende contexten en weet met verschillende belangen van team, opdrachtgever, community, maatschappij), rollen en disciplines met elkaar te verbinden. Je initieert een constructieve dialoog waar je consistente feedback geeft, verzamelt en verwerkt. Je maakt jouw proces inzichtelijk en overdraagbaar.',
    zelcomLevel: zelcomLevelMapping[5]
  },
  {
    semester: 5,
    semesterName: 'PRAKTIJK',
    outcome: 'reflecteren',
    description: 'Je hebt visie op het CMD-vakgebied, je weet waar je staat als CMD\'er en hoe je je zelfstandig verder ontwikkelt. Je organiseert het eigen leerproces met behulp van ontvangen feedback en eigen leerstrategie.',
    zelcomLevel: zelcomLevelMapping[5]
  },
  
  // ==================== SPECIALISATIE - Semester 6 ====================
  {
    semester: 6,
    semesterName: 'SPECIALISATIE',
    outcome: 'context',
    description: 'Je kunt als ontwerper de context van het probleem analyseren, hieruit inzichten formuleren, de belangen van belanghebbenden en de mogelijkheden van de technologie in kaart brengen en begrijpen. Je hebt een onderzoekende houding en kan passende relevante methodes gebruiken en je keuzes onderbouwen. Hierbij werk je vanuit jouw eigen visie als ontwerper.',
    zelcomLevel: zelcomLevelMapping[6]
  },
  {
    semester: 6,
    semesterName: 'SPECIALISATIE',
    outcome: 'ontwerpen',
    description: 'Je kunt op basis van inzichten uit je onderzoek tot passende concepten komen, hierbij rekening houdend met de belanghebbenden. Je verkent iteratief verschillende (analoge en/of digitale) mogelijkheden en uitwerkingen. Je licht de impact van concepten en consequenties van het ontwerp toe. Je selecteert bestaande en eigen ontwerpstrategieën en -methodes en zet deze in. Je kunt zelfstandig en initiatiefrijk het ontwerpproces inrichten, plannen, uitvoeren, monitoren en beheren.',
    zelcomLevel: zelcomLevelMapping[6]
  },
  {
    semester: 6,
    semesterName: 'SPECIALISATIE',
    outcome: 'prototype',
    description: 'Je geeft concepten vorm en concretiseert deze in prototypes in passende mate van uitwerking. Je maakt prototypes die inzicht verschaffen in de context en helpen om keuzes te maken. Je past evaluatiemethodes toe en stelt hiermee maatschappelijke effecten en waarden vast. Je valideert resultaten die tijdens verschillende stadia van het ontwerpproces zijn ontstaan op hun waarde voor de belanghebbenden.',
    zelcomLevel: zelcomLevelMapping[6]
  },
  {
    semester: 6,
    semesterName: 'SPECIALISATIE',
    outcome: 'verbinden',
    description: 'Je opereert in verschillende contexten en weet verschillende belangen van team, opdrachtgever, community, maatschappij, rollen en disciplines met elkaar te verbinden. Je initieert een constructieve dialoog waar je consistente feedback geeft, verzamelt en verwerkt. Je maakt jouw proces inzichtelijk en overdraagbaar.',
    zelcomLevel: zelcomLevelMapping[6]
  },
  {
    semester: 6,
    semesterName: 'SPECIALISATIE',
    outcome: 'reflecteren',
    description: 'Je hebt visie op het CMD-vakgebied, je weet waar je staat als CMD’er en hoe je je zelfstandig verder ontwikkelt. Je organiseert het eigen leerproces met behulp van ontvangen feedback en eigen leerstrategieën.',
    zelcomLevel: zelcomLevelMapping[6]
  },
  
  // ==================== AFSTUDEREN - Semester 7 ====================
  {
    semester: 7,
    semesterName: 'AFSTUDEREN',
    outcome: 'context',
    description: 'Je kunt als ontwerper de context van het probleem analyseren, hieruit inzichten formuleren, de belangen van belanghebbenden en de mogelijkheden van de technologie in kaart brengen en begrijpen. Je hebt een onderzoekende houding en kan passende relevante methodes gebruiken en je keuze onderbouwen. Hierbij werk je vanuit jouw eigen visie als ontwerper.',
    zelcomLevel: zelcomLevelMapping[7]
  },
  {
    semester: 7,
    semesterName: 'AFSTUDEREN',
    outcome: 'ontwerpen',
    description: 'Je kunt op basis van inzichten uit je onderzoek tot passende concepten komen. Je kunt rekening houden met de belanghebbenden. Je versterkt iteratief verschillende oplossingen of (digitale) mogelijkheden en uitwerkingen. Je licht de impact van concepten en consequenties van het ontwerp toe. Je selecteert bestaande en eigen ontwerpstrategieën en -methoden en zet deze in. Je kunt zelfstandig en initiatiefrijk het ontwerpproces inrichten, plannen, uitvoeren, monitoren en beheren.',
    zelcomLevel: zelcomLevelMapping[7]
  },
  {
    semester: 7,
    semesterName: 'AFSTUDEREN',
    outcome: 'prototype',
    description: 'Je geeft concepten vorm en concretiseert ideen in prototypes vanme in elke fase van uitwerking. Je maakt prototypes die inzicht geven (al kunnen bij de context en helpen om keuzes te maken. Je past evaluatiemethodes toe en het hermee maatschappelijke effecten en waarden vast. Je valideert resultaten die tijdens verschillende stadia van het ontwerpproces zijn ontstaan op hun waarde voor de belanghebbenden.',
    zelcomLevel: zelcomLevelMapping[7]
  },
  {
    semester: 7,
    semesterName: 'AFSTUDEREN',
    outcome: 'verbinden',
    description: 'Je opereert in verschillende contexten en weet met verschillende belangen van team, opdrachtgever, community, maatschappij), rollen en disciplines met elkaar te verbinden. Je initieert een constructieve dialoog waar je consistente feedback geeft, verzamelt en verwerkt. Je maakt jouw proces inzichtelijk en overdraagbaar.',
    zelcomLevel: zelcomLevelMapping[7]
  },
  {
    semester: 7,
    semesterName: 'AFSTUDEREN',
    outcome: 'reflecteren',
    description: 'Je hebt visie op het CMD-vakgebied, je weet waar je staat als CMD\'er en hoe je je zelfstandig verder ontwikkelt. Je organiseert het eigen leerproces met behulp van ontvangen feedback en eigen leerstrategie.',
    zelcomLevel: zelcomLevelMapping[7]
  }
];

// Helper function om progressies per leeruitkomst op te halen
export function getProgressionsByOutcome(outcome: string) {
  return learningOutcomeProgressions
    .filter(p => p.outcome === outcome)
    .sort((a, b) => a.semester - b.semester);
}

// Helper function om alle progressies van een semester op te halen
export function getProgressionsBySemester(semester: number) {
  return learningOutcomeProgressions.filter(p => p.semester === semester);
}
