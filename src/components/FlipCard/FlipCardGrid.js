import React from 'react';
import styles from './FlipCard.module.css';

export default function FlipCardGrid({ children, columns = 'auto-fit', minWidth = '280px' }) {
  return (
    <div 
      className={styles.gridContainer}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(${minWidth}, 1fr))`
      }}
    >
      {children}
    </div>
  );
}