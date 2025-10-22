/**
 * This component showcases how class-based child components receive and display data from parent components.
 *
 * @param {string} props.message - The message text to be displayed from the parent component
 *
 * @example
 * // Basic usage with string message
 * <ChildCC message="Hello from parent!" />
 */
import React from "react";

export class ChildCC extends React.Component<{ message: string }> {
  render() {
    {
      /* Uses `this.props` to access passed properties from the parent component */
    }
    return <div>Child says: {this.props.message}</div>;
  }
}
