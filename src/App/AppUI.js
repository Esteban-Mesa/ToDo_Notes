import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoList/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { CreatorTodos } from "../CreateTodoButton/CreatorTodos";
import { LoadingTodos } from "../TodoList/LoadingTodos";
import { ErrorTodos } from "../TodoList/ErrorTodos";
import { EmptyTodos } from "../TodoList/EmptyTodos";
import { Modal } from "./Modal";
import { TodoContex, TodoProvider } from "../Contexs/TodoContex";
import "./app.css";

function AppUI() {
  return (
    <>
      <TodoProvider>
        <div className="App">
          <TodoCounter />
          <TodoSearch />

          <TodoContex.Consumer>
            {({
              loading,
              error,
              totalTodos,
              searchTodos,
              completedTodo,
              deleteTodo,
              openModal,
              setOpenModal,
            }) => (
              <>
                <TodoList>
                  {loading ? <LoadingTodos /> : null}
                  {error ? <ErrorTodos /> : null}
                  {totalTodos === 0 && !loading ? <EmptyTodos /> : null}

                  {searchTodos.map((todo) => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplite={() => completedTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}
                </TodoList>
                <CreateTodoButton />
                {openModal ? (
                  <Modal>
                    Agregar Todos <CreatorTodos />
                  </Modal>
                ) : null}
              </>
            )}
          </TodoContex.Consumer>
          <p>
            {/* borrar eventuralmente */}
            Como proyecto fina creare esto con estetica de un tablero de misiones rpg en pixel art
          </p>
        </div>
      </TodoProvider>
    </>
  );
}

export { AppUI };
