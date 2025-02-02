import Editor from "@monaco-editor/react";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { VscRunAll } from "react-icons/vsc";
import { Link } from "react-router-dom";
import classes from "../css/react.module.css";

interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

const PhpPlayground = () => {
  const backend = import.meta.env.VITE_PHP_BACKEND;

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const runCode = async () => {
    try {
      setMessage("Esecuzione in corso...");
     

      const response = await fetch(`${backend}server.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ code }),
      });

      const data = await response.text();
      setOutput(data);
    } catch (error: unknown) {
      setMessage("Errore nell'esecuzione: " + (error as Error).message);
    }
  };

  // Esempi di esercizi PHP
  const exercises: Exercise[] = [
    {
      id: "1",
      title: "Hello World PHP",
      description: "Un semplice script PHP che stampa Hello, World!",
      code: `echo "Hello, World!";`,
    },
    {
      id: "2",
      title: "Somma di due numeri",
      description: "Un semplice script PHP che somma due numeri.",
      code: `$a = 5;
$b = 10;
echo "La somma è: " . ($a + $b);`,
    },
  ];

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCode(exercise.code);
    setMessage("");
    setOutput(null);
  };

  const handleBackToExercises = () => {
    setSelectedExercise(null);
    setCode("");
    setMessage("");
    setOutput(null);
  };

  return (
    <>
      <nav>
        PHP
        <ul className={classes.navbar}>
          <li>
            <Link to="/php">PHP Exercises</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 grid grid-cols-7 gap-4">
        {/* Lista degli esercizi */}
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi PHP</h2>
          <div className="border-t border-dashed border-gray-300 h-1 mt-4"></div>
          <ul className="mt-2">
            {exercises.map((exercise) => (
              <li
                key={exercise.id}
                onClick={() => handleExerciseSelect(exercise)}
                className="cursor-pointer text-gray-700 p-1 pl-3 rounded-md text-[14px] hover:bg-gray-200"
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
                className="flex gap-2 items-center mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={runCode}
              >
                <VscRunAll />
                <span className="text-[13px]">Esegui Codice</span>
              </button>
            </div>

            <Editor
              height="400px"
              defaultLanguage="php"
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{ readOnly: true, padding: { top: 20 } }}
            />
          </div>
        ) : (
          <div className="col-span-4">
            <div className="font-bold bg-gray-200 rounded-lg p-4 min-h-[250px] flex items-center justify-center gap-3">
              <FaCode className="text-blue-500 text-[24px]" />
              <span className="text-[17px] text-primary">
                Seleziona un esercizio PHP
              </span>
            </div>
          </div>
        )}

        {/* Area Output */}
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

export default PhpPlayground;