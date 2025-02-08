import { v4 as uuidv4 } from "uuid";

export const exercises = [
  {
    category: "Array",
    exercises: [
      {
        id: uuidv4(),
        title: "Somma degli elementi",
        description:
          "Crea una funzione che sommi tutti gli elementi di un array.",
        code: `
//example 1
function sumArray($array)
{
    return array_sum($array);
}
            
print_r(sumArray([1, 2, 3, 4]));

//example 2
function sumArray2($array) {
    $somma = 0;
    foreach ($array as $num) {
        $somma += $num;
    }
    return $somma;
}

echo " - ";

print_r(sumArray2([5, 6, 7, 8]));

`,
      },
      {
        id: uuidv4(),
        title: "Numero massimo",
        description:
          "Crea una funzione che restituisca il valore massimo in un array.",
        code: `
function maxArray($array)
{
    return max($array);
}

print_r(maxArray([5, 3, 9, 1]));`,
      },
      {
        id: uuidv4(),
        title: "Numeri pari",
        description:
          "Crea una funzione che restituisca un array con solo i numeri pari.",
        code: `
function numeriPari($array)
{
    return array_filter($array, fn($num) => $num % 2 === 0); 
}
    
print_r(numeriPari([1, 2, 3, 4, 5, 6]));`,
      },
    ],
  },

  {
    category: "Stringhe",
    exercises: [
      {
        id: uuidv4(),
        title: "Inverti stringa",
        description: "Crea una funzione che inverta una stringa.",
        code: `
function invertiStringa($str)
{
    return strrev($str);
}

print_r(invertiStringa('hello'));`,
      },
      {
        id: uuidv4(),
        title: "Conta vocali",
        description: "Crea una funzione che conti le vocali in una stringa.",
        code: `
function contaVocali($str)
{
    return preg_match_all('/[aeiou]/i', $str);
}
    
print_r(contaVocali('hello world'));`,

      },
      {
        id: uuidv4(),
        title: "Capitalizza parole",
        description:
          "Crea una funzione che trasformi ogni parola di una stringa in maiuscolo.",
        code: `
function capitalizza($str)
{
    return ucwords($str);
}

print_r(capitalizza('hello world'));`,
      },
    ],
  },

  {
    category: "Class",
    exercises: [
      {
        id: uuidv4(),
        title: "Classe Persona",
        description:
          "Crea una classe 'Persona' con le proprietà 'nome' e 'età'.",
        code: `
class Persona {
    public $nome;
    public $eta;
    public function __construct($nome, $eta)
    {
        $this->nome = $nome;
        $this->eta = $eta;
    }
}
 
$persona = new Persona('Mario', 30);
print_r([$persona->nome, $persona->eta]);`,
      },
      {
        id: uuidv4(),
        title: "Classe Auto",
        description: "Crea una classe 'Auto' con un metodo 'avvia'.",
        code: `
class Auto
{
    public function avvia()
    {
        return 'Auto avviata!';
    }
}
     
$auto = new Auto();
print_r($auto->avvia());`,
      },
      {
        id: uuidv4(),
        title: "Classe Prodotto",
        description:
          "Crea una classe 'Prodotto' con prezzo e nome, e un metodo per ottenere il prezzo con IVA.",
        code: `
class Prodotto
{
    public $nome;
    public $prezzo;
    public function __construct($nome, $prezzo)
    {
        $this->nome = $nome;
        $this->prezzo = $prezzo;
    }
    
    public function prezzoConIVA($aliquota = 22)
    {
        return $this->prezzo * (1 + $aliquota / 100);
    }
}
    
$prodotto = new Prodotto('Laptop', 1000);
print_r($prodotto->prezzoConIVA());`,
      },
    ],
  },
];

export default exercises;
