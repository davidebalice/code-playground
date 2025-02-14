import { v4 as uuidv4 } from "uuid";

export const exercises = [
  {
    category: "Functions",
    exercises: [
      {
        id: uuidv4(),
        title: "Somma di due numeri",
        executable: true,
        description:
          "Crea una funzione che sommi due numeri e ritorni il risultato.",
        code: `function somma(a, b) {
  return a + b;
}
console.log(somma(3, 5));`,
      },
      {
        id: uuidv4(),
        title: "Verifica se numero pari o dispari",
        executable: true,
        description:
          "Crea una funzione che verifica se un numero è pari o dispari.",
        code: `function pariDispari(numero) {
  return numero % 2 === 0 ? 'Pari' : 'Dispari';
}
console.log(pariDispari(4));`,
      },
      {
        id: uuidv4(),
        title: "Generatore di numeri casuali",
        executable: true,
        description:
          "Crea una funzione che restituisce un numero casuale tra due valori.",
        code: `function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroCasuale(1, 10));`,
      },
      {
        id: uuidv4(),
        title: "Fattoriale di un numero",
        executable: true,
        description: "Crea una funzione che calcoli il fattoriale di un numero.",
        code: `function fattoriale(n) {
  if (n === 0) return 1;
  return n * fattoriale(n - 1);
}
console.log(fattoriale(5));`,
      },
      {
        id: uuidv4(),
        title: "Contare vocali in una stringa",
        executable: true,
        description: "Crea una funzione che conti le vocali in una stringa.",
        code: `function contaVocali(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(contaVocali("Hello World"));`,
      },
    ],
  },
  {
    category: "Classi",
    exercises: [
      {
        id: uuidv4(),
        title: "Classe Persona",
        executable: true,
        description: "Crea una classe 'Persona' con proprietà 'nome' e 'età'.",
        code: `class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }
}
const p = new Persona('Mario', 30);
console.log(p.nome, p.eta);`,
      },
      {
        id: uuidv4(),
        title: "Classe Quadrato",
        executable: true,
        description: "Crea una classe 'Quadrato' che calcoli l'area.",
        code: `class Quadrato {
  constructor(lato) {
    this.lato = lato;
  }

  area() {
    return this.lato * this.lato;
  }
}
const q = new Quadrato(5);
console.log(q.area());`,
      },
      {
        id: uuidv4(),
        title: "Classe Automobile",
        executable: true,
        description: "Crea una classe 'Automobile' con marca, modello e metodo 'dettagli'",
        code: `class Automobile {
  constructor(marca, modello) {
    this.marca = marca;
    this.modello = modello;
  }

  dettagli() {
    return \`\${this.marca} \${this.modello}\`;
  }
}
const auto = new Automobile('Toyota', 'Yaris');
console.log(auto.dettagli());`,
      },
    ],
  },
  {
    category: "Array e Oggetti",
    exercises: [
      {
        id: uuidv4(),
        title: "Filtrare numeri pari",
        executable: true,
        description: "Crea una funzione che filtri i numeri pari da un array.",
        code: `function filtraPari(array) {
  return array.filter(num => num % 2 === 0);
}
console.log(filtraPari([1, 2, 3, 4, 5, 6]));`,
      },
      {
        id: uuidv4(),
        title: "Somma valori di un array di oggetti",
        executable: true,
        description:
          "Crea una funzione che sommi tutti i prezzi di un array di oggetti.",
        code: `const prodotti = [
  { nome: 'Mela', prezzo: 1 },
  { nome: 'Banana', prezzo: 2 },
  { nome: 'Arancia', prezzo: 1.5 }
];

function sommaPrezzi(lista) {
  return lista.reduce((acc, item) => acc + item.prezzo, 0);
}
console.log(sommaPrezzi(prodotti));`,
      },
    ],
  },
  {
    category: "Async / Promises",
    exercises: [
      {
        id: uuidv4(),
        title: "Simulare un'operazione asincrona",
        executable: true,
        description:
          "Crea una funzione che restituisca una promessa che si risolve dopo 2 secondi.",
        code: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log('2 secondi dopo...'));`,
      },
      {
        id: uuidv4(),
        title: "Fetch dati da API fittizia",
        executable: false,
        description: "Utilizza fetch per recuperare dati da una API fittizia.",
        code: `async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}
fetchData();`,
      },
    ],
  },

  {
    category: "Filesystem",
    exercises: [
      {
        id: uuidv4(),
        title: "Lettura di un file",
        executable: false,
        description:
          "Utilizza il modulo fs per leggere il contenuto di un file.",
        code: `const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});`,
      },

      {
        id: uuidv4(),
        title: "Scrittura su file",
        executable: false,
        description: "Utilizza il modulo fs per svrivere su un file.",
        code: `
const fs = require('fs');

const content = "Ciao, questo è un testo scritto su un file!";

fs.writeFile('output.txt', content, (err) => {
if (err) {
    console.error("Errore nella scrittura del file", err);
    return;
}
console.log("File scritto con successo!");
});
`,
      },
    ],
  },

  {
    category: "Server http",
    exercises: [
      {
        id: uuidv4(),
        title: "Creazione di un server HTTP con Node.js",
        executable: false,
        description:
          "Crea un semplice server HTTP in Node.js che risponde con 'Hello World!'.",
        code: `const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!');
});

server.listen(3000, () => {
console.log('Server in ascolto sulla porta 3000');
});`,
      },

      {
        id: uuidv4(),
        title: "Gestione richieste HTTP",
        executable: false,
        description: "",
        code: `
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
  fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Errore nel recupero dei dati');
      return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
  });
  } else {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Pagina non trovata');
  }
});

server.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});
`,
      },
    ],
  },
];
















/*













import { v4 as uuidv4 } from "uuid";

export const exercises = [
  {
    category: "Functions",
    exercises: [
    
    ],
  },
  {
    category: "Classi e OOP",
    exercises: [
     
    ],
  },
  {
    category: "Array e Oggetti",
    exercises: [
     
    ],
  },
  {
    category: "Async / Promises",
    exercises: [
      {
        id: uuidv4(),
        title: "Chiamata API con gestione errori",
        executable: true,
        description: "Esegui una chiamata fetch con gestione degli errori.",
        code: `async function fetchConErrori() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) throw new Error('Errore nella richiesta');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
fetchConErrori();`,
      },
    ],
  },
  {
    category: "Filesystem",
    exercises: [
      {
        id: uuidv4(),
        title: "Leggere JSON da file",
        executable: false,
        description: "Leggi e parse un file JSON usando fs.",
        code: `const fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const json = JSON.parse(data);
  console.log(json);
});`,
      },
    ],
  },
  {
    category: "Server HTTP",
    exercises: [
      {
        id: uuidv4(),
        title: "Server con Express",
        executable: false,
        description: "Crea un server HTTP con Express.js",
        code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server in ascolto su http://localhost:3000');
});`,
      },
    ],
  },
];
*/