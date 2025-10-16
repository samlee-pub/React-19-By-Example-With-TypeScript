/**
 * Tests for the Welcome component to verify:
 * - Proper rendering with default and custom props
 * - Correct text content based on name prop
 * - Presence of interactive elements
 */

import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Welcome } from "../../components/Welcome";

describe("Basic Component Test", () => {
  /**
   * Cleanup after each test case
   * Ensures a clean DOM state for subsequent tests
   */
  afterEach(() => {
    cleanup();
  });

  /**
   * Verifies that the Welcome component renders correctly
   * with the default name prop value ("Guest")
   *
   */
  it("renders with default name 'Guest'", () => {
    // Render component without props (uses default)
    render(<Welcome />);

    // Assert that the welcome message contains default name
    expect(screen.getByText("Welcome, Guest!")).toBeInTheDocument();
  });

  /**
   * Verifies that the Welcome component correctly displays
   * a custom name when provided via props
   */
  it("renders with a provided name", () => {
    // Render component with custom name prop
    render(<Welcome name="John" />);

    // Assert that the welcome message contains the custom name
    expect(screen.getByText("Welcome, John!")).toBeInTheDocument();
  });

  /**
   * Verifies that the button element is rendered
   * regardless of the name prop value
   */
  it("renders the button", () => {
    // Render component
    render(<Welcome />);

    // Assert that a button role element exists in the document
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
