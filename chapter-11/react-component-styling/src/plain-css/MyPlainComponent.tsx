/**
 * MyPlainComponent is a component that renders a plain CSS styled element.
 * It imports the plain CSS styles from the my-plain-style.css file and
 * uses them to style two elements: a button and a div.
 */
import "./my-plain-style.css";

export function MyPlainComponent() {
  return (
    <>
      <h3>Plain CSS</h3>
      <div className="my-box-border-1">
        <button className="plain-bg-blue plain-m-2 plain-color-red">
          My-Blue-Button
        </button>
        <div className="plain-color-blue plain-bg-grey">Plain CSS Styles</div>
      </div>
    </>
  );
}
