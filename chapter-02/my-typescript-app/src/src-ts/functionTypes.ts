/****************************************
 * Function Types Documentation
 *
 * TypeScript provides extensive function type capabilities:
 * 1. Function Declarations - Traditional functions with type annotations
 * 2. Function Expressions - Variables holding function references
 * 3. Arrow Functions - Concise syntax with type safety
 * 4. Callback Functions - Functions passed as arguments
 * 5. Generic Functions - Type-parameterized reusable functions
 * 6. Optional Parameters - Parameters that can be omitted
 * 7. Default Parameters - Parameters with fallback values
 * 8. Rest Parameters - Variable number of arguments
 * 9. Object Parameters - Inline object type definitions
 * 10. Parameter Destructuring - Unpacking object parameters
 * 11. Type Aliases in Functions - Custom types for parameters/returns
 * 12. Interfaces in Functions - Object shapes as parameters
 * 13. Type Guards - Runtime type checking functions
 *
 * Build: yarn tsc --target es2021 --module commonjs functionTypes.ts
 * Run: node functionTypes.js
 ***************************************/

// Using block scope ({}) to avoid global namespace pollution
{
  // 1. funtion declaration with type annotations
  function add(a: number, b: number): number {
    return a + b;
  }
  console.log("1. Function Declaration - add(2, 3) =", add(2, 3));

  // 2. function expression with type annotations
  const multiply: (x: number, y: number) => number = function (x, y) {
    return x * y;
  };
  console.log("2. Function Expression - multiply(2, 3) =", multiply(2, 3));
  const multiply2 = function (x: number, y: number): number {
    return x * y;
  };
  console.log(
    "2. Function Expression (Inferred) - multiply2(2, 3) =",
    multiply2(2, 3),
  );

  // 3. arrow function with type annotations
  const divide: (x: number, y: number) => number = (x, y) => {
    return x / y;
  };
  console.log("3. Arrow Function - divide(6, 3) =", divide(6, 3));

  // 4. function with a callback
  function processNumbers(
    numbers: number[],
    callback: (num: number) => number,
  ): number[] {
    return numbers.map(callback);
  }

  const doubled = processNumbers([1, 2, 3], (num) => num * 2);
  console.log("4. Function with callback - Doubled numbers:", doubled);

  // 5. function with a generic type
  function identity<T>(arg: T): T {
    return arg;
  }
  console.log("5. Generic Function - identity(5) =", identity(5));
  console.log("5. Generic Function - identity('Hello') =", identity("Hello"));

  // 6. function with optional parameters
  function greet(name: string, greeting?: string): string {
    // Nullish coalescing operator provides default value
    return `${greeting ?? "Hello"}, ${name}!`;
  }
  console.log("6. Optional Parameter - greet('Alice'):", greet("Alice"));
  console.log(
    "6. Optional Parameter - greet('Bob', 'Hi'):",
    greet("Bob", "Hi"),
  );

  // 7. function with default parameters
  function sayHello(name: string, greeting = "Hello"): string {
    return `${greeting}, ${name}!`;
  }
  console.log(
    "7. Default Parameter - sayHello('Charlie'):",
    sayHello("Charlie"),
  );
  console.log(
    "7. Default Parameter - sayHello('Dave', 'Greetings'):",
    sayHello("Dave", "Greetings"),
  );

  // 8. function with rest parameters
  function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log("8. Rest Parameters - sum(1, 2, 3, 4) =", sum(1, 2, 3, 4));

  //9. Function with inline object type parameter
  function displayUser(user: { name: string; age: number }): void {
    console.log(
      `9. Inline Object - User: ${user.name}, Age: ${String(user.age)}`,
    );
  }
  displayUser({ name: "Alice", age: 30 });

  //10. Function with parameter destructuring
  function displayUser2({ name, age }: { name: string; age: number }): void {
    console.log(
      `10. Parameter Destructuring - User: ${name}, Age: ${String(age)}`,
    );
  }
  displayUser2({ name: "Alice", age: 30 });
}
