/****************************************
 * JavaScript Primitive Types Demonstration
 *
 * Primitive types are the basic building blocks in JavaScript.
 * They are immutable and represent single values.
 *
 * The Primitive Types in JavaScript:
 * 1. boolean    - true/false
 * 2. number     - integer and floating point numbers
 * 3. string     - textual data
 * 4. undefined  - uninitialized variable
 * 5. null       - intentional absence of value
 * 6. symbol     - unique and immutable primitive
 * 7. bigint     - arbitrary precision integers
 *
 * Build: yarn tsc --target es2021 --module commonjs jsPrimitiveTypes.ts
 * Run: node jsPrimitiveTypes.js
 ***************************************/

// Using block scope ({}) to avoid global namespace pollution
{
  // JavaScript Primitive Types
  const isDone = false; // Boolean type,  can be true or false
  const decimal = 6; // Number type, can be integer or floating point
  const name = "bob"; // String type, represents textual data
  const u = undefined; // Undefined type, indicates uninitialized variable
  const n = null; // Null type, represents intentional absence of any object value
  const mySymbol = Symbol("myKey"); // Symbol type, represents a unique identifier
  const big = BigInt(123); // BigInt type, represents arbitrary precision integers

  // Displaying the types of all primitive variables using typeof operator
  console.log("=== JavaScript Primitive Values and Types ===");
  console.log(`Variable: isDone, Value: `, isDone, `Type: ${typeof isDone}`);
  console.log(`Variable: decimal, Value: `, decimal, `Type: ${typeof decimal}`);
  console.log(`Variable: name, Value: `, name, `Type: ${typeof name}`);
  console.log(`Variable: u, Value: `, u, `Type: ${typeof u}`);
  console.log(`Variable: n, Value: `, n, `Type: ${typeof n}`);
  console.log(`Variable: big, Value: `, big, `Type: ${typeof big}`);
  console.log(
    `Variable: mySymbol, Value: `,
    mySymbol.toString(),
    `Type: ${typeof mySymbol}`,
  );
  console.log("=============================================");
}
