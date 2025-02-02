export default `
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

// Esercizio 1: Contatore con useState
export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Conta: {count}</button>;
};

// Esercizio 2: Effetto collaterale con useEffect
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Secondi: {seconds}</div>;
};

// Esercizio 3: Gestione input con useState
export const TextInput = () => {
  const [text, setText] = useState("");
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

// Esercizio 4: Riferimenti a elementi con useRef
export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <button onClick={() => inputRef.current?.focus()}>Focus</button>;
};

// Esercizio 5: useMemo per calcoli costosi
export const ExpensiveCalculation = () => {
  const [num, setNum] = useState(2);
  const squared = useMemo(() => num * num, [num]);
  return <div>Quadrato di {num}: {squared}</div>;
};

// Esercizio 6: useCallback per memorizzare funzioni
export const CallbackExample = () => {
  const handleClick = useCallback(() => alert("Cliccato!"), []);
  return <button onClick={handleClick}>Click Me</button>;
};

// Esercizio 7: Toggle visibilità
export const ToggleVisibility = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Mostrato!</p>}
    </div>
  );
};

// Esercizio 8: Contatore con passo personalizzato
export const StepCounter = () => {
  const [count, setCount] = useState(0);
  const step = 5;
  return <button onClick={() => setCount(count + step)}>Conta: {count}</button>;
};

// Esercizio 9: Lista dinamica
export const DynamicList = () => {
  const [items, setItems] = useState<string[]>([]);
  return (
    <div>
      <button onClick={() => setItems([...items, \`Item \${items.length + 1}\`])}>Aggiungi</button>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
};

// Esercizio 10: Cambio di tema
export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <button onClick={() => setDark(!dark)}>Cambia Tema</button>
    </div>
  );
};
`
