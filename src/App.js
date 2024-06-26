// import { User } from "./User";
import { useState } from "react";

// working with State in react
function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }; 

  const deleteTask = (taskName) => {
     
  };


  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
     </div>
      <div className="list">
        {todoList.map((task) => {
          return <div>
            <h1>{task}</h1>
          <button onClick={deleteTask}>Delete</button>
          </div>
        })}
      </div>
      
    </div>
  );
}

export default App;
