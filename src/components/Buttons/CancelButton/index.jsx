import styles from './cancelButton.module.scss';

const CancelButton = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default CancelButton;
