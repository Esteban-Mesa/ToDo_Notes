import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const seeStates = ["all", "pending", "complete"];

const TodoContex = React.createContext();

function TodoProvider({ children }) {
  const {
    item,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [see, setSee] = React.useState(seeStates[0]);

  const todos = item.map((todo) => {
    if (todo.key) {
      return todo;
    } else {
      return { key: `${Math.random()}`, ...todo };
    }
  });

  // derivate states

  const complitedTodos = todos.filter(
    (todo) => !!todo.completed,
  ).length;
  const totalTodos = todos.length;

  const seeTodosMode = () => {
    if (see === seeStates[0]) {
      return todos;
    }

    if (see === seeStates[1]) {
      return todos.filter(
        (todo) => todo.completed === false,
      );
    }

    if (see === seeStates[2]) {
      return todos.filter(
        (todo) => todo.completed === true,
      );
    }
  };

  const chageSeeMode = () => {
    const limit = seeStates.length;
    const index = seeStates.indexOf(see);

    let nextIndex = index === limit - 1 ? 0 : index + 1;

    setSee(seeStates[nextIndex]);
  };

  const searchTodos = seeTodosMode().filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  // functions
  const addTodo = (text, color) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false, color });
    saveTodos(newTodos);
  };

  const completedTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.key === key,
    );
    newTodos[todoIndex].completed =
      !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.key === key,
    );
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
        openModal,
        setOpenModal,
        addTodo,
        see,
        chageSeeMode,
      }}
    >
      {children}
    </TodoContex.Provider>
  );
}

export { TodoContex, TodoProvider };
