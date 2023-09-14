import { useState } from "react";
const AddTodo = ({ addtodo }) => {
  const [newtodo, setnewtodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newtodo.trim() !== "") {
      addtodo(newtodo);
      setnewtodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add todo"
        value={newtodo}
        onChange={(e) => {
          setnewtodo(e.target.value);
        }}
      />
    </form>
  );
};

export default AddTodo;
