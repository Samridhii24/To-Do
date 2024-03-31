// TodoItem.js
import React from 'react';
import './TodoItem.css'; // Import CSS file for styling

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
    </li>
  );
}

export default TodoItem;
