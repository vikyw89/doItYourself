import styles from './InputForm.module.css'
import { useEffect } from "react";
import uniqid from "uniqid";

const InputForm = (props) => {
    const { tasks, setTasks } = props

    // effects
    useEffect(()=>{
      setTimeout(()=>{
        document.querySelector(`.${styles.container} > input`).focus()
      },0)
    },[tasks])
  
    // events
    const handleSubmit= (e) => {
      e.preventDefault()
      setTasks(tasks.concat(
        {
          text:document.querySelector(`.${styles.container} > input`).value,
          id:uniqid()
        }))
        document.querySelector(`.${styles.container} > input`).value = ''
    }
  
    return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <label htmlFor="taskInput">Enter task : </label>
        <input type="text" id="taskInput" placeholder="input task here..."/>
        <button type="submit">
          Add Task
        </button>
      </form>
    )
}

export { InputForm }