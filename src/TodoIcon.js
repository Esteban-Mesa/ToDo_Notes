import { ReactComponent as CkeckSVG } from "./icons/done.svg";
import { ReactComponent as DeleteSVG } from "./icons/cancel.svg";
import "./TodoIcon.css";

const icosnTypes = {
  check: (color) => <CkeckSVG className="button button-check" fill={color} />,
  delete: (color) => <DeleteSVG className="button button-delete" fill={color} />,
};

function TodoIcon({ type, color }) {
  return <span>{icosnTypes[type](color)}</span>;
}

export { TodoIcon };
