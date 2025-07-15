/**
 * This component demonstrates prop handling in class components including children access.
 * It accepts a `children` prop, which can be any React node.
 * The component renders a message indicating whether children content is available,
 * and displays the children content if provided.
 * @ReactDOM Component: <ChildProps08> {children content} </ChildProps08>
 */
import React from "react";

export class ChildProps08 extends React.Component<{
  children?: React.ReactNode;
}> {
  render() {
    // Destructuring props
    const { children } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          {children
            ? "Child accesses the children content"
            : "No children content"}
        </div>
        <div className="my-box-border-1 fg-blue">{children}</div>
      </div>
    );
  }
}
