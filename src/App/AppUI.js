import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoList/TodoItem";
import { CreateTodoButton } from "../CreateTodo/CreateTodoButton";
import { CreatorTodos } from "../CreateTodo/CreatorTodos";
import { LoadingTodos } from "../TodoList/LoadingTodos";
import { ErrorTodos } from "../TodoList/ErrorTodos";
import { EmptyTodos } from "../TodoList/EmptyTodos";
import { Modal } from "./Modal";
import {
  TodoContex,
  TodoProvider,
} from "../Contexs/TodoContex";
import "./app.css";

function AppUI() {
  return (
    <TodoProvider>
      <>
        <div className='App'>
          <TodoCounter />
          <div className='corkboard'>
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
                  {loading ? <LoadingTodos /> : null}
                  {error ? <ErrorTodos /> : null}
                  {totalTodos === 0 && !loading ? (
                    <EmptyTodos />
                  ) : null}

                  <div className='scroll-y full-w'>
                    <TodoList>
                      {searchTodos.map((todo) => (
                        <TodoItem
                          key={todo.text}
                          text={todo.text}
                          completed={todo.completed}
                          onComplite={() =>
                            completedTodo(todo.text)
                          }
                          onDelete={() =>
                            deleteTodo(todo.text)
                          }
                        />
                      ))}
                    </TodoList>
                  </div>

                  {openModal ? (
                    <Modal>
                      Agregar Todos <CreatorTodos />
                    </Modal>
                  ) : null}
                </>
              )}
            </TodoContex.Consumer>
          </div>
          <CreateTodoButton />
        </div>
      </>
    </TodoProvider>
  );
}

export { AppUI };
