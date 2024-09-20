import React from 'react';
import styles from './listItem.module.scss';

const ListItem = ({ task, complete }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.check}>
        {!complete ? (
          <img src='./images/checkbox.png' alt='Checkbox' />
        ) : (
          <img src='./images/checkbox-checked.png' alt='Checkbox' />
        )}

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
      />
    </div>
  );
};

export default ListItem;
