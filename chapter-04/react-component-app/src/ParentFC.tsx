/**
 * @ReactDOM Component: <ParentFC />
 * @description A parent function component that renders a child component.
 * @example
 *  <ParentFC />
 */
import { ChildFC } from "./ChildFC";

export function ParentFC() {
  return (
    <div className="my-box-border-1">
      <div className="fg-blue">Parent Function Component</div>
      <button>
        <ChildFC message="Render in Parent!" /> {/* Calling Child */}
      </button>
    </div>
  );
}
