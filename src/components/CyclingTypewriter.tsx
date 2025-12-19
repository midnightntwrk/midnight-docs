import React from 'react';

export default function CyclingTypewriter() {
  const phrases = [
    "Midnight developer documentation",
    "Programmable privacy, built for the real-world",
    "Privacy you control. Proof you can trust"
  ];
  
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState(phrases[0]);
  const [isPaused, setIsPaused] = React.useState(false);
  
  React.useEffect(() => {
    let timeout;
    
    if (isPaused) {
      // Pause after deletion before typing next phrase
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 1000); // Pause duration after deletion
    } else if (isDeleting) {
      // Delete animation
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50); // Delete speed
      } else {
        // Done deleting, pause before next phrase
        setIsDeleting(false);
        setIsPaused(true);
      }
    } else {
      // Type animation
      const currentPhrase = phrases[index];
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 80); // Type speed
      } else {
        // Done typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 8000); // Pause before deleting
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, isPaused, phrases]);
  
  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-caret">▍</span>
    </span>
  );
}