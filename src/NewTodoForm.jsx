import React from "react";

function NewTodoForm({PreventReload, handleChange, value}) {
  return (
    <form onSubmit={PreventReload}>
      <input
        value={value}
        type="text"
        id="form"
        placeholder="task"
        onChange={handleChange}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTodoForm;
