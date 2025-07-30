/**
 * This component demonstrates destructuring props in a functional component.
 * It receives `name` and `age` as props and displays them.
 * Props are destructured directly in the function parameters.
 * Usage:
 *   <ChildComponent02 name="John Doe" age={30} />
 */

export function ChildComponent02({ name, age }: { name: string; age: number }) {
  return (
    <div className="my-box-border-1">
      <div>
        Destructured <b>Props</b> in function parameters
      </div>
      <div className="my-box-border-1 fg-blue">
        Name: {name}, Age: {age}
      </div>
    </div>
  );
}
