import React from 'react';
import styles from '@site/src/css/hero.module.css';

type Props = {
  title: string;
  subtitle?: string;
  primaryHref?: string;  primaryLabel?: string;
  secondaryHref?: string; secondaryLabel?: string;
  tertiaryHref?: string;  tertiaryLabel?: string;
};

export default function Hero({
  title, subtitle,
  primaryHref, primaryLabel,
  secondaryHref, secondaryLabel,
  tertiaryHref, tertiaryLabel,
}: Props) {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Animated background */}
      <div className={styles.sky} aria-hidden="true">
        <div className={`${styles.stars} ${styles.layer1}`} />
        <div className={`${styles.stars} ${styles.layer2}`} />
        <div className={styles.aurora} />
      </div>

      {/* Foreground content */}
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <div className={styles.actions}>
          {primaryHref && (
            <a className={styles.primaryBtn} href={primaryHref}>{primaryLabel}</a>
          )}
          {secondaryHref && (
            <a className={styles.ghostBtn} href={secondaryHref}>{secondaryLabel}</a>
          )}
          {tertiaryHref && (
            <a className={styles.ghostBtn} href={tertiaryHref}>{tertiaryLabel}</a>
          )}
        </div>
      </div>
    </section>
  );
}
