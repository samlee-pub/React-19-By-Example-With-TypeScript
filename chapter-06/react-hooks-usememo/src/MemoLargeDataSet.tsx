/**
 * MemoLargeDataSet.tsx
 * This component demonstrates the use of useMemo to optimize rendering of a large dataset.
 * It generates a Fibonacci sequence up to a specified index and uses useMemo to memoize the array.
 * The component allows you to update the Fibonacci index and re-render the component without recalculating the entire array.
 * The useMemo hook is used to avoid unnecessary recalculations of the Fibonacci array when the index changes.
 * If the Fibonacci index is less than the Fibonacci array length, it returns the value from the memoized array.
 * Otherwise, it recalculates the Fibonacci array up to the new index and memoizes the result.
 */
import { useRef, useState, useMemo } from "react";
import { FibArrayFn } from "./FibArrayFn";

export function MemoLargeDataSet() {
  const [fib, setFib] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [count, setCount] = useState(0);
  const logMessages = useRef<HTMLUListElement>(null);

  function handleLogMessageEvent(message: string) {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: `${message}`,
      }),
    );
  }

  const memoizedArray = useMemo(() => {
    handleLogMessageEvent(`Fib array up to Fib(${arrayIndex})`);
    return FibArrayFn(arrayIndex);
  }, [arrayIndex]);

  const getFibValue = (num: number) => {
    if (arrayIndex < num) {
      setArrayIndex(num + 2);
    }
    return memoizedArray[num];
  };

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ marginRight: "1rem" }}
        >
          Re-render Parent ({count})
        </button>
        <button onClick={() => setFib((d) => d + 1)}>Update Fib ({fib})</button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div>
          Fib ({fib}): {getFibValue(fib)}
        </div>
        <h3>Log Messages:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </div>
  );
}
