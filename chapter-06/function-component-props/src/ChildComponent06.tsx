/**
 * ChildComponent06.tsx
 * This component demonstrates how to pass an object as a prop to a child component.
 * It includes different ways to handle object props, such as destructuring and type annotations.
 * Usage:
 *  const userData = { name: "David", age: 25 };
 *  <ChildComponent0601 user={userData} />
 *  <ChildComponent0602 user={{ name: "Bob", age: 30 }} />
 */
import type React from "react";
type User = {
  user: {
    name: string;
    age: number;
  };
};

/**
 * This component receives an object as a prop and displays its properties.
 * It uses a standard prop structure to pass the user object.
 * Usage:
 *  <ChildComponent0601 user={{ name: "Alice", age: 25 }} />
 */
export function ChildComponent0601(user: User) {
  return (
    <div className="my-box-border-1">
      <div>Object Data as a prop from Parent</div>
      <div className="my-box-border-1 fg-blue">
        Name: {user.user.name}, Age: {user.user.age}
      </div>
    </div>
  );
}

/**
 * This component demonstrates destructuring props in a functional component.
 * It receives an object with `name` and `age` properties and displays them.
 * Props are destructured directly in the function parameters.
 * Usage:
 *  <ChildComponent0602 user={{ name: "Charlie", age: 28 }} />
 */
export function ChildComponent0602({ user }: User) {
  return (
    <div className="my-box-border-1">
      <div>Destructured Object Data</div>
      <div className="my-box-border-1 fg-blue">
        Name: {user.name}, Age: {user.age}
      </div>
    </div>
  );
}

/**
 * This component receives an object as a prop and displays its properties.
 * It uses TypeScript's type annotations for props.
 * Usage:
 * <ChildComponent0603 user={{ name: "Eve", age: 22 }} />
 */
export const ChildComponent0603: React.FC<User> = ({ user }) => {
  return (
    <div className="my-box-border-1">
      <div>Type Annotations for Object Data</div>
      <div className="my-box-border-1 fg-blue">
        Name: {user.name}, Age: {user.age}
      </div>
    </div>
  );
};
