/**
 * This component demonstrates Tailwind CSS styling.
 * It uses utility classes to style buttons and divs.
 * The styles are defined in the my-tailwind-styles.css file.
 */
import "./my-tailwind-styles.css";

export function MyTailwindComponent() {
  return (
    <>
      <h3>TailWind CSS Styles</h3>
      <div className={"my-box-border-1"}>
        <button className="my-button-style">My-Styled-Button</button>
        <div className="button text-green-900 bg-blue-200 mt-2">
          TailWind CSS Styles
        </div>
      </div>
    </>
  );
}
