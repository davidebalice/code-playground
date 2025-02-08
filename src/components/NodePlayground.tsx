import Editor from "@monaco-editor/react";
import { useState } from "react";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { VscRunAll } from "react-icons/vsc";
import nodeWhite from "../assets/images/node-white.png";
import classes from "../css/editor.module.css";
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
  const backend = import.meta.env.VITE_NODE_BACKEND;

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);

  const runCode = async () => {
    try {
      setOutput(`Code execution...`);

      const response = await fetch(`${backend}/execute`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.text();
      setOutput(data);
    } catch (error: unknown) {
      setOutput("Error execute: " + (error as Error).message);
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
      code: `const a = 5;
const b = 10;
console.log("La somma è:", a + b);`,
    },
  ];

  return (
    <>
      <div className="flex gap-4 p-2 bg-[#7cb701] text-white flex items-center h-[50px]">
        <img src={nodeWhite} className="w-[114px]" />
      </div>

      <div className="p-4 grid grid-cols-7 gap-4">
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
                  setOutput("");
                  //setMessage("");
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
              className={classes.editor}
              defaultLanguage="javascript"
              value={code}
              height={500}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
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

        {/* Output */}
        <div className="col-span-1 bg-gray-900 text-white p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <IoMdCodeWorking className="text-[25px] font-bold" />
            <h3 className="text-lg font-bold">Output</h3>
          </div>
          {output && <div>{output}</div>}
        </div>
      </div>
    </>
  );
};

export default NodePlayground;
