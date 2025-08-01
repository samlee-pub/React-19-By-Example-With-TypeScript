/**
 * This component demonstrates state management in React class components.
 * It includes examples of state initialization and state updates using different methods.
 * The component renders two sections: one for state initialization and another for state updates.
 * Each section contains two components that illustrate different approaches to managing state.
 * The first section shows how to initialize state in the constructor and using class field declarations.
 * The second section demonstrates how to update state using the setState method.
 */
import React from "react";
import { StateInitializationComponent01 } from "./StateInitializationComponent01";
import { StateInitializationComponent02 } from "./StateInitializationComponent02";
import { StateUpdateComponent01 } from "./StateUpdateComponent01";
import { StateUpdateComponent02 } from "./StateUpdateComponent02";

export class StateManagementComponent extends React.Component {
  render() {
    return (
      <>
        <div className="my-box-border-1">
          <h3>State Initialization</h3>
          <StateInitializationComponent01 />
          <StateInitializationComponent02 />
        </div>
        <div className="my-box-border-1">
          <h3>State Update</h3>
          <StateUpdateComponent01 />
          <StateUpdateComponent02 />
        </div>
      </>
    );
  }
}
