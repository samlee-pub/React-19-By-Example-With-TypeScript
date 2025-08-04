/**
 * This example demonstrates how to handle events in a React class component
 * with and without passing arguments to the event handlers.
 * It shows both class method and arrow function approaches for event handling.
 * The component also illustrates how to handle events
 * with and without passing arguments.
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
    this.incrementCountByValue2 = this.incrementCountByValue2.bind(this);
  }

  /**
   * Class method approach
   * This method is bound in the constructor
   * Binding is necessary for class methods to ensure 'this' refers to the component instance
   * It accepts a value parameter to increment the count
   * @param value - The value to increment the count by
   */
  incrementCountByValue(value: number) {
    this.setState((prevState) => ({
      count: prevState.count + value,
    }));
  }

  /**
   * Class method approach
   * This method is bound in JSX
   * Binding is necessary for class methods to ensure 'this' refers to the component instance
   * It accepts a value parameter to decrement the count and an event parameter
   * @param value - The value to decrement the count by
   */
  decrementCountByValue(value: number) {
    this.setState((prevState) => ({
      count: prevState.count - value,
    }));
  }

  /**
   * Class method approach with event
   * This method is bound in the constructor
   * Binding is necessary for class methods to ensure 'this' refers to the component instance
   * It accepts a value parameter to increment the count and an event parameter
   * @param value - The value to increment the count by
   * @param e - The MouseEvent that triggered the increment
   */
  incrementCountByValue2(value: number, e: MouseEvent) {
    this.setState((prevState) => ({
      count: prevState.count + value,
    }));
    if (e) {
      alert(`Count incremented by ${value} with event: ${e.type}`);
    }
  }

  /**
   * Arrow function approach with arguments
   * This method is defined as an arrow function, so 'this' is automatically bound to the component instance
   * It accepts a value parameter to reset the count
   * @param value - The value to reset the count to
   */
  resetCountToValue = (value: number) => {
    this.setState({
      count: value,
    });
  };

  /**
   * Arrow function approach with arguments and event
   * This method is defined as an arrow function, so 'this' is automatically bound to the component instance
   * It accepts a value parameter to reset the count and an event parameter
   * @param value - The value to reset the count to
   * @param e - The MouseEvent that triggered the reset
   */
  resetCountToValue2 = (value: number, e: MouseEvent) => {
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
              Count +2 (Class method bound in constructor with args)
            </button>
          </div>
          <div>
            <button
              style={{ marginTop: "5px" }}
              onClick={this.decrementCountByValue.bind(this, 4)}
            >
              Count -4 (Class method bound in JSX with args)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => this.resetCountToValue(10)}>
              Reset to 10 (Arrow function with args)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={(e) => this.incrementCountByValue2(5, e)}>
              Count +5 (Class method with args and event)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={(e) => this.resetCountToValue2(15, e)}>
              Reset to 15 (Arrow function with args and event)
            </button>
          </div>
        </div>
      </div>
    );
  }
}
