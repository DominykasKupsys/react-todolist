import React from "react";

function TodoItem({ id, completed, title, handleCheck, handleDelete, addExp }) {
  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        id="checklist"
        checked={completed}
        onChange={(e) => {
          handleCheck(id, e.target.value);
          addExp(id);
        }}
      ></input>
      <label htmlFor="checklist">{title}</label>
      <button
        className="delete_btn"
        onClick={(e) => {
          handleDelete(id, e.target.value);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default TodoItem;
