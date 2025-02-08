import Editor from "@monaco-editor/react";
import { useState } from "react";
import { GoCodeSquare } from "react-icons/go";
import { IoMdArrowDropright, IoMdCodeWorking } from "react-icons/io";
import { VscRunAll } from "react-icons/vsc";
import sql from "../assets/images/sql.png";
import classes from "../css/editor.module.css";

interface Exercise {
  id: string;
  title: string;
  description: string;
  code: string;
}

interface SqlPlaygroundProps {
  demo: boolean;
}

const SqlPlayground: React.FC<SqlPlaygroundProps> = ({ demo }) => {
  const backend = import.meta.env.VITE_PHP_BACKEND;

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string | null>(null);

  const runCode = async () => {
    try {
      setOutput(`Code execution...`);

      const response = await fetch(`${backend}server-db.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: code }),
      });

      const data = await response.json();
      if (data.error) {
        setOutput(`Errore: ${data.error}`);
      } else {
        setOutput(JSON.stringify(data, null, 2));
      }
    } catch (error: unknown) {
      setOutput("Errore nell'esecuzione: " + (error as Error).message);
    }
  };

  const exercises: Exercise[] = [
    {
      id: "1",
      title: "Visualizza Ordini e Utenti",
      description: "Mostra gli ordini insieme ai dettagli degli utenti.",
      code: `SELECT u.user_id, u.username, o.order_id, o.order_date
  FROM users u
  JOIN orders o ON u.user_id = o.user_id;`,
    },
    {
      id: "2",
      title: "Dettagli Ordini Completi",
      description:
        "Mostra l'ordine, l'utente e i dettagli dei prodotti ordinati.",
      code: `SELECT o.order_id, o.order_date, u.username, p.product_name, p.price, oi.quantity
  FROM orders o
  JOIN users u ON o.user_id = u.user_id
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id;`,
    },
    {
      id: "3",
      title: "Prodotti e Categorie",
      description: "Visualizza i prodotti con le relative categorie.",
      code: `SELECT p.product_id, p.product_name, p.price, c.category_name
  FROM products p
  JOIN categories c ON p.category_id = c.category_id;`,
    },
    {
      id: "4",
      title: "Valore Totale Ordine",
      description: "Calcola il totale per ogni ordine.",
      code: `SELECT o.order_id, SUM(p.price * oi.quantity) AS total_order_value
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  GROUP BY o.order_id;`,
    },
    {
      id: "5",
      title: "Dettagli Ordini Completi con Categoria",
      description:
        "Panoramica completa dell'ordine unendo utenti, prodotti e categorie.",
      code: `SELECT u.username, o.order_id, o.order_date, p.product_name, c.category_name, oi.quantity, p.price, (p.price * oi.quantity) AS subtotal
  FROM users u
  JOIN orders o ON u.user_id = o.user_id
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  JOIN categories c ON p.category_id = c.category_id;`,
    },
    {
      id: "6",
      title: "Top-selling Products",
      description: "Elenca i 5 prodotti con le vendite maggiori.",
      code: `SELECT
    p.product_id,
    p.product_name,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM(oi.quantity * p.price) AS total_sales
  FROM products p
  JOIN order_items oi ON p.product_id = oi.product_id
  GROUP BY p.product_id, p.product_name
  ORDER BY total_sales DESC
  LIMIT 5;`,
    },
    {
      id: "7",
      title: "Ranking Utenti per Spesa Totale",
      description:
        "Assegna un ranking agli utenti in base al totale speso negli ordini.",
      code: `SELECT
      u.user_id,
      u.username,
      SUM(p.price * oi.quantity) AS total_spent,
      RANK() OVER (ORDER BY SUM(p.price * oi.quantity) DESC) AS user_rank
  FROM users u
  JOIN orders o ON u.user_id = o.user_id
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p ON oi.product_id = p.product_id
  GROUP BY u.user_id, u.username;`,
    },
    {
      id: "8",
      title: "Performance per Categoria",
      description:
        "Mostra il numero di prodotti, unità vendute, prezzo medio e fatturato per categoria.",
      code: `SELECT
    c.category_id,
    c.category_name,
    COUNT(DISTINCT p.product_id) AS num_products,
    SUM(oi.quantity) AS total_units_sold,
    AVG(p.price) AS avg_price,
    SUM(oi.quantity * p.price) AS total_revenue
  FROM categories c
  JOIN products p ON c.category_id = p.category_id
  JOIN order_items oi ON p.product_id = oi.product_id
  GROUP BY c.category_id, c.category_name;`,
    },
    {
      id: "9",
      title: "Prodotti Non Venduti",
      description: "Elenca i prodotti che non sono mai stati venduti.",
      code: `SELECT
    p.product_id,
    p.product_name
  FROM products p
  WHERE NOT EXISTS (
      SELECT 1
      FROM order_items oi
      WHERE oi.product_id = p.product_id
  );`,
    },
  ];

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCode(exercise.code);
    setOutput(null);
  };

  const handleBackToExercises = () => {
    setSelectedExercise(null);
    setCode("");
    setOutput(null);
  };

  return (
    <>
      <div className="flex gap-4 p-1 bg-[#db7432] text-white flex items-center h-[50px]">
        <img src={sql} className="w-[112px]" />
      </div>

      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi SQL</h2>
          <div className="border-t border-dashed border-gray-300 h-1 mt-4"></div>
          <ul className="mt-2">
            {exercises.map((exercise) => (
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

export default SqlPlayground;
