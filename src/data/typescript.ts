import { v4 as uuidv4 } from "uuid";

export const exercises = [
  {
    category: "Numbers",
    exercises: [
      {
        id: uuidv4(),
        title: "Somma di due numeri",
        description:
          "Crea una funzione che sommi due numeri e ritorni il risultato.",
        code: `//funzione semplice
  function somma(a: number, b: number): number {
  return a + b;
}
console.log(somma(3, 5));

//funzione che somma i numeri di un array
function sum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum([1, 2, 3, 4]));
`,
      },
      {
        id: uuidv4(),
        title: "Pari o dispari",
        description:
          "Crea una funzione che verifica se un numero è pari o dispari.",
        code: `function pariDispari(numero: number): string {
  return \`\${numero} è \${numero % 2 === 0 ? 'Pari' : 'Dispari'}\`;
}
console.log(pariDispari(4));
console.log(pariDispari(3));`,
      },
      {
        id: uuidv4(),
        title: "Calcola il fattoriale",
        description:
          "Crea una funzione che calcoli il fattoriale di un numero.",
        code: `//funzione ricorsiva, richiama se stessa fino ad n = 0
  function fattoriale(n: number): number {
  if (n === 0) return 1;
  return n * fattoriale(n - 1);
}
console.log(fattoriale(5));`,
      },
      {
        id: uuidv4(),
        title: "Moltiplicazione di due numeri",
        description: "Crea una funzione che moltiplichi due numeri.",
        code: `function moltiplica(a: number, b: number): number {
  return a * b;
}
console.log(moltiplica(4, 3));`,
      },
      {
        id: uuidv4(),
        title: "Converge minuti in ore",
        description: "Crea una funzione che converte i minuti in ore.",
        code: `function convertiInOre(minuti: number): number {
  return minuti / 60;
}
console.log(convertiInOre(120));`,
      },
      {
        id: uuidv4(),
        title: "Generatore di numeri casuali",
        description:
          "Crea una funzione che restituisce un numero casuale tra due valori.",
        code: `function numeroCasuale(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroCasuale(1, 10));`,
      },
      {
        id: uuidv4(),
        title: "Funzione per somma di numeri in un array",
        description: "Crea una funzione che sommi tutti i numeri in un array.",
        code: `function sommaArray(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sommaArray([1, 2, 3, 4]));`,
      },

      {
        id: uuidv4(),
        title: "Sequenza di Fibonacci",
        description:
          "Crea una funzione che generi i primi N numeri della sequenza di Fibonacci.",
        code: `
  function fibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  console.log(fibonacci(10));
        `,
      },
      {
        id: uuidv4(),
        title: "Massimo Comune Divisore (MCD)",
        description:
          "Crea una funzione che calcoli il massimo comune divisore (MCD) di due numeri.",
        code: `
function mcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(mcd(48, 18));
        `,
      },
      {
        id: uuidv4(),
        title: "Minimo Comune Multiplo (MCM)",
        description:
          "Crea una funzione che calcoli il minimo comune multiplo (MCM) di due numeri.",
        code: `
function mcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function mcm(a: number, b: number): number {
  return (a * b) / mcd(a, b);
}
console.log(mcm(4, 6));
        `,
      },
      {
        id: uuidv4(),
        title: "Numero primo",
        description: "Crea una funzione che verifichi se un numero è primo.",
        code: `
  function isPrimo(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  console.log(isPrimo(7));
  console.log(isPrimo(10));
        `,
      },
      {
        id: uuidv4(),
        title: "Scomposizione in fattori primi",
        description:
          "Crea una funzione che restituisca i fattori primi di un numero.",
        code: `
  function fattoriPrimi(n: number): number[] {
    let fattori: number[] = [];
    let divisore = 2;
    while (n > 1) {
      while (n % divisore === 0) {
        fattori.push(divisore);
        n = n / divisore;
      }
      divisore++;
    }
    return fattori;
  }
  console.log(fattoriPrimi(56));
        `,
      },
      {
        id: uuidv4(),
        title: "Verifica numero perfetto",
        description: "Crea una funzione che verifichi se un numero è perfetto.",
        code: `
  function isPerfetto(n: number): boolean {
    let sommaDivisori = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sommaDivisori += i;
      }
    }
    return sommaDivisori === n;
  }
  console.log(isPerfetto(6));
  console.log(isPerfetto(28));
  console.log(isPerfetto(10));
        `,
      },
      {
        id: uuidv4(),
        title: "Radice quadrata approssimata",
        description:
          "Crea una funzione che calcoli la radice quadrata di un numero con il metodo di Newton.",
        code: `
  function radiceQuadrata(n: number, precisione: number = 0.00001): number {
    let x = n;
    let y = (x + n / x) / 2;
    while (Math.abs(x - y) > precisione) {
      x = y;
      y = (x + n / x) / 2;
    }
    return x;
  }
  console.log(radiceQuadrata(25));
  console.log(radiceQuadrata(2));
        `,
      },
      {
        id: uuidv4(),
        title: "Potenza di un numero",
        description:
          "Crea una funzione che calcoli la potenza di un numero usando la ricorsione.",
        code: `
  function potenza(base: number, esponente: number): number {
    if (esponente === 0) return 1;
    return base * potenza(base, esponente - 1);
  }
  console.log(potenza(2, 3));
        `,
      },
    ],
  },

  {
    category: "Array",
    exercises: [
      {
        id: uuidv4(),
        title: "Numero più grande",
        description:
          "Crea una funzione che prenda un array di numeri e restituisca il più grande",
        code: `
const numeri = [3, 7, 2, 10, 5];

function trovaMassimo(numeri: number[]): number | null {
    if (numeri.length === 0) return null;
    return Math.max(...numeri);
}

console.log(trovaMassimo(numeri));

`,
      },
      {
        id: uuidv4(),
        title: "Somma numeri in array",
        description: "Crea una funzione che somma tutti i numeri in array",
        code: `
//example 1: reduce
function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum([1, 2, 3, 4]));

//example2: for cycle
function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

`,
      },

      {
        id: uuidv4(),
        title: "Numero più grande",
        description:
          "Crea una funzione che prenda un array di numeri e restituisca il più grande",
        code: `
      const numeri = [3, 7, 2, 10, 5];
      
      function trovaMassimo(numeri: number[]): number | null {
          if (numeri.length === 0) return null;
          return Math.max(...numeri);
      }
      
      console.log(trovaMassimo(numeri));
            `,
      },
      {
        id: uuidv4(),
        title: "Somma numeri in array",
        description: "Crea una funzione che somma tutti i numeri in array",
        code: `
      function sum(numbers: number[]): number {
        return numbers.reduce((acc, num) => acc + num, 0);
      }
      
      console.log(sum([1, 2, 3, 4]));
            `,
      },
      {
        id: uuidv4(),
        title: "Filtrare numeri pari",
        description:
          "Crea una funzione che restituisca solo i numeri pari di un array",
        code: `
      function numeriPari(numbers: number[]): number[] {
        return numbers.filter(num => num % 2 === 0);
      }
      
      console.log(numeriPari([1, 2, 3, 4, 5, 6]));
            `,
      },
      {
        id: uuidv4(),
        title: "Invertire un array",
        description: "Crea una funzione che inverta un array",
        code: `
      function invertiArray(arr: any[]): any[] {
        return arr.reverse();
      }
      
      console.log(invertiArray([1, 2, 3, 4, 5]));
            `,
      },
      {
        id: uuidv4(),
        title: "Prodotto dei numeri",
        description:
          "Crea una funzione che restituisca il prodotto di tutti i numeri in un array",
        code: `
      function product(numbers: number[]): number {
        return numbers.reduce((acc, num) => acc * num, 1);
      }
      
      console.log(product([1, 2, 3, 4]));
            `,
      },
      {
        id: uuidv4(),
        title: "Contare le occorrenze",
        description:
          "Crea una funzione che conti quante volte un valore appare in un array",
        code: `
      function contaOccorrenze(arr: any[], valore: any): number {
        return arr.filter(item => item === valore).length;
      }
      
      console.log(contaOccorrenze([1, 2, 3, 2, 4, 2], 2));
            `,
      },
      {
        id: uuidv4(),
        title: "Rimuovere duplicati",
        description: "Crea una funzione che rimuova i duplicati da un array",
        code: `
      function rimuoviDuplicati(arr: any[]): any[] {
        return [...new Set(arr)];
      }
      
      console.log(rimuoviDuplicati([1, 2, 2, 3, 4, 4, 5]));
            `,
      },
      {
        id: uuidv4(),
        title: "Unire due array",
        description: "Crea una funzione che unisca due array senza duplicati",
        code: `
      function unisciArray(arr1: any[], arr2: any[]): any[] {
        return [...new Set([...arr1, ...arr2])];
      }
      
      console.log(unisciArray([1, 2, 3], [3, 4, 5]));
            `,
      },
      {
        id: uuidv4(),
        title: "Sostituire un valore",
        description:
          "Crea una funzione che sostituisca un valore specifico in un array",
        code: `
      function sostituisciValore(arr: any[], oldVal: any, newVal: any): any[] {
        return arr.map(item => item === oldVal ? newVal : item);
      }
      
      console.log(sostituisciValore([1, 2, 3, 2, 4], 2, 99));
            `,
      },
      {
        id: uuidv4(),
        title: "Dividere un array in sotto-array",
        description:
          "Crea una funzione che divida un array in gruppi di dimensione specificata",
        code: `
      function chunkArray(arr: any[], size: number): any[][] {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
        }
        return result;
      }
      
      console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
            `,
      },

      {
        id: uuidv4(),
        title: "Usare split su una stringa",
        description: "Dividi una stringa in un array di parole.",
        code: `
      const frase = "Hello world! How are you?";
      const parole = frase.split(" ");
      console.log(parole);
            `,
      },

      {
        id: uuidv4(),
        title: "Pop - rimuovi elemento",
        description: "Rimuove l'ultimo elemento da un array e lo restituisce.",
        code: `
    const numeri = [1, 2, 3, 4, 5];
    console.log(numeri.pop());
    console.log(numeri);
        `,
      },
      {
        id: uuidv4(),
        title: "Pop - Esempio 2",
        description: "Rimuove l'ultimo elemento e lo salva in una variabile.",
        code: `
    const frutta = ["mela", "banana", "arancia"];
    const ultimo = frutta.pop();
    console.log(ultimo);
    console.log(frutta);
        `,
      },
      {
        id: uuidv4(),
        title: "Pop - Esempio 3",
        description: "Usa pop in un ciclo finché l'array non è vuoto.",
        code: `
    const stack = [10, 20, 30, 40];
    while (stack.length > 0) {
      console.log(stack.pop());
    }
    console.log(stack);
    if(stack.length === 0){
        console.log("Stack terminato");
    }
        `,
      },

      {
        id: uuidv4(),
        title: "Push - aggiungi alla fine",
        description: "Aggiungi un elemento alla fine dell'array.",
        code: `
      const numeri = [1, 2, 3];
      numeri.push(4);
      console.log(numeri);
            `,
      },
      {
        id: uuidv4(),
        title: "Shift - rimuovi primo elemento",
        description: "Rimuove il primo elemento da un array e lo restituisce.",
        code: `
    const numeri = [1, 2, 3, 4, 5];
    console.log(numeri.shift());
    console.log(numeri);
        `,
      },
      {
        id: uuidv4(),
        title: "Shift - Esempio 2",
        description: "Rimuove il primo elemento di una lista di nomi.",
        code: `
    const nomi = ["Alice", "Bob", "Charlie"];
    const primo = nomi.shift();
    console.log(primo);
    console.log(nomi);
        `,
      },
      {
        id: uuidv4(),
        title: "Shift - Esempio 3",
        description: "Usa shift per elaborare una coda.",
        code: `
    const coda = ["richiesta1", "richiesta2", "richiesta3"];
    while (coda.length > 0) {
      console.log("Elaborazione:", coda.shift());
    }
    console.log(coda);
    if(coda.length === 0){
        console.log("Coda terminata");
    }
        `,
      },
      {
        id: uuidv4(),
        title: "Unshift - aggiungi ad inizio array",
        description: "Aggiungi un elemento all'inizio di un array.",
        code: `
      const numeri = [2, 3, 4];
      numeri.unshift(1);
      console.log(numeri);
            `,
      },
      {
        id: uuidv4(),
        title: "Map - operazioni matematiche",
        description: "Moltiplica ogni numero in un array per 2.",
        code: `
      const numeri = [1, 2, 3, 4];
      const doppi = numeri.map(num => num * 2);
      console.log(doppi);
            `,
      },
      {
        id: uuidv4(),
        title: "Filter - filtrare numeri",
        description: "Filtra i numeri pari da un array.",
        code: `
      const numeri = [1, 2, 3, 4, 5, 6];
      const pari = numeri.filter(num => num % 2 === 0);
      console.log(pari);
            `,
      },
      {
        id: uuidv4(),
        title: "Reduce - operazioni matematiche",
        description: "Somma tutti i numeri di un array.",
        code: `
      const numeri = [1, 2, 3, 4];
      const somma = numeri.reduce((acc, num) => acc + num, 0);
      console.log(somma);
            `,
      },
      {
        id: uuidv4(),
        title: "Usare find",
        description: "Trova il primo numero maggiore di 10.",
        code: `
      const numeri = [4, 9, 12, 15];
      const maggioreDiDieci = numeri.find(num => num > 10);
      console.log(maggioreDiDieci);
            `,
      },
      {
        id: uuidv4(),
        title: "FindIndex - Trova l'indice primo numero pari",
        description: "Trova l'indice del primo numero pari.",
        code: `
      const numeri = [1, 3, 4, 7, 8];
      const indicePari = numeri.findIndex(num => num % 2 === 0);
      console.log(indicePari);
            `,
      },
      {
        id: uuidv4(),
        title: "Includes - verifica valore",
        description: "Verifica se un array contiene un certo valore.",
        code: `
      const frutta = ["mela", "banana", "arancia"];
      console.log(frutta.includes("banana"));
      console.log(frutta.includes("uva"));
            `,
      },
      {
        id: uuidv4(),
        title: "Slice - estrarre parte array",
        description: "Estrai una parte di un array.",
        code: `
      const numeri = [1, 2, 3, 4, 5];
      const parte = numeri.slice(1, 4);
      console.log(parte);
            `,
      },
      {
        id: uuidv4(),
        title: "Slice - copia array",
        description: "Copia array per intero.",
        code: `
      const numeri = [1, 2, 3, 4, 5];
      const numeri2 = numeri.slice();
      console.log(numeri);
      console.log(numeri2);
            `,
      },
      {
        id: uuidv4(),
        title: "Splice - rimuove ed aggiunge elementi",
        description: "Rimuovi elementi da un array e inseriscine altri.",
        code: `
      const numeri = [1, 2, 3, 4, 5];
      numeri.splice(2, 1, 99);
      console.log(numeri);

      const numeri2 = [1, 2, 3, 4, 5];
      numeri2.splice(2, 1);
      console.log(numeri2);
            `,
      },

      {
        id: uuidv4(),
        title: "Splice - Esempio 2",
        description: "Sostituisce un elemento in un array.",
        code: `
    const colori = ["rosso", "verde", "blu"];
    colori.splice(1, 1, "giallo");
    console.log(colori);
        `,
      },
      {
        id: uuidv4(),
        title: "Splice - Esempio 3",
        description: "Aggiunge elementi in una posizione specifica.",
        code: `
    const numeri = [1, 2, 3, 5];
    numeri.splice(3, 0, 4);
    console.log(numeri);
        `,
      },
    ],
  },
  {
    category: "Strings",
    exercises: [
      {
        id: uuidv4(),
        title: "Verifica palindromi",
        description:
          "Crea una funzione che verifica se una parola è un palindromo.",
        code: `function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('radar'));`,
      },
      {
        id: uuidv4(),
        title: "Count words",
        description: "Create function that counts words in a text",
        code: `
  function countWords(text: string, word: string): number {
    // If the text or word is empty, return 0
    if (!text || !word) return 0;
    
    // Create a regular expression to match the exact word, case-insensitive and global search
    const regex = new RegExp(\`\\\\b\${word}\\\\b\`, "gi");

    // Find all occurrences of the word in the text
    const match = text.match(regex);
    
    // Return the number of matches found, or 0 if there are none
    return match ? match.length : 0;
}

console.log(countWords("Hello world, hello everyone!", "hello"));

`,
      },

      {
        id: uuidv4(),
        title: "Palindrome",
        description: "Write a function that checks if a string is a palindrome",
        code: `
     function isPalindrome(str: string): boolean {
        // Convert the string to lowercase and remove all non-alphanumeric characters
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
        /*
        Compare the cleaned string with its reversed version
          split = splits the string into an array of characters
          reverse = reverses the order of elements in the array:
          join = recomposes the array into a string
        */
        return cleanedStr === cleanedStr.split("").reverse().join("");
    }
    
    console.log(isPalindrome("racecar"));
    console.log(isPalindrome("hello"));
    console.log(isPalindrome("A man, a plan, a canal, Panama"));
    console.log(isPalindrome("No 'x' in Nixon"));
`,
      },

      {
        id: uuidv4(),
        title: "Reverse a string",
        description: "Write a function that reverses a string.",
        code: `
     function reverseString(str: string): string {
        /*
          split = splits the string into an array of characters
          reverse = reverses the order of elements in the array:
          join = recomposes the array into a string
        */
        str = str.split("").reverse().join("")
        return str;
    }
    
    console.log(reverseString("hello world"));
    console.log(reverseString("typescript is a beautiful langiage"));
`,
      },
      {
        id: uuidv4(),
        title: "Remode duplicate",
        description: "Write a function that removes duplicates from a string.",
        code: `
  //example 1
  function removeDuplicateCharacters(str: string): string {
  let result = '';
  //A set to keep track of characters already encountered
  let seenChars = new Set<string>();
  //cycle set
  for (let char of str) {
    if (!seenChars.has(char)) {
      //add character to set
      seenChars.add(char);
      //add char to result
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicateCharacters("programming"));


//example 2
let result: string = '';
function removeDuplicateCharacters2(str: string): string {
  let seenChars = new Set();
  //cycle characters of string
  for (let char of str) {
      //add to set
      seenChars.add(char);
  }
  //Array.from = convert in array
  //join = convert array in string
  result = Array.from(seenChars).join('');
  return result;
}

console.log(removeDuplicateCharacters2("programmer"));



`,
      },

      {
        id: uuidv4(),
        title: "camelCase",
        description: "Write a function that converts a string to camelCase.",
        code: `
 function toCamelCase(str: string): string {
 //toLowerCase = convert string to lowercase
 //Regex /[^a-zA-Z0-9]+(.)/g = Search for non-alphanumeric characters followed by a letter (space + letter)
 //(_, char) => char.toUpperCase() = Removes the separator and converts the next letter to uppercase.
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}

console.log(toCamelCase("hello world"));
console.log(toCamelCase("convert THIS to camel case"));
console.log(toCamelCase("snake_case_example"));
console.log(toCamelCase("PascalCase Example"));



`,
      },
    ],
  },

  {
    category: "Classi",
    exercises: [
      {
        id: uuidv4(),
        title: "Classe Dipendente",
        description:
          "Crea una classe 'Dipendente' che calcola lo stipendio con il metodo 'calculateSalary'.",
        code: `class Employee {
    name: string;
    salary: number;
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
    calculateSalary() {
      return this.salary;
    }
  }`,
      },
      {
        id: uuidv4(),
        title: "Classe Persona",
        description: "Crea una classe 'Persona' con proprietà 'nome' e 'età'.",
        code: `class Persona {
  constructor(public nome: string, public eta: number) {}
}
const p = new Persona('Mario', 30);
console.log(p.nome, p.eta);`,
      },
      {
        id: uuidv4(),
        title: "Classe Animale",
        description:
          "Crea una classe 'Animale' con un metodo 'parla' che restituisce un suono.",
        code: `class Animale {
  constructor(public nome: string, public suono: string) {}
  
  parla(): string {
    return this.suono;
  }
}
const cane = new Animale('Cane', 'Bau');
console.log(cane.parla());`,
      },
      {
        id: uuidv4(),
        title: "Classe Quadrato",
        description: "Crea una classe 'Quadrato' che calcoli l'area.",
        code: `class Quadrato {
  constructor(public lato: number) {}

  area(): number {
    return this.lato * this.lato;
  }
}
const q = new Quadrato(5);
console.log(q.area());`,
      },
      {
        id: uuidv4(),
        title: "Classe Auto",
        description: "Crea una classe 'Auto' con proprietà 'modello' e 'anno'.",
        code: `class Auto {
  constructor(public modello: string, public anno: number) {}
}
const auto = new Auto('Fiat', 2020);
console.log(auto.modello, auto.anno);`,
      },
      {
        id: uuidv4(),
        title: "Classe Conto Bancario",
        description:
          "Crea una classe 'ContoBancario' con un metodo per depositare denaro.",
        code: `class ContoBancario {
  private saldo: number = 0;
  
  deposita(importo: number) {
    this.saldo += importo;
  }
  
  saldoConto(): number {
    return this.saldo;
  }
}
const conto = new ContoBancario();
conto.deposita(100);
console.log(conto.saldoConto());`,
      },
      {
        id: uuidv4(),
        title: "Classe Studente",
        description:
          "Crea una classe 'Studente' con proprietà 'nome', 'età' e 'media'.",
        code: `class Studente {
  constructor(public nome: string, public eta: number, public media: number) {}
}
const studente = new Studente('Anna', 21, 28);
console.log(studente.nome, studente.media);`,
      },
      {
        id: uuidv4(),
        title: "Classe Libro",
        description:
          "Crea una classe 'Libro' con un metodo per visualizzare il titolo e autore.",
        code: `class Libro {
  constructor(public titolo: string, public autore: string) {}
  
  visualizzaDettagli(): string {
    return \`Titolo: \${this.titolo}, Autore: \${this.autore}\`;
  }
}
const libro = new Libro('1984', 'George Orwell');
console.log(libro.visualizzaDettagli());`,
      },
      {
        id: uuidv4(),
        title: "Classe Prodotto",
        description:
          "Crea una classe 'Prodotto' con proprietà 'nome' e 'prezzo'.",
        code: `class Prodotto {
  constructor(public nome: string, public prezzo: number) {}
}
const prodotto = new Prodotto('Laptop', 1000);
console.log(prodotto.nome, prodotto.prezzo);`,
      },
      {
        id: uuidv4(),
        title: "Classe Forma",
        description: "Crea una classe 'Forma' con metodo per calcolare l'area.",
        code: `class Forma {
  area(): number {
    return 0;
  }
}
class Cerchio extends Forma {
  constructor(public raggio: number) {
    super();
  }

  area(): number {
    return Math.PI * this.raggio * this.raggio;
  }
}
const cerchio = new Cerchio(5);
console.log(cerchio.area());`,
      },
      {
        id: uuidv4(),
        title: "Classe Carrello",
        description:
          "Crea una classe 'Carrello' con un metodo per aggiungere prodotti.",
        code: `class Carrello {
  private prodotti: string[] = [];
  
  aggiungiProdotto(prodotto: string) {
    this.prodotti.push(prodotto);
  }
  
  visualizzaProdotti(): string[] {
    return this.prodotti;
  }
}
const carrello = new Carrello();
carrello.aggiungiProdotto('Cappuccino');
console.log(carrello.visualizzaProdotti());`,
      },

      {
        id: uuidv4(),
        title: "Ereditarietà con la classe Veicolo",
        description:
          "Crea una classe 'Veicolo' e una sottoclasse 'Bicicletta' che estende 'Veicolo'.",
        code: `class Vehicle {
           brand: string;
           constructor(brand: string) {
             this.brand = brand;
           }
         }
         class Bicycle extends Vehicle {
           type: string;
           constructor(brand: string, type: string) {
             super(brand);
             this.type = type;
           }
         }`,
      },
      {
        id: uuidv4(),
        title: "Classe Conto Bancario",
        description:
          "Crea una classe 'ContoBancario' con metodi per depositare e prelevare denaro.",
        code: `class BankAccount {
           balance: number;
           constructor() {
             this.balance = 0;
           }
           deposit(amount: number) {
             this.balance += amount;
           }
           withdraw(amount: number) {
             this.balance -= amount;
           }
         }`,
      },
      {
        id: uuidv4(),
        title: "Classe Rettangolo con metodi",
        description:
          "Crea una classe 'Rettangolo' che calcoli il perimetro e l'area.",
        code: `class Rectangle {
           width: number;
           height: number;
           constructor(width: number, height: number) {
             this.width = width;
             this.height = height;
           }
           getArea() {
             return this.width * this.height;
           }
           getPerimeter() {
             return 2 * (this.width + this.height);
           }
         }`,
      },
      {
        id: uuidv4(),
        title: "Classe Libro",
        description:
          "Crea una classe 'Libro' con proprietà come titolo, autore e anno di pubblicazione.",
        code: `class Book {
           title: string;
           author: string;
           year: number;
           constructor(title: string, author: string, year: number) {
             this.title = title;
             this.author = author;
             this.year = year;
           }
         }`,
      },
      {
        id: uuidv4(),
        title: "Interfaccia Animale",
        description: "Crea un'interfaccia 'Animale' con un metodo 'makeSound'.",
        code: `interface Animal {
           makeSound(): void;
         }
         class Dog implements Animal {
           makeSound() {
             console.log('Bau');
           }
         }`,
      },
      {
        id: uuidv4(),
        title: "Classe Punto con metodi",
        description:
          "Crea una classe 'Punto' con metodi per ottenere la distanza tra due punti.",
        code: `class Point {
           x: number;
           y: number;
           constructor(x: number, y: number) {
             this.x = x;
             this.y = y;
           }
           distanceTo(other: Point): number {
             return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
           }
         }`,
      },
    ],
  },

  {
    category: "Utility Types",
    exercises: [
      {
        id: uuidv4(),
        title: "Utilizzo di keyof e Record",
        description:
          "Crea un tipo che mappi una chiave di un oggetto ai suoi valori.",
        code: `type UserKeys = keyof User;
        type UserRecord = Record<UserKeys, string | number>;`,
      },
      {
        id: uuidv4(),
        title: "Manipolazione dei tipi con Utility Types",
        description:
          "Accetta un oggetto utente parziale e lo completa con valori di default.",
        code: `function completeUser(user: Partial<User>): User {
          return {
            id: user.id ?? 0,
            name: user.name ?? "Anonimo",
            email: user.email ?? "nessuna email",
          };
        }
        
        console.log(completeUser({ name: "Luca" }));`,
      },
    ],
  },
  {
    category: "Funzioni Avanzate",
    exercises: [
      {
        id: uuidv4(),
        title: "Funzione con tipo generico vincolato",
        description: "Accetta solo oggetti con una proprietà id numerica.",
        code: `function getId<T extends { id: number }>(obj: T): number {
          return obj.id;
        }
        
        console.log(getId({ id: 42, name: "Test" }));`,
      },
    ],
  },

  {
    category: "Callback",
    exercises: [
      {
        id: uuidv4(),
        title: "callback types",
        description: "Basic callback example",
        code: `
function hello(name: string, callback: (message: string) => void): void {
  const message = \`Ciao, \${name}!\`;
  callback(message);
}

function showMessage(message: string): void {
  console.log(message);
}

hello("Luca", showMessage);
`,
      },

      {
        id: uuidv4(),
        title: "callback async",
        description: "Callback with asynchronous operations (setTimeout)",
        code: `
    function asyncOperation(callback: (risultato: number) => void): void {
      setTimeout(() => {
        const risultato = Math.random() * 100;
        callback(risultato);
      }, 2000);
    }
    
    asyncOperation((number) => {
      console.log("Risultato ottenuto:", number.toFixed(2));
    });
        `,
      },

      {
        id: uuidv4(),
        title: "callback array",
        description: "Callback with array operations (map)",
        code: `
         function modificaArray(
        numeri: number[],
        callback: (n: number) => number
      ): number[] {
        return numeri.map(callback);
      }
      
      const numeri = [1, 2, 3, 4, 5];
      
      const quadrati = modificaArray(numeri, (n) => n * n);
      
      console.log(quadrati);
        `,
      },

      {
        id: uuidv4(),
        title: "callback error",
        description: "Callback with error handling",
        code: `
             
function leggiDati(callback: (errore: string | null, dati?: string) => void): void {
  setTimeout(() => {
    const errore = Math.random() > 0.5 ? "Errore nel caricamento" : null;
    const dati = errore ? undefined : "Dati caricati con successo";
    callback(errore, dati);
  }, 1000);
}

leggiDati((errore, dati) => {
  if (errore) {
    console.error("Errore:", errore);
  } else {
    console.log("Successo:", dati);
  }
});

      
        `,
      },
    ],
  },

  {
    category: "Promises",
    exercises: [
      {
        id: uuidv4(),
        title: "Simple Promise",
        description: "Esegui un'operazione asincrona usando una Promise.",
        code: `
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Operazione completata!");
          }, 2000);
        });

        myPromise
          .then(result => {
            console.log(result);"
          })
          .catch(error => {
            console.error(error);
          });
        `,
      },
      {
        id: uuidv4(),
        title: "Promise with Reject",
        description:
          "Esegui una Promise che viene rifiutata e gestisci l'errore.",
        code: `
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("Errore nell'operazione.");
          }, 2000);
        });

        myPromise
          .then(result => {
            console.log(result);
          })
          .catch(error => {
            console.error(error);"
          });
        `,
      },
      {
        id: uuidv4(),
        title: "Chaining Promises",
        description: "Collega più Promises in sequenza.",
        code: `
        const firstPromise = new Promise((resolve) => {
          setTimeout(() => resolve("Prima operazione completata"), 1000);
        });

        const secondPromise = new Promise((resolve) => {
          setTimeout(() => resolve("Seconda operazione completata"), 1000);
        });

        firstPromise
          .then(result => {
            console.log(result);"
            return secondPromise;
          })
          .then(result => {
            console.log(result);"
          })
          .catch(error => {
            console.error(error);
          });
        `,
      },
    ],
  },

  {
    category: "async/await",
    exercises: [
      {
        id: uuidv4(),
        title: "Async/Await with Promise",
        description: "Usa async/await per semplificare l'uso di una Promise.",
        code: `
        async function myAsyncFunction() {
          const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Operazione completata!"), 2000);
          });

          try {
            const result = await myPromise;
            console.log(result);"
          } catch (error) {
            console.error(error);
          }
        }

        myAsyncFunction();
        `,
      },
      {
        id: uuidv4(),
        title: "Async/Await with Try/Catch",
        description: "Gestisci gli errori con async/await e try/catch.",
        code: `
        async function myAsyncFunction() {
          const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => reject("Errore nell'operazione."), 2000);
          });

          try {
            const result = await myPromise;
            console.log(result);
          } catch (error) {
            console.error(error);"
          }
        }

        myAsyncFunction();
        `,
      },
      {
        id: uuidv4(),
        title: "Chaining with Async/Await",
        description: "Collega più operazioni asincrone con async/await.",
        code: `
        async function performOperations() {
          const firstOperation = new Promise((resolve) => {
            setTimeout(() => resolve("Prima operazione completata"), 1000);
          });

          const secondOperation = new Promise((resolve) => {
            setTimeout(() => resolve("Seconda operazione completata"), 1000);
          });

          try {
            const firstResult = await firstOperation;
            console.log(firstResult);"
            const secondResult = await secondOperation;
            console.log(secondResult);"
          } catch (error) {
            console.error(error);
          }
        }

        performOperations();
        `,
      },
    ],
  },

  {
    category: "Algoritmi",
    exercises: [
      {
        id: uuidv4(),
        title: "Bubble Sort",
        description: "Implementa l'algoritmo di ordinamento Bubble Sort.",
        code: `
// Algoritmo di ordinamento Bubble Sort

/*
Primo ciclo (for i): controlla quante volte bisogna ripetere il processo. Dopo ogni iterazione,
l'elemento più grande "sale" alla sua posizione finale.
Secondo ciclo (for j): scorre l'array confrontando coppie di elementi adiacenti e li scambia se necessario.
*/

function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Scambia gli elementi se non sono in ordine
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));`,
      },
      {
        id: uuidv4(),
        title: "Quick Sort",
        description: "Implementa l'algoritmo di ordinamento Quick Sort.",
        code: `
// Algoritmo di ordinamento Quick Sort
function quickSort(arr: number[]): number[] {
  // Caso base: se l'array ha 0 o 1 elemento, è già ordinato
  if (arr.length <= 1) return arr;

  // Scegliamo l'ultimo elemento come pivot
  let pivot = arr[arr.length - 1];

  // Creiamo due sotto-array: uno con gli elementi minori del pivot e uno con quelli maggiori
  let left = arr.filter((el) => el < pivot);  // Elementi minori del pivot
  let right = arr.filter((el) => el > pivot); // Elementi maggiori del pivot

  // Ordiniamo ricorsivamente i sotto-array e uniamo il risultato con il pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Eseguiamo l'algoritmo su un array di numeri
console.log(quickSort([10, 7, 8, 9, 1, 5]));
`,
      },
      {
        id: uuidv4(),
        title: "Merge Sort",
        description: "Implementa l'algoritmo di ordinamento Merge Sort.",
        code: `
// Algoritmo di ordinamento Merge Sort
function mergeSort(arr: number[]): number[] {
  // Caso base: se l'array ha un solo elemento, è già ordinato
  if (arr.length <= 1) return arr;
  
  // Trova il punto medio dell'array
  let mid = Math.floor(arr.length / 2);
  
  // Divide l'array in due metà, ordinandole ricorsivamente
  let left = mergeSort(arr.slice(0, mid)); // Parte sinistra
  let right = mergeSort(arr.slice(mid));   // Parte destra
  
  // Unisce le due parti ordinate
  return merge(left, right);
}

// Funzione di merge per unire due array ordinati
function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  
  // Confronta i primi elementi di left e right e li unisce in un array ordinato
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift()! : right.shift()!);
  }

  // Restituisce l'array risultante unendo gli elementi rimanenti di left e right
  return [...result, ...left, ...right];
}

// Eseguiamo l'algoritmo di ordinamento su un array di numeri
console.log(mergeSort([10, 3, 15, 7, 8, 23, 74, 18]));


`,
      },
      {
        id: uuidv4(),
        title: "Selection Sort",
        description:
          "Algoritmo di ordinamento che trova il minimo e lo sposta in posizione.",
        code: `
       function selectionSort(arr: number[]): number[] {
// Ciclo esterno per ogni elemento nell'array
for (let i = 0; i < arr.length - 1; i++) {
  let minIdx = i; // Assumi che l'elemento corrente sia il più piccolo
  // Ciclo interno per confrontare l'elemento corrente con gli altri
  for (let j = i + 1; j < arr.length; j++) {
    // Se trovi un elemento più piccolo, aggiorna l'indice del minimo
    if (arr[j] < arr[minIdx]) {
      minIdx = j;
    }
  }
  // Scambia l'elemento corrente con l'elemento più piccolo trovato
  [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
}
return arr; // Restituisci l'array ordinato
}

console.log(selectionSort([64, 25, 12, 22, 11]));
      `,
      },
      {
        id: uuidv4(),
        title: "Radix Sort",
        description:
          "Algoritmo di ordinamento che utilizza la rappresentazione dei numeri in base.",
        code: `
// Funzione principale di Radix Sort
function radixSort(arr: number[]): number[] {
  // Trova il valore massimo nell'array per determinare il numero di passaggi
  let max = Math.max(...arr);
  let exp = 1; // Inizialmente ordiniamo per la cifra delle unità
  // Continua fino a quando non ci sono più cifre da ordinare
  while (Math.floor(max / exp) > 0) {
    // Ordina l'array utilizzando il Counting Sort per la cifra corrente (exp)
    arr = countingSort(arr, exp);
    exp *= 10; // Passa alla cifra successiva (decine, centinaia, ecc.)
  }
  return arr; // Restituisce l'array ordinato
}

// Funzione di Counting Sort utilizzata per ogni cifra di Radix Sort
function countingSort(arr: number[], exp: number): number[] {
  const output = new Array(arr.length); // Array di output per memorizzare l'ordinamento temporaneo
  const count = new Array(10).fill(0); // Array per tenere traccia delle occorrenze di ciascun valore

  // Conta l'occorrenza di ciascuna cifra nell'array
  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++; // Incrementa il conteggio per la cifra corrente
  }

  // Modifica l'array count per che contenga le posizioni finali di ciascun numero
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1]; // Crea una somma cumulativa
  }

  // Costruisce l'array ordinato sulla base delle posizioni calcolate in count[]
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i]; // Posiziona l'elemento nell'array di output
    count[Math.floor(arr[i] / exp) % 10]--; // Decrementa il conteggio per quella cifra
  }

  return output; // Restituisce l'array ordinato
}

// Esegui Radix Sort sull'array di esempio
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

      `,
      },
      {
        id: uuidv4(),
        title: "Anagrammi",
        description:
          "Crea una funzione che verifichi se due stringhe sono anagrammi.",
        code: `
// Controlla se due stringhe sono anagrammi
function sonoAnagrammi(str1: string, str2: string): boolean {
  // Converte le stringhe in array di caratteri, le ordina e le riconverte in stringa
  // Infine, confronta le due stringhe ordinate
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
  
console.log(sonoAnagrammi("roma", "amor"));`,
      },
      {
        id: uuidv4(),
        title: "Ricerca Lineare",
        description: "Implementa un algoritmo di ricerca lineare.",
        code: `
// Algoritmo di ricerca lineare
function ricercaLineare(arr: number[], target: number): number {
  // Scorre l'array da sinistra a destra
  for (let i = 0; i < arr.length; i++) {
    // Controlla se l'elemento corrente è uguale al target
    if (arr[i] === target) return i; // Ritorna l'indice se trova l'elemento
  }
  // Ritorna -1 se l'elemento non è presente nell'array
  return -1;
}

console.log(ricercaLineare([10, 20, 30, 40], 30));`,
      },

      {
        id: uuidv4(),
        title: "Fibonacci Sequence",
        description:
          "Sequenza di Fibonacci calcolata sia con ricorsione che iterazione.",
        code: `
// Fibonacci (Ricorsivo)
function fibonacciRecursive(n: number): number {
  // Caso base: se n è 0 o 1, restituisci n
  if (n <= 1) return n;
  // Chiamata ricorsiva per calcolare il valore di Fibonacci
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6)); // Esegui il calcolo di Fibonacci con n = 6

// Fibonacci (Iterativo)
function fibonacciIterative(n: number): number {
  let a = 0, b = 1;
  // Ciclo per calcolare i numeri di Fibonacci in modo iterativo
  for (let i = 2; i <= n; i++) {
    let temp = a + b; // Calcola il prossimo numero di Fibonacci
    a = b; // Aggiorna a con il valore precedente di b
    b = temp; // Aggiorna b con il nuovo valore
  }
  // Se n è 0, restituisci a; altrimenti, restituisci b
  return n === 0 ? a : b;
}

console.log(fibonacciIterative(6)); // Esegui il calcolo di Fibonacci con n = 6

      `,
      },

      {
        id: uuidv4(),
        title: "MCD (massimo comune divisore)",
        description:
          "Algoritmo di Euclide per calcolare il massimo comune divisore.",
        code: `
// Algoritmo per calcolare il massimo comune divisore (MCD) tra due numeri
function mcd(a: number, b: number): number {
  // Finché b non è zero, continua a calcolare il resto della divisione
  while (b !== 0) {
    let temp = b; // Salva b in una variabile temporanea
    b = a % b; // Calcola il resto della divisione tra a e b
    a = temp; // Assegna il valore di b a a
  }
  // Quando b diventa zero, a contiene il massimo comune divisore
  return a;
}

console.log(mcd(56, 98));

      `,
      },
      {
        id: uuidv4(),
        title: "MCM (minimo comune multiplo)",
        description:
          "Algoritmo di Euclide per calcolare il massimo comune divisore.",
        code: `
// Algoritmo per calcolare il minimo comune multiplo (MCM) tra due numeri
function mcd(a: number, b: number): number {
  // Finché b non è zero, continua a calcolare il resto della divisione
  while (b !== 0) {
    let temp = b; // Salva b in una variabile temporanea
    b = a % b; // Calcola il resto della divisione tra a e b
    a = temp; // Assegna il valore di b a a
  }
  // Quando b diventa zero, a contiene il massimo comune divisore
  return a;
}

function mcm(a: number, b: number): number {
  // MCM si calcola come il prodotto dei due numeri diviso il loro MCD
  return (a * b) / mcd(a, b); // Usa la funzione mcd per calcolare il MCD e poi calcola il MCM
}

console.log(mcm(56, 98));

      `,
      },

      {
        id: uuidv4(),
        title: "Torre di Hanoi",
        description: "Risolvi il problema della Torre di Hanoi.",
        code: `
// Algoritmo per risolvere la Torre di Hanoi
function torreDiHanoi(n: number, from: string, to: string, aux: string): void {
  // Caso base: se c'è solo un disco, lo spostiamo direttamente dalla torre di origine alla torre di destinazione
  if (n === 1) {
    console.log(\`Sposta il disco 1 da \${from} a \${to}\`);
    return;
  }
  
  // Passaggio ricorsivo: spostiamo n-1 dischi dalla torre di origine alla torre ausiliaria
  torreDiHanoi(n - 1, from, aux, to);
  
  // Spostiamo il disco n dalla torre di origine alla torre di destinazione
  console.log(\`Sposta il disco \${n} da \${from} a \${to}\`);
  
  // Spostiamo i n-1 dischi dalla torre ausiliaria alla torre di destinazione
  torreDiHanoi(n - 1, aux, to, from);
}

// Eseguiamo l'algoritmo per 3 dischi, con le torri denominate 'A', 'B', e 'C'
torreDiHanoi(3, 'A', 'C', 'B');`,
      },
      {
        id: uuidv4(),
        title: "Ricerca Binaria",
        description: "Implementa un algoritmo di ricerca binaria.",
        code: `
// Algoritmo di ricerca binaria
function ricercaBinaria(arr: number[], target: number): number {
  // Inizializza gli indici di inizio (left) e fine (right) dell'array
  let left = 0, right = arr.length - 1;

  // Continua a cercare finché l'indice left non supera l'indice right
  while (left <= right) {
    // Calcola l'indice centrale dell'array
    let mid = Math.floor((left + right) / 2);
    
    // Se l'elemento centrale è uguale al target, restituisci l'indice
    if (arr[mid] === target) return mid; 

    // Se l'elemento centrale è minore del target, cerca nella metà destra
    if (arr[mid] < target) left = mid + 1;
    // Altrimenti, cerca nella metà sinistra
    else right = mid - 1;
  }

  // Se il target non è presente nell'array, restituisci -1
  return -1; 
}

// Eseguiamo la funzione di ricerca binaria su un array ordinato
console.log(ricercaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));`,
      },

      {
        id: uuidv4(),
        title: "KMP String Matching Algorithm",
        description:
          "Algoritmo di ricerca di stringhe che utilizza la precomputazione del pattern.",
        code: `
// Funzione che implementa l'algoritmo di ricerca KMP (Knuth-Morris-Pratt)
function KMPSearch(text: string, pattern: string): number {
  // Costruisce l'array LPS (Longest Prefix Suffix) per il pattern
  const lps = buildLPS(pattern);
  let i = 0, j = 0;

  // Scorre il testo per cercare il pattern
  while (i < text.length) {
    // Se i caratteri corrispondono, continua a confrontare
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }
    
    // Se è stato trovato un match completo, ritorna l'indice
    if (j === pattern.length) {
      return i - j; // Trovato match
    } else if (i < text.length && text[i] !== pattern[j]) {
      // Se i caratteri non corrispondono, aggiorna l'indice j
      // usando l'array LPS per evitare confronti inutili
      if (j !== 0) {
        j = lps[j - 1]; // Torna al valore precedente dell'array LPS
      } else {
        i++; // Avanza nel testo
      }
    }
  }
  return -1; // Nessun match trovato
}

// Funzione per costruire l'array LPS (Longest Prefix Suffix)
function buildLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  // Costruisce l'array LPS scorrendo il pattern
  while (i < pattern.length) {
    // Se i caratteri corrispondono, incrementa la lunghezza del prefisso
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      // Se i caratteri non corrispondono, aggiorna la lunghezza del prefisso
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps; // Ritorna l'array LPS costruito
}


  
console.log(KMPSearch("ABABDABACDABABCABAB", "ABABCABAB"));
      `,
      },
    ],
  },
];
