/**
 * `StateManagementComponent` is a React functional component that demonstrates
 * state management concepts using various child components.
 *
 * It renders two sections:
 * - **State Initialization**: Showcases examples of initializing state using
 *   `StateInitializationComponent01` and `StateInitializationComponent02`.
 * - **State Update**: Demonstrates state update patterns using
 *   `StateUpdateComponent01` and `StateUpdateComponent02`.
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
