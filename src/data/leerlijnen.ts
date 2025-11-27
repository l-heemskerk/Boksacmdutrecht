// Leerlijnen mapping voor filtering
export type Leerlijn = 
  | 'Design'
  | 'Technologie & AI'
  | 'Mens & Ervaring'
  | 'Maatschappij & Toekomst'
  | 'Organisatie & Strategie'
  | 'Onderzoekend Vermogen';

export const leerlijnen: Leerlijn[] = [
  'Design',
  'Technologie & AI',
  'Mens & Ervaring',
  'Maatschappij & Toekomst',
  'Organisatie & Strategie',
  'Onderzoekend Vermogen'
];

// Keywords mapping om items te koppelen aan leerlijnen
export const leerlijnKeywords: Record<Leerlijn, string[]> = {
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

// Function to determine which leerlijnen an item belongs to (more strict)
export function getLeerlijnForItem(item: string): Leerlijn[] {
  const itemLower = item.toLowerCase();
  const matchedLeerlijnen: Leerlijn[] = [];

  leerlijnen.forEach(leerlijn => {
    const keywords = leerlijnKeywords[leerlijn];
    
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
      matchedLeerlijnen.push(leerlijn);
    }
  });

  // Only return matched leerlijnen - no fallback
  // Be even more strict: if an item matches too many leerlijnen (>3), it's probably too generic
  if (matchedLeerlijnen.length > 3) {
    return [];
  }

  return matchedLeerlijnen;
}