import React from "react"


function TodoBoard(props){

    return(
        <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => props.toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => props.removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    )
}

export default TodoBoard