/**
 * This component demonstrates how to access children content
 * in a React functional component.
 * It receives `name`, `age`, and `children` as props.
 * If `children` is provided, it will display a message indicating
 * that children content is available.
 * If no `children` are provided, it will display a different message.
 * Usage:
 *   <ChildComponent04 age={18} />
 *   <ChildComponent04 name="Alice" age={25}>
 *     <button>I am the children content!</button>
 *   </ChildComponent04>
 */

export function ChildComponent04({
  name,
  age,
  children,
}: {
  name?: string;
  age?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="my-box-border-1">
      <div>
        {children ? "Children content is available" : "No children content"}
      </div>
      <div className="my-box-border-1 fg-blue">
        <div>
          Name: {name}, Age: {age}
        </div>
        {children}
      </div>
    </div>
  );
}
