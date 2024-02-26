import React from "react";
import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function PreventReload(e) {
    e.preventDefault();

    if (value === "") {
      return;
    }
    addTodo(value);

    setValue("");
  }

  return (
    <form className="form" onSubmit={PreventReload}>
      <input
        className="input"
        value={value}
        type="text"
        id="form"
        placeholder="task"
        onChange={handleChange}
      ></input>
      <button className="submit_btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default NewTodoForm;
