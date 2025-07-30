/**
 * This component demonstrates various ways to pass props to child components in React.
 * It includes examples of standard JSX attributes, object spread, default props,
 * children props, function props, and object props.
 * Each section showcases a different aspect of prop handling in class components.
 * @ReactDOM Component: <ParentComponent02 />
 * @example
 *   <ParentComponent02 />
 */
import React from "react";
import { ChildComponent02 } from "./ChildComponent02";
import {
  ChildComponent0301,
  ChildComponent0302,
  ChildComponent0303,
} from "./ChildComponent03";
import { ChildComponent04 } from "./ChildComponent04";
import { ChildComponent05 } from "./ChildComponent05";
import { ChildComponent06 } from "./ChildComponent06";

export class ParentComponent02 extends React.Component {
  render() {
    const person = { name: "David", age: 25 };
    return (
      <>
        <div className="my-box-border-1">
          <h3>Standard JSX attributes</h3>
          <ChildComponent02 name="David" age={25} />
        </div>
        <div className="my-box-border-1">
          <h3>Object Spread</h3>
          <ChildComponent02 {...person} />
        </div>
        <div className="my-box-border-1">
          <h3>Default Props</h3>
          <ChildComponent0301 />
          <ChildComponent0302 />
          <ChildComponent0303 />
        </div>
        <div className="my-box-border-1">
          <h3>Children Props</h3>
          <ChildComponent04 />
          <ChildComponent04 {...person}>
            <button>I am the children content!</button>
          </ChildComponent04>
        </div>
        <div className="my-box-border-1">
          <h3>Function Props</h3>
          <ChildComponent05 onClick={() => alert("Button clicked!")} />
        </div>
        <div className="my-box-border-1">
          <h3>Object Props</h3>
          <ChildComponent06 user={person} />
          <ChildComponent06 user={{ name: "Bob", age: 30 }} />
        </div>
      </>
    );
  }
}
