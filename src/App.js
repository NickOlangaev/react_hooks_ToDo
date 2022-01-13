import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const initialState = [
    { id: 1, body: 'Task 1', isDone: false },
    { id: 2, body: 'Task 2', isDone: false },
    { id: 3, body: 'Task 3', isDone: false },
  ]
  const [todoData, setTodoData] = useState(initialState)

  const addTask = (taskBody) => {
    if (taskBody) {
      const newTask = {
        id: Date.now(),
        body: taskBody,
        isDone: false,
      }
      setTodoData([newTask, ...todoData])
    }
  }

  const removeTask = (taskId) => {
    setTodoData(todoData.filter(todo => todo.id !== taskId))
  }

  const toogleTaskPosition = (todo) => {
    const newTodoData = todoData.filter(item => item.id !== todo.id)
    todo.isDone ? newTodoData.push(todo) : newTodoData.unshift(todo);
    setTodoData(newTodoData)
  }

  const taskToogleDone = (taskId) => {
    const todo = todoData.find(item => item.id === taskId);
    todo.isDone = !todo.isDone;
    toogleTaskPosition(todo)
  }


  return (
    <div className="App">
      <h1>Your ToDo List</h1>
        <ToDoForm
          addTask={addTask} />
        <ToDoList
          todoData={todoData}
          removeTask={removeTask}
          taskToogleDone={taskToogleDone} />
    </div>
  );
}

export default App;
