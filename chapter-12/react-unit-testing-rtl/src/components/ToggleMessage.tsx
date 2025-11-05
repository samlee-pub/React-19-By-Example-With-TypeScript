/**
 * A dynamic React component that demonstrates state management and asynchronous operations.
 * Features two independent sections:
 * - Toggle visibility of a message
 * - Simulate asynchronous user data fetching
 */
import React from "react";

export const ToggleMessage = () => {
  // State for controlling message visibility
  const [show, setShow] = React.useState(false);

  // State for storing user name, defaults to "Guest"
  const [user, setUser] = React.useState("Guest");

  /**
   * Simulates an asynchronous API call to fetch user data
   * Returns a promise that resolves with a user name after a 1-second delay
   */
  const getUser = async (): Promise<string> => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("John Doe");
      }, 1000);
    });
  };

  /**
   * Updates the user state by fetching user data asynchronously
   * Calls getUser() and updates the user state with the result
   */
  const updateUser = async (): Promise<void> => {
    const user = await getUser();
    setUser(user);
  };

  return (
    <>
      {/* Message Toggle Section */}
      <div>
        {/* Toggle button that switches between Show/Hide states*/}
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? "Hide" : "Show"} Message
        </button>

        {/* Conditionally rendered message with test identifier */}
        {show && <div data-testid="message-id">Hello, Message!</div>}
      </div>

      {/* User Data Section */}
      <div>
        {/*Button to trigger user data fetch */}
        <button onClick={() => void updateUser()}>Get User</button>

        {/* User display with test identifier */}
        <div data-testid="user-id">Hello, {user}!</div>
      </div>
    </>
  );
};
