import Button from '@/components/Buttons/AddButton';
import CancelButton from '@/components/Buttons/CancelButton';
import Input from '@/components/Input';
import React from 'react';
import styles from './addtaskmodal.module.scss';

const AddTaskModal = ({ isOpen, onClose }) => {
  console.log(isOpen);
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Nova tarefa</h2>
        <form>
          <Input />
        </form>

        <div className={styles.buttons}>
          <CancelButton name='Cancelar' onClick={onClose} />
          <Button name='Adicionar' onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
