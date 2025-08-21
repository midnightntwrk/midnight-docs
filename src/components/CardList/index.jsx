import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CardList({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Link className={styles.link} to={item.href}>
            →
          </Link>
        </div>
      ))}
    </div>
  );
}

