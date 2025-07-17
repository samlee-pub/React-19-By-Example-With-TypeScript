/**
 * State Initialization Example
 * This component demonstrates how to initialize state in a React class component.
 * It sets an initial state with a count property in the constructor.
 */
import React from "react";

export class StateInitializationComponent01 extends React.Component<
  object,
  { count: number }
> {
  constructor(props: object) {
    super(props);
    this.state = { count: 3 };
  }
  render() {
    return <div>Count: {this.state.count}</div>;
  }
}
