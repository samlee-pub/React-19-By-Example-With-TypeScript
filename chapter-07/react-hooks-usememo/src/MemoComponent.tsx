/**
 * This component demonstrates the use of the useMemo hook to optimize the rendering of a child component.
 * It uses useMemo to memoize the ExpensiveChildComponent, which is expensive to render.
 * The useMemo hook is used to avoid unnecessary re-renders of the ExpensiveChildComponent when the parent component re-renders.
 * It also allows you to update the child component's props and see how it affects the rendering.
 */
import { useRef, useState, useMemo } from "react";
import { ExpensiveChildComponent } from "./ExpensiveChildComponent";

export function MemoComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ value: 42 });
  const logMessages = useRef<HTMLUListElement>(null);
  function handleLogMessageEvent(message: string) {
    logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: message,
      }),
    );
  }
  const memoizedChild = useMemo(() => {
    handleLogMessageEvent(
      `Rendering ExpensiveChildComponent with value: ${data.value}`,
    );
    return <ExpensiveChildComponent data={data} />;
  }, [data]);

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          style={{ marginRight: "1rem" }}
        >
          Re-render Parent ({count})
        </button>
        <button
          onClick={() => {
            setData((d) => ({ value: d.value + 1 }));
          }}
        >
          Update child props
        </button>
      </div>
      <div style={{ marginTop: "12px" }}>
        {memoizedChild}
        <h3>Log Messages:</h3>
        <ul ref={logMessages} className="log-messages"></ul>
      </div>
    </div>
  );
}
