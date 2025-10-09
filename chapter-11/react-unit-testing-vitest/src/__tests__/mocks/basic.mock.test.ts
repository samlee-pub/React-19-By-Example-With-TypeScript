/**
 * Vitest Mocking Test Suite
 *
 * This test file demonstrates various mocking techniques using Vitest's mocking capabilities.
 * It covers basic function mocking, implementation mocking, return value mocking, and async mocking.
 */
import { describe, test, expect, vi } from "vitest";

/**
 * This suite explores different aspects of function mocking including:
 * - Basic function call tracking
 * - Custom mock implementations
 * - Return value control
 * - Asynchronous/Promise mocking
 */
describe("Mocks", () => {
  describe("Basic Mocks", () => {
    test("Mock a function", () => {
      const mock = vi.fn();
      mock(1, 2);
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledWith(1, 2);
      expect(mock).toHaveReturnedWith(undefined);
    });
    test("Mock implementation", () => {
      const mock = vi.fn();
      mock.mockImplementation(() => "mock data");
      expect(mock()).toBe("mock data");
      expect(mock).toHaveBeenCalledWith();
      expect(mock).toHaveReturnedWith("mock data");

      const mock2 = vi.fn((x: number, y: number) => x + y);
      expect(mock2(2, 3)).toBe(5);
      expect(mock2).toHaveBeenCalled();
      expect(mock2).toHaveBeenCalledWith(2, 3);
      expect(mock2).toHaveReturnedWith(5);

      const mock3 = vi.fn();
      mock3
        .mockImplementationOnce(() => "first call")
        .mockImplementationOnce(() => "second call");
      expect(mock3()).toBe("first call");
      expect(mock3()).toBe("second call");
      expect(mock3()).toBeUndefined();
      expect(mock3).toHaveBeenCalledTimes(3);
      expect(mock3).toHaveReturnedWith("first call");
      expect(mock3).toHaveReturnedWith("second call");
      expect(mock3).toHaveReturnedWith(undefined);
    });
    test("Mock return value", () => {
      const mock = vi.fn();
      mock.mockReturnValue("returned data");
      expect(mock("foo")).toBe("returned data");
      expect(mock).toHaveBeenCalledWith("foo");
    });
    test("Mock return promise", async () => {
      const mock = vi.fn();
      mock.mockResolvedValue("returned data");
      await expect(mock("foo")).resolves.toBe("returned data");

      const mock2 = vi.fn();
      mock2.mockResolvedValue("returned data");
      await (mock2("foo") as Promise<string>).then((data) => {
        expect(data).toBe("returned data");
        expect(mock2).toHaveBeenCalledWith("foo");
        expect(mock2).toHaveReturnedWith(Promise.resolve("returned data"));
      });
    });
  });
});
