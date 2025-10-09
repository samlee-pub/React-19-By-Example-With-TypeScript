/**
 * Comprehensive examples of Vitest assertion methods
 *
 * This test suite demonstrates common matchers and patterns for testing:
 * - Basic equality (strict vs deep comparison)
 * - Truthiness and type checking
 * - Number, string, object, and array validation
 * - Exception/error testing
 * - Type and instance verification
 *
 * Organized hierarchically for clarity and maintainability.
 */
import { describe, test, expect } from "vitest";

describe("Assertions", () => {
  describe("Vitest Basic Test", () => {
    test("Basic matchers", () => {
      expect(42).toBe(42); // Strict equality (===)
      expect(42).not.toBe(3); // Strict equality (!==)
      expect([1, 2]).toEqual([1, 2]); // Deep equality
      expect({ a: undefined, b: 2 }).toEqual({ b: 2 }); // Deep equality
      expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 }); // Strict equality (Jest 23+)
    });

    test("Truthiness", () => {
      // Matches anything that an if statement treats as true (true, 1, 'hello', {}, [], 5.3)
      expect("foo").toBeTruthy();
      // Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
      expect("").toBeFalsy();
      // Matches only null
      expect(null).toBeNull();
      // Matches only undefined
      expect(undefined).toBeUndefined();
      // The opposite of toBeUndefined
      expect(7).toBeDefined();
      // Matches true or false
      expect(true).toEqual(expect.any(Boolean));
    });

    test("Numbers", () => {
      expect(2).toBeGreaterThan(1);
      expect(1).toBeGreaterThanOrEqual(1);
      expect(1).toBeLessThan(2);
      expect(1).toBeLessThanOrEqual(1);
      expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
      expect(NaN).toEqual(expect.any(Number));
    });

    test("Strings", () => {
      expect("long string").toMatch("str");
      expect("string").toEqual(expect.any(String));
      expect("coffee").toMatch(/ff/);
      expect("pizza").not.toMatch("coffee");
      expect(["pizza", "coffee"]).toEqual([
        expect.stringContaining("zz"),
        expect.stringMatching(/ff/),
      ]);
    });

    test("Objects", () => {
      expect({ a: 1 }).toHaveProperty("a");
      expect({ a: 1 }).toHaveProperty("a", 1);
      expect({ a: { b: 1 } }).toHaveProperty("a.b");
      expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
      expect({ a: 1, b: 2 }).toMatchObject({
        a: expect.any(Number) as number,

        b: expect.any(Number) as number,
      });
      expect([{ a: 1 }, { b: 2 }]).toEqual([
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        expect.objectContaining({ a: expect.any(Number) }),
        expect.anything(),
      ]);
    });

    test("Arrays", () => {
      expect([]).toEqual(expect.any(Array));
      expect(["Alice", "Bob", "Eve"]).toHaveLength(3);
      expect(["Alice", "Bob", "Eve"]).toContain("Alice");
      expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 });
      expect(["Alice", "Bob", "Eve"]).toEqual(
        expect.arrayContaining(["Alice", "Bob"]),
      );
    });

    test("Exceptions", () => {
      const fn = () => {
        throw new Error("Out of cheese!");
      };
      expect(fn).toThrowError();
      expect(fn).toThrowError("Out of cheese");
      //expect(fn).toThrowErrorMatchingSnapshot();
      expect(fn).toThrowErrorMatchingInlineSnapshot(`[Error: Out of cheese!]`);

      const fn2 = () => {
        //console.error("Out of cheese!");
      };
      expect(fn2).not.toThrowError();
      expect(fn2).not.toThrowError("Out of cheese");
    });

    test("Misc", () => {
      class A {}
      expect(new A()).toBeInstanceOf(A);
      expect(() => {}).toEqual(expect.any(Function));
      expect("pizza").toEqual(expect.anything());
    });
  });
});
