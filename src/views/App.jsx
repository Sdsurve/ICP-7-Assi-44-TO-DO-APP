import { useState, useEffect } from 'react';
import './App.css';
import logo from './to-do-list.png'
import add from './add.png'
import toast, { Toaster } from "react-hot-toast";
import ToDoCards from './../components/ToDoCards/ToDoCards';
import swal from 'sweetalert2'; 

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  useEffect(() => {
    if (todoList.length === 0) return;
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function deleteItem(index) {
    swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this task!",
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      }
      const newTodoList = todoList.filter((item, i) => i !== index);
      setTodoList(newTodoList);
    });
  }

  return (
    <>
      <div className='Main-container'>
        <img height={'50px'} src={logo}/>
        <h1 className='App-heading'>TO DO APP</h1>
        <div className='To-do-list-container'>
          {todoList.map((todoItem, i) => {
            const { task, category } = todoItem;
            return <ToDoCards 
              key={i} 
              index={i}
              task={task}
              category={category} 
              deleteItem={deleteItem} />;
          })}
          {todoList.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              No task to show, please add new Task
            </p>
          ) : null}
        </div>
        <div className='input-container'>
          <select 
            name="category" 
            id="category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a Category</option>
            <option value="Personal">Personal</option>
            <option value="Learning">Learning</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
            <option value="Other">Other</option>
          </select>
          <input 
            className='input-field' 
            placeholder='Add Your Task...' 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
            type='text' 
          />
        </div>
        <button className='add-button' onClick={() => {
          if (newTask === "") {
            toast.error('Task cannot be empty!');
            return;
          }
          if (category === "") {
            toast.error('Please select a category!');
            return;
          }
          setTodoList([...todoList, { task: newTask, category }]);
          setNewTask("");
          setCategory("");
          toast.success("Task added successfully!");
        }}>
          <span><img className='add-icon' src={add} alt="Add" /> ADD </span>
        </button>
      </div>
      <Toaster position="center" />
    </>
  );
}

export default App;
