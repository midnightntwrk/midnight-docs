// src/components/GlossaryTerm/index.jsx
import React, { useMemo, useState } from 'react';
import glossary from '@site/src/data/glossary.yaml';
import styles from './styles.module.css';

// normalize for robust matching (case, spacing, parens, hyphens)
function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/zero[\s-]?knowledge/g, 'zero-knowledge') // unify common variation
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function GlossaryTerm({ term, label, hrefBase, className }) {
  const [show, setShow] = useState(false);

  const entry = useMemo(() => {
    const items = glossary || [];
    const key = norm(term);

    // 1) match by id
    let hit = items.find((e) => e.id && norm(e.id) === key);
    if (hit) return hit;

    // 2) match by primary term
    hit = items.find((e) => e.term && norm(e.term) === key);
    if (hit) return hit;

    // 3) match by aliases
    hit = items.find((e) => (e.aliases || []).some((a) => norm(a) === key));
    return hit;
  }, [term]);

  // Fallback: render plain text if no glossary match
  if (!entry) {
    return <span className={`${styles.term} ${className || ''}`.trim()}>{label ?? term}</span>;
  }

  const display = label ?? term;
  const anchorHref = hrefBase ? `${hrefBase}#${entry.id}` : undefined;
  const Tag = anchorHref ? 'a' : 'span';

  return (
    <Tag
      href={anchorHref}
      className={`${styles.term} ${styles.underline} ${className || ''}`.trim()}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      title={entry.definition || entry.term}
      aria-describedby={show ? `gtip-${entry.id}` : undefined}
      {...(!anchorHref ? { tabIndex: 0, role: 'definition' } : {})}
    >
      {display}
      {show && (
        <div id={`gtip-${entry.id}`} className={styles.tooltip} role="tooltip">
          <div className={styles.tooltipTitle}>
            {entry.term.charAt(0).toUpperCase() + entry.term.slice(1)}
          </div>
          <div>{entry.definition}</div>
        </div>
      )}
    </Tag>
  );
}
