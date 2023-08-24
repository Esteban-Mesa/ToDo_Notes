import React from "react";
import { TodoContex } from "../Contexs/TodoContex";
import { SelectColor } from "./SelectColor";
import "./CreatorTodos.css";

const PostItColor = {
  white: "#fef3c0",
  pink: "#f5a097",
  aquamarine: "#92dcba",
  blue: "#b9bffb",
  green: "#d6f264",
  yellow: "#ffd541",
};

function CreatorTodos() {
  const { setOpenModal, addTodo } =
    React.useContext(TodoContex);

  const [newTodoValue, setNewTodoValue] =
    React.useState("");

  const [currentColor, setCurrentColor] = React.useState(
    PostItColor.white,
  );

  const closedModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue, currentColor);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const changeColor = (eve) => {
    const newColor = eve.target.id;

    setCurrentColor(newColor);
  };

  return (
    <form className='creator-container' onSubmit={onSubmit}>
      <label className='label'>Create new To-Do note</label>
      <textarea
        style={{ backgroundColor: currentColor }}
        className='writer shadow-corkboard'
        placeholder='Write here'
        value={newTodoValue}
        onChange={onChange}
        required
      ></textarea>

      <div className='colors-container'>
        <SelectColor
          idColor={PostItColor.white}
          itIsCurrentColor={currentColor}
          OnThisClick={(event) => {
            changeColor(event);
          }}
        />
        <SelectColor
          idColor={PostItColor.pink}
          itIsCurrentColor={currentColor}
          OnThisClick={(event) => {
            changeColor(event);
          }}
        />
        <SelectColor
          idColor={PostItColor.aquamarine}
          itIsCurrentColor={currentColor}
          OnThisClick={(event) => {
            changeColor(event);
          }}
        />
        <SelectColor
          idColor={PostItColor.blue}
          itIsCurrentColor={currentColor}
          OnThisClick={(event) => {
            changeColor(event);
          }}
        />
        <SelectColor
          idColor={PostItColor.green}
          itIsCurrentColor={currentColor}
          OnThisClick={(event) => {
            changeColor(event);
          }}
        />
        <SelectColor
          idColor={PostItColor.yellow}
          itIsCurrentColor={currentColor}
          OnThisClick={(event) => {
            changeColor(event);
          }}
        />
      </div>

      <div className='btn-container'>
        <button
          className='btn btn--cancel shadow-corkboard'
          type='button'
          onClick={closedModal}
        >
          Cancel
        </button>
        <button
          className='btn btn--create shadow-corkboard'
          type='submit'
        >
          Create
        </button>
      </div>
    </form>
  );
}

export { CreatorTodos };
