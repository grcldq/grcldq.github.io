import React from 'react';
import styles from '../styles/grid-item.module.scss';

export default function GridItem(props) {
  return (
    <div
      className={[
        styles.container,
        props.isPadded ? 'padded' : 'padded-sides',
        props.class,
      ].join(' ')}
    >
      <div className={styles.title}>
        {props.icon}
        <h1>{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
}
