/**
 * This component demonstrates using SVG files via img tags.
 * This is simple but offers limited control over SVG internals.
 */
import reactSvg from "./react.svg";

export function MyImgSrcSVG() {
  return (
    <div>
      <h3>SVG as Image</h3>
      <div
        className="my-box-border-1"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <img
          src={reactSvg}
          alt="React logo"
          width="50"
          height="50"
          className="svg-image"
        />
      </div>
    </div>
  );
}
