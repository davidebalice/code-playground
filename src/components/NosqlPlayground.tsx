import Editor from "@monaco-editor/react";
import { useState } from "react";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
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
}

interface NosqlPlaygroundProps {
  demo: boolean;
}

const NosqlPlayground: React.FC<NosqlPlaygroundProps> = ({ demo }) => {
  const backend = import.meta.env.VITE_NODE_BACKEND;
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  // Funzione per eseguire il codice
  const runCode = async () => {
    try {
      setOutput(`Code execution...`);

      const response = await fetch(`${backend}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.logs) {
        const formattedLogs = data.logs.map((log: string) => {
          // Pulizia dei log ricevuti
          let cleanedLog = log;
          cleanedLog = cleanedLog
            .trim()
            .replace(/\n/g, " ")
            .replace(/\\/g, "")
            .replace(/\\n/g, " ")
            .replace(/\\/g, " ")
            .replace(/\\t/g, " ")
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'")
            .replace(/\\+/g, "");

          try {
            return JSON.parse(cleanedLog);
          } catch {
            return cleanedLog;
          }
        });

        setOutput(JSON.stringify(formattedLogs, null, 2));
        setModal(true);
      } else {
        setOutput("Nessun output disponibile.");
      }
    } catch (error: unknown) {
      setOutput("Error: " + (error as Error).message);
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
      <div className="flex gap-4 p-1 bg-[#0079d6] text-white flex items-center h-[50px]">
        <img src={nosql} className="w-[122px]" />
      </div>
      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi Nosql</h2>

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
              <button
                className="flex gap-2 items-center px-4 py-2 bg-blue-500 text-white rounded"
                onClick={runCode}
              >
                <VscRunAll />
                <span className="text-[13px]">Esegui Codice</span>
              </button>
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
          {output && <div>{output}</div>}
        </div>
      </div>
      {modal && output && <Modal output={output} setModal={setModal} />}
    </>
  );
};

export default NosqlPlayground;
