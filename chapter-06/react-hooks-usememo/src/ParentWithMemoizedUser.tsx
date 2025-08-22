/**
 * This component demonstrates a parent that maintains a stable user object reference using useMemo.
 * Since the memoized user object preserves its identity across re-renders, the MemoizedUserComponent
 * only renders initially and avoids unnecessary updates when the parent re-renders.
 *
 * The RegularUserComponent continues to re-render with each parent update because it lacks memoization,
 * even though it receives identical props due to the stable object reference from useMemo.
 */
import { useRef, useState, useMemo, useCallback } from "react";
import { MemoizedUserComponent, RegularUserComponent } from "./UserComponent";

export function ParentWithMemoizedUser() {
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

  // Memoized user
  // This user object is memoized, so it will be recreated only when the dependencies change.
  // In this case, the dependencies are empty, so the user object will be created only once.
  const user = useMemo(() => {
    return { name: "Lily Smith", age: 22 };
  }, []);

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
