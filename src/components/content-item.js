import React from 'react';
import styles from '../styles/content-item.module.scss';

export default function ContentItem(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {props.icon}
        <h1>{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
}
