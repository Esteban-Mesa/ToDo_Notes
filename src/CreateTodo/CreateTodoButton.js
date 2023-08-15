import React from "react";
import { BsPencilFill } from "react-icons/bs";
import "./createTodoButton.css";

function CreateTodoButton({ open }) {
  return (
    <button
      className='createTodo main-btn shadow-wall'
      onClick={open}
    >
      <BsPencilFill />
    </button>
  );
}

export { CreateTodoButton };
