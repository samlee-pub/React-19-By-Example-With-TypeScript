/**
 * This component implements a controlled checkbox form.
 * It allows users to agree to terms and conditions by checking a checkbox.
 * The component tracks the checked state and displays a message indicating whether the checkbox is checked or not.
 */
import { useState } from "react";

export function CheckBoxForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <h3>Controlled Checkbox</h3>
      <label className="my-checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="my-checkbox"
        />
        I agree to the terms and conditions
      </label>
      <div className="my-box-border-1 fg-blue">
        Checkbox is: {isChecked ? "Checked" : "Unchecked"}
      </div>
    </div>
  );
}
