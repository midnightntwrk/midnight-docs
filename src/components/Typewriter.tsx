import React from 'react';

export default function Typewriter({ 
  text = '', 
  speed = 50, 
  pause = 800, 
  loop = false, 
  ariaLabel 
}) {
  const [displayText, setDisplayText] = React.useState('');
  
  React.useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    
    if (!text) return;
    
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    
    const type = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(type, speed);
      } else if (loop) {
        timeoutId = setTimeout(() => {
          currentIndex = 0;
          setDisplayText('');
          type();
        }, pause);
      }
    };
    
    type();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text]); // Only depend on text changing
  
  return (
    <span className="typewriter">
      {displayText}
      <span className="typewriter-caret">▍</span>
    </span>
  );
}