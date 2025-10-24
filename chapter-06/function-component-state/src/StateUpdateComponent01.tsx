/**
 * This component demonstrates how to update state by passing a new value.
 * It uses the useState hook to manage the state and state updater function.
 * The state is updated by passing a new value directly to the state updater function.
 * This is a common pattern in React for updating state when the new value is known and does not depend on the previous state.
 */
import { useState } from "react";

export function StateUpdateComponent01() {
  const [count, setCount] = useState(3);

  const handleBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="my-box-border-1">
      <div>Passing a value to state updater function</div>
      <div className="my-box-border-1 fg-blue">
        Count: <b>{count}</b>
        <button onClick={handleBtnClick} style={{ marginLeft: "2rem" }}>
          Increment
        </button>
      </div>
    </div>
  );
}
