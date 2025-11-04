import React from "react";

export default function HeroField({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* Parallax stars */}
      <div className="mn-stars layer-1"></div>
      <div className="mn-stars layer-2"></div>

      <svg
        viewBox="0 0 1200 600"
        className="mn-hero-svg"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="mnLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0000fe" />
            <stop offset="100%" stopColor="#9f6bff" />
          </linearGradient>

          <radialGradient id="mnPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cbff46" stopOpacity="1" />
            <stop offset="100%" stopColor="#cbff46" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Constellation lines */}
        <g stroke="url(#mnLine)" strokeWidth="2" strokeLinecap="round" opacity="0.5">
          <line x1="200" y1="400" x2="450" y2="320" className="mn-line" />
          <line x1="450" y1="320" x2="750" y2="420" className="mn-line" />
          <line x1="750" y1="420" x2="1000" y2="200" className="mn-line" />
        </g>

        {/* Encrypted signal nodes */}
        <g>
          <circle cx="450" cy="320" r="6" fill="var(--mn-blue)" className="mn-node pulse" />
          <circle cx="750" cy="420" r="6" fill="var(--mn-blue)" className="mn-node pulse" />
          <circle cx="1000" cy="200" r="6" fill="var(--mn-blue)" className="mn-node pulse" />
        </g>

        {/* Pulse aura */}
        <g>
          <circle cx="750" cy="420" r="30" fill="url(#mnPulse)" className="pulse-glow" />
          <circle cx="1000" cy="200" r="24" fill="url(#mnPulse)" className="pulse-glow" />
        </g>
      </svg>

      {/* Aurora / moonlight wash */}
      <div className="mn-aurora"></div>

      <style>{`
        .mn-hero-svg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
        }

        /* constellation reveal slowly (like discovering trusted peers) */
        .mn-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 6s ease-in-out forwards;
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        .pulse {
          animation: ping 4s infinite ease-in-out;
        }

        .pulse-glow {
          animation: glow 4s infinite ease-in-out;
        }

        @keyframes ping {
          0%, 100% { r: 6; }
          50% { r: 8; }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.1; r: 20; }
          50% { opacity: 0.55; r: 40; }
        }

        /* starfield */
        .mn-stars {
          position: absolute;
          inset: 0;
          background-repeat: repeat;
          opacity: 0.28;
          animation: drift 80s linear infinite;
        }

        .layer-1 {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='2' height='2'><circle cx='1' cy='1' r='1' fill='white'/></svg>");
          background-size: 2px 2px;
        }

        .layer-2 {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><circle cx='0.5' cy='0.5' r='0.5' fill='white'/></svg>");
          background-size: 1px 1px;
          opacity: 0.15;
          animation-duration: 140s;
        }

        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(-200px, -200px); }
        }

        /* soft moonlight gradient */
        .mn-aurora {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 80% 30%,
            rgba(122,92,255,0.28),
            transparent 65%
          );
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .mn-line, .pulse, .pulse-glow, .mn-stars {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
