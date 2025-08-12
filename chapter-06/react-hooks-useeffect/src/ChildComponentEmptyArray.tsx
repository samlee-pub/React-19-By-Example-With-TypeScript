/**
 * The component demonstrates the usage of an empty dependency array in the `useEffect` hook
 * to run side effect code only once on mount. The component also logs a message indicating
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

export function ChildComponentEmptyArray({ onLifecycleEvent }: ChildProps) {
  const [count, setCount] = useState(0);

  /*
   * The `useEffect` hook with an empty dependency array is used in the `ChildComponentEmptyArray`
   * component to run the side effect code block only once on mount. By providing an empty dependency
   * array `[]`, the `useEffect` hook will execute the side effect code block when the component mounts
   * for the first time and not re-run it on subsequent re-renders.
   */
  useEffect(() => {
    // side effect code block
    onLifecycleEvent(
      `Child`,
      `useEffect(<b class='fg-blue'>/*side effect code*/,<span class='fg-red'>[]</span></b>)`,
      `Runs the <b class='fg-blue'>side effect code</b> once on mount`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency array

  const incrementCount = () => {
    setCount((prev) => prev + 1);
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
        </div>
      </div>
    </>
  );
}
