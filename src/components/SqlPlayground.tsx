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
import sql from "../assets/images/sql.png";
import classes from "../css/editor.module.css";
import { exercises } from "../data/sql";

// Definizione dell'interfaccia Exercise
interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

// Proprietà del componente SqlPlayground
interface SqlPlaygroundProps {
  demo: boolean;
  setShowSecret: (value: boolean) => void;
}

//Componente principale
const SqlPlayground: React.FC<SqlPlaygroundProps> = ({
  demo,
  setShowSecret,
}) => {
  // URL del backend
  const backend = import.meta.env.VITE_PHP_BACKEND;

  // Stati del componente
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [code, setCode] = useState("");
  const [modal, setModal] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [output2, setOutput2] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const exercisesPerPage = 12;

  // Funzione per eseguire il codice SQL
  const runCode = async () => {
    setModal(true);
    try {
      setOutput(`Code execution...`);

      // Invio del codice SQL al backend per l'esecuzione
      const response = await fetch(`${backend}server-db.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: code }),
      });

      // Ricezione dell'output dal backend
      const data = await response.json();
      if (data.error) {
        setOutput2([]);
        setOutput(`Errore: ${data.error}`);
      } else {
        setOutput(JSON.stringify(data, null, 2));
        setOutput2(data.results);
      }
    } catch (error: unknown) {
      setOutput("Errore nell'esecuzione: " + (error as Error).message);
    }
  };

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
   <style>
    .border {
      border-collapse: collapse;
      width: 100%;
      border:1px solid #ddd;
    }
    .output {
      font-size:18px;
      border-bottom:1px solid #ddd;
      padding-bottom:10px;
      margin-bottom:16px
    }
    th {
    background-color: #444;
    color:#fff
    }
   </style>
 </head>
 <body>
  <div className="flex items-center gap-2">
    <h1 class="output">Output</h1>
  </div>
  <table cellpadding="4" cellspacing="4" border="1" class="border">
    <thead>
      <tr>
        ${Object.keys(output2[0] || {})
          .map((key) => `<th>${key}</th>`)
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${output2
        .map(
          (obj) => `
        <tr>
          ${Object.entries(obj)
            .map(([key, value], i) => {
              if (
                typeof key === "string" &&
                ["id", "quantity", "num_products", "total_units_sold"].some(
                  (substring) => key.toLowerCase().includes(substring)
                )
              ) {
                return `<td>${value}</td>`;
              }
              if (
                typeof key === "string" &&
                ["price", "total"].some((substring) =>
                  key.toLowerCase().includes(substring)
                )
              ) {
                return `<td>€ ${value}</td>`;
              }
              if (typeof value === "string" && !isNaN(Date.parse(value))) {
                return "<td>" + new Date(value).toLocaleDateString() + "</td>";
              }
              return `<td>${value}</td>`;
            })
            .join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
</body>
</html>
`;

  /*
{data.map((obj, index) => (
  <tr key={index}>
   {Object.entries(obj).map(([key, value], i) => (
      <td key={i}>
        {(() => {
          // Controlliamo se la colonna si chiama 'id' per evitare conversioni errate
          if (key.toLowerCase().includes("id")) {
            return value;
          }
          
          // Controlliamo se è un timestamp realistico (> 1970)
          if (typeof value === "number" && value > 1000000000 && value < 9999999999999) {
            return new Date(value).toLocaleDateString();
          }

          // Controlliamo se è una stringa che rappresenta una data
          if (typeof value === "string" && !isNaN(Date.parse(value))) {
            return new Date(value).toLocaleDateString();
          }

          // Se non è una data, restituiamo il valore normale
          return value;
        })()}
      </td>
    ))}
  </tr>
))}

*/

  // Imposta il contenuto dell'iframe
  if (iframeRef.current) {
    iframeRef.current.srcdoc = html;
  }

  // Funzione per gestire la selezione di un esercizio
  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCode(exercise.code);
    setOutput(null);
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

  // Render del componente
  return (
    <>
      <div className="flex gap-4 p-1 bg-[#db7432] text-white flex items-center h-[50px]">
        <img src={sql} className="w-[112px]" />
      </div>

      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi SQL</h2>

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
                onClick={() => {
                  handleExerciseSelect(exercise);
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
              defaultLanguage="sql"
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

      {/* Overlay ed iframe per l'output del codice */}
      <div
        className={`${classes.overlay}`}
        style={{ display: modal ? "flex" : "none" }}
      >
        <div onClick={() => setModal(false)} className={classes.close}>
          <IoMdCloseCircle style={{ fontSize: "32px" }} />
        </div>
        <iframe ref={iframeRef} title="Output" className={classes.output} />
      </div>
    </>
  );
};

export default SqlPlayground;
