import {
  BsBookFill,
  BsBookHalf,
  BsBook,
} from "react-icons/bs";
import "./TodoFilter.css";

function TodoFilter(changeView) {
  return (
    <button className="second-btn">
      <BsBookFill />
    </button>
  );
}

export { TodoFilter };
