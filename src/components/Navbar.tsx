import { Link } from "react-router-dom";
import logo from "../assets/images/logo_light.png";
import classes from "../css/navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <div className="flex gap-4 items-center w-[290px]">
        <div className="pl-[10px]">
          <img src={logo} className="w-[100px]" />
        </div>
        <div className="font-bold">Code Playground</div>
      </div>

      <nav>
        <ul className={classes.menu}>
          <li>
            <Link to="/">home</Link>
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
          </li>
          <li>
            <Link to="/sql">sql</Link>
          </li>
          <li>
            <Link to="/node">node</Link>
          </li>
          <li>
            <Link to="/nosql">nosql</Link>
          </li>
        </ul>
      </nav>
      <div className="w-[290px]">icona</div>
    </header>
  );
};

export default Navbar;
