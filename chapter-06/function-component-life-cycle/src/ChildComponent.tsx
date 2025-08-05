/**
 * This component demonstrates the use of React hooks to manage lifecycle events
 * and state updates. It logs its lifecycle events to a parent component.
 * It uses useEffect for mounting, updating, and unmounting behaviors.
 * It also uses useRef to keep track of the previous count value.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the child component.
 * @param {Function} props.onLifecycleEvent - Callback function to log lifecycle events.
 */
import { useState, useEffect, useRef } from "react";

interface ChildProps {
  name: string;
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

export default function ChildComponent({ name, onLifecycleEvent }: ChildProps) {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>(0);

  // Mounting and unmounting (componentDidMount and componentWillUnmount)
  useEffect(() => {
    onLifecycleEvent(
      name,
      "useEffect -- componentDidMount",
      "Component mounted",
    );

    return () => {
      onLifecycleEvent(
        name,
        "useEffect -- componentWillUnmount",
        "Component unmounting",
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Updating (componentDidUpdate)
  useEffect(() => {
    if (count > 0) {
      onLifecycleEvent(
        name,
        "useEffect -- componentDidUpdate",
        `Count changed from ${prevCountRef.current} to ${count}`,
      );
    }
    prevCountRef.current = count;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const incrementCount = () => {
    // Log the count change
    onLifecycleEvent(
      name,
      "Count++ handler",
      `Incrementing count from ${count} to ${count + 1}`,
    );
    setCount((prev) => prev + 1);
  };

  // Log render (runs on every render)
  onLifecycleEvent(name, "render", `Rendering with count: ${count}`);

  return (
    <div>
      <div className="fg-blue">
        Child Count: <b>{count}</b>
      </div>
      <button onClick={incrementCount}>Update Count</button>
    </div>
  );
}
