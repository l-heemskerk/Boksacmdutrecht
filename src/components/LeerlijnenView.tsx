import { useState } from 'react';
import { Leerlijn } from '../data/leerlijnen';
import { leerlijnSemesterContent, SemesterContent, specialisatieContent } from '../data/leerlijnen-semester-content';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Target,
  Link,
  Pencil,
  Layers,
  BookOpen,
  X,
  Map,
  Filter
} from 'lucide-react';
import speelveldImage from 'figma:asset/292288a9e5ceabc3a8767678b25cb1816e2fd663.png';
import { semesterColors } from '../types/curriculum';
import { leerlijnColors, leerlijnIcons, leerlijnenOrder, leerlijnDescriptions, leerlijnEssentie } from '../utils/constants';

// Semester titels
const semesterTitles: Record<number, string> = {
  1: 'Base',
  2: 'Challenge',
  3: 'Explore',
  4: 'Connect',
  5: 'Praktijk',
  6: 'Specialisatie',
  7: 'Afstuderen'
};

const specializations = [
  { id: 'brand-design', name: 'Brand Design' },
  { id: 'immersive-design', name: 'Immersive Design' },
  { id: 'digital-design', name: 'Digital Design' }
];

// Iconen voor leeruitkomsten
const leeruitkomstIcons: Record<string, any> = {
  'Context': Filter,
  'Ontwerpen': Pencil,
  'Prototype & testen': Layers,
  'Verbinden': Link,
  'Leren & reflecteren': BookOpen
};

export function LeerlijnenView() {
  const [activeLeerlijn, setActiveLeerlijn] = useState<Leerlijn>('Design');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);
  const [expandedSemesters, setExpandedSemesters] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
  });

  const color = leerlijnColors[activeLeerlijn];
  const Icon = leerlijnIcons[activeLeerlijn];

  // Handler voor leerlijn selectie (sluit sheet op mobile)
  const handleLeerlijnSelect = (leerlijn: Leerlijn) => {
    setActiveLeerlijn(leerlijn);
    setIsFilterOpen(false);
  };

  // Toggle semester expand/collapse
  const toggleSemester = (semNum: number) => {
    setExpandedSemesters(prev => ({
      ...prev,
      [semNum]: !prev[semNum]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Introductie met afbeelding - wegklikbaar */}
      {showIntro && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm">
          <div className="flex items-start justify-between gap-4 p-6">
            <div className="flex-1 flex items-start gap-6">
              {/* Tekst */}
              <div className="flex-1">
                <h2 className="text-gray-900 mb-3 flex items-center gap-2">
                  <Map className="w-5 h-5 text-blue-600" />
                  Leerlijnen & Speelvelden
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Leerlijnen vormen de inhoudelijke rode draden van de opleiding. Ze geven richting aan de projecten, vakken en opdrachten die je door de hele opleiding heen tegenkomt. In dit overzicht is per speelveld de opbouw in complexiteit en zelfstandigheid gedurende het curriculum terug te zien.
                </p>
              </div>
              {/* Afbeelding rechts - klein - klikbaar om te vergroten */}
              <button
                onClick={() => setShowImageModal(true)}
                className="group relative flex-shrink-0 hover:opacity-90 transition-opacity"
              >
                <img 
                  src={speelveldImage} 
                  alt="Leerlijnen & Speelvelden diagram" 
                  className="w-32 h-auto rounded-lg shadow-md border border-blue-200"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg">
                  <div className="bg-white/90 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-700">
                    Vergroten
                  </div>
                </div>
              </button>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              className="flex-shrink-0 p-1 hover:bg-blue-100 rounded transition-colors"
              aria-label="Verberg introductie"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      )}

      {/* Image Modal - volledig scherm */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Sluit afbeelding"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={speelveldImage} 
              alt="Leerlijnen & Speelvelden diagram - vergroot" 
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Mobile: Filter Button + Sheet */}
      <div className="md:hidden sticky top-4 z-30">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <button className="w-full bg-white/95 backdrop-blur-md rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-${color}-50`}>
                  <Icon className={`w-5 h-5 text-${color}-600`} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium">Leerlijn</div>
                  <div className="font-bold text-gray-900">{activeLeerlijn}</div>
                </div>
              </div>
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Selecteer Leerlijn
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-2">
              {leerlijnenOrder.map((leerlijn) => {
                const isActive = activeLeerlijn === leerlijn;
                const colorClass = leerlijnColors[leerlijn];
                const LeerlijnIcon = leerlijnIcons[leerlijn];
                
                return (
                  <button
                    key={leerlijn}
                    onClick={() => handleLeerlijnSelect(leerlijn)}
                    className={`
                      w-full px-4 py-4 rounded-lg text-left transition-all duration-200 flex items-center gap-3 border
                      ${isActive 
                        ? `bg-${colorClass}-50 border-${colorClass}-200 shadow-sm` 
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }
                    `}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? `bg-${colorClass}-100` : 'bg-gray-100'}`}>
                      <LeerlijnIcon className={`w-5 h-5 ${isActive ? `text-${colorClass}-600` : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold ${isActive ? `text-${colorClass}-900` : 'text-gray-700'}`}>
                        {leerlijn}
                      </div>
                      {isActive && (
                        <div className={`text-xs text-${colorClass}-600 mt-0.5`}>Actieve leerlijn</div>
                      )}
                    </div>
                    {isActive && (
                      <div className={`w-2 h-2 rounded-full bg-${colorClass}-500`} />
                    )}
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: Leerlijn selector */}
      <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Selecteer een leerlijn</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {leerlijnenOrder.map((leerlijn) => {
            const LeerlijnIcon = leerlijnIcons[leerlijn];
            const isActive = activeLeerlijn === leerlijn;
            const colorClass = leerlijnColors[leerlijn];
            
            return (
              <button
                key={leerlijn}
                onClick={() => setActiveLeerlijn(leerlijn)}
                className={`
                  relative p-4 rounded-lg border-2 transition-all duration-200
                  ${isActive 
                    ? `border-${colorClass}-500 bg-${colorClass}-50 shadow-md` 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <LeerlijnIcon 
                    className={`w-6 h-6 ${isActive ? `text-${colorClass}-600` : 'text-gray-400'}`} 
                  />
                  <span className={`text-xs font-medium ${isActive ? `text-${colorClass}-900` : 'text-gray-600'}`}>
                    {leerlijn}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Leerlijn algemene informatie */}
      <div className={`bg-${color}-50 border border-${color}-200 rounded-lg p-6 space-y-6`}>
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className={`p-3 bg-${color}-100 rounded-lg flex-shrink-0`}>
            <Icon className={`w-6 h-6 text-${color}-700`} />
          </div>
          <div className="flex-1">
            {/* Titels op dezelfde lijn */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <h2 className={`text-lg font-bold text-${color}-900`}>{activeLeerlijn}</h2>
              <h3 className={`text-sm font-bold text-${color}-900 flex items-center gap-2`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${color}-600 flex-shrink-0`} />
                Essentie van dit speelveld
              </h3>
            </div>
            
            {/* Beschrijving en Essentie in kolommen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Beschrijving */}
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">{leerlijnDescriptions[activeLeerlijn]}</p>
              </div>
              
              {/* Essentie bullets */}
              <div>
                <ul className="space-y-2">
                  {leerlijnEssentie[activeLeerlijn].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${color}-600 flex-shrink-0 mt-1.5`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Semesters */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6, 7].map((semNum) => {
          const title = semesterTitles[semNum];
          const content = leerlijnSemesterContent[activeLeerlijn][semNum];
          const isSpecialisatieSemester = semNum === 6;

          return (
            <Card key={semNum} className={`overflow-hidden border border-${color}-300 shadow-sm hover:shadow-md transition-shadow duration-200`}>
              <CardHeader className="bg-gray-50 border-b border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-white border-gray-300 text-gray-700 text-sm font-semibold">
                      Semester {semNum}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className={`bg-${color}-50 border-${color}-200 text-${color}-700 text-sm font-semibold`}>
                      ZELCOM niveau {content.zelcomNiveau}
                    </Badge>
                    <button
                      onClick={() => toggleSemester(semNum)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {expandedSemesters[semNum] ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </CardHeader>

              {expandedSemesters[semNum] && (
                <CardContent className="p-6">
                  {isSpecialisatieSemester ? (
                    /* Specialisatie tabs voor semester 6 */
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                          <span className="font-semibold">Keuze-specialisaties:</span> Dit semester biedt verschillende specialisaties. 
                          Kies een tab om de content per specialisatie te bekijken.
                        </p>
                      </div>
                      <Tabs defaultValue={specializations[0].id} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white/50 border border-blue-100 rounded-lg mb-6">
                          {specializations.map(spec => (
                            <TabsTrigger 
                              key={spec.id} 
                              value={spec.id}
                              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm py-3 rounded-md transition-all duration-200 font-medium text-sm"
                            >
                              {spec.name}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        {specializations.map(spec => (
                          <TabsContent key={spec.id} value={spec.id} className="mt-6">
                            <div className="space-y-4">
                              {/* Beschrijving en Indicatoren naast elkaar */}
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Beschrijving links */}
                                <div>
                                  <h4 className="text-sm font-bold text-gray-900 mb-2">Beschrijving speelveld:</h4>
                                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                    {specialisatieContent[activeLeerlijn][spec.id].beschrijving}
                                  </p>
                                </div>

                                {/* Indicatoren rechts - met kleuraccent */}
                                <div>
                                  <h4 className="text-sm font-bold text-gray-900 mb-2">Indicatoren</h4>
                                  {specialisatieContent[activeLeerlijn][spec.id].indicatoren.length > 0 ? (
                                    <div className={`bg-${color}-50 border-2 border-${color}-200 rounded-lg p-4`}>
                                      <ul className="space-y-2.5">
                                        {specialisatieContent[activeLeerlijn][spec.id].indicatoren.map((indicator, index) => (
                                          <li key={index} className="flex items-start gap-2.5">
                                            <span className={`inline-block w-2 h-2 rounded-full bg-${color}-600 flex-shrink-0 mt-1.5`} />
                                            <span className="text-sm text-gray-800 leading-relaxed">{indicator}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ) : (
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                                      <p className="text-sm text-gray-500 italic">Indicatoren worden later toegevoegd</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  ) : (
                    /* Reguliere semesters - Toon content */
                    (() => {
                      const hasContent = content.indicatoren.length > 0 || content.complexiteit.length > 0;
                      
                      return (
                        <div className="space-y-4">
                          {/* Beschrijving en Indicatoren naast elkaar */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Beschrijving links */}
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 mb-2">Beschrijving:</h4>
                              <p className="text-sm text-gray-700 leading-relaxed">{content.beschrijving}</p>
                            </div>

                            {/* Indicatoren rechts - met kleuraccent */}
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 mb-2">Indicatoren</h4>
                              {content.indicatoren.length > 0 ? (
                                <div className={`bg-${color}-50 border-2 border-${color}-200 rounded-lg p-4`}>
                                  <ul className="space-y-2.5">
                                    {content.indicatoren.map((indicator, index) => (
                                      <li key={index} className="flex items-start gap-2.5">
                                        <span className={`inline-block w-2 h-2 rounded-full bg-${color}-600 flex-shrink-0 mt-1.5`} />
                                        <span className="text-sm text-gray-800 leading-relaxed">{indicator}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                                  <p className="text-sm text-gray-500 italic">Indicatoren worden later toegevoegd</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* ZELCOM niveau - Complexiteit & Zelfstandigheid */}
                          {(content.complexiteit.length > 0 || content.zelfstandigheid.length > 0) && (
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 mb-3">ZELCOM niveau {content.zelcomNiveau}</h4>
                              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  {/* Complexiteit */}
                                  {content.complexiteit.length > 0 && (
                                    <div>
                                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Complexiteit</h5>
                                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                        <table className="w-full text-sm">
                                          <tbody>
                                            {content.complexiteit.map((item, index) => (
                                              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="py-2 px-4 text-gray-600 leading-relaxed">
                                                  <div className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                                                    <span>{item}</span>
                                                  </div>
                                                </td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Zelfstandigheid */}
                                  {content.zelfstandigheid.length > 0 && (
                                    <div>
                                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Zelfstandigheid</h5>
                                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                        <table className="w-full text-sm">
                                          <tbody>
                                            {content.zelfstandigheid.map((item, index) => (
                                              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="py-2 px-4 text-gray-600 leading-relaxed">
                                                  <div className="flex items-start gap-2">
                                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                                                    <span>{item}</span>
                                                  </div>
                                                </td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}