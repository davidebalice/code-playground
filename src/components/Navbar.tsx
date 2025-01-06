import { Link } from "react-router-dom";
import classes from "../css/navbar.module.css";

const Navbar = () => {
  return (
    <nav >
      <ul className={classes.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
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

export default Navbar;
