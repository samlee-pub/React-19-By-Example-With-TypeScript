/**
 * This component is used to display the user data
 * loaded asynchronously using a Promise.
 * It uses the React.use hook to wait for the Promise
 * to resolve and then displays the user data.
 */
import { use } from "react";

export function AsyncDataUserComponent({
  userPromise,
}: {
  userPromise: Promise<string>;
}) {
  const user = use(userPromise);
  return (
    <h3>
      Hello, <b className="fg-red">{user}</b>
    </h3>
  );
}
