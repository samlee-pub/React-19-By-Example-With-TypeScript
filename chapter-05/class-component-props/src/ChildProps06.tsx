/**
 * This component demonstrates prop handling in class components.
 * It allows the child component to access its props, specifically an `onclick` function.
 * The `onclick` function can be triggered by a button click.
 * @ReactDOM Component: <ChildProps06 onclick={() => { ... }} />
 * @param {Object} props - The properties passed to the component.
 * @param {function} props.onclick - The function to be called when the button is clicked.
 * @example
 *   <ChildProps06 onclick={() => console.log("Button clicked!")} />
 */
import React from "react";

export class ChildProps06 extends React.Component<{
  onclick?: () => void;
}> {
  render() {
    // Destructuring props
    const { onclick } = this.props;
    return (
      <div className="my-box-border-1">
        <div>
          Child accesses <b>this.props</b> object
        </div>
        <div className="my-box-border-1">
          <button className="fg-blue" onClick={onclick}>
            Click Me!
          </button>
        </div>
      </div>
    );
  }
}
