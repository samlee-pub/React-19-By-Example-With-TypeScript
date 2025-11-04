/**
 * This component serves as the first layer in a hierarchy of child components.
 * It does not utilize any context object and simply renders its children.
 * It is styled with a box border and includes a header.
 * The component is designed to be used in a React application.
 * It is a functional component that accepts children as props.
 */
import React, { type ReactNode } from "react";

export const ChildComponentLayer01: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="my-box-border-1">
      <h3>Child Component - Layer 01</h3>
      <div className="fg-blue">No Context Object Used</div>
      {children}
    </div>
  );
};
