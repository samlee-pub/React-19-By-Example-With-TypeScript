/**
 * This component demonstrates the lifecycle methods of a React class component.
 * It logs its lifecycle events to the parent component
 * and provides a button to increment a count.
 */
import React from "react";

interface ChildProps {
  name: string;
  onLifecycleEvent: (
    component: string,
    method: string,
    message: string,
  ) => void;
}

interface ChildState {
  count: number;
}
export default class ChildComponent extends React.Component<
  ChildProps,
  ChildState
> {
  constructor(props: ChildProps) {
    super(props);
    this.state = { count: 0 };
    this.logLifecycle("constructor", "Component initialized");
  }
  static getDerivedStateFromProps(
    props: ChildProps,
    state: ChildState,
  ): ChildState | null {
    props.onLifecycleEvent(
      props.name,
      "getDerivedStateFromProps",
      `Current count: ${state.count}`,
    );
    return null; // No state change based on props
  }
  getSnapshotBeforeUpdate(
    _prevProps: ChildProps,
    prevState: ChildState,
  ): object | null {
    this.logLifecycle(
      "getSnapshotBeforeUpdate",
      `Snapshot - Previous count: ${prevState.count}, Current count: ${this.state.count}`,
    );
    return null; // No snapshot needed
  }
  componentDidMount() {
    this.logLifecycle(
      "componentDidMount",
      "Mounted with count: " + this.state.count,
    );
  }

  shouldComponentUpdate(_nextProps: ChildProps, nextState: ChildState) {
    this.logLifecycle(
      "shouldComponentUpdate",
      `Current count: ${this.state.count}, Next count: ${nextState.count}`,
    );
    return true;
  }

  componentDidUpdate(_prevProps: ChildProps, prevState: ChildState) {
    this.logLifecycle(
      "componentDidUpdate",
      `Count changed from ${prevState.count} to ${this.state.count}`,
    );
  }

  componentWillUnmount() {
    this.logLifecycle("componentWillUnmount", "About to unmount");
  }

  private logLifecycle(method: string, message: string) {
    this.props.onLifecycleEvent(this.props.name, method, message);
  }

  incrementCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    this.logLifecycle("render", `Rendering with count: ${this.state.count}`);
    return (
      <div>
        <div className="fg-blue">
          Child Count: <b>{this.state.count}</b>
        </div>
        <button onClick={this.incrementCount}>Update Count</button>
      </div>
    );
  }
}
