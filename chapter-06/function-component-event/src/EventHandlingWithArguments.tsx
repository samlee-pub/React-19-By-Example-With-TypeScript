/**
 * This component demonstrates how to handle events in React with arguments.
 * It includes functions for incrementing, decrementing, and resetting a count value,
 * using both regular functions and arrow functions.
 * The component also shows how to handle events with and without event arguments.
 */
import React, { useState } from "react";

export function EventHandlingWithArguments() {
  const [count, setCount] = useState(0);

  /**
   * Increment the count by a specified value using a regular function.
   * This function takes a value as an argument and updates the state.
   * @param value - The value to increment the count by.
   */
  function incrementCountByValue(value: number) {
    setCount((prevCount) => prevCount + value);
  }

  /**
   * Decrement the count by a specified value using an arrow function.
   * This function takes a value as an argument and updates the state.
   * @param value - The value to decrement the count by.
   */
  const decrementCountByValue = (value: number) => {
    setCount((prevCount) => prevCount - value);
  };

  /**
   * Reset the count to a specified value using a regular function.
   * This function takes a value and an event as arguments, updates the state,
   * and shows an alert with the event type when the count is reset.
   * @param value - The value to reset the count to.
   * @param e - The mouse event that triggered the reset.
   */
  function resetCountToValue(value: number, e: React.MouseEvent) {
    setCount(value);
    if (e) {
      alert(`Count reset to ${value} with event: ${e.type}`);
    }
  }

  /**
   * Reset the count to a specified value using an arrow function.
   * This function takes a value and an event as arguments, updates the state,
   * and shows an alert with the event type when the count is reset.
   * @param value - The value to reset the count to.
   * @param e - The mouse event that triggered the reset.
   */
  const resetCountToValue2 = (value: number, e: React.MouseEvent) => {
    setCount(value);
    if (e) {
      alert(`Count reset to ${value} with event: ${e.type}`);
    }
  };
  return (
    <div>
      <div className="my-box-border-1">
        <div className="fg-blue">
          Current Count: <b>{count}</b>
        </div>

        <div style={{ marginTop: "10px" }}>
          <button onClick={() => incrementCountByValue(2)}>
            Count +2 (Regular function with args)
          </button>
        </div>

        <div>
          <button
            style={{ marginTop: "5px" }}
            onClick={() => decrementCountByValue(4)}
          >
            Count -4 (Arrow function with args)
          </button>
        </div>

        <div style={{ marginTop: "10px" }}>
          <button onClick={(e) => resetCountToValue(10, e)}>
            Reset to 10 (Regular function with args and event)
          </button>
        </div>

        <div style={{ marginTop: "10px" }}>
          <button onClick={(e) => resetCountToValue2(15, e)}>
            Reset to 15 (Arrow function with args and event)
          </button>
        </div>
      </div>
    </div>
  );
}
