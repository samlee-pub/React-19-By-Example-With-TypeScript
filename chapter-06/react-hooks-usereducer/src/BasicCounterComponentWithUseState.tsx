/**
 * A simple counter component using React's useState hook.
 * It allows incrementing, decrementing, updating by a specific value, and resetting the count.
 * This component demonstrates how to manage state updates with useState.
 */
import { useState } from "react";

export function BasicCounterComponentWithUseState() {
  const [count, setCount] = useState(0);
  function increment() {
    return setCount((prev) => prev + 1);
  }
  function decrement() {
    return setCount((prev) => prev - 1);
  }
  function updateValue(payload: number | undefined) {
    return setCount((prev) => prev + (payload || 0));
  }
  function reset() {
    return setCount(0);
  }
  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "0.5rem" }}>
        Count: <b>{count}</b>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button onClick={increment} style={{ width: "6rem" }}>
          Count ++
        </button>
        <button
          onClick={decrement}
          style={{ width: "6rem", marginLeft: "2rem" }}
        >
          Count --
        </button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => updateValue(5)} style={{ width: "6rem" }}>
          Count +5
        </button>
        <button
          onClick={() => updateValue(-5)}
          style={{ width: "6rem", marginLeft: "2rem" }}
        >
          Count -5
        </button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button onClick={reset} style={{ width: "10rem" }}>
          Reset
        </button>
      </div>
    </div>
  );
}
