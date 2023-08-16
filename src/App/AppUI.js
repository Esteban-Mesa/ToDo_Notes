import React from "react";
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
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { TodoContex } from "../Contexs/TodoContex";
import "./app.css";

function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    searchTodos,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    chageSeeMode,
  } = React.useContext(TodoContex);

  return (
    <>
      <div className='App'>
        <TodoCounter />
        <div className='corkboard shadow-wall'>
          <TodoSearch />
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
                  color={todo.color}
                  onComplite={() =>completedTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>

          {openModal ? (
            <Modal>
              <CreatorTodos />
            </Modal>
          ) : null}
        </div>

        <div className='main-btns-container'>
          <TodoFilter changeView={chageSeeMode} />
          <CreateTodoButton
            open={() => {
              setOpenModal(true);
            }}
          />
        </div>
      </div>
    </>
  );
}

export { AppUI };
