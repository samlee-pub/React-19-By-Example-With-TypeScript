/**
 * This component implements a controlled radio button form.
 * It allows users to select a size from a group of radio buttons.
 * The component tracks the selected size and updates it as the user selects a different size.
 */
import { useState } from "react";

export function RadioForm() {
  const [selectedSize, setSelectedSize] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const sizes = [
    { id: "small", label: "Small" },
    { id: "medium", label: "Medium" },
    { id: "large", label: "Large" },
  ];

  return (
    <div>
      <h3>Controlled Radio Buttons</h3>
      <div className="radio-group">
        {sizes.map((size) => (
          <label key={size.id} className="my-radio-label">
            <input
              type="radio"
              value={size.id}
              checked={selectedSize === size.id}
              onChange={handleChange}
              className="my-radio"
            />
            {size.label}
          </label>
        ))}
      </div>
      <div className="my-box-border-1 fg-blue">
        Selected size: {selectedSize || "None"}
      </div>
    </div>
  );
}
