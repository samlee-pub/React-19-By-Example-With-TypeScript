/****************************************
 * Function Types
 * Build: yarn tsc --target es2021
 *        --module commonjs <filename>.ts
 * Run: node <filename>.js
 ***************************************/
//using local scope, avoiding global pollution
{
  // 1. funtion declaration with type annotations
  function add(a: number, b: number): number {
    return a + b;
  }
  console.log("add(2, 3) = ", add(2, 3)); //Output: add(2, 3) =  5
  // 2. function expression with type annotations
  const multiply: (x: number, y: number) => number = function (x, y) {
    return x * y;
  };
  console.log("multiply(2, 3) = ", multiply(2, 3)); //Output: multiply(2, 3) =  6
  const multiply2 = function (x: number, y: number): number {
    return x * y;
  };
  console.log("multiply2(2, 3) = ", multiply2(2, 3)); //Output: multiply2(2, 3) =  6
  // 3. arrow function with type annotations
  const divide: (x: number, y: number) => number = (x, y) => {
    return x / y;
  };
  console.log("divide(6, 3) = ", divide(6, 3)); //Output: divide(6, 3) =  2
  // 4. function with optional parameters
  function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
  }
  console.log(greet("Alice")); //Output: Hello, Alice!
  console.log(greet("Bob", "Hi")); //Output: Hi, Bob!
  // 5. function with default parameters
  function sayHello(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
  }
  console.log(sayHello("Charlie")); //Output: Hello, Charlie!
  console.log(sayHello("Dave", "Greetings")); //Output: Greetings, Dave!
  // 6. function with rest parameters
  function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log("sum(1, 2, 3, 4) = ", sum(1, 2, 3, 4)); //Output: sum(1, 2, 3, 4) =  10
  // 7. function with a callback
  function processNumbers(
    numbers: number[],
    callback: (num: number) => number,
  ): number[] {
    return numbers.map(callback);
  }
  const doubled = processNumbers([1, 2, 3], (num) => num * 2);
  console.log("Doubled numbers: ", doubled); //Output: Doubled numbers:  [2, 4, 6]
  // 8. function with a generic type
  function identity<T>(arg: T): T {
    return arg;
  }
  console.log("identity(5) = ", identity(5)); //Output: identity(5) =  5
  console.log("identity('Hello') = ", identity("Hello")); //Output: identity('Hello') =  Hello
  // 9. function with a type alias
  type StringOrNumber = string | number;
  function printValue(value: StringOrNumber): void {
    console.log("Value: ", value);
  }
  printValue("Hello"); //Output: Value:  Hello
  printValue(42); //Output: Value:  42
  // 10. function with an interface
  interface User {
    name: string;
    age: number;
  }
  function displayUser(user: User): void {
    console.log(`User: ${user.name}, Age: ${user.age}`);
  }
  displayUser({ name: "Alice", age: 30 }); //Output: User: Alice, Age: 30
  // 11. function with a type guard
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function isString(value: any): value is string {
    return typeof value === "string";
  }
  function processValue(value: string | number): void {
    if (isString(value)) {
      console.log("String value: ", value);
    } else {
      console.log("Number value: ", value);
    }
  }
  processValue("Hello"); //Output: String value:  Hello
  processValue(42); //Output: Number value:  42
  //12. function with object type
  function displayUser2(user: { name: string; age: number }): void {
    console.log(`User: ${user.name}, Age: ${user.age}`);
  }
  displayUser2({ name: "Alice", age: 30 }); //Output: User: Alice, Age: 30
  //13. function with destructuring
  function displayUser3({ name, age }: { name: string; age: number }): void {
    console.log(`User: ${name}, Age: ${age}`);
  }
  displayUser3({ name: "Alice", age: 30 }); //Output: User: Alice, Age: 30
}
