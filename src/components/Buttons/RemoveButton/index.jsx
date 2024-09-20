import styles from './button.module.scss';

const RemoveButton = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default RemoveButton;
