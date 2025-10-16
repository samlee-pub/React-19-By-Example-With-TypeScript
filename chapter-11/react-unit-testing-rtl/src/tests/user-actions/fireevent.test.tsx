/**
 * Comprehensive tests demonstrating user interaction testing using React Testing Library's fireEvent.
 * These tests cover various user events including clicks, changes, and asynchronous updates.
 */
import { describe, it, expect, afterEach, vi } from "vitest";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { Counter } from "../../components/Counter";
import { ToggleMessage } from "../../components/ToggleMessage";

describe("user interactions", () => {
  /**
   * Test Sub-Suite: fireEvent API
   *
   * Tests for simulating user interactions using fireEvent:
   * - Basic click and change events
   * - Complex component state updates
   * - Conditional rendering based on user actions
   * - Asynchronous state updates and waiting
   */
  describe("fireEvent", () => {
    /**
     * Cleanup after each test to ensure test isolation
     * Removes rendered components from the DOM
     */
    afterEach(() => {
      cleanup();
    });

    /**
     * Test Case: Basic Click Event
     *
     * Demonstrates fundamental click event testing:
     * - Creating a mock function with vi.fn()
     * - Rendering a simple button component
     * - Simulating click event with fireEvent.click()
     * - Verifying the mock function was called
     */
    it("basic click event test", () => {
      // Create a mock function to track click events
      const handleClick = vi.fn();

      // Render a button with the mock click handler
      render(<button onClick={handleClick}>Save</button>);

      // Get the button element by text content
      const button = screen.getByText("Save");
      expect(button).toBeInTheDocument();

      // Simulate user clicking the button
      fireEvent.click(button);

      // Verify the click handler was called exactly once
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    /**
     * Test Case: Basic Change Event
     *
     * Demonstrates input change event testing:
     * - Simulating user input in form fields
     * - Using fireEvent.change with value target
     * - Verifying the input value was updated
     */
    it("basic change event test", () => {
      // Create a mock function to track change events
      const handleChange = vi.fn();

      // Render an input element with change handler
      render(<input id="username" onClick={handleChange} />);

      // Get the input element by its role
      const element = screen.getByRole("textbox");
      expect(element).toBeInTheDocument();

      // Simulate user typing into the input field
      fireEvent.change(element, { target: { value: "john_doe" } });

      // Verify the input displays the new value
      expect(element).toHaveDisplayValue("john_doe");
    });

    /**
     * Test Case: Counter Component State Updates
     *
     * Demonstrates complex state management testing:
     * - Testing visible and hidden elements
     * - Multiple sequential user interactions
     * - State persistence across events
     * - Visibility assertions with toBeVisible()
     */
    it("handle counter update", () => {
      // Render the Counter component
      render(<Counter />);

      // Get visible increment button
      const plusOne = screen.getByRole("button", { name: "Count ++" });

      // Get hidden decrement button (requires hidden: true option)
      const minusTwo = screen.getByRole("button", {
        name: "Count -2",
        hidden: true,
      });

      // Get the count display element
      const count = screen.getByTestId("count-id");

      // Verify initial state
      expect(count).toHaveTextContent("0");
      expect(plusOne).toBeInTheDocument();
      expect(minusTwo).toBeInTheDocument();

      // Verify visibility states
      expect(plusOne).toBeVisible();
      expect(minusTwo).not.toBeVisible();

      // Test increment functionality
      fireEvent.click(plusOne);
      expect(count).toHaveTextContent("1");

      // Test hidden decrement functionality (still accessible in tests)
      fireEvent.click(minusTwo);
      fireEvent.click(minusTwo);
      expect(count).toHaveTextContent("-3");
    });

    /**
     * Test Case: UI Visibility Toggle
     *
     * Demonstrates conditional rendering testing:
     * - Testing element presence/absence with queryBy*
     * - Dynamic button text changes
     * - Toggle functionality verification
     * - Using queryByTestId for conditional elements
     */
    it("handle ui update", () => {
      // Render the ToggleMessage component
      render(<ToggleMessage />);

      // Get the toggle button using regex for flexible text matching
      const msgbutton = screen.getByRole("button", { name: /Message/ });

      // Use queryByTestId for conditional element (returns null if not found)
      const message = screen.queryByTestId("message-id");

      // Verify initial state - button shows "Show" and message is hidden
      expect(msgbutton).toBeInTheDocument();
      expect(msgbutton).toHaveTextContent("Show Message");
      expect(message).not.toBeInTheDocument();

      // First click - show the message
      fireEvent.click(msgbutton);
      const message1 = screen.getByTestId("message-id");
      expect(msgbutton).toHaveTextContent("Hide Message");
      expect(message1).toBeInTheDocument();
      expect(message1).toHaveTextContent("Hello, Message!");

      // Second click - hide the message
      fireEvent.click(msgbutton);
      const message2 = screen.queryByTestId("message-id");
      expect(msgbutton).toHaveTextContent("Show Message");
      expect(message2).not.toBeInTheDocument();
    });

    /**
     * Test Case: Asynchronous State Update
     *
     * Demonstrates testing async operations and state updates:
     * - Using waitFor for asynchronous changes
     * - Testing loading states and final states
     * - Custom timeout configuration
     * - Mock API call simulation verification
     */
    it("handle async update", async () => {
      // Render the ToggleMessage component
      render(<ToggleMessage />);

      // Get the user fetch button and user message display
      const userbutton = screen.getByRole("button", { name: "Get User" });
      const message = screen.queryByTestId("user-id");

      // Verify initial state
      expect(userbutton).toBeInTheDocument();
      expect(message).toBeInTheDocument();
      expect(message).toHaveTextContent("Hello, Guest!");

      // Trigger the async user fetch
      fireEvent.click(userbutton);

      // State immediately after click should still show initial value
      expect(message).toHaveTextContent("Hello, Guest!");

      // Wait for the async operation to complete and state to update
      await waitFor(
        () => {
          // Verify the text has changed from initial value
          expect(message).not.toHaveTextContent("Hello, Guest!");
        },
        { timeout: 2000 }, // Custom 2-second timeout
      );

      // Verify final state after async operation
      expect(message).toHaveTextContent("Hello, John Doe!");
    });
  });
});
