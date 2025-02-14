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
];
