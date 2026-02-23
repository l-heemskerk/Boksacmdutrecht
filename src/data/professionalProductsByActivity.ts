// Beroepsproducten gekoppeld aan onderwijsactiviteiten en hun competenties
import { LearningOutcome } from '../types/curriculum';

export interface ActivityProfessionalProduct {
  outcome: LearningOutcome;
  products: string[];
}

// Key = semester_activiteit (lowercase, spaties vervangen door underscore)
export const professionalProductsByActivity: Record<string, ActivityProfessionalProduct[]> = {
  // ==================== SEMESTER 1 ====================
  '1_basecamp': [
    { outcome: 'context', products: ['Eerste verkenningen gebruikerscontext', 'Observatienotities en foto\'s'] },
    { outcome: 'ontwerpen', products: ['Conceptschetsen en idee-exploraties', 'Rapid prototyping resultaten'] },
    { outcome: 'prototype', products: ['Eerste fysieke prototypes (papier, karton)', 'Foto-documentatie testmomenten'] },
    { outcome: 'verbinden', products: ['Teampresentatie slides', 'Kennismakingsdocumentatie team'] },
    { outcome: 'reflecteren', products: ['Eerste reflectieverslag in Portflow', 'Persoonlijke introductie CMD'] }
  ],
  '1_visual_design': [
    { outcome: 'context', products: ['Literatuuronderzoek grafisch ontwerp', 'Moodboard met inspiratiebronnen', 'Good/best/bad practices analyse', 'Doelgroep interviews en analyse'] },
    { outcome: 'ontwerpen', products: ['Moodboards en mindmaps', 'Typografie experimenten', 'Kleurstudies', 'Conceptschetsen visuele identiteit', 'Design rationale document'] },
    { outcome: 'prototype', products: ['Poster ontwerpen', 'Huisstijl elementen', 'Compositie studies in Adobe', 'Eindproduct visuele communicatie'] },
    { outcome: 'verbinden', products: ['Retrospective documentatie', 'Peer feedback notities', 'Teampresentaties'] },
    { outcome: 'reflecteren', products: ['Portflow datapunten Visual Design', 'Zelfevaluatie visueel vakmanschap', 'Leerdoelen formulering'] }
  ],
  '1_interaction_design': [
    { outcome: 'context', products: ['User research notities', 'Persona\'s en user stories', 'Veldonderzoek verslagen', 'Kwantitatief onderzoeksrapport'] },
    { outcome: 'ontwerpen', products: ['Customer Journey Maps', 'User flows', 'Card sorting resultaten', 'Wireframe varianten'] },
    { outcome: 'prototype', products: ['Low-fidelity wireframes', 'Klikbaar Figma prototype', 'Usability test rapport', 'Heuristische evaluatie'] },
    { outcome: 'verbinden', products: ['Retrospective met DAKI methode', 'Feedback sessie documentatie', 'Team samenwerking reflectie'] },
    { outcome: 'reflecteren', products: ['Portflow: leerdoelen Interaction Design', 'STARR reflectie op project', 'Zelfevaluatie UX vaardigheden'] }
  ],
  '1_social_design': [
    { outcome: 'context', products: ['Interview verslagen doelgroep', 'Empathy maps', 'Design probes documentatie', 'Field trial resultaten', 'Gedragsanalyse met Fogg model'] },
    { outcome: 'ontwerpen', products: ['Co-creatie concepten met doelgroep', 'Brainstorm resultaten', 'Conceptontwikkeling varianten', 'Onderbouwing ontwerpkeuzes'] },
    { outcome: 'prototype', products: ['Fysiek prototype voor doelgroep', 'Iteratieve test versies', 'Foto documentatie prototypes', 'Feedbackverwerking rapport'] },
    { outcome: 'verbinden', products: ['Groepsproces reflectie met Belbin', 'Feedback sessies documentatie', 'Stakeholder communicatie logs'] },
    { outcome: 'reflecteren', products: ['Korthagen reflectie op sociaal ontwerp', 'Portflow: zelfevaluatie empathisch vermogen', 'Leerdoelen sociale impact design'] }
  ],
  '1_workshopweek': [
    { outcome: 'context', products: ['Workshop verslagen', 'Nieuwe methoden documentatie'] },
    { outcome: 'ontwerpen', products: ['Workshop deliverables', 'Experimentele schetsen'] },
    { outcome: 'prototype', products: ['Workshop prototypes', 'Feedback documentatie'] },
    { outcome: 'verbinden', products: ['Samenwerking buiten cluster', 'Netwerk notities'] },
    { outcome: 'reflecteren', products: ['Reflectie op nieuwe vaardigheden', 'Leerpunten workshop'] }
  ],
  '1_film-hackathon': [
    { outcome: 'context', products: ['Storyboard en conceptschets', 'Filmische research'] },
    { outcome: 'ontwerpen', products: ['Moodboard film', 'Visueel concept en verhaal'] },
    { outcome: 'prototype', products: ['Korte film (eindproduct)', 'Montage documentatie'] },
    { outcome: 'verbinden', products: ['Team samenwerking zonder begeleiding', 'Filmcrew rolverdeling'] },
    { outcome: 'reflecteren', products: ['Reflectie op creatief proces', 'Zelfstandig werken evaluatie'] }
  ],

  // ==================== SEMESTER 2 ====================
  '2_opdrachtgever_project': [
    { outcome: 'context', products: ['Onderzoeksrapport met stakeholder analyse', 'Doelgroep analyse en persona\'s', 'User journey maps', 'Probleemdefinitie document (vraag achter de vraag)', 'APA bronvermelding lijst'] },
    { outcome: 'ontwerpen', products: ['Design rationale document', 'Conceptpresentaties voor opdrachtgever', 'Briefing/debriefing documentatie', 'Guiding principles document', 'Meervoudige conceptvarianten'] },
    { outcome: 'prototype', products: ['High-fidelity prototype', 'Testrapport met Mom test', 'Iteratie documentatie', 'Feedback analyse', 'Gevalideerd eindprototype'] },
    { outcome: 'verbinden', products: ['Client presentaties', 'Stakeholder communicatie logs', 'Feedback iteraties documentatie', 'Retrospectives met team', 'Professionele pitch deck'] },
    { outcome: 'reflecteren', products: ['Portflow: competentie ontwikkeling', 'Procesverslag opdrachtgever project', 'Dummy met projectdocumentatie', 'Zelfevaluatie professioneel werken'] }
  ],
  '2_eigen_project': [
    { outcome: 'context', products: ['Zelfgekozen onderzoeksvraag', 'Literatuurstudie en desk research', 'Context analyse eigen thema', 'Inspiratie onderzoek makers', 'Hands on Research toepassing'] },
    { outcome: 'ontwerpen', products: ['Autonoom ontwikkeld concept', 'Volledige onderbouwing ontwerpkeuzes', 'Experimentele schetsen en ideation', 'Design choices presentatie'] },
    { outcome: 'prototype', products: ['Zelfgekozen prototype (digitaal/fysiek)', 'Uitgebreide testresultaten', 'Iteratieve versies documentatie', 'Portfolio-ready eindproduct'] },
    { outcome: 'verbinden', products: ['Peer review documentatie', 'Feedbackverwerking', 'Presentatie voor medestudenten'] },
    { outcome: 'reflecteren', products: ['Kritische zelfreflectie op autonomie', 'Reflectie op vakmanschap ontwikkeling', 'Portflow: persoonlijke groei', 'Leerdoelen voor vervolgfase'] }
  ],
  '2_technical_development': [
    { outcome: 'context', products: ['Technische analyse websites', 'Framework comparison document', 'Code review notities'] },
    { outcome: 'ontwerpen', products: ['Wireframes voor web applicatie', 'Information architecture', 'Component design system'] },
    { outcome: 'prototype', products: ['Responsive website HTML/CSS/JS', 'API integraties', 'Werkende features', 'Code repository (GitHub)', 'Technical documentation'] },
    { outcome: 'verbinden', products: ['Code review feedback', 'Pair programming documentatie', 'Tech team samenwerking'] },
    { outcome: 'reflecteren', products: ['Reflectie op technische groei', 'Code quality zelfevaluatie'] }
  ],
  '2_hackathon': [
    { outcome: 'context', products: ['Snelle context analyse', 'Problem framing document'] },
    { outcome: 'ontwerpen', products: ['Rapid ideation schetsen', 'Sprint concept'] },
    { outcome: 'prototype', products: ['Werkend hackathon prototype', 'Sprint deliverable'] },
    { outcome: 'verbinden', products: ['Multidisciplinaire samenwerking', 'Sprint presentatie'] },
    { outcome: 'reflecteren', products: ['Sprint retrospective', 'Snelle iteratie reflectie'] }
  ],

  // ==================== SEMESTER 3 ====================
  '3_data_visualisatie': [
    { outcome: 'context', products: ['Data analyse rapport', 'Dataset research', 'Doelgroep en context voor visualisatie'] },
    { outcome: 'ontwerpen', products: ['Visualisatie concepten', 'Information design schetsen', 'Interactie ontwerp voor data'] },
    { outcome: 'prototype', products: ['Interactieve data visualisatie', 'D3.js of andere library implementatie', 'User testing op begrijpelijkheid'] },
    { outcome: 'verbinden', products: ['Presentatie data insights', 'Stakeholder feedback op visualisatie'] },
    { outcome: 'reflecteren', products: ['Reflectie op data storytelling', 'Technische vaardigheden evaluatie'] }
  ],
  '3_web_development_frameworks': [
    { outcome: 'context', products: ['Framework vergelijking onderzoek', 'Technical requirements analyse', 'Best practices research'] },
    { outcome: 'ontwerpen', products: ['Component architectuur ontwerp', 'Wireframes voor web app', 'User flow designs'] },
    { outcome: 'prototype', products: ['React/Vue web applicatie', 'API integraties', 'Responsive implementatie', 'GitHub repository met documentatie'] },
    { outcome: 'verbinden', products: ['Code reviews', 'Tech presentaties', 'Developer samenwerking'] },
    { outcome: 'reflecteren', products: ['Technical skill development reflectie', 'Code quality assessment'] }
  ],
  '3_voice_ui_design': [
    { outcome: 'context', products: ['Voice interaction onderzoek', 'Use case analyse', 'Conversational flow research'] },
    { outcome: 'ontwerpen', products: ['Conversation design scripts', 'Voice user flows', 'Persona for voice'] },
    { outcome: 'prototype', products: ['Voice prototype (Dialogflow/andere)', 'Conversational UI mockups', 'Voice usability tests'] },
    { outcome: 'verbinden', products: ['Voice design presentatie', 'Testing met gebruikers feedback'] },
    { outcome: 'reflecteren', products: ['Reflectie op emerging technology', 'Voice design vaardigheden'] }
  ],
  '3_bureauproject': [
    { outcome: 'context', products: ['Uitgebreid onderzoeksrapport', 'Thematische analyse', 'Market research documentatie', 'Stakeholder landscape'] },
    { outcome: 'ontwerpen', products: ['Meervoudige conceptvarianten', 'Design rationale document', 'Creative brief', 'Concept pitches'] },
    { outcome: 'prototype', products: ['High-fidelity deliverables', 'Uitgebreide usability tests', 'A/B test resultaten', 'Iteratieve prototype versies'] },
    { outcome: 'verbinden', products: ['Client presentaties', 'Co-creatie sessies', 'Sprint reviews', 'Professional pitch'] },
    { outcome: 'reflecteren', products: ['Project reflectie rapport', 'Competentie matrix', 'Portfolio case study', 'Professional development plan'] }
  ],
  '3_individueel_verdiepingsproject': [
    { outcome: 'context', products: ['Specialisatie onderzoek', 'Expert interviews', 'Trendanalyse in gekozen domein'] },
    { outcome: 'ontwerpen', products: ['Geavanceerd conceptontwerp', 'Specialistische ontwerpmethoden', 'Innovatieve design approach'] },
    { outcome: 'prototype', products: ['Specialisatie prototype', 'Portfolio-ready eindproduct', 'Uitgebreide validatie'] },
    { outcome: 'verbinden', products: ['Expert feedback sessies', 'Specialisatie presentatie'] },
    { outcome: 'reflecteren', products: ['Verdieping reflectie', 'Voorbereiding praktijksemester', 'Portfolio curatie'] }
  ],

  // ==================== SEMESTER 5 - PRAKTIJK ====================
  '5_praktijkstage': [
    { outcome: 'context', products: ['Praktijkonderzoek bij bedrijf met field notes', 'Bedrijfsanalyse met organisatiestructuur', 'Concurrentie analyse en marktpositie', 'Stakeholder mapping', 'Industry trends rapport'] },
    { outcome: 'ontwerpen', products: ['Real-world projecten voor klanten', 'Design proposals en pitch decks', 'Innovation concepts met business case', 'Service design blueprints', 'Strategic design interventies'] },
    { outcome: 'prototype', products: ['Production-ready deliverables', 'Professionele prototypes gevalideerd', 'Technical implementations productieniveau', 'Quality assurance documentatie', 'Deployment en user manuals'] },
    { outcome: 'verbinden', products: ['Professionele stakeholder communicatie', 'Client management documentatie', 'Team collaboration logs', 'Management presentaties', 'Professional networking evidence'] },
    { outcome: 'reflecteren', products: ['Praktijkverslag met kritische reflectie', 'Professionele identiteit ontwikkeling', 'Competentie ontwikkeling tracking', 'Ethische reflectie praktijk', 'Mentorship learnings'] }
  ],

  // ==================== SEMESTER 6 - SPECIALISATIES ====================
  // Brand Design
  '6_leren_kijken_(brand)': [
    { outcome: 'context', products: ['Visual culture analyse', 'Brand landscape research'] },
    { outcome: 'ontwerpen', products: ['Visual research board', 'Brand mood studies'] },
    { outcome: 'prototype', products: ['Visual experiments', 'Style exploration'] },
    { outcome: 'verbinden', products: ['Peer critique documentation', 'Visual storytelling presentation'] },
    { outcome: 'reflecteren', products: ['Visual awareness reflectie', 'Brand design orientation'] }
  ],
  '6_analyse_project_(brand)': [
    { outcome: 'context', products: ['Brand analyse rapport', 'Concurrentie landscape', 'Doelgroep psychographics'] },
    { outcome: 'ontwerpen', products: ['Brand strategie document', 'Positioning concepts', 'Visual direction board'] },
    { outcome: 'prototype', products: ['Brand identity elements', 'Style guide begin', 'Mockups in context'] },
    { outcome: 'verbinden', products: ['Client brief sessies', 'Brand presentatie'] },
    { outcome: 'reflecteren', products: ['Brand strategy reflectie', 'Visual design growth'] }
  ],
  '6_brainstorm_project_(brand)': [
    { outcome: 'context', products: ['Brand context deep-dive', 'Cultural insights research'] },
    { outcome: 'ontwerpen', products: ['Meervoudige brand concepten', 'Visual identity varianten', 'Brand story development'] },
    { outcome: 'prototype', products: ['Brand identity prototypes', 'Touchpoint designs', 'Brand experience mockups'] },
    { outcome: 'verbinden', products: ['Concept presentaties', 'Stakeholder feedback iteraties'] },
    { outcome: 'reflecteren', products: ['Creative process reflectie', 'Brand thinking development'] }
  ],
  '6_hackathon_(brand)': [
    { outcome: 'context', products: ['Rapid brand research', 'Quick market scan'] },
    { outcome: 'ontwerpen', products: ['Sprint brand concept', 'Fast visual ideation'] },
    { outcome: 'prototype', products: ['Brand hackathon deliverable', 'Quick brand prototype'] },
    { outcome: 'verbinden', products: ['Multidisciplinaire samenwerking', 'Sprint pitch'] },
    { outcome: 'reflecteren', products: ['Sprint learnings', 'Rapid design reflectie'] }
  ],
  '6_opdrachtgeversproject_(brand)': [
    { outcome: 'context', products: ['Uitgebreid brand onderzoek', 'Market positioning analyse', 'Cultural trend rapport', 'Audience insights diepgaand'] },
    { outcome: 'ontwerpen', products: ['Complete brand identity systeem', 'Visual language design', 'Brand guidelines', 'Touchpoint ontwerpen', 'Campaign concepts'] },
    { outcome: 'prototype', products: ['Portfolio-ready brand identity', 'Brand applications (print/digital)', 'Motion design elementen', 'Brand experience prototypes', 'Professional presentation'] },
    { outcome: 'verbinden', products: ['Client presentaties professioneel niveau', 'Stakeholder management', 'Brand pitch final', 'Professional communication logs'] },
    { outcome: 'reflecteren', products: ['Brand specialisatie reflectie', 'Portfolio case study brand', 'Professional identity als brand designer', 'Specialisatie keuze onderbouwing'] }
  ],

  // Immersive Design
  '6_leren_kijken_(immersive)': [
    { outcome: 'context', products: ['Immersive technology landscape', 'XR experience research'] },
    { outcome: 'ontwerpen', products: ['Immersive concept schetsen', 'Experience flow ideation'] },
    { outcome: 'prototype', products: ['First immersive experiments', 'Simple XR prototypes'] },
    { outcome: 'verbinden', products: ['Immersive demo sessies', 'Peer testing feedback'] },
    { outcome: 'reflecteren', products: ['XR orientation reflectie', 'Technology learning curve'] }
  ],
  '6_immersive_landscape:_theorie_en_analyse': [
    { outcome: 'context', products: ['XR technology analyse', 'Immersive use cases research', 'User behaviour in XR', 'Hardware/software landscape'] },
    { outcome: 'ontwerpen', products: ['Immersive experience concepts', 'Interaction design for XR', 'Spatial design principles'] },
    { outcome: 'prototype', products: ['Theory application prototypes', 'XR interaction tests', 'Spatial mockups'] },
    { outcome: 'verbinden', products: ['XR design presentaties', 'Expert consultations'] },
    { outcome: 'reflecteren', products: ['Immersive theory reflectie', 'Technical skills assessment'] }
  ],
  '6_immersive_landscape:_concept,_create,_test,_prototype': [
    { outcome: 'context', products: ['User research voor XR experience', 'Context analyse immersive use', 'Technical feasibility study'] },
    { outcome: 'ontwerpen', products: ['Uitgewerkt immersive concept', 'Experience design flows', 'Spatial UI ontwerp', '360° storyboards'] },
    { outcome: 'prototype', products: ['Werkend XR prototype (VR/AR/MR)', 'Interactive immersive experience', 'User testing in XR', 'Iteraties documentatie'] },
    { outcome: 'verbinden', products: ['XR demo presentaties', 'User testing sessies', 'Technical team collaboration'] },
    { outcome: 'reflecteren', products: ['Immersive design proces reflectie', 'XR development skills', 'Technical challenges overcome'] }
  ],
  '6_hackathon_(immersive)': [
    { outcome: 'context', products: ['Quick XR opportunity scan', 'Rapid use case definition'] },
    { outcome: 'ontwerpen', products: ['Sprint immersive concept', 'Fast experience design'] },
    { outcome: 'prototype', products: ['XR hackathon prototype', 'Quick immersive demo'] },
    { outcome: 'verbinden', products: ['Cross-specialisatie samenwerking', 'XR pitch'] },
    { outcome: 'reflecteren', products: ['Sprint XR learnings', 'Rapid prototyping reflectie'] }
  ],
  '6_opdrachtgeversproject_(immersive)': [
    { outcome: 'context', products: ['Diepgaand XR onderzoek', 'Immersive user research', 'Technical requirements analyse', 'Market opportunity assessment', 'Use case validation'] },
    { outcome: 'ontwerpen', products: ['Complete immersive experience design', 'Spatial interaction design', 'XR UI/UX systeem', '360° experience flows', 'Sound design integration'] },
    { outcome: 'prototype', products: ['Portfolio-ready XR experience', 'High-fidelity immersive prototype', 'User tested XR product', 'Technical documentation', 'Professional demo build'] },
    { outcome: 'verbinden', products: ['Client XR demo presentaties', 'Stakeholder experience sessions', 'Technical team collaboration', 'Professional XR pitch'] },
    { outcome: 'reflecteren', products: ['Immersive specialisatie reflectie', 'Portfolio case study XR', 'Professional identity als XR designer', 'Technical growth assessment', 'Future XR vision'] }
  ],

  // Digital Design
  '6_leren_kijken/introproject_(digital)': [
    { outcome: 'context', products: ['Digital design landscape scan', 'UX/UI trend research'] },
    { outcome: 'ontwerpen', products: ['Digital design explorations', 'Interface ideation'] },
    { outcome: 'prototype', products: ['First digital prototypes', 'UI experiments'] },
    { outcome: 'verbinden', products: ['Digital design critique', 'Peer feedback sessies'] },
    { outcome: 'reflecteren', products: ['Digital design orientation', 'UX/UI skill baseline'] }
  ],
  '6_fictief_project_(digital)': [
    { outcome: 'context', products: ['User research digital product', 'Competitive analysis', 'User needs assessment'] },
    { outcome: 'ontwerpen', products: ['Digital product concepten', 'User flows en wireframes', 'Interaction patterns'] },
    { outcome: 'prototype', products: ['High-fidelity Figma prototype', 'Interactive digital prototype', 'Usability test resultaten'] },
    { outcome: 'verbinden', products: ['Design critique presentaties', 'User testing sessies'] },
    { outcome: 'reflecteren', products: ['Digital design proces reflectie', 'UX methodology learning'] }
  ],
  '6_deep_dive_(digital)': [
    { outcome: 'context', products: ['Diepgaand UX research', 'User behaviour analyse', 'Data-driven insights', 'Accessibility audit'] },
    { outcome: 'ontwerpen', products: ['Geavanceerd UX/UI ontwerp', 'Design system ontwikkeling', 'Interaction design patterns', 'Micro-interactions'] },
    { outcome: 'prototype', products: ['Complex digital prototype', 'Design system implementatie', 'Accessibility testing', 'Performance optimization'] },
    { outcome: 'verbinden', products: ['Design system presentatie', 'Developer handoff documentation'] },
    { outcome: 'reflecteren', products: ['Deep dive learnings', 'UX expertise development', 'Systematic design thinking'] }
  ],
  '6_hackathon_(digital)': [
    { outcome: 'context', products: ['Rapid UX research', 'Quick user needs scan'] },
    { outcome: 'ontwerpen', products: ['Sprint UI concept', 'Fast wireframe iteration'] },
    { outcome: 'prototype', products: ['Digital hackathon prototype', 'Quick clickable demo'] },
    { outcome: 'verbinden', products: ['Multidisciplinair team werk', 'Sprint demo'] },
    { outcome: 'reflecteren', products: ['Sprint design learnings', 'Rapid UX reflectie'] }
  ],
  '6_bureauopdracht_(digital)': [
    { outcome: 'context', products: ['Uitgebreid UX onderzoek', 'User research met stakeholders', 'Accessibility en inclusie analyse', 'Data analyse gebruikersgedrag', 'Competitive landscape'] },
    { outcome: 'ontwerpen', products: ['Complete digital product design', 'Design system volwassen', 'User flows en information architecture', 'Interaction design patterns library', 'Responsive design alle breakpoints'] },
    { outcome: 'prototype', products: ['Portfolio-ready digital product', 'High-fidelity prototype getested', 'Design system documentatie', 'Developer handoff package', 'Professional case study'] },
    { outcome: 'verbinden', products: ['Client presentaties bureau-niveau', 'Developer collaboration', 'Stakeholder management', 'Design critique facilitatie', 'Professional UX pitch'] },
    { outcome: 'reflecteren', products: ['Digital specialisatie reflectie', 'Portfolio case study UX/UI', 'Professional identity als digital designer', 'UX expertise assessment', 'Design system thinking development'] }
  ],

  // ==================== SEMESTER 7 - AFSTUDEREN ====================
  '7_afstudeerproject': [
    { outcome: 'context', products: ['Afstudeeronderzoek met wetenschappelijke rigor', 'Literature review state of the art', 'Research design met mixed methods', 'Data collectie en analyse volgens academische standaarden', 'Context mapping probleem en solution space', 'Theoretisch framework', 'Research proposal document'] },
    { outcome: 'ontwerpen', products: ['Innovatief afstudeerproject met maatschappelijke/commerciële relevantie', 'Design visie document met strategische positionering', 'Conceptdocumentatie met meervoudige varianten en evaluatie', 'Uitgewerkt eindontwerp met complete design rationale', 'Proces documentatie met iteraties', 'Design principles en philosophy', 'Final design specification'] },
    { outcome: 'prototype', products: ['Professioneel eindproduct: brand identity, digital product, of immersive experience op portfolio-niveau', 'High-fidelity prototypes uitgebreid gevalideerd', 'Testplannen en testresultaten met iteraties', 'Technische documentatie en implementatie specs', 'Showcase-ready presentatie voor publieke verdediging', 'Professional demo reel/video', 'Exhibition-ready materials'] },
    { outcome: 'verbinden', products: ['Afstudeerpresentatie en verdediging voor examencommissie', 'Stakeholder management documentatie', 'Professionele presentaties voor opdrachtgever/jury', 'Portfolio website met geïntegreerde case study', 'LinkedIn profiel update voor carrièrestart', 'Professional networking evidence', 'Graduation show materials'] },
    { outcome: 'reflecteren', products: ['Afstudeerverslag (thesis) met methodologische verantwoording', 'Kritische reflectie op 4 jaar CMD en bereikte competenties', 'Professionele identiteit statement met visie op vakgebied', 'Ethische reflectie op ontwerp impact en verantwoordelijkheid', 'Carrièreplan met toekomstvisie en ambities', 'Professional development plan', 'Portfolio narrative en positioning'] }
  ]
};

// Helper functie om beroepsproducten op te halen voor een activiteit
export function getProfessionalProductsForActivity(
  semester: number, 
  activityName: string
): ActivityProfessionalProduct[] {
  // Normalize the activity name: lowercase and replace spaces/special chars with underscore
  const normalizedName = activityName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, ''); // Remove leading/trailing underscores
  
  const key = `${semester}_${normalizedName}`;
  const products = professionalProductsByActivity[key];
  
  if (products) {
    return products;
  }
  
  // Try to find a partial match if exact match fails
  const partialKey = Object.keys(professionalProductsByActivity).find(k => {
    const [semStr, ...nameParts] = k.split('_');
    const keySem = parseInt(semStr);
    const keyName = nameParts.join('_');
    
    return keySem === semester && (
      keyName.includes(normalizedName) || 
      normalizedName.includes(keyName)
    );
  });
  
  if (partialKey) {
    return professionalProductsByActivity[partialKey];
  }
  
  return [];
}

// Helper functie om beroepsproducten te filteren op leeruitkomst
export function filterProductsByOutcome(
  products: ActivityProfessionalProduct[],
  outcomes: LearningOutcome[]
): ActivityProfessionalProduct[] {
  if (outcomes.length === 0) return products;
  return products.filter(p => outcomes.includes(p.outcome));
}