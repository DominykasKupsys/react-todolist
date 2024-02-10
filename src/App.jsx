import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  let todo_id = uuidv4();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function PreventReload(e) {
    e.preventDefault();
    /**
     * naudodami ... operatorių mes sukuriame naują array į kurį idedame naują objektą
     */
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        title: value,
        id: todo_id,
        completed: false,
      },
    ]);

    setValue("");
  }
  /**
   * duodame todo item id
   * @param {*} id 
   * naudojame map, nes norime pakeisti array elementą. Kai todo.id === id mes gražiname iškleistą todo objectą, kuriame completed raktas
   * yra pakeistas atvirkščių jam buvusiam ir tada mes gražiname pakeistą objektą vėl į array.
   */
  function handleCheck(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }
  /**
   * duodame todo item id
   * @param {*} id 
   * we write todo.id !== id and not todo.id === id because the latter removes all todos except the one who matches the given id 
   * while the other function does the opposite, it keeps all todos except for one
   */
  function handleDelete(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id
      )
    );
  }

  return (
    <>
      <h1>Todo list</h1>
      <NewTodoForm handleChange={handleChange} PreventReload={PreventReload} value={value}/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id="checklist"
              checked={todo.completed}
              onChange={(e) => handleCheck(todo.id, e.target.value)}
            ></input>
            <label htmlFor="checklist" key={todo.id}>
              {todo.title}
            </label>
            <button onClick={(e) => handleDelete(todo.id, e.target.value)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
