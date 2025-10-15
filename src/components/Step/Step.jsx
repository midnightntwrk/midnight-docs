import React, { useContext, createContext, useRef } from 'react';
import styles from './styles.module.css';

const StepsContext = createContext();

/** Provider with optional custom start and extra className */
function StepsProvider({ children, start = 1, className = '' }) {
  const stepCounter = useRef(start);
  return (
    <StepsContext.Provider value={stepCounter}>
      <div className={`${styles.steps} ${className}`}>{children}</div>
    </StepsContext.Provider>
  );
}

function Step({ children, number }) {
  const stepCounter = useContext(StepsContext); // may be undefined if used outside provider
  const numberRef = useRef(null);

  if (numberRef.current === null) {
    const hasManual = number != null; // treat 0 as valid manual number

    if (hasManual) {
      // Manual number provided
      numberRef.current = number;
      // Do NOT increment the shared counter
    } else if (stepCounter) {
      // Automatic numbering via context
      numberRef.current = stepCounter.current ?? 1;
      stepCounter.current++;
    } else {
      // No provider: leave empty so CSS fallback .badge:empty::before applies
      numberRef.current = '';
    }
  }

  const displayNumber = numberRef.current;

  return (
    <div className={styles.stepWrapper}>
      <span className={styles.badge}>
        {displayNumber !== '' ? displayNumber : null}
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export { Step as default, StepsProvider };
