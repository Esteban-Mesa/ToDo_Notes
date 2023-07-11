import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./app.css";

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
  const localTodos = localStorage.getItem("TODOS-SAVE_V1");

  let parsedTodos;

  if (!localTodos) {
    localStorage.setItem("TODOS-SAVE_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorage.getItem("TODOS-SAVE_V1"));
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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
  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS-SAVE_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

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
    <>
      <div className="App">
        <TodoCounter completed={complitedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplite={() => completedTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
        <p>
          {/* borrar eventuralmente */}
          Como proyecto fina creare esto con estetica de un tablero de misiones rpg en pixel art
        </p>
      </div>
    </>
  );
}

export default App;
