/**
 * This component demonstrates a parent component that generates a fresh user object during each render cycle.
 * The newly created object causes both regular and memoized child components to re-render,
 * as React.memo performs shallow comparison and detects the changed object reference.
 */
import { useRef, useState, useCallback } from "react";
import { MemoizedUserComponent, RegularUserComponent } from "./UserComponent";

export function ParentWithRegularUser() {
  const [count, setCount] = useState(0);
  const logMessages = useRef<HTMLUListElement>(null);

  /**
   * Logs a message to the console and appends it to the logMessages list.
   * This function is memoized using useCallback to prevent recreate the function
   * every time the component renders.
   */
  const handleLogMessageEvent = useCallback(function handleLogMessageEvent(
    message: string,
  ) {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: `${message}`,
      }),
    );
  }, []);

  // Regular user
  // This user object is not memoized, so it will be recreated every time the component renders.
  const user = { name: "John Doe", age: 30 };

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ marginRight: "1rem" }}
        >
          Re-render Parent ({count})
        </button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <RegularUserComponent
          user={user}
          handleLogMessageEvent={handleLogMessageEvent}
        />
        <MemoizedUserComponent
          user={user}
          handleLogMessageEvent={handleLogMessageEvent}
        />
        <h3>Log Messages:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </div>
  );
}
