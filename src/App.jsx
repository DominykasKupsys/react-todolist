import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css"
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  let todo_id = uuidv4();

  function addTodo(title) {
    /**
     * naudodami ... operatorių mes sukuriame naują array į kurį idedame naują objektą
     */
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        title,
        id: todo_id,
        completed: false,
      },
    ]);
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
      <h1>Add your todos!</h1>
      <div className="Wrapper">
      <NewTodoForm addTodo={addTodo}/>
      <TodoList todoitem={todos} handleDelete={handleDelete} handleCheck={handleCheck}/>
      </div>
    </>
  );
}

export default App;
