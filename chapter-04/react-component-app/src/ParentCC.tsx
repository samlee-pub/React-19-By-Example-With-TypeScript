/**
 * This component showcases how class-based parent components compose and render child components
 * while passing data through props in a TypeScript React application.
 *
 * @description A parent class component that renders a child component.
 *
 * @example
 * // Basic usage - renders the parent with its class-based child component
 * <ParentCC />
 */
import React from "react";
import { ChildCC } from "./ChildCC";

export class ParentCC extends React.Component {
  render() {
    return (
      <div>
        <div className="my-box-border-1">
          <div className="fg-blue">Parent Class Component</div>
          <button>
            {/* Renders the ChildCC component with a static message prop.*/}
            <ChildCC message="Render in Parent!" />
          </button>
        </div>
      </div>
    );
  }
}
