import Editor from "@monaco-editor/react";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { VscRunAll } from "react-icons/vsc";
import { Link } from "react-router-dom";

interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

interface NodePlaygroundProps {
  demo: boolean;
}

const NodePlayground: React.FC<NodePlaygroundProps> = ({ demo }) => {
  const backend = "http://localhost:8000";

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const runCode = async () => {
    try {
      setMessage("Esecuzione in corso...");

      const response = await fetch(`${backend}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error: unknown) {
      setMessage("Errore nell'esecuzione: " + (error as Error).message);
    }
  };

  const exercises: Exercise[] = [
    {
      id: "1",
      title: "Hello World",
      description: "Stampare 'Hello, World!' in Node.js",
      code: `console.log("Hello, World!");`,
    },
    {
      id: "2",
      title: "Somma di due numeri",
      description: "Somma due numeri in Node.js",
      code: `const a = 5; const b = 10; console.log("La somma è:", a + b);`,
    },
  ];

  return (
    <>
      <nav>
        <ul className="flex gap-4 p-2 bg-gray-800 text-white">
          <li>
            <Link to="/node">Node.js Playground</Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 grid grid-cols-7 gap-4">
        {/* Lista esercizi */}
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi Node.js</h2>
          <div className="border-t border-dashed border-gray-300 h-1 mt-4"></div>
          <ul className="mt-2">
            {exercises.map((exercise) => (
              <li
                key={exercise.id}
                onClick={() => {
                  setSelectedExercise(exercise);
                  setCode(exercise.code);
                }}
                className="cursor-pointer text-gray-700 p-1 pl-3 rounded-md text-[14px] hover:bg-gray-200"
              >
                <h4 className="flex items-center gap-1">
                  <IoMdArrowDropright /> <span>{exercise.title}</span>
                </h4>
              </li>
            ))}
          </ul>
        </div>

        {/* Monaco Editor */}
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
              height="400px"
              defaultLanguage="javascript"
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{ readOnly: demo, padding: { top: 20 } }}
            />
          </div>
        ) : (
          <div className="col-span-4">
            <div className="font-bold bg-gray-200 rounded-lg p-4 flex items-center justify-center gap-3">
              <FaCode className="text-blue-500 text-[24px]" />
              <span className="text-[17px] text-primary">
                Seleziona un esercizio
              </span>
            </div>
          </div>
        )}

        {/* Output */}
        <div className="col-span-1 bg-gray-900 text-white p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <IoMdCodeWorking className="text-[25px] font-bold" />
            <h3 className="text-lg font-bold">Output</h3>
          </div>
          <p className="mb-2">{message}</p>
          {output && <div>{output}</div>}
        </div>
      </div>
    </>
  );
};

export default NodePlayground;
