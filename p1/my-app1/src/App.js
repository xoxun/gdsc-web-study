import React, { useState, useEffect } from 'react';
import TodoBoard from './components/TodoBoard';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return storedTodos;
  });
  
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
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

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
          />
          <button type="submit" onClick={addTodo}>+</button>
        </form>
      </div>
      <TodoBoard todos={todos} toggleTodo ={toggleTodo} removeTodo={removeTodo}/>
    </div>
  );
};

export default App;