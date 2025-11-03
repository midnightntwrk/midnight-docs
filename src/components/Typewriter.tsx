import React from 'react';

export default function Typewriter({
  text, speed = 30, pause = 800, loop = false, ariaLabel,
}: { text: string; speed?: number; pause?: number; loop?: boolean; ariaLabel?: string }) {
  const [shown, setShown] = React.useState('');
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  React.useEffect(() => {
    if (reduceMotion) { setShown(text); return; }
    let i = 0, cancel = false;
    const tick = () => {
      if (cancel) return;
      if (i <= text.length) { setShown(text.slice(0, i++)); setTimeout(tick, speed); }
      else if (loop) { setTimeout(() => { i = 0; setShown(''); setTimeout(tick, speed); }, pause); }
    };
    tick();
    return () => { cancel = true; };
  }, [text, speed, pause, loop, reduceMotion]);

  return (
    <span aria-label={ariaLabel} className="typewriter">
      {shown}<span className="typewriter-caret" aria-hidden="true">▍</span>
    </span>
  );
}
