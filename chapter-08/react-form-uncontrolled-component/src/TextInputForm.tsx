/**
 * This component implements an uncontrolled text input form.
 * It allows users to input text and displays the current value in real-time.
 * The component uses ref to access the input value when needed.
 */
import { useRef } from "react";

export function TextInputForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  function handleInputChange(): void {
    if (labelRef.current) {
      labelRef.current.innerText = inputRef.current!.value;
    }
  }

  return (
    <div>
      <h3>Uncontrolled Text Input</h3>

      <input
        type="text"
        ref={inputRef}
        defaultValue="Initial value"
        onChange={handleInputChange}
        placeholder="Type something..."
        className="my-input same-width-input"
      />

      <div className="my-box-border-1 text-left same-width-div">
        Current value:
        <span className="fg-blue" ref={labelRef}></span>
      </div>
    </div>
  );
}
