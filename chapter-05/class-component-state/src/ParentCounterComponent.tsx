/**
 * This component manages a parent counter state and passes it down to a child component.
 * The child component can update the parent's counter state.
 * It demonstrates how to manage state in a class component and how to pass props to child components.
 * It also shows how to handle state updates in a parent-child relationship.
 */
import React from "react";
import { ChildCounterComponent } from "./ChildCounterComponent";

export class ParentCounterComponent extends React.Component<
  object,
  { parentCounter: number }
> {
  constructor(props: object) {
    super(props);
    this.state = {
      parentCounter: 0,
    };
  }

  handleParentBtnClick = () => {
    this.setState((prevState) => ({
      parentCounter: prevState.parentCounter + 1,
    }));
  };

  render() {
    return (
      <div className="my-box-border-1">
        <div>Parent</div>
        <div className="my-box-border-1">
          <div>Manage Parent Counter State</div>
          <div className="my-box-border-1 fg-blue">
            Parent Counter: <b>{this.state.parentCounter}</b>
            <button
              onClick={this.handleParentBtnClick}
              style={{ marginLeft: "2rem" }}
            >
              Parent ++
            </button>
          </div>
        </div>
        <div>Child</div>
        <div className="my-box-border-1">
          <div>Manage Parent/Child Counter State</div>
          <ChildCounterComponent
            parentCounter={this.state.parentCounter}
            handleUpdateParentCounterClick={this.handleParentBtnClick}
          />
        </div>
      </div>
    );
  }
}
