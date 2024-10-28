// src/components/Todolist.js
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";

function Todolist({ todos, onEdit, onDelete, isPlaceholder }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            ...styles.card,
            backgroundColor: isPlaceholder ? "#f0f0f0" : "#fff",
            color: isPlaceholder ? "#999" : "#333",
            opacity: isPlaceholder ? 0.7 : 1,
          }}
        >
          {/* making the place holder fading */}
          <h3 style={{ ...styles.title, color: isPlaceholder ? "#888" : "#333" }}>
            {todo.title}
          </h3>
          <p style={{ ...styles.description, color: isPlaceholder ? "#aaa" : "#666" }}>
            {todo.description}
          </p>
          <p style={styles.detail}>Distance from current location: {todo.distance || "N/A"}</p>
          <p style={styles.detail}>Time it takes from current location: {todo.duration || "N/A"}</p>
          <div style={styles.buttonContainer}>
            {!isPlaceholder && (
              <>
                <button onClick={() => onEdit(todo)} style={styles.button}>
                  {/* from the "react-icons/fa"; */}
                  <FaEdit style={styles.icon} /> 
                </button>
                <button onClick={() => onDelete(todo.id)} style={styles.button}>
                   {/* from the "react-icons/ri"; */}
                  <RiDeleteBack2Line style={styles.icon} />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
// writing a bit of styling(chatgpt)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f7f7f7",
  },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    width: "90%",
    maxWidth: "500px",
    transition: "transform 0.2s",
  },
  title: {
    fontSize: "1.5rem",
    color: "#333",
    fontWeight: "bold",
  },
  description: {
    color: "#666",
    margin: "10px 0",
    fontSize: "1rem",
  },
  detail: {
    color: "#999",
    fontSize: "0.9rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    margin: "0 5px",
    transition: "color 0.2s",
  },
  icon: {
    fontSize: "1.2rem",
    color: "#007bff",
  },
};

export default Todolist;
