/**
 * This component demonstrates embedding SVG directly in JSX.
 * This allows full CSS control and dynamic properties.
 */
import { useState } from "react";
export function MyInlineSVG() {
  const [color, setColor] = useState("#0011ff");

  return (
    <div>
      <h3>Inline SVG</h3>
      <div
        className="my-box-border-1"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          className="custom-svg"
          aria-label="Example circle"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill={color}
            stroke="#0011ff"
            strokeWidth="3"
            onClick={() => {
              setColor(color === "#ff0011" ? "#0011ff" : "#ff0011");
            }}
          />
          <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24">
            Circle
          </text>
        </svg>
      </div>
    </div>
  );
}
