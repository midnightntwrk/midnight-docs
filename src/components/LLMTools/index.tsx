'use client';
import React from 'react';
import { createPortal } from 'react-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function ViewOptions({ githubUrl }: { githubUrl?: string }) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState({ top: 0, left: 0, width: 0 });
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  // Prompt built from the current page
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const promptText = `Read this Midnight Docs page and answer questions about it:\n\n${pageUrl}`;
  const prompt = encodeURIComponent(promptText);

  // Resolve icon URLs from /static (baseUrl-safe)
  const githubSrc  = useBaseUrl('/img/icons/github.svg');
  const chatgptSrc = useBaseUrl('/img/icons/openai.svg');
  const claudeSrc  = useBaseUrl('/img/icons/anthropic.svg');
  const geminiSrc  = useBaseUrl('/img/icons/gemini.svg');

  function openMenu() {
    const r = btnRef.current?.getBoundingClientRect();
    if (r) {
      setPos({
        top: r.bottom + window.scrollY + 6,
        left: r.left + window.scrollX,
        width: r.width,
      });
    }
    setOpen(true);
  }

  React.useEffect(() => {
    if (!open) return;
    const closeOnClick = (e: MouseEvent) => {
      if (
        !btnRef.current?.contains(e.target as Node) &&
        !listRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const closeOnEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('click', closeOnClick);
    window.addEventListener('keydown', closeOnEsc);
    return () => {
      window.removeEventListener('click', closeOnClick);
      window.removeEventListener('keydown', closeOnEsc);
    };
  }, [open]);

  const items = [
    githubUrl && {
      label: 'GitHub',
      icon: <img src={githubSrc} alt="" width={18} height={18} className="llm-icon" />,
      onClick: () => window.open(githubUrl!, '_blank', 'noopener,noreferrer'),
    },
    {
      label: 'ChatGPT',
      icon: <img src={chatgptSrc} alt="" width={18} height={18} className="llm-icon" />,
      onClick: async () => {
        try { await navigator.clipboard.writeText(promptText); } catch {}
        window.open(`https://chat.openai.com/?q=${prompt}`, '_blank', 'noopener,noreferrer');
      },
    },
    {
      label: 'Claude',
      icon: <img src={claudeSrc} alt="" width={18} height={18} className="llm-icon" />,
      onClick: () =>
        window.open(`https://claude.ai/new?q=${prompt}`, '_blank', 'noopener,noreferrer'),
    },
    {
      label: 'Gemini',
      icon: <img src={geminiSrc} alt="" width={18} height={18} className="llm-icon" />,
      onClick: () =>
        window.open(`https://gemini.google.com/app?query=${prompt}`, '_blank', 'noopener,noreferrer'),
    },
    {
      label: 'T3 Chat',
      icon: (
        <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
          <path d="M256 32C114.6 32 0 125.1 0 240c0 49.1 24.5 93.8 64.8 128.7L32 480l112.3-41.2C175.2 448 215 456 256 456c141.4 0 256-93.1 256-208S397.4 32 256 32z" />
        </svg>
      ),
      onClick: () => window.open(`https://t3.chat?prompt=${prompt}`, '_blank', 'noopener,noreferrer'),
    },
  ].filter(Boolean) as { label: string; icon: React.ReactNode; onClick: () => void }[];

  return (
    <div style={{ display: 'inline-block' }}>
      <button
        ref={btnRef}
        className="button llm-trigger button--sm"
        type="button"
        onClick={() => (open ? setOpen(false) : openMenu())}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Explore with…"
      >
        Explore with… ▾
      </button>

      {open &&
        createPortal(
          <div
            ref={listRef}
            role="menu"
            className="llm-menu card"
            style={{
              position: 'absolute',
              top: pos.top,
              left: pos.left,
              minWidth: Math.max(240, pos.width),
              padding: 6,
              zIndex: 2147483647,
            }}
          >
            {items.map((it) => (
              <button
                key={it.label}
                role="menuitem"
                type="button"
                className="llm-menu__item"
                onClick={() => {
                  it.onClick();
                  setOpen(false);
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
                  {it.icon}
                  {it.label}
                </span>
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}
