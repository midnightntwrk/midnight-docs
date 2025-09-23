import React, { useState } from 'react';
import styles from './FlipCard.module.css';

export default function FlipCard({ 
  title, 
  frontContent, 
  backContent,
  height = '200px',
  frontColor = null,
  backColor = '#0000fe'
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(prev => !prev);
  };

  return (
    <div 
      className={styles.flipCard}
      style={{ height }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(prev => !prev);
        }
      }}
    >
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ''}`}>
        {/* Front of card */}
        <div 
          className={styles.flipCardFront}
          style={frontColor ? { backgroundColor: frontColor } : undefined}
        >
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
          <div className={styles.cardContent}>{frontContent}</div>
          <div className={styles.flipHint}>Click to learn more →</div>
        </div>
        
        {/* Back of card */}
        <div 
          className={styles.flipCardBack}
          style={{ backgroundColor: backColor }}
        >
          {title && <h3 className={styles.cardTitleBack}>{title}</h3>}
          <div className={styles.cardBackContent}>{backContent}</div>
          <div className={styles.flipHint}>← Click to flip back</div>
        </div>
      </div>
    </div>
  );
}