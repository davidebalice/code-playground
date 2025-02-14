import { useState } from "react";
import classes from "../css/editor.module.css";

interface ModalProps {
  setSecretKey: (value: string) => void;
  error: boolean;
}

const Secret: React.FC<ModalProps> = ({ setSecretKey, error }) => {
  const [text, setText] = useState("");

  return (
    <div className={classes.overlay}>
      <div className={classes.output}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="password"
          style={{ border: "1px solid black" }}
        />
        <button onClick={() => setSecretKey(text)}>Submit</button>
        {error && <div className="text-red-500">Invalid secret key</div>}
      </div>
    </div>
  );
};

export default Secret;
