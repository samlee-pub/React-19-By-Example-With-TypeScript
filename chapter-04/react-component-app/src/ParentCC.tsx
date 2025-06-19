/**
 * @ReactDOM Component: <ParentCC />
 * @description A parent class component that renders a child component.
 * @example
 *   <ParentCC />
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
            <ChildCC message="Render in Parent!" /> {/* Calling Child */}
          </button>
        </div>
      </div>
    );
  }
}
