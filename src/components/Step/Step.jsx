import React, { useContext, createContext, useRef } from 'react';
import styles from './styles.module.css';

const StepsContext = createContext();

function StepsProvider({ children }) {
  const stepCounter = useRef(1);
  return (
    <StepsContext.Provider value={stepCounter}>
      <div className={styles.steps}>{children}</div>
    </StepsContext.Provider>
  );
}

function Step({ children, number }) {
  const stepCounter = useContext(StepsContext);
  const numberRef = useRef(null);

  // Use manual number if provided, otherwise use automatic
  if (numberRef.current === null) {
    if (number) {
      // Manual number provided
      numberRef.current = number;
      // Don't increment counter for manual numbers
    } else {
      // Automatic numbering
      numberRef.current = stepCounter?.current ?? 1;
      if (stepCounter) stepCounter.current++;
    }
  }

  const displayNumber = numberRef.current;

  return (
    <div className={styles.stepWrapper}>
      <span className={styles.badge}>{displayNumber}</span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export { Step as default, StepsProvider };