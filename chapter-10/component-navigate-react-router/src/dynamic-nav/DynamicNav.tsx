/**
 * This component is used to demonstrate dynamic navigation.
 * It contains links to Home, Dashboard Users, Settings,
 * and Profile pages.
 */
import { NavLink } from "react-router";

export function DynamicNav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard/users">Users</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
    </nav>
  );
}
