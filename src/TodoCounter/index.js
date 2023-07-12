import "./TodoCounter.css";
import React from "react";

function TodoCounter({ total, completed }) {
  const text = () => {
    if (total === 0) {
      return `No hay tareas, ¡agrega algunas!`;
    }

    if (total === completed) {
      return `${completed} de ${total}. Todas las fueron tareas completadas 🥳 descansa un poco`;
    }

    return `Has compltetado ${completed} de ${total} TODOS`;
  };

  return <h1 className="todoCounter">{text()}</h1>;
}

export { TodoCounter };
