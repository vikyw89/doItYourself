import styles from './TaskCard.module.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TaskCard = (props) => {
    const { tasks, setTasks } = props;
    const { task, index} = props
    const [ isEditing, setIsEditing ] = useState(false)
  
    useEffect(()=>{
        if (isEditing === true) {
            document.querySelector(`.${CSS.escape(styles.container)} > input[data-key="${task.id}"]`).value = task.text
            document.querySelector(`.${CSS.escape(styles.container)} > input[data-key="${task.id}"]`).focus()
        }
    },[isEditing, task.id, task.text])
  
    const handleClickDelete = () => {
      setTasks(tasks.filter(item=>{
        return item.id !== task.id
      }))
    }
    const handleClickSave = () => {
      const inputValue = document.querySelector(`.${CSS.escape(styles.container)} > input[data-key="${task.id}"]`).value
      setTasks(tasks.map(item=>{
        if (item.id === task.id) {
          item.text = inputValue
        }
        return item
      }))
      setIsEditing(false)
    }
  
    const handleClickEdit = (e) => {
      setIsEditing(true)
    }
  
    const handleKeySave = (e) => {
      if (e.key === 'Enter') {
        handleClickSave()
      }
    }
  
    return (
    <>
      <li className={styles.container}>
        <span>{index}.</span>
        {!isEditing 
          ? (<>
              <span data-key={task.id}>{task.text}</span>
              <FontAwesomeIcon icon={solid('pen-to-square')} onClick={handleClickEdit} className={styles.edit}/>
            </>) 
          : (<>
              <input data-key={task.id} onKeyDown={handleKeySave}/>
              <FontAwesomeIcon icon={regular('floppy-disk')} onClick={handleClickSave} className={styles.edit}/>
            </>)
        }
        <FontAwesomeIcon icon={regular('trash-can')} onClick={handleClickDelete} className={styles.delete}/>
      </li>
    </>
    )
}

export { TaskCard }