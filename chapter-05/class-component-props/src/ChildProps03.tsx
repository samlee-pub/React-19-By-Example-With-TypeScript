/**
 * This component demonstrates how to use props in a class component.
 * It shows two different ways to handle default props:
 * 1. Using a static `defaultProps` object.
 * 2. Using destructuring with default values in the render method.
 * It accepts two props: `name` (string) and `age` (number).
 * It renders a simple message displaying the name and age.
 * * The `name` prop defaults to "Default User1" when using `static defaultProps`.
 * * The `age` prop defaults to NaN when using destructuring with default values.
 * @ReactDOM Component: <ChildPropsStaticDefaultProps03 />
 * @ReactDOM Component: <ChildPropsDestructDefault03 />
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.name] - The name to display, defaults to "Default User1" or "Default User2".
 * @param {number} [props.age] - The age to display, defaults to NaN.
 * @example
 *   <ChildPropsStaticDefaultProps03 />
 *   <ChildPropsDestructDefault03 />
 * @example
 *   <ChildPropsStaticDefaultProps03 name="Alice" age={30} />
 *   <ChildPropsDestructDefault03 name="Bob" />
 *   <ChildPropsStaticDefaultProps03 age={25} />
 *   <ChildPropsDestructDefault03 age={40} />
 */
import React from "react";

export class ChildPropsStaticDefaultProps03 extends React.Component<{
  name?: string;
  age?: number;
}> {
  static defaultProps = {
    name: "Default User1",
    age: NaN,
  };
  render() {
    // Destructuring props
    const { name, age } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Using <b>static defaultProps</b> object
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}

export class ChildPropsDestructDefault03 extends React.Component<{
  name?: string;
  age?: number;
}> {
  render() {
    // Destructuring props
    const { name = "Default User2", age = NaN } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Using <b>Destructured props</b> with default values
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}
