/**
 * The component demonstrates the usage of `useEffect` without a dependency array
 * for running side effects after every render. The component also logs a message indicating
 * that the render method is being called on every render with the current count value.
 */
import { useEffect, useState } from "react";

interface ChildProps {
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

export function ChildComponentNoArray({ onLifecycleEvent }: ChildProps) {
  const [count, setCount] = useState(0);

  /*
   * The `useEffect` hook is being used without a dependency array. This
   * means that the side effect code block inside the `useEffect` will
   * run after every render of the component.
   */
  useEffect(() => {
    // side effect code block
    onLifecycleEvent(
      `Child`,
      `useEffect(<b class='fg-blue'>/*side effect code*/</b>)`,
      `Runs the <b class='fg-blue'>side effect code</b> after every render`,
    );
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
