/**
 * Vergelijkt twee teksten en retourneert nieuwe woorden die in de huidige tekst staan
 * maar niet in de vorige tekst
 */
export const getNewWords = (currentText: string, previousText?: string): string[] => {
  if (!previousText) return [];
  
  const currentWords = currentText.toLowerCase().split(/\s+/);
  const previousWords = previousText.toLowerCase().split(/\s+/);
  const newPhrases: string[] = [];
  
  for (let i = 0; i < currentWords.length; i++) {
    let foundInPrevious = false;
    for (let j = 0; j < previousWords.length; j++) {
      if (currentWords[i] === previousWords[j]) {
        foundInPrevious = true;
        break;
      }
    }
    if (!foundInPrevious && currentWords[i].length > 3) {
      newPhrases.push(currentWords[i]);
    }
  }
  
  return newPhrases;
};

/**
 * Highlight specifieke woorden in een tekst met gele achtergrond
 */
export const highlightText = (text: string, wordsToHighlight: string[]) => {
  if (wordsToHighlight.length === 0) return text;
  
  const parts = text.split(/(\s+)/);
  
  return parts.map((part, idx) => {
    const cleanPart = part.toLowerCase().replace(/[.,;:!?]/g, '');
    if (wordsToHighlight.some(word => cleanPart.includes(word))) {
      return (
        <span key={idx} className="bg-yellow-100 text-yellow-900 px-0.5 rounded font-medium mx-0.5 box-decoration-clone">
          {part}
        </span>
      );
    }
    return part;
  });
};
