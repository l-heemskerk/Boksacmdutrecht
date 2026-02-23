import { Leerlijn } from './leerlijnen';

export interface LeerlijnSemesterDetail {
  semester: number;
  semesterName: string;
  leerlijn: Leerlijn;
  globalDescription: string;
  detailedDescription?: string;
  kernfocus: string;
  indicatoren: string[];
  verbandenMetAndereSemesters: string[];
  verbandenMetAndereLeerlijnen: Leerlijn[];
  introductie?: string;
  verbindingMetRestVanOpleiding?: string;
  specialization?: string;
  zelcomDescription?: string;
}

const sem1Zelcom = `ZELCOM kenmerken:
• Gestructureerde leeromgeving
• Basis vakkennis en -vaardigheden
• Werken binnen afgebakende kaders
• Bekende en overzichtelijke context
• Overwegend monodisciplinair
• Sturende begeleiding`;

const sem7Zelcom = `ZELCOM kenmerken:
• Open en zelfgestuurde leeromgeving
• Ontwikkelen en verantwoorden van nieuwe kennis en inzichten
• Zelf bepalen van aanpak
• Complexe, open en onvoorspelbare situaties
• Volledig multidisciplinair en integrerend
• Strategische rol met eindverantwoordelijkheid
• Zelfsturende begeleiding in leerteams`;

export const leerlijnProgressions: LeerlijnSemesterDetail[] = [
  // ==================== DESIGN ====================
  {
    semester: 1,
    semesterName: 'BASE',
    leerlijn: 'Design',
    globalDescription: 'Kennismaking met designprincipes en -tools. Studenten leren de basis van visueel ontwerpen, typografie, kleur en compositie. Ze experimenteren met verschillende fidelity niveaus (van schets tot hi-fi prototype) en ontdekken hoe designkeuzes de gebruikerservaring beïnvloeden. Wireframing en UI patterns vormen de basis voor latere projecten.',
    introductie: 'In het eerste semester maken studenten kennis met de basisprincipes van design. Ze leren wat design is, welke ontwerpprincipes er zijn en hoe ze deze kunnen toepassen in eenvoudige ontwerpopdrachten.',
    indicatoren: [
      'Past basale ontwerpprincipes en -stappen toe',
      'Werkt iteratief met schetsen en eenvoudige concepten',
      'Kan ontwerpkeuzes beschrijvend toelichten',
      'Gebruikt feedback om ontwerpen te verbeteren',
      'Verkent verschillende ontwerpdisciplines binnen CMD'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Wireframing, UI patterns en verschillende fidelity niveaus worden verkend. Experimenteren en fouten maken staat centraal.',
    kernfocus: 'Visuele ontwerpprincipes; Design thinking basics; Prototyping tools (Figma)',
    verbandenMetAndereSemesters: [
      'Vormt de basis voor alle latere designvakken',
      'Wordt verder ontwikkeld in S2 met UX design en S3 met interaction design'
    ],
    verbandenMetAndereLeerlijnen: ['Technologie & AI', 'Mens & Ervaring', 'Onderzoekend Vermogen'],
    zelcomDescription: sem1Zelcom
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    leerlijn: 'Design',
    globalDescription: 'Toepassing van designvaardigheden in projecten met externe opdrachtgevers. Focus op UX design en interaction design. Studenten leren guiding principles te formuleren, ontwerpkeuzes te onderbouwen met theorie en concepten te presenteren. Wireframing en prototyping worden toegepast in realistische projectcontexten met echte opdrachtgevers en gebruikers.',
    introductie: 'Studenten passen hun ontwerpvaardigheden toe in echte opdrachtgeversprojecten. Ze leren ontwerpen voor verschillende contexten en doelgroepen.',
    indicatoren: [
      'Ontwikkelt concepten en wireframes voor externe opdrachtgevers',
      'Integreert UI en UX in coherente ontwerpen',
      'Beschrijft en onderbouwt design rationale',
      'Voert end-to-end UX design uit in projectcontext',
      'Past interactiepatronen toe op basis van standaarden'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Guiding principles, brainstorm methodieken en onderbouwde ontwerpkeuzes met theorie staan centraal.',
    kernfocus: 'UX design proces; Wireframing & prototyping; Interaction design patterns; Designsystemen',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1 designprincipes en bereidt voor op S3 complexere interactieve systemen'
    ],
    verbandenMetAndereLeerlijnen: ['Technologie & AI', 'Mens & Ervaring', 'Organisatie & Strategie'],
    zelcomDescription: 'Niveau 2: Gevorderd - onder toezicht'
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    leerlijn: 'Design',
    globalDescription: 'Verdieping in specialistische design areas: service design, advanced visual en motion design. Studenten leren hele service journeys te ontwerpen, complexe visuele communicatie te creëren met geavanceerde composities en typografie, en verhalen vertellen door middel van motion. Customer journey mapping en service blueprints worden belangrijke tools in het designrepertoire.',
    introductie: 'Studenten verdiepen zich in specifieke designdisciplines en ontwikkelen specialistische skills.',
    indicatoren: [
      'Stelt service blueprints en customer journey maps op',
      'Creëert advanced motion designs en animaties',
      'Ontwikkelt uitgebreide style guides en design systems',
      'Past service design methodieken toe in projecten',
      'Past visual storytelling toe in presentaties en producten'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Studenten leren service design principes, advanced visuele communicatie en motion design technieken.',
    kernfocus: 'Service design; Customer journeys; Advanced visual design; Motion design; Design systems',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1-S2, bereidt voor op specialisatiekeuze in S6'
    ],
    verbandenMetAndereLeerlijnen: ['Mens & Ervaring', 'Technologie & AI', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 3: Bekwaam - zelfstandig'
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    leerlijn: 'Design',
    globalDescription: 'Professional-level design met focus op voorbereiding op stage en portfolio ontwikkeling. Studenten creëren een professionele portfolio die hun ontwikkeling en beste werk showcaset. Ze leren designoplossingen presenteren voor professionele stakeholders en bereiden zich voor op de werkomgeving. Design systems en documentatie worden belangrijke onderdelen van hun werk.',
    introductie: 'Studenten werken aan complexe projecten en bereiden zich voor op de praktijk.',
    indicatoren: [
      'Stelt een professioneel portfolio samen',
      'Documenteert design systems en keuzes professioneel',
      'Levert complete projectdocumentatie op',
      'Presenteert werk tijdens portfolio reviews',
      'Bereidt zich voor op professionele stage via simulaties'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Focus op professionele design delivery, portfolio development en stagevoorbereiding.',
    kernfocus: 'Professional design; Portfolio; Stagevoorbereiding; Professional identity',
    verbandenMetAndereSemesters: [
      'Bereidt voor op S5 stage en S6 specialisatie'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring', 'Technologie & AI'],
    zelcomDescription: 'Niveau 4: Bekwaam - zelfstandig'
  },
  {
    semester: 5,
    semesterName: 'Praktijk',
    leerlijn: 'Design',
    globalDescription: 'In de stage passen studenten ontwerpkennis en -vaardigheden toe in een professionele context. Ze verbinden designprincipes met praktische werkprocessen, experimenteren met verschillende ontwerpmethoden en leveren ontwerpoplossingen die aansluiten bij de behoefte van de organisatie en eindgebruikers.',
    introductie: 'Impactvol ontwerpen gericht op',
    indicatoren: [
      'Levert high-fidelity eindontwerpen op in bedrijfscontext',
      'Past professionele storytelling toe in communicatie',
      'Draait mee in professionele design workflows',
      'Presenteert ontwerpen aan stakeholders',
      'Verkent persoonlijke specialisatie-interesses in de praktijk'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Professionele design workflows, stakeholder management en design delivery. Specialisatie interesses ontdekken.',
    kernfocus: 'Professionele ontwerpprocessen toepassen; Ontwerpwerk afstemmen op bedrijfsdoelen; Specialisatie-interesses verkennen',
    verbandenMetAndereSemesters: [
      'Past alle opgebouwde competenties toe',
      'Verkent specialisatie interesses voor semester 6'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring', 'Technologie & AI'],
    zelcomDescription: 'Niveau 5: Vaardig - adviserend'
  },
  // Semester 6 - Brand Design specialisatie
  {
    semester: 6,
    semesterName: 'Brand Design',
    leerlijn: 'Design',
    globalDescription: 'In deze specialisatie verdiepen studenten zich in merkidentiteit en visuele communicatie. Ze leren hoe design strategisch ingezet kan worden om merkwaarde te creëren en consistente visuele systemen te ontwikkelen die aansluiten bij de organisatiedoelen en een emotionele band creëren met doelgroepen.',
    introductie: 'Brand Design specialisten ontwikkelen',
    indicatoren: [
      'Ontwikkelt complete brand identity systems',
      'Stelt brand guidelines en handboeken op',
      'Formuleert visuele merkstrategieën',
      'Voert een volledig Brand Identity Project uit',
      'Bewaakt consistentie in visuele systemen'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Merkstrategie en identiteit; Visuele systemen en consistentie; Brand communication',
    verbandenMetAndereSemesters: [
      'Bouwt voort op visual design uit jaar 1-2',
      'Bereidt voor op brand-focused afstudeerproject'
    ],
    verbandenMetAndereLeerlijnen: ['Maatschappij & Toekomst', 'Organisatie & Strategie'],
    specialization: 'brand-design',
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  // Semester 6 - Immersive Design specialisatie
  {
    semester: 6,
    semesterName: 'Immersive Design',
    leerlijn: 'Design',
    globalDescription: 'In deze specialisatie exploreren studenten immersive technologieën zoals VR en AR. Ze verbinden technologische mogelijkheden met gebruikerservaring en leren ruimtelijke interfaces ontwerpen die de grenzen tussen digitaal en fysiek vervagen, met aandacht voor toegankelijkheid en menselijke perceptie.',
    introductie: 'Immersive Design specialisten creëren',
    indicatoren: [
      'Ontwerpt VR/AR experiences en prototypes',
      'Creëert spatial interfaces en interacties',
      'Bouwt immersive prototypes in engines of tools',
      'Voert Immersive Experience Projecten uit',
      'Past spatial design principes toe'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'VR/AR ontwerpprincipes; Spatial design; Immersive user experience',
    verbandenMetAndereSemesters: [
      'Bouwt voort op interaction design fundamenten',
      'Bereidt voor op immersive-focused afstudeerproject'
    ],
    verbandenMetAndereLeerlijnen: ['Technologie & AI', 'Mens & Ervaring'],
    specialization: 'immersive-design',
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  // Semester 6 - Digital Design specialisatie
  {
    semester: 6,
    semesterName: 'Digital Design',
    leerlijn: 'Design',
    globalDescription: 'In deze specialisatie ontwikkelen studenten expertise in digitale productontwikkeling en design systems. Ze leren complexe digitale diensten en producten ontwerpen die schaalbaar en onderhoudbaar zijn, en verbinden ontwerpprincipes met technische implementatie en bedrijfsdoelen.',
    introductie: 'Digital Design specialisten bouwen',
    indicatoren: [
      'Ontwerpt complexe digitale producten en diensten',
      'Bouwt schaalbare design systems',
      'Ontwikkelt service design blueprints',
      'Voert Digital Product Projecten uit',
      'Integreert UX strategie in product design'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Digital product design; Design systems; Service design en UX strategie',
    verbandenMetAndereSemesters: [
      'Bouwt voort op digital design uit jaar 1-2',
      'Bereidt voor op product-focused afstudeerproject'
    ],
    verbandenMetAndereLeerlijnen: ['Technologie & AI', 'Organisatie & Strategie'],
    specialization: 'digital-design',
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  {
    semester: 7,
    semesterName: 'Afstuderen',
    leerlijn: 'Design',
    globalDescription: 'De student toont meesterschap in het ontwerpdomein door een complex vraagstuk zelfstandig op te lossen.',
    introductie: 'Volledige professionele beheersing',
    indicatoren: [
      'Levert een professioneel ontwerp voor het kerndomein',
      'Presenteert een overtuigende eindpresentatie',
      'Voert een zelfgekozen Graduation Project uit',
      'Onderbouwt keuzes met diepgaand design research',
      'Verdedigt werk publiekelijk met overtuiging'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Mastery; Professionaliteit; Integratie van competenties',
    verbandenMetAndereSemesters: [
      'Culminatie van hele opleiding',
      'Demonstreert mastery in design'
    ],
    verbandenMetAndereLeerlijnen: ['Onderzoekend Vermogen', 'Organisatie & Strategie', 'Maatschappij & Toekomst'],
    zelcomDescription: sem7Zelcom
  },

  // ==================== TECHNOLOGIE & AI ====================
  {
    semester: 1,
    semesterName: 'BASE',
    leerlijn: 'Technologie & AI',
    globalDescription: 'Introductie in webtechnologie en programmeren. Studenten leren HTML, CSS en basis JavaScript en maken hun eerste interactieve prototypes. Ze ontdekken hoe technologie de basis vormt voor digitale ervaringen en experimenteren met responsive design principes. Developer tools en debugging worden geïntroduceerd om studenten vertrouwd te maken met de technische workflow.',
    introductie: 'Studenten maken kennis met de technische kant van CMD: HTML, CSS en basis JavaScript. Ze leren hoe websites gebouwd worden en maken hun eerste eenvoudige webpaginas.',
    indicatoren: [
      'Bouwt webpagina’s met semantische HTML en CSS',
      'Past responsive design principes toe',
      'Gebruikt basis JavaScript voor interactie',
      'Werkt met developer tools voor debugging',
      'Experimenteert met prototyping tools en AI'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Via hands-on projecten verkennen studenten technische tools en leren ze basis webfundamentals.',
    kernfocus: 'HTML & CSS basics; Responsive design; Basis JavaScript; Developer tools',
    verbandenMetAndereSemesters: [
      'Fundeert technische vaardigheden die in S2-S4 worden uitgebreid met frameworks, APIs en geavanceerde JavaScript'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: sem1Zelcom
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    leerlijn: 'Technologie & AI',
    globalDescription: 'Uitbreiding van technische vaardigheden met moderne webframeworks en externe data. Studenten leren React of andere JavaScript frameworks gebruiken om dynamische web applicaties te bouwen. API integratie wordt geïntroduceerd zodat studenten data van externe bronnen kunnen ophalen en verwerken. Version control met Git wordt een essentieel onderdeel van hun workflow.',
    introductie: 'Studenten verdiepen hun technische vaardigheden met JavaScript frameworks en API-integratie.',
    indicatoren: [
      'Bouwt dynamische interfaces met een JS framework (bijv. React)',
      'Integreert externe data via APIs',
      'Past version control (Git) toe in workflow',
      'Realiseert technische implementatie voor opdrachtgever',
      'Experimenteert met AI-toepassingen in code'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'JavaScript en API integratie worden geïntroduceerd. Technische haalbaarheid wordt onderdeel van het ontwerpproces.',
    kernfocus: 'JavaScript frameworks (React basics); API consumption; Data-driven interfaces; Version control (Git)',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1 HTML/CSS/JS, leidt naar S3 geavanceerde frameworks en S4 full-stack development'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Mens & Ervaring'],
    zelcomDescription: 'Niveau 2: Gevorderd - onder toezicht'
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    leerlijn: 'Technologie & AI',
    globalDescription: 'Full-stack development met focus op frontend frameworks, backend basics, databases en deployment. Studenten leren complete web applicaties bouwen met React of Vue aan de frontend en Node.js aan de backend. Database integratie (SQL en NoSQL) wordt geïntroduceerd, evenals API development en deployment naar production omgevingen. Studenten leren de volledige stack te beheersen.',
    introductie: 'Studenten leren full-stack development en werken met databases en APIs.',
    indicatoren: [
      'Ontwikkelt full-stack applicaties (frontend & backend)',
      'Ontwerpt en implementeert databases (SQL/NoSQL)',
      'Deployt applicaties naar live omgevingen',
      'Ontwikkelt eigen APIs',
      'Verdiept zich in advanced framework features'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Studenten ontwikkelen complete web applicaties met frontend, backend en database integratie.',
    kernfocus: 'React/Vue advanced; Node.js basics; Databases (SQL/NoSQL); API development; Deployment',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1-S2 frontend, bereidt voor op S4-S5 professionele development'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 3: Bekwaam - zelfstandig'
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    leerlijn: 'Technologie & AI',
    globalDescription: 'Advanced technische ontwikkeling met focus op production-ready code en professionele development workflows. Studenten leren complexe applicaties bouwen met clean architecture, testing en deployment pipelines. Database design en systeem integratie worden verder ontwikkeld. Code reviews, refactoring en professionele development standaarden worden de norm.',
    introductie: 'Exploreren van AI/AR/VR en emerging',
    indicatoren: [
      'Levert production-ready code op',
      'Ontwikkelt AI/AR/VR Proof of Concepts',
      'Bouwt complexe interactieve systemen',
      'Zet robuuste database architecturen op',
      'Past professionele deployment pipelines toe'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Production-ready code leveren en systeem integratie. Voorbereiding op werken in development teams.',
    kernfocus: 'Clean architecture; Testing; CI/CD; Advanced integrations',
    verbandenMetAndereSemesters: [
      'Integreert alle technische competenties uit jaar 1-2',
      'Bereidt voor op professionele praktijk'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 4: Bekwaam - zelfstandig'
  },
  {
    semester: 5,
    semesterName: 'Praktijk',
    leerlijn: 'Technologie & AI',
    globalDescription: 'In de stage passen studenten technische vaardigheden toe binnen professionele development teams. Ze leren werken met enterprise-level codebases, agile workflows en professionele development tools. Code quality, testing, refactoring en deployment pipelines worden dagelijkse praktijk. Studenten ontdekken verschillende technologische specialisaties en verkennen waar hun interesses liggen.',
    introductie: 'Strategische inzet van technologie',
    indicatoren: [
      'Draait mee in professionele development teams',
      'Levert robuuste prototypes en code op',
      'Past code reviews en refactoring toe',
      'Houdt rekening met ethiek in AI en technologie',
      'Werkt volgens Agile workflows'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Sprint planning, retrospectives en professionele development standaarden leren in de praktijk.',
    kernfocus: 'Professional development; Code quality; Agile; Enterprise systems',
    verbandenMetAndereSemesters: [
      'Past alle technische competenties toe in praktijk',
      'Leert professionele development workflows'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Design'],
    zelcomDescription: 'Niveau 5: Vaardig - adviserend'
  },
  {
    semester: 6,
    semesterName: 'Semester Specialisatie',
    leerlijn: 'Technologie & AI',
    globalDescription: 'Verdieping in technologische specialisatie en innovatie.',
    introductie: 'Tech-beslissingen worden strategisch',
    indicatoren: [
      'Voert een geavanceerd technisch specialisatieproject uit',
      'Doet onderzoek naar nieuwe technologieën',
      'Past expert coding techniques toe',
      'Ontwikkelt geavanceerde systemen',
      'Maakt strategische technische keuzes'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Expert development met advanced coding techniques. Technische mastery ontwikkelen voor afstudeerproject.',
    kernfocus: 'Tech innovation; Advanced implementation; Technical strategy',
    verbandenMetAndereSemesters: [
      'Bouwt voort op alle technische fundamenten',
      'Bereidt voor op technisch afstudeerproject'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  {
    semester: 7,
    semesterName: 'Afstuderen',
    leerlijn: 'Technologie & AI',
    globalDescription: 'Meesterschap in technische realisatie en innovatie.',
    introductie: 'Realistische, professionele en werkende',
    indicatoren: [
      'Levert werkende, complexe eindprototypes op',
      'Toont technische haalbaarheid en innovatie aan',
      'Documenteert code op professioneel niveau',
      'Demonstreert technische expertise in portfolio',
      'Ontwikkelt een technisch innovatieve oplossing'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Advanced technical solutions, technical leadership en professionele code documentatie op masterniveau.',
    kernfocus: 'Technical mastery; Innovation; Feasibility; Documentation',
    verbandenMetAndereSemesters: [
      'Culminatie van technische ontwikkeling door 4 jaar',
      'Demonstreert technical mastery'
    ],
    verbandenMetAndereLeerlijnen: ['Onderzoekend Vermogen', 'Design', 'Maatschappij & Toekomst'],
    zelcomDescription: sem7Zelcom
  },

  // ==================== MENS & ERVARING ====================
  {
    semester: 1,
    semesterName: 'BASE',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Introductie in UX en mensgerichte design. Studenten leren gebruikers te observeren en hun behoeften te begrijpen.',
    introductie: 'Studenten leren wat gebruikerservaring (UX) betekent en waarom het belangrijk is. Ze verkennen basale gebruikersonderzoek en leren empathie met gebruikers te ontwikkelen.',
    indicatoren: [
      'Stelt persona’s en empathy maps op',
      'Voert basaal gebruikersonderzoek uit (observaties, interviews)',
      'Past gebruikersgerichte visuele communicatie toe',
      'Toont empathie voor de eindgebruiker',
      'Verkent UX basics'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'UX basics; Gebruikersonderzoek (observatie, interviews); Persona ontwikkeling; Empathy mapping',
    verbandenMetAndereSemesters: [
      'Basis voor UX research in S2-S3, accessibility in S3, en gedragswetenschappen in S4-S5'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: sem1Zelcom
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Verdieping in gebruikersonderzoek en testing. Focus op iteratief ontwerpen op basis van gebruikersfeedback.',
    introductie: 'Studenten voeren usability testing uit met echte gebruikers en leren testresultaten te analyseren.',
    indicatoren: [
      'Voert usability tests uit met echte gebruikers',
      'Stelt testprotocollen en journey maps op',
      'Analyseert testresultaten en rapporteert bevindingen',
      'Past ontwerpen aan op basis van gebruikersfeedback',
      'Voert taakanalyses uit'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Usability testing; Task analysis; Test protocol ontwikkeling; Analyse en rapportage',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1 UX basics, leidt naar S3 kwantitatief onderzoek en advanced testing methoden'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 2: Gevorderd - onder toezicht'
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Advanced UX research, gedragspsychologie, persuasive design, accessibility.',
    introductie: 'Studenten leren geavanceerde onderzoeksmethoden en gedragspsychologie toepassen.',
    indicatoren: [
      'Voert A/B tests en kwantitatief onderzoek uit',
      'Voert accessibility audits uit (WCAG)',
      'Past persuasive design patterns toe',
      'Gebruikt data science inzichten in ontwerp',
      'Past gedragspsychologische principes toe'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Studenten verdiepen zich in kwantitatief onderzoek, gedragspsychologie en inclusive design principes.',
    kernfocus: 'Kwantitatief onderzoek; A/B testing; Gedragspsychologie; Persuasive design; WCAG',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1-S2 UX, bereidt voor op specialisatie UX research/design'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Maatschappij & Toekomst', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 3: Bekwaam - zelfstandig'
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Professionele UX strategie en stakeholder management.',
    kernfocus: 'UX Strategy; Stakeholder management; Co-creation',
    indicatoren: [
      'Voert een volledig UX proces uit voor een opdrachtgever',
      'Faciliteert stakeholder workshops en co-creatie',
      'Ontwikkelt een strategische UX roadmap',
      'Adviseert stakeholders op basis van UX inzichten',
      'Bewaakt de gebruikerservaring in complexe projecten'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Integreert alle UX competenties uit jaar 1-2',
      'Bereidt voor op professionele UX praktijk'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Organisatie & Strategie', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 4: Bekwaam - zelfstandig'
  },
  {
    semester: 5,
    semesterName: 'Praktijk',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Toepassing van UX expertise in de beroepspraktijk.',
    kernfocus: 'Professional UX; Advocacy; Data-driven design',
    indicatoren: [
      'Fun-geert als UX designer in een bedrijf',
      'Vertegenwoordigt gebruikersbelangen (User Advocacy)',
      'Gebruikt analytics en metrics voor beslissingen',
      'Werkt samen met developers en stakeholders',
      'Evalueert en verbetert live producten'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Past alle UX competenties toe in praktijk',
      'Leert professionele UX workflows en tools'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 5: Vaardig - adviserend'
  },
  {
    semester: 6,
    semesterName: 'Semester Specialisatie',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Specialisatie in user experience en advanced research.',
    kernfocus: 'Advanced UX; Research leadership; Strategic UX',
    indicatoren: [
      'Leidt een diepgaand UX specialisatieproject',
      'Past geavanceerde onderzoeksmethoden toe',
      'Neemt een strategische UX leiderschapsrol aan',
      'Ontwikkelt innovatieve user experiences',
      'Combineert kwalitatieve en kwantitatieve inzichten'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Bouwt voort op alle UX competenties',
      'Bereidt voor op UX focus in afstuderen'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen', 'Organisatie & Strategie'],
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  {
    semester: 7,
    semesterName: 'Afstuderen',
    leerlijn: 'Mens & Ervaring',
    globalDescription: 'Meesterschap in user experience en mensgericht ontwerpen.',
    kernfocus: 'UX Mastery; Human-centered innovation; Impact measurement',
    indicatoren: [
      'Realiseert een UX innovatie in het graduation project',
      'Voert origineel en diepgaand gebruikersonderzoek uit',
      'Meet en evalueert de impact van de ervaring',
      'Borgst de menselijke maat in complexe systemen',
      'Demonstreert UX mastery'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Culminatie van UX ontwikkeling',
      'Demonstreert UX mastery'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen', 'Maatschappij & Toekomst'],
    zelcomDescription: sem7Zelcom
  },

  // ==================== MAATSCHAPPIJ & TOEKOMST ====================
  {
    semester: 1,
    semesterName: 'BASE',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Eerste verkenning van de maatschappelijke impact van design.',
    introductie: 'Studenten reflecteren op de rol van design in de maatschappij en verkennen actuele trends en ontwikkelingen.',
    indicatoren: [
      'Schrijft reflectieverslagen over design impact',
      'Voert trendanalyses uit',
      'Benoemt ethische overwegingen in eigen werk',
      'Reflecteert op design in de maatschappij (Basecamp)',
      'Verkent maatschappelijke vraagstukken (Civic Duty)'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Studenten leren kritisch te kijken naar hun eigen ontwerpkeuzes en de bredere impact hiervan op de samenleving.',
    kernfocus: 'Design ethics basics; Duurzaamheid in design; Inclusief ontwerpen',
    verbandenMetAndereSemesters: [
      'Vormt bewustzijn dat verder wordt ontwikkeld in S3-S4 met ethics, sustainability en social design'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: sem1Zelcom
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Design voor social good en eerste kennismaking met design ethics.',
    introductie: 'Studenten werken aan projecten met maatschappelijke impact en leren ethische overwegingen meenemen in design.',
    indicatoren: [
      'Ontwerpt voor diverse doelgroepen (social design)',
      'Voert inclusiviteitsanalyses uit',
      'Maakt stakeholder maps inclusief kwetsbare groepen',
      'Werkt aan maatschappelijke projecten (Civic Duty)',
      'Evalueert inclusiviteit en toegankelijkheid'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Projecten zoals Feedpulse worden geëvalueerd op inclusiviteit en toegankelijkheid voor diverse gebruikersgroepen.',
    kernfocus: 'Social design; Inclusive design; Design impact; Stakeholder diversity',
    verbandenMetAndereSemesters: [
      'Vormt bewustzijn dat verder wordt ontwikkeld in S3-S4 met ethics, sustainability en social design'
    ],
    verbandenMetAndereLeerlijnen: ['Mens & Ervaring', 'Design'],
    zelcomDescription: 'Niveau 2: Gevorderd - onder toezicht'
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Ethisch en duurzaam ontwerpen, toekomstscenarios, social impact.',
    introductie: 'Studenten verdiepen zich in design ethics, sustainability en toekomstgericht ontwerpen.',
    indicatoren: [
      'Voert ethische analyses uit (privacy, dark patterns)',
      'Ontwikkelt toekomstscenario’s',
      'Stelt sustainability reports op',
      'Volgt de cursus Design Ethics',
      'Past principes van inclusief ontwerpen toe'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Design ethics, privacy, dark patterns, inclusief ontwerpen en future thinking staan centraal.',
    kernfocus: 'Design ethics; Dark patterns; Privacy; Sustainability; Inclusive design; Future thinking',
    verbandenMetAndereSemesters: [
      'Verdiept S1-S2 maatschappelijk bewustzijn, bereidt voor op S6-S7 strategic design'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Technologie & AI', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 3: Bekwaam - zelfstandig'
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Verantwoord en toekomstbestendig ontwerpen in complexe projecten.',
    kernfocus: 'Ethical design; Impact assessment; Long-term vision',
    indicatoren: [
      'Voert een ethisch verantwoord project uit',
      'Evalueert impact via stakeholder impact assessments',
      'Ontwikkelt een lange-termijn visie op het ontwerp',
      'Borgst maatschappelijke waarden in het ontwerpproces',
      'Reflecteert op toekomstige implicaties'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Integreert maatschappelijk bewustzijn in projecten',
      'Bereidt voor op verantwoordelijk handelen in praktijk'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Mens & Ervaring'],
    zelcomDescription: 'Niveau 4: Bekwaam - zelfstandig'
  },
  {
    semester: 5,
    semesterName: 'Praktijk',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Ethisch handelen en maatschappelijke verantwoordelijkheid in de beroepspraktijk.',
    kernfocus: 'Professional ethics; CSR; Sustainability practice',
    indicatoren: [
      'Maakt ethische keuzes in de stage-omgeving',
      'Draagt bij aan CSR projecten (Corporate Social Responsibility)',
      'Initieert of ondersteunt sustainability initiatieven',
      'Reflecteert op de maatschappelijke rol van het bedrijf',
      'Adviseert over ethische aspecten van opdrachten'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Past maatschappelijk bewustzijn toe in praktijk',
      'Leert omgaan met ethische dilemma\'s in bedrijven'
    ],
    verbandenMetAndereLeerlijnen: ['Organisatie & Strategie', 'Design'],
    zelcomDescription: 'Niveau 5: Vaardig - adviserend'
  },
  {
    semester: 6,
    semesterName: 'Semester Specialisatie',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Diepgaande verkenning van maatschappelijke vraagstukken en impact.',
    kernfocus: 'Social impact; Expert consultation; Thematic depth',
    indicatoren: [
      'Werkt aan een maatschappelijk thematisch project',
      'Voert gesprekken met experts over maatschappelijke thema’s',
      'Onderzoekt en rapporteert over maatschappelijke impact',
      'Integreert complexe ethische overwegingen',
      'Ontwikkelt oplossingen voor wicked problems'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Bouwt voort op maatschappelijk bewustzijn',
      'Bereidt voor op meaningful graduation project'
    ],
    verbandenMetAndereLeerlijnen: ['Onderzoekend Vermogen', 'Design'],
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  {
    semester: 7,
    semesterName: 'Afstuderen',
    leerlijn: 'Maatschappij & Toekomst',
    globalDescription: 'Verantwoord designleiderschap en visie op de toekomst.',
    kernfocus: 'Responsible leadership; Future vision; Long-term impact',
    indicatoren: [
      'Realiseert een maatschappelijk relevant graduation project',
      'Onderzoekt lange-termijn impact van het ontwerp',
      'Ontwikkelt en presenteert een toekomstvisie',
      'Toont verantwoordelijk designleiderschap',
      'Borgst ethische en duurzame waarden'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Culminatie van maatschappelijk bewustzijn',
      'Demonstreert verantwoord designleiderschap'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen', 'Organisatie & Strategie'],
    zelcomDescription: sem7Zelcom
  },

  // ==================== ORGANISATIE & STRATEGIE ====================
  {
    semester: 1,
    semesterName: 'BASE',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Introductie in professioneel werken en projectorganisatie binnen CMD context.',
    introductie: 'Studenten leren de basis van projectmanagement en samenwerken in teams. Ze verkennen verschillende rollen binnen een ontwerpteam.',
    indicatoren: [
      'Stelt projectplannen op',
      'Schrijft teamreflecties',
      'Presenteert resultaten aan docenten/peers',
      'Werkt samen in teams (Basecamp, projecten)',
      'Verkent teamrollen en Agile/Scrum basics'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Projectmanagement basics; Teamrollen; Agile/Scrum introductie; Communicatie in teams',
    verbandenMetAndereSemesters: [
      'Grondslag voor complexere projecten in S2-S4 en stagevoorbereiding in S4'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: sem1Zelcom
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Professionele communicatie en projectmanagement in opdrachtgeverscontext.',
    introductie: 'Studenten leren communiceren met opdrachtgevers en projecten professioneel aanpakken.',
    indicatoren: [
      'Stelt opdrachtgeversrapportages op',
      'Presenteert voortgang en eindproduct aan opdrachtgever',
      'Verwerkt feedback in documenten en ontwerp',
      'Onderhoudt communicatie met opdrachtgever',
      'Past Agile werken toe in projectplanning'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Opdrachtgever communicatie; Presenteren; Feedback verwerken; Agile werken',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1 teamwork, bereidt voor op S4 stagevoorbereiding en S5 praktijk'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Technologie & AI'],
    zelcomDescription: 'Niveau 2: Gevorderd - onder toezicht'
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Workshop facilitatie, co-creation, agile/scrum, stakeholder management.',
    introductie: 'Studenten leren faciliteren, workshops organiseren en agile werken.',
    indicatoren: [
      'Ontwerpt en faciliteert workshops',
      'Stelt stakeholder analyses op',
      'Maakt sprint planningen en backlogs',
      'Neemt een leidende rol in teams (bijv. team lead)',
      'Past co-creatie methodieken toe'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Facilitatievaardigheden, co-creation methodieken en agile werken worden ontwikkeld.',
    kernfocus: 'Facilitatie; Co-creation; Agile/Scrum; Stakeholder management; Design ops',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1-S2 teamwork, bereidt voor op S5 professionele context'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Maatschappij & Toekomst'],
    zelcomDescription: 'Niveau 3: Bekwaam - zelfstandig'
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Strategisch projectmanagement en business alignment.',
    kernfocus: 'Client Management; Strategic presentation; Business goals',
    indicatoren: [
      'Managet projecten voor externe opdrachtgevers',
      'Geeft strategische presentaties',
      'Stemt ontwerp af op business doelen',
      'Beheert verwachtingen van stakeholders',
      'Organiseert professionele projectdocumentatie'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Integreert alle projectcompetenties',
      'Bereidt voor op professionele stage'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Mens & Ervaring', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 4: Bekwaam - zelfstandig'
  },
  {
    semester: 5,
    semesterName: 'Praktijk',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Professioneel functioneren in een organisatie.',
    kernfocus: 'Professionalism; Networking; Career development',
    indicatoren: [
      'Werkt als professional in een organisatie (Stage)',
      'Bouwt een professioneel netwerk op',
      'Stelt een loopbaanontwikkelingsplan op',
      'Functioneert binnen de organisatiecultuur',
      'Reflecteert op professionele houding'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Past alle professionele competenties toe',
      'Leert organisatieculturen kennen'
    ],
    verbandenMetAndereLeerlijnen: ['Mens & Ervaring', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 5: Vaardig - adviserend'
  },
  {
    semester: 6,
    semesterName: 'Semester Specialisatie',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Leiderschap en strategisch advies.',
    kernfocus: 'Leadership; Consultancy; Strategy',
    indicatoren: [
      'Leidt een strategisch project',
      'Ontwikkelt leiderschapsvaardigheden',
      'Adviseert als consultant',
      'Stuurt multidisciplinaire processen aan',
      'Bepaalt strategische koers in projecten'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Bouwt voort op professionele vaardigheden',
      'Bereidt voor op strategische rol na afstuderen'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Onderzoekend Vermogen'],
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  {
    semester: 7,
    semesterName: 'Afstuderen',
    leerlijn: 'Organisatie & Strategie',
    globalDescription: 'Strategisch leiderschap en business impact.',
    kernfocus: 'Strategic leadership; Business impact; Professional identity',
    indicatoren: [
      'Realiseert een strategisch innovatieproject (Graduation)',
      'Demonstreert business impact (Business Case)',
      'Presenteert zich als professional aan het werkveld',
      'Neemt eindverantwoordelijkheid voor het proces',
      'Toont strategisch inzicht in de context'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Culminatie van professionele ontwikkeling',
      'Demonstreert strategic leadership'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Maatschappij & Toekomst', 'Onderzoekend Vermogen'],
    zelcomDescription: sem7Zelcom
  },

  // ==================== ONDERZOEKEND VERMOGEN ====================
  {
    semester: 1,
    semesterName: 'BASE',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Introductie in onderzoeksmethoden relevant voor CMD, met focus op kwalitatief gebruikersonderzoek.',
    introductie: 'Studenten leren de basis van ontwerpgericht onderzoek: observeren, vragen stellen en informatie verzamelen.',
    indicatoren: [
      'Stelt eenvoudige onderzoeksrapporten op',
      'Voert interviews uit',
      'Verricht desk research',
      'Past observatietechnieken toe',
      'Hanteert correcte bronvermelding'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Observatietechnieken; Interview basics; Desk research; Bronvermelding',
    verbandenMetAndereSemesters: [
      'Basis voor kwantitatief onderzoek in S2, mixed methods in S3-S4, en afstudeeronderzoek in S7'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Mens & Ervaring'],
    zelcomDescription: sem1Zelcom
  },
  {
    semester: 2,
    semesterName: 'CHALLENGE',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Toepassing van onderzoeksmethoden in projectcontext en eerste rapportage skills.',
    introductie: 'Studenten leren systematisch onderzoek doen en resultaten rapporteren.',
    indicatoren: [
      'Schrijft onderzoeksrapporten en design rationale',
      'Voert data-analyses uit',
      'Zet een onderzoeksopzet in elkaar',
      'Selecteert passende onderzoeksmethoden',
      'Voert onderzoek uit in opdracht van een klant'
    ],
    verbindingMetRestVanOpleiding: '',
    kernfocus: 'Onderzoeksopzet; Methode selectie; Data analyse; Rapportage',
    verbandenMetAndereSemesters: [
      'Bouwt voort op S1 onderzoek basics, bereidt voor op S3 advanced research methods'
    ],
    verbandenMetAndereLeerlijnen: ['Mens & Ervaring', 'Design'],
    zelcomDescription: 'Niveau 2: Gevorderd - onder toezicht'
  },
  {
    semester: 3,
    semesterName: 'EXPLORE',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Mixed methods research, data analyse, research design, academic writing.',
    introductie: 'Studenten leren advanced research methods en data analyse.',
    indicatoren: [
      'Stelt uitgebreide research reports en papers op',
      'Maakt data visualisaties',
      'Past mixed methods toe (kwalitatief & kwantitatief)',
      'Hanteert academic writing standaarden',
      'Voert comprehensive research uit in thema-projecten'
    ],
    verbindingMetRestVanOpleiding: '',
    detailedDescription: 'Geavanceerde onderzoeksmethoden, data-analyse en academic writing worden ontwikkeld.',
    kernfocus: 'Mixed methods; Kwantitatief onderzoek; Data analyse; Research design; Academic writing',
    verbandenMetAndereSemesters: [
      'Bereidt voor op S6 specialisatie research en S7 afstudeeronderzoek'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Technologie & AI', 'Mens & Ervaring'],
    zelcomDescription: 'Niveau 3: Bekwaam - zelfstandig'
  },
  {
    semester: 4,
    semesterName: 'CONNECT',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Praktijkgericht onderzoek voor externe opdrachtgevers.',
    kernfocus: 'Client research; Evidence-based design; Presentation',
    indicatoren: [
      'Voert onderzoek uit voor een externe opdrachtgever',
      'Onderbouwt ontwerpbeslissingen (Evidence-Based Design)',
      'Presenteert onderzoeksresultaten overtuigend',
      'Vertaalt inzichten naar ontwerpoplossingen',
      'Evalueert de betrouwbaarheid van bronnen'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Integreert alle onderzoekscompetenties',
      'Bereidt voor op onderzoek in praktijk'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Organisatie & Strategie', 'Mens & Ervaring'],
    zelcomDescription: 'Niveau 4: Bekwaam - zelfstandig'
  },
  {
    semester: 5,
    semesterName: 'Praktijk',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Onderzoekend vermogen in de beroepspraktijk.',
    kernfocus: 'Professional research; User insights; Data-driven advice',
    indicatoren: [
      'Voert onderzoek uit in de stage-omgeving',
      'Genereert relevante gebruikersinzichten',
      'Geeft data-gedreven adviezen',
      'Past onderzoeksmethoden toe in een zakelijke context',
      'Evalueert de effectiviteit van oplossingen'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Past onderzoekscompetenties toe in praktijk',
      'Leert professionele research workflows'
    ],
    verbandenMetAndereLeerlijnen: ['Mens & Ervaring', 'Organisatie & Strategie'],
    zelcomDescription: 'Niveau 5: Vaardig - adviserend'
  },
  {
    semester: 6,
    semesterName: 'Semester Specialisatie',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Verdiepend en specialistisch onderzoek.',
    kernfocus: 'Specialized research; Academic depth; Methodological expertise',
    indicatoren: [
      'Voert een diepgaand gespecialiseerd onderzoeksproject uit',
      'Bestudeert en verwerkt wetenschappelijke literatuur',
      'Ontwikkelt methodologische expertise',
      'Draagt bij aan kennisontwikkeling',
      'Valideert complexe aannames'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Bouwt voort op alle onderzoekscompetenties',
      'Bereidt voor op graduation research'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Technologie & AI', 'Mens & Ervaring'],
    zelcomDescription: 'Niveau 6: Expert - specialistisch'
  },
  {
    semester: 7,
    semesterName: 'Afstuderen',
    leerlijn: 'Onderzoekend Vermogen',
    globalDescription: 'Meesterschap in onderzoek en verantwoording.',
    kernfocus: 'Research mastery; Thesis; Defense; Original contribution',
    indicatoren: [
      'Voert origineel afstudeeronderzoek uit',
      'Schrijft een scriptie/thesis op hbo-niveau',
      'Verdedigt onderzoek en resultaten',
      'Toont methodologische verantwoording aan',
      'Levert een bijdrage aan het vakgebied'
    ],
    verbindingMetRestVanOpleiding: '',
    verbandenMetAndereSemesters: [
      'Culminatie van onderzoeksontwikkeling',
      'Demonstreert research mastery'
    ],
    verbandenMetAndereLeerlijnen: ['Design', 'Technologie & AI', 'Mens & Ervaring', 'Maatschappij & Toekomst'],
    zelcomDescription: sem7Zelcom
  },
];

// Helper functie om progressions per leerlijn op te halen
export function getLeerlijnProgressions(leerlijn: Leerlijn): LeerlijnSemesterDetail[] {
  return leerlijnProgressions.filter(p => p.leerlijn === leerlijn);
}

// Helper functie om detail voor specifiek semester en leerlijn op te halen
export function getLeerlijnSemesterDetail(leerlijn: Leerlijn, semester: number): LeerlijnSemesterDetail | undefined {
  return leerlijnProgressions.find(p => p.leerlijn === leerlijn && p.semester === semester);
}
