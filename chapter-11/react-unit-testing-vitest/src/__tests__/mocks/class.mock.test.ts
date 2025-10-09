/**
 * Vitest Class Mocking Test Suite
 *
 * This test file demonstrates class and method mocking patterns using Vitest.
 * It covers both real class instance testing and manual mock creation for
 * MathService and Dog classes, showing different mocking strategies.
 */
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { MathService, Dog } from "../../mocks/UserService";

/**
 * This suite explores different approaches to testing classes:
 * - Testing real class instances with actual implementations
 * - Creating manual mocks with custom implementations
 * - Demonstrating various mock creation patterns
 */
describe("Mocks", () => {
  describe("Class Mocks", () => {
    describe("MathService Mocks", () => {
      describe("MathService: run test", () => {
        let mathService: MathService;
        beforeEach(() => {
          vi.clearAllMocks();
          mathService = new MathService();
        });
        afterEach(() => {
          vi.clearAllMocks();
        });
        test("test add/subtract", () => {
          expect(mathService.add(2, 3)).toBe(5);
          expect(mathService.subtract(3, 5)).toBe(-2);
        });
        test("test multiply/devide", () => {
          expect(mathService.multiply(-2, 3)).toBe(-6);
          expect(mathService.divide(6, 3)).toBe(2);
          expect(() => mathService.divide(6, 0)).toThrowError();
        });
      });
      describe("MathService: mock class and method", () => {
        let mathService: MathService;
        beforeEach(() => {
          vi.clearAllMocks();
          const createMockMathService = () => ({
            add: vi.fn().mockImplementation((a, b) => 2 * (a + b)),
            subtract: vi.fn().mockImplementation((a, b) => 10 * (a - b)),
            multiply: vi.fn().mockImplementation((a, b) => -1 * (a * b)),
            divide: vi.fn().mockImplementation((a, b) => 2 * (a / b)),
          });
          mathService = createMockMathService();
        });

        afterEach(() => {
          vi.clearAllMocks();
        });
        test("test add/subtract", () => {
          expect(mathService.add(2, 3)).toBe(10);
          expect(mathService.subtract(3, 5)).toBe(-20);
        });
        test("test multiply/devide", () => {
          expect(mathService.multiply(-2, 3)).toBe(6);
          expect(mathService.divide(6, 3)).toBe(4);
        });
      });
    });
    describe("Dog Mocks", () => {
      describe("Dog class: run test", () => {
        test("test dog", () => {
          const dog = new Dog("Dog-1");
          expect(dog.name).toBe("Dog-1");
          expect(dog.greet()).toBe("Hi! My name is Dog-1!");
        });
      });
      describe("Dog class: mock class and method", () => {
        beforeEach(() => {
          vi.clearAllMocks();
        });
        afterEach(() => {
          vi.clearAllMocks();
        });
        test("test mock dog-1", () => {
          const createMockDog = (name: string) => ({
            name: name,
            greet: vi
              .fn()
              .mockImplementation(() => `Hi! My mock name is ${name}!`),
          });
          const dog: Dog = createMockDog("Dog-1");
          expect(dog.name).toBe("Dog-1");
          expect(dog.greet()).toBe("Hi! My mock name is Dog-1!");
        });
        test("test mock dog-2", () => {
          const mockDog = vi.fn().mockImplementation((name: string) => ({
            name: name,
            greet: vi.fn().mockReturnValue(`Hi! I am ${name}!`),
          }));
          const dog = mockDog("mock-dog2") as Dog;
          expect(dog.name).toBe("mock-dog2");
          expect(dog.greet()).toBe("Hi! I am mock-dog2!");
        });
      });
    });
  });
});
