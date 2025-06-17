/****************************************
 * Custom Types & Interfaces
 * Build: yarn tsc --target es2021
 *        --module commonjs <filename>.ts
 * Run: node <filename>.js
 ***************************************/
//using local scope, avoiding global pollution
{
  // 1. Type Aliases (type)
  type UserID = string | number;
  type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9 | "1" | "3" | "5" | "7" | "9"; // Union of numbers and strings

  //Example usage of type aliases
  const user1Id: UserID = "user-123";
  const oddNumber: OddNumberUnderTen = 7;
  console.log("user1Id", ":", user1Id);
  console.log("oddNumber", ":", oddNumber);

  // Object type
  type User = {
    id: UserID;
    name: string;
    isAdmin?: boolean; // Optional
  };

  //Example usage of object type
  const alice: User = {
    id: 1,
    name: "Alice",
  };
  const bob: User = {
    id: "user-456",
    name: "Bob",
    isAdmin: true, // Optional property
  };
  console.log("Alice:", alice);
  console.log("Bob:", bob);

  // 2. Interfaces (interface)
  // Basic interface
  interface IUser {
    id: string;
    name: string;
    email?: string; // Optional
  }

  // Extending interfaces
  interface IAdmin extends IUser {
    permissions: string[];
  }

  // Function interface
  interface MathOperation {
    (a: number, b: number): number;
  }

  //Example usage of interfaces
  const user1: IUser = {
    id: "user1",
    name: "Alice",
  };
  const user2: IUser = {
    id: "user2",
    name: "Bob",
    email: "abc@abc.com", // Optional property
  };
  const add: MathOperation = (x, y) => x + y;
  console.log("User1:", user1);
  console.log("User2:", user2);
  console.log("Add 2+3:", add(2, 3));

  // 3. Enums (Named constants)
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  // Numeric enums (auto-incremented)
  enum StatusCode {
    OK = 200,
    NotFound = 404,
    ServerError = 500,
  }

  // Example usage of enums
  const move: Direction = Direction.Up;
  const status: StatusCode = StatusCode.OK;
  console.log("Direction:", move, ":", typeof move);
  console.log("Status Code:", status, ":", typeof status);

  // 4. Combining Types & Interfaces
  // Intersection type (&)
  type Name = { name: string };
  type Age = { age: number };
  type Person = Name & Age;

  // Interface merging
  interface Car {
    model: string;
  }
  interface Car {
    year: number; // Merged
  }
  //Example usage of combined types and interfaces
  const person: Person = { name: "Alice", age: 30 };
  const myCar: Car = { model: "Tesla", year: 2023 };
  console.log("Person:", person);
  console.log("Car:", myCar);

  // 5. Generic Types
  type ApiResponse<T> = {
    data: T;
    error: string | null;
  };

  interface IProduct {
    id: string;
    price: number;
  }

  // Example usage of generic types
  const admin: IAdmin = {
    id: "admin1",
    name: "Charlie",
    permissions: ["read", "write"],
  };

  const productResponse: ApiResponse<IProduct> = {
    data: { id: "1", price: 99 },
    error: null,
  };

  console.log("Admin:", admin);
  console.log("Product Response:", productResponse);

  // 6. Type Assertions (as)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageNumber: any = "123";
  const numericPage = pageNumber as number; // Force type
  console.log("Numeric Page:", numericPage, ":", typeof numericPage);
}
