/**
 * This component is part of a React application demonstrating the use of the useContext hook.
 * It serves as the second layer in a hierarchy of child components.
 * It does not utilize any context object and simply renders its children.
 * The component is styled with a box border and includes a header.
 * It is a functional component that accepts children as props.
 */
import React, { type ReactNode } from "react";

export const ChildComponentLayer02: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="my-box-border-1">
      <h3>Child Component - Layer 02</h3>
      <div className="fg-blue">No Context Object Used</div>
      {children}
    </div>
  );
};
