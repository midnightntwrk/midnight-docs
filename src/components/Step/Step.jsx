// src/components/Step/Step.jsx
import React, { useContext, createContext, useState } from 'react';
import styles from './styles.module.css';

const StepsContext = createContext(null);

export function StepsProvider({ children, start = 1, className = '' }) {
  const [currentStep, setCurrentStep] = useState(start);
  
  const getNextStep = () => {
    const step = currentStep;
    setCurrentStep(prev => prev + 1);
    return step;
  };
  
  return (
    <StepsContext.Provider value={{ getNextStep }}>
      <div className={`${styles.steps} ${className}`}>{children}</div>
    </StepsContext.Provider>
  );
}

export default function Step({ children, number }) {
  const context = useContext(StepsContext);
  
  const [displayNumber] = useState(() => {
    if (number != null) return number;
    if (context) return context.getNextStep();
    return '';
  });

  return (
    <div className={styles.stepWrapper}>
      <span className={styles.stepBadge}>
        {displayNumber !== '' ? displayNumber : null}
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}