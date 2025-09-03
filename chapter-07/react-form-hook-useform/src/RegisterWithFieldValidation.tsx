/**
 * This component demonstrates how to register fields with validation using react-hook-form.
 * The fields are validated based on specified rules, such as required, minimum length, maximum length, and custom validation functions.
 * Specifically, the password field has multiple validation rules to ensure it contains
 * at least one number, one special character, one uppercase letter,
 * one lowercase letter, and is at least 8 characters long, and this is done with custom validation functions.
 * While other fields like userName, email, and age are validated using built-in rules.
 */
import { useForm } from "react-hook-form";
type FormData = {
  userName: string;
  password: string;
  email: string;
  age: number;
};
export function RegisterWithFieldValidation() {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  // Watch individual fields
  const userName = watch("userName");
  const password = watch("password");
  const email = watch("email");
  const age = watch("age");

  // Check individual password validation rules
  const hasNumber = (passwordValue: string) =>
    /[0-9]/.test(passwordValue) || "Password must contain at least one number";
  const hasSpecialChar = (passwordValue: string) =>
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(passwordValue) ||
    "Password must contain at least one special character";
  const hasUpperCase = (passwordValue: string) =>
    /[A-Z]/.test(passwordValue) ||
    "Password must contain at least one uppercase letter";
  const hasLowerCase = (passwordValue: string) =>
    /[a-z]/.test(passwordValue) ||
    "Password must contain at least one lowercase letter";
  const hasMinLength = (passwordValue: string) =>
    passwordValue.length >= 8 || "Password must be at least 8 characters";

  return (
    <div>
      <h3>Register With Field Validation</h3>
      <form className="my-form" noValidate>
        <input
          {...register("userName", {
            required: "You must enter a name",
            minLength: {
              value: 4,
              message: "Name must be at least 4 characters",
            },
            maxLength: {
              value: 20,
              message: "Name must be at most 20 characters",
            },
            onChange: () => {
              void trigger("userName");
            },
          })}
          placeholder="User Name (4-20 characters)"
          className="my-input same-width-input"
        />
        {errors.userName && (
          <div>
            <span className="error">{errors.userName.message}</span>
          </div>
        )}
        <input
          {...register("password", {
            required: "You must enter a password",
            validate: {
              hasNumber,
              hasSpecialChar,
              hasUpperCase,
              hasLowerCase,
              hasMinLength,
            },
          })}
          placeholder="Password"
          type="password"
          className="my-input same-width-input"
        />
        {errors.password && (
          <div>
            <span className="error">{errors.password.message}</span>
          </div>
        )}
        <input
          {...register("email", {
            required: "You must enter an email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
          type="email"
          className="my-input same-width-input"
        />
        {errors.email && (
          <div>
            <span className="error">{errors.email.message}</span>
          </div>
        )}
        <input
          {...register("age", {
            required: "You must enter an age",
            min: {
              value: 18,
              message: "You must be at least 18 years old",
            },
            max: {
              value: 65,
              message: "You must be at most 65 years old",
            },
          })}
          placeholder="Age (18-65)"
          type="number"
          className="my-input same-width-input"
        />
        {errors.age && (
          <div>
            <span className="error">{errors.age.message}</span>
          </div>
        )}
      </form>
      <div className="my-box-border-1">
        <div>
          <b>Form Data:</b>
        </div>
        <div className="text-left">
          <div>
            UserName: <span className="fg-blue">{userName}</span>
          </div>
          <div>
            Password: <span className="fg-blue">{password}</span>
          </div>
          <div>
            Email: <span className="fg-blue">{email}</span>
          </div>
          <div>
            Age: <span className="fg-blue">{age}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
