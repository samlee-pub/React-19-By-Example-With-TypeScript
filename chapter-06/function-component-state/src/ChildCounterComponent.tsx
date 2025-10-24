/**
 * This component manages its own child counter state and receives the parent counter
 * from its parent component. It provides buttons to increment both the parent and child counters.
 * It demonstrates the use of the useState hook for local state management in React.
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
