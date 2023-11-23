import React, { useState, useEffect } from 'react';
import TodoBoard from './components/TodoBoard';

const App = () => {
  // State to manage the todo items
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return storedTodos;
  });

  // State to manage the input value for new todo
  const [newTodo, setNewTodo] = useState('');

  
  // Effect to save todos to local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if(todos.length === 0) setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      todos.map((todo)=> {
        if(todo !== newTodo){
          console.log("Sdfsdf");
          setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        }
        return 0;
      })
      setNewTodo('');
    }
    console.log(todos);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  addTodo();
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <form>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
          />
          <button type="submit" onClick={addTodo} >Add Todo</button>
        </form>
      </div>
      <TodoBoard todos={todos} toggleTodo ={toggleTodo} removeTodo={removeTodo}/>
    </div>
  );
};

export default App;