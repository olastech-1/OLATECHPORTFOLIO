// src/components/TypingCode.jsx
import { useEffect, useState } from 'react';

const codeLines = [
  'const site = buildSite({',
  '  client: "your-business",',
  '  goal: "more bookings",',
  '  loadTime: "< 1.5s",',
  '  mobile: "pixel-perfect",',
  '});',
  '',
  'site.launch(); // done, live, fast',
];

function TypingCode() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId;

    function typeNextCharacter() {
      if (lineIndex >= codeLines.length) return;
      const currentLine = codeLines[lineIndex];
      if (charIndex <= currentLine.length) {
        const linesAlreadyDone = codeLines.slice(0, lineIndex).join('\n');
        const partOfCurrentLine = currentLine.slice(0, charIndex);
        const separator = lineIndex > 0 ? '\n' : '';
        setDisplayedText(linesAlreadyDone + separator + partOfCurrentLine);
        charIndex++;
        timeoutId = setTimeout(typeNextCharacter, 28 + Math.random() * 35);
      } else {
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeNextCharacter, 380);
      }
    }
    timeoutId = setTimeout(typeNextCharacter, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <pre className="font-mono2 text-[13px] sm:text-sm leading-relaxed p-6 text-teal min-h-[280px] whitespace-pre-wrap">
      <code>{displayedText}</code>
      <span className="type-cursor"></span>
    </pre>
  );
}

export default TypingCode;
