import { Link } from "react-router-dom";
import classes from "../css/react.module.css";

const ReactExcercises = () => {
  return (
    <nav >
      React
      <ul className={classes.navbar}>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todos">Todo</Link>
        </li>
        <li>
          <Link to="/dropdown">Dropdown</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ReactExcercises;
