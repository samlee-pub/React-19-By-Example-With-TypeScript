/**
 * A component that demonstrates how to use react-hook-form to register and watch form fields.
 * The component watches the values of these fields and displays them below the form in real-time.
 * It also demonstrates how to watch multiple fields at once.
 */
import { useForm } from "react-hook-form";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}
export function RegisterAndWatchFields() {
  const { register, watch } = useForm<FormData>();

  // Watch individual fields
  const firstName = watch("firstName");
  // Watch multiple fields
  const watchedFields = watch(["lastName", "email"]);

  return (
    <div>
      <h3>Register And Watch Fields</h3>
      <form className="my-form" noValidate>
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="my-input same-width-input"
        />
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
      </form>
      <div className="my-box-border-1">
        <div>
          <b>Form Data:</b>
        </div>
        <div className="text-left">
          <div>
            FirstName: <span className="fg-blue">{firstName}</span>
          </div>
          <div>
            LastName: <span className="fg-blue">{watchedFields[0]}</span>
          </div>
          <div>
            Email: <span className="fg-blue">{watchedFields[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
