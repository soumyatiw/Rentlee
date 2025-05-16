// src/components/GlobalLoader.jsx
'use client';

import styles from './GlobalLoader.module.css';

export default function GlobalLoader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
}
