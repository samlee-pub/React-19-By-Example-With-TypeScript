/**
 * A React component that demonstrates state initialization using a callback function with `useState`.
 *
 * This component initializes the `count` state variable by passing a function to `useState`.
 * The callback form of `useState` is useful when the initial state is the result of an expensive computation,
 * as it ensures the function is only called on the initial render.
 */
import { useState } from "react";

export function StateInitializationComponent02() {
  const [count] = useState(() => 7);
  return (
    <div className="my-box-border-1">
      <div>
        Passing a callback to <b>useState</b>
      </div>
      <div className="my-box-border-1 fg-blue">
        Count: <b>{count}</b>
      </div>
    </div>
  );
}
