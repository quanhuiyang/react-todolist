import React from 'react'
import Task from './Task'

const TodoList = ({tasks, toggleTask}) => {
return tasks.map( (task) => 
<Task task={task} key={task.id} 
toggleTask={toggleTask}/>
)
}

export default TodoList