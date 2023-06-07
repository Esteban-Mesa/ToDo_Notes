import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1 className="todoCounter">
      Has compltetado <strong>{completed}</strong> de <strong>{total}</strong> TODOS
    </h1>
  );
}

export { TodoCounter };
