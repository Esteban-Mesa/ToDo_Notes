import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

/* const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: true },
  { text: "LALALALALA", completed: false },
  { text: "Usar estados derivados", completed: true },
  { text: "Canción para la vida", completed: false },
];

localStorage.setItem("TODOS-SAVE_V1", JSON.stringify(defaultTodos));

localStorage.removeItem("TODOS-SAVE_V1");
 */

function App() {
  const [todos, saveTodos] = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = React.useState("");

  // derivate states
  const complitedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  // functions
  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      complitedTodos={complitedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
    ></AppUI>
  );
}

export default App;
