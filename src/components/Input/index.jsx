import React from 'react';
import styles from './input.module.scss';

const Input = ({ value, onChange }) => {
  return (
    <div>
      <label className={styles.label}>Titulo</label>
      <input
        className={styles.input}
        placeholder='Digite'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
