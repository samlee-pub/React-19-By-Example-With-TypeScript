/**
 * This is a React component that allows users to input their username, email, and country,
 * and submits the data to the server.
 * It uses ref to access the form element and the FormData API to collect the form data.
 * The form data is then converted to a plain object and displayed in an alert.
 */
import { useRef } from "react";

export function FormDataAPI() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      alert(JSON.stringify(data, null, 2));
    }
  };

  return (
    <div>
      <h3>FormData API Example</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="my-form">
        <input
          name="username"
          placeholder="Username"
          className="my-input same-width-input"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="my-input same-width-input"
        />
        <select name="country" className="my-select same-width-input">
          <option value="">Select country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
        </select>
        <button type="submit" className="my-button same-width-input">
          Submit
        </button>
      </form>
    </div>
  );
}
