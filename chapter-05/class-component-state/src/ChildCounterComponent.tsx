/**
 * ChildCounterComponent.tsx
 * This component manages a child counter state and receives the parent counter as a prop.
 * It allows the child to update its own counter and also to update the parent's counter.
 * It demonstrates how to handle state in a child component and how to interact with the parent component's state.
 * It is used in conjunction with the ParentCounterComponent to show the relationship between parent and child state management.
 */

import React from "react";

export class ChildCounterComponent extends React.Component<
  {
    parentCounter: number;
    handleUpdateParentCounterClick: () => void;
  },
  { childCounter: number }
> {
  state = {
    childCounter: 0,
  };
  handleUpdateChildCounterClick = () => {
    this.setState({ childCounter: this.state.childCounter + 1 });
  };

  render() {
    return (
      <div className="my-box-border-1 fg-blue">
        <div>
          Parent Counter in Child: <b>{this.props.parentCounter}</b>
        </div>
        <div>
          Child Counter in Child: <b>{this.state.childCounter}</b>
        </div>
        <div>
          <button
            onClick={this.props.handleUpdateParentCounterClick}
            style={{ marginLeft: "2rem" }}
          >
            In Child: Parent ++
          </button>
          <button
            onClick={this.handleUpdateChildCounterClick}
            style={{ marginLeft: "2rem" }}
          >
            In Child: Child ++
          </button>
        </div>
      </div>
    );
  }
}
