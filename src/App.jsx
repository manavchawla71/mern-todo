import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // console.log("Fetching todos...");
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        setTodos(data);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = () => {
    if (!newTodo.trim()) {
      return;
    }

    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  return (
    <div className="App">
      <h1>MERN Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
