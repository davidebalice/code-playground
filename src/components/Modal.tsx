import { IoIosCloseCircle, IoMdCodeWorking } from "react-icons/io";
import classes from "../css/editor.module.css";

interface ModalProps {
  setModal: (value: boolean) => void;
  output: string;
  output2: { [key: string]: string | number | boolean }[];
}

const Modal: React.FC<ModalProps> = ({ setModal, output, output2 }) => {
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
          <p className="mt-5">
            {output2 && output2.length > 0 ? (
              output2.map((item, index) => (
                <div key={index} className="mb-2">
                  <pre className="bg-gray-700 text-white p-2 rounded whitespace-pre-wrap">
                    {typeof item === "string"
                      ? (item as string)
                          .replace(/[{}[\]]/g, "")
                          .replace(/\s+/g, " ")
                          .replace(/, "__v": 0 ,/g, '\n\n')
                          .replace(/, "__v": 0/g, '')
                          .replace(/ "_id":/g, '"_id":')
                      : JSON.stringify(item, null, 2)}
                  </pre>
                </div>
              ))
            ) : (
              <pre className="bg-gray-800 text-white p-2 rounded">{output}</pre>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
