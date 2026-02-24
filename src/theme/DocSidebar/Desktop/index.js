import React from 'react';
import DocSidebarItems from '@theme/DocSidebar/Desktop/Items';
import styles from './styles.module.css';

export default function DocSidebarDesktop({ path, sidebar }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.selectorRow}>
        {/* <EnvSelector /> */}
      </div>
      <DocSidebarItems items={sidebar} activePath={path} />
    </div>
  );
}
