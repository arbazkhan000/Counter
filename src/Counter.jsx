import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // function Increment count + 1
  const incrementCounter = () => {
    if (count == 20) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };

  //Function Decriment  count -1
  const decrimentCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Increment </button>
      <button onClick={decrimentCounter}>Decrement</button>
    </div>
  );
}

export default Counter;
