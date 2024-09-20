import React from 'react';
import styles from './input.module.scss';

const Input = () => {
  return (
    <div>
      <label className={styles.label}>Titulo</label>
      <input className={styles.input} placeholder='Digite' />
    </div>
  );
};

export default Input;
