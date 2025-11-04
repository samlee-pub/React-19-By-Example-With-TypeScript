/**
 * This component serves as a parent component for managing a child
 * component's mounting state and logging its lifecycle events.
 * The child component implements multiple useEffect hooks, each
 * with specific dependencies, emphasizing render cycle tracking.
 */
import { useRef, useState } from "react";
import { ChildComponentAll } from "./ChildComponentAll";

export function ParentComponentAll() {
  const [isChildMount, setIsChildMount] = useState(true);
  const childCount = useRef(0);
  const logMessages = useRef<HTMLUListElement>(null);

  // Logs lifecycle events of the child component
  const logLifecycleEvent = (
    component: string,
    method: string,
    message: string,
  ) => {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: `<b>${component}-${childCount.current}</b> - ${method}: ${message}`,
      }),
    );
  };

  // Clears the log messages
  const clearLogs = () => {
    if (logMessages.current) {
      logMessages.current.innerHTML = "";
    }
  };

  // Toggles the mounting state of the child component
  const toggleChildMount = () => {
    const mounting = !isChildMount;
    if (mounting) {
      childCount.current++;
    }
    setIsChildMount(mounting);
  };

  const buttonText = isChildMount ? "Unmount Component" : "Mount Component";

  return (
    <>
      <div className="my-box-border-1">
        <h3>Child Component</h3>
        <div className="my-box-border-1">
          {isChildMount ? (
            <ChildComponentAll onLifecycleEvent={logLifecycleEvent} />
          ) : (
            <div className="component-container">Null</div>
          )}
        </div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <button onClick={toggleChildMount}>{buttonText}</button>
        <button onClick={clearLogs} style={{ marginLeft: "6px" }}>
          Clear Logs
        </button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <h3>Lifecycle Events:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </>
  );
}
