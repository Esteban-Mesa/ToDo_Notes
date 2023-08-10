import React, { startTransition } from "react";
import { TodoContex } from "../Contexs/TodoContex";
import "./CreatorTodos.css";

function CreatorTodos() {
  const { setOpenModal, addTodo } =
    React.useContext(TodoContex);
  const [newTodoValue, setNewTodoValue] =
    React.useState("");

  const closedModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className='creator-container' onSubmit={onSubmit}>
      <label className='label'>Escribe un nievo TODO</label>
      <textarea
        className='writer shadow-corkboard'
        placeholder='Cortar Cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}
        required
      ></textarea>

      <div className='colors-container'>
        <div>color 1</div>
        <div>color 2</div>
        <div>color 3</div>
        <div>color 4</div>
        <div>color 5</div>
        <div>color 6</div>
        <div>color 7</div>
        <div>color 8</div>
      </div>

      <div className='btn-container'>
        <button
          className='btn btn--cancel shadow-corkboard'
          onClick={closedModal}
        >
          Cancelar
        </button>
        <button
          className='btn btn--create shadow-corkboard'
          type='submit'
        >
          Crear
        </button>
      </div>
    </form>
  );
}

export { CreatorTodos };
