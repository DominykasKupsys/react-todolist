import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  handleCheck,
  handleDelete,
  handleEdit,
  todoitem,
  addExp,
  progressbar,
}) {
  return (
    <div>
      <ul className="TodoList">
        {todoitem.length === 0 && "No todos were added"}
        {todoitem.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            addExp={addExp}
            progressbar={progressbar}
            handleEdit={handleEdit}
            todocount={todoitem.length}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
