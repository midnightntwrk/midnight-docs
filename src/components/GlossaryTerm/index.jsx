import React, { useState } from 'react';
import glossary from '@site/src/data/glossary.yaml';
import styles from './styles.module.css';

export default function GlossaryTerm({ term }) {
  const [show, setShow] = useState(false);
  const entry = glossary.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );

  if (!entry) {
    return <span className={styles.term}>{term}</span>;
  }

  return (
    <span
      className={`${styles.term} ${styles.underline}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {term}
      {show && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipTitle}>
            {entry.term.charAt(0).toUpperCase() + entry.term.slice(1)}
          </div>
          <div>{entry.definition}</div>
        </div>
      )}
    </span>
  );
}
