import Editor from "@monaco-editor/react";
import { useState } from "react";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import { VscRunAll } from "react-icons/vsc";
import php from "../assets/images/php.jpg";
import classes from "../css/editor.module.css";
import { exercises } from "../data/php";
interface PhpPlaygroundProps {
  demo: boolean;
}

const PhpPlayground: React.FC<PhpPlaygroundProps> = ({ demo }) => {
  const backend = import.meta.env.VITE_PHP_BACKEND;

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
  const exercisesPerPage = 5;

  const runCode = async () => {
    try {
      setOutput(`Code execution...`);

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
      setOutput("Error: " + (error as Error).message);
    }
  };

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

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setSelectedExercise(null);
    setCode("");
    setOutput("");
    setCurrentPage(1);
  };

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCode(exercise.code);
    setOutput("");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedExercise(null);
    setCode("");
    setOutput("");
  };

  const exercisesToDisplay = selectedCategory
    ? selectedCategory.exercises.slice(
        (currentPage - 1) * exercisesPerPage,
        currentPage * exercisesPerPage
      )
    : [];

  const totalPages = selectedCategory
    ? Math.ceil(selectedCategory.exercises.length / exercisesPerPage)
    : 1;

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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

              <ul>
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
              <button
                className="flex gap-2 items-center mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={runCode}
              >
                <VscRunAll />
                <span className="text-[13px]">Esegui Codice</span>
              </button>
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
