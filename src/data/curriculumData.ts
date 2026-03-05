// Centraal data bestand voor CMD Utrecht curriculum

export interface SemesterActivity {
  semester: number;
  semesterNaam: string;
  activiteit: string;
  duur: string;
  leeruitkomst: string;
  beschrijving: string;
  speelvelden: string;
  kennis: string;
  vaardigheden: string;
  houding: string;
  deliverables?: string;
}

export interface SpeelveldData {
  semester: number;
  semesterNaam: string;
  specialisatieNaam?: string; // Voor semester 6 specialisaties
  jaar: number;
  zelcomNiveau?: string;
  speelveld: string;
  introductie: string;
  globaleBeschrijving: string;
  kernfocus: string;
  leeruitkomsten?: string; // Leeruitkomsten voor dit speelveld in dit semester
  typischeActiviteiten: string;
  verbandenMetAndereSemesters: string;
}

export interface LeeruitkomstProgressie {
  semester: number;
  semesterNaam: string;
  leeruitkomst: string;
  beschrijving: string;
}

// TAB 1: Data voor "Per Semester" tab
export const semesterActiviteiten: SemesterActivity[] = [
  // ==================== SEMESTER 1 BASE ====================
  // Basecamp
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Basecamp',
    duur: '1 week',
    leeruitkomst: 'context',
    beschrijving: '',
    speelvelden: 'Design',
    kennis: 'Basis introductie in Design thinking (context)',
    vaardigheden: 'informatie verzamelen rondom een ontwerpvraag',
    houding: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.',
    deliverables: 'Geen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Basecamp',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    beschrijving: '',
    speelvelden: 'Design',
    kennis: 'Basis introductie in Design thinking (ontwerpen)',
    vaardigheden: 'Snel ideeen verkennen; Veel experimenteren en maken onder tijdsdruk',
    houding: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.',
    deliverables: 'Geen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Basecamp',
    duur: '1 week',
    leeruitkomst: 'prototype',
    beschrijving: '',
    speelvelden: 'Design',
    kennis: 'Basis introductie in Design thinking (prototype & testen)',
    vaardigheden: 'gestuurd iteratief te werk gaan',
    houding: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.',
    deliverables: 'al het gemaakte werk uploaden in Portflow'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Basecamp',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    beschrijving: '',
    speelvelden: 'Design',
    kennis: 'Geen',
    vaardigheden: 'Pro-actief deelnemen aan groepsproces',
    houding: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.',
    deliverables: 'Collage / presentatie leerteam'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Basecamp',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    beschrijving: '',
    speelvelden: 'Design',
    kennis: 'Geen',
    vaardigheden: 'Eerste reflecties (eerste week) op kunnen schrijven',
    houding: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.',
    deliverables: 'Reflectie eerste week'
  },

  // Visual Design
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Visual Design',
    duur: '4 weken',
    leeruitkomst: 'context',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Onderzoekend vermogen',
    kennis: 'Good, best and bad practices; Interviews',
    vaardigheden: 'Aangereikte Onderzoekmethodes uitvoeren (passende grondigheid); Benaderen en in gesprek gaan met doelgroep; Onderzoeksresultaten inzichtelijk delen',
    houding: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.',
    deliverables: 'Uitgewerkte Good, best & bad practices; Uitgewerkte interview opzet en resultaten'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Visual Design',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Onderzoekend vermogen',
    kennis: 'Boek Grafisch ontwerp deel 1; Moodboards en mindmaps; Basisbegrip concepten',
    vaardigheden: 'Digitaal en analoog ideeen uitwerken; Out of the box denken',
    houding: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.',
    deliverables: 'Overzicht iteratief proces; Meerdere conceptuitwerkingen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Visual Design',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Onderzoekend vermogen',
    kennis: 'Boek Grafisch ontwerp Deel 1; Kennis van ontwerptools; Peer review',
    vaardigheden: 'Basics Adobe Skills (photoshop, illustrator); Doelgroepen bevragen over gemaakte low, en high fi prototypes',
    houding: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.',
    deliverables: 'Digitaal ontwerp van poster die voldoet aan de theorie rondom compositie, typografie en kleur; Huisstijl handboek'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Visual Design',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Onderzoekend vermogen',
    kennis: 'Wat, hoe en waarom van een retrospective; Feedback leren vragen (zo doe je dat) leerteamactiviteit',
    vaardigheden: 'Actief en constructief feedback geven en ontvangen op de samenwerking; Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche)',
    houding: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.',
    deliverables: 'Terugblik op samenwerking project Visual'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Visual Design',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Onderzoekend vermogen',
    kennis: 'Reflectiemethodes (STARR en Korthagen)',
    vaardigheden: 'Verantwoordelijkheidsgevoel (eigenaarschap tonen in leer, en werkproces)',
    houding: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.',
    deliverables: 'Reflectie op leerproces en eigen ontwikkeling tijdens Visual design'
  },

  // Interaction Design
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Interaction Design',
    duur: '4 weken',
    leeruitkomst: 'context',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Onderzoekend vermogen',
    kennis: 'User centered design; UI Design patterns (https://ui-patterns.com/); Good, best and bad practices',
    vaardigheden: 'Het in kaart brengen van behoeften, gedragingen van belanghebbenden; Het interpreteren van resultaten in relatie tot de ontwerpvraag',
    houding: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.',
    deliverables: 'Uitgewerkte Good, best & bad practices; Vertaling van gebruikersinzichten naar richtinggevende Design criteria / ontwerpprincipes'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Interaction Design',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Onderzoekend vermogen',
    kennis: 'User stories; Customer journey maps; Card sorting; Reader Interaction Design',
    vaardigheden: 'Verwerkt onderzoeksconclusies aantoonbaar in ontwerpbeslissingen; Ontwikkelt, test en verfijnt ontwerpen iteratief op basis van feedback en inzichten',
    houding: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.',
    deliverables: 'Customer journey map (huidige en gewenste situatie); Uitgewerkte user stories'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Interaction Design',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Onderzoekend vermogen',
    kennis: 'Flowcharts en wireframes; Heuristieken van Nielsen; Usability testing; Levels of fidelity (low/paper - high clickable)',
    vaardigheden: 'flowcharts en wireframes maken; Basics Figma (design file); Opzetten en uitvoeren van usability tests',
    houding: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.',
    deliverables: 'Uitgewerkte flowcharts en wireframes; Een klikbaar high-fi prototype van de verbeterde website in Figma.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Interaction Design',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Onderzoekend vermogen',
    kennis: 'Wat, hoe en waarom van een retrospective; Feedbackgeletterdheid:geven én ontvangen van feedback (leerteamactiviteit)',
    vaardigheden: 'Actief en constructief feedback geven en ontvangen; Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche); Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen; Reflecteren op groepsproces en de eigen rol daarin',
    houding: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.',
    deliverables: 'Terugblik op samenwerking en eigen rol in het Interaction design project.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Interaction Design',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Onderzoekend vermogen',
    kennis: 'Reflectiemethodes (STARR en Korthagen); Zelfsturend leren: regie nemen over eigen leerproces (leerteamactiviteit)',
    vaardigheden: 'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces; Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling',
    houding: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.',
    deliverables: 'Reflectie op leerproces en eigen ontwikkeling tijdens Visual design'
  },

  // Workshopweek
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'context',
    beschrijving: '',
    speelvelden: '',
    kennis: 'Afhankelijk van specfieke workshop',
    vaardigheden: 'Afhankelijk van specfieke workshop',
    houding: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.',
    deliverables: 'Geen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    beschrijving: '',
    speelvelden: '',
    kennis: 'Afhankelijk van specfieke workshop',
    vaardigheden: 'Afhankelijk van specfieke workshop',
    houding: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.',
    deliverables: 'Geen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'prototype',
    beschrijving: '',
    speelvelden: '',
    kennis: 'Afhankelijk van specfieke workshop',
    vaardigheden: 'Afhankelijk van specfieke workshop',
    houding: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.',
    deliverables: 'Geen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    beschrijving: '',
    speelvelden: '',
    kennis: 'Geen specifieke kennis, tenzij aangeboden in workshop',
    vaardigheden: 'Afhankelijk van specfieke workshop',
    houding: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.',
    deliverables: 'Geen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    beschrijving: '',
    speelvelden: '',
    kennis: 'Geen specifieke kennis, tenzij aangeboden in workshop',
    vaardigheden: 'Zelfstandigheid in het kiezen van relevante workshops en deze koppelen aan eerder ontvangen feedback',
    houding: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.',
    deliverables: 'Reflectie op leerproces en eigen ontwikkeling tijdens Visual design'
  },

  // Social Design
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Social Design',
    duur: '4 weken',
    leeruitkomst: 'context',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Maatschappij en toekomst, Onderzoekend vermogen',
    kennis: 'Design probes (talking piece); Doelgroep onderzoek; Introductie in Social Design',
    vaardigheden: 'Interview technieken; Onderzoeksvaardigheden; Documenteren, inzichtelijk maken & concluderen; Empatisch vermogen (inleven in doelgroep)',
    houding: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.',
    deliverables: 'Doelgroepdossier; Good, best, bad practices van social design'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Social Design',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Maatschappij en toekomst, Onderzoekend vermogen',
    kennis: 'Vervolg conceptontwikkeling; Co-creatie introductie; Brainstormtechnieken',
    vaardigheden: 'Conceptueel denken; Weten wanneer te brainstormen (Ideeën genereren, selecteren en uitwerken) theorie; Co-creëren met gebruikers en teamleden; Argumenteren en onderbouwen van ontwerpkeuzes',
    houding: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.',
    deliverables: 'Ideeselectie en -uitwerking; Meerdere conceptuitwerkingen'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Social Design',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Maatschappij en toekomst, Onderzoekend vermogen',
    kennis: 'Iteratief werken en testen met gebruikers; Feedback verwerken en herontwerpen',
    vaardigheden: 'Fysieke prototypes maken; testresultaten vertalen naar verbeteringen; Eindresultaat overtuigend presenteren Eindresultaat verantwoorden',
    houding: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.',
    deliverables: 'Maquette van de immersieve ervaring; immersive prototype; een plek/situatie/oplossing waar mensen het werkende high-fi prototype kunnen ervaren'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Social Design',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Maatschappij en toekomst, Onderzoekend vermogen',
    kennis: 'Wat, hoe en waarom van een retrospective; Feedbackgeletterdheid:geven én ontvangen van feedback (leerteamactiviteit)',
    vaardigheden: 'Actief en constructief feedback geven en ontvangen; Toepassen retrospective methodes (bijvoorbeeld DAKI, warme douche); Teamgericht werken: samenwerken, rollen afstemmen en verantwoordelijkheid nemen; Reflecteren op groepsproces en de eigen rol daarin',
    houding: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.',
    deliverables: 'Terugblik op samenwerking en eigen rol in het social design projecg'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Social Design',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI, Mens en ervaring, Maatschappij en toekomst, Onderzoekend vermogen',
    kennis: 'Reflectiemethodes (STARR en Korthagen); Zelfsturend leren: regie nemen over eigen leerproces (leerteamactiviteit)',
    vaardigheden: 'Zelfsturend leren: plannen, monitoren en bijsturen van eigen leerproces; Eigenaarschap en proactiviteit tonen: verantwoordelijkheid nemen voor persoonlijke ontwikkeling',
    houding: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.',
    deliverables: 'Een reflectie op individuele bijdrage social design project'
  },

  // Hackathon
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'context',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI',
    kennis: 'Informatie verzamelen over n het thema van de film',
    vaardigheden: 'Geen',
    houding: 'Studenten tonen nieuwsgierigheid naar gebruikers en context, empathie voor belanghebbenden en een onderzoekende houding bij het verzamelen van informatie. Ze stellen vragen in plaats van direct oplossingen te zoeken en staan open voor nieuwe perspectieven.',
    deliverables: 'al het relevante werk waarin is gewerkt tijdens de hackathon'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI',
    kennis: 'Basisprincipes van storytelling en scenario schrijven; Storyboards',
    vaardigheden: 'Experimenteren met verschillende verhaallijnen en stijlen voor film',
    houding: 'Studenten durven risico\'s te nemen bij het experimenteren en zijn bereid om fouten te maken als onderdeel van het leerproces. Ze tonen geduld en accepteren dat goede concepten ontwikkelen tijd nodig heeft. Spelenderwijs verkennen ze mogelijkheden zonder direct te oordelen.',
    deliverables: 'al het relevante werk waarin is gewerkt tijdens de hackathon'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'prototype',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI',
    kennis: 'Basis filmtechnieken (camera, montage)',
    vaardigheden: 'Ontwerpideeen doorvertalen naar een overtuigende eindproductie',
    houding: 'Studenten tonen moed om imperfecte prototypes te delen en accepteren dat vroege versies ruw mogen zijn. Ze hebben lage drempel voor het maken van testversies en staan open voor feedback. Nieuwsgierigheid naar gebruikersreacties en docentenfeedback overstijgt angst voor kritiek of falen.',
    deliverables: 'eindproductie Film'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI',
    kennis: 'Geen',
    vaardigheden: 'Samenwerken in een team en rekening houden met teamleden',
    houding: 'Studenten tonen een meewerkende open houding door actief bij te dragen aan project/teamdoelen. Ze staan open om feedback te ontvangen en kunnen het ook geven. Ze nemen initiatief om hulp te vragen en ondersteuning te bieden aan teamgenoten. Bescheidenheid om van anderen te leren combineert met moed om eigen bijdragen te leveren.',
    deliverables: 'Verslag van samenwerkingbinnen leerteam'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    beschrijving: '',
    speelvelden: 'Design, Technologie & AI',
    kennis: 'Geen',
    vaardigheden: 'Reflecteren op de samenwerking en het eigen aandeel in het teamproce',
    houding: 'Studenten staan open om te leren van fouten en successen, tonen zich betrokken en aanwezig tijdens leeractiviteiten en feedback-momenten. Hun leergierigheid uit zich in het stellen van vragen en zoeken naar nieuwe kennis. Growth mindset helpt hen uitdagingen te zien als kansen, terwijl reflectieve houding hen bewust maakt van hun leerproces.',
    deliverables: 'Kort reflectieverslag over het leerproces tijdens de ahackathon week'
  },

  // ==================== SEMESTER 2 CHALLENGING ====================
  // Opdrachtgever project (6 weken) - eerste
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project',
    duur: '6 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Onderzoeksopzet maken; Stakeholderanalyse; Probleemdefinitie (vraag achter de vraag); APA bronvermelding; Design thinking verdieping (Empatise)',
    vaardigheden: 'Onderzoeksmethoden selecteren en uitvoeren; Relevante informatie verzamelen en analyseren; Inzichten formuleren en onderbouwen; Gebruikersbehoeften vertalen naar kaders voor ontwerp',
    houding: 'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes. Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project',
    duur: '6 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Ontwerpen in professionele setting; Briefing en debriefing; brainstorm- en conceptmethodieken; Guiding principles; Design thinking verdieping (Define en Ideate); Design thinking - Frames (Samenvatting Siebe de Boer)',
    vaardigheden: 'Concepten genereren, vergelijken en selecteren; Ontwerpkeuzes onderbouwen; Iteratief werken met meerdere versies',
    houding: 'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting. Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten. Verder werken de studenten aan creative confidence.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project',
    duur: '6 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Mom test; Design thinking verdieping (Prototype & testen); Kennis van feedbackanalyse',
    vaardigheden: 'Prototypes maken die aansluiten bij gekozen concept; Testplannen opstellen en uitvoerbare tests ontwerpen; Testresultaten analyseren en prioriteren; Verbeteringen doorvoeren op basis van inzichten',
    houding: 'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen. Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen. Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project',
    duur: '6 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Groepsdynamieken; Feedback, feedup, feedforward; Begrip van samenwerkingsmodellen (rollen, afspraken, planning); Inzicht in communicatievormen richting opdrachtgever; Selecteren van feedbackmethodieken',
    vaardigheden: 'Communiceren met opdrachtgever en team; Samenwerkingsproces organiseren; Presenteren van werk en ontwerpkeuzes',
    houding: 'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking. Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project',
    duur: '6 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in persoonlijke leerdoelen en groei-indicatoren; Kennis van documentatietechnieken (dummy, procesverslag)',
    vaardigheden: 'Reflecteren op eigen ontwikkeling; Feedback vertalen naar concrete leerdoelen; Proces en leermomenten documenteren',
    houding: 'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht. Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen. Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten.'
  },

  // Eigen project
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Eigen project',
    duur: '4 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inzicht in het volledige Design Thinking-proces: van onderzoek en idee tot prototype; Onderzoek naar de context, discipline en/of thematiek van de gekozen ontwerprichting; Basiskennis van creatieve methoden, technieken en iteratieve werkwijzen; Kennis van inspiratie onderzoek naar relevante makers; Inzichten uit boek Hands on Research vertaald in project',
    vaardigheden: 'Zelfstandig een creatief proces doorlopen: onderzoeken, experimenteren, ontwerpen en reflecteren; Relevante methoden en technieken inzetten om ideeën te ontwikkelen en keuzes te onderbouwen; Resultaten en voortgang zichtbaar maken in beroepsproducten (dummy, schetsen, prototypes); Aantoonbare nieuwsgierigheid en interesse tonen om creatief onderzoek te doen',
    houding: 'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes. Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Eigen project',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Basisprincipes van professioneel en ondernemend werken als ontwerper; Inzicht in persoonlijke kwaliteiten, leerdoelen en verantwoordelijkheden binnen het ontwerpproces; Hands on research; Kennis van inspiratie onderzoek naar ontwerpkeuzes; Inzicht in hoe ontwerpkeuzes samenhangen met onderzoek, doelgroep en doelstelling; Inzichten uit boek Hands on Research vertaald in project',
    vaardigheden: 'Planmatig en doelgericht werken binnen zelfgekozen kaders; Eigen leerproces sturen op basis van feedback en reflectie; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat; Inzicht hoe creative confidence een creatief proces kan verbeteren',
    houding: 'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting. Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten. Verder werken de studenten aan creative confidence.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Eigen project',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Kennis van communicatieve en visuele presentatievormen; Inzichten uit boek Hands on Research vertaald in project',
    vaardigheden: 'Eigen werk helder en proffesioneeel exposeren; Design Thinking zelfstandig toepassen: methodes combineren, selecteren en onderbouwen; Feedback gebruiken om ontwerp en proces verder te verbeteren',
    houding: 'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen. Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen. Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Eigen project',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in het betrekken van experts/docenten bij zelf gestuurd werk; Inzichten uit boek Hands on Research vertaald in project',
    vaardigheden: 'Feedback vragen bij relevante docenten/experts; Persoonlijke motivatie verbinden aan ontwerpkeuzes; Resultaten presenteren in een expositiecontext',
    houding: 'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking. Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Eigen project',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Begrip van autonomie binnen het leerproces; Kennis van methodes om leerontwikkeling vast te leggen; Inzicht in hoe persoonlijke fascinatie een leercurve vormt; Inzichten uit boek Hands on Research vertaald in project',
    vaardigheden: 'Reflecteren op eigen ontwikkeling; Feedback vertalen naar concrete Leerdoelen; Proces en leermomenten documenteren; Reflecteren op de inzichten die zijn meegenomen uit de schouw tijdens semester Base',
    houding: 'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht. Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen. Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten.'
  },

  // Workshopweek
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Nieuwe tools en methodes uit de ontwerppraktijk; Afhankelijk van specfieke workshop',
    vaardigheden: 'Afhankelijk van specfieke workshop',
    houding: 'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes. Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Tools en methodes uit het werkveld; Afhankelijk van specfieke workshop',
    vaardigheden: 'Afhankelijk van specfieke workshop',
    houding: 'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting. Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten. Verder werken de studenten aan creative confidence.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Presentatievormen en feedbackmethodes binnen creatieve processen; Afhankelijk van specfieke workshop',
    vaardigheden: 'Feedback verzamelen, analyseren en gebruiken om het eindproduct te verbeteren; Afhankelijk van specfieke workshop',
    houding: 'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen. Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen. Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Geen (tenzij specifiek in workshop aangereikt)',
    vaardigheden: 'Samenwerken met medestudenten buiten het cluster',
    houding: 'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking. Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Workshopweek',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Geen (tenzij specifiek in workshop aangereikt)',
    vaardigheden: 'Zelfstandig reflecteren op leermomenten',
    houding: 'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht. Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen. Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten.'
  },

  // Opdrachtgever project (6 weken) - tweede
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project 2',
    duur: '6 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Onderzoeksopzet maken; Stakeholderanalyse; Probleemdefinitie (vraag achter de vraag); Verdieping op doelgroeponderzoek; archetypes, motivaction-model; APA bronvermelding; Design thinking verdieping (Empatise)',
    vaardigheden: 'Onderzoeksmethoden selecteren en uitvoeren; Relevante informatie verzamelen en analyseren; Inzichten formuleren en onderbouwen; Gebruikersbehoeften vertalen naar kaders voor ontwerp',
    houding: 'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes. Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project 2',
    duur: '6 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Ontwerpen in professionele setting; Briefing en debriefing; brainstorm- en conceptmethodieken; Guiding principles; Design thinking verdieping (Define en Ideate); Design thinking - Frames (Samenvatting Siebe de Boer)',
    vaardigheden: 'Concepten genereren, vergelijken en selecteren; Ontwerpkeuzes onderbouwen; Iteratief werken met meerdere versies',
    houding: 'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting. Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten. Verder werken de studenten aan creative confidence.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project 2',
    duur: '6 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Mom test; Design thinking verdieping (Prototype & testen); Kennis van feedbackanalyse',
    vaardigheden: 'Prototypes maken die aansluiten bij gekozen concept; Testplannen opstellen en uitvoerbare tests ontwerpen; Testresultaten analyseren en prioriteren; Verbeteringen doorvoeren op basis van inzichten',
    houding: 'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen. Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen. Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project 2',
    duur: '6 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Groepsdynamieken; Feedback, feedup, feedforward; Begrip van samenwerkingsmodellen (rollen, afspraken, planning); Inzicht in communicatievormen richting opdrachtgever; Selecteren van feedbackmethodieken',
    vaardigheden: 'Communiceren met opdrachtgever en team; Samenwerkingsproces organiseren; Presenteren van werk en ontwerpkeuzes',
    houding: 'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking. Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Opdrachtgever project 2',
    duur: '6 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in persoonlijke leerdoelen en groei-indicatoren; Kennis van documentatietechnieken (dummy, procesverslag)',
    vaardigheden: 'Reflecteren op eigen ontwikkeling; Feedback vertalen naar concrete leerodelen; Proces en leermomenten documenteren',
    houding: 'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht. Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen. Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten.'
  },

  // Film-hackathon
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Film-hackathon',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inzicht in AI/technologie als ontwerptool',
    vaardigheden: '',
    houding: 'Studenten selecteren zelfstandig onderzoeksmethoden, tonen professionele houding richting opdrachtgevers en onderbouwen hun methodekeuzes. Ze nemen verantwoordelijkheid voor onderzoekskwaliteit en kunnen de vraag achter de vraag achterhalen bij stakeholders.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Film-hackathon',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten nemen eigenaarschap van hun ontwerpkeuzes en durven standpunt in te nemen over hun conceptrichting. Ze tonen volharding bij tegenslagen en flexibiliteit om koers bij te stellen op basis van inzichten. Verder werken de studenten aan creative confidence.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Film-hackathon',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten ontwikkelen systematische aanpak bij testen en tonen geduld om meerdere iteraties te doorlopen. Ze hebben vertrouwen in de waarde van hun testresultaten en durven moeilijke keuzes te maken op basis van bevindingen. Objectiviteit groeit terwijl emotionele gehechtheid aan ideeën afneemt.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Film-hackathon',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten nemen initiatief in het geven van constructieve feedback en tonen leiderschap bij het organiseren van samenwerking. Ze ontwikkelen tactvolle communicatie voor het navigeren van verschillende belangen en assertiviteit om hun standpunten helder te communiceren terwijl ze rekening houden met teamdynamiek.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    activiteit: 'Film-hackathon',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten nemen eigenaarschap over hun leerproces en stellen proactief leerdoelen op basis van zelfinzicht. Ze ontwikkelen zelfkritisch vermogen om realistische zelfevaluaties te maken en tonen volharding bij het overwinnen van uitdagingen. Metacognitief bewustzijn groeit terwijl ze verantwoordelijkheid nemen voor hun persoonlijke ontwikkeling en resultaten.'
  },

  // ==================== SEMESTER 3 EXPLORE ====================
  // Game hackathon
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORE',
    activiteit: 'Game hackathon',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Basisprincipes van spelontwerp, interactie en storytelling; Verschillende spelmechanismen en hun invloed op spelersgedrag; Voorbeelden en analyses van bestaande spellen als inspiratie',
    vaardigheden: 'Analyseren van bestaande spellen op vorm, mechaniek en ervaring; Vertalen van inzichten uit onderzoek en workshops naar eigen spelideeën; In teamverband verkennen van thema\'s, interacties en doelen voor een nieuw spelconcept',
    houding: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORE',
    activiteit: 'Game hackathon',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Ontwerpprincipes voor spelmechaniek, visuele communicatie en narratief; De relatie tussen ontwerpkeuzes en spelerervaring (interactie, tactiek, verhaal)',
    vaardigheden: 'Ontwikkelen van originele spelconcepten met aandacht voor interactie en beleving; Experimenteren met spelregels, visuals en storytelling; Snel itereren: ideeën vertalen naar schetsen en low-fi prototypes',
    houding: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Game hackathon',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Werking en waarde van prototyping en playtesting in ontwerpprocessen; Basisprincipes van feedback, observatie en iteratie',
    vaardigheden: 'Maken van speelbare prototypes (low-fi tot high-fi); Testen van spelconcepten binnen en buiten het team; Interpreteren van testresultaten en verbeteren van spelmechanismes en storytelling; Presenteren van eindresultaat en proces in een korte video of demo',
    houding: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Game hackathon',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Samenwerkingsprocessen in multidisciplinaire teams; Communicatie- en presentatietechnieken voor ontwerpkeuzes; Feedback geven en ontvangen binnen teamverband',
    vaardigheden: 'Effectief samenwerken in een team onder tijdsdruk; Presenteren van spelconcepten en proces; Feedback geven en verwerken binnen de game ontwikkelingscyclus; Communiceren van ontwerpkeuzes naar verschillende doelgroepen',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Game hackathon',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Reflectiemethoden voor evaluatie van proces en product; Leerstrategieën voor snelle ontwerpiteraties; Zelfevaluatie en persoonlijke ontwikkeling',
    vaardigheden: 'Reflecteren op ontwerpkeuzes en teamproces; Identificeren van leermomenten in een intensieve werkomgeving; Evalueren van eigen bijdrage aan het team; Formuleren van leerdoelen op basis van hackathon ervaring',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Visual Design
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Visual Design',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Context van ontwerpen Wim Krouwel, Martin Lorentz; Verdieping in: Ontwerpvisies en werkwijzen van ontwerpers (Crouwel, Lorenz, Scher); Culturele en ethische context van visual design; Doelgroep en functie van een visueel communicatiemiddel (magazine)',
    vaardigheden: 'Onderzoeken van ontwerpers via deskresearch en visuele analyse; Interpreteren van ontwerpfilosofie en vertalen naar eigen visie; Toepassen van CMD-methods: benchmark creation, design pattern search, ethical check; Documenteren en analyseren van referenties en experimenten',
    houding: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Visual Design',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Grids, compositie, hiërarchie, kleurgebruik en typografie; Vormtaal en visuele consistentie; Schetsen, itereren en varianten maken; Theoretische principes van visuele taal en expressie',
    vaardigheden: 'Ontwerpen van spreads en posters op basis van onderzoek en theorie; Experimenteren met compositie, typografie en beeld; Schetsen, variëren, itereren en onderbouwen van ontwerpkeuzes; Ontwikkelen van een visuele identiteit voor het magazine',
    houding: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Visual Design',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Presentatievormen en materiaalkeuze voor visuele prototypes (print, digitaal); Evaluatiecriteria voor visuele communicatie: leesbaarheid, hiërarchie, stijlconsistentie',
    vaardigheden: 'Integreren van feedback van peers en experts in het ontwerp; Uitwerken van spreads en zine tot een tastbaar prototype; Testen en evalueren van ontwerp met doelgroep en peers; Documenteren van iteraties en onderbouwen van ontwerpbeslissingen',
    houding: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Visual Design',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Presentatietechnieken voor visueel werk; Vakjargon en visuele communicatie binnen de designpraktijk; Feedback protocollen voor ontwerpwerk',
    vaardigheden: 'Presenteren van ontwerpkeuzes met onderbouwing; Geven en ontvangen van kritische design feedback; Communiceren over visuele concepten met peers en experts; Documenteren van ontwerpproces en iteraties',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Visual Design',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Zelfevaluatie van visueel werk; Ontwerpkritiek en reflectie op vormgeving; Persoonlijke ontwikkeling als visual designer',
    vaardigheden: 'Kritisch reflecteren op eigen visuele ontwerpkeuzes; Analyseren van sterktes en zwaktes in vormgeving; Identificeren van leerpunten uit feedback en iteraties; Stellen van doelen voor verdere ontwikkeling in visual design',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Opdrachtgeversproject
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Opdrachtgeversproject',
    duur: '5 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Design Thinking en onderzoeksmethoden voor context- en stakeholderanalyse; Theoretische kaders rondom merk, gebruiker, trends en maatschappelijke context; Ethische principes: belangen, waarden en impact van ontwerpoplossingen',
    vaardigheden: 'Onderzoek uitvoeren naar opdrachtgever, gebruikers en omgeving met passende methodieken; Context en stakeholders analyseren en vertalen naar ontwerpcriteria; Ontwerp- en onderzoeksvraag formuleren en herijken op basis van inzichten; Bevindingen helder visualiseren en communiceren in beroepsproducten',
    houding: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Opdrachtgeversproject',
    duur: '5 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Iteratieve ontwerpprocessen en creatieve methoden binnen Design Thinking; Principes van conceptontwikkeling, visuele communicatie en ethische afweging; Validatie van ontwerpkeuzes via onderzoek en stakeholderfeedback',
    vaardigheden: 'Genereren, selecteren en uitwerken van concepten op basis van onderzoek; Toetsen van concepten aan ontwerpcriteria, ethische waarden en feedback; Iteratief ontwikkelen van onderscheidende en uitvoerbare oplossingen; Onderbouwd vastleggen van keuzes in conceptborden, procesplanning en mediaplan',
    houding: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Opdrachtgeversproject',
    duur: '5 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Evaluatiecriteria voor gebruikservaring, effectiviteit en uitvoerbaarheid; Ethische aspecten bij testen: transparantie, privacy, betrouwbaarheid',
    vaardigheden: 'Ontwerpen van prototypes om aannames en oplossingen te toetsen; Opstellen en uitvoeren van testplannen met relevante stakeholders; Analyseren en verwerken van testresultaten in ontwerpverbeteringen; Presenteren en onderbouwen van resultaten richting opdrachtgever in adviesrapport en eindpresentatie',
    houding: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Opdrachtgeversproject',
    duur: '5 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Professionele communicatie met opdrachtgevers; Stakeholder management en verwachtingsmanagement; Presentatie- en rapportagetechnieken voor professionele context',
    vaardigheden: 'Professioneel communiceren met externe opdrachtgevers; Afstemmen van verwachtingen en deliverables; Presenteren van onderzoek, concept en eindresultaat; Samenwerken in een projectteam met rolverdeling; Verwerken van feedback van meerdere stakeholders',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Opdrachtgeversproject',
    duur: '5 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Projectevaluatie en procesevaluatie; Zelfreflectie op samenwerking en professioneel handelen; Leren van professionele projectervaringen',
    vaardigheden: 'Reflecteren op samenwerking met opdrachtgever en team; Evalueren van ontwerpproces en projectaanpak; Identificeren van ontwikkelpunten voor toekomstige projecten; Documenteren van geleerde lessen; Koppelen van ervaring aan persoonlijke ontwikkeldoelen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Persuasive Communication
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Persuasive Communication',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Gedragstheorieën en beïnvloedingsmodellen (Kahneman, Fogg, Cialdini, Ajzen, Deci & Ryan); De CASI-methode en gedragslenzen voor het analyseren van gedragsvraagstukken; Methoden voor doelgroep en gedragsanalyse; Ethische kaders rondom gedragsbeïnvloeding en maatschappelijke impact',
    vaardigheden: 'Onderzoeken van een maatschappelijk vraagstuk en het gedrag van de doelgroep; Analyseren van gedragsinterventies en bepalen van beïnvloedingsmechanismen; Formuleren van gedragsdoelen en onderbouwen van keuzes met theorie; Vertalen van onderzoeksresultaten naar ontwerpcriteria en een duidelijke rationale',
    houding: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Persuasive Communication',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Toepassing van gedragslenzen en CASI-stappenplan in ontwerpprocessen; Strategische inzet van beïnvloedingsmechanismen vanuit meerdere theoretische perspectieven; Ontwerpprincipes voor gedragsinterventies en ethische afwegingen bij sturing van gedrag',
    vaardigheden: 'Ontwikkelen van concepten en strategieën die gedrag bewust beïnvloeden; Vertalen van gedragsdoelen en strategieën naar visuele en inhoudelijke ontwerpuitingen; Iteratief verkennen en aanscherpen van strategieën op basis van feedback van experts en peers; Reflecteren op de impact van de gekozen strategieën op individu, organisatie en maatschappij',
    houding: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Persuasive Communication',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Prototyping- en testmethoden voor gedragsinterventies (lo-fi, mid-fi, expert review); Criteria voor effectiviteit, geloofwaardigheid en ethische toetsing van beïnvloedingsstrategieën; Methodieken voor evaluatie van gedragsverandering en communicatie-impact',
    vaardigheden: 'Maken van prototypes waarin beïnvloedingsmechanismen worden getest; Valideren van keuzes met experts en doelgroepvertegenwoordigers; Iteratief verbeteren van concepten op basis van testresultaten en feedback; Documenteren en presenteren van de rationale, iteraties en eindconcept in een overtuigende eindpresentatie',
    houding: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Persuasive Communication',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Communicatie van ethische overwegingen bij gedragsbeïnvloeding; Presenteren van gedragsstrategieën aan experts en doelgroep; Transparantie en verantwoording in persuasieve ontwerpen',
    vaardigheden: 'Presenteren van gedragsonderzoek en strategieën; Uitleggen van theoretische onderbouwing aan niet-experts; Feedback vragen aan experts op gedragswetenschap en ethiek; Communiceren over ethische dilemma\'s in persuasief ontwerp; Verdedigen van ontwerpkeuzes met gedragstheoretische argumenten',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Persuasive Communication',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Ethische reflectie op gedragsbeïnvloeding; Zelfevaluatie van ontwerpethiek; Impact assessment van persuasieve strategieën',
    vaardigheden: 'Reflecteren op ethische implicaties van ontwerpkeuzes; Evalueren van de maatschappelijke impact van beïnvloedingsstrategieën; Kritisch analyseren van eigen rol als persuasieve designer; Formuleren van ethische richtlijnen voor toekomstig werk; Leren van feedback op gedragsstrategieën',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Storytelling
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Storytelling',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Narratieve structuren: Heroes Journey (Campbell), 7 fases van Aristoteles; Semiotiek; Retorica: aandacht voor framing; Interpersoonlijke communicatie: ZMBO model, Encoder en decoderen, Verbale en non verbale communicatie',
    vaardigheden: 'Analyseren van bestaande campagnes om zo storytelling elementen te herkennen en het effect daarvan te begrijpen; Bewustwording van de ethische aspecten die komen kijken bij het inzetten van storytelling; Het koppelen en combineren van overtuigende communicatie principes aan verhalende elementen',
    houding: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Storytelling',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Toepassen van narratieve structuren op een manier die effectief is binnen de context van de opdracht; Schrijven en opzetten van verhaal structuren adhv bovenstaande theorie',
    vaardigheden: 'Studenten moeten narratieve elementen op een professionele wijze kunnen inzetten en toepassen op passende uitingen waarmee ze een overtuigende boodschap kunnen overbrengen; Het inzetten van de juiste storytelling elementen die passen binnen het doel van de opdracht',
    houding: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Storytelling',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Testen van verhaal structuren: wanneer zijn ze het meest effectief? Hoe komen ze over op de gebruiker? Criteria opstellen voor het gebruik van bepaalde storytelling elementen: wanneer wel/niet inzetten bij een bepaald doel',
    vaardigheden: 'Prototypes maken en testen waarbij de focus ligt op de effectiviteit en overtuigingskracht van de toegepaste verhaal elementen',
    houding: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Storytelling',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Experimenteren met hoe storytelling gebruikt kan worden om jezelf als (aankomend) professional neer te zetten voor bijvoorbeeld een professioneel portfolio',
    vaardigheden: 'Een korte \'about me\' pagina schrijven voor op professioneel portfolio; Storytelling op andere plekken in professionele portfolio of bijv LinkedIn inzetten',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Storytelling',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen professionele ontwikkeling; Kennis van reflectiemethoden',
    vaardigheden: 'Reflecteren op keuzes, emoties en impact van eigen werk; Verantwoorden van proces en ontwerpkeuzes',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Eigen project
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Eigen project',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Kennis van creatieve en contextuele onderzoeksmethode; Inzicht in hoe verschillende media en makers werken; Basiskennis van ontwerpcontext trends en publieksbeleving; Kennis van creatieve cyclus',
    vaardigheden: 'Iteratief formuleren van ontwerpvragen; Analyseren van resultaten van contextueel onderzoek; Documenteren van inzichten uit museumbezoek, experts en media-analyse; Verbinden van contextonderzoek met ontwerpbeslissingen; Presenteren van onderzoeksresultaten aan peers',
    houding: 'Studenten hanteren analytische benadering bij complexere contexten, bakenen problemen scherp af en zijn bewust van impact op belanghebbenden. Ze wegen verschillende perspectieven en prioriteren effectief in hun onderzoeksaanpak voor betere inzichten.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Eigen project',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Kennis van creatieve denktechnieken: braindumping, lens-jumping, dissociatie; Inzicht in ontwerpstrategieën en conceptontwikkeling; Inzicht in relatie tussen medium, techniek en inhoud',
    vaardigheden: 'Genereren van meerdere concepten en invalshoeken in creatieve cycli; Experimenteren met vorm, materiaal en techniek; Documenteren van experimenten en de impact op volgende ontwerpstappen; Onderbouwen van keuzes in ontwerpproces',
    houding: 'Studenten ontwikkelen kritisch denkvermogen over hun eigen werk en dat van anderen. Ze tonen moed om gevestigde patronen ter discussie te stellen en doorzettingsvermogen bij complexere ontwerpuitdagingen. Empathisch blijven ze verbonden met gebruikersbehoeften terwijl ze analytisch afstand nemen voor objectieve keuzes.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Eigen project',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Basiskennis van prototyping-methoden (lo-fi, hi-fi, rapid prototyping); Inzicht in publieksinteractie, gebruikservaring en beleving; Kennis van evaluatiemethoden: peer feedback, expertfeedback, publieksobservatie',
    vaardigheden: 'Ontwerpen en maken van prototypes passend bij het concept en medium; Testen van prototypes met peers, experts en/of publiek; Interpreteren van feedback en verwerken in verdere ontwerpstappen; Documenteren van testresultaten en impact op ontwerpkeuzes; Professionele presentatie van proces en eindwerk',
    houding: 'Studenten tonen een meer wetenschappelijke houding bij het opzetten van tests en integriteit in het rapporteren van resultaten, ook als deze tegenvallen. Ze ontwikkelen strategisch denken over wanneer, wat en hoe te testen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Eigen project',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Begrip van rol van feedback in een individueel ontwerpproces door peers, experts en docenten; Basiskennis van expositieontwerp vanuit museale exploratie',
    vaardigheden: 'Feedback geven en ontvangen en integreren in ontwerp; Wegen van feedback met eigen professionele visie; Kijken naar expositie als professional; Verbinden met experts uit vakgebied',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    activiteit: 'Eigen project',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen professionele ontwikkeling; Kennis van reflectiemethoden',
    vaardigheden: 'Reflecteren op keuzes, emoties en impact van eigen werk; Verantwoorden van proces en ontwerpkeuzes',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // ==================== SEMESTER 4-7 ====================
  // Semester 4 CONNECT
  // Hackathon circulaire economie
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Hackathon circulaire economie',
    duur: '1 week',
    leeruitkomst: 'context',
    beschrijving: 'Creatieve en uitvoerbare ideeën worden ontwikkeld die bijdragen aan afvalvrije evenementen, bijvoorbeeld gericht op gedragsverandering, slimme inzamelsystemen of innovatieve technologieën voor bezoekers en organisatoren. Tijdens deze week vinden inspirerende (online) workshops en sessies met experts plaats. De beste teams presenteren hun ideeën tijdens een landelijke finale op de laatste dag van de week.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten beargumenteren onderzoekskeuzes met theorie, herdefiniëren problemen op basis van inzichten en zoeken waardegedreven naar kansen voor belanghebbenden. Ze koppelen onderzoek aan beproefde methoden en durven van koers te veranderen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Hackathon circulaire economie',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    beschrijving: 'Creatieve en uitvoerbare ideeën worden ontwikkeld die bijdragen aan afvalvrije evenementen, bijvoorbeeld gericht op gedragsverandering, slimme inzamelsystemen of innovatieve technologieën voor bezoekers en organisatoren. Tijdens deze week vinden inspirerende (online) workshops en sessies met experts plaats. De beste teams presenteren hun ideeën tijdens een landelijke finale op de laatste dag van de week.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten verantwoorden hun ontwerpkeuzes expliciet en transparant op basis van testresultaten, feedback en aannames. Zij staan open voor feedback, herzien aannames waar nodig en balanceren een eigen ontwerpvisie met luisterbereidheid naar gebruikers en stakeholders. Daarbij tonen zij verantwoordelijkheidsbesef voor de impact van hun ontwerp en durven zij ontwerpdilemma\'s expliciet te onderzoeken.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Hackathon circulaire economie',
    duur: '1 week',
    leeruitkomst: 'prototype',
    beschrijving: 'Creatieve en uitvoerbare ideeën worden ontwikkeld die bijdragen aan afvalvrije evenementen, bijvoorbeeld gericht op gedragsverandering, slimme inzamelsystemen of innovatieve technologieën voor bezoekers en organisatoren. Tijdens deze week vinden inspirerende (online) workshops en sessies met experts plaats. De beste teams presenteren hun ideeën tijdens een landelijke finale op de laatste dag van de week.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten nemen verantwoordelijkheid voor de betrouwbaarheid van hun testopzet en tonen transparantie in hun methodiekeuzes. Ze balanceren efficiëntie in testprocessen met zorgvuldigheid in uitvoering. Zelfkritische reflectie op testbeperkingen combineert met zelfvertrouwen in hun bevindingen en aanbevelingen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Hackathon circulaire economie',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    beschrijving: 'Creatieve en uitvoerbare ideeën worden ontwikkeld die bijdragen aan afvalvrije evenementen, bijvoorbeeld gericht op gedragsverandering, slimme inzamelsystemen of innovatieve technologieën voor bezoekers en organisatoren. Tijdens deze week vinden inspirerende (online) workshops en sessies met experts plaats. De beste teams presenteren hun ideeën tijdens een landelijke finale op de laatste dag van de week.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten fungeren als bruggenbouwers tussen verschillende disciplines met professioneel gezag. Ze tonen mentale flexibiliteit bij het schakelen tussen verschillende communicatiestijlen per doelgroep. Hun leiderschapsrol in complexe projecten wordt ondersteund door betrouwbaarheid en authentieke professionele autoriteit.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Hackathon circulaire economie',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    beschrijving: 'Creatieve en uitvoerbare ideeën worden ontwikkeld die bijdragen aan afvalvrije evenementen, bijvoorbeeld gericht op gedragsverandering, slimme inzamelsystemen of innovatieve technologieën voor bezoekers en organisatoren. Tijdens deze week vinden inspirerende (online) workshops en sessies met experts plaats. De beste teams presenteren hun ideeën tijdens een landelijke finale op de laatste dag van de week.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten ontwikkelen zelfreflectie over hun professionele identiteit en toekomstige ontwikkeling. Ze tonen leiderschapsmentaliteit in hun eigen leerproces en inspireren anderen door hun leerhouding. Ze verbinden persoonlijke passies met professionele doelen en tonen intrinsieke motivatie en ontwikkeling als CMD\'er.'
  },

  // Opdrachtgeverproject
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Opdrachtgeverproject',
    duur: '6 weken',
    leeruitkomst: 'context',
    beschrijving: 'Net als in het vorige semester wordt in teamverband aan de opdracht gewerkt. Aan het einde van het project wordt een getest en onderbouwd prototype, inclusief implementatieplan, opgeleverd aan de opdrachtgever. Het opdrachtgeversproject heeft een looptijd van zeven weken.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten beargumenteren onderzoekskeuzes met theorie, herdefiniëren problemen op basis van inzichten en zoeken waardegedreven naar kansen voor belanghebbenden. Ze koppelen onderzoek aan beproefde methoden en durven van koers te veranderen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Opdrachtgeverproject',
    duur: '6 weken',
    leeruitkomst: 'ontwerpen',
    beschrijving: 'Net als in het vorige semester wordt in teamverband aan de opdracht gewerkt. Aan het einde van het project wordt een getest en onderbouwd prototype, inclusief implementatieplan, opgeleverd aan de opdrachtgever. Het opdrachtgeversproject heeft een looptijd van zeven weken.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten verantwoorden hun ontwerpkeuzes expliciet en transparant op basis van testresultaten, feedback en aannames. Zij staan open voor feedback, herzien aannames waar nodig en balanceren een eigen ontwerpvisie met luisterbereidheid naar gebruikers en stakeholders. Daarbij tonen zij verantwoordelijkheidsbesef voor de impact van hun ontwerp en durven zij ontwerpdilemma\'s expliciet te onderzoeken.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Opdrachtgeverproject',
    duur: '6 weken',
    leeruitkomst: 'prototype',
    beschrijving: 'Net als in het vorige semester wordt in teamverband aan de opdracht gewerkt. Aan het einde van het project wordt een getest en onderbouwd prototype, inclusief implementatieplan, opgeleverd aan de opdrachtgever. Het opdrachtgeversproject heeft een looptijd van zeven weken.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten nemen verantwoordelijkheid voor de betrouwbaarheid van hun testopzet en tonen transparantie in hun methodiekeuzes. Ze balanceren efficiëntie in testprocessen met zorgvuldigheid in uitvoering. Zelfkritische reflectie op testbeperkingen combineert met zelfvertrouwen in hun bevindingen en aanbevelingen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Opdrachtgeverproject',
    duur: '6 weken',
    leeruitkomst: 'verbinden',
    beschrijving: 'Net als in het vorige semester wordt in teamverband aan de opdracht gewerkt. Aan het einde van het project wordt een getest en onderbouwd prototype, inclusief implementatieplan, opgeleverd aan de opdrachtgever. Het opdrachtgeversproject heeft een looptijd van zeven weken.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten fungeren als bruggenbouwers tussen verschillende disciplines met professioneel gezag. Ze tonen mentale flexibiliteit bij het schakelen tussen verschillende communicatiestijlen per doelgroep. Hun leiderschapsrol in complexe projecten wordt ondersteund door betrouwbaarheid en authentieke professionele autoriteit.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Opdrachtgeverproject',
    duur: '6 weken',
    leeruitkomst: 'reflecteren',
    beschrijving: 'Net als in het vorige semester wordt in teamverband aan de opdracht gewerkt. Aan het einde van het project wordt een getest en onderbouwd prototype, inclusief implementatieplan, opgeleverd aan de opdrachtgever. Het opdrachtgeversproject heeft een looptijd van zeven weken.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten ontwikkelen zelfreflectie over hun professionele identiteit en toekomstige ontwikkeling. Ze tonen leiderschapsmentaliteit in hun eigen leerproces en inspireren anderen door hun leerhouding. Ze verbinden persoonlijke passies met professionele doelen en tonen intrinsieke motivatie en ontwikkeling als CMD\'er.'
  },

  // Project Connect
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Project Connect',
    duur: '6 weken',
    leeruitkomst: 'context',
    beschrijving: 'Binnen dit project wordt in kleine projectteams gewerkt aan verschillende opdrachten, in een bureausetting waarin docenten ook de rol van senior binnen het bureau kunnen aannemen. Het project biedt essentiële kennis en fungeert tevens als kennismaking met de specialisaties die in jaar 3 van de opleiding worden aangeboden.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten beargumenteren onderzoekskeuzes met theorie, herdefiniëren problemen op basis van inzichten en zoeken waardegedreven naar kansen voor belanghebbenden. Ze koppelen onderzoek aan beproefde methoden en durven van koers te veranderen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Project Connect',
    duur: '6 weken',
    leeruitkomst: 'ontwerpen',
    beschrijving: 'Binnen dit project wordt in kleine projectteams gewerkt aan verschillende opdrachten, in een bureausetting waarin docenten ook de rol van senior binnen het bureau kunnen aannemen. Het project biedt essentiële kennis en fungeert tevens als kennismaking met de specialisaties die in jaar 3 van de opleiding worden aangeboden.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten verantwoorden hun ontwerpkeuzes expliciet en transparant op basis van testresultaten, feedback en aannames. Zij staan open voor feedback, herzien aannames waar nodig en balanceren een eigen ontwerpvisie met luisterbereidheid naar gebruikers en stakeholders. Daarbij tonen zij verantwoordelijkheidsbesef voor de impact van hun ontwerp en durven zij ontwerpdilemma\'s expliciet te onderzoeken.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Project Connect',
    duur: '6 weken',
    leeruitkomst: 'prototype',
    beschrijving: 'Binnen dit project wordt in kleine projectteams gewerkt aan verschillende opdrachten, in een bureausetting waarin docenten ook de rol van senior binnen het bureau kunnen aannemen. Het project biedt essentiële kennis en fungeert tevens als kennismaking met de specialisaties die in jaar 3 van de opleiding worden aangeboden.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten nemen verantwoordelijkheid voor de betrouwbaarheid van hun testopzet en tonen transparantie in hun methodiekeuzes. Ze balanceren efficiëntie in testprocessen met zorgvuldigheid in uitvoering. Zelfkritische reflectie op testbeperkingen combineert met zelfvertrouwen in hun bevindingen en aanbevelingen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Project Connect',
    duur: '6 weken',
    leeruitkomst: 'verbinden',
    beschrijving: 'Binnen dit project wordt in kleine projectteams gewerkt aan verschillende opdrachten, in een bureausetting waarin docenten ook de rol van senior binnen het bureau kunnen aannemen. Het project biedt essentiële kennis en fungeert tevens als kennismaking met de specialisaties die in jaar 3 van de opleiding worden aangeboden.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten fungeren als bruggenbouwers tussen verschillende disciplines met professioneel gezag. Ze tonen mentale flexibiliteit bij het schakelen tussen verschillende communicatiestijlen per doelgroep. Hun leiderschapsrol in complexe projecten wordt ondersteund door betrouwbaarheid en authentieke professionele autoriteit.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECT',
    activiteit: 'Project Connect',
    duur: '6 weken',
    leeruitkomst: 'reflecteren',
    beschrijving: 'Binnen dit project wordt in kleine projectteams gewerkt aan verschillende opdrachten, in een bureausetting waarin docenten ook de rol van senior binnen het bureau kunnen aannemen. Het project biedt essentiële kennis en fungeert tevens als kennismaking met de specialisaties die in jaar 3 van de opleiding worden aangeboden.',
    speelvelden: '',
    kennis: '',
    vaardigheden: '',
    houding: 'Studenten ontwikkelen zelfreflectie over hun professionele identiteit en toekomstige ontwikkeling. Ze tonen leiderschapsmentaliteit in hun eigen leerproces en inspireren anderen door hun leerhouding. Ze verbinden persoonlijke passies met professionele doelen en tonen intrinsieke motivatie en ontwikkeling als CMD\'er.'
  },

  // Semester 5 Praktijk
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    activiteit: 'Praktijk Stage',
    duur: '20 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Kennis van onderzoeksmethoden (contextonderzoek, doelgroepanalyse, stakeholdermapping) om problemen te analyseren; Inzicht in organisatiebelangen, bedrijfsprocessen en design maturity van organisaties',
    vaardigheden: 'Context analyseren en inzichten formuleren op basis van onderzoek; Stakeholder- en doelgroepanalyse kunnen uitvoeren; Relevante onderzoeksmethoden kiezen, onderbouwen en uitvoeren; Complexe informatie vertalen naar ontwerpimplicaties',
    houding: 'De student toont een professionele, nieuwsgierige en onderzoekende houding binnen de organisatie. Hij/zij verdiept zich actief in processen, gebruikers en stakeholders, vraagt door waar nodig en houdt rekening met organisatorische belangen en beperkingen. De student gaat zorgvuldig om met verwachtingen en toont verantwoordelijkheid voor de kwaliteit en zorgvuldigheid van de contextanalyse.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    activiteit: 'Praktijk Stage',
    duur: '20 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Design thinking; Kennis van concepting-methodes, ideation-technieken en ontwerpstrategieën; Inzicht in eisen en kaders van opdrachtgever, gebruikers en stakeholders; Kennis van design-principes (UX, UI, visual design, service design, social design)',
    vaardigheden: 'Concepten genereren op basis van onderzoek en organisatiebelangen; Iteratief ontwerpproces uitvoeren: schetsen, itereren, feedback verwerken; Ontwerpkeuzes onderbouwen richting stakeholder en team',
    houding: 'De student ontwerpt met eigenaarschap en autonomie. Hij/zij maakt bewuste keuzes op basis van onderzoek en feedback, toont creativiteit binnen realistische kaders en blijft flexibel bij veranderende prioriteiten. De student durft een duidelijke richting voor te stellen, maar staat open voor expertise van collega\'s en de visie van de organisatie.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    activiteit: 'Praktijk Stage',
    duur: '20 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Inzicht in evaluatiemethodes (usability testing, expert reviews, A/B testing); Kennis van standaarden zoals usability-normen, toegankelijkheid (WCAG), design systems',
    vaardigheden: 'Prototypes maken die keuzes verhelderen (van low-fi tot high-fi); Testopzetten opstellen en uitvoeren; resultaten analyseren; Gebruikerservaringen evalueren en verbeteringen doorvoeren',
    houding: 'De student toont een lerende, iteratieve houding: durft aannames te toetsen, organiseert tests passend bij de praktijk en verwerkt testresultaten eerlijk en nauwkeurig. De student gaat professioneel om met feedback, ook wanneer deze kritisch is. en past ontwerpen transparant aan op basis van bevindingen.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    activiteit: 'Praktijk Stage',
    duur: '20 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Kennis van communicatievormen in multidisciplinaire teams; Inzicht in rollen binnen ontwerpteams en samenwerking met externe stakeholders; Kennis van documentatie- en overdrachtsvormen (procesdocumentatie, design rationale)',
    vaardigheden: 'Professioneel communiceren intern en extern (presenteren, pitchen, overtuigen); Actief samenwerken met interdisciplinair team en stakeholders; Consistente feedback geven, ontvangen en verwerken; Proces inzichtelijk en overdraagbaar maken (documentatie, planning)',
    houding: 'De student communiceert professioneel met collega\'s, opdrachtgevers en andere betrokkenen. Hij/zij stemt actief af, zoekt samenwerking op en bewaakt een constructieve, respectvolle werkrelatie. De student draagt verantwoordelijkheid binnen het team, vraagt tijdig hulp en geeft en ontvangt feedback op een volwassen manier.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    activiteit: 'Praktijk Stage',
    duur: '20 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Kennis van reflectiemethodieken en persoonlijke leerdoelen formuleren; Inzicht in beroepsrollen, ontwikkeling binnen het CMD-beroep en persoonlijke groei',
    vaardigheden: 'Eigen werk kritisch evalueren en bijsturen op basis van feedback; Doelgericht werken aan professionele ontwikkeling; Nieuwe kennis en technologie proactief onderzoeken en toepassen',
    houding: 'De student neemt regie over zijn/haar eigen ontwikkeling binnen de organisatie. Hij/zij stelt zelf leerdoelen op, vraagt actief om feedback en reflecteert realistisch op eigen handelen. De student toont zelfbewustzijn, bekijkt fouten als leerkansen en verbindt persoonlijke groei zichtbaar aan de professionele context van de stage.'
  },

  // Semester 6 Specialisatie Brand Design
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Basiskennis storytelling, visual design, design in een bredere context; Kritisch kijken naar design en deze in een relevante context plaatsen',
    vaardigheden: 'Kunnen zien en analyseren wat waarom werkt op designvlak (o.a. door museumbezoek) in een bredere context',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Basiskennis onderzoek en eerste stappen van analyse naar concept/ eigen interpretatie; Dit adhv design thinking',
    vaardigheden: 'Interpreteren van geanalyseerd werk en hier zelfstandig iteratief leren conceptualiseren; Hierbij leren welke terminologie wordt gehanteerd',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Basisprincipes van gestructureerde feedback, gerichte observatie en iteratie',
    vaardigheden: 'Op basisniveau leren zichzelf te verhouden tot een gemaakt werk en hier op een persoonlijk niveau een eigen interpretatie van maken; Wie wil je worden als designer en waarom',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Basisbegrip van samenwerken in een ontwerpteam; Inzicht in duidelijke verdeling van rollen en taken voor een korte sprint; Weten hoe je observaties en ontwerpbeslissingen deelt met anderen',
    vaardigheden: 'Samenwerken onder tijdsdruk; Gezamenlijke keuzes maken over concept en verhaallijn; Observaties helder presenteren in de video; Actief luisteren en feedback verwerken binnen de groep; Comfortzones leren navigeren',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Basisbegrip van reflecteren op eigen rol en keuzes; Inzicht in hoe observaties impact hebben op het ontwerp',
    vaardigheden: 'Kort reflecteren op wat je hebt gezien, bedacht en gemaakt; Eigen aannames herkennen en bespreekbaar maken; Feedback opnemen in de volgende versie van het prototype of video',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Analyse project
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Analyse project',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inhoudelijke kennis van designproces o.a. / briefing/ debriefing; Onderzoek op diverse niveaus/ domeinen; Analyse bestaande campagnes en brands',
    vaardigheden: 'Onderzoeksvaardigheden/ design thinking/ iteratief ontwerpen; Denk hierbij aan doelgroeponderzoek, concurrentie-analyse, trendonderzoek, etc',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Analyse project',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Brainstormtechnieken/ maaktechnieken; Kennis van relevantie designdomeinen (basis)kennis van relevante software; Campagne- en brandstrategie/ -concept/ -ontwikkeling; Dit o.a. door Brand the Change (A. Miltenburg) en Advertising Concept Book (P. Barry)',
    vaardigheden: 'Adobe/ aanverwante software Beheersing storytelling/ concepting-/ designskills; Leren interpreteren van inzichten uit onderzoek en deze vertalen naar een pakkend concept',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Analyse project',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Prototyping, visual design, ieteratief toewerken naar presentabele uitingen; Dit o.a. door Brand the Change (A. Miltenburg) en Advertising Concept Book (P. Barry)',
    vaardigheden: 'Overstijgende designskills Strategische designskills Selectie relevante richtingen/ communicatieve vaardigheden Designskills/ ontwikkelen BIG/ ontwikkelen Campagneproducten',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Analyse project',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Begrip van stakeholder dynamiek binnen ecosystemen; Inzicht in communicatie binnen ontwerpteams: rollen, verwachtingen, samenwerking; Principes van co-design en participatie; Documentatievormen voor overdraagbaarheid (research decks, rationale)',
    vaardigheden: 'Gesprekken met gebruikers voeren en samenvatten; Stakeholder rollen analyseren en meenemen in ontwerpkeuzes; Constructieve feedback geven en ontvangen binnen het team; Procesdocumentatie opzetten die inzicht geeft in keuzes & opbouw; Ontwerprationale helder presenteren',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Analyse project',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen groei als ontwerper gedurende het iteratieve proces; Kennis van ethiek, inclusie, toegankelijkheid en duurzaamheid in ontwerp; Reflectiemethoden toepassen (kritische reflectie, iteratie-overzicht, leerlog)',
    vaardigheden: 'Reflecteren op eigen rol, aanpak en ontwerpkeuzes; Leren van prototypes, feedbackrondes en tests; Documenteren van persoonlijke leerdoelen en voortgang; Bijsturen van eigen werkproces op basis van zelfinzicht; Visie ontwikkelen op professionele identiteit binnen Digital Design',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Brainstorm project
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Brainstorm project',
    duur: '4 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Brainstormtechnieken/ maaktechnieken Kennis van relevantie designdomeinen (basis)kennis van relevante software',
    vaardigheden: 'Kunnen toepassen wat eerder in het semester is geleerd, nu op meer zelfstandig niveau; Leren en durven experimenteren; Kritisch kijken naar eigen werk',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Brainstorm project',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Copywriting, Storytelling, Art direction, Strategie, merkpositionering, Gestalt, AV design semiotiek en visuele retorica Kennis van relevantie designdomeinen/ werkveld Kennis van Layout/ AIDA',
    vaardigheden: 'Iteratief leren divergeren en adhv epxerimenten/ brainstormtechnieken eerste concepten opstellen',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Brainstorm project',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Iteratief leren designen; Adhv designcycli divergeren en convergeren om het geheel presentabel te presenteren',
    vaardigheden: 'Vanuit divergeren leren convergeren en designkeuzes maken; Kritisch leren kijken naar eigen (en andermans) werk en leren wat wel of niet te behouden; Welke designer ben/ word ik?',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Brainstorm project',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in ethiek en verantwoordelijkheid binnen ontwerpgemeenschappen; Kennis van hoe je ontwerpkeuzes overdraagbaar maakt (design rationale, component documentatie); Begrip van werken met peers in iteratieve ontwerpsprints',
    vaardigheden: 'Constructief feedback geven en ontvangen op UI, animatie, structuur en patterns; Design systems presenteren, uitleggen en toegankelijk maken voor anderen; Samenwerken in korte, intensieve sprints (screen stealing, iteratie, gezamenlijke builds); Je portfolio of challenge-output duidelijk uitleggen: "wat heb ik gedaan en waarom?"',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Brainstorm project',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen ontwerpidentiteit (portfolio-challenge); Kennis van wat professionele groei laat zien in UI/UX-werk (iteraties, rationale, keuzes); Begrip van ethische reflectie binnen designpraktijk (bijv. dark patterns, bewustwording)',
    vaardigheden: 'Reflecteren op eigen niveau van UI-design, interaction design en multi-device thinking; Documenteren van groei in een tijdlijn of procesdocument; Coherente keuzes formuleren vanuit persoonlijke visie als ontwerper; Verbeteringen doorvoeren op basis van feedback (portfolio, designsystem, flows, animaties); Bewust balanceren tussen creatief experimenteren en verantwoord ontwerpen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Hackathon
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Welke rol neem ik in als designer in een multidisciplinair team; Welke belangen heeft de opdrachtegever en hoe zorgen we dat we de vraag achter de vraag ontdekken; Onderzoek naar context en stakeholders',
    vaardigheden: 'Leren samenwerken; Leren een rol in te nemen; Leren breder te kijken dan eigen specialisatie',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Iteratief werken, design thinking, concepting op een gestructureerde manier',
    vaardigheden: 'Leren concepten op een berder niveau, dus multidisciplinair; Brainstormen in een divers team; Hier ook een actieve rol in nemen',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Iteratief en kritisch designen en testen; Actief stakeholders meenemen en bevragen/ toetsen; Binnen designcyclus hier de laatste stappen zetten en mogelijk weer eerste stappen richting context; Deliverables op professioneel niveau opleveren; Kritisch en analytisch kijken naar eindniveau en op dit niveau leveren',
    vaardigheden: 'Leren inschatten wanneer een product/ deliverable voldoende presentabel is; Blijven testen en itereren (in samenspraak met stakeholders)',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in samenwerking tussen Brand, Immersive en Digital Design; Begrip van elkaars taal, rol en verantwoordelijkheden in een sprint; Kennis van hoe je ontwerpvisie en keuzes helder communiceert in korte tijd',
    vaardigheden: 'Multidisciplinair samenwerken onder hoge tijdsdruk; Afstemmen tussen disciplines: visuele identiteit, ervaring, UX flow; Feedback geven én direct meenemen in het ontwerp; Gezamenlijk presenteren van een geïntegreerde totaalervaring; Verwoorden van de rol van Digital Design binnen het geheel (UX, flow, digitale touchpoints)',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in rolvastheid binnen een team (wat breng jij in als Digital Designer?); Kennis van reflectiemethoden op sprintniveau (wat werkte, wat viel op, wat wil ik ontwikkelen?); Bewustzijn van spanning tussen creatieve vrijheid, haalbaarheid en samenwerking',
    vaardigheden: 'Reflecteren op eigen bijdrage aan team en eindproduct; Vertalen van sprintlessen naar persoonlijke leerdoelen voor de rest van het blok; Bewust reflecteren op ontwerpkeuzes, samenwerking en processen; Formuleren van verbeteracties voor volgende sprints of projecten',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Opdrachtgeversproject
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Design thinking; Van briefing naar debrief; Research (through design); Doelgroeponderzoek en -segmentatie (bijv a day in the life); Stakeholderanalyse; Concurrentie-analyse; Bredere context analyseren',
    vaardigheden: 'Gedegen en goed beslagen tn ijs van start gaan met een opdracht; Alle factoren en randvoorwaarden in kaart hebben; Gestructureerd een designproces opzetten',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Gestructureerde analyse van onderzoeksresultaten; Vanuit hier brainstorming, concepting en eerste designresultaten',
    vaardigheden: 'Gestructureerd kunnen divergeren op basis van onderzoeksresultaten in een professionele context',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Toewerken naar krachtige en relevante deliverables; Copywriting, Artdirection, Layout, Semiotiek, fotografie, editorial design, AV-design Business, Presentatieskills, Expodesign',
    vaardigheden: 'Convergeren en kritisch kijken naar ontwikkelde oplossingen; Vanuit hier presentabele producten maken die voldoen aan de (geitereerde en geinterpreteerde) designvragen van de opdrachtgever',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in stakeholderrollen (platform-experts, professionals, shoppers enz); Begrip van hoe informatie, waarde en motivatie door een sociaal of commercieel systeem stromen; Kennis van ethische vraagstukken zoals vertrouwen, inclusie, veiligheid en verantwoordelijkheid in ontwerp',
    vaardigheden: 'Gesprekken voeren met professionals, gebruikers of context-experts; Aandachtspunten en verwachtingen van stakeholders vertalen naar ontwerpcriteria; Teamrollen afstemmen en verantwoordelijkheid nemen binnen het bureauproject; Ontwerprationale helder en overtuigend presenteren, afgestemd op opdrachtgever; Documentatie maken die overdraagbaar is voor opdrachtgever en ontwikkelteams',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen ontwerpidentiteit binnen professionele praktijk; Kennis van reflectiemethoden voor zelfpositie, samenwerking en iteratie; Inzicht in hoe onderzoekend vermogen professioneel handelen beïnvloedt; Kennis van ethiek, inclusie, toegankelijkheid en duurzaamheid in ontwerp',
    vaardigheden: 'Bewust reflecteren op ontwerpkeuzes, proces en samenwerking; Eigen rol, kwaliteiten en valkuilen benoemen binnen complexe projecten; Verbeterpunten formuleren voor toekomstig professioneel handelen; Reflecteren op impact van ontwerp op gebruiker, opdrachtgever en samenleving; Continu bijsturen op basis van feedback, zelfinzicht en projectervaringen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // ==================== SEMESTER 6 SPECIALISATIE IMMERSIVE DESIGN ====================
  // Leren kijken (introproject)
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Basiskennis storytelling, experience design, (zintuiglijke) waarneming en interactie; Inspiratiemateriaal verzamelen en analyseren (case study)',
    vaardigheden: 'Analyseren van bestaande immersive experiences op vorm, mechaniek en ervaring; Vertalen van inzichten uit case studies naar eigen werk; In teamverband verkennen van thema\'s, interacties en doelen voor een nieuw ervaringsconcept',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Basis ontwerpprincipes voor interactie, experience design, (zintuiglijke) beleving en narratief; De relatie tussen ontwerpkeuzes en (immersive) ervaring (interactie, beleving, verhaal)',
    vaardigheden: 'In teamverband maken van een korte immersive experience; Basis technische skills; Basis concepting: ontwikkelen van creative immersieve concepten met aandacht voor interactie en beleving; Experimenteren met (digitale) technologie, storytelling, spel, performance; Creativiteit en snel itereren: ideeën vertalen naar schetsen en low-fi prototypes; Planmatig en doelgericht werken binnen zelfgekozen kaders; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Werking en waarde van prototyping en playtesting in ontwerpprocessen; Basisprincipes van feedback, observatie en iteratie',
    vaardigheden: 'Maken van low fi immersive prototypes met analoge en digitale technieken; Testen van immersieve concepten binnen en buiten het team; Interpreteren van testresultaten en verbeteren van beleving, techniek, spelmechanismes en storytelling; Presenteren en ervaarbaar maken van prototype',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Basisbegrip van samenwerken in een ontwerpteam; Inzicht in duidelijke verdeling van rollen en taken voor een korte sprint; Weten hoe je observaties en ontwerpbeslissingen deelt met anderen',
    vaardigheden: 'Samenwerken onder tijdsdruk; Gezamenlijke keuzes maken over concept en verhaallijn; Observaties helder presenteren in de video; Actief luisteren en feedback verwerken binnen de groep; Comfortzones leren navigeren',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Leren kijken (introproject)',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Basisbegrip van reflecteren op eigen rol en keuzes; Inzicht in hoe observaties impact hebben op het ontwerp',
    vaardigheden: 'Kort reflecteren op wat je hebt gezien, bedacht en gemaakt; Eigen aannames herkennen en bespreekbaar maken; Feedback opnemen in de volgende versie van het prototype of video',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Immersive landscape: theorie en analyse (solo)
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: theorie en analyse (solo)',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Literatuuronderzoek; Case studies; Analyse; Maatschappelijke en technologische actualiteit en trends (vb Future Today Insitute); (Ethiek)',
    vaardigheden: 'Analyseren van bestaande immersive experiences op vorm, mechaniek en ervaring aan de hand van (wetenschappelijke) literatuur; Bestaande immersieve werken vergelijken en ten opzichte van elkaar kunnen plaatsen in het \'landschap\' van immersive design; Waarden en wensen van doelgroep als uitgangspunt nemen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: theorie en analyse (solo)',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Basis principes voor uitvoeren en schrijven van analyse; Beargumenteren en overtuigen; Terminologie en basisbegrip vanuit het werkveld, zoals uiteengezet in oa \'Immersion Revisited\', \'Narrative as virtual reality\' (Ryan) en andere artikelen',
    vaardigheden: 'Uitvoeren en schrijven van analyse; Argumenteren en onderbouwen ahv literatuur; Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: theorie en analyse (solo)',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Projection mapping, Verhaalperspectief en elementen van cinematografie; Montagetechnieken',
    vaardigheden: 'Werken met een beamer, afstellen en het beeld aanpassen op het projectieoppervlak met Touchdesigner; Rapid prototyping; Rapip prototype met filmopname en montage',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: theorie en analyse (solo)',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Begrip van stakeholder dynamiek binnen ecosystemen; Inzicht in communicatie binnen ontwerpteams: rollen, verwachtingen, samenwerking; Principes van co-design en participatie; Documentatievormen voor overdraagbaarheid (research decks, rationale)',
    vaardigheden: 'Gesprekken met gebruikers voeren en samenvatten; Stakeholder rollen analyseren en meenemen in ontwerpkeuzes; Constructieve feedback geven en ontvangen binnen het team; Procesdocumentatie opzetten die inzicht geeft in keuzes & opbouw; Ontwerprationale helder presenteren',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: theorie en analyse (solo)',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen groei als ontwerper gedurende het iteratieve proces; Kennis van ethiek, inclusie, toegankelijkheid en duurzaamheid in ontwerp; Reflectiemethoden toepassen (kritische reflectie, iteratie-overzicht, leerlog)',
    vaardigheden: 'Reflecteren op eigen rol, aanpak en ontwerpkeuzes; Leren van prototypes, feedbackrondes en tests; Documenteren van persoonlijke leerdoelen en voortgang; Bijsturen van eigen werkproces op basis van zelfinzicht; Visie ontwikkelen op professionele identiteit binnen Digital Design',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Immersive landscape: concept, create, test, prototype
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: concept, create, test, prototype',
    duur: '4 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Literatuuronderzoek; Case studies; Analyse; Maatschappelijke en technologische actualiteit en trends (vb Future Today Insitute); (Ethiek)',
    vaardigheden: 'Analyseren van bestaande immersive experiences op vorm, mechaniek en ervaring aan de hand van (wetenschappelijke) literatuur; Bestaande immersieve werken vergelijken en ten opzichte van elkaar kunnen plaatsen in het \'landschap\' van immersive design; Waarden en wensen van doelgroep als uitgangspunt nemen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: concept, create, test, prototype',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: '5E-model voor experience design (Sontag); Magic circle (Huizinga); Ontwerpprincipes voor narratief expliciteren: Hero\'s journey, pyramide van Freytag; (Immersive) audio',
    vaardigheden: 'oa werken in Adobe Audition, Ableton, Logic Pro; Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: concept, create, test, prototype',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Mobile Augmented Reality; Intro into VR; Maken van een testplan',
    vaardigheden: 'Werken met de online software: https://web-ar.studio/en/ het maken van een betenisvolle digitale laag, bovenop een poster; Kennis van wat Virtual Reality is en wat er voor nodig is om een ervaring te maken',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: concept, create, test, prototype',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in ethiek en verantwoordelijkheid binnen ontwerpgemeenschappen; Kennis van hoe je ontwerpkeuzes overdraagbaar maakt (design rationale, component documentatie); Begrip van werken met peers in iteratieve ontwerpsprints',
    vaardigheden: 'Constructief feedback geven en ontvangen op UI, animatie, structuur en patterns; Design systems presenteren, uitleggen en toegankelijk maken voor anderen; Samenwerken in korte, intensieve sprints (screen stealing, iteratie, gezamenlijke builds); Je portfolio of challenge-output duidelijk uitleggen: "wat heb ik gedaan en waarom?"',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Immersive landscape: concept, create, test, prototype',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen ontwerpidentiteit (portfolio-challenge); Kennis van wat professionele groei laat zien in UI/UX-werk (iteraties, rationale, keuzes); Begrip van ethische reflectie binnen designpraktijk (bijv. dark patterns, bewustwording)',
    vaardigheden: 'Reflecteren op eigen niveau van UI-design, interaction design en multi-device thinking; Documenteren van groei in een tijdlijn of procesdocument; Coherente keuzes formuleren vanuit persoonlijke visie als ontwerper; Verbeteringen doorvoeren op basis van feedback (portfolio, designsystem, flows, animaties); Bewust balanceren tussen creatief experimenteren en verantwoord ontwerpen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Hackathon
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Visie op en innemen van de rol van immersief ontwerper in een breder ontwerpteam',
    vaardigheden: 'Communicatie en samenwerken met peers met ander specialisme (ook LU verbinden); Wensen en waarden van opdrachtgever als uitgangspunt nemen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Planmatig en doelgericht werken binnen zelfgekozen kaders; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat',
    vaardigheden: 'Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Interactie',
    vaardigheden: 'Gebruiken van de sensors op een laptop en een Makey Makey om een ervaring interactief te maken; Toepassen van verscheidenheid aan test- en evaluatiemethoden (en daar kritisch op kunnen reflecteren)',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in samenwerking tussen Brand, Immersive en Digital Design; Begrip van elkaars taal, rol en verantwoordelijkheden in een sprint; Kennis van hoe je ontwerpvisie en keuzes helder communiceert in korte tijd',
    vaardigheden: 'Multidisciplinair samenwerken onder hoge tijdsdruk; Afstemmen tussen disciplines: visuele identiteit, ervaring, UX flow; Feedback geven én direct meenemen in het ontwerp; Gezamenlijk presenteren van een geïntegreerde totaalervaring; Verwoorden van de rol van Digital Design binnen het geheel (UX, flow, digitale touchpoints)',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in rolvastheid binnen een team (wat breng jij in als Digital Designer?); Kennis van reflectiemethoden op sprintniveau (wat werkte, wat viel op, wat wil ik ontwikkelen?); Bewustzijn van spanning tussen creatieve vrijheid, haalbaarheid en samenwerking',
    vaardigheden: 'Reflecteren op eigen bijdrage aan team en eindproduct; Vertalen van sprintlessen naar persoonlijke leerdoelen voor de rest van het blok; Bewust reflecteren op ontwerpkeuzes, samenwerking en processen; Formuleren van verbeteracties voor volgende sprints of projecten',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Opdrachtgeversproject
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Cultural Probes; Literatuuronderzoek; Case studies; Analyse; Maatschappelijke en technologische actualiteit en trends (vb Future Today Insitute); (Ethiek)',
    vaardigheden: 'Onderzoek doen met behulp van een ontworpen object; Zelfstandig theorie en literatuur, inspiratie en analyse vinden die passend is bij het onderwerp en de fase van de opdracht, en op een manier in weten te zetten die het proces voedt/inspireert; Communicatie met opdrachtgevers en stakeholders; Wensen en waarden van opdrachtgever als uitgangspunt nemen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'VR/AR',
    vaardigheden: 'ontwerpen in een complexe context met meerdere belanghebbenden; Ontwerpen vanuit een specifieke rol binnen het vakgebied van immersive design; zelfstandig uitstippelen van het ontwerptraject in verschillende fases en iteraties; Planmatig en doelgericht iteratief werken binnen zelfgekozen kaders; Zelfstandig beslissingen nemen en verantwoordelijkheid dragen voor het eindresultaat',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Interactie',
    vaardigheden: 'Gebruiken van de sensors op een laptop en een Makey Makey om een ervaring interactief te maken; Toepassen van verscheidenheid aan test- en evaluatiemethoden (en daar kritisch op kunnen reflecteren)',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in stakeholderrollen (platform-experts, professionals, shoppers enz); Begrip van hoe informatie, waarde en motivatie door een sociaal of commercieel systeem stromen; Kennis van ethische vraagstukken zoals vertrouwen, inclusie, veiligheid en verantwoordelijkheid in ontwerp',
    vaardigheden: 'Gesprekken voeren met professionals, gebruikers of context-experts; Aandachtspunten en verwachtingen van stakeholders vertalen naar ontwerpcriteria; Teamrollen afstemmen en verantwoordelijkheid nemen binnen het bureauproject; Ontwerprationale helder en overtuigend presenteren, afgestemd op opdrachtgever; Documentatie maken die overdraagbaar is voor opdrachtgever en ontwikkelteams',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    activiteit: 'Opdrachtgeversproject',
    duur: '5-6 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen ontwerpidentiteit binnen professionele praktijk; Kennis van reflectiemethoden voor zelfpositie, samenwerking en iteratie; Inzicht in hoe onderzoekend vermogen professioneel handelen beïnvloedt; Kennis van ethiek, inclusie, toegankelijkheid en duurzaamheid in ontwerp',
    vaardigheden: 'Bewust reflecteren op ontwerpkeuzes, proces en samenwerking; Eigen rol, kwaliteiten en valkuilen benoemen binnen complexe projecten; Verbeterpunten formuleren voor toekomstig professioneel handelen; Reflecteren op impact van ontwerp op gebruiker, opdrachtgever en samenleving; Continu bijsturen op basis van feedback, zelfinzicht en projectervaringen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // ==================== SEMESTER 6 SPECIALISATIE DIGITAL DESIGN ====================
  // Leren kijken/Introproject
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Leren kijken/Introproject',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Basiskennis Planes Garrett; Basisinzicht in wat "context" betekent binnen (ontwerpgericht) onderzoek: omgeving, gedrag, (type) data, patronen; Begrip van wat, zichtbare en onzichtbare, data kan zijn in een stedelijke omgeving: camera\'s, sporen, eigenaarschap; (Laagdrempelig) ontwikkelen van kennis hoe diverse vormen van data te interpreteren en toepasbaar te maken; Inzicht in hoe je door een andere lens kijkt (fietsendief + data-antropoloog.); Bewustzijn dat data gedrag beïnvloedt en ontwerpkeuzes stuurt (en vice versa)',
    vaardigheden: 'Observaties uitvoeren in een context (Data Walk); Signalen herkennen van dataverzameling en gedragspatronen; Foto\'s/video\'s maken om observaties vast te leggen; Eerste ruwe inzichten formuleren over kansen/risico\'s voor de gebruiker',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Leren kijken/Introproject',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Basiskennis van low-fi ontwerp (paper prototyping); Inzicht in hoe functies inspelen op behoeften uit context observaties; Kennis van eenvoudige conceptontwikkeling (functie → situatie → oplossing)',
    vaardigheden: 'Snel iteratief ideeën genereren op basis van observaties; Paper wireframes maken voor twee kernfuncties; Content en functionaliteit koppelen aan geobserveerde geïnterpreteerde data en patronen; Ontwerpkeuzes mondeling uitleggen in eenvoudige taal',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Leren kijken/Introproject',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Basisinzicht in wat een prototype is en waarom het helpt om ideeën tastbaar te maken; Weten wat een demonstratievideo moet laten zien (flow, functie, context); Short narrative production, door middel van vertaling concept in video',
    vaardigheden: 'Low-fi prototype maken (paper, schetsen, snelle flow); Storyboard-achtig denken voor de video; Een mini-test uitvoeren binnen het team: "werkt deze flow logisch?"; Resultaten vertalen naar de video-opzet',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Leren kijken/Introproject',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Basisbegrip van samenwerken in een ontwerpteam; Inzicht in duidelijke verdeling van rollen en taken voor een korte sprint; Weten hoe je observaties en ontwerpbeslissingen deelt met anderen',
    vaardigheden: 'Samenwerken onder tijdsdruk; Gezamenlijke keuzes maken over concept en verhaallijn; Observaties helder presenteren in de video; Actief luisteren en feedback verwerken binnen de groep; Comfortzones leren navigeren',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Leren kijken/Introproject',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Basisbegrip van reflecteren op eigen rol en keuzes; Inzicht in hoe observaties impact hebben op het ontwerp',
    vaardigheden: 'Kort reflecteren op wat je hebt gezien, bedacht en gemaakt; Eigen aannames herkennen en bespreekbaar maken; Feedback opnemen in de volgende versie van het prototype of video',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Fictief project
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Fictief project',
    duur: '3 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inzicht in subjectieve begrippen (transperantie, vertrouwen, eerlijkheid, gezond, duur, lekker); Diep begrip van Elements Of User Experience: User-Centered Design for the Web andBeyond, beter bekend als de Five Planes of UX design van James Garrett (2011), en aanvullende recente (wetenschappelijke) literatuur; Kennis van generatief onderzoek (Sanders & Stappers 2019), zoals bijvoorbeeld: sociona\'s, contextmapping, interviews met gesprekstools, inzetten van sensitizers, co-design; Inzicht in ecosystemen (Apple/Google) en wat dit betekent voor ontwerpkeuzes; Kennis van doelgroepanalyse en waardegedreven onderzoek; Begrip van hoe data, AI/ML en gedragsinformatie binnen ecosystemen werken',
    vaardigheden: 'Co designsessies voorbereiden, uitvoeren en analyseren; Generatieve onderzoeksmethoden toepassen om betekenis op te halen; Analyseren van onderzoeksresultaten. Data clusteren door middel van: affinity mapping, coderen van interviews, thema\'s duiden, patronen ontdekken; Contextvisualisaties maken (sociona\'s, journeys, scenario\'s); Onderzoeksen ontwerpvragen formuleren en wekelijks aanscherpen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Fictief project',
    duur: '3 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Diepgaand inzicht in toepassen van de UX-Planes theorie: Strategy → Scope → Structure → Skeleton → Surface; Kennis van: informatie-architectuur, wireflows, component libraries, design patterns; Begrip van ecosystem lock-in en second-party design; Kennis van multi-device UX en design systems (Material / Human Interface Guidelines); Inzicht in AI/ML-toepassingen binnen UX',
    vaardigheden: 'Ontwerpoplossingen ontwikkelen op basis van onderzoek; Wireframes en wireflows maken voor meerdere devices; Componenten ontwerpen volgens patterns van gekozen ecosysteem; Consistente UI-elementen opzetten binnen een mini-designsysteem; Ontwerpkeuzes onderbouwen op basis van insights; Conceptontwikkeling en valideren van concepten; vertalen van concepten d.m.v. iteratief ontwerp in interacties',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Fictief project',
    duur: '3 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Inzicht in usability testing (heuristieken, testplan, scenario-gebaseerd testen); Kennis van high-fi prototyping (visual design, interaction states, motion basics); Inzicht in multi-device interactie (switching, complementariteit, continuïteit)',
    vaardigheden: 'High-fi prototypes bouwen in Figma (component libraries, varianten, states); Testscenario\'s opstellen voor meerdere devices (mobiel, desktop, eventueel wearables); Usability tests uitvoeren met echte gebruikers of medestudenten; Heuristische evaluaties uitvoeren en verwerken; Testresultaten vertalen naar ontwerpiteraties; Eindprototype demonstreren met focus op rationale en ecosysteem-logica',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Fictief project',
    duur: '3 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Begrip van stakeholder dynamiek binnen ecosystemen; Inzicht in communicatie binnen ontwerpteams: rollen, verwachtingen, samenwerking; Principes van co-design en participatie; Documentatievormen voor overdraagbaarheid (research decks, rationale)',
    vaardigheden: 'Gesprekken met gebruikers voeren en samenvatten; Stakeholder rollen analyseren en meenemen in ontwerpkeuzes; Constructieve feedback geven en ontvangen binnen het team; Procesdocumentatie opzetten die inzicht geeft in keuzes & opbouw; Ontwerprationale helder presenteren',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Fictief project',
    duur: '3 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen groei als ontwerper gedurende het iteratieve proces; Kennis van ethiek, inclusie, toegankelijkheid en duurzaamheid in ontwerp; Reflectiemethoden toepassen (kritische reflectie, iteratie-overzicht, leerlog)',
    vaardigheden: 'Reflecteren op eigen rol, aanpak en ontwerpkeuzes; Leren van prototypes, feedbackrondes en tests; Documenteren van persoonlijke leerdoelen en voortgang; Bijsturen van eigen werkproces op basis van zelfinzicht; Visie ontwikkelen op professionele identiteit binnen Digital Design',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Deep Dive
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Deep Dive',
    duur: '4 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inzicht in dark patterns, ethische keuzes en beïnvloeding in digitale omgevingen; Kennis van hoe ontwerpkeuzes gedrag sturen (normatief ontwerp, manipulatie vs. guidance); Inzicht in multi-device ecosystemen (smartwatch, mobiel, desktop, interactie tussen devices); Kennis van contextuele factoren die invloed hebben op navigatie, locatiegebruik, ruimtegebruik en gedrag; Begrip van persoonlijke positionering binnen portfolio-ontwikkeling (wie ben ik als ontwerper?)',
    vaardigheden: 'Interfaces analyseren op: ethiek, overtuiging en manipulatie (dark pattern reviews); Ontwerpkeuzes onderbouwen binnen een device-ecosysteem; Contextgedrag vertalen naar UX-principes en interaction flows; Een zelfgekozen ontwerpcontext definiëren (portfolio): doelgroep, toon, functie',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Deep Dive',
    duur: '4 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Diep inzicht in atomic design en component-hiërarchie; Basis kennis van motion-principes, micro-interacties en visuele hiërarchie; Inzicht in multi-device patroonbibliotheken (Material, Human Interface Guidelines) en hoe deze samenwerken; Kennis van dark-pattern mechanismen en hoe ze visueel en interactief vorm krijgen; Begrip van visuele storytelling binnen portfolio-ontwerpen',
    vaardigheden: 'Een eigen atomic design system opzetten (atoms, molecules, organisms); Componentvarianten ontwerpen (states, transitions, errors, micro-interacties); Multi-device flows ontwerpen (smartwatch, telefoon, desktop); UI-designprincipes toepassen: grid, compositie, spacing, visuele hiërarchie; Design rationale expliciet formuleren bij elke ontwerpkeuze',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Deep Dive',
    duur: '4 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Inzicht in high-fi prototyping (interacties, animaties, motion timing, UI-details); Kennis van usability-testen, heuristische evaluaties en snelle feedbackloops; Inzicht in device-specifieke interacties (tap targets, haptic feedback, scroll-patronen, gestures)',
    vaardigheden: 'Klikbare high-fi prototypes maken voor meerdere devices (smartwatch + mobiel + desktop); Animaties, micro-interacties en transities ontwerpen en implementeren; Dark-pattern flows visueel overtuigend uitwerken (bewust misleiden / sturen); Mini-tests uitvoeren (bijv. peer feedback, hallway tests, kort heuristisch review); Testresultaten verwerken in verbeterde componenten en flows',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Deep Dive',
    duur: '4 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in ethiek en verantwoordelijkheid binnen ontwerpgemeenschappen; Kennis van hoe je ontwerpkeuzes overdraagbaar maakt (design rationale, component documentatie); Begrip van werken met peers in iteratieve ontwerpsprints',
    vaardigheden: 'Constructief feedback geven en ontvangen op UI, animatie, structuur en patterns; Design systems presenteren, uitleggen en toegankelijk maken voor anderen; Samenwerken in korte, intensieve sprints (screen stealing, iteratie, gezamenlijke builds); Je portfolio of challenge-output duidelijk uitleggen: "wat heb ik gedaan en waarom?"',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Deep Dive',
    duur: '4 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen ontwerpidentiteit (portfolio-challenge); Kennis van wat professionele groei laat zien in UI/UX-werk (iteraties, rationale, keuzes); Begrip van ethische reflectie binnen designpraktijk (bijv. dark patterns, bewustwording)',
    vaardigheden: 'Reflecteren op eigen niveau van UI-design, interaction design en multi-device thinking; Documenteren van groei in een tijdlijn of procesdocument; Coherente keuzes formuleren vanuit persoonlijke visie als ontwerper; Verbeteringen doorvoeren op basis van feedback (portfolio, designsystem, flows, animaties); Bewust balanceren tussen creatief experimenteren en verantwoord ontwerpen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Hackathon
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inzicht in contexten waarin verschillende beleving samenkomen; Begrip van hoe bezoekers door fysieke én digitale ruimtes bewegen; Basiskennis van experience journeys: voor-, tijdens- en na een beleving; Inzicht in uitdagingen voor mixed physical/digital experiences (wayfinding, interactie, informatievoorziening)',
    vaardigheden: 'Contextinformatie ophalen binnen een kort tijdsframe (snelle desk research, mini-interviews, field assumptions); Identificeren van behoeften, motivaties en belevingselementen; Snel scenario\'s schetsen, waaronder edge cases; Context mapping op sprintniveau, kansen en fricties benoemen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Kennis van hoe je van contentmomenten en interactielogica; Inzicht in wat een kernflow is binnen een belevings-app; Kennis van UI-principes voor audio-triggers, micro-interacties en storytelling; Begrip van hoe branding, immersive elementen en UX elkaar versterken',
    vaardigheden: 'Ontwerpen van wireframes of wireflows die de route-ervaring ondersteunen; UX-beslissingen vertalen naar schermen, componenten en interacties; Integreren van muziekcontent in de flow (audio players, visual storytelling, markers); Concepten omzetten naar een helder, overtuigend en visueel ontwerp; Snel itereren binnen een multidisciplinair team',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Basiskennis van hoe je een prototype maakt dat een beleving communiceert (narratief, flow, interactie); Inzicht in hoe je test op begrijpelijkheid, usability en aantrekkingskracht binnen één dag; Kennis van functionaliteiten',
    vaardigheden: 'Maken van een klikbaar prototype dat de kernflow laat zien; Testscenario\'s formuleren: "begrijpt de gebruiker waar hij naartoe moet?"; Uitvoeren van snelle usability-checks met medestudenten / andere specialisaties; Aanpassen van ontwerp op basis van directe feedback; Eindpresentatie maken waarbij de beleving duidelijk voelbaar is',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in samenwerking tussen Brand, Immersive en Digital Design; Begrip van elkaars taal, rol en verantwoordelijkheden in een sprint; Kennis van hoe je ontwerpvisie en keuzes helder communiceert in korte tijd',
    vaardigheden: 'Multidisciplinair samenwerken onder hoge tijdsdruk; Afstemmen tussen disciplines: visuele identiteit, ervaring, UX flow; Feedback geven én direct meenemen in het ontwerp; Gezamenlijk presenteren van een geïntegreerde totaalervaring; Verwoorden van de rol van Digital Design binnen het geheel (UX, flow, digitale touchpoints)',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Hackathon',
    duur: '1 week',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in rolvastheid binnen een team (wat breng jij in als Digital Designer?); Kennis van reflectiemethoden op sprintniveau (wat werkte, wat viel op, wat wil ik ontwikkelen?); Bewustzijn van spanning tussen creatieve vrijheid, haalbaarheid en samenwerking',
    vaardigheden: 'Reflecteren op eigen bijdrage aan team en eindproduct; Vertalen van sprintlessen naar persoonlijke leerdoelen voor de rest van het blok; Bewust reflecteren op ontwerpkeuzes, samenwerking en processen; Formuleren van verbeteracties voor volgende sprints of projecten',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // Bureauopdracht
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Bureauopdracht',
    duur: '5-6 weken',
    leeruitkomst: 'context',
    speelvelden: '',
    kennis: 'Inzicht in de complexe leefwereld van gebruikers; Begrip van barrières: taal, vertrouwen, digitale toegang, sociale context, onzekerheid, keuze-overload; Kennis van participatieve onderzoeksmethoden voor/met kwetsbare doelgroepen; Inzicht in waardeproposities, motivaties en gedragsfactoren die ontwerpbeslissingen sturen; Kennis van hoe fysieke context en digitale context elkaar beïnvloeden (stad, opvang, woonruimte, online winkelomgeving)',
    vaardigheden: 'Onderzoeksvragen opstellen en aanscherpen op basis van stakeholderinput; Generatieve en evaluatieve onderzoeksmethoden uitvoeren, passend bij de doelgroep; Inzichten vertalen naar concrete user needs en opportunity areas; Omgaan met gevoeligheden: vertrouwen, veiligheid, taal, toegankelijkheid, emotionele belasting; Contextmap, journey, insights-deck of opportunity-framework opstellen',
    houding: 'Studenten analyseren complexe ontwerpvraagstukken vanuit meerdere perspectieven (gebruiker, organisatie en maatschappij) en tonen kritisch en ethisch bewustzijn in hun keuzes. Ze ontwikkelen een visie op het vakgebied en hun (gewenste) rol daarin, en weten hierbinnen leervragen te formuleren en passende leerstrategieën te ontwikkelen. Ze positioneren zichzelf als kritische, nieuwsgierige en betrouwbare ontwerper die durft te bevragen en te reflecteren op de onderliggende waarden in een project.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Bureauopdracht',
    duur: '5-6 weken',
    leeruitkomst: 'ontwerpen',
    speelvelden: '',
    kennis: 'Inzicht in UX-conceptontwikkeling voor complexe systemen (bijv. stedelijke hulpstructuren of grote e-commerce platformen); Kennis van informatiearchitectuur, flows, aanbevelingslogica, motivatieprincipes; Diepgaand inzicht in UI-principes voor helderheid, toegankelijkheid, samenhang en keuzezekerheid; Kennis van interaction patterns voor search, filtering, keuzebegeleiding, vergelijking en contextvisualisatie',
    vaardigheden: 'Concepten ontwikkelen die inspelen op vertrouwen, duidelijkheid, ondersteuning en motivatie; Ontwerpen van wireframes, flows en decision-points (bijv. twijfelvermindering of route/navigatie); UI-componenten ontwikkelen volgens ecosystemen (Android, iOS, Web); Ontwerpkeuzes expliciet koppelen aan onderzoek en insights; Scenario\'s ontwerpen voor verschillende doelgroepen',
    houding: 'Studenten ontwerpen zelfstandig en met visie. Ze durven bestaande patronen te doorbreken en onderbouwen hun keuzes vanuit onderzoek en maatschappelijke relevantie. Ze balanceren met de ontwerpen tussen creatieve vrijheid en realistische haalbaarheid. Hierbij tonen ze zelfbewustzijn en verantwoordelijkheid voor de consequenties van hun ontwerp.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Bureauopdracht',
    duur: '5-6 weken',
    leeruitkomst: 'prototype',
    speelvelden: '',
    kennis: 'Usability-testing principes voor uiteenlopende doelgroepen (bijv. laagdrempelig, taalarme, stressgevoelige enz); Inzicht in testscenario\'s voor vertrouwen, duidelijkheid, navigatie, en keuzezekerheid; Kennis van high-fi prototyping en state-management (componenten, variants, motion)',
    vaardigheden: 'High-fi prototypes bouwen op basis van design systems en platform guidelines; Prototypes testen met echte gebruikers, doelgroep-experts of medestudenten; Observaties vertalen naar concrete ontwerpaanpassingen; Visuele, inhoudelijke en UX-testfeedback integreren in een iteratiecyclus; Eindprototype overtuigend demonstreren met rationale en onderbouwing',
    houding: 'Studenten hanteren een strategische, iteratieve en reflectieve testhouding. Ze stellen kritische vragen bij aannames om beslissingen te onderbouwen en betrekken gebruikers actief in hun evaluaties. Ze tonen volharding, eerlijkheid en flexibiliteit in het omgaan met feedback en resultaten, ook wanneer deze hun ontwerp uitdagen.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Bureauopdracht',
    duur: '5-6 weken',
    leeruitkomst: 'verbinden',
    speelvelden: '',
    kennis: 'Inzicht in stakeholderrollen (platform-experts, professionals, shoppers enz); Begrip van hoe informatie, waarde en motivatie door een sociaal of commercieel systeem stromen; Kennis van ethische vraagstukken zoals vertrouwen, inclusie, veiligheid en verantwoordelijkheid in ontwerp',
    vaardigheden: 'Gesprekken voeren met professionals, gebruikers of context-experts; Aandachtspunten en verwachtingen van stakeholders vertalen naar ontwerpcriteria; Teamrollen afstemmen en verantwoordelijkheid nemen binnen het bureauproject; Ontwerprationale helder en overtuigend presenteren, afgestemd op opdrachtgever; Documentatie maken die overdraagbaar is voor opdrachtgever en ontwikkelteams',
    houding: 'Studenten tonen proactieve houding in het betrekken van belanghebbenden en ontwikkelen empathische communicatie voor verschillende doelgroepen. Ze balanceren eigen expertise met waardering voor andere disciplines. Verantwoordelijkheidszin voor kennisdeling en integriteit in feedback worden kernwaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    activiteit: 'Bureauopdracht',
    duur: '5-6 weken',
    leeruitkomst: 'reflecteren',
    speelvelden: '',
    kennis: 'Inzicht in eigen ontwerpidentiteit binnen professionele praktijk; Kennis van reflectiemethoden voor zelfpositie, samenwerking en iteratie; Inzicht in hoe onderzoekend vermogen professioneel handelen beïnvloedt; Kennis van ethiek, inclusie, toegankelijkheid en duurzaamheid in ontwerp',
    vaardigheden: 'Bewust reflecteren op ontwerpkeuzes, proces en samenwerking; Eigen rol, kwaliteiten en valkuilen benoemen binnen complexe projecten; Verbeterpunten formuleren voor toekomstig professioneel handelen; Reflecteren op impact van ontwerp op gebruiker, opdrachtgever en samenleving; Continu bijsturen op basis van feedback, zelfinzicht en projectervaringen',
    houding: 'Studenten ontwikkelen strategisch leergedrag door bewust verschillende leerstrategieën in te zetten en mentorschap te zoeken bij experts en peers. Ze tonen moed om eigen overtuigingen ter discussie te stellen en adaptabiliteit bij het aanpassen van hun aanpak. Zelfregulatie wordt sterker terwijl ze feedback actief opzoeken en verwerken.'
  },

  // ==================== SEMESTER 7 AFSTUDEREN ====================
  // Afstudeerproject
  {
    semester: 7,
    semesterNaam: 'Afstuderen',
    activiteit: 'Afstudeerproject',
    duur: '20 weken',
    leeruitkomst: 'context',
    beschrijving: 'Je verkrijgt informatie over de context van de opdracht en de belanghebbenden aan de hand van gegeven onderzoeksmethodes. Je formuleert en onderbouwt welke inzichten je hieruit hebt opgedaan voor jouw ontwerp.',
    speelvelden: '',
    kennis: 'Diepgaande kennis van onderzoeksmethoden voor complexe vraagstukken (kwalitatief, kwantitatief, mixed-methods); Inzicht in organisatiecontext: processen, governance, strategie en stakeholders; Kennis van maatschappelijke, ethische en technologische factoren die ontwerp beïnvloeden; Kennis van theorieën en modellen binnen het gekozen afstudeerdomein',
    vaardigheden: 'Zelfstandig een complex vraagstuk analyseren en herdefiniëren; Geschikte onderzoeksmethoden kiezen, plannen, onderbouwen en uitvoeren; Onderzoeksresultaten kritisch interpreteren en vertalen naar ontwerpcriteria; Waardecreatie aantonen vanuit meerdere perspectieven (gebruiker/organisatie/samenleving)',
    houding: 'De afstudeerder benadert complexe vraagstukken met een professionele, onderzoekende en kritische houding. Hij/zij toont eigenaarschap in het afbakenen en doorgronden van de context, vraagt door op aannames en onderzoekt belangen van alle relevante stakeholders. De student gaat zorgvuldig en ethisch om met data en toont bewustzijn van maatschappelijke en organisatorische consequenties van keuzes. Daarbij wordt verantwoordelijkheid genomen voor de kwaliteit, diepgang en betrouwbaarheid van het onderzoek.'
  },
  {
    semester: 7,
    semesterNaam: 'Afstuderen',
    activiteit: 'Afstudeerproject',
    duur: '20 weken',
    leeruitkomst: 'ontwerpen',
    beschrijving: 'Je experimenteert met mogelijke oplossingen vanuit verschillende perspectieven, op basis van onderzoeken. Daarmee creëer je, op iteratieve wijze, concepten en ontwerpen.',
    speelvelden: '',
    kennis: 'Kennis van geavanceerde ontwerpmethodieken (service design, interaction design, system design, UX-strategie); Kennis van ontwerpprincipes, patterns, design systems en bijbehorende tools; Inzicht in haalbaarheid, technische randvoorwaarden en implementatiecontext',
    vaardigheden: 'Ontwerpen vanuit probleem- én waardeperspectief; Onderbouwde ontwerprichting ontwikkelen en itereren op basis van inzichten; Autonome ontwerpkeuzes maken én verdedigen richting stakeholders; Meervoudige ontwerpvarianten creëren en evalueren',
    houding: 'De afstudeerder ontwerpt met autonomie, visie en een volwassen vakinhoudelijke houding. Hij/zij durft duidelijke ontwerpkeuzes te maken en verantwoordt deze met overtuiging richting professionals en opdrachtgevers. De student balanceert creativiteit met realisme en toont flexibiliteit wanneer nieuwe inzichten of veranderende omstandigheden dat vragen. Ontwerpen wordt gezien als een verantwoordelijk proces, waarin de student openstaat voor kritiek en steeds naar de beste oplossing blijft streven.'
  },
  {
    semester: 7,
    semesterNaam: 'Afstuderen',
    activiteit: 'Afstudeerproject',
    duur: '20 weken',
    leeruitkomst: 'prototype',
    beschrijving: 'Je creëert low- en high-fi prototypes en op basis van een testplan evalueer je herhaaldelijk bij belanghebbenden. Je presenteert op verschillende manieren en in verschillende stijlen',
    speelvelden: '',
    kennis: 'Kennis van verschillende prototypingtechnieken (van low- tot high-fidelity); Inzicht in testmethoden en evaluatiecriteria (usability, toegankelijkheid, effectmeting); Kennis van eisen rond veiligheid, toegankelijkheid, consistentie en betrouwbaarheid',
    vaardigheden: 'Gestructureerd prototypen dat ontwerpkeuzes concreet maakt; Testopzetten ontwerpen, uitvoeren, analyseren en verantwoorden; Resultaten vertalen naar concrete ontwerpverbeteringen; Onderzoekersdiscipline tonen in nauwkeurige verslaglegging',
    houding: 'De afstudeerder toont een transparante, nauwkeurige en iteratieve houding in het prototypen en testen. Hij/zij gaat professioneel om met feedback en onderzoekt kritisch de werking van het ontwerp, ook wanneer resultaten confronterend zijn. De student toont discipline in het zorgvuldig documenteren en analyseren van tests en blijft gericht op verbeteren, valideren en afwegen. Integriteit, eerlijkheid en doorzettingsvermogen kenmerken de houding in dit deel van het proces.'
  },
  {
    semester: 7,
    semesterNaam: 'Afstuderen',
    activiteit: 'Afstudeerproject',
    duur: '20 weken',
    leeruitkomst: 'verbinden',
    beschrijving: 'Je geeft en ontvangt feedback. Je organiseert het samenwerkingsproces volgens aangereikte methoden, daarin houd je rekening met je team.',
    speelvelden: '',
    kennis: 'Kennis van communicatie- en overlegstrategieën in multidisciplinaire professionele contexten; Inzicht in stakeholdermanagement, projectstructuren en besluitvorming; Kennis van professionele presentatievormen, documentatie en overdracht',
    vaardigheden: 'Professioneel communiceren met opdrachtgever, gebruikers, experts en teamleden; Constructief feedback geven, ontvangen en verwerken; Stakeholders meenemen in keuzes en beslissingen; Heldere, professionele documentatie en presentatie van proces en resultaat',
    houding: 'De afstudeerder communiceert volwassen, respectvol en professioneel binnen de organisatie en met externe stakeholders. Hij/zij stemt actief af, bewaakt verwachtingen en neemt initiatief in samenwerking. De student toont empathie voor verschillende disciplines en belangen en beweegt zich soepel tussen rollen en gesprekspartners. Feedback wordt zowel constructief gegeven als ontvangen, en de student draagt zichtbaar bij aan een professionele, collegiale samenwerking.'
  },
  {
    semester: 7,
    semesterNaam: 'Afstuderen',
    activiteit: 'Afstudeerproject',
    duur: '20 weken',
    leeruitkomst: 'reflecteren',
    beschrijving: 'Je geeft richting aan het eigen leerproces met behulp van ontvangen feedback en opgedane kennis. Je past diverse reflectiemethodes toe om tot inzicht in jouw eigen leerproces.',
    speelvelden: '',
    kennis: 'Inzicht in eigen professionele rol binnen het CMD-beroep; Kennis van reflectiemethodieken en professionele ontwikkeling; Inzicht in ethische vraagstukken, maatschappelijke impact en verantwoordelijk ontwerp',
    vaardigheden: 'Kritisch reflecteren op eigen handelen, onderbouwing en resultaat; Zelfstandig leerdoelen formuleren, monitoren en bijsturen; Professionele keuzes uitleggen en relateren aan theorie, context en eigen identiteit; Verantwoord, autonoom projectmanagement uitvoeren binnen de stage-/afstudeeromgeving',
    houding: 'De afstudeerder neemt volledige verantwoordelijkheid voor zijn/haar eigen ontwikkeling en handelen. Hij/zij reflecteert kritisch en eerlijk op keuzes, resultaten en professionele identiteit, en koppelt inzichten aan concrete verbeteringen. De student toont zelfbewustzijn, realisme en intrinsieke motivatie om verder te groeien binnen het vakgebied. Tegelijk wordt een ethische en maatschappelijk bewuste houding zichtbaar, waarbij de student nadenkt over de bredere impact van het ontwerp en het eigen professionele handelen.'
  }
];

// TAB 2: Data voor "Speelvelden" tab (unchanged from previous version)
export const speelveldenData: SpeelveldData[] = [
  // Design - Semester 1
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    jaar: 1,
    speelveld: 'Design',
    introductie: 'In het eerste semester maken studenten kennis met de basisprincipes van design. Ze leren wat design is, welke ontwerpprincipes er zijn en hoe ze deze kunnen toepassen in eenvoudige ontwerpopdrachten.',
    globaleBeschrijving: 'Kennismaking met designprincipes en -tools. Studenten leren de basis van visueel ontwerpen, typografie, kleur en compositie.',
    kernfocus: 'Visuele ontwerpprincipes; Design thinking basics; Prototyping tools (Figma)',
    typischeActiviteiten: 'Basecamp (designverkenning); Visual Design (visuele principes); User Experience Basics (eerste UX inzichten)',
    verbandenMetAndereSemesters: 'Vormt de basis voor alle latere designvakken. Wordt verder ontwikkeld in S2 met UX design en S3 met interaction design.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    jaar: 1,
    speelveld: 'Technologie & AI',
    introductie: 'Studenten maken kennis met de technische kant van CMD: HTML, CSS en basis JavaScript. Ze leren hoe websites gebouwd worden en maken hun eerste eenvoudige webpaginas.',
    globaleBeschrijving: 'Introductie in webtechnologie en programmeren. Studenten leren HTML en CSS en maken hun eerste interactieve prototypes.',
    kernfocus: 'HTML & CSS basics; Responsive design; Basis JavaScript; Developer tools',
    typischeActiviteiten: 'Webdevelopment (HTML/CSS); Programmeren Basis (JavaScript intro)',
    verbandenMetAndereSemesters: 'Fundeert technische vaardigheden die in S2-S4 worden uitgebreid met frameworks, APIs en geavanceerde JavaScript.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    jaar: 1,
    speelveld: 'Mens & Ervaring',
    introductie: 'Studenten leren wat gebruikerservaring (UX) betekent en waarom het belangrijk is. Ze verkennen basale gebruikersonderzoek en leren empathie met gebruikers te ontwikkelen.',
    globaleBeschrijving: 'Introductie in UX en mensgerichte design. Studenten leren gebruikers te observeren en hun behoeften te begrijpen.',
    kernfocus: 'UX basics; Gebruikersonderzoek (observatie, interviews); Persona ontwikkeling; Empathy mapping',
    typischeActiviteiten: 'User Experience Basics (gebruikersonderzoek); Visual Design (gebruikersgerichte visuele communicatie)',
    verbandenMetAndereSemesters: 'Basis voor UX research in S2-S3, accessibility in S3, en gedragswetenschappen in S4-S5.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    jaar: 1,
    speelveld: 'Maatschappij & Toekomst',
    introductie: 'Studenten reflecteren op de rol van design in de maatschappij en verkennen actuele trends en ontwikkelingen.',
    globaleBeschrijving: 'Eerste verkenning van de maatschappelijke impact van design en digitale producten.',
    kernfocus: 'Design ethics basics; Duurzaamheid in design; Inclusief ontwerpen',
    typischeActiviteiten: 'Basecamp (reflectie op design in maatschappij); Civic Duty (maatschappelijke vraagstukken)',
    verbandenMetAndereSemesters: 'Vormt bewustzijn dat verder wordt ontwikkeld in S3-S4 met ethics, sustainability en social design.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    jaar: 1,
    speelveld: 'Organisatie & Strategie',
    introductie: 'Studenten leren de basis van projectmanagement en samenwerken in teams. Ze verkennen verschillende rollen binnen een ontwerpteam.',
    globaleBeschrijving: 'Introductie in professioneel werken en projectorganisatie binnen CMD context.',
    kernfocus: 'Projectmanagement basics; Teamrollen; Agile/Scrum introductie; Communicatie in teams',
    typischeActiviteiten: 'Basecamp (teamwork); Alle projecten (samenwerken in teams)',
    verbandenMetAndereSemesters: 'Grondslag voor complexere projecten in S2-S4 en stagevoorbereiding in S4.'
  },
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    jaar: 1,
    speelveld: 'Onderzoekend Vermogen',
    introductie: 'Studenten leren de basis van ontwerpgericht onderzoek: observeren, vragen stellen en informatie verzamelen.',
    globaleBeschrijving: 'Introductie in onderzoeksmethoden relevant voor CMD, met focus op kwalitatief gebruikersonderzoek.',
    kernfocus: 'Observatietechnieken; Interview basics; Desk research; Bronvermelding',
    typischeActiviteiten: 'User Experience Basics (gebruikersonderzoek); Alle projecten (onderzoekende houding)',
    verbandenMetAndereSemesters: 'Basis voor kwantitatief onderzoek in S2, mixed methods in S3-S4, en afstudeeronderzoek in S7.'
  },
  
  // Semester 2
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    jaar: 1,
    speelveld: 'Design',
    introductie: 'Studenten passen hun ontwerpvaardigheden toe in echte opdrachtgeversprojecten. Ze leren ontwerpen voor verschillende contexten en doelgroepen.',
    globaleBeschrijving: 'Toepassing van designvaardigheden in projecten met externe opdrachtgevers. Focus op UX design en interaction design.',
    kernfocus: 'UX design proces; Wireframing & prototyping; Interaction design patterns; Designsystemen',
    typischeActiviteiten: 'Opdrachtgeversproject (end-to-end UX design); Interaction Design (interactiepatronen)',
    verbandenMetAndereSemesters: 'Bouwt voort op S1 designprincipes en bereidt voor op S3 complexere interactieve systemen.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    jaar: 1,
    speelveld: 'Technologie & AI',
    introductie: 'Studenten verdiepen hun technische vaardigheden met JavaScript frameworks en API-integratie.',
    globaleBeschrijving: 'Uitbreiding van technische vaardigheden met moderne webframeworks en externe data.',
    kernfocus: 'JavaScript frameworks (React basics); API consumption; Data-driven interfaces; Version control (Git)',
    typischeActiviteiten: 'Webdevelopment (React & APIs); Opdrachtgeversproject (technische implementatie)',
    verbandenMetAndereSemesters: 'Bouwt voort op S1 HTML/CSS/JS, leidt naar S3 geavanceerde frameworks en S4 full-stack development.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    jaar: 1,
    speelveld: 'Mens & Ervaring',
    introductie: 'Studenten voeren usability testing uit met echte gebruikers en leren testresultaten te analyseren.',
    globaleBeschrijving: 'Verdieping in gebruikersonderzoek en testing. Focus op iteratief ontwerpen op basis van gebruikersfeedback.',
    kernfocus: 'Usability testing; Task analysis; Test protocol ontwikkeling; Analyse en rapportage',
    typischeActiviteiten: 'Opdrachtgeversproject (usability testing); Interaction Design (gebruikerstesten)',
    verbandenMetAndereSemesters: 'Bouwt voort op S1 UX basics, leidt naar S3 kwantitatief onderzoek en advanced testing methoden.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    jaar: 1,
    speelveld: 'Maatschappij & Toekomst',
    introductie: 'Studenten werken aan projecten met maatschappelijke impact en leren ethische overwegingen meenemen in design.',
    globaleBeschrijving: 'Design voor social good en eerste kennismaking met design ethics.',
    kernfocus: 'Social design; Inclusive design; Design impact; Stakeholder diversity',
    typischeActiviteiten: 'Civic Duty (maatschappelijk project); Opdrachtgeversproject (diverse doelgroepen)',
    verbandenMetAndereSemesters: 'Verdiept S1 maatschappelijk bewustzijn, voorbereiding op S3 Design Ethics vak.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    jaar: 1,
    speelveld: 'Organisatie & Strategie',
    introductie: 'Studenten leren communiceren met opdrachtgevers en projecten professioneel aanpakken.',
    globaleBeschrijving: 'Professionele communicatie en projectmanagement in opdrachtgeverscontext.',
    kernfocus: 'Opdrachtgever communicatie; Presenteren; Feedback verwerken; Agile werken',
    typischeActiviteiten: 'Opdrachtgeversproject (communicatie en planning); Alle projecten (professioneel werken)',
    verbandenMetAndereSemesters: 'Bouwt voort op S1 teamwork, bereidt voor op S4 stagevoorbereiding en S5 praktijk.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    jaar: 1,
    speelveld: 'Onderzoekend Vermogen',
    introductie: 'Studenten leren systematisch onderzoek doen en resultaten rapporteren.',
    globaleBeschrijving: 'Toepassing van onderzoeksmethoden in projectcontext en eerste rapportage skills.',
    kernfocus: 'Onderzoeksopzet; Methode selectie; Data analyse; Rapportage',
    typischeActiviteiten: 'Opdrachtgeversproject (onderzoeksfase); Design rationale schrijven',
    verbandenMetAndereSemesters: 'Bouwt voort op S1 onderzoek basics, bereidt voor op S3 advanced research methods.'
  },

  // Semester 3
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    jaar: 2,
    speelveld: 'Design',
    introductie: 'Studenten verdiepen zich in specifieke designdisciplines en ontwikkelen specialistische skills.',
    globaleBeschrijving: 'Verdieping in specialistische design areas: service design, advanced visual, motion design.',
    kernfocus: 'Service design; Customer journeys; Advanced visual design; Motion design; Design systems',
    typischeActiviteiten: 'Themed Project (service design); Visual Design (advanced); Storytelling (motion)',
    verbandenMetAndereSemesters: 'Bouwt voort op S1-S2, bereidt voor op specialisatiekeuze in S6.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    jaar: 2,
    speelveld: 'Technologie & AI',
    introductie: 'Studenten leren full-stack development en werken met databases en APIs.',
    globaleBeschrijving: 'Full-stack development: frontend frameworks, backend basics, databases, deployment.',
    kernfocus: 'React/Vue advanced; Node.js basics; Databases (SQL/NoSQL); API development; Deployment',
    typischeActiviteiten: 'Themed Project (full-stack development); Keuzevak technologie',
    verbandenMetAndereSemesters: 'Bouwt voort op S1-S2 frontend, bereidt voor op S4-S5 professionele development.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    jaar: 2,
    speelveld: 'Mens & Ervaring',
    introductie: 'Studenten leren geavanceerde onderzoeksmethoden en gedragspsychologie toepassen.',
    globaleBeschrijving: 'Advanced UX research, gedragspsychologie, persuasive design, accessibility.',
    kernfocus: 'Kwantitatief onderzoek; A/B testing; Gedragspsychologie; Persuasive design; WCAG',
    typischeActiviteiten: 'Themed Project (UX research); Persuasive Communication; Data Science',
    verbandenMetAndereSemesters: 'Bouwt voort op S1-S2 UX, bereidt voor op specialisatie UX research/design.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    jaar: 2,
    speelveld: 'Maatschappij & Toekomst',
    introductie: 'Studenten verdiepen zich in design ethics, sustainability en toekomstgericht ontwerpen.',
    globaleBeschrijving: 'Ethisch en duurzaam ontwerpen, toekomstscenarios, social impact.',
    kernfocus: 'Design ethics; Dark patterns; Privacy; Sustainability; Inclusive design; Future thinking',
    typischeActiviteiten: 'Design Ethics (dedicated course); Themed Project (ethical considerations)',
    verbandenMetAndereSemesters: 'Verdiept S1-S2 maatschappelijk bewustzijn, bereidt voor op S6-S7 strategic design.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    jaar: 2,
    speelveld: 'Organisatie & Strategie',
    introductie: 'Studenten leren faciliteren, workshops organiseren en agile werken.',
    globaleBeschrijving: 'Workshop facilitatie, co-creation, agile/scrum, stakeholder management.',
    kernfocus: 'Facilitatie; Co-creation; Agile/Scrum; Stakeholder management; Design ops',
    typischeActiviteiten: 'Themed Project (team lead rol); Workshop facilitatie',
    verbandenMetAndereSemesters: 'Bouwt voort op S1-S2 teamwork, bereidt voor op S5 professionele context.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    jaar: 2,
    speelveld: 'Onderzoekend Vermogen',
    introductie: 'Studenten leren advanced research methods en data analyse.',
    globaleBeschrijving: 'Mixed methods research, data analyse, research design, academic writing.',
    kernfocus: 'Mixed methods; Kwantitatief onderzoek; Data analyse; Research design; Academic writing',
    typischeActiviteiten: 'Themed Project (comprehensive research); Data Science; Eigen Project',
    verbandenMetAndereSemesters: 'Bereidt voor op S6 specialisatie research en S7 afstudeeronderzoek.'
  },

  // Semester 4-7 verkorte beschrijvingen
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECTING',
    jaar: 2,
    speelveld: 'Design',
    introductie: 'Studenten werken aan complexe projecten en bereiden zich voor op de praktijk.',
    globaleBeschrijving: 'Professional-level design, voorbereiding op stage, portfolio ontwikkeling.',
    kernfocus: 'Professional design; Portfolio; Stagevoorbereiding; Professional identity',
    typischeActiviteiten: 'Actueel project; Portfolio review; Stagevoorbereiding',
    verbandenMetAndereSemesters: 'Bereidt voor op S5 stage en S6 specialisatie.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    jaar: 3,
    speelveld: 'Alle speelvelden',
    introductie: 'Studenten lopen stage bij een bedrijf en passen alle competenties toe in professionele context.',
    globaleBeschrijving: 'Praktijkstage: werken als junior professional in bedrijf.',
    kernfocus: 'Professional practice; All competencies applied; Industry standards; Networking',
    typischeActiviteiten: 'Stage (20 weken fulltime)',
    verbandenMetAndereSemesters: 'Integreert alle S1-S4 competenties, bereidt voor op S6 specialisatie en S7 afstuderen.'
  },
  // Semester 6 - Brand Design
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Brand Design',
    jaar: 3,
    speelveld: 'Design',
    introductie: 'Brand Design specialisten ontwikkelen',
    globaleBeschrijving: 'Specialisatie in merkidentiteit en visuele strategie. Studenten leren merkwaarden vertalen naar visuele systemen, brand guidelines ontwikkelen en strategische brand experiences ontwerpen. Focus op typografie, kleur theorie, en visuele storytelling op strategisch niveau. Expert workshops met brand designers, complexe brand design projecten voor echte merken.',
    kernfocus: 'Brand identity, visuele merkstrategie, brand guidelines en strategische visuele communicatie',
    typischeActiviteiten: 'Brand Identity Project - Volledige merkidentiteit ontwikkelen; Brand Strategy - Merkstrategie en positioning; Visual Systems - Consistente visuele systemen',
    verbandenMetAndereSemesters: 'Bouwt voort op visual design uit jaar 1-2; Bereidt voor op brand-focused afstudeerproject'
  },
  // Semester 6 - Immersive Design
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Immersive Design',
    jaar: 3,
    speelveld: 'Design',
    introductie: 'Immersive Design specialisten creëren',
    globaleBeschrijving: 'Specialisatie in VR, AR en XR experiences. Studenten ontwerpen immersive environments, spatial interfaces en mixed reality experiences. Focus op 3D design, spatial interaction design, en immersive storytelling. Expert workshops met XR specialisten, geavanceerde immersive projecten met cutting-edge technologie.',
    kernfocus: 'VR/AR/XR design, spatial interaction, immersive storytelling en 3D environments',
    typischeActiviteiten: 'Immersive Experience Project - VR/AR ervaring ontwerpen; Spatial Design - 3D interface design; XR Prototyping - Immersive prototypes bouwen',
    verbandenMetAndereSemesters: 'Bouwt voort op interaction design fundamenten; Bereidt voor op immersive-focused afstudeerproject'
  },
  // Semester 6 - Digital Design
  {
    semester: 6,
    semesterNaam: 'Semester 6 Specialisatie Digital Design',
    jaar: 3,
    speelveld: 'Design',
    introductie: 'Digital Design specialisten bouwen',
    globaleBeschrijving: 'Specialisatie in digitale producten en services. Studenten ontwerpen complexe digital products, multi-platform experiences en service ecosystems. Focus op advanced UI/UX, design systems en product strategy. Expert workshops met product designers, strategische digital design projecten voor tech bedrijven.',
    kernfocus: 'Product design, design systems, multi-platform experiences en digital service design',
    typischeActiviteiten: 'Digital Product Project - Complex digitaal product ontwerpen; Design Systems - Schaalbare design systems bouwen; Service Design - End-to-end service experiences',
    verbandenMetAndereSemesters: 'Bouwt voort op digital design uit jaar 1-2; Bereidt voor op product-focused afstudeerproject'
  },
  {
    semester: 7,
    semesterNaam: 'Semester 7 Afstuderen',
    jaar: 4,
    speelveld: 'Alle speelvelden geïntegreerd',
    introductie: 'Studenten voeren afstudeerproject uit en demonstreren mastery van alle competenties.',
    globaleBeschrijving: 'Afstudeerproject: demonstratie van professional-level competenties en specialistische expertise.',
    kernfocus: 'Mastery all competencies; Innovation; Strategic thinking; Professional identity',
    typischeActiviteiten: 'Businesscalls; Definitiestudie; Executie; Afstuderen (thesis + project)',
    verbandenMetAndereSemesters: 'Integreert en demonstreert alle competenties uit S1-S6 op highest level.'
  }
];

// TAB 3: Data voor "Opbouw Leeruitkomsten" tab (unchanged)
export const leeruitkomstProgressies: LeeruitkomstProgressie[] = [
  // Context - progressie
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    leeruitkomst: 'Context',
    beschrijving: 'Verkent ontwerpcontext en doelgroep met begeleiding. Verzamelt basisinformatie over gebruikers en hun omgeving. Observeert designvoorbeelden in het dagelijks leven.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    leeruitkomst: 'Context',
    beschrijving: 'Analyseert ontwerpcontext meer systematisch. Voert gebruikersonderzoek uit met basismethoden (interviews, observaties). Identificeert belangrijkste stakeholders en hun belangen.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    leeruitkomst: 'Context',
    beschrijving: 'Onderzoekt complexere contexten en doelgroepen. Past diverse onderzoeksmethoden toe (kwalitatief en kwantitatief). Analyseert concurrenten en markttrends. Identificeert kansen en bedreigingen.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECTING',
    leeruitkomst: 'Context',
    beschrijving: 'Voert diepgaande contextanalyse uit voor professionele projecten. Combineert meerdere onderzoeksmethoden. Adviseert opdrachtgever over context en doelgroep. Anticipeert op toekomstige ontwikkelingen.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    leeruitkomst: 'Context',
    beschrijving: 'Past contextanalyse toe in professionele praktijk. Werkt met echte stakeholders en complexe organisaties. Vertaalt contextinzichten naar strategische designkeuzes.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Semester Specialisatie',
    leeruitkomst: 'Context',
    beschrijving: 'Voert specialistische contextanalyse uit binnen gekozen domein. Ontwikkelt eigen visie op context en toekomstscenarios. Adviseert op strategisch niveau.'
  },
  {
    semester: 7,
    semesterNaam: 'Semester 7 Afstuderen',
    leeruitkomst: 'Context',
    beschrijving: 'Demonstreert diepgaand begrip van complexe contexten. Voert zelfstandig professioneel contextonderzoek uit. Levert strategisch advies op basis van contextanalyse. Anticipeert op toekomstige ontwikkelingen.'
  },
  
  // Ontwerpen - progressie
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Genereert eerste ideeën en schetsen. Creëert eenvoudige visuele ontwerpen. Past basis ontwerpprincipes toe (contrast, hiërarchie, balans). Experimenteert met typografie en kleur.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Ontwikkelt meerdere ontwerpconcepten voor een probleem. Maakt wireframes en mockups. Past UX design patterns toe. Ontwerpt voor verschillende schermformaten (responsive).'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Ontwerpt complexere interactieve systemen. Ontwikkelt designsystemen en component libraries. Balanceert gebruikerswensen met business requirements. Ontwerpt toegankelijke interfaces (WCAG).'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECTING',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Ontwerpt end-to-end experiences voor professionele opdrachtgevers. Verantwoordt ontwerpkeuzes met onderzoek en theorie. Ontwerpt voor diverse platforms en touchpoints. Houdt rekening met technische haalbaarheid.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Ontwerpt professionele producten in bedrijfscontext. Werkt binnen bestaande designsystemen en brand guidelines. Collaboreert met developers en andere disciplines.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Semester Specialisatie',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Ontwikkelt specialistische ontwerpexpertise in gekozen domein. Experimenteert met innovatieve ontwerprichtingen. Ontwikkelt eigen design visie en stijl.'
  },
  {
    semester: 7,
    semesterNaam: 'Semester 7 Afstuderen',
    leeruitkomst: 'Ontwerpen',
    beschrijving: 'Demonstreert professioneel ontwerpniveau. Ontwikkelt innovatieve oplossingen voor complexe problemen. Verantwoordt keuzes op strategisch niveau. Toont ontwikkelde specialistische expertise.'
  },
  
  // Prototype & Testen - progressie
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Maakt eenvoudige prototypes (papier, digitaal). Presenteert ontwerpen aan medestudenten. Vraagt feedback en verwerkt deze in nieuwe iteraties. Leert basis prototyping tools (Figma).'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Ontwikkelt interactieve prototypes met meerdere states. Voert usability tests uit met echte gebruikers. Analyseert testresultaten en vertaalt naar verbeteringen. Implementeert simpele prototypes in code.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Bouwt functionele prototypes met frameworks (React). Voert diverse testmethoden uit (usability, A/B, accessibility). Analyseert kwantitatieve testdata. Optimaliseert op basis van analytics.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECTING',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Ontwikkelt production-ready prototypes. Plant en voert uitgebreide teststrategie uit. Combineert kwalitatieve en kwantitatieve testmethoden. Valideert met stakeholders en gebruikers.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Bouwt en test professionele producten. Werkt met productie omgevingen en CI/CD. Voert testen uit volgens bedrijfsstandaarden.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Semester Specialisatie',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Past specialistische prototyping technieken toe. Experimenteert met nieuwe technologieën. Ontwikkelt teststrategieën voor innovatieve concepten.'
  },
  {
    semester: 7,
    semesterNaam: 'Semester 7 Afstuderen',
    leeruitkomst: 'Prototype & Testen',
    beschrijving: 'Bouwt professionele, geteste prototypes. Voert rigoureuze validatie uit met meerdere methoden. Demonstreert technische en test-expertise. Adviseert over implementatie en validatie.'
  },
  
  // Verbinden - progressie
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Werkt samen in kleine teams. Communiceert ideeën mondeling en visueel. Presenteert werk aan medestudenten. Geeft en ontvangt constructieve feedback.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Werkt in projectteams met rolverdeling. Communiceert met externe opdrachtgevers. Presenteert ontwerpproces en resultaten professioneel. Collaboreert met developers.'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Faciliteert workshops en co-creatie sessies. Communiceert met diverse stakeholders. Schrijft professionele documentatie (design rationale). Werkt in multidisciplinaire teams.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECTING',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Managed stakeholder verwachtingen. Adviseert opdrachtgevers op strategisch niveau. Presenteert en verdedigt keuzes professioneel. Vertaalt tussen technische en business context.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Functioneert als professional in bedrijfscontext. Bouwt netwerk binnen organisatie. Communiceert effectief op alle niveaus. Werkt met externe partners.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Semester Specialisatie',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Positioneert zich als specialist. Deelt kennis en expertise met anderen. Bouwt professioneel netwerk in vakgebied. Communiceert visie en strategie.'
  },
  {
    semester: 7,
    semesterNaam: 'Semester 7 Afstuderen',
    leeruitkomst: 'Verbinden',
    beschrijving: 'Functioneert als starting professional. Adviseert stakeholders op alle niveaus. Faciliteert complexe samenwerkingen. Positioneert zich in professioneel veld. Bouwt duurzame relaties.'
  },
  
  // Leren & Reflecteren - progressie
  {
    semester: 1,
    semesterNaam: 'Semester 1 BASE',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Reflecteert op ontwerpproces met begeleiding. Documenteert leerproces in portfolio. Past feedback toe in volgende opdrachten. Herkent eigen sterke en zwakke punten.'
  },
  {
    semester: 2,
    semesterNaam: 'Semester 2 CHALLENGING',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Reflecteert systematisch met modellen (STARR). Stelt leerdoelen voor komende periode. Zoekt actief naar leer mogelijkheden. Ontwikkelt persoonlijk ontwikkelplan (POP).'
  },
  {
    semester: 3,
    semesterNaam: 'Semester 3 EXPLORING',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Reflecteert kritisch op eigen ontwikkeling en professionele identiteit. Plant eigen leertraject. Zoekt feedback van peers en professionals. Ontwikkelt visie op vakgebied.'
  },
  {
    semester: 4,
    semesterNaam: 'Semester 4 CONNECTING',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Stuurt eigen ontwikkeling aan. Reflecteert op professionele rol en identiteit. Bereidt zich voor op stage en specialisatie. Ontwikkelt specialisatierichting.'
  },
  {
    semester: 5,
    semesterNaam: 'Semester 5 Praktijk',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Leert in professionele context. Reflecteert op rol als professional. Identificeert ontwikkelpunten voor laatste fase. Ontwikkelt visie op toekomstige carrière.'
  },
  {
    semester: 6,
    semesterNaam: 'Semester 6 Semester Specialisatie',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Ontwikkelt specialistische expertise. Reflecteert op professionele identiteit en ambitie. Bereidt zich voor op afstuderen. Positioneert zich in vakgebied.'
  },
  {
    semester: 7,
    semesterNaam: 'Semester 7 Afstuderen',
    leeruitkomst: 'Leren & Reflecteren',
    beschrijving: 'Demonstreert professionele ontwikkeling over gehele opleiding. Reflecteert op rol als starting professional. Plant verdere carrière ontwikkeling. Toont lifelong learning attitude.'
  }
];

// Export alle data samen voor makkelijke toegang
export const curriculumData = {
  semesterActiviteiten,
  speelveldenData,
  leeruitkomstProgressies
};
