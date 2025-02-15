import Editor from "@monaco-editor/react";
import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { GoCodeSquare } from "react-icons/go";
import {
  IoMdArrowDropright,
  IoMdCloseCircle,
  IoMdCodeWorking,
} from "react-icons/io";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { VscRunAll } from "react-icons/vsc";
import nosql from "../assets/images/nosql.png";
import classes from "../css/editor.module.css";
import { exercises } from "../data/nosql";
import Modal from "./Modal";
interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
  executable: boolean;
}

interface NosqlPlaygroundProps {
  demo: boolean;
  setShowSecret: (value: boolean) => void;
}

const NosqlPlayground: React.FC<NosqlPlaygroundProps> = ({
  demo,
  setShowSecret,
}) => {
  const backend = import.meta.env.VITE_NODE_BACKEND;
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState("");
  const [executable, setExecutable] = useState<boolean>(true);
  const [viewAlert, setViewAlert] = useState<boolean>(false);
  const [output, setOutput] = useState<string | null>(null);
  const [output2, setOutput2] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  // Funzione per eseguire il codice
  const runCode = async () => {
    if (!executable) {
      setViewAlert(true);
    } else {
      try {
        setOutput(`Code execution...`);

        const response = await fetch(`${backend}/query`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();

        if (data.logs) {
          setOutput(JSON.stringify(data.logs, null, 2));
          setOutput2(data.logs);
          setModal(true);
        } else {
          setOutput("Nessun output disponibile.");
        }
      } catch (error: unknown) {
        setOutput("Error: " + (error as Error).message);
      }
    }
  };

  // Esercizi da visualizzare nella pagina corrente
  const exercisesToDisplay = exercises.slice(
    (currentPage - 1) * exercisesPerPage,
    currentPage * exercisesPerPage
  );

  // Numero totale di pagine
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  // Funzione per andare alla pagina successiva
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Funzione per andare alla pagina precedente
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {viewAlert && (
        <div className={classes.overlay}>
          <div className={classes.output} style={{ height: "200px" }}>
            <div onClick={() => setViewAlert(false)} className={classes.close2}>
              <IoMdCloseCircle style={{ fontSize: "32px" }} />
            </div>
            <p className="font-bold text-[#ff0000] mt-5">
              Code not executable for security reasons
            </p>
            <p className="text-[#444] mt-5">
              Insert, update and delete operations are disabled
            </p>
          </div>
        </div>
      )}
      <div className="flex gap-4 p-1 bg-[#0079d6] text-white flex items-center h-[50px]">
        <img src={nosql} className="w-[122px]" />
      </div>
      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Nosql</h2>

          <div className="border-t-1 border-dashed border-gray-300 h-1 mt-4"></div>

          {totalPages > 1 && (
            <>
              <div className="mt-4 mb-4 flex justify-between">
                <button
                  className="bg-gray-500 text-white rounded"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  <IoCaretBackCircle className="text-[17px]" />
                </button>
                <span className="text-[12px]">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="bg-gray-500 text-white rounded"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <IoCaretForwardCircle className="text-[17px]" />
                </button>
              </div>

              <div className="border-t border-dashed border-gray-300 h-1 mt-4"></div>
            </>
          )}

          <ul className="mt-2">
            {exercisesToDisplay.map((exercise) => (
              <li
                key={exercise.id}
                className="cursor-pointer text-gray-700 p-1 pl-3 rounded-md text-[14px] hover:bg-gray-200"
                onClick={() => {
                  setSelectedExercise(exercise);
                  setCode(exercise.code);
                  setOutput("");
                  setExecutable(exercise.executable);
                }}
              >
                <h4 className="flex items-center gap-1">
                  <IoMdArrowDropright /> <span>{exercise.title}</span>
                </h4>
              </li>
            ))}
          </ul>
        </div>

        {selectedExercise ? (
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-md font-bold">{selectedExercise.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {selectedExercise.description}
                </p>
              </div>
              <div className="flex gap-2">
                {demo && (
                  <button
                    className="flex gap-2 items-center mt-2 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => setShowSecret(true)}
                  >
                    <AiFillUnlock />
                    <span className="text-[13px]">Unlock editor</span>
                  </button>
                )}
                <button
                  className="flex gap-2 items-center mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={runCode}
                >
                  <VscRunAll />
                  <span className="text-[13px]">Run code</span>
                </button>
              </div>
            </div>

            <Editor
              className={classes.editor}
              defaultLanguage="javascript"
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              height={500}
              options={{ readOnly: demo, padding: { top: 20 } }}
            />

            <button
              className="flex gap-2 items-center mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={runCode}
            >
              <VscRunAll />
              <span className="text-[13px]">Run code</span>
            </button>
          </div>
        ) : (
          <div className="col-span-4">
            <div className="font-bold bg-gray-200 rounded-lg p-4 min-h-[500px] flex items-center justify-center gap-3">
              <GoCodeSquare className="text-blue-500 text-[28px]" />
              <span className="text-[18px] text-primary">Select code</span>
            </div>
          </div>
        )}

        <div className="col-span-1 bg-gray-900 text-white p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <IoMdCodeWorking className="text-[25px] font-bold" />
            <h3 className="text-lg font-bold">Output</h3>
          </div>
          {output && <div>{output.replace(/\\/g, "")}</div>}
        </div>
      </div>
      {modal && output && (
        <Modal output={output} output2={output2} setModal={setModal} />
      )}
    </>
  );
};

export default NosqlPlayground;
