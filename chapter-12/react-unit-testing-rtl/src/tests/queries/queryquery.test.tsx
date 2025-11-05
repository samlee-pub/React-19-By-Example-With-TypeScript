/**
 * Comprehensive tests demonstrating React Testing Library's queryBy* and queryAllBy* methods.
 * These queries are non-throwing variants that return null or empty arrays when elements
 * are not found, making them ideal for asserting the absence of elements.
 */
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Counter } from "../../components/Counter";

describe("queries", () => {
  /**
   * Test Sub-Suite: queryBy and queryAllBy Queries
   *
   * Tests for non-throwing query variants that:
   * - Return elements if found
   * - Return null (queryBy*) or empty array (queryAllBy*) if not found
   * - Do not throw errors for missing elements
   * - Ideal for testing element absence and conditional rendering
   */
  describe("queryBy and queryAllBy queries", () => {
    /**
     * Cleanup after each test to ensure test isolation
     * Removes rendered components from the DOM
     */
    afterEach(() => {
      cleanup();
    });

    /**
     * Test Case: queryByText - Non-throwing text content query
     *
     * Demonstrates:
     * - Finding elements by exact text content
     * - No error throwing for non-existent elements (returns null)
     * - Useful for asserting that elements are NOT present
     */
    it("queryByText", () => {
      render(<Counter />);

      // Positive test: Element with exact text exists
      expect(screen.queryByText("Welcome, Guest!")).toBeInTheDocument();

      // Negative test: No error thrown for non-existent text (returns null)
      expect(() => screen.queryByText("Non-existent Text")).not.toThrowError();

      // Regex pattern that doesn't match exactly should still throw error
      // for queryBy* with regex that matches multiple elements
      expect(() => screen.queryByText(/Count/)).toThrowError();
    });

    /**
     * Test Case: queryAllByText - Multiple elements by text (non-throwing)
     *
     * Demonstrates:
     * - Finding multiple elements with text matching
     * - Returns empty array instead of throwing for non-existent elements
     * - Useful for testing element counts and conditional rendering
     */
    it("queryAllByText", () => {
      render(<Counter />);

      // Find single element with regex pattern
      const elements = screen.queryAllByText(/Welcome/);
      expect(elements.length).toBe(1);

      // No error thrown for non-existent text - returns empty array
      expect(() =>
        screen.queryAllByText("Non-existent Text"),
      ).not.toThrowError();

      // Verify empty array is returned for non-existent elements
      expect(screen.queryAllByText("Non-existent Text")).toStrictEqual([]);

      // Multiple elements matching regex pattern
      expect(screen.queryAllByText(/Count/).length).toBe(6);
    });

    /**
     * Test Case: queryByRole - Non-throwing accessibility role query
     *
     * Demonstrates:
     * - Finding elements by ARIA role with accessible name
     * - Returns null instead of throwing for non-existent roles
     * - Ideal for testing conditional UI states
     */
    it("queryByRole", () => {
      render(<Counter />);

      // Find button by role and accessible name
      const element = screen.queryByRole("button", { name: "Count ++" });
      expect(element).toBeInTheDocument();

      // No error thrown for non-existent button - returns null
      expect(() =>
        screen.queryByRole("button", { name: "Non-existent Button" }),
      ).not.toThrowError();
    });

    /**
     * Test Case: queryAllByRole - Multiple elements by role (non-throwing)
     *
     * Demonstrates:
     * - Finding all elements with specific role
     * - Using hidden option to include non-visible elements
     * - Returns empty array for non-existent role criteria
     */
    it("queryAllByRole", () => {
      render(<Counter />);

      // Find all visible buttons (default behavior)
      const elements = screen.queryAllByRole("button");
      expect(elements).toHaveLength(2);

      // Find all buttons including hidden ones
      const allElements = screen.queryAllByRole("button", { hidden: true });
      expect(allElements).toHaveLength(4);

      // Non-existent button criteria returns empty array, no error
      expect(
        screen.queryAllByRole("button", { name: "Non-existent Button" }),
      ).toStrictEqual([]);
    });

    /**
     * Test Case: queryByLabelText - Non-throwing form label query
     *
     * Demonstrates finding form elements by label without throwing errors
     * Useful for testing optional form fields
     */
    it("queryByLabelText", () => {
      render(<Counter />);

      expect(screen.queryByLabelText("HTML")).toBeInTheDocument();
      expect(() =>
        screen.queryByLabelText("Non-existent Text"),
      ).not.toThrowError();
      expect(() => screen.queryByLabelText(/HTML/)).toThrowError();
    });

    /**
     * Test Case: queryAllByLabelText - Multiple labeled elements (non-throwing)
     */
    it("queryAllByLabelText", () => {
      render(<Counter />);

      const elements = screen.queryAllByLabelText("HTML");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.queryAllByLabelText("Non-existent Text"),
      ).not.toThrowError();
      expect(screen.queryAllByLabelText(/HTML/).length).toBe(2);
    });

    /**
     * Test Case: queryByPlaceholderText - Non-throwing placeholder query
     *
     * Demonstrates checking for placeholder text without error throwing
     * Useful for testing dynamic form rendering
     */
    it("queryByPlaceholderText", () => {
      render(<Counter />);

      expect(screen.queryByPlaceholderText("Make")).toBeInTheDocument();
      expect(() =>
        screen.queryByPlaceholderText("Non-existent Text"),
      ).not.toThrowError();
      expect(() => screen.queryByPlaceholderText(/M/)).toThrowError();
    });

    /**
     * Test Case: queryAllByPlaceholderText - Multiple placeholder matches (non-throwing)
     */
    it("queryAllByPlaceholderText", () => {
      render(<Counter />);

      const elements = screen.queryAllByPlaceholderText("Make");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.queryAllByPlaceholderText("Non-existent Text"),
      ).not.toThrowError();
      expect(screen.queryAllByPlaceholderText(/M/).length).toBe(2);
    });

    /**
     * Test Case: queryByDisplayValue - Non-throwing input value query
     *
     * Demonstrates checking input values without error throwing
     * Useful for testing form state changes
     */
    it("queryByDisplayValue", () => {
      render(<Counter />);

      expect(screen.queryByDisplayValue("Ford")).toBeInTheDocument();
      expect(() =>
        screen.queryByDisplayValue("Non-existent Text"),
      ).not.toThrowError();
      expect(() => screen.queryByDisplayValue(/F/)).toThrowError();
    });

    /**
     * Test Case: queryAllByDisplayValue - Multiple elements by value (non-throwing)
     */
    it("queryAllByDisplayValue", () => {
      render(<Counter />);

      const elements = screen.queryAllByDisplayValue("Ford");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.queryAllByDisplayValue("Non-existent Text"),
      ).not.toThrowError();
      expect(screen.queryAllByDisplayValue(/F/).length).toBe(2);
    });

    /**
     * Test Case: queryByAltText - Non-throwing image alt text query
     *
     * Demonstrates checking for images without error throwing
     * Useful for testing conditional image rendering
     */
    it("queryByAltText", () => {
      render(<Counter />);

      expect(screen.queryByAltText("my image-1")).toBeInTheDocument();
      expect(() =>
        screen.queryByAltText("Non-existent Text"),
      ).not.toThrowError();
      expect(() => screen.queryByAltText(/my image/)).toThrowError();
    });

    /**
     * Test Case: queryAllByAltText - Multiple images by alt text (non-throwing)
     */
    it("queryAllByAltText", () => {
      render(<Counter />);

      const elements = screen.queryAllByAltText("my image-1");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.queryAllByAltText("Non-existent Text"),
      ).not.toThrowError();
      expect(screen.queryAllByAltText(/my image/).length).toBe(2);
    });

    /**
     * Test Case: queryByTitle - Non-throwing title attribute query
     *
     * Demonstrates checking for title attributes without error throwing
     * Useful for testing tooltip presence conditionally
     */
    it("queryByTitle", () => {
      render(<Counter />);

      expect(screen.queryByTitle("title-car-make")).toBeInTheDocument();
      expect(() => screen.queryByTitle("Non-existent Text")).not.toThrowError();
      expect(() => screen.queryByTitle(/title-car/)).toThrowError();
    });

    /**
     * Test Case: queryAllByTitle - Multiple elements by title (non-throwing)
     */
    it("queryAllByTitle", () => {
      render(<Counter />);

      const elements = screen.queryAllByTitle("title-car-make");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.queryAllByTitle("Non-existent Text"),
      ).not.toThrowError();
      expect(screen.queryAllByTitle(/title-car/).length).toBe(2);
    });

    /**
     * Test Case: queryByTestId - Non-throwing test ID query
     *
     * Demonstrates checking for test IDs without error throwing
     * Useful for testing conditional component rendering
     */
    it("queryByTestId", () => {
      render(<Counter />);

      expect(screen.queryByTestId("car-id-make")).toBeInTheDocument();
      expect(() =>
        screen.queryByTestId("Non-existent Text"),
      ).not.toThrowError();
      expect(() => screen.queryByTestId(/car-id/)).toThrowError();
    });

    /**
     * Test Case: queryAllByTestId - Multiple elements by test ID (non-throwing)
     */
    it("queryAllByTestId", () => {
      render(<Counter />);

      const elements = screen.queryAllByTestId("car-id-make");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.queryAllByTestId("Non-existent Text"),
      ).not.toThrowError();
      expect(screen.queryAllByTestId(/car-id/).length).toBe(2);
    });
  });
});
