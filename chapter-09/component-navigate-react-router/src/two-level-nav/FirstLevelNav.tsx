/**
 * This component is used to demonstrate first-level routing.
 * It contains links to Home, Dashboard, and a Not-Found page.
 */
import { NavLink } from "react-router-dom";

export function FirstLevelNav() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/invalid">Not-Found</NavLink>
    </nav>
  );
}
