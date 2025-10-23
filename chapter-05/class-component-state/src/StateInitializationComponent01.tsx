/**
 * This component demonstrates how to initialize state in a React class component.
 * The state is initialized with a count of a fixed value.
 * The initialization is done in the constructor method, which is a common practice in class components.
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
    return (
      <div className="my-box-border-1">
        <div>Initialize state in the constructor</div>
        <div className="my-box-border-1 fg-blue">
          Count: <b>{this.state.count}</b>
        </div>
      </div>
    );
  }
}
