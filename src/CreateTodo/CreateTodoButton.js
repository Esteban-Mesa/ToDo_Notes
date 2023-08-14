import React from "react";
import { BsPencilFill } from "react-icons/bs";
import "./createTodoButton.css";

function CreateTodoButton({ open }) {
  return (
    <button
      className='createTodo panel-led shadow-wall'
      onClick={open}
    >
      <BsPencilFill className='icon' />
    </button>
  );
}

export { CreateTodoButton };
