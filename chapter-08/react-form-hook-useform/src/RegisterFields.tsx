/**
 * This component implements a basic form using React Hook Form.
 * It demonstrates input registration and real-time display of form data.
 */
import { useRef } from "react";
import { useForm } from "react-hook-form";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}
export function RegisterFields() {
  const { register } = useForm<FormData>();

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
      <h3>Register Fields</h3>
      <form className="my-form" noValidate>
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="my-input same-width-input"
          onChange={handleInputChange}
        />
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="my-input same-width-input"
          onChange={handleInputChange}
        />
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="my-input same-width-input"
          onChange={handleInputChange}
        />
      </form>
      <div className="my-box-border-1">
        <div>
          <b>Form Data:</b>
        </div>
        <div className="text-left">
          <div>
            FirstName: <span className="fg-blue" ref={firstNameLabelRef}></span>
          </div>
          <div>
            LastName: <span className="fg-blue" ref={lastNameLabelRef}></span>
          </div>
          <div>
            Email: <span className="fg-blue" ref={emailLabelRef}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
