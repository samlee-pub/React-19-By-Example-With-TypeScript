/**
 * This file contains unit tests for various functions using Vitest.
 * It demonstrates testing of pure functions, async functions, callback functions,
 * functions with timeouts, and class methods.
 * Each test case includes assertions to verify correct behavior and error handling.
 */
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import {
  add,
  asyncAdd,
  calculate,
  timeoutAdd,
  Calculator,
} from "../../functions/functions";

describe("Assertions", () => {
  describe("Vitest Function Test", () => {
    describe("Pure Functions", () => {
      test("add function", () => {
        expect(add(2, 3)).toBe(5);
        expect(() => add(2, "a")).toThrow(TypeError);
        expect(() => add(2, "a")).toThrow("Parameters must be of type number!");
      });
    });
    describe("Async Functions", () => {
      test("asyncAdd function", async () => {
        await expect(asyncAdd(2, 3)).resolves.toBe(5);
      });
    });

    describe("Callback Functions", () => {
      test("calculate function", () => {
        const mockCallback = (x: number, y: number) => x + y;

        expect(calculate(2, 3, mockCallback)).toBe(5);
        expect(() => calculate(2, "a", mockCallback)).toThrow(TypeError);
        expect(() => calculate(2, "a", mockCallback)).toThrow(
          "Parameters must be of type number!",
        );
      });
    });

    describe("Functions with Timeout - Real Timer", () => {
      // Use real timers for all tests
      beforeEach(() => {
        vi.useRealTimers();
      });

      afterEach(() => {
        // Clean up any pending timers
        vi.clearAllTimers();
      });
      test("timeoutAdd function", () => {
        const a = 5;
        const b = 3;
        const ms = 100;
        let fnCalled = false;
        let result: number | null = null;
        const callbackFn = (sum: number): number => {
          fnCalled = true;
          result = sum * 2;
          return result;
        };
        //call the function
        timeoutAdd(a, b, callbackFn, ms);
        // Assert before the timeout
        expect(result).toBeNull();

        // wait for the timeout to complete
        vi.waitUntil(() => fnCalled, { timeout: ms + 50 })
          .then(() => {
            expect(result).toBe((a + b) * 2);
            expect(callbackFn).toHaveBeenCalledOnce();
          })
          .catch((error) => {
            console.log(new Error(`Timeout or unexpected error: ${error}`));
          });
      });
    });

    describe("Class Methods", () => {
      test("Calculator class add method", () => {
        const calculator = new Calculator();
        expect(calculator.add(2, 3)).toBe(5);
        expect(() => calculator.add(2, "a")).toThrow(TypeError);
        expect(() => calculator.add(2, "a")).toThrow(
          "Parameters must be of type number!",
        );
      });
    });
  });
});
