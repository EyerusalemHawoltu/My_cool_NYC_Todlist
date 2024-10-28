// src/components/App.js
import React, { useState } from "react";
import TodolistForm from "./TodolistForm";
import Todolist from "./TodoList";
import LibraryDropdown from "./LibraryDropdown";
import useLocalStorage from "../hooks/useLocalStorage";

const OPENROUTESERVICE_API_KEY = process.env.REACT_APP_OPENROUTESERVICE_API_KEY;

// Placeholder tasks to display initially
const placeholderTasks = [
  { id: 1, title: "My task 1", description: "Local Library 1", distance: "0", duration: "0" },
  { id: 2, title: "My task 2", description: "Local Library 2", distance: "0", duration: "0" },
];

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [editingTodo, setEditingTodo] = useState(null);
  const [selectedLibrary, setSelectedLibrary] = useState("");

  const getDistance = (origin, destination) => {
    return fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${OPENROUTESERVICE_API_KEY}&start=${origin}&end=${destination}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const distance = (data.features[0].properties.segments[0].distance / 1000).toFixed(2) + " km";
          const duration = (data.features[0].properties.segments[0].duration / 60).toFixed(2) + " mins";
          return { distance, duration };
        }
        return { distance: "N/A", duration: "N/A" };
      })
      .catch((error) => {
        console.error("Error fetching distance:", error);
        return { distance: "N/A", duration: "N/A" };
      });
  };

  const handleFormSubmit = async (data) => {
    const destination = selectedLibrary || data.desiredLocation;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const origin = `${position.coords.longitude},${position.coords.latitude}`;
        const distanceData = await getDistance(origin, destination);

        const newTodo = {
          ...data,
          ...distanceData,
          id: Date.now(),
        };
        setTodos([newTodo, ...todos]);
        setShowForm(false);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h1>To-Do List with Distance</h1>

      <LibraryDropdown
        onSelect={(value) => {
          setSelectedLibrary(value);
          console.log("Selected Library Coordinates:", value);
        }}
      />

      {selectedLibrary && (
        <p style={{ position: "absolute", right: "20px", top: "60px" }}>
          Selected Library Coordinates: {selectedLibrary}
        </p>
      )}

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Task"}
      </button>

      {showForm && (
        <TodolistForm onSubmit={handleFormSubmit} initialData={editingTodo || {}} />
      )}

      {}
      <Todolist
        todos={todos.length > 0 ? todos : placeholderTasks}
        onEdit={setEditingTodo}
        onDelete={(id) => setTodos(todos.filter(todo => todo.id !== id))}
        isPlaceholder={todos.length === 0} 
      />
    </div>
  );
};

export default App;
