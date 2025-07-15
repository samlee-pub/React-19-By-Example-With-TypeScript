/**
 * This component demonstrates how to pass data to child
 * components via props.
 * The parent component does not pass any attributes
 * to the child component.
 * The child component will use default values for its props.
 * @example
 *   <ChildProps09 />
 * @ReactDOM Component: <ParentProps05 />
 */
import React from "react";
import { ChildProps09 } from "./ChildProps09";

export class ParentProps05 extends React.Component {
  render() {
    return (
      <div className="my-box-border-1">
        <h3>Children</h3>
        <div className="my-box-border-1">
          <div>Parent passes no attributes</div>
          <div className="my-box-border-1 fg-blue">{`<ChildProps09 />`}</div>
          <ChildProps09 />
        </div>
      </div>
    );
  }
}
