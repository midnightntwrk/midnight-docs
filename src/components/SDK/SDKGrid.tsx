import React from 'react';
import styles from './SDKGrid.module.css';

interface SDKGridProps {
  children: React.ReactNode;
  columns?: number;
}

const SDKGrid: React.FC<SDKGridProps> = ({ children, columns = 3 }) => {
  return (
    <div 
      className={styles.sdkGrid}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${300}px), 1fr))`
      }}
    >
      {children}
    </div>
  );
};

export default SDKGrid;
