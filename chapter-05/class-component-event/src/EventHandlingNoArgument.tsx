/**
 * Demonstrates event handling in a React class component.
 * This component includes methods for incrementing,
 * decrementing, and resetting a count value.
 * It showcases both class method binding and arrow function usage.
 * The component also illustrates how to handle events
 * with and without passing arguments.
 */
import React, { type MouseEvent } from "react";

export class EventHandlingNoArgument extends React.Component<
  object,
  { count: number }
> {
  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
    // Binding the class method
    // This is necessary for class methods, but not needed for arrow functions.
    this.incrementCount = this.incrementCount.bind(this);
    this.incrementCount2 = this.incrementCount2.bind(this);
  }

  /**
   * Class method approach
   * This method is bound in the constructor
   * Binding is necessary for class methods to ensure 'this' refers to the component instance
   * @param value - The value to increment the count by
   * @param e - The MouseEvent that triggered the increment
   */
  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  /**
   * Class method approach with event
   * This method is bound in the constructor
   * Binding is necessary for class methods to ensure 'this' refers to the component instance
   * It accepts an event parameter, which can be used for additional functionality
   * For example, it can alert the type of event that triggered the increment
   * @param e - The MouseEvent that triggered the increment
   */
  incrementCount2(e: MouseEvent) {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    if (e) {
      alert(`Count incremented with event: ${e.type}`);
    }
  }

  /**
   * Class method approach
   * Binding is necessary, but this method is not bound in the constructor
   * Bind this in JSX when calling the method
   * @param value - The value to decrement the count by
   * @param e - The MouseEvent that triggered the decrement
   */
  decrementCount() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  /**
   * Arrow function approach
   * This method is defined as an arrow function, so 'this' is automatically bound to the component instance
   * @param e - The MouseEvent that triggered the reset
   * @returns void
   */
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  /**
   * Arrow function approach with event
   * This method is defined as an arrow function, so 'this' is automatically bound to the component instance
   * It accepts an event parameter, which can be used for additional functionality
   * @param e - The MouseEvent that triggered the reset
   */
  resetCount2 = (e: MouseEvent) => {
    this.setState({
      count: 10,
    });
    if (e) {
      alert(`Count reset to 10 with event: ${e.type}`);
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
            <button onClick={() => this.incrementCount()}>
              Count ++ (Class method bound in constructor)
            </button>
          </div>
          <div>
            <button
              style={{ marginTop: "10px" }}
              onClick={this.decrementCount.bind(this)}
            >
              Count -- (Class method bound in JSX)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={this.resetCount}>
              Reset to 0 (Arrow function)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={(e) => this.incrementCount2(e)}>
              Count ++ (Class method with event)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={(e) => this.resetCount2(e)}>
              Reset to 10 (Arrow function call with event)
            </button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={this.resetCount2}>
              Reset to 10 (Arrow function with implicit event)
            </button>
          </div>
        </div>
      </div>
    );
  }
}
