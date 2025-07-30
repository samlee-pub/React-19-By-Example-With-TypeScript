/**
 * This component demonstrates the use of default function-parameter values in a React functional component.
 * It receives `name` and `age` as props, with default values provided.
 * If no props are passed, it will use "Default User" for `name` and `NaN` for `age`.
 * Usage:
 *   <ChildComponent03 />
 *   <ChildComponent03 name="Alice" age={25} />
 *   <ChildComponent03 name="Bob" />
 *   <ChildComponent03 age={40} />
 */

export function ChildComponent03({
  name = "Default User",
  age = NaN,
}: {
  name?: string;
  age?: number;
}) {
  return (
    <div className="my-box-border-1">
      <div>Default function-parameter values</div>
      <div className="my-box-border-1 fg-blue">
        Name: {name}, Age: {age}
      </div>
    </div>
  );
}
