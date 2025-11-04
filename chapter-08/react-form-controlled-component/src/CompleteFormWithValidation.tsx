/**
 * This component implements a complete controlled form with validation.
 * It includes fields for username, email, password, and a checkbox for agreeing to terms.
 * The form is validated on submission, and errors are displayed next to invalid fields.
 */
import { useState } from "react";

interface UserForm {
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean | string;
}
type ErrorForm = Partial<UserForm>;
export function CompleteFormWithValidation() {
  const [formData, setFormData] = useState<UserForm>({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<ErrorForm>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof UserForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<UserForm> = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      alert(
        "Form submitted successfully!\n" + JSON.stringify(formData, null, 2),
      );
      // Here you would typically send data to an API
    }
  };

  return (
    <div>
      <h3>Complete Controlled Form</h3>
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className={`my-input ${errors.username ? "error" : ""} same-width-input`}
          />
          {errors.username && (
            <span className="error-text">{errors.username}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`my-input ${errors.email ? "error" : ""} same-width-input`}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`my-input ${errors.password ? "error" : ""} same-width-input`}
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <div className="form-group same-width-div">
          <label className="my-checkbox-label">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms as boolean}
              onChange={handleChange}
              className="my-checkbox"
            />
            I agree to terms and conditions
          </label>
          {errors.agreeToTerms && (
            <span className="error-text">{errors.agreeToTerms}</span>
          )}
        </div>

        <button type="submit" className="my-button same-width-div">
          Submit
        </button>
      </form>

      <div className="my-box-border-1 text-left">
        <h4>Form Data Preview:</h4>

        <div className="text-left">
          <div>
            username: <b className="fg-blue">{formData.username}</b>
          </div>
          <div>
            email: <b className="fg-blue">{formData.email}</b>
          </div>
          <div>
            password: <b className="fg-blue">{formData.password}</b>
          </div>
          <div>
            agreeToTerms:{" "}
            <b className="fg-blue">
              {formData.agreeToTerms ? "Agreed" : "Not Agreed"}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
