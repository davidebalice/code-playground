import { IoIosCloseCircle, IoMdCodeWorking } from "react-icons/io";
import classes from "../css/editor.module.css";

interface ModalProps {
  setModal: (value: boolean) => void;
  output: string;
}

const Modal: React.FC<ModalProps> = ({ setModal, output }) => {
  return (
    <>
      <div className={classes.overlay}>
        <div className={classes.output}>
          <IoIosCloseCircle
            onClick={() => setModal(false)}
            className="text-[33px] cursor-pointer float-right"
          />
          <div className="flex items-center gap-2">
            <IoMdCodeWorking className="text-[25px] font-bold" />
            <h3 className="text-lg font-bold">Output</h3>
          </div>
          <div className="border-t border-dashed border-gray-300 h-1 mt-4 w-full"></div>
          <p className="mt-5">{output}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
