/**
 * This component manages a parent counter state and passes it down to a child component.
 * It demonstrates how to lift state up in React, allowing the parent to control the counter state,
 * while the child can also update the parent's counter.
 * The child component receives the parent's counter and a function to update it.
 * It is a common pattern in React to manage shared state between parent and child components.
 */
import { useState } from "react";
import { ChildCounterComponent } from "./ChildCounterComponent";

export function ParentCounterComponent() {
  const [parentCounter, setParentCounter] = useState<number>(0);

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
