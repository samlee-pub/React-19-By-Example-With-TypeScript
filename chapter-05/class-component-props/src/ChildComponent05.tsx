/**
 * A React class component that demonstrates the use of callback props.
 * It accepts an optional `onClick` prop, which is a function to be called when the button is clicked.
 * @ReactDOM Component: <ChildComponent05 onClick={() => { ... }} />
 * @param {Object} props - The properties passed to the component.
 * @param {function} [props.onClick] - The function to be called when the button is clicked.
 * @example
 *   <ChildComponent05 onClick={() => console.log("Button clicked!")} />
 */
import React from "react";

export class ChildComponent05 extends React.Component<{
  onClick?: () => void;
}> {
  render() {
    // Destructuring props
    const { onClick } = this.props;
    return (
      <div className="my-box-border-1">
        <div>Callback Props from Parent</div>
        <div className="my-box-border-1">
          <button className="fg-blue" onClick={onClick}>
            Click Me!
          </button>
        </div>
      </div>
    );
  }
}
