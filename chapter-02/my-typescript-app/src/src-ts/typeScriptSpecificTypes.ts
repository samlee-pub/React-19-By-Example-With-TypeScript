/****************************************
 * TypeScript-Specific Types
 * Build: yarn tsc --target es2021
 *        --module commonjs <filename>.ts
 * Run: node <filename>.js
 ***************************************/
//using local scope, avoiding global pollution
{
  // 1. Union Types (|)
  let userId: string | number;
  userId = "abc123"; // OK
  userId = 456; // OK
  // userId = true;  // Error (not string or number)
  console.log(userId, ":", typeof userId);

  // 2. Literal Types (Exact values)
  let status: "active" | "inactive" | "OK" | 200 = "active"; // Literal types
  status = "OK"; // Also allows number
  console.log(status, ":", typeof status);

  // 3. Tuples (Fixed-length arrays)
  const person: [string, number, boolean] = ["Alice", 30, true]; // Must match structure
  // person = [30, "Alice", true]; // Error (wrong order)
  console.log(
    person,
    ":",
    `[${typeof person[0]},${typeof person[1]},${typeof person[2]}]`,
  );

  // Named tuples (TypeScript 4.0+)
  const coordinates: [x: number, y: number] = [10, 20];
  console.log(
    coordinates,
    ":",
    `[${typeof coordinates[0]},${typeof coordinates[1]}]`,
  );

  // 4. Any (Opt-out of type checking)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let dynamicValue: any = "Hello"; //lint error: no-explicit-any
  dynamicValue = [1, 2, 3]; // Anything goes
  dynamicValue = 42; // No error
  // Use sparingly - defeats TypeScript's purpose!
  console.log(dynamicValue, ":", typeof dynamicValue);

  // 5. Unknown (Type-safe any)
  let unknownValue: unknown = "28";
  unknownValue = [1, 2, 3]; // Anything goes
  unknownValue = "unknown value"; // No error

  // Must type-check before use
  if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
  }

  // 6. Void (No return value)
  function logMessage(message: string): void {
    console.log(message);
    // Implicitly returns undefined
  }
  console.log(logMessage, ":", typeof logMessage);

  // 7. Never (Unreachable code)
  function throwError(message: string): never {
    throw new Error(message);
  }
  console.log(throwError, ":", typeof throwError);

  function infiniteLoop(): never {
    // eslint-disable-next-line no-empty
    while (true) {} //lint error: Empty block statement
  }
  console.log(infiniteLoop, ":", typeof infiniteLoop);
}
