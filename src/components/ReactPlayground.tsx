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

const ReactPlayground = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const existingIframe = document.getElementById("sandbox-iframe");
      if (existingIframe) {
        existingIframe.remove();
      }

      let transformedCode = code
        .replace(/import\s+.*?;[\n]?/g, "")
        .replace(/export\s+const\s+(\w+)\s*=/, "const $1 =");

      const match = code.match(/export\s+const\s+(\w+)\s*=/);
      const componentName = match ? match[1] : "Component";

      transformedCode =
        `const { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback } = React;\n` +
        transformedCode;

      transformedCode += `
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<${componentName} />);
  `;

      const iframe = document.createElement("iframe");
      iframe.id = "sandbox-iframe";
      iframe.style.width = "100%";
      iframe.style.height = "400px";
      iframe.frameBorder = "0";
      document.body.appendChild(iframe);

      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) {
        setOutput("Errore: impossibile accedere al documento dell'iframe.");
        return;
      }

      const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Code Output</title>
      <!-- Carica React e ReactDOM (versioni di sviluppo) -->
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <!-- Carica Babel Standalone per trasformare JSX -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
    <body>
      <div id="root"></div>
      <!-- Il nostro script in formato Babel (JSX) -->
      <script type="text/babel">
        ${transformedCode}
      </script>
    </body>
  </html>
  `;

      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();

      setOutput("Codice eseguito correttamente!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setOutput("Errore nell'esecuzione: " + error.message);
      } else {
        setOutput("Errore sconosciuto");
      }
    }
  };

  const exercises: Exercise[] = [
    {
      id: "1",
      title: "Contatore con useState",
      description: "Un semplice contatore che incrementa il valore al click.",
      code: `
import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Conta: {count}</button>;
};
      `,
    },
    {
      id: "2",
      title: "Timer con useEffect",
      description: "Un timer che incrementa i secondi ogni secondo.",
      code: `
import { useState, useEffect } from "react";
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Secondi: {seconds}</div>;
};
      `,
    },
  ];

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCode(exercise.code);
    setOutput("");
  };

  const handleBackToExercises = () => {
    setSelectedExercise(null);
    setCode("");
    setOutput("");
  };

  return (
    <>
      <nav>
        React
        <ul className={classes.navbar}>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/todos">Todo</Link>
          </li>
          <li>
            <Link to="/dropdown">Dropdown</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi</h2>
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

        {/* Editor per visualizzare e modificare il codice */}
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
              defaultLanguage="javascript"
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
                Seleziona un esercizio
              </span>
            </div>
          </div>
        )}

        <div className="col-span-1 bg-gray-900 text-white p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <IoMdCodeWorking className="text-[25px] font-bold" />
            <h3 className="text-lg font-bold">Output</h3>
          </div>
          <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </>
  );
};

export default ReactPlayground;
