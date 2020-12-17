import React from 'react';
import styles from '../styles/grid-item.module.scss';

export default function GridItem(props) {
  return (
    <div className={[styles.container, props.class].join(' ')}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
