/**
 * This component demonstrates Sass/SCSS styling.
 * It uses variables and mixins to style buttons and divs.
 * The styles are defined in the my-scss-styles.scss file.
 */
import { useState } from "react";
import "./my-scss-styles.scss";

export function MyScssComponent() {
  const [isActive, setIsActive] = useState(false);
  const buttonClass = isActive ? "scss-active-button" : "scss-inactive-button";
  return (
    <>
      <h3>Sass/SCSS Styling</h3>
      <div className={"my-box-border-1"}>
        <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
          My-Styled-Button
        </button>
        <div className="scss-div">Sass/SCSS Styling</div>
      </div>
    </>
  );
}
