/**
 * State Initialization Example
 * This component demonstrates how to initialize state in a React class component.
 * The state is initialized with a count of a fixed value.
 */
import React from "react";

export class StateInitializationComponent02 extends React.Component<
  object,
  { count: number }
> {
  state = { count: 7 };
  render() {
    return <div>Count: {this.state.count}</div>;
  }
}
