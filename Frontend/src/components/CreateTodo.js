import React, { useState } from "react";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        alert("Todo added");
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo");
      });
  };

  return (
    <div className="bg-blue-800 p-4 rounded-md">
      <input
        className="m-2 p-2 mt-4 bg-blue-300 text-white rounded-md"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        className="m-2 p-2 bg-blue-300 text-white rounded-md"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        className="m-2 p-2 bg-white text-blue-800 rounded-md shadow-md hover:bg-blue-100"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};
