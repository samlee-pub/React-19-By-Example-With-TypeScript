/**
 * This suite focuses on scoped querying techniques for more precise element selection.
 */
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup, within } from "@testing-library/react";
import { Counter } from "../../components/Counter";

describe("queries", () => {
  /**
   * Test Sub-Suite: within Query Scoping
   *
   * Tests for the within utility which creates a scoped query instance
   * limited to a specific DOM element. This is useful for:
   * - Querying within specific components or sections
   * - Avoiding false positives from similar elements in different sections
   * - Creating more maintainable and precise tests
   * - Testing component isolation and encapsulation
   */
  describe("within", () => {
    /**
     * Cleanup after each test to ensure test isolation
     * Removes rendered components from the DOM
     */
    afterEach(() => {
      cleanup();
    });

    /**
     * Test Case: Querying Within Specific Elements
     *
     * Demonstrates scoped querying using the within utility:
     * - First, locate a container element using standard queries
     * - Then create a scoped query instance limited to that container
     * - Use the scoped instance to find elements only within that section
     * - This prevents matching similar elements in other parts of the component
     *
     * @example
     * // Without within - might match multiple elements globally
     * screen.getByText("Make :") // Could match anywhere in document
     *
     * // With within - only matches within specific section
     * within(carMakeSection).getByText("Make :") // Only in carMakeSection
     */
    it("querying within elements", () => {
      // Render the Counter component which contains multiple sections
      render(<Counter />);

      // First, locate the specific container element we want to scope our queries to
      // This element has a title attribute "title-car-make" that identifies the car make section
      const element = screen.getByTitle("title-car-make");

      // Verify the container element itself is visible
      expect(element).toBeVisible();

      /**
       * Create a scoped query instance limited to the car-make element
       * The within function returns an object with all the same query methods
       * as screen, but limited to searching within the specified element
       */
      const scopedQueries = within(element);

      // Find text content specifically within the car-make section
      // This ensures we're only matching "Make :" text within this specific section
      // and not accidentally matching similar text in other parts of the component
      expect(scopedQueries.getByText("Make :")).toBeInTheDocument();

      // Find all textbox roles within the scoped element
      // This will only count textboxes within the car-make section, not globally
      expect(scopedQueries.getAllByRole("textbox").length).toBe(1);
    });
  });
});
