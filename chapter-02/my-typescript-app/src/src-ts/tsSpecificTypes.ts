/****************************************
 * TypeScript-Specific Types Documentation
 *
 * TypeScript extends JavaScript with additional type system features:
 * 1. Union Types (|)       - Variables that can hold multiple types
 * 2. Literal Types         - Exact value constraints
 * 3. Tuples                - Fixed-length, typed arrays
 * 4. Any Type              - Opt-out of type checking (use sparingly)
 * 5. Unknown Type          - Type-safe alternative to 'any'
 * 6. Void Type             - Absence of return value
 * 7. Never Type            - Values that never occur
 *
 * Build: yarn tsc --target es2021 --module commonjs tsSpecificTypes.ts
 * Run: node tsSpecificTypes.js
 ***************************************/

// Using block scope ({}) to avoid global namespace pollution
{
  // 1. Union Types (|)
  let userId: string | number;
  userId = "abc123"; // OK - string type
  userId = 456; // OK - number type
  // userId = true;  // Error - boolean not in union type
  console.log("Union Type - userId:", userId, "| Type:", typeof userId);

  // 2. Literal Types (Exact values)
  let status: "active" | "inactive" | "OK" | 200 = "active";
  status = "OK"; // Valid - "OK" is in literal union
  status = 200; // Valid - 200 is in literal union
  // status = "pending"; // Error - "pending" not in allowed literals
  console.log("Literal Type - status:", status, "| Type:", typeof status);

  // 3. Tuple (Fixed-length array with specified types)
  const person: [string, number, boolean] = ["Alice", 30, true];
  // person = [30, "Alice", true]; // Error - wrong type order
  console.log(
    "Tuple - person:",
    person,
    "| Types:",
    `[${typeof person[0]}, ${typeof person[1]}, ${typeof person[2]}]`,
  );

  // Named tuple: Tuple with labeled elements (TypeScript 4.0+)
  const coordinates: [x: number, y: number] = [10, 20];
  console.log(
    "Named Tuple - coordinates:",
    coordinates,
    "| Types:",
    `[${typeof coordinates[0]}, ${typeof coordinates[1]}]`,
  );

  // 4. Any (Opt-out of type checking)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let dynamicValue: any = "Hello"; // Lint error: no-explicit-any
  dynamicValue = [1, 2, 3]; // No type checking - anything allowed
  dynamicValue = 42; // No error - complete type freedom
  console.log(
    "Any Type - dynamicValue:",
    dynamicValue,
    "| Type:",
    typeof dynamicValue,
  );

  // 5. Unknown (Type-safe any)
  let unknownValue: unknown = "28";
  unknownValue = [1, 2, 3]; // Can assign anything like 'any'
  unknownValue = "unknown value"; // No assignment restrictions

  // Type checking required before operations
  if (typeof unknownValue === "string") {
    console.log("Unknown Type - string value:", unknownValue.toUpperCase());
  } else if (Array.isArray(unknownValue)) {
    console.log("Unknown Type - array length:", unknownValue.length);
  }

  // 6. Void (No return value)
  function logMessage(message: string): void {
    console.log(`VOID FUNCTION: ${message}`);
    // No return statement - implicitly returns undefined
  }
  logMessage("Hello from void function!");
  console.log(
    "Void Function - logMessage:",
    logMessage,
    "| Type:",
    typeof logMessage,
  );

  // 7. Never (Unreachable code)
  function throwError(message: string): never {
    throw new Error(message);
  }
  console.log(
    "Never Type - throwError:",
    throwError,
    "| Type:",
    typeof throwError,
  );

  function infiniteLoop(): never {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      // Infinite loop to ensure the function never returns
    }
  }
  console.log(
    "Never Type - infiniteLoop:",
    infiniteLoop,
    "| Type:",
    typeof infiniteLoop,
  );
}
