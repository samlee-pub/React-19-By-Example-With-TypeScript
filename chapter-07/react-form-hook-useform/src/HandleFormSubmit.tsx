/**
 * This example demonstrates how to handle form submission using react-hook-form.
 * It uses the useForm hook to manage form state, validation and submission.
 * The handleSubmit function is used to manage form submission with custom
 * handlers for valid and invalid data.
 * The onValid function is called when the form is submitted with valid data.
 * The onErrors function is called when there are validation errors.
 */
import { useForm, type FieldErrors } from "react-hook-form";
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};
export function HandleFormSubmit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onValid = (data: FormData) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  const onErrors = (errors: FieldErrors<FormData>) => {
    let message = "";
    Object.entries(errors).forEach(([key, value]) => {
      message += `${key}: ${value.message}\n`;
    });
    alert(message);
  };

  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onValid, onErrors)(e);
  };

  return (
    <div>
      <h3>Basic React Hook Form</h3>
      <form onSubmit={onSubmit} className="my-form" noValidate>
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
          className="my-input same-width-input"
        />
        {errors.firstName && (
          <div>
            <span className="error">{errors.firstName.message}</span>
          </div>
        )}
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="my-input same-width-input"
        />
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="my-input same-width-input"
        />
        <button type="submit" className="my-button same-width-input">
          Submit
        </button>
      </form>
    </div>
  );
}
