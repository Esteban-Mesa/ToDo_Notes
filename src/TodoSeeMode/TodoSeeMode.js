import {
  BsBookFill,
  BsBookHalf,
  BsBook,
} from "react-icons/bs";
import "./TodoSeeMode.css";

function TodoFilter({ changeView }) {
  return (
    <button className='second-btn' onClick={changeView}>
      <BsBookFill />
    </button>
  );
}

export { TodoFilter };
