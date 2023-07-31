import React, { startTransition } from "react";
import { TodoContex } from "../Contexs/TodoContex";
import "./CreatorTodos.css";

function CreatorTodos() {
  const { setOpenModal, addTodo } = React.useContext(TodoContex);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const closedModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue);
    console.log(`el nuevo todo es: ${newTodoValue}`);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="creator-container" onSubmit={onSubmit}>
      <label className="label">Escribe un nievo TODO</label>
      <textarea
        className="writer"
        placeholder="Cortar Cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>

      <div className="btn-container">
        <button className="btn btn--cancel" onClick={closedModal}>
          Cancelar
        </button>
        <button className="btn btn--create" type="submit">
          Crear
        </button>
      </div>
    </form>
  );
}

export { CreatorTodos };
