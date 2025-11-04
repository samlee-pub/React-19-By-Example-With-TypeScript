/**
 * A simple counter component using useReducer for state management.
 * It allows incrementing, decrementing, updating by a specific value, and resetting the count.
 * This component demonstrates how to manage complex state updates with useReducer.
 */
import { useReducer } from "react";
export interface StateType {
  count: number;
}
export interface ActionType {
  type: string;
  payload?: number;
}

const initialState = { count: 0 };

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "UPDATECOUNT":
      return { count: state.count + (action.payload || 0) };
    case "RESET":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

export function BasicCounterComponentWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "0.5rem" }}>
        Count: <b>{state.count}</b>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
          style={{ width: "6rem" }}
        >
          Count ++
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
          style={{ width: "6rem", marginLeft: "2rem" }}
        >
          Count --
        </button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => {
            dispatch({ type: "UPDATECOUNT", payload: 5 });
          }}
          style={{ width: "6rem" }}
        >
          Count +5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "UPDATECOUNT", payload: -5 });
          }}
          style={{ width: "6rem", marginLeft: "2rem" }}
        >
          Count -5
        </button>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
          style={{ width: "10rem" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
