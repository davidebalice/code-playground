import { Link } from "react-router-dom";
import classes from "../css/react.module.css";

const JavascriptPlayground = () => {
  return (
    <nav >
      Javascript
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

export default JavascriptPlayground;
