/**
 * This component implements a controlled select dropdown form.
 * It allows users to select an option from a dropdown list.
 * The component tracks the selected option and updates it as the user selects a different option.
 */
import { useState } from "react";

export function SelectForm() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div>
      <h3>Controlled Select Dropdown</h3>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="my-select same-width-input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="my-box-border-1 fg-blue same-width-div">
        Selected: {selectedOption || "None"}
      </div>
    </div>
  );
}
