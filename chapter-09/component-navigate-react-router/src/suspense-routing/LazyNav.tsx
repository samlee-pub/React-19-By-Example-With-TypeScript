/**
 * This component is used to display the navigation links
 * for the lazy loading and suspense example.
 * It contains links to the Home, Lazy Page, and Async Data User pages.
 */
import { NavLink } from "react-router-dom";

export function LazyNav() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/lazy-page">Lazy-Page</NavLink>
        <NavLink to="/async-data">Promise-Data-Page</NavLink>
        <NavLink to="/invalid">Not-Found</NavLink>
      </nav>
    </>
  );
}
