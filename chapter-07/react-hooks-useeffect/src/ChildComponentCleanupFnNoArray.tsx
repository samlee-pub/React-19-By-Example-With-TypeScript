/**
 * This component demonstrates the usage of a cleanup function without a dependency array in a
 * `useEffect` hook. The `useEffect` hook is used without a dependency array, meaning it will
 * run the cleanup function after every render and trigger the `onLifecycleEvent` function to
 * log the cleanup event.
 */
import { useEffect, useState } from "react";

interface ChildProps {
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

export function ChildComponentCleanupFnNoArray({
  onLifecycleEvent,
}: ChildProps) {
  const [count, setCount] = useState(0);

  /*
   * This `useEffect` hook is being used without a dependency array, which means it will run the cleanup
   * function after every render of the component. The cleanup function is defined inside the `useEffect`
   * hook and it logs a message using the `onLifecycleEvent` function to indicate that the cleanup
   * function is being executed after each render. This pattern is useful for performing cleanup tasks or
   * side effects that need to be executed on every render of the component.
   */
  useEffect(() => {
    return () => {
      // cleanup function block
      onLifecycleEvent(
        `Child`,
        `useEffect(<b class='fg-blue'>return ()=>{/*cleanups*/}</b>)`,
        `Runs the <b class='fg-blue'>cleanup function</b> after every render`,
      );
    };
  }); // no dependency array

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
