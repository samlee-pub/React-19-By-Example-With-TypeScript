/**
 * This component demonstrates the lifecycle of a child component using React function components.
 * It allows mounting and unmounting of the child component and logs its lifecycle events.
 * The child component is expected to call the `onLifecycleEvent` prop with lifecycle events.
 * It also provides buttons to toggle the child's mount state
 * and clear the log messages.
 */
import { useState, useRef } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [isChildMount, setIsChildMount] = useState(false);
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
            <ChildComponent name="Child" onLifecycleEvent={logLifecycleEvent} />
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
