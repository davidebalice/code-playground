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

  {
    category: "Algoritmi",
    exercises: [
      {
        id: uuidv4(),
        title: "Bubble Sort",
        description: "Implementa l'algoritmo di ordinamento Bubble Sort.",
        code: `
function bubbleSort($arr) {
  $n = count($arr); // Ottiene la lunghezza dell'array

  // Ciclo esterno: scorre l'intero array
  for ($i = 0; $i < $n - 1; $i++) {
      // Ciclo interno: confronta gli elementi adiacenti e li scambia se necessario
      for ($j = 0; $j < $n - $i - 1; $j++) {
          if ($arr[$j] > $arr[$j + 1]) { // Se l'elemento corrente è maggiore del successivo, scambia
              list($arr[$j], $arr[$j + 1]) = [$arr[$j + 1], $arr[$j]];
          }
      }
  }

  return $arr; // Restituisce l'array ordinato
}

// Test della funzione con un array di esempio
print_r(bubbleSort([5, 3, 8, 4, 2]));

          `,
      },
      {
        id: uuidv4(),
        title: "Quick Sort",
        description: "Implementa l'algoritmo di ordinamento Quick Sort.",
        code: `
function quickSort($arr) {
  // Se l'array ha un solo elemento o è vuoto, è già ordinato
  if (count($arr) <= 1) return $arr;

  // Selezioniamo l'ultimo elemento come pivot
  $pivot = array_pop($arr);

  // Partizioniamo l'array:
  // - Tutti gli elementi minori o uguali al pivot vanno a sinistra
  // - Tutti gli elementi maggiori del pivot vanno a destra
  $left = array_filter($arr, fn($el) => $el <= $pivot);
  $right = array_filter($arr, fn($el) => $el > $pivot);

  // Uniamo i sottoarray ordinati con il pivot al centro
  return array_merge(quickSort($left), [$pivot], quickSort($right));
}

// Test con un array di numeri non ordinato
print_r(quickSort([10, 7, 8, 9, 1, 5]));

          `,
      },

      {
        id: uuidv4(),
        title: "Merge Sort",
        description: "Implementa l'algoritmo di ordinamento Merge Sort.",
        code: `
function mergeSort($arr) {
  // Se l'array ha un solo elemento o è vuoto, è già ordinato
  if (count($arr) <= 1) return $arr;
  
  // Trova il punto medio dell'array
  $mid = intdiv(count($arr), 2);
  
  // Divide ricorsivamente l'array in due metà e le unisce ordinatamente
  return merge(
      mergeSort(array_slice($arr, 0, $mid)),  // Ordina la prima metà
      mergeSort(array_slice($arr, $mid))      // Ordina la seconda metà
  );
}

function merge($left, $right) {
  $result = [];

  // Confronta gli elementi dei due array e li unisce in ordine
  while (count($left) && count($right)) {
      // Rimuove e aggiunge il più piccolo tra i due elementi iniziali
      $result[] = $left[0] < $right[0] ? array_shift($left) : array_shift($right);
  }

  // Unisce eventuali elementi rimasti nei due array
  return array_merge($result, $left, $right);
}

// Esempio di utilizzo
print_r(mergeSort([10, 3, 15, 7, 8, 23, 74, 18]));
          `,
      },

      {
        id: uuidv4(),
        title: "Selection Sort",
        description:
          "Algoritmo di ordinamento che trova il minimo e lo sposta in posizione.",
        code: `
function selectionSort(array $arr): array {
  // Itera attraverso l'array fino al penultimo elemento
  for ($i = 0; $i < count($arr) - 1; $i++) {
      $minIdx = $i; // Assume che il primo elemento sia il più piccolo

      // Cerca il minimo nella parte non ordinata dell'array
      for ($j = $i + 1; $j < count($arr); $j++) {
          if ($arr[$j] < $arr[$minIdx]) {
              $minIdx = $j; // Aggiorna l'indice del minimo
          }
      }

      // Scambia l'elemento corrente con il minimo trovato
      list($arr[$i], $arr[$minIdx]) = [$arr[$minIdx], $arr[$i]];
  }
  return $arr; // Restituisce l'array ordinato
}

print_r(selectionSort([64, 25, 12, 22, 11]));

            `,
      },

      {
        id: uuidv4(),
        title: "Anagrammi",
        description:
          "Crea una funzione che verifichi se due stringhe sono anagrammi.",
        code: `
function sonoAnagrammi($str1, $str2) {
    // Confronta la frequenza dei caratteri nelle due stringhe
    // count_chars($str, 1) restituisce un array associativo con la frequenza di ogni carattere nella stringa
    return count_chars($str1, 1) == count_chars($str2, 1);
}

var_dump(sonoAnagrammi("roma", "amor"));
          `,
      },
      {
        id: uuidv4(),
        title: "Ricerca Lineare",
        description: "Implementa un algoritmo di ricerca lineare.",
        code: `
function ricercaLineare($arr, $target) {
    // Scorriamo ogni elemento dell'array
    foreach ($arr as $index => $value) {
        // Se troviamo l'elemento cercato, restituiamo il suo indice
        if ($value == $target) return $index;
    }
    // Se l'elemento non è presente, restituiamo -1
    return -1;
}

// Test della funzione
echo ricercaLineare([10, 20, 30, 40], 30);

          `,
      },
      {
        id: uuidv4(),
        title: "Torre di Hanoi",
        description: "Risolvi il problema della Torre di Hanoi.",
        code: `
function torreDiHanoi($n, $from, $to, $aux) {
    // Caso base: se c'è un solo disco, lo spostiamo direttamente sulla destinazione
    if ($n == 1) {
        echo "Sposta il disco 1 da $from a $to\n";
        return;
    }
    
    // Sposta n-1 dischi dalla torre di partenza alla torre ausiliaria
    torreDiHanoi($n - 1, $from, $aux, $to);
    
    // Sposta il disco più grande direttamente sulla torre di destinazione
    echo "Sposta il disco $n da $from a $to\n";
    
    // Sposta i n-1 dischi dalla torre ausiliaria alla torre di destinazione
    torreDiHanoi($n - 1, $aux, $to, $from);
}

// Esegui l'algoritmo per 3 dischi, dalle torre A a C usando B come torre di appoggio
torreDiHanoi(3, 'A', 'C', 'B');
          `,
      },

      {
        id: uuidv4(),
        title: "Fibonacci Sequence",
        description:
          "Sequenza di Fibonacci calcolata sia con ricorsione che iterazione.",
        code: `
// Calcola il numero di Fibonacci usando la ricorsione
function fibonacciRecursive(int $n): int {
    // Caso base: se n è 0 o 1, restituisce n
    if ($n <= 1) return $n;
    
    // Chiamate ricorsive per calcolare il valore di Fibonacci
    return fibonacciRecursive($n - 1) + fibonacciRecursive($n - 2);
}

// Calcola il numero di Fibonacci usando un ciclo for
function fibonacciIterative(int $n): int {
    $a = 0;
    $b = 1;
    
    // Itera fino a trovare il valore richiesto
    for ($i = 2; $i <= $n; $i++) {
        $temp = $a + $b; // Somma dei due precedenti
        $a = $b; // Aggiorna il primo valore
        $b = $temp; // Aggiorna il secondo valore
    }
    
    // Restituisce il valore corretto
    return $n === 0 ? $a : $b;
}

echo fibonacciIterative(6);
`,
      },

      {
        id: uuidv4(),
        title: "MCD (Massimo comun divisore)",
        description:
          "Algoritmo di Euclide per calcolare il massimo comune divisore.",
        code: `
// Calcola il MCD tra due numeri con l'algoritmo di Euclide
function mcd(int $a, int $b): int {
    // Esegui il calcolo finché b non è zero
    while ($b !== 0) {
        // Salva il valore di b temporaneamente
        $temp = $b;
        
        // Calcola il resto della divisione tra a e b
        $b = $a % $b;
        
        // Aggiorna a con il valore di b
        $a = $temp;
    }
    // Restituisce il MCD
    return $a;
}

// Esempio: calcola il MCD tra 56 e 98 (restituirà 14)
echo mcd(56, 98);

            `,
      },

      {
        id: uuidv4(),
        title: "MCM (Minimo comune multiplo)",
        description:
          "Algoritmo di Euclide per calcolare il massimo comune divisore.",
        code: `
// Calcola il MCM tra due numeri usando la formula MCM(a, b) = (a * b) / MCD(a, b)
function mcd(int $a, int $b): int {
    // Esegui il calcolo finché b non è zero
    while ($b !== 0) {
        // Salva il valore di b temporaneamente
        $temp = $b;
        
        // Calcola il resto della divisione tra a e b
        $b = $a % $b;
        
        // Aggiorna a con il valore di b
        $a = $temp;
    }
    // Restituisce il MCD
    return $a;
}

function mcm(int $a, int $b): int {
  // Usa la funzione mcd per ottenere il massimo comune divisore
  return abs($a * $b) / mcd($a, $b);
}

// Esempio: calcola il MCM tra 56 e 98 (restituirà 392)
echo mcm(56, 98);

            `,
      },

      {
        id: uuidv4(),
        title: "Ricerca Binaria",
        description: "Implementa un algoritmo di ricerca binaria.",
        code: `
function ricercaBinaria($arr, $target) {
    $left = 0; // Inizializziamo l'indice sinistro
    $right = count($arr) - 1; // Inizializziamo l'indice destro

    while ($left <= $right) {
        // Calcoliamo l'indice centrale
        $mid = intdiv($left + $right, 2);

        // Se l'elemento centrale è il target, restituiamo l'indice
        if ($arr[$mid] == $target) return $mid;

        // Se il target è maggiore, cerchiamo nella metà destra
        if ($arr[$mid] < $target) {
            $left = $mid + 1;
        } 
        // Altrimenti, cerchiamo nella metà sinistra
        else {
            $right = $mid - 1;
        }
    }

    return -1; // Se l'elemento non è trovato, restituiamo -1
}

// Test della funzione con un array ordinato
echo ricercaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
          `,
      },

      {
        id: uuidv4(),
        title: "KMP String Matching Algorithm",
        description:
          "Algoritmo di ricerca di stringhe che utilizza la precomputazione del pattern.",
        code: `
function KMPSearch(string $text, string $pattern): int {
  // Costruisce l'array LPS per il pattern
  $lps = buildLPS($pattern);
  $i = 0; // Puntatore per il testo
  $j = 0; // Puntatore per il pattern

  // Ciclo per scorrere il testo
  while ($i < strlen($text)) {
      // Se i caratteri corrispondono
      if ($text[$i] === $pattern[$j]) {
          $i++;  // Incrementa il puntatore del testo
          $j++;  // Incrementa il puntatore del pattern
      }

      // Se l'intero pattern è stato trovato
      if ($j === strlen($pattern)) {
          return $i - $j; // Restituisce l'indice di inizio del match
      } 
      // Se c'è un mismatch
      else if ($i < strlen($text) && $text[$i] !== $pattern[$j]) {
          // Se j > 0, usa l'array LPS per evitare di ripetere comparazioni inutili
          if ($j !== 0) {
              $j = $lps[$j - 1];  // Sposta indietro il puntatore del pattern secondo LPS
          } else {
              $i++;  // Incrementa il puntatore del testo
          }
      }
  }

  return -1; // Se non è stato trovato alcun match
}
            `,
      },

      {
        id: uuidv4(),
        title: "Radix Sort",
        description:
          "Algoritmo di ordinamento che utilizza la rappresentazione dei numeri in base.",
        code: `
function countingSort(array $arr, int $exp): array {
    $output = array_fill(0, count($arr), 0);  // Array di output che contiene gli elementi ordinati
    $count = array_fill(0, 10, 0);  // Array che conta le occorrenze di ciascuna cifra (0-9)

    // Conta le occorrenze delle cifre nell'array
    foreach ($arr as $num) {
        $count[floor($num / $exp) % 10]++;  // Incrementa il contatore della cifra corrente
    }

    // Calcola le posizioni finali delle cifre nell'array ordinato
    for ($i = 1; $i < 10; $i++) {
        $count[$i] += $count[$i - 1];  // Somma cumulativa per ottenere la posizione corretta
    }

    // Costruisce l'array ordinato partendo da destra per mantenere la stabilità dell'ordinamento
    for ($i = count($arr) - 1; $i >= 0; $i--) {
        $output[$count[floor($arr[$i] / $exp) % 10] - 1] = $arr[$i];
        $count[floor($arr[$i] / $exp) % 10]--;  // Decrementa il contatore della cifra
    }

    return $output;  // Restituisce l'array ordinato
}

function radixSort(array $arr): array {
    $max = max($arr);  // Trova il valore massimo dell'array
    $exp = 1;  // Imposta il valore iniziale dell'esponente (per ordinare per la cifra meno significativa)

    // Continua finché il massimo numero non ha più cifre
    while (floor($max / $exp) > 0) {
        $arr = countingSort($arr, $exp);  // Ordina l'array in base alla cifra corrente
        $exp *= 10;  // Passa alla cifra successiva (incrementa l'esponente)
    }

    return $arr;  // Restituisce l'array ordinato
}

print_r(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

            `,
      },
    ],
  },
];
