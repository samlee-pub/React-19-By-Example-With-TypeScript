/**
 * A React component demonstrating state initialization using the `useState` hook.
 *
 * This component initializes a `count` state variable with a static value and displays it.
 * The state is not updated in this example; it simply shows how to pass an initial value to `useState`.
 */
import { useState } from "react";

export function StateInitializationComponent01() {
  const [count] = useState(3);
  return (
    <div className="my-box-border-1">
      <div>
        Passing a value to <b>useState</b>
      </div>
      <div className="my-box-border-1 fg-blue">
        Count: <b>{count}</b>
      </div>
    </div>
  );
}
