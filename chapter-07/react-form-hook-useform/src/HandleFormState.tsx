/**
 * This example demonstrates how to handle form state using react-hook-form.
 * The handleSubmit function is used to manage form submission with custom
 * handlers for valid and invalid data.
 * The formState object is used to display validation errors and submission
 * status such as errors, isDirty, isSubmitting, isValid, and touchedFields.
 * The submit button is disabled based on the form state to prevent invalid submissions.
 */
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function HandleFormState() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isValid, touchedFields },
  } = useForm<FormData>({
    mode: "onChange", // Validate on change for immediate feedback
  });

  const onValid = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(JSON.stringify(data, null, 2));
  };
  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onValid)(e);
  };
  return (
    <div>
      <h3>Form State and Submission Status</h3>
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

        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className="my-button same-width-input"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        <div className="form-state-info">
          <div>
            <b>Form State:</b>
          </div>
          <ul>
            <li>Dirty: {isDirty ? "Yes" : "No"}</li>
            <li>Valid: {isValid ? "Yes" : "No"}</li>
            <li>Submitting: {isSubmitting ? "Yes" : "No"}</li>
            <li>
              Touched Fields: {Object.keys(touchedFields).join(", ") || "None"}
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
