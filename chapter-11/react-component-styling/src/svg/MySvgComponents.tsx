/**
 * This component demonstrates working with SVGs in React.
 * It imports and uses SVGs as React components, both inline and as image sources.
 * The SVG files are transformed using SVGR, allowing them to be used as React components.
 */
import { MyComponentSVG } from "./MyComponentSVG";
import { MyImgSrcSVG } from "./MyImgSrcSVG";
import { MyInlineSVG } from "./MyInlineSVG";

export function MySvgComponents() {
  return (
    <>
      <h3>Working with SVGs</h3>
      <div className={"my-box-border-1"}>
        <MyInlineSVG />
        <MyImgSrcSVG />
        <MyComponentSVG />
      </div>
    </>
  );
}
