/**
 * This component demonstrates how to use props in a class component.
 * It accepts two props: `name` (string) and `age` (number).
 * It renders a simple message displaying the name and age.
 * @ReactDOM Component: <ChildProps01 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name to display.
 * @param {number} props.age - The age to display.
 * @example
 *   <ChildProps01 name="David" age={25} />
 */
import React from "react";

export class ChildProps01 extends React.Component<{
  name: string;
  age: number;
}> {
  render() {
    return (
      <div className="my-box-border-1">
        <div>
          Child accesses <b>this.props</b> object
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {this.props.name}, Age: {this.props.age}
        </div>
      </div>
    );
  }
}
