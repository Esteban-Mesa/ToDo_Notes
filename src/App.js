import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./app.css";

function App() {
  return (
    <>
      <div className="App">
        <TodoCounter completed={14} total={25} />
        <TodoSearch />
        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>

        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
