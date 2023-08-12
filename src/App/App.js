import React from "react";
import { AppUI } from "./AppUI";

import { TodoProvider } from "../Contexs/TodoContex";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
