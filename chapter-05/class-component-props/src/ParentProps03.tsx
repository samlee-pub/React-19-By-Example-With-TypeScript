/**
 * This component demonstrates how to pass data to child
 * components via props.
 * The parent component passes an object to the child
 * component using the spread operator.
 * The child component will receive the properties
 * from the object as its props.
 * @example
 *   <ChildProps01 name="David" age={25} />
 * @example
 *   const person = { name: "David", age: 25 };
 *   <ChildProps01 {...person} />
 * @example
 *   <ChildProps01 {...{ name: "David", age: 25 }} />
 * @ReactDOM Component: <ParentProps03 />
 */
import React from "react";
import { ChildProps01 } from "./ChildProps01";
export class ParentProps03 extends React.Component {
  render() {
    const person = { name: "David", age: 25 };
    return (
      <div className="my-box-border-1">
        <h3>Objects</h3>
        <div className="my-box-border-1">
          <div>Parent passes the object spread</div>
          <div className="my-box-border-1 fg-blue">
            {`const person = { name: "David", age: 25 };`}
            <br />
            {`<ChildProps01 {...person} />`}
          </div>
        </div>
        <ChildProps01 {...person} />
      </div>
    );
  }
}
