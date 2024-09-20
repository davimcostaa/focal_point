import React from 'react';
import styles from './listItem.module.scss';

const ListItem = ({ task, complete, onRemove, onComplete }) => {
  return (
    <div className={styles.listItem}>
      <div
        className={styles.check}
        onClick={onComplete}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={
            complete ? './images/checkbox-checked.png' : './images/checkbox.png'
          }
          alt='Checkbox'
        />
        <span
          className={`${styles.task} ${complete ? styles.taskCompleted : ''}`}
        >
          {task}
        </span>
      </div>

      <img
        src='./images/trash-icon.png'
        alt='Delete'
        style={{ cursor: 'pointer' }}
        onClick={onRemove}
      />
    </div>
  );
};

export default ListItem;
