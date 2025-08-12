/**
 * This component leverages React hooks to manage state and lifecycle events,
 * with a focus on tracking render calls and dependency changes.
 * It includes functions to increment a count and toggle a dependency.
 */
import { useEffect, useState } from "react";

interface ChildProps {
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

export function ChildComponentDepArray({ onLifecycleEvent }: ChildProps) {
  const [count, setCount] = useState(0);
  const [dep, setDep] = useState(false);

  /* The `useEffect` hook is used to perform side effects in a functional component.
   * In this case, the `useEffect` hook is set up to run a side effect code block when the
   * `dep` state variable changes.
   */
  useEffect(() => {
    // side effect code block
    onLifecycleEvent(
      `Child`,
      `useEffect(<b class='fg-blue'>/*side effect code*/,<span class='fg-red'>[dep]</span></b>)`,
      `Runs the <b class='fg-blue'>side effect code</b> when dependencies change`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]); // with dependency array

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDepChange = () => {
    setDep((prev) => !prev);
  };

  return (
    <>
      {
        // Log render (runs on every render)
        onLifecycleEvent(
          "Child",
          "Calling Render",
          `Runs on every render, count: ${count}`,
        )
      }
      <div>
        <div className="fg-blue">
          <div>
            Child Count: <b>{count}</b>
          </div>
          <button onClick={incrementCount}>Re-Render (Count++)</button>
          <button onClick={handleDepChange} style={{ marginLeft: "2rem" }}>
            Change Dependencies
          </button>
        </div>
      </div>
    </>
  );
}
