import { Leerlijn } from './leerlijnen';

export type SemesterContent = {
  beschrijving: string;
  indicatoren: string[];
  zelcomNiveau: string;
  complexiteit: string[];
  zelfstandigheid: string[];
};

export type SpecialisatieContent = {
  beschrijving: string;
  indicatoren: string[];
};

export const specialisatieContent: Record<Leerlijn, Record<string, SpecialisatieContent>> = {
  'Design': {
    'brand-design': {
      beschrijving: 'Studenten ontwikkelen een eigen ontwerpidentiteit, evalueren bestaande aanpakken kritisch en dragen bij aan vernieuwing in hun vakgebied.\n\nBij Branding ontwikkelen studenten merkstrategieën en visuele identiteiten met aandacht voor storytelling en emotionele binding. Verwacht wordt dat ze strategische ontwerpkeuzes maken die bijdragen aan merkwaarde en maatschappelijke impact.',
      indicatoren: [
        'Specialiseert zich in een ontwerpdiscipline en past gespecialiseerde methodieken toe',
        'Integreert feedback van experts en gebruikers in iteratieve ontwerpcycli',
        'Ontwikkelt een merkstrategie en visuele identiteit met onderbouwing vanuit marktonderzoek en doelgroepanalyse',
        'Past geavanceerde brandingprincipes toe in het ontwerp'
      ]
    },
    'digital-design': {
      beschrijving: 'Studenten ontwikkelen een eigen ontwerpidentiteit, evalueren bestaande aanpakken kritisch en dragen bij aan vernieuwing in hun vakgebied.\n\nStudenten ontwerpen gebruiksvriendelijke digitale producten met focus op UX/UI en data-driven besluitvorming. Ze integreren gedragstheorieën en creëren persuasieve digitale ervaringen. Verwacht wordt dat ze interactiepatronen en gebruikersfeedback vertalen naar innovatieve digitale oplossingen.',
      indicatoren: [
        'Specialiseert zich in een ontwerpdiscipline en past gespecialiseerde methodieken toe',
        'Integreert feedback van experts en gebruikers in iteratieve ontwerpcycli',
        'Ontwerpt digitale producten met focus op interactiepatronen',
        'Test en optimaliseert digitale ontwerpen met behulp van gebruikerstests en feedback, en past iteratieve ontwerpcycli toe'
      ]
    },
    'immersive-design': {
      beschrijving: 'Studenten ontwikkelen een eigen ontwerpidentiteit, evalueren bestaande aanpakken kritisch en dragen bij aan vernieuwing in hun vakgebied.\n\nStudenten ontwerpen ervaringsgerichte oplossingen. Ze combineren narratieve structuren en interactie om betekenisvolle gebruikerservaringen te creëren. Verwacht wordt dat ze technische en ethische aspecten van immersive design onderzoeken en toepassen.',
      indicatoren: [
        'Specialiseert zich in een ontwerpdiscipline en past gespecialiseerde methodieken toe',
        'Integreert feedback van experts en gebruikers in iteratieve ontwerpcycli',
        'Experimenteert met XR-technologie om ervaringsgerichte oplossingen te ontwerpen',
        'Valideert de gebruikersbeleving in immersive omgevingen met behulp van prototyping en iteratief testen'
      ]
    }
  },
  'Technologie & AI': {
    'brand-design': {
      beschrijving: 'Studenten verkennen hoe ze digitale tools kunnen gebruiken om merken te versterken en gebruikers te betrekken. Ze leren hoe technologie kan bijdragen aan het creëren van een sterke en consistente merkbeleving.',
      indicatoren: [
        'Gebruikt digitale tools en AI om merkervaringen te personaliseren en te optimaliseren',
        'Integreert data-analyse in merkstrategieën om doelgroepen beter te begrijpen en te bereiken',
        'Reflecteert op de ethische implicaties van AI in branding, zoals privacy en transparantie'
      ]
    },
    'digital-design': {
      beschrijving: 'Studenten verkennen hoe ze digitale tools kunnen gebruiken om merken te versterken en gebruikers te betrekken. Ze leren hoe technologie kan bijdragen aan het creëren van een sterke en consistente merkbeleving.',
      indicatoren: [
        'Verdiept zich in frontend frameworks en past deze toe in de ontwikkeling van interactieve digitale producten',
        'Werkt met AI-modellen om gebruikersinteracties te verbeteren en te automatiseren',
        'Ontwerpt en implementeert schaalbare digitale systemen met aandacht voor prestaties, veiligheid en toegankelijkheid'
      ]
    },
    'immersive-design': {
      beschrijving: 'Studenten werken met geavanceerde technologieën om immersive omgevingen te bouwen. Ze leren hoe ze technische en ethische overwegingen kunnen integreren in hun ontwerpen.',
      indicatoren: [
        'Experimenteert met XR-technologie en AI om immersive ervaringen te creëren',
        'Ontwikkelt interactieve prototypes die gebruikmaken van real-time data en sensoren voor een rijke gebruikersbeleving',
        'Onderzoekt de technische en ethische uitdagingen van AI in immersive omgevingen, zoals bias en gebruikersveiligheid'
      ]
    }
  },
  'Mens & Ervaring': {
    'brand-design': {
      beschrijving: 'Studenten verdiepen zich in hoe merken emoties en betrokkenheid kunnen oproepen. Ze leren hoe ze ontwerpen kunnen maken die mensen raken en inspireren, en die aansluiten bij verschillende doelgroepen.',
      indicatoren: [
        'Onderzoekt hoe merkbeleving wordt gevormd door gebruikersinteracties en emotionele binding',
        'Past participatory design-methoden toe om gebruikers actief te betrekken bij het ontwerpproces',
        'Reflecteert op de maatschappelijke en culturele impact van merkervaringen op diverse gebruikersgroepen'
      ]
    },
    'digital-design': {
      beschrijving: 'Studenten focussen op het creëren van ervaringen die gebruikers raken en inspireren. Ze leren hoe ze ontwerpen kunnen maken die inclusief zijn en aansluiten bij diverse gebruikersgroepen.',
      indicatoren: [
        'Ontwerpt digitale producten die aansluiten bij de behoeften van diverse gebruikersgroepen, met focus op toegankelijkheid en inclusie',
        'Gebruikt data en analytics om gebruikersgedrag te begrijpen en digitale ervaringen te optimaliseren',
        'Evalueert de ethische implicaties van digitale ontwerpen, zoals privacy en gebruikersautonomie'
      ]
    },
    'immersive-design': {
      beschrijving: 'Studenten onderzoeken hoe mensen ervaringen beleven in digitale omgevingen. Ze ontwikkelen vaardigheden om ontwerpen te maken die emotioneel resoneren en inclusief zijn.',
      indicatoren: [
        'Creëert immersive ervaringen die rekening houden met gebruikers, ruimtelijke waarneming en emotionele impact',
        'Test en iteratief verbetert XR-omgevingen op basis van gebruikersfeedback en gedragsanalyse',
        'Onderzoekt hoe immersive technologie kan bijdragen aan inclusie en empowerment van gebruikers'
      ]
    }
  },
  'Organisatie & Strategie': {
    'brand-design': {
      beschrijving: 'Studenten ontwikkelen strategieën die bijdragen aan innovatie en het opbouwen van sterke merkrelaties. Ze ontwikkelen strategieën om de waarde van hun ontwerpen aan te tonen en om draagvlak te creëren binnen organisaties.',
      indicatoren: [
        'Ontwikkelt merkstrategieën die aansluiten bij de organisatiedoelen en maatschappelijke waarden',
        'Werkt samen met organisaties om merkidentiteit te vertalen naar concrete ontwerpoplossingen',
        'Reflecteert op de rol van branding in organisatorische veranderingsprocessen'
      ]
    },
    'digital-design': {
      beschrijving: 'Studenten leren hoe ze digitale oplossingen kunnen koppelen aan bedrijfsdoelen. Ze ontwikkelen strategieën om de waarde van hun ontwerpen aan te tonen en om draagvlak te creëren binnen organisaties.',
      indicatoren: [
        'Integreert digitale strategieën in organisatorische processen en ontwerpoplossingen',
        'Ontwerpt digitale producten die organisatiedoelen ondersteunen en gebruikersbehoeften vervullen',
        'Analyseert de impact van digitale innovatie op organisatorische structuren en cultuur'
      ]
    },
    'immersive-design': {
      beschrijving: 'Studenten positioneren immersive oplossingen in verschillende sectoren. Ze ontwikkelen strategieën om de waarde van hun ontwerpen aan te tonen en om draagvlak te creëren binnen organisaties.',
      indicatoren: [
        'Onderzoekt hoe immersive technologie kan bijdragen aan organisatorische doelen',
        'Ontwerpt XR-oplossingen die organisatorische processen verbeteren of nieuwe waarde creëren',
        'Reflecteert op de implementatie en adoptie van immersive technologie binnen organisaties'
      ]
    }
  },
  'Maatschappij & Toekomst': {
    'brand-design': {
      beschrijving: 'Studenten werken aan sociale vraagstukken en leren hoe branding kan bijdragen aan een rechtvaardige en duurzame toekomst. Ze reflecteren op de rol die merken spelen in de samenleving.',
      indicatoren: [
        'Onderzoekt hoe merken kunnen bijdragen aan maatschappelijke transitievraagstukken, zoals duurzaamheid en inclusie',
        'Ontwerpt merkstrategieën die maatschappelijke waarden en organisatiedoelen verbinden',
        'Evalueert de langetermijneffecten van branding op cultuur en samenleving'
      ]
    },
    'digital-design': {
      beschrijving: 'Studenten onderzoeken de effecten van digitale oplossingen op individuen en de samenleving. Ze reflecteren op ethische kwesties en hoe ontwerp kan bijdragen aan positieve verandering.',
      indicatoren: [
        'Analyseert de maatschappelijke impact van digitale technologieën, zoals privacy, autonomie en digitale kloof',
        'Ontwerpt digitale oplossingen die bijdragen aan inclusie, toegankelijkheid en sociale rechtvaardigheid',
        'Reflecteert op de ethische implicaties van digitale innovatie en AI in ontwerp'
      ]
    },
    'immersive-design': {
      beschrijving: 'Studenten verkennen hoe immersive technologie kan bijdragen aan positieve maatschappelijke verandering. Ze reflecteren op de impact van hun ontwerpen.',
      indicatoren: [
        'Verkent hoe immersive technologie kan worden ingezet voor maatschappelijke doelen',
        'Ontwerpt ervaringen die bewustzijn creëren over maatschappelijke thema\'s',
        'Onderzoekt de culturele en sociale impact van immersive technologie op gemeenschappen'
      ]
    }
  },
  'Onderzoekend Vermogen': {
    'brand-design': {
      beschrijving: 'Studenten richten zich op onderzoek naar merkbeleving, emotionele binding en de impact van branding op gebruikers en organisaties. Ze gebruiken onderzoek om merkstrategieën te ontwikkelen en te valideren.',
      indicatoren: [
        'Onderzoekt hoe merkperceptie wordt gevormd en meet de effectiviteit van merkstrategieën',
        'Past participatory research-methoden toe om gebruikers te betrekken bij het merkontwerpproces',
        'Reflecteert op de maatschappelijke en culturele impact van merkervaringen'
      ]
    },
    'digital-design': {
      beschrijving: 'Studenten verdiepen zich in onderzoek naar digitale interacties, gebruikersgedrag en de impact van technologie op ontwerp. Ze gebruiken data en analytics om digitale ontwerpen te optimaliseren.',
      indicatoren: [
        'Analyseert gebruikersgedrag in digitale omgevingen met behulp van data en analytics',
        'Test en optimaliseert digitale ontwerpen met behulp van A/B-testen en usability studies',
        'Reflecteert op de ethische implicaties van data-gedreven ontwerpkeuzes'
      ]
    },
    'immersive-design': {
      beschrijving: 'Studenten onderzoeken hoe immersive technologie kan bijdragen aan gebruikerservaringen en maatschappelijke doelen. Ze gebruiken onderzoek om de impact van XR-oplossingen te meten en te valideren.',
      indicatoren: [
        'Onderzoekt de gebruikersbeleving in immersive omgevingen met behulp van prototyping en iteratief testen',
        'Evalueert de technische en ethische aspecten van immersive ontwerpen',
        'Reflecteert op de maatschappelijke en culturele impact van XR-technologie'
      ]
    }
  }
};

export const leerlijnSemesterContent: Record<Leerlijn, Record<number, SemesterContent>> = {
  'Design': {
    1: {
      beschrijving: 'Studenten maken kennis met het werk van een CMD\'er en het iteratieve proces. Ze leren schetsen als denkmiddel, visualiseren van ideeën, en basale ontwerpprincipes van visual, interaction en social design. De focus ligt op het ontwikkelen van creativiteit, het begrijpen van design thinking, waarbij kritisch ontwerpen centraal staat.',
      indicatoren: [
        'Past basale ontwerpprincipes en -stappen toe',
        'Werkt iteratief met schetsen en eenvoudige concepten',
        'Kan ontwerpkeuzes beschrijvend toelichten',
        'Gebruikt feedback om ontwerpen te verbeteren',
        'Verkent verschillende ontwerpdisciplines binnen CMD',
        'Integreert gebruikersonderzoek in het ontwerpproces'
      ],
      zelcomNiveau: 'A',
      complexiteit: [
        'Korte enkelvoudige opdrachten, bekend, overzichtelijk, gestructureerd, in één situatie',
        'Toepassen van standaardprocedures',
        'Beperkte eisen',
        'Monodisciplinair',
        'Basiskennis en -vaardigheden',
        'Bekende situatie',
        'Weinig partijen, weinig interactie',
        'Weinig afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    2: {
      beschrijving: 'Verdieping door practische kennismaking met verschillende ontwerpmethodieken en -modellen. Ze verdiepen zich in design thinking, double diamond en iteratief en agile werken en passen dit toe. Ze ontwikkelen inzicht in wanneer welke aanpak het beste werkt en leren hun keuzes te onderbouwen.',
      indicatoren: [
        'Past ontwerpmethodieken (bijv. design thinking, double diamond) situationeel toe',
        'Onderbouwt ontwerpkeuzes met basistheorie',
        'Werkt in multidisciplinaire teams en reflecteert op eigen rol bij tot standkoming van het ontwerp',
        'Experimenteert met verschillende ontwerpstijlen en -benaderingen',
        'Toont begrip van iteratief en agile werken'
      ],
      zelcomNiveau: 'B',
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    3: {
      beschrijving: 'Studenten integreren theorie en praktijk door concepten te ontwikkelen die meerdere perspectieven verbinden. Ze geven zelfstandig het ontwerpproces vorm en passen ontwerpstrategieën situationeel toe. Complexiteit neemt toe door open vraagstukken die creativiteit, onderzoek en multidisciplinaire samenwerking vereisen.',
      indicatoren: [
        'Analyseert complexe ontwerpvraagstukken en stelt eigen ontwerpcriteria op',
        'Ontwikkelt concepten met aandacht voor technologische en maatschappelijke context',
        'Reflecteert kritisch op eigen ontwerpproces en resultaten',
        'Werkt zelfstandig aan ontwerpoplossingen met begeleiding op sleutelmomenten'
      ],
      zelcomNiveau: 'B',
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    4: {
      beschrijving: 'Studenten versterken hun ontwerpexpertise door innovatieve concepten te ontwikkelen die gebruikersbehoeften, technologie en organisatiedoelen verbinden. Ze nemen een tactische rol op zich, faciliteren creatieve processen en verbinden ontwerp aan impact. Dit semester bereidt voor op de ontwerpprincipes tijdens de specialisatie en professionele praktijk.',
      indicatoren: [
        'Ontwerpt oplossingen voor complexe, realistische vraagstukken met aandacht voor stakeholderbelangen',
        'Legitimeert ontwerpkeuzes met theorie, onderzoek en praktijkervaring',
        'Neemt leiderschap in ontwerpprocessen binnen multidisciplinaire teams',
        'Presenteert en verdedigt ontwerpkeuzes professioneel'
      ],
      zelcomNiveau: 'C',
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    5: {
      beschrijving: 'Studenten passen hun opgedane designkennis en vaardigheden toe in een beroepscontext. Ze werken aan ontwerpprojecten en leveren meetbare impact. Verwacht wordt dat ze professionele verantwoordelijkheid nemen voor de kwaliteit en implementatie van hun ontwerpen.',
      indicatoren: [
        'Past ontwerpvaardigheden toe in een professionele context',
        'Werkt zelfstandig aan realistische ontwerpvraagstukken met aandacht voor organisatorische randvoorwaarden',
        'Toont vermogen om ontwerpbeslissingen te onderbouwen en te communiceren met stakeholders',
        'Reflecteert kritisch op eigen professionele rol en bijdrage aan het vakgebied'
      ],
      zelcomNiveau: 'C',
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    6: {
      beschrijving: 'Studenten ontwikkelen een eigen ontwerpidentiteit, evalueren bestaande aanpakken kritisch en dragen bij aan vernieuwing in hun vakgebied.',
      indicatoren: [
        'Specialiseert zich in een ontwerpdiscipline en past gespecialiseerde methodieken toe',
        'Integreert feedback van experts en gebruikers in iteratieve ontwerpcycli'
      ],
      zelcomNiveau: 'D',
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    7: {
      beschrijving: 'Demonstratie van startbekwaam vakmanschap door het ontwikkelen van een ontwerpoplossing voor complexe vraagstukken. Studenten integreren ontwerptheorie, -methodiek en -praktijk in een coherent geheel waarbij ze hun aanpak legitimeren. Door hoogstaande ontwerpoplossingen, grondige onderbouwing en kritische reflectie tonen ze leiderschap en professionaliteit.',
      indicatoren: [
        'Demonstreert startbekwaam vakmanschap door het ontwikkelen van een ontwerpoplossing voor een complex vraagstuk',
        'Integreert ontwerptheorie, -methodiek en -praktijk in een coherent geheel',
        'Toont leiderschap en professionaliteit in het sturen van ontwerpprocessen',
        'Legitimeert ontwerpkeuzes met diepgaande onderbouwing en kritische reflectie',
        'Draagt bij aan het vakgebied door innovatieve en maatschappelijk relevante ontwerpoplossingen'
      ],
      zelcomNiveau: 'E',
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Weinig sturing en begeleiding',
        'Grote vrijheid van handelen',
        'Grote verantwoordelijkheid voor eindresultaat',
        'Geeft leiding aan anderen',
        'Strategische rol'
      ]
    }
  },
  'Technologie & AI': {
    1: { 
      beschrijving: 'Studenten maken kennis met digitale hulpmiddelen die hen helpen om hun ontwerpen te maken en te presenteren. Ze leren hoe ze deze tools kunnen inzetten om hun ideeën visueel uit te werken en te delen. Het doel is om vertrouwen op te bouwen in het gebruik van technologie als onderdeel van hun creatieve proces.', 
      indicatoren: [
        'Maakt kennis met basale digitale tools en platforms, en past deze toe in eenvoudige ontwerpopdrachten',
        'Experimenteert met digitale prototyping',
        'Toont bewustzijn van de mogelijkheden en beperkingen van digitale technologie in ontwerp'
      ], 
      zelcomNiveau: 'A', 
      complexiteit: [
        'Korte enkelvoudige opdrachten, bekend, overzichtelijk, gestructureerd, in één situatie',
        'Toepassen van standaardprocedures',
        'Beperkte eisen',
        'Monodisciplinair',
        'Basiskennis en -vaardigheden',
        'Bekende situatie',
        'Weinig partijen, weinig interactie',
        'Weinig afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    2: { 
      beschrijving: 'Verdieping op het inzetten van technologie en AI als ontwerpmiddel. Studenten breiden hun digitale vaardigheden uit en leren hoe ze interactieve ontwerpen kunnen maken en testen. Ze ontwikkelen een beter begrip van hoe digitale systemen werken en hoe ze deze kunnen inzetten om hun ideeën tot leven te brengen.', 
      indicatoren: [
        'Past digitale technologieën toe om interactieve ontwerpen te realiseren',
        'Werkt samen in teams om digitale oplossingen te ontwikkelen en deelt kennis over technische mogelijkheden',
        'Reflecteert op de impact van technologie op gebruikerservaring en ontwerpkeuzes'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    3: { 
      beschrijving: 'Studenten leren hoe ze digitale mogelijkheden strategisch kunnen inzetten om hun ontwerpen te versterken. Ze verdiepen zich in hoe ze technologie kunnen gebruiken om interactieve en innovatieve oplossingen te creëren.', 
      indicatoren: [
        'Verdiept zich in geavanceerde digitale tools (bijv. Figma, Adobe XD) en past deze toe in complexe ontwerpopdrachten',
        'Integreert gebruikersdata en feedback in het ontwerpproces met behulp van digitale analytische tools',
        'Onderzoekt de rol van AI in ontwerp, zoals automatisering en personalisatie, en past basale AI-tools toe'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    4: { 
      beschrijving: 'Studenten werken met geavanceerde digitale tools om hoogwaardige prototypes te maken. Ze leren hoe ze technologie kunnen inzetten om interactieve en gebruiksvriendelijke oplossingen te creëren.', 
      indicatoren: [
        'Ontwikkelt digitale oplossingen die gebruikmaken van API\'s, databases en externe data-bronnen',
        'Experimenteert met AI-gestuurde ontwerphulpmiddelen (bijv. generatieve design, chatbots) en evalueert hun toepasbaarheid',
        'Neemt verantwoordelijkheid voor de technische haalbaarheid en schaalbaarheid van digitale ontwerpen'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    5: { 
      beschrijving: 'Studenten nemen verantwoordelijkheid voor technische keuzes in echte productieomgevingen. Ze werken samen met ontwikkelteams en leren hoe ze technische uitdagingen kunnen oplossen.', 
      indicatoren: [
        'Past digitale technologie en AI toe in een professionele context',
        'Werkt aan de implementatie en optimalisatie van digitale oplossingen, met aandacht voor technische documentatie en stakeholdercommunicatie',
        'Reflecteert kritisch op de impact van technologie op organisaties, gebruikers en de samenleving'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    6: { 
      beschrijving: 'Studenten verkennen hoe ze digitale tools kunnen gebruiken om merken te versterken en gebruikers te betrekken. Ze leren hoe technologie kan bijdragen aan het creëren van een sterke en consistente merkbeleving.', 
      indicatoren: [
        'Gebruikt digitale tools en AI om merkervaringen te personaliseren en te optimaliseren',
        'Integreert data-analyse in merkstrategieën om doelgroepen beter te begrijpen en te bereiken',
        'Reflecteert op de ethische implicaties van AI in branding, zoals privacy en transparantie'
      ], 
      zelcomNiveau: 'D', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    7: { 
      beschrijving: 'Studenten ontwikkelen technisch hoogwaardige oplossingen die state-of-the-art zijn binnen hun domein. Het afstudeerproject demonstreert technische expertise gecombineerd met kritisch en verantwoord technologiegebruik.', 
      indicatoren: [
        'Demonstreert expertise in het ontwerpen en ontwikkelen van een technologisch geavanceerd producten of diensten, met integratie van AI en digitale innovatie',
        'Toont leiderschap in het sturen van technische ontwerpprocessen',
        'Presenteert en verdedigt een innovatief digitaal of AI-gedreven ontwerp dat waarde creëert voor gebruikers en organisaties'
      ], 
      zelcomNiveau: 'E', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Weinig sturing en begeleiding',
        'Grote vrijheid van handelen',
        'Grote verantwoordelijkheid voor eindresultaat',
        'Geeft leiding aan anderen',
        'Strategische rol'
      ]
    }
  },
  'Mens & Ervaring': {
    1: { 
      beschrijving: 'Introductie in gebruikersgericht denken door te observeren hoe mensen omgaan met producten en diensten. Studenten leren basale principes van gedrag, en ontdekken hoe vormgeving invloed heeft op hoe mensen dingen gebruiken en ervaren. Door eenvoudige opdrachten ontwikkelen ze bewustzijn van gebruikersbehoeften.', 
      indicatoren: [
        'Observeert en beschrijft gebruikersgedrag in interactie met (digitale) producten en diensten',
        'Past eenvoudige user research-methoden toe, zoals observaties en korte interviews',
        'Toont bewustzijn van gebruikersbehoeften en de invloed van vormgeving op gebruikerservaring'
      ], 
      zelcomNiveau: 'A', 
      complexiteit: [
        'Korte enkelvoudige opdrachten, bekend, overzichtelijk, gestructureerd, in één situatie',
        'Toepassen van standaardprocedures',
        'Beperkte eisen',
        'Monodisciplinair',
        'Basiskennis en -vaardigheden',
        'Bekende situatie',
        'Weinig partijen, weinig interactie',
        'Weinig afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    2: { 
      beschrijving: 'Verdieping in gebruikersonderzoek door het actief toepassen van onderzoeksmethoden en analyseren van gebruikersgedrag. Studenten leren betere gebruikerstests op te zetten en uit te voeren, waarbij ze observaties systematisch vastleggen en interpreteren. Studenten leren vormgevingsprincipes toepassen die gebruiksvriendelijkheid en beleving versterken.', 
      indicatoren: [
        'Voert gebruikersonderzoek uit en analyseert resultaten om inzicht te krijgen in gebruikersbehoeften',
        'Past basale UX-principes toe om gebruiksvriendelijkheid en toegankelijkheid van ontwerpen te verbeteren',
        'Reflecteert op de impact van diversiteit en inclusiviteit in ontwerpkeuzes'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    3: { 
      beschrijving: 'Studenten verdiepen hun kennis van hoe mensen denken, voelen en handelen, en hoe dit hun ontwerpen beïnvloedt. Ze leren geavanceerde methoden om gebruikers te begrijpen en om ontwerpen te maken die hierop aansluiten.', 
      indicatoren: [
        'Ontwerpt en test prototypes met behulp van gebruikersfeedback, met aandacht voor gebruikersdoelen',
        'Analyseert gebruikersgedrag en past ontwerpen aan op basis van inzichten uit onderzoek',
        'Integreert inclusieve ontwerpprincipes om diversiteit in gebruikersgroepen te accommoderen'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    4: { 
      beschrijving: 'Studenten ontwikkelen expertise in het creëren van betekenisvolle ervaringen voor gebruikers. Ze leren hoe ze ontwerpen kunnen aanpassen aan verschillende contexten en situaties, met aandacht voor diversiteit en toegankelijkheid.', 
      indicatoren: [
        'Voert geavanceerde gebruikersonderzoeken uit, zoals usability tests',
        'Ontwerpt oplossingen die rekening houden met culturele, sociale en fysieke diversiteit van gebruikers',
        'Legitimeert ontwerpkeuzes met onderbouwde inzichten in gebruikersbehoeften en -ervaringen'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    5: { 
      beschrijving: 'Studenten passen hun kennis van gebruikerservaring toe in professionele contexten. Ze werken aan echte projecten waarbij ze gebruikersbehoeften vertalen naar praktische oplossingen.', 
      indicatoren: [
        'Past kennis van Mens & Ervaring toe in een professionele context',
        'Neemt verantwoordelijkheid voor het ontwerpen van betekenisvolle gebruikerservaringen in realistische situaties',
        'Reflecteert kritisch op de impact van ontwerpbeslissingen op gebruikers en stakeholders'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    6: { 
      beschrijving: 'Studenten focussen op het creëren van ervaringen die gebruikers raken en inspireren. Ze leren hoe ze ontwerpen kunnen maken die inclusief zijn en aansluiten bij diverse gebruikersgroepen.', 
      indicatoren: [
        'Onderzoekt hoe merkbeleving wordt gevormd door gebruikersinteracties en emotionele binding',
        'Past participatory design-methoden toe om gebruikers actief te betrekken bij het ontwerpproces',
        'Reflecteert op de maatschappelijke en culturele impact van merkervaringen op diverse gebruikersgroepen'
      ], 
      zelcomNiveau: 'D', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    7: { 
      beschrijving: 'Studenten doen diepgaand onderzoek naar gebruikersbehoeften en creëren betekenisvolle oplossingen die aantoonbaar bijdragen aan welzijn, empowerment of efficiency. Ze analyseren gebruikersgedrag grondig en valideren hun ontwerp met uitgebreide evaluaties.', 
      indicatoren: [
        'Demonstreert expertise in het ontwerpen van ervaringen die recht doen aan diversiteit en inclusiviteit',
        'Ontwikkelt innovatieve oplossingen die gebruikers centraal stelt',
        'Presenteert en verdedigt ontwerpkeuzes met een diepgaande onderbouwing in gebruikersinzichten en ethische overwegingen'
      ], 
      zelcomNiveau: 'E', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Weinig sturing en begeleiding',
        'Grote vrijheid van handelen',
        'Grote verantwoordelijkheid voor eindresultaat',
        'Geeft leiding aan anderen',
        'Strategische rol'
      ]
    }
  },
  'Organisatie & Strategie': {
    1: { 
      beschrijving: 'Kennismaking met de professionele ontwerpcontext door simpele briefings en opdrachtformuleringen. Studenten leren begrijpen wat een ontwerpvraag is en wie de opdrachtgever is. Ze leren hoe ze opdrachten kunnen uitvoeren binnen duidelijke kaders en deadlines. Ze ontwikkelen basale vaardigheden om hun werk te plannen, te presenteren en feedback te ontvangen.', 
      indicatoren: [
        'Herkent stakeholders en hun belangen in eenvoudige ontwerpopdrachten'
      ], 
      zelcomNiveau: 'A', 
      complexiteit: [
        'Korte enkelvoudige opdrachten, bekend, overzichtelijk, gestructureerd, in één situatie',
        'Toepassen van standaardprocedures',
        'Beperkte eisen',
        'Monodisciplinair',
        'Basiskennis en -vaardigheden',
        'Bekende situatie',
        'Weinig partijen, weinig interactie',
        'Weinig afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    2: { 
      beschrijving: 'Studenten leren hoe ontwerp een rol speelt binnen organisaties en hoe het kan bijdragen aan het behalen van doelen. Ze ontwikkelen inzicht in hoe ze kunnen samenwerken met verschillende stakeholders en hoe ze hun ontwerpen kunnen presenteren als waardevolle bijdragen.', 
      indicatoren: [
        'Analyseert organisatorische doelen en vertaalt deze naar ontwerpkeuzes',
        'Werkt samen met stakeholders om ontwerpbriefings te begrijpen en te vertalen naar concrete ontwerpoplossingen',
        'Reflecteert op de impact van ontwerp op organisatorische processen en besluitvorming'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    3: { 
      beschrijving: 'Studenten leren hoe ze strategisch kunnen denken over de waarde van ontwerp binnen organisaties. Ze ontwikkelen vaardigheden om hun ontwerpen te koppelen aan bedrijfsdoelen en om draagvlak te creëren voor hun ideeën.', 
      indicatoren: [
        'Ontwikkelt ontwerpstrategieën die aansluiten bij organisatiedoelen en gebruikersbehoeften',
        'Past projectmanagementvaardigheden toe om ontwerpprocessen binnen een organisatorische context te sturen',
        'Onderzoekt hoe ontwerp waarde creëert voor organisaties en gebruikers'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    4: { 
      beschrijving: 'Studenten ontwikkelen strategieën die bijdragen aan innovatie en het opbouwen van sterke relaties met stakeholders. Ze leren hoe ze de waarde van hun ontwerpen kunnen aantonen en draagvlak kunnen creëren binnen organisaties.', 
      indicatoren: [
        'Communiceert ontwerpkeuzes effectief aan stakeholders en betrekt hen bij het proces',
        'Evalueert de haalbaarheid en impact van ontwerpen binnen een organisatorische context'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    5: { 
      beschrijving: 'Studenten navigeren door organisatorische uitdagingen en bouwen aan draagvlak voor hun ontwerpen. Ze leren hoe ze kunnen communiceren met stakeholders en hoe ze hun ontwerpen kunnen positioneren als strategische bijdragen.', 
      indicatoren: [
        'Past strategisch ontwerpdenken toe in een echte organisatorische context',
        'Neemt verantwoordelijkheid voor het vertalen van organisatiedoelen naar ontwerpoplossingen en het betrekken van stakeholders',
        'Reflecteert kritisch op de rol van ontwerp in organisatorische veranderingsprocessen en waardecreatie'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    6: { 
      beschrijving: 'Studenten ontwikkelen strategieën die bijdragen aan innovatie en het opbouwen van sterke merkrelaties. Ze ontwikkelen strategieën om de waarde van hun ontwerpen aan te tonen en om draagvlak te creëren binnen organisaties.', 
      indicatoren: [
        'Ontwikkelt merkstrategieën die aansluiten bij de organisatiedoelen en maatschappelijke waarden',
        'Werkt samen met organisaties om merkidentiteit te vertalen naar concrete ontwerpoplossingen',
        'Reflecteert op de rol van branding in organisatorische veranderingsprocessen'
      ], 
      zelcomNiveau: 'D', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    7: { 
      beschrijving: 'Studenten creëren strategische waarde waarbij ze aantonen hoe hun ontwerp bijdraagt aan organisatiedoelen en maatschappelijke waarde. Ze communiceren effectief met stakeholders, anticiperen op implementatie-uitdagingen en tonen inzicht in organisatiedynamiek. Het ontwerp is niet alleen relevant maar ook implementeerbaar voor organisaties.', 
      indicatoren: [
        'Demonstreert expertise in het ontwikkelen van een strategische ontwerpoplossing die organisatiedoelen',
        'Presenteert en verdedigt een coherent ontwerpconcept dat bijdraagt aan organisatorische innovatie en waardecreatie',
        'Toont leiderschap in het sturen van ontwerpprocessen en het nemen van verantwoordelijkheid'
      ], 
      zelcomNiveau: 'E', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Weinig sturing en begeleiding',
        'Grote vrijheid van handelen',
        'Grote verantwoordelijkheid voor eindresultaat',
        'Geeft leiding aan anderen',
        'Strategische rol'
      ]
    }
  },
  'Maatschappij & Toekomst': {
    1: { 
      beschrijving: 'Studenten reflecteren op hoe ontwerp de wereld om hen heen beïnvloedt. Ze denken na over de rol die ontwerp speelt in het dagelijks leven en hoe het kan bijdragen aan een betere samenleving. Dit helpt hen om bewuste keuzes te maken in hun werk.', 
      indicatoren: [
        'Onderzoekt hoe ontwerp kan bijdragen aan het welzijn van mensen en gemeenschappen',
        'Analyseert menselijke interacties en sociale dynamieken om inzicht te krijgen in hoe ontwerpen kunnen bijdragen aan maatschappelijke verandering'
      ], 
      zelcomNiveau: 'A', 
      complexiteit: [
        'Korte enkelvoudige opdrachten, bekend, overzichtelijk, gestructureerd, in één situatie',
        'Toepassen van standaardprocedures',
        'Beperkte eisen',
        'Monodisciplinair',
        'Basiskennis en -vaardigheden',
        'Bekende situatie',
        'Weinig partijen, weinig interactie',
        'Weinig afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    2: { 
      beschrijving: 'Studenten verbreden hun blik door te kijken naar ontwerpen uit verschillende sectoren en contexten. Ze leren om rekening te houden met diversiteit en toegankelijkheid, en hoe ontwerp hierop kan inspelen.', 
      indicatoren: [
        'Analyseert actuele maatschappelijke uitdagingen en verkent hoe ontwerp hieraan kan bijdragen',
        'Past basale onderzoeksmethoden toe om de maatschappelijke context van ontwerpopdrachten te begrijpen'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    3: { 
      beschrijving: 'Studenten analyseren maatschappelijke vraagstukken en leren hoe ontwerp hierop kan inspelen. Ze verkennen thema\'s zoals ethiek en duurzaamheid, en hoe ontwerp kan bijdragen aan positieve verandering.', 
      indicatoren: [
        'Onderzoekt toekomstscenario\'s en hun implicaties voor ontwerp, gebruikmakend van trends en voorspellende methoden',
        'Integreert ethische en duurzame overwegingen in ontwerpprocessen',
        'Werkt samen met stakeholders om maatschappelijke impact van ontwerpen te evalueren en te verbeteren'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    4: { 
      beschrijving: 'Studenten reflecteren diepgaand op de impact van ontwerp op de samenleving. Ze verkennen hoe ontwerp kan bijdragen aan duurzame en ethische oplossingen voor complexe vraagstukken.', 
      indicatoren: [
        'Ontwikkelt ontwerpoplossingen die bijdragen aan sociale innovatie en een rechtvaardige toekomst',
        'Past participatieve ontwerpmethoden toe om gemeenschappen actief te betrekken',
        'Reflecteert kritisch op machtsverhoudingen en de rol van ontwerp in het bevorderen van sociale verandering'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    5: { 
      beschrijving: 'Studenten operationaliseren maatschappelijke verantwoordelijkheid in hun werk. Ze reflecteren op ethische dilemma\'s en leren hoe ze verantwoorde ontwerpkeuzes kunnen maken.', 
      indicatoren: [
        'Past kennis van maatschappij & toekomst toe in een professionele context',
        'Reflecteert kritisch op de rol van ontwerpers in het vormgeven van een inclusieve en rechtvaardige toekomst'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    6: { 
      beschrijving: 'Studenten verkennen hoe ontwerp kan bijdragen aan een rechtvaardige en duurzame toekomst. Ze reflecteren op de rol van hun specialisatie in de samenleving en op ethische kwesties die hierbij komen kijken.', 
      indicatoren: [
        'Onderzoekt hoe merken kunnen bijdragen aan maatschappelijke transitievraagstukken, zoals duurzaamheid en inclusie',
        'Ontwerpt merkstrategieën die maatschappelijke waarden en organisatiedoelen verbinden',
        'Evalueert de langetermijneffecten van branding op cultuur en samenleving'
      ], 
      zelcomNiveau: 'D', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    7: { 
      beschrijving: 'Studenten reflecteren op de impact van hun ontwerp. Ze denken na over de rol van ontwerp in het dagelijks leven en hoe het kan bijdragen aan een betere samenleving, met aandacht voor thema\'s zoals duurzaamheid, inclusie en toegankelijkheid.', 
      indicatoren: [
        'Demonstreert expertise in het ontwikkelen van een toekomstgerichte ontwerpoplossing die bijdraagt aan maatschappelijke verandering',
        'Presenteert en verdedigt een innovatief en maatschappelijk relevant ontwerp',
        'Toont leiderschap in het sturen van ontwerpprocessen die gericht zijn op positieve maatschappelijke impact'
      ], 
      zelcomNiveau: 'E', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Weinig sturing en begeleiding',
        'Grote vrijheid van handelen',
        'Grote verantwoordelijkheid voor eindresultaat',
        'Geeft leiding aan anderen',
        'Strategische rol'
      ]
    }
  },
  'Onderzoekend Vermogen': {
    1: { 
      beschrijving: 'Studenten maken kennis met de rol van onderzoek binnen ontwerpprocessen. Ze leren eenvoudige onderzoeksmethoden toe te passen om basale inzichten te verzamelen en te gebruiken voor het onderbouwen van ontwerpkeuzes. De nadruk ligt op het begrijpen van de relatie tussen onderzoek en ontwerp.', 
      indicatoren: [
        'Formuleert eenvoudige onderzoeksvragen',
        'Verzamelt en ordent gegevens',
        'Past basale onderzoeksmethoden toe',
        'Trekt conclusies',
        'Documenteert en deelt bevindingen op een gestructureerde manier'
      ], 
      zelcomNiveau: 'A', 
      complexiteit: [
        'Korte enkelvoudige opdrachten, bekend, overzichtelijk, gestructureerd, in één situatie',
        'Toepassen van standaardprocedures',
        'Beperkte eisen',
        'Monodisciplinair',
        'Basiskennis en -vaardigheden',
        'Bekende situatie',
        'Weinig partijen, weinig interactie',
        'Weinig afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    2: { 
      beschrijving: 'Studenten verdiepen zich in onderzoek als integraal onderdeel van het ontwerpproces. Ze leren hoe ze onderzoek kunnen inzetten om ontwerpkeuzes te verantwoorden en gebruikersbehoeften beter te begrijpen. De complexiteit neemt toe door het werken met meerdere bronnen en methoden.', 
      indicatoren: [
        'Voert gebruikersonderzoek uit met behulp van meerdere methoden',
        'Analyseert en interpreteert onderzoeksdata om inzichten te genereren voor ontwerpbeslissingen',
        'Reflecteert op de betrouwbaarheid en relevantie van verzamelde data voor het ontwerp'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    3: { 
      beschrijving: 'Studenten passen geavanceerde onderzoeksmethoden toe om complexere ontwerpvraagstukken te verkennen. Ze leren hoe ze onderzoek kunnen inzetten om iteratief te ontwerpen en ontwerpkeuzes te valideren. De nadruk ligt op zelfstandigheid en kritische reflectie op het onderzoek.', 
      indicatoren: [
        'Ontwerpt en voert kwalitatief en kwantitatief onderzoek uit om diepgaande inzichten te verkrijgen',
        'Gebruikt iteratieve onderzoekscycli om ontwerpen te testen en te verbeteren',
        'Reflecteert kritisch op de validiteit en ethische aspecten van het onderzoek'
      ], 
      zelcomNiveau: 'B', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Instructie, begeleiding en/of toezicht',
        'Overlegt over te maken keuzes',
        'Schakelt hulp in bij onverwachte omstandigheden',
        'Verantwoordelijk voor goede uitvoering van eigen werkzaamheden'
      ]
    },
    4: { 
      beschrijving: 'Studenten nemen een tactische rol aan in het onderzoek en integreren onderzoeksmethoden om ontwerpstrategieën te ontwikkelen. Ze werken zelfstandig aan complexe vraagstukken en gebruiken onderzoek om ontwerpkeuzes te legitimeren en impact te meten.', 
      indicatoren: [
        'Ontwikkelt onderzoeksplannen die aansluiten bij de ontwerpstrategie organisatiedoelen',
        'Past geavanceerde onderzoeksmethoden toe',
        'Legitimeert ontwerpkeuzes met onderbouwde inzichten uit onderzoek en praktijkervaring'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    5: { 
      beschrijving: 'Studenten passen onderzoekend vermogen toe in een professionele context. Ze nemen verantwoordelijkheid voor het uitvoeren van onderzoek dat bijdraagt aan het oplossen van complexe ontwerpvraagstukken en het creëren van waarde voor organisaties en gebruikers.', 
      indicatoren: [
        'Selecteert en voert praktijkgericht onderzoek uit met methoden die passen bij de organisatorische context',
        'Communiceert onderzoeksresultaten en de onderliggende methodologische keuzes',
        'Reflecteert kritisch op de impact van de gekozen methoden op het ontwerp en de organisatie'
      ], 
      zelcomNiveau: 'C', 
      complexiteit: [
        'Meerdere opdrachten, deels bekend, deels te onderzoeken, in één situatie, of enkelvoudige opdracht in wisselende, nieuwe situaties',
        'Aanpassen van standaardprocedures in wisselende situaties',
        'Belangrijke eisen',
        'Beperkt multidisciplinair',
        'Specialistische kennis en vaardigheden',
        'Onbekende, maar overzichtelijke situatie',
        'Meerdere partijen, redelijk veel interactie',
        'Redelijk groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    6: { 
      beschrijving: 'Studenten ontwikkelen onderzoeksexpertise binnen hun gekozen specialisatie en passen specialistische onderzoeksmethoden toe. Ze richten zich op onderzoek dat specifiek is voor hun vakgebied.', 
      indicatoren: [
        'Onderzoekt hoe merkperceptie wordt gevormd en meet de effectiviteit van merkstrategieën',
        'Past participatory research-methoden toe om gebruikers te betrekken bij het merkontwerpproces',
        'Reflecteert op de maatschappelijke en culturele impact van merkervaringen'
      ], 
      zelcomNiveau: 'D', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Tussentijds begeleiding of begeleiding op afstand of op afroep',
        'Vrijheid van handelen binnen vastgesteld kader',
        'Gedeeltelijk verantwoordelijk voor eindresultaat',
        'Stimuleert of begeleidt anderen',
        'Tactische rol'
      ]
    },
    7: { 
      beschrijving: 'Studenten tonen expertise in onderzoekend vermogen door het kritisch selecteren, toepassen en evalueren van onderzoeksmethoden die passen bij complexe ontwerpvraagstukken. Ze nemen verantwoordelijkheid voor het hele onderzoeksproces, van probleemdefinitie tot validatie, en demonstreren hoe onderzoek bijdraagt aan relevante ontwerpoplossingen.', 
      indicatoren: [
        'Selecteert en past geschikte onderzoeksmethoden toe om het ontwerpvraagstuk te verkennen, onderbouwen en valideren',
        'Ontwerpt en voert onderzoek uit, waarbij kwalitatieve en kwantitatieve methoden worden geïntegreerd',
        'Evalueert en reflecteert kritisch op de validiteit, betrouwbaarheid en ethische aspecten van de gekozen methoden en onderzoeksresultaten',
        'Legt verantwoording af over de keuze voor specifieke methoden en hun bijdrage aan de onderbouwing van het ontwerp en de impact op gebruikers en stakeholders'
      ], 
      zelcomNiveau: 'E', 
      complexiteit: [
        'Diversiteit aan onbekende opdrachten, in wisselende nieuwe situaties',
        'Geen standaardaanpak, nieuwe procedures moeten worden toegepast/bedacht',
        'Strenge eisen',
        'Multidisciplinair',
        'Nieuwe kennis en vaardigheden',
        'Onbekende, niet-transparante situatie',
        'Veel partijen, veel interactie',
        'Groot afbreukrisico'
      ],
      zelfstandigheid: [
        'Weinig sturing en begeleiding',
        'Grote vrijheid van handelen',
        'Grote verantwoordelijkheid voor eindresultaat',
        'Geeft leiding aan anderen',
        'Strategische rol'
      ]
    }
  }
};