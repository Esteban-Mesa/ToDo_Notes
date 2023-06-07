import "./TodoItem.css";

function TodoItem() {
  return (
    <li className="todoItem">
      <p>Llorar con la Llorona</p>
      <div className="todoItem__butonContainer">
        <samp className="todoItem__bouton">✔️</samp>
        <samp className="todoItem__bouton">❌</samp>
      </div>
    </li>
  );
}

export { TodoItem };
