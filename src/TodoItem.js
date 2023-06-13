import "./TodoItem.css";

function TodoItem({ completed, text }) {
  return (
    <li className={`todoItem ${completed ? "todoItem--complited" : ""}`}>
      <p>{text}</p>
      <div className="todoItem__butonContainer">
        <samp className="todoItem__bouton">✔️</samp>
        <samp className="todoItem__bouton">❌</samp>
      </div>
    </li>
  );
}

export { TodoItem };
