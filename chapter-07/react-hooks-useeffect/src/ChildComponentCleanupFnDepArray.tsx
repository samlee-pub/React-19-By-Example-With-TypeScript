/**
 * This component leverages React hooks to manage state and lifecycle events,
 * with a focus on tracking render calls and dependency changes.
 * It includes functions to increment a count and
 * toggle a dependency, while also providing an explicit cleanup function in the useEffect hook.
 */
import { useEffect, useState } from "react";

interface ChildProps {
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

/*
 * This is a functional React component that demonstrates
 * the use of state and effect hooks, particularly focusing on cleanup logic and
 * tracking lifecycle events for debugging.
 *
 * Key Behaviors:
 * - Tracks and logs re-renders and cleanup operations in the useEffect hook.
 */
export function ChildComponentCleanupFnDepArray({
  onLifecycleEvent,
}: ChildProps) {
  const [count, setCount] = useState(0);
  const [dep, setDep] = useState(false);

  /*
   * The `useEffect` hook is used to set up a cleanup function that runs when the dependencies
   * specified in the dependency array change. In this case, the cleanup function
   * is triggered when the `dep` state variable changes.
   */
  useEffect(() => {
    return () => {
      // cleanup function block
      onLifecycleEvent(
        `Child`,
        `useEffect(<b class='fg-blue'>return ()=>{/*cleanups*/},<span class='fg-red'>[dep]</span></b>)`,
        `Runs the <b class='fg-blue'>cleanup function</b> when dependencies change`,
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]); // with dependency array

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDepChange = () => {
    setDep((prev) => !prev);
  };
  // Log render (runs on every render)
  onLifecycleEvent(
    "Child",
    "Calling Render",
    `Runs on every render, count: ${count}`,
  );
  return (
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
  );
}
