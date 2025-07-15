/**
 * This component demonstrates how to use props in a class component.
 * It shows how to access props directly from `this.props` using destructuring.
 * It accepts two props: `name` (string) and `age` (number).
 * It renders a simple message displaying the name and age.
 * @ReactDOM Component: <ChildProps02 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name to display.
 * @param {number} props.age - The age to display.
 * @example
 *   <ChildProps02 name="David" age={25} />
 */
import React from "react";

export class ChildProps02 extends React.Component<{
  name: string;
  age: number;
}> {
  render() {
    // Destructuring props for easier access
    const { name, age } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Destructured <b>this.props</b> object
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}
