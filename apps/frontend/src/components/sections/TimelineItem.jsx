import React from 'react';
import styles from '@/styles/Home/timeline.module.css';

const TimelineItem = ({ year, title, text }) => (
  <>
    <div className={styles.timelineYear}>{year}</div>
    <div className={styles.timelineContent}>
      <h3 className={styles.timelineTitle}>{title}</h3>
      <p className={styles.timelineText}>{text}</p>
    </div>
  </>
);

export default TimelineItem;
