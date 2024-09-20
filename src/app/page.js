'use client';
import Button from '@/components/Buttons/AddButton';
import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import AddTaskModal from '@/components/Modals/AddTaskModal';
import RemoveTaskModal from '@/components/Modals/RemoveTaskModal';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const [isModalAddOpen, setModalAppOpen] = useState(false);
  const [isModalRemoveOpen, setModalRemoveOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskToRemove, setTaskToRemove] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Add default tasks if no tasks are stored
    if (storedTasks.length === 0) {
      const defaultTasks = [
        { text: 'Fazer um bolo', completed: false },
        { text: 'Lavar as mãos', completed: false },
      ];
      setTasks(defaultTasks);
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    } else {
      setTasks(storedTasks);
    }
  }, []);

  const toggleModal = () => {
    setModalAppOpen(!isModalAddOpen);
  };

  const toggleRemoveModal = (task) => {
    setTaskToRemove(task);
    setModalRemoveOpen(!isModalRemoveOpen);
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setModalAppOpen(false);
  };

  const removeTask = () => {
    const updatedTasks = tasks.filter((task) => task.text !== taskToRemove);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setModalRemoveOpen(false);
  };

  const completeTask = (taskText) => {
    const updatedTasks = tasks.map((task) =>
      task.text === taskText ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.listContainer}>
          <h5>Suas tarefas de hoje</h5>

          <div className={styles.tasks}>
            {tasks.map(
              (task, index) =>
                !task.completed && (
                  <ListItem
                    key={index}
                    task={task.text}
                    complete={task.completed}
                    onRemove={() => toggleRemoveModal(task.text)}
                    onComplete={() => completeTask(task.text)}
                  />
                )
            )}
          </div>

          <h5>Tarefas finalizadas</h5>

          <div className={styles.tasks}>
            {tasks.map(
              (task, index) =>
                task.completed && (
                  <ListItem
                    key={index}
                    task={task.text}
                    complete={task.completed}
                    onRemove={() => toggleRemoveModal(task.text)}
                  />
                )
            )}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button name='Adicionar nova tarefa' onClick={toggleModal} />
        </div>
      </div>

      <AddTaskModal
        isOpen={isModalAddOpen}
        onClose={toggleModal}
        onAdd={addTask}
      />
      <RemoveTaskModal
        isOpen={isModalRemoveOpen}
        onClose={toggleRemoveModal}
        onConfirm={removeTask}
      />
    </>
  );
}
