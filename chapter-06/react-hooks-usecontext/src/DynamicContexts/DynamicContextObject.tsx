/**
 * This file defines a context for managing theme state in a React application.
 * It exports a context object that can be used to provide and consume theme-related data.
 * The context includes methods for resetting and updating the theme.
 * The context is created using React's createContext function.
 */
import { createContext } from "react";

export type Theme = {
  color: string;
  backgroundColor: string;
};

type ContextType =
  | {
      theme: Theme;
      resetTheme: () => void;
      updateTheme: (newTheme: Theme) => void;
    }
  | undefined;

export const DynamicContextObject = createContext<ContextType>(undefined);
