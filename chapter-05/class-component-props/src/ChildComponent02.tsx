/**
 * This component illustrates the creation of a class-based React component that takes props and uses destructuring for cleaner prop access.
 * It uses the `this.props` object to access the properties, but destructures them for cleaner code.
 * It accepts two props: `name` (string) and `age` (number).
 * It renders a message displaying the name and age using destructured props.
 * @ReactDOM Component: <ChildComponent02 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name to display.
 * @param {number} props.age - The age to display.
 * @example
 *   <ChildComponent02 name="Alice" age={30} />
 */
import React from "react";

export class ChildComponent02 extends React.Component<{
  name: string;
  age: number;
}> {
  render() {
    // Destructuring props for easier access
    const { name, age } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Destructured <b>this.props</b>
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}
