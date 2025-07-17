/**
 * State Update Example
 * This example shows how to manage state updates in a class component using the setState method.
 * The state's count property is updated by passing a function to setState that receives the previous state.
 * This is useful for ensuring that the state update is based on the most recent state, especially in cases where multiple updates may occur in quick succession.
 * This approach avoids potential issues with stale state values.
 */
import React from "react";

export class StateUpdateComponent02 extends React.Component<
  object,
  { count: number }
> {
  state = { count: 7 };
  handleBtnClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div className="my-box-border-1 fg-blue">
        Count: <b>{this.state.count}</b>
        <button onClick={this.handleBtnClick} style={{ marginLeft: "2rem" }}>
          Increment
        </button>
      </div>
    );
  }
}
