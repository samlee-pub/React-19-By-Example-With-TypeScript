/**
 * Comprehensive tests demonstrating the usage of React Testing Library's
 * asynchronous find* query methods. These queries are used for elements
 * that may appear after asynchronous operations or delayed rendering.
 */

import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { Counter } from "../../components/Counter";

describe("queries", () => {
  /**
   * Test Sub-Suite: findBy and findAllBy Queries
   *
   * Tests for asynchronous query variants that return Promises and
   * automatically wait for elements to appear in the DOM.
   */
  describe("findBy and findAllBy queries", () => {
    /**
     * Cleanup after each test to ensure test isolation
     */
    afterEach(() => {
      cleanup();
    });

    /**
     * Test Case: findByText - Asynchronous text content query
     *
     * Demonstrates:
     * - Waiting for text to appear with default timeout
     * - Handling element not found with custom timeout
     * - Error handling with try/catch and expect().rejects
     * - Integration with waitFor for complex async scenarios
     */
    it("findByText", async () => {
      render(<Counter />);

      // Basic usage - waits for element to appear (default timeout: 1000ms)
      expect(await screen.findByText("Welcome, Guest!")).toBeInTheDocument();

      // Element not found with custom timeout - should reject
      await expect(
        screen.findByText("Non-existent Text", {}, { timeout: 500 }),
      ).rejects.toThrowError();

      // Regex pattern that doesn't match - should reject
      await expect(() => screen.findByText(/Count/)).rejects.toThrowError();

      // Error handling with try/catch block
      try {
        await screen.findByText("Non-existent Text");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }

      // Using waitFor with findBy for more complex async scenarios
      await expect(
        waitFor(async () => await screen.findByText("Non-existent Text"), {
          timeout: 500,
        }),
      ).rejects.toThrowError();

      await expect(
        waitFor(
          () =>
            expect(
              async () => await screen.findByText("Non-existent Text"),
            ).toBeInTheDocument(),
          {
            timeout: 500,
          },
        ),
      ).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByText - Multiple elements by text
     *
     * Demonstrates:
     * - Finding multiple elements with text matching
     * - Handling element counts and regex patterns
     * - Error scenarios for non-existent elements
     */
    it("findAllByText", async () => {
      render(<Counter />);

      // Find single element with regex
      const elements = await screen.findAllByText(/Welcome/);
      expect(elements.length).toBe(1);

      // Non-existent text should reject
      await expect(
        screen.findAllByText("Non-existent Text"),
      ).rejects.toThrowError();

      // Multiple elements matching regex pattern
      expect((await screen.findAllByText(/Count/)).length).toBe(6);
    });

    /**
     * Test Case: findByRole - Accessibility role-based query
     *
     * Demonstrates:
     * - Finding elements by ARIA role with name options
     * - Role-based queries for better accessibility testing
     */
    it("findByRole", async () => {
      render(<Counter />);

      // Find button by role and accessible name
      const element = await screen.findByRole("button", { name: "Count ++" });
      expect(element).toBeInTheDocument();

      // Non-existent button should reject
      await expect(() =>
        screen.findByRole("button", { name: "Non-existent Button" }),
      ).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByRole - Multiple elements by role
     *
     * Demonstrates:
     * - Finding all elements with specific role
     * - Using hidden option to include non-visible elements
     * - Counting elements with different visibility states
     */
    it("findAllByRole", async () => {
      render(<Counter />);

      // Find all visible buttons (default behavior)
      const elements = await screen.findAllByRole("button");
      expect(elements).toHaveLength(2);

      // Find all buttons including hidden ones
      const allElements = await screen.findAllByRole("button", {
        hidden: true,
      });
      expect(allElements).toHaveLength(4);

      // Non-existent button criteria should reject
      await expect(() =>
        screen.findAllByRole("button", { name: "Non-existent Button" }),
      ).rejects.toThrowError();
    });

    /**
     * Test Case: findByLabelText - Form label association
     *
     * Demonstrates finding form elements by their associated label text
     */
    it("findByLabelText", async () => {
      render(<Counter />);

      expect(await screen.findByLabelText("HTML")).toBeInTheDocument();
      await expect(() =>
        screen.findByLabelText("Non-existent Text"),
      ).rejects.toThrowError();
      await expect(() => screen.findByLabelText(/HTML/)).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByLabelText - Multiple labeled elements
     *
     * Demonstrates finding multiple form elements by label patterns
     */
    it("findAllByLabelText", async () => {
      render(<Counter />);

      const elements = await screen.findAllByLabelText("HTML");
      expect(elements.length).toBe(1);
      await expect(() =>
        screen.findAllByLabelText("Non-existent Text"),
      ).rejects.toThrowError();
      expect((await screen.findAllByLabelText(/HTML/)).length).toBe(2);
    });

    /**
     * Test Case: findByPlaceholderText - Input placeholder queries
     *
     * Demonstrates finding input elements by their placeholder attribute
     */
    it("findByPlaceholderText", async () => {
      render(<Counter />);

      expect(await screen.findByPlaceholderText("Make")).toBeInTheDocument();
      await expect(() =>
        screen.findByPlaceholderText("Non-existent Text"),
      ).rejects.toThrowError();
      await expect(() =>
        screen.findByPlaceholderText(/M/),
      ).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByPlaceholderText - Multiple placeholder matches
     */
    it("findAllByPlaceholderText", async () => {
      render(<Counter />);

      const elements = await screen.findAllByPlaceholderText("Make");
      expect(elements.length).toBe(1);
      await expect(() =>
        screen.findAllByPlaceholderText("Non-existent Text"),
      ).rejects.toThrowError();
      expect((await screen.findAllByPlaceholderText(/M/)).length).toBe(2);
    });

    /**
     * Test Case: findByDisplayValue - Current input values
     *
     * Demonstrates finding form elements by their current displayed value
     */
    it("findByDisplayValue", async () => {
      render(<Counter />);

      expect(await screen.findByDisplayValue("Ford")).toBeInTheDocument();
      await expect(() =>
        screen.findByDisplayValue("Non-existent Text"),
      ).rejects.toThrowError();
      await expect(() => screen.findByDisplayValue(/F/)).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByDisplayValue - Multiple elements by value
     */
    it("findAllByDisplayValue", async () => {
      render(<Counter />);

      const elements = await screen.findAllByDisplayValue("Ford");
      expect(elements.length).toBe(1);
      await expect(() =>
        screen.findAllByDisplayValue("Non-existent Text"),
      ).rejects.toThrowError();
      expect((await screen.findAllByDisplayValue(/F/)).length).toBe(2);
    });

    /**
     * Test Case: findByAltText - Image alt attribute queries
     *
     * Demonstrates finding img elements by their alt text for accessibility
     */
    it("findByAltText", async () => {
      render(<Counter />);

      expect(await screen.findByAltText("my image-1")).toBeInTheDocument();
      await expect(() =>
        screen.findByAltText("Non-existent Text"),
      ).rejects.toThrowError();
      await expect(() =>
        screen.findByAltText(/my image/),
      ).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByAltText - Multiple images by alt text
     */
    it("findAllByAltText", async () => {
      render(<Counter />);

      const elements = await screen.findAllByAltText("my image-1");
      expect(elements.length).toBe(1);
      await expect(() =>
        screen.findAllByAltText("Non-existent Text"),
      ).rejects.toThrowError();
      expect((await screen.findAllByAltText(/my image/)).length).toBe(2);
    });

    /**
     * Test Case: findByTitle - Title attribute queries
     *
     * Demonstrates finding elements by their title attribute
     */
    it("findByTitle", async () => {
      render(<Counter />);

      expect(await screen.findByTitle("title-car-make")).toBeInTheDocument();
      await expect(() =>
        screen.findByTitle("Non-existent Text"),
      ).rejects.toThrowError();
      await expect(() =>
        screen.findByTitle(/title-car/),
      ).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByTitle - Multiple elements by title
     */
    it("findAllByTitle", async () => {
      render(<Counter />);

      const elements = await screen.findAllByTitle("title-car-make");
      expect(elements.length).toBe(1);
      await expect(() =>
        screen.findAllByTitle("Non-existent Text"),
      ).rejects.toThrowError();
      expect((await screen.findAllByTitle(/title-car/)).length).toBe(2);
    });

    /**
     * Test Case: findByTestId - Data attribute queries
     *
     * Demonstrates finding elements by data-testid attributes
     * Useful for elements that lack semantic or text-based identifiers
     */
    it("findByTestId", async () => {
      render(<Counter />);

      expect(await screen.findByTestId("car-id-make")).toBeInTheDocument();
      await expect(() =>
        screen.findByTestId("Non-existent Text"),
      ).rejects.toThrowError();
      await expect(() => screen.findByTestId(/car-id/)).rejects.toThrowError();
    });

    /**
     * Test Case: findAllByTestId - Multiple elements by test ID
     */
    it("findAllByTestId", async () => {
      render(<Counter />);

      const elements = await screen.findAllByTestId("car-id-make");
      expect(elements.length).toBe(1);
      await expect(() =>
        screen.findAllByTestId("Non-existent Text"),
      ).rejects.toThrowError();
      expect((await screen.findAllByTestId(/car-id/)).length).toBe(2);
    });
  });
});
