/**
 * This component demonstrates how to pass data to child
 * components via props.
 * The parent component passes these props to the child
 * component, which can then access them via `this.props`.
 * @example
 *   <ChildProps01 name="David" age={25} />
 * @example
 *   <ChildProps06 onclick={() => alert("Button clicked!")} />
 * @ReactDOM Component: <ParentProps01 />
 */
import React from "react";
import { ChildProps01 } from "./ChildProps01";
import { ChildProps06 } from "./ChildProps06";

export class ParentProps01 extends React.Component {
  render() {
    return (
      <>
        <div className="my-box-border-1">
          <h3>Standard JSX attributes</h3>
          <div className="my-box-border-1">
            <div>Parent passes standard JSX attributes</div>
            <div className="my-box-border-1 fg-blue">
              {"<ChildProps01 name='David' age={25} />"}
            </div>
          </div>
          <ChildProps01 name="David" age={25} />
        </div>
        <div className="my-box-border-1">
          <h3>Function attributes</h3>
          <div className="my-box-border-1">
            <div>Parent passes function attributes</div>
            <div className="my-box-border-1 fg-blue">
              {`<ChildProps06 onclick={() => alert("Button clicked!")} />`}
            </div>
          </div>
          <ChildProps06 onclick={() => alert("Button clicked!")} />
        </div>
      </>
    );
  }
}
