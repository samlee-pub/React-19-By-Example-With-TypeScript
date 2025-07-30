/**
 * This component demonstrates how to create a class component that accepts props.
 * The component displays a name and age passed as props.
 * It uses the `this.props` object to access the properties.
 * It is a simple example of how to use props in a React class component.
 * @ReactDOM Component: <ChildComponent01 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name to display.
 * @param {number} props.age - The age to display.
 * @example
 *   <ChildComponent01 name="David" age={25} />
 */
import React from "react";

export class ChildComponent01 extends React.Component<{
  name: string;
  age: number;
}> {
  render() {
    return (
      <div className="my-box-border-1">
        <div>
          Directly via <b>this.props</b>
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {this.props.name}, Age: {this.props.age}
        </div>
      </div>
    );
  }
}
