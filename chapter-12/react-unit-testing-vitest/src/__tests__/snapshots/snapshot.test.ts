/**
 * Vitest Snapshot Testing Suite
 *
 * This test file demonstrates various snapshot testing techniques using Vitest.
 * It covers basic snapshots, inline snapshots, and partial snapshot matching
 * for different types of data and React components.
 *
 * Snapshot testing is ideal for:
 * - Preventing regression in UI components
 * - Testing complex data structures
 * - Ensuring serialized outputs remain consistent
 * - Catching unexpected changes in rendered output
 */
import { describe, test, expect } from "vitest";
import { UserComponent } from "../../snapshot/UserComponent";

/**
 * This suite explores different approaches to snapshot testing:
 * - Basic snapshots: For React components and complex objects
 * - Inline snapshots: With snapshots embedded in test code
 * - Partial matching: Flexible snapshots with dynamic values
 */
describe("Snapshots", () => {
  describe("basic snapshot test", () => {
    test("test on setup", () => {
      const user = { name: "John Doe", email: "john@example.com" };
      const result = UserComponent(user);
      // Creates/compares snapshot
      expect(result).toMatchSnapshot();
    });

    test("inline snapshot", () => {
      const data = { items: ["apple", "banana"], count: 2 };
      expect(data).toMatchSnapshot();
      expect(data).toMatchInlineSnapshot(`
        {
          "count": 2,
          "items": [
            "apple",
            "banana",
          ],
        }
      `);
    });
    test("test snapshot match", () => {
      const data = { items: ["apple", "banana"], count: Math.random() };
      expect(data).toMatchSnapshot({
        count: expect.any(Number) as number,
      });
    });
  });
});
