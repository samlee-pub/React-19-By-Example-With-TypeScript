/**
 * This component provides a static context for theme values.
 * It defines light and dark themes and provides them to its children.
 * The context is created using React's createContext and is immutable.
 * The component is designed to be used in a React application to provide consistent theme values.
 */
import React, { createContext, type ReactNode } from "react";

// Create context with default value
// eslint-disable-next-line react-refresh/only-export-components
export const StaticContextObject = createContext({
  lightTheme: {
    color: "",
    backgroundColor: "",
  },
  darkTheme: {
    color: "",
    backgroundColor: "",
  },
});

// Context Provider component
export const StaticContextComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const defaultTheme = {
    lightTheme: {
      color: "#000000",
      backgroundColor: "#ccffff",
    },
    darkTheme: {
      color: "#ffffff",
      backgroundColor: "#121212",
    },
  };
  return (
    <StaticContextObject.Provider value={defaultTheme}>
      {children}
    </StaticContextObject.Provider>
  );
};
