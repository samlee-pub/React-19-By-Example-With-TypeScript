/**
 * This component demonstrates importing SVG files as React components.
 * This approach provides the best balance of convenience and control.
 */
import ViteIcon from "./vite.svg?react";
export function MyComponentSVG() {
  return (
    <div>
      <h3>Imported SVG Components</h3>
      <div
        className="my-box-border-1"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <ViteIcon width="50" height="50" style={{ border: "1px solid red" }} />
      </div>
    </div>
  );
}
