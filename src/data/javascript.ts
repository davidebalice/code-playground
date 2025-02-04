import { v4 as uuidv4 } from "uuid";

export const exercises = [
  {
    category: "Funzioni",
    exercises: [
      {
        id: uuidv4(),
        title: "Somma di due numeri",
        description:
          "Crea una funzione che sommi due numeri e ritorni il risultato.",
        code: `//funzione semplice
  function somma(a, b) {
  return a + b;
}
console.log(somma(3, 5));

//funzione che somma i numeri di un array
function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum([1, 2, 3, 4]));
`,
      },
      {
        id: uuidv4(),
        title: "Verifica se numero pari o dispari",
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
        title: "Funzione di saluto",
        description:
          "Crea una funzione che restituisca un messaggio di saluto personalizzato.",
        code: `function saluto(nome: string): string {
  return 'Ciao, ' + nome + '!';
}
console.log(saluto('Mario'));`,
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
        title: "Funzione di concatenamento di stringhe",
        description: "Crea una funzione che concatenai due stringhe.",
        code: `function concatena(str1: string, str2: string): string {
  return str1 + str2;
}
console.log(concatena('Ciao', ' Mondo'));`,
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
        code: `type UserKeys = keyof User; // "id" | "name" | "email"
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
        
        // Test
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
        
        // Test
        console.log(getId({ id: 42, name: "Test" }));`,
      },
    ],
  },
];

/*

// src/data/typescript.ts
export const exercises = [
  {
    category: "Funzioni",
    exercises: [
     

      {
       id: uuidv4(),
        title: "Calcolo dell'area del cerchio",
        description: "Scrivi una funzione che calcoli l'area di un cerchio dato il raggio.",
        code: "function circleArea(radius: number): number { return Math.PI * radius * radius; }",
      },
      {
        id: uuidv4(),
        title: "Contare le vocali",
        description: "Scrivi una funzione che conti quante vocali ci sono in una stringa.",
        code: "function countVowels(str: string): number { return str.match(/[aeiou]/gi)?.length || 0; }",
      },
      {
        id: uuidv4(),
        title: "Factorial",
        description: "Scrivi una funzione che calcoli il fattoriale di un numero.",
        code: "function factorial(n: number): number { return n <= 1 ? 1 : n * factorial(n - 1); }",
      },
      {
        id: uuidv4(),
        title: "Concatenare array",
        description: "Scrivi una funzione che concatena due array.",
        code: "function concatenateArrays(arr1: number[], arr2: number[]): number[] { return arr1.concat(arr2); }",
      },
      {
       id: uuidv4(),
        title: "Verifica se una stringa è palindroma",
        description: "Scrivi una funzione che verifichi se una stringa è una palindroma.",
        code: "function isPalindrome(str: string): boolean { return str === str.split('').reverse().join(''); }",
      },
      {
        id: uuidv4(),
        title: "Trova il massimo tra tre numeri",
        description: "Scrivi una funzione che restituisca il massimo di tre numeri.",
        code: "function maxOfThree(a: number, b: number, c: number): number { return Math.max(a, b, c); }",
      },
      {
       id: uuidv4(),
        title: "Restituire l'elemento più grande di un array",
        description: "Scrivi una funzione che restituisca l'elemento più grande di un array.",
        code: "function largestNumber(arr: number[]): number { return Math.max(...arr); }",
      },
      {
       id: uuidv4(),
        title: "Converto una stringa in maiuscolo",
        description: "Scrivi una funzione che converta una stringa in maiuscolo.",
        code: "function toUpperCase(str: string): string { return str.toUpperCase(); }",
      },
    ],
  },
  {
    category: "Oggetti",
    exercises: [
      {
        id: uuidv4(),
        title: "Copiare un oggetto",
        description: "Scrivi una funzione che faccia una copia di un oggetto.",
        code: "function copyObject(obj: object): object { return {...obj}; }",
      },
      {
       id: uuidv4(),
        title: "Combinare due oggetti",
        description: "Scrivi una funzione che combini due oggetti in un unico oggetto.",
        code: "function mergeObjects(obj1: object, obj2: object): object { return {...obj1, ...obj2}; }",
      },
      {
       id: uuidv4(),
        title: "Verificare se una chiave esiste in un oggetto",
        description: "Scrivi una funzione che verifichi se una chiave esiste in un oggetto.",
        code: "function hasKey(obj: object, key: string): boolean { return key in obj; }",
      },
      {
       id: uuidv4(),
        title: "Ottieni i valori di un oggetto",
        description: "Scrivi una funzione che restituisca i valori di un oggetto.",
        code: "function getObjectValues(obj: object): any[] { return Object.values(obj); }",
      },
      {
       id: uuidv4(),
        title: "Filtrare un oggetto per valore",
        description: "Scrivi una funzione che filtri un oggetto in base ai valori.",
        code: "function filterObject(obj: object, value: any): object { return Object.fromEntries(Object.entries(obj).filter(([key, val]) => val === value)); }",
      },
      {
       id: uuidv4(),
        title: "Clonare un oggetto profondo",
        description: "Scrivi una funzione che clonasse un oggetto profondamente.",
        code: "function deepClone(obj: any): any { return JSON.parse(JSON.stringify(obj)); }",
      },
      {
       id: uuidv4(),
        title: "Contare le proprietà di un oggetto",
        description: "Scrivi una funzione che restituisca il numero di proprietà di un oggetto.",
        code: "function countObjectProperties(obj: object): number { return Object.keys(obj).length; }",
      },
      {
       id: uuidv4(),
        title: "Unire oggetti con lo spread operator",
        description: "Scrivi una funzione che unisca due oggetti utilizzando lo spread operator.",
        code: "function mergeUsingSpread(obj1: object, obj2: object): object { return { ...obj1, ...obj2 }; }",
      },
      {
      id: uuidv4(),
        title: "Verifica se un oggetto è vuoto",
        description: "Scrivi una funzione che verifichi se un oggetto è vuoto.",
        code: "function isEmptyObject(obj: object): boolean { return Object.keys(obj).length === 0; }",
      },
      {
      id: uuidv4(),
        title: "Creare un oggetto con una lista di chiavi e valori",
        description: "Scrivi una funzione che prenda due array, uno con le chiavi e uno con i valori, e crei un oggetto.",
        code: "function createObject(keys: string[], values: any[]): object { return keys.reduce((acc, key, index) => ({ ...acc, [key]: values[index] }), {}); }",
      },
    ],
  },
  {
    category: "Classi e Oggetti",
    exercises: [
      {
        id: uuidv4(),
        title: "Classe Persona",
        description: "Crea una classe 'Persona' con proprietà come nome e età.",
        code: `class Person { 
          name: string;
          age: number;
          constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
          }
        }`,
      },
      {
       id: uuidv4(),
        title: "Classe Auto con metodi",
        description: "Crea una classe 'Auto' che ha proprietà come modello e anno di produzione, con un metodo che descrive l'auto.",
        code: `class Car { 
          model: string;
          year: number;
          constructor(model: string, year: number) {
            this.model = model;
            this.year = year;
          }
          describe() {
            return \`\${this.model} del \${this.year}\`;
          }
        }`,
      },
      {
       id: uuidv4(),
        title: "Classe Quadrato con metodo area",
        description: "Crea una classe 'Quadrato' che calcoli l'area di un quadrato dato il lato.",
        code: `class Square { 
          side: number;
          constructor(side: number) {
            this.side = side;
          }
          getArea() {
            return this.side * this.side;
          }
        }`,
      },
      {
       id: uuidv4(),
        title: "Ereditarietà con la classe Veicolo",
        description: "Crea una classe 'Veicolo' e una sottoclasse 'Bicicletta' che estende 'Veicolo'.",
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
        description: "Crea una classe 'ContoBancario' con metodi per depositare e prelevare denaro.",
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
        description: "Crea una classe 'Rettangolo' che calcoli il perimetro e l'area.",
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
        description: "Crea una classe 'Libro' con proprietà come titolo, autore e anno di pubblicazione.",
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
        description: "Crea una classe 'Punto' con metodi per ottenere la distanza tra due punti.",
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
];

export default exercises;


*/
