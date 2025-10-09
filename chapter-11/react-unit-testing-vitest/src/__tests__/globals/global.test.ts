/**
 * Vitest Global Function Mocking Test Suite
 *
 * This test file demonstrates advanced mocking techniques for global functions
 * and third-party dependencies using Vitest. It covers method spying,
 * implementation mocking, and global fetch API mocking patterns.
 *
 * These techniques are essential for:
 * - Testing code that depends on browser APIs in Node.js
 * - Isolating tests from network dependencies
 * - Simulating various API response scenarios
 * - Creating fast, reliable tests for async operations
 */
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { UserService } from "../../mocks/UserService";

/**
 * This suite explores different strategies for mocking external dependencies:
 * - Method-level spying and mocking
 * - Global function replacement (fetch API)
 * - Spy-based global function interception
 * - Real-world API testing patterns
 */
describe("Globals", () => {
  describe("mock globals", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });
    afterEach(() => {
      vi.clearAllMocks();
    });
    test("test on getPhones function", async () => {
      const userService = new UserService();
      const getPhonesSpy = vi.spyOn(userService, "getPhones");
      const phone = await userService.getPhones(10);
      expect(getPhonesSpy).toHaveBeenCalled();
      expect(phone).toHaveProperty("id", "10");
      expect(phone).toHaveProperty("name", "Apple iPad Mini 5th Gen");
    });
    test("test on mock getPhones function", async () => {
      const userService = new UserService();
      const getPhonesSpy = vi.spyOn(userService, "getPhones");

      getPhonesSpy.mockImplementation(
        (): Promise<{ id: string; name: string; data: object }> => {
          return Promise.resolve({
            id: "12",
            name: "my mock phone",
            data: ["my mock data"],
          });
        },
      );
      const phone = await userService.getPhones(10);
      expect(getPhonesSpy).toHaveBeenCalled();
      expect(phone).toHaveProperty("id", "12");
      expect(phone).toHaveProperty("name", "my mock phone");
    });
    test("test on mock fetch", async () => {
      const userService = new UserService();
      const mockdata = [
        { id: "100", name: "my mock phone-2", data: ["my mock data"] },
      ];

      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => Promise.resolve(mockdata),
        text: async () => Promise.resolve("My mock data"),
      });

      const getPhonesSpy = vi.spyOn(userService, "getPhones");

      const phone = await userService.getPhones(10);
      expect(getPhonesSpy).toHaveBeenCalled();
      expect(phone).toHaveProperty("id", "100");
      expect(phone).toHaveProperty("name", "my mock phone-2");
    });
    test("test on spyOn fetch", async () => {
      const userService = new UserService();
      const mockdata = [
        { id: "150", name: "my mock phone-3", data: ["my mock data"] },
      ];
      const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => Promise.resolve(mockdata),
        text: async () => Promise.resolve("My mock data"),
      } as Response);

      const getPhonesSpy = vi.spyOn(userService, "getPhones");

      const phone = await userService.getPhones(10);
      expect(getPhonesSpy).toHaveBeenCalled();
      expect(fetchSpy).toHaveBeenCalled();
      expect(phone).toHaveProperty("id", "150");
      expect(phone).toHaveProperty("name", "my mock phone-3");
    });
  });
});
