/**
 * This component demonstrates the use of useMemo with a simple Fibonacci calculation.
 * It calculates the Fibonacci value for a given index and memoizes the result using useMemo.
 * If the index does not change, the memoized value is returned, avoiding unnecessary recalculations.
 * If the index changes, the component is re-rendered, and the memoized value is updated.
 */
import { useRef, useState, useMemo } from "react";
import { FibFn } from "./FibFn";

export function MemoValue() {
  const [fib, setFib] = useState(10);
  const [count, setCount] = useState(0);
  const logMessages = useRef<HTMLUListElement>(null);

  function handleLogMessageEvent(message: string) {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: message,
      }),
    );
  }

  const memoizedValue = useMemo(() => {
    handleLogMessageEvent(`Fibo(${fib}) updated to Fib(${fib + 1})`);
    return FibFn(fib);
  }, [fib]);

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          style={{ marginRight: "1rem" }}
        >
          Re-render Parent ({count})
        </button>
        <button
          onClick={() => {
            setFib((d) => d + 1);
          }}
        >
          Update Fib ({fib})
        </button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div>
          Fib ({fib}): {memoizedValue}
        </div>
        <h3>Log Messages:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </div>
  );
}
