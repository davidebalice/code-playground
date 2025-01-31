import Editor from "@monaco-editor/react";
import { useState } from "react";
import { exercises } from "../data/typescript";

const TypescriptExcercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [code, setCode] = useState(selectedExercise.code);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      let outputData = "";
      const log = console.log;
      console.log = (...args) => {
        outputData += args.join(" ") + "\n";
      };
      eval(code);
      console.log = log;
      setOutput(outputData || "Nessun output");
    } catch (error) {
      setOutput("Errore: " + error);
    }
  };

  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Esercizi</h2>
        <ul className="mt-2">
          {exercises.map((ex) => (
            <li
              key={ex.id}
              className={`cursor-pointer p-2 rounded ${
                selectedExercise.id === ex.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                setSelectedExercise(ex);
                setCode(ex.code);
                setOutput("");
              }}
            >
              {ex.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Monaco Editor */}
      <div className="col-span-2">
        <h3 className="text-lg font-bold">{selectedExercise.title}</h3>
        <p className="text-sm text-gray-600">{selectedExercise.description}</p>
        <Editor
          height="400px"
          defaultLanguage="typescript"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={runCode}
        >
          Esegui Codice
        </button>
      </div>

      {/* Output */}
      <div className="col-span-1 bg-gray-900 text-white p-4 rounded-lg">
        <h3 className="text-lg font-bold">Output</h3>
        <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};

export default TypescriptExcercises;
