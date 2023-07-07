import { DeleteIcon } from "./DeleteIcon";
import { CompleteIcon } from "./CompleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`todoItem ${props.completed ? "todoItem--complited" : ""}`}>
      <p>{props.text}</p>
      <div className="todoItem__butonContainer">
        <div onClick={props.onComplite}>
          <CompleteIcon completed={props.completed} />
        </div>
        <div onClick={props.onDelete}>
          <DeleteIcon completed={props.completed} />
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
