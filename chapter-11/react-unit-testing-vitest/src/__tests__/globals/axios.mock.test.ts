/**
 * Vitest Third-Party Library Mocking Test Suite
 *
 * This test file demonstrates advanced mocking techniques for third-party libraries
 * like axios using Vitest's module mocking capabilities. It covers top-level module
 * mocking, method-level spying, and different scoping strategies.
 */
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { UserService } from "../../mocks/UserService";
import axios from "axios";

/**
 * Top-Level Module Mocking (Recommended Approach) - affects all imports in this file
 *
 * Mocking at the module level ensures all imports of 'axios' throughout
 * the test file use the mocked version. This is the most reliable approach
 * for third-party library mocking.
 */
vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);
// Helper function for common mock setups
const setupAxiosMock = () => {
  mockedAxios.get.mockReset();
  mockedAxios.post.mockReset();
  mockedAxios.put.mockReset();
  mockedAxios.delete.mockReset();
};

/**
 * This suite explores different strategies for mocking axios HTTP client:
 * - Top-level module mocking (recommended)
 * - Method-level spying on mocked modules
 * - Scoped mocking within test blocks
 * - Proper cleanup and reset patterns
 */
describe("Globals", () => {
  describe("mock libraries - top module level", () => {
    beforeEach(() => {
      setupAxiosMock();
    });
    afterEach(() => {
      setupAxiosMock();
    });
    test("test on mock axios", async () => {
      const mockdata = [
        { id: "100", name: "my mock phone-2", data: ["my mock data"] },
      ];
      // Mock the implementation
      mockedAxios.get.mockResolvedValue({
        data: mockdata,
        status: 200,
        statusText: "ok",
      });

      const userService = new UserService();
      const getPhonesSpy = vi.spyOn(userService, "getPhonesByAxios");

      const phone = await userService.getPhonesByAxios(10);
      expect(getPhonesSpy).toHaveBeenCalled();
      expect(phone).toHaveProperty("id", "100");
      expect(phone).toHaveProperty("name", "my mock phone-2");
    });
    test("test on spyOn axios", async () => {
      const userService = new UserService();
      const mockdata = [
        { id: "150", name: "my mock phone-3", data: ["my mock data"] },
      ];
      const fetchSpy = vi.spyOn(mockedAxios, "get").mockResolvedValue({
        ok: true,
        status: 200,
        statusText: "ok",
        data: mockdata,
        text: "My mock data",
      });

      const getPhonesSpy = vi.spyOn(userService, "getPhonesByAxios");

      const phone = await userService.getPhonesByAxios(10);
      expect(getPhonesSpy).toHaveBeenCalled();
      expect(fetchSpy).toHaveBeenCalled();
      expect(phone).toHaveProperty("id", "150");
      expect(phone).toHaveProperty("name", "my mock phone-3");
    });
    test("mock inside test block", () => {
      // Option 1: Mock inside test block - mock()
      /*
        vi.mock('axios', () => {
          return {
            default: {
              get: vi.fn().mockResolvedValue({ data: 'mocked data' }),
              post: vi.fn(),
            },
          };
        });

        // Need to import after mocking
        const { default: axios } = await import('axios');
        // test the imported axios, but not external functions using axios, such as axios.get():
        const result = await axios.get('/api/data');
        expect(result.data).toBe('mocked data');
      */
      // Option 2: Mock inside test block - doMock()
      /*
        vi.doMock('axios', () => ({
          default: {
            get: vi.fn().mockResolvedValue({ data: 'scoped mock' }),
          },
        }));

        // Need to import after mocking
        const { default: axios } = await import('axios');
        // test the imported axios, but not external functions using axios, such as axios.get():
            const result = await axios.get('/api/data');
            expect(result.data).toBe('scoped mock');
      */
    });
  });
});
