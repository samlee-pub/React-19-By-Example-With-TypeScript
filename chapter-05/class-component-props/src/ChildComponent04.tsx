/**
 * A React class component that demonstrates the use of props,
 * including optional props and children.
 * It renders a message based on the presence of children and displays
 * the name and age props with default values.
 * @ReactDOM Component: <ChildComponent04 name={"..."} age={number}>
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.name] - The name to display, defaults to "Default User".
 * @param {number} [props.age] - The age to display, defaults to NaN.
 * @param {React.ReactNode} [props.children] - Optional children content.
 * @example
 *   <ChildComponent04 name="Charlie" age={35}>
 *     <div>Child content here</div>
 *   </ChildComponent04>
 *   <ChildComponent04>
 *     <div>Child content here</div>
 *   </ChildComponent04>
 *   <ChildComponent04 name="David" />
 */
import React from "react";

export class ChildComponent04 extends React.Component<{
  name?: string;
  age?: number;
  children?: React.ReactNode;
}> {
  render() {
    // Destructuring props
    const { name, age, children } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          {children ? "Children content is available" : "No children content"}
        </div>
        <div className="my-box-border-1 fg-blue">
          <div>
            Name: {name ?? "Default User"}, Age: {age ?? NaN}
          </div>
          {children ?? <></>}
        </div>
      </div>
    );
  }
}
