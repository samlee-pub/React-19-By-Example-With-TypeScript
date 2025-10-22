/**
 * This component showcases how function-based parent components compose and render child components
 * while passing data through props in a TypeScript React application.
 *
 * @description A parent function component that renders a child component.
 *
 * @example
 * // Basic usage - renders the parent with its child component
 * <ParentFC />
 */
import { ChildFC } from "./ChildFC";

export function ParentFC() {
  return (
    <div className="my-box-border-1">
      <div className="fg-blue">Parent Function Component</div>
      <button>
        {/* Renders the ChildFC component with a static message prop.*/}
        <ChildFC message="Render in Parent!" />
      </button>
    </div>
  );
}
