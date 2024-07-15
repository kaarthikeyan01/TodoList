import React, { useState, useEffect } from 'react';

export const Todo = ({ todos = [] }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  const handleComplete = (id) => {
    setTodoList(prevTodoList =>
      prevTodoList.map(todo =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      {todoList.map((todo) => (
        <div key={todo._id} className="p-4 border rounded shadow-sm">
          <h4 className="text-lg font-semibold">{todo.title}</h4>
          <p className="text-gray-600">{todo.description}</p>
          <button
            onClick={() => handleComplete(todo._id)}
            className={`mt-2 px-4 py-2 rounded ${
              todo.completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {todo.completed ? "Completed" : "Mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};
