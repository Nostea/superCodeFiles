import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Counter</h1>
      <div className="counter-container">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount((count) => (count = 0))}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
