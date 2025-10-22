/**
 * This component demonstrates various ways to pass props to child components in React.
 * It includes examples of basic props, destructured props, default values, children props,
 * function props, and object props.
 * Each section showcases a different aspect of prop handling in class components.
 * @ReactDOM Component: <ParentComponent01 />
 * @example
 *   <ParentComponent01 />
 */
import React from "react";
import { ChildComponent01 } from "./ChildComponent01";
import { ChildComponent02 } from "./ChildComponent02";
import {
  ChildComponent0301,
  ChildComponent0302,
  ChildComponent0303,
} from "./ChildComponent03";
import { ChildComponent04 } from "./ChildComponent04";
import { ChildComponent05 } from "./ChildComponent05";
import { ChildComponent06 } from "./ChildComponent06";

export class ParentComponent01 extends React.Component {
  render() {
    const person = { name: "David", age: 25 };
    return (
      <>
        <div className="my-box-border-1">
          <h3>Basic Props</h3>
          <ChildComponent01 name="David" age={25} />
        </div>
        <div className="my-box-border-1">
          <h3>Destructured Props</h3>
          <ChildComponent02 name="John Doe" age={30} />
        </div>
        <div className="my-box-border-1">
          <h3>Props with Default Values</h3>
          <ChildComponent0301 />
          <ChildComponent0302 />
          <ChildComponent0303 />
        </div>
        <div className="my-box-border-1">
          <h3>Children Props</h3>
          <ChildComponent04 age={18} />
          <ChildComponent04 name="Alice" age={25}>
            <button>I am the children content!</button>
          </ChildComponent04>
        </div>
        <div className="my-box-border-1">
          <h3>Function Props</h3>
          <ChildComponent05
            onClick={() => {
              alert("Button clicked!");
            }}
          />
        </div>
        <div className="my-box-border-1">
          <h3>Object Props</h3>
          <ChildComponent06 user={person} />
          <ChildComponent06 user={{ name: "Charlie", age: 35 }} />
        </div>
      </>
    );
  }
}
