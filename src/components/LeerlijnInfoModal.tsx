import { motion, AnimatePresence } from 'motion/react';
import { X, Target, Lightbulb, Users, Globe, Building2, Search, Compass, BookOpen, Layers, GitMerge, ArrowRight } from 'lucide-react';
import { Leerlijn } from '../data/leerlijnen';
import { LeerlijnInfo } from '../data/leerlijnInfo';

interface LeerlijnInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: LeerlijnInfo;
  leerlijn: Leerlijn;
  color: string;
  Icon: any;
}

export function LeerlijnInfoModal({ isOpen, onClose, info, leerlijn, color, Icon }: LeerlijnInfoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className={`p-6 border-b border-${color}-100 bg-${color}-50 flex items-start justify-between shrink-0`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-${color}-100 text-${color}-700 shadow-sm`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className={`text-2xl font-bold text-${color}-900`}>{info.title}</h2>
                <p className={`text-${color}-700 font-medium opacity-80`}>Leerlijn details</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 space-y-8">
            
            {/* Kernvraag & Toelichting */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
                  <Target className={`w-5 h-5 text-${color}-500`} />
                  Kernvraag
                </div>
                <p className="text-xl font-medium text-gray-800 italic leading-relaxed">
                  "{info.kernvraag}"
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
                  <BookOpen className={`w-5 h-5 text-${color}-500`} />
                  Toelichting
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {info.toelichting}
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Essentie & Cruciaal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
                  <Layers className={`w-5 h-5 text-${color}-500`} />
                  Essentie voor de BoKSA
                </div>
                <ul className="space-y-2">
                  {info.essentie.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${color}-500 shrink-0`} />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className={`bg-${color}-50 rounded-xl p-6 border border-${color}-100 h-full`}>
                   <div className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                    <Lightbulb className={`w-5 h-5 text-${color}-600`} />
                    Waarom cruciaal?
                  </div>
                  <p className={`text-${color}-900 font-medium leading-relaxed`}>
                    {info.cruciaal}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Koppeling met leeruitkomsten */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <GitMerge className={`w-5 h-5 text-${color}-500`} />
                Koppeling met leeruitkomsten
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {['Context', 'Ontwerpen', 'Prototype & testen', 'Verbinden', 'Leren & reflecteren'].map((fase) => {
                  const items = info.koppeling[fase];
                  if (!items || items.length === 0) return null;

                  return (
                    <div key={fase} className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                      <div className="md:w-48 shrink-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider">
                          {fase}
                        </span>
                      </div>
                      <div className="flex-1 space-y-2">
                        {items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                             <ArrowRight className={`w-4 h-4 text-${color}-400 shrink-0 mt-0.5`} />
                             <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
