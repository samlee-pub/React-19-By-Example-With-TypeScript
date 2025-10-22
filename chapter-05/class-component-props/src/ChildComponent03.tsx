/**
 * This file contains three child components that demonstrate different ways to handle props in React.
 * Each component showcases a unique approach to setting default values for props.
 * 1. ChildComponent0301 uses static defaultProps.
 * 2. ChildComponent0302 destructures props with default values.
 * 3. ChildComponent0303 uses nullish coalescing to provide default fallbacks.
 * @ReactDOM Component: <ChildComponent0301 name={"..."} age={number} />
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.name] - The name to display, optional.
 * @param {number} [props.age] - The age to display, optional.
 * @example
 *   <ChildComponent0301 name="Alice" age={30} />
 *   <ChildComponent0302 name="Bob" />
 *   <ChildComponent0303 age={35} />
 *   <ChildComponent0301 />
 */
import React from "react";

/**
 * ChildComponent0301 demonstrates how to set default values for props using static defaultProps.
 * It is a React class component that accepts optional props `name` and `age`.
 * If these props are not provided, it uses the default values defined in `defaultProps`.
 */
export class ChildComponent0301 extends React.Component<{
  name?: string;
  age?: number;
}> {
  static defaultProps = {
    name: "Default User",
    age: NaN,
  };
  render() {
    const { name, age } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Set <b>static defaultProps</b> with default values
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}

/**
 * ChildComponent0302 demonstrates how to destructure props with default values.
 * It is a React class component that accepts optional props `name` and `age`.
 * If these props are not provided, it uses default values directly in the destructuring assignment.
 */
export class ChildComponent0302 extends React.Component<{
  name?: string;
  age?: number;
}> {
  render() {
    const { name = "Default User", age = NaN } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Destructured <b>this.props</b> with default values
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name}, Age: {age}
        </div>
      </div>
    );
  }
}

/**
 * ChildComponent0303 demonstrates how to use nullish coalescing
 * to provide default fallbacks for props.
 * It is a React class component that accepts optional props `name` and `age`.
 * If these props are not provided or are null/undefined, it uses the specified default values.
 */
export class ChildComponent0303 extends React.Component<{
  name?: string;
  age?: number;
}> {
  render() {
    const { name, age } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          <b>Nullish</b>-coalesced props with fallback defaults
        </div>
        <div className="my-box-border-1 fg-blue">
          Name: {name ?? "Default User"}, Age: {age ?? NaN}
        </div>
      </div>
    );
  }
}
