/**
 * This component implements an uncontrolled form with multiple input fields.
 * It allows users to input their first name, last name, and email.
 * The component tracks the input values and updates them as the user types.
 */
import React, { useRef } from "react";

export function MultiInputForm() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const firstNameLabelRef = useRef<HTMLLabelElement>(null);
  const lastNameLabelRef = useRef<HTMLLabelElement>(null);
  const emailLabelRef = useRef<HTMLLabelElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "firstName" && firstNameLabelRef.current) {
      firstNameLabelRef.current.innerText = value;
    } else if (name === "lastName" && lastNameLabelRef.current) {
      lastNameLabelRef.current.innerText = value;
    } else if (name === "email" && emailLabelRef.current) {
      emailLabelRef.current.innerText = value;
    } else {
      console.log("Unknown input field");
    }
  };

  return (
    <div>
      <h3>Multiple Uncontrolled Inputs</h3>
      <form className="my-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            ref={firstNameRef}
            onChange={handleInputChange}
            defaultValue=""
            placeholder="First Name"
            className="my-input same-width-input"
          />
          <input
            type="text"
            ref={lastNameRef}
            name="lastName"
            onChange={handleInputChange}
            defaultValue=""
            placeholder="Last Name"
            className="my-input same-width-input"
          />
          <input
            type="email"
            ref={emailRef}
            name="email"
            defaultValue=""
            onChange={handleInputChange}
            placeholder="Email"
            className="my-input same-width-input"
          />
        </div>
      </form>

      <div className="my-box-border-1 text-left">
        <div>
          firstName: <span className="fg-blue" ref={firstNameLabelRef}></span>
        </div>
        <div>
          lastName: <span className="fg-blue" ref={lastNameLabelRef}></span>
        </div>
        <div>
          email: <span className="fg-blue" ref={emailLabelRef}></span>
        </div>
      </div>
    </div>
  );
}
