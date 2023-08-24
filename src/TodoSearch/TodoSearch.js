import React from "react";
import "./TodoSearch.css";
import { TodoContex } from "../Contexs/TodoContex";

function TodoSearch() {
  const { searchValue, setSearchValue } =
    React.useContext(TodoContex);
  return (
    <input
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      value={searchValue}
      className='todoSearch'
      placeholder='Find To-Do note'
    ></input>
  );
}

export { TodoSearch };
