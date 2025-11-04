/**
 * Parent component that renders a child component and logs its lifecycle events.
 * This component displays log messages about the lifecycle events of the child
 * component. It passes a callback function (`logLifecycleEvent`) to the child,
 * which the child calls to report its lifecycle events.
 */
import { useRef } from "react";
import { BatchUpdateChildComponent } from "./BatchUpdateChildComponent";

export function BatchUpdateParentComponent() {
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
          <BatchUpdateChildComponent onLifecycleEvent={logLifecycleEvent} />
        </div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <h3>Lifecycle Events:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </>
  );
}
