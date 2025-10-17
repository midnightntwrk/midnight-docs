import React, { useContext, createContext, useRef, useState } from 'react';
import styles from './styles.module.css';

const StepsContext = createContext(null);

export function StepsProvider({ children, start = 1, className = '' }) {
  const counterRef = useRef(start);
  
  const getNextStep = () => {
    const current = counterRef.current;
    counterRef.current++;
    return current;
  };
  
  return (
    <StepsContext.Provider value={{ getNextStep }}>
      <div className={`${styles.steps} ${className}`}>{children}</div>
    </StepsContext.Provider>
  );
}

export default function Step({ children, number }) {
  const context = useContext(StepsContext);
  const storedNumber = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);
  
  if (storedNumber.current === null) {
    if (number !== undefined && number !== null) {
      storedNumber.current = number;
    } else if (context) {
      storedNumber.current = context.getNextStep();
    } else {
      storedNumber.current = 1;
    }
  }

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={styles.stepWrapper}>
      <span 
        className={`${styles.stepBadge} ${isCompleted ? styles.completed : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      >
        {storedNumber.current}
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}