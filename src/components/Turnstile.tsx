// src/components/Turnstile.tsx
import React, { useEffect, useRef } from "react";

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
        },
      ) => void;
    };
  }
}

const Turnstile: React.FC<TurnstileProps> = ({ siteKey, onVerify }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const interval = setInterval(() => {
      if (window.turnstile && ref.current) {
        window.turnstile.render(ref.current, {
          sitekey: siteKey,
          callback: (token: string) => onVerify(token),
        });
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [siteKey, onVerify]);

  return <div ref={ref} className="turnstile-container" />;
};

export default Turnstile;
