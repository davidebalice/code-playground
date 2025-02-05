import { GoCodeSquare } from "react-icons/go";
import { Link } from "react-router-dom";
import jsIcon from "../assets/images/js.jpg";
import reactIcon from "../assets/images/react.png";
import tsIcon from "../assets/images/ts.jpg";

import nodeIcon from "../assets/images/node.png";
import nosqlIcon from "../assets/images/nosql2.png";
import phpIcon from "../assets/images/php.png";
import sqlIcon from "../assets/images/sql2.png";

import classes from "../css/home.module.css";

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <div className="max-w-[1000px] mx-auto bg-gray-100 p-6 rounded-lg text-black text-center shadow-md mb-6">
        <h1 className="text-m font-bold mb-6 flex items-center justify-center gap-4 ">
          <GoCodeSquare /> <span className="text-[40px]">Code Playground</span>
        </h1>
        <div className="border-t-[2px] border-dashed border-gray-300 h-6 mt-4"></div>
        <p className="text-md text-justify leading-relaxed">
          Code Playground is an interactive application ideal for testing code
          and practicing programming.
          <br />
          It supports several languages/tecnologies, including React,
          JavaScript, TypeScript, PHP and Node.js, offering a simple and
          immediate environment for writing and executing code in real time.
          <br />
          Inside the platform there are numerous exercises divided by category.
          <br />
          By default the code editor is locked in read mode for security reason,
          but it is possible to unlock the code by inserting a password.
        </p>
      </div>

      <div className="max-w-[1000px] m-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/react" className="w-full">
          <div
            className={` bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              <img src={reactIcon} style={{ width: "30%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>React</div>
          </div>
        </Link>

        <Link to="/javascript" className="w-full">
          <div
            className={`bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              {" "}
              <img src={jsIcon} style={{ width: "30%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>Javascript</div>
          </div>
        </Link>

        <Link to="/typescript" className="w-full">
          <div
            className={`bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              {" "}
              <img src={tsIcon} style={{ width: "30%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>Typescript</div>
          </div>
        </Link>

        <Link to="/php" className="w-full">
          <div
            className={`bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              {" "}
              <img src={phpIcon} style={{ width: "30%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>Php</div>
          </div>
        </Link>

        <Link to="/sql" className="w-full">
          <div
            className={`bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              {" "}
              <img src={sqlIcon} style={{ width: "30%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>Sql</div>
          </div>
        </Link>

        <Link to="/node" className="w-full">
          <div
            className={`bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              {" "}
              <img src={nodeIcon} style={{ width: "36%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>Node</div>
          </div>
        </Link>

        <Link to="/nosql" className="w-full">
          <div
            className={`bg-gray-100 rounded-lg shadow-md ${
              classes?.card || ""
            }`}
          >
            <div></div>
            <div>
              {" "}
              <img src={nosqlIcon} style={{ width: "30%", margin: "0 auto" }} />
            </div>
            <div className={classes.title}>Nosql</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
