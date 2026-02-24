import { useState } from 'react';
import { Leerlijn } from '../data/leerlijnen';
import { leerlijnProgressions } from '../data/leerlijnProgressions';
import { leerlijnInfo } from '../data/leerlijnInfo';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { 
  Lightbulb, 
  Compass, 
  Users, 
  Globe, 
  Building2, 
  Search, 
  Target,
  FileText,
  ChevronRight,
  GraduationCap,
  Layers,
  ArrowRight,
  Map,
  X,
  ZoomIn,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import leerlijnenModelImage from 'figma:asset/a148addecc8838da41cda4e45e9837f597fc2b5a.png';

// Constanten
const leerlijnColors: Record<Leerlijn, string> = {
  'Design': 'pink',
  'Technologie & AI': 'blue',
  'Mens & Ervaring': 'purple',
  'Maatschappij & Toekomst': 'green',
  'Organisatie & Strategie': 'orange',
  'Onderzoekend Vermogen': 'yellow',
};

const leerlijnIcons: Record<Leerlijn, any> = {
  'Design': Lightbulb,
  'Technologie & AI': Compass,
  'Mens & Ervaring': Users,
  'Maatschappij & Toekomst': Globe,
  'Organisatie & Strategie': Building2,
  'Onderzoekend Vermogen': Search,
};

const leerlijnenOrder: Leerlijn[] = [
  'Design',
  'Technologie & AI',
  'Mens & Ervaring',
  'Organisatie & Strategie',
  'Maatschappij & Toekomst',
  'Onderzoekend Vermogen'
];

const semesterTitles: Record<number, string> = {
  1: 'BASE',
  2: 'CHALLENGE',
  3: 'EXPLORE',
  4: 'CONNECT',
  5: 'PRAKTIJK',
  6: 'SPECIALISATIE',
  7: 'AFSTUDEREN'
};

const semesterSubtitles: Record<number, string> = {
  1: 'De basis leggen',
  2: 'Verbreden & toepassen',
  3: 'Verdiepen',
  4: 'Verbinden',
  5: 'Professionele ervaring',
  6: 'Kiezen & excelleren',
  7: 'Meesterschap tonen'
};

export function LeerlijnenView() {
  const [activeLeerlijn, setActiveLeerlijn] = useState<Leerlijn>('Design');
  const [activeS6Specialization, setActiveS6Specialization] = useState<string>('brand-design');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isImageZoomed, setIsImageZoomed] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const color = leerlijnColors[activeLeerlijn];
  const Icon = leerlijnIcons[activeLeerlijn];
  const info = leerlijnInfo[activeLeerlijn];

  // Data ophalen en sorteren
  const progressions = leerlijnProgressions
    .filter(p => p.leerlijn === activeLeerlijn)
    .sort((a, b) => a.semester - b.semester);

  // Specialisaties in S6 filteren voor weergave
  const getSemesterContent = (sem: number) => {
    if (sem === 6) {
      const specItem = progressions.find(p => p.semester === 6 && p.specialization === activeS6Specialization);
      if (specItem) return specItem;
    }
    // Voor andere semesters of als fallback (vindt de eerste match, bijv. generiek of fallback)
    return progressions.find(p => p.semester === sem);
  };

  // Handler voor speelveld selectie (sluit sheet op mobile)
  const handleLeerlijnSelect = (leerlijn: Leerlijn) => {
    setActiveLeerlijn(leerlijn);
    setIsFilterOpen(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      
       {/* Introductie Box */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 p-6">
              <div className="flex-1 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-gray-900 mb-3 flex items-center gap-2 font-bold text-lg">
                    <Map className="w-5 h-5 text-blue-600" />
                    Leerlijnen & Speelvelden
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
                    Leerlijnen vormen de inhoudelijke rode draden van de opleiding. Ze geven richting aan de projecten, vakken en opdrachten die je door de hele opleiding heen tegenkomt. In dit overzicht is per speelveld de opbouw in complexiteit en zelfstandigheid gedurende het curriculum terug te zien.
                  </p>
                </div>
                
                {/* Thumbnail Image */}
                <div className="relative group cursor-zoom-in shrink-0" onClick={() => setIsImageZoomed(true)}>
                  <div className="w-32 h-32 bg-white rounded-lg p-2 shadow-sm border border-blue-100 transition-transform group-hover:scale-105">
                     <img 
                       src={leerlijnenModelImage} 
                       alt="Leerlijnen Model" 
                       className="w-full h-full object-contain"
                     />
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 rounded-lg transition-opacity">
                       <ZoomIn className="w-6 h-6 text-blue-600" />
                     </div>
                  </div>
                  <div className="text-center mt-1 text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Klik om te vergroten
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowIntro(false)}
                className="flex-shrink-0 p-1.5 hover:bg-blue-100 rounded-full transition-colors text-blue-400 hover:text-blue-600"
                aria-label="Verberg introductie"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsImageZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsImageZoomed(false)}
                  className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-2 md:p-8 bg-white h-full overflow-auto flex items-center justify-center">
                 <img 
                   src={leerlijnenModelImage} 
                   alt="Leerlijnen Model Full" 
                   className="max-w-full max-h-[80vh] object-contain"
                 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Leerlijn Navigatie - Responsive */}
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
                  <div className="text-xs text-gray-500 font-medium">Speelveld</div>
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
                Selecteer Speelveld
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-2">
              {leerlijnenOrder.map((leerlijn) => {
                const isActive = activeLeerlijn === leerlijn;
                const lColor = leerlijnColors[leerlijn];
                const LIcon = leerlijnIcons[leerlijn];
                
                return (
                  <button
                    key={leerlijn}
                    onClick={() => handleLeerlijnSelect(leerlijn)}
                    className={`
                      w-full px-4 py-4 rounded-lg text-left transition-all duration-200 flex items-center gap-3 border
                      ${isActive 
                        ? `bg-${lColor}-50 border-${lColor}-200 shadow-sm` 
                        : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }
                    `}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? `bg-${lColor}-100` : 'bg-gray-100'}`}>
                      <LIcon className={`w-5 h-5 ${isActive ? `text-${lColor}-600` : 'text-gray-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold ${isActive ? `text-${lColor}-900` : 'text-gray-700'}`}>
                        {leerlijn}
                      </div>
                      {isActive && (
                        <div className={`text-xs text-${lColor}-600 mt-0.5`}>Actief speelveld</div>
                      )}
                    </div>
                    {isActive && (
                      <div className={`w-2 h-2 rounded-full bg-${lColor}-500`} />
                    )}
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: Horizontal Tabs (Compact) */}
      <div className="hidden md:block sticky top-4 z-30 bg-white/95 backdrop-blur-md rounded-xl shadow-sm border border-gray-200 p-2 overflow-x-auto">
        <div className="flex space-x-2 min-w-max lg:justify-center">
          {leerlijnenOrder.map((leerlijn) => {
            const isActive = activeLeerlijn === leerlijn;
            const lColor = leerlijnColors[leerlijn];
            const LIcon = leerlijnIcons[leerlijn];
            
            return (
              <button
                key={leerlijn}
                onClick={() => setActiveLeerlijn(leerlijn)}
                className={`
                  relative px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2
                  ${isActive 
                    ? `bg-${lColor}-50 text-${lColor}-900 ring-1 ring-${lColor}-200 shadow-sm` 
                    : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <LIcon className={`w-4 lg:w-5 h-4 lg:h-5 ${isActive ? `text-${lColor}-600` : 'text-gray-400'}`} />
                <span className="hidden xl:inline">{leerlijn}</span>
                <span className="xl:hidden">{leerlijn.split(' ')[0]}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeLeerlijnTab"
                    className={`absolute inset-0 rounded-lg border-2 border-${lColor}-500/10 pointer-events-none`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Rijke Info Header (Speelveld Uitleg) */}
      <div className={`bg-gradient-to-br from-${color}-50/50 via-white to-white rounded-2xl border border-${color}-100 p-6 md:p-8 shadow-sm`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Linker kant: Titel & Toelichting */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl bg-${color}-100 text-${color}-700 shadow-sm`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold text-${color}-900`}>{activeLeerlijn}</h1>
                <p className={`text-${color}-600 font-medium text-lg`}>Speelveld & Competenties</p>
              </div>
            </div>
            
            <div>
               <p className="text-gray-700 leading-relaxed text-lg">
                 {info.toelichting}
               </p>
            </div>
          </div>

          {/* Rechter kant: Essentie & Cruciaal */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`bg-white rounded-xl p-5 border border-${color}-100 shadow-sm`}>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Essentie speelveld
              </h3>
              <ul className="space-y-2.5">
                {info.essentie.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${color}-500 shrink-0`} />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Semester Progressie Matrix */}
      <div className="relative">
        
        <div className="space-y-6">
          {[1, 2, 3, 4, 5, 6, 7].map((sem) => {
            const item = getSemesterContent(sem);
            if (!item && sem !== 6) return null; // Skip empty, but keep 6 for special handling check

            // Fallback voor S6 als er geen item is gevonden (bv. bij switch)
            const displayItem = item || (sem === 6 ? progressions.find(p => p.semester === 6) : null);
            if (!displayItem) return null;

            return (
              <div key={sem} className="relative group">
                
                {/* Content Card (Full Width) */}
                <div className="w-full">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:border-gray-300 transition-colors">
                    
                    {/* Header van kaart */}
                    <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                       
                       <div className="flex-1">
                         {/* Bij S6 tonen we ALTIJD de specialisatie selector, ongeacht het speelveld */}
                         {sem === 6 ? (
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <span className="font-bold text-gray-900 text-lg whitespace-nowrap">Specialisatie semester:</span>
                                <div className="flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                                  {[
                                    { id: 'brand-design', label: 'Brand Design' },
                                    { id: 'immersive-design', label: 'Immersive Design' },
                                    { id: 'digital-design', label: 'Digital Design' }
                                  ].map(spec => {
                                    const isActive = activeS6Specialization === spec.id;
                                    return (
                                      <button
                                        key={spec.id}
                                        onClick={() => setActiveS6Specialization(spec.id)}
                                        className={`
                                          text-sm px-4 py-1.5 rounded-md font-medium transition-all
                                          ${isActive 
                                            ? `bg-${color}-100 text-${color}-800 shadow-sm` 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                          }
                                        `}
                                      >
                                        {spec.label}
                                      </button>
                                    );
                                  })}
                                </div>
                            </div>
                         ) : (
                            <div className="space-y-1">
                              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                {sem === 5 ? (
                                  <span>Praktijk semester</span>
                                ) : (
                                  <>
                                    <span className="text-gray-500 font-normal">Semester {sem}:</span>
                                    {displayItem.semesterName}
                                  </>
                                )}
                              </h3>
                            </div>
                         )}
                       </div>

                    </div>

                    {/* Body van kaart - 3 Kolommen Grid */}
                    <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                      
                      {/* Kolom 1: Focus & Doel (4 cols) */}
                      <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 tracking-wider">
                          <Target className="w-3.5 h-3.5" />
                          Focus & Doel
                        </div>
                        
                        <div className="space-y-3">
                          <p className="text-gray-900 font-medium leading-relaxed">
                            {displayItem.introductie || displayItem.globalDescription}
                          </p>
                          {displayItem.detailedDescription && (
                             <p className="text-sm text-gray-600 leading-relaxed">
                               {displayItem.detailedDescription}
                             </p>
                          )}
                        </div>

                        {displayItem.kernfocus && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {displayItem.kernfocus.split(';').map((tag, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100">
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Kolom 2: ZELCOM Niveau (4 cols) - Nieuw */}
                      <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                         <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 tracking-wider">
                           <GraduationCap className="w-3.5 h-3.5" />
                           ZELCOM Niveau
                         </div>

                         {displayItem.zelcomDescription ? (
                           <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-lg p-5 border border-blue-200 shadow-sm">
                              {/* Parse title and content */}
                              {(() => {
                                const lines = displayItem.zelcomDescription.split('\n').filter(line => line.trim());
                                const titleLine = lines[0];
                                const contentLines = lines.slice(1);
                                
                                // Check if it starts with "Niveau" or "ZELCOM"
                                const isShortFormat = titleLine.startsWith('Niveau');
                                const isLongFormat = titleLine.includes('ZELCOM');
                                
                                return (
                                  <>
                                    {/* Title */}
                                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200/60">
                                      <div className="flex-1">
                                        <div className="font-bold text-blue-900 text-base">
                                          {isShortFormat ? titleLine : `Semester ${sem}`}
                                        </div>
                                        {isShortFormat && (
                                          <div className="text-xs text-blue-600 mt-0.5">
                                            Zelfstandigheidsniveau
                                          </div>
                                        )}
                                      </div>
                                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                                        {sem}
                                      </div>
                                    </div>
                                    
                                    {/* Content */}
                                    {contentLines.length > 0 ? (
                                      <div className="space-y-2.5">
                                        {contentLines.map((line, i) => {
                                          const cleanLine = line.replace(/^[•\\-\\*]\\s*/, '').trim();
                                          if (!cleanLine) return null;
                                          return (
                                            <div key={i} className="flex items-start gap-2.5">
                                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                              <span className="text-sm text-gray-800 leading-relaxed">{cleanLine}</span>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    ) : (
                                      <p className="text-sm text-gray-600 italic">
                                        Dit niveau geeft de verwachte zelfstandigheid en complexiteit weer.
                                      </p>
                                    )}
                                  </>
                                );
                              })()}
                           </div>
                         ) : (
                           <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                             <p className="text-sm text-gray-500 italic">Geen ZELCOM niveau gedefinieerd.</p>
                           </div>
                         )}
                      </div>

                      {/* Kolom 3: Indicatoren (4 cols) */}
                      <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 tracking-wider">
                          <FileText className="w-3.5 h-3.5" />
                          Indicatoren
                        </div>

                        {displayItem.indicatoren && displayItem.indicatoren.length > 0 ? (
                           <ul className="space-y-2">
                             {displayItem.indicatoren.map((indicator, i) => (
                               <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <ArrowRight className={`w-4 h-4 text-${color}-400 shrink-0 mt-0.5`} />
                                  <span className="leading-snug">{indicator}</span>
                               </li>
                             ))}
                           </ul>
                        ) : (
                          <p className="text-sm text-gray-400 italic">Geen specifieke indicatoren beschikbaar.</p>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}