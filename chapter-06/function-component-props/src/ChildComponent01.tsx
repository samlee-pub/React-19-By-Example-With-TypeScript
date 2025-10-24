/**
 * This component demonstrates destructuring props in a functional component.
 * It receives `name` and `age` as props and displays them.
 * Props are accessed directly via the single `props` parameter.
 * Usage:
 *   <ChildComponent01 name="John Doe" age={30} />
 */

export function ChildComponent01(props: { name: string; age: number }) {
  return (
    <div className="my-box-border-1">
      <div>
        Directly via <b>props</b> parameter
      </div>
      <div className="my-box-border-1 fg-blue">
        Name: {props.name}, Age: {props.age}
      </div>
    </div>
  );
}
