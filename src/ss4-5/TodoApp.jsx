import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  // Load dữ liệu từ localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Lưu dữ liệu vào localStorage mỗi lần todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    // Validate
    if (!newTodo.trim()) {
      setError('Tên công việc không được để trống');
      return;
    }

    const isDuplicate = todos.some(
      (todo) => todo.name.toLowerCase() === newTodo.trim().toLowerCase()
    );
    if (isDuplicate) {
      setError('Tên công việc đã tồn tại');
      return;
    }

    // Thêm công việc
    const newTask = {
      id: Date.now(),
      name: newTodo.trim(),
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
    setError('');
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xoá công việc này không?');
    if (confirmDelete) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Quản lý công việc</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập tên công việc..."
          style={{ padding: '8px', width: '70%' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '8px 16px', marginLeft: '8px' }}>
          Thêm
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.name}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
