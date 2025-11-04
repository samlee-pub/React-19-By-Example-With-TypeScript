/**
 * This component implements a controlled textarea form.
 * It allows users to input multiline text and displays the current value below the textarea.
 * The component tracks the input value and updates it as the user types.
 */
import { useState } from "react";

export function TextAreaForm() {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h3>Controlled Textarea</h3>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        rows={4}
        className="my-textarea same-width-input"
      />
      <div className="my-box-border-1 fg-blue same-width-div">
        Character count: {message.length}
      </div>
    </div>
  );
}
