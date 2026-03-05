import { LearningOutcome } from '../types/curriculum';
import { Leerlijn } from '../data/leerlijnen';
import { 
  Lightbulb, 
  Compass, 
  Users, 
  Globe, 
  Building2, 
  Search 
} from 'lucide-react';

// Leerlijn kleuren
export const leerlijnColors: Record<Leerlijn, string> = {
  'Design': 'pink',
  'Technologie & AI': 'blue',
  'Mens & Ervaring': 'purple',
  'Maatschappij & Toekomst': 'green',
  'Organisatie & Strategie': 'orange',
  'Onderzoekend Vermogen': 'yellow',
};

// Leerlijn iconen
export const leerlijnIcons: Record<Leerlijn, any> = {
  'Design': Lightbulb,
  'Technologie & AI': Compass,
  'Mens & Ervaring': Users,
  'Maatschappij & Toekomst': Globe,
  'Organisatie & Strategie': Building2,
  'Onderzoekend Vermogen': Search,
};

// Volgorde leerlijnen
export const leerlijnenOrder: Leerlijn[] = [
  'Design',
  'Technologie & AI',
  'Mens & Ervaring',
  'Organisatie & Strategie',
  'Maatschappij & Toekomst',
  'Onderzoekend Vermogen',
];

// Leeruitkomst basis kleuren (voor template string gebruik)
export const outcomeBaseColors: Record<LearningOutcome, string> = {
  context: 'blue',
  ontwerpen: 'purple',
  prototype: 'green',
  verbinden: 'orange',
  reflecteren: 'pink'
};

// Leeruitkomst styling (volledige class strings voor Tailwind)
export const outcomeStyles: Record<LearningOutcome, { 
  border: string; 
  badgeBg: string; 
  badgeBorder: string; 
  badgeText: string;
  buttonBg: string;
  buttonRing: string;
  buttonText: string;
  iconBg: string;
  iconColor: string;
}> = {
  context: {
    border: 'border-blue-300',
    badgeBg: 'bg-blue-50',
    badgeBorder: 'border-blue-200',
    badgeText: 'text-blue-700',
    buttonBg: 'bg-blue-100',
    buttonRing: 'ring-blue-200',
    buttonText: 'text-blue-800',
    iconBg: 'bg-blue-50',
    iconColor: 'bg-blue-500'
  },
  ontwerpen: {
    border: 'border-purple-300',
    badgeBg: 'bg-purple-50',
    badgeBorder: 'border-purple-200',
    badgeText: 'text-purple-700',
    buttonBg: 'bg-purple-100',
    buttonRing: 'ring-purple-200',
    buttonText: 'text-purple-800',
    iconBg: 'bg-purple-50',
    iconColor: 'bg-purple-500'
  },
  prototype: {
    border: 'border-green-300',
    badgeBg: 'bg-green-50',
    badgeBorder: 'border-green-200',
    badgeText: 'text-green-700',
    buttonBg: 'bg-green-100',
    buttonRing: 'ring-green-200',
    buttonText: 'text-green-800',
    iconBg: 'bg-green-50',
    iconColor: 'bg-green-500'
  },
  verbinden: {
    border: 'border-orange-300',
    badgeBg: 'bg-orange-50',
    badgeBorder: 'border-orange-200',
    badgeText: 'text-orange-700',
    buttonBg: 'bg-orange-100',
    buttonRing: 'ring-orange-200',
    buttonText: 'text-orange-800',
    iconBg: 'bg-orange-50',
    iconColor: 'bg-orange-500'
  },
  reflecteren: {
    border: 'border-pink-300',
    badgeBg: 'bg-pink-50',
    badgeBorder: 'border-pink-200',
    badgeText: 'text-pink-700',
    buttonBg: 'bg-pink-100',
    buttonRing: 'ring-pink-200',
    buttonText: 'text-pink-800',
    iconBg: 'bg-pink-50',
    iconColor: 'bg-pink-500'
  }
};

// Jaar groepering configuratie
export const yearGroups = [
  { year: 1, label: 'Jaar 1', semesters: [1, 2], subLabel: 'Basis & Oriëntatie' },
  { year: 2, label: 'Jaar 2', semesters: [3, 4], subLabel: 'Verdieping & Verbreding' },
  { year: 3, label: 'Jaar 3', semesters: [5, 6], subLabel: 'Profilering & Praktijk' },
  { year: 4, label: 'Jaar 4', semesters: [7, 8], subLabel: 'Afstuderen' },
];

// Leerlijn beschrijvingen
export const leerlijnDescriptions: Record<Leerlijn, string> = {
  'Design': 'CMD\'ers brengen de huidige en gewenste situatie in kaart en benaderen het ontwerpprobleem vanuit verschillende perspectieven. Ze verkennen oplossingen, passen creatieve methoden toe om ideeën te genereren en te wegen, en werken prototypes uit van low-fidelity tot high-fidelity. Ze gebruiken kennis van interactie, storytelling en vormgeving van multimodale interfaces, en passen evaluatiemethoden toe om ontwerpen te verfijnen en valideren.',
  'Technologie & AI': 'CMD\'ers analyseren mogelijkheden van relevante technologieën en experimenteren met verschillende digitale technieken als onderdeel van de ontwerpoplossing. Ze maken prototypes om de context te begrijpen en keuzes te maken, en toetsen of prototypes aan technische eisen voldoen. Ze verkennen actief wat digitale technologie kan betekenen voor innovatieve oplossingen.',
  'Mens & Ervaring': 'CMD\'ers brengen gebruikers, hun wensen en de gebruikscontext in kaart. Ze betrekken gebruikers en belanghebbenden actief bij het ontwerpproces, bij het bedenken en wegen van ideeën, en verbinden hun doelen en wensen in het concept. Ze toetsen de gebruiksvriendelijkheid en kwaliteit van de gebruikerservaring, en verbeteren concepten zodat deze optimaal passen bij gebruikerswensen.',
  'Maatschappij & Toekomst': 'CMD\'ers zijn betrokken bij wat er speelt in de samenleving en houden rekening met de maatschappelijke impact van hun ontwerpen. Ze verkennen gevoeligheden, dilemma\'s en kwesties met behulp van scenario\'s en prototypen, en gebruiken creatieve methoden om alternatieven te bedenken voor huidige maatschappelijke verhoudingen. Ze evalueren de te verwachten effecten op de lange termijn met experts en stakeholders.',
  'Organisatie & Strategie': 'CMD\'ers stellen zich op de hoogte van nieuwe ontwikkelingen in de markt en organisatie. Ze identificeren belangen van verschillende stakeholders en brengen spanningsvelden in kaart. Ze houden bij het ontwerp rekening met draagvlak en latere ingebruikname, bedenken slimme alternatieven voor de status quo, en valideren de toegevoegde waarde van hun oplossingen voor de organisatie.',
  'Onderzoekend Vermogen': 'CMD\'ers leven zich in in het probleem van de opdrachtgever en zoeken naar de vraag achter de vraag. Ze brengen het communicatieprobleem systematisch in kaart en passen evaluatiemethoden en technieken toe om ontwerpen te verfijnen en valideren. Ze gebruiken onderzoeksmethoden om effecten en waarde van oplossingen vast te stellen en ontwerpbeslissingen te onderbouwen.'
};

// Leerlijn essentie (bullet points)
export const leerlijnEssentie: Record<Leerlijn, string[]> = {
  'Design': [
    'Visualiseren en prototypen',
    'Creatieve methoden toepassen',
    'Iteratief ontwerpen en testen',
    'Multimodale interfaces vormgeven'
  ],
  'Technologie & AI': [
    'Technologische mogelijkheden verkennen',
    'Experimenteren met digitale technieken',
    'Prototypes bouwen en toetsen',
    'Innovatieve digitale oplossingen creëren'
  ],
  'Mens & Ervaring': [
    'Gebruikers centraal stellen',
    'Gebruikersonderzoek uitvoeren',
    'Betrekken van belanghebbenden',
    'Gebruikerservaring optimaliseren'
  ],
  'Maatschappij & Toekomst': [
    'Maatschappelijke impact analyseren',
    'Ethische dilemma\'s verkennen',
    'Toekomstscenario\'s ontwikkelen',
    'Lange termijn effecten evalueren'
  ],
  'Organisatie & Strategie': [
    'Stakeholderbelangen identificeren',
    'Organisatiecontext begrijpen',
    'Strategische waarde aantonen',
    'Implementatie faciliteren'
  ],
  'Onderzoekend Vermogen': [
    'Ontwerpvragen formuleren',
    'Systematisch onderzoeken',
    'Methoden en technieken toepassen',
    'Ontwerpbeslissingen onderbouwen'
  ]
};