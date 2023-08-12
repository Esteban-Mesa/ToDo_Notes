import React from "react";
import "./SelectColor.css";

function SelectColor({
  idColor,
  itIsCurrentColor,
  OnThisClick,
}) {
  return (
    <div
      id={idColor}
      onClick={OnThisClick}
      style={{ backgroundColor: idColor }}
      className={`select-color shadow-corkboard ${
        itIsCurrentColor === idColor ? "selected" : null
      }`}
    ></div>
  );
}

export { SelectColor };
