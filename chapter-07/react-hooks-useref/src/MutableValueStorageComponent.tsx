/**
 * This component demonstrates the use of useRef to store a mutable value
 * that persists across renders without causing re-renders when updated.
 * It tracks the previous value of a counter and updates it when the counter changes.
 * The previous value is stored in a ref, which allows it to persist across renders
 * without causing re-renders when updated.
 */
import { useEffect, useRef, useState } from "react";
export function MutableValueStorageComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "0.5rem" }}>
        <div>
          Current Count: <b>{count}</b>
        </div>
        <div>
          Previous Count: <b>{prevCountRef.current}</b>
        </div>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((c) => c - 1);
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
