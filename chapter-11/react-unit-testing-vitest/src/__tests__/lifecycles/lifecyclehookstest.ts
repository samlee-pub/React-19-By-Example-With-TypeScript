/**
 * Demonstrates Vitest's test lifecycle hooks for setup and teardown operations
 *
 * Execution order:
 * 1. beforeAll (once, before any tests)
 * 2. beforeEach (before each test)
 * 3. Test execution
 * 4. afterEach (after each test)
 * 5. afterAll (once, after all tests)
 *
 * Useful for resource management, test isolation, and cleanup.
 */
import {
  describe,
  test,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";

describe("lifecycle hooks", () => {
  describe("setup and teardown hooks", () => {
    test("test group 1", () => console.log("// Executing test group 1"));
    test("test group 2", () => console.log("// Executing test group 2"));
    beforeAll(() => console.log("// Runs before all tests"));
    afterAll(() => console.log("// Runs after all tests"));
    beforeEach(() => console.log("// Runs before each test"));
    afterEach(() => console.log("// Runs after each test"));
  });
});
