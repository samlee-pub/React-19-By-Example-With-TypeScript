/**
 * A versatile React component that demonstrates various UI elements and state management.
 * Features include:
 * - Counter with increment/decrement functionality
 * - Radio button group for language selection
 * - Form inputs for car details
 * - Image elements with accessibility features
 */
import React from "react";

export function Counter({ name = "Guest" }: { name?: string }) {
  // State to manage the counter value
  const [count, setCount] = React.useState(0);

  /**
   * Updates the counter state by a specified amount
   * Uses functional update to ensure correct state based on previous value
   *
   * @param {number} amount - The amount to add/subtract from current count
   */
  const handleCountUpdate = (amount: number) => {
    setCount((prevState) => prevState + amount);
  };

  return (
    <div>
      {/* User Welcome Section */}
      <h1>Welcome, {name}!</h1>

      {/* Counter Management Section */}
      <h3 style={{ marginBottom: "0.5rem" }}>Manage Counter State</h3>
      <div>
        Count: <b data-testid="count-id">{count}</b>
      </div>

      {/* Counter Control Buttons */}
      <div style={{ marginTop: "1rem" }}>
        {/* Primary counter controls - visible by default */}
        <button onClick={() => handleCountUpdate(1)}>Count ++</button>
        <button
          onClick={() => handleCountUpdate(-1)}
          style={{ marginLeft: "2rem" }}
        >
          Count --
        </button>
      </div>

      {/* Secondary counter controls - hidden by default */}
      <div style={{ marginTop: "1rem" }} hidden>
        <button onClick={() => handleCountUpdate(2)}>Count +2</button>
        <button
          onClick={() => handleCountUpdate(-2)}
          style={{ marginLeft: "2rem" }}
        >
          Count -2
        </button>
      </div>

      {/* Language Selection Section - Radio Button Group */}
      <h3 style={{ marginBottom: "0.5rem" }}>Script Language</h3>
      <div>
        {/* Radio button options for programming languages */}
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html" style={{ marginRight: "1rem" }}>
          HTML
        </label>

        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css" style={{ marginRight: "1rem" }}>
          CSS
        </label>

        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript" style={{ marginRight: "1rem" }}>
          JavaScript
        </label>

        <input type="radio" id="html5" name="fav_language" value="HTML5" />
        <label htmlFor="html5">HTML5</label>
      </div>

      {/* Car Information Section - Form Inputs */}
      <h3 style={{ marginBottom: "0.5rem" }}>Car</h3>

      {/* Car Make Input */}
      <div title="title-car-make" data-testid="car-id-make">
        <label htmlFor="make" style={{ marginRight: "0.5rem" }}>
          Make :
        </label>
        <input type="text" id="make" placeholder="Make" defaultValue="Ford" />
      </div>

      {/* Car Model Input */}
      <div title="title-car-model" data-testid="car-id-model">
        <label htmlFor="model" style={{ marginRight: "0.5rem" }}>
          Model:
        </label>
        <input
          type="text"
          id="model"
          placeholder="Model"
          defaultValue="Fusion"
        />
      </div>

      {/* Image Section - Demonstrating image elements and accessibility */}
      <h3 style={{ marginBottom: "0.5rem" }}>Image</h3>

      {/* Simple Image Element */}
      <div>
        <label htmlFor="img1" style={{ marginRight: "0.5rem" }}>
          Image 1:
        </label>
        <img alt="my image-1" id="img1" />
      </div>

      {/* Image with Image Map for clickable areas */}
      <div>
        <label htmlFor="img2" style={{ marginRight: "0.5rem" }}>
          Image 2:
        </label>
        <img alt="my image-2" id="img2" useMap="#myimagemap" />

        {/* Image map defining clickable areas */}
        <map name="myimagemap">
          <area shape="circle" coords="60,30,3" alt="area-1" />
          <area shape="circle" coords="90,30,6" alt="area-2" />
          <area shape="circle" coords="120,30,9" alt="area-3" />
        </map>
      </div>
    </div>
  );
}
