/**
 * State Management Component
 * This component demonstrates how to manage state in a React class component.
 * It initializes state in the constructor and updates it using the setState method.
 * The component includes a button to increment the counter, showcasing how state updates can be handled in a class-based component.
 */
import React from "react";

export class StateManagementComponent extends React.Component<
  object,
  { counter: number }
> {
  constructor(props: object) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleBtnClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="my-box-border-1">
        <div>Initialize and Update State</div>
        <div className="my-box-border-1 fg-blue">
          Counter: <b>{this.state.counter}</b>
          <button onClick={this.handleBtnClick} style={{ marginLeft: "2rem" }}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}
