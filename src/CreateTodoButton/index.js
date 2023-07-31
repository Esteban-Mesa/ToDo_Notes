import React from "react";
import "./createTodoButton.css";
import { TodoContex } from "../Contexs/TodoContex";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContex);

  return (
    <button
      className="createTodo"
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      ➕
    </button>
  );
}

export { CreateTodoButton };
