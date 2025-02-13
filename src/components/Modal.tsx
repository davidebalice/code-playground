import { IoIosCloseCircle, IoMdCodeWorking } from "react-icons/io";
import classes from "../css/editor.module.css";
import { Key } from "react";

interface ModalProps {
  setModal: (value: boolean) => void;
  output: string;
  output2: string; // Qui è una stringa JSON
}

const Modal: React.FC<ModalProps> = ({ setModal, output, output2 }) => {
  let parsedData = [];

  try {
    parsedData = JSON.parse(output2); // Converti la stringa in un array di oggetti
    if (!Array.isArray(parsedData)) {
      parsedData = []; // Se non è un array valido, lo resettiamo per evitare errori
    }
  } catch (error) {
    console.error("Errore nel parsing di output2:", error);
  }

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

          {parsedData.length > 0 ? (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border border-gray-400">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    {Object.keys(parsedData[0]).map((key) => (
                      <th key={key} className="p-2 border border-gray-500 text-left">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {parsedData.map((item: { [x: string]: unknown; }, index: Key | null | undefined) => (
                    <tr key={index} className="hover:bg-gray-100">
                      {Object.keys(parsedData[0]).map((key) => (
                        <td key={key} className="p-2 border border-gray-500">
                          {typeof item[key] === "boolean"
                            ? item[key]
                              ? "✅"
                              : "❌"
                            : String(item[key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <pre className="bg-gray-800 text-white p-2 rounded mt-5">{output}</pre>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
