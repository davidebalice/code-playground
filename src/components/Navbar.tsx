import { Link } from "react-router-dom";
import classes from "../css/navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react">react</Link>
        </li>
        <li>
          <Link to="/javascript">javascript</Link>
        </li>
        <li>
          <Link to="/typescript">typescript</Link>
        </li>
        <li>
          <Link to="/php">php</Link>
        </li>{" "}
        <li>
          <Link to="/sql">sql</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
