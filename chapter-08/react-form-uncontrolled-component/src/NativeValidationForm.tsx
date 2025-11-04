/**
 * This component demonstrates native form validation using React.
 * It uses HTML5 form validation attributes (required, minLength, etc.)
 * and the checkValidity() method to validate the form.
 * If the form is valid, it displays the form data in an alert.
 */
import { useRef } from "react";

export function NativeValidationForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Form will automatically validate based on HTML5 attributes
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity()) {
      const formData = {
        name: nameRef.current?.value ?? "",
        email: emailRef.current?.value ?? "",
        password: passwordRef.current?.value ?? "",
      };
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <h3>Native Validation Form</h3>
      <form onSubmit={handleSubmit} className="my-form">
        <input
          type="text"
          ref={nameRef}
          placeholder="Name"
          required
          className="my-input same-width-input"
        />
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
          className="my-input same-width-input"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
          minLength={6}
          className="my-input same-width-input"
        />
        <button type="submit" className="my-button same-width-input">
          Submit
        </button>
      </form>
    </div>
  );
}
