import { useEffect, useState } from 'react';
import { Monitor, X } from 'lucide-react';

export function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Only show on smartphone screens
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile || !showWarning) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-blue-600 text-white rounded-lg shadow-xl p-4 max-w-md mx-auto">
      <div className="flex items-start gap-3">
        <Monitor className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            Deze tool is geoptimaliseerd voor desktop weergave. Voor de beste ervaring raden we aan om deze op een groter scherm te bekijken.
          </p>
        </div>
        <button
          onClick={() => setShowWarning(false)}
          className="flex-shrink-0 p-1 hover:bg-blue-700 rounded transition-colors"
          aria-label="Sluit melding"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}