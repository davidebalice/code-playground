export const exercises = [
    {
      id: 1,
      title: "Somma di numeri",
      description: "Una funzione che somma un array di numeri.",
      code: `function sum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  // Eseguiamo la funzione
  console.log(sum([1, 2, 3, 4])); // Output: 10`
    },
    {
      id: 2,
      title: "Generics: primo elemento",
      description: "Restituisce il primo elemento di un array generico.",
      code: `function firstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
  }
  
  // Test
  console.log(firstElement(["A", "B", "C"])); // Output: "A"`
    }
  ];
  