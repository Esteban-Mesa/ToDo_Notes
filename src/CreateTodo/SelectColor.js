import React from "react";
import "./SelectColor.css";

function SelectColor({
  thisColor,
  itIsCurrentColor,
  OnThisClick,
}) {
  return (
    <div
      onClick={OnThisClick}
      style={{ backgroundColor: thisColor }}
      className={`select-color shadow-corkboard ${
        itIsCurrentColor === thisColor ? "selected" : null
      }`}
    ></div>
  );
}

export { SelectColor };
