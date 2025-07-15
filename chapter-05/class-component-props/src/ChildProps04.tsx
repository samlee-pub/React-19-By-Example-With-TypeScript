/**
 * This component demonstrates constructor with props in a class component.
 * It shows how to access props in the constructor
 * and how to use default values for props.
 * It accepts two props: `name` (string) and `age` (number).
 * It renders a simple message displaying the name and age.
 * @ReactDOM Component: <ChildProps04 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.name] - The name to display, defaults to "Default".
 * @param {number} [props.age] - The age to display, defaults to NaN.
 * @example
 *   <ChildProps04 />
 *   <ChildProps04 name="Alice" age={30} />
 *   <ChildProps04 name="Bob" />
 *   <ChildProps04 age={25} />
 */
import React from "react";

export class ChildProps04 extends React.Component<{
  name?: string;
  age?: number;
}> {
  constructor(props: { name?: string; age?: number }) {
    super(props);
  }
  render() {
    // Destructuring props
    const { name, age } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          constructor(<b>props</b>){"{...}"}
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name || "Default"}, Age: {age || NaN}
        </div>
      </div>
    );
  }
}
