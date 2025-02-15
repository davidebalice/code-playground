import Editor from "@monaco-editor/react";
import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { VscRunAll } from "react-icons/vsc";
import * as ts from "typescript";
import typescript from "../assets/images/typescript.jpg";
import classes from "../css/editor.module.css";
import { exercises } from "../data/typescript";

// Definizione delle proprietà del componente
interface TypescriptPlaygroundProps {
  demo: boolean;
  setShowSecret: (value: boolean) => void;
}

// Definizione del componente principale
const TypescriptPlayground: React.FC<TypescriptPlaygroundProps> = ({
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
    }[];
  } | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<{
    id: string;
    title: string;
    description: string;
    code: string;
  } | null>(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;

  // Funzione per eseguire il codice
  const runCode = () => {
    setOutput(`Code execution...`);

    try {
      // Comandi proibiti per motivi di sicurezza
      const bannedCommands = [
        "window",
        "document",
        "fetch",
        "XMLHttpRequest",
        "eval",
        "Function",
      ];

      // Controllo dei comandi proibiti
      for (const command of bannedCommands) {
        if (code.includes(command)) {
          setOutput(`Errore: comando proibito "${command}" trovato.`);
          return `Errore: comando proibito "${command}" trovato.`;
        }
      }

      //Conversione del codice typeScript in javaScript
      const transpiledCode = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.CommonJS },
      }).outputText;

      let outputData = "";
      //const log = console.log;
      console.log = (...args) => {
        outputData += args.join(" ") + "\n";
        setOutput(outputData);
      };

      //Esecuzione del codice convertito
      try {
        new Function(transpiledCode)();
      } catch (err) {
        outputData += "Errore nell'esecuzione: " + (err as Error).message;
      }

      // console.log = log;
      // setOutput(outputData || "Nessun output");
    } catch (error) {
      setOutput("Errore: " + (error as Error).message);
    }
  };

  // Interfacce per gli esercizi e le categorie
  interface Exercise {
    id: string;
    title: string;
    description: string;
    code: string;
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
      <div className="flex p-1 gap-4 bg-[#3178c6] text-white flex items-center h-[50px]">
        <img src={typescript} className="w-[164px]" />
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
                      //setMessage("");
                    }}
                    className={`cursor-pointer text-gray-700 p-1 pl-3 rounded-md text-[13px]
                    ${
                      selectedExercise && selectedExercise.id === exercise.id
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
              height={500}
              defaultLanguage="typescript"
              value={code}
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
      </div>
    </>
  );
};

export default TypescriptPlayground;
