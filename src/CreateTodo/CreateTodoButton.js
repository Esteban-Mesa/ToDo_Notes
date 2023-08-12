import React from "react";
import "./createTodoButton.css";

function CreateTodoButton({ open }) {
  return (
    <button className='createTodo' onClick={open}>
      ➕
    </button>
  );
}

export { CreateTodoButton };
