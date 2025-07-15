/**
 * This component demonstrates prop handling in class components including children access.
 * It shows how to access props and children content in the render method.
 * It uses destructuring to extract props and children.
 * It accepts three props: `name` (string), `age` (number), and `children` (ReactNode).
 * It renders a message indicating whether children content is available,
 * along with the name and age.
 * @ReactDOM Component: <ChildProps05 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.name] - The name to display, defaults to "Default".
 * @param {number} [props.age] - The age to display, defaults to NaN.
 * @param {React.ReactNode} [props.children] - The children content to display.
 * @example
 *   <ChildProps05 name="Charlie" age={35}>
 *     <div>Child content here</div>
 *   </ChildProps05>
 *   <ChildProps05 name="David" />
 *   <ChildProps05 age={40}>
 *     <div>No name provided</div>
 *   </ChildProps05>
 *   <ChildProps05>
 *     <div>Default name and age</div>
 *   </ChildProps05>
 */
import React from "react";

export class ChildProps05 extends React.Component<{
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
            Name: {name || "Default"}, Age: {age || NaN}
          </div>
          {children}
        </div>
      </div>
    );
  }
}
