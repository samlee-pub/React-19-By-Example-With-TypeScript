/**
 * The component renders a child component that is memoized using the useMemo hook.
 * The memoChild useMemo hook has [count, handleCountChange, handleLogMessageEvent] in its dependency array.
 * The handleCountChange function is not memoized using the useCallback hook.
 * The handleLogMessageEvent function is memoized using the useCallback hook.
 * Since handleCountChange is a new function on every render, the dependency array changes on every parent render.
 * Without using useCallback, the child component is rendered every time the parent component is rendered.
 */
import { useMemo, useRef, useState, useCallback } from "react";
import { ChildComponent } from "./ChildComponent";

export function ParentComponent1() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(true);
  const logMessages = useRef<HTMLUListElement>(null);

  const handleLogMessageEvent = useCallback((message: string) => {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: `${message}`,
      }),
    );
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleCountChange() {
    setCount((c) => c + 1);
  }

  // Using useMemo to memoize the child component rendering
  const memoChild = useMemo(() => {
    handleLogMessageEvent(`In useMemo - Re-render Child Component`);
    return (
      <ChildComponent
        data={count}
        onLogHandler={handleLogMessageEvent}
        onParentCountChange={handleCountChange}
      />
    );
  }, [count, handleCountChange, handleLogMessageEvent]);

  return (
    <div className="my-box-border-1">
      <div>
        <div>Parent Count: {count}</div>
        <button
          onClick={() => setRender(!render)}
          style={{ marginRight: "1rem" }}
        >
          Re-render Parent
        </button>
        <button onClick={() => setCount((c) => c + 1)}>Update Count ++</button>
      </div>
      <div>{memoChild}</div>
      <div style={{ marginTop: "12px" }}>
        <h3>Log Messages:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </div>
  );
}
