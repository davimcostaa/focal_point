'use client';
import Button from '@/components/Buttons/AddButton';
import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import AddTaskModal from '@/components/Modals/AddTaskModal';
import RemoveTaskModal from '@/components/Modals/RemoveTaskModal';
import { useState } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const [isModalAddOpen, setModalAppOpen] = useState(false);
  const [isModalRemoveOpen, setModalRemoveOpen] = useState(false);

  const toggleModal = () => {
    setModalAppOpen(!isModalAddOpen);
  };

  const toggleRemoveModal = () => {
    setModalRemoveOpen(!isModalRemoveOpen);
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.listContainer}>
          <h5>Suas tarefas de hoje</h5>

          <div className={styles.tasks}>
            <ListItem task='Fazer um bolo' />
          </div>

          <h5>Tarefas finalizadas</h5>

          <div className={styles.tasks}>
            <ListItem task='Fazer um bolo' complete />
            <ListItem task='Fazer um bolo' complete />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            name='Adicionar nova tarefa'
            onClick={() => toggleRemoveModal()}
          />
        </div>
      </div>

      <AddTaskModal isOpen={isModalAddOpen} onClose={() => toggleModal()} />
      <RemoveTaskModal
        isOpen={isModalRemoveOpen}
        onClose={() => toggleRemoveModal()}
      />
    </>
  );
}
