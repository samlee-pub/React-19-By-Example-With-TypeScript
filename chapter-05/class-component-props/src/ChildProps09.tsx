/**
 * This component demonstrates prop handling in class components.
 * It shows how to access props with default values
 * using destructuring in the render method.
 * If the `name` prop is not provided, it defaults to "Default User".
 * If the `age` prop is not provided, it defaults to NaN.
 * @example
 *   <ChildProps09 />
 * @example
 *   <ChildProps09 name="Alice" age={30} />
 * @example
 *   <ChildProps09 name="Bob" />
 * @example
 *   <ChildProps09 age={25} />
 * @ReactDOM Component: <ChildProps09 />
 */
import React from "react";

export class ChildProps09 extends React.Component<{
  name?: string;
  age?: number;
}> {
  render() {
    // Destructuring props
    const { name = "Default User", age = NaN } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Child accesses <b>this.props</b> object with default values
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}
