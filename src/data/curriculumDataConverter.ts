// Converter functies voor curriculum data transformatie
import { semesterActiviteiten as rawData, speelveldenData as rawSpeelveldData } from './curriculumData';
import { semester6SpecializationData } from './semester6Specializations';
import { getZelcomNarrativeForSemester } from './zelcomData';
import type { SemesterActivity, SpeelveldData } from './curriculumData';
import { getProfessionalProductsForActivity, filterProductsByOutcome } from './professionalProductsByActivity';
import type { Semester, Activity, LearningOutcomeDetail, Specialization } from '../types/curriculum';

// Mapping van semester nummers naar nieuwe namen
export const semesterNaamMapping: Record<number, string> = {
  1: 'Base',
  2: 'Challenge',
  3: 'Explore',
  4: 'Connect',
  5: 'Praktijk semester',
  6: 'Specialisatie Semester',
  7: 'Afstuderen'
};

// Helper functie om beschrijving te genereren op basis van semester, activiteit en leeruitkomst
export function generateBeschrijving(semester: number, activiteit: string, leeruitkomst: string): string {
  const activityLower = activiteit.toLowerCase();
  
  // Specifieke beschrijvingen per activiteit type
  if (semester === 1) {
    if (activityLower.includes('basecamp')) return 'Introductieweek waarin studenten voor het eerst kennismaken met design thinking en samenwerken met het leerteam. Basecamp vormt het startpunt van de CMD-opleiding en is vooral gericht op kennismaking, samenwerken en een zachte landing bij CMD-Utrecht.';
    if (activityLower.includes('visual')) return 'Ontwikkeling van visuele ontwerpvaardigheden met focus op compositie, typografie en kleurgebruik. Studenten leren in projectvorm de basisprincipes van visuele communicatie die in Challenge verder worden toegepast in Opdrachtgeversprojecten.';
    if (activityLower.includes('interaction')) return 'Studenten leren ontwerpen van gebruiksvriendelijke interfaces en interacties met focus op UX en UI-principes. Deze basis elementen van IxD worden in Challenge toegepast en in Explore verder ontwikkeld in Persuasive Communication waar gedragsbeïnvloeding centraal staat.';
    if (activityLower.includes('social')) return 'Ontwerpen voor sociale impact met aandacht voor gebruikersbehoeften en immersieve fysieke ervaringen. Studenten maken kennis met mens-gericht ontwerpen wat de basis legt voor latere projecten zoals Opdrachtgeversproject (Challenge) en Persuasive Communication (Explore).';
    if (activityLower.includes('workshop')) return 'Kennismaking met nieuwe tools en methoden uit de ontwerppraktijk zoals prototyping tools, development frameworks en design software. Deze inzichten uit de workshops kunnen bij latere onderwijsactiviteiten ingezet worden en bereidt studenten voor op complexere projecten in Challenge en Explore.';
    if (activityLower.includes('film') || activityLower.includes('hackathon')) return 'In deze intensieve, kortlopende hackathon werken studenten interdisciplinair aan het bedenken, prototypen en presenteren van concrete oplossingen binnen een afgebakende opdracht. De hackathons stimuleren experiment, samenwerking en het doelgericht inzetten van vakinhoudelijke en technische expertise onder tijdsdruk.';
  }
  
  if (semester === 2) {
    if (activityLower.includes('opdrachtgever')) return 'Project voor een echte externe opdrachtgever waarbij studenten leren professioneel te werken en communiceren. Studenten passen de vaardigheden uit Base toe (zoals Visual Design en Interaction Design) en ontwikkelen nieuwe competenties in stakeholder management. Dit project bereidt voor op het complexere Opdrachtgeversproject in Explore waar meer zelfstandigheid en onderzoeksdiepte wordt verwacht.';
    if (activityLower.includes('eigen')) return 'Zelfgekozen project waarin studenten hun eigen interesses en ambities binnen het CMD-vakgebied kunnen verkennen. Studenten bepalen zelf de richting op basis van geleerde vaardigheden uit Base en Challenge. Dit ontwikkelt zelfstandigheid die essentieel is voor Eigen project (Explore), het Praktijksemester en uiteindelijk het Afstudeerproject.';
  }
  
  if (semester === 3) {
    if (activityLower.includes('game')) return 'Intensieve ontwerpweek waarin studenten in teams een volledig speelbaar spel ontwerpen en ontwikkelen. Deze hackathon bouwt voort op de Film-hackathon uit Base maar met toegenomen complexiteit op het gebied van interactie, techniek en storytelling. Studenten leren spelmechanismes, playtesting en agile development wat aansluit bij de Design hackathon in het Specialisatie Semester.';
    if (activityLower.includes('visual')) return 'Verdieping in visuele communicatie geïnspireerd door bekende ontwerpers zoals Wim Crouwel en Paula Scher. Dit project bouwt voort op Visual Design uit Base en Challenge maar voegt academische diepgang toe door onderzoek naar ontwerpfilosofie en -geschiedenis. Studenten ontwikkelen een eigen visuele identiteit voor een magazine wat hen voorbereidt op specialisaties zoals Brand Design.';
    if (activityLower.includes('opdrachtgever')) return 'Groter en complexer project voor externe opdrachtgever met meer nadruk op zelfstandigheid en strategisch denken. Dit project bouwt voort op Opdrachtgeversproject uit Challenge maar met hogere verwachtingen op het gebied van onderzoek, gebruikerstesten en strategische onderbouwing. Bereidt studenten voor op het Praktijksemester en Bureauproject (Specialisatie Semester).';
    if (activityLower.includes('persuasive')) return 'Leren ontwerpen van communicatie die gedrag beïnvloedt gebaseerd op wetenschappelijke gedragstheorieën en psychologie. Dit project bouwt voort op Interaction Design (Base) en Social Design (Base) maar introduceert een meer wetenschappelijke en strategische benadering van UX-design. Belangrijke voorbereiding voor alle specialisaties waar gedragsverandering centraal staat.';
    if (activityLower.includes('storytelling')) return 'Verkenning van narratieve structuren en storytelling in digitale media waarbij studenten leren verhalen te vertellen door interactie en beeld. Dit project combineert creatief werk met theoretische onderbouwing en bouwt voort op Film-hackathon (Base) en Game hackathon (Explore). Relevant voor alle specialisaties maar met name voor Immersive Design en Brand Design.';
    if (activityLower.includes('eigen')) return 'Zelfgekozen verdiepingsproject binnen een specifiek ontwerpdomein waarbij studenten volledig zelfstandig een project definiëren en uitvoeren. Dit project toont grotere zelfstandigheid dan Eigen project uit Challenge en bereidt studenten voor op de autonomie die vereist is tijdens het Praktijksemester en het Afstudeerproject.';
  }
  
  if (semester === 4) {
    return 'Activiteit waarin studenten verschillende disciplines en perspectieven verbinden in complexe vraagstukken. Dit semester integreert alle leerstof uit Base, Challenge en Explore en bereidt studenten voor op het Praktijksemester waar ze deze competenties in een professionele context toepassen.';
  }
  
  if (semester === 5) {
    if (activityLower.includes('praktijk') || activityLower.includes('stage')) 
      return 'Praktijkstage bij een bedrijf of organisatie waarin studenten hun competenties in een professionele werkomgeving toepassen. Studenten zetten alle vaardigheden uit Base, Challenge, Explore en Connect in en leren te navigeren in professionele contexten. Deze ervaring bereidt direct voor op keuze van specialisatie in het Specialisatie Semester en uiteindelijk het Afstudeerproject.';
  }
  
  if (semester === 6) {
    if (activityLower.includes('leren kijken')) return 'Introductie in de gekozen specialisatie met verkenning van het specifieke vakgebied, belangrijke ontwerpers en casestudies. Deze oriëntatie bereidt studenten voor op Design hackathon en Bureauproject binnen de specialisatie door theoretische en historische context te bieden.';
    if (activityLower.includes('brand')) return 'Verdiepend project binnen Brand Design specialisatie waarin studenten merkidentiteit, merkstrategie en visuele systemen ontwikkelen, voortbouwend op Visual Design uit Base en Explore.';
    if (activityLower.includes('immersive')) return 'Verdiepend project binnen Immersive Design specialisatie waarin studenten VR, AR en XR experiences ontwerpen, voortbouwend op Interaction Design (Base) en Storytelling (Explore).';
    if (activityLower.includes('digital')) return 'Verdiepend project binnen Digital Design specialisatie met focus op digital products en services, voortbouwend op Interaction Design (Base) en Persuasive Communication (Explore).';
    if (activityLower.includes('hackathon')) return 'Intensieve designweek binnen de gekozen specialisatie waarbij studenten in teams werken aan een complex designvraagstuk. Past het hackathon format uit Film-hackathon (Base) en Game hackathon (Explore) toe maar nu op specialistisch niveau met diepgaande expertise.';
    if (activityLower.includes('opdrachtgever') || activityLower.includes('bureau')) 
      return 'Professioneel project voor een designbureau of opdrachtgever binnen de gekozen specialisatie. Combineert de professionaliteit en werkervaring uit het Praktijksemester met de specialistische diepgang en expertise uit Leren Kijken en Design hackathon. Directe voorbereiding op het Afstudeerproject.';
  }
  
  if (semester === 7) {
    if (activityLower.includes('business')) return 'Oriëntatie op de professionele context, stakeholders en businesscase voor het afstudeerproject. Eerste fase waarin studenten het werkveld verkennen en hun afstudeeronderwerp afbakenen, voortbouwend op ervaringen uit het Praktijksemester.';
    if (activityLower.includes('definitie')) return 'Onderzoeksopzet en projectplanning voor het afstudeerproject waarbij studenten hun onderzoeksvraag formuleren, methoden bepalen en planning maken. Academische voorbereiding die voortbouwt op onderzoeksvaardigheden uit Explore en Connect.';
    if (activityLower.includes('realisatie')) return 'Uitvoering en realisatie van het afstudeerproject waarbij studenten hun ontwerp ontwikkelen, testen en evalueren. Demonstreert mastery van alle competenties opgebouwd sinds Base.';
    if (activityLower.includes('afstuderen') || activityLower.includes('afstudeer')) 
      return 'Het individuele afstudeerproject waarin alle competenties uit Base, Challenge, Explore, Connect, Praktijksemester en Specialisatie Semester samenkomen op mastery niveau. Studenten tonen professionele bekwaamheid en leveren een bijdrage aan het vakgebied. Het afstudeerproject vormt de afsluiting van de opleiding.';
  }
  
  return `${activiteit} - Onderdeel van ${semesterNaamMapping[semester]}`;
}

// Helper functie om speelvelden toe te wijzen
export function assignSpeelvelden(activiteit: string, leeruitkomst: string, semester: number): string {
  const activityLower = activiteit.toLowerCase();
  const leeruitkomstLower = leeruitkomst.toLowerCase();
  
  // Semester 1 specifieke toewijzingen
  if (semester === 1) {
    if (activityLower.includes('basecamp')) return 'Design';
    if (activityLower.includes('visual')) return 'Design, Technologie & AI, Onderzoekend Vermogen';
    if (activityLower.includes('interaction')) return 'Design, Technologie & AI, Mens & Ervaring, Onderzoekend Vermogen';
    if (activityLower.includes('workshop')) return '';
    if (activityLower.includes('social')) return 'Design, Technologie & AI, Mens & Ervaring, Maatschappij & Toekomst, Onderzoekend Vermogen';
    if (activityLower.includes('film') || activityLower.includes('hackathon')) return 'Design, Technologie & AI';
  }
  
  // Algemene toewijzingen voor andere semesters
  if (activityLower.includes('visual')) return 'Design';
  if (activityLower.includes('interaction')) return 'Design, Technologie & AI';
  if (activityLower.includes('social')) return 'Mens & Ervaring, Design';
  if (activityLower.includes('film')) return 'Design, Technologie & AI, Mens & Ervaring';
  if (activityLower.includes('workshop')) return 'Technologie & AI, Design';
  if (activityLower.includes('teamproject')) return 'Organisatie & Strategie, Design, Onderzoekend Vermogen';
  if (activityLower.includes('webdevelopment') || activityLower.includes('web development')) 
    return 'Technologie & AI';
  if (activityLower.includes('data') && activityLower.includes('visuali')) 
    return 'Technologie & AI, Design';
  if (activityLower.includes('voice')) return 'Technologie & AI, Mens & Ervaring';
  if (activityLower.includes('bureau') || activityLower.includes('opdrachtgever')) 
    return 'Organisatie & Strategie, Design';
  if (activityLower.includes('eigen') || activityLower.includes('individueel')) 
    return 'Design, Onderzoekend Vermogen';
  if (activityLower.includes('brand')) return 'Design, Organisatie & Strategie';
  if (activityLower.includes('immersive')) return 'Design, Technologie & AI, Mens & Ervaring';
  if (activityLower.includes('digital')) return 'Design, Technologie & AI, Mens & Ervaring';
  if (activityLower.includes('hackathon') || activityLower.includes('game')) 
    return 'Design, Technologie & AI, Mens & Ervaring';
  if (activityLower.includes('praktijk') || activityLower.includes('stage')) 
    return 'Organisatie & Strategie, Onderzoekend Vermogen';
  if (activityLower.includes('afstuder')) 
    return 'Onderzoekend Vermogen, Organisatie & Strategie, Design';
  
  // Leeruitkomst-specifieke fallback
  if (leeruitkomstLower === 'context') return 'Onderzoekend Vermogen';
  if (leeruitkomstLower === 'ontwerpen') return 'Design';
  if (leeruitkomstLower === 'prototype') return 'Technologie & AI, Design';
  if (leeruitkomstLower === 'verbinden') return 'Organisatie & Strategie';
  if (leeruitkomstLower === 'reflecteren') return 'Onderzoekend Vermogen';
  
  return 'Design';
}

// Helper functie om zelcom niveau te bepalen
export function assignZelcomNiveau(semester: number): string {
  if (semester === 1) return 'Oriëntatie';
  if (semester === 2) return 'Oefening';
  if (semester === 3) return 'Verdieping';
  if (semester === 4) return 'Verdieping';
  if (semester === 5) return 'Toepassing';
  if (semester === 6) return 'Specialisatie';
  if (semester === 7) return 'Meesterschap';
  return 'Onbekend';
}

// Transform functie voor semester activiteiten - voegt beschrijving en speelvelden toe
export function transformSemesterActiviteiten(activities: SemesterActivity[]): SemesterActivity[] {
  return activities.map(activity => {
    // Check of beschrijving en speelvelden al bestaan (voor backwards compatibility)
    const beschrijving = 'beschrijving' in activity && activity.beschrijving 
      ? activity.beschrijving 
      : generateBeschrijving(activity.semester, activity.activiteit, activity.leeruitkomst);
    
    const speelvelden = activity.speelvelden || assignSpeelvelden(activity.activiteit, activity.leeruitkomst, activity.semester);
    
    // Update semester naam met nieuwe naming
    // Voor S7: check of het "Afstuderen" of een variant is, gebruik dan mapping
    let semesterNaam = activity.semesterNaam;
    if (activity.semester === 7) {
      semesterNaam = semesterNaamMapping[7]; // Altijd "Afstuderen" gebruiken voor S7
    } else if (activity.semesterNaam.includes('Specialisatie')) {
      semesterNaam = activity.semesterNaam; // Behoud specifieke specialisatie naam
    } else {
      semesterNaam = semesterNaamMapping[activity.semester] || activity.semesterNaam;
    }
    
    return {
      ...activity,
      semesterNaam,
      beschrijving,
      speelvelden
    };
  });
}

// Transform functie voor speelveld data - voegt zelcom niveau toe
export function transformSpeelveldData(speelvelden: SpeelveldData[]): SpeelveldData[] {
  return speelvelden.map(speelveld => {
    const zelcomNiveau = 'zelcomNiveau' in speelveld && speelveld.zelcomNiveau
      ? speelveld.zelcomNiveau
      : assignZelcomNiveau(speelveld.semester);
    
    // Update semester naam met nieuwe naming
    const semesterNaam = semesterNaamMapping[speelveld.semester] || speelveld.semesterNaam;
    
    return {
      ...speelveld,
      semesterNaam,
      zelcomNiveau
    };
  });
}

// Exporteer getransformeerde data voor export
export const semesterActiviteiten = transformSemesterActiviteiten(rawData);

// Merge raw speelvelden data met semester 6 specialisatie data en transform
const mergedSpeelveldData = [...rawSpeelveldData, ...semester6SpecializationData];
export const speelveldenData = transformSpeelveldData(mergedSpeelveldData);

// ============= CONVERSIE VAN CURRICULUMDATA NAAR APP DATA STRUCTUUR =============

// Helper om semester beschrijvingen te geven
const semesterDescriptions: Record<number, string> = {
  1: 'Kennismaking met de fundamenten van CMD: design thinking, visuele communicatie en interactieontwerp. Focus op ontdekken en experimenteren.',
  2: 'Toepassen van basisvaardigheden in projecten voor externe opdrachtgevers. Leren professioneel werken en communiceren met stakeholders.',
  3: 'Verdieping in specifieke designdomeinen zoals game design en persuasive design. Studenten ontwikkelen een eigen ontwerpfilosofie.',
  4: 'Integratie van alle leerstof in multidisciplinaire vraagstukken. Studenten verbinden verschillende disciplines en perspectieven.',
  5: 'Stage bij een bedrijf waarin studenten hun competenties in een professionele werkomgeving toepassen. Voorbereiding op specialisatiekeuze.',
  6: 'Drie specialisaties: Brand Design, Immersive Design of Digital Design. Studenten verdiepen zich door projecten en bureauopdrachten.',
  7: 'Individueel onderzoeks- en ontwerpproject waarin studenten alle competenties op mastery niveau demonstreren.'
};

// Helper functie om activiteiten te groeperen per activiteit naam
function groupActivitiesByName(activities: SemesterActivity[]): Map<string, SemesterActivity[]> {
  const grouped = new Map<string, SemesterActivity[]>();
  
  activities.forEach(activity => {
    const key = activity.activiteit;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key)!.push(activity);
  });
  
  return grouped;
}

// Converteer SemesterActivity[] naar Activity object
function convertToActivity(activityName: string, activityData: SemesterActivity[], semester: number): Activity {
  // Sorteer op leeruitkomst volgorde
  const outcomeOrder = ['context', 'ontwerpen', 'prototype', 'verbinden', 'reflecteren'];
  const sortedData = activityData.sort((a, b) => 
    outcomeOrder.indexOf(a.leeruitkomst) - outcomeOrder.indexOf(b.leeruitkomst)
  );
  
  // Verzamel alle leeruitkomsten
  const learningOutcomes = sortedData.map(d => d.leeruitkomst);
  
  // Helper functie om strings te splitsen in bullets
  const splitIntoBullets = (text: string): string[] => {
    if (!text || text === 'Geen kennis' || text === 'Geen vaardigheden' || text === 'Geen houding' || text === '') {
      return [];
    }
    // Split op puntkomma en trim elk item
    return text.split(';').map(item => item.trim()).filter(item => item.length > 0);
  };
  
  // Maak learningOutcomeDetails met bullets
  const learningOutcomeDetails: LearningOutcomeDetail[] = sortedData.map(data => ({
    outcome: data.leeruitkomst,
    kennis: splitIntoBullets(data.kennis),
    vaardigheden: splitIntoBullets(data.vaardigheden),
    houding: splitIntoBullets(data.houding)
  }));
  
  // Pak de eerste voor algemene info
  const first = sortedData[0];
  
  // Bepaal uniek ID
  const id = `s${semester}-${activityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
  
  // Get first description or generate
  const description = first.beschrijving || generateBeschrijving(semester, activityName, first.leeruitkomst);
  
  // Get professional products for this activity and format as string
  const professionalProductsArray = getProfessionalProductsForActivity(semester, activityName);
  const professionalProducts = professionalProductsArray.length > 0 
    ? professionalProductsArray.map(p => {
        return `**${p.outcome.charAt(0).toUpperCase() + p.outcome.slice(1)}**: ${p.products.join('; ')}`;
      }).join('\\n\\n')
    : undefined;
  
  return {
    id,
    name: activityName,
    duration: first.duur,
    description: description !== `${activityName} activiteit gericht op ${first.leeruitkomst}` ? description : undefined,
    semester,
    learningOutcomes,
    competencies: [], // Legacy, niet meer gebruikt
    learningOutcomeDetails,
    professionalProducts, // Nu altijd een string of undefined
    excludeCompetenciesSection: false // Toon competenties voor alle activiteiten
  };
}

// Converteer semester 6 specialisatie data
function getSemester6Specializations(): Specialization[] {
  // Filter alle semester 6 activiteiten
  const s6Activities = rawData.filter(a => a.semester === 6);
  
  // Groepeer per specialisatie
  const brandDesign = s6Activities.filter(a => a.semesterNaam.includes('Brand Design'));
  const immersiveDesign = s6Activities.filter(a => a.semesterNaam.includes('Immersive Design'));
  const digitalDesign = s6Activities.filter(a => a.semesterNaam.includes('Digital Design'));
  
  const specializations: Specialization[] = [];
  
  // Brand Design specialisatie
  if (brandDesign.length > 0) {
    const brandActivities = groupActivitiesByName(brandDesign);
    const activities: Activity[] = [];
    
    brandActivities.forEach((data, name) => {
      activities.push(convertToActivity(name, data, 6));
    });
    
    specializations.push({
      id: 'brand-design',
      name: 'Brand Design',
      description: 'Specialisatie in merkidentiteit en strategie',
      activities
    });
  }
  
  // Immersive Design specialisatie
  if (immersiveDesign.length > 0) {
    const immersiveActivities = groupActivitiesByName(immersiveDesign);
    const activities: Activity[] = [];
    
    immersiveActivities.forEach((data, name) => {
      activities.push(convertToActivity(name, data, 6));
    });
    
    specializations.push({
      id: 'immersive-design',
      name: 'Immersive Design',
      description: 'Specialisatie in VR, AR en XR experiences',
      activities
    });
  }
  
  // Digital Design specialisatie
  if (digitalDesign.length > 0) {
    const digitalActivities = groupActivitiesByName(digitalDesign);
    const activities: Activity[] = [];
    
    digitalActivities.forEach((data, name) => {
      activities.push(convertToActivity(name, data, 6));
    });
    
    specializations.push({
      id: 'digital-design',
      name: 'Digital Design',
      description: 'Specialisatie in digital products en services',
      activities
    });
  }
  
  return specializations;
}

// Converteer alle curriculumData naar Semester objecten
export function convertCurriculumDataToSemesters(): Semester[] {
  const semesters: Semester[] = [];
  
  for (let semNum = 1; semNum <= 7; semNum++) {
    // Filter activiteiten voor dit semester
    // Voor S6: exclusief specialisaties (die worden apart behandeld)
    // Voor S7: inclusief alle varianten (met en zonder "(Design)")
    const semesterActivities = rawData.filter(a => {
      if (a.semester !== semNum) return false;
      
      // Skip specialisaties in S6
      if (semNum === 6 && (
        a.semesterNaam.includes('Brand Design') ||
        a.semesterNaam.includes('Immersive Design') ||
        a.semesterNaam.includes('Digital Design')
      )) {
        return false;
      }
      
      return true;
    });
    
    // Groepeer per activiteit naam
    const grouped = groupActivitiesByName(semesterActivities);
    
    // Converteer naar Activity objecten
    const activities: Activity[] = [];
    grouped.forEach((data, name) => {
      activities.push(convertToActivity(name, data, semNum));
    });
    
    // Bepaal jaar
    let year = 1;
    if (semNum >= 3 && semNum <= 4) year = 2;
    else if (semNum >= 5 && semNum <= 6) year = 3;
    else if (semNum === 7) year = 4;
    
    // Bepaal level
    const levelMap: Record<number, string> = {
      1: 'BASE',
      2: 'CHALLENGE',
      3: 'EXPLORE',
      4: 'CONNECT',
      5: 'PRAKTIJK',
      6: 'SPECIALISATIE',
      7: 'AFSTUDEREN'
    };
    
    const semester: Semester = {
      number: semNum,
      name: semesterNaamMapping[semNum],
      level: levelMap[semNum],
      description: semesterDescriptions[semNum],
      year,
      activities: semNum === 6 ? [] : activities, // S6 heeft geen reguliere activities
      professionalProducts: [],
      semesterLevel: assignZelcomNiveau(semNum)
    };
    
    // Voeg specialisaties toe aan semester 6
    if (semNum === 6) {
      semester.specializations = getSemester6Specializations();
    }
    
    semesters.push(semester);
  }
  
  return semesters;
}

// Transform functie om activities te enrichen met beroepsproducten per activiteit
function enrichActivitiesWithProducts(activity: Activity): Activity {
  const products = getProfessionalProductsForActivity(activity.semester, activity.name);
  
  if (products.length === 0) {
    return activity;
  }
  
  // Filter products op basis van de leeruitkomsten van de activiteit
  const relevantProducts = filterProductsByOutcome(products, activity.learningOutcomes);
  
  // Format de beroepsproducten als string per leeruitkomst
  const productsByOutcome = relevantProducts.map(p => {
    return `**${p.outcome.charAt(0).toUpperCase() + p.outcome.slice(1)}**\n${p.products.join('; ')}`;
  }).join('\n\n');
  
  return {
    ...activity,
    professionalProducts: productsByOutcome || undefined
  };
}

// Transform semesters om activiteiten met beroepsproducten te enrichen EN zelcom data toe te voegen
function transformSemesters(semesters: Semester[]): Semester[] {
  return semesters.map(semester => {
    // Enrich activities met beroepsproducten
    const enrichedActivities = semester.activities.map(enrichActivitiesWithProducts);
    
    // Enrich specializations als ze bestaan
    const enrichedSpecializations = semester.specializations?.map(spec => ({
      ...spec,
      activities: spec.activities.map(enrichActivitiesWithProducts)
    }));
    
    // Voeg zelcom narrative data toe
    const zelcomNarrative = getZelcomNarrativeForSemester(semester.number);
    
    return {
      ...semester,
      activities: enrichedActivities,
      specializations: enrichedSpecializations,
      zelcomNarrative
    };
  });
}

// Exporteer getransformeerde semesters met beroepsproducten - DIT IS DE DATA VOOR DE APP
export const semesters = transformSemesters(convertCurriculumDataToSemesters());