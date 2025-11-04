/**
 * A React functional component that demonstrates batch updates in state management
 * using the `useState` and `useEffect` hooks. It also logs lifecycle events and state
 * changes through a callback function passed as a prop.
 *
 * @param {ChildProps} props - The props for the component.
 * @param {(component: string, method: string, message: string) => void} props.onLifecycleEvent
 * A callback function to log lifecycle events and state changes. It receives the
 * component name, method name, and a message as arguments.
 *
 * @remarks
 * - The `incrementCount` function demonstrates multiple state updates in a single
 *   render cycle, showcasing React's batching behavior.
 * - The `useEffect` hook logs the updated count whenever the `count` state changes.
 * - The `onLifecycleEvent` callback is invoked at various points, including during
 *   rendering, state updates, and within the `incrementCount` function.
 */
import { useEffect, useState } from "react";

interface ChildProps {
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

export function BatchUpdateChildComponent({ onLifecycleEvent }: ChildProps) {
  const [count, setCount] = useState(0);

  /**
   * The `useEffect` hook in the provided code snippet is used
   * to perform side effects in a functional component.
   * In this case, it is monitoring changes to the `count` state variable.
   */
  useEffect(() => {
    // Log the count change
    onLifecycleEvent(
      `Child`,
      "UseEffect - on Count Update",
      `Current Child Count = ${count}`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]); // [count]: the dependency array for the effect

  /**
   * The `incrementCount` function increments the count state multiple times and
   * logs the count changes at different points.
   */
  const incrementCount = () => {
    // Log the count change
    onLifecycleEvent(
      `Child`,
      "Call Count++ - lineno. 1",
      `Current Child Count = ${count}`,
    );
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => {
      // Log the count change
      onLifecycleEvent(
        `Child`,
        "Call Count++ - lineno. 2",
        `Current Child Count = ${prev}`,
      );
      return prev + 1;
    });
    // Log the count change
    onLifecycleEvent(
      `Child`,
      "Call Count++ - lineno. 3",
      `Current Child Count = ${count}`,
    );
  };
  // Log render (runs on every render)
  onLifecycleEvent("Child", "render", `Rendering with count: ${count}`);
  return (
    <div>
      <div className="fg-blue">
        Child Count: <b>{count}</b>
        <button onClick={incrementCount} style={{ marginLeft: "2rem" }}>
          Multiple Count++
        </button>
      </div>
    </div>
  );
}
