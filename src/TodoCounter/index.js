import { TodoContex } from "../Contexs/TodoContex";
import "./TodoCounter.css";
import React from "react";

function TodoCounter() {
  const { totalTodos, complitedTodos } = React.useContext(TodoContex);
  const text = () => {
    if (totalTodos === 0) {
      return `No hay tareas, ¡agrega algunas!`;
    }

    if (totalTodos === complitedTodos) {
      return `${complitedTodos} de ${totalTodos}. Todas las fueron tareas completadas 🥳 descansa un poco`;
    }

    return `Has compltetado ${complitedTodos} de ${totalTodos} TODOS`;
  };

  return <h1 className="todoCounter">{text()}</h1>;
}

export { TodoCounter };
