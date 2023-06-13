import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      onChange={(event) => {
        setSearchValue(event.target.value);
        change(event);
      }}
      value={searchValue}
      className="todoSearch"
      placeholder="Cortar cebolla"
    ></input>
  );
}

function change(eve) {
  console.log(`esta escrito: [${eve.target.value}]`);
}

export { TodoSearch };
