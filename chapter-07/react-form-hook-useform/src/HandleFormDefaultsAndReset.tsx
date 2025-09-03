/**
 * This example demonstrates how to handle form defaults and reset using react-hook-form.
 * The defaultValues option is used to set default values for the form fields.
 * The handleSubmit function is used to manage form submission with custom
 * handlers for valid and invalid data.
 * The reset function is used to reset the form to its default values.
 */
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function HandleFormDefaultsAndReset() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      message: "Default message",
    },
  });

  const onValid = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onValid)(e);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div>
      <h3>Form with Default Values and Reset</h3>
      <form onSubmit={onSubmit} className="my-form" noValidate>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="my-input same-width-input"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
          className="my-input same-width-input"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          placeholder="Message"
          rows={4}
          className="my-textarea same-width-input"
        />
        {errors.message && <p className="error">{errors.message.message}</p>}

        <div className="button-group">
          <button type="submit" className="my-button">
            Submit
          </button>
          <button type="button" onClick={handleReset} className="my-button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
