import React from 'react'

const Task = ({task, toggleTask}) => {
const handleTaskClick = () =>{toggleTask(task.id)}
return (
<div>
    <label>
    <input className='tech-input-checkbox' 
    type="checkbox" 
    checked={task.completed} 
    readOnly 
    onChange={handleTaskClick}/>
    </label>
    {task.name}
    </div>
)
}

export default Task