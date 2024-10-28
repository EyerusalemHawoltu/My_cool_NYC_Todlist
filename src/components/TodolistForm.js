// src/components/TodolistForm.js
import React, { useState } from "react";

function TodolistForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [desiredLocation, setDesiredLocation] = useState(initialData.desiredLocation || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, desiredLocation });
    setTitle("");
    setDescription("");
    setDesiredLocation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Desired Spot coordinate"
        value={desiredLocation}
        onChange={(e) => setDesiredLocation(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodolistForm;
