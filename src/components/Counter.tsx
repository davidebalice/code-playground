import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => setCounter(counter + 1);
  const decrement = (): void => setCounter(counter - 1);
  const reset = (): void => setCounter(0);

  return (
    <div>
      Counter: {counter}
      <button
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default Counter;
