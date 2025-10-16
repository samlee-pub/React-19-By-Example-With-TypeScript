/**
 * Comprehensive tests demonstrating user interaction testing using @testing-library/user-event.
 * User-event provides more realistic simulation of user behavior compared to fireEvent,
 * including proper event bubbling, keyboard interactions, and closer-to-real browser behavior.
 */
import { describe, it, expect, afterEach, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "../../components/Counter";
import { ToggleMessage } from "../../components/ToggleMessage";

describe("user interactions", () => {
  /**
   * Test Sub-Suite: userEvent API
   *
   * Tests for simulating realistic user interactions using user-event:
   * - More natural user interaction simulation
   * - Proper event sequencing and bubbling
   * - Async nature requiring await for all interactions
   * - Closer representation of actual user behavior
   */
  describe("userEvent", () => {
    /**
     * Cleanup after each test to ensure test isolation
     * Removes rendered components from the DOM
     */
    afterEach(() => {
      cleanup();
    });

    /**
     * Test Case: Basic Click Event with user-event
     *
     * Demonstrates fundamental click event testing with user-event:
     * - Setting up user instance with userEvent.setup()
     * - All user interactions are asynchronous and require await
     * - More realistic click simulation including pointer events
     */
    it("basic click event test", async () => {
      // Set up user instance - required for user-event v14+
      const user = userEvent.setup();

      // Create a mock function to track click events
      const handleClick = vi.fn();

      // Render a button with the mock click handler
      render(<button onClick={handleClick}>Save</button>);

      // Get the button element by text content
      const button = screen.getByText("Save");
      expect(button).toBeInTheDocument();

      // Simulate user clicking the button with user-event
      // Note: user.click() is async and requires await
      await user.click(button);

      // Verify the click handler was called exactly once
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    /**
     * Test Case: Basic Typing Simulation
     *
     * Demonstrates realistic typing simulation with user.type():
     * - Simulates actual keyboard events for each character
     * - Includes keyDown, keyPress, and keyUp events
     * - More realistic than fireEvent.change for text input
     */
    it("basic change event test", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      // Render an input element with change handler
      render(<input id="username" onClick={handleChange} />);

      // Get the input element by its role
      const element = screen.getByRole("textbox");
      expect(element).toBeInTheDocument();

      // Simulate user typing character by character
      // This fires individual key events for 'j', 'o', 'h', 'n', etc.
      await user.type(element, "john_doe");

      // Verify the input displays the typed value
      expect(element).toHaveDisplayValue("john_doe");
    });

    /**
     * Test Case: Counter Component with User Interactions
     *
     * Demonstrates complex state management testing with user-event:
     * - More realistic button click simulations
     * - Testing both visible and hidden elements
     * - Sequential user interactions with proper async handling
     */
    it("handle counter update", async () => {
      const user = userEvent.setup();
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

      // Test increment functionality with user-event
      await user.click(plusOne);
      expect(count).toHaveTextContent("1");

      // Test hidden decrement functionality
      // Note: user-event can interact with hidden elements in tests
      await user.click(minusTwo);
      await user.click(minusTwo);
      expect(count).toHaveTextContent("-3");
    });

    /**
     * Test Case: UI Visibility Toggle with User Interactions
     *
     * Demonstrates conditional rendering testing with realistic user interactions:
     * - Toggle functionality with proper user click simulation
     * - Dynamic UI updates based on user actions
     * - Using queryByTestId for conditional element testing
     */
    it("handle ui update", async () => {
      const user = userEvent.setup();
      render(<ToggleMessage />);

      // Get the toggle button using regex for flexible text matching
      const msgbutton = screen.getByRole("button", { name: /Message/ });

      // Use queryByTestId for conditional element (returns null if not found)
      const message = screen.queryByTestId("message-id");

      // Verify initial state - button shows "Show" and message is hidden
      expect(msgbutton).toBeInTheDocument();
      expect(msgbutton).toHaveTextContent("Show Message");
      expect(message).not.toBeInTheDocument();

      // First click - show the message with realistic user click
      await user.click(msgbutton);
      const message1 = screen.getByTestId("message-id");
      expect(msgbutton).toHaveTextContent("Hide Message");
      expect(message1).toBeInTheDocument();
      expect(message1).toHaveTextContent("Hello, Message!");

      // Second click - hide the message
      await user.click(msgbutton);
      const message2 = screen.queryByTestId("message-id");
      expect(msgbutton).toHaveTextContent("Show Message");
      expect(message2).not.toBeInTheDocument();
    });

    /**
     * Test Case: Asynchronous State Update with User Interactions
     *
     * Demonstrates testing async operations with realistic user interactions:
     * - Combining user-event with waitFor for async state updates
     * - Testing loading states and final states
     * - Mock API call simulation with proper user interaction
     */
    it("handle async update", async () => {
      const user = userEvent.setup();
      render(<ToggleMessage />);

      // Get the user fetch button and user message display
      const userbutton = screen.getByRole("button", { name: "Get User" });
      const message = screen.queryByTestId("user-id");

      // Verify initial state
      expect(userbutton).toBeInTheDocument();
      expect(message).toBeInTheDocument();
      expect(message).toHaveTextContent("Hello, Guest!");

      // Trigger the async user fetch with realistic user click
      await user.click(userbutton);

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
