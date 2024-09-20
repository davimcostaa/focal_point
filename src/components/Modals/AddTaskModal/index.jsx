import Button from '@/components/Buttons/AddButton';
import CancelButton from '@/components/Buttons/CancelButton';
import Input from '@/components/Input';
import React, { useState } from 'react';
import styles from './addtaskmodal.module.scss';

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [task, setTask] = useState('');

  if (!isOpen) return null;

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(task);
    onAdd(task);
    setTask('');
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Nova tarefa</h2>
        <form onSubmit={handleAdd}>
          <Input value={task} onChange={(e) => setTask(e.target.value)} />
        </form>

        <div className={styles.buttons}>
          <CancelButton name='Cancelar' onClick={onClose} />
          <Button name='Adicionar' onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
