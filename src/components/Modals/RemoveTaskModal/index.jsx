import Button from '@/components/Buttons/AddButton';
import CancelButton from '@/components/Buttons/CancelButton';
import RemoveButton from '@/components/Buttons/RemoveButton';
import Input from '@/components/Input';
import React from 'react';
import styles from './removetaskmodal.module.scss';

const RemoveTaskModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>

        <div className={styles.buttons}>
          <CancelButton name='Cancelar' onClick={onClose} />
          <RemoveButton name='Deletar' onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default RemoveTaskModal;
