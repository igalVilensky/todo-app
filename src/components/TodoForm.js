import React, { useState } from "react";
/* import { v4 as uuidv4 } from "uuid"; */
function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
      ></input>
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
