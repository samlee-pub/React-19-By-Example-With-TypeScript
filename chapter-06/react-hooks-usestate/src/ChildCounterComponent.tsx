/**
 * ChildCounterComponent displays both the parent and child counters,
 * and provides buttons to increment each counter.
 *
 * @param parentCounter - The current value of the parent counter, passed from the parent component.
 * @param handleParentCounterUpdate - Callback function to increment the parent counter.
 *
 * @remarks
 * This component maintains its own local state for the child counter using the `useState` hook.
 * It also receives the parent counter value and an update function as props from its parent.
 */
import { useState } from "react";

interface ChildCounterProps {
  parentCounter: number;
  handleParentCounterUpdate: () => void;
}

export function ChildCounterComponent({
  parentCounter,
  handleParentCounterUpdate,
}: ChildCounterProps) {
  const [childCounter, setChildCounter] = useState<number>(0);

  /**
   * Increments the child counter state by 1.
   * Uses the previous counter value to ensure correct state updates.
   */
  const handleChildCounterUpdate = () => {
    setChildCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="my-box-border-1 fg-blue">
      <div>
        Parent Counter in Child: <b>{parentCounter}</b>
      </div>
      <div>
        Child Counter in Child: <b>{childCounter}</b>
      </div>
      <div>
        <button
          onClick={handleParentCounterUpdate}
          style={{ marginLeft: "2rem" }}
        >
          In Child: Parent ++
        </button>
        <button
          onClick={handleChildCounterUpdate}
          style={{ marginLeft: "2rem" }}
        >
          In Child: Child ++
        </button>
      </div>
    </div>
  );
}
