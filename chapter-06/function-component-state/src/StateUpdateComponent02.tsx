/**
 * This component demonstrates how to update state using a function that receives the previous state.
 * It uses the useState hook to manage the state and updates it using a functional update.
 * It is a best practice in React to use this method when the new state is derived from the previous state value.
 */
import { useState } from "react";

export function StateUpdateComponent02() {
  const [count, setCount] = useState(7);

  const handleBtnClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="my-box-border-1">
      <div>Passing a function to state updater function</div>
      <div className="my-box-border-1 fg-blue">
        Count: <b>{count}</b>
        <button onClick={handleBtnClick} style={{ marginLeft: "2rem" }}>
          Increment
        </button>
      </div>
    </div>
  );
}
