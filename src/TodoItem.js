import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`todoItem ${props.completed ? "todoItem--complited" : ""}`}>
      <p>{props.text}</p>
      <div className="todoItem__butonContainer">
        <samp className="todoItem__bouton" onClick={props.onComplite}>
          ✔️
        </samp>
        <samp className="todoItem__bouton" onClick={props.onDelete}>
          ❌
        </samp>
      </div>
    </li>
  );
}

export { TodoItem };
