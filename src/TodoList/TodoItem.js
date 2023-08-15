import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineReload,
} from "react-icons/ai";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li
      style={{ backgroundColor: props.color }}
      className={`todoItem ${
        props.completed
          ? "todoItem--complited"
          : "shadow-corkboard"
      } `}
    >
      <p>{props.text}</p>
      <div className='todoItem__butonContainer'>
        <div
          onClick={props.onComplite}
          className='todoItem__buton todoItem__buton--check'
        >
          {props.completed ? (
            <AiOutlineReload />
          ) : (
            <AiOutlineCheckCircle />
          )}
        </div>
        <div
          onClick={props.onDelete}
          className='todoItem__buton todoItem__buton--detele'
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
