/**
 * Comprehensive tests demonstrating React Testing Library's synchronous query methods.
 * These tests cover getBy* and getAllBy* queries which immediately return elements
 * or throw errors if elements are not found.
 */
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Counter } from "../../components/Counter";

describe("queries", () => {
  /**
   * Test Sub-Suite: getBy and getAllBy Queries
   *
   * Tests for synchronous query variants that:
   * - Return elements immediately if found
   * - Throw errors immediately if elements are not found
   * - Are ideal for elements that should be present on initial render
   */
  describe("getBy and getAllBy queries", () => {
    /**
     * Cleanup after each test to ensure test isolation
     * Removes rendered components from the DOM
     */
    afterEach(() => {
      cleanup();
    });

    /**
     * Test Case: getByText - Synchronous text content query
     *
     * Demonstrates:
     * - Finding elements by exact text content
     * - Error throwing for non-existent elements
     * - Regex pattern usage limitations
     */
    it("getByText", () => {
      render(<Counter />);

      // Positive test: Element with exact text exists
      expect(screen.getByText("Welcome, Guest!")).toBeInTheDocument();

      // Negative test: Non-existent text should throw error
      expect(() => screen.getByText("Non-existent Text")).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByText(/Count/)).toThrowError();
    });

    /**
     * Test Case: getAllByText - Multiple elements by text
     *
     * Demonstrates:
     * - Finding multiple elements with text matching
     * - Handling element counts with regex patterns
     * - Error scenarios for non-existent elements
     */
    it("getAllByText", () => {
      render(<Counter />);

      // Find single element with regex pattern
      const elements = screen.getAllByText(/Welcome/);
      expect(elements.length).toBe(1);

      // Non-existent text should throw error
      expect(() => screen.getAllByText("Non-existent Text")).toThrowError();

      // Multiple elements matching regex pattern
      expect(screen.getAllByText(/Count/).length).toBe(6);
    });

    /**
     * Test Case: getByRole - Accessibility role-based query
     *
     * Demonstrates:
     * - Finding elements by ARIA role with accessible name
     * - Role-based queries for better accessibility testing
     */
    it("getByRole", () => {
      render(<Counter />);

      // Find button by role and accessible name
      const element = screen.getByRole("button", { name: "Count ++" });
      expect(element).toBeInTheDocument();

      // Non-existent button should throw error
      expect(() =>
        screen.getByRole("button", { name: "Non-existent Button" }),
      ).toThrowError();
    });

    /**
     * Test Case: getAllByRole - Multiple elements by role
     *
     * Demonstrates:
     * - Finding all elements with specific role
     * - Using hidden option to include non-visible elements
     * - Counting elements with different visibility states
     */
    it("getAllByRole", () => {
      render(<Counter />);

      // Find all visible buttons (default behavior)
      const elements = screen.getAllByRole("button");
      expect(elements).toHaveLength(2);

      // Find all buttons including hidden ones
      const allElements = screen.getAllByRole("button", { hidden: true });
      expect(allElements).toHaveLength(4);

      // Non-existent button criteria should throw error
      expect(() =>
        screen.getAllByRole("button", { name: "Non-existent Button" }),
      ).toThrowError();
    });

    /**
     * Test Case: getByLabelText - Form label association
     *
     * Demonstrates finding form elements by their associated label text
     * for accessibility and form testing
     */
    it("getByLabelText", () => {
      render(<Counter />);

      // Find input by its associated label text
      expect(screen.getByLabelText("HTML")).toBeInTheDocument();

      // Non-existent label should throw error
      expect(() => screen.getByLabelText("Non-existent Text")).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByLabelText(/HTML/)).toThrowError();
    });

    /**
     * Test Case: getAllByLabelText - Multiple labeled elements
     *
     * Demonstrates finding multiple form elements by label text patterns
     */
    it("getAllByLabelText", () => {
      render(<Counter />);

      // Find single element with exact label text
      const elements = screen.getAllByLabelText("HTML");
      expect(elements.length).toBe(1);

      // Non-existent label should throw error
      expect(() =>
        screen.getAllByLabelText("Non-existent Text"),
      ).toThrowError();

      // Multiple elements matching regex pattern
      expect(screen.getAllByLabelText(/HTML/).length).toBe(2);
    });

    /**
     * Test Case: getByPlaceholderText - Input placeholder queries
     *
     * Demonstrates finding input elements by their placeholder attribute
     * Useful for form inputs without visible labels
     */
    it("getByPlaceholderText", () => {
      render(<Counter />);

      // Find input by placeholder text
      expect(screen.getByPlaceholderText("Make")).toBeInTheDocument();

      // Non-existent placeholder should throw error
      expect(() =>
        screen.getByPlaceholderText("Non-existent Text"),
      ).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByPlaceholderText(/M/)).toThrowError();
    });

    /**
     * Test Case: getAllByPlaceholderText - Multiple placeholder matches
     */
    it("getAllByPlaceholderText", () => {
      render(<Counter />);

      const elements = screen.getAllByPlaceholderText("Make");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.getAllByPlaceholderText("Non-existent Text"),
      ).toThrowError();
      expect(screen.getAllByPlaceholderText(/M/).length).toBe(2);
    });

    /**
     * Test Case: getByDisplayValue - Current input values
     *
     * Demonstrates finding form elements by their current displayed value
     * Useful for testing pre-filled forms or user input scenarios
     */
    it("getByDisplayValue", () => {
      render(<Counter />);

      // Find input by its current value
      expect(screen.getByDisplayValue("Ford")).toBeInTheDocument();

      // Non-existent value should throw error
      expect(() =>
        screen.getByDisplayValue("Non-existent Text"),
      ).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByDisplayValue(/F/)).toThrowError();
    });

    /**
     * Test Case: getAllByDisplayValue - Multiple elements by value
     */
    it("getAllByDisplayValue", () => {
      render(<Counter />);

      const elements = screen.getAllByDisplayValue("Ford");
      expect(elements.length).toBe(1);
      expect(() =>
        screen.getAllByDisplayValue("Non-existent Text"),
      ).toThrowError();
      expect(screen.getAllByDisplayValue(/F/).length).toBe(2);
    });

    /**
     * Test Case: getByAltText - Image alt attribute queries
     *
     * Demonstrates finding img elements by their alt text
     * Important for accessibility testing and image identification
     */
    it("getByAltText", () => {
      render(<Counter />);

      // Find image by alt text
      expect(screen.getByAltText("my image-1")).toBeInTheDocument();

      // Non-existent alt text should throw error
      expect(() => screen.getByAltText("Non-existent Text")).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByAltText(/my image/)).toThrowError();
    });

    /**
     * Test Case: getAllByAltText - Multiple images by alt text
     */
    it("getAllByAltText", () => {
      render(<Counter />);

      const elements = screen.getAllByAltText("my image-1");
      expect(elements.length).toBe(1);
      expect(() => screen.getAllByAltText("Non-existent Text")).toThrowError();
      expect(screen.getAllByAltText(/my image/).length).toBe(2);
    });

    /**
     * Test Case: getByTitle - Title attribute queries
     *
     * Demonstrates finding elements by their title attribute
     * Useful for elements with tooltips or additional descriptions
     */
    it("getByTitle", () => {
      render(<Counter />);

      // Find element by title attribute
      expect(screen.getByTitle("title-car-make")).toBeInTheDocument();

      // Non-existent title should throw error
      expect(() => screen.getByTitle("Non-existent Text")).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByTitle(/title-car/)).toThrowError();
    });

    /**
     * Test Case: getAllByTitle - Multiple elements by title
     */
    it("getAllByTitle", () => {
      render(<Counter />);

      const elements = screen.getAllByTitle("title-car-make");
      expect(elements.length).toBe(1);
      expect(() => screen.getAllByTitle("Non-existent Text")).toThrowError();
      expect(screen.getAllByTitle(/title-car/).length).toBe(2);
    });

    /**
     * Test Case: getByTestId - Data attribute queries
     *
     * Demonstrates finding elements by data-testid attributes
     * Useful for elements that lack semantic or text-based identifiers
     * Should be used sparingly - prefer semantic queries when possible
     */
    it("getByTestId", () => {
      render(<Counter />);

      // Find element by test ID
      expect(screen.getByTestId("car-id-make")).toBeInTheDocument();

      // Non-existent test ID should throw error
      expect(() => screen.getByTestId("Non-existent Text")).toThrowError();

      // Regex pattern that doesn't match exactly should throw error
      expect(() => screen.getByTestId(/car-id/)).toThrowError();
    });

    /**
     * Test Case: getAllByTestId - Multiple elements by test ID
     */
    it("getAllByTestId", () => {
      render(<Counter />);

      const elements = screen.getAllByTestId("car-id-make");
      expect(elements.length).toBe(1);
      expect(() => screen.getAllByTestId("Non-existent Text")).toThrowError();
      expect(screen.getAllByTestId(/car-id/).length).toBe(2);
    });
  });
});
