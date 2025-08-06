/**
 * ParentCounterComponent is a React functional component that manages a parent counter state.
 * This component displays the current value of the parent counter and provides a button to increment it.
 * It also renders the ChildCounterComponent, passing down the parent counter value and the increment handler
 * as props, allowing the child component to interact with the parent's counter state.
 */
import { useState } from "react";
import { ChildCounterComponent } from "./ChildCounterComponent";

export function ParentCounterComponent() {
  const [parentCounter, setParentCounter] = useState<number>(0);

  /**
   * Increments the parent counter state by 1.
   * Uses the functional form of setState to ensure the latest state value is used.
   */
  const handleParentBtnClick = () => {
    setParentCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="my-box-border-1">
      <div>Parent</div>
      <div className="my-box-border-1">
        <div>Manage Parent Counter State</div>
        <div className="my-box-border-1 fg-blue">
          Parent Counter: <b>{parentCounter}</b>
          <button onClick={handleParentBtnClick} style={{ marginLeft: "2rem" }}>
            Parent ++
          </button>
        </div>
      </div>
      <div>Child</div>
      <div className="my-box-border-1">
        <div>Manage Parent/Child Counter State</div>
        <ChildCounterComponent
          parentCounter={parentCounter}
          handleParentCounterUpdate={handleParentBtnClick}
        />
      </div>
    </div>
  );
}
