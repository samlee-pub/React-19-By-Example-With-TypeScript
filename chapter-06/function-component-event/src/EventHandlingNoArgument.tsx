/**
 * This component demonstrates how to handle events in React without passing any arguments.
 * It includes functions for incrementing, decrementing, and resetting a count value,
 * using both regular functions and arrow functions.
 * The component also shows how to handle events with and without event arguments.
 */
import React, { useState } from "react";

export function EventHandlingNoArgument() {
  const [count, setCount] = useState(0);

  /**
   * Increment the count by 1 using a regular function.
   * This function does not take any arguments and updates the state directly.
   */
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  /**
   * Decrement the count by 1 using an arrow function.
   * This function does not take any arguments and updates the state directly.
   */
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  /**
   * Reset the count to 0 using a regular function.
   * This function takes an event argument and updates the state.
   * It also shows an alert with the event type when the count is reset.
   */
  function resetCount(e: React.MouseEvent) {
    setCount(0);
    if (e) {
      alert(`Count reset to 0 with event: ${e.type}`);
    }
  }

  /**
   * Reset the count to 10 using an arrow function.
   * This function takes an event argument and updates the state.
   * It also shows an alert with the event type when the count is reset.
   */
  const resetCount2 = (e: React.MouseEvent) => {
    setCount(10);
    if (e) {
      alert(`Count reset to 10 with event: ${e.type}`);
    }
  };

  return (
    <div>
      <div className="my-box-border-1">
        <div className="fg-blue">
          Current Count: <b>{count}</b>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={incrementCount}>Count ++ (Regular function)</button>
        </div>
        <div>
          <button style={{ marginTop: "10px" }} onClick={decrementCount}>
            Count -- (Arrow function)
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={resetCount}>
            Reset to 0 (Regular function with event)
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={resetCount2}>
            Reset to 10 (Arrow function with event)
          </button>
        </div>
      </div>
    </div>
  );
}
