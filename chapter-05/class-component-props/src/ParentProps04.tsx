/**
 * This component demonstrates how to pass data to child
 * components via props.
 * The parent component passes JSX content between the
 * component tags, which can be accessed as `this.props.children`
 * in the child component.
 * @example
 *   <ChildProps08>
 *     <button className="fg-blue">The button content passed as children</button>
 *   </ChildProps08>
 * @ReactDOM Component: <ParentProps04 />
 */
import React from "react";
import { ChildProps08 } from "./ChildProps08";

export class ParentProps04 extends React.Component {
  render() {
    return (
      <div className="my-box-border-1">
        <h3>Children</h3>
        <div className="my-box-border-1">
          <div>Parent passes JSX content between component tags</div>
          <div className="my-box-border-1 text-left fg-blue">
            <pre>
              {`<ChildProps08>`} <br />
              {`  <button className="fg-blue">`} <br />
              {`    The button content passed as children`} <br />
              {`  </button>`} <br />
              {`</ChildProps08>`}
            </pre>
          </div>
          <ChildProps08>
            <button className="fg-blue">
              The button content passed as children
            </button>
          </ChildProps08>
        </div>
      </div>
    );
  }
}
