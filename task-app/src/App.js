import './App.css';
import React, { useState, useEffect } from 'react';
import uniqid from "uniqid";
import { Overview } from './components/Overview';


function App() {
  const [tasks, setTask] = useState([])
  const handleSubmit= (e) => {
    e.preventDefault()
    setTask(tasks.concat(
      {
        text:document.querySelector('#taskInput').value,
        id:uniqid()
      }))
  }

  return (
  <div className='App'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskInput">Enter task</label>
      <input type="text" id="taskInput"/>
      <button type="submit">
        Add Task
      </button>
    </form>
    <Overview tasks={tasks}/>
  </div>
  );
}

export default App;
