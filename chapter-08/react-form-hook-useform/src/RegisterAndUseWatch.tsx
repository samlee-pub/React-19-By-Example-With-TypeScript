/**
 * This component demonstrates how to register fields and use useWatch hook
 * from react-hook-form to monitor their values.
 * The component watches the values of these fields and displays them below the form in real-time.
 * It uses useWatch for better performance in isolated component re-renders.
 * The component also demonstrates how to watch multiple fields at once.
 */
import { useForm, useWatch } from "react-hook-form";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}
export function RegisterAndUseWatch() {
  const { register, control } = useForm<FormData>();

  // Watch individual fields
  // useWatch is more performant for isolated component re-renders
  const firstName = useWatch({
    control,
    name: "firstName", // watch single field
  });
  // Watch multiple fields
  const watchedFields = useWatch({
    control,
    name: ["lastName", "email"], // watch multiple fields
  });

  return (
    <div>
      <h3>Register Fields And useWatch Hook</h3>
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
