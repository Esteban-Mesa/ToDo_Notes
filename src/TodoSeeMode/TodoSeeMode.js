import {
  BsBookFill,
  BsBookHalf,
  BsBook,
} from "react-icons/bs";
import "./TodoSeeMode.css";

function TodoFilter({ changeView, seeMode }) {
  const iconSeeMode = {
    all: <BsBookHalf />,
    pending: <BsBook />,
    complete: <BsBookFill />,
  };

  return (
    <button
      className='see-mode second-btn shadow-wall'
      onClick={changeView}
    >
      {iconSeeMode[seeMode]}
    </button>
  );
}

export { TodoFilter };
