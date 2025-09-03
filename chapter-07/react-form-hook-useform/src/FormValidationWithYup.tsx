/**
 * This example demonstrates how to use Yup for form validation with react-hook-form.
 * The useForm hook is used to manage form state and registration of form fields.
 * The yupResolver function is used to resolve the validation schema with Yup.
 * The validation schema defines the rules for each form field, such as required, min, max, and email.
 * The formState object is used to display validation errors and submission status.
 */
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  userName: string;
  password: string;
  email: string;
  age: number;
};

// Define validation schema with Yup
const schema = yup.object().shape({
  userName: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "You must be at least 18 years old")
    .max(65, "You must be at most 65 years old"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
});
export function FormValidationWithYup() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // Watch individual fields
  const userName = watch("userName");
  const password = watch("password");
  const email = watch("email");
  const age = watch("age");

  return (
    <div>
      <h3>Form Validation With Yup</h3>
      <form className="my-form" noValidate>
        <input
          {...register("userName")}
          placeholder="User Name (at least 4 characters)"
          className="my-input same-width-input"
        />
        {errors.userName && (
          <div>
            <span className="error">{errors.userName.message}</span>
          </div>
        )}
        <input
          {...register("password")}
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
          {...register("email")}
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
          {...register("age")}
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
