/**
 * Vitest Timer Mocking Test Suite
 *
 * This test file demonstrates timer mocking techniques using Vitest's timer control APIs.
 * It covers both real timer testing and fake timer manipulation for synchronous testing
 * of asynchronous timer-based code.
 */
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";

/**
 * This suite explores different approaches to testing timer-dependent code:
 * - Real timers: Testing with actual asynchronous delays
 * - Fake timers: Controlling time programmatically for synchronous testing
 * - Various timer manipulation methods: advanceTimersByTime, runAllTimers, etc.
 */
describe("Mocks", () => {
  describe("Timer Mocks", () => {
    describe("Real timers", () => {
      let delay: (ms: number) => Promise<void>;
      beforeEach(() => {
        vi.useRealTimers();
        delay = (ms: number) => {
          return new Promise((resolve) => setTimeout(resolve, ms));
        };
      });
      test("timeout callback", async () => {
        const mockFn = vi.fn();
        setTimeout(mockFn, 100);
        expect(mockFn).not.toHaveBeenCalled();
        await delay(110);
        expect(mockFn).toHaveBeenCalled();

        const state = { isdone: false };
        const mockFn2 = vi.fn(() => {
          state.isdone = true;
        });
        setTimeout(mockFn2, 100);
        expect(mockFn2).not.toHaveBeenCalled();
        await vi.waitFor(() => expect(state.isdone).toBe(true), 3000);
        expect(mockFn2).toHaveBeenCalled();
      });
    });
    describe("Fake Timers", () => {
      beforeEach(() => {
        vi.useFakeTimers();
      });

      afterEach(() => {
        vi.useRealTimers();
        vi.clearAllTimers();
      });
      test("test fake timer", () => {
        vi.setSystemTime(new Date(2000, 0, 1, 1));
        const date = new Date();
        expect(date.getFullYear()).toBe(2000);
        expect(date.getHours()).toBe(1);
        expect(date).toEqual(new Date(2000, 0, 1, 1));
      });
      test("wait timer", async () => {
        vi.clearAllTimers();
        vi.useRealTimers();
        const mockFn = vi.fn();
        setTimeout(mockFn, 100);
        expect(mockFn).not.toHaveBeenCalled();
        await vi.waitFor(() => expect(mockFn).toHaveBeenCalledOnce());
        expect(mockFn).toHaveBeenCalled();
      });
      test("advance timer", () => {
        const mockFn = vi.fn();
        setTimeout(mockFn, 100);
        expect(mockFn).not.toHaveBeenCalled();
        vi.advanceTimersByTime(1000);
        expect(mockFn).toHaveBeenCalled();
      });
      test("run all timers", () => {
        const mockFn = vi.fn();
        setTimeout(mockFn, 100);
        setTimeout(mockFn, 1000);
        setTimeout(mockFn, 10000);
        expect(mockFn).not.toHaveBeenCalled();
        vi.runAllTimers();
        expect(mockFn).toHaveBeenCalledTimes(3);
      });
    });
  });
});
