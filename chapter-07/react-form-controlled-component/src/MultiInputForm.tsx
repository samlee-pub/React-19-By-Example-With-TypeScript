/**
 * This component implements a controlled form with multiple input fields.
 * It allows users to input their first name, last name, and email.
 * The component tracks the input values and updates them as the user types.
 */
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export function MultiInputForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Multiple Controlled Inputs</h3>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="my-input same-width-input"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="my-input same-width-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="my-input same-width-input"
        />
      </div>
      <div className="my-box-border-1 text-left">
        <div>
          firstName: <b className="fg-blue">{formData.firstName}</b>
        </div>
        <div>
          lastName: <b className="fg-blue">{formData.lastName}</b>
        </div>
        <div>
          email: <b className="fg-blue">{formData.email}</b>
        </div>
      </div>
    </div>
  );
}
