/**
 * This React functional component demonstrates the usage of React hooks,
 * specifically `useState` and `useEffect`, to manage state
 * and side effects within a component.
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
 * This component manages count state and lifecycle logs, providing
 * two buttons for interactivity and demonstrating how side effects work.
 */
export function ChildComponentAll({ onLifecycleEvent }: ChildProps) {
  const [count, setCount] = useState(0);
  const [dep, setDep] = useState(false);

  /*
   * This `useEffect` hook without a dependency array is used to run both the side
   * effect code and the cleanup function after every render of the component.
   */
  useEffect(() => {
    // side effect code block
    onLifecycleEvent(
      `Child`,
      `useEffect(<b class='fg-blue'>/*side effect code*/</b>)`,
      `Runs the <b class='fg-blue'>side effect code</b> after every render`,
    );
    return () => {
      // cleanup function block
      onLifecycleEvent(
        `Child`,
        `useEffect(<b class='fg-blue'>return ()=>{/*cleanups*/}</b>)`,
        `Runs the <b class='fg-blue'>cleanup function</b> after every render`,
      );
    };
  }); // no dependency array

  /*
   * This specific `useEffect` hook with an empty dependency array `[]` is used to
   *  run the side effect code once on mount and the cleanup function once on unmount.
   */
  useEffect(() => {
    // side effect code block
    onLifecycleEvent(
      `Child`,
      `useEffect(<b class='fg-blue'>/*side effect code*/,<span class='fg-red'>[]</span></b>)`,
      `Runs the <b class='fg-blue'>side effect code</b> once on mount`,
    );
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

  /*
   * This specific `useEffect` hook with the dependency array `[dep]` is used to run the side
   * effect code when the `dep` state variable changes. The side effect code block inside this
   * `useEffect` will be executed whenever the `dep` state variable is updated. Additionally,
   * the cleanup function block will be executed when the component unmounts or when the `dep`
   * state variable changes.
   */
  useEffect(() => {
    // side effect code block
    onLifecycleEvent(
      `Child`,
      `useEffect(<b class='fg-blue'>/*side effect code*/,<span class='fg-red'>[dep]</span></b>)`,
      `Runs the <b class='fg-blue'>side effect code</b> when dependencies change`,
    );
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
