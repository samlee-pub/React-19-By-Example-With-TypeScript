/**
 * State Update Example
 * This example shows how to manage state updates in a class component using the setState method.
 * The state's count property is updated by passing a new value to setState.
 */
import React from "react";

export class StateUpdateComponent01 extends React.Component<
  object,
  { count: number }
> {
  state = { count: 3 };
  handleBtnClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="my-box-border-1">
        <div>
          Passing a value to <b>this.setState</b>
        </div>
        <div className="my-box-border-1 fg-blue">
          Count: <b>{this.state.count}</b>
          <button onClick={this.handleBtnClick} style={{ marginLeft: "2rem" }}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}
