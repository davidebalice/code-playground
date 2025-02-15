import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import classes from "../css/editor.module.css";
interface ModalProps {
  setSecretKey: (value: string) => void;
  setShowSecret: (value: boolean) => void;
  error: boolean;
}

const Secret: React.FC<ModalProps> = ({ setSecretKey, error, setShowSecret }) => {
  const [text, setText] = useState("");

  return (
    <div className={classes.overlay}>
      <div
        className={classes.output}
        style={{ maxWidth: "300px", height: "200px" }}
      >
        <IoIosCloseCircle
          onClick={() => setShowSecret(false)}
          className="text-[33px] cursor-pointer float-right"
        />
        <div className={classes.label}>Password:</div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="password"
          className={classes.input}
        />

        <button
          className="flex gap-2 items-center mt-2 px-4 py-2 bg-red-500 text-white rounded w-100"
          style={{ maxWidth: "260px" }}
          onClick={() => setSecretKey(text)}
        >
          <AiFillUnlock />
          <span className="text-[13px]">Unlock editor</span>
        </button>

        {error && (
          <div className="text-red-500 font-bold mt-2 text-[13px]">
            Invalid password
          </div>
        )}
      </div>
    </div>
  );
};

export default Secret;
