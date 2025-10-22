/**
 * This component receives an object as a prop and displays its properties.
 * It demonstrates how to access and render object data passed from a parent component.
 * @ReactDOM Component: <ChildComponent06 user={{ name: "...", age: number }} />
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.user - The user object containing name and age.
 * @param {string} props.user.name - The name of the user.
 * @param {number} props.user.age - The age of the user.
 * @example
 *  <ChildComponent06 user={{ name: "Alice", age: 30 }} />
 */
import React from "react";

export class ChildComponent06 extends React.Component<{
  user: { name: string; age: number };
}> {
  render() {
    // Destructuring props
    const { user } = this.props;
    return (
      <div className="my-box-border-1">
        <div>Object Data from Parent</div>
        <div className="my-box-border-1 fg-blue">
          Name: {user.name}, Age: {user.age}
        </div>
      </div>
    );
  }
}
