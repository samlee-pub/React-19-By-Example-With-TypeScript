/**
 * This component demonstrates the use of useState hook to initialize state.
 * It initializes the state with a function that returns a static value of 3.
 * This is useful for cases where the initial state might be derived from a more complex calculation,
 * but in this case, it simply returns a constant value.
 */
import { useState } from "react";

export function StateInitializationComponent02() {
  const [count] = useState(() => 7);

  return (
    <div className="my-box-border-1">
      <div>
        Initialize state with a function to <b>useState</b>
      </div>
      <div className="my-box-border-1 fg-blue">
        Count: <b>{count}</b>
      </div>
    </div>
  );
}
