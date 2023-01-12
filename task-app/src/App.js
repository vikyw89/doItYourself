import styles from './App.module.css'
import React, { useState } from 'react';
import { Overview } from './components/Overview';
import { InputForm } from './components/InputForm';


function App() {
  const [tasks, setTasks] = useState([])

  return (
  <div className={styles.container}>
    <InputForm tasks={tasks} setTasks={setTasks}/>
    <Overview tasks={tasks} setTasks={setTasks}/>
  </div>
  );
}

export default App;
