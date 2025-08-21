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

function Step({ children }) {
  const stepCounter = useContext(StepsContext);
  const numberRef = useRef(null);

  if (numberRef.current === null) {
    numberRef.current = stepCounter?.current ?? 1;
    if (stepCounter) stepCounter.current++;
  }

  const number = numberRef.current;

  return (
    <div className={styles.stepWrapper}>
      <span className={styles.badge}>{number}</span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export { Step as default, StepsProvider };
