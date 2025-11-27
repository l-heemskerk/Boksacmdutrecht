import { ExternalLink } from 'lucide-react';

// Known CMD Methods that should be linked
const CMD_METHODS_MAP: Record<string, string> = {
  // Library methods
  'literature study': 'library',
  'best practices': 'library',
  'good practices': 'library',
  'bad practices': 'library',
  'best, good and bad practices': 'library',
  'good, best and bad practices': 'library',
  
  // Field methods
  'interview': 'field',
  'interviews': 'field',
  'veldonderzoek': 'field',
  'field trial': 'field',
  'design probes': 'field',
  
  // Lab methods
  'usability testing': 'lab',
  'usability test': 'lab',
  'a/b testing': 'lab',
  
  // Showroom methods
  'peer review': 'showroom',
  
  // Workshop methods
  'brainstorm': 'workshop',
  'brainstormen': 'workshop',
  'brainstormtechnieken': 'workshop',
  'co-creation': 'workshop',
  'co-creatie': 'workshop',
  'card sorting': 'workshop',
  
  // Stepping stones methods
  'persona': 'stepping-stones',
  'personas': 'stepping-stones',
  'customer journey map': 'stepping-stones',
  'customer journey maps': 'stepping-stones',
  'empathy map': 'stepping-stones',
  'empathy maps': 'stepping-stones',
  'moodboard': 'stepping-stones',
  'moodboards': 'stepping-stones',
  'wireframe': 'stepping-stones',
  'wireframes': 'stepping-stones',
  'flowchart': 'stepping-stones',
  'flowcharts': 'stepping-stones',
  'user stories': 'stepping-stones',
  'user story': 'stepping-stones',
};

/**
 * Converts text containing CMD Methods into clickable links
 */
export function renderWithCMDMethodsLinks(text: string): React.ReactNode {
  const lowerText = text.toLowerCase();
  
  // Find all matches
  const matches: Array<{ method: string; category: string; start: number; end: number }> = [];
  
  for (const [method, category] of Object.entries(CMD_METHODS_MAP)) {
    const index = lowerText.indexOf(method.toLowerCase());
    if (index !== -1) {
      matches.push({
        method: method,
        category: category,
        start: index,
        end: index + method.length
      });
    }
  }
  
  // No matches, return as is
  if (matches.length === 0) {
    return text;
  }
  
  // Sort by start position
  matches.sort((a, b) => a.start - b.start);
  
  // Remove overlapping matches (keep the first one)
  const filteredMatches = matches.filter((match, index) => {
    if (index === 0) return true;
    const prevMatch = matches[index - 1];
    return match.start >= prevMatch.end;
  });
  
  // Build the result with links
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  
  filteredMatches.forEach((match, index) => {
    // Add text before the match
    if (match.start > lastIndex) {
      result.push(text.substring(lastIndex, match.start));
    }
    
    // Add the link
    const matchedText = text.substring(match.start, match.end);
    result.push(
      <a
        key={`link-${index}`}
        href={`https://cmdmethods.nl/#${match.category}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline decoration-dotted hover:decoration-solid transition-colors"
      >
        {matchedText}
        <ExternalLink className="w-3 h-3 inline" />
      </a>
    );
    
    lastIndex = match.end;
  });
  
  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }
  
  return <>{result}</>;
}
