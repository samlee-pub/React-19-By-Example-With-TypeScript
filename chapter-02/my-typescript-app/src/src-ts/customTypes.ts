/****************************************
 * Custom Types & Interfaces Documentation
 *
 * TypeScript provides powerful tools for defining custom types:
 * 1. Type Aliases (type)     - Create custom type definitions
 * 2. Interfaces (interface)  - Define object shapes and contracts
 * 3. Enums                  - Named constant collections
 * 4. Type Composition       - Combine types using unions and intersections
 * 5. Generic Types          - Create reusable type templates
 * 6. Type Assertions        - Override TypeScript's type inference
 *
 * Build: yarn tsc --target es2021 --module commonjs customTypes.ts
 * Run: node customTypes.js
 ***************************************/

// Using block scope ({}) to avoid global namespace pollution
{
  // 1. Type Aliases (type)
  type UserID = string | number;
  type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9 | "1" | "3" | "5" | "7" | "9";
  type MathOperation = (a: number, b: number) => number; // Function type alias
  // Example usage of type aliases
  const user1Id: UserID = "user-123"; // Valid - string type
  const user2Id: UserID = 456; // Valid - number type
  const oddNumber: OddNumberUnderTen = 7; // Valid - literal number
  // const invalidOdd: OddNumberUnderTen = 2; // Error - not in allowed values
  const add: MathOperation = (x, y) => x + y; // Matches function signature

  console.log("1. Type Aliases - User1 ID:", user1Id);
  console.log("1. Type Aliases - User2 ID:", user2Id);
  console.log("1. Type Aliases - Odd Number:", oddNumber);
  console.log("1. Type Aliases Function - Add 2+3:", add(2, 3));

  // 2. Interfaces (interface)
  // Basic interface
  interface IUser {
    id: string; // Required property
    name: string; // Required property
    email?: string; // Optional property (marked with ?)
  }

  // Extending interfaces
  interface IAdmin extends IUser {
    permissions: string[]; // Additional required property
  }

  // Example usage of interfaces
  const user1: IUser = {
    id: "user1",
    name: "Alice",
  };

  const user2: IUser = {
    id: "user2",
    name: "Bob",
    email: "bob@example.com", // Optional property provided
  };

  console.log("2. Interface - User1:", user1);
  console.log("2. Interface - User2:", user2);

  // 3. Enums (Named Constant Collections)
  const enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  // Numeric enums (auto-incremented)
  const enum StatusCode {
    OK = 200,
    NotFound = 404,
    ServerError = 500,
  }

  // Example usage of enums
  const move: Direction = Direction.Up; // Type-safe assignment
  const status: StatusCode = StatusCode.OK; // Type-safe assignment

  console.log("3. Enum String - Direction:", move, "| Type:", typeof move);
  console.log(
    "3. Enum Numeric - Status Code:",
    status,
    "| Type:",
    typeof status,
  );

  // 4. Type composition - Combining Types
  // Intersection type (&)
  interface Name {
    name: string;
  }
  interface Age {
    age: number;
  }
  type Person = Name & Age; // Must have both name and age

  // Interface merging
  interface Car {
    model: string;
  }

  interface Car {
    year: number; // Merged with previous Car declaration
  }

  // Example usage of composed types
  const person: Person = {
    name: "Alice",
    age: 30, // Must satisfy both Name and Age interfaces
  };

  const myCar: Car = {
    model: "Tesla",
    year: 2023, // Must include properties from both Car declarations
  };

  console.log("4. Composed Intersection Type - Person:", person);
  console.log("4. Composed Merged Interface - Car:", myCar);

  // 5. Generic Types - Reusable Type Templates
  interface ApiResponse<T> {
    data: T;
    error: string | null;
  }

  interface IProduct {
    id: string;
    price: number;
  }

  // Example usage of generic types and interface extension
  const admin: IAdmin = {
    id: "admin1",
    name: "Charlie",
    permissions: ["read", "write"], // Required by IAdmin interface
  };

  const productResponse: ApiResponse<IProduct> = {
    data: {
      id: "1",
      price: 99,
    },
    error: null, // Standard error handling pattern
  };

  console.log("5. Generic Types - Admin:", admin);
  console.log("5. Generic Types - Product Response:", productResponse);

  // 6. Type Assertions (as) - Overriding Type Inference
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageNumber: any = "123"; // Avoid 'any' in real code
  const numericPage = pageNumber as number; // Type assertion
  // const safeNumericPage = Number(pageNumber); // Better approach

  console.log(
    "6. Type Assertion - Numeric Page:",
    numericPage,
    "| Actual Type:",
    typeof numericPage,
  );
}
