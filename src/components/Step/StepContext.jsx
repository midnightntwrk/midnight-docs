import React, { createContext, useRef } from 'react';

export const StepsContext = createContext();

export function StepsProvider({ children }) {
  const stepCounter = useRef(1);
  return (
    <StepsContext.Provider value={stepCounter}>
      <div>{children}</div>
    </StepsContext.Provider>
  );
}
