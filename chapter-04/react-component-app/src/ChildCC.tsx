/**
 * @ReactDOM Component: <ChildCC message={"..."} />
 * @param {this.props.message}  - The message sent from the parent component.
 * @example
 * <ChildCC message="Hello from ChildFC!" />
 */
import React from "react";

export class ChildCC extends React.Component<{ message: string }> {
  render() {
    return <div>Child says: {this.props.message}</div>;
  }
}
