/**
 * This component demonstrates how to pass data to child
 * components via props.
 * The parent component passes an object containing
 * `name` and `age` attributes to the child component.
 * The child component can then access these attributes
 * via `this.props.person`.
 * @example
 *   <ChildProps07 person={{ name: "David", age: 25 }} />
 * @example
 *   const person = { name: "David", age: 25 };
 *   <ChildProps07 person={person} />
 * @ReactDOM Component: <ParentProps02 />
 */
import React from "react";
import { ChildProps07 } from "./ChildProps07";
export class ParentProps02 extends React.Component {
  render() {
    const person = { name: "David", age: 25 };
    return (
      <div className="my-box-border-1">
        <h3>Objects</h3>
        <div className="my-box-border-1">
          <div>Parent passes an Object attribute</div>
          <div className="my-box-border-1 fg-blue">
            {`const person = { name: "David", age: 25 };`}
            <br />
            {`<ChildProps07 person={person} />`}
          </div>
        </div>
        <ChildProps07 person={person} />
      </div>
    );
  }
}
