// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const todos = [];

app.get("/api/todos", (req, res) => {
  console.log("recieved backend requests for api/todos");
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const newTodo = {
    id: Date.now(),
    text,
  };

  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
