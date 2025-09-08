/**
 * A React component that demonstrates how to perform a POST request using the Axios library.
 * It allows users to add new user objects to a public API and displays the updated list of users.
 * The component uses the useForm hook from the react-hook-form library to handle form validation and submission.
 * It allows users to input a username and email, which are then sent to the API as a new user object.
 * The list of users is updated after a successful POST request.
 * If there is an error during the POST request, an error message is displayed.
 */
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

/**
 * Type definition for a User object to be sent to and received from the API.
 */
type User = {
  id?: string;
  name: string;
  data: {
    password: string;
    email: string;
  };
};

/**
 * A React component that allows users to add new user objects via a
 * POST request and displays the updated list of users.
 * If there is an error fetching the data, it displays an error message.
 */
export function AxiosPost() {
  // State to hold the input value
  const [userList, setUserList] = useState([] as User[]);
  const [fetchError, setFetchError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: "onBlur",
  });

  const onValid = (data: User) => {
    addUser(data);
  };

  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onValid)(e);
  };

  /**
   * Adds a new user by sending a POST request to the API.
   * On success, updates the userList state with the new user.
   * On failure, updates the fetchError state with the error message.
   * @param data - The user data to be sent in the POST request.
   */
  function addUser(data: User): void {
    axios
      .post("https://api.restful-api.dev/objects", data)
      .then((response) => {
        if (response !== null && response.status !== 200) {
          throw new Error("Network response error: " + response.statusText);
        }
        return response.data as User;
      })
      .then((json) => setUserList((users) => [...users, json]))
      .catch((error: Error) => setFetchError(error.message));
  }

  /**
   * Inline style for labels to ensure consistent width.
   */
  const labelStyle = {
    display: "inline-block",
    width: "6rem",
  };

  /**
   * The component's rendered output.
   * It includes a form for adding new users and displays the list of users or an error message.
   * The form uses react-hook-form for validation and submission handling.
   * The user list is updated after a successful POST request.
   * Handles errors gracefully by displaying an error message if the fetch fails.
   */
  return (
    <div>
      <h3>Basic Post Request</h3>

      <div className="my-box-border-1 same-width-div">
        <h3>Axios Post - Add New User</h3>
        <div>
          <b>Server:</b>
          <span className="fg-blue"> https://api.restful-api.dev/objects</span>
        </div>
        <div>
          Method: <b className="fg-blue">POST</b>
        </div>

        <form onSubmit={onSubmit} className="my-form" noValidate>
          <input
            {...register("name", { required: "Username is required" })}
            placeholder="Username"
            className="my-input same-width-input"
          />
          {errors.name && (
            <div>
              <span className="error">{errors.name.message}</span>
            </div>
          )}
          <input
            {...register("data.password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="my-input same-width-input"
          />
          {errors.data?.password && (
            <div>
              <span className="error">{errors.data?.password.message}</span>
            </div>
          )}
          <input
            {...register("data.email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="my-input same-width-input"
            type="email"
            autoComplete="email"
          />
          {errors.data?.email && (
            <div>
              <span className="error">{errors.data.email.message}</span>
            </div>
          )}
          <button type="submit" className="my-button same-width-input">
            Add User
          </button>
        </form>
        {fetchError && (
          <div className="my-box-border-1 same-width-div">
            <h3>New User List</h3>
            <div>
              Error:<b className="fg-red"> {fetchError}</b>
            </div>
          </div>
        )}
        {!fetchError && userList.length > 0 && (
          <div className="my-box-border-1 same-width-div">
            <h3>New User List</h3>
            {userList.map((user) => (
              <div
                key={user.id || Date.now().toString()}
                className="text-left same-width-div"
              >
                <div>
                  <b style={labelStyle}>ID:</b> {user.id}
                </div>
                <div>
                  <b style={labelStyle}>Username:</b> {user.name}
                </div>
                <div>
                  <b style={labelStyle}>Password:</b> {user.data.password}
                </div>
                <div>
                  <b style={labelStyle}>Email:</b> {user.data.email}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
