/**
 * This component implements a controlled text input form.
 * It allows users to input text and displays the current value below the input field.
 * The component tracks the input value and updates it as the user types.
 */
import { useState } from "react";

export function TextInputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h3>Controlled Text Input</h3>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        className="my-input same-width-input"
      />

      <div className="my-box-border-1 text-left same-width-div">
        Current value: <b className="fg-blue">{inputValue}</b>
      </div>
    </div>
  );
}
