/**
 * MyInlineComponent demonstrates inline styles in React.
 * It uses JavaScript objects for styling and shows dynamic
 * styling based on component state.
 */
import { useState } from "react";

export function MyInlineComponent() {
  const [isActive, setIsActive] = useState(false);

  // Static style object
  const containerStyle = {
    padding: "10px",
    backgroundColor: "#f0f0f0",
  };

  // Dynamic style based on state
  const buttonStyle = {
    backgroundColor: isActive ? "#087671" : "#0011ff",
    marginBottom: "1rem",
    color: "white",
  };
  return (
    <>
      <h3>Inline Styles</h3>
      <div className="my-box-border-1" style={containerStyle}>
        <button style={buttonStyle} onClick={() => setIsActive(!isActive)}>
          Button
        </button>
        <div
          style={{
            color: "#00ff66",
            backgroundColor: "#336699",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          Inline Style Component
        </div>
      </div>
    </>
  );
}
