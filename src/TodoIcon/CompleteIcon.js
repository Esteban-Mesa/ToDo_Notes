import React from "react";
import { TodoIcon } from ".";

function CompleteIcon({ completed }) {
  return <TodoIcon type="check" color={completed ? "green" : "gray"} />;
}

export { CompleteIcon };
