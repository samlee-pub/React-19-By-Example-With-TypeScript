/**
 * This component consumes a dynamic context to allow theme updates.
 * The context is expected to be provided by a parent component.
 * Usage of useContext hook to access and manipulate the theme context.
 * Error handling is included to ensure the context is used within a provider.
 * Styling is applied to demonstrate the current theme visually.
 * It showcases how to manage and update context values dynamically.
 */
import { use } from "react";
import { DynamicContextObject } from "./DynamicContextObject";

/**
 * Showcases how to manage and update context values dynamically
 */
export const ChildComponentLayer03DynamicContext = () => {
  /**
   * useContext hook to access the dynamic context
   * Error handling to ensure the context is used within a provider
   */
  const context = use(DynamicContextObject);
  if (context === undefined) {
    throw new Error("useContext must be used within a context provider");
  }
  const { theme, resetTheme, updateTheme } = context;
  /**
   * Functions to handle theme updates
   * Light mode and dark mode theme settings
   */
  const handleLightMode = () => {
    updateTheme({
      color: "#000000",
      backgroundColor: "#ccffff",
    });
  };
  const handleDarkMode = () => {
    updateTheme({
      color: "#ffffff",
      backgroundColor: "#121212",
    });
  };
  return (
    <div className="my-box-border-1" style={{ ...theme }}>
      <h3>Child Component - Layer 03</h3>
      <div className="fg-blue">Dynamic Context in Use</div>

      <div style={{ marginTop: "12px" }}>
        <button
          onClick={handleLightMode}
          style={{ color: "#000000", backgroundColor: "#ccffff" }}
        >
          Light Mode
        </button>
        <button
          onClick={handleDarkMode}
          style={{
            color: "#ffffff",
            backgroundColor: "#121212",
            marginLeft: "12px",
          }}
        >
          Dark Mode
        </button>
        <button onClick={resetTheme} style={{ ...theme, marginLeft: "12px" }}>
          Reset Theme
        </button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div className="fg-blue">Context Object:</div>
        <div style={{ textAlign: "left", marginLeft: "2rem" }}>
          <b>Theme</b>:
          <div style={{ margin: 0, marginLeft: "1rem", border: 0 }}>
            {JSON.stringify(theme)}
          </div>
        </div>
      </div>
    </div>
  );
};
