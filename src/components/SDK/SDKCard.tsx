import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SDKCard.module.css';

const DocLink = Link as any;

export interface SDKCardProps {
  title: string;
  description: string;
  repo: string;
  docs: string;
}

const SDKCard: React.FC<SDKCardProps> = ({
  title,
  description,
  repo,
  docs,
}) => {
  return (
    <div className={styles.sdkCard}>
      <div className={styles.cardHeader}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.cardFooter}>
        {docs && (
          <DocLink to={docs} className={styles.linkButton}>
            Documentation
          </DocLink>
        )}
        {repo && (
          <a 
            href={repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default SDKCard;