/**
 * This component utilizes the useEffect hook for cleanup logic and logs lifecycle events.
 * It includes functions to increment a count and provides an explicit cleanup function
 * in the useEffect hook.
 */
import { useEffect, useState } from "react";

interface ChildProps {
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

/**
 * This component logs lifecycle events and the count state, allowing user interaction
 * to increment the count while demonstrating clean-up on unmount.
 *
 * Key Behaviors:
 * - Tracks and logs re-renders and cleanup operations in the useEffect hook.
 */
export function ChildComponentCleanupFnEmptyArray({
  onLifecycleEvent,
}: ChildProps) {
  const [count, setCount] = useState(0);

  /*
   * The `useEffect` hook is used for side effects in functional components. In this case, the
   * `useEffect` hook is being used to set up a cleanup function with an empty dependency array `[]`
   * that will run when the component unmounts.
   */
  useEffect(() => {
    return () => {
      // cleanup function block
      onLifecycleEvent(
        `Child`,
        `useEffect(<b class='fg-blue'>return ()=>{/*cleanups*/},<span class='fg-red'>[]</span></b>)`,
        `Runs the <b class='fg-blue'>cleanup function</b> once on unmount`,
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency array

  const incrementCount = () => {
    setCount((prev) => prev + 1);
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
      </div>
    </div>
  );
}
