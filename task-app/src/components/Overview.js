import styles from './Overview.module.css';
import React from 'react';
import { TaskCard } from './TaskCard';

const Overview = (props) => {
  const { tasks } = props;
  return (
    <div className={styles.container}>
      <ul>
        {tasks.map((task, index) => {
          return <TaskCard key={task.id} index={index} task={task} {...props}/>
        })}
      </ul>
    </div>
  );
};

export { Overview }