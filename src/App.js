import { useState, useRef} from 'react'
import TodoList from './TodoList'
import{ v4 as uuidv4} from "uuid"

//src:App→TodoList元件+Task元件
function App() {
const[tasks,setTasks] = useState([])// useState([{id:1, name:"Task1", completed:false}])初始值
const taskNameRef = useRef();

//ADD TASK 增加待辦事項的函式
const handleAddTask = () =>{
  //console.log(taskNameRef.current.value);
  const name = taskNameRef.current.value;
  
  if(name === "") return;//空白輸入不往下執行
  setTasks((prevTasks)=>{
    return [
      ...prevTasks,
      {id: uuidv4(), 
      name: name, 
      completed: false}
    ];
  });
  taskNameRef.current.value = null;
}
//UPDATE TASK 待辦事項完成打勾的函式
const toggleTask = (id) => {
  const newTasks = [...tasks];
  const task = newTasks.find((task) => task.id === id);
  task.completed = !task.completed;
  setTasks(newTasks);
};
//DELETE TASK 刪除打勾待辦事項的函式
const handleClear = () => {
  const newTasks = tasks.filter((task) => !task.completed);
  setTasks(newTasks);
};
//Layout
  return (
    <>   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hiphop200199/Atmos.CSS@main/Atmos.css"/>
    <div className='tech-container'>
        <div className='tech-header'>  
            <h1 className='tech-h1'>To-do List</h1>
        </div>
        <div className='tech-main'>
          <div className='tech-form'>
            <input className='tech-input-text' type="text" ref={taskNameRef} 
            placeholder="What needs to be done?"></input>
            <button className='tech-button' onClick={handleAddTask}>Add task</button>
            <p className='tech-p'>Check the task if it done</p>
            <TodoList tasks = {tasks} toggleTask={toggleTask}/>
          </div>
          <div>Task remain :{tasks.filter((task) => !task.completed).length}</div>
          <div><button className='tech-button' onClick={handleClear} >Task completed</button></div>
        </div>
        <div className='tech-footer'></div>
    </div>
    </>
  );
}

export default App;