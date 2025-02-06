import Editor from "@monaco-editor/react";
import { useState } from "react";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { VscRunAll } from "react-icons/vsc";
import nosql from "../assets/images/nosql.png";
import classes from "../css/editor.module.css";
import Modal from "./Modal";
interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

const exercises: Exercise[] = [
  {
    id: "1",
    title: "Ottenere tutti gli utenti",
    description: "Recupera tutti gli utenti dalla collezione MongoDB.",
    code: `const users = await User.find();\n  console.log(users);`,
  },

  {
    id: "2",
    title: "Filtrare utenti per età superiore a 25",
    description: "Seleziona gli utenti con un'età superiore a 25 anni.",
    code: `const users = await User.find({ age: { $gt: 25 } });
    console.log(users);`,
  },
  {
    id: "3",
    title: "Cercare un utente per nome",
    description: "Trova un utente specifico cercandolo per nome.",
    code: `async function getUserByName(name) {\n  const user = await User.findOne({ name });\n  console.log(user);\n}\n\ngetUserByName('Alice');`,
  },
  {
    id: "4",
    title: "Selezionare solo alcuni campi",
    description: "Recupera solo i campi nome ed età degli utenti.",
    code: `async function getUsersWithSelectedFields() {\n  const users = await User.find().select('name age');\n  console.log(users);\n}\n\ngetUsersWithSelectedFields();`,
  },
  {
    id: "5",
    title: "Ordinare utenti per età",
    description: "Recupera gli utenti ordinandoli per età in ordine crescente.",
    code: `async function getUsersSortedByAge() {\n  const users = await User.find().sort({ age: 1 });\n  console.log(users);\n}\n\ngetUsersSortedByAge();`,
  },
  {
    id: "6",
    title: "Conteggio utenti",
    description: "Conta il numero totale di utenti nel database.",
    code: `async function countUsers() {\n  const count = await User.countDocuments();\n  console.log('Numero totale di utenti:', count);\n}\n\ncountUsers();`,
  },
];

interface NosqlPlaygroundProps {
  demo: boolean;
}

const NosqlPlayground: React.FC<NosqlPlaygroundProps> = ({ demo }) => {
  const backend = import.meta.env.VITE_NODE_BACKEND;
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const runCode = async () => {
    try {
      setMessage("Esecuzione in corso...");
      const response = await fetch(`${backend}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.logs) {
        const formattedLogs = data.logs.map((log: string) => {
          //let cleanedLog = log.replace(/ObjectId\('(.+?)'\)/g, '"$1"');
          let cleanedLog = log;
          cleanedLog = cleanedLog
            .trim()
            .replace(/\n/g, " ")
            .replace(/\\/g, "")
            .replace(/\\n/g, " ")
            .replace(/\\/g, " ")
            .replace(/\\t/g, " ")
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'")
            .replace(/\\+/g, "");

          try {
            return JSON.parse(cleanedLog);
          } catch {
            return cleanedLog;
          }
        });

        setOutput(JSON.stringify(formattedLogs, null, 2));
        setModal(true);
      } else {
        setOutput("Nessun output disponibile.");
      }
    } catch (error: unknown) {
      setOutput("Error: " + (error as Error).message);
    }
  };

  return (
    <>
      <div className="flex gap-4 p-1 bg-[#0079d6] text-white flex items-center h-[50px]">
        <img src={nosql} className="w-[122px]" />
      </div>
      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi Node.js</h2>
          <div className="border-t border-dashed border-gray-300 h-1 mt-4"></div>
          <ul className="mt-2">
            {exercises.map((exercise) => (
              <li
                key={exercise.id}
                className="cursor-pointer text-gray-700 p-1 pl-3 rounded-md text-[14px] hover:bg-gray-200"
                onClick={() => {
                  setSelectedExercise(exercise);
                  setCode(exercise.code);
                  setOutput("");
                  setMessage("");
                }}
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
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{ readOnly: demo, padding: { top: 20 } }}
            />
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
          <p className="mb-2">{message}</p>
          {output && <div>{output}</div>}
        </div>
      </div>
      {modal && output && <Modal output={output} setModal={setModal} />}
    </>
  );
};

export default NosqlPlayground;
