/**
 * Example functions for testing purposes
 * This module includes various types of functions to demonstrate different testing scenarios.
 *  - Pure functions
 *  - Async functions
 *  - Callback functions
 *  - Functions with timeouts
 *  - Class methods
 *
 * Each function includes basic error handling to ensure robust behavior.
 */
//Pure Functions
export function add(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new TypeError("Parameters must be of type number!");
}

// Async Functions
export const asyncAdd = async (a: number, b: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
};

// Callback function
export function calculate(
  a: unknown,
  b: unknown,
  callback: (x: number, y: number) => number,
) {
  if (typeof a === "number" && typeof b === "number") {
    return callback(a, b);
  }
  throw new TypeError("Parameters must be of type number!");
}

// Function with timeout
export const timeoutAdd = (
  a: number,
  b: number,
  callback: (x: number) => number,
  ms: number,
) => {
  setTimeout(() => {
    callback(a + b);
  }, ms);
};

// Class with methods
export class Calculator {
  add: (a: unknown, b: unknown) => number = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    throw new TypeError("Parameters must be of type number!");
  };
}
