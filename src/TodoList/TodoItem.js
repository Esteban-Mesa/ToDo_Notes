import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  console.log(props.color);

  return (
    <li
      style={{ backgroundColor: props.color }}
      className={`todoItem ${
        props.completed ? "todoItem--complited" : ""
      }`}
    >
      <p>{props.text}</p>
      <div className='todoItem__butonContainer'>
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
