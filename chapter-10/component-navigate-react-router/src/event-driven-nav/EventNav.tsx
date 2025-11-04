/**
 * This component is used to demonstrate event-driven navigation.
 * It contains links to Home and Button pages.
 * The Home link and Button link are active when they are on
 * the respective pages.
 */
import { NavLink } from "react-router";

export function EventNav() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/button">Button</NavLink>
        <NavLink to="/invalid">Not-Found</NavLink>
      </nav>
    </>
  );
}
