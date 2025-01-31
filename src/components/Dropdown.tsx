import { useState } from "react";

const Dropdown = () => {
  const placeholder = "Search tencnology...";

  const options = [
    { label: "JavaScript", value: "javascript" },
    { label: "Typescript", value: "typescript" },
    { label: "Html", value: "html" },
    { label: "Css", value: "css" },
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Vue", value: "vue" },
    { label: "Node", value: "node" },
    { label: "Java", value: "java" },
    { label: "Php", value: "php" },
    { label: "Next", value: "next" },
    { label: "Spring", value: "spring" },
  ];

  type Option = {
    label: string;
    value: string;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    setSelected(option); // Salva l'opzione selezionata
    setIsOpen(false); // Chiudi il menu
    setSearchTerm(""); // Resetta la ricerca
  };

  return (
    <div
      className="dropdown-searchable"
      style={{ position: "relative", width: "300px" }}
    >
      {/* Input per la ricerca */}
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {/* Mostra l'opzione selezionata */}
      {selected && (
        <div style={{ marginTop: "8px", color: "#555" }}>
          Selezionato: <strong>{selected.label}</strong>
        </div>
      )}
      {/* Elenco delle opzioni */}
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            right: "0",
            maxHeight: "200px",
            overflowY: "auto",
            listStyle: "none",
            padding: "0",
            margin: "0",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: "10",
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement; // Casting a HTMLElement
                  target.style.backgroundColor = "#f0f0f0";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement; // Casting a HTMLElement
                  target.style.backgroundColor = "#fff";
                }}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li style={{ padding: "8px", color: "#999" }}>
              Nessun risultato trovato
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;