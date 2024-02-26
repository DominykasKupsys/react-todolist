import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import LevelUp from "./components/LevelUp";

function App() {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [requiredExp, setRequiredExp] = useState(100);
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
        exp_gotten: false,
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
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function addExp(id) {
    todos.map((todo) => {
      if (!todo.completed && !todo.exp_gotten) {
        setCurrentExp(currentExp + 10);
        setTodos((currentTodos) =>
          currentTodos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, exp_gotten: !todo.exp_gotten };
            }
            return todo;
          })
        );
      }
      return todo;
    });
  }

  if (currentExp === requiredExp) {
    setLevel((a) => a + 1);
    setCurrentExp(0);
    setRequiredExp((a) => a + 10);
  }

  return (
    <>
      <h1>Add your todos!</h1>
      <div className="Wrapper">
        <NewTodoForm addTodo={addTodo} />
        <TodoList
          todoitem={todos}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          addExp={addExp}
        />
        <LevelUp
          level={level}
          currentExp={currentExp}
          requiredExp={requiredExp}
        />
      </div>
    </>
  );
}

export default App;
