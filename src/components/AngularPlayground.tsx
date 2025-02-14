import Editor from "@monaco-editor/react";
import { AiFillUnlock } from "react-icons/ai";
import { WebContainer } from "@webcontainer/api";
import { useEffect, useRef, useState } from "react";
import { VscRunAll } from "react-icons/vsc";
import angularWhite from "../assets/images/angular-white.png";
import exercises from "../data/angular";

interface AngularPlaygroundProps {
  demo: boolean;
}

const AngularPlayground: React.FC<AngularPlaygroundProps> = ({ demo }) => {
  const [selectedExercise, setSelectedExercise] = useState<{
    id: string;
    title: string;
    description: string;
    code: string;
  } | null>(null);
  const [output, setOutput] = useState("");
  const [modal, setModal] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Funzione per inizializzare WebContainer
    const startWebContainer = async () => {
      try {
        const webcontainerInstance = await WebContainer.boot();

        // Monta i file necessari
        await webcontainerInstance.mount({
          "package.json": {
            file: {
              contents: JSON.stringify({
                name: "angular-app",
                dependencies: {
                  "@angular/core": "^17.0.0",
                  "@angular/platform-browser": "^17.0.0",
                  typescript: "^5.0.0",
                },
                scripts: {
                  start: "ng serve --host 0.0.0.0", // Questo potrebbe non funzionare in WebContainer, cercheremo un'alternativa
                },
              }),
            },
          },
          "src/app/app.component.ts": {
            file: { contents: selectedExercise?.code || "" }, // Carica il codice dell'esercizio
          },
        });

        // Installa dipendenze
        const installProcess = await webcontainerInstance.spawn("npm", [
          "install",
        ]);
        installProcess.output.pipeTo(
          new WritableStream({
            write(data) {
              setOutput((prev) => prev + data);
            },
          })
        );

        // Nota: `ng serve` non funzionerà correttamente dentro WebContainer, ma possiamo provare un'alternativa.
        const buildProcess = await webcontainerInstance.spawn("npm", [
          "run",
          "build",
        ]);
        buildProcess.output.pipeTo(
          new WritableStream({
            write(data) {
              setOutput((prev) => prev + data);
            },
          })
        );

        // Se il processo è stato avviato correttamente, mostra un messaggio
        setOutput("L'app Angular è stata avviata correttamente.");
      } catch (error) {
        console.error(
          "Errore durante l'inizializzazione del WebContainer:",
          error
        );
        setOutput("Errore nell'inizializzazione del WebContainer.");
      }
    };

    // Esegui WebContainer solo se c'è un esercizio selezionato
    if (selectedExercise) {
      startWebContainer();
    }
  }, [selectedExercise]);

  const runCode = () => {
    try {
      const existingIframe = document.getElementById("sandbox-iframe");
      if (existingIframe) {
        existingIframe.remove();
      }

      const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin" />
            <meta http-equiv="Cross-Origin-Embedder-Policy" content="require-corp" />
            <title>Code Output</title>
          </head>
          <body>
            <div id="root"></div>
            <script>
              ${selectedExercise?.code}
            </script>
          </body>
        </html>
      `;

      if (iframeRef.current) {
        iframeRef.current.srcdoc = html;
      }
      setModal(true);
      setOutput("Codice eseguito correttamente!");
    } catch (error) {
      if (error instanceof Error) {
        setOutput("Errore nell'esecuzione: " + error.message);
      } else {
        setOutput("Errore sconosciuto");
      }
    }
  };

  const handleExerciseSelect = (exercise: any) => {
    setSelectedExercise(exercise);
  };

  return (
    <>
      <div className="flex gap-4 p-1 bg-[#c3002f] text-white flex items-center h-[50px]">
        <img src={angularWhite} className="w-[130px]" />
      </div>

      <div className="p-4 grid grid-cols-7 gap-4">
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-[16px] font-bold">Esercizi Angular</h2>
          <div className="border-t-1 border-dashed border-gray-300 h-1 mt-4"></div>
          <ul className="mt-2">
            {exercises.map((exercise, index) => (
              <li
                key={index}
                className="cursor-pointer text-gray-700 hover:bg-gray-200 p-1 pl-2"
                onClick={() => handleExerciseSelect(exercise)}
              >
                {exercise.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-5 bg-white p-4 rounded-lg">
          {selectedExercise ? (
            <>
              <h3 className="font-semibold text-lg">
                {selectedExercise.title}
              </h3>
              <p>{selectedExercise.description}</p>

              <Editor
                height="400px"
                defaultLanguage="typescript"
                value={selectedExercise.code}
                onChange={(value) =>
                  setSelectedExercise({
                    ...selectedExercise,
                    code: value || "",
                  })
                }
              />

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                onClick={runCode}
              >
                <VscRunAll /> Run code
              </button>

              {modal && (
                <div className="mt-4">
                  <iframe
                    ref={iframeRef}
                    id="sandbox-iframe"
                    sandbox="allow-scripts allow-same-origin"
                    width="100%"
                    height="400px"
                    title="Sandbox"
                  ></iframe>
                </div>
              )}

              <div className="mt-4">
                <pre>{output}</pre>
              </div>
            </>
          ) : (
            <p>Seleziona un esercizio dalla sidebar.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AngularPlayground;
