/**
 * This component demonstrates how to handle events in React with arguments.
 * It includes both class methods and arrow functions for event handling.
 * The component allows incrementing, decrementing, and resetting a count value,
 * showcasing different ways to pass arguments to event handlers.
 * It also illustrates how to handle events with and without passing additional arguments.
 */
import React, { type MouseEvent } from "react";

export class EventHandlingWithArguments extends React.Component<
  object,
  { count: number }
> {
  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
    // Binding the class method
    // This is necessary for class methods, but not needed for arrow functions.
    this.incrementCountByValue = this.incrementCountByValue.bind(this);
  }

  // Class method approach
  // This method is bound in the constructor
  // Binding is necessary for class methods to ensure 'this' refers to the component instance
  incrementCountByValue(value: number) {
    this.setState((prevState) => ({
      count: prevState.count + value,
    }));
  }
  // Class method approach
  // Binding is necessary, but this method is not bound in the constructor
  // Bind this in JSX when calling the method
  decrementCountByValue(value: number) {
    this.setState((prevState) => ({
      count: prevState.count - value,
    }));
  }
  // Arrow function approach (no binding needed)
  // This method is defined as an arrow function, so 'this' is automatically bound to the component instance
  // It accepts a value parameter to reset the count, and an optional event parameter
  resetCountToValue = (value: number, e?: MouseEvent) => {
    this.setState({
      count: value,
    });
    if (e) {
      alert(`Count reset to ${value} with event: ${e.type}`);
    }
  };

  render() {
    return (
      <div>
        <div className="my-box-border-1">
          <div className="fg-blue">
            Current Count: <b>{this.state.count}</b>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => this.incrementCountByValue(2)}>
              Count +2 (Class method)
            </button>
          </div>
          <div>
            <button
              style={{ marginTop: "5px" }}
              onClick={this.decrementCountByValue.bind(this, 4)}
            >
              Count -4 (Class method)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => this.resetCountToValue(10)}>
              Reset to 10 (Arrow function call with no event)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={(e) => this.resetCountToValue(15, e)}>
              Reset to 15 (Arrow function call with event)
            </button>
          </div>
        </div>
      </div>
    );
  }
}
