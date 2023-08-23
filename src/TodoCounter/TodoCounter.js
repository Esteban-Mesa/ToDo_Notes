import React from "react";
import { TodoContex } from "../Contexs/TodoContex";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, complitedTodos } =
    React.useContext(TodoContex);
  const text = () => {
    if (totalTodos === 0) {
      return `No To-Dos, no notes`;
    }

    if (totalTodos === complitedTodos) {
      return `${complitedTodos} out of ${totalTodos}, take a break`;
    }

    return `You have completed ${complitedTodos} out of ${totalTodos} To-Do notes`;
  };

  return (
    <h1 className='todoCounter shadow-wall'>{text()}</h1>
  );
}

export { TodoCounter };
