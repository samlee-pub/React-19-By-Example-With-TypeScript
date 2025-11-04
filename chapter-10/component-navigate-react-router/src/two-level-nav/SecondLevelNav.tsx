/**
 * This component is used to demonstrate second-level routing.
 * It contains links to Users, Settings, and Profile pages.
 */
import { NavLink } from "react-router";

export function SecondLevelNav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/dashboard/users">Users</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
    </nav>
  );
}
