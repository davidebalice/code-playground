import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { GoCodeSquare } from "react-icons/go";
import {
  IoMdArrowDropright,
  IoMdCloseCircle,
  IoMdCodeWorking,
} from "react-icons/io";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { VscRunAll } from "react-icons/vsc";
import reactWhite from "../assets/images/react-white.png";
import classes from "../css/editor.module.css";
import { exercises } from "../data/react";

interface ReactPlaygroundProps {
  demo: boolean;
  setShowSecret: (value: boolean) => void;
}

//Componente principale
const ReactPlayground: React.FC<ReactPlaygroundProps> = ({
  demo,
  setShowSecret,
}) => {
  // Stati del componente
  const [selectedCategory, setSelectedCategory] = useState<{
    category: string;
    exercises: {
      id: string;
      title: string;
      description: string;
      code: string;
      executable: boolean;
    }[];
  } | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<{
    id: string;
    title: string;
    description: string;
    code: string;
    executable: boolean;
  } | null>(null);
  const [code, setCode] = useState("");
  const [executable, setExecutable] = useState<boolean>(true);
  const [modal, setModal] = useState(false);
  const [viewAlert, setViewAlert] = useState<boolean>(false);
  const [output, setOutput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Funzione per eseguire il codice
  const runCode = () => {
    if (!executable) {
      setViewAlert(true);
    } else {
      try {
        // Rimuove l'iframe esistente se presente
        const existingIframe = document.getElementById("sandbox-iframe");
        if (existingIframe) {
          existingIframe.remove();
        }

        // Trasforma il codice rimuovendo le importazioni e modificando l'export
        let transformedCode = code
          .replace(/import\s+.*?;[\n]?/g, "")
          .replace(/export\s+const\s+(\w+)\s*=/, "const $1 =");

        const match = code.match(/export\s+const\s+(\w+)\s*=/);
        const componentName = match ? match[1] : "Component";

        console.log(componentName);

        transformedCode =
          `const { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback } = React;\n` +
          transformedCode;

        transformedCode += `
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<${componentName} />);
  `;

        // Rimuove l'overlay esistente se presente
        const existingOverlay = document.getElementById("sandbox-overlay");
        if (existingOverlay) {
          existingOverlay.remove();
        }

        // HTML per l'iframe
        const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Code Output</title>
        <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <!-- Carica React e ReactDOM (versioni di sviluppo) -->
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <!-- Carica Babel Standalone per trasformare JSX -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
    <body>
      <div id="root"></div>
      <script type="text/babel">
        ${transformedCode}
      </script>
    </body>
  </html>
  `;

        // Imposta il contenuto dell'iframe
        if (iframeRef.current) {
          iframeRef.current.srcdoc = html;
        }
        setModal(true);
        setOutput("Codice eseguito correttamente!");
      } catch (error: unknown) {
        if (error instanceof Error) {
          setOutput("Errore nell'esecuzione: " + error.message);
        } else {
          setOutput("Errore sconosciuto");
        }
      }
    }
  };

  // Interfacce per gli esercizi e le categorie
  interface Exercise {
    id: string;
    title: string;
    description: string;
    code: string;
    executable: boolean;
  }

  interface Category {
    category: string;
    exercises: Exercise[];
  }

  // Funzione per gestire la selezione di una categoria
  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setSelectedExercise(null);
    setCode("");
    setOutput("");
    setCurrentPage(1);
  };

  // Funzione per gestire la selezione di un esercizio
  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCode(exercise.code);
    setOutput("");
  };

  // Funzione per tornare alla lista delle categorie
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedExercise(null);
    setCode("");
    setOutput("");
  };

  // Esercizi da visualizzare nella pagina corrente
  const exercisesToDisplay = selectedCategory
    ? selectedCategory.exercises.slice(
        (currentPage - 1) * exercisesPerPage,
        currentPage * exercisesPerPage
      )
    : [];

  // Numero totale di pagine
  const totalPages = selectedCategory
    ? Math.ceil(selectedCategory.exercises.length / exercisesPerPage)
    : 1;

  // Funzione per andare alla pagina successiva
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Funzione per andare alla pagina precedente
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Render del componente
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
              Route, fetching, and other sensitive operations are disabled in
              this environment.
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-4 p-1 bg-[#17b6e9] text-white flex items-center h-[50px]">
        <img src={reactWhite} className="w-[150px]" />
      </div>

      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          {!selectedCategory ? (
            <>
              <h2 className="text-[16px] font-bold">Categories</h2>
              <div className="border-t-1 border-dashed border-gray-300 h-1 mt-4"></div>
              <ul className="mt-2">
                {exercises.map((category, index) => (
                  <div key={index}>
                    <h3
                      className="flex items-center gap-1 cursor-pointer text-gray-700 hover:bg-gray-200 p-1 pl-3 rounded-md text-[14px]"
                      onClick={() => handleCategorySelect(category)}
                    >
                      <IoMdArrowDropright /> <span>{category.category}</span>
                    </h3>
                  </div>
                ))}
              </ul>
            </>
          ) : (
            <div>
              <div className="flex justify-between items-center"> </div>
              <div className="flex justify-between items-center">
                <h2 className="text-[16px] font-bold">
                  {selectedCategory.category}
                </h2>
                <button
                  className="flex items-center gap-2 text-blue-500 bg-[#333] p-[2px] text-white text-[14px]"
                  onClick={handleBackToCategories}
                >
                  <IoCaretBackCircle className="text-[17px]" />
                  <span className="text-[14px]">back</span>
                </button>
              </div>

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

                  <div className="border-t-1 border-dashed border-gray-300 h-1 mt-4"></div>
                </>
              )}

              <ul className="mt-2">
                {exercisesToDisplay.map((exercise) => (
                  <li
                    key={exercise.id}
                    onClick={() => {
                      handleExerciseSelect(exercise);
                      setCode(exercise.code);
                      setOutput("");
                      setExecutable(exercise.executable);
                    }}
                    className={`cursor-pointer text-gray-700 p-1 pl-3 rounded-md text-[13px]
                          ${
                            selectedExercise &&
                            selectedExercise.id === exercise.id
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-200"
                          }`}
                  >
                    <h4 className="flex items-center gap-1">
                      {" "}
                      <IoMdArrowDropright /> <span>{exercise.title}</span>
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
        </div>

        {/* Overlay ed iframe per l'output del codice */}
        <div
          className={`${classes.overlay}`}
          style={{ display: modal ? "flex" : "none" }}
        >
          <div onClick={() => setModal(false)} className={classes.close}>
            <IoMdCloseCircle />
          </div>
          <iframe ref={iframeRef} title="Output" className={classes.output} />
        </div>
      </div>
    </>
  );
};

export default ReactPlayground;
