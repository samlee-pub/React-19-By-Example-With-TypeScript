/**
 * This component demonstrates prop handling in class components.
 * It allows the child component to access its props, specifically a `person` object.
 * The `person` object contains `name` and `age` properties, which are displayed in the component.
 * @ReactDOM Component: <ChildProps06 person={{ name: "David", age: 25 }} />
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.person - The person object containing `name` and `age`.
 * @param {string} props.person.name - The name of the person.
 * @param {number} props.person.age - The age of the person.
 * @example
 *  <ChildProps07 person={{ name: "David", age: 25 }} />
 */
import React from "react";
import type { Person } from "./types/MyTypes";

export class ChildProps07 extends React.Component<{ person: Person }> {
  render() {
    // Destructuring props
    const { person } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Child accesses <b>person</b> object
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {person.name}, Age: {person.age}
        </div>
      </div>
    );
  }
}
