import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const TodoContex = React.createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage("todos", []);
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
    <TodoContex.Provider
      value={{
        complitedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completedTodo,
        deleteTodo,
        loading,
        error,
      }}
    >
      {children}
    </TodoContex.Provider>
  );
}

export { TodoContex, TodoProvider };
