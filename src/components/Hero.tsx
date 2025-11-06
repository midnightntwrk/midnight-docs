import React from 'react';
import styles from '@site/src/css/hero.module.css';

type Props = {
  title?: React.ReactNode;                  // fallback title if no children
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tertiaryHref?: string;
  tertiaryLabel?: string;
  children?: React.ReactNode;      // this allows the Typewriter inside <Hero>...</Hero>
};

export default function Hero({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tertiaryHref,
  tertiaryLabel,
  children,
}: Props) {
  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Animated background */}
      <div className={styles.sky} aria-hidden="true">
        <div className={`${styles.stars} ${styles.layer1}`} />
        <div className={`${styles.stars} ${styles.layer2}`} />
        <div className={styles.aurora} />
      </div>

      <div className={styles.inner}>
        
        <h1 className={styles.title}>
          {children ? children : title}
        </h1>

        {/* Subtitle */}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {/* Buttons */}
        <div className={styles.actions}>
          {primaryHref && (
            <a className={styles.primaryBtn} href={primaryHref}>
              {primaryLabel}
            </a>
          )}
          {secondaryHref && (
            <a className={styles.ghostBtn} href={secondaryHref}>
              {secondaryLabel}
            </a>
          )}
          {tertiaryHref && (
            <a className={styles.ghostBtn} href={tertiaryHref}>
              {tertiaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
