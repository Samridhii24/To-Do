// AddTodoForm.js
import React, { useState } from 'react';
import './AddTodoForm.css'; // Import CSS file for styling

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
