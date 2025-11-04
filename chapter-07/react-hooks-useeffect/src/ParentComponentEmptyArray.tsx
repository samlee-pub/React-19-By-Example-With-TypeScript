/**
 * This component serves as a parent component for managing a child
 * component's mounting state and logging its lifecycle events.
 * The child uses `useEffect` with an empty dependency array to execute side effects
 * exactly once when mounted.
 */
import { useRef } from "react";
import { ChildComponentEmptyArray } from "./ChildComponentEmptyArray";

export function ParentComponentEmptyArray() {
  const logMessages = useRef<HTMLUListElement>(null);

  // Logs lifecycle events of the child component
  const logLifecycleEvent = (
    component: string,
    method: string,
    message: string,
  ) => {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: `<b>${component}</b> - ${method}: ${message}`,
      }),
    );
  };

  return (
    <>
      <div className="my-box-border-1">
        <h3>Child Component</h3>
        <div className="my-box-border-1">
          <ChildComponentEmptyArray onLifecycleEvent={logLifecycleEvent} />
        </div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <h3>Lifecycle Events:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </>
  );
}
