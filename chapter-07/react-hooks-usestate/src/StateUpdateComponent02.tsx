/**
 * A React functional component demonstrating safe state updates using the functional updater form of `useState`.
 *
 * This component displays a counter and provides two buttons:
 * - "Single Count++ (OK)": Increments the counter by 1 using a functional updater.
 * - "Multiple Count++ (Safe)": Increments the counter by 5, calling the updater function multiple times to ensure each update is based on the latest state.
 *
 * The functional updater form (`setCount(prev => prev + 1)`) ensures that each update is applied sequentially,
 * even when multiple updates are batched together, preventing stale state issues.
 */
import { useState } from "react";

export function StateUpdateComponent02() {
  const [count, setCount] = useState(0);

  /**
   * Increment the count by 1 using the functional updater form.
   * This ensures the update is based on the latest state value.
   */
  const handleUpdate = () => {
    setCount((prev) => prev + 1);
  };

  /**
   * Increment the count by 5 by calling setCount five times,
   * each time using the functional updater form to safely accumulate updates.
   * This prevents issues with batched state updates where multiple calls
   * might otherwise overwrite each other.
   */ const handleBatchUpdate = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div className="my-box-border-1">
      <div>Passing a callback to state updater function</div>
      <div className="my-box-border-1 fg-blue">
        <div>
          Count: <b>{count}</b>
        </div>

        <button onClick={handleUpdate}>Single Count++ (OK)</button>
        <button onClick={handleBatchUpdate} style={{ marginLeft: "2rem" }}>
          Multiple Count++ (Safe)
        </button>
      </div>
    </div>
  );
}
