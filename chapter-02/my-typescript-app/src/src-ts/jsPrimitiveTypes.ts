/****************************************
 * JavaScript Primitive Types
 * Build: yarn tsc --target es2021
 *        --module commonjs <filename>.ts
 * Run: node <filename>.js
 ***************************************/
//using local scope, avoiding global pollution
{
  // Declaring variables of different
  // primitive types
  const isDone: boolean = false;
  const decimal: number = 6;
  const name: string = "bob";
  const u: undefined = undefined;
  const n: null = null;
  const mySymbol: symbol = Symbol("myKey");
  const big: bigint = BigInt(123);
  // Displaying the types of the variables
  console.log(typeof isDone);
  console.log(typeof decimal);
  console.log(typeof name);
  console.log(typeof u);
  console.log(typeof n);
  console.log(typeof big);
  console.log(typeof mySymbol);
}
