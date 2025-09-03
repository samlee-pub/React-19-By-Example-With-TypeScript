/**
 * A component that demonstrates how to use react-hook-form to register and watch form fields with effects.
 * The component watches the values of these fields and displays them below the form in real-time.
 * It also demonstrates how to use useEffect to check if the password and confirm password fields match.
 * If they don't match, it sets a state variable to false.
 */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
type FormData = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};
export function RegisterAndWatchWithEffects() {
  const { register, watch } = useForm<FormData>();
  const [passwordMatch, setPasswordMatch] = useState(true);

  // Watch individual fields
  const username = watch("username");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const email = watch("email");

  // Check if passwords match
  useEffect(() => {
    if (password && confirmPassword) {
      setPasswordMatch(password === confirmPassword);
    }
  }, [password, confirmPassword]);

  return (
    <div>
      <h3>Register And Watch Fields With Effects</h3>
      <form className="my-form" noValidate>
        <input
          {...register("username")}
          placeholder="Username"
          className="my-input same-width-input"
        />
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="my-input same-width-input"
        />
        <input
          {...register("confirmPassword")}
          placeholder="Confirm Password"
          type="password"
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
            Username: <span className="fg-blue">{username}</span>
          </div>
          <div>
            Password: <span className="fg-blue">{password}</span>
          </div>
          <div>
            Confirm Password: <span className="fg-blue">{confirmPassword}</span>
          </div>
          <div>
            Email: <span className="fg-blue">{email}</span>
          </div>
          <div>
            {passwordMatch && (
              <span>
                Password Match: <b className="fg-green">Yes</b>
              </span>
            )}
            {!passwordMatch && (
              <span>
                Password Match: <b className="fg-red">No</b>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
