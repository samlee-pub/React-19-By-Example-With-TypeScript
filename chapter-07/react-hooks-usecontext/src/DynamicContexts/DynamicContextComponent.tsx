/**
 * This component provides a dynamic context for managing theme state.
 * It allows child components to access and update the theme dynamically.
 * The context includes methods to reset and update the theme.
 * It uses React's useState hook to manage the theme state.
 */
import React, { type ReactNode, useState } from "react";
import { type Theme, DynamicContextObject } from "./DynamicContextObject";

const defaultTheme: Theme = {
  color: "#000000",
  backgroundColor: "#ffffff",
};
export const DynamicContextComponent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  const updateTheme = (newTheme: Theme) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  };

  /**
   * The DynamicContextComponent provides the theme context to its children.
   * It initializes the theme state with a default value and provides functions to reset and update the theme.
   * The context is created using React's createContext and is provided to the children components.
   */
  return (
    <DynamicContextObject.Provider value={{ theme, resetTheme, updateTheme }}>
      {children}
    </DynamicContextObject.Provider>
  );
};
