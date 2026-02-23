// ZEL-COM data per jaar (narratief)
// ZEL-COM = Zelfstandigheid, Expertise, Leercontext, Complexiteit, Organisatorische rol, Multidisciplinariteit

export interface ZelcomNarrativeData {
  jaar: number;
  titel: string;
  beschrijving: string;
  isPraktijk?: boolean;
  isAfstuderen?: boolean;
}

export const zelcomNarrativePerJaar: ZelcomNarrativeData[] = [
  {
    jaar: 1,
    titel: 'Jaar 1 - Propedeutische fase',
    beschrijving: 'In de propedeutische fase (jaar 1) werken studenten hoofdzakelijk binnen vastgestelde kaders. Het onderwijs is sterk gestructureerd en gericht op het verwerven van basiskennis en het toepassen van standaardprocedures in bekende en overzichtelijke situaties. Studenten vervullen hierbij voornamelijk een operationele rol en werken overwegend monodisciplinair.'
  },
  {
    jaar: 2,
    titel: 'Jaar 2 - Toenemende zelfstandigheid',
    beschrijving: 'In jaar 2 neemt de mate van zelfstandigheid toe. Studenten leren standaardprocedures situationeel aan te passen en passen specialistische kennis toe in minder voorspelbare, maar nog overzichtelijke contexten. De rol verschuift van uitvoerend naar tactisch, waarbij studenten meer verantwoordelijkheid dragen voor keuzes in aanpak, planning en samenwerking. Multidisciplinair werken krijgt hier een expliciete plaats.'
  },
  {
    jaar: 3,
    titel: 'Jaar 3 - Specialisatiefase',
    beschrijving: 'In jaar 3, met name binnen de specialisatiefase, werken studenten in complexe en deels ongestructureerde situaties. Zij ontwikkelen en hanteren eigen werkwijzen, integreren kennis uit verschillende domeinen en nemen een meer strategische rol in binnen projecten. De focus ligt op verdieping, samenhang en het verantwoord omgaan met onzekerheid en ambiguïteit.'
  },
  {
    jaar: 4,
    titel: 'Jaar 4 - Praktijk',
    beschrijving: 'In het praktijksemester functioneren studenten in hoge mate zelfstandig in authentieke beroepscontexten. Zij passen verworven kennis en vaardigheden toe in professionele settings, werken binnen organisatiestructuren en ontwikkelen hun professionele identiteit. Multidisciplinariteit is hierbij vanzelfsprekend en studenten tonen startbekwaam professioneel gedrag passend bij het beroepenveld.',
    isPraktijk: true
  },
  {
    jaar: 4,
    titel: 'Jaar 4 - Afstuderen',
    beschrijving: 'In de afstudeerperiode ontwikkelen studenten nieuwe kennis en inzichten, ontwerpen eigen procedures en handelen volledig zelfstandig en strategisch in onbekende en niet-transparante situaties. Zij demonstreren mastery van alle competenties en leveren een bijdrage aan het vakgebied die hun startbekwaamheid als CMD-professional bevestigt.',
    isAfstuderen: true
  }
];

// Helper functie om zelcom data op te halen op basis van semester nummer
export function getZelcomNarrativeForSemester(semesterNumber: number): ZelcomNarrativeData | null {
  if (semesterNumber === 1 || semesterNumber === 2) {
    return zelcomNarrativePerJaar[0]; // Jaar 1
  } else if (semesterNumber === 3 || semesterNumber === 4) {
    return zelcomNarrativePerJaar[1]; // Jaar 2
  } else if (semesterNumber === 5) {
    return zelcomNarrativePerJaar[3]; // Jaar 4 - Praktijk
  } else if (semesterNumber === 6) {
    return zelcomNarrativePerJaar[2]; // Jaar 3 - Specialisatie
  } else if (semesterNumber === 7) {
    return zelcomNarrativePerJaar[4]; // Jaar 4 - Afstuderen
  }
  return null;
}