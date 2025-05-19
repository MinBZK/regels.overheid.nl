// File: src/theme/AnnouncementBar/index.tsx
import React from 'react';
import styles from './styles.module.css';

export interface AnnouncementBarProps {
  // You can define props if needed
}

function AnnouncementBar(props: AnnouncementBarProps): React.ReactElement {
  return (
    <div className={styles.announcementBar} role="banner">
      <div className={styles.announcementBarContent}>
        🚧 This documentation is a work in progress 🚧
      </div>
    </div>
  );
}

export default AnnouncementBar;