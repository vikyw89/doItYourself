import './TaskCard.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TaskCard = (props) => {
    const { tasks, setTasks } = props;
    const { task, index} = props
    const [ isEditing, setIsEditing ] = useState(false)
  
    useEffect(()=>{
        setTimeout(()=>{
            if (isEditing === true) {
              document.querySelector(`.TaskCard > input[data-key="${task.id}"]`).value = task.text
              document.querySelector(`.TaskCard > input[data-key="${task.id}"]`).focus()
            }
        },0)
    })
  
    const handleClickDelete = () => {
      setTasks(tasks.filter(item=>{
        return item.id !== task.id
      }))
    }
    const handleClickSave = () => {
      const inputValue = document.querySelector(`.TaskCard > input[data-key="${task.id}"]`).value
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
      <li className="TaskCard">
        <span>{index}.</span>
        {!isEditing 
          ? (<>
              <span data-key={task.id}>{task.text}</span>
              <FontAwesomeIcon icon={solid('pen-to-square')} onClick={handleClickEdit} className="iconEdit"/>
            </>) 
          : (<>
              <input data-key={task.id} onKeyDown={handleKeySave}/>
              <FontAwesomeIcon icon={regular('floppy-disk')} onClick={handleClickSave} className="iconEdit"/>
            </>)
        }
        <FontAwesomeIcon icon={regular('trash-can')} onClick={handleClickDelete} className="iconDelete"/>
      </li>
    </>
    )
}

export { TaskCard }