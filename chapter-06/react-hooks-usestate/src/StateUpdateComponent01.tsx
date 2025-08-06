/**
 * A React component demonstrating state updates with `useState`.
 * It shows how updating state multiple times in a single event handler using the current state value
 * can lead to unexpected results due to state batching.
 *
 * The component maintains a `count` state and provides two buttons:
 * - "Single Count++ (Risky)" increments count by 1 using the current state value.
 * - "Multiple Count++ (Risky)" attempts to increment count by 5 by calling setCount five times,
 *   but due to how React batches state updates, the count only increments by 1.
 *
 * Note: The setCount(count + 1) call directly uses the current count state.
 * This can lead to unexpected behavior if React batches state updates.
 * To fix this, use the functional updater form: setCount((prevCount) => prevCount + 1).
 */
import { useState } from "react";

export function StateUpdateComponent01() {
  const [count, setCount] = useState(0);

  /**
   * Increment count by 1 using the current count value.
   * This is "risky" because if multiple updates are made in one event using this pattern,
   * they may not accumulate correctly due to React batching.
   *
   * To fix this, use the functional updater form: setCount((prevCount) => prevCount + 1).
   */
  const handleUpdate = () => {
    setCount(count + 1);
  };

  /**
   * Attempt to increment count by 5 by calling setCount five times with count + 1.
   * Due to React batching and using the current count value directly,
   * the count will only increase by 1 instead of 5.
   * This demonstrates the pitfall of multiple state updates that depend on the current state value.
   *
   * To fix this, use the functional updater form: setCount((prevCount) => prevCount + 1) for each update.
   */
  const handleBatchUpdate = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div className="my-box-border-1">
      <div>Passing a value to state updater function</div>
      <div className="my-box-border-1 fg-blue">
        <div>
          Count: <b>{count}</b>
        </div>

        <button onClick={handleUpdate}>Single Count++ (Risky)</button>
        <button onClick={handleBatchUpdate} style={{ marginLeft: "2rem" }}>
          Multiple Count++ (Risky)
        </button>
      </div>
    </div>
  );
}
