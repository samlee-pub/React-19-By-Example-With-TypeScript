/**
 * This component demonstrates how to initialize and update state using React's useState hook.
 * It includes a counter that increments when a button is clicked.
 * The state is managed using the useState hook, which allows for both initialization and updates.
 */

import { StateInitializationComponent01 } from "./StateInitializationComponent01";
import { StateInitializationComponent02 } from "./StateInitializationComponent02";
import { StateUpdateComponent01 } from "./StateUpdateComponent01";
import { StateUpdateComponent02 } from "./StateUpdateComponent02";

export function StateManagementComponent() {
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
