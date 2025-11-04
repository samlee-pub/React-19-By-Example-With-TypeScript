/**
 * A simple navigation component with nested routes using React Router.
 * This component sets up a navigation menu where the Home link is at
 * the root level, and the Users, Settings, and Profile links are
 * nested within a dashboard route, resulting in the paths
 * /dashboard/users, /dashboard/settings, and /dashboard/profile.
 */
import { NavLink } from "react-router";

export function NestedNav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard/users">Users</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
    </nav>
  );
}
