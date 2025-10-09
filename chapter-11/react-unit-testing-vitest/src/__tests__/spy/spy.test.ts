/**
 * Vitest Spying Test Suite
 *
 * This test file demonstrates function spying techniques using Vitest's spy capabilities.
 * It covers basic spying on functions, object methods, combining spies with mocks,
 * and spying on named imports for comprehensive test coverage.
 */
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import * as functions from "../../functions/functions";
import { Calculator } from "../../functions/functions";

/**
 * This suite explores different approaches to spying on function calls:
 * - Basic function call tracking
 * - Object method monitoring
 * - Combining spies with mock implementations
 * - Spying on dynamically imported modules
 *
 * Spies allow you to observe function calls without affecting their
 * original implementation, unless explicitly mocked.
 */
describe("Spy", () => {
  describe("Basic Spying", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });
    afterEach(() => {
      vi.clearAllMocks();
    });
    test("spy on functions", () => {
      const addSpy = vi.spyOn(functions, "add");
      functions.add(1, 2);
      expect(addSpy).toHaveBeenCalled();
    });
    test("spy on object methods", () => {
      const calculator = new Calculator();
      const addSpy = vi.spyOn(calculator, "add");
      calculator.add(1, 2);
      expect(addSpy).toHaveBeenCalled();
    });
    test("spy and mock functions", () => {
      const calculator = new Calculator();
      const addSpy = vi.spyOn(calculator, "add").mockImplementation(() => 100);
      const result = calculator.add(1, 2);
      expect(addSpy).toHaveBeenCalled();
      expect(result).toBe(100);

      const addFnSpy = vi.spyOn(functions, "add").mockImplementation(() => 20);
      const result2 = functions.add(1, 2);
      expect(addFnSpy).toHaveBeenCalled();
      expect(result2).toBe(20);
    });
    test("spy on named imports", async () => {
      const funcs = await import("../../functions/functions");
      const addSpy = vi.spyOn(funcs, "add").mockImplementation(() => 50);

      const result = funcs.add(2, 3); // Using named import
      expect(addSpy).toHaveBeenCalledWith(2, 3);
      expect(result).toBe(50);
    });
  });
});
