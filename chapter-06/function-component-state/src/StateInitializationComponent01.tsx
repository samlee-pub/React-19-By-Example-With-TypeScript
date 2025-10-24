/**
 * This component demonstrates the use of the useState hook to initialize state.
 * It initializes the state with a static value of 3.
 * This is a straightforward example of using useState without any initial function.
 * It is useful for simple state management where the initial value is known and does not require any computation.
 */
import { useState } from "react";

export function StateInitializationComponent01() {
  const [count] = useState(3);
  return (
    <div className="my-box-border-1">
      <div>
        Initialize state with a value to <b>useState</b>
      </div>
      <div className="my-box-border-1 fg-blue">
        Count: <b>{count}</b>
      </div>
    </div>
  );
}
