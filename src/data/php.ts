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
function sumArray($array) {
    return array_sum($array);
}
print_r(sumArray([1, 2, 3, 4]));
        `,
      },
      {
        id: uuidv4(),
        title: "Numero massimo",
        description: "Trova il valore massimo in un array.",
        code: `
function maxArray($array) {
    return max($array);
}
print_r(maxArray([5, 3, 9, 1]));
        `,
      },
      {
        id: uuidv4(),
        title: "Ordinamento crescente",
        description: "Ordina un array in ordine crescente.",
        code: `
function sortArrayAsc($array) {
    sort($array);
    return $array;
}
print_r(sortArrayAsc([5, 3, 9, 1]));
        `,
      },
      {
        id: uuidv4(),
        title: "Unione di due array",
        description: "Unisci due array in uno solo.",
        code: `
function mergeArrays($array1, $array2) {
    return array_merge($array1, $array2);
}
print_r(mergeArrays([1, 2], [3, 4]));
        `,
      },
      {
        id: uuidv4(),
        title: "Differenza tra array",
        description: "Trova gli elementi unici tra due array.",
        code: `
function arrayDifference($array1, $array2) {
    return array_diff($array1, $array2);
}
print_r(arrayDifference([1, 2, 3], [2, 3, 4]));
        `,
      },
      {
        id: uuidv4(),
        title: "Filtra valori maggiori di 10",
        description: "Filtra gli elementi di un array maggiori di 10.",
        code: `
function filterGreaterThan10($array) {
    return array_filter($array, function($val) {
        return $val > 10;
    });
}
print_r(filterGreaterThan10([5, 12, 8, 15]));
        `,
      },
      {
        id: uuidv4(),
        title: "Somma da array multidimensionale",
        description: "Calcola la somma di tutti gli elementi di una array.",
        code: `
    function sommaMatrice($matrice) {
        $somma = 0;
        foreach ($matrice as $riga) {
            $somma += array_sum($riga);
        }
        return $somma;
    }
    print_r(sommaMatrice([[1, 2], [3, 4]]));
            `,
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
  function invertiStringa($str) {
      return strrev($str);
  }
  print_r(invertiStringa('hello'));
        `,
      },
      {
        id: uuidv4(),
        title: "Conta vocali",
        description: "Conta il numero di vocali in una stringa.",
        code: `
  function contaVocali($str) {
      return preg_match_all('/[aeiou]/i', $str);
  }
  print_r(contaVocali('hello world'));
        `,
      },
      {
        id: uuidv4(),
        title: "Sostituisci carattere",
        description:
          "Sostituisci tutte le occorrenze di un carattere in una stringa.",
        code: `
  function sostituisciCarattere($str, $oldChar, $newChar) {
      return str_replace($oldChar, $newChar, $str);
  }
  print_r(sostituisciCarattere('banana', 'a', 'o'));
        `,
      },
      {
        id: uuidv4(),
        title: "Trova la posizione di una sottostringa",
        description:
          "Trova la posizione della prima occorrenza di una sottostringa.",
        code: `
  function trovaPosizione($str, $substr) {
      return strpos($str, $substr);
  }
  print_r(trovaPosizione('hello world', 'world'));
        `,
      },
      {
        id: uuidv4(),
        title: "Stringa maiuscola",
        description: "Convertilo in maiuscolo.",
        code: `
  function toUpperCase($str) {
      return strtoupper($str);
  }
  print_r(toUpperCase('hello'));
        `,
      },
      {
        id: uuidv4(),
        title: "Stringa minuscola",
        description: "Convertilo in minuscolo.",
        code: `
  function toLowerCase($str) {
      return strtolower($str);
  }
  print_r(toLowerCase('HELLO'));
        `,
      },
      {
        id: uuidv4(),
        title: "Confronta due stringhe",
        description: "Confronta due stringhe e verifica se sono uguali.",
        code: `
  function confrontaStringhe($str1, $str2) {
      return strcmp($str1, $str2) === 0;
  }
  print_r(confrontaStringhe('hello', 'hello'));
        `,
      },
      {
        id: uuidv4(),
        title: "Rimuovi spazi bianchi",
        description:
          "Rimuovi gli spazi bianchi all'inizio e alla fine di una stringa.",
        code: `
  function rimuoviSpazi($str) {
      return trim($str);
  }
  print_r(rimuoviSpazi('  hello world  '));
        `,
      },
      {
        id: uuidv4(),
        title: "Splitta una stringa",
        description:
          "Dividi una stringa in un array di parole usando uno spazio come delimitatore.",
        code: `
  function splittaStringa($str) {
      return explode(' ', $str);
  }
  print_r(splittaStringa('hello world PHP'));
        `,
      },
      {
        id: uuidv4(),
        title: "Unisci parole in una stringa",
        description:
          "Unisci un array di parole in una stringa separata da uno spazio.",
        code: `
  function unisciStringa($arr) {
      return implode(' ', $arr);
  }
  print_r(unisciStringa(['hello', 'world', 'PHP']));
        `,
      },
    ],
  },

  {
    category: "Classi",
    exercises: [
      {
        id: uuidv4(),
        title: "Classe Persona",
        description: "Crea una classe 'Persona' con nome ed età.",
        code: `
  class Persona {
      public $nome;
      public $eta;
      public function __construct($nome, $eta) {
          $this->nome = $nome;
          $this->eta = $eta;
      }
  }
  $persona = new Persona('Mario', 30);
  print_r([$persona->nome, $persona->eta]);
        `,
      },
      {
        id: uuidv4(),
        title: "Classe Rettangolo",
        description:
          "Crea una classe 'Rettangolo' con larghezza e altezza e calcola l'area.",
        code: `
  class Rettangolo {
      public $larghezza;
      public $altezza;
      public function __construct($larghezza, $altezza) {
          $this->larghezza = $larghezza;
          $this->altezza = $altezza;
      }
      public function area() {
          return $this->larghezza * $this->altezza;
      }
  }
  $rettangolo = new Rettangolo(4, 6);
  print_r($rettangolo->area());
        `,
      },
      {
        id: uuidv4(),
        title: "Classe Auto con ereditarietà",
        description:
          "Crea una classe 'Auto' che estende una classe base 'Veicolo' con proprietà come modello, anno di produzione e metodo per visualizzare le informazioni.",
        code: `
  class Veicolo {
      public $modello;
      public $anno;
      
      public function __construct($modello, $anno) {
          $this->modello = $modello;
          $this->anno = $anno;
      }
  
      public function info() {
          return 'Modello: ' . $this->modello . ', Anno: ' . $this->anno;
      }
  }
  
  class Auto extends Veicolo {
      public $carburante;
      
      public function __construct($modello, $anno, $carburante) {
          parent::__construct($modello, $anno);
          $this->carburante = $carburante;
      }
  
      public function info() {
          return parent::info() . ', Carburante: ' . $this->carburante;
      }
  }
  
  $auto = new Auto('Fiat 500', 2020, 'Benzina');
  print_r($auto->info());
        `,
      },
      {
        id: uuidv4(),
        title: "Classe Conta con metodi statici",
        description:
          "Crea una classe 'Conta' con un metodo statico che tiene traccia del numero di istanze create.",
        code: `
  class Conta {
      public static $istanze = 0;
  
      public function __construct() {
          self::$istanze++;
      }
  
      public static function numeroIstanze() {
          return self::$istanze;
      }
  }
  
  $newObj1 = new Conta();
  $newObj2 = new Conta();
  print_r(Conta::numeroIstanze());
        `,
      },
      {
        id: uuidv4(),
        title: "Classe Banca con metodi e operazioni",
        description:
          "Crea una classe 'Banca' con metodi per depositare, prelevare e visualizzare il saldo.",
        code: `
  class Banca {
      public $saldo;
  
      public function __construct($saldo) {
          $this->saldo = $saldo;
      }
  
      public function deposita($importo) {
          $this->saldo += $importo;
      }
  
      public function preleva($importo) {
          if ($importo <= $this->saldo) {
              $this->saldo -= $importo;
          } else {
              echo 'Saldo insufficiente.';
          }
      }
  
      public function visualizzaSaldo() {
          return $this->saldo;
      }
  }
  
  $conto = new Banca(1000);
  $conto->deposita(500);
  $conto->preleva(200);
  print_r($conto->visualizzaSaldo());
        `,
      },
      {
        id: uuidv4(),
        title: "Classe Gestore con eccezioni personalizzate",
        description:
          "Crea una classe 'Gestore' che lancia un'eccezione se si tenta di assegnare un valore negativo.",
        code: `
  class Gestore {
      public $bilancio;
  
      public function __construct($bilancio) {
          if ($bilancio < 0) {
              throw new Exception("Bilancio non può essere negativo");
          }
          $this->bilancio = $bilancio;
      }
  
      public function aggiungi($importo) {
          if ($importo < 0) {
              throw new Exception("Non è possibile aggiungere un importo negativo");
          }
          $this->bilancio += $importo;
      }
  
      public function getBilancio() {
          return $this->bilancio;
      }
  }
  
  try {
      $gestore = new Gestore(-100);
  } catch (Exception $e) {
      echo 'Errore: ' . $e->getMessage();
  }
  
  try {
      $gestore = new Gestore(500);
      $gestore->aggiungi(-50);
  } catch (Exception $e) {
      echo 'Errore: ' . $e->getMessage();
  }
        `,
      },
    ],
  },

  {
    category: "Numeri",
    exercises: [
      {
        id: uuidv4(),
        title: "Numero primo",
        description: "Verifica se un numero è primo.",
        code: `
  function isPrime($num) {
      if ($num < 2) return false; // 1 e numeri negativi non sono primi
      for ($i = 2; $i <= sqrt($num); $i++) {
          if ($num % $i == 0) return false; // Se è divisibile per un numero, non è primo
      }
      return true; // Se non ha trovato divisori, è primo
  }
    var_dump(isPrime(7));
    var_dump(isPrime(8));
    var_dump(isPrime(9));
    var_dump(isPrime(10));
        `,
      },
      {
        id: uuidv4(),
        title: "Somma dei divisori",
        description: "Calcola la somma dei divisori di un numero.",
        code: `
  function sumDivisors($num) {
      $sum = 0;
      for ($i = 1; $i <= $num / 2; $i++) {
          if ($num % $i == 0) {
              $sum += $i;
          }
      }
      return $sum;
  }
  print_r(sumDivisors(12));
        `,
      },
      {
        id: uuidv4(),
        title: "Numero perfetto",
        description:
          "Verifica se un numero è perfetto (somma dei suoi divisori escluso il numero stesso).",
        code: `
  function isPerfect($num) {
      return sumDivisors($num) == $num;
  }
  print_r(isPerfect(6));
        `,
      },
      {
        id: uuidv4(),
        title: "Fibonacci",
        description: "Calcola il n-esimo numero della sequenza di Fibonacci.",
        code: `
  function fibonacci($n) {
      if ($n <= 1) return $n;
      // Funzione ricorsiva che somma i due numeri precedenti della sequenza di Fibonacci
      return fibonacci($n - 1) + fibonacci($n - 2);
  }

  print_r(fibonacci(10));
        `,
      },
      {
        id: uuidv4(),
        title: "MCD (Massimo Comune Divisore)",
        description: "Calcola il massimo comune divisore di due numeri.",
        code: `
function mcd($a, $b) {
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}
print_r(mcd(56, 98));
      `,
      },
      {
        id: uuidv4(),
        title: "MCM (Minimo Comune Multiplo)",
        description: "Calcola il minimo comune multiplo di due numeri.",
        code: `
function mcd($a, $b) {
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}
    
function mcm($a, $b) {
    return ($a * $b) / mcd($a, $b);
}
print_r(mcm(12, 15));
        `,
      },
      {
        id: uuidv4(),
        title: "Somma delle cifre",
        description: "Calcola la somma delle cifre di un numero intero.",
        code: `
  function sumDigits($num) {
      $sum = 0;
      while ($num > 0) {
          $sum += $num % 10;
          $num = (int)($num / 10);
      }
      return $sum;
  }
  print_r(sumDigits(12345));
        `,
      },
      {
        id: uuidv4(),
        title: "Calcolo delle potenze",
        description: "Calcola la potenza di un numero (base, esponente).",
        code: `
  function power($base, $exponent) {
      return pow($base, $exponent);
  }
  print_r(power(2, 3));
        `,
      },
      {
        id: uuidv4(),
        title: "Radice quadrata intera",
        description: "Calcola la radice quadrata intera di un numero.",
        code: `
  function integerSquareRoot($num) {
      return (int)sqrt($num);
  }
  print_r(integerSquareRoot(50));
        `,
      },
    ],
  },

  {
    category: "Date",
    exercises: [
      {
        id: uuidv4(),
        title: "Data corrente",
        description: "Ottieni la data corrente formattata.",
        code: `
  echo date('Y-m-d H:i:s');
        `,
      },
      {
        id: uuidv4(),
        title: "Formato data personalizzato",
        description: "Convertilo in un formato di data personalizzato.",
        code: `
  $date = '2025-02-13';
  echo date('d/m/Y', strtotime($date));
        `,
      },
      {
        id: uuidv4(),
        title: "Aggiungi giorni a una data",
        description: "Aggiungi un numero di giorni a una data.",
        code: `
  $date = '2025-02-13';
  $newDate = date('Y-m-d', strtotime($date . ' + 10 days'));
  echo $newDate;
        `,
      },
      {
        id: uuidv4(),
        title: "Sottrai giorni da una data",
        description: "Sottrai un numero di giorni da una data.",
        code: `
  $date = '2025-02-13';
  $newDate = date('Y-m-d', strtotime($date . ' - 10 days'));
  echo $newDate;
        `,
      },
      {
        id: uuidv4(),
        title: "Differenza tra due date",
        description: "Calcola la differenza in giorni tra due date.",
        code: `
  $date1 = '2025-02-13';
  $date2 = '2025-03-01';
  $diff = abs(strtotime($date2) - strtotime($date1));
  $days = floor($diff / (60 * 60 * 24));
  echo "Differenza: " . $days . " giorni";
        `,
      },
      {
        id: uuidv4(),
        title: "Data corrente in formato completo",
        description: "Ottieni la data corrente con nome del giorno e mese.",
        code: `
  echo date('l, F j, Y');
        `,
      },
      {
        id: uuidv4(),
        title: "Confronta due date",
        description:
          "Confronta due date e verifica se una è successiva all'altra.",
        code: `
  $date1 = '2025-02-13';
  $date2 = '2025-03-01';
  if (strtotime($date1) < strtotime($date2)) {
      echo "$date1 è prima di $date2";
  } else {
      echo "$date1 è dopo o uguale a $date2";
  }
        `,
      },
      {
        id: uuidv4(),
        title: "Verifica se è una data valida",
        description:
          "Verifica se una data è valida (ad esempio 29 febbraio in un anno non bisestile).",
        code: `
  $date = '2025-02-29';
  if (strtotime($date)) {
      echo "$date è una data valida";
  } else {
      echo "$date non è una data valida";
  }
        `,
      },
      {
        id: uuidv4(),
        title: "Data di nascita e età",
        description:
          "Calcola l'età di una persona a partire dalla sua data di nascita.",
        code: `
  $birthDate = '1990-05-15';
  $age = floor((time() - strtotime($birthDate)) / (60 * 60 * 24 * 365));
  echo "Età: $age anni";
        `,
      },
      {
        id: uuidv4(),
        title: "Primo giorno del mese",
        description: "Trova il primo giorno del mese di una data.",
        code: `
  $date = '2025-02-13';
  $firstDayOfMonth = date('Y-m-01', strtotime($date));
  echo "Primo giorno del mese: $firstDayOfMonth";
        `,
      },
    ],
  },

  {
    category: "Funzioni",
    exercises: [
      {
        id: uuidv4(),
        title: "Funzione ricorsiva",
        description:
          "Calcola il fattoriale di un numero con una funzione ricorsiva.",
        code: `
  function fattoriale($n) {
      if ($n === 0) return 1;
      return $n * fattoriale($n - 1);
  }
  print_r(fattoriale(5));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di somma",
        description: "Crea una funzione che sommi due numeri.",
        code: `
  function somma($a, $b) {
      return $a + $b;
  }
  print_r(somma(3, 5));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione callback",
        description:
          "Crea una funzione che accetta un'altra funzione come parametro (callback).",
        code: `
  function eseguiCallback($callback) {
      return $callback();
  }
  
  echo eseguiCallback(function() {
      return "Ciao, sono una callback!";
  });
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di concatenazione",
        description: "Crea una funzione che concateni due stringhe.",
        code: `
  function concatena($str1, $str2) {
      return $str1 . $str2;
  }
  print_r(concatena('Ciao, ', 'mondo!'));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di verifica parità",
        description:
          "Crea una funzione che verifichi se un numero è pari o dispari.",
        code: `
  function verificaParita($num) {
      return ($num % 2 === 0) ? 'Pari' : 'Dispari';
  }
  print_r(verificaParita(10));
  print_r(verificaParita(7));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di ordinamento array",
        description:
          "Crea una funzione che ordina un array di numeri in ordine crescente.",
        code: `
  function ordinaArray($arr) {
      sort($arr);
      return $arr;
  }
  print_r(ordinaArray([5, 2, 9, 1, 7]));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di media",
        description:
          "Crea una funzione che calcola la media di un array di numeri.",
        code: `
  function calcolaMedia($arr) {
      $somma = array_sum($arr);
      return $somma / count($arr);
  }
  print_r(calcolaMedia([10, 20, 30, 40, 50]));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di rimozione duplicati",
        description: "Crea una funzione che rimuova i duplicati da un array.",
        code: `
  function rimuoviDuplicati($arr) {
      return array_unique($arr);
  }
  print_r(rimuoviDuplicati([1, 2, 2, 3, 4, 4, 5]));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di inversione array",
        description: "Crea una funzione che inverta un array.",
        code: `
  function invertiArray($arr) {
      return array_reverse($arr);
  }
  print_r(invertiArray([1, 2, 3, 4, 5]));
        `,
      },
      {
        id: uuidv4(),
        title: "Funzione di confronto stringhe",
        description:
          "Crea una funzione che confronta due stringhe e restituisce se sono uguali o meno.",
        code: `
  function confrontaStringhe($str1, $str2) {
      return ($str1 === $str2) ? 'Uguali' : 'Diverse';
  }
  print_r(confrontaStringhe('ciao', 'ciao'));
  print_r(confrontaStringhe('ciao', 'hello'));
        `,
      },
    ],
  },

  {
    category: "Gestione Errori",
    exercises: [
      {
        id: uuidv4(),
        title: "Gestione delle eccezioni",
        description: "Crea un'eccezione personalizzata.",
        code: `
  class MiaEccezione extends Exception {}
  try {
      throw new MiaEccezione('Si è verificato un errore!');
  } catch (MiaEccezione $e) {
      echo $e->getMessage();
  }
        `,
      },
      {
        id: uuidv4(),
        title: "Gestione delle eccezioni multiple",
        description:
          "Gestisci più eccezioni con differenti messaggi di errore.",
        code: `
  class EccezioneNumero extends Exception {}
  class EccezioneStringa extends Exception {}
  
  try {
      $input = 'test';
      if (is_numeric($input)) {
          throw new EccezioneNumero('Errore: il valore è numerico.');
      } else {
          throw new EccezioneStringa('Errore: il valore è una stringa.');
      }
  } catch (EccezioneNumero $e) {
      echo $e->getMessage();
  } catch (EccezioneStringa $e) {
      echo $e->getMessage();
  }
        `,
      },
      {
        id: uuidv4(),
        title: "Controllo e lancio eccezione",
        description:
          "Crea una funzione che lancia un'eccezione se un valore è negativo.",
        code: `
  function verificaNumero($num) {
      if ($num < 0) {
          throw new Exception('Il numero non può essere negativo.');
      }
      return 'Numero valido';
  }
  try {
      echo verificaNumero(-5);
  } catch (Exception $e) {
      echo 'Errore: ' . $e->getMessage();
  }
        `,
      },
      {
        id: uuidv4(),
        title: "Esecuzione di codice finale",
        description:
          "Usa un blocco finally per eseguire un codice che deve essere eseguito sempre.",
        code: `
  try {
      throw new Exception('Errore durante l\'esecuzione.');
  } catch (Exception $e) {
      echo 'Eccezione catturata: ' . $e->getMessage();
  } finally {
      echo ' Codice nel blocco finally eseguito sempre.';
  }
        `,
      },
      {
        id: uuidv4(),
        title: "Eccezione con codice di errore",
        description:
          "Aggiungi un codice di errore personalizzato all'eccezione.",
        code: `
  class MiaEccezione extends Exception {
      public function __construct($message, $code) {
          parent::__construct($message, $code);
      }
  }
  try {
      throw new MiaEccezione('Errore di connessione', 500);
  } catch (MiaEccezione $e) {
      echo 'Messaggio: ' . $e->getMessage() . ' Codice: ' . $e->getCode();
  }
        `,
      },
    ],
  },
];
