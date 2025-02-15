import Editor from "@monaco-editor/react";
import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { VscRunAll } from "react-icons/vsc";
import php from "../assets/images/php.jpg";
import classes from "../css/editor.module.css";
import { exercises } from "../data/php";

// Definizione delle proprietà del componente
interface PhpPlaygroundProps {
  demo: boolean;
  setShowSecret: (value: boolean) => void;
}

// Definizione del componente principale
const PhpPlayground: React.FC<PhpPlaygroundProps> = ({
  demo,
  setShowSecret,
}) => {
  // URL del backend
  const backend = import.meta.env.VITE_PHP_BACKEND;

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
  const runCode = async () => {
    try {
      setOutput(`Code execution...`);

      // Invio del codice al backend per l'esecuzione
      const response = await fetch(`${backend}server.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      // Ricezione dell'output dal backend
      const data = await response.text();
      setOutput(data);
    } catch (error: unknown) {
      setOutput("Error: " + (error as Error).message);
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
      <div className="flex gap-4 p-1 bg-[#5f82ba] text-white flex items-center h-[50px]">
        <img src={php} className="w-[70px]" />
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
              defaultLanguage="php"
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

export default PhpPlayground;
