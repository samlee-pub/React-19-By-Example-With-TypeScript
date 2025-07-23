/**
 * This component demonstrates the lifecycle of a child component
 * by mounting and unmounting it, and logging lifecycle events.
 * It uses a child component that logs its own lifecycle events.
 * It also provides buttons to toggle the child's mount state
 * and clear the log messages.
 */
import React from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends React.Component<
  object,
  { isChildMount: boolean }
> {
  private childCount = 0;
  private logMessages: React.RefObject<HTMLUListElement>;
  constructor(props: object) {
    super(props);
    this.state = { isChildMount: false };
    this.logMessages =
      React.createRef<HTMLUListElement>() as React.RefObject<HTMLUListElement>;
  }
  // Logs lifecycle events of the child component
  // with the component name and method name
  // along with a custom message.
  // This method is passed to the child component
  // to log its lifecycle events.
  // It appends a new list item to the log messages.
  logLifecycleEvent = (component: string, method: string, message: string) => {
    this.logMessages.current?.appendChild(
      Object.assign(document.createElement("li"), {
        innerHTML: `<b>${component}-${this.childCount}</b> - ${method}: ${message}`,
      }),
    );
  };
  // Clears the log messages by setting the innerHTML
  // of the logMessages ref to an empty string.
  clearLogs = () => {
    if (this.logMessages.current) {
      this.logMessages.current.innerHTML = "";
    }
  };
  // Toggles the mounting state of the child component.
  toggleChildMount = () => {
    const isMounting = !this.state.isChildMount;
    if (isMounting) {
      this.childCount++;
    }
    this.setState({ isChildMount: isMounting });
  };
  render() {
    const buttonText = this.state.isChildMount
      ? "Unmount Component"
      : "Mount Component";
    return (
      <>
        <div className="my-box-border-1">
          <h3>Child Component</h3>
          <div className="my-box-border-1">
            {this.state.isChildMount ? (
              <ChildComponent
                name="Child"
                onLifecycleEvent={this.logLifecycleEvent}
              />
            ) : (
              <div className="component-container">Null</div>
            )}
          </div>
        </div>
        <div style={{ marginTop: "12px" }}>
          <button onClick={this.toggleChildMount}>{buttonText}</button>
          <button onClick={this.clearLogs} style={{ marginLeft: "6px" }}>
            Clear Logs
          </button>
        </div>
        <div style={{ marginTop: "12px" }}>
          <h3>Lifecycle Events:</h3>
          <ul ref={this.logMessages} className="log-messages"></ul>
        </div>
      </>
    );
  }
}
